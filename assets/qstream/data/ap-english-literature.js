/**
 * Five & A+ — AI Question Stream · Course data: AP English Literature and Composition
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) shape exactly.
 * All passages and poems below are ORIGINAL works composed for this practice set
 * (or written in a clearly public-domain style). No copyrighted literature is quoted.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-english-literature',
    displayName: 'AP English Literature and Composition',
    description: 'Close reading and literary argument across short fiction, poetry, and longer fiction or drama, organized around character, structure, narration, figurative language, and theme.',
    category: 'english',
    allowedQuestionTypes: ['mcq', 'literary-analysis', 'argument-essay', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'literary-analysis', 'argument-essay'],
    skills: [
      'character', 'setting', 'structure', 'narration', 'figurative language',
      'theme', 'interpretation', 'literary argument'
    ],
    bigIdeas: ['Character', 'Setting', 'Structure', 'Narration', 'Figurative Language'],
    units: [
      { id: 'unit-1', name: 'Short Fiction I', examWeight: '10-15%', description: 'Foundations of reading short fiction: character, setting, and how a story is told.',
        topics: [
          { id: 'character-basics', name: 'Reading Character', description: 'Inferring traits, values, and motives from what characters say, do, and notice.', skills: ['character'] },
          { id: 'setting-basics', name: 'Setting and Atmosphere', description: 'How time and place shape mood and reveal meaning.', skills: ['setting'] },
          { id: 'narration-basics', name: 'Narration and Point of View', description: 'Identifying who tells the story and how that shapes what readers know.', skills: ['narration'] }
        ] },
      { id: 'unit-2', name: 'Poetry I', examWeight: '10-15%', description: 'Introduction to reading poems: speaker, imagery, and figurative language.',
        topics: [
          { id: 'speaker-poetry', name: 'The Speaker', description: 'Distinguishing the speaker from the poet and tracking attitude.', skills: ['narration'] },
          { id: 'imagery-figures', name: 'Imagery and Figurative Language', description: 'Reading metaphor, simile, and sensory imagery for meaning.', skills: ['figurative language'] },
          { id: 'word-choice-tone', name: 'Diction and Tone', description: 'How word choice establishes tone and shifts in attitude.', skills: ['interpretation'] }
        ] },
      { id: 'unit-3', name: 'Longer Fiction or Drama I', examWeight: '10-15%', description: 'Reading sustained narratives and plays: character development and conflict.',
        topics: [
          { id: 'character-development', name: 'Character Development', description: 'How characters change across a longer work and why it matters.', skills: ['character'] },
          { id: 'conflict-structure', name: 'Conflict and Plot Structure', description: 'Internal and external conflict and how plot is arranged.', skills: ['structure'] },
          { id: 'dramatic-elements', name: 'Dramatic Elements', description: 'Dialogue, stage directions, and dramatic irony in drama.', skills: ['narration'] }
        ] },
      { id: 'unit-4', name: 'Short Fiction II', examWeight: '10-15%', description: 'Deeper short-fiction analysis: narrative reliability and structure.',
        topics: [
          { id: 'narrator-reliability', name: 'Narrator Reliability', description: 'Recognizing when a narrator may be biased or unreliable.', skills: ['narration'] },
          { id: 'story-structure', name: 'Structure and Pacing', description: 'How sequencing, flashbacks, and contrasts build meaning.', skills: ['structure'] },
          { id: 'symbol-detail', name: 'Symbol and Detail', description: 'How recurring objects and details carry thematic weight.', skills: ['figurative language'] }
        ] },
      { id: 'unit-5', name: 'Poetry II', examWeight: '10-15%', description: 'Form and structure in poetry: how arrangement shapes meaning.',
        topics: [
          { id: 'poetic-structure', name: 'Form and Structure', description: 'Stanza, line breaks, and structural turns (the volta).', skills: ['structure'] },
          { id: 'sound-devices', name: 'Sound and Rhythm', description: 'Meter, rhyme, alliteration, and how sound reinforces sense.', skills: ['figurative language'] },
          { id: 'extended-metaphor', name: 'Extended Metaphor', description: 'How a single comparison can organize an entire poem.', skills: ['interpretation'] }
        ] },
      { id: 'unit-6', name: 'Longer Fiction or Drama II', examWeight: '10-15%', description: 'Theme and complexity in longer works: nuance and competing ideas.',
        topics: [
          { id: 'theme-complexity', name: 'Theme and Nuance', description: 'Stating theme as an arguable idea, not a single moral.', skills: ['theme'] },
          { id: 'foil-contrast', name: 'Foils and Contrast', description: 'How contrasting characters illuminate one another.', skills: ['character'] },
          { id: 'narrative-distance', name: 'Narrative Distance and Irony', description: 'Gaps between narrator, character, and reader judgment.', skills: ['narration'] }
        ] },
      { id: 'unit-7', name: 'Short Fiction III', examWeight: '10-15%', description: 'Advanced short fiction: ambiguity, interpretation, and argument.',
        topics: [
          { id: 'ambiguity-interpretation', name: 'Ambiguity and Interpretation', description: 'Weighing multiple defensible readings of a text.', skills: ['interpretation'] },
          { id: 'tone-shift', name: 'Tonal Shifts', description: 'Locating and interpreting changes in tone.', skills: ['interpretation'] },
          { id: 'detail-significance', name: 'Significance of Detail', description: 'Selecting the most telling evidence for a claim.', skills: ['literary argument'] }
        ] },
      { id: 'unit-8', name: 'Poetry III', examWeight: '10-15%', description: 'Advanced poetry: complexity of meaning and sustained analysis.',
        topics: [
          { id: 'complex-imagery', name: 'Complexity of Imagery', description: 'How layered images create tension and meaning.', skills: ['figurative language'] },
          { id: 'irony-paradox', name: 'Irony and Paradox', description: 'Reading apparent contradictions as meaningful.', skills: ['interpretation'] },
          { id: 'poetry-argument', name: 'Arguing About a Poem', description: 'Building a defensible interpretive claim about a poem.', skills: ['literary argument'] }
        ] },
      { id: 'unit-9', name: 'Longer Fiction or Drama III', examWeight: '10-15%', description: 'Synthesis: sustained literary argument across a full work.',
        topics: [
          { id: 'thematic-argument', name: 'Building a Thematic Argument', description: 'Developing a line of reasoning about a work as a whole.', skills: ['literary argument'] },
          { id: 'evidence-integration', name: 'Integrating Evidence', description: 'Embedding and explaining textual evidence effectively.', skills: ['literary argument'] },
          { id: 'structure-meaning', name: 'Structure and Meaning', description: 'How a work’s overall design contributes to its meaning.', skills: ['structure'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 60, weight: '45%', notes: '55 questions on 5 passages (prose fiction and poetry).' },
        { name: 'Section II: Free Response', questionTypes: ['literary-analysis', 'argument-essay'], timingMinutes: 120, weight: '55%', notes: '3 essays: poetry analysis, prose-fiction analysis, and a literary argument.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-english-literature-u1-narration-basics-mcq-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-1', unitName: 'Short Fiction I', topicId: 'narration-basics', topicName: 'Narration and Point of View',
      skill: 'narration', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 70,
      stimulus: 'I told myself I did not care that the lamp was left burning in her window, but my feet, I noticed, had already turned down her street.',
      prompt: 'Based on the sentence above, the point of view is best described as which of the following?',
      answerChoices: [
        { id: 'A', text: 'Third-person omniscient, reporting the thoughts of every character' },
        { id: 'B', text: 'First-person, with a narrator whose actions undercut his stated feelings' },
        { id: 'C', text: 'Second-person, directly addressing the reader as "you"' },
        { id: 'D', text: 'Third-person objective, describing only external behavior' }
      ],
      correctAnswer: 'B',
      explanation: 'The pronoun "I" marks first-person narration, and the contrast between claiming not to care and walking toward her street shows the narrator’s actions contradicting his words.',
      distractorRationales: {
        A: 'Omniscient narration reports multiple characters’ minds; here only the speaker’s "I" is present.',
        B: '',
        C: 'Second person would address "you"; the sentence centers on "I."',
        D: 'Objective narration avoids inner thought, but this narrator reports what he "told himself."'
      },
      tags: ['point-of-view', 'first-person', 'narration'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-literature-u2-imagery-figures-mcq-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-2', unitName: 'Poetry I', topicId: 'imagery-figures', topicName: 'Imagery and Figurative Language',
      skill: 'figurative language', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 70,
      stimulus: 'The morning fog is a gray cat\nthat walks across the harbor on silent paws\nand curls to sleep against the pier.',
      prompt: 'The figure of speech that controls these lines is best identified as a',
      answerChoices: [
        { id: 'A', text: 'simile comparing fog to a cat using "like"' },
        { id: 'B', text: 'metaphor that describes the fog as a cat' },
        { id: 'C', text: 'hyperbole exaggerating the size of the fog' },
        { id: 'D', text: 'apostrophe addressing the fog directly' }
      ],
      correctAnswer: 'B',
      explanation: 'The fog is said to be a gray cat and is given a cat’s actions (walking on paws, curling to sleep). Because the comparison is stated directly without "like" or "as," it is a metaphor.',
      distractorRationales: {
        A: 'A simile would use "like" or "as"; these lines state the fog is a cat.',
        B: '',
        C: 'There is no exaggeration of scale; the comparison is to an ordinary cat.',
        D: 'Apostrophe addresses an absent thing as "you"; the fog is described, not addressed.'
      },
      tags: ['metaphor', 'imagery', 'figurative-language'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-literature-u1-setting-basics-mcq-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-1', unitName: 'Short Fiction I', topicId: 'setting-basics', topicName: 'Setting and Atmosphere',
      skill: 'setting', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      stimulus: 'The waiting room smelled of bleach and cold coffee. A clock with no second hand hung above a row of empty chairs, and somewhere down the hall a door kept opening and shutting on its own.',
      prompt: 'The details of the setting most directly create an atmosphere of',
      answerChoices: [
        { id: 'A', text: 'cheerful anticipation' },
        { id: 'B', text: 'tense unease' },
        { id: 'C', text: 'nostalgic warmth' },
        { id: 'D', text: 'busy commotion' }
      ],
      correctAnswer: 'B',
      explanation: 'Sterile smells, a stopped clock, empty chairs, and a door opening "on its own" combine to suggest stillness and something faintly wrong, producing tense unease.',
      distractorRationales: {
        A: 'Nothing in the cold, empty, sterile imagery suggests cheer or pleasant expectation.',
        B: '',
        C: 'The details are clinical and unsettling, not warm or fondly remembered.',
        D: 'The room is empty and quiet; there is no crowd or activity.'
      },
      tags: ['setting', 'atmosphere', 'mood'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-english-literature-u2-word-choice-tone-mcq-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-2', unitName: 'Poetry I', topicId: 'word-choice-tone', topicName: 'Diction and Tone',
      skill: 'interpretation', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 95,
      stimulus: 'They called it progress when they paved the field—\nso tidy now, so gray, so neatly squared,\nwhere once the careless clover went unsheared.',
      prompt: 'The speaker’s diction (“tidy,” “neatly squared,” “careless clover”) most strongly conveys an attitude of',
      answerChoices: [
        { id: 'A', text: 'sincere admiration for the orderly new pavement' },
        { id: 'B', text: 'ironic regret at the loss of natural freedom' },
        { id: 'C', text: 'neutral, factual reporting without judgment' },
        { id: 'D', text: 'fearful dread of an approaching disaster' }
      ],
      correctAnswer: 'B',
      explanation: 'Praising words like "tidy" and "neatly squared" are placed against the warmly free "careless clover," and the dash after "progress" signals skepticism. The contrast creates an ironic tone of regret for what orderliness has erased.',
      distractorRationales: {
        A: 'The praise is undercut by the wistful image of the clover, so the admiration is not sincere.',
        B: '',
        C: 'Loaded, contrasting word choice shows clear judgment rather than neutrality.',
        D: 'The poem mourns a past loss; it does not anticipate a coming catastrophe.'
      },
      tags: ['diction', 'tone', 'irony'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-literature-u4-narrator-reliability-mcq-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-4', unitName: 'Short Fiction II', topicId: 'narrator-reliability', topicName: 'Narrator Reliability',
      skill: 'narration', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 100,
      stimulus: 'Everyone agreed I had done nothing wrong, or they would have, if anyone had bothered to ask them. The whole town was simply jealous, which explains why not one of them returned my letters.',
      prompt: 'The narration in this passage is best described as unreliable primarily because the narrator',
      answerChoices: [
        { id: 'A', text: 'admits openly that he has lied about the events' },
        { id: 'B', text: 'offers evidence that quietly contradicts his own claims' },
        { id: 'C', text: 'has no access to other characters’ thoughts or feelings' },
        { id: 'D', text: 'speaks in the past tense about distant events' }
      ],
      correctAnswer: 'B',
      explanation: 'The narrator claims everyone agreed he was blameless, then concedes no one was asked and no one answered his letters. The details he supplies undercut his assertions, revealing him as unreliable through self-contradiction.',
      distractorRationales: {
        A: 'He never admits lying; the unreliability emerges indirectly from his own evidence.',
        B: '',
        C: 'Limited access alone does not make a narrator unreliable; the contradiction does.',
        D: 'Past tense is ordinary in narration and is not a source of unreliability.'
      },
      tags: ['unreliable-narrator', 'narration', 'irony'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-literature-u3-conflict-structure-mcq-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-3', unitName: 'Longer Fiction or Drama I', topicId: 'conflict-structure', topicName: 'Conflict and Plot Structure',
      skill: 'structure', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 95,
      stimulus: 'MARA: You keep saying you’ll leave this house.\nDANIEL: (not moving from his chair) And I will. Tomorrow. I’ve said tomorrow for nine years now.',
      prompt: 'The exchange most clearly dramatizes which kind of conflict?',
      answerChoices: [
        { id: 'A', text: 'An external conflict between Daniel and a natural disaster' },
        { id: 'B', text: 'An internal conflict between Daniel’s intentions and his inaction' },
        { id: 'C', text: 'A conflict between Daniel and an unseen supernatural force' },
        { id: 'D', text: 'A conflict between Mara and the wider society' }
      ],
      correctAnswer: 'B',
      explanation: 'Daniel insists he will leave yet does not move and admits he has repeated "tomorrow" for nine years. The gap between his stated will and his paralysis dramatizes an internal conflict.',
      distractorRationales: {
        A: 'No natural force appears; the struggle is within Daniel himself.',
        B: '',
        C: 'Nothing supernatural is present; the obstacle is his own inertia.',
        D: 'Mara prompts him, but the conflict centers on Daniel’s inner contradiction, not society.'
      },
      tags: ['conflict', 'internal-conflict', 'drama'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-english-literature-u5-poetic-structure-mcq-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-5', unitName: 'Poetry II', topicId: 'poetic-structure', topicName: 'Form and Structure',
      skill: 'structure', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 130,
      stimulus: 'All winter I rehearsed my grief,\nfolded it small, and locked the door,\nand swore the spring would bring no relief—\n\nyet here: one crocus through the floor.',
      prompt: 'The single-line final stanza, set off after a dash and a stanza break, functions chiefly to',
      answerChoices: [
        { id: 'A', text: 'restate the speaker’s grief without any change' },
        { id: 'B', text: 'mark a structural turn that overturns the speaker’s vow' },
        { id: 'C', text: 'introduce a second, unrelated speaker' },
        { id: 'D', text: 'summarize the seasons in chronological order' }
      ],
      correctAnswer: 'B',
      explanation: 'The first stanza builds a closed, wintry resolve ("swore the spring would bring no relief"). The dash, stanza break, and pivoting "yet" introduce the crocus—a volta, or structural turn, that contradicts the vow and lets hope intrude.',
      distractorRationales: {
        A: 'The image of new growth changes the poem’s direction rather than restating grief.',
        B: '',
        C: 'The same speaker continues; "yet here" is the speaker’s own observation.',
        D: 'The poem turns on a reversal of feeling, not a seasonal summary.'
      },
      tags: ['volta', 'structure', 'form'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-literature-u8-irony-paradox-mcq-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-8', unitName: 'Poetry III', topicId: 'irony-paradox', topicName: 'Irony and Paradox',
      skill: 'interpretation', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 140,
      stimulus: 'To keep you, I must let you go;\nthe hand that grips the bird the tight-\nest is the hand that holds it least,\nfor what it holds is no more flight.',
      prompt: 'The paradox developed across these lines is best understood to suggest that',
      answerChoices: [
        { id: 'A', text: 'physical restraint is the surest way to preserve what one loves' },
        { id: 'B', text: 'true possession of a living thing requires granting it freedom' },
        { id: 'C', text: 'birds are incapable of forming attachments to people' },
        { id: 'D', text: 'love and flight are wholly unrelated experiences' }
      ],
      correctAnswer: 'B',
      explanation: 'The apparent contradiction—to keep you I must release you—resolves through the bird image: a gripped bird can no longer fly, so the captor "holds" only a lifeless thing. The paradox argues that genuinely keeping a living being means allowing its freedom.',
      distractorRationales: {
        A: 'The poem says the tightest grip "holds it least," directly rejecting restraint.',
        B: '',
        C: 'The bird is a vehicle for a claim about love and freedom, not a statement about birds.',
        D: 'Flight is the central metaphor for what love must allow, so the two are deeply linked.'
      },
      tags: ['paradox', 'irony', 'interpretation', 'extended-metaphor'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN QUESTIONS (with rubric + modelAnswer) ────────────────────────
    {
      id: 'ap-english-literature-u8-poetry-argument-litan-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-8', unitName: 'Poetry III', topicId: 'poetry-argument', topicName: 'Arguing About a Poem',
      skill: 'literary argument', questionType: 'literary-analysis', difficulty: 'hard',
      bloomLevel: 'create', estimatedTimeSeconds: 2400,
      stimulus: 'THE LIGHTHOUSE KEEPER (original poem)\n\nNo ships now. Still I climb the winding stair\nand trim the wick that no one waits to see,\nand send my small, insisting beam to where\nthe black sea practices forgetting me.\n\nThey built a buoy that blinks without a man.\nThey do not know a light is more than light:\nit is a promise kept the only way one can—\nby standing, useless, faithful, through the night.',
      prompt: 'Read the original poem "The Lighthouse Keeper." Write a well-developed essay analyzing how the poet uses figurative language and structure to develop a complex view of duty. Respond with a defensible thesis, support it with specific evidence, and explain your reasoning.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A strong response argues that the poem treats duty as meaningful precisely when it is no longer useful, drawing on the personified sea, the contrast between the keeper and the automatic buoy, and the closing redefinition of "light."',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Presents a defensible thesis about how the poem develops a complex view of duty.', evidenceRequired: 'An arguable interpretive claim, not mere plot summary.' },
        { id: 'r2', pointValue: 2, criterion: 'Supports the claim with specific, relevant evidence from the poem.', evidenceRequired: 'At least two precise references (e.g., the sea "practices forgetting," the buoy, "useless, faithful").' },
        { id: 'r3', pointValue: 2, criterion: 'Explains how the evidence (figurative language and structure) supports the line of reasoning.', evidenceRequired: 'Commentary linking devices to the view of duty, not just identification.' },
        { id: 'r4', pointValue: 1, criterion: 'Demonstrates sophistication through nuance, tension, or a vivid command of language.', evidenceRequired: 'Acknowledges complexity, e.g., duty as both futile and noble.' }
      ],
      modelAnswer: 'The poem argues that duty is most meaningful when it has lost its usefulness. The keeper tends a lamp "that no one waits to see," and the sea is personified as something that "practices forgetting me," casting his labor against an indifferent world. The structural contrast between the two stanzas sharpens this: the first dramatizes his lonely persistence, while the second answers the efficient "buoy that blinks without a man" by redefining the keeper’s work—"a light is more than light." The closing line, "by standing, useless, faithful, through the night," yokes "useless" and "faithful" together so that futility and fidelity become inseparable. The poem thus develops a complex view: duty here is not justified by results but by the act of keeping a promise, which gives even a needless vigil its dignity.',
      tags: ['poetry', 'figurative-language', 'literary-argument', 'free-response'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-literature-u9-thematic-argument-argessay-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-9', unitName: 'Longer Fiction or Drama III', topicId: 'thematic-argument', topicName: 'Building a Thematic Argument',
      skill: 'literary argument', questionType: 'argument-essay', difficulty: 'exam-level',
      bloomLevel: 'create', estimatedTimeSeconds: 2400,
      prompt: 'Many works of literature feature a character who must choose between loyalty to a community and loyalty to an individual conscience. Choosing a novel or play of literary merit, write a well-developed essay analyzing how that conflict contributes to an interpretation of the work as a whole. Develop a defensible thesis and support it with evidence and reasoning. Do not merely summarize the plot.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A successful essay names an appropriate work, identifies a genuine conflict between communal loyalty and individual conscience, and connects that conflict to an arguable claim about the work’s meaning rather than restating the plot.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'States a defensible thesis that responds to the prompt with an interpretation of the work as a whole.', evidenceRequired: 'An arguable claim linking the loyalty-vs-conscience conflict to overall meaning.' },
        { id: 'r2', pointValue: 2, criterion: 'Provides specific evidence from an appropriate work of literary merit.', evidenceRequired: 'Concrete references to characters, events, or language tied to the conflict.' },
        { id: 'r3', pointValue: 2, criterion: 'Develops a coherent line of reasoning that explains how the evidence supports the thesis.', evidenceRequired: 'Commentary connecting the conflict to interpretation, beyond summary.' },
        { id: 'r4', pointValue: 1, criterion: 'Demonstrates sophistication of thought or a persuasive command of language.', evidenceRequired: 'Nuance, complexity, or insight beyond the obvious reading.' }
      ],
      modelAnswer: 'In a work centered on a protagonist who defies an unjust civic order to honor a private moral duty, the conflict between communal loyalty and individual conscience can be read as the engine of the work’s meaning. A strong essay would argue, for example, that the protagonist’s refusal to obey exposes the community’s laws as serving order rather than justice, so that the personal act of defiance becomes the work’s test of what genuine loyalty means. Evidence might include the protagonist’s direct confrontations with authority, the reactions of bystanders who privately agree yet publicly conform, and the cost the protagonist pays. The reasoning would show that by dramatizing this clash, the work suggests conscience can be the truest form of loyalty—loyalty to shared principles rather than to power—thereby inviting readers to judge the community by the standard the individual upholds. (In an actual response, the student names a specific qualifying novel or play and grounds each point in its details.)',
      tags: ['literary-argument', 'theme', 'free-response', 'conscience'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-literature-u7-detail-significance-sa-001', courseId: 'ap-english-literature', courseName: 'AP English Literature and Composition',
      unitId: 'unit-7', unitName: 'Short Fiction III', topicId: 'detail-significance', topicName: 'Significance of Detail',
      skill: 'literary argument', questionType: 'short-answer', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 600,
      stimulus: 'Every evening Old Pell set two cups on the table, filled both, and drank from neither until the tea had gone cold. Then he washed both cups, as if someone had used the other.',
      prompt: 'In one or two sentences, identify what the detail of the second cup suggests about Old Pell, and briefly explain how the detail supports your reading.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'The unused second cup, washed "as if someone had used the other," implies Pell is preserving a ritual for an absent person, suggesting grief, loneliness, or loyalty to a lost companion.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Makes a defensible claim about what the second cup reveals (e.g., grief, loneliness, devotion to someone absent).', evidenceRequired: 'A specific interpretive claim about Old Pell.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains how the detail supports that claim.', evidenceRequired: 'Links the ritual of the unused, washed cup to the interpretation.' }
      ],
      modelAnswer: 'The second cup—filled but undrunk, then washed as though it had been used—suggests Old Pell is keeping a nightly ritual for someone who is gone, marking quiet grief and continued devotion. The care he takes in washing a clean cup shows the absent companion still has a place at his table, so the gesture preserves a relationship that no longer physically exists.',
      tags: ['detail', 'short-answer', 'interpretation', 'character'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
