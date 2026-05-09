// lib/data/content/aplang_content.dart
//
// Full content tree for AP Language & Composition — transcribed from aplang.html.
// 5 Unit objects: Rubric, SPACE-CAT + Kairos, Synthesis FRQ, Rhetorical Analysis FRQ, Argument FRQ.
// All content is typed const data — zero dynamic dispatch at render time.

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> aplangUnits = [
  // ── 2025 Analytic Rubric ───────────────────────────────────────────────────
  Unit(
    title: '2025 Analytic Rubric — All 3 FRQs',
    blocks: [
      RubricBoxBlock([
        RubricRow(
          label: 'Row A — Thesis / Claim',
          points: '0–1 pts',
          description:
              '1 pt: Responds to the prompt with a defensible thesis that establishes a line of reasoning.\n'
              '• For Argument and Synthesis: makes a CLAIM about the issue that can be supported.\n'
              '• For Rhetorical Analysis: makes a claim about HOW rhetorical choices achieve the writer\'s purpose.\n'
              '• Can appear anywhere (intro or conclusion). Must be MORE than a restatement of the prompt.\n\n'
              '0 pts: Restates or paraphrases the prompt. States a fact rather than making a claim. '
              'Offers only a plan to argue rather than an argument itself.',
        ),
        RubricRow(
          label: 'Row B — Evidence and Commentary',
          points: '0–4 pts',
          description:
              '0 pts: Simply restates thesis, summarizes the prompt, or offers irrelevant evidence.\n\n'
              '1 pt: Provides evidence but it is general rather than specific; commentary absent or merely summarizes.\n\n'
              '2 pts: Provides some specific evidence; commentary explains how some evidence relates to the argument (may be superficial or inconsistent).\n\n'
              '3 pts: Specific evidence consistently supporting the argument; commentary explains HOW evidence supports the line of reasoning.\n'
              '• Synthesis: cites at least 3 sources; commentary connects each to the argument.\n'
              '• Rhetorical Analysis: identifies specific choices; explains effect on audience.\n'
              '• Argument: specific examples with commentary linking to claim.\n\n'
              '4 pts: All of the above PLUS commentary consistently explains how multiple pieces of evidence work together to support an overall line of reasoning.\n'
              '• Synthesis: sources are integrated and analyzed, not just cited.\n'
              '• Rhetorical Analysis: explains how MULTIPLE choices work together to achieve the purpose.\n'
              '• Argument: demonstrates understanding of the full complexity of the issue.\n'
              '(Note: grammatical errors that interfere with communication prevent the 4th point.)',
        ),
        RubricRow(
          label: 'Row C — Sophistication',
          points: '0–1 pts',
          description:
              '1 pt: Demonstrates a sophisticated understanding through one of these pathways:\n'
              '• Nuanced argument: explicitly acknowledges and explores complexities, tensions, or contradictions.\n'
              '• Broader context: situates the argument in a larger context (historical, cultural, political, ethical).\n'
              '• Vivid persuasive style: consistently compelling voice and skillful use of language throughout — not one strong sentence.\n'
              '(Earned by roughly 5–15% of essays. Cannot be earned with a throwaway "some might argue..." sentence.)\n\n'
              '0 pts: Demonstrates a simplistic or formulaic understanding. Complexity asserted but not demonstrated.',
        ),
      ]),
      CalloutBlock(
        title: 'How to Think About the Rubric',
        items: [
          'Thesis (Row A): The entrance ticket. No thesis = max score of 3 regardless of the rest.',
          'Commentary (Row B): The engine. Most students stall at a 2 because they identify devices or cite sources without explaining the "so what?" — how does this specific evidence prove this specific claim?',
          'Sophistication (Row C): The bonus. Don\'t chase it — write a genuinely complex argument and it may appear. A formulaic "on the other hand" never earns it.',
          'Score target: A 5-scoring essay typically earns 1 + 3-4 + 0 = 4–5 points. A 4 + 1 = 6 is exceptional writing.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question:
              'A student writes a strong thesis and uses three specific examples with consistent commentary linking each to the argument, but does not demonstrate sophisticated understanding. Maximum possible score is:',
          choices: [
            QuizChoice(text: 'A) 3', isCorrect: false),
            QuizChoice(text: 'B) 4', isCorrect: false),
            QuizChoice(
              text: 'C) 5',
              isCorrect: true,
              explanation:
                  'C: 5. Row A = 1 (strong thesis). Row B = up to 4 if commentary explains how evidence supports a line of reasoning for all claims. Row C = 0 (no sophistication). Maximum = 5. This is a very solid, well-organized essay — a 5 on the AP exam.',
            ),
            QuizChoice(text: 'D) 6', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question:
              'Which scenario best illustrates earning Row B at 4 points on a Rhetorical Analysis?',
          choices: [
            QuizChoice(text: 'A) Naming 7 rhetorical devices across the essay', isCorrect: false),
            QuizChoice(
                text: 'B) Quoting the passage frequently with accurate source citations',
                isCorrect: false),
            QuizChoice(
              text:
                  'C) Explaining how diction AND structure AND figurative language work TOGETHER to establish the speaker\'s ethos and shift audience emotion',
              isCorrect: true,
              explanation:
                  'C is correct. The 4th Row B point specifically requires explaining how multiple choices work together — not just analyzing them individually. The key word is "together": how does the diction reinforce the structural choice? How does the metaphor amplify what the syntax has already established?',
            ),
            QuizChoice(text: 'D) Using a thesaurus to vary vocabulary', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── SPACE-CAT + Kairos ────────────────────────────────────────────────────
  Unit(
    title: 'SPACE-CAT + Kairos — Complete Rhetorical Analysis Framework',
    blocks: [
      DataTableBlock(
        headers: ['Letter', 'Element', 'What to Analyze', 'Questions to Ask'],
        rows: [
          [
            'S',
            'Speaker',
            'Who is writing? What is their identity, background, expertise (ethos)?',
            'What credentials does the speaker have? How might their identity shape their perspective? Are they an insider or outsider to the issue?',
          ],
          [
            'P',
            'Purpose',
            'What does the writer want the audience to believe, feel, or do?',
            'Is the purpose to persuade? Inform? Move to action? Express grief? Challenge assumptions? (May be multiple.)',
          ],
          [
            'A',
            'Audience',
            'Who is the intended reader? What are their values, assumptions, and knowledge level?',
            'Does the writer make references only an insider would catch? Does the word choice suggest education level or ideology? What does the writer assume the audience already believes?',
          ],
          [
            'C',
            'Context',
            'What is the historical, social, political, or cultural moment?',
            'What events preceded this text? What controversy or movement is it responding to? What would be gained or lost by this text in THIS moment?',
          ],
          [
            'E',
            'Exigence',
            'The specific occasion or problem that called this text into being — WHY was it written NOW?',
            'What happened that made this text necessary? What urgent problem does it address? What would have been different without this text?',
          ],
          [
            'C',
            'Choices',
            'The specific rhetorical and stylistic decisions the writer makes (diction, syntax, structure, figurative language, appeals)',
            'What words are notably precise, loaded, or surprising? How are sentences structured? How is the piece organized? What gets emphasized through structure?',
          ],
          [
            'A',
            'Appeals',
            'Ethos (credibility/authority), Pathos (emotion/values), Logos (logic/evidence), Kairos (timing/context)',
            'How does the writer establish credibility? What emotions does the writer invoke — and why? Is the evidence statistical, anecdotal, analogical? Why NOW?',
          ],
          [
            'T',
            'Tone',
            'The writer\'s attitude toward the subject and audience',
            'What emotional register does the writer adopt? Does the tone shift? If so, when and why? What does the tone reveal about how the writer sees the audience?',
          ],
        ],
      ),
      DataTableBlock(
        headers: ['Rhetorical Device', 'Definition', 'Effect / AP Significance'],
        rows: [
          [
            'Anaphora',
            'Repetition of words/phrases at the start of successive clauses',
            'Builds rhythm and urgency; creates emotional momentum',
          ],
          [
            'Epistrophe',
            'Repetition at the END of successive clauses',
            'Creates emphasis and closure; drives home a key idea',
          ],
          [
            'Chiasmus',
            'Reversal of grammatical structure in successive phrases (A-B-B-A)',
            'Creates balance; makes the statement memorable and elegant',
          ],
          [
            'Tricolon',
            'Three parallel elements of the same grammatical form',
            'Creates completion and persuasive force; the third element often escalates',
          ],
          [
            'Asyndeton',
            'Omission of conjunctions between items in a list',
            'Creates rapid pace, urgency, or overwhelming accumulation',
          ],
          [
            'Polysyndeton',
            'Use of multiple conjunctions in a list (and...and...and)',
            'Creates a sense of weight, accumulation, or deliberate pace',
          ],
          [
            'Antithesis',
            'Juxtaposition of contrasting ideas in parallel structure',
            'Clarifies a contrast; creates balance and rhetorical force',
          ],
          [
            'Rhetorical Question',
            'A question asked for effect, not to receive an answer',
            'Implicates the audience; challenges assumptions; forces reflection',
          ],
          [
            'Allusion',
            'Reference to a cultural, historical, or literary text/event',
            'Invokes associations without explaining them; assumes shared knowledge',
          ],
          [
            'Metaphor',
            'A direct comparison: one thing IS another',
            'Makes abstract ideas concrete; reveals how the writer frames the issue',
          ],
          [
            'Simile',
            'A comparison using "like" or "as"',
            'Clarifies; creates a vivid image; slightly more distanced than metaphor',
          ],
          [
            'Personification',
            'Giving human qualities to non-human things',
            'Creates emotional connection; makes abstract forces feel immediate',
          ],
          [
            'Hyperbole',
            'Deliberate exaggeration for emphasis',
            'Creates urgency, humor, or intensity; signals emotional investment',
          ],
          [
            'Understatement',
            'Deliberate minimization of something significant',
            'Creates irony; signals sophistication or emotional restraint',
          ],
          [
            'Irony',
            'Gap between appearance and reality, or stated and intended meaning',
            'Creates complexity; requires the audience to read between the lines',
          ],
          [
            'Parallelism',
            'Repetition of the same grammatical structure across phrases or sentences',
            'Creates balance and clarity; makes arguments easier to follow and remember',
          ],
          [
            'Kairos',
            'Appeal based on the specific timing, urgency, or occasion of the argument',
            'The argument is compelling specifically BECAUSE of WHEN and WHERE it is made',
          ],
          [
            'Ethos',
            'Appeal based on the speaker\'s credibility, authority, or character',
            'Establishes trustworthiness; positions the audience to receive the argument',
          ],
          [
            'Pathos',
            'Appeal to the audience\'s emotions, values, or imagination',
            'Creates emotional resonance; moves the audience to action or sympathy',
          ],
          [
            'Logos',
            'Appeal based on logic, evidence, or reasoning',
            'Establishes rational grounding for claims; statistics, facts, examples',
          ],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question:
              'A speaker opens an argument about immigration policy by noting, "I stand before you today as the child of immigrants." Which appeal is primarily at work?',
          choices: [
            QuizChoice(text: 'A) Logos', isCorrect: false),
            QuizChoice(text: 'B) Pathos', isCorrect: false),
            QuizChoice(text: 'C) Kairos', isCorrect: false),
            QuizChoice(
              text: 'D) Ethos',
              isCorrect: true,
              explanation:
                  'D: Ethos. The speaker establishes personal credibility — lived experience as an immigrant\'s child gives them a form of ethos (authority from experience) on this specific topic. A strong essay would also note the pathos element and ask HOW this claim positions the audience to receive the argument.',
            ),
          ],
        ),
        QuizQuestion(
          question: 'Which of the following best describes Kairos?',
          choices: [
            QuizChoice(
                text: 'A) An appeal to the audience\'s emotions through vivid narrative',
                isCorrect: false),
            QuizChoice(
                text: 'B) A logical argument based on statistical evidence', isCorrect: false),
            QuizChoice(
              text:
                  'C) An argument whose persuasive force derives from the specific timing and context of its delivery',
              isCorrect: true,
              explanation:
                  'C is correct. Kairos is the appeal of timing — the argument is powerful specifically because of when and where it is being made. A eulogy is kairotic: the same words at a dinner party would be inappropriate and ineffective. Analyzing kairos in AP Lang means asking: what about this specific moment makes this argument uniquely compelling, urgent, or necessary?',
            ),
            QuizChoice(
                text: 'D) The speaker\'s established credibility based on credentials',
                isCorrect: false),
          ],
        ),
        QuizQuestion(
          question:
              'A writer concludes an essay with: "It is not too late to act. It is not too late to choose. It is not too late to lead." This is an example of:',
          choices: [
            QuizChoice(text: 'A) Asyndeton', isCorrect: false),
            QuizChoice(text: 'B) Chiasmus', isCorrect: false),
            QuizChoice(
              text: 'C) Anaphora with tricolon',
              isCorrect: true,
              explanation:
                  'C: Anaphora with tricolon. "It is not too late" repeated at the beginning = anaphora. Three parallel clauses = tricolon. The combination builds urgency and momentum, with each verb (act, choose, lead) escalating from individual to civic to moral responsibility.',
            ),
            QuizChoice(text: 'D) Epistrophe', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Synthesis FRQ ─────────────────────────────────────────────────────────
  Unit(
    title: 'Synthesis Essay — Complete Structure',
    blocks: [
      CalloutBlock(
        title: 'The Task',
        items: [
          'You are given 6–7 sources (texts, images, graphs, data sets). You have 15 minutes to read them.',
          'Your job: develop your own position on the issue and support it using evidence from at least 3 sources.',
          'You are NOT summarizing what each source says. You are making an argument and the sources are evidence.',
          'The sources represent multiple perspectives — your thesis must take a position, not just describe the debate.',
        ],
      ),
      StepBoxBlock(
        title: 'SYNTHESIS ESSAY — FULL STRUCTURE',
        steps: [
          'Introduction (3–5 sentences)\n'
              'Sentence 1–2: Brief, specific context for the issue — what is the debate, and why does it matter? (Not a broad generalization like "Throughout history...")\n'
              'Sentence 3–4: THESIS — your defensible claim. Use the Heimler formula:\n'
              '"Although [strongest counterpoint], [your specific position], because [reason 1] and [reason 2]."\n'
              'Do not say "I will argue that..." Say what you actually believe and why.',
          'Body Paragraph 1 — First Line of Reasoning (8–12 sentences)\n'
              'Topic sentence: First reason your position is correct (one specific claim).\n'
              'Evidence from Source: Introduce the source, give specific data/quote/example. Cite: (Source A) or descriptive reference.\n'
              'Commentary: HOW does this source PROVE your claim? Explain the connection explicitly.\n'
              'Second piece of evidence: a second source, or specific knowledge.\n'
              'Synthesis move: How do these two pieces of evidence reinforce each other?\n'
              'Closing sentence: Restate the paragraph\'s contribution to your overall argument.',
          'Body Paragraph 2 — Second Line of Reasoning\n'
              'Same structure as Body 1 — different reason, different sources.\n'
              'Use 1–2 additional sources (aim to use 4–5 sources total across the essay).\n'
              'Commentary must explain HOW each source proves THIS specific claim — not the thesis generally.',
          'Body Paragraph 3 (optional but recommended) — Concession + Refutation\n'
              'Topic sentence: Acknowledge the strongest opposing argument. Use specific evidence (often a source that contradicts your position).\n'
              'Refutation: Explain WHY your position still stands despite this counterargument.\n'
              'This paragraph, done well, earns the Sophistication point by demonstrating genuine complexity.',
          'Conclusion (2–4 sentences)\n'
              'Restate your thesis in new words (not copy-paste).\n'
              'Brief statement of the larger significance: why does this issue matter beyond the sources?\n'
              'Optional sophistication move: Connect to a broader context, a different time period, or a related issue.',
        ],
      ),
      CalloutBlock(
        title: 'Synthesis Citation Rules',
        items: [
          'Cite by label: (Source A), (Source B), etc. Or refer descriptively: "As the infographic from the EPA shows..."',
          'You can quote, paraphrase, or summarize — all count equally as source use.',
          'Minimum: cite ≥ 3 sources for Row B credit. Aim for 4–5.',
          'Do NOT just parade sources: "Source A says X. Source B says Y." That\'s a report, not an argument.',
          'Sources should support YOUR claim — you lead, they follow.',
        ],
      ),
      WarnBlock(
        title: 'Common Synthesis Mistakes',
        items: [
          'Thesis that just describes the debate: "There are many perspectives on this issue" = 0 points for thesis.',
          'Source dumping: "According to Source A, [long summary]. Source B states [long summary]." — no commentary, earns Row B at 1.',
          'Commentary that summarizes instead of analyzes: "This shows that..." vs. "This proves that [claim] because..."',
          'Forgetting to cite: Using source content without attribution. Cite even when paraphrasing.',
          'Agreeing with all sources: You must take a POSITION. If you agree with all sources equally, you haven\'t made an argument.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question:
              'A student cites 5 sources in their synthesis essay but their commentary for each source only summarizes what the source says without connecting it to their argument. Their Row B score is most likely:',
          choices: [
            QuizChoice(text: 'A) 4', isCorrect: false),
            QuizChoice(text: 'B) 3', isCorrect: false),
            QuizChoice(text: 'C) 2', isCorrect: false),
            QuizChoice(
              text: 'D) 1',
              isCorrect: true,
              explanation:
                  'D: 1. Citing many sources without commentary earns only Row B level 1 ("provides evidence but commentary is absent or merely summarizes"). The number of sources is irrelevant if the student never explains HOW those sources prove their specific claim. Quantity of sources ≠ quality of argument.',
            ),
          ],
        ),
        QuizQuestion(
          question: 'In the Synthesis FRQ, the sources are best understood as:',
          choices: [
            QuizChoice(
                text: 'A) The main argument you are analyzing', isCorrect: false),
            QuizChoice(
              text: 'B) Evidence you use to support your own argument',
              isCorrect: true,
              explanation:
                  'B is correct. The sources are evidence FOR your argument — not arguments you report on. Your thesis drives the essay. Each source is introduced because it proves or complicates your specific claim. Many students invert this relationship (letting sources drive their essay) and lose Row B points.',
            ),
            QuizChoice(
                text: 'C) Perspectives you must treat with equal weight', isCorrect: false),
            QuizChoice(text: 'D) Texts you are asked to summarize', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Rhetorical Analysis FRQ ───────────────────────────────────────────────
  Unit(
    title: 'Rhetorical Analysis Essay — Complete Structure',
    blocks: [
      CalloutBlock(
        title: 'The Task',
        items: [
          'You are given one nonfiction passage (speech, essay, letter, editorial, etc.).',
          'Your job: analyze the rhetorical choices the writer makes and explain how those choices work together to achieve the writer\'s purpose.',
          'You are NOT analyzing what the writer says (content). You are analyzing HOW they say it (form, strategy, technique).',
          'The prompt usually identifies the speaker, audience, and purpose — use that information. It\'s telling you what to connect your analysis to.',
        ],
      ),
      StepBoxBlock(
        title: 'RHETORICAL ANALYSIS ESSAY — FULL STRUCTURE',
        steps: [
          'Introduction (4–6 sentences)\n'
              'Sentence 1: Identify the speaker, the text, the context (use SPACE-CAT — especially Exigence and Context).\n'
              'Sentence 2–3: Brief characterization of the speaker\'s rhetorical situation.\n'
              'Sentence 4–5: THESIS — a claim about HOW specific rhetorical choices work together to achieve the writer\'s purpose.\n\n'
              'Weak thesis: "The author uses many rhetorical devices to persuade the audience."\n'
              'Strong thesis: "By embedding personal anecdote within a framework of historical allusion, and sustaining a tone that shifts from grief to moral resolve, [Author] compels [Audience] to move from sympathy to obligation — transforming passive readers into active agents."\n\n'
              'Your thesis must: name 2–3 SPECIFIC choices + connect them to a SPECIFIC effect on the SPECIFIC audience.',
          'Body Paragraph 1 — First Rhetorical Strategy (8–12 sentences)\n'
              'Topic sentence: Name the first rhetorical choice and make a claim about its effect.\n'
              'Evidence: Quote or closely paraphrase a specific passage. Keep quotes short — 1–2 lines.\n'
              'Analysis Layer 1: What is the device? What does it do at the surface level?\n'
              'Analysis Layer 2: WHY does this choice work on THIS audience?\n'
              'Analysis Layer 3: HOW does this choice serve the writer\'s larger purpose? Connect back to thesis.',
          'Body Paragraph 2 — Second Rhetorical Strategy\n'
              'Same structure. Choose a DIFFERENT type of choice (if Para 1 was diction, consider structure or appeals here).\n'
              'The best essays show how the second strategy reinforces or extends the first — they WORK TOGETHER.\n'
              'Ask: "If I removed this strategy, what would be lost? What gap would appear in the persuasion?"',
          'Body Paragraph 3 — Third Strategy or Synthesis Paragraph\n'
              'Option A: Analyze a third rhetorical choice (tone shift, structural choice, use of kairos).\n'
              'Option B (recommended for sophistication): Show how the choices from paragraphs 1 and 2 WORK TOGETHER — explain the cumulative effect on the audience. This is where Row B 4th-point logic lives.',
          'Conclusion (2–4 sentences)\n'
              'Restate thesis in new language. What has your analysis revealed about this text\'s power?\n'
              'Kairotic move (optional): Why did this text need to be written at THIS moment?\n'
              'Final sentence: Larger significance — what does this text\'s rhetoric reveal about the power of language in this context?',
        ],
      ),
      CalloutBlock(
        title: 'The 3-Layer Analysis Method',
        items: [
          'Every body paragraph should drill down through three layers:',
          'Layer 1 — IDENTIFY: Name the device and point to the specific textual evidence. ("In the third paragraph, [author] uses anaphora...")',
          'Layer 2 — EXPLAIN EFFECT: What does this choice do to the reader? What emotion, belief, or reaction does it create? ("...creating a drumbeat of urgency that forces the reader to feel each accusation as a separate moral weight...")',
          'Layer 3 — CONNECT TO PURPOSE: How does this effect serve the writer\'s larger argument or goal? Connect back to your thesis. ("...which positions the audience not as passive observers but as morally responsible actors.")',
          'The test: Could your commentary apply to any essay, or only THIS essay? Generic commentary ("this makes it more persuasive") = Layer 1. Specific commentary about THIS audience, THIS moment, THIS choice = Layer 3.',
        ],
      ),
      WarnBlock(
        title: 'Common Rhetorical Analysis Mistakes',
        items: [
          'Listing devices without analysis: "The author uses alliteration, hyperbole, and rhetorical questions." — Row B = 0.',
          'Analyzing content, not craft: "The author argues that climate change is real." — That\'s summary, not analysis.',
          'Thesis that names strategies but not their effect: "The author uses ethos, pathos, and logos to persuade." — Row A = 0 (no line of reasoning about HOW or to WHAT effect).',
          'Treating all devices as equal: Some choices are structural; some are local. The strongest essays explain which choices carry the most persuasive weight and WHY.',
          'Forgetting audience: The effect of a rhetorical choice is only meaningful relative to the specific audience. Always name the audience and explain why THIS choice works on THEM.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question:
              'A thesis for a rhetorical analysis reads: "Lincoln uses ethos and pathos to persuade his audience." What is the primary weakness?',
          choices: [
            QuizChoice(text: 'A) It names the wrong speaker', isCorrect: false),
            QuizChoice(
              text:
                  'B) It names rhetorical appeals but establishes no line of reasoning about HOW they work together or to what specific effect on the specific audience',
              isCorrect: true,
              explanation:
                  'B is correct. This thesis earns Row A = 0 because it makes no CLAIM — it describes strategies without explaining their rhetorical effect or connecting them to the writer\'s purpose. A strong thesis says: "By weaving personal anecdote with patriotic allusion, Lincoln reframes national grief as shared responsibility — transforming an audience of mourners into builders of a new republic."',
            ),
            QuizChoice(text: 'C) It should also mention logos', isCorrect: false),
            QuizChoice(text: 'D) It is too short', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The Row B 4th point in a Rhetorical Analysis is best earned by:',
          choices: [
            QuizChoice(
                text: 'A) Citing the passage more than 5 times', isCorrect: false),
            QuizChoice(
              text:
                  'B) Explaining how multiple rhetorical choices work TOGETHER to achieve the writer\'s purpose, not just analyzing them individually',
              isCorrect: true,
              explanation:
                  'B is correct. The 4th point explicitly requires explaining how choices work TOGETHER — the cumulative, reinforcing, or tension-creating relationship between strategies. This is why the third body paragraph option (synthesis of choices) is powerful: it\'s the place where you demonstrate that you understand the text as a unified rhetorical act, not a collection of devices.',
            ),
            QuizChoice(text: 'C) Writing at least 5 paragraphs', isCorrect: false),
            QuizChoice(
                text: 'D) Using vocabulary from the AP device list', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Argument FRQ ──────────────────────────────────────────────────────────
  Unit(
    title: 'Argument Essay — Complete Structure',
    blocks: [
      CalloutBlock(
        title: 'The Task',
        items: [
          'You are given a prompt that presents a debatable claim or question about a broad topic (technology, education, success, conformity, justice, etc.).',
          'Your job: take a defensible position and support it using your own evidence — from history, literature, current events, science, your own experience.',
          'No sources are provided. You must bring the evidence yourself.',
          'The strongest Argument essays don\'t just agree or disagree — they make a nuanced argument that acknowledges complexity while still defending a clear position.',
        ],
      ),
      StepBoxBlock(
        title: 'ARGUMENT ESSAY — FULL STRUCTURE',
        steps: [
          'Introduction (4–6 sentences)\n'
              'Sentence 1: Hook — a specific, surprising fact, historical moment, or thought experiment that creates context.\n'
              'Sentence 2–3: Frame the debate — what is the tension? What do most people assume?\n'
              'Sentence 4–5: THESIS — your defensible position, with a line of reasoning.\n\n'
              'Weak thesis: "Social media has both positive and negative effects."\n'
              'Strong thesis: "Although social media platforms have democratized information access, their algorithmic architecture systematically amplifies outrage and tribalism at the cost of nuanced discourse — making them a net threat to deliberative democracy."\n\n'
              'Your thesis must: take a CLEAR POSITION + give the REASON(S) — not just name the topic.',
          'Body Paragraph 1 — First Reason + Specific Evidence (8–12 sentences)\n'
              'Topic sentence: First reason your position is correct — one specific, arguable claim.\n'
              'Evidence 1: Introduce your first specific example. Name the event, work, person, study, law, etc.\n'
              'Commentary 1: HOW does this prove your claim? What is the causal or logical link?\n'
              'Evidence 2 (optional): A second example that reinforces from a different angle.\n'
              'Specificity test: Can your evidence be fact-checked? "Studies show" = too vague. "A 2017 American Psychological Association study linking Instagram use to adolescent depression" = specific enough.',
          'Body Paragraph 2 — Second Reason + Evidence\n'
              'Same structure. A different reason supporting your thesis, with different evidence.\n'
              'Best essays show that the second reason addresses a DIFFERENT dimension of the issue — not just another example of the first.',
          'Body Paragraph 3 — Concession and Refutation (REQUIRED for full score)\n'
              'Concession: Acknowledge the strongest version of the counterargument. Be generous — steelman it.\n'
              'Pivot: "However..." / "This objection, while valid in limited contexts..." / "Yet this analysis overlooks..."\n'
              'Refutation: Explain specifically why your position still stands. Don\'t just dismiss — engage.\n\n'
              'Why this matters: A concession-refutation paragraph demonstrates that you understand the issue\'s complexity, which is the path to the Sophistication point.',
          'Conclusion (3–5 sentences)\n'
              'Restate thesis in new language — don\'t copy your introduction.\n'
              'Broader significance: Why does this issue matter beyond the prompt?\n'
              'Optional sophistication move: Connect to a longer historical arc, an emerging trend, or a philosophical tradition.\n'
              'Final sentence: Leave the reader with something to think about — a question, an image, or a call to action.',
        ],
      ),
      CalloutBlock(
        title: 'Evidence Bank — What Counts as Specific Evidence',
        items: [
          'History: Named events with dates and specific outcomes (not "throughout history...").',
          'Literature: Named work + author + specific character/scene/quote and its relevance.',
          'Science: Named study/researcher/year + specific finding.',
          'Current events: Named legislation, organization, leader, or policy with specific details.',
          'Personal experience: Specific enough to be credible — not "I once felt..." but a concrete situation with specific stakes.',
          'Philosophy: Named philosopher + specific concept (Rawls\' veil of ignorance, Bentham\'s utility calculus).',
          'Red flags: "Studies show," "Many experts agree," "Throughout history," "In today\'s society," "As we all know" — vague = no Row B credit.',
        ],
      ),
      WarnBlock(
        title: 'Common Argument Essay Mistakes',
        items: [
          'Thesis that hedges: "Social media can be both good and bad depending on how you use it" = 0 for thesis. Take a position.',
          'Vague evidence: "The French Revolution shows that..." — which aspect? Which event? Which outcome? Name it specifically.',
          'Commentary that restates instead of analyzes: "This proves that social media is bad." Full stop. HOW? WHY? What is the mechanism?',
          'No counterargument: An essay that never acknowledges opposition earns maximum Row B = 3 and almost certainly no Row C.',
          'Confusing your experience with universal truth: Personal anecdotes must be generalized carefully.',
          'Performative sophistication: Starting with "Webster\'s Dictionary defines..." or ending with "In conclusion, as I have demonstrated..." signals formulaic thinking.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question:
              'A student\'s argument thesis reads: "The standardized testing system in American education has serious flaws that need to be addressed." Why does this fail to earn Row A?',
          choices: [
            QuizChoice(text: 'A) It\'s too long', isCorrect: false),
            QuizChoice(
              text:
                  'B) It makes a factual claim that nearly everyone would agree with, not a defensible position with a line of reasoning',
              isCorrect: true,
              explanation:
                  'B is correct. A defensible thesis must be contestable — someone must be able to reasonably disagree. "Testing has flaws" is basically agreed upon universally; there\'s no argument here. A thesis with a line of reasoning would be: "Standardized testing does not measure intelligence or future success so much as it measures access to test preparation — making it less an academic equalizer than a formalization of economic advantage."',
            ),
            QuizChoice(
                text: 'C) It should mention specific tests by name', isCorrect: false),
            QuizChoice(
                text: 'D) Theses should not critique institutions', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The concession-refutation paragraph in the Argument Essay primarily demonstrates:',
          choices: [
            QuizChoice(
                text: 'A) That the student has read the sources carefully', isCorrect: false),
            QuizChoice(
              text:
                  'B) The sophistication to acknowledge genuine complexity while maintaining a defensible position — the path to Row C',
              isCorrect: true,
              explanation:
                  'B is correct. The concession-refutation move is the clearest path to the Sophistication point because it requires genuinely engaging with the complexity of the issue. You can\'t steelman the opposition and fake it — a reader can tell. Done well, it elevates the entire essay from a one-sided argument to a genuinely reasoned position.',
            ),
            QuizChoice(
                text: 'C) Knowledge of rhetorical devices', isCorrect: false),
            QuizChoice(
                text: 'D) That the essay has sufficient length', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'Row A (1 pt): defensible CLAIM with a LINE OF REASONING — not a fact, not a plan to argue',
        'Row B (4 pts): specific evidence + commentary explaining HOW it proves the claim — for ALL claims',
        'Row C (1 pt): sophistication throughout — nuanced argument, broader context, or vivid style',
        'SPACE-CAT: Speaker, Purpose, Audience, Context, Exigence, Choices, Appeals, Tone',
        'Kairos = appeal of timing — the argument is powerful specifically BECAUSE of when/where it is made',
        'Four appeals: Ethos (credibility), Pathos (emotion), Logos (logic), Kairos (timing/context)',
        '3-Layer analysis: IDENTIFY device → EXPLAIN effect on audience → CONNECT to writer\'s purpose',
        'Synthesis: cite ≥3 sources with commentary linking each to YOUR argument — not a source report',
        'Rhetorical analysis thesis: names SPECIFIC choices + connects to SPECIFIC effect on SPECIFIC audience',
        'Argument thesis: takes CLEAR POSITION + gives the REASON(S) — not just "there are pros and cons"',
        'Concession-refutation in Argument = strongest path to Sophistication point',
        'Body paragraph 3 in Rhetorical Analysis: show how strategies work TOGETHER = Row B 4th point',
      ]),
    ],
  ),
];
