/**
 * Five & A+ — legal/copyright + JSON-repair hardening tests (core engine).
 * Run: node --test tests/hardening.test.js
 */
'use strict';
const { test } = require('node:test');
const assert = require('node:assert');
const FAQS = require('../assets/qstream/core.js');

function validMcq(over) {
  return Object.assign({
    id: 'q-test', courseId: 'ap-biology', courseName: 'AP Biology',
    unitId: 'u', topicId: 't', questionType: 'mcq',
    prompt: 'Which organelle is the primary site of photosynthesis in a plant cell?',
    answerChoices: [{ id: 'A', text: 'Chloroplast' }, { id: 'B', text: 'Mitochondrion' },
      { id: 'C', text: 'Nucleus' }, { id: 'D', text: 'Ribosome' }],
    correctAnswer: 'A', distractorRationales: { B: 'makes ATP, not sugar' },
    explanation: 'Chloroplasts contain chlorophyll and carry out the light reactions.',
    difficulty: 'medium'
  }, over || {});
}

// ── legalCheck ────────────────────────────────────────────────────────────────
test('legalCheck: clean original question → original-practice', () => {
  const r = FAQS.legalCheck(validMcq());
  assert.strictEqual(r.legalStatus, 'original-practice');
  assert.strictEqual(r.legalReviewNotes.length, 0);
});

test('legalCheck: official/released/secure AP wording → rejected', () => {
  const phrases = [
    'This is a released AP Exam question from the 2019 AP Exam.',
    'Official AP question: which of the following...',
    'Secure AP exam material — do not distribute.',
    'This College Board question tests...',
    'Reproduced from an AP Classroom quiz.',
    '© College Board'
  ];
  for (const p of phrases) {
    assert.strictEqual(FAQS.legalCheck({ prompt: p }).legalStatus, 'rejected', p);
  }
});

test('legalCheck: overlong stimulus → needs-review', () => {
  const long = 'x'.repeat(1300);
  const r = FAQS.legalCheck({ prompt: 'ok', stimulus: long });
  assert.strictEqual(r.legalStatus, 'needs-review');
  assert.ok(r.legalReviewNotes.some((n) => /stimulus exceeds/.test(n)));
});

// ── validateQuestion integration ──────────────────────────────────────────────
test('validateQuestion: stamps legalStatus on a clean MCQ', () => {
  const res = FAQS.validateQuestion(validMcq());
  assert.strictEqual(res.valid, true, res.errors.join('; '));
  assert.strictEqual(res.legalStatus, 'original-practice');
  assert.strictEqual(res.repairedQuestion.legalStatus, 'original-practice');
});

test('validateQuestion: rejects an MCQ that copies official wording', () => {
  const res = FAQS.validateQuestion(validMcq({
    prompt: 'Question 1 refers to the following excerpt from the 2018 AP Exam about cells.'
  }));
  assert.strictEqual(res.valid, false);
  assert.ok(res.errors.some((e) => /official-AP wording/.test(e)));
  assert.strictEqual(res.repairedQuestion.legalStatus, 'rejected');
});

test('validateQuestion: suspicious source downgrades reviewStatus to needs-review', () => {
  const res = FAQS.validateQuestion(validMcq({
    reviewStatus: 'approved',
    stimulus: 'Reprinted with permission from a textbook chapter.'
  }));
  assert.strictEqual(res.repairedQuestion.legalStatus, 'needs-review');
  assert.strictEqual(res.repairedQuestion.reviewStatus, 'needs-review');
});

// ── repairJson ────────────────────────────────────────────────────────────────
test('repairJson: fixes trailing commas, fences, smart quotes, comments', () => {
  assert.deepStrictEqual(FAQS.repairJson('{"a":1,}'), { a: 1 });
  assert.deepStrictEqual(FAQS.repairJson('```json\n{"a":1,"b":[1,2,]}\n```'), { a: 1, b: [1, 2] });
  assert.deepStrictEqual(FAQS.repairJson('{“a”:1}'), { a: 1 });
  assert.deepStrictEqual(FAQS.repairJson('{"a":1} // trailing note'), { a: 1 });
  assert.strictEqual(FAQS.repairJson('totally not json'), null);
});

test('extractJson falls through to repair for near-valid output', () => {
  const obj = FAQS.extractJson('Here: {"questions":[{"id":"a"},]}');
  assert.ok(obj && Array.isArray(obj.questions) && obj.questions.length === 1);
});

// ── Phase-2 additions: extra legal phrases + raw-HTML rejection ────────────────
test('legalCheck: rejects leaked/unreleased/actual/real AP-exam phrasing', () => {
  const phrases = [
    'This is a leaked AP exam question.',
    'From an unreleased AP exam.',
    'This is an actual AP test question.',
    'Here is the real AP exam answer.'
  ];
  for (const p of phrases) assert.strictEqual(FAQS.legalCheck({ prompt: p }).legalStatus, 'rejected', p);
});

test('validateQuestion: rejects raw HTML tags in text fields', () => {
  const res = FAQS.validateQuestion(validMcq({ prompt: 'Pick the best: <img src=x onerror=alert(1)> which organelle?' }));
  assert.strictEqual(res.valid, false);
  assert.ok(res.errors.some((e) => /raw HTML/.test(e)));
});

test('validateQuestion: math inequalities (x < 5) are NOT flagged as HTML', () => {
  const res = FAQS.validateQuestion(validMcq({ prompt: 'For which value is x < 5 and y > 2 both true in this cell model?' }));
  assert.strictEqual(res.valid, true, res.errors.join('; '));
});
