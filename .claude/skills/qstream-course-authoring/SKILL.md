---
name: qstream-course-authoring
description: Add or modify an AP course, its framework, or its seeded question bank in the AI Question Stream. Use whenever a task adds a course, edits assets/qstream/data/*, changes core.js course registries, or touches seeded questions.
---

# Purpose
Ship a new or changed course in the Question Stream with zero registry drift: data file,
registration, page, homepage card, tests, and counts all consistent.

# When to use
- Adding an AP/college course; editing frameworks, units/topics, or seeded questions.
- Changing `COURSE_IDS`, `COURSE_DISPLAY`, `SLUG_TO_ID`, `CATEGORY`, or type mixes.

# When NOT to use
- UI/rendering changes (use `ui-verification-loop`), provider/server work (use
  `secure-secrets-ai-provider`), pure content edits to unit lesson pages.

# Required inputs
Course name + stable kebab id (`ap-*`), unit/topic outline, exam structure, ≥9 original
questions (≥3 MCQ, ≥1 written w/ rubric+modelAnswer).

# Repository context to inspect first
- `assets/qstream/core.js` — the four registries + `validateQuestion`/`legalCheck`.
- `assets/qstream/data/ap-calculus-bc.js` — GOLD TEMPLATE (framework shape, dual-export footer).
- `assets/qstream/types.js` — schema contract. `tests/qstream.test.js` — the `=== N` course-count assertions.
- `courses/ap-*-overview.html` (18-line shell pattern), homepage `index.html` course grid + stats numbers.

# Workflow
1. Register the id in all four `core.js` maps (missing one breaks slug routing or category mixes).
2. Create `assets/qstream/data/<id>.js` mirroring the gold template exactly (IIFE, `framework`,
   `seededQuestions`, dual-export `DATA`). No runtime registry mutation inside data files.
3. Bump the two hardcoded course-count assertions in `tests/qstream.test.js`.
4. Create `courses/<id>-overview.html` from an existing shell: theme `--AC` vars, `<meta name="qs-course">`,
   the 4 script tags, `qstream-mount` with `data-qs-course`, full footer + AP® disclaimer, meta description.
5. Add homepage card; update homepage course-count claims ONLY to verified numbers.
6. Regenerate `sitemap.xml` (scripted from real files — never hand-edit counts).
7. `node --check` every touched JS, run full tests, live-verify the page (see `ui-verification-loop`).

# Implementation standards
Vanilla JS (var/function style of core.js), no build step, no new deps. Every question passes
`validateQuestion(q, framework)`: unique id, courseId matches, unitId/topicId exist in the
framework, MCQ = 4 choices + correctAnswer among ids + distractorRationales, written = rubric
rows `{id,pointValue,criterion,evidenceRequired}` + modelAnswer, calculation = numeric answer +
`numericTolerance` + ≥20-char explanation. MathJax via `\( ... \)`.

# Positive patterns (repo-proven)
Progressive seeded fallback (`pickSeeded` relaxation chain); deterministic seeds for
repeat-avoidance; framework-driven type mixes; per-course localStorage keys `qs-*-<courseId>`.

# Anti-patterns
Registry mutation from data files; hand-edited marketing counts; copying College Board text
(see `legal-safety-review`); placeholder/filler questions; duplicate prompts; editing
generated `sitemap.xml` by hand; forgetting the `=== N` test bump (suite fails).

# Security requirements
No network calls from data files; no HTML in question text (validator rejects raw tags).

# Accessibility requirements
Course page shell keeps skip-link, labels, and footer disclaimer; stream a11y is inherited —
do not fork the panel markup per course.

# Performance requirements
Seeded bank stays static JS (~10-20 questions/course); no extra network requests per page.

# Validation checklist
- [ ] `node --test tests/*.test.js` all pass (count assertions updated)
- [ ] `node --check` on every touched JS file
- [ ] Page loads in preview: stream mounts, Start draws a question, answer grades, 0 console errors
- [ ] Homepage numbers match `git ls-files` reality
- [ ] Disclaimer present on the new page

# Expected output
Data file + registrations + page + card + passing tests + live verification evidence.

# Source-reference mapping
Derived from this repository's shipped architecture (commits `49e197e`…`e00c77a`, the
AP Calculus AB / AP Statistics additions). Instagram references I01–I14 were inaccessible —
see `docs/reference-pattern-analysis.md`; nothing here is derived from them.
