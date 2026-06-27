# AI Question Stream

An AI-powered **adaptive practice question stream** embedded on every AP course
overview page of Five & A+. A student picks a course, scope (all units / one unit
/ one topic), and a mode (Practice / Exam / Review / Spaced), and gets an endless
stream of AP-style questions with immediate feedback, mastery tracking, a review
queue, and spaced repetition.

It works **with or without an AI key**:

- **AI mode** — when a server-side key is configured, questions are *generated*
  and written responses are *graded* by Claude (or OpenAI) through a small edge
  function (`api/question.js`). Keys live only on the server; the browser never
  sees them.
- **Offline / fallback mode** — when no key is configured (e.g. plain GitHub
  Pages), the stream serves an original, hand-checked **seeded question bank**
  shipped with each course. Objective answers are graded locally; written answers
  get a rubric + model answer for self-assessment. The feature never breaks.

---

## How it fits this repo

Five & A+ is a **static, vanilla-JS site** (no bundler, no framework, no Node
runtime in production — GitHub Pages). The original implementation spec was
written for a React/Next.js/TypeScript app; it has been adapted 1:1 onto the
existing site conventions, reusing the same pattern already proven by the AI
tutor widget (`assets/ai-tutor.js` + Cloudflare Worker `api/chat.js`).

| Spec concept (React/TS) | This repo (static vanilla JS) |
| --- | --- |
| `src/types/questionStream.ts` | JSDoc + the runtime validator in `assets/qstream/core.js` |
| `src/data/courseFrameworks/*` + `seededQuestions/*` | `assets/qstream/data/<courseId>.js` (framework **and** seeded bank per course) |
| `src/lib/questionStream/*` (adaptive, mastery, spaced, review, scoring) | pure functions in `assets/qstream/core.js` (`window.FAQS`) |
| `src/lib/ai/*` (provider, generator, evaluator, validate, jsonRepair) | client orchestration in `assets/question-stream.js` + server worker `api/question.js` |
| `src/lib/storage/*` | `localStorage` facade inside `assets/question-stream.js` |
| `src/components/question-stream/*` | DOM-building functions in `assets/question-stream.js` |
| `app/api/question-stream/*` routes | the `generate` / `evaluate` actions of `api/question.js` |
| Vitest tests | `tests/qstream.test.js` (Node built-in test runner, zero deps) |

### Files

```
assets/qstream/core.js            Pure logic: registry, schema validator, mastery,
                                  adaptive engine, spaced repetition, review queue,
                                  local evaluator, JSON repair. (browser + CommonJS)
assets/qstream/data/<id>.js       Per-course framework + seeded question bank (23 files)
assets/question-stream.js         Browser UI + storage + AI client (orchestrator)
assets/question-stream.css        Themed styles (uses each course's --AC accent token)
api/question.js                   Server-side AI: generate + evaluate (CF Worker / Vercel Edge)
qstream_inject.py                 Idempotent injector for the 23 course overview pages
tests/qstream.test.js             Test suite (node --test)
docs/AI_QUESTION_STREAM.md        This document
```

On a course page the injector adds, in `<head>`:

```html
<meta name="qs-course" content="ap-biology">
<link rel="stylesheet" href="../assets/question-stream.css?v=...">
<script src="../assets/qstream/core.js?v=..." defer></script>
<script src="../assets/qstream/data/ap-biology.js?v=..." defer></script>
<script src="../assets/question-stream.js?v=..." defer></script>
```

and a mount point inside the content column:

```html
<section class="qstream-section"><div class="qstream-mount" data-qs-course="ap-biology"></div></section>
```

---

## Supported courses (23)

`ap-art-history`, `ap-biology`, `ap-calculus-bc`, `ap-chemistry`,
`ap-comparative-government`, `ap-computer-science-a`,
`ap-computer-science-principles`, `ap-english-language`, `ap-english-literature`,
`ap-environmental-science`, `ap-european-history`, `ap-human-geography`,
`ap-macroeconomics`, `ap-microeconomics`, `ap-music-theory`, `ap-physics-1-2`,
`ap-physics-c-electricity-magnetism`, `ap-physics-c-mechanics`, `ap-precalculus`,
`ap-psychology`, `ap-us-government`, `ap-us-history`, `ap-world-history-modern`.

The site's course-page filenames differ from these stable IDs for 8 courses
(e.g. `ap-u-s-history` → `ap-us-history`). The mapping lives in
`SLUG_TO_ID` (both `core.js` and `qstream_inject.py`).

---

## Modes

- **Practice** — immediate feedback after each question; difficulty adapts to
  your mastery; explanations shown after submit.
- **Exam** — short 5-question sets with an AP-style difficulty spread; a set
  summary (score, accuracy, weak topics, recommended next) appears at the end.
- **Review** — pulls from your review queue (questions you missed), prioritizing
  items that are due.
- **Spaced** — like Review, but strictly ordered by spaced-repetition due dates.

## Adaptive engine

Mastery is tracked per **topic** (0–100). After each attempt:

| Difficulty | Correct | Incorrect |
| --- | --- | --- |
| easy | +5 | −4 |
| medium | +8 | −6 |
| hard | +12 | −8 |
| exam-level | +15 | −10 |

Difficulty band by mastery: 0–30 easy · 31–60 medium · 61–80 hard · 81–100
exam-level. Two misses in a row eases difficulty down a step; three correct in a
row pushes it up. Topic selection prefers your **weakest** topic (unless you pick
one), avoiding the same topic more than three times in a row once it is no longer
weak.

## Review queue + spaced repetition

A missed question is added to the review queue (due tomorrow). Re-answering it
correctly lengthens the interval: **+3d → +7d → +14d → mastered** (removed). A
miss resets the interval to **+1d** and raises its priority.

## Storage

Progress is stored in `localStorage`, scoped per course (private-browsing safe —
falls back to in-memory):

```
qs-progress-<courseId>   TopicMastery[]
qs-attempts-<courseId>   QuestionAttempt[] (last 200)
qs-review-<courseId>     ReviewItem[]
qs-cache-<courseId>      AI-generated questions cached for reuse (last 60)
qs-session-<courseId>    StreamState
```

No student data is ever sent to an AI provider beyond the current question and
the student's typed answer (only for grading written responses, only in AI mode).

---

## Enabling AI mode

Without a key the stream uses the seeded bank — nothing to configure. To turn on
live generation/grading, deploy `api/question.js` and point the client at it.

### 1. Deploy the edge function

**Cloudflare Workers** (same as the existing AI tutor):

```bash
npx wrangler deploy api/question.js --name fa-question-stream --compatibility-date 2024-01-01
npx wrangler secret put ANTHROPIC_API_KEY      # or OPENAI_API_KEY
```

Route it at `/api/question` on your domain (or set a custom endpoint — below).
**Vercel Edge**: drop `api/question.js` into a Vercel project's `api/` and add
`export const config = { runtime: 'edge' }`; it is already edge-compatible.

### 2. Environment variables (server only)

```
ANTHROPIC_API_KEY=...      # preferred provider
OPENAI_API_KEY=...         # used if ANTHROPIC_API_KEY is absent
QS_PROVIDER=auto           # auto | anthropic | openai   (auto = Anthropic first)
QS_ANTHROPIC_MODEL=claude-sonnet-4-6
QS_OPENAI_MODEL=gpt-4o-mini
```

Provider priority is **Anthropic → OpenAI → (none → client falls back to seeded)**.

### 3. Point the client at the endpoint (optional)

The client defaults to `/api/question`. To override (e.g. a separate Workers
domain), set this **before** `question-stream.js` loads:

```html
<script>window.__FA_QSTREAM_CONFIG__ = { aiEndpoint: 'https://fa-question-stream.example.workers.dev', aiEnabled: true };</script>
```

If a request fails (404, network, key missing, invalid JSON, validation failure),
the client disables AI for the rest of the session and silently uses seeded
questions. Every AI-generated question is re-validated in the browser against the
course framework before it is ever shown.

---

## Testing

```bash
node --test tests/qstream.test.js
```

Covers: the 23-course registry, slug→id mapping, **every** course data file
(framework shape + ≥9 valid, framework-aligned seeded questions), the MCQ and
numeric evaluators, the written self-grader, mastery up/down/clamp, adaptive
difficulty bands and streak rules, topic selection, the review queue, spaced
repetition, and JSON repair. The suite has **no dependencies** (Node 18+ built-in
runner).

Manual smoke test in the browser (no key needed): open any AP course overview
page, scroll to **AI Question Stream**, press **Start Stream**, answer a few MCQs,
and confirm feedback, the mastery meter, and the review queue update.

---

## Extending

### Add seeded questions to a course

Edit `assets/qstream/data/<courseId>.js` and append objects to `seededQuestions`.
Match the schema (see any existing entry). Each question's `unitId`/`topicId` must
exist in that file's `framework`, and its `questionType` must be in
`allowedQuestionTypes`. Run the tests — the validator enforces all of this.

### Add a new AP course

1. Add the id to `COURSE_IDS`, `COURSE_DISPLAY`, `CATEGORY`, and `SLUG_TO_ID` in
   `assets/qstream/core.js` (and the Python `SLUG_TO_ID` in `qstream_inject.py`).
2. Create `assets/qstream/data/<courseId>.js` (framework + ≥9 seeded questions)
   using an existing file as a template.
3. Run `python qstream_inject.py` to inject the mount into the course page.
4. `node --test tests/qstream.test.js`.

---

## Copyright & safety

- The system generates/organizes **original** AP-style practice. Course
  frameworks are conceptual organizational structures, **not** copied College
  Board materials, and **no official AP exam questions** are included.
- The validator rejects questions containing official-AP wording markers.
- For history/English stimulus questions the AI is instructed to write **short
  original** passages; Art History uses `imagePrompt` descriptions instead of
  copyrighted images; Music Theory uses text notation placeholders instead of
  audio.
- AP® and Advanced Placement® are trademarks of the College Board, which is not
  affiliated with and does not endorse this site.

## Known limitations

- GitHub Pages cannot run server code, so **out of the box the live site uses the
  seeded bank**. AI mode requires deploying `api/question.js` (Workers/Vercel) and
  is independent of the static host.
- Written-response auto-grading only happens in AI mode; offline it is rubric-
  based self-assessment.
- Coding questions are evaluated conceptually (by rubric/AI), not executed in a
  sandbox.
- The per-course frameworks are AP-aligned organizational structures sized for
  question generation, not exhaustive curriculum maps.

## Future improvements

- Optional sandbox execution for AP CSA coding answers.
- Server-side persistence / cross-device sync (currently `localStorage` only).
- Audio playback for Music Theory dictation.
- Richer exam-mode timing and a full mock-exam assembler.
