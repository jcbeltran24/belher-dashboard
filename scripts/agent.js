/**
 * Belher Dashboard Agent — Task 1 only (data.js update + commit/push)
 * Lean architecture: reads only dynamic sections, patches only what changed.
 */

import Anthropic from '@anthropic-ai/sdk';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function makeAuth() {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  return auth;
}

// ─── Array section replacer (preserves all comments & formatting outside) ────
function replaceArraySection(content, keyword, newArray) {
  const marker = `${keyword}: [`;
  const start = content.indexOf(marker);
  if (start === -1) throw new Error(`Section "${keyword}" not found in data.js`);
  const arrOpen = start + marker.length - 1; // index of '['
  let depth = 0, i = arrOpen;
  while (i < content.length) {
    if (content[i] === '[') depth++;
    else if (content[i] === ']') { depth--; if (depth === 0) break; }
    i++;
  }
  const arrClose = i; // index of closing ']'
  const indent = '    ';
  const inner = newArray.map(item => indent + JSON.stringify(item)).join(',\n');
  const newSection = `[\n${inner}\n  ]`;
  return content.slice(0, arrOpen) + newSection + content.slice(arrClose + 1);
}

function prependToArray(content, keyword, newItems) {
  const marker = `${keyword}: [`;
  const idx = content.indexOf(marker);
  if (idx === -1) throw new Error(`Section "${keyword}" not found`);
  const insertAt = idx + marker.length;
  const indent = '    ';
  const newStr = newItems.map(item => `\n${indent}${JSON.stringify(item)},`).join('');
  return content.slice(0, insertAt) + newStr + content.slice(insertAt);
}

// ─── Tool definitions ──────────────────────────────────────────────────────────
const TOOLS = [
  {
    name: 'gmail_search_threads',
    description: 'Search Gmail threads. Returns subject, from, date, snippet.',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string' },
        maxResults: { type: 'number', description: 'Max 6' }
      },
      required: ['query']
    }
  },
  {
    name: 'gmail_get_thread',
    description: 'Get body of a Gmail thread (first 800 chars).',
    input_schema: {
      type: 'object',
      properties: { threadId: { type: 'string' } },
      required: ['threadId']
    }
  },
  {
    name: 'read_data_summary',
    description: 'Get current meta, alertas, and recent correos from data.js. Use BEFORE calling patch_data.',
    input_schema: { type: 'object', properties: {} }
  },
  {
    name: 'patch_data',
    description: 'Apply targeted updates to data.js. Only include fields that actually changed. Preserves all other content.',
    input_schema: {
      type: 'object',
      properties: {
        meta: {
          type: 'object',
          description: 'Update meta fields. Only include changed ones.',
          properties: {
            fecha:       { type: 'string', description: 'e.g. "Viernes 17 Abr 2026"' },
            semana:      { type: 'string', description: 'e.g. "WK 17"' },
            actualizado: { type: 'string', description: 'e.g. "17/04/2026 · 07:00"' }
          }
        },
        alertas: {
          type: 'array',
          description: 'Replace entire alertas array. Each item: {nivel: "success"|"warning"|"danger"|"info", texto: string}',
          items: { type: 'object' }
        },
        correos_add: {
          type: 'array',
          description: 'New correos to prepend (today\'s only, skip duplicates). Each: {hora, asunto, de, leido:false, fecha}',
          items: { type: 'object' }
        }
      }
    }
  },
  {
    name: 'git_commit_push',
    description: 'Commit and push data.js to main.',
    input_schema: {
      type: 'object',
      properties: { message: { type: 'string' } },
      required: ['message']
    }
  }
];

// ─── Tool implementations ──────────────────────────────────────────────────────
async function runTool(name, input, auth) {
  const gmail = google.gmail({ version: 'v1', auth });

  if (name === 'gmail_search_threads') {
    const res = await gmail.users.threads.list({
      userId: 'me', q: input.query, maxResults: Math.min(input.maxResults || 6, 6)
    });
    const threads = res.data.threads || [];
    const results = await Promise.all(threads.map(async (t) => {
      const th = await gmail.users.threads.get({
        userId: 'me', id: t.id, format: 'metadata',
        metadataHeaders: ['Subject', 'From', 'Date']
      });
      const msg = th.data.messages?.[0];
      const h = (n) => msg?.payload?.headers?.find(x => x.name.toLowerCase() === n.toLowerCase())?.value || '';
      return { threadId: t.id, subject: h('Subject'), from: h('From'), date: h('Date'), snippet: msg?.snippet || '' };
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
      return { subject: h('Subject'), from: h('From'), date: h('Date'), body: body.replace(/\r\n/g, '\n').slice(0, 800) };
    });
  }

  if (name === 'read_data_summary') {
    const content = fs.readFileSync(path.join(ROOT, 'data.js'), 'utf-8');
    const lines = content.split('\n');
    // meta block (lines 1-6 approx)
    const metaEnd = lines.findIndex((l, i) => i > 1 && /^\s*\},/.test(l));
    const metaLines = lines.slice(0, metaEnd + 1).join('\n');
    // alertas block (find + next 20 lines)
    const alIdx = lines.findIndex(l => l.includes('alertas: ['));
    const alertasLines = lines.slice(alIdx, alIdx + 22).join('\n');
    // correos block (find + next 12 lines)
    const coIdx = lines.findIndex(l => l.includes('correos: ['));
    const correosLines = lines.slice(coIdx, coIdx + 12).join('\n');
    return `${metaLines}\n\n  // ...static financial data...\n\n  ${alertasLines}\n  // ...\n\n  ${correosLines}\n  // ...`;
  }

  if (name === 'patch_data') {
    const filePath = path.join(ROOT, 'data.js');
    let content = fs.readFileSync(filePath, 'utf-8');

    if (input.meta) {
      if (input.meta.fecha)       content = content.replace(/fecha:\s*"[^"]*"/, `fecha: "${input.meta.fecha}"`);
      if (input.meta.semana)      content = content.replace(/semana:\s*"[^"]*"/, `semana: "${input.meta.semana}"`);
      if (input.meta.actualizado) content = content.replace(/actualizado:\s*"[^"]*"/, `actualizado: "${input.meta.actualizado}"`);
    }
    if (input.alertas) {
      content = replaceArraySection(content, 'alertas', input.alertas);
    }
    if (input.correos_add && input.correos_add.length > 0) {
      content = prependToArray(content, 'correos', input.correos_add);
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    return `OK: patched data.js (meta=${!!input.meta}, alertas=${!!input.alertas}, correos_add=${input.correos_add?.length || 0})`;
  }

  if (name === 'git_commit_push') {
    const run = (cmd) => execSync(cmd, { cwd: ROOT, stdio: 'pipe' }).toString().trim();
    run('git config user.email "bot@agbelher.com"');
    run('git config user.name "Belher-Dashboard-Bot"');
    run(`git remote set-url origin "https://${process.env.GH_PAT}@github.com/jcbeltran24/belher-dashboard.git"`);
    try { run('git stash'); } catch (_) {}
    run('git pull --rebase origin main');
    try { run('git stash pop'); } catch (_) {}
    run('git add data.js');
    try {
      run(`git commit -m "${input.message.replace(/"/g, "'")}"`);
    } catch (e) {
      if (e.message.includes('nothing to commit')) return 'Nothing to commit — data.js unchanged.';
      throw e;
    }
    run('git push origin main');
    return 'Committed and pushed to main ✓';
  }

  throw new Error(`Unknown tool: ${name}`);
}

// ─── Rate-limit aware Claude call ─────────────────────────────────────────────
async function callClaude(claude, params) {
  while (true) {
    try {
      return await claude.messages.create(params);
    } catch (err) {
      if (err.status === 429) {
        const wait = (parseInt(err.headers?.['retry-after'] || '60', 10) + 5) * 1000;
        console.log(`  ⏳ Rate limit — waiting ${Math.round(wait / 1000)}s...`);
        await new Promise(r => setTimeout(r, wait));
        continue;
      }
      throw err;
    }
  }
}

// ─── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🚀 Belher Dashboard Agent (Task 1 — data.js update)');

  const auth   = makeAuth();
  const claude = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const agentPrompt = fs.readFileSync(path.join(ROOT, 'agent_prompt.md'), 'utf-8');

  const now = new Date();
  const dtMX = new Intl.DateTimeFormat('es-MX', {
    weekday: 'long', day: '2-digit', month: 'short', year: 'numeric',
    timeZone: 'America/Mexico_City'
  }).format(now);

  const systemPrompt = `${agentPrompt}

EJECUCIÓN AUTOMÁTICA — SOLO TASK 1:
- Fecha y hora: ${dtMX} (${now.toISOString()})
- Herramientas: gmail_search_threads, gmail_get_thread, read_data_summary, patch_data, git_commit_push.
- Flujo obligatorio:
  1. Busca Gmail últimas 24h (máx 2 búsquedas, 6 resultados c/u).
  2. Lee máximo 3 threads relevantes con gmail_get_thread.
  3. Llama read_data_summary para ver estado actual.
  4. Llama patch_data UNA VEZ con todos los cambios.
  5. Llama git_commit_push.
- NO uses write_file ni read_file — solo patch_data modifica data.js.
- patch_data preserva todo el archivo excepto los campos que indiques.`;

  const messages = [
    { role: 'user', content: 'Ejecuta Task 1: actualiza data.js con los emails de las últimas 24h y haz commit/push a main.' }
  ];

  let iter = 0;
  while (iter++ < 20) {
    console.log(`\n── iter ${iter} ──`);
    const resp = await callClaude(claude, {
      model: 'claude-sonnet-4-6',
      max_tokens: 4000,
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

    if (resp.stop_reason === 'max_tokens') {
      console.error('⚠️ max_tokens hit — aborting.');
      break;
    }

    if (resp.stop_reason === 'tool_use') {
      const calls = resp.content.filter(b => b.type === 'tool_use');
      const results = [];
      for (const call of calls) {
        console.log(`  🔧 ${call.name}(${JSON.stringify(call.input).slice(0, 100)})`);
        try {
          const out = await runTool(call.name, call.input, auth);
          const str = typeof out === 'string' ? out : JSON.stringify(out);
          console.log(`  ✓ ${str.slice(0, 150)}`);
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
