#!/usr/bin/env python3
"""
Five & A+ — inject the AI Question Stream into AP course OVERVIEW pages.

Idempotent: re-running is a no-op for already-injected pages. Adds, in <head>:
  meta[name=qs-course], the stylesheet, and the core/data/engine scripts (defer);
and a <section class="qstream-section"> mount as the last child of .page-wrap.

Course-page filename stem  ->  stable stream course id (8 of 23 differ).
"""
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
COURSES_DIR = os.path.join(HERE, "courses")

# stem (without -overview.html)  ->  stable stream id
SLUG_TO_ID = {
    "ap-art-history": "ap-art-history",
    "ap-biology": "ap-biology",
    "ap-calculus-bc": "ap-calculus-bc",
    "ap-chemistry": "ap-chemistry",
    "ap-comparative-government-and-politics": "ap-comparative-government",
    "ap-computer-science-a": "ap-computer-science-a",
    "ap-computer-science-principles": "ap-computer-science-principles",
    "ap-english-language-composition": "ap-english-language",
    "ap-english-literature-composition": "ap-english-literature",
    "ap-environmental-science": "ap-environmental-science",
    "ap-european-history": "ap-european-history",
    "ap-human-geography": "ap-human-geography",
    "ap-macroeconomics": "ap-macroeconomics",
    "ap-microeconomics": "ap-microeconomics",
    "ap-music-theory": "ap-music-theory",
    "ap-physics-1-2": "ap-physics-1-2",
    "ap-physics-c-electricity-and-magnetism": "ap-physics-c-electricity-magnetism",
    "ap-physics-c-mechanics": "ap-physics-c-mechanics",
    "ap-precalculus": "ap-precalculus",
    "ap-psychology": "ap-psychology",
    "ap-u-s-government-politics": "ap-us-government",
    "ap-u-s-history": "ap-us-history",
    "ap-world-history-modern": "ap-world-history-modern",
}

DEFAULT_VERSION = "20260627"


def detect_version(html):
    m = re.search(r"site\.css\?v=(\d+)", html)
    return m.group(1) if m else DEFAULT_VERSION


def head_block(course_id, v):
    return (
        '\n  <!-- AI Question Stream -->\n'
        '  <meta name="qs-course" content="{cid}">\n'
        '  <link rel="stylesheet" href="../assets/question-stream.css?v={v}">\n'
        '  <script src="../assets/qstream/core.js?v={v}" defer></script>\n'
        '  <script src="../assets/qstream/data/{cid}.js?v={v}" defer></script>\n'
        '  <script src="../assets/question-stream.js?v={v}" defer></script>\n'
    ).format(cid=course_id, v=v)


def mount_block(course_id):
    return (
        '<section class="qstream-section">'
        '<div class="qstream-mount" data-qs-course="{cid}"></div>'
        '</section>'
    ).format(cid=course_id)


def inject(path, course_id):
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()
    if "qstream-mount" in html:
        return "skipped"
    v = detect_version(html)

    # 1) head additions, just before </head>
    if "</head>" in html:
        html = html.replace("</head>", head_block(course_id, v) + "</head>", 1)
    else:
        return "no-head"

    # 2) mount as the last child of .page-wrap (right before the footer's div close)
    mount = mount_block(course_id)
    # The overview pages end the content column with: ...</section></div><footer class="site-footer">
    m = re.search(r"</div>\s*<footer\b", html)
    if m:
        html = html[:m.start()] + mount + html[m.start():]
    else:
        # fallback: drop it right before </body>
        html = html.replace("</body>", mount + "</body>", 1)

    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    return "ok"


def main():
    done = skipped = missing = 0
    for stem, cid in sorted(SLUG_TO_ID.items()):
        fname = stem + "-overview.html"
        path = os.path.join(COURSES_DIR, fname)
        if not os.path.exists(path):
            print("MISSING:", fname)
            missing += 1
            continue
        data_path = os.path.join(HERE, "assets", "qstream", "data", cid + ".js")
        if not os.path.exists(data_path):
            print("NO DATA FILE for", cid, "-> page still injected, will show load message until data added")
        status = inject(path, cid)
        print("{:50s} {}".format(fname, status))
        if status == "ok":
            done += 1
        elif status == "skipped":
            skipped += 1
    print("\nDone: {} injected, {} skipped, {} missing".format(done, skipped, missing))


if __name__ == "__main__":
    main()
