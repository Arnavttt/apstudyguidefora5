/**
 * Five & A+ — AI Question Stream · test suite
 * Run: node --test tests/qstream.test.js   (no dependencies; Node 18+)
 *
 * Validates the core engine and EVERY course data file under assets/qstream/data.
 */
'use strict';
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const FAQS = require('../assets/qstream/core.js');
const DATA_DIR = path.join(__dirname, '..', 'assets', 'qstream', 'data');

function loadAllData() {
  if (!fs.existsSync(DATA_DIR)) return {};
  const out = {};
  for (const f of fs.readdirSync(DATA_DIR)) {
    if (!f.endsWith('.js')) continue;
    const mod = require(path.join(DATA_DIR, f));
    out[f] = mod;
  }
  return out;
}
const ALL = loadAllData();

// ── Course registry ──────────────────────────────────────────────────────────
test('registry has all 25 AP courses with display + category', () => {
  assert.strictEqual(FAQS.COURSE_IDS.length, 25);
  for (const id of FAQS.COURSE_IDS) {
    assert.ok(FAQS.COURSE_DISPLAY[id], 'display name for ' + id);
    assert.ok(FAQS.CATEGORY[id], 'category for ' + id);
  }
});

test('slug→id map resolves every course-page stem', () => {
  const ids = new Set();
  for (const slug of Object.keys(FAQS.SLUG_TO_ID)) {
    const id = FAQS.getCourseIdFromSlug(slug);
    assert.ok(FAQS.isValidCourseId(id), slug + ' → ' + id);
    ids.add(id);
  }
  assert.strictEqual(ids.size, 25, 'all 25 stable ids covered by slug map');
});

// ── Per-course data files ─────────────────────────────────────────────────────
for (const [file, mod] of Object.entries(ALL)) {
  test(`data file ${file}: framework shape`, () => {
    assert.ok(mod && mod.framework, 'has framework');
    const fw = mod.framework;
    assert.ok(FAQS.isValidCourseId(fw.courseId), 'valid courseId ' + fw.courseId);
    assert.ok(Array.isArray(fw.units) && fw.units.length >= 1, 'has units');
    assert.ok(Array.isArray(fw.allowedQuestionTypes) && fw.allowedQuestionTypes.length >= 1, 'allowed types');
    assert.ok(Array.isArray(fw.defaultQuestionTypes) && fw.defaultQuestionTypes.length >= 1, 'default types');
    for (const d of fw.defaultQuestionTypes) {
      assert.ok(fw.allowedQuestionTypes.includes(d), 'default ' + d + ' is allowed');
    }
    for (const u of fw.units) {
      assert.ok(u.id && u.name, 'unit id+name');
      assert.ok(Array.isArray(u.topics) && u.topics.length >= 1, 'unit ' + u.id + ' has topics');
      for (const t of u.topics) assert.ok(t.id && t.name, 'topic id+name in ' + u.id);
    }
    assert.ok(fw.examStructure && Array.isArray(fw.examStructure.sections) && fw.examStructure.sections.length >= 1, 'exam structure');
  });

  test(`data file ${file}: seeded bank (>=9) all valid + aligned`, () => {
    const fw = mod.framework;
    const bank = mod.seededQuestions || [];
    assert.ok(bank.length >= 9, file + ' has ' + bank.length + ' seeded (need >=9)');
    const unitIds = new Set(fw.units.map((u) => u.id));
    const topicIds = new Set();
    fw.units.forEach((u) => u.topics.forEach((t) => topicIds.add(t.id)));
    const seenIds = new Set();
    let mcq = 0, written = 0;
    for (const q of bank) {
      const res = FAQS.validateQuestion(q, fw);
      assert.ok(res.valid, file + ' invalid Q ' + q.id + ': ' + res.errors.join('; '));
      assert.ok(!seenIds.has(q.id), 'duplicate id ' + q.id);
      seenIds.add(q.id);
      assert.ok(unitIds.has(q.unitId), q.id + ' unitId ' + q.unitId + ' not in framework');
      assert.ok(topicIds.has(q.topicId), q.id + ' topicId ' + q.topicId + ' not in framework');
      assert.strictEqual(q.courseId, fw.courseId, q.id + ' courseId matches framework');
      if (q.questionType === 'mcq') mcq++;
      if (FAQS.isWritten(q.questionType) && (q.rubric || q.modelAnswer)) written++;
    }
    assert.ok(mcq >= 3, file + ' needs >=3 MCQs, has ' + mcq);
    assert.ok(written >= 1, file + ' needs >=1 written/rubric question');
  });
}

test('ACCEPTANCE: all 23 course data files present', () => {
  const present = new Set(Object.values(ALL).map((m) => m.framework && m.framework.courseId));
  const missing = FAQS.COURSE_IDS.filter((id) => !present.has(id));
  assert.strictEqual(missing.length, 0, 'missing data files: ' + missing.join(', '));
});

// ── Evaluator ─────────────────────────────────────────────────────────────────
test('MCQ evaluator grades exactly', () => {
  const q = { questionType: 'mcq', correctAnswer: 'B', distractorRationales: { A: 'no' }, explanation: 'x' };
  assert.strictEqual(FAQS.evaluateLocally(q, 'B', 10).isCorrect, true);
  assert.strictEqual(FAQS.evaluateLocally(q, 'A', 10).isCorrect, false);
  assert.strictEqual(FAQS.evaluateLocally(q, 'b', 10).isCorrect, true, 'case-insensitive');
});

test('numeric evaluator respects tolerance', () => {
  const q = { questionType: 'calculation', correctAnswer: '48', numericTolerance: 0.5, explanation: 'compute it carefully here' };
  assert.strictEqual(FAQS.evaluateLocally(q, '48.2', 10).isCorrect, true);
  assert.strictEqual(FAQS.evaluateLocally(q, '50', 10).isCorrect, false);
  assert.strictEqual(FAQS.evaluateLocally(q, '48 m/s', 10).isCorrect, true, 'units stripped');
  assert.strictEqual(FAQS.evaluateLocally(q, 'abc', 10).isCorrect, false, 'non-numeric');
});

test('written evaluator returns self-grade with rubric', () => {
  const q = { questionType: 'frq', correctAnswer: 'see rubric', explanation: 'long explanation here ok',
    rubric: [{ id: 'r1', pointValue: 2, criterion: 'thesis' }], modelAnswer: 'model' };
  const r = FAQS.evaluateLocally(q, 'my essay', 60);
  assert.strictEqual(r.selfGraded, true);
  assert.strictEqual(r.maxScore, 2);
  assert.strictEqual(r.rubricBreakdown.length, 1);
});

// ── Mastery ───────────────────────────────────────────────────────────────────
test('mastery increases on correct, decreases on incorrect, clamps', () => {
  let m = { courseId: 'ap-biology', unitId: 'unit-1', topicId: 't', mastery: 0, attempts: 0, correct: 0, incorrect: 0 };
  m = FAQS.applyAttemptToMastery(m, 'medium', true);
  assert.strictEqual(m.mastery, 8);
  assert.strictEqual(m.attempts, 1);
  assert.strictEqual(m.correct, 1);
  m = FAQS.applyAttemptToMastery(m, 'hard', false);
  assert.strictEqual(m.mastery, 0, '8-8=0');
  // clamp at 100
  let hi = { mastery: 95, attempts: 0, correct: 0, incorrect: 0 };
  hi = FAQS.applyAttemptToMastery(hi, 'exam-level', true);
  assert.strictEqual(hi.mastery, 100, 'clamped to 100');
});

// ── Adaptive ──────────────────────────────────────────────────────────────────
test('difficulty bands + streak adjustments', () => {
  assert.strictEqual(FAQS.difficultyForMastery(10), 'easy');
  assert.strictEqual(FAQS.difficultyForMastery(45), 'medium');
  assert.strictEqual(FAQS.difficultyForMastery(70), 'hard');
  assert.strictEqual(FAQS.difficultyForMastery(95), 'exam-level');
  // 2 misses → ease off from medium
  assert.strictEqual(FAQS.nextDifficulty(45, [true, false, false], 'practice'), 'easy');
  // 3 hits → push up from medium
  assert.strictEqual(FAQS.nextDifficulty(45, [true, true, true], 'practice'), 'hard');
  // exam mode returns a valid difficulty
  assert.ok(FAQS.DIFFICULTIES.includes(FAQS.nextDifficulty(50, [], 'exam', 3)));
});

test('getQuestionTypeForCourse returns an allowed type', () => {
  const fw = ALL['ap-biology.js'] && ALL['ap-biology.js'].framework;
  if (!fw) return;
  for (let s = 0; s < 8; s++) {
    const t = FAQS.getQuestionTypeForCourse('ap-biology', 'practice', 30, fw, s);
    assert.ok(fw.allowedQuestionTypes.includes(t), 'type ' + t + ' allowed');
  }
});

test('pickTopic prefers weakest and honors selection', () => {
  const fw = ALL['ap-biology.js'] && ALL['ap-biology.js'].framework;
  if (!fw) return;
  // Set every topic to high mastery except photosynthesis (the intended weakest).
  const mastery = FAQS.allTopics(fw).map((t) => ({
    unitId: t.unitId, topicId: t.topicId, mastery: t.topicId === 'photosynthesis' ? 5 : 60
  }));
  const weak = FAQS.pickTopic(fw, mastery, {});
  assert.strictEqual(weak.topicId, 'photosynthesis', 'weakest chosen');
  const sel = FAQS.pickTopic(fw, mastery, { selectedTopicId: 'meiosis' });
  assert.strictEqual(sel.topicId, 'meiosis', 'selection honored');
});

// ── Review queue + spaced repetition ──────────────────────────────────────────
test('review queue add/dedup/remove/due', () => {
  const q = { id: 'q1' };
  let queue = FAQS.addToReviewQueue([], q, 'missed', 0);
  assert.strictEqual(queue.length, 1);
  queue = FAQS.addToReviewQueue(queue, q, 'missed', 0); // dedup → priority bump
  assert.strictEqual(queue.length, 1);
  assert.strictEqual(queue[0].priority, 2);
  const due = FAQS.dueReviewItems(queue, FAQS.DAY_MS * 2); // 2 days later
  assert.strictEqual(due.length, 1);
  queue = FAQS.removeReviewItem(queue, queue[0].id);
  assert.strictEqual(queue.length, 0);
});

test('spaced repetition lengthens then masters; resets on miss', () => {
  let item = FAQS.addToReviewQueue([], { id: 'q1' }, 'missed', 0)[0];
  let r = FAQS.scheduleReview(item, true, 0); // 1st correct → +3d
  assert.strictEqual(r.mastered, false);
  assert.strictEqual(r.item.correctReviews, 1);
  r = FAQS.scheduleReview(r.item, true, 0); // 2nd → +7d
  r = FAQS.scheduleReview(r.item, true, 0); // 3rd → +14d
  r = FAQS.scheduleReview(r.item, true, 0); // 4th → mastered
  assert.strictEqual(r.mastered, true);
  // miss resets
  let r2 = FAQS.scheduleReview(item, false, 0);
  assert.strictEqual(r2.item.correctReviews, 0);
  assert.ok(r2.item.priority >= 2);
});

// ── JSON repair ───────────────────────────────────────────────────────────────
test('extractJson strips code fences', () => {
  const obj = FAQS.extractJson('```json\n{"a":1}\n```');
  assert.deepStrictEqual(obj, { a: 1 });
  const obj2 = FAQS.extractJson('Here you go: {"b":2} thanks');
  assert.deepStrictEqual(obj2, { b: 2 });
  assert.strictEqual(FAQS.extractJson('not json'), null);
});
