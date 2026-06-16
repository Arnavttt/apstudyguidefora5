import os, re

REPO = '/tmp/apsg'
CSS_PATH = os.path.join(REPO, 'assets/site.css')

# ─── TASK 1 & 3 CSS: Overhaul site.css ───────────────────────────────────────
with open(CSS_PATH, 'r') as f:
    css = f.read()

# 1a. Add Comfortaa import at top (after existing @import)
comfortaa_import = "@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');\n"
if 'Comfortaa' not in css:
    # Insert after first @import line
    css = re.sub(r'(@import url\([^)]+\);)', r'\1\n' + comfortaa_import.strip(), css, count=1)

# 1b. Update :root color palette (add/update bg/border/text vars, keep AC vars)
root_addition = """
  /* Redesign palette */
  --bg: #12151c;
  --bg2: #1a1e28;
  --bg3: #1f2535;
  --border: rgba(255,255,255,0.08);
  --text: #e8eaf0;
  --text2: #9aa0b4;
  --text3: #636980;
"""
# Replace the bg/border/text block in :root
css = re.sub(
    r'(/\* Base — deep slate.*?\*\/\s*\n)(.*?)(\/\* Borders.*?\*\/\s*\n)(.*?)(\/\* Typography\s*\*\/)',
    lambda m: (
        '  /* Base — deep slate, not pure black */\n'
        '  --bg:      #12151c;\n'
        '  --bg2:     #1a1e28;\n'
        '  --bg3:     #1f2535;\n'
        '  --bg4:     #1e2438;\n\n'
        '  /* Borders — translucent white for glass feel */\n'
        '  --border:  rgba(255,255,255,.08);\n'
        '  --border2: rgba(255,255,255,.12);\n'
        '  --border3: rgba(255,255,255,.20);\n\n'
        '  /* Typography */\n'
    ),
    css, flags=re.DOTALL
)

# 1c. Typography — update body and headings
# Replace body font-family line
css = re.sub(
    r"font-family: 'Inter', 'Outfit', sans-serif;\n  background: var\(--bg\);\n  color: var\(--text\);\n  overflow-x: hidden;\n  line-height: 1\.65;",
    "font-family: 'Comfortaa', sans-serif;\n  background: var(--bg);\n  color: var(--text);\n  overflow-x: hidden;\n  font-size: 16px;\n  line-height: 1.8;",
    css
)

# Replace h3 h4 h5 utility headings block
css = re.sub(
    r"h3 \{ font-family: 'Syne'.*?margin-bottom: .3rem; \}",
    "h3 { font-family: 'Comfortaa', sans-serif; font-size: 1.2rem; font-weight: 600; color: var(--AC); margin: 1.5rem 0 0.5rem; }",
    css
)

# Add h1, h2 after body closing brace
body_block_end = '-webkit-font-smoothing: antialiased;\n}'
new_typography = """-webkit-font-smoothing: antialiased;
}
h1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; }
h2 { font-size: 1.6rem; font-weight: 600; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; margin: 2rem 0 1rem; }
p { margin-bottom: 1rem; max-width: none; }"""
css = css.replace(body_block_end, new_typography, 1)

# 1d. Layout — update .page-wrap max-width
css = css.replace(
    '.page-wrap { max-width: 1000px;',
    '.page-wrap { max-width: 1100px;'
)
css = css.replace(
    '.simple-layout { max-width: 1000px;',
    '.simple-layout { max-width: 1100px;'
)

# Add course-overview CSS at the end
overview_css = """
/* ══════════════════════════════════════════════════════════════════════════
   COURSE OVERVIEW SECTION
   ══════════════════════════════════════════════════════════════════════════ */
.course-overview { margin: 2rem 0 3rem; padding: 1.5rem 0; border-bottom: 1px solid var(--border); }
.overview-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
.overview-card { background: var(--bg2); border-radius: 8px; padding: 1.25rem; border-left: 3px solid var(--AC, #6c8ebf); }
.overview-card h3 { margin-top: 0; font-size: 1rem; color: var(--AC); }
.quick-start { border-left-color: #f0a500; }
.quick-start h3 { color: #f0a500; }
"""
css += overview_css

with open(CSS_PATH, 'w') as f:
    f.write(css)

print("site.css updated")

# ─── TASK 2: Font injection ───────────────────────────────────────────────────
FONT_LINK = '<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">'

def inject_font(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'Comfortaa' in content:
        return False
    new = content.replace('</head>', FONT_LINK + '\n</head>', 1)
    if new == content:
        return False
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new)
    return True

font_count = 0
for root, dirs, files in os.walk(REPO):
    dirs[:] = [d for d in dirs if d != '.git' and d != 'five_and_a_plus']
    for fn in files:
        if fn.endswith('.html'):
            if inject_font(os.path.join(root, fn)):
                font_count += 1

print(f"Font injected into {font_count} HTML files")

# ─── TASK 3: Course overview injection ───────────────────────────────────────
COURSE_DATA = {
    'ap-biology': {
        'format': '2 sections. Section I: 60 MCQ (90 min). Section II: 6 FRQ (90 min).',
        'skills': 'Data analysis, experimental design, argumentation, scientific reasoning.',
        'weighting': 'Units 1–8. Heavily weighted: Cell Biology (10–15%), Genetics (12–17%), Natural Selection (13–20%).',
        'tip': 'Master the 4 big ideas first.'
    },
    'ap-chemistry': {
        'format': '2 sections. Section I: 60 MCQ (90 min). Section II: 7 FRQ (105 min).',
        'skills': 'Quantitative reasoning, experimental design, mathematical justification.',
        'weighting': 'Units 1–9. Heavily weighted: Intermolecular Forces (15–25%), Kinetics (7–9%), Thermodynamics (7–9%).',
        'tip': 'Practice stoichiometry until it\'s automatic.'
    },
    'ap-physics-1-2': {
        'format': 'Section I: 50 MCQ (90 min). Section II: 5 FRQ (90 min). Algebra-based.',
        'skills': 'Reasoning and justification, not memorization. Experimental design, argument from evidence.',
        'weighting': 'Units 1–7 (Physics 1) + Fluid dynamics, thermodynamics, E&M, optics, modern physics (Physics 2).',
        'tip': 'Focus on free-body diagrams and energy conservation. Review Physics 1 before Physics 2 — they\'re assumed knowledge.'
    },
    'ap-physics-c-mechanics': {
        'format': '35 MCQ (45 min) + 3 FRQ (45 min). Calculus-based.',
        'skills': 'Calculus application, multi-step problem solving, justification.',
        'weighting': 'Units 1–7: Kinematics, Dynamics, Work/Energy, Momentum, Rotation, Oscillations, Gravitation.',
        'tip': 'Know calculus cold — derivatives and integrals appear in every FRQ.'
    },
    'ap-physics-c-electricity-and-magnetism': {
        'format': '35 MCQ (45 min) + 3 FRQ (45 min). Calculus-based.',
        'skills': 'Calculus application, Gauss\'s Law, circuit analysis, electromagnetic induction.',
        'weighting': 'Units 8–13: Electric fields, potential, capacitors, circuits, magnetism, induction.',
        'tip': 'Visualize field lines and equipotential surfaces — they anchor your setup for every problem.'
    },
    'ap-calculus-bc': {
        'format': '2 sections each with Part A (no calc, 60 min) and Part B (calc, 30 min). 45 MCQ total + 6 FRQ.',
        'skills': 'Limits, differentiation, integration, series, parametric/polar/vector functions.',
        'weighting': 'Units 1–10. AB topics are ~60% of the exam.',
        'tip': 'Master AB topics first — they\'re the foundation and the majority of your score.'
    },
    'ap-precalculus': {
        'format': '40 MCQ (80 min) + 4 FRQ (40 min).',
        'skills': 'Function analysis, modeling, transformation, trigonometry, parametric and polar.',
        'weighting': 'Units 1–4. Functions and transformations are ~30% of the exam.',
        'tip': 'Functions and their transformations are ~30% of the exam — start there.'
    },
    'ap-computer-science-a': {
        'format': '40 MCQ (90 min) + 4 FRQ (90 min). Java only.',
        'skills': 'Programming logic, object-oriented design, algorithm analysis.',
        'weighting': 'Units 1–10. Data structures and OOP are most heavily tested.',
        'tip': 'Know ArrayList, 2D arrays, and inheritance cold.'
    },
    'ap-computer-science-principles': {
        'format': '70 MCQ (120 min) + Create Performance Task (submitted before exam, 30% of score).',
        'skills': 'Computational thinking, algorithm design, data analysis, impacts of computing.',
        'weighting': 'Units 1–5. The Create PT is 30% of your score — don\'t underestimate it.',
        'tip': 'Start your Create PT early — it takes longer than students expect.'
    },
    'ap-environmental-science': {
        'format': '80 MCQ (90 min) + 3 FRQ (70 min). Calculation and analysis heavy.',
        'skills': 'Quantitative analysis, environmental problem-solving, data interpretation.',
        'weighting': 'Units 1–9. Energy, pollution, and global change are heavily tested.',
        'tip': 'Know your math formulas — APES has more calculation than people expect.'
    },
    'ap-psychology': {
        'format': '100 MCQ (70 min) + 2 FRQ (50 min). Definitions and applications.',
        'skills': 'Vocabulary application, psychological concept analysis, research methods.',
        'weighting': 'Units 1–9. Biological bases, cognition, and social psychology are most tested.',
        'tip': 'Vocab flashcards are your best friend — this exam is definition-heavy.'
    },
    'ap-macroeconomics': {
        'format': '60 MCQ (70 min) + 3 FRQ (60 min). FRQs require drawing and labeling graphs.',
        'skills': 'Graph drawing, economic analysis, policy evaluation.',
        'weighting': 'Units 1–6. National income, financial sector, and stabilization policy are most weighted.',
        'tip': 'Practice drawing AS/AD, money market, and loanable funds graphs from memory.'
    },
    'ap-microeconomics': {
        'format': '60 MCQ (70 min) + 3 FRQ (60 min). Graph-heavy.',
        'skills': 'Market analysis, graph interpretation, cost-benefit reasoning.',
        'weighting': 'Units 1–6. Supply/demand and market structures are most tested.',
        'tip': 'Master supply/demand shifts and market structures (perfect competition, monopoly, oligopoly).'
    },
    'ap-u-s-history': {
        'format': '55 MCQ (55 min) + Short Answer (40 min) + DBQ (60 min) + LEQ (40 min). Periods 1–9.',
        'skills': 'Historical argumentation, contextualization, sourcing, corroboration.',
        'weighting': 'All periods tested; Periods 3–8 are most heavily weighted.',
        'tip': 'Practice the DBQ with real documents — sourcing and contextualization points are free if you practice them.'
    },
    'ap-world-history-modern': {
        'format': '55 MCQ (55 min) + Short Answer (40 min) + DBQ (60 min) + LEQ (40 min).',
        'skills': 'Change over time, comparison, causation, continuity.',
        'weighting': 'Units 1–9 covering 1200 CE to present.',
        'tip': 'Focus on change over time and comparison across regions.'
    },
    'ap-european-history': {
        'format': '55 MCQ (55 min) + Short Answer (40 min) + DBQ (60 min) + LEQ (40 min).',
        'skills': 'Historical argumentation, causation, comparison, contextualization.',
        'weighting': 'Units 1–9. Reformation, Enlightenment, and 20th century conflicts are most tested.',
        'tip': 'Know the major turning points: Renaissance, Reformation, French Revolution, WWI/WWII.'
    },
    'ap-u-s-government-politics': {
        'format': '55 MCQ (80 min) + 4 FRQ (100 min) including SCOTUS comparison and concept application.',
        'skills': 'Constitutional analysis, political behavior, policy analysis, SCOTUS case knowledge.',
        'weighting': 'Units 1–5. Required SCOTUS cases appear directly on the exam.',
        'tip': 'Memorize the 15 required SCOTUS cases — they appear directly on the exam.'
    },
    'ap-comparative-government-and-politics': {
        'format': '55 MCQ (60 min) + 4 FRQ (100 min) comparing political systems.',
        'skills': 'Comparative analysis, political system evaluation, case study application.',
        'weighting': 'Units 1–5. Six required countries: UK, Russia, China, Iran, Mexico, Nigeria.',
        'tip': 'Know each country\'s regime type, institutions, and recent political events cold.'
    },
    'ap-art-history': {
        'format': '80 MCQ (60 min) + 6 FRQ (120 min) including image analysis. 250 required works.',
        'skills': 'Visual analysis, contextual interpretation, cross-cultural comparison.',
        'weighting': 'All 10 units tested. Global works are as important as Western art.',
        'tip': 'Know your 250 works by context (culture, period, function) not just appearance.'
    },
    'ap-english-language-composition': {
        'format': '45 MCQ (60 min) + 3 FRQ essays (135 min): synthesis, rhetorical analysis, argument.',
        'skills': 'Rhetorical analysis, argumentation, synthesis of multiple sources.',
        'weighting': 'Rhetorical analysis and argument are equally weighted in the FRQ section.',
        'tip': 'For synthesis, cite at least 3 sources and take a clear position.'
    },
    'ap-english-literature-composition': {
        'format': '55 MCQ (60 min) + 3 FRQ essays (120 min): poetry analysis, prose analysis, literary argument.',
        'skills': 'Close reading, literary analysis, argumentation, thematic interpretation.',
        'weighting': 'All three essays are equally weighted; literary argument gives you the most flexibility.',
        'tip': 'Practice writing a full literary essay in under 40 minutes.'
    },
    'ap-human-geography': {
        'format': '60 MCQ (60 min) + 3 FRQ (75 min). Units 1–7.',
        'skills': 'Spatial reasoning, model application, data interpretation, geographic analysis.',
        'weighting': 'Units 4–7 (political, agricultural, urban, economic geography) are most heavily tested.',
        'tip': 'Learn geographic models (von Thünen, Burgess, Christaller) — they show up constantly.'
    },
    'ap-music-theory': {
        'format': 'Multiple sections: written theory, aural skills, sight-singing.',
        'skills': 'Music notation, harmony, voice leading, aural identification, sight-singing.',
        'weighting': 'Units 1–8. Harmony and voice leading (Units 4–7) are most heavily tested.',
        'tip': 'Sing through examples while you analyze them — aural and written skills reinforce each other.'
    },
    'college-algebra': {
        'format': 'Final exam format varies by institution. Heavy on functions, equations, and modeling.',
        'skills': 'Algebraic manipulation, function analysis, system solving, exponential/logarithmic reasoning.',
        'weighting': 'Units 1–6. Functions and their properties are central to every unit.',
        'tip': 'Master function notation and transformations early — everything builds on them.'
    },
    'college-trigonometry': {
        'format': 'Final exam format varies by institution. Covers angles, graphs, identities, and applications.',
        'skills': 'Trigonometric reasoning, identity manipulation, equation solving, vector and polar analysis.',
        'weighting': 'Units 1–6. Unit circle mastery is foundational for every subsequent unit.',
        'tip': 'Memorize the unit circle cold — it\'s the foundation of every trig concept.'
    },
}

def make_overview(slug):
    data = COURSE_DATA.get(slug)
    if not data:
        return None
    return f'''<section class="course-overview">
  <h2>Course Overview</h2>
  <div class="overview-grid">
    <div class="overview-card">
      <h3>Exam Format</h3>
      <p>{data['format']}</p>
    </div>
    <div class="overview-card">
      <h3>Skills Tested</h3>
      <p>{data['skills']}</p>
    </div>
    <div class="overview-card">
      <h3>Unit Weighting</h3>
      <p>{data['weighting']}</p>
    </div>
    <div class="overview-card quick-start">
      <h3>⚡ Quick Start</h3>
      <p>{data['tip']}</p>
    </div>
  </div>
</section>'''

def inject_overview(path, slug):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'course-overview' in content:
        return False
    overview_html = make_overview(slug)
    if not overview_html:
        return False
    # Insert after closing masthead div or after first <main> tag
    # Pattern: after </div> that closes .masthead, before .page-wrap
    # The masthead is a <div class="masthead">...</div> followed by <div class="page-wrap">
    injected = False
    # Try to insert after </div> before <div class="page-wrap"> or <main
    for pattern in [
        (r'(</div>)(\s*<div class="page-wrap")', r'\1\n' + overview_html.replace('\\', '\\\\') + r'\2'),
        (r'(</div>)(\s*<main)', r'\1\n' + overview_html.replace('\\', '\\\\') + r'\2'),
    ]:
        new = re.sub(pattern[0], pattern[1], content, count=1)
        if new != content:
            content = new
            injected = True
            break
    if not injected:
        return False
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    return True

overview_count = 0
no_match = []
courses_dir = os.path.join(REPO, 'courses')
for fn in os.listdir(courses_dir):
    if not fn.endswith('.html'):
        continue
    # Derive slug from filename
    slug = fn.replace('.html', '')
    path = os.path.join(courses_dir, fn)
    if slug in COURSE_DATA:
        if inject_overview(path, slug):
            overview_count += 1
    else:
        no_match.append(fn)

print(f"Overview injected into {overview_count} course pages")
if no_match:
    print(f"No overview data for: {no_match}")

# ─── TASK 4: Move review sections to end ─────────────────────────────────────
from html.parser import HTMLParser

REVIEW_CLASSES = {'review-section', 'must-know', 'review', 'review-box'}
REVIEW_TITLE_RE = re.compile(r'review|must.?know', re.IGNORECASE)

def move_reviews(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find elements that are likely review sections using regex
    # Look for <section class="...review..."> or <div class="...review..."> or <div class="unit-must-know">
    review_pattern = re.compile(
        r'(<(?:section|div)[^>]+class="[^"]*(?:review-section|must-know|review-box|unit-must-know)[^"]*"[^>]*>)',
        re.IGNORECASE
    )
    
    if not review_pattern.search(content):
        return False
    
    # Simple approach: find unit-must-know blocks and move to before </main> or before <footer>
    # Find all unit-must-know blocks
    umk_pattern = re.compile(
        r'<div class="unit-must-know".*?</div>\s*</div>',
        re.DOTALL
    )
    
    blocks = umk_pattern.findall(content)
    if not blocks:
        return False
    
    # Remove blocks from content
    cleaned = umk_pattern.sub('', content)
    
    # Find where to insert
    rejoined = '\n'.join(blocks)
    if '</main>' in cleaned:
        cleaned = cleaned.replace('</main>', rejoined + '\n</main>', 1)
    elif '<footer' in cleaned:
        cleaned = re.sub(r'(<footer)', rejoined + '\n' + r'\1', cleaned, count=1)
    else:
        return False
    
    if cleaned == content:
        return False
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(cleaned)
    return True

review_count = 0
for root, dirs, files in os.walk(REPO):
    dirs[:] = [d for d in dirs if d not in ('.git', 'five_and_a_plus')]
    for fn in files:
        if fn.endswith('.html'):
            if move_reviews(os.path.join(root, fn)):
                review_count += 1

print(f"Review sections moved in {review_count} files")

# ─── TASK 5: Remove narrow max-width constraints ──────────────────────────────
mw_pattern = re.compile(
    r'style="([^"]*max-width:\s*(\d+)px[^"]*)"',
    re.IGNORECASE
)

def fix_maxwidth_html(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replace_mw(m):
        style = m.group(1)
        val = int(m.group(2))
        if val < 900:
            # Remove max-width property from style
            new_style = re.sub(r'max-width:\s*\d+px;?\s*', '', style).strip().strip(';')
            if new_style:
                return f'style="{new_style}"'
            else:
                return ''
        return m.group(0)
    
    new_content = mw_pattern.sub(replace_mw, content)
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# Also fix CSS
css_mw_pattern = re.compile(
    r'(\.(?:content|lesson-body|unit-body|main-content|page-wrap|simple-layout)[^{]*\{[^}]*?)max-width:\s*(\d+)px',
    re.DOTALL
)
with open(CSS_PATH, 'r') as f:
    css = f.read()

def fix_css_mw(m):
    val = int(m.group(2))
    if val < 900:
        return m.group(1) + 'max-width: 1100px'
    return m.group(0)

new_css = css_mw_pattern.sub(fix_css_mw, css)
if new_css != css:
    with open(CSS_PATH, 'w') as f:
        f.write(new_css)
    print("CSS max-width constraints updated")

mw_count = 0
for root, dirs, files in os.walk(REPO):
    dirs[:] = [d for d in dirs if d not in ('.git', 'five_and_a_plus')]
    for fn in files:
        if fn.endswith('.html'):
            if fix_maxwidth_html(os.path.join(root, fn)):
                mw_count += 1

print(f"Max-width constraints removed/updated in {mw_count} HTML files")
print("All tasks complete.")
