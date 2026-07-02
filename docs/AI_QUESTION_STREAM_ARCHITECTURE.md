# AI Question Stream — Architecture & Requirement Map

**This repo is a vanilla-JS static site (no package.json / TypeScript / bundler / build step).**
The AI Question Stream foundation is fully implemented in that architecture. This document
maps the conventional `src/*` module layout (as commonly specified for a Next.js/TS build)
onto the actual files here, and records the audit evidence that every foundation requirement
is met. A parallel `src/*.ts` tree is intentionally **not** created — with no TS toolchain it
would be dead, un-compiled, duplicate code and would violate "preserve the existing app / do
not force a framework rewrite."

## Requested module → actual file

| Conventional path | Actual implementation |
|---|---|
| `src/types/questionStream.ts` | [`assets/qstream/types.js`](../assets/qstream/types.js) — JSDoc `@typedef`s for every type (APCourseId, QuestionType, APQuestion, EvaluationResult, TopicMastery, ReviewItem, StreamState, …), type-checkable via `tsc --checkJs` |
| `src/data/apCourses.ts` | `COURSE_IDS`, `COURSE_DISPLAY`, `SLUG_TO_ID`, `CATEGORY` in [`assets/qstream/core.js`](../assets/qstream/core.js) |
| `src/data/questionTypes.ts` | `QUESTION_TYPES`, `DIFFICULTIES`, `BLOOM_LEVELS`, `STREAM_MODES` in `core.js` |
| `src/data/courseFrameworks/*` | `framework` export in each of the 25 [`assets/qstream/data/ap-*.js`](../assets/qstream/data/) |
| `src/data/seededQuestions/*` | `seededQuestions` export in each `assets/qstream/data/ap-*.js` |
| `src/lib/ai/aiProvider.ts` + `providers/{ollama,anthropic,openai,fallback}.ts` | `pickProvider` / `runModel` / `callOllama` / `callAnthropic` / `callOpenAI` in [`api/question.js`](../api/question.js) |
| `src/lib/ai/promptTemplates.ts` | `GEN_SYSTEM` / `EVAL_SYSTEM` / `genUserPrompt` / `evalUserPrompt` in `api/question.js` |
| `src/lib/ai/jsonRepair.ts` | `extractJson` / `repairJson` in `api/question.js` and `core.js` |
| `src/lib/ai/validateQuestion.ts` | `validateQuestion` in `core.js` |
| `src/lib/ai/legalValidation.ts` | `legalCheck` + `OFFICIAL_MARKERS` / `SUSPICIOUS_MARKERS` in `core.js` |
| `src/lib/ai/answerEvaluator.ts` | `evaluateLocally` (offline) in `core.js` + `evaluate` action in `api/question.js` (AI) |
| `src/lib/questionStream/adaptiveEngine.ts` | `nextDifficulty` / `difficultyForMastery` / `stepDifficulty` in `core.js` |
| `src/lib/questionStream/mastery.ts` | `applyAttemptToMastery` / `MASTERY_DELTA` in `core.js` |
| `src/lib/questionStream/spacedRepetition.ts` | `scheduleReview` / `SPACED_INTERVALS` in `core.js` |
| `src/lib/questionStream/reviewQueue.ts` | `addToReviewQueue` / `removeReviewItem` / `dueReviewItems` in `core.js` |
| `src/lib/questionStream/questionSelection.ts` | `pickTopic` / `getQuestionTypeForCourse` / `pickSeeded` in `core.js` |
| `src/lib/storage/*` | `Store(courseId)` in [`assets/question-stream.js`](../assets/question-stream.js) (localStorage `qs-*-<courseId>`) with a built-in in-memory adapter fallback for private-browsing/no-`localStorage`; `clearProgress()` = `resetProgress()` |
| `src/components/question-stream/*` | The DOM builder in `assets/question-stream.js` (panel, controls, question card, answer inputs, feedback, rubric, mastery meter, difficulty badge, topic selector, review, dashboard, loading bar/skeleton, error fallback, reset button) |
| `app/api/question-stream/{next,evaluate,status}` | `POST /api/question` (`action: generate|evaluate|status`) in `api/question.js`, served locally by [`serve-local.mjs`](../serve-local.mjs) and deployable as a Cloudflare Worker |

## Phase-1 acceptance evidence (audited)

- **Courses:** 25 registered (all 23 required IDs present + `ap-calculus-ab`, `ap-statistics`); 0 missing.
- **Frameworks:** 25/25 complete — `displayName`, `description`, `category`, `allowedQuestionTypes`, `defaultQuestionTypes`, `skills`, `units` (each with `topics`), `examStructure`.
- **Seeded bank:** **256** original questions total (spec minimum 207). Every course ≥ 9, and every course meets the 3-easy / 3-medium / 2-hard(or exam-level) spread. 148 MCQ (4 choices + distractor rationales), 77 written (rubric/model answer).
- **Engine:** validation, legal check, mastery, adaptive difficulty, spaced repetition, review queue, offline evaluator, seeded selection, JSON repair — all present and unit-tested.
- **AI modes:** `ollama` → seeded, `auto` (Ollama→Anthropic→OpenAI→seeded), `anthropic`, `openai`, `fallback`. Server-side only; browser never calls Ollama directly; localhost SSRF guard; timeouts; client-side seeded fallback on any failure.
- **Storage:** localStorage per course + memory fallback; SSR-safe (static site; storage access wrapped in try/catch); `clearProgress()` present.
- **Tests:** `node --test tests/*.test.js` → **81/81 pass** (registry, every framework + seeded bank, legal validation, evaluator, mastery, adaptive, review/spaced-repetition, JSON repair, Ollama provider integration).

## Run

```bash
node serve-local.mjs                 # static site + /api on http://localhost:8765
node --test tests/*.test.js          # 81 tests
```

Full setup, privacy, integrity, and QA docs: `docs/OLLAMA_LOCAL_AI.md`,
`docs/PRIVACY_AI_QUESTION_STREAM.md`, `docs/ACADEMIC_INTEGRITY.md`,
`docs/AI_QUESTION_STREAM_QA_CHECKLIST.md`, `docs/AI_QUESTION_STREAM.md`.
