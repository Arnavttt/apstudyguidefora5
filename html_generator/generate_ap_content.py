#!/usr/bin/env python3
"""
Five & A+ AP® Course Page Generator v2 (MCQ edition)
Usage:
  python generate_ap_content.py                   # all courses
  python generate_ap_content.py psych             # one course
  python generate_ap_content.py aphug aphug_b     # multi-part split
"""

import os, sys, re, hashlib, importlib.util

UNITS_DIR  = r'C:\Users\arnav\Downloads\zip_extracted\five_a_plus_chunked_learning_site_plus_new_ap_courses\units'
COURSES_DIR= r'C:\Users\arnav\Downloads\zip_extracted\five_a_plus_chunked_learning_site_plus_new_ap_courses\courses'
CONTENT_DIR= os.path.join(os.path.dirname(__file__), 'ap_content')

AP_DISCLAIMER = (
    'AP® and Advanced Placement® are trademarks registered by the College Board, '
    'which is not affiliated with, and does not endorse, this site. '
    'Five &amp; A+ is an independent educational resource and is not affiliated with, '
    'endorsed by, or sponsored by the College Board.'
)

# ── helpers ─────────────────────────────────────────────────────────────────

def qid(seed):
    return hashlib.md5(seed.encode()).hexdigest()[:12]

def shuffle_choices(correct, distractors, qid_val):
    """Deterministic shuffle: rotate by first hex digit mod 4."""
    choices = [correct] + list(distractors)   # 4 items
    rot = int(qid_val[0], 16) % 4
    choices = choices[rot:] + choices[:rot]
    correct_idx = (4 - rot) % 4
    return choices, correct_idx

LETTERS = ['A', 'B', 'C', 'D']

def make_mcq(n, stem, correct, distractors, bank_id, course_slug, level, seed_str):
    """Generate a click-to-select MCQ .q-item block."""
    qid_val = qid(seed_str)
    choices, correct_idx = shuffle_choices(correct, distractors, qid_val)
    correct_letter = LETTERS[correct_idx]

    choices_html = ''
    for i, ch in enumerate(choices):
        is_correct = 'true' if i == correct_idx else 'false'
        label = LETTERS[i]
        choices_html += (
            f'<li class="q-choice" data-correct="{is_correct}" '
            f'onclick="mcqPick(this,\'{qid_val}\')">'
            f'{label}) {ch}</li>'
        )

    explain = f'<strong>{correct_letter} is correct.</strong> {correct}'

    return (
        f'<div class="q-item" data-qid="{qid_val}" data-bank="{bank_id}" '
        f'data-course="{course_slug}" data-level="{level}">'
        f'<div class="q-num">Q{n}</div>'
        f'<div class="q-text">{stem}</div>'
        f'<ul class="q-choices">{choices_html}</ul>'
        f'<div class="q-explain" id="exp-{qid_val}" style="display:none">{explain}</div>'
        f'</div>'
    )

def make_video(title, desc, url):
    """Return embedded iframe for YouTube links; external link otherwise."""
    yt = re.search(r'(?:v=|youtu\.be/)([A-Za-z0-9_-]{11})', url)
    if yt:
        vid_id = yt.group(1)
        return (
            f'<div class="vid-wrap">'
            f'<iframe src="https://www.youtube-nocookie.com/embed/{vid_id}" '
            f'title="{title}" frameborder="0" loading="lazy" '
            f'allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" '
            f'allowfullscreen></iframe>'
            f'<a class="vid-fallback" href="{url}" target="_blank" rel="noopener">'
            f'Open in YouTube →</a>'
            f'</div>'
        )
    return (
        f'<a class="res video" target="_blank" rel="noopener" href="{url}">'
        f'<b>{title}</b><span>{desc}</span><code>{url}</code></a>'
    )

def footer_html():
    return (
        f'<footer class="site-footer">'
        f'<div class="f-brand">Five &amp; A+</div>'
        f'<p class="trademark">{AP_DISCLAIMER}</p>'
        f'<p class="f-sub">Free AP® &amp; College Review &middot; Built by Arnav Sinha &amp; Yashwin Kandra</p>'
        f'</footer>'
    )

def topnav_html(course_name, course_slug, course_html_file):
    return (
        f'<nav class="topnav">'
        f'<a class="nav-brand-link" href="../index.html">Five &amp; A+</a>'
        f'<a href="../index.html">← Hub</a>'
        f'<a href="../courses/{course_html_file}">← {course_name}</a>'
        f'<div class="topnav-right">'
        f'<input id="q" placeholder="Search this page…" oninput="filterSite()">'
        f'</div>'
        f'</nav>'
    )

def dashboard_html():
    return (
        f'<section class="dashboard">'
        f'<div class="dash-row">'
        f'<div class="dash-card"><b id="dash-total">0</b><span>questions</span></div>'
        f'<div class="dash-card"><b id="dash-answered">0</b><span>answered</span></div>'
        f'<div class="dash-card"><b id="dash-right">0</b><span>correct</span></div>'
        f'<div class="dash-card"><b id="dash-wrong">0</b><span>wrong</span></div>'
        f'<div class="dash-card"><b id="dash-unmarked">0</b><span>unanswered</span></div>'
        f'<div class="dash-card"><b id="dash-pct">0%</b><span>score</span></div>'
        f'</div>'
        f'<div class="dash-actions">'
        f'<button onclick="showGlobal(\'all\')">Show all</button>'
        f'<button onclick="showGlobal(\'missed\')">Wrong only</button>'
        f'<button onclick="showGlobal(\'correct\')">Correct only</button>'
        f'<button onclick="showGlobal(\'unmarked\')">Unanswered only</button>'
        f'<button onclick="resetAll()">Reset page</button>'
        f'</div>'
        f'</section>'
    )

def quiz_section_html(bank_id, label, questions_html, total_qs):
    return (
        f'<div class="quiz-section" data-bank="{bank_id}">'
        f'<div class="quiz-header">'
        f'<span class="quiz-title">{label}</span>'
        f'<span class="quiz-score" data-bank-score="{bank_id}">0 / {total_qs} correct</span>'
        f'<button class="quiz-reset" onclick="resetBank(\'{bank_id}\')">Reset</button>'
        f'</div>'
        f'<div class="quiz-body">{questions_html}</div>'
        f'</div>'
    )

# ── Unit renderer ─────────────────────────────────────────────────────────────

def render_unit(course_name, course_slug, abbrev, unit_num, unit_title,
                unit_desc, gateway, lessons, unit_qs, course_html_file,
                accent_color='#4ade80', is_non_ap=False, unit_review_video=None):

    acfaint = accent_color  # will generate rgba below
    # parse hex to rgb for --ACfaint
    h = accent_color.lstrip('#')
    if len(h) == 6:
        r, g, b = int(h[0:2],16), int(h[2:4],16), int(h[4:6],16)
        acfaint_val = f'rgba({r},{g},{b},0.07)'
    else:
        acfaint_val = 'rgba(74,222,128,0.07)'

    total_q = len(lessons) * 5 + min(len(unit_qs), 10)

    # ── gateway
    gw_html = ''.join(f'<li>{g}</li>' for g in gateway)

    # ── lessons
    seen_vids_in_unit = set()   # track embedded video IDs to avoid per-unit repetition

    lessons_html = ''
    for li, L in enumerate(lessons, 1):
        bank_id = f'{abbrev}-u{unit_num}-l{li}-bank'

        topics_html = ''.join(
            f'<div class="topicnote"><h5>{t["title"]}</h5><p>{t["content"]}</p>'
            f'<p><b>Common misconception:</b> {t["misconception"]}</p>'
            f'<p><b>How it can be tested:</b> {t["how_tested"]}</p></div>'
            for t in L['topics']
        )
        # vocab: support (term, definition) tuples OR plain strings
        def fmt_vocab(v):
            if isinstance(v, (list, tuple)) and len(v) >= 2:
                return f'<li><b>{v[0]}</b> &mdash; {v[1]}</li>'
            return f'<li>{v}</li>'
        vocab_html = ''.join(fmt_vocab(v) for v in L['vocab'])
        obj_html   = ''.join(f'<li>{o}</li>' for o in L['objectives'])
        ht_html    = ''.join(f'<li>{h}</li>' for h in L['how_tested'])
        prac_html  = ''.join(f'<li>{p}</li>' for p in L['practice'])
        exit_html  = ''.join(f'<li>{e}</li>' for e in L['exit_ticket'])

        # MCQ questions for this lesson
        qs_html = ''
        for qi, q in enumerate(L['questions'][:5], 1):
            seed = f'{course_slug}-u{unit_num}-l{li}-q{qi}'
            stem    = q[0]
            correct = q[1]
            dists   = q[2] if len(q) > 2 else []
            # Fallback: if old format (stem, [pts]), use pts[0] as correct, rest as distractors
            if isinstance(correct, list):
                pts = correct
                correct = pts[0] if pts else 'See lesson notes.'
                dists = pts[1:4] if len(pts) > 1 else ['Not enough data', 'See notes', 'Review lesson']
            while len(dists) < 3:
                dists.append('None of the above')
            qs_html += make_mcq(qi, stem, correct, dists, bank_id, course_slug, 'lesson', seed)

        # videos: support (title, desc, url) 3-tuples OR bare URL strings
        # Deduplication: if the same YouTube video was already embedded earlier in
        # this unit, emit only a plain fallback link (not a second iframe).
        def fmt_video(v, _seen=seen_vids_in_unit):
            if isinstance(v, (list, tuple)) and len(v) >= 3:
                title, desc, url = v[0], v[1], v[2]
            elif isinstance(v, (list, tuple)) and len(v) == 2:
                title, desc, url = v[0], '', v[1]
            else:
                title, desc, url = 'Video resource', '', str(v)
            yt = re.search(r'(?:v=|youtu\.be/)([A-Za-z0-9_-]{11})', url)
            vid_id = yt.group(1) if yt else None
            if vid_id and vid_id in _seen:
                # Already embedded in this unit — show a plain fallback card instead
                watch_url = f'https://www.youtube.com/watch?v={vid_id}'
                return (
                    f'<a class="res video" target="_blank" rel="noopener" href="{watch_url}">'
                    f'<b>{title}</b>'
                    f'<span>See the Full Unit Review below for this topic.</span>'
                    f'<code>youtu.be/{vid_id}</code></a>'
                )
            if vid_id:
                _seen.add(vid_id)
            return make_video(title, desc, url)
        vid_html = ''.join(fmt_video(v) for v in L.get('videos', []))

        # Optional lesson enrichment fields (backward-compatible — absent = no output)
        frq_note     = L.get('frq_note', '')
        key_formulas = L.get('key_formulas', [])
        exam_tip     = L.get('exam_tip', '')
        frq_html = (
            f'<div class="frq-note"><h5>FRQ / Essay Strategy</h5><p>{frq_note}</p></div>'
        ) if frq_note else ''
        formula_html = (
            '<div class="formula-strip"><h5>Key Formulas</h5><ul>' +
            ''.join(
                f'<li><b>{f[0]}</b>: {f[1]}</li>' if isinstance(f, (list, tuple)) else f'<li>{f}</li>'
                for f in key_formulas
            ) + '</ul></div>'
        ) if key_formulas else ''
        tip_html = (
            f'<div class="exam-tip"><h5>AP® Exam Tip</h5><p>{exam_tip}</p></div>'
        ) if exam_tip else ''

        lesson_quiz = quiz_section_html(bank_id, f'Lesson {li} — 5 practice questions', qs_html, 5)

        lessons_html += (
            f'<section class="lesson" data-search="{L["title"].lower()}">'
            f'<div class="lesson-head">'
            f'<label><input type="checkbox" data-progress="{abbrev}-u{unit_num}-l{li}"> Lesson {li}</label>'
            f'<h4>{L["title"]}</h4></div>'
            f'<div class="lesson-body">'
            f'<div class="lesson-grid">'
            f'<section><h5>Learn on this site</h5>{topics_html}</section>'
            f'<section>'
            f'<h5>Key Vocabulary</h5><ul>{vocab_html}</ul>'
            f'<h5>Objectives</h5><ul>{obj_html}</ul>'
            f'<h5>How this can be tested</h5><ul>{ht_html}</ul>'
            f'<h5>Practice before moving on</h5><ul>{prac_html}</ul>'
            f'</section></div>'
            f'{frq_html}{formula_html}'
            f'{lesson_quiz}'
            f'{tip_html}'
            f'<div class="exit"><h5>Exit ticket</h5><ul>{exit_html}</ul></div>'
            f'<div class="watch"><h5>Videos &amp; resources</h5>'
            f'<div class="resources">{vid_html}</div></div>'
            f'</div></section>'
        )

    # ── unit review bank
    ubank_id = f'{abbrev}-u{unit_num}-unit-bank'
    uqs_html = ''
    for qi, q in enumerate(unit_qs[:10], 1):
        seed    = f'{course_slug}-u{unit_num}-unit-q{qi}'
        stem    = q[0]
        correct = q[1]
        dists   = q[2] if len(q) > 2 else []
        if isinstance(correct, list):
            pts = correct
            correct = pts[0] if pts else 'See unit notes.'
            dists = pts[1:4] if len(pts) > 1 else ['Not enough data', 'See notes', 'Review unit']
        while len(dists) < 3:
            dists.append('None of the above')
        uqs_html += make_mcq(qi, stem, correct, dists, ubank_id, course_slug, 'unit', seed)

    unit_quiz = quiz_section_html(ubank_id, f'Unit {unit_num} Review — 10 questions', uqs_html, 10)

    # ── unit review video section (placed after unit MCQ block)
    urv_html = ''
    if unit_review_video:
        v = unit_review_video
        if isinstance(v, (list, tuple)) and len(v) >= 3:
            urv_t, urv_d, urv_u = v[0], v[1], v[2]
        elif isinstance(v, (list, tuple)) and len(v) == 2:
            urv_t, urv_d, urv_u = v[0], '', v[1]
        elif isinstance(v, str):
            urv_t, urv_d, urv_u = 'Full Unit Review', '', v
        else:
            urv_t = urv_d = urv_u = None
        if urv_u:
            yt_urv = re.search(r'(?:v=|youtu\.be/)([A-Za-z0-9_-]{11})', urv_u)
            urv_vid_id = yt_urv.group(1) if yt_urv else None
            if urv_vid_id and urv_vid_id in seen_vids_in_unit:
                # Same video already embedded in a lesson — show as plain link card
                watch_url = f'https://www.youtube.com/watch?v={urv_vid_id}'
                urv_html = (
                    f'<div class="watch unit-review-wrap">'
                    f'<h5>Full Unit Review</h5>'
                    f'<div class="resources">'
                    f'<a class="res video" target="_blank" rel="noopener" href="{watch_url}">'
                    f'<b>{urv_t}</b>'
                    f'<span>Watch the full unit review on YouTube ↗</span>'
                    f'<code>youtu.be/{urv_vid_id}</code></a>'
                    f'</div></div>'
                )
            else:
                urv_html = (
                    f'<div class="watch unit-review-wrap">'
                    f'<h5>Full Unit Review</h5>'
                    f'<div class="resources">{make_video(urv_t, urv_d, urv_u)}</div>'
                    f'</div>'
                )

    non_ap_badge = '<span class="badge non-ap">Non-AP® / Non-standardized</span>' if is_non_ap else ''

    return (
        f'<!doctype html><html lang="en">'
        f'<head><meta charset="utf-8">'
        f'<meta name="viewport" content="width=device-width,initial-scale=1">'
        f'<title>{course_name} — {unit_title} | Five &amp; A+</title>'
        f'<link rel="stylesheet" href="../assets/site.css">'
        f'<script>MathJax={{tex:{{inlineMath:[["\\\\(","\\\\)"]],displayMath:[["\\\\[","\\\\]"]]}},options:{{skipHtmlTags:["script","noscript","style","textarea","pre"]}}}}</script>'
        f'<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>'
        f'</head>'
        f'<body style="--AC:{accent_color};--ACfaint:{acfaint_val};">'
        f'{topnav_html(course_name, course_slug, course_html_file)}'
        f'<div class="masthead">'
        f'<div class="mh-inner">'
        f'<p class="mh-breadcrumb">'
        f'<a href="../index.html">Hub</a> / '
        f'<a href="../courses/{course_html_file}">{course_name}</a> / '
        f'Unit {unit_num}</p>'
        f'<p class="mh-tag">Unit {unit_num} of {course_name}</p>'
        f'<h1 class="mh-title">{unit_title.split(": ", 1)[-1] if unit_title.lower().startswith("unit ") else unit_title}</h1>'
        f'<p class="mh-sub">{unit_desc}</p>'
        f'<div class="mh-pills">'
        f'<span class="mh-pill">{len(lessons)} lessons</span>'
        f'<span class="mh-pill">{total_q} questions</span>'
        f'{non_ap_badge}'
        f'</div></div></div>'
        f'<div class="page-wrap">'
        f'{dashboard_html()}'
        f'<div class="gateway"><h4>Unit learning gateway</h4><ul>{gw_html}</ul></div>'
        f'{lessons_html}'
        f'{unit_quiz}'
        f'{urv_html}'
        f'</div>'
        f'{footer_html()}'
        f'<script src="../assets/app.js"></script>'
        f'</body></html>'
    )

# ── Course page renderer ──────────────────────────────────────────────────────

def render_course(course_name, course_slug, abbrev, units, course_qs,
                  course_html_file, accent_color='#4ade80', is_non_ap=False):
    """Generate the course overview page with unit map + 20 course-level MCQs."""

    h = accent_color.lstrip('#')
    if len(h) == 6:
        r, g, b = int(h[0:2],16), int(h[2:4],16), int(h[4:6],16)
        acfaint_val = f'rgba({r},{g},{b},0.07)'
    else:
        acfaint_val = 'rgba(74,222,128,0.07)'

    # unit map — strip "Unit N:" or "Period N:" prefix already present in title
    def _pill_label(u):
        import re as _re
        t = u['title']
        if _re.match(r'^Unit \d+\s*:', t):
            return 'Unit %d: %s' % (u['num'], t.split(':', 1)[1].strip())
        if _re.match(r'^Period \d+\s*:', t):
            return t  # "Period 1: 1491–1607" — self-contained, no extra prefix
        return 'Unit %d: %s' % (u['num'], t)

    unit_links = ''.join(
        f'<a class="mh-pill" href="../units/{u["file"]}">{_pill_label(u)}</a>'
        for u in units
    )

    # course-level MCQ bank
    cbank_id = f'{abbrev}-course-bank'
    cqs_html = ''
    for qi, q in enumerate(course_qs[:20], 1):
        seed    = f'{course_slug}-course-q{qi}'
        stem    = q[0]
        correct = q[1]
        dists   = q[2] if len(q) > 2 else []
        if isinstance(correct, list):
            pts = correct
            correct = pts[0] if pts else 'See course notes.'
            dists = pts[1:4] if len(pts) > 1 else ['Not enough data', 'See notes', 'Review course']
        while len(dists) < 3:
            dists.append('None of the above')
        cqs_html += make_mcq(qi, stem, correct, dists, cbank_id, course_slug, 'course', seed)

    course_quiz = quiz_section_html(cbank_id, f'{course_name} — 20 course-level questions', cqs_html, 20)

    non_ap_badge = '<span class="badge non-ap">Non-AP® / Non-standardized</span>' if is_non_ap else '<span class="badge">AP® Exam Review</span>'

    return (
        f'<!doctype html><html lang="en">'
        f'<head><meta charset="utf-8">'
        f'<meta name="viewport" content="width=device-width,initial-scale=1">'
        f'<title>{course_name} | Five &amp; A+</title>'
        f'<link rel="stylesheet" href="../assets/site.css">'
        f'<script>MathJax={{tex:{{inlineMath:[["\\\\(","\\\\)"]],displayMath:[["\\\\[","\\\\]"]]}},options:{{skipHtmlTags:["script","noscript","style","textarea","pre"]}}}}</script>'
        f'<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>'
        f'</head>'
        f'<body style="--AC:{accent_color};--ACfaint:{acfaint_val};">'
        f'<nav class="topnav">'
        f'<a class="nav-brand-link" href="../index.html">Five &amp; A+</a>'
        f'<a href="../index.html">← Hub</a>'
        f'<div class="topnav-right">'
        f'<input id="q" placeholder="Search this page…" oninput="filterSite()">'
        f'</div></nav>'
        f'<div class="masthead">'
        f'<div class="mh-inner">'
        f'<p class="mh-breadcrumb"><a href="../index.html">Hub</a> / {course_name}</p>'
        f'<p class="mh-tag">Course Overview</p>'
        f'<h1 class="mh-title">{course_name}</h1>'
        f'<p class="mh-sub">{len(units)} units &middot; {len(units)*30+20} total questions &middot; Click a unit to begin.</p>'
        f'<div class="mh-pills">{non_ap_badge}{unit_links}</div>'
        f'</div></div>'
        f'<div class="page-wrap">'
        f'{dashboard_html()}'
        f'{course_quiz}'
        f'</div>'
        f'{footer_html()}'
        f'<script src="../assets/app.js"></script>'
        f'</body></html>'
    )

# ── Loader + main ─────────────────────────────────────────────────────────────

def load_course(slug):
    path = os.path.join(CONTENT_DIR, f'{slug}.py')
    if not os.path.exists(path):
        return None
    spec = importlib.util.spec_from_file_location(slug, path)
    mod  = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod

def generate(filter_slugs=None):
    os.makedirs(UNITS_DIR,   exist_ok=True)
    os.makedirs(COURSES_DIR, exist_ok=True)

    content_files = sorted(f[:-3] for f in os.listdir(CONTENT_DIR) if f.endswith('.py'))

    # Group multi-part files by their base course slug so UNITS are combined
    # e.g. aphug + aphug_b → both filtered in, combined under mod.SLUG
    course_mods = {}   # course_slug -> (primary_mod, [all mods])
    for slug in content_files:
        if filter_slugs and slug not in filter_slugs:
            continue
        mod = load_course(slug)
        if mod is None:
            continue
        course_slug = getattr(mod, 'SLUG', slug)
        if course_slug not in course_mods:
            course_mods[course_slug] = (mod, [])
        course_mods[course_slug][1].append(mod)

    total_units = 0
    total_courses = 0

    for course_slug, (primary_mod, mods) in course_mods.items():
        course_name      = primary_mod.NAME
        abbrev           = primary_mod.ABBREV
        course_html_file = getattr(primary_mod, 'COURSE_FILE', f'{course_slug}.html')
        accent_color     = getattr(primary_mod, 'ACCENT_COLOR', '#4ade80')
        is_non_ap        = getattr(primary_mod, 'NON_AP®', False)

        # Combine UNITS from all part-files (already sorted by num)
        all_units = []
        for m in mods:
            all_units.extend(m.UNITS)
        all_units.sort(key=lambda u: u['num'])

        # Write unit pages
        for unit in all_units:
            html = render_unit(
                course_name        = course_name,
                course_slug        = course_slug,
                abbrev             = abbrev,
                unit_num           = unit['num'],
                unit_title         = unit['title'],
                unit_desc          = unit['desc'],
                gateway            = unit['gateway'],
                lessons            = unit['lessons'],
                unit_qs            = unit.get('unit_qs', []),
                course_html_file   = course_html_file,
                accent_color       = accent_color,
                is_non_ap          = is_non_ap,
                unit_review_video  = unit.get('review_video'),
            )
            out_path = os.path.join(UNITS_DIR, unit['file'])
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f'  [unit]   {unit["file"]}')
            total_units += 1

        # Write course page (if course_qs provided in any part module)
        course_qs = []
        for m in mods:
            course_qs.extend(getattr(m, 'COURSE_QS', []))

        if course_qs:
            html = render_course(
                course_name      = course_name,
                course_slug      = course_slug,
                abbrev           = abbrev,
                units            = all_units,
                course_qs        = course_qs,
                course_html_file = course_html_file,
                accent_color     = accent_color,
                is_non_ap        = is_non_ap,
            )
            out_path = os.path.join(COURSES_DIR, course_html_file)
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f'  [course] {course_html_file}')
            total_courses += 1

    print(f'\nDone — {total_units} unit page(s), {total_courses} course page(s) written.')

if __name__ == '__main__':
    slugs = sys.argv[1:] or None
    generate(slugs)
