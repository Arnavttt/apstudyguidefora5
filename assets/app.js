/* Five & A+ — app.js v2 (MCQ + legacy dual-mode, localStorage) */
'use strict';

/* ── Safe storage (private browsing fallback) ──────────────────────────────── */
const _store = (function() {
  try { _store.setItem('__test__','1'); _store.removeItem('__test__'); return window.localStorage; }
  catch(e) {
    var m = {};
    return { getItem: function(k){return m[k]||null;}, setItem: function(k,v){m[k]=String(v);},
             removeItem: function(k){delete m[k];}, get length(){return Object.keys(m).length;},
             key: function(i){return Object.keys(m)[i]||null;} };
  }
})();

/* ── storage keys ─────────────────────────────────────────────────────────── */
const P = 'fa2-';
function key(type, qid) { return P + type + '-' + qid; }

/* ── MCQ helpers (.q-item elements) ─────────────────────────────────────────
   Format:  <div class="q-item" data-qid="...">
              <ul class="q-choices">
                <li class="q-choice" data-correct="true"  onclick="mcqPick(this,'qid')">
                <li class="q-choice" data-correct="false" onclick="mcqPick(this,'qid')">
              </ul>
              <div class="q-explain" id="exp-{qid}" style="display:none">…</div>
            </div>
──────────────────────────────────────────────────────────────────────────── */

function allMcqItems() {
  return Array.from(document.querySelectorAll('.q-item[data-qid]'));
}

function mcqPick(el, qid) {
  var item = el.closest('.q-item');
  if (!item || item.classList.contains('answered')) return;
  item.classList.add('answered');

  var isCorrect = el.dataset.correct === 'true';
  el.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    item.querySelectorAll('.q-choice[data-correct="true"]').forEach(function(c) {
      c.classList.add('show-correct');
    });
  }
  item.querySelectorAll('.q-choice').forEach(function(c) { c.classList.add('picked'); });

  var exp = document.getElementById('exp-' + qid);
  if (exp) exp.style.display = 'block';

  var result = isCorrect ? 'right' : 'wrong';
  var chosenIdx = Array.from(item.querySelectorAll('.q-choice')).indexOf(el);
  _store.setItem(key('mcq-state', qid), result);
  _store.setItem(key('mcq-chosen', qid), chosenIdx);

  updateScores();
  updateBankScore(item.dataset.bank);
}

function loadMcqState() {
  allMcqItems().forEach(function(item) {
    var qid = item.dataset.qid;
    var result = _store.getItem(key('mcq-state', qid));
    var chosenIdx = _store.getItem(key('mcq-chosen', qid));
    if (result === null || chosenIdx === null) return;

    item.classList.add('answered');
    var choices = item.querySelectorAll('.q-choice');
    var chosen = choices[parseInt(chosenIdx, 10)];
    if (!chosen) return;

    chosen.classList.add(result === 'right' ? 'correct' : 'wrong');
    if (result === 'wrong') {
      item.querySelectorAll('.q-choice[data-correct="true"]').forEach(function(c) {
        c.classList.add('show-correct');
      });
    }
    choices.forEach(function(c) { c.classList.add('picked'); });
    var exp = document.getElementById('exp-' + qid);
    if (exp) exp.style.display = 'block';
  });
}

/* ── Legacy textarea helpers (.iq elements) ──────────────────────────────────
   Kept for backward compat with any course pages still using textarea format.
──────────────────────────────────────────────────────────────────────────── */

function allLegacyItems() {
  return Array.from(document.querySelectorAll('.iq[data-qid]'));
}

function setLegacyState(card, status) {
  var qid = card.dataset.qid;
  card.classList.remove('right', 'wrong');
  if (status === 'right' || status === 'wrong') card.classList.add(status);
  var st = card.querySelector('[data-state]');
  if (st) st.textContent = status === 'right' ? 'Correct' : status === 'wrong' ? 'Wrong' : 'Unmarked';
  if (status === 'right' || status === 'wrong') {
    _store.setItem(key('state', qid), status);
  } else {
    _store.removeItem(key('state', qid));
  }
  updateScores();
  updateBankScore(card.dataset.bank);
}

function saveLegacyAnswer(textarea) {
  var card = textarea.closest('.iq');
  if (card) _store.setItem(key('answer', card.dataset.qid), textarea.value);
}

function loadLegacyState() {
  allLegacyItems().forEach(function(card) {
    var qid = card.dataset.qid;
    var ta = card.querySelector('textarea[data-answer]');
    if (ta) {
      var saved = _store.getItem(key('answer', qid));
      if (saved !== null) ta.value = saved;
    }
    setLegacyState(card, _store.getItem(key('state', qid)) || '');
  });
}

/* ── Dashboard + bank scores ─────────────────────────────────────────────── */

function updateScores() {
  /* MCQ counts */
  var mcqItems = allMcqItems();
  var mcqRight = 0, mcqWrong = 0;
  mcqItems.forEach(function(item) {
    var s = _store.getItem(key('mcq-state', item.dataset.qid));
    if (s === 'right') mcqRight++;
    else if (s === 'wrong') mcqWrong++;
  });

  /* Legacy textarea counts */
  var legItems = allLegacyItems();
  var legRight = 0, legWrong = 0, legAnswered = 0;
  legItems.forEach(function(q) {
    if (q.classList.contains('right')) legRight++;
    if (q.classList.contains('wrong')) legWrong++;
    var ta = q.querySelector('textarea');
    if (ta && ta.value.trim()) legAnswered++;
  });

  var total    = mcqItems.length + legItems.length;
  var right    = mcqRight + legRight;
  var wrong    = mcqWrong + legWrong;
  var answered = (mcqRight + mcqWrong) + legAnswered;
  var unmarked = total - right - wrong;
  var pct      = total ? Math.round(right / total * 100) : 0;

  function set(id, val) { var el = document.getElementById(id); if (el) el.textContent = val; }
  set('dash-total',    total);
  set('dash-answered', answered);
  set('dash-right',    right);
  set('dash-wrong',    wrong);
  set('dash-unmarked', unmarked);
  set('dash-pct',      pct + '%');
}

function updateBankScore(bankId) {
  if (!bankId) return;
  var el = document.querySelector('[data-bank-score="' + bankId + '"]');
  if (!el) return;

  /* MCQ in this bank */
  var mcqInBank = allMcqItems().filter(function(i) { return i.dataset.bank === bankId; });
  var mr = 0, mw = 0;
  mcqInBank.forEach(function(i) {
    var s = _store.getItem(key('mcq-state', i.dataset.qid));
    if (s === 'right') mr++; else if (s === 'wrong') mw++;
  });

  /* Legacy in this bank */
  var legInBank = allLegacyItems().filter(function(q) { return q.dataset.bank === bankId; });
  var lr = legInBank.filter(function(q) { return q.classList.contains('right'); }).length;
  var lw = legInBank.filter(function(q) { return q.classList.contains('wrong'); }).length;

  var total = mcqInBank.length + legInBank.length;
  var right = mr + lr;
  var wrong = mw + lw;
  var unmarked = total - right - wrong;
  el.textContent = right + ' / ' + total + ' correct (· ' + wrong + ' wrong)';
}

function refreshAllBankScores() {
  document.querySelectorAll('[data-bank-score]').forEach(function(el) {
    updateBankScore(el.dataset.bankScore);
  });
}

/* ── Reset helpers ───────────────────────────────────────────────────────── */

function resetBank(bankId) {
  if (!confirm('Reset this question bank? All picks and scores will be cleared.')) return;

  /* MCQ reset */
  document.querySelectorAll('.q-item[data-bank="' + bankId + '"]').forEach(function(item) {
    var qid = item.dataset.qid;
    item.classList.remove('answered');
    item.querySelectorAll('.q-choice').forEach(function(c) {
      c.classList.remove('correct', 'wrong', 'show-correct', 'picked');
    });
    var exp = document.getElementById('exp-' + qid);
    if (exp) exp.style.display = 'none';
    _store.removeItem(key('mcq-state', qid));
    _store.removeItem(key('mcq-chosen', qid));
  });

  /* Legacy reset */
  document.querySelectorAll('.iq[data-bank="' + bankId + '"]').forEach(function(card) {
    var ta = card.querySelector('textarea');
    if (ta) ta.value = '';
    card.querySelectorAll('details').forEach(function(d) { d.open = false; });
    _store.removeItem(key('answer', card.dataset.qid));
    setLegacyState(card, '');
  });

  updateScores();
  updateBankScore(bankId);
}

function resetAll() {
  if (!confirm('Clear ALL answers, picks, and lesson checkboxes on this page?')) return;

  /* clear MCQ */
  allMcqItems().forEach(function(item) {
    var qid = item.dataset.qid;
    item.classList.remove('answered');
    item.querySelectorAll('.q-choice').forEach(function(c) {
      c.classList.remove('correct', 'wrong', 'show-correct', 'picked');
    });
    var exp = document.getElementById('exp-' + qid);
    if (exp) exp.style.display = 'none';
    _store.removeItem(key('mcq-state', qid));
    _store.removeItem(key('mcq-chosen', qid));
  });

  /* clear legacy */
  allLegacyItems().forEach(function(q) {
    var ta = q.querySelector('textarea');
    if (ta) ta.value = '';
    q.querySelectorAll('details').forEach(function(d) { d.open = false; });
    _store.removeItem(key('answer', q.dataset.qid));
    setLegacyState(q, '');
  });

  /* clear progress checkboxes */
  document.querySelectorAll('input[data-progress]').forEach(function(cb) {
    cb.checked = false;
    _store.removeItem('fa-progress-' + cb.dataset.progress);
  });

  updateScores();
  refreshAllBankScores();
}

/* ── Global filter toggles ───────────────────────────────────────────────── */

function showGlobal(mode) {
  document.body.classList.remove('global-missed', 'global-correct', 'global-unmarked', 'global-all');
  if (mode === 'missed')   document.body.classList.add('global-missed');
  if (mode === 'correct')  document.body.classList.add('global-correct');
  if (mode === 'unmarked') document.body.classList.add('global-unmarked');
  /* 'all' clears filters — body class already removed above */
}

/* ── Search filter ───────────────────────────────────────────────────────── */

function filterSite() {
  var input = document.getElementById('q');
  if (!input) return;
  var q = input.value.toLowerCase().trim();
  document.querySelectorAll('.course, section[data-search]').forEach(function(el) {
    el.classList.toggle('hidden', !!(q && !el.innerText.toLowerCase().includes(q)));
  });
}

/* ── Navigation helper ───────────────────────────────────────────────────── */

function goBackSafe() {
  if (history.length > 1) history.back();
  else location.href = '../index.html';
}

/* ── Event delegation ────────────────────────────────────────────────────── */

document.addEventListener('input', function(e) {
  if (e.target.matches('textarea[data-answer]')) {
    saveLegacyAnswer(e.target);
    updateScores();
  }
});

document.addEventListener('change', function(e) {
  if (e.target.matches('input[data-progress]')) {
    _store.setItem('fa-progress-' + e.target.dataset.progress, e.target.checked ? '1' : '0');
  }
});

document.addEventListener('click', function(e) {
  var btn = e.target.closest('button');
  if (!btn) return;

  /* Legacy mark/clear buttons */
  if (btn.dataset.action === 'mark') {
    setLegacyState(btn.closest('.iq'), btn.dataset.status);
  }
  if (btn.dataset.action === 'clear') {
    var card = btn.closest('.iq');
    if (!card) return;
    var ta = card.querySelector('textarea');
    if (ta) ta.value = '';
    _store.removeItem(key('answer', card.dataset.qid));
    setLegacyState(card, '');
  }

  /* Legacy bank-action buttons (show/hide/missed/all/reset) */
  if (btn.dataset.bankAction) {
    var bankId = btn.dataset.bankTarget;
    var sec = document.querySelector('[data-bank="' + bankId + '"]');
    if (!sec) return;
    if (btn.dataset.bankAction === 'show')   sec.querySelectorAll('details.answer').forEach(function(d) { d.open = true; });
    if (btn.dataset.bankAction === 'hide')   sec.querySelectorAll('details.answer').forEach(function(d) { d.open = false; });
    if (btn.dataset.bankAction === 'missed') sec.classList.add('missed-filter');
    if (btn.dataset.bankAction === 'all')    sec.classList.remove('missed-filter');
    if (btn.dataset.bankAction === 'reset')  resetBank(bankId);
  }
});

/* ── Init ────────────────────────────────────────────────────────────────── */

(function init() {
  /* restore progress checkboxes */
  document.querySelectorAll('input[data-progress]').forEach(function(cb) {
    cb.checked = _store.getItem('fa-progress-' + cb.dataset.progress) === '1';
  });

  loadMcqState();
  loadLegacyState();
  updateScores();
  refreshAllBankScores();
})();

function toggleSidebar() {
  var sb = document.getElementById('sidebar');
  if (sb) sb.classList.toggle('open');
}

/* ── Unit confidence rating ───────────────────────────────────────────── */
function rateUnit(uid, val) {
  _store.setItem('unit-rate-' + uid, val);
  renderStars(uid, val);
  var labels = ['','Just started 😅','Getting there 🙂','Feeling okay 😊','Pretty solid 💪','Got this! 🌟'];
  var lbl = document.getElementById('reviewLabel-' + uid);
  if (lbl) lbl.textContent = labels[val] || '';
}
function renderStars(uid, val) {
  var btns = document.querySelectorAll('#reviewStars-' + uid + ' .star-btn');
  btns.forEach(function(b) {
    b.classList.toggle('lit', parseInt(b.dataset.val) <= val);
  });
}
function initRatings() {
  document.querySelectorAll('.review-stars').forEach(function(el) {
    var uid = el.id.replace('reviewStars-','');
    var saved = parseInt(_store.getItem('unit-rate-' + uid)) || 0;
    if (saved) { renderStars(uid, saved); rateUnit(uid, saved); }
  });
}

/* ── Feedback widget ──────────────────────────────────────────────────── */
function toggleFeedback() {
  var panel = document.getElementById('feedbackPanel');
  if (panel) panel.classList.toggle('open');
}
function submitFeedback() {
  var txt = document.getElementById('feedbackText');
  var thanks = document.getElementById('feedbackThanks');
  var btn = document.querySelector('.feedback-submit');
  if (!txt || !txt.value.trim()) return;
  // Store locally (no backend)
  var fb = JSON.parse(_store.getItem('fa2-feedback') || '[]');
  fb.push({ page: location.pathname, text: txt.value.trim(), ts: Date.now() });
  _store.setItem('fa2-feedback', JSON.stringify(fb));
  txt.value = '';
  if (thanks) thanks.style.display = 'block';
  if (btn) btn.style.display = 'none';
  setTimeout(function() { toggleFeedback(); if (thanks) thanks.style.display = 'none'; if (btn) btn.style.display = ''; }, 2000);
}
document.addEventListener('DOMContentLoaded', initRatings);


/* ── Site review rating ───────────────────────────────────────────────── */
function rateSite(val) {
  _store.setItem('fa2-site-rating', val);
  var btns = document.querySelectorAll('#siteReviewStars .sr-star');
  btns.forEach(function(b) { b.classList.toggle('lit', parseInt(b.dataset.val) <= val); });
  var labels = ['','Not for me 😕','Could be better 🤔','Pretty helpful 😊','Really solid 💪','Love it! 🌟'];
  var lbl = document.getElementById('siteReviewLabel');
  if (lbl) lbl.textContent = labels[val] || '';
  // form is always visible
}
function submitSiteReview() {
  var name = document.getElementById('siteReviewName');
  var txt = document.getElementById('siteReviewText');
  var thanks = document.getElementById('siteReviewThanks');
  var form = document.getElementById('siteReviewForm');
  var reviews = JSON.parse(_store.getItem('fa2-site-reviews') || '[]');
  reviews.push({
    rating: _store.getItem('fa2-site-rating'),
    name: name ? name.value.trim() : '',
    text: txt ? txt.value.trim() : '',
    ts: Date.now()
  });
  _store.setItem('fa2-site-reviews', JSON.stringify(reviews));
  if (form) form.style.display = 'none';
  if (thanks) thanks.style.display = 'block';
}
(function initSiteReview() {
  var saved = parseInt(_store.getItem('fa2-site-rating')) || 0;
  if (saved) {
    document.querySelectorAll('#siteReviewStars .sr-star').forEach(function(b) {
      b.classList.toggle('lit', parseInt(b.dataset.val) <= saved);
    });
    var labels = ['','Not for me 😕','Could be better 🤔','Pretty helpful 😊','Really solid 💪','Love it! 🌟'];
    var lbl = document.getElementById('siteReviewLabel');
    if (lbl) lbl.textContent = labels[saved] || '';
  }
})();

/* ── Lesson completion ────────────────────────────────────────────────────── */
function initLessonProgress() {
  document.querySelectorAll('input[data-progress]').forEach(function(cb) {
    var id = cb.dataset.progress;
    if (_store.getItem('fa2-done-' + id) === '1') {
      cb.checked = true;
      var lesson = cb.closest('.lesson');
      if (lesson) lesson.classList.add('lesson-done');
    }
    cb.addEventListener('change', function() {
      _store.setItem('fa2-done-' + id, cb.checked ? '1' : '0');
      var lesson = cb.closest('.lesson');
      if (lesson) lesson.classList.toggle('lesson-done', cb.checked);
    });
  });
}
document.addEventListener('DOMContentLoaded', initLessonProgress);


/* ── Continue where you left off ─────────────────────────────────────────── */
function initContinueBanner() {
  var banner = document.getElementById('continueBanner');
  var link = document.getElementById('continueLink');
  if (!banner || !link) return;
  var sidebarLinks = Array.from(document.querySelectorAll('.sidebar-lesson-link'));
  if (!sidebarLinks.length) return;
  var allKeys = [];
  for (var i = 0; i < _store.length; i++) {
    var k = _store.key(i);
    if (k && k.startsWith('fa2-done-') && _store.getItem(k) === '1') allKeys.push(k);
  }
  if (!allKeys.length) return;
  var firstIncomplete = sidebarLinks.find(function(a) {
    var href = a.getAttribute('href') || '';
    var id = href.replace('#','');
    return !_store.getItem('fa2-done-' + id);
  });
  if (firstIncomplete) {
    link.href = firstIncomplete.getAttribute('href') || '#';
    link.textContent = firstIncomplete.querySelector('.sidebar-lesson-title')?.textContent || 'Next lesson';
    banner.style.display = 'flex';
  }
}
document.addEventListener('DOMContentLoaded', initContinueBanner);
