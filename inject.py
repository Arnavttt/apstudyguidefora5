import os, re

COURSES_DIR = "/tmp/apsite/courses"

CSS_ADDITION = """
.mcq-item { background:#fff; border:1px solid var(--border); border-radius:6px; padding:1.25rem; margin-bottom:1.5rem; }
.mcq-reveal summary, .frq-answer summary { cursor:pointer; color:var(--AC); font-weight:600; margin-top:.5rem; display:block; }
.frq-prompt { background:#fff; border:1px solid var(--border); border-radius:6px; padding:1.25rem; margin:.75rem 0; white-space:pre-wrap; }
.practice-section { margin: 2rem 0; }
.practice-section h2 { font-size:1.4rem; margin-bottom:1rem; }
.practice-section h3 { font-size:1.1rem; margin:1.5rem 0 .75rem; color:var(--text1); }
"""

def make_mcq(num, q, choices, answer, explanation):
    letters = ["A","B","C","D"]
    ch = "".join(f"<li style='margin:.3rem 0;'><strong>{letters[i]}.</strong> {choices[i]}</li>" for i in range(len(choices)))
    return f"<div class='mcq-item'><p style='font-weight:600;margin:0 0 .6rem;'>Q{num}. {q}</p><ul style='list-style:none;padding:0;margin:0;'>{ch}</ul><details class='mcq-reveal'><summary>Show Answer</summary><p style='margin:.5rem 0 0;'><strong>Answer: {answer}</strong> — {explanation}</p></details></div>"

def make_frq(num, frq_type, prompt, model_answer):
    return f"<div style='margin-bottom:2rem;'><p style='font-weight:600;margin:0 0 .4rem;'>FRQ {num} ({frq_type})</p><div class='frq-prompt'>{prompt}</div><details class='frq-answer'><summary>View Model Answer</summary><div style='margin:.75rem 0 0;padding:.75rem;background:var(--ACfaint);border-radius:4px;white-space:pre-wrap;font-size:.88rem;line-height:1.7;'>{model_answer}</div></details></div>"

def make_section(mcqs_html, frqs_html):
    return f"<div class='practice-section' style='max-width:760px;margin:2rem auto;padding:0 1rem;'><h2>Practice Questions</h2><h3>Multiple Choice (20 Questions)</h3>{mcqs_html}<h3>Free Response Questions</h3>{frqs_html}</div>"

from course_data import COURSES

def build_html(data):
    mcqs_html = ""
    for i, (q, choices, ans, exp) in enumerate(data["mcqs"], 1):
        mcqs_html += make_mcq(i, q, choices, ans, exp)
    frqs_html = ""
    for i, (frq_type, prompt, answer) in enumerate(data["frqs"], 1):
        frqs_html += make_frq(i, frq_type, prompt, answer)
    return make_section(mcqs_html, frqs_html)

def inject_css(css_path):
    if not os.path.exists(css_path):
        return
    with open(css_path, "r", encoding="utf-8") as f:
        content = f.read()
    if "mcq-item" in content:
        print("  CSS already updated")
        return
    with open(css_path, "a", encoding="utf-8") as f:
        f.write("\n/* Practice section styles */\n" + CSS_ADDITION)
    print("  CSS updated")

def inject_page(filepath, html_block):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    if "practice-section" in content:
        return False
    if "</body>" in content:
        content = content.replace("</body>", html_block + "</body>", 1)
    else:
        content += html_block
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    return True

def main():
    inject_css("/tmp/apsite/assets/site.css")
    injected = 0
    skipped = 0
    for fname, data in COURSES.items():
        fpath = os.path.join(COURSES_DIR, fname)
        if not os.path.exists(fpath):
            print(f"NOT FOUND: {fpath}")
            continue
        print(f"Processing {fname}...")
        html = build_html(data)
        if inject_page(fpath, html):
            injected += 1
            print(f"  OK")
        else:
            skipped += 1
            print(f"  Skipped")
    print(f"\nDone: {injected} injected, {skipped} skipped")

if __name__ == "__main__":
    main()
