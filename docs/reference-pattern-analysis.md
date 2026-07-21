# Reference Pattern Analysis — Instagram references (updated 2026-07-03)

All 30 references were **watched and analyzed** on this machine after the owner
authenticated Instagram in Firefox: each was downloaded via yt-dlp (Firefox cookies),
keyframes were extracted with ffmpeg via the /watch skill, and the frames (plus burned-in
captions and any subtitles) were read and distilled by analysis agents. Earlier the same
day, all 30 had been login-blocked — that attempt log is preserved in the appendix.

Legend — Class: IMPLEMENT (extract positive patterns) / AVOID (identify harmful patterns).
Status: WATCHED (frame-level evidence) or noted otherwise. Confidence is the analyst
agent's own rating of its read of the content.

## A01 — AVOID — `reel/DaBQYcDvNdQ`

**Status:** WATCHED (35s, talking-head plus over-the-shoulder screen recording of a browser) · **Confidence:** high

**Description:** A walkthrough teaching viewers how to find secret API keys exposed in the client-side code of 'vibe coded' apps via Chrome DevTools.

A man in a purple-lit studio opens with 'It's time to hack vibe coders' and says he'll 'show you how.' The screen recording then demonstrates the steps against a live app (boardy.ai): open the target site, click Chrome's three-dot menu, go to More tools → Developer tools, open the Network tab, filter to JS, and use search for the string 'sk-' and press enter. The DevTools Network panel is shown loaded with dozens of script files and requests, implying that searching for the 'sk-' prefix surfaces secret keys (e.g. OpenAI/Stripe-style keys) shipped to the browser. It is framed as an easy exploit against apps that AI-generated code left insecure.

**On-screen text (evidence):** "It's time to hack vibe coders" · "gonna show you how" · "First you're going to find any vibe coded app" · "then click the three dots in the top right hand" · "more tools and click dev tools" · "type in SK dash and press enter" · "whole lot of things" · "how you'd find it"

**Harmful patterns identified:**
- HARMFUL PATTERN it exploits: shipping secret keys (sk- prefixed) into client-side JS bundles, where anyone can find them via DevTools Network search — never expose provider/API secrets to the browser
- Defensive lesson: secrets belong only on the server (edge function / worker) behind an authenticated proxy; the client should call your endpoint, never the provider directly
- Assume anything in front-end JS is public: no key, token, or private endpoint should be discoverable by a 'sk-' or similar search in the Network tab
- Ship a server-side proxy with CORS/origin locking so a leaked or guessed endpoint cannot be freely reused

**Relevance to this repo:** Highly relevant as a do-not-do warning for the AI question stream. The site is static (vanilla JS, no build step), so it is exactly the class of app this attack targets: if any AI provider key were placed in assets/qstream client code it would be trivially extractable via the demonstrated DevTools 'sk-' search. This validates the repo's existing design — keys stay in the Cloudflare Worker (api/question.js), the browser calls only WORKER_ENDPOINT, and CORS is locked — and argues for keeping it that way plus confirming no key ever leaks into a bundled/inline script. The harmful pattern (client-side secret exposure) is the concrete thing to keep auditing before every deploy; the offensive 'how to hack' framing itself is not something to replicate.

## A02 — AVOID — `reel/DZbbqtjgTdx`

**Status:** WATCHED (18s, talking-head rant with headline sticker and burned-in captions) · **Confidence:** high

**Description:** Mocking vibe-coded apps whose admin areas can be reached by simply editing the URL (broken access control / IDOR).

An 18-second selfie reel in a purple-lit studio. The persistent headline sticker reads 'Claude mythos literally vibe codes security vulnerabilities'. The creator, playing a mock attacker, taunts a vibe coder: captions show him asking what happens if, instead of /dashboard in the URL, he types '/admin' — implying the app grants access with no server-side authorization. He then riffs on the vulnerability's name, mispronouncing IDOR: 'Do you have Ebola vulnerability?' and 'Or do we call that freaky little guy Eidor?', ending with 'I don't know'. The joke's substance is real: AI-generated apps frequently ship with client-side-only route protection, so insecure direct object references and unguarded admin paths are trivially exploitable.

**On-screen text (evidence):** "Claude mythos literally vibe codes security vulnerabilities" · "You think your vibe-coded app is safe for me" · "the URL, I type in slash admin?" · "Do you have Ebola vulnerability?" · "Or do we call that freaky little guy Eidor?" · "I don't know"

**Harmful patterns identified:**
- Harmful: trusting AI-generated code to have implemented authorization — generated apps often protect routes only in client-side JS, so typing a different URL bypasses everything.
- Harmful: security by URL obscurity — assuming nobody will guess /admin or increment an object ID (IDOR).
- Harmful: never adversarially testing your own app ('what if I just change the URL?') before shipping.

**Relevance to this repo:** Partially applicable. The AP study site is static with no accounts or admin routes, so URL-based access control mostly does not exist to be broken. But the lesson maps directly to the Cloudflare Worker (api/question.js): it is the only server surface, so it must never trust client-supplied parameters (course id, prompt content, model selection) and must keep its CORS lock and input validation, because any 'hidden' behavior reachable by crafting a request body is the static-site equivalent of typing /admin. Also reinforces keeping zero privileged endpoints in the deployed site.

## A03 — AVOID — `reel/DZRIwyEAAz5`

**Status:** WATCHED (23s, talking-head car rant with headline sticker and burned-in captions) · **Confidence:** high

**Description:** Mocking vibe coders who assume an app that works locally will survive real users, App Store review, scale, and server costs.

A 23-second in-car selfie rant. Headline sticker: 'Hey retard your vibe coded app won't work on the App Store'. The creator argues that vibe coders believe that because their app 'works locally, it's gonna work with hundreds of' users, but the AI often makes the codebase's server calls 'run sequentially', so every action triggers a slow chain of requests — 'call to the server, it takes a billion...' seconds. The predicted outcome is burned in: 'You have unsubscribes, you have slow service,' 'and you have a huge server bill!', closing with 'What are you gonna do then, buddy?'. The core claim: local success says nothing about production behavior — latency, request patterns, cost, and platform review all bite later.

**On-screen text (evidence):** "your vibe coded app won't work on the App Store" · "works locally, it's gonna work with hundreds of" · "What happens when the AI makes your codebase" · "run sequentially and so every time you make a" · "You have unsubscribes, you have slow service," · "and you have a huge server bill!" · "What are you gonna do then, buddy?"

**Harmful patterns identified:**
- Harmful: equating 'works on localhost' with production readiness — no load, latency, or cost testing.
- Harmful: accepting AI-generated chatty/sequential network patterns (N serial round-trips per user action) without profiling; this compounds into slow UX and runaway server bills.
- Harmful: no plan for what happens when usage scales — churn ('unsubscribes') follows slow service.

**Relevance to this repo:** Directly applicable to the AI question stream. The site is static (near-zero scale risk), but every AI question request hits the Cloudflare Worker; the reel's failure mode is exactly what a chatty design would create — per-question serial calls, latency between questions, and quota/cost blowups on the Worker free tier. It validates the repo's existing choices (seeded offline question bank so the stream works without the network, single request per generated question) and argues for keeping requests batched/minimal, prefetching the next question while the student answers, and testing on a slow connection rather than only via local preview.

## A04 — AVOID — `reel/DZK9n6mxjFT`

**Status:** WATCHED (30s, talking-head storytime with a screen-recording insert of a DM/Discord message) · **Confidence:** high

**Description:** A developer 'hacked' the creator's own vibe-coded site to prove a point: his frontend shipped unminified with source maps exposed.

A 30-second reel headlined 'Developers are hacking vibe coders to prove a point'. It cuts to a screen recording of a message thread (a 'Block' button and chat history visible) where someone tells him his 'frontend is shipping unminified with so[urce maps]' and offers to hop in VC to explain. Back on camera he admits the community 'made it very' clear he was 'exposing my source maps' and that 'there was no obscurity' — anyone could 'just come in on the' client code and read everything. He owns it: 'It was my mistake', 'I thought the AI was' going to 'obscure what I was doing' — i.e., he assumed the AI toolchain handled minification/obfuscation automatically. Closing: 'Thats why its incredibly' important (to check what you actually ship).

**On-screen text (evidence):** "frontend is shipping unminified with so" · "community made it very" · "exposing my source maps" · "there was no obscurity" · "just come in on the" · "It was my mistake" · "I thought the AI was" · "obscure what I was doing"

**Harmful patterns identified:**
- Harmful: assuming the AI or its toolchain silently handles build hygiene (minification, source-map stripping, secret hiding) — nobody verified what the deployed bundle contained.
- Harmful: treating client-side obscurity as a security layer at all — anything shipped to the browser is readable; secrets or sensitive logic must never live there.
- Harmful: never inspecting your own deployed site the way an outsider would (view-source, dev tools, .map files).

**Relevance to this repo:** Applicable with an inversion. The AP site is deliberately no-build vanilla JS, so 'shipping readable source' is a design choice, not a leak — obscurity is not the security model. The transferable rule is the second-order one: because all client code is readable, absolutely nothing secret (Anthropic/API keys, allowlists, prompt-injection defenses that must not be known) may live in assets/qstream/ — keys belong only in the Cloudflare Worker env, which matches the WORKER_ENDPOINT design. Worth a periodic check that no key or private endpoint ever gets pasted into client JS, since view-source exposure is total by construction.

## A05 — AVOID — `reel/DYm6huoAy9B`

**Status:** WATCHED (29s, talking-head review with green-screen screen captures of viewer-submitted websites) · **Confidence:** high

**Description:** The creator guesses whether viewer-submitted websites were vibe coded, and names the tells: identical AI aesthetics, gimmick widgets, and missing QA.

A 29-second reel headlined 'People asked me to guess if there websites were vibe coded lol'. He overlays himself on submitted sites: 'First up, Wazier AI' — a Wazir AI landing page ('Your AI Prompt / Video Engineer', 'Optimize Prompts. Save credit', '25+ AI models') in a generic blue-gradient SaaS template; 'Next up, Yapped' — YAPD, a dark 'WhatsApp Wrapped. Your chats, but make them art.' privacy-first page; then jobconnects.org, which sports a green 'SYSTEM ACTIVE' status badge he calls out — 'But it has this like system active thing,' 'which is totally unnecessary'. His verdict captions carry the thesis: 'But the problem is not vibe coding', 'It's QA and looking the same', 'Don't do those things and you're good' — AI-built sites are fine if they are QA'd and visually distinct.

**On-screen text (evidence):** "guess if there websites were vibe coded lol" · "First up, Wazier AI" · "Next up, Yapped" · "But it has this like system active thing," · "which is totally unnecessary and to give" · "But the problem is not vibe coding" · "It's QA and looking the same" · "Don't do those things and you're good"

**Harmful patterns identified:**
- Harmful: shipping the default AI-generated aesthetic (same gradients, same hero layout, same shadcn-ish components) — instantly recognizable and erodes trust.
- Harmful: decorative gimmick widgets with no function ('SYSTEM ACTIVE' badges, fake status indicators) added because the AI suggested them.
- Harmful: skipping QA — the reviewer's stated root problem is not AI authorship but unreviewed output and sameness.
- Positive corollary he states outright: distinct design + real QA makes AI-built sites acceptable.

**Relevance to this repo:** Highly applicable and mostly an endorsement of the repo's direction. The parchment/gold per-course theming in assets/site.css is exactly the 'don't look like every AI site' defense. The warning to heed: never add purposeless status chrome — the AI source indicator on the question stream must communicate a real state (live AI vs seeded bank vs offline), not act as a decorative 'SYSTEM ACTIVE' badge; and every one of the 23 course pages needs actual QA passes (clicking through the stream, checking themes) rather than assuming generated consistency.

## A06 — AVOID — `reel/DYf-uIhAlZm`

**Status:** WATCHED (86s, talking-head advice monologue ending in a screen shot of a multi-agent coding setup) · **Confidence:** medium

**Description:** The creator's workflow for avoiding bugs when vibe coding with multiple parallel AI agents: branch per agent, markdown context files, fresh-agent review before merge.

An 86-second reel headlined 'How to not have bugs when vibe coding'. Advice captured in captions: 'using git branches per agent' — 'Whatever the main is, you do a branch off of it' for each AI agent; have agents 'read MD files' (markdown context/spec files) before working; write things down 'and have a new agent read them before' merging, so a fresh set of AI eyes reviews changes; this is framed as the way to 'defeat merge conflicts' and not 'miss anything'. The final shot pans to his monitor showing several parallel 'ProspectFlo Envoy' agent session columns with commit notes, PR links, pre-commit hooks and test tallies — a sprawling multi-agent pipeline — beneath a neon sign reading 'FAILURE'. Confidence medium because ~10 frames of an 86s monologue with no transcript necessarily miss connective detail.

**On-screen text (evidence):** "How to not have bugs when vibe coding" · "using git branches per agent" · "Whatever the main is, you do a branch off of it" · "up, you have it read MD files" · "things and have a new agent read them before" · "happen, defeat merge conflicts, all of this" · "miss anything"

**Harmful patterns identified:**
- Harmful root pattern (why this is an AVOID ref): high-volume parallel AI codegen that requires this much machinery — many simultaneous agents on one codebase generate merge conflicts and unreviewed code faster than a human can audit, and the elaborate branch-per-agent/fresh-agent-review scaffolding treats symptoms of that volume.
- Harmful: substituting AI-reviews-AI for human review as the primary quality gate.
- Salvageable ideas at sane scale: branch off main per unit of work, keep durable markdown context files agents must read, and get an independent review before merge.

**Relevance to this repo:** Mostly a cautionary mismatch. The AP study site is a small static repo with no build step; spinning up agent swarms with branch-per-agent choreography (which the repo's ruflo/CLAUDE.md tooling actively encourages) is the failure mode this reel's own 'FAILURE' sign hints at — process overhead and merge churn far exceeding the codebase's needs. The applicable kernel: keep feature work on a branch off main (as feat/ai-question-stream already does), maintain the existing MD context files (CLAUDE.md, memory notes) so any single session has full context, and review diffs before merge — one careful agent plus human QA beats a swarm here.

## A07 — AVOID — `reel/DXAdsnnEXbl`

**Status:** WATCHED (58s, talking-head advice reel (58s, selfie camera, notebook and pen in hand) with small dark overlay cards showing rejection reasons and app-store UI screenshots) · **Confidence:** high

**Description:** A developer recounts the App Store review rejections he hit when publishing his iOS app and how he fixed each one.

A man speaks to camera under a persistent burned-in title about avoiding App Store rejection. Overlay cards appear at intervals citing specific Apple guideline failures: a 5.1.1 Data Collection & Privacy card explains his privacy policy was inside the app but missing from App Store Connect metadata and Apple requires it in both places; a TestFlight app card appears mid-video; a mock login screen shows Google/Facebook/LinkedIn social-login buttons (Apple's third-party-login requirement context); and a text card states IAP rejections often stem from external payment methods, missing Restore Purchases buttons, or improper subscription descriptions. No product demo is ever shown - only him talking with floating evidence cards. No transcript/captions were available, so analysis rests on the burned-in cards.

**On-screen text (evidence):** "How to NOT get rejected when" · "5.1.1 — Data Collection & Privacy" · "privacy policy not properly linked" · "Apple needs it in BOTH places." · "TestFlight" · "Login with Google" · "Apple In-App Purchase (IAP) rejections" · "missing "Restore Purchases" buttons"

**Harmful patterns identified:**
- AVOID: shipping to a gatekept app store means platform compliance overhead (privacy policy in two places, IAP-only payments, mandatory sign-in alternatives) that a static website simply does not carry - do not add app-store-style friction (forced accounts, social login walls) to a tool that works without them
- AVOID: talking-head content where the actual checklist exists only as fleeting overlay cards - information the viewer cannot revisit or copy
- Incidental positive: his one concrete fix (privacy policy must be discoverable in every surface, not just buried in-product) is real - keep legal pages linked from every page footer

**Relevance to this repo:** Mostly inapplicable by design: the site is a static web page with no app-store gatekeeper, no accounts, and no payments, which is exactly the advantage. The transferable bits: keep privacy/AI/copyright pages linked consistently from every course page (his 5.1.1 failure was a discoverability failure), and never introduce login-with-Google walls or purchase flows into the AI question stream - the reel is a catalog of compliance burdens the site avoids by staying static and account-free.

## A08 — AVOID — `reel/DYKv8IgoNqh`

**Status:** WATCHED (57s, pure talking-head rant reel (57s) - one static caption for the first ~12 seconds, then no on-screen text or visuals at all) · **Confidence:** medium

**Description:** A creator argues that many indie apps fail a first-impression trust check (the 'sniff test').

A man talks directly to camera in a bedroom under a ceiling fan for 57 seconds. The only burned-in text is the opening hook 'Your app doesn't pass the sniff test', which disappears about a third of the way in; the remaining 45 seconds are him speaking and gesturing with zero captions, zero screenshots, zero examples shown. No subtitles were downloadable and no transcript exists, so whatever specific criteria he lists are inaudible to a frames-only analysis - which is itself the finding: the content is 100% audio-dependent and evaporates on mute.

**On-screen text (evidence):** "Your app doesn't pass" · "the sniff test"

**Harmful patterns identified:**
- AVOID: value delivered only through speech with no visual reinforcement - muted viewers (most feed scrollers) and deaf/HoH users get nothing; any claim or list should also exist as text on screen
- AVOID: a hook that names a problem ('doesn't pass the sniff test') without ever showing a concrete before/after example - criticism without demonstrable evidence
- AVOID: single static shot with no information hierarchy - nothing to pause on, screenshot, or save

**Relevance to this repo:** Inverse lesson for the site: never make understanding depend on a single channel. For the AP study pages and the AI question stream, every important state (question source, AI vs seeded bank, right/wrong feedback, streak) must be visible as text/visuals, not just implied - the equivalent of captioning. Also the 'sniff test' idea, read charitably, supports the site's existing care about first-impression trust signals (clear AI disclaimers, legal pages, consistent parchment/gold design), but this reel itself demonstrates how not to communicate: assertion with no shown evidence.

## A09 — AVOID — `reel/DZdmGdqCbbv`

**Status:** WATCHED (40s, talking-head news-jacking reel (40s) built on a stack of screenshot cards (X post, article headlines, docs page, terminal) with word-by-word karaoke captions and a comment-gated lead magnet CTA) · **Confidence:** high

**Description:** A tech-news-style reel announcing Anthropic's free Claude Code security plugin and vibe-coding vulnerability statistics.

A woman speaks to camera while a rapid sequence of screenshot cards floats over her: an X.com post from a 'ClaudeDevs' account announcing a security-guidance plugin, an article headline claiming 91.5 percent of vibe-coded apps have vulnerabilities, a 'Vibe Coding Security Risks Are Growing Faster Than Adoption' article citing Georgia Tech CVE tracking, a Claude Code Docs card ('Catch security issues as Claude writes code'), a terminal window showing the claude --dangerously-skip-permissions warning, and a cybersecuritynews.com headline. It ends with 'Comment SECURITY' over a branded red card offering a free guide by the creator (Mariah Brunner). Single-word karaoke captions (MATTERS, CODE, INSTALL, OVER) punch over the cards. None of the screenshotted sources can be verified from the reel itself.

**On-screen text (evidence):** "Anthropic just made" · "vibe coding way safer" · "91.5 Percent of Vibe-Coded Apps Have" · "Catch security issues as" · "--dangerously-skip-permissions" · "Anthropic Launches Free Claude Code" · "Comment SECURITY" · "A free guide by Mariah Brunner"

**Harmful patterns identified:**
- AVOID: authority-by-screenshot - stacking headline/stat cards (91.5%, CVE counts) that look like citations but are uncheckable in-format; alarming stats used as retention fuel
- AVOID: comment-gated lead magnets ('Comment SECURITY') - engagement bait that trades helpfulness for algorithm juice and funnels users to a follow/DM gate
- AVOID: karaoke single-word captions layered OVER the evidence cards, partially covering the text they cite (the word 'OVER' literally obscures the guide's own headline)
- AVOID: news-jacking a vendor announcement into implied endorsement without distinguishing reporting from promotion

**Relevance to this repo:** Directly cautionary for the site's AI-source messaging: the site already shows an AI source indicator and legal notes - keep those claims verifiable (link the actual policy pages) rather than screenshot-style assertions, and never quote impressive-sounding stats (score gains, '91.5% of students...') without a checkable source. Also never gate study materials behind engagement mechanics (share-to-unlock, comment-to-get-guide); everything on the AP site should be one click, no funnel. The reel's information density (6 cards in 40s) is the opposite of the calm parchment reading experience the site wants.

## A10 — AVOID — `reel/DZ44icKtQG7`

**Status:** WATCHED (12s, static b-roll reel (12s) - one continuous shot of a man typing on a laptop with two fixed text overlays; all promised content deferred to the post caption) · **Confidence:** high

**Description:** A save-bait reel claiming vibe-coded apps get hacked and promising 6 pre-deploy security checks that are never shown in the video.

Twelve seconds of a single locked-off shot: a man in a grey shirt types on a laptop at a wooden desk in a dim office. Two static caption boxes sit over the footage for the entire duration - a fear hook ('Most vibe-coded apps get hacked within weeks. Before you deploy, run these 6 security checks like a real backend engineer') and an instruction to 'Read caption and save reel for upcoming interviews'. The six checks themselves never appear anywhere in the video; every frame is visually identical. The video is purely a billboard pointing at the post's text caption, engineered to farm saves.

**On-screen text (evidence):** "Most vibe-coded apps get hacked" · "run these 6 security checks" · "Read caption and save reel for" · "upcoming interviews 🚀"

**Harmful patterns identified:**
- AVOID: content-free promise - headline advertises '6 security checks' and delivers zero of them in the artifact itself; the value lives somewhere else the viewer must go find
- AVOID: unfalsifiable fear claim ('Most... get hacked within weeks') with no source, used purely as a hook
- AVOID: save-bait/engagement farming ('save reel for upcoming interviews') - optimizing for platform metrics instead of viewer learning
- AVOID: zero visual progression - 12 identical seconds means nothing is actually taught or demonstrated

**Relevance to this repo:** The clearest anti-pattern in the batch for a study product: never present a heading that promises N things and delivers them off-page or behind another interaction. On the AP site, if a unit page says '6 must-know FRQ strategies', all six must be right there; the AI question stream's explanations must contain the actual reasoning, not 'see full explanation elsewhere'. Also avoid unsourced scare framing ('most students fail Unit 4') as motivation - AP students respond to it like this reel deserves: as bait. Structural honesty (content where the headline says it is) is a core trust feature for a static site.

## A11 — AVOID — `reel/DY54QHoiKlR`

**Status:** WATCHED (62s, AI-composited brainrot explainer (62s): cartoon Peter Griffin / Stewie lookalikes pasted over drifting Minecraft-parkour backgrounds, TTS-style dialogue implied by word-karaoke captions, section title cards, and a dense prompt-text card) · **Confidence:** high

**Description:** A 'Family Guy x Minecraft brainrot' explainer listing three security mistakes that get AI/vibe-coded apps hacked, ending with a copy-this-AI-prompt card.

Copyrighted Family Guy characters (a Peter Griffin figure holding a MacBook and coffee, a Stewie figure in a suit reading a tablet) are composited over continuously moving Minecraft cave/parkour renders. A siren-emoji hook card promises '3 Things That Will Get Your Vibe-Coded App Hacked'; later cards mark 'Mistake #2: Custom AI Auth' and 'THIRD MISTAKE', while single/double-word karaoke captions (YOU HAVE, DOOR UNTIL, THE SMART, HACKER TELL ME) fragment the narration for frames-only viewing. Near the end a multi-line card tells viewers to use a prompt that begins 'You are a senior penetration tester' and asks the AI to list vulnerabilities, exploits, severity, and fixes. The mistakes themselves are only intelligible via audio; the visuals are pure retention scaffolding unrelated to the content.

**On-screen text (evidence):** "3 Things That Will Get Your" · "Vibe-Coded App Hacked" · "Mistake #2: 🔐 Custom AI Auth" · "THIRD MISTAKE" · "You are a senior penetration tester." · "HACKER TELL ME"

**Harmful patterns identified:**
- AVOID: retention-hack visuals (Minecraft parkour motion) deliberately unrelated to the subject - attention is hijacked, not earned; comprehension of the actual list is near zero from visuals alone
- AVOID: unlicensed copyrighted characters as the content vehicle - a legal exposure the format normalizes
- AVOID: word-by-word karaoke captions as the only text rendering of the argument - the three 'mistakes' are never shown as a readable list
- AVOID: burying the one reusable artifact (the pen-tester prompt) in a cramped, seconds-long card instead of a copyable format
- Incidental positive: the underlying idea of an adversarial self-review prompt (act as a penetration tester, list issues, severity, fixes) is a legitimately useful technique when delivered in a usable medium

**Relevance to this repo:** Strongest AVOID signal for the site's tone: an educational product for AP students must not import brainrot mechanics - no gratuitous motion, autoplaying gimmicks, or attention hacks around the question stream; the parchment/gold static design earning focus is the correct opposite. It also reinforces the repo's existing copyright caution (site already has AI/copyright legal pages): never decorate content with characters or media the site has no rights to, including in AI-generated question text. The salvageable kernel: an adversarial 'attack this' review prompt is worth using internally on the question-stream worker (api/question.js) as a dev practice - but presented as documentation, never as UI spectacle.

## A12 — AVOID — `reel/DZs5KkYsX4o`

**Status:** WATCHED (47s, talking-head advice (car-selfie monologue, static burned-in title, no visuals or code)) · **Confidence:** medium

**Description:** Legal risk of shipping vibe-coded apps — how easily a vibe coder can get sued.

A ~47s vertical reel of a man talking to his phone camera from a car seat for the entire duration. The only on-screen text in all 10 extracted frames is one static caption pinned near the top: 'How easy it is to get sued when vibecoding' with red siren emoji on both sides. No code, screenshots, sources, citations, or demonstrations ever appear — every frame is the same selfie framing with only hand gestures changing. No transcript was available (Instagram served no subtitles and Whisper was disabled), so the spoken claims could not be verified; the visual evidence is a single alarmist claim with zero supporting material shown.

**On-screen text (evidence):** "How easy it is to get sued when vibecoding"

**Harmful patterns identified:**
- Fear-bait framing ('get sued') with no visible evidence, sources, or citations anywhere in the video — the claim is carried entirely by an unverifiable monologue.
- Single static headline for 47 seconds: a viewer who skims frames learns nothing beyond the hook; all substance (if any) is locked in audio.
- Authority posturing without credentials: car-selfie format signals casual authority while discussing legal topics that would need real sourcing.
- Content is 100% ephemeral speech — nothing scannable, quotable, or referenceable afterward.

**Relevance to this repo:** Direct anti-pattern for the AP site's legal/AI disclosure pages: never make alarming legal claims (about AI answers, copyright, or College Board trademarks) without linking the actual policy text — the repo's existing legal notes pages with concrete citations are the correct opposite of this. Also reinforces that key information on the site must live in scannable text, not in a single hook line; a static parchment/gold site should put substance on the page, not tease it.

## A13 — AVOID — `reel/DXkMgEJERJg`

**Status:** WATCHED (25s, talking-head warning reel with word-by-word karaoke captions and two borrowed diagram cutaways) · **Confidence:** medium

**Description:** Warning that vibe coding produces insecure apps, touching auth session validation and row-level security.

A ~25s reel of a man in glasses speaking to camera under a static black banner reading 'VIBE CODING IS DANGEROUS' with red double exclamation marks. Captions render one word at a time — frames caught only 'DID', 'ENTIRE', 'CODE?', 'YOU', 'SECURITY', 'SAY', 'DATA.', 'IS', 'MESSAGE', 'TOGETHER.' — so the argument is unreadable from any single moment. Two cutaways show real technical graphics: a Clerk/Next.js middleware flowchart (user requests protected page, clerkMiddleware validates session cookie/JWT, a 'Valid?' branch redirecting to sign-in or loading the protected page) and a 'Row-Level security' table graphic where users Jay and Etta each see only their own rows. No transcript was available, so the connective narration is unknown.

**On-screen text (evidence):** "VIBE CODING IS DANGEROUS!!" · "Row-Level security" · "Valid?" · "SECURITY" · "TOGETHER."

**Harmful patterns identified:**
- One-word-at-a-time karaoke captions destroy scannability — at no instant does the screen contain a complete thought; meaning exists only in the audio stream.
- Alarmist absolute headline ('IS DANGEROUS!!') pinned over the whole video regardless of what nuance the audio carries.
- Borrowed vendor diagrams (Clerk auth flow, a Microsoft-style RLS graphic) flashed for ~2-4 seconds each — far too short to actually read the decision branches, so they function as credibility props rather than teaching aids.
- Real, useful concepts (server-side session validation, row-level security) are present but structurally inaccessible — the format wastes its own best material.

**Relevance to this repo:** The underlying security concepts genuinely map to the repo (the AI question-stream worker should validate on the server, never trust client-side state), but the delivery is the anti-pattern: on the study site, explanations and question rationales must be complete sentences visible at once, not drip-fed fragments — students reviewing a missed AP question need the whole rationale on screen. Also: if the site ever embeds diagrams, they must persist and be readable at the reader's pace, unlike these 3-second flashes.

## A14 — AVOID — `reel/DZrYcXFjNU6`

**Status:** WATCHED (110s, two-character comedy skit (vibe coder vs senior engineer) with meme graphic cutaways and an end-card promo) · **Confidence:** medium

**Description:** Skit mocking a vibe coder whose unindexed full-table-scan query melted the database, with the senior engineer explaining indexes; ends promoting learn.nextwork.org.

A ~110s skit with two personas: a stern senior engineer at a desk (navy polo, MacBook, olive-tree set) and a sheepish standing vibe coder (cream tee, laptop in hand). Opening captions read 'where is that vibe coder?' and 'Vibe Coder vs Senior Engineer'. A cutaway shows a Tinder-flame graphic with the query 'SELECT * FROM users' and a retro Windows 'ERROR ... Press OK to terminate.' dialog under the caption 'Full table scan = death'. The engineer then teaches with captions like 'Index = book's contents page' and a Google-Maps-style grid graphic labeled 'lat / long' about spatial lookup. Near the end a screenshot of learn.nextwork.org ('What will you learn next?') appears as a promo, and the skit closes on the joke caption 'I'm gonna get a girlfriend'. No transcript was available; captions here are full phrases and carry the storyline well.

**On-screen text (evidence):** "Vibe Coder vs Senior Engineer" · "where is that vibe coder?" · "Full table scan = death" · "SELECT * FROM users" · "Index = book's contents page" · "learn.nextwork.org" · "I'm gonna get a girlfriend"

**Harmful patterns identified:**
- Persona-skit format: the teaching is welded to actors, sets, and comedic timing — none of it survives transplant to a static text site.
- Absolutist meme compression ('Full table scan = death') trades accuracy for punchline; real guidance has conditions (table size, cardinality) that the format cannot hold.
- Content-as-funnel: the educational beat exists to route viewers to an external platform (learn.nextwork.org) via a promo card, ending on a joke rather than a takeaway.
- Worth stealing despite the AVOID class: the concrete analogy 'index = a book's contents page' is a genuinely good explainer device — analogy, not the skit, is the transferable part.

**Relevance to this repo:** The skit/persona/funnel mechanics have no place on a static AP study site — the site should never gate learning behind engagement or route students off-site mid-explanation. But the analogy technique maps directly: AP question rationales (e.g., in the qstream seeded bank) land better as one vivid concrete analogy per concept ('an index is the book's contents page') than as jargon; and the absolutism anti-pattern warns against writing rationales like 'X is always wrong' when AP rubrics are conditional.

## A15 — AVOID — `reel/DZbGD6Izvpo`

**Status:** WATCHED (10s, candid-footage meme reel with a full-screen scrolling jargon wall overlay) · **Confidence:** medium

**Description:** Gatekeeping meme: 'who's gonna tell the vibecoders' about the enormous list of real infrastructure topics they supposedly don't know.

A ~10s meme reel filmed candidly in a college lounge (students on beanbags with sticker-covered laptops, one with Princeton and Kyrgyzstan-flag stickers). The first half shows the stacked caption 'Who's gonna tell the vibecoders about'; the second half replaces it with a full-screen wall of ~35 buzzwords in small white text over the busy footage: Kubernetes, Docker, SQS, S3, cherry-pick, CI/CD, encryption, firewalls, WebSockets, Kafka, RabbitMQ, DynamoDB, rate limiting, load balancers, sharding, RPC, polling, git, '...... etc'. Several entries are misspelled in the original — 'Kuberneter', 'herry pick', 'Tensorin', 'bitMQ', 'Rate limmiting' — undercutting the superiority framing. White text sits directly on light floor/wall footage with no backing panel, making chunks genuinely hard to read in the ~5 seconds it is on screen.

**On-screen text (evidence):** "Who's gonna tell the vibecoders about" · "Kuberneter" · "herry pick" · "Rate limmiting" · "Caching proxy availability" · "long / short polling" · "...... etc"

**Harmful patterns identified:**
- Jargon wall: a giant undifferentiated list with no hierarchy, grouping, or explanation communicates intimidation, not information — nobody can read 35 items in 5 seconds.
- Low-contrast text over busy video with no background panel = illegible; the format sabotages its own content.
- Gatekeeping tone ('who's gonna tell them') positions knowledge as a status weapon rather than something to teach.
- Sloppy typos ('Kuberneter', 'herry pick', 'Rate limmiting') in content claiming expertise instantly destroy credibility — proofreading is part of authority.

**Relevance to this repo:** Three direct transfers: (1) never dump an unstructured wall of AP terms at students — course pages and question rationales should chunk, group, and progressively disclose (the adaptive stream exists precisely to serve one item at a time); (2) the parchment/gold design must keep text on solid readable backgrounds with real contrast, never over decorative texture; (3) a study site's credibility dies on typos — question bank content deserves spell-check passes, since a 'Rate limmiting'-grade error in an AP rationale would read as untrustworthy immediately.

## A16 — AVOID — `reel/DZ5nNsfI2Ol`

**Status:** WATCHED (59s, talking-head listicle ('5 things') with numbered on-screen headers, karaoke captions, and a comment-gated link CTA) · **Confidence:** medium

**Description:** Fear-hook security listicle: five things to do or your (vibe-coded) app gets hacked, ending in a 'Comment LINK' engagement funnel.

A ~59s reel of a man in a Minnesota Hockey crewneck holding a clip-on mic in front of a three-monitor battlestation showing terminal-style windows. It opens with a blue banner 'YOU'RE ABOUT TO GET HACKED' over '(unless you do these 5 things)'. Numbered headers appear per section — frames captured '2. Vulnerabilities in 3rd party packages', '3. Client-side validation', and '5. HTTP' (with the karaoke word 'HTTPS,' below, i.e., use HTTPS instead) — while the running captions are single words ('all', 'needed', 'okay,', 'checks', 'problematic', 'have', 'fix', 'directly'). No code, demo, or evidence is ever shown despite the dev backdrop. The video ends with the banner 'Comment "LINK"' — a comment-to-DM automation funnel gating the actual resource. No transcript was available.

**On-screen text (evidence):** "YOU'RE ABOUT TO GET HACKED" · "(unless you do these 5 things)" · "2. Vulnerabilities in 3rd party packages" · "3. Client-side validation" · "5. HTTP" · "HTTPS," · "Comment "LINK""

**Harmful patterns identified:**
- Fear-hook headline ('YOU'RE ABOUT TO GET HACKED') manufactures urgency to buy attention before any substance is delivered.
- Comment-gated CTA ('Comment LINK'): the promised value is withheld and exchanged for engagement metrics — the content is bait for the funnel.
- Listicle numbering without visible substance: headers name topics but every explanation lives in unverifiable audio; the dev-setup backdrop is a credibility costume.
- The named items themselves are legitimate (third-party package vulns, never trust client-side validation, HTTPS-only) — showing that even sound advice is degraded by bait-and-gate packaging.

**Relevance to this repo:** Anti-patterns first: the site must never gate study material behind engagement (no 'comment/share to unlock'), and headlines like the AI-source indicator or legal notes should inform, not alarm. Ironically the three visible list items validate existing repo decisions: vanilla-JS/no-build means no third-party package attack surface; the question-stream worker (api/question.js with CORS lock) must keep doing server-side validation rather than trusting the client; and the deployed site should remain HTTPS-only. The lesson is to keep that security posture while presenting it in the calm, fully-written-out style the site already uses.

## I01 — IMPLEMENT — `reel/DaVjfFMqJFW`

**Status:** WATCHED (67s, talking-head advice reel (numbered on-screen list, karaoke captions)) · **Confidence:** high

**Description:** Five performance mistakes that make AI/vibe-coded web apps slow, and how to fix them.

A creator at a multi-monitor coding desk delivers a 5-point countdown of why AI-generated ('vibecoded') apps feel slow. The opening frame burns in the title 'YOUR VIBECODED APP IS SLOW (And how to fix it)'. Frames show numbered section headers appearing as he progresses: point 2 is 'Lopsided read/write request gumming', point 3 is 'Main thread or die', point 4 is 'Not giving thought to LCP', and point 5 (sarcastically titled) is 'Awesome, heavy, complicated scroll events'. Point 1 fell between keyframes and no transcript was available, so only single caption words ('ask', 'doesn't', '20') survive from that segment. The format is pure web-performance advice: request batching/balance, keeping work off the main thread, optimizing Largest Contentful Paint, and avoiding heavy scroll handlers.

**On-screen text (evidence):** "YOUR VIBECODED APP IS SLOW" · "(And how to fix it)" · "2. Lopsided read/write request gumming" · "3. Main thread or die" · "4. Not giving thought to LCP" · "5. Awesome, heavy, complicated scroll events"

**Patterns / lessons:**
- Audit for lopsided read/write request patterns - batch or coalesce chatty requests instead of firing many small ones
- Keep long-running work off the main thread (defer, chunk, or use workers) so the UI never freezes
- Treat LCP as a design input: keep the largest above-the-fold element lightweight and early-loading
- Never attach heavy logic to scroll events; throttle/debounce or use IntersectionObserver
- Framing performance fixes as a short numbered checklist makes them memorable and actionable

**Relevance to this repo:** Maps almost one-to-one. The AP site is static vanilla JS, so: (1) the AI question stream should batch/queue its Worker API calls rather than firing per-keystroke or per-question chatter, and coalesce localStorage writes; (2) question generation and answer-grading calls must stay async and never block the main thread while the parchment UI renders; (3) the LCP element on each course page (hero/question card) should be plain HTML+CSS with no blocking JS so first paint stays fast; (4) any scroll-linked effects on long course pages should use IntersectionObserver, not raw scroll handlers. A quick pass over assets/qstream/ against this 5-point checklist would be a concrete repo improvement.

## I02 — IMPLEMENT — `reel/DZvAvNJxDIy`

**Status:** WATCHED (15s, talking-head rant/hot-take reel with burned-in captions) · **Confidence:** high

**Description:** Hot-take warning that vibe-coded apps collapse under real users when the builder doesn't understand CI/CD.

A 15-second rant by a creator in a purple-lit studio (ProspectFlo.com cap, whiteboard of business goals behind him). The static title overlay reads 'Vibe coding can't actually builds apps that can handle real users' (typo in original). Captions trace the argument: your vibe-coded app finally gets users, but 'What happens when you don't understand CICD?' - you ship an update, it 'breaks five things and you don't understand what happened', and 'now every user is unsubscribing because your app is buggy, slow'. The failure mode shown is shipping changes with no regression safety net, then losing users to the resulting breakage.

**On-screen text (evidence):** "Vibe coding can't actually builds apps" · "that can handle real users" · "your little vibe-coded app finally got some" · "What happens when you don't understand CICD?" · "So you make an update to your app and it breaks" · "five things and you don't understand what" · "unsubscribing because your app is buggy, slow,"

**Patterns / lessons:**
- One untested update can break several unrelated things at once - regression risk compounds in AI-generated codebases
- Have a CI/CD or at least a pre-deploy verification step before every push
- Reliability is retention: users leave over 'buggy, slow' apps faster than over missing features
- Understand what your deploy pipeline actually does instead of treating it as magic

**Relevance to this repo:** Directly applicable as process, not UI. The site is a generated static site where shared assets (assets/site.css, assets/qstream/) fan out across all 23 course pages - exactly the 'one update breaks five things' shape. Concrete improvement: add a lightweight CI check (GitHub Actions) that validates the generated HTML, runs the qstream engine's smoke tests, and pings the Worker endpoint before merge; plus keep the existing seeded-bank offline fallback so an AI-provider regression never makes course pages feel 'buggy, slow'.

## I03 — IMPLEMENT — `reel/DYQn4DnpIOx`

**Status:** WATCHED (63s, talking-head educational explainer with slide graphics shown on a laptop screen) · **Confidence:** high

**Description:** Explaining database caching (Redis, RAM vs disk) in deliberately silly 'brain rot' language with simple slides.

A creator holds up a laptop showing minimal orange-and-black slides while narrating caching concepts in meme-speak, under the persistent header 'explaining caching but its brain rot'. The visual sequence: a Database slide with a PostgreSQL logo; a crowd of 'user' icons (with a Fortnite leaderboard as the '1 million people' example of concurrent load); users all hitting a 'db' that gets a sad face ('database cry'); a Redis logo inserted between users and db ('use Redis cache'); photos of RAM sticks ('RAM very fast') versus a spinning hard drive ('disk very slow'); and a grocery-store aisle photo as the analogy for a slow database lookup ('me hungry... very slow') versus grabbing from cache ('me likey cache'). It teaches the cache-aside idea: put a fast in-memory layer in front of the slow persistent store to survive heavy concurrent traffic.

**On-screen text (evidence):** "explaining caching but its brain rot" · "database" · "1 million people" · "database cry" · "use Redis cache" · "RAM very fast" · "disk very slow" · "me hungry" · "me likey cache"

**Patterns / lessons:**
- Put a fast cache in front of a slow data source; serve repeat reads from memory
- Design for the crowd case: many concurrent users hammering one backend is what kills it
- RAM-vs-disk framing: keep hot data in the fastest tier available
- Pedagogy: absurd analogies plus one dead-simple diagram per concept makes dry infra topics stick

**Relevance to this repo:** Two-way applicability. Technically: the AI question stream should cache aggressively on the client - keep generated questions in an in-memory queue plus localStorage, serve the seeded question bank instantly as the 'cache hit' while the Worker fetch happens in the background, and dedupe repeat requests so the Worker/AI provider (the 'slow db') is hit as rarely as possible; a static site has no server cache, so the browser layers are the Redis here. Pedagogically: the analogy-plus-tiny-diagram style is a strong model for how AP course explanations on the site could present dense concepts.

## I04 — IMPLEMENT — `reel/DZlOK0DPM7E`

**Status:** WATCHED (76s, talking-head advice reel with screen-recording of a VS Code repo and a whiteboard diagram) · **Confidence:** high

**Description:** Workflow for running many parallel Claude coding sessions without exhausting context, using persistent handoff/spec markdown files.

Same creator as I02 (ProspectFlo studio). Title overlay: 'I got access to Claude fable 5 again'. He argues the key to agent performance is 'not exhausting your agent's' context - instead 'I spawn a million Claude sessions at a time', each small and scoped. The screen recording shows his real VS Code explorer packed with process artifacts: HANDOFF.md, MANIFEST.md, HANDOFF_PATCH12.md, PATCH_11A/11B/11C_SPEC.md, PATCH_15_ADDENDUM_A1_AUDIT_REMEDIATION.md, ENVOY_SECURITY_BRIEF.md and dozens more numbered patch/spec markdowns. A whiteboard shows 'FABLE' crossed out with arrows fanning to multiple 'Opus' nodes fed by 'Handoff.MD', captioned 'handoff that MD that every agent reads every [session]'. One caption contains an ableist slur used as an edgy aside; the substantive content is the workflow. Claimed result: agent 'performance so [expletive] high'.

**On-screen text (evidence):** "I got access to Claude fable 5 again" · "The key is not exhausting your agent's" · "I spawn a million Claude sessions at a time and" · "handoff that MD that every agent reads every" · "performance so fucking high"

**Patterns / lessons:**
- Never let one agent session bloat to context exhaustion; spawn many small scoped sessions instead
- Maintain a HANDOFF.md that every new agent session reads first, carrying state across sessions
- Write per-change spec files (PATCH_N_SPEC.md, addenda, briefs) so work is resumable and auditable
- A MANIFEST.md indexing the artifacts keeps a many-file agent workflow navigable
- Anti-pattern to note: dozens of loose patch files in repo root gets unwieldy - the repo shown is visibly cluttered

**Relevance to this repo:** This is a dev-process lesson, not a site feature. It matches how this repo is already maintained (MEMORY.md index, docs/ investigation notes, phase-based commits) and validates doubling down: keep a HANDOFF-style doc for the unmerged feat/ai-question-stream branch so any future session (or agent) can resume the question-stream work cold; keep per-phase spec notes in docs/ rather than root (per project CLAUDE.md rules) to avoid the root clutter visible in the video. No direct effect on the static site's user-facing code.

## I05 — IMPLEMENT — `reel/DZgzsrngAK2`

**Status:** WATCHED (53s, talking-head reel with live whiteboard diagramming) · **Confidence:** high

**Description:** After losing Claude Fable 5 access, replacing it with an Opus 4.8 orchestrator plus domain-markdown 'mock weights' and Handoff.md context.

Same creator, reacting to losing Fable 5 access under a clickbait overlay 'Donald trump bans vibe coding' (an export-control joke). His stated workaround: Opus 4.8 is an 'excellent orchestrator', so he gives it 'our own mock weights in the form of' per-domain markdown files - the whiteboard lists 'Mock Weights = Scaffold.MD, Engineering.MD, Content...MD' - then runs 'one single main Opus orchestrator... orchestrating several other Opus instances'. He draws FABLE crossed out with arrows to three 'Opus' nodes, all fed by 'Handoff.md', whose contexts are re-read 'every single session'. The core claim: structured, domain-specific context files plus an orchestrator/worker topology recovers most of the lost frontier-model capability.

**On-screen text (evidence):** "Donald trump bans vibe coding" · "And I got out of bed for this, but don't worry" · "of Opus 4.8" · "excellent orchestrator and it had better" · "is give it our own mock weights in the form of" · "then having one single main Opus orchestrator" · "orchestrating several other Opus instances" · "contexts in what's called Handoff.md" · "every single session"

**Patterns / lessons:**
- When the strongest model is unavailable, compensate with richer structured context ('mock weights' = domain markdown files) for a weaker model
- Orchestrator/worker topology: one coordinating session delegates to several scoped worker sessions
- Handoff.md re-read at the start of every session keeps all instances aligned
- Split standing context by domain (scaffold/engineering/content) instead of one monolithic prompt file
- Clickbait hook unrelated to the real content is the attention pattern used - note, not endorse

**Relevance to this repo:** Doubly relevant. For repo process: it mirrors the user's own Fable 5 access situation (see memory) and endorses the existing pattern of CLAUDE.md plus per-domain docs; a per-branch Handoff doc for feat/ai-question-stream is the concrete takeaway. For the site itself: the 'mock weights' idea translates to the question stream's prompt design - keep per-course structured context (course outline, difficulty rubric, seeded exemplars in assets/qstream/) that the Worker injects into every AI request, so even a mid-tier model yields consistent AP-style questions; the static site already ships the seeded bank, which is exactly this pattern's offline extreme.

## I06 — IMPLEMENT — `p/DZ8GW-HnN5K`

**Status:** INACCESSIBLE — yt-dlp (with Firefox cookies) identified the post as a 7-item playlist 'Post by chase.h.ai' but every item failed with: "ERROR: [Instagram] DZ8GW-HnN5K: No video formats found!; please report this issue on https://github.com/yt-dlp/yt-dlp/issues". Retry with --no-video-multistreams produced the identical error for all 7 items. The post is an image carousel and yt-dlp's Instagram extractor cannot download image-only media, so no visual content could be inspected.

## I07 — IMPLEMENT — `p/DZ_pmDcklj7`

**Status:** INACCESSIBLE — yt-dlp (with Firefox cookies) identified the post as a 5-item playlist 'Post by learnbayofficial' but every item failed with: "ERROR: [Instagram] DZ_pmDcklj7: No video formats found!". Retry with --no-video-multistreams failed identically for all 5 items. Image-carousel post; yt-dlp's Instagram extractor has no image download support, so no slides could be viewed.

## I08 — IMPLEMENT — `reel/DaXumdrMGpC`

**Status:** WATCHED (64s, Motion-graphics explainer with talking-head segments (promo reel for a free Claude Code plugin)) · **Confidence:** high

**Description:** A free Claude Code plugin/persona that enforces code minimalism (YAGNI) so Claude writes far less bloated code.

Opens on a pixel-art 'CLAUDE CODE' terminal and a mock code panel labeled 'agent.py — 52 lines · 7 issues' full of redundant code (tmp list loop, duplicated helper(a,b) calls, wrap(wrap(state))), captioned 'Imagine if Claude could'. It then shows the payoff stat card '20 files · clean — 1,020 lines deleted' and a talking-head presenter announcing a 'FREE PLUGIN' 'that does exactly that.' The plugin is personified as a grumpy minimalist reviewer meme-face who is shown 50 lines of a handleRequest function, invokes YAGNI ('// you are not gonna need it') and a decision test 'Need. Stdlib. 1 line.' / 'NEED TO EXIST'. Benchmark screens claim 'BENCHMARK · CODE REDUCTION' 54% average and 81% worst case, plus '20% CHEAPER / 27% FASTER / 0 BREAKS' ('It never broke a single...'). It ends with adoption proof (a counter animating past 'DEVELOPERS 2,399' while the voiceover caption says '44,000 developers') and a comment-keyword CTA: comment 'PONYTAIL' to get a cheat sheet.

**On-screen text (evidence):** "52 lines · 7 issues" · "20 files · clean" · "1,020 lines deleted" · "FREE PLUGIN" · "// you are not gonna need it" · "Need. Stdlib. 1 line." · "BENCHMARK · CODE REDUCTION" · "54% AVERAGE 81% WORST CASE" · "20% CHEAPER 27% FASTER 0 BREAKS" · "Comment PONYTAIL"

**Patterns / lessons:**
- Give the AI a minimalist reviewer persona with a hard decision test per line: does this need to exist, and can the stdlib/platform do it in one line? (YAGNI applied to AI-generated code)
- Delete-first refactoring is a feature: measure and celebrate lines removed (e.g. '1,020 lines deleted'), not lines added
- Sell an abstract practice with concrete quantified outcomes (54%/81% code reduction, 20% cheaper, 27% faster, 0 breaks) rather than adjectives
- Personify a dry engineering principle as a memorable character to make it sticky
- Comment-a-keyword lead-magnet CTA drives engagement (marketing pattern, not site code)

**Relevance to this repo:** Maps to the repo's engineering discipline rather than its UI: the no-build vanilla-JS constraint and the 'keep files under 500 lines' rule are exactly this plugin's YAGNI ethos. Reusable action: run a minimalism audit over assets/qstream/ and api/question.js — remove wrapper-around-wrapper helpers, duplicated utility functions, and speculative options, preferring platform APIs (fetch, URLSearchParams, crypto) over hand-rolled code. The quantified-outcome idea also translates to the site itself: when the AI question stream makes claims (e.g. adaptivity), show concrete numbers, not hype. The comment-keyword CTA has no equivalent on a static study site.

## I09 — IMPLEMENT — `reel/DXFDuiqAjPY`

**Status:** WATCHED (84s, AI-voiced cartoon characters (Peter/Stewie Griffin) over Minecraft-parkour background footage, with on-screen prompt cards — 'brainrot explainer' format) · **Confidence:** high

**Description:** Five copy-paste prompts that make a vibe-coded app's UI look professionally designed instead of AI-generated.

Burned-in title on every early frame: '5 prompts to make your app look NOT vibe coded'. Peter Griffin poses the problem and Stewie delivers numbered prompts as full on-screen text cards while Minecraft parkour plays behind them. Two prompts are fully legible in the extracted frames: Prompt 4 — 'Pick one real font (not the default), set line-height to 1.5-1.6 for body text, and fix all spacing so sections have consistent vertical rhythm. Remove cramped or uneven padding.' (keyword card 'LINE HEIGHT'); and Prompt 5 — 'Audit my entire landing page and remove anything that exists only because it looked cool in a Tailwind demo: floating orbs, fake dashboard mockups, fake testimonials, decorative blurs, and unused animations.' (keyword card 'ANYTHING THAT'). Other karaoke-style caption fragments visible across frames: 'REMOVE EVERY GRADIENT', 'NO EMPOWER' (banning marketing-speak verbs like 'Empower' from copy), 'PROVES THE', 'FROM THREE'. The reel ends back on Peter ('DANG STEWIE') and a blurred parkour outro.

**On-screen text (evidence):** "5 prompts to make your app look NOT" · "REMOVE EVERY GRADIENT" · "NO EMPOWER" · "set line-height to 1.5-1.6 for" · "sections have consistent vertical" · "only because it looked cool in a" · "floating orbs, fake dashboard mockups, fake" · "LINE HEIGHT" · "ANYTHING THAT" · "DANG STEWIE"

**Patterns / lessons:**
- Typography first: one deliberately chosen real font, body line-height 1.5-1.6, and consistent vertical rhythm/padding across sections instantly de-AI-ifies a page
- Remove decorative gradients used as filler — gradients everywhere are the #1 vibe-coded tell
- Audit-and-delete prompt: strip anything that exists 'because it looked cool in a demo' — floating orbs, fake dashboard mockups, fake testimonials, decorative blurs, unused animations
- Ban generic marketing-speak (e.g. 'Empower...') from UI copy; say concretely what the product does
- Deliver a checklist as numbered, copy-pasteable prompt cards — each with a short keyword mnemonic — a strong format for teaching content

**Relevance to this repo:** Highest direct applicability in this batch. Concrete checklist for the parchment/gold design in assets/site.css: (1) verify body text line-height is 1.5-1.6 and section padding follows one consistent vertical-rhythm scale across all 23 course pages; (2) confirm the site uses one intentional font pairing, not framework defaults; (3) keep gold as accents/borders, not wall-to-wall gradients; (4) sweep landing and course pages for purely decorative elements or placeholder-style content (no fake testimonials/stats — real course counts and real AP data only); (5) rewrite any hype copy so the AI question stream is described plainly (what it does, that it works offline via the seeded bank). The prompt-card teaching format could even inspire how the site presents study tips.

## I10 — IMPLEMENT — `reel/DaSEJs4x6UH`

**Status:** WATCHED (24s, Talking-head shock hook followed by a screen-recording tutorial demo (phone-filmed laptop screen)) · **Confidence:** high

**Description:** Connecting the motion.so 'Motion' AI motion-design tool to claude.ai as a custom MCP connector so Claude can generate motion-graphics videos.

Hook: a young man dramatically removes his glasses under the burned-in caption 'I am sorry!?... Claude can do what now??'. Then a filmed screen recording walks through: claude.ai settings showing the Connectors panel with a '+' menu ('Browse connectors' / 'Add custom connector', caption 'add custom connector'); visiting motion.so ('Frontier AI for Motion Design', caption 'then go to this website'), whose docs show a 'connect claude' snippet — open claude.ai Settings > Connectors, add a custom connector named Motion, paste 'https://mcp.motion.so/mcp', 'Connect and sign in to Motion. No API key.' (caption 'copy mcp link'); then a new claude.ai chat (caption 'now give prompt to claude') with a prompt visible in a later frame as 'a high-quality motion graphics ad for Claude, Anthropic's AI assistant...'. The payoff frames show the generated ad playing in motion.so — serif text animation reading 'Focus on timing, easing, and guiding attention seamlessly.' ending on a 'claude.ai' end card (caption 'and it makes ur motion videos!'). CTA: 'comment "site" for access'.

**On-screen text (evidence):** "Claude can do what now??" · "add custom connector" · "Browse connectors" · "Frontier AI for Motion Design" · "https://mcp.motion.so/mcp" · "No API key." · "now give prompt to claude" · "and it makes ur motion videos!" · "comment "site" for access"

**Patterns / lessons:**
- Extend Claude with a URL-based custom MCP connector in three steps (Settings > Connectors > Add custom connector > paste MCP URL) — no API key handling
- Show the actual payoff render, not just the setup — the demo ends on the generated artifact
- 20-second tutorial structure: shock hook (~3s) > terse step captions over screen recording > payoff > comment-keyword CTA
- Delegate polished motion-graphics production to a specialized AI tool driven from the agent you already use

**Relevance to this repo:** Not applicable to the site runtime: the AP study site is static vanilla JS with a locked-down data flow, so MCP connectors have no place in the shipped page, and the adaptive question stream already has its own worker endpoint design. Applicability is to the authoring/marketing workflow: the same custom-connector pattern could let the maintainer generate promo or explainer motion graphics for the site from Claude, and the hook-steps-payoff screen-recording format is a good template if short demo videos of the question stream are ever made. The comment-gated 'access' CTA is an engagement tactic irrelevant to a study site.

## I11 — IMPLEMENT — `reel/DadjLthjEu6`

**Status:** WATCHED (62s, talking-head advice with persistent title banner and burned-in captions) · **Confidence:** medium

**Description:** A creator relays an Anthropic staff engineer's personal CLAUDE.md configuration file and the coding-workflow rules it enforces.

A young man speaks to camera in a home office; a fixed pink/red banner reads 'Claude Code — Anthropic Staff Engineer's personal Claude.md File' for the whole clip. Karaoke-style captions walk through rules the engineer's config supposedly enforces: read/understand before touching any code, use subagents to break hard problems into smaller pieces, never mark a task 'done' without running tests, and always find the root cause rather than patching symptoms. A numbered card '2. Subagents' appears mid-video, implying a listicle of config sections. The clip closes with a lead-magnet CTA implying he'll 'send you his full file' if you engage. It is promotional/engagement content built around a downloadable CLAUDE.md rather than a live demo.

**On-screen text (evidence):** "Claude Code" · "Anthropic Staff Engineer's personal Claude.md File" · "THE CREATOR OF CLAUDE CODE" · "RULES THAT CLAUDE CODE FOLLOWS" · "BEFORE TOUCHING ANY CODE" · "2. Subagents" · "AS DONE WITHOUT RUNNING TESTS" · "FIND THE ROOT CAUSE" · "SEND YOU HIS FULL FILE"

**Patterns / lessons:**
- Anchor a whole reel with one persistent title banner so a viewer who joins mid-scroll instantly knows the topic
- Structure advice as a short numbered listicle ('2. Subagents') so it reads as a checklist worth saving
- Encode engineering discipline as explicit rules: understand before editing, never mark done without tests, fix root cause not symptoms
- Close with a lead-magnet CTA ('DM/comment for the full file') to convert watch-time into follows

**Relevance to this repo:** Content is about AI-coding-agent workflow, not a website feature, so it does not translate into user-facing UI. The transferable value is process discipline for building the site itself: keep a tight CLAUDE.md, never treat a change to assets/qstream or the worker as done without verifying it, and fix root causes in the question-stream engine rather than patching symptoms. The listicle+banner format is a usable template if the site ever ships a 'study tips' social clip, but has no bearing on the parchment/gold static pages.

## I12 — IMPLEMENT — `reel/DZVXsuQTefu`

**Status:** WATCHED (7s, fast talking-head hook plus a saveable text checklist card) · **Confidence:** high

**Description:** A pre-ship performance-audit checklist of five database/query mistakes that make AI-generated ('vibe coded') apps feel slow.

A very short reel opens on a person in an elevator with the hook 'why your vibe coded app feels so slow / Fix this immediately,' then hard-cuts to a black checklist card. The card, titled 'before you ship — Ask AI to audit these 5 things,' lists five unchecked boxes: N+1 queries, Pagination, Missing indexes, Connection pool, and SELECT *. It ends with 'save this' in orange and 'follow for more vibe coding mistakes.' The whole piece is a compact, screenshot-worthy performance-review checklist aimed at people shipping AI-generated backends.

**On-screen text (evidence):** "why your vibe coded app feels so slow" · "Fix this immediately" · "before you ship" · "Ask AI to audit these 5 things" · "N+1 queries" · "Pagination" · "Missing indexes" · "Connection pool" · "SELECT *" · "save this"

**Patterns / lessons:**
- Pair a punchy problem hook ('why your app feels slow') with an immediate concrete fix list to earn a save
- Package expertise as a 5-item checklist card with empty checkboxes so viewers screenshot and reuse it
- Frame the action as 'ask AI to audit these things' — a prompt-shaped deliverable the viewer can paste into their tool
- Name specific, diagnosable anti-patterns (N+1, missing indexes, SELECT *) rather than vague 'optimize' advice

**Relevance to this repo:** The static AP site has no database, so N+1 queries, indexes, connection pools and SELECT * do not apply to the parchment pages themselves. They are relevant only to the Cloudflare Worker (api/question.js) if it ever queries a datastore — there the audit list is a genuine pre-deploy checklist. The strongly transferable idea is the meta-pattern: keep a short 'before you ship' audit list and have the AI review the worker/asset bundle for performance before merging. The checklist-card content format is also a clean template for turning a course's key facts into a saveable study asset.

## I13 — IMPLEMENT — `reel/DakZz-2zqPl`

**Status:** WATCHED (45s, talking-head promo with overlaid product/terminal screenshots) · **Confidence:** high

**Description:** Promo for 'deeplake/hivemind,' a tool that lets multiple AI coding agents share memory and learn as one team.

A man films in a car while product screenshots overlay the top half. The pitch: today's coding agents (Claude Code, OpenClaw, Codex, Cursor, Hermes, pi) each run in isolation and 'none of them learn from each other,' wasting money re-solving the same problems. The promoted product, 'hivemind' (deeplake, 'Backed by Y Combinator'), connects every agent to a shared memory so a skill added once is available to all agents instantly. Screens show an npm install one-liner ('npm i -g @deeplake/hivemind && hivemind install'), slash commands like /Hivemind and /team-standup, and a Claude Code session pulling a 24-hour team-activity summary. It closes with the engagement bait 'Comment "hivemind" for the resource doc.'

**On-screen text (evidence):** "Your agents learn from each other to save MONEY" · "BACKED BY Y COMBINATOR" · "Claude Code · OpenClaw · Codex · Cursor · Hermes · pi" · "None of them learn from each other" · "Every agent connected" · "One skill Every agent Instantly" · "/Hivemind watches" · "Comment "hivemind" for the resource doc"

**Patterns / lessons:**
- Open on a relatable pain (agents don't share context, so you pay twice) before revealing the product as the fix
- Use crisp before/after screens ('None of them learn from each other' → 'One skill, every agent, instantly') to make the value legible
- Lean on social proof (Y Combinator badge, recognizable agent logos) to borrow credibility fast
- Drive engagement with a keyword-comment CTA to trigger a DM auto-responder

**Relevance to this repo:** Essentially no direct product fit: this is multi-agent developer tooling, not anything a static AP study site or its single AI question stream exposes to students. The only tangential relevance is architectural — the repo already carries a comparable 'swarm/hive-mind/shared-memory' harness (ruflo), so the video is a marketing echo of tooling the user has, not a feature to add. Treat the reusable takeaway as pure content-marketing craft (pain-then-product, before/after screenshots, YC social proof, comment-for-doc CTA); do not import the 'connect all your agents' claim as a site requirement.

## I14 — IMPLEMENT — `reel/Daq2iWRldz-`

**Status:** WATCHED (65s, single-take talking-head with one fixed title card, no on-screen demo) · **Confidence:** low

**Description:** An argument that Claude Code (AI coding agents) needs a dedicated password/secrets manager.

The reel is a straight talking-head: a man in a well-lit room speaks to camera for about a minute under a single unchanging two-line title, 'CLAUDE CODE NEEDS A PASSWORD MANAGER.' The opening frame is black, then every subsequent frame is the same framing with no slides, terminal captures, or karaoke captions. Because no subtitle track downloaded and there are no burned-in captions beyond the title, the specific argument is not recoverable from frames alone, but the thesis is explicit in the persistent card: AI coding agents should manage secrets/credentials through a proper password or secrets manager rather than ad-hoc handling.

**On-screen text (evidence):** "CLAUDE CODE NEEDS" · "A PASSWORD MANAGER"

**Patterns / lessons:**
- A single strong claim as a fixed title can carry a whole talking-head clip when the topic is opinion, not tutorial
- Lead with the thesis verbatim on screen so the point survives even with sound off
- Topic signal: treat secret/credential handling for AI agents as a first-class concern rather than an afterthought

**Relevance to this repo:** Directly relevant as a security reminder even though the specifics weren't captured: the site's AI question stream relies on a Cloudflare Worker (WORKER_ENDPOINT) and AI provider keys, and those secrets must live only in the worker's server-side environment, never in the static parchment/gold front-end. The clip reinforces keeping API keys out of client JS and out of the repo (the CLAUDE.md rule 'never commit secrets/.env' aligns). As a low-confidence caveat, the exact recommendation (which manager, what workflow) could not be verified from frames, so treat only the general 'manage agent secrets properly' principle as the takeaway.

## Cross-reference synthesis → repo actions

See the "Implementation & safeguard mapping" section appended by the maintainer after
this generation, and CLAUDE.md's UI/UX + anti-pattern sections which were updated from
these findings.

## Appendix — original access-attempt log (same day, pre-authentication)

Before Instagram was authenticated in Firefox, all 30 URLs were individually blocked:
yt-dlp returned "empty media response … authentication required" for 30/30; server-side
embed fetches were bot-walled; the in-app browser rendered embed shells only (username +
likes, no content). This was resolved by the owner logging into Instagram in Firefox,
after which every reference downloaded successfully.

## Implementation & safeguard mapping (maintainer, post-analysis)

| Source refs | Action taken in repo | Status |
|---|---|---|
| I02, A03 | `.github/workflows/ci.yml` — syntax-check all JS + full test suite on every push/PR (shared assets fan out to 236 pages; catches "one update breaks five things") | **Implemented** |
| I01 | Perf audit executed: the one raw scroll listener (`assets/app.js` light-path) is passive + transform-only + self-throttled rAF — compliant; LCP elements are inline HTML/SVG; qstream network/storage writes already coalesced. Checklist codified in `ui-verification-loop` skill | **Verified compliant + codified** |
| I03 | Client-side cache-first pattern (seeded bank as instant "cache hit", cached generated questions, request dedupe) — already shipped in qstream; validated by this study | Already implemented |
| I09 | Typography/de-AI audit: body line-height 1.7 (deliberate for study content), no gradient-spam aesthetic (parchment/gold hand-tuned), no fake widgets/testimonials | **Verified compliant** |
| I04, I05, I11 | Process lessons (small scoped sessions, handoff docs, root-cause-not-symptom, tests-before-done) folded into CLAUDE.md task protocol §9 | **Implemented** |
| I14, A01, A04 | Secrets never client-side; Worker-side keys; `tests/secrets.test.js` scans tracked files; adversarial self-inspection rule in `secure-secrets-ai-provider` skill | Already implemented (validated) |
| A02 | Worker-side validation/CORS/rate-limit treated as the only real access control (no client-side trust) — existing `api/question.js` posture validated | Already implemented |
| A05, A08, A10, A11, A15, A16, A09, A12 | Content rules added to CLAUDE.md UI/UX section: promise-N-deliver-N, no engagement gating, multi-channel state, no attention hacks/gimmick widgets, chunked term lists, claims link policy | **Implemented** |
| A06 | Validates removal of destructive swarm-hook choreography (done earlier same day); anti-pattern register in CLAUDE.md | Already implemented |
| A13, A14 | Explanations must be scannable text + one analogy, never speech/skit-locked — content rule (I03 pairing) in CLAUDE.md | **Implemented** |
| I08 | Minimalism/YAGNI audit of qstream noted as an optional follow-up (repo already buildless/no-deps) | Deferred (optional) |
| I10, I13 | MCP-connector and multi-agent-memory tooling — no product fit for a static study site; documented as not-applicable | Not applicable (documented) |
| I06, I07 | Photo carousels — yt-dlp cannot fetch IG images; only account metadata retrieved | **Inaccessible (partial metadata)** |
