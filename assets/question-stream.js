/**
 * Five & A+ — AI Question Stream · BROWSER UI + ORCHESTRATION
 * ---------------------------------------------------------------------------
 * Renders the adaptive practice stream into <div class="qstream-mount"> on a
 * course page. Pure logic lives in assets/qstream/core.js (window.FAQS); the
 * per-course framework + seeded bank is loaded by assets/qstream/data/<id>.js
 * (window.__FA_QSTREAM_DATA__). AI generation/evaluation is OPTIONAL and runs
 * server-side via /api/question — if it is unavailable the stream falls back to
 * the seeded bank so the feature always works offline (e.g. on GitHub Pages).
 *
 * No API keys are ever read or stored in the browser.
 */
(function () {
  'use strict';

  var FAQS = window.FAQS;
  if (!FAQS) { console.warn('[qstream] core.js (window.FAQS) not loaded'); return; }

  // ─── Safe storage (mirrors app.js _store; private-browsing fallback) ────────
  var _store = (function () {
    try {
      window.localStorage.setItem('__qs__', '1'); window.localStorage.removeItem('__qs__');
      return window.localStorage;
    } catch (e) {
      var m = {};
      return {
        getItem: function (k) { return m[k] || null; },
        setItem: function (k, v) { m[k] = String(v); },
        removeItem: function (k) { delete m[k]; }
      };
    }
  })();

  function readJson(key, fallback) {
    try { var v = _store.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  }
  function writeJson(key, val) {
    try { _store.setItem(key, JSON.stringify(val)); } catch (e) { /* quota */ }
  }

  // ─── Config (overridable before this script via window.__FA_QSTREAM_CONFIG__) ─
  var CFG = Object.assign({
    aiEndpoint: '/api/question',
    aiEnabled: true,        // attempt server AI; auto-disables for the session on failure
    examSetSize: 5
  }, window.__FA_QSTREAM_CONFIG__ || {});

  // ─── Storage facade, scoped per course ──────────────────────────────────────
  function Store(courseId) {
    var P = 'qs-';
    var K = {
      progress: P + 'progress-' + courseId,
      attempts: P + 'attempts-' + courseId,
      review: P + 'review-' + courseId,
      cache: P + 'cache-' + courseId,
      session: P + 'session-' + courseId
    };
    return {
      getProgress: function () { return readJson(K.progress, []); },
      saveProgress: function (list) { writeJson(K.progress, list); },
      getAttempts: function () { return readJson(K.attempts, []); },
      saveAttempt: function (a) {
        var list = readJson(K.attempts, []); list.push(a);
        if (list.length > 200) list = list.slice(-200);
        writeJson(K.attempts, list);
      },
      getReview: function () { return readJson(K.review, []); },
      saveReview: function (list) { writeJson(K.review, list); },
      getCache: function () { return readJson(K.cache, []); },
      saveCache: function (list) { if (list.length > 60) list = list.slice(-60); writeJson(K.cache, list); },
      getSession: function () { return readJson(K.session, null); },
      saveSession: function (s) { writeJson(K.session, s); }
    };
  }

  // ─── AI client (server-side proxy; falls back silently) ─────────────────────
  var AIClient = {
    _down: false,
    available: function () { return CFG.aiEnabled && !this._down; },
    _post: function (payload) {
      var self = this;
      return fetch(CFG.aiEndpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      }).catch(function (e) {
        self._down = true; // stop hammering a missing/erroring endpoint this session
        return null;
      });
    },
    generate: function (input) {
      return this._post(Object.assign({ action: 'generate' }, input));
    },
    evaluate: function (input) {
      return this._post(Object.assign({ action: 'evaluate' }, input));
    }
  };

  // ─── DOM helper ─────────────────────────────────────────────────────────────
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null) return;
      if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k === 'text') node.textContent = v;
      else if (k.slice(0, 2) === 'on' && typeof v === 'function') node.addEventListener(k.slice(2), v);
      else if (k.slice(0, 5) === 'data-' || k.slice(0, 5) === 'aria-' || k === 'role' || k === 'for' || k === 'type' || k === 'value' || k === 'placeholder' || k === 'min' || k === 'step' || k === 'name' || k === 'disabled' || k === 'selected' || k === 'rows') node.setAttribute(k, v);
      else node[k] = v;
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function typeset(node) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      try { window.MathJax.typesetPromise([node]); } catch (e) {}
    }
  }

  // ─── Stream controller ──────────────────────────────────────────────────────
  function Stream(mount, courseId, framework, bank) {
    var store = Store(courseId);
    var state = {
      courseId: courseId, mode: 'practice', selectedUnitId: '', selectedTopicId: '',
      difficultyPref: 'adaptive', currentDifficulty: 'medium',
      previousQuestionIds: [], recentResults: [], recentTopicIds: [],
      answeredCount: 0, correctCount: 0, streak: 0,
      examSet: null // {answered, correct, items:[]} when in exam mode
    };
    var current = null;     // current APQuestion
    var startedAt = 0;
    var els = {};           // cached DOM regions

    // ── progress + mastery ──
    function progress() { return store.getProgress(); }
    function masteryRecord(unitId, topicId) {
      return progress().filter(function (m) { return m.unitId === unitId && m.topicId === topicId; })[0];
    }
    function recordAttempt(q, answer, evalResult, timeSec) {
      // mastery
      var list = progress();
      var idx = -1;
      for (var i = 0; i < list.length; i++) { if (list[i].unitId === q.unitId && list[i].topicId === q.topicId) { idx = i; break; } }
      var prev = idx >= 0 ? list[idx] : { courseId: courseId, unitId: q.unitId, topicId: q.topicId, mastery: 0, attempts: 0, correct: 0, incorrect: 0 };
      var selfGraded = evalResult.selfGraded === true;
      var correct = evalResult.isCorrect === true || (evalResult.percentScore != null && evalResult.percentScore >= 60);
      // Offline written answers are self-assessed: don't move mastery up or down.
      if (!selfGraded) {
        var updated = FAQS.applyAttemptToMastery(prev, q.difficulty, correct);
        updated.courseId = courseId; updated.unitId = q.unitId; updated.topicId = q.topicId;
        if (idx >= 0) list[idx] = updated; else list.push(updated);
        store.saveProgress(list);
      }

      store.saveAttempt({
        id: 'at-' + q.id + '-' + state.answeredCount, questionId: q.id, courseId: courseId,
        unitId: q.unitId, topicId: q.topicId, answer: String(answer),
        isCorrect: evalResult.isCorrect, score: evalResult.score, maxScore: evalResult.maxScore,
        timeSpentSeconds: timeSec, submittedAt: new Date().toISOString(), feedback: evalResult
      });

      // review queue (skip for self-graded written answers — correctness unknown)
      var review = store.getReview();
      if (!selfGraded) {
        if (state.mode === 'review' || state.mode === 'spaced') {
          var item = review.filter(function (it) { return it.question && it.question.id === q.id; })[0];
          if (item) {
            var sched = FAQS.scheduleReview(item, correct);
            review = FAQS.removeReviewItem(review, item.id);
            if (!sched.mastered) review.push(sched.item);
          } else if (!correct) {
            review = FAQS.addToReviewQueue(review, q, 'missed');
          }
        } else if (!correct) {
          review = FAQS.addToReviewQueue(review, q, 'missed');
        }
      }
      store.saveReview(review);

      // counters
      state.answeredCount++;
      if (!selfGraded) {
        if (correct) { state.correctCount++; state.streak++; } else { state.streak = 0; }
        state.recentResults.push(correct); if (state.recentResults.length > 6) state.recentResults.shift();
      }
      state.recentTopicIds.push(q.topicId); if (state.recentTopicIds.length > 6) state.recentTopicIds.shift();
      if (state.previousQuestionIds.indexOf(q.id) === -1) state.previousQuestionIds.push(q.id);
      if (state.examSet) { state.examSet.answered++; if (correct) state.examSet.correct++; state.examSet.items.push({ q: q, correct: correct }); }
      store.saveSession(state);
      return correct;
    }

    // ── choose criteria for the next question ──
    function nextCriteria() {
      var topic = FAQS.pickTopic(framework, progress(), {
        selectedUnitId: state.selectedUnitId, selectedTopicId: state.selectedTopicId,
        recentTopicIds: state.recentTopicIds, mode: state.mode
      });
      var m = topic ? masteryRecord(topic.unitId, topic.topicId) : null;
      var mastery = m ? m.mastery : 0;
      var diff;
      if (state.difficultyPref && state.difficultyPref !== 'adaptive') diff = state.difficultyPref;
      else diff = FAQS.nextDifficulty(mastery, state.recentResults, state.mode, FAQS.hashStr(courseId + state.answeredCount));
      state.currentDifficulty = diff;
      var type = FAQS.getQuestionTypeForCourse(courseId, state.mode, mastery, framework, FAQS.hashStr((topic && topic.topicId || '') + state.answeredCount));
      return { unitId: topic && topic.unitId, topicId: topic && topic.topicId, topicName: topic && topic.topicName, unitName: topic && topic.unitName, difficulty: diff, questionType: type, mastery: mastery };
    }

    // ── obtain next question: review queue → cache → AI → seeded ──
    function getNextQuestion() {
      // Review / spaced modes pull from the queue first.
      if (state.mode === 'review' || state.mode === 'spaced') {
        var due = FAQS.dueReviewItems(store.getReview());
        var fresh = due.filter(function (it) { return state.previousQuestionIds.indexOf(it.question.id) === -1; });
        var pick = (fresh[0] || due[0]);
        if (pick) return Promise.resolve({ question: pick.question, source: 'review' });
        // queue empty → fall through to generate same-skill practice
      }

      var crit = nextCriteria();
      crit.seed = courseId + '-' + state.answeredCount;

      // cache
      var cache = store.getCache();
      var cached = cache.filter(function (q) {
        return state.previousQuestionIds.indexOf(q.id) === -1 &&
          (!crit.unitId || q.unitId === crit.unitId) &&
          (!crit.topicId || q.topicId === crit.topicId) &&
          q.difficulty === crit.difficulty;
      })[0];
      if (cached) return Promise.resolve({ question: cached, source: 'cache' });

      // AI
      if (AIClient.available()) {
        return AIClient.generate({
          courseId: courseId, courseName: framework.displayName, unitId: crit.unitId, unitName: crit.unitName,
          topicId: crit.topicId, topicName: crit.topicName, questionType: crit.questionType,
          difficulty: crit.difficulty, mode: state.mode, previousQuestionPrompts: lastPrompts(6), count: 2
        }).then(function (resp) {
          var qs = (resp && resp.questions) || [];
          var valid = [];
          qs.forEach(function (q) {
            var res = FAQS.validateQuestion(q, framework);
            if (res.valid) valid.push(res.repairedQuestion);
          });
          if (valid.length) {
            var c = store.getCache().concat(valid.slice(1));
            store.saveCache(c);
            return { question: valid[0], source: 'ai' };
          }
          return seeded(crit);
        });
      }
      return Promise.resolve(seeded(crit));
    }

    function seeded(crit) {
      var q = FAQS.pickSeeded(bank, {
        unitId: crit.unitId, topicId: crit.topicId, questionType: crit.questionType,
        difficulty: crit.difficulty, seed: crit.seed
      }, state.previousQuestionIds);
      if (!q) q = FAQS.pickSeeded(bank, { seed: crit.seed }, state.previousQuestionIds);
      return { question: q, source: 'seeded' };
    }

    function lastPrompts(n) {
      var attempts = store.getAttempts().slice(-n);
      return attempts.map(function (a) { return a.questionId; });
    }

    // ── evaluation: AI for written when available, else local ──
    function evaluate(q, answer, timeSec) {
      var useAi = AIClient.available() && FAQS.isWritten(q.questionType) && q.questionType !== 'multi-select';
      if (useAi) {
        return AIClient.evaluate({ question: q, studentAnswer: answer, timeSpentSeconds: timeSec })
          .then(function (resp) {
            if (resp && (resp.explanation || resp.score != null || resp.isCorrect != null)) return resp;
            return FAQS.evaluateLocally(q, answer, timeSec);
          });
      }
      return Promise.resolve(FAQS.evaluateLocally(q, answer, timeSec));
    }

    // ════════════════════════════ RENDERING ════════════════════════════════
    function render() {
      mount.innerHTML = '';
      mount.appendChild(buildHeader());
      els.controls = buildControls();
      mount.appendChild(els.controls);
      els.stage = el('div', { class: 'qs-stage', 'aria-live': 'polite' });
      mount.appendChild(els.stage);
      mount.appendChild(buildDashboard());
      renderIdle();
    }

    function buildHeader() {
      return el('div', { class: 'qs-head' }, [
        el('div', { class: 'qs-head-main' }, [
          el('span', { class: 'qs-spark', 'aria-hidden': 'true', html: sparkSvg() }),
          el('div', {}, [
            el('h2', { class: 'qs-title', text: 'AI Question Stream' }),
            el('p', { class: 'qs-sub', text: 'Adaptive AP-style practice that learns what you need next.' })
          ])
        ]),
        el('span', { class: 'qs-mode-badge', id: 'qs-source-note', text: AIClient.available() ? 'AI-ready' : 'Practice bank' })
      ]);
    }

    function buildControls() {
      var wrap = el('div', { class: 'qs-controls' });

      var modeField = field('Mode', selectEl('qs-mode', [
        ['practice', 'Practice'], ['exam', 'Exam'], ['review', 'Review'], ['spaced', 'Spaced']
      ], state.mode, function (v) { state.mode = v; }));

      var unitOpts = [['', 'All Units']].concat(framework.units.map(function (u) { return [u.id, u.name]; }));
      var unitSel = selectEl('qs-unit', unitOpts, state.selectedUnitId, function (v) {
        state.selectedUnitId = v; refreshTopicOptions(v);
      });
      var unitField = field('Unit', unitSel);

      var topicSel = selectEl('qs-topic', topicOptions(state.selectedUnitId), state.selectedTopicId, function (v) { state.selectedTopicId = v; });
      els.topicSel = topicSel;
      var topicField = field('Topic', topicSel);

      var diffField = field('Difficulty', selectEl('qs-diff', [
        ['adaptive', 'Adaptive'], ['easy', 'Easy'], ['medium', 'Medium'], ['hard', 'Hard'], ['exam-level', 'Exam-Level']
      ], state.difficultyPref, function (v) { state.difficultyPref = v; }));

      var startBtn = el('button', { class: 'qs-btn qs-btn-primary', type: 'button', text: 'Start Stream', onclick: start });
      var resetBtn = el('button', { class: 'qs-btn qs-btn-ghost', type: 'button', text: 'Reset', onclick: resetProgress });

      wrap.appendChild(modeField); wrap.appendChild(unitField); wrap.appendChild(topicField); wrap.appendChild(diffField);
      wrap.appendChild(el('div', { class: 'qs-control-actions' }, [startBtn, resetBtn]));
      return wrap;
    }

    function refreshTopicOptions(unitId) {
      var sel = els.topicSel;
      sel.innerHTML = '';
      topicOptions(unitId).forEach(function (o) {
        sel.appendChild(el('option', { value: o[0], selected: o[0] === '' ? 'selected' : null }, [o[1]]));
      });
      state.selectedTopicId = '';
    }
    function topicOptions(unitId) {
      var opts = [['', 'Any Topic']];
      framework.units.forEach(function (u) {
        if (unitId && u.id !== unitId) return;
        u.topics.forEach(function (t) { opts.push([t.id, t.name]); });
      });
      return opts;
    }

    function field(label, control) {
      var id = control.id || ('qs-f-' + label);
      control.id = id;
      return el('div', { class: 'qs-field' }, [el('label', { class: 'qs-label', for: id }, [label]), control]);
    }
    function selectEl(id, opts, value, onChange) {
      var sel = el('select', { id: id, class: 'qs-select', onchange: function (e) { onChange(e.target.value); } });
      opts.forEach(function (o) {
        sel.appendChild(el('option', { value: o[0], selected: o[0] === value ? 'selected' : null }, [o[1]]));
      });
      return sel;
    }

    // ── stage states ──
    function renderIdle() {
      els.stage.innerHTML = '';
      var review = FAQS.dueReviewItems(store.getReview());
      els.stage.appendChild(el('div', { class: 'qs-idle' }, [
        el('p', { class: 'qs-idle-text', text: 'Choose your settings and press Start. Questions adapt to your mastery — get a streak going and difficulty climbs toward exam level.' }),
        review.length ? el('p', { class: 'qs-idle-review', text: '🔁 ' + review.length + ' question(s) due for review. Switch Mode to Review to focus on them.' }) : null
      ]));
    }

    function renderLoading() {
      els.stage.innerHTML = '';
      var sk = el('div', { class: 'qs-skeleton' }, [
        el('div', { class: 'qs-sk-line qs-sk-badges' }), el('div', { class: 'qs-sk-line w90' }),
        el('div', { class: 'qs-sk-line w80' }), el('div', { class: 'qs-sk-line w60' }),
        el('div', { class: 'qs-sk-opt' }), el('div', { class: 'qs-sk-opt' }), el('div', { class: 'qs-sk-opt' })
      ]);
      els.stage.appendChild(sk);
    }

    function start() {
      state.previousQuestionIds = []; state.recentResults = []; state.recentTopicIds = [];
      state.answeredCount = 0; state.correctCount = 0; state.streak = 0;
      state.examSet = state.mode === 'exam' ? { answered: 0, correct: 0, items: [] } : null;
      store.saveSession(state);
      advance();
    }

    function advance() {
      renderLoading();
      getNextQuestion().then(function (res) {
        if (!res || !res.question) { renderError('No question available. Try a different unit or mode.'); return; }
        current = res.question; startedAt = Date.now();
        renderQuestion(res.question, res.source);
        updateDashboard();
        updateSourceNote(res.source);
      }).catch(function (e) {
        renderError('Something went wrong loading a question. A local practice question will be used.');
      });
    }

    function updateSourceNote(source) {
      var note = document.getElementById('qs-source-note');
      if (!note) return;
      var label = source === 'ai' ? 'AI-generated' : source === 'review' ? 'Review' : source === 'cache' ? 'AI-cached' : 'Practice bank';
      note.textContent = label;
    }

    // ── question card ──
    function renderQuestion(q, source) {
      els.stage.innerHTML = '';
      var card = el('div', { class: 'qs-card' });

      card.appendChild(el('div', { class: 'qs-badges' }, [
        badge(q.unitName || q.unitId, 'unit'),
        q.topicName ? badge(q.topicName, 'topic') : null,
        badge(prettyType(q.questionType), 'type'),
        badge(cap(q.difficulty), 'diff diff-' + q.difficulty),
        el('span', { class: 'qs-time', text: '⏱ ~' + Math.round((q.estimatedTimeSeconds || 90) / 60) + ' min' })
      ]));

      if (q.stimulus) card.appendChild(el('div', { class: 'qs-stimulus', html: '<strong>Stimulus.</strong> ' + esc(q.stimulus) }));
      if (q.imagePrompt && !q.imageUrl) card.appendChild(el('div', { class: 'qs-imageprompt', html: '🖼 <em>Imagine the described work:</em> ' + esc(q.imagePrompt) }));
      if (q.musicNotationPlaceholder) card.appendChild(el('div', { class: 'qs-notation', html: '🎼 ' + esc(q.musicNotationPlaceholder) }));
      if (q.graphDescription) card.appendChild(el('div', { class: 'qs-graph', html: '📈 ' + esc(q.graphDescription) }));

      card.appendChild(el('div', { class: 'qs-prompt', html: inlineMd(q.prompt) }));

      if (q.codeBlock) card.appendChild(el('pre', { class: 'qs-code' }, [el('code', { text: q.codeBlock })]));
      if (q.dataTable) card.appendChild(buildTable(q.dataTable));

      card.appendChild(buildAnswerInput(q));

      var submit = el('button', { class: 'qs-btn qs-btn-primary qs-submit', type: 'button', text: 'Submit Answer', onclick: function () { onSubmit(q); } });
      card.appendChild(submit);
      els.submit = submit;

      els.stage.appendChild(card);
      typeset(card);
      var firstInput = card.querySelector('input,textarea');
      if (firstInput) firstInput.focus();
    }

    function buildAnswerInput(q) {
      var box = el('div', { class: 'qs-answer' });
      var type = q.questionType;
      if (type === 'mcq' || type === 'multi-select') {
        var multi = type === 'multi-select';
        var group = el('div', { class: 'qs-choices', role: multi ? 'group' : 'radiogroup', 'aria-label': 'Answer choices' });
        (q.answerChoices || []).forEach(function (c) {
          var inputId = 'qs-c-' + q.id + '-' + c.id;
          var input = el('input', { type: multi ? 'checkbox' : 'radio', name: 'qs-choice-' + q.id, id: inputId, value: c.id, class: 'qs-choice-input' });
          var label = el('label', { class: 'qs-choice', for: inputId }, [
            el('span', { class: 'qs-choice-key', text: c.id }), el('span', { class: 'qs-choice-text', html: inlineMd(c.text) })
          ]);
          label.insertBefore(input, label.firstChild);
          group.appendChild(label);
        });
        box.appendChild(group);
      } else if (type === 'calculation') {
        box.appendChild(el('input', { type: 'text', class: 'qs-input qs-numeric', id: 'qs-num-' + q.id, placeholder: 'Enter your answer (units optional)…', 'aria-label': 'Numeric answer' }));
      } else if (type === 'coding' || type === 'code-tracing') {
        box.appendChild(el('textarea', { class: 'qs-input qs-codebox', id: 'qs-code-' + q.id, rows: '8', placeholder: type === 'code-tracing' ? 'Enter the exact program output…' : 'Write your code or pseudocode…', 'aria-label': 'Code answer', spellcheck: false }));
      } else {
        box.appendChild(el('textarea', { class: 'qs-input qs-freebox', id: 'qs-free-' + q.id, rows: '6', placeholder: 'Write your response…', 'aria-label': 'Free response' }));
      }
      return box;
    }

    function readAnswer(q) {
      var type = q.questionType;
      if (type === 'mcq') {
        var sel = els.stage.querySelector('input[name="qs-choice-' + q.id + '"]:checked');
        return sel ? sel.value : '';
      }
      if (type === 'multi-select') {
        return Array.prototype.slice.call(els.stage.querySelectorAll('input[name="qs-choice-' + q.id + '"]:checked')).map(function (i) { return i.value; }).join(',');
      }
      var input = els.stage.querySelector('.qs-input');
      return input ? input.value : '';
    }

    function onSubmit(q) {
      var answer = readAnswer(q);
      if (!answer || !String(answer).trim()) { flash('Enter an answer first.'); return; }
      if (els.submit) { els.submit.disabled = true; els.submit.textContent = 'Checking…'; }
      var timeSec = Math.round((Date.now() - startedAt) / 1000);
      evaluate(q, answer, timeSec).then(function (result) {
        recordAttempt(q, answer, result, timeSec);
        renderFeedback(q, answer, result);
        updateDashboard();
      });
    }

    // ── feedback ──
    function renderFeedback(q, answer, r) {
      lockChoices(q, answer, r);
      var verdict;
      if (r.selfGraded) verdict = el('div', { class: 'qs-verdict qs-verdict-self' }, [el('strong', { text: '📝 Self-assess' }), el('span', { text: ' Grade your response with the rubric below.' })]);
      else if (r.isCorrect) verdict = el('div', { class: 'qs-verdict qs-verdict-correct' }, [el('strong', { text: '✓ Correct' }), r.percentScore != null ? el('span', { text: '  ' + r.percentScore + '%' }) : null]);
      else if (r.percentScore != null && r.percentScore > 0) verdict = el('div', { class: 'qs-verdict qs-verdict-partial' }, [el('strong', { text: '◐ Partial' }), el('span', { text: '  ' + r.percentScore + '%' })]);
      else verdict = el('div', { class: 'qs-verdict qs-verdict-wrong' }, [el('strong', { text: '✗ Not quite' })]);

      var panel = el('div', { class: 'qs-feedback' }, [verdict]);

      if (!r.selfGraded && (q.questionType === 'mcq' || q.questionType === 'multi-select' || q.questionType === 'calculation' || q.questionType === 'code-tracing')) {
        panel.appendChild(el('p', { class: 'qs-fb-row', html: '<strong>Correct answer:</strong> ' + inlineMd(String(r.correctAnswer)) }));
      }
      if (r.explanation) panel.appendChild(el('div', { class: 'qs-fb-explain', html: '<strong>Explanation.</strong> ' + inlineMd(r.explanation) }));
      if (r.modelAnswer) panel.appendChild(detail('Model answer', inlineMd(r.modelAnswer)));
      if (q.rubric && q.rubric.length) panel.appendChild(buildRubric(q.rubric, r.rubricBreakdown));

      if (r.strengths && r.strengths.length) panel.appendChild(bullets('What you did well', r.strengths, 'good'));
      if (r.improvements && r.improvements.length) panel.appendChild(bullets('To improve', r.improvements, 'warn'));
      if (r.nextRecommendation) panel.appendChild(el('p', { class: 'qs-fb-next', html: '➡ <strong>Next:</strong> ' + esc(r.nextRecommendation) }));

      var contLabel = 'Continue';
      if (state.examSet && state.examSet.answered >= CFG.examSetSize) contLabel = 'See Set Results';
      var cont = el('button', { class: 'qs-btn qs-btn-primary', type: 'button', text: contLabel, onclick: onContinue });
      panel.appendChild(cont);

      els.stage.appendChild(panel);
      typeset(panel);
      cont.focus();
      cont.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function onContinue() {
      if (state.examSet && state.examSet.answered >= CFG.examSetSize) { renderExamSummary(); return; }
      advance();
    }

    function lockChoices(q, answer, r) {
      if (q.questionType !== 'mcq' && q.questionType !== 'multi-select') return;
      var correctIds = String(q.correctAnswer).split(/[,\s]+/).filter(Boolean);
      var chosen = String(answer).split(/[,\s]+/).filter(Boolean);
      els.stage.querySelectorAll('.qs-choice').forEach(function (label) {
        var input = label.querySelector('input'); if (input) input.disabled = true;
        var id = input ? input.value : '';
        if (correctIds.indexOf(id) !== -1) label.classList.add('qs-choice-correct');
        else if (chosen.indexOf(id) !== -1) label.classList.add('qs-choice-wrong');
      });
      if (els.submit) els.submit.style.display = 'none';
    }

    function buildRubric(rubric, breakdown) {
      var rows = rubric.map(function (r) {
        var b = (breakdown || []).filter(function (x) { return x.rubricRowId === r.id; })[0];
        return el('tr', {}, [
          el('td', { class: 'qs-rub-pts', text: (b ? b.earned : 0) + '/' + r.pointValue }),
          el('td', {}, [el('div', { class: 'qs-rub-crit', text: r.criterion }), r.evidenceRequired ? el('div', { class: 'qs-rub-ev', text: r.evidenceRequired }) : null])
        ]);
      });
      return detail('Scoring rubric (' + rubric.reduce(function (s, r) { return s + r.pointValue; }, 0) + ' pts)',
        null, el('table', { class: 'qs-rubric' }, [el('tbody', {}, rows)]));
    }

    function buildTable(dt) {
      var thead = el('thead', {}, [el('tr', {}, (dt.columns || []).map(function (c) { return el('th', { text: c }); }))]);
      var tbody = el('tbody', {}, (dt.rows || []).map(function (row) {
        return el('tr', {}, row.map(function (cell) { return el('td', { text: cell }); }));
      }));
      return el('div', { class: 'qs-table-wrap' }, [el('table', { class: 'qs-data-table' }, [thead, tbody])]);
    }

    // ── dashboard ──
    function buildDashboard() {
      els.dash = el('div', { class: 'qs-dash' });
      updateDashboard();
      return els.dash;
    }
    function updateDashboard() {
      if (!els.dash) return;
      var prog = progress();
      var attempts = store.getAttempts();
      var totalUnits = framework.units.length;
      var avgMastery = prog.length ? Math.round(prog.reduce(function (s, m) { return s + (m.mastery || 0); }, 0) / prog.length) : 0;
      var acc = state.answeredCount ? Math.round((state.correctCount / state.answeredCount) * 100) : (attempts.length ? Math.round(attempts.filter(function (a) { return a.isCorrect; }).length / attempts.length * 100) : 0);
      var weak = prog.slice().filter(function (m) { return m.attempts > 0; }).sort(function (a, b) { return a.mastery - b.mastery; }).slice(0, 3);
      var reviewCount = store.getReview().length;

      els.dash.innerHTML = '';
      els.dash.appendChild(masteryMeter(avgMastery));
      els.dash.appendChild(statRow([
        ['Answered', state.answeredCount || attempts.length],
        ['Accuracy', acc + '%'],
        ['Streak', state.streak],
        ['Review queue', reviewCount]
      ]));
      if (weak.length) {
        els.dash.appendChild(el('div', { class: 'qs-weak' }, [
          el('span', { class: 'qs-weak-label', text: 'Focus areas:' })
        ].concat(weak.map(function (m) {
          var name = topicName(m.unitId, m.topicId);
          return el('span', { class: 'qs-weak-chip', text: name + ' · ' + Math.round(m.mastery) });
        }))));
      }
      if (reviewCount) {
        els.dash.appendChild(el('button', { class: 'qs-btn qs-btn-ghost qs-review-btn', type: 'button', text: 'Review ' + reviewCount + ' missed →', onclick: function () {
          state.mode = 'review'; var sel = document.getElementById('qs-mode'); if (sel) sel.value = 'review'; start();
        } }));
      }
    }
    function topicName(unitId, topicId) {
      var n = topicId;
      framework.units.forEach(function (u) { u.topics.forEach(function (t) { if (t.id === topicId) n = t.name; }); });
      return n;
    }
    function masteryMeter(pct) {
      return el('div', { class: 'qs-meter' }, [
        el('div', { class: 'qs-meter-head' }, [el('span', { text: 'Course mastery' }), el('span', { class: 'qs-meter-val', text: pct + '%' })]),
        el('div', { class: 'qs-meter-track' }, [el('div', { class: 'qs-meter-fill', style: 'width:' + pct + '%' })])
      ]);
    }
    function statRow(stats) {
      return el('div', { class: 'qs-stats' }, stats.map(function (s) {
        return el('div', { class: 'qs-stat' }, [el('span', { class: 'qs-stat-val', text: String(s[1]) }), el('span', { class: 'qs-stat-label', text: s[0] })]);
      }));
    }

    function renderExamSummary() {
      var setData = state.examSet || { answered: 0, correct: 0, items: [] };
      var acc = setData.answered ? Math.round(setData.correct / setData.answered * 100) : 0;
      var weakTopics = {};
      setData.items.forEach(function (it) { if (!it.correct) { var n = topicName(it.q.unitId, it.q.topicId); weakTopics[n] = (weakTopics[n] || 0) + 1; } });
      var weakList = Object.keys(weakTopics);
      els.stage.innerHTML = '';
      els.stage.appendChild(el('div', { class: 'qs-card qs-examsummary' }, [
        el('h3', { class: 'qs-exam-title', text: 'Exam Set Complete' }),
        statRow([['Score', setData.correct + '/' + setData.answered], ['Accuracy', acc + '%']]),
        weakList.length ? el('p', { class: 'qs-fb-row', html: '<strong>Weak topics:</strong> ' + esc(weakList.join(', ')) }) : el('p', { class: 'qs-fb-row', text: 'Strong set — no weak topics flagged.' }),
        el('p', { class: 'qs-fb-next', html: '➡ <strong>Recommended next:</strong> ' + esc(weakList.length ? ('Drill ' + weakList[0]) : 'Move to a new unit or raise difficulty.') }),
        el('button', { class: 'qs-btn qs-btn-primary', type: 'button', text: 'Next Set', onclick: function () { state.examSet = { answered: 0, correct: 0, items: [] }; advance(); } })
      ]));
    }

    function renderError(msg) {
      els.stage.innerHTML = '';
      els.stage.appendChild(el('div', { class: 'qs-errorfb' }, [
        el('p', { text: '⚠ ' + msg }),
        el('p', { class: 'qs-error-sub', text: 'AI generation is unavailable right now, so we loaded a local practice question instead.' }),
        el('button', { class: 'qs-btn qs-btn-primary', type: 'button', text: 'Try Again', onclick: advance })
      ]));
    }

    function resetProgress() {
      if (!window.confirm('Reset your progress, mastery, and review queue for ' + framework.displayName + '?')) return;
      store.saveProgress([]); store.saveReview([]); store.saveCache([]); store.saveSession(null);
      state.answeredCount = 0; state.correctCount = 0; state.streak = 0;
      state.previousQuestionIds = []; state.recentResults = []; state.recentTopicIds = [];
      renderIdle(); updateDashboard();
    }

    // ── misc ──
    function flash(msg) {
      var n = el('div', { class: 'qs-flash', text: msg });
      els.stage.appendChild(n);
      setTimeout(function () { n.remove(); }, 2200);
    }
    function bullets(title, items, kind) {
      return el('div', { class: 'qs-fb-list qs-fb-' + kind }, [
        el('div', { class: 'qs-fb-list-title', text: title }),
        el('ul', {}, items.map(function (i) { return el('li', { html: inlineMd(i) }); }))
      ]);
    }
    function detail(summary, html, node) {
      var d = el('details', { class: 'qs-detail' });
      d.appendChild(el('summary', { text: summary }));
      if (html) d.appendChild(el('div', { class: 'qs-detail-body', html: html }));
      if (node) d.appendChild(node);
      return d;
    }
    function badge(text, kind) { return el('span', { class: 'qs-badge qs-badge-' + kind, text: text }); }

    return { render: render };
  }

  // ─── helpers (module scope) ─────────────────────────────────────────────────
  function cap(s) { return String(s || '').replace(/(^|[-\s])(\w)/g, function (_, a, b) { return a + b.toUpperCase(); }); }
  function prettyType(t) {
    var map = { mcq: 'Multiple Choice', 'multi-select': 'Multi-Select', 'short-answer': 'Short Answer', frq: 'FRQ', dbq: 'DBQ', leq: 'LEQ', 'rhetorical-analysis': 'Rhetorical Analysis', 'literary-analysis': 'Literary Analysis', synthesis: 'Synthesis', 'argument-essay': 'Argument Essay', coding: 'Coding', 'code-tracing': 'Code Tracing', 'data-analysis': 'Data Analysis', 'graph-interpretation': 'Graph Interpretation', calculation: 'Calculation', 'lab-design': 'Lab Design', 'visual-analysis': 'Visual Analysis', 'art-identification': 'Art Identification', 'music-theory-analysis': 'Music Analysis', 'stimulus-based': 'Stimulus-Based' };
    return map[t] || cap(t);
  }
  function inlineMd(text) {
    // Preserve MathJax delimiters \( \) \[ \]; escape HTML; light markdown.
    var s = esc(text);
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>')
      .replace(/\n/g, '<br>');
    return s;
  }
  function sparkSvg() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/></svg>';
  }

  // ─── Boot ───────────────────────────────────────────────────────────────────
  function boot() {
    var mount = document.querySelector('.qstream-mount');
    if (!mount) return;
    var courseId = mount.getAttribute('data-qs-course');
    if (!courseId) {
      var meta = document.querySelector('meta[name="qs-course"]');
      if (meta) courseId = meta.getAttribute('content');
    }
    if (!courseId) { courseId = FAQS.getCourseIdFromSlug((location.pathname.split('/').pop() || '').replace(/-overview\.html$|-review\.html$|\.html$/, '')); }
    if (!courseId || !FAQS.isValidCourseId(courseId)) { console.warn('[qstream] could not resolve courseId for mount'); return; }

    var data = (window.__FA_QSTREAM_DATA__ || {})[courseId];
    if (!data || !data.framework) {
      mount.innerHTML = '<div class="qs-errorfb"><p>Practice data for this course has not loaded yet.</p></div>';
      return;
    }
    var stream = Stream(mount, courseId, data.framework, data.seededQuestions || []);
    stream.render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
