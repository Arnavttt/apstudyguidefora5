#!/usr/bin/env python3
"""Add a 'Practice' nav pill (jumps to the AI Question Stream) to the period-pills
row of each AP course overview page, and give the stream section an anchor id +
scroll margin. Idempotent. Run with blur python."""
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
COURSES = os.path.join(HERE, "courses")
ANCHOR = "ai-question-stream"
PILL = '<a class="pill pill-practice" href="#' + ANCHOR + '">Practice</a>'

def patch(path):
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()
    if "qstream-mount" not in html:
        return "no-stream"
    orig = html
    # 1) anchor id on the stream section
    html = html.replace('<section class="qstream-section">',
                        '<section class="qstream-section" id="' + ANCHOR + '">', 1)
    # 2) Practice pill just before the Exam Review pill (idempotent)
    if 'href="#' + ANCHOR + '"' not in orig:
        html = re.sub(r'(<a class="pill pill-review")', PILL + r'\1', html, count=1)
    if html != orig:
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        return "ok"
    return "skip"

def main():
    n = 0
    for name in sorted(os.listdir(COURSES)):
        if not name.endswith("-overview.html"):
            continue
        r = patch(os.path.join(COURSES, name))
        if r == "ok":
            n += 1
    print("added Practice pill to", n, "pages")

if __name__ == "__main__":
    main()
