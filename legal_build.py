#!/usr/bin/env python3
"""
Build Five & A+ legal pages (Privacy, Terms, AI Notice, Copyright) and wire
site-wide footer links + a11y fixes (search-input label, skip link).
Idempotent. Run with blur python:
  "C:\\Program Files (x86)\\blur\\lib\\vapoursynth\\python.exe" legal_build.py
"""
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
V = "20260627"
CONTACT = "arnavsinha1807@gmail.com"   # change to a dedicated project inbox if desired
UPDATED = "June 27, 2026"

PAGE = """<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title} | Five &amp; A+</title>
<meta name="robots" content="index,follow">
<link href="assets/site.css?v={v}" rel="stylesheet">
</head><body style="--AC:#0f4a4a;--ACfaint:rgba(15,74,74,0.07);--ACglow:rgba(15,74,74,0.18);--ACtext:#0f4a4a;">
<a class="skip-link" href="#main">Skip to main content</a>
<nav class="topnav"><a class="nav-brand-link" href="index.html">Five &amp; A+</a><a href="index.html">&larr; Hub</a></nav>
<div class="masthead"><div class="mh-inner"><p class="mh-breadcrumb"><a href="index.html">Hub</a> / {title}</p><p class="mh-tag">Legal &amp; Privacy</p><h1 class="mh-title">{title}</h1></div></div>
<div class="page-wrap" id="main"><section class="legal-content">
{body}
<p class="legal-updated">Last updated: {updated}.</p>
<p class="legal-note">This is general information for a free student-built educational site, not legal advice.</p>
</section></div>
{footer}
</body></html>
"""

FOOTER = (
    '<footer class="site-footer"><div class="f-brand">Five &amp; A+</div>'
    '<p class="trademark">AP&reg; and Advanced Placement&reg; are trademarks registered by the College Board, which is not affiliated with, and does not endorse, this site. Five &amp; A+ is an independent educational resource and is not affiliated with, endorsed by, or sponsored by the College Board.</p>'
    '<p class="f-sub">Free AP&reg; &amp; College Review, Built by Arnav Sinha &amp; Yashwin Kandra</p>'
    '<nav class="f-legal" aria-label="Legal"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="ai-disclosure.html">AI Notice</a><a href="copyright.html">Copyright</a></nav>'
    '<p class="f-legal-copy">&copy; 2025&ndash;2026 Five &amp; A+. Original lessons, explanations, and practice questions for free personal educational use.</p>'
    '</footer>'
)

PRIVACY = """<p>Five &amp; A+ is a free study-guide website for AP&reg; and college courses, built by two high-school students. We built it to collect as little as possible.</p>
<h2>The short version</h2>
<ul>
<li>No accounts, no logins, no database. We never ask for your name, email, or payment details.</li>
<li>Your progress (answers, scores, ratings, check-offs) is saved <strong>only in your own browser</strong> and is never sent to us.</li>
<li>No cookies, analytics, advertising, or trackers.</li>
<li>We never sell or share your personal information.</li>
<li>Two <strong>optional</strong> AI features send the text you type to a third-party AI service only when you choose to use them.</li>
</ul>
<h2>What we store on your device (and never transmit)</h2>
<p>To make the site work, we save the following in your browser's local storage; it stays on your device and we cannot see it: which questions you answered and whether they were right, free-text answers you type (so you don't lose work), topic mastery and review queues, lesson check-offs and your &ldquo;continue where you left off&rdquo; point, and any star ratings or review text you write (saved locally for your own reference only). You can erase all of it with the site's Reset buttons or by clearing your browser data. Because this storage is strictly functional, it does not require a cookie-consent banner.</p>
<h2>The optional AI features</h2>
<p>The site offers an <strong>AI Tutor</strong> (a chat box) and <strong>AI answer grading</strong>. These are off until you choose to use them; if unavailable, the site falls back to its built-in practice questions and keeps working. When you use an AI feature, your request goes to our small server (a Cloudflare Worker) which forwards it to a third-party AI provider &mdash; <strong>Anthropic</strong> (Claude) and/or <strong>OpenAI</strong> (GPT). We forward only the text you type (your tutor message, or your written answer) and the course/topic. We do <strong>not</strong> send your name, email, location, or saved progress, and our API keys stay on the server, never in your browser. <strong>Please don't type personal information</strong> into the AI features. Providers process your text to return a response and, under their API terms, do not use it to train their models. See <a href="https://www.anthropic.com/legal/privacy">Anthropic's Privacy Policy</a> and <a href="https://openai.com/policies/privacy-policy">OpenAI's Privacy Policy</a>.</p>
<h2>Other services your browser contacts</h2>
<p>Loading our pages connects your browser to <strong>GitHub Pages</strong> (hosting), <strong>Google Fonts</strong> and a <strong>MathJax CDN</strong> (fonts and math rendering), and <strong>Cloudflare</strong> (only if you use AI). These can see your IP address as a normal part of delivering content, under their own privacy policies. We don't share your personal information with them.</p>
<h2>Children's privacy</h2>
<p>Five &amp; A+ is intended for high-school and college students. It is a general-audience study site, not directed at children under 13, and we do not knowingly collect personal information from anyone, including children under 13. Because the optional AI features send typed text to a third-party AI, we ask all users &mdash; especially younger students &mdash; <strong>not to enter any personal information</strong>, and we suggest students under 13 use the regular materials and built-in practice rather than the AI features. If you believe a child has entered personal information through the AI features, contact us and we will help.</p>
<h2>We do not sell or share your data</h2>
<p>We do not sell your personal information, do not &ldquo;share&rdquo; it for cross-context behavioral advertising, and do not use it for advertising or profiling (statements aligned with laws such as the California CCPA/CPRA). Where the optional AI features involve sending data to providers in the United States, those transfers rely on the providers' standard contractual safeguards.</p>
<h2>Data retention &amp; your control</h2>
<p>On your device, data is kept until you clear it (no expiry; you're in control). On our server, we do not store the content of your AI requests &mdash; they are processed and forwarded in real time. An IP address is used momentarily only to limit abuse and is not stored.</p>
<h2>Changes &amp; contact</h2>
<p>If we change how the site handles data, we'll update this page and the date above. Questions about your privacy: <a href="mailto:{contact}">{contact}</a>.</p>
"""

TERMS = """<p>Welcome to Five &amp; A+ (&ldquo;the Site,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), a free educational website with study guides, notes, and practice questions for AP&reg; and college-level subjects. By using the Site you agree to these Terms. If you do not agree, please do not use the Site.</p>
<h2>1. Who we are</h2>
<p>Five &amp; A+ is an independent project built by two high-school students, offered free of charge with no accounts, payments, or subscriptions. We are not a school, tutoring company, or professional service.</p>
<h2>2. Free service, provided &ldquo;as is&rdquo;</h2>
<p>The Site and all content are provided free of charge, &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE,&rdquo; without warranties of any kind, express or implied, including accuracy, completeness, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or available at any particular time.</p>
<h2>3. Educational use only; not professional advice</h2>
<p>Content is for general educational purposes only. It is not professional, academic, legal, medical, or financial advice, and is not a substitute for your textbooks, teachers, official course materials, or the official AP&reg; Course and Exam Description published by the College Board. Always verify important information against official sources.</p>
<h2>4. AI features</h2>
<p>Some optional features use third-party AI services to generate practice questions, explanations, or tutoring responses. AI output may be inaccurate, incomplete, biased, or misleading, and should be independently verified. Do not submit personal, sensitive, or confidential information to the AI features. See our <a href="ai-disclosure.html">AI Use Notice</a>.</p>
<h2>5. No guarantee of results</h2>
<p>We do not guarantee any particular exam score, grade, admission, or academic outcome. Phrases such as &ldquo;score a 5&rdquo; describe a goal, not a promise.</p>
<h2>6. Not affiliated with the College Board</h2>
<p>&ldquo;AP&reg;&rdquo; and &ldquo;Advanced Placement&reg;&rdquo; are trademarks registered by the College Board. Five &amp; A+ is independent and is not affiliated with, endorsed by, or sponsored by the College Board. References to AP&reg; courses and exams are for identification and educational purposes only (nominative fair use).</p>
<h2>7. Acceptable use</h2>
<p>You agree to use the Site only for lawful, personal, educational purposes, and not to: use it to cheat or violate any exam or academic-integrity rule; misuse, overload, or scrape the Site or its AI features; attempt to extract API keys or attack the backend; submit unlawful, harmful, or infringing content; or republish or sell our original content as your own. Using AI-generated content in a way that violates your school's or the College Board's academic-integrity policies is your responsibility.</p>
<h2>8. Third-party content</h2>
<p>The Site may embed or link to third-party content (such as videos). We do not control and are not responsible for third-party content, and including it does not imply endorsement.</p>
<h2>9. Local storage</h2>
<p>The Site saves your progress locally in your own browser; we do not operate accounts or store progress on our servers. Clearing your browser data erases this progress.</p>
<h2>10. Limitation of liability</h2>
<p>To the fullest extent permitted by law, Five &amp; A+, its student creators, and anyone associated with the project will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss arising from your use of (or inability to use) the Site or its content, including reliance on any information or AI output. Because the Site is free, our total liability for any claim relating to the Site is limited to US $0. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.</p>
<h2>11. For minors</h2>
<p>The Site is intended for students and is created by minors. If you are under 13, please use the Site with a parent or guardian. We do not knowingly collect personal information from anyone (see our <a href="privacy.html">Privacy Policy</a>).</p>
<h2>12. Changes &amp; governing law</h2>
<p>We may update these Terms by posting a revised version with a new date; continued use means you accept the changes. These Terms are governed by the laws of the State of New York, United States, without regard to conflict-of-law rules.</p>
<h2>13. Contact</h2>
<p>Questions about these Terms: <a href="mailto:{contact}">{contact}</a>.</p>
"""

AI_NOTICE = """<p>Some features on Five &amp; A+ are optional and powered by artificial intelligence:</p>
<ul>
<li><strong>AI Tutor</strong> &mdash; answers your typed questions about a course.</li>
<li><strong>AI Practice &amp; Grading</strong> &mdash; generates and grades practice questions.</li>
</ul>
<p>You can use the entire site without ever using these features. When AI is unavailable, the site uses its built-in, original practice questions instead.</p>
<h2>What gets sent</h2>
<p>When you use an AI feature, the text you type (your question, or your answer to a practice question) and the course name are sent to a third-party AI provider (currently <strong>Anthropic</strong> and/or <strong>OpenAI</strong>) to generate a response. We do this on our server; your browser never sees or holds any API keys. We do not attach your name or an account to these requests, and we do not store conversations on our servers.</p>
<h2>AI can be wrong</h2>
<p>AI output may be inaccurate, incomplete, or misleading. Always check important answers against your textbook, your teacher, and official course materials. AI responses are not professional or academic advice and do not guarantee any score or grade. Practice questions are generated to be <strong>original</strong> AP-style items; they are not official College Board questions.</p>
<h2>Please don't share personal info</h2>
<p>Do not type your full name, contact details, or any sensitive or confidential information into the AI features. Treat anything you submit as processed by an outside AI service under that service's own terms (<a href="https://www.anthropic.com/legal/privacy">Anthropic</a>, <a href="https://openai.com/policies/privacy-policy">OpenAI</a>).</p>
<h2>Contact</h2>
<p>Questions about our AI features: <a href="mailto:{contact}">{contact}</a>.</p>
"""

COPYRIGHT = """<h2>Original content</h2>
<p>The lessons, notes, explanations, study strategies, and AI-generated practice questions on Five &amp; A+ are original works created by the site's student authors or generated by AI under instructions to produce original, non-copied material. We do not reproduce official College Board AP&reg; exam questions, secure materials, or copyrighted passages. Course and unit structures reflect publicly known, factual course organization and are not copied from any copyrighted framework document.</p>
<h2>AI-generated practice</h2>
<p>Practice questions may be produced by an AI model instructed to write only original questions and to never copy or closely imitate official or copyrighted items; automated checks reject output that resembles official material. AI output can still contain errors &mdash; see our <a href="ai-disclosure.html">AI Use Notice</a>.</p>
<h2>Third-party media</h2>
<p>Some pages embed videos hosted on third-party platforms (e.g., YouTube). Those videos remain the property of their respective creators and are shown under the hosting platform's standard embedding terms. We claim no ownership of third-party media and do not imply endorsement by any creator.</p>
<h2>Your use</h2>
<p>You may use this site for free, personal, educational purposes. Please do not copy our original content to republish it as your own or to sell it.</p>
<h2>Report a problem / takedown requests</h2>
<p>If you believe content on this site infringes your copyright or another right, or reproduces protected material, please email <a href="mailto:{contact}">{contact}</a> with: (1) a description and link to the content, (2) identification of the work you believe is infringed, (3) your contact information, and (4) a statement that you have a good-faith belief the use is not authorized. We will review and remove or correct verified material promptly. This site is hosted on GitHub Pages; formal DMCA notices may also be sent to GitHub, Inc.</p>
"""

PAGES = {
    "privacy.html": ("Privacy Policy", PRIVACY),
    "terms.html": ("Terms of Use", TERMS),
    "ai-disclosure.html": ("AI Use Notice", AI_NOTICE),
    "copyright.html": ("Copyright & Takedown", COPYRIGHT),
}

CSS_ADD = """
/* ── Legal pages + footer legal nav + skip link (compliance) ─────────────── */
.skip-link { position: absolute; left: -9999px; top: 0; z-index: 1000; background: var(--AC, #0f4a4a); color: #fff; padding: .6rem 1rem; border-radius: 0 0 8px 0; font-weight: 600; }
.skip-link:focus { left: 0; }
.legal-content { max-width: 760px; margin: 0 auto; color: var(--text2, #3d3120); line-height: 1.75; }
.legal-content h2 { font-family: 'Space Grotesk', system-ui, sans-serif; font-size: 1.2rem; color: var(--text1, #1a1208); margin: 1.6rem 0 .6rem; }
.legal-content p, .legal-content li { font-size: .95rem; }
.legal-content ul { padding-left: 1.25rem; }
.legal-content a { color: var(--ACtext, var(--AC, #0f4a4a)); }
.legal-updated { font-size: .85rem; color: var(--text3, #6b5f4e); margin-top: 1.6rem; }
.legal-note { font-size: .82rem; color: var(--text3, #6b5f4e); font-style: italic; }
.f-legal { margin: .9rem 0 .3rem; display: flex; flex-wrap: wrap; gap: .25rem 1rem; justify-content: center; }
.f-legal a { color: var(--ink2, #3d3120); font-size: .82rem; text-decoration: none; opacity: .9; }
.f-legal a:hover { text-decoration: underline; }
.f-legal-copy { font-size: .78rem; color: var(--ink3, #6b5f4e); margin: .2rem 0 0; }
"""


def build_pages():
    for fname, (title, body) in PAGES.items():
        html = PAGE.format(title=title, v=V, body=body.format(contact=CONTACT),
                           footer=FOOTER, updated=UPDATED)
        with open(os.path.join(HERE, fname), "w", encoding="utf-8") as f:
            f.write(html)
        print("wrote", fname)


def inject_css():
    path = os.path.join(HERE, "assets", "site.css")
    with open(path, "r", encoding="utf-8") as f:
        css = f.read()
    if ".f-legal" in css:
        print("site.css legal styles already present")
        return
    with open(path, "a", encoding="utf-8") as f:
        f.write(CSS_ADD)
    print("appended legal styles to site.css")


def footer_block(prefix):
    return (
        '<nav class="f-legal" aria-label="Legal">'
        '<a href="{p}privacy.html">Privacy</a><a href="{p}terms.html">Terms</a>'
        '<a href="{p}ai-disclosure.html">AI Notice</a><a href="{p}copyright.html">Copyright</a></nav>'
        '<p class="f-legal-copy">&copy; 2025&ndash;2026 Five &amp; A+. Original content for free personal educational use.</p>'
    ).format(p=prefix)


def patch_page(path, prefix):
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()
    orig = html
    # 1) footer legal links (before the FIRST </footer>), idempotent
    if "f-legal" not in html and "</footer>" in html:
        html = html.replace("</footer>", footer_block(prefix) + "</footer>", 1)
    # 2) search input accessible name
    html = re.sub(r'(<input id="q"(?![^>]*aria-label))', r'\1 aria-label="Search this page"', html, count=1)
    # 3) skip link + main landmark
    if "skip-link" not in html:
        m = re.search(r'(<body[^>]*>)', html)
        if m:
            html = html[:m.end()] + '<a class="skip-link" href="#main">Skip to main content</a>' + html[m.end():]
        # add id=main to first .page-wrap if it has no id yet
        html = re.sub(r'(<div class="page-wrap")(?![^>]*id=)', r'\1 id="main"', html, count=1)
    if html != orig:
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        return True
    return False


def patch_site():
    targets = []
    for name in os.listdir(HERE):
        if name.endswith(".html"):
            targets.append((os.path.join(HERE, name), ""))
    for sub in ("courses", "units"):
        d = os.path.join(HERE, sub)
        if os.path.isdir(d):
            for name in os.listdir(d):
                if name.endswith(".html"):
                    targets.append((os.path.join(d, name), "../"))
    patched = 0
    for path, prefix in targets:
        # don't add footer nav to the legal pages themselves (already have root footer)
        if os.path.basename(path) in PAGES:
            continue
        if patch_page(path, prefix):
            patched += 1
    print("patched", patched, "of", len(targets), "site pages")


def main():
    inject_css()
    build_pages()
    patch_site()


if __name__ == "__main__":
    main()
