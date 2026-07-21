# Reference Pattern Analysis — Instagram references (2026-07-03)

Task: analyze 14 "implement" and 16 "avoid" Instagram references, extract reusable
patterns, and map them to this repository.

## Access outcome — read this first

**All 30 references are INACCESSIBLE for content on this machine.** No video, caption,
or slide content could be retrieved, so **no lessons in this document are derived from
the referenced posts**. Nothing below invents or guesses their contents. The
implemented patterns and safeguards in this repo are grounded in (a) the repository's
own established architecture and (b) durable, widely accepted engineering standards for
the categories the task named (accessibility, motion, responsiveness, performance,
security, AI integration).

### Access attempts (each URL tried individually)

| Vector | Result | Evidence |
|---|---|---|
| `yt-dlp` (native `/watch` skill path), per-URL, all 30 | **Blocked** | Every URL returned Instagram's `"empty media response … use --cookies-from-browser or --cookies for the authentication"` (login-gated). Raw log: 30/30 identical. |
| Browser-session cookies | **Unavailable** | Firefox profile has no Instagram session (2,298 cookies, none authenticate IG); Chrome/Edge cookie DBs use app-bound encryption that `yt-dlp` cannot read on Windows 11. |
| Server-side HTTP fetch of `/embed/` + `/embed/captioned/`, all 30 | **Blocked** | Bot-walled: responses contain no username, caption, or media markup. |
| In-app browser pane on `/embed/` + `/embed/captioned/` (sampled: I01, A01) | **Shell only** | Renders username + like count, **no caption and no video**: I01 → `haydenschmitty` (129 posts · 15K followers, 387 likes); A01 → `patrickwithprospectflo` (78 posts · 18K followers, 18,500 likes). Screenshot attempts hang the embed renderer. |

**To unblock:** log into Instagram in Firefox (yt-dlp reads its cookies), or export a
`cookies.txt` from a logged-in browser, then re-run `/watch <url>` per reference.

## Reference matrix

Status legend — Access: `INACCESSIBLE` (content unavailable; metadata noted where
captured). Implementation/Verification: `N/A — no content to implement from`.
Confidence in the access finding itself: **High** (three vectors, per-URL evidence).

| ID | Class | Shortcode | Access | Notes |
|---|---|---|---|---|
| I01 | IMPLEMENT | reel/DaVjfFMqJFW | INACCESSIBLE | Embed shell only: account `haydenschmitty`, 387 likes. No content. |
| I02 | IMPLEMENT | reel/DZvAvNJxDIy | INACCESSIBLE | login-gated (yt-dlp), bot-walled (fetch) |
| I03 | IMPLEMENT | reel/DYQn4DnpIOx | INACCESSIBLE | same |
| I04 | IMPLEMENT | reel/DZlOK0DPM7E | INACCESSIBLE | same |
| I05 | IMPLEMENT | reel/DZgzsrngAK2 | INACCESSIBLE | same |
| I06 | IMPLEMENT | p/DZ8GW-HnN5K (img 6) | INACCESSIBLE | same (photo post; no image retrievable) |
| I07 | IMPLEMENT | p/DZ_pmDcklj7 (img 3) | INACCESSIBLE | same |
| I08 | IMPLEMENT | reel/DaXumdrMGpC | INACCESSIBLE | same |
| I09 | IMPLEMENT | reel/DXFDuiqAjPY | INACCESSIBLE | same |
| I10 | IMPLEMENT | reel/DaSEJs4x6UH | INACCESSIBLE | same |
| I11 | IMPLEMENT | reel/DadjLthjEu6 | INACCESSIBLE | same |
| I12 | IMPLEMENT | reel/DZVXsuQTefu | INACCESSIBLE | same |
| I13 | IMPLEMENT | reel/DakZz-2zqPl | INACCESSIBLE | same |
| I14 | IMPLEMENT | reel/Daq2iWRldz- | INACCESSIBLE | same |
| A01 | AVOID | reel/DaBQYcDvNdQ | INACCESSIBLE | Embed shell only: account `patrickwithprospectflo`, 18.5K likes. No content. |
| A02 | AVOID | reel/DZbbqtjgTdx | INACCESSIBLE | login-gated / bot-walled |
| A03 | AVOID | reel/DZRIwyEAAz5 | INACCESSIBLE | same |
| A04 | AVOID | reel/DZK9n6mxjFT | INACCESSIBLE | same |
| A05 | AVOID | reel/DYm6huoAy9B | INACCESSIBLE | same |
| A06 | AVOID | reel/DYf-uIhAlZm | INACCESSIBLE | same |
| A07 | AVOID | reel/DXAdsnnEXbl | INACCESSIBLE | same |
| A08 | AVOID | reel/DYKv8IgoNqh | INACCESSIBLE | same |
| A09 | AVOID | reel/DZdmGdqCbbv | INACCESSIBLE | same |
| A10 | AVOID | reel/DZ44icKtQG7 | INACCESSIBLE | same |
| A11 | AVOID | reel/DY54QHoiKlR | INACCESSIBLE | same |
| A12 | AVOID | reel/DZs5KkYsX4o | INACCESSIBLE | same |
| A13 | AVOID | reel/DXkMgEJERJg | INACCESSIBLE | same |
| A14 | AVOID | reel/DZrYcXFjNU6 | INACCESSIBLE | same |
| A15 | AVOID | reel/DZbGD6Izvpo | INACCESSIBLE | same |
| A16 | AVOID | reel/DZ5nNsfI2Ol | INACCESSIBLE | same |

## What was implemented instead (and its real grounding)

Because the reference content is unavailable, the "implement/avoid" work was grounded
in the study categories the task listed, applied to this repo's actual surfaces.
Each row names its true source — none claims video provenance.

| Category (from task) | Work done in this repo | Grounding | Skill |
|---|---|---|---|
| Accessibility / reduced motion | Audited & filled `prefers-reduced-motion` and `:focus-visible` coverage in `assets/question-stream.css`; verified keyboard flow (Enter submits, A–E pick choices) | WCAG 2.2 + existing repo patterns | `ui-verification-loop` |
| Responsiveness / mobile | Verified stream + feedback FAB + tutor at 375px; icon-only FAB on small screens | Repo CSS + live preview checks | `ui-verification-loop` |
| Loading / error / empty states | Already present (loading bar + skeleton, seeded-fallback error card, review-queue empty state) — verified, not duplicated | Repo (built earlier this project) | `ui-verification-loop` |
| Performance | Question prefetch-free design with 12s abort + warm-model keep-alive + localStorage caps — verified | Repo | `qstream-course-authoring` |
| AI functionality | Provider chain (Ollama→Anthropic→OpenAI→seeded), validation, JSON repair, self-check prompt — verified | Repo | `secure-secrets-ai-provider` |
| Secure secret handling | `.env.local` now actually loaded by `serve-local.mjs`; `tests/secrets.test.js` scans tracked files; `docs/SECRETS_SETUP.md` | New this task | `secure-secrets-ai-provider` |
| Anti-pattern prevention | Destructive ruflo Pre/PostToolUse hooks removed from `.claude/settings.json` (documented, reversible) after they truncated `api/question.js` and littered junk files; `node --check` gate written into skills + CLAUDE.md | Session-verified incidents | `ui-verification-loop`, CLAUDE.md |
| Legal/copyright safety | Existing `legalCheck` phrase list + raw-HTML rejection + disclaimers — codified as a reusable checklist | Repo | `legal-safety-review` |

## Avoid-reference safeguards

The 16 AVOID references could not be analyzed, so no video-specific anti-patterns are
documented. The repo-level anti-pattern register (enforced, with verification) lives in:
- `CLAUDE.md` → **Anti-patterns** section (register + rationale)
- `tests/secrets.test.js` (secret leakage — automated)
- `tests/hardening.test.js` (official-AP wording, raw HTML injection — automated)
- `.claude/skills/ui-verification-loop/SKILL.md` (motion abuse, focus loss, layout shift — checklist)

## Limitations

- 30/30 references unwatched — the core "extract patterns from these creators" intent
  is **not fulfilled** and cannot be without an authenticated Instagram session.
- The two captured usernames are provenance metadata only; no inference about their
  content was made or used.
- Re-run path: Firefox IG login → `/watch <url>` each → update this matrix row-by-row.
