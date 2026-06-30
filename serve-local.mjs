/**
 * Five & A+ — LOCAL server (static site + AI API, powered by Ollama on your PC)
 * ---------------------------------------------------------------------------
 * One command, no dependencies (Node 18+). Serves the whole site AND the
 * /api/question + /api/chat endpoints, routing AI to a local Ollama instance so
 * nothing leaves your machine and there are no API costs.
 *
 *   1. Install Ollama:           https://ollama.com/download
 *   2. Pull a model:             ollama pull llama3.1
 *      (Ollama runs a server on http://localhost:11434 automatically.)
 *   3. Start this:               node serve-local.mjs
 *   4. Open:                     http://localhost:8765/index.html
 *
 * Environment overrides (optional):
 *   PORT=8765                    port for this site server
 *   QS_OLLAMA_MODEL=llama3.1     Ollama model to use (bigger = better questions)
 *   OLLAMA_URL=http://localhost:11434
 */
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Readable } from 'node:stream';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = parseInt(process.env.PORT || '8765', 10);

// Force the workers to use local Ollama unless the user set a cloud key explicitly.
process.env.QS_PROVIDER = process.env.QS_PROVIDER || 'ollama';
process.env.OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';
process.env.QS_OLLAMA_MODEL = process.env.QS_OLLAMA_MODEL || process.env.OLLAMA_MODEL || 'llama3.1';
process.env.QS_ALLOWED_ORIGINS = process.env.QS_ALLOWED_ORIGINS || `http://localhost:${PORT}`;

const questionWorker = (await import('./api/question.js')).default;
const chatWorker = (await import('./api/chat.js')).default;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json'
};

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', () => resolve(Buffer.alloc(0)));
  });
}

async function routeApi(worker, req, res) {
  const body = await readBody(req);
  const request = new Request('http://localhost' + req.url, {
    method: req.method,
    headers: req.headers,
    body: req.method === 'GET' || req.method === 'HEAD' ? undefined : body
  });
  let response;
  try {
    response = await worker.fetch(request, process.env);
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Local handler error: ' + String(e && e.message || e) }));
    return;
  }
  const headers = {};
  response.headers.forEach((v, k) => { headers[k] = v; });
  res.writeHead(response.status, headers);
  if (response.body) Readable.fromWeb(response.body).pipe(res);
  else res.end();
}

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';
  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('Not found'); return;
  }
  readFile(filePath).then((data) => {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  }).catch(() => { res.writeHead(500); res.end('Read error'); });
}

const server = http.createServer(async (req, res) => {
  const pathname = req.url.split('?')[0];
  if (req.method === 'POST' || req.method === 'OPTIONS') {
    if (pathname === '/api/question') return routeApi(questionWorker, req, res);
    if (pathname === '/api/chat') return routeApi(chatWorker, req, res);
  }
  if (req.method === 'GET' || req.method === 'HEAD') return serveStatic(req, res);
  res.writeHead(405); res.end('Method not allowed');
});

server.listen(PORT, async () => {
  let ollamaOk = false, models = [];
  try {
    const r = await fetch(process.env.OLLAMA_URL.replace(/\/$/, '') + '/api/tags');
    if (r.ok) { ollamaOk = true; models = ((await r.json()).models || []).map((m) => m.name); }
  } catch (e) { /* not running */ }

  console.log('\n  Five & A+  —  local server with Ollama AI');
  console.log('  ----------------------------------------------------------');
  console.log('  Site:   http://localhost:' + PORT + '/index.html');
  console.log('  AI:     ' + process.env.OLLAMA_URL + '  (provider=ollama, model=' + process.env.QS_OLLAMA_MODEL + ')');
  if (ollamaOk) {
    console.log('  Ollama: running ✓   models: ' + (models.join(', ') || '(none pulled yet)'));
    if (!models.some((m) => m.split(':')[0] === process.env.QS_OLLAMA_MODEL.split(':')[0])) {
      console.log('  NOTE:   model "' + process.env.QS_OLLAMA_MODEL + '" not pulled. Run:  ollama pull ' + process.env.QS_OLLAMA_MODEL);
    }
  } else {
    console.log('  Ollama: NOT reachable. Install from https://ollama.com/download and run:  ollama pull ' + process.env.QS_OLLAMA_MODEL);
    console.log('          (The site still works — it falls back to the built-in question bank.)');
  }
  console.log('  ----------------------------------------------------------\n');
});
