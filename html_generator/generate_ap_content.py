#!/usr/bin/env python3
"""
Five & A+ AP Course Unit Page Generator
Run:  python generate_ap_content.py
      python generate_ap_content.py aphug apush apwh   # specific slugs only
"""

import os, sys, hashlib, importlib.util

OUTPUT_DIR = r'C:\Users\arnav\Downloads\zip_extracted\five_a_plus_chunked_learning_site_plus_new_ap_courses\units'
CONTENT_DIR = os.path.join(os.path.dirname(__file__), 'ap_content')

# ── helpers ────────────────────────────────────────────────────────────────

def qid(seed: str) -> str:
    return hashlib.md5(seed.encode()).hexdigest()[:12]

def bank_tools(bank_id: str) -> str:
    return (
        f'<div class="bank-tools">'
        f'<button type="button" data-bank-action="show-all" data-bank-target="{bank_id}">Show all</button>'
        f'<button type="button" data-bank-action="show-correct" data-bank-target="{bank_id}">Correct only</button>'
        f'<button type="button" data-bank-action="show-missed" data-bank-target="{bank_id}">Wrong only</button>'
        f'<button type="button" data-bank-action="show-unmarked" data-bank-target="{bank_id}">Unmarked only</button>'
        f'<button type="button" data-bank-action="reset" data-bank-target="{bank_id}">Reset</button>'
        f'</div>'
    )

def make_iq(n, stem, pts, bank_id, course_slug, level, seed_str):
    qid_val = qid(seed_str)
    pts_li = ''.join(f'<li>{p}</li>' for p in pts)
    return (
        f'<article class="iq" data-qid="{qid_val}" data-bank="{bank_id}"'
        f' data-course="{course_slug}" data-level="{level}">'
        f'<div class="iq-top"><span class="qnum">Q{n}</span>'
        f'<span class="qstate" data-state>Unmarked</span></div>'
        f'<p class="qstem">{stem}</p>'
        f'<textarea data-answer placeholder="Type your answer..."></textarea>'
        f'<details class="answer"><summary>Reveal model answer / scoring checklist</summary>'
        f'<div class="model"><p><b>A strong answer should include:</b></p><ul>{pts_li}</ul>'
        f'<p class="mini"><b>Score yourself:</b> 4 pts = excellent · 3 = strong · 2 = developing · 1 = needs review.</p>'
        f'</div></details>'
        f'<div class="actions">'
        f'<button type="button" data-action="mark" data-status="right">&#10003; Got it right</button>'
        f'<button type="button" data-action="mark" data-status="wrong">&#10007; Got it wrong</button>'
        f'<button type="button" data-action="clear">Clear</button>'
        f'</div></article>'
    )

def make_video(title, desc, url):
    return (
        f'<a class="res video" target="_blank" rel="noopener" href="{url}">'
        f'<b>{title}</b><span>{desc}</span><code>{url}</code></a>'
    )

# ── HTML renderer ───────────────────────────────────────────────────────────

def render_unit(course_name, course_slug, abbrev, unit_num, unit_title,
                unit_desc, gateway, lessons, unit_qs, course_html_file):
    total_q = len(lessons) * 5 + min(len(unit_qs), 10)

    # build lessons
    lessons_html = ''
    for li, L in enumerate(lessons, 1):
        bank_id = f'{abbrev}-u{unit_num}-l{li}-bank'

        topics_html = ''.join(
            f'<div class="topicnote"><h5>{t["title"]}</h5><p>{t["content"]}</p>'
            f'<p><b>Common misconception:</b> {t["misconception"]}</p>'
            f'<p><b>How it can be tested:</b> {t["how_tested"]}</p></div>'
            for t in L['topics']
        )
        vocab_html  = ''.join(f'<li><b>{v[0]}</b> &#8212; {v[1]}</li>' for v in L['vocab'])
        obj_html    = ''.join(f'<li>{o}</li>' for o in L['objectives'])
        ht_html     = ''.join(f'<li>{h}</li>' for h in L['how_tested'])
        prac_html   = ''.join(f'<li>{p}</li>' for p in L['practice'])

        qs_html = ''
        for qi, q in enumerate(L['questions'][:5], 1):
            seed_str = f'{course_slug}-u{unit_num}-l{li}-q{qi}'
            qs_html += make_iq(qi, q[0], q[1], bank_id, course_slug, 'lesson', seed_str)

        vid_html  = ''.join(make_video(v[0], v[1], v[2]) for v in L.get('videos', []))
        exit_html = ''.join(f'<li>{e}</li>' for e in L['exit_ticket'])

        lessons_html += (
            f'<section class="lesson" data-search="{L["title"].lower()}">'
            f'<div class="lesson-head">'
            f'<label><input type="checkbox" data-progress="{abbrev}-u{unit_num}-l{li}"> Lesson {li}</label>'
            f'<h4>{L["title"]}</h4></div>'
            f'<div class="lesson-grid">'
            f'<section><h5>Learn on this site</h5>{topics_html}</section>'
            f'<section>'
            f'<h5>Key Vocabulary</h5><ul>{vocab_html}</ul>'
            f'<h5>Objectives</h5><ul>{obj_html}</ul>'
            f'<h5>How this can be tested</h5><ul>{ht_html}</ul>'
            f'<h5>Practice before moving on</h5><ul>{prac_html}</ul>'
            f'</section></div>'
            f'<section class="iqbank lesson-qbank" data-bank="{bank_id}">'
            f'<header class="iqbank-head">'
            f'<div><h5>5 interactive lesson questions</h5></div>'
            f'<div class="bank-score" data-bank-score="{bank_id}">0 right &#183; 0 wrong &#183; 5 unmarked</div>'
            f'</header>{bank_tools(bank_id)}'
            f'<div class="iqgrid">{qs_html}</div></section>'
            f'<section class="watch"><h5>Videos &amp; resources</h5>'
            f'<div class="resources">{vid_html}</div></section>'
            f'<section class="exit"><h5>Exit ticket</h5><ul>{exit_html}</ul></section>'
            f'</section>'
        )

    # unit review bank
    ubank_id = f'{abbrev}-u{unit_num}-unit-bank'
    uqs_html = ''
    for qi, q in enumerate(unit_qs[:10], 1):
        seed_str = f'{course_slug}-u{unit_num}-unit-q{qi}'
        uqs_html += make_iq(qi, q[0], q[1], ubank_id, course_slug, 'unit', seed_str)

    uqbank_html = (
        f'<section class="iqbank unit-qbank" data-bank="{ubank_id}">'
        f'<header class="iqbank-head">'
        f'<div><h5>10 unit review questions</h5></div>'
        f'<div class="bank-score" data-bank-score="{ubank_id}">0 right &#183; 0 wrong &#183; 10 unmarked</div>'
        f'</header>{bank_tools(ubank_id)}'
        f'<div class="iqgrid">{uqs_html}</div></section>'
    )

    gw_html = ''.join(f'<li>{g}</li>' for g in gateway)

    return (
        f'<!doctype html><html lang="en">'
        f'<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        f'<title>{course_name} &#8212; Unit {unit_num}: {unit_title}</title>'
        f'<link rel="stylesheet" href="../assets/site.css"></head>'
        f'<body>'
        f'<div class="top"><h1>{course_name}: Unit {unit_num}: {unit_title}</h1>'
        f'<p>Loaded chunk: this one unit only &#183; {len(lessons)} lessons &#183; {total_q} questions.</p>'
        f'<div class="mini-nav">'
        f'<a href="../index.html">&#8592; Hub</a>'
        f'<a href="../courses/{course_html_file}">&#8592; {course_name}</a>'
        f'<button type="button" onclick="goBackSafe()">Back</button></div>'
        f'<input id="q" placeholder="Search this loaded page only..." oninput="filterSite()"></div>'
        f'<div class="simple-layout"><main>'
        f'<section class="dashboard"><div class="dash-row">'
        f'<div class="dash-card"><b id="dash-total">0</b><span>questions</span></div>'
        f'<div class="dash-card"><b id="dash-answered">0</b><span>typed answers</span></div>'
        f'<div class="dash-card"><b id="dash-right">0</b><span>correct</span></div>'
        f'<div class="dash-card"><b id="dash-wrong">0</b><span>wrong</span></div>'
        f'<div class="dash-card"><b id="dash-unmarked">0</b><span>unmarked</span></div>'
        f'<div class="dash-card"><b id="dash-pct">0%</b><span>score</span></div>'
        f'</div><div class="dash-actions">'
        f'<button onclick="showGlobal(\'all\')">Show all</button>'
        f'<button onclick="showGlobal(\'missed\')">Show wrong only</button>'
        f'<button onclick="showGlobal(\'correct\')">Show correct only</button>'
        f'<button onclick="showGlobal(\'unmarked\')">Show unmarked only</button>'
        f'<button onclick="resetAll()">Reset loaded page</button>'
        f'</div></section>'
        f'<article class="course">'
        f'<section class="summary">'
        f'<div class="breadcrumb">'
        f'<a href="../index.html">Hub</a> / '
        f'<a href="../courses/{course_html_file}">{course_name}</a> / '
        f'Unit {unit_num}: {unit_title}</div>'
        f'<p><span class="badge">Unit page</span>'
        f'<span class="badge">{len(lessons)} lessons</span>'
        f'<span class="badge">{total_q} questions</span></p>'
        f'</section>'
        f'<section class="unitpath" id="u{unit_num}">'
        f'<header class="unitpath-head"><div>'
        f'<p class="eyebrow">UNIT {unit_num}</p>'
        f'<h3>{unit_title}</h3><p>{unit_desc}</p>'
        f'</div></header>'
        f'<section class="gateway"><h4>Unit learning gateway</h4><ul>{gw_html}</ul></section>'
        f'{lessons_html}'
        f'{uqbank_html}'
        f'</section></article></main></div>'
        f'<script src="../assets/app.js"></script>'
        f'</body></html>'
    )

# ── loader + main ───────────────────────────────────────────────────────────

def load_course(slug):
    """Import ap_content/{slug}.py and return its UNITS list."""
    path = os.path.join(CONTENT_DIR, f'{slug}.py')
    if not os.path.exists(path):
        return None
    spec = importlib.util.spec_from_file_location(slug, path)
    mod  = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod

def generate(filter_slugs=None):
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    content_files = sorted(f[:-3] for f in os.listdir(CONTENT_DIR) if f.endswith('.py'))

    total = 0
    for slug in content_files:
        if filter_slugs and slug not in filter_slugs:
            continue
        mod = load_course(slug)
        if mod is None:
            continue
        # Modules may override course_slug and course_html_file via SLUG / COURSE_FILE attrs
        course_slug      = getattr(mod, 'SLUG', slug)
        course_html_file = getattr(mod, 'COURSE_FILE', f'{course_slug}.html')
        # Each module exposes: NAME, ABBREV, UNITS (list of unit dicts)
        for unit in mod.UNITS:
            html = render_unit(
                course_name     = mod.NAME,
                course_slug     = course_slug,
                abbrev          = mod.ABBREV,
                unit_num        = unit['num'],
                unit_title      = unit['title'],
                unit_desc       = unit['desc'],
                gateway         = unit['gateway'],
                lessons         = unit['lessons'],
                unit_qs         = unit['unit_qs'],
                course_html_file= course_html_file,
            )
            out_path = os.path.join(OUTPUT_DIR, unit['file'])
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f'  wrote {unit["file"]}')
            total += 1

    print(f'\nDone — {total} file(s) written.')

if __name__ == '__main__':
    slugs = sys.argv[1:] or None
    generate(slugs)
