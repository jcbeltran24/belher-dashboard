/**
 * Belher Morning Briefing Agent — Task 2 (Notion)
 * Runs daily via GitHub Actions after Task 1 (agent.js).
 * Reads Gmail + Google Calendar, generates a briefing with Claude, posts to Notion.
 */

import Anthropic from '@anthropic-ai/sdk';
import { google } from 'googleapis';
import { Client as NotionClient } from '@notionhq/client';
import { markdownToBlocks } from '@tryfabric/martian';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const BRIEFINGS_DB_ID = '8340beaa-c597-4add-8b0f-afb8a0edeecb';

const DAYS_SHORT   = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
const MONTHS_SHORT = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

// ─── Google OAuth2 ────────────────────────────────────────────────────────────
function makeAuth() {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  return auth;
}

// ─── Tool definitions ─────────────────────────────────────────────────────────
const TOOLS = [
  {
    name: 'gmail_search_threads',
    description: 'Search Gmail threads. Returns subject, from, date, snippet for each.',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Gmail search query (same syntax as Gmail search bar)' },
        maxResults: { type: 'number', description: 'Max threads to return (default 8, max 8)' }
      },
      required: ['query']
    }
  },
  {
    name: 'gmail_get_thread',
    description: 'Get full text body of a Gmail thread by threadId.',
    input_schema: {
      type: 'object',
      properties: { threadId: { type: 'string' } },
      required: ['threadId']
    }
  },
  {
    name: 'gcal_list_events',
    description: 'List Google Calendar events in a time range (ISO 8601).',
    input_schema: {
      type: 'object',
      properties: {
        timeMin: { type: 'string' },
        timeMax: { type: 'string' }
      },
      required: ['timeMin', 'timeMax']
    }
  },
  {
    name: 'create_briefing_page',
    description: 'Create the daily briefing page in the Notion "Morning Briefings" database. Call this EXACTLY ONCE at the end. Content must be full markdown.',
    input_schema: {
      type: 'object',
      properties: {
        title: { type: 'string', description: 'e.g. "☀️ Briefing · Jue 16 Abr 2026"' },
        date:  { type: 'string', description: 'YYYY-MM-DD' },
        empresas: {
          type: 'array',
          items: { type: 'string', enum: ['ABSA', 'ADM', 'Firma Norte', 'Grupo Belo'] }
        },
        content_markdown: { type: 'string', description: 'Full briefing content in markdown' }
      },
      required: ['title', 'date', 'empresas', 'content_markdown']
    }
  }
];

// ─── Tool implementations ─────────────────────────────────────────────────────
async function runTool(name, input, { auth, notion }) {
  const gmail    = google.gmail({ version: 'v1', auth });
  const calendar = google.calendar({ version: 'v3', auth });

  if (name === 'gmail_search_threads') {
    const res = await gmail.users.threads.list({
      userId: 'me', q: input.query, maxResults: Math.min(input.maxResults || 8, 8)
    });
    const threads = res.data.threads || [];
    const results = await Promise.all(threads.map(async (t) => {
      const th = await gmail.users.threads.get({
        userId: 'me', id: t.id, format: 'metadata',
        metadataHeaders: ['Subject', 'From', 'Date', 'To']
      });
      const msg = th.data.messages?.[0];
      const h = (n) => msg?.payload?.headers?.find(x => x.name.toLowerCase() === n.toLowerCase())?.value || '';
      return {
        threadId: t.id,
        subject: h('Subject'),
        from: h('From'),
        date: h('Date'),
        snippet: msg?.snippet || ''
      };
    }));
    return results;
  }

  if (name === 'gmail_get_thread') {
    const th = await gmail.users.threads.get({ userId: 'me', id: input.threadId, format: 'full' });
    return (th.data.messages || []).map(msg => {
      const h = (n) => msg.payload?.headers?.find(x => x.name.toLowerCase() === n.toLowerCase())?.value || '';
      let body = '';
      const extract = (part) => {
        if (part?.body?.data) body += Buffer.from(part.body.data, 'base64').toString('utf-8');
        (part?.parts || []).forEach(extract);
      };
      extract(msg.payload || {});
      return {
        subject: h('Subject'),
        from: h('From'),
        date: h('Date'),
        body: body.replace(/\r\n/g, '\n').slice(0, 1200)
      };
    });
  }

  if (name === 'gcal_list_events') {
    const res = await calendar.events.list({
      calendarId: 'primary',
      timeMin: input.timeMin,
      timeMax: input.timeMax,
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: 50
    });
    return (res.data.items || []).map(e => ({
      summary: e.summary,
      start: e.start?.dateTime || e.start?.date,
      end:   e.end?.dateTime   || e.end?.date,
      location: e.location,
      description: (e.description || '').slice(0, 500),
      attendees: (e.attendees || []).map(a => a.email)
    }));
  }

  if (name === 'create_briefing_page') {
    const blocks = markdownToBlocks(input.content_markdown);
    const resp = await notion.pages.create({
      parent: { database_id: BRIEFINGS_DB_ID },
      properties: {
        'Briefing':      { title:        [{ text: { content: input.title } }] },
        'Fecha':         { date:         { start: input.date } },
        'Empresa Focus': { multi_select: input.empresas.map(name => ({ name })) },
        'Status':        { select:       { name: 'Listo' } }
      },
      children: blocks
    });
    return `Briefing page created: ${resp.url}`;
  }

  throw new Error(`Unknown tool: ${name}`);
}

// ─── Rate-limit aware Claude call ────────────────────────────────────────────
async function callClaude(claude, params) {
  while (true) {
    try {
      return await claude.messages.create(params);
    } catch (err) {
      if (err.status === 429) {
        const wait = (parseInt(err.headers?.['retry-after'] || '60', 10) + 5) * 1000;
        console.log(`  ⏳ Rate limit — waiting ${Math.round(wait/1000)}s...`);
        await new Promise(r => setTimeout(r, wait));
        continue;
      }
      throw err;
    }
  }
}

// ─── Main agent loop ──────────────────────────────────────────────────────────
async function main() {
  console.log('☀️ Belher Morning Briefing Agent (Task 2 — Notion)');

  const auth   = makeAuth();
  const claude = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const notion = new NotionClient({ auth: process.env.NOTION_TOKEN });

  const agentPrompt = fs.readFileSync(path.join(ROOT, 'agent_prompt.md'), 'utf-8');

  const now     = new Date();
  const mxParts = now.toLocaleDateString('en-CA', { timeZone: 'America/Mexico_City' }).split('-');
  const year    = +mxParts[0];
  const month   = +mxParts[1];
  const day     = +mxParts[2];
  const wk      = new Date(Date.UTC(year, month - 1, day)).getUTCDay();

  const titleDate = `${DAYS_SHORT[wk]} ${String(day).padStart(2,'0')} ${MONTHS_SHORT[month-1]} ${year}`;
  const isoDate   = `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  const title     = `☀️ Briefing · ${titleDate}`;

  const systemPrompt = `${agentPrompt}

EJECUCIÓN AUTOMÁTICA — SOLO TASK 2 (Morning Briefing en Notion):
- Fecha actual (MX): ${titleDate} (${isoDate})
- Título obligatorio: "${title}"
- Ejecuta ÚNICAMENTE el Task 2. NO toques data.js — eso lo maneja otra rutina.
- Herramientas disponibles en este script (NO uses MCP): gmail_search_threads, gmail_get_thread, gcal_list_events, create_briefing_page.
- Para el briefing:
  1. Busca Gmail (newer_than:1d) con queries separadas para ABSA, ADM, Firma Norte.
  2. Lee cuerpos de correos relevantes con gmail_get_thread (máximo 4 threads).
  3. Lista eventos de calendario con gcal_list_events (hoy + próximos 3 días).
  4. Al final, llama create_briefing_page EXACTAMENTE UNA VEZ con el briefing completo en markdown.
- Estructura obligatoria del markdown (en español):
  ## Calendario de Hoy
  ## ABSA · Agrícola Belher
  ## ADM · Jalisco
  ## Firma Norte
  ## Action Items
  ## Observaciones
- empresas: incluir solo las que tengan actividad real + las que tengan eventos/action items.
- Si una sección no tiene actividad, escribe "Sin actividad." — no inventes datos.`;

  const messages = [
    { role: 'user', content: `Ejecuta Task 2: genera el morning briefing para ${titleDate} en Notion.` }
  ];

  let iter = 0;
  while (iter++ < 40) {
    console.log(`\n── iter ${iter} ──`);

    const resp = await callClaude(claude, {
      model: 'claude-sonnet-4-6',
      max_tokens: 16000,
      system: systemPrompt,
      messages,
      tools: TOOLS
    });

    console.log(`stop_reason: ${resp.stop_reason}`);
    messages.push({ role: 'assistant', content: resp.content });

    if (resp.stop_reason === 'end_turn') {
      const text = resp.content.filter(b => b.type === 'text').map(b => b.text).join('\n');
      console.log('\n✅ Finished:\n', text);
      break;
    }

    if (resp.stop_reason === 'tool_use') {
      const calls = resp.content.filter(b => b.type === 'tool_use');
      const results = [];
      for (const call of calls) {
        console.log(`  🔧 ${call.name}(${JSON.stringify(call.input).slice(0, 120)})`);
        try {
          const out = await runTool(call.name, call.input, { auth, notion });
          const str = typeof out === 'string' ? out : JSON.stringify(out);
          console.log(`  ✓ ${str.slice(0, 200)}`);
          results.push({ type: 'tool_result', tool_use_id: call.id, content: str });
        } catch (err) {
          console.error(`  ✗ ${err.message}`);
          results.push({ type: 'tool_result', tool_use_id: call.id, content: `Error: ${err.message}`, is_error: true });
        }
      }
      messages.push({ role: 'user', content: results });
    }
  }
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
