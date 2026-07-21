# Five & A+ — project instructions for Claude

## Mission
Free, independent AP® & college study site: 27 courses, 180 unit guides, ~4,900 built-in
MCQs, plus an adaptive **AI Question Stream** on all 25 AP course pages. No accounts, no
paywalls, works fully offline via a seeded question bank. Legally careful: original
"AP-style practice" only — never official College Board material (AP® trademark
disclaimer on every page).

## Core rules (always)
- Do what has been asked; nothing more, nothing less. Read a file before editing it.
- Never commit secrets, credentials, or `.env` files. Validate input at system boundaries.
- Preserve existing content, styling, headers/footers, and navigation when extending.

## Architecture (static site — no framework, no build step)
- **Pages:** root `index.html` + legal pages; `courses/*-overview.html` (thin shells that
  mount the stream); `units/*.html` (lesson content). All plain HTML/CSS/JS.
- **Question Stream engine:** `assets/qstream/core.js` — pure logic (registries,
  `validateQuestion`/`legalCheck`, mastery, adaptive difficulty, spaced repetition, local
  evaluator, JSON repair). Dual-export: `window.FAQS` + CommonJS for tests. Schema doc:
  `assets/qstream/types.js`.
- **Per-course data:** `assets/qstream/data/<courseId>.js` (framework + seeded bank).
  Gold template: `ap-calculus-bc.js`. Course ids live in FOUR maps in core.js
  (`COURSE_IDS`, `COURSE_DISPLAY`, `SLUG_TO_ID`, `CATEGORY`) — update all four.
- **Stream UI:** `assets/question-stream.js` + `question-stream.css`. Site-wide widgets
  (feedback FAB bottom-right, favicon injection) in `assets/app.js`; AI tutor
  (bottom-left) in `assets/ai-tutor.js|css`.
- **Server (local run or Worker only):** `api/question.js` — generate/evaluate/status
  with provider chain **Ollama → Anthropic → OpenAI → seeded**; SSRF localhost guard,
  timeouts, JSON repair, CORS allowlist, rate limit. `api/chat.js` = tutor.
  `serve-local.mjs` = zero-dep local server (site + `/api`, port 8765; loads
  `.env.local`). `wrangler.toml` deploys `api/question.js` for cross-device AI
  (`WORKER_ENDPOINT` slot in question-stream.js).
- **Invariant:** the browser NEVER calls providers/Ollama directly — only `/api/question`.
  The site must keep working with no backend at all (seeded fallback).

## Essential commands (all verified — there is no npm/lint/build)
- Run site + AI locally: `node serve-local.mjs` → http://localhost:8765
- Tests (Node built-in): `node --test tests/*.test.js`
- Syntax gate: `node --check <file.js>` (run on every JS file you touch)
- Preview in-app: launch config `apsite-ai` (`.claude/launch.json`)
- Deploy site: `git push` (GitHub Pages). Deploy AI Worker: `npx wrangler deploy`,
  key via `npx wrangler secret put ANTHROPIC_API_KEY` (see `docs/SECRETS_SETUP.md`)

## Skill routing
Before implementing, pick the SMALLEST relevant set from the project skills below; load
only those. Use implementation skills during the work, `ui-verification-loop` after
user-facing changes. Do not invoke every skill, and do not use the generic ruflo skills
(agentdb-*, github-*, swarm …) for repo work — they are not project-aware.

| Task type | Skill | Trigger | Required validation |
|---|---|---|---|
| Add/edit course, framework, seeded questions | `qstream-course-authoring` | touches `assets/qstream/data/*` or core.js registries | full test suite + live page check |
| Content/copy/prompt legality, blocked phrases | `legal-safety-review` | user-facing text, AI prompts, marketing claims | hardening tests + disclaimer check |
| Providers, keys, env, Worker, server AI | `secure-secrets-ai-provider` | touches `api/*`, `serve-local.mjs`, `wrangler.toml`, `.env*` | ollama+secrets tests, no secrets in diff |
| Any user-facing change | `ui-verification-loop` | touches `assets/*`, any HTML | live behavioral proof + console clean |

## Task-execution protocol
1. Inspect the relevant code before modifying.
2. Select skills per the table; protect uncommitted user work.
3. Implement completely (no TODO-stubs for core behavior).
4. `node --check` every touched JS **immediately after editing** (see hazards below).
5. `node --test tests/*.test.js` (course counts are asserted; adding a course requires
   bumping the `=== N` assertions in `tests/qstream.test.js`).
6. Verify user-facing behavior live in the preview (interact, don't assume).
7. Review security/accessibility/performance per the skill checklists.
8. Report exact results; never claim an unexecuted command passed.

## Security rules
- No secrets in code, docs, tests, logs, client bundles, or replies. Local key location:
  `.env.local` (git-ignored, loaded by serve-local). Prod: `wrangler secret`.
- `tests/secrets.test.js` scans tracked files for credential shapes — keep it green.
- AI calls are server-side only; sanitize provider errors; validate request bodies.
- Ollama URL stays localhost unless `QS_ALLOW_REMOTE_OLLAMA=1`. CORS via `QS_ALLOWED_ORIGINS`.
- If a real key is ever found tracked: don't print it, remove it, and state that rotation
  is required (deleting from the tip does not clean history).

## UI & UX rules
- Match the existing design tokens (`--AC`, `--ACtext`, parchment palette) and vanilla-JS
  style of each file. All AI/user text renders through `esc()`/`inlineMd()` — never raw HTML.
- Every async surface has loading (bar/skeleton), error (friendly fallback + retry), and
  empty states. AI source is always labeled honestly ("AI Source: …" badge driven by the
  real `status` probe).
- Accessibility floor: visible `:focus-visible`, keyboard operability (Enter submits, A–E
  choices), `aria-live` announcements, ≥44px touch targets on coarse pointers,
  `prefers-reduced-motion` coverage for every animation, per-course contrast via `--ACtext`.
- Corners are owned: feedback FAB bottom-right, AI tutor bottom-left — don't add more
  fixed-corner widgets.

## Anti-patterns (register — all bitten or blocked in this repo)
- **Hook file-mangling (real incident):** local hooks have truncated `api/question.js`
  mid-edit and dropped 0-byte junk files (names like `x.length)`, `{const`) in the repo
  root. Defense: `node --check` after every edit; delete junk files; never `git add .` —
  stage explicit paths only. (Destructive Pre/PostToolUse hooks were removed from
  `.claude/settings.json` on 2026-07-03; backup: `settings.json.pre-master-prompt.bak`.)
- Claiming official/released AP content or inflating marketing numbers (legal risk —
  validators + `legal-safety-review`).
- Trusting AI output without `validateQuestion` (invalid output must never render).
- "Set the flag = it works" — behavioral verification is mandatory.
- Console noise in shipped JS (gate diagnostics behind `window.__FA_DEBUG__`).
- Hand-editing generated files (`sitemap.xml` — regenerate by script).
- New env-name schemes (extend `normalizeEnv` aliases instead).
- Parallel `src/` or TypeScript trees — this repo is deliberately buildless vanilla JS.

## Definition of done
Behavior implemented AND verified live · relevant skills used · `node --check` + full
test suite green · security/a11y reviewed · docs updated when contracts change · no
secrets exposed · no junk files staged · no core TODO stubs left.

Reference analysis for the 2026-07-03 pattern task: `docs/reference-pattern-analysis.md`.
