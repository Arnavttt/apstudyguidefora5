/**
 * Five & A+ — AI Question Stream · Course data: AP English Language and Composition
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) shape exactly.
 * All questions and passages are ORIGINAL, AP-style practice — not copied
 * College Board items and not real copyrighted text.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-english-language',
    displayName: 'AP English Language and Composition',
    description: 'Analysis of nonfiction prose and the craft of argument: how writers make rhetorical choices for a purpose and audience, and how to build, support, and synthesize evidence-based arguments.',
    category: 'english',
    allowedQuestionTypes: ['mcq', 'rhetorical-analysis', 'synthesis', 'argument-essay', 'short-answer'],
    defaultQuestionTypes: ['mcq', 'rhetorical-analysis', 'argument-essay'],
    skills: [
      'rhetorical situation',
      'claims and evidence',
      'reasoning and organization',
      'style',
      'argumentation',
      'synthesis'
    ],
    bigIdeas: ['Rhetorical Situation', 'Claims and Evidence', 'Reasoning and Organization', 'Style'],
    units: [
      { id: 'unit-1', name: 'Claims, Evidence, and Rhetorical Situation', examWeight: '11-14%', description: 'Identifying the elements of a rhetorical situation and how writers support a thesis with relevant evidence.',
        topics: [
          { id: 'rhetorical-situation', name: 'The Rhetorical Situation', description: 'Exigence, audience, purpose, writer, and context shaping a text.', skills: ['rhetorical situation'] },
          { id: 'thesis-claims', name: 'Thesis and Defensible Claims', description: 'Crafting a defensible thesis that responds to a prompt or situation.', skills: ['claims and evidence'] },
          { id: 'relevant-evidence', name: 'Selecting Relevant Evidence', description: 'Choosing evidence that directly supports a claim.', skills: ['claims and evidence'] }
        ] },
      { id: 'unit-2', name: 'Rhetorical Choices and Audience', examWeight: '11-14%', description: 'How writers adapt rhetorical choices to a specific audience and purpose.',
        topics: [
          { id: 'audience-analysis', name: 'Analyzing Audience', description: 'Inferring audience values, beliefs, and needs from a text.', skills: ['rhetorical situation'] },
          { id: 'appeals', name: 'Rhetorical Appeals', description: 'Ethos, logos, and pathos as tools to influence an audience.', skills: ['style'] },
          { id: 'purpose-choices', name: 'Matching Choices to Purpose', description: 'Aligning diction, tone, and structure with the writer’s aim.', skills: ['reasoning and organization'] }
        ] },
      { id: 'unit-3', name: 'Argument Development', examWeight: '11-14%', description: 'Developing a line of reasoning that connects claims and evidence into a coherent argument.',
        topics: [
          { id: 'line-of-reasoning', name: 'Line of Reasoning', description: 'Logical progression of claims supporting a thesis.', skills: ['reasoning and organization'] },
          { id: 'commentary-basics', name: 'Commentary and Warrants', description: 'Explaining how evidence supports a claim.', skills: ['claims and evidence'] },
          { id: 'organization', name: 'Organizing an Argument', description: 'Sequencing paragraphs and ideas for clarity and emphasis.', skills: ['reasoning and organization'] }
        ] },
      { id: 'unit-4', name: 'Style and Syntax', examWeight: '11-14%', description: 'How sentence structure, diction, and figurative language shape meaning and tone.',
        topics: [
          { id: 'diction-tone', name: 'Diction and Tone', description: 'Word choice creating attitude toward subject and audience.', skills: ['style'] },
          { id: 'syntax', name: 'Syntax and Sentence Structure', description: 'How sentence length, order, and punctuation affect emphasis.', skills: ['style'] },
          { id: 'figurative-language', name: 'Figurative Language', description: 'Metaphor, analogy, and imagery as persuasive devices.', skills: ['style'] }
        ] },
      { id: 'unit-5', name: 'Sources and Synthesis', examWeight: '11-14%', description: 'Incorporating, attributing, and commenting on multiple sources to advance an argument.',
        topics: [
          { id: 'integrating-sources', name: 'Integrating Sources', description: 'Quoting, paraphrasing, and attributing source material.', skills: ['synthesis'] },
          { id: 'synthesis-argument', name: 'Synthesis as Argument', description: 'Using sources to support an original position, not summarize.', skills: ['synthesis'] },
          { id: 'source-credibility', name: 'Evaluating Source Credibility', description: 'Judging reliability, bias, and relevance of sources.', skills: ['claims and evidence'] }
        ] },
      { id: 'unit-6', name: 'Reasoning and Commentary', examWeight: '11-14%', description: 'Strengthening commentary so that reasoning, not just evidence, carries the argument.',
        topics: [
          { id: 'developing-commentary', name: 'Developing Commentary', description: 'Linking each piece of evidence explicitly to the claim.', skills: ['argumentation'] },
          { id: 'logical-fallacies', name: 'Recognizing Logical Fallacies', description: 'Identifying weak or flawed reasoning in arguments.', skills: ['argumentation'] },
          { id: 'qualifying-claims', name: 'Qualifying and Modifying Claims', description: 'Using qualifiers to make claims more defensible.', skills: ['argumentation'] }
        ] },
      { id: 'unit-7', name: 'Complex Argumentation', examWeight: '11-14%', description: 'Handling complexity through concession, rebuttal, and nuanced positions.',
        topics: [
          { id: 'concession-rebuttal', name: 'Concession and Rebuttal', description: 'Acknowledging counterarguments and responding to them.', skills: ['argumentation'] },
          { id: 'nuance-complexity', name: 'Nuance and Complexity', description: 'Showing tensions, limitations, or implications of a position.', skills: ['argumentation'] }
        ] },
      { id: 'unit-8', name: 'Multiple-Source Analysis', examWeight: '11-14%', description: 'Comparing and weighing multiple texts to evaluate competing rhetorical strategies.',
        topics: [
          { id: 'comparing-arguments', name: 'Comparing Arguments', description: 'Analyzing how two texts approach a shared issue differently.', skills: ['synthesis'] },
          { id: 'weighing-evidence', name: 'Weighing Competing Evidence', description: 'Judging which sources offer the strongest support.', skills: ['claims and evidence'] }
        ] },
      { id: 'unit-9', name: 'Exam-Level Writing Practice', examWeight: '11-14%', description: 'Timed application of rhetorical analysis, synthesis, and argument writing under exam conditions.',
        topics: [
          { id: 'timed-rhetorical-analysis', name: 'Timed Rhetorical Analysis', description: 'Analyzing a passage’s rhetorical choices under time pressure.', skills: ['style'] },
          { id: 'timed-argument', name: 'Timed Argument Essay', description: 'Building a defensible argument quickly and clearly.', skills: ['argumentation'] },
          { id: 'revision-strategies', name: 'Revision and Self-Assessment', description: 'Using rubrics to revise sophistication and reasoning.', skills: ['reasoning and organization'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 60, weight: '45%', notes: '45 questions across reading-analysis passages and writing/revision passages.' },
        { name: 'Section II: Free Response', questionTypes: ['synthesis', 'rhetorical-analysis', 'argument-essay'], timingMinutes: 135, weight: '55%', notes: '3 essays: synthesis, rhetorical analysis, and argument, including a 15-minute reading period.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-english-language-u1-rhetorical-situation-mcq-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-1', unitName: 'Claims, Evidence, and Rhetorical Situation', topicId: 'rhetorical-situation', topicName: 'The Rhetorical Situation',
      skill: 'rhetorical situation', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      stimulus: 'In an open letter to the city council, a neighborhood resident writes: "Every morning I watch children dart between parked cars to reach the school across Vine Street. We do not need another study to tell us what our own eyes already know—this crossing is dangerous, and the time to act is now."',
      prompt: 'Which element of the rhetorical situation is most clearly identified by the phrase "the time to act is now"?',
      answerChoices: [
        { id: 'A', text: 'The exigence, or the urgent problem prompting the writer to speak' },
        { id: 'B', text: 'The genre conventions of a scientific report' },
        { id: 'C', text: 'The writer’s credentials as a traffic engineer' },
        { id: 'D', text: 'A counterargument the writer plans to refute' }
      ],
      correctAnswer: 'A',
      explanation: 'Exigence is the issue or urgency that motivates a writer to respond. The phrase frames the dangerous crossing as a pressing problem demanding immediate action, which is precisely the exigence.',
      distractorRationales: {
        A: '',
        B: 'The letter is persuasive, not a scientific report; it even rejects waiting for "another study."',
        C: 'No professional credentials are claimed; the writer speaks as an observant resident.',
        D: 'No opposing view is introduced here; the writer asserts urgency rather than refuting a counterclaim.'
      },
      tags: ['rhetorical-situation', 'exigence', 'audience'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-language-u2-appeals-mcq-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-2', unitName: 'Rhetorical Choices and Audience', topicId: 'appeals', topicName: 'Rhetorical Appeals',
      skill: 'style', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      stimulus: 'A charity’s fundraising appeal reads: "Picture a six-year-old falling asleep hungry tonight, clutching an empty bowl. Your gift of twenty dollars can put a warm meal in front of her tomorrow."',
      prompt: 'The fundraising appeal relies most heavily on which rhetorical appeal?',
      answerChoices: [
        { id: 'A', text: 'Ethos, by establishing the writer’s authority and character' },
        { id: 'B', text: 'Logos, by presenting statistical evidence of need' },
        { id: 'C', text: 'Pathos, by evoking the reader’s emotions through a vivid image' },
        { id: 'D', text: 'Kairos, by analyzing the long-term economics of hunger' }
      ],
      correctAnswer: 'C',
      explanation: 'Pathos appeals to emotion. The vivid image of a hungry child clutching an empty bowl is designed to move the reader to feel sympathy and act, which is the dominant appeal here.',
      distractorRationales: {
        A: 'No emphasis is placed on the writer’s credibility or moral character.',
        B: 'The appeal offers an image and a single dollar figure, not data or logical proof of scale.',
        C: '',
        D: 'Kairos refers to timeliness; the passage relies on emotional imagery rather than seizing a timely moment with economic analysis.'
      },
      tags: ['appeals', 'pathos', 'audience'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-language-u4-diction-tone-mcq-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-4', unitName: 'Style and Syntax', topicId: 'diction-tone', topicName: 'Diction and Tone',
      skill: 'style', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      stimulus: 'A columnist describes a new policy: "The plan was cobbled together in a weekend, slapped onto the budget, and rushed past anyone who might have asked an inconvenient question."',
      prompt: 'The columnist’s diction ("cobbled together," "slapped onto," "rushed past") most directly establishes a tone of',
      answerChoices: [
        { id: 'A', text: 'admiration for efficient decision-making' },
        { id: 'B', text: 'disapproval of a careless, hasty process' },
        { id: 'C', text: 'neutral, objective reporting' },
        { id: 'D', text: 'nostalgia for past policies' }
      ],
      correctAnswer: 'B',
      explanation: 'The verbs "cobbled," "slapped," and "rushed" carry negative connotations of sloppiness and haste, creating a critical, disapproving tone toward how the plan was created.',
      distractorRationales: {
        A: 'These words connote carelessness, not praise for efficiency.',
        B: '',
        C: 'The loaded, connotative verbs reveal a clear attitude, so the tone is not neutral.',
        D: 'Nothing in the diction looks back fondly on earlier policies.'
      },
      tags: ['diction', 'tone', 'connotation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-english-language-u3-line-of-reasoning-mcq-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-3', unitName: 'Argument Development', topicId: 'line-of-reasoning', topicName: 'Line of Reasoning',
      skill: 'reasoning and organization', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 105,
      stimulus: 'A writer argues: "Public libraries deserve full funding. They offer free internet to those who cannot afford it at home. They host job-search workshops that have placed hundreds of residents in work. And they remain one of the few spaces where a person can simply exist without being asked to buy anything."',
      prompt: 'How do the three sentences following the opening claim function within the writer’s line of reasoning?',
      answerChoices: [
        { id: 'A', text: 'They introduce a counterargument the writer will later concede.' },
        { id: 'B', text: 'They provide parallel reasons, each supporting the claim that libraries deserve funding.' },
        { id: 'C', text: 'They restate the thesis in different words without adding support.' },
        { id: 'D', text: 'They shift the topic away from libraries toward unemployment policy.' }
      ],
      correctAnswer: 'B',
      explanation: 'Each sentence offers a distinct, parallel reason (internet access, job placement, non-commercial space) that builds support for the central claim. Together they form the line of reasoning advancing the thesis.',
      distractorRationales: {
        A: 'No opposing position is raised; all three sentences support the claim.',
        B: '',
        C: 'They add new, specific support rather than merely repeating the thesis.',
        D: 'Job-search workshops illustrate a library service; the focus stays on libraries.'
      },
      tags: ['line-of-reasoning', 'support', 'organization'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-language-u4-syntax-mcq-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-4', unitName: 'Style and Syntax', topicId: 'syntax', topicName: 'Syntax and Sentence Structure',
      skill: 'style', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 105,
      stimulus: 'A speaker closes a graduation address: "You will be tired. You will doubt yourself. You will want, more than once, to quit. And then—because you are who you are—you will keep going."',
      prompt: 'What is the most likely rhetorical effect of the speaker’s short, parallel sentences followed by the longer final sentence?',
      answerChoices: [
        { id: 'A', text: 'The clipped repetition builds an accumulating sense of struggle that the long final sentence resolves with reassurance.' },
        { id: 'B', text: 'The varied length confuses the audience and undercuts the message.' },
        { id: 'C', text: 'The sentences create a formal, detached academic tone.' },
        { id: 'D', text: 'The parallel structure signals that the speaker is listing unrelated facts.' }
      ],
      correctAnswer: 'A',
      explanation: 'The three short, parallel "You will..." sentences pile up hardships rhythmically, while the longer, interrupted final sentence breaks the pattern to deliver a turn toward perseverance—emphasizing resolve through contrast in sentence length.',
      distractorRationales: {
        A: '',
        B: 'The variation is deliberate and patterned, reinforcing rather than confusing the message.',
        C: 'Direct address and emotional content create an intimate, motivational tone, not a detached one.',
        D: 'The clauses are thematically linked stages of one experience, not unrelated facts.'
      },
      tags: ['syntax', 'parallelism', 'sentence-length'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-language-u6-logical-fallacies-mcq-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-6', unitName: 'Reasoning and Commentary', topicId: 'logical-fallacies', topicName: 'Recognizing Logical Fallacies',
      skill: 'argumentation', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 105,
      stimulus: 'A debater asserts: "If we let the school extend lunch by ten minutes, students will demand an extra hour, then a half day, and before long no one will attend class at all."',
      prompt: 'Which logical fallacy best describes the reasoning in this statement?',
      answerChoices: [
        { id: 'A', text: 'Ad hominem, attacking the character of the opponent' },
        { id: 'B', text: 'Slippery slope, assuming one small step inevitably leads to extreme consequences' },
        { id: 'C', text: 'Appeal to authority, citing an expert without evidence' },
        { id: 'D', text: 'False dilemma, presenting only two options' }
      ],
      correctAnswer: 'B',
      explanation: 'A slippery slope fallacy assumes that a modest first step will trigger a chain of increasingly extreme outcomes without justification. The claim that a ten-minute extension leads to no class attendance is exactly this unsupported escalation.',
      distractorRationales: {
        A: 'No person’s character is attacked; the flaw is in the chain of consequences.',
        B: '',
        C: 'No authority or expert is cited at all.',
        D: 'The statement projects an escalating sequence, not a forced choice between two options.'
      },
      tags: ['fallacy', 'slippery-slope', 'reasoning'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-english-language-u7-concession-rebuttal-mcq-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-7', unitName: 'Complex Argumentation', topicId: 'concession-rebuttal', topicName: 'Concession and Rebuttal',
      skill: 'argumentation', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 135,
      stimulus: 'An essayist writes: "Critics rightly note that requiring volunteer hours risks turning generosity into a chore. Yet a student who first serves out of obligation often discovers, somewhere between the food bank and the final tally, a habit she would never have chosen on her own—and would not now surrender."',
      prompt: 'Which best explains how the essayist uses concession and rebuttal in this passage?',
      answerChoices: [
        { id: 'A', text: 'The writer concedes that mandates can feel like a chore, then rebuts by arguing the requirement can cultivate lasting voluntary habits.' },
        { id: 'B', text: 'The writer concedes nothing and simply restates the opposing view as her own.' },
        { id: 'C', text: 'The writer rebuts the critics first and only later admits they may be partly right.' },
        { id: 'D', text: 'The writer abandons her position by fully agreeing with the critics.' }
      ],
      correctAnswer: 'A',
      explanation: 'The first sentence grants a real objection ("rightly note... risks turning generosity into a chore"). The pivot "Yet" introduces the rebuttal: the obligation can produce a habit the student later embraces. This concede-then-counter structure strengthens the argument by engaging the opposition.',
      distractorRationales: {
        A: '',
        B: 'The word "rightly" is a genuine concession, not a restatement adopted as the writer’s own thesis.',
        C: 'The order is reversed—the concession comes first, the rebuttal second.',
        D: 'The writer maintains her position; "Yet" signals she does not fully agree with the critics.'
      },
      tags: ['concession', 'rebuttal', 'complexity'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-language-u8-comparing-arguments-mcq-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-8', unitName: 'Multiple-Source Analysis', topicId: 'comparing-arguments', topicName: 'Comparing Arguments',
      skill: 'synthesis', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      stimulus: 'Source 1 argues that cities should ban gas-powered leaf blowers because of their noise and emissions, citing decibel readings and air-quality data. Source 2 agrees the machines are a nuisance but argues that an outright ban unfairly burdens small landscaping crews, and instead proposes a phased transition with subsidies.',
      prompt: 'A student writing a synthesis essay wants to use both sources to argue for stricter regulation without ignoring economic costs. Which use of the sources is most effective?',
      answerChoices: [
        { id: 'A', text: 'Quote Source 1’s data to establish the harm, then use Source 2’s phased-transition proposal to show how regulation can address that harm while protecting workers.' },
        { id: 'B', text: 'Summarize both sources in turn and conclude that the issue is too complicated to resolve.' },
        { id: 'C', text: 'Cite only Source 1 and dismiss Source 2 as irrelevant to environmental concerns.' },
        { id: 'D', text: 'Quote Source 2’s objections and present them as the student’s own thesis without comment.' }
      ],
      correctAnswer: 'A',
      explanation: 'Effective synthesis uses sources to advance an original line of reasoning. Pairing Source 1’s evidence of harm with Source 2’s implementation proposal lets the student argue for stricter regulation while addressing economic costs—integrating both sources in service of a defensible position.',
      distractorRationales: {
        A: '',
        B: 'Summarizing without taking a position is not argument; the prompt asks for a defensible claim.',
        C: 'Dismissing Source 2 ignores the economic costs the student wants to acknowledge.',
        D: 'Presenting a source’s words as one’s own thesis without commentary is neither synthesis nor a developed argument.'
      },
      tags: ['synthesis', 'comparison', 'sources'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN (rhetorical-analysis, argument-essay, synthesis, short-answer) ─
    {
      id: 'ap-english-language-u9-timed-rhetorical-analysis-rhet-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-9', unitName: 'Exam-Level Writing Practice', topicId: 'timed-rhetorical-analysis', topicName: 'Timed Rhetorical Analysis',
      skill: 'style', questionType: 'rhetorical-analysis', difficulty: 'exam-level',
      bloomLevel: 'analyze', estimatedTimeSeconds: 2400,
      stimulus: 'The following is an excerpt from an original commencement-style address. "You arrived here strangers, carrying nothing but a schedule and a nervous hope. Tonight you leave as something else—people who have stayed up arguing over ideas, who have failed a test and tried again, who have learned that the door marked ‘impossible’ is often only stuck. Do not mistake comfort for arrival. The world will reward you for staying still; refuse the reward."',
      prompt: 'Read the passage and write an essay that analyzes the rhetorical choices the speaker makes to convey a message to the graduating audience. In your response, develop a thesis about the speaker’s purpose and support it by analyzing specific rhetorical choices (such as contrast, metaphor, and syntax) and explaining how they advance that purpose.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A strong response identifies the speaker’s purpose (to urge graduates to keep striving rather than settle) and analyzes how specific choices—the strangers-to-something-else contrast, the "stuck door" metaphor, and the imperative final sentences—create and reinforce that purpose for the audience.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Thesis presents a defensible interpretation of the speaker’s rhetorical purpose.', evidenceRequired: 'A clear thesis naming the purpose/message, not mere summary.' },
        { id: 'r2', pointValue: 2, criterion: 'Selects relevant textual evidence and identifies specific rhetorical choices.', evidenceRequired: 'At least two specific devices tied to quoted or paraphrased text.' },
        { id: 'r3', pointValue: 2, criterion: 'Commentary explains how the choices produce the intended effect on the audience.', evidenceRequired: 'Reasoning links each choice to purpose, not just labeling.' },
        { id: 'r4', pointValue: 1, criterion: 'Demonstrates sophistication (nuance, vivid style, or a broader insight).', evidenceRequired: 'Sustained insight or controlled, persuasive prose.' }
      ],
      modelAnswer: 'The speaker urges graduates to resist complacency and keep striving even after achieving the milestone of graduation. The address opens by contrasting who the graduates were ("strangers, carrying nothing but a schedule and a nervous hope") with who they have become, a transformation that establishes their capability and earns the speaker the authority to challenge them. The metaphor of the door "marked ‘impossible’" that "is often only stuck" reframes obstacles as surmountable, encouraging persistence. Finally, the clipped imperatives—"Do not mistake comfort for arrival" and "refuse the reward"—shift from reflection to direct command, leaving the audience with an urgent charge. Together these choices convert a celebratory occasion into a call to keep pushing forward.',
      tags: ['rhetorical-analysis', 'frq', 'timed-writing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-language-u9-timed-argument-arg-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-9', unitName: 'Exam-Level Writing Practice', topicId: 'timed-argument', topicName: 'Timed Argument Essay',
      skill: 'argumentation', questionType: 'argument-essay', difficulty: 'hard',
      bloomLevel: 'create', estimatedTimeSeconds: 2400,
      prompt: 'Some people argue that constant access to information through smartphones has made us better informed; others argue it has made careful, deep thinking harder. Write an essay that develops your own position on the relationship between constant access to information and the quality of thought. Use specific, relevant evidence and reasoning to support your argument.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A successful argument essay stakes out a defensible position (which may qualify or complicate the binary), supports it with specific and relevant evidence, and develops a consistent line of reasoning with commentary that explains how the evidence supports the claim.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'States a defensible thesis that responds to the prompt with a clear position.', evidenceRequired: 'A position, not a restatement of both sides.' },
        { id: 'r2', pointValue: 2, criterion: 'Provides specific, relevant evidence to support the position.', evidenceRequired: 'Concrete examples, not vague generalities.' },
        { id: 'r3', pointValue: 2, criterion: 'Develops a consistent line of reasoning with commentary connecting evidence to claim.', evidenceRequired: 'Explanation linking each example to the thesis.' },
        { id: 'r4', pointValue: 1, criterion: 'Demonstrates sophistication through qualification, acknowledging complexity, or style.', evidenceRequired: 'Nuance such as concession, tension, or implications.' }
      ],
      modelAnswer: 'Constant access to information has expanded what we can know while quietly eroding how deeply we know it; the gain in breadth comes at the cost of depth unless we deliberately resist the pull of the feed. On one hand, a student researching a question can now consult primary sources, expert commentary, and counterarguments within minutes—access that once required a library and days. Yet the same device that delivers that abundance also fragments attention: notifications interrupt the sustained focus that careful reasoning demands, and the ease of looking something up can substitute for the harder work of understanding it. The strongest position, then, is not that smartphones make us smarter or dumber, but that they raise the stakes of self-discipline. A reader who chooses to follow one idea to its conclusion is better informed than ever; a reader who skims ten headlines is merely busier. The tool is powerful precisely because its effect depends on how it is used.',
      tags: ['argument-essay', 'thesis', 'reasoning'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-language-u5-synthesis-syn-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-5', unitName: 'Sources and Synthesis', topicId: 'synthesis-argument', topicName: 'Synthesis as Argument',
      skill: 'synthesis', questionType: 'synthesis', difficulty: 'hard',
      bloomLevel: 'create', estimatedTimeSeconds: 2400,
      stimulus: 'Source A (survey summary): 68% of local residents report they would use a downtown park weekly if one existed. Source B (budget memo): converting the vacant lot to a park would cost the city an estimated $1.2 million and remove a parking revenue source. Source C (op-ed): "Green space is not a luxury; studies tie nearby parks to lower stress and stronger neighborhood ties." Source D (business letter): downtown merchants worry that losing the parking lot will reduce foot traffic and sales.',
      prompt: 'The town is deciding whether to convert a vacant downtown lot into a public park. Using at least three of the provided sources, write an essay that develops your own position on whether the town should build the park. Integrate the sources to support your argument rather than merely summarizing them.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A strong synthesis essay takes a defensible position and uses at least three sources as support woven into the writer’s own reasoning, with commentary explaining how each cited source advances the argument—addressing, not ignoring, the costs the sources raise.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'States a defensible thesis taking a position on building the park.', evidenceRequired: 'A clear claim for or against (qualification allowed).' },
        { id: 'r2', pointValue: 2, criterion: 'Integrates at least three sources as support, with attribution.', evidenceRequired: 'Three sources cited and tied to the argument, not listed.' },
        { id: 'r3', pointValue: 2, criterion: 'Commentary explains how the sources support the writer’s line of reasoning.', evidenceRequired: 'Reasoning connecting each source to the position, including costs.' },
        { id: 'r4', pointValue: 1, criterion: 'Demonstrates sophistication by addressing tension among the sources.', evidenceRequired: 'Engages a counter-consideration such as cost or lost parking.' }
      ],
      modelAnswer: 'The town should build the downtown park, but only with a plan that answers the legitimate economic objections the proposal raises. The strongest case for the park is demand: 68% of residents say they would use it weekly (Source A), and that demand is not merely recreational—green space is linked to lower stress and stronger community ties (Source C). Against this stands real cost: $1.2 million plus lost parking revenue (Source B) and merchants’ fear of reduced foot traffic (Source D). Yet these concerns argue for careful design, not rejection. A park that draws residents downtown weekly can itself generate the foot traffic merchants want, converting Source D’s worry into a potential benefit, while phased funding can soften the budget impact in Source B. Weighing the broad, recurring public benefit against costs that can be managed, the responsible choice is to build—deliberately.',
      tags: ['synthesis', 'sources', 'argument'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-english-language-u3-commentary-basics-sa-001', courseId: 'ap-english-language', courseName: 'AP English Language and Composition',
      unitId: 'unit-3', unitName: 'Argument Development', topicId: 'commentary-basics', topicName: 'Commentary and Warrants',
      skill: 'claims and evidence', questionType: 'short-answer', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 300,
      stimulus: 'A student’s body paragraph reads: "Schools should start later. A study found that teenagers who started school after 8:30 a.m. earned higher grades."',
      prompt: 'In two to three sentences, explain what is missing from this paragraph and write a sentence of commentary that connects the evidence to the claim.',
      correctAnswer: 'The paragraph states a claim and offers evidence but lacks commentary linking them.',
      acceptableAnswers: ['commentary', 'explanation', 'warrant', 'reasoning', 'connect the evidence to the claim'],
      explanation: 'The paragraph jumps from claim to evidence with no commentary explaining how the evidence proves the point. Effective commentary supplies the reasoning (the warrant) that ties the higher grades to the conclusion that schools should start later.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies that commentary/explanation linking evidence to claim is missing.', evidenceRequired: 'Names the missing element (commentary, reasoning, or warrant).' },
        { id: 'r2', pointValue: 1, criterion: 'Supplies a sentence of commentary that connects the study to the claim.', evidenceRequired: 'A sentence explaining how the evidence supports starting later.' }
      ],
      modelAnswer: 'The paragraph offers a claim and evidence but no commentary explaining how they connect. A sentence of commentary might read: "Because well-rested students can concentrate and retain material more effectively, the grade improvement after 8:30 a.m. start times shows that later schedules directly serve the academic goals schools are supposed to advance."',
      tags: ['commentary', 'warrant', 'evidence'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
