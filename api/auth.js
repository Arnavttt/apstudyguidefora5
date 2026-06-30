/**
 * Five & A+ — Edge auth module (stateless HS256 signed tokens)
 * Compatible with: Cloudflare Workers · Vercel Edge Functions
 *
 * Why this exists:
 *   api/question.js and api/chat.js are gated only by a CORS allow-list and an
 *   in-memory per-IP rate limiter. The `Origin` header is trivially forged by any
 *   non-browser client, so without request auth anyone can call the endpoints and
 *   burn the owner's AI credits. This module adds a stateless bearer token the
 *   site presents on each call. No database — the token is self-contained and
 *   verified with HMAC-SHA256 over a server-only secret.
 *
 * Environment variables (server-side only — NEVER exposed to the browser):
 *   AUTH_SECRET   — required. Long random string used as the HMAC key.
 *                   Generate: openssl rand -base64 48
 *                   Set:      npx wrangler secret put AUTH_SECRET
 *   AUTH_TTL      — optional. Default token lifetime in seconds (default 3600).
 *
 * Token format: compact JWS (RFC 7515), HS256.
 *   base64url({"alg":"HS256","typ":"JWT"}) . base64url(claims) . base64url(sig)
 *
 * Usage in a worker:
 *   import { requireAuth } from './auth.js';
 *   const auth = await requireAuth(request, env);
 *   if (!auth.ok) return reply({ error: 'Unauthorized' }, 401);
 *   // ...auth.claims is the verified payload
 *
 * Minting (e.g. a small sign-in / token-vendor endpoint, or a build step):
 *   import { issueToken } from './auth.js';
 *   const token = await issueToken({ sub: 'site' }, env);
 */

const ENC = new TextEncoder();

// Minimum secret strength. A non-empty but weak secret (e.g. "test") still
// produces verifiable tokens and is brute-forceable, so treat anything below a
// real-entropy floor the same as "unconfigured" and fail closed.
const MIN_SECRET_LEN = 32;
function validSecret(env) {
  const s = env && env.AUTH_SECRET;
  return typeof s === 'string' && s.trim().length >= MIN_SECRET_LEN ? s : null;
}

// ── base64url (no padding) ───────────────────────────────────────────────────
function b64urlFromBytes(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function bytesFromB64url(str) {
  let s = String(str).replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function b64urlFromString(str) { return b64urlFromBytes(ENC.encode(str)); }
function stringFromB64url(str) { return new TextDecoder().decode(bytesFromB64url(str)); }

// ── HMAC key + signature ─────────────────────────────────────────────────────
async function importKey(secret) {
  return crypto.subtle.importKey(
    'raw', ENC.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false, ['sign']
  );
}
async function signBytes(signingInput, secret) {
  const key = await importKey(secret);
  const sig = await crypto.subtle.sign('HMAC', key, ENC.encode(signingInput));
  return new Uint8Array(sig);
}

// Constant-time comparison over raw bytes. Compares full length regardless of
// where the first mismatch occurs so verification time can't leak the signature.
function timingSafeEqual(a, b) {
  if (!(a instanceof Uint8Array) || !(b instanceof Uint8Array)) return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

// ── Mint ─────────────────────────────────────────────────────────────────────
/**
 * Issue a signed token. Fails closed if AUTH_SECRET is not configured.
 * @param {object} claims  Caller claims (e.g. { sub: 'site' }). iat/exp are added.
 * @param {object} env     Worker env (must contain AUTH_SECRET).
 * @param {number} [ttlSeconds]  Override lifetime; defaults to env.AUTH_TTL or 3600.
 */
export async function issueToken(claims, env, ttlSeconds) {
  const secret = validSecret(env);
  if (!secret) throw new Error('AUTH_SECRET not configured or too weak (need >= ' + MIN_SECRET_LEN + ' chars)');
  const now = Math.floor(Date.now() / 1000);
  const ttl = ttlSeconds || Number(env.AUTH_TTL) || 3600;
  const payload = Object.assign({}, claims, { iat: now, exp: now + ttl });
  const header = { alg: 'HS256', typ: 'JWT' };
  const signingInput =
    b64urlFromString(JSON.stringify(header)) + '.' + b64urlFromString(JSON.stringify(payload));
  const sig = await signBytes(signingInput, secret);
  return signingInput + '.' + b64urlFromBytes(sig);
}

// ── Verify ───────────────────────────────────────────────────────────────────
/**
 * Verify a token's signature and expiry. Returns { ok, claims, reason }.
 * Never throws on malformed input; fails closed if AUTH_SECRET is missing.
 */
export async function verifyToken(token, env) {
  const secret = validSecret(env);
  if (!secret) return { ok: false, reason: 'server_misconfigured' };
  if (typeof token !== 'string' || token.length > 4096) return { ok: false, reason: 'malformed' };

  const parts = token.split('.');
  if (parts.length !== 3) return { ok: false, reason: 'malformed' };
  const [h, p, s] = parts;

  // Verify the signature BEFORE trusting any claim bytes.
  let expected;
  try { expected = await signBytes(h + '.' + p, secret); }
  catch (e) { return { ok: false, reason: 'server_misconfigured' }; }

  let provided;
  try { provided = bytesFromB64url(s); }
  catch (e) { return { ok: false, reason: 'malformed' }; }

  if (!timingSafeEqual(provided, expected)) return { ok: false, reason: 'bad_signature' };

  // Signature is valid — now the header/payload can be trusted enough to parse.
  let header, claims;
  try { header = JSON.parse(stringFromB64url(h)); claims = JSON.parse(stringFromB64url(p)); }
  catch (e) { return { ok: false, reason: 'malformed' }; }

  if (!header || header.alg !== 'HS256') return { ok: false, reason: 'bad_alg' };

  const now = Math.floor(Date.now() / 1000);
  if (typeof claims.exp !== 'number' || now >= claims.exp) return { ok: false, reason: 'expired' };
  if (typeof claims.iat === 'number' && claims.iat > now + 60) return { ok: false, reason: 'not_yet_valid' };

  return { ok: true, claims };
}

// ── Worker guard ─────────────────────────────────────────────────────────────
/**
 * Extract a bearer token from the request and verify it.
 * Returns { ok, claims, reason }. Wire into a worker:
 *
 *   const auth = await requireAuth(request, env);
 *   if (!auth.ok) return reply({ error: 'Unauthorized' }, 401);
 */
export async function requireAuth(request, env) {
  const header = (request && request.headers && request.headers.get('Authorization')) || '';
  const m = /^Bearer\s+(.+)$/i.exec(header.trim());
  if (!m) return { ok: false, reason: 'missing_token' };
  return verifyToken(m[1].trim(), env);
}

export default { issueToken, verifyToken, requireAuth };
