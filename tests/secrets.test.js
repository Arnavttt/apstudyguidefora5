/**
 * Five & A+ — secret-leak prevention tests.
 * Scans every git-TRACKED file for real-credential patterns and asserts the
 * env-file hygiene contract. Placeholders like "sk-ant-…" in docs are safe:
 * patterns below require full-length key bodies.
 * Run: node --test tests/secrets.test.js
 */
'use strict';
const { test } = require('node:test');
const assert = require('node:assert');
const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const tracked = execSync('git ls-files', { cwd: ROOT, encoding: 'utf8' })
  .split(/\r?\n/).filter(Boolean);

const TEXT_EXT = /\.(js|mjs|cjs|ts|json|html|css|md|txt|yml|yaml|toml|xml|svg|env|example|py|ps1)$/i;

// Full-length real-credential shapes only (placeholders/ellipses won't match).
const CREDENTIAL_PATTERNS = [
  { name: 'Anthropic API key', re: /sk-ant-[A-Za-z0-9_-]{24,}/ },
  { name: 'OpenAI/Groq-style key', re: /sk-[A-Za-z0-9_-]{32,}/ },
  { name: 'Groq key', re: /gsk_[A-Za-z0-9]{24,}/ },
  { name: 'AWS access key id', re: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: 'GitHub token', re: /\bgh[pousr]_[A-Za-z0-9]{36,}\b/ },
  { name: 'Slack token', re: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/ },
  { name: 'Private key block', re: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { name: 'Cloudflare API token assignment', re: /CLOUDFLARE_API_TOKEN\s*=\s*[A-Za-z0-9_-]{30,}/ }
];

test('no real credentials in any tracked file', () => {
  const hits = [];
  for (const f of tracked) {
    if (!TEXT_EXT.test(f)) continue;
    let body;
    try { body = fs.readFileSync(path.join(ROOT, f), 'utf8'); } catch (e) { continue; }
    for (const { name, re } of CREDENTIAL_PATTERNS) {
      if (re.test(body)) hits.push(f + ' -> ' + name);
    }
  }
  assert.deepStrictEqual(hits, [], 'credential-shaped strings found (REDACTED — see file list): ' + hits.join('; '));
});

test('.gitignore blocks env secret files but not .env.example', () => {
  const check = (target) => {
    try { return execSync('git check-ignore ' + target, { cwd: ROOT, encoding: 'utf8' }).trim().length > 0; }
    catch (e) { return false; } // exit 1 = not ignored
  };
  assert.ok(check('.env'), '.env must be git-ignored');
  assert.ok(check('.env.local'), '.env.local must be git-ignored');
  assert.ok(!check('.env.example'), '.env.example must NOT be ignored (it is the template)');
});

test('.env.example contains only empty or placeholder values', () => {
  const body = fs.readFileSync(path.join(ROOT, '.env.example'), 'utf8');
  for (const line of body.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.+)\s*$/);
    if (!m) continue;
    const [, key, val] = m;
    if (/KEY|TOKEN|SECRET/.test(key)) {
      assert.ok(val === '' || /replace|your|xxx|example|<.*>/i.test(val) || val.length < 12,
        key + ' in .env.example must be empty or an obvious placeholder, got a value of length ' + val.length);
    }
  }
});

test('no tracked .env.local / .env files', () => {
  const bad = tracked.filter((f) => /^\.env(\.local|\..*\.local)?$/.test(f));
  assert.deepStrictEqual(bad, [], 'secret env files are tracked: ' + bad.join(', '));
});
