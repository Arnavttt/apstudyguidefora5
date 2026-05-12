/* Five & A+ — app.js v2 (MCQ + legacy dual-mode, localStorage) */
'use strict';

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
  localStorage.setItem(key('mcq-state', qid), result);
  localStorage.setItem(key('mcq-chosen', qid), chosenIdx);

  updateScores();
  updateBankScore(item.dataset.bank);
}

function loadMcqState() {
  allMcqItems().forEach(function(item) {
    var qid = item.dataset.qid;
    var result = localStorage.getItem(key('mcq-state', qid));
    var chosenIdx = localStorage.getItem(key('mcq-chosen', qid));
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
    localStorage.setItem(key('state', qid), status);
  } else {
    localStorage.removeItem(key('state', qid));
  }
  updateScores();
  updateBankScore(card.dataset.bank);
}

function saveLegacyAnswer(textarea) {
  var card = textarea.closest('.iq');
  if (card) localStorage.setItem(key('answer', card.dataset.qid), textarea.value);
}

function loadLegacyState() {
  allLegacyItems().forEach(function(card) {
    var qid = card.dataset.qid;
    var ta = card.querySelector('textarea[data-answer]');
    if (ta) {
      var saved = localStorage.getItem(key('answer', qid));
      if (saved !== null) ta.value = saved;
    }
    setLegacyState(card, localStorage.getItem(key('state', qid)) || '');
  });
}

/* ── Dashboard + bank scores ─────────────────────────────────────────────── */

function updateScores() {
  /* MCQ counts */
  var mcqItems = allMcqItems();
  var mcqRight = 0, mcqWrong = 0;
  mcqItems.forEach(function(item) {
    var s = localStorage.getItem(key('mcq-state', item.dataset.qid));
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
    var s = localStorage.getItem(key('mcq-state', i.dataset.qid));
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
    localStorage.removeItem(key('mcq-state', qid));
    localStorage.removeItem(key('mcq-chosen', qid));
  });

  /* Legacy reset */
  document.querySelectorAll('.iq[data-bank="' + bankId + '"]').forEach(function(card) {
    var ta = card.querySelector('textarea');
    if (ta) ta.value = '';
    card.querySelectorAll('details').forEach(function(d) { d.open = false; });
    localStorage.removeItem(key('answer', card.dataset.qid));
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
    localStorage.removeItem(key('mcq-state', qid));
    localStorage.removeItem(key('mcq-chosen', qid));
  });

  /* clear legacy */
  allLegacyItems().forEach(function(q) {
    var ta = q.querySelector('textarea');
    if (ta) ta.value = '';
    q.querySelectorAll('details').forEach(function(d) { d.open = false; });
    localStorage.removeItem(key('answer', q.dataset.qid));
    setLegacyState(q, '');
  });

  /* clear progress checkboxes */
  document.querySelectorAll('input[data-progress]').forEach(function(cb) {
    cb.checked = false;
    localStorage.removeItem('fa-progress-' + cb.dataset.progress);
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
    localStorage.setItem('fa-progress-' + e.target.dataset.progress, e.target.checked ? '1' : '0');
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
    localStorage.removeItem(key('answer', card.dataset.qid));
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
    cb.checked = localStorage.getItem('fa-progress-' + cb.dataset.progress) === '1';
  });

  loadMcqState();
  loadLegacyState();
  updateScores();
  refreshAllBankScores();
})();
