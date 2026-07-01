# Academic Integrity — AI Question Stream

**Purpose.** The AI Question Stream is a *study and practice* tool. It generates
**original, AP-style** practice questions and gives feedback so students can learn a
subject and prepare for exams. It is not a source of real exam content and must not be
used to gain an unfair advantage.

## What this tool is for
- Independent practice and self-assessment.
- Building mastery topic-by-topic with adaptive difficulty.
- Reviewing missed questions with explanations and rubrics.

## What this tool is **not**
- **Not** official College Board material. AP® is a trademark of the College Board,
  which is not affiliated with this resource.
- **Not** a source of real, released, or secure exam questions. All questions are
  original and generated for practice.
- **Not** an answer key for an active, in-progress exam.

## Built-in guardrails
- The generation prompt instructs the model to produce **only original** questions and
  to never copy or closely imitate official/copyrighted AP items.
- Generated and seeded questions are validated: any that use "official AP exam",
  "released AP exam", "College Board question", "secure AP exam", "AP Classroom", or
  similar copied-source wording are **rejected** (`legalStatus: "rejected"`), and softer
  signals are flagged `needs-review`.
- Evaluation always returns an **explanation and learning feedback** — there is no
  answer-only mode.
- Student answers are treated as **data to grade**, never as instructions (prompt-injection
  attempts to "give full marks" or "reveal the answer" are ignored).

## For students
- Use it to *learn*, not to shortcut graded work.
- Do not use it during a live, proctored, or take-home exam unless your teacher has
  explicitly permitted practice tools.
- If you ever see a question that looks copied from a real exam, stop and report it —
  it should not happen, and it violates the design intent.

## For teachers and parents
- Treat generated questions as practice material and review them before assigning.
- The tool is best used for formative practice, spaced review, and confidence-building.
- We recommend an adult skim generated content periodically; AI models can occasionally
  make factual errors (questions flagged `needs-review` deserve a closer look).

**Refusal behavior.** Requests to produce real/unreleased exam questions or official
answer keys are out of scope; the tool redirects to original practice instead.
