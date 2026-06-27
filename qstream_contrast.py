#!/usr/bin/env python3
"""
Compute and inject a contrast-safe accent token (--ACtext) into each AP course
overview page that carries the AI Question Stream. --ACtext is a darkened version
of that page's inline --AC, same hue, guaranteed >= TARGET contrast on the card
(#fffdf8) so accent text AND white-on-accent buttons meet WCAG AA (>=4.5:1).
Idempotent. Run with blur python:
  "C:\\Program Files (x86)\\blur\\lib\\vapoursynth\\python.exe" qstream_contrast.py [--write]
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
COURSES_DIR = os.path.join(HERE, "courses")
CARD = (255, 253, 248)   # --card #fffdf8
TARGET = 4.6             # small margin above 4.5

def lin(c):
    c = c / 255.0
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4

def luminance(rgb):
    r, g, b = (lin(x) for x in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def contrast(a, b):
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)

def hex_to_rgb(h):
    h = h.lstrip('#')
    if len(h) == 3:
        h = ''.join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))

def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % tuple(int(round(max(0, min(255, x)))) for x in rgb)

def darken_to_target(rgb):
    """Scale toward black (preserves hue) until contrast on CARD >= TARGET."""
    if contrast(rgb, CARD) >= TARGET:
        return rgb
    k = 1.0
    while k > 0.02:
        k -= 0.02
        cand = tuple(c * k for c in rgb)
        if contrast(cand, CARD) >= TARGET:
            return cand
    return (0, 0, 0)

def main():
    write = '--write' in sys.argv
    files = sorted(f for f in os.listdir(COURSES_DIR) if f.endswith('-overview.html'))
    rows = []
    for fname in files:
        path = os.path.join(COURSES_DIR, fname)
        with open(path, 'r', encoding='utf-8') as fh:
            html = fh.read()
        m = re.search(r'<body[^>]*style="([^"]*--AC:\s*(#[0-9a-fA-F]{3,6})[^"]*)"', html)
        if not m:
            continue
        ac = m.group(2)
        actext = rgb_to_hex(darken_to_target(hex_to_rgb(ac)))
        c_ac = contrast(hex_to_rgb(ac), CARD)
        c_txt = contrast(hex_to_rgb(actext), CARD)
        rows.append((fname.replace('-overview.html', ''), ac, round(c_ac, 2), actext, round(c_txt, 2)))
        if write and '--ACtext' not in m.group(1):
            new_style = m.group(1).rstrip(';') + ';--ACtext:' + actext + ';'
            html = html[:m.start(1)] + new_style + html[m.end(1):]
            with open(path, 'w', encoding='utf-8') as fh:
                fh.write(html)
    print('%-42s %-9s %-6s %-9s %s' % ('course', '--AC', 'AC/card', '--ACtext', 'txt/card'))
    for r in rows:
        flag = '' if r[4] >= 4.5 else '  <<FAIL'
        print('%-42s %-9s %-6s %-9s %s%s' % (r[0], r[1], r[2], r[3], r[4], flag))
    print('\n%d pages, target %.1f:1, mode=%s' % (len(rows), TARGET, 'WRITE' if write else 'dry-run'))

if __name__ == '__main__':
    main()
