/**
 * Belher Dashboard Agent — Task 1 only (data.js update + commit/push)
 * Runs daily via GitHub Actions. Briefing is handled by a separate routine.
 */

import Anthropic from '@anthropic-ai/sdk';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

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
    description: 'Search Gmail threads. Returns subject, from, date, snippet for each thread.',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Gmail search query (same syntax as Gmail search bar)' },
        maxResults: { type: 'number', description: 'Max threads to return (default 15)' }
      },
      required: ['query']
    }
  },
  {
    name: 'gmail_get_thread',
    description: 'Get the full text body of a Gmail thread by threadId.',
    input_schema: {
      type: 'object',
      properties: {
        threadId: { type: 'string', description: 'The Gmail thread ID' }
      },
      required: ['threadId']
    }
  },
  {
    name: 'read_file',
    description: 'Read a file from the repo root.',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'File path relative to repo root (e.g. "data.js")' }
      },
      required: ['path']
    }
  },
  {
    name: 'write_file',
    description: 'Write content to a file in the repo. Only data.js — never touch index.html or dashboard_belher.html.',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'File path relative to repo root' },
        content: { type: 'string', description: 'Complete file content' }
      },
      required: ['path', 'content']
    }
  },
  {
    name: 'git_commit_push',
    description: 'Stage data.js, commit, and push to the main branch.',
    input_schema: {
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Commit message' }
      },
      required: ['message']
    }
  }
];

// ─── Tool implementations ─────────────────────────────────────────────────────
async function runTool(name, input, auth) {
  const gmail = google.gmail({ version: 'v1', auth });

  if (name === 'gmail_search_threads') {
    const res = await gmail.users.threads.list({
      userId: 'me',
      q: input.query,
      maxResults: input.maxResults || 15
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
        body: body.replace(/\r\n/g, '\n').slice(0, 3000)
      };
    });
  }

  if (name === 'read_file') {
    return fs.readFileSync(path.join(ROOT, input.path), 'utf-8');
  }

  if (name === 'write_file') {
    if (input.path === 'index.html' || input.path === 'dashboard_belher.html') {
      throw new Error('NOT ALLOWED: cannot modify HTML files');
    }
    fs.writeFileSync(path.join(ROOT, input.path), input.content, 'utf-8');
    return `OK: wrote ${input.path} (${input.content.length} chars)`;
  }

  if (name === 'git_commit_push') {
    const run = (cmd) => execSync(cmd, { cwd: ROOT, stdio: 'pipe' }).toString().trim();
    run('git config user.email "bot@agbelher.com"');
    run('git config user.name "Belher-Dashboard-Bot"');
    run(`git remote set-url origin "https://g${process.env.GH_PAT}@github.com/jcbeltran24/belher-dashboard.git"`);
    // stash local changes, pull latest main, then restore
    run('git stash');
    run('git pull --rebase origin main');
    run('git stash pop');
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
  console.log('🚀 Belher Dashboard Agent (Task 1 — data.js update)');

  const auth   = makeAuth();
  const claude = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  // Read only the Task 1 section from agent_prompt.md
  const agentPrompt = fs.readFileSync(path.join(ROOT, 'agent_prompt.md'), 'utf-8');

  const now = new Date();
  const dtMX = new Intl.DateTimeFormat('es-MX', {
    weekday: 'long', day: '2-digit', month: 'short', year: 'numeric',
    timeZone: 'America/Mexico_City'
  }).format(now);

  const systemPrompt = `${agentPrompt}

EJECUCIÓN AUTOMÁTICA — SOLO TASK 1:
- Fecha y hora actuales: ${dtMX} (${now.toISOString()})
- Ejecuta ÚNICAMENTE el Task 1 (actualizar data.js y hacer commit/push a main).
- NO ejecutes Task 2 (briefing Notion) — lo maneja otra rutina.
- Herramientas disponibles: gmail_search_threads, gmail_get_thread, read_file, write_file, git_commit_push.
- Reglas críticas: solo modifica data.js, escríbelo COMPLETO, nunca toques index.html ni dashboard_belher.html.`;

  const messages = [
    { role: 'user', content: 'Ejecuta Task 1: actualiza data.js con los emails de las últimas 24h y haz commit/push a main.' }
  ];

  let iter = 0;
  while (iter++ < 50) {
    console.log(`\n── iter ${iter} ──`);

    const resp = await callClaude(claude, {
      model: 'claude-opus-4-7',
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
          const out = await runTool(call.name, call.input, auth);
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
