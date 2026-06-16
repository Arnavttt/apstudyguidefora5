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
    letters = ['A','B','C','D']
    choices_html = "".join(f'<li style="margin:.3rem 0;"><strong>{letters[i]}.</strong> {choices[i]}</li>' for i in range(len(choices)))
    return f"""<div class="mcq-item"><p style="font-weight:600;margin:0 0 .6rem;">Q{num}. {q}</p><ul style="list-style:none;padding:0;margin:0;">{choices_html}</ul><details class="mcq-reveal"><summary>Show Answer</summary><p style="margin:.5rem 0 0;"><strong>Answer: {answer}</strong> — {explanation}</p></details></div>"""

def make_frq(num, frq_type, prompt, model_answer):
    return f"""<div style="margin-bottom:2rem;"><p style="font-weight:600;margin:0 0 .4rem;">FRQ {num} ({frq_type})</p><div class="frq-prompt">{prompt}</div><details class="frq-answer"><summary>View Model Answer</summary><div style="margin:.75rem 0 0;padding:.75rem;background:var(--ACfaint);border-radius:4px;white-space:pre-wrap;font-size:.88rem;line-height:1.7;">{model_answer}</div></details></div>"""

def make_section(mcqs_html, frqs_html):
    return f"""<div class="practice-section" style="max-width:760px;margin:2rem auto;padding:0 1rem;"><h2>Practice Questions</h2><h3>Multiple Choice (20 Questions)</h3>{mcqs_html}<h3>Free Response Questions</h3>{frqs_html}</div>"""

COURSES = {}
