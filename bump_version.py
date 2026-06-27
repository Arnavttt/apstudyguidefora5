#!/usr/bin/env python3
"""Bump the ?v= cache-busting token on all asset refs site-wide so returning
visitors get the latest CSS/JS, and add a version to the ai-tutor refs (which
shipped without one). Idempotent. Run with blur python."""
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
NEW = "20260628"

def targets():
    out = [os.path.join(HERE, n) for n in os.listdir(HERE) if n.endswith(".html")]
    for sub in ("courses", "units"):
        d = os.path.join(HERE, sub)
        if os.path.isdir(d):
            out += [os.path.join(d, n) for n in os.listdir(d) if n.endswith(".html")]
    return out

def main():
    changed = 0
    for path in targets():
        with open(path, "r", encoding="utf-8") as f:
            html = f.read()
        orig = html
        # bump any existing 8-digit ?v= token
        html = re.sub(r"\?v=\d{8}", "?v=" + NEW, html)
        # add ?v to ai-tutor refs that lack one
        html = re.sub(r"(ai-tutor\.(?:css|js))\"", r"\1?v=" + NEW + '"', html)
        if html != orig:
            with open(path, "w", encoding="utf-8") as f:
                f.write(html)
            changed += 1
    print("bumped", changed, "pages to ?v=" + NEW)

if __name__ == "__main__":
    main()
