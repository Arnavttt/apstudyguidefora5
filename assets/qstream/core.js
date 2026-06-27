/**
 * Five & A+ — AI Question Stream · CORE LOGIC
 * ---------------------------------------------------------------------------
 * Pure, framework-agnostic logic for the adaptive AP practice system:
 * course registry, question schema + validator, mastery engine, adaptive
 * difficulty/topic/type selection, spaced repetition, review queue, local
 * (offline) answer evaluation, and JSON repair.
 *
 * NO DOM, NO network, NO storage here — all of that lives in question-stream.js
 * (browser UI) and api/question.js (server AI). Keeping this file pure makes it
 * unit-testable under Node (`node --test tests/qstream.test.js`) AND usable in
 * the browser as the global `window.FAQS`.
 *
 * Copyright/safety: this module generates/organizes ORIGINAL AP-style practice.
 * Course frameworks below are conceptual organizational structures, not copied
 * College Board materials. No official AP exam questions are included.
 */
(function () {
  'use strict';

  // ─── Enumerations ──────────────────────────────────────────────────────────
  var COURSE_IDS = [
    'ap-art-history', 'ap-biology', 'ap-calculus-bc', 'ap-chemistry',
    'ap-comparative-government', 'ap-computer-science-a',
    'ap-computer-science-principles', 'ap-english-language',
    'ap-english-literature', 'ap-environmental-science', 'ap-european-history',
    'ap-human-geography', 'ap-macroeconomics', 'ap-microeconomics',
    'ap-music-theory', 'ap-physics-1-2', 'ap-physics-c-electricity-magnetism',
    'ap-physics-c-mechanics', 'ap-precalculus', 'ap-psychology',
    'ap-us-government', 'ap-us-history', 'ap-world-history-modern'
  ];

  var DIFFICULTIES = ['easy', 'medium', 'hard', 'exam-level'];
  var BLOOM_LEVELS = ['remember', 'understand', 'apply', 'analyze', 'evaluate', 'create'];
  var STREAM_MODES = ['practice', 'exam', 'review', 'spaced'];
  var QUESTION_TYPES = [
    'mcq', 'multi-select', 'short-answer', 'frq', 'dbq', 'leq',
    'rhetorical-analysis', 'literary-analysis', 'synthesis', 'argument-essay',
    'coding', 'code-tracing', 'data-analysis', 'graph-interpretation',
    'calculation', 'lab-design', 'visual-analysis', 'art-identification',
    'music-theory-analysis', 'stimulus-based'
  ];

  // Display names (used when a page does not carry a <meta name="course">).
  var COURSE_DISPLAY = {
    'ap-art-history': 'AP Art History',
    'ap-biology': 'AP Biology',
    'ap-calculus-bc': 'AP Calculus BC',
    'ap-chemistry': 'AP Chemistry',
    'ap-comparative-government': 'AP Comparative Government and Politics',
    'ap-computer-science-a': 'AP Computer Science A',
    'ap-computer-science-principles': 'AP Computer Science Principles',
    'ap-english-language': 'AP English Language and Composition',
    'ap-english-literature': 'AP English Literature and Composition',
    'ap-environmental-science': 'AP Environmental Science',
    'ap-european-history': 'AP European History',
    'ap-human-geography': 'AP Human Geography',
    'ap-macroeconomics': 'AP Macroeconomics',
    'ap-microeconomics': 'AP Microeconomics',
    'ap-music-theory': 'AP Music Theory',
    'ap-physics-1-2': 'AP Physics 1 & 2',
    'ap-physics-c-electricity-magnetism': 'AP Physics C: Electricity and Magnetism',
    'ap-physics-c-mechanics': 'AP Physics C: Mechanics',
    'ap-precalculus': 'AP Precalculus',
    'ap-psychology': 'AP Psychology',
    'ap-us-government': 'AP U.S. Government and Politics',
    'ap-us-history': 'AP U.S. History',
    'ap-world-history-modern': 'AP World History: Modern'
  };

  // Maps the site's existing course-page filename stems → stable stream IDs.
  // (8 of 23 differ; the rest are identical.)
  var SLUG_TO_ID = {
    'ap-art-history': 'ap-art-history',
    'ap-biology': 'ap-biology',
    'ap-calculus-bc': 'ap-calculus-bc',
    'ap-chemistry': 'ap-chemistry',
    'ap-comparative-government-and-politics': 'ap-comparative-government',
    'ap-computer-science-a': 'ap-computer-science-a',
    'ap-computer-science-principles': 'ap-computer-science-principles',
    'ap-english-language-composition': 'ap-english-language',
    'ap-english-literature-composition': 'ap-english-literature',
    'ap-environmental-science': 'ap-environmental-science',
    'ap-european-history': 'ap-european-history',
    'ap-human-geography': 'ap-human-geography',
    'ap-macroeconomics': 'ap-macroeconomics',
    'ap-microeconomics': 'ap-microeconomics',
    'ap-music-theory': 'ap-music-theory',
    'ap-physics-1-2': 'ap-physics-1-2',
    'ap-physics-c-electricity-and-magnetism': 'ap-physics-c-electricity-magnetism',
    'ap-physics-c-mechanics': 'ap-physics-c-mechanics',
    'ap-precalculus': 'ap-precalculus',
    'ap-psychology': 'ap-psychology',
    'ap-u-s-government-politics': 'ap-us-government',
    'ap-u-s-history': 'ap-us-history',
    'ap-world-history-modern': 'ap-world-history-modern'
  };

  // Course → broad category, used for default question-type mixes.
  var CATEGORY = {
    'ap-art-history': 'arts',
    'ap-biology': 'stem',
    'ap-calculus-bc': 'stem',
    'ap-chemistry': 'stem',
    'ap-comparative-government': 'history-social-science',
    'ap-computer-science-a': 'computer-science',
    'ap-computer-science-principles': 'computer-science',
    'ap-english-language': 'english',
    'ap-english-literature': 'english',
    'ap-environmental-science': 'stem',
    'ap-european-history': 'history-social-science',
    'ap-human-geography': 'history-social-science',
    'ap-macroeconomics': 'history-social-science',
    'ap-microeconomics': 'history-social-science',
    'ap-music-theory': 'arts',
    'ap-physics-1-2': 'stem',
    'ap-physics-c-electricity-magnetism': 'stem',
    'ap-physics-c-mechanics': 'stem',
    'ap-precalculus': 'stem',
    'ap-psychology': 'history-social-science',
    'ap-us-government': 'history-social-science',
    'ap-us-history': 'history-social-science',
    'ap-world-history-modern': 'history-social-science'
  };

  // Mastery deltas per spec.
  var MASTERY_DELTA = {
    easy: { correct: 5, incorrect: -4 },
    medium: { correct: 8, incorrect: -6 },
    hard: { correct: 12, incorrect: -8 },
    'exam-level': { correct: 15, incorrect: -10 }
  };

  // Spaced-repetition intervals (days) keyed by number of prior correct reviews.
  var SPACED_INTERVALS = [1, 3, 7, 14]; // index 0 used after first miss
  var DAY_MS = 86400000;

  // ─── Small helpers ─────────────────────────────────────────────────────────
  function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }
  function isStr(s) { return typeof s === 'string' && s.length > 0; }
  function nowIso(nowMs) { return new Date(nowMs == null ? Date.now() : nowMs).toISOString(); }

  function getCourseIdFromSlug(slug) {
    if (!slug) return null;
    if (SLUG_TO_ID[slug]) return SLUG_TO_ID[slug];
    // already a stable id?
    if (COURSE_IDS.indexOf(slug) !== -1) return slug;
    return null;
  }

  function isValidCourseId(id) { return COURSE_IDS.indexOf(id) !== -1; }

  // ─── Question-type selection ───────────────────────────────────────────────
  // Category-level default mixes; specific courses refine below.
  var TYPE_MIX = {
    stem: ['mcq', 'mcq', 'calculation', 'data-analysis', 'graph-interpretation', 'frq', 'lab-design'],
    'history-social-science': ['mcq', 'mcq', 'stimulus-based', 'short-answer', 'data-analysis'],
    english: ['mcq', 'rhetorical-analysis', 'argument-essay', 'short-answer'],
    arts: ['mcq', 'visual-analysis', 'short-answer'],
    'computer-science': ['mcq', 'code-tracing', 'coding', 'short-answer']
  };

  var COURSE_TYPE_MIX = {
    'ap-computer-science-a': ['mcq', 'mcq', 'code-tracing', 'coding', 'frq'],
    'ap-computer-science-principles': ['mcq', 'mcq', 'code-tracing', 'data-analysis', 'stimulus-based', 'short-answer'],
    'ap-english-language': ['mcq', 'rhetorical-analysis', 'synthesis', 'argument-essay'],
    'ap-english-literature': ['mcq', 'literary-analysis', 'argument-essay', 'short-answer'],
    'ap-european-history': ['mcq', 'mcq', 'stimulus-based', 'short-answer', 'dbq', 'leq'],
    'ap-us-history': ['mcq', 'mcq', 'stimulus-based', 'short-answer', 'dbq', 'leq'],
    'ap-world-history-modern': ['mcq', 'mcq', 'stimulus-based', 'short-answer', 'dbq', 'leq'],
    'ap-us-government': ['mcq', 'mcq', 'stimulus-based', 'short-answer', 'argument-essay', 'data-analysis'],
    'ap-comparative-government': ['mcq', 'mcq', 'stimulus-based', 'short-answer', 'frq', 'data-analysis'],
    'ap-macroeconomics': ['mcq', 'mcq', 'graph-interpretation', 'calculation', 'frq'],
    'ap-microeconomics': ['mcq', 'mcq', 'graph-interpretation', 'calculation', 'frq'],
    'ap-art-history': ['mcq', 'art-identification', 'visual-analysis', 'short-answer', 'frq'],
    'ap-music-theory': ['mcq', 'music-theory-analysis', 'short-answer'],
    'ap-psychology': ['mcq', 'mcq', 'stimulus-based', 'data-analysis', 'frq']
  };

  /**
   * Pick a question type appropriate for the course + mode, intersected with
   * the framework's allowedQuestionTypes. Deterministic given `seed`.
   */
  function getQuestionTypeForCourse(courseId, mode, mastery, framework, seed) {
    var allowed = (framework && framework.allowedQuestionTypes) || [];
    var pool = (COURSE_TYPE_MIX[courseId] || TYPE_MIX[CATEGORY[courseId]] || ['mcq']).slice();
    // Restrict to types this framework actually allows.
    pool = pool.filter(function (t) { return allowed.length === 0 || allowed.indexOf(t) !== -1; });
    if (pool.length === 0) pool = (framework && framework.defaultQuestionTypes) || ['mcq'];

    if (mode === 'practice') {
      // Lean toward the course's default question types early; widen as mastery climbs.
      var defaults = (framework && framework.defaultQuestionTypes) || pool;
      if ((mastery || 0) < 40) pool = defaults.concat(['mcq']);
    }
    var idx = Math.abs(seed == null ? 0 : seed) % pool.length;
    return pool[idx];
  }

  // ─── Mastery engine ────────────────────────────────────────────────────────
  function masteryDelta(difficulty, correct) {
    var d = MASTERY_DELTA[difficulty] || MASTERY_DELTA.medium;
    return correct ? d.correct : d.incorrect;
  }

  /** Apply one attempt to a TopicMastery record, returning a NEW record. */
  function applyAttemptToMastery(prev, difficulty, correct, nowMs) {
    var m = prev || { mastery: 0, attempts: 0, correct: 0, incorrect: 0 };
    var next = {
      courseId: m.courseId, unitId: m.unitId, topicId: m.topicId,
      mastery: clamp((m.mastery || 0) + masteryDelta(difficulty, correct), 0, 100),
      attempts: (m.attempts || 0) + 1,
      correct: (m.correct || 0) + (correct ? 1 : 0),
      incorrect: (m.incorrect || 0) + (correct ? 0 : 1),
      lastAttemptAt: nowIso(nowMs),
      nextReviewAt: m.nextReviewAt
    };
    return next;
  }

  // ─── Adaptive difficulty ───────────────────────────────────────────────────
  function difficultyForMastery(m) {
    m = m || 0;
    if (m <= 30) return 'easy';
    if (m <= 60) return 'medium';
    if (m <= 80) return 'hard';
    return 'exam-level';
  }

  function stepDifficulty(diff, dir) {
    var i = DIFFICULTIES.indexOf(diff);
    if (i === -1) i = 1;
    return DIFFICULTIES[clamp(i + dir, 0, DIFFICULTIES.length - 1)];
  }

  /**
   * Decide the next difficulty.
   * @param mastery       current topic mastery (0..100)
   * @param recentResults array of booleans (most recent LAST), e.g. [true,false,true]
   * @param mode          stream mode
   * @param seed          integer for deterministic exam-mix
   */
  function nextDifficulty(mastery, recentResults, mode, seed) {
    var base = difficultyForMastery(mastery);
    var r = recentResults || [];

    if (mode === 'exam') {
      // AP-style spread: ~30% medium-ish, weighted toward exam-level.
      var spread = ['medium', 'medium', 'hard', 'hard', 'exam-level', 'exam-level', 'easy'];
      return spread[Math.abs(seed == null ? 0 : seed) % spread.length];
    }

    var last2 = r.slice(-2);
    if (last2.length === 2 && last2[0] === false && last2[1] === false) {
      return stepDifficulty(base, -1); // missed 2 in a row → ease off
    }
    var last3 = r.slice(-3);
    if (last3.length === 3 && last3[0] && last3[1] && last3[2]) {
      return stepDifficulty(base, +1); // 3 correct in a row → push up
    }
    return base;
  }

  // ─── Topic selection ───────────────────────────────────────────────────────
  function allTopics(framework, unitId) {
    var out = [];
    (framework.units || []).forEach(function (u) {
      if (unitId && u.id !== unitId) return;
      (u.topics || []).forEach(function (t) {
        out.push({ unitId: u.id, unitName: u.name, topicId: t.id, topicName: t.name, skills: t.skills || [] });
      });
    });
    return out;
  }

  function masteryFor(masteryList, unitId, topicId) {
    var found = (masteryList || []).filter(function (m) {
      return m.unitId === unitId && m.topicId === topicId;
    })[0];
    return found ? (found.mastery || 0) : 0;
  }

  /**
   * Choose the next {unitId, topicId, ...} to practice.
   * - Honors an explicitly selected topic / unit.
   * - Otherwise prefers the weakest topic, avoiding >3 repeats of the same topic
   *   unless it remains weak.
   */
  function pickTopic(framework, masteryList, opts) {
    opts = opts || {};
    var topics = allTopics(framework, opts.selectedUnitId);
    if (topics.length === 0) topics = allTopics(framework);
    if (topics.length === 0) return null;

    if (opts.selectedTopicId) {
      var exact = topics.filter(function (t) { return t.topicId === opts.selectedTopicId; })[0];
      if (exact) return exact;
    }

    // Count recent repeats of the most recent topic.
    var recent = opts.recentTopicIds || [];
    var lastTopic = recent[recent.length - 1];
    var repeatRun = 0;
    for (var i = recent.length - 1; i >= 0; i--) {
      if (recent[i] === lastTopic) repeatRun++; else break;
    }

    // Rank by mastery ascending (weakest first); stable rotation as tiebreak.
    var ranked = topics.map(function (t, idx) {
      return { t: t, m: masteryFor(masteryList, t.unitId, t.topicId), idx: idx };
    }).sort(function (a, b) { return a.m - b.m || a.idx - b.idx; });

    var weakest = ranked[0];
    // Avoid hammering one topic >3x in a row unless it's still the weakest & weak.
    if (lastTopic && weakest.t.topicId === lastTopic && repeatRun >= 3 && weakest.m > 40) {
      var alt = ranked.filter(function (x) { return x.t.topicId !== lastTopic; })[0];
      if (alt) return alt.t;
    }
    return weakest.t;
  }

  // ─── Question validation ───────────────────────────────────────────────────
  var OFFICIAL_MARKERS = [
    /question\s+\d+\s+refers\s+to\s+the\s+following/i,
    /\bAP\s+Exam\b.*\b(19|20)\d\d\b/i,
    /from\s+the\s+(19|20)\d\d\s+AP/i,
    /college\s+board.{0,20}(released|secure)/i
  ];

  /**
   * Validate one APQuestion against the schema and (optionally) a framework.
   * Returns { valid, errors[], repairedQuestion? }. Performs light, SAFE
   * repairs (filling obvious metadata) but NEVER invents a correct answer.
   */
  function validateQuestion(q, framework) {
    var errors = [];
    if (!q || typeof q !== 'object') return { valid: false, errors: ['not an object'] };

    var repaired = JSON.parse(JSON.stringify(q));

    if (!isStr(repaired.id)) errors.push('missing id');
    if (!isValidCourseId(repaired.courseId)) errors.push('invalid courseId: ' + repaired.courseId);
    if (!isStr(repaired.courseName)) {
      if (COURSE_DISPLAY[repaired.courseId]) repaired.courseName = COURSE_DISPLAY[repaired.courseId];
      else errors.push('missing courseName');
    }
    if (!isStr(repaired.unitId)) errors.push('missing unitId');
    if (!isStr(repaired.topicId)) errors.push('missing topicId');
    if (!isStr(repaired.prompt) || repaired.prompt.trim().length < 12) errors.push('prompt missing or too short');

    if (QUESTION_TYPES.indexOf(repaired.questionType) === -1) errors.push('invalid questionType: ' + repaired.questionType);
    if (framework && framework.allowedQuestionTypes && framework.allowedQuestionTypes.indexOf(repaired.questionType) === -1) {
      errors.push('questionType not allowed for course: ' + repaired.questionType);
    }
    if (DIFFICULTIES.indexOf(repaired.difficulty) === -1) { repaired.difficulty = 'medium'; }
    if (BLOOM_LEVELS.indexOf(repaired.bloomLevel) === -1) { repaired.bloomLevel = 'understand'; }
    if (typeof repaired.estimatedTimeSeconds !== 'number' || repaired.estimatedTimeSeconds < 10 || repaired.estimatedTimeSeconds > 5400) {
      repaired.estimatedTimeSeconds = 90;
    }
    if (!isStr(repaired.correctAnswer) && repaired.correctAnswer !== 0) errors.push('missing correctAnswer');
    if (!isStr(repaired.explanation) || repaired.explanation.trim().length < 10) errors.push('explanation missing or too short');
    if (!Array.isArray(repaired.tags) || repaired.tags.length === 0) repaired.tags = [repaired.topicId || 'general'];
    if (!isStr(repaired.sourceType)) repaired.sourceType = 'ai-generated';
    if (!isStr(repaired.reviewStatus)) repaired.reviewStatus = 'needs-review';
    if (!isStr(repaired.createdAt)) repaired.createdAt = nowIso();

    // Type-specific rules.
    var type = repaired.questionType;
    if (type === 'mcq' || type === 'multi-select') {
      var choices = repaired.answerChoices || [];
      if (choices.length < 4 || choices.length > 5) errors.push('MCQ needs 4 or 5 answer choices');
      var ids = choices.map(function (c) { return c && c.id; });
      if (type === 'mcq') {
        if (ids.indexOf(repaired.correctAnswer) === -1) errors.push('MCQ correctAnswer must match a choice id');
        if (!repaired.distractorRationales || Object.keys(repaired.distractorRationales).length < 1) {
          errors.push('MCQ needs distractorRationales');
        }
      } else {
        // multi-select: correctAnswer is a comma/space separated list of ids.
        var picks = String(repaired.correctAnswer).split(/[,\s]+/).filter(Boolean);
        if (picks.length < 1) errors.push('multi-select needs >=1 correct id');
      }
    } else if (isWritten(type)) {
      if ((!repaired.rubric || repaired.rubric.length === 0) && !isStr(repaired.modelAnswer)) {
        errors.push('written question needs rubric or modelAnswer');
      }
    } else if (type === 'calculation') {
      if (repaired.explanation.trim().length < 20) errors.push('calculation needs fuller explanation');
    } else if (type === 'coding' || type === 'code-tracing') {
      if (!isStr(repaired.codeBlock) && !/code|program|method|trace|output|loop|array/i.test(repaired.prompt)) {
        errors.push('coding question needs codeBlock or coding prompt');
      }
    }

    // Anti-plagiarism markers.
    var blob = (repaired.prompt || '') + ' ' + (repaired.stimulus || '');
    OFFICIAL_MARKERS.forEach(function (re) {
      if (re.test(blob)) errors.push('contains official-AP wording marker');
    });

    return { valid: errors.length === 0, errors: errors, repairedQuestion: repaired };
  }

  function isWritten(type) {
    return ['short-answer', 'frq', 'dbq', 'leq', 'rhetorical-analysis', 'literary-analysis',
      'synthesis', 'argument-essay', 'lab-design', 'visual-analysis', 'art-identification',
      'music-theory-analysis', 'data-analysis', 'graph-interpretation', 'stimulus-based'].indexOf(type) !== -1;
  }

  function isObjective(type) { return type === 'mcq' || type === 'multi-select' || type === 'calculation' || type === 'code-tracing'; }

  // ─── JSON repair ───────────────────────────────────────────────────────────
  /** Extract a JSON object/array from a possibly-fenced model response. */
  function extractJson(text) {
    if (text == null) return null;
    if (typeof text === 'object') return text;
    var s = String(text).trim();
    // strip ```json … ``` fences
    s = s.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
    try { return JSON.parse(s); } catch (e) {}
    // grab the first {...} or [...] balanced-ish blob
    var first = s.search(/[\[{]/);
    var lastObj = s.lastIndexOf('}');
    var lastArr = s.lastIndexOf(']');
    var last = Math.max(lastObj, lastArr);
    if (first !== -1 && last > first) {
      var sub = s.slice(first, last + 1);
      try { return JSON.parse(sub); } catch (e2) {}
    }
    return null;
  }

  // ─── Local (offline) answer evaluation ─────────────────────────────────────
  function normalizeNumeric(s) {
    if (s == null) return NaN;
    var cleaned = String(s).replace(/[, $%]/g, '').replace(/[^\d.eE+\-]/g, '');
    var v = parseFloat(cleaned);
    return v;
  }

  /**
   * Evaluate a student's answer WITHOUT an AI provider.
   * Objective types are graded exactly; written types return a structured
   * self-check (rubric + model answer) with no auto-score.
   */
  function evaluateLocally(question, studentAnswer, timeSpentSeconds) {
    var q = question || {};
    var type = q.questionType;
    var base = {
      correctAnswer: q.correctAnswer != null ? String(q.correctAnswer) : '',
      explanation: q.explanation || '',
      modelAnswer: q.modelAnswer,
      strengths: [],
      improvements: [],
      nextRecommendation: 'Continue practicing this topic to build mastery.'
    };

    if (type === 'mcq') {
      var pick = String(studentAnswer || '').trim().toUpperCase();
      var correct = pick === String(q.correctAnswer || '').trim().toUpperCase();
      base.isCorrect = correct;
      base.score = correct ? 1 : 0; base.maxScore = 1; base.percentScore = correct ? 100 : 0;
      if (correct) {
        base.strengths = ['Correct — you identified the right choice.'];
        base.nextRecommendation = 'Try a harder question on this skill.';
      } else {
        var why = q.distractorRationales && q.distractorRationales[pick];
        base.improvements = [why ? ('Why ' + pick + ' is wrong: ' + why) : 'Review why the other choices do not fit.'];
        base.nextRecommendation = 'Revisit this topic, then retry a similar question.';
      }
      return base;
    }

    if (type === 'multi-select') {
      var want = String(q.correctAnswer || '').split(/[,\s]+/).filter(Boolean).map(function (x) { return x.toUpperCase(); }).sort();
      var got = String(studentAnswer || '').split(/[,\s]+/).filter(Boolean).map(function (x) { return x.toUpperCase(); }).sort();
      var exact = want.length === got.length && want.every(function (x, i) { return x === got[i]; });
      var hits = got.filter(function (x) { return want.indexOf(x) !== -1; }).length;
      var wrong = got.filter(function (x) { return want.indexOf(x) === -1; }).length;
      var earned = Math.max(0, hits - wrong);
      base.isCorrect = exact;
      base.maxScore = want.length; base.score = exact ? want.length : earned;
      base.percentScore = Math.round((base.score / base.maxScore) * 100);
      base.strengths = exact ? ['All correct selections, no extras.'] : (hits ? ['Identified ' + hits + ' correct option(s).'] : []);
      if (!exact) base.improvements = ['Aim for every correct option and no incorrect ones.'];
      return base;
    }

    if (type === 'calculation') {
      var ans = normalizeNumeric(studentAnswer);
      var target = normalizeNumeric(q.correctAnswer);
      var tol = typeof q.numericTolerance === 'number' ? q.numericTolerance : Math.max(1e-9, Math.abs(target) * 0.01);
      if (isNaN(ans)) {
        base.isCorrect = false; base.score = 0; base.maxScore = 1; base.percentScore = 0;
        base.improvements = ['Could not read a number from your answer. Enter a numeric value (units optional).'];
        return base;
      }
      var ok = Math.abs(ans - target) <= tol;
      base.isCorrect = ok; base.score = ok ? 1 : 0; base.maxScore = 1; base.percentScore = ok ? 100 : 0;
      base.strengths = ok ? ['Correct value within tolerance.'] : [];
      if (!ok) base.improvements = ['Expected ≈ ' + base.correctAnswer + ' (±' + tol + '). Recheck your steps and units.'];
      return base;
    }

    if (type === 'code-tracing') {
      var expected = String(q.correctAnswer || '').replace(/\s+/g, ' ').trim();
      var actual = String(studentAnswer || '').replace(/\s+/g, ' ').trim();
      var match = expected.length > 0 && expected.toLowerCase() === actual.toLowerCase();
      base.isCorrect = match; base.score = match ? 1 : 0; base.maxScore = 1; base.percentScore = match ? 100 : 0;
      base.strengths = match ? ['Traced the program output correctly.'] : [];
      if (!match) base.improvements = ['Trace each statement and loop iteration carefully; track variable values line by line.'];
      return base;
    }

    // Written / open-ended → self-check (no auto-score offline).
    var acceptable = (q.acceptableAnswers || []).map(function (a) { return String(a).toLowerCase(); });
    if (type === 'short-answer' && acceptable.length) {
      var sa = String(studentAnswer || '').toLowerCase();
      var hit = acceptable.some(function (a) { return sa.indexOf(a) !== -1; });
      base.isCorrect = hit; base.maxScore = 1; base.score = hit ? 1 : 0; base.percentScore = hit ? 100 : 0;
      base.strengths = hit ? ['Your response includes a key idea from the model answer.'] : [];
      if (!hit) base.improvements = ['Compare against the model answer below and add the missing key terms.'];
      return base;
    }

    base.maxScore = totalRubricPoints(q.rubric);
    base.improvements = ['Self-grade with the rubric below.'];
    base.strengths = ['Response recorded — written questions are graded by AI when available, otherwise self-assessed.'];
    base.nextRecommendation = 'Use the rubric and model answer to score yourself, then mark this topic accordingly.';
    base.rubricBreakdown = (q.rubric || []).map(function (r) {
      return { rubricRowId: r.id, earned: 0, possible: r.pointValue, comment: r.criterion };
    });
    base.selfGraded = true;
    return base;
  }

  function totalRubricPoints(rubric) {
    return (rubric || []).reduce(function (s, r) { return s + (r.pointValue || 0); }, 0) || undefined;
  }

  // ─── Review queue + spaced repetition ──────────────────────────────────────
  function reviewKeyOf(item) { return item.question ? item.question.id : item.id; }

  function addToReviewQueue(queue, question, reason, nowMs) {
    queue = (queue || []).slice();
    var existing = queue.filter(function (it) { return reviewKeyOf(it) === question.id; })[0];
    if (existing) {
      existing.priority = (existing.priority || 1) + 1;
      existing.reason = reason || existing.reason;
      return queue;
    }
    queue.push({
      id: 'rv-' + question.id,
      question: question,
      addedAt: nowIso(nowMs),
      reason: reason || 'missed',
      priority: 1,
      attempts: 0,
      correctReviews: 0,
      nextReviewAt: nowIso((nowMs == null ? Date.now() : nowMs) + DAY_MS)
    });
    return queue;
  }

  function removeReviewItem(queue, itemId) {
    return (queue || []).filter(function (it) { return it.id !== itemId; });
  }

  /** Items whose nextReviewAt <= now, highest priority first. */
  function dueReviewItems(queue, nowMs) {
    var t = nowMs == null ? Date.now() : nowMs;
    return (queue || []).filter(function (it) {
      return !it.nextReviewAt || new Date(it.nextReviewAt).getTime() <= t;
    }).sort(function (a, b) { return (b.priority || 0) - (a.priority || 0); });
  }

  /**
   * Update a review item after it is re-attempted.
   * Correct → lengthen interval (1→3→7→14 days), 4th correct = mastered (drop).
   * Incorrect → reset to +1 day and bump priority.
   * Returns { item, mastered }.
   */
  function scheduleReview(item, wasCorrect, nowMs) {
    var t = nowMs == null ? Date.now() : nowMs;
    var it = JSON.parse(JSON.stringify(item));
    it.attempts = (it.attempts || 0) + 1;
    if (wasCorrect) {
      it.correctReviews = (it.correctReviews || 0) + 1;
      if (it.correctReviews >= SPACED_INTERVALS.length) {
        return { item: it, mastered: true };
      }
      var days = SPACED_INTERVALS[it.correctReviews];
      it.nextReviewAt = nowIso(t + days * DAY_MS);
      it.priority = Math.max(1, (it.priority || 1) - 1);
    } else {
      it.correctReviews = 0;
      it.nextReviewAt = nowIso(t + SPACED_INTERVALS[0] * DAY_MS);
      it.priority = (it.priority || 1) + 1;
    }
    return { item: it, mastered: false };
  }

  // ─── Seeded fallback selection ─────────────────────────────────────────────
  /**
   * Pick a seeded question matching the criteria, avoiding used ids. Falls back
   * progressively (relax difficulty → relax type → relax topic → relax unit).
   */
  function pickSeeded(bank, criteria, usedIds) {
    criteria = criteria || {};
    var used = usedIds || [];
    function avail(list) { return list.filter(function (q) { return used.indexOf(q.id) === -1; }); }
    var pool = avail(bank || []);
    if (pool.length === 0) pool = (bank || []).slice(); // allow repeats if exhausted

    var filters = [
      function (q) { return (!criteria.unitId || q.unitId === criteria.unitId); },
      function (q) { return (!criteria.topicId || q.topicId === criteria.topicId); },
      function (q) { return (!criteria.questionType || q.questionType === criteria.questionType); },
      function (q) { return (!criteria.difficulty || q.difficulty === criteria.difficulty); }
    ];
    // Apply all filters, then progressively drop the last filter until non-empty.
    for (var drop = 0; drop <= filters.length; drop++) {
      var active = filters.slice(0, filters.length - drop);
      var res = pool.filter(function (q) { return active.every(function (f) { return f(q); }); });
      if (res.length) {
        var idx = Math.abs(hashStr((criteria.seed || '') + res.length)) % res.length;
        return res[idx];
      }
    }
    return pool[0] || null;
  }

  function hashStr(s) {
    s = String(s); var h = 0;
    for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; }
    return h;
  }

  // ─── Exports (browser global + CommonJS) ───────────────────────────────────
  var FAQS = {
    COURSE_IDS: COURSE_IDS,
    COURSE_DISPLAY: COURSE_DISPLAY,
    SLUG_TO_ID: SLUG_TO_ID,
    CATEGORY: CATEGORY,
    DIFFICULTIES: DIFFICULTIES,
    BLOOM_LEVELS: BLOOM_LEVELS,
    STREAM_MODES: STREAM_MODES,
    QUESTION_TYPES: QUESTION_TYPES,
    MASTERY_DELTA: MASTERY_DELTA,
    SPACED_INTERVALS: SPACED_INTERVALS,
    DAY_MS: DAY_MS,
    clamp: clamp,
    hashStr: hashStr,
    getCourseIdFromSlug: getCourseIdFromSlug,
    isValidCourseId: isValidCourseId,
    getQuestionTypeForCourse: getQuestionTypeForCourse,
    masteryDelta: masteryDelta,
    applyAttemptToMastery: applyAttemptToMastery,
    difficultyForMastery: difficultyForMastery,
    nextDifficulty: nextDifficulty,
    pickTopic: pickTopic,
    allTopics: allTopics,
    validateQuestion: validateQuestion,
    isWritten: isWritten,
    isObjective: isObjective,
    extractJson: extractJson,
    evaluateLocally: evaluateLocally,
    addToReviewQueue: addToReviewQueue,
    removeReviewItem: removeReviewItem,
    dueReviewItems: dueReviewItems,
    scheduleReview: scheduleReview,
    pickSeeded: pickSeeded
  };

  if (typeof window !== 'undefined') { window.FAQS = FAQS; }
  if (typeof module !== 'undefined' && module.exports) { module.exports = FAQS; }
})();
