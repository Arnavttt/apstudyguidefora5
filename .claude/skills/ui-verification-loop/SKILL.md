---
name: ui-verification-loop
description: Verify any user-facing change in the running site (stream UI, pages, CSS, badges, FAB/tutor). Use after every UI/behavior edit — includes the repo-specific hazards (hook file-mangling, cache-busting) and the a11y/mobile checklist.
---

# Purpose
Prove a change works in the real browser — desktop + mobile + keyboard + reduced-motion —
instead of assuming from code, and catch this repo's known corruption hazards before commit.

# When to use
After ANY edit to `assets/*.js|css`, course/unit HTML, `index.html`, or server responses the
UI renders. Before every commit that touches user-facing behavior.

# When NOT to use
Docs-only or test-only changes (still run the test suite).

# Required inputs
What changed, which page demonstrates it, expected observable behavior.

# Repository context to inspect first
- `.claude/launch.json` → `apsite-ai` config runs `serve-local.mjs` (site + `/api`, port 8765).
- Cache-busting: assets load with `?v=YYYYMMDD` — hard-refresh or bump when a change "doesn't appear".
- Known hazard log in CLAUDE.md (junk files, file truncation).

# Workflow
1. **Integrity gate first** (repo-specific): `node --check` every JS file you touched — a local
   hook has previously truncated a file mid-edit. Then check for 0-byte junk files in the repo
   root (names like `x.length)` or `{const`) and delete them; never stage them.
2. Start `apsite-ai` preview; navigate to the demonstrating page with a `?b=<timestamp>` buster.
3. Verify the behavior: interact (Start Stream → answer → feedback), read the DOM for the
   expected state, and capture proof (screenshot or DOM assertion).
4. Console must be error-free (`preview_console_logs` level=error → empty).
5. Responsive: re-check at 1280px and 375px — no overlap (feedback FAB bottom-right vs tutor
   bottom-left), no horizontal scroll, touch targets ≥44px.
6. Keyboard: Tab reaches controls with visible focus; Enter submits; A–E select MCQ choices.
7. Reduced motion: emulate `prefers-reduced-motion` — shimmer/loadbar/transiton-heavy elements
   must go static (CSS blocks exist; verify they cover new animations).
8. States: loading (bar/skeleton), error (fallback card with retry), empty (review-queue clear
   card), long content (no clipped text).
9. Run `node --test tests/*.test.js` before committing.

# Implementation standards
Never mark verified without executing the interaction. Text-based DOM checks preferred over
screenshots for assertions; screenshots for visual proof. One page fully verified beats five
pages "loaded".

# Positive patterns (repo-proven)
Honest status badges driven by a real `status` probe (never claim "ready" when the backend is
down); silent seeded fallback on AI failure; `aria-live` announcements for question changes;
skeleton + determinate-feel loading bar.

# Anti-patterns
"Set model/flag = done" without behavioral proof; console noise in shipped code (gate behind
`window.__FA_DEBUG__`); animations without reduced-motion coverage; fixed-corner widgets that
collide; infinite spinners with no timeout path; claiming a command passed without running it.

# Security requirements
While verifying, confirm no API keys/urls-with-tokens appear in page source, network panel, or
console output.

# Accessibility requirements
The checklist in the workflow IS the requirement: focus-visible, keyboard operability, labels,
contrast (per-course `--ACtext` tokens), reduced motion, 44px touch targets.

# Performance requirements
First question ≤ ~12s worst case (timeout → seeded); no layout shift when the card renders
(skeleton reserves space); no new render-blocking requests.

# Validation checklist
- [ ] `node --check` on touched JS; no junk files staged
- [ ] Behavior verified live with interaction + proof
- [ ] 0 console errors; mobile 375px + desktop pass
- [ ] Keyboard + reduced-motion pass
- [ ] Full test suite green

# Expected output
A short verification report: what was exercised, on which page/viewport, with proof, plus
test results.

# Source-reference mapping
Derived from this repository's verified incidents and shipped verification practice
(session work of 2026-07-01→03: badge-truth fix `8429673`, corruption recovery before
`669202f`, FAB/tutor collision layout `f78f774`). Instagram references were inaccessible
(`docs/reference-pattern-analysis.md`); nothing here derives from them.
