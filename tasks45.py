import os, re

REPO = '/tmp/apsg'
CSS_PATH = os.path.join(REPO, 'assets/site.css')

# ─── TASK 4: Move review sections to end ─────────────────────────────────────
def move_reviews(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    umk_pattern = re.compile(
        r'<div class="unit-must-know".*?</div>\s*</div>',
        re.DOTALL
    )
    
    blocks = umk_pattern.findall(content)
    if not blocks:
        return False
    
    cleaned = umk_pattern.sub('', content)
    rejoined = '\n'.join(blocks)
    
    if '</main>' in cleaned:
        cleaned = cleaned.replace('</main>', rejoined + '\n</main>', 1)
    elif '<footer' in cleaned:
        idx = cleaned.find('<footer')
        cleaned = cleaned[:idx] + rejoined + '\n' + cleaned[idx:]
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
mw_pattern = re.compile(r'style="([^"]*max-width:\s*(\d+)px[^"]*)"', re.IGNORECASE)

def fix_maxwidth_html(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replace_mw(m):
        style = m.group(1)
        val = int(m.group(2))
        if val < 900:
            new_style = re.sub(r'max-width:\s*\d+px;?\s*', '', style).strip().strip(';')
            if new_style:
                return 'style="' + new_style + '"'
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
else:
    print("No CSS max-width changes needed")

mw_count = 0
for root, dirs, files in os.walk(REPO):
    dirs[:] = [d for d in dirs if d not in ('.git', 'five_and_a_plus')]
    for fn in files:
        if fn.endswith('.html'):
            if fix_maxwidth_html(os.path.join(root, fn)):
                mw_count += 1

print(f"Max-width constraints removed/updated in {mw_count} HTML files")
print("Tasks 4 & 5 complete.")
