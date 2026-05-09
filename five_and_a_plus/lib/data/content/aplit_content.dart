// lib/data/content/aplit_content.dart
//
// Full content tree for AP Literature & Composition — transcribed from aplit.html.
// 3 Unit objects: Poetry Analysis, Prose Fiction, FRQ Types.
// All content is typed const data — zero dynamic dispatch at render time.

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> aplitUnits = [
  // ── Poetry Analysis ────────────────────────────────────────────────────────
  Unit(
    title: 'Poetry Analysis',
    blocks: [
      CalloutBlock(
        title: 'TPCASTT Framework',
        items: [
          'T — Title: Analyze before reading. What do you predict?',
          'P — Paraphrase: What is literally happening? Line by line meaning.',
          'C — Connotation: What devices (imagery, diction, figurative language) create deeper meaning?',
          'A — Attitude / Tone: What is the speaker\'s attitude toward the subject? (Multiple tones possible)',
          'S — Shifts: Where does tone, focus, or perspective change? Why?',
          'T — Title revisited: Does your understanding of the title change?',
          'T — Theme: What is the poem\'s universal message about human experience?',
        ],
      ),
      DataTableBlock(
        headers: ['Device', 'Definition', 'Effect'],
        rows: [
          [
            'Imagery',
            'Language appealing to senses',
            'Creates vivid mental picture; evokes emotion',
          ],
          [
            'Metaphor',
            'Direct comparison (is/was/becomes)',
            'Makes abstract concrete; deepens meaning',
          ],
          [
            'Simile',
            'Comparison using like/as',
            'Clarifies; creates vivid picture',
          ],
          [
            'Personification',
            'Human qualities given to non-human',
            'Creates emotional connection; reveals theme',
          ],
          [
            'Symbol',
            'Object representing abstract idea',
            'Compresses complex meaning; creates resonance',
          ],
          [
            'Allusion',
            'Reference to outside text/event',
            'Invokes associations; deepens meaning',
          ],
          [
            'Irony',
            'Gap between appearance and reality',
            'Creates complexity; reveals deeper truth',
          ],
          [
            'Paradox',
            'Seemingly contradictory but true',
            'Reveals complexity; demands reflection',
          ],
          [
            'Juxtaposition',
            'Contrasting elements placed together',
            'Highlights difference; creates tension or meaning',
          ],
          [
            'Anaphora',
            'Repetition at the start of successive lines',
            'Creates rhythm and emotional momentum',
          ],
          [
            'Enjambment',
            'Line continues without pause into next line',
            'Creates forward momentum; delays meaning',
          ],
          [
            'Caesura',
            'Pause within a line (usually mid-line)',
            'Creates emphasis; disrupts flow for effect',
          ],
          [
            'Assonance',
            'Repetition of vowel sounds',
            'Creates musicality; links words thematically',
          ],
          [
            'Consonance',
            'Repetition of consonant sounds',
            'Creates texture; can feel harsh or gentle',
          ],
          [
            'Alliteration',
            'Repetition of initial consonant sounds',
            'Creates emphasis; links words; can feel playful or grave',
          ],
          [
            'Onomatopoeia',
            'Words that sound like what they describe',
            'Creates immediacy; makes the reader hear the action',
          ],
          [
            'Apostrophe',
            'Addressing an absent person, abstraction, or object',
            'Heightens emotional intensity; creates intimacy',
          ],
          [
            'Hyperbole',
            'Deliberate exaggeration',
            'Creates emphasis; signals emotional investment',
          ],
          [
            'Understatement',
            'Deliberate minimization of something significant',
            'Creates irony; signals restraint or sophistication',
          ],
          [
            'Tone',
            'Speaker\'s attitude toward subject and audience',
            'Reveals the speaker\'s emotional or intellectual stance',
          ],
          [
            'Mood',
            'Emotional atmosphere created for the reader',
            'Different from tone — tone is speaker\'s attitude, mood is reader\'s feeling',
          ],
          [
            'Diction',
            'Word choice (connotation, register, specificity)',
            'Every word choice carries meaning; formal vs. informal, abstract vs. concrete',
          ],
          [
            'Syntax',
            'Sentence structure (length, order, complexity)',
            'Long = flow/complexity; short = urgency/finality; inverted = emphasis',
          ],
          [
            'Volta',
            'Turn or shift in a poem (often at line 9 in a sonnet)',
            'Marks a change in tone, argument, or perspective',
          ],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question:
              'When analyzing poetry, what distinguishes "denotation" from "connotation"?',
          choices: [
            QuizChoice(
                text: 'A) Denotation is poetic; connotation is literal', isCorrect: false),
            QuizChoice(
              text:
                  'B) Denotation is the literal dictionary meaning; connotation is the emotional or cultural associations a word carries',
              isCorrect: true,
              explanation:
                  'B is correct. Diction analysis requires examining both levels. A word like "home" denotes a building but connotes warmth, family, and security. Choosing "manor" vs. "house" vs. "shack" changes connotation dramatically. AP Lit questions often test your ability to analyze WHY a specific word was chosen.',
            ),
            QuizChoice(text: 'C) They are synonyms', isCorrect: false),
            QuizChoice(
                text: 'D) Connotation is about sentence structure; denotation is about word choice',
                isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'A poem\'s tone is best defined as:',
          choices: [
            QuizChoice(text: 'A) The poem\'s subject matter', isCorrect: false),
            QuizChoice(text: 'B) The rhyme scheme', isCorrect: false),
            QuizChoice(
              text:
                  'C) The speaker\'s attitude toward the subject and audience, conveyed through diction and imagery',
              isCorrect: true,
              explanation:
                  'C is correct. Tone is the speaker\'s attitude — not your feelings as the reader (that\'s mood). It\'s revealed through specific word choices, imagery, and structure. Poems can have multiple tones that shift — always note where and why shifts occur.',
            ),
            QuizChoice(
                text: 'D) The emotional response of the reader', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Prose Fiction Analysis ─────────────────────────────────────────────────
  Unit(
    title: 'Prose Fiction Analysis',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Characterization',
          body:
              'Direct: narrator tells us. Indirect: revealed through STEAL (Speech, Thoughts, Effect on others, Actions, Looks). AP Lit prizes indirect characterization.',
        ),
        ContentCardData(
          title: 'Point of View',
          body:
              '1st person: narrator is character (limited perspective, unreliable?). 3rd limited: close to one character. 3rd omniscient: knows all characters\' thoughts. 2nd: "you" (rare).',
        ),
        ContentCardData(
          title: 'Narrative Distance',
          body:
              'Close/intimate narration creates sympathy; distant narration creates irony or objectivity. Note shifts in narrative distance.',
        ),
        ContentCardData(
          title: 'Setting & Atmosphere',
          body:
              'Time, place, social environment. Setting creates atmosphere and can symbolize the character\'s psychological state (pathetic fallacy).',
        ),
        ContentCardData(
          title: 'Structure',
          body:
              'In medias res, frame narrative, flashback, flash-forward. Structural choices create emphasis and meaning.',
        ),
        ContentCardData(
          title: 'Syntax & Style',
          body:
              'Long sentences = complexity/flow. Short = urgency/finality. Fragments = disruption. Sentence variety reflects character\'s mental state.',
        ),
      ]),
      CalloutBlock(
        title: 'Key Prose Analysis Concepts',
        items: [
          'Free indirect discourse: the narrator adopts a character\'s thoughts without quotation marks or "he thought" — creates intimacy and ambiguity.',
          'Pathetic fallacy: attributing human emotions to nature or setting (a storm during a breakdown; spring during renewal).',
          'Foil: a character who contrasts with the protagonist to highlight specific traits.',
          'Allegory: the entire narrative represents an abstract idea (Animal Farm = Soviet totalitarianism; Lord of the Flies = civilization vs. savagery).',
          'Stream of consciousness: unfiltered flow of a character\'s thoughts — mimics how the mind actually works.',
          'Unreliable narrator: narrator whose account cannot be fully trusted due to bias, limited knowledge, or psychological instability.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'An unreliable narrator is defined as a narrator who:',
          choices: [
            QuizChoice(
                text: 'A) Has limited knowledge of events', isCorrect: false),
            QuizChoice(
              text:
                  'B) Cannot be fully trusted because of bias, limited knowledge, psychological state, or deliberately misleading the reader',
              isCorrect: true,
              explanation:
                  'B is correct. Unreliable narrators are a major AP Lit concept. Nick Carraway (Gatsby), Holden Caulfield (Catcher in the Rye), and Stevens (Remains of the Day) are classic examples. Ask: Why might this narrator be unreliable? What might they be concealing or not understanding?',
            ),
            QuizChoice(
                text: 'C) Is not a character in the story', isCorrect: false),
            QuizChoice(
                text: 'D) Describes events out of chronological order',
                isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── FRQ Types ──────────────────────────────────────────────────────────────
  Unit(
    title: 'All 3 FRQ Types — Strategy',
    blocks: [
      StepBoxBlock(
        title: 'FRQ 1: Poetry Analysis Strategy',
        steps: [
          'Read the prompt carefully — it tells you what to focus on (theme? relationship? tension?).',
          'Read the poem twice. Annotate: circle images, mark tone shifts, identify key devices.',
          'Write thesis: make a claim about how literary elements work together to convey a theme or meaning.',
          'Body paragraphs: point → device → quotation → analysis (what does this reveal about meaning or character?)',
          'Every device must be analyzed, not just named — "so what?" is the key question.',
        ],
      ),
      StepBoxBlock(
        title: 'FRQ 2: Prose Fiction Analysis Strategy',
        steps: [
          'Identify what the passage is asking about — character change? tone? relationship? social commentary?',
          'Annotate for: diction, syntax, figurative language, point of view, structure.',
          'Thesis: how do specific literary choices work together to create meaning or reveal character.',
          'Link everything back to the larger significance — not just "what" but "why it matters".',
        ],
      ),
      CalloutBlock(
        title: 'FRQ 3 — Literary Argument',
        items: [
          'You choose a work of literary merit from your reading — pick one you know deeply.',
          'The prompt gives a broad claim about literature (e.g., "In some works, a character\'s flaw becomes the source of their greatest strength").',
          'Your job: select a specific work and argue how it illustrates, complicates, or refutes the claim.',
          'Thesis must: name the work + author + make a specific claim about how the work relates to the prompt\'s idea.',
          'You need specific textual evidence — scenes, characters, quotes, literary techniques.',
          'The argument must be literary — not biographical or thematic without textual grounding.',
        ],
      ),
      StepBoxBlock(
        title: 'FRQ 3: Literary Argument Essay Structure',
        steps: [
          'Introduction (3–5 sentences)\n'
              'Hook: brief, evocative observation about the literary work or the theme at stake.\n'
              'THESIS: name the work, the author, and make a specific claim connecting the work to the prompt\'s idea.',
          'Body Paragraph 1 — First Textual Claim (8–12 sentences)\n'
              'Topic sentence: first reason/way the work supports your thesis.\n'
              'Evidence: specific scene, character moment, or literary technique with textual grounding.\n'
              'Analysis: what does this reveal? How does it connect to the theme at stake?\n'
              'Connect back to your thesis claim.',
          'Body Paragraph 2 — Second Textual Claim\n'
              'Different aspect of the work — a different character, scene, or technique.\n'
              'Show range: if Body 1 was about character, Body 2 might address structure or setting.',
          'Body Paragraph 3 (optional) — Complexity or Complication\n'
              'Acknowledge where the work resists simple categorization.\n'
              'Does the work complicate the claim? A tragic ending, an ironic reversal, an ambiguous conclusion?\n'
              'This is the path to the sophistication score.',
          'Conclusion (2–3 sentences)\n'
              'Restate thesis in new language.\n'
              'Larger significance: what does this work reveal about the human condition, the theme, or the literary tradition?',
        ],
      ),
      WarnBlock(
        title: 'Common AP Literature Mistakes',
        items: [
          'Summarizing instead of analyzing: "In Chapter 3, Gatsby throws a party" earns no points. Explain WHY and WHAT IT MEANS.',
          'Vague device identification: "The author uses imagery" — which image? What does it evoke? What does it reveal?',
          'Thesis that states a fact: "Hamlet is a tragic hero" = no argument. A thesis must be contestable.',
          'Forgetting to quote: close reading requires textual evidence — not just plot reference.',
          'Choosing an unfamiliar work for FRQ 3 because it sounds impressive. Choose the work you know best.',
          'Tone ≠ mood: mixing these up on the MCQ is a frequent error.',
          'Enjambment and caesura are structural choices that carry meaning — do not ignore the white space.',
        ],
      ),
      MustKnowBlock([
        'TPCASTT — always note tone SHIFTS and explain why they occur',
        'Analyze devices, don\'t just name them — "simile comparing X to Y creates a sense of..."',
        'Thesis must make a claim about HOW literary elements work together to convey meaning',
        'Unreliable narrator — identify why unreliable, what it reveals about the character or text',
        'Indirect characterization (STEAL) shows more than direct characterization tells',
        'Tone ≠ mood — tone is speaker\'s attitude; mood is reader\'s emotional response',
        'FRQ 3: choose a work you know deeply, not one that sounds impressive',
        'Every literary device cited must be analyzed — "so what?" before moving on',
        'Enjambment, caesura, and stanza breaks are structural choices that carry meaning',
        'Diction analysis: always ask WHY this specific word and not a synonym',
      ]),
    ],
  ),
];
