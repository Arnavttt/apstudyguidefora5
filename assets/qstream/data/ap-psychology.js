/**
 * Five & A+ — AI Question Stream · Course data: AP Psychology
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the gold-template shape of ap-biology.js.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-psychology',
    displayName: 'AP Psychology',
    description: 'Scientific study of behavior and mental processes, spanning biological bases, cognition, development, social influence, personality, and health, with an emphasis on research methods and evidence-based reasoning.',
    category: 'history-social-science',
    allowedQuestionTypes: ['mcq', 'stimulus-based', 'data-analysis', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'stimulus-based', 'frq'],
    skills: [
      'concept application',
      'research methods',
      'data interpretation',
      'argumentation',
      'scenario analysis'
    ],
    bigIdeas: ['Behavior and Mental Processes', 'Scientific Inquiry', 'Biopsychosocial Interactions', 'Variation and Individual Differences'],
    units: [
      { id: 'unit-1', name: 'Biological Bases of Behavior', examWeight: '15-25%', description: 'Neurons, neurotransmitters, brain structures, the endocrine system, and the genetics of behavior.',
        topics: [
          { id: 'neural-communication', name: 'Neural Communication', description: 'Neuron structure, action potentials, and synaptic transmission by neurotransmitters.', skills: ['concept application'] },
          { id: 'brain-structures', name: 'Brain Structures and Functions', description: 'Roles of the cortex, limbic system, and brainstem; lesion and imaging evidence.', skills: ['scenario analysis'] },
          { id: 'nervous-endocrine', name: 'Nervous and Endocrine Systems', description: 'Central vs. peripheral nervous systems, autonomic responses, and hormonal regulation.', skills: ['concept application'] }
        ] },
      { id: 'unit-2', name: 'Cognition', examWeight: '15-25%', description: 'Memory, thinking, problem solving, intelligence, and the constructive nature of perception.',
        topics: [
          { id: 'memory-systems', name: 'Memory Systems', description: 'Encoding, storage, and retrieval across sensory, working, and long-term memory.', skills: ['concept application'] },
          { id: 'thinking-problem-solving', name: 'Thinking and Problem Solving', description: 'Heuristics, algorithms, biases, and obstacles to effective reasoning.', skills: ['scenario analysis'] },
          { id: 'intelligence-testing', name: 'Intelligence and Testing', description: 'Theories of intelligence and the reliability, validity, and standardization of tests.', skills: ['research methods'] }
        ] },
      { id: 'unit-3', name: 'Development and Learning', examWeight: '15-25%', description: 'Lifespan development and the principles of classical, operant, and observational learning.',
        topics: [
          { id: 'lifespan-development', name: 'Lifespan Development', description: 'Cognitive, social, and moral development across childhood, adolescence, and adulthood.', skills: ['concept application'] },
          { id: 'classical-conditioning', name: 'Classical Conditioning', description: 'Acquisition, extinction, generalization, and discrimination of conditioned responses.', skills: ['scenario analysis'] },
          { id: 'operant-conditioning', name: 'Operant Conditioning', description: 'Reinforcement, punishment, and schedules that shape voluntary behavior.', skills: ['concept application'] }
        ] },
      { id: 'unit-4', name: 'Social Psychology and Personality', examWeight: '15-25%', description: 'How situations and dispositions shape behavior, attitudes, and the sense of self.',
        topics: [
          { id: 'social-influence', name: 'Social Influence', description: 'Conformity, obedience, group dynamics, and attribution of behavior.', skills: ['scenario analysis'] },
          { id: 'attitudes-attribution', name: 'Attitudes and Attribution', description: 'Cognitive dissonance, the fundamental attribution error, and persuasion.', skills: ['concept application'] },
          { id: 'personality-theories', name: 'Personality Theories', description: 'Trait, psychodynamic, humanistic, and social-cognitive approaches to personality.', skills: ['argumentation'] }
        ] },
      { id: 'unit-5', name: 'Mental and Physical Health', examWeight: '15-25%', description: 'Stress, psychological disorders, treatment approaches, and well-being.',
        topics: [
          { id: 'stress-coping', name: 'Stress and Coping', description: 'The stress response, the general adaptation syndrome, and coping strategies.', skills: ['concept application'] },
          { id: 'psychological-disorders', name: 'Psychological Disorders', description: 'Diagnostic criteria and explanatory models for anxiety, mood, and other disorders.', skills: ['scenario analysis'] },
          { id: 'treatment-therapy', name: 'Treatment and Therapy', description: 'Biomedical and psychotherapeutic approaches and how their effectiveness is evaluated.', skills: ['research methods'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq', 'stimulus-based'], timingMinutes: 70, weight: '66.7%', notes: 'Discrete items and sets that apply concepts to scenarios and research.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'data-analysis', 'short-answer'], timingMinutes: 70, weight: '33.3%', notes: 'Includes a concept-application item and an evidence-based, research-analysis item.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-psychology-u1-neural-communication-mcq-001', courseId: 'ap-psychology', courseName: 'AP Psychology',
      unitId: 'unit-1', unitName: 'Biological Bases of Behavior', topicId: 'neural-communication', topicName: 'Neural Communication',
      skill: 'concept application', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'A neuron transmits a signal down its length as a brief electrical impulse. This impulse is best described as the neuron’s',
      answerChoices: [
        { id: 'A', text: 'action potential' },
        { id: 'B', text: 'refractory period' },
        { id: 'C', text: 'resting potential' },
        { id: 'D', text: 'reuptake' }
      ],
      correctAnswer: 'A',
      explanation: 'An action potential is the brief electrical charge that travels down a neuron’s axon when the neuron fires, carrying the signal toward the axon terminals.',
      distractorRationales: {
        A: '',
        B: 'The refractory period is the brief pause after firing when a neuron cannot fire again, not the impulse itself.',
        C: 'The resting potential is the neuron’s stable negative charge when it is not firing.',
        D: 'Reuptake is the reabsorption of neurotransmitters by the sending neuron, occurring at the synapse, not the traveling impulse.'
      },
      tags: ['neuron', 'action-potential', 'neural-communication'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-psychology-u3-operant-conditioning-mcq-001', courseId: 'ap-psychology', courseName: 'AP Psychology',
      unitId: 'unit-3', unitName: 'Development and Learning', topicId: 'operant-conditioning', topicName: 'Operant Conditioning',
      skill: 'concept application', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'A child cleans their room and is then allowed to play a favorite video game, and afterward the child cleans more often. The video game is acting as a',
      answerChoices: [
        { id: 'A', text: 'positive reinforcer' },
        { id: 'B', text: 'negative reinforcer' },
        { id: 'C', text: 'positive punishment' },
        { id: 'D', text: 'conditioned stimulus' }
      ],
      correctAnswer: 'A',
      explanation: 'A positive reinforcer is a desirable stimulus added after a behavior that increases the future frequency of that behavior. Adding game time increased the cleaning behavior.',
      distractorRationales: {
        A: '',
        B: 'Negative reinforcement increases behavior by removing an unpleasant stimulus, but here a pleasant stimulus is added.',
        C: 'Positive punishment adds an unpleasant stimulus to decrease behavior; this consequence increased the behavior.',
        D: 'A conditioned stimulus belongs to classical conditioning, which involves involuntary responses, not reinforced voluntary actions.'
      },
      tags: ['operant', 'reinforcement', 'learning'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-psychology-u2-memory-systems-mcq-001', courseId: 'ap-psychology', courseName: 'AP Psychology',
      unitId: 'unit-2', unitName: 'Cognition', topicId: 'memory-systems', topicName: 'Memory Systems',
      skill: 'concept application', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'A student looks up a phone number and repeats it silently until dialing, then forgets it moments later. This brief holding of information best illustrates',
      answerChoices: [
        { id: 'A', text: 'long-term memory' },
        { id: 'B', text: 'short-term (working) memory' },
        { id: 'C', text: 'iconic memory' },
        { id: 'D', text: 'procedural memory' }
      ],
      correctAnswer: 'B',
      explanation: 'Short-term, or working, memory holds a small amount of information briefly while it is being used. Maintenance rehearsal kept the number active just long enough to dial.',
      distractorRationales: {
        A: 'Long-term memory stores information durably; the number was lost quickly, so it was not transferred there.',
        B: '',
        C: 'Iconic memory is a fleeting visual sensory store lasting a fraction of a second, far shorter than this episode.',
        D: 'Procedural memory stores skills and habits, not a temporarily held string of digits.'
      },
      tags: ['memory', 'working-memory', 'rehearsal'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-psychology-u4-social-influence-stimulus-001', courseId: 'ap-psychology', courseName: 'AP Psychology',
      unitId: 'unit-4', unitName: 'Social Psychology and Personality', topicId: 'social-influence', topicName: 'Social Influence',
      skill: 'scenario analysis', questionType: 'stimulus-based', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 120,
      prompt: 'In a study, participants estimate the length of a line out loud after several confederates first announce the same clearly incorrect answer. Many participants then give that same wrong answer aloud, even though they privately wrote down the correct length. Identify the social phenomenon shown and explain what the difference between the public and private answers suggests about its cause.',
      stimulus: 'Setup: 6 confederates each say "Line C" (clearly wrong). The true match is Line A. The real participant answers last, out loud, then later records a private written answer.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Going along with an obviously wrong group answer in public is normative conformity. Because participants gave correct answers privately, the change was driven by a desire for social approval rather than a genuine belief change (which would be informational influence).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the phenomenon as conformity (specifically normative).', evidenceRequired: 'Names conformity / normative social influence.' },
        { id: 'r2', pointValue: 1, criterion: 'Uses the public vs. private discrepancy as evidence of its cause.', evidenceRequired: 'Links private-correct answers to desire for approval, not belief change.' }
      ],
      modelAnswer: 'The participants are showing normative conformity: they publicly match the group’s incorrect judgment to fit in and avoid standing out. The fact that their private written answers are correct shows they did not actually believe the group; instead, they changed only their public behavior to gain social approval. If the cause had been informational influence, their private answers would also have shifted toward the group’s answer.',
      tags: ['conformity', 'normative-influence', 'social-psychology'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-psychology-u2-intelligence-testing-data-001', courseId: 'ap-psychology', courseName: 'AP Psychology',
      unitId: 'unit-2', unitName: 'Cognition', topicId: 'intelligence-testing', topicName: 'Intelligence and Testing',
      skill: 'data interpretation', questionType: 'data-analysis', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'A psychologist gives the same group of students a new aptitude test twice, two weeks apart, and also compares their scores to their later course grades. Using the table, state which form of reliability the two test administrations measure, and explain whether the data better support the test’s reliability or its validity.',
      dataTable: { columns: ['Comparison', 'Correlation (r)'], rows: [['Test (time 1) vs. Test (time 2)', '0.91'], ['Test score vs. final course grade', '0.34']] },
      correctAnswer: 'Test-retest reliability; the data support reliability more than validity.',
      acceptableAnswers: ['test-retest reliability', 'test retest', 'reliability'],
      explanation: 'Correlating the same test given twice measures test-retest reliability, which is high (r = 0.91), so the test is consistent. The low correlation with course grades (r = 0.34) is weak evidence of criterion validity, so the test is reliable but only weakly valid as a predictor of performance.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the time-1 vs. time-2 comparison as test-retest reliability.', evidenceRequired: 'Names test-retest reliability.' },
        { id: 'r2', pointValue: 1, criterion: 'Interprets the high r as strong reliability.', evidenceRequired: 'Links r = 0.91 to consistency.' },
        { id: 'r3', pointValue: 1, criterion: 'Explains that the low r with grades means weak validity.', evidenceRequired: 'Links r = 0.34 to limited predictive/criterion validity.' }
      ],
      modelAnswer: 'Giving the same test twice and correlating the scores measures test-retest reliability, and the correlation of 0.91 is high, indicating the test produces consistent scores. However, validity asks whether the test measures what it claims and predicts relevant outcomes; the correlation with final grades is only 0.34, which is weak. Therefore the data support the test’s reliability much more strongly than its validity—a test can be highly reliable yet still not be a valid predictor of achievement.',
      tags: ['reliability', 'validity', 'testing', 'correlation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-psychology-u3-classical-conditioning-mcq-001', courseId: 'ap-psychology', courseName: 'AP Psychology',
      unitId: 'unit-3', unitName: 'Development and Learning', topicId: 'classical-conditioning', topicName: 'Classical Conditioning',
      skill: 'scenario analysis', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'A dog learns that a bell predicts food and salivates to the bell. Later the bell is rung repeatedly with no food, and the dog gradually stops salivating to it. The decline in salivation to the bell is best labeled',
      answerChoices: [
        { id: 'A', text: 'spontaneous recovery' },
        { id: 'B', text: 'generalization' },
        { id: 'C', text: 'extinction' },
        { id: 'D', text: 'discrimination' }
      ],
      correctAnswer: 'C',
      explanation: 'Extinction occurs when the conditioned stimulus (bell) is repeatedly presented without the unconditioned stimulus (food), so the conditioned response (salivation) weakens and eventually disappears.',
      distractorRationales: {
        A: 'Spontaneous recovery is the reappearance of an extinguished response after a rest period, the opposite of this decline.',
        B: 'Generalization is responding to stimuli similar to the conditioned stimulus, not a fading of the response.',
        C: '',
        D: 'Discrimination is learning to respond only to the specific conditioned stimulus and not to similar ones.'
      },
      tags: ['classical-conditioning', 'extinction', 'learning'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-psychology-u2-thinking-problem-solving-mcq-001', courseId: 'ap-psychology', courseName: 'AP Psychology',
      unitId: 'unit-2', unitName: 'Cognition', topicId: 'thinking-problem-solving', topicName: 'Thinking and Problem Solving',
      skill: 'scenario analysis', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'After several news stories about shark attacks, beachgoers greatly overestimate the danger of swimming, even though the statistical risk is tiny. This overestimation is best explained by',
      answerChoices: [
        { id: 'A', text: 'the representativeness heuristic' },
        { id: 'B', text: 'the availability heuristic' },
        { id: 'C', text: 'confirmation bias' },
        { id: 'D', text: 'functional fixedness' }
      ],
      correctAnswer: 'B',
      explanation: 'The availability heuristic estimates likelihood by how easily examples come to mind. Vivid, recent shark-attack stories are highly memorable, so they inflate perceived risk despite low actual probability.',
      distractorRationales: {
        A: 'The representativeness heuristic judges likelihood by similarity to a prototype, not by the ease of recalling examples.',
        B: '',
        C: 'Confirmation bias is seeking evidence that supports existing beliefs, which is not the core mechanism of inflated risk estimates here.',
        D: 'Functional fixedness is an obstacle in problem solving where one fails to see new uses for objects, unrelated to risk estimation.'
      },
      tags: ['heuristics', 'availability', 'cognition', 'biases'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-psychology-u5-psychological-disorders-stimulus-001', courseId: 'ap-psychology', courseName: 'AP Psychology',
      unitId: 'unit-5', unitName: 'Mental and Physical Health', topicId: 'psychological-disorders', topicName: 'Psychological Disorders',
      skill: 'scenario analysis', questionType: 'stimulus-based', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'A clinician notes that a client’s panic attacks can be traced to overactive amygdala responses, a habit of catastrophic thinking, and a recent job loss. Which approach to explaining the disorder does the clinician’s reasoning best illustrate, and why is it considered more complete than any single-cause model?',
      stimulus: 'Case notes: biological factor = heightened amygdala reactivity; psychological factor = catastrophic interpretations of bodily sensations; social factor = stress from recent unemployment.',
      correctAnswer: 'The biopsychosocial model.',
      explanation: 'Combining biological (amygdala), psychological (catastrophic thinking), and social (job-loss stress) factors reflects the biopsychosocial model. It is considered more complete because disorders usually arise from interacting causes rather than a single biological, cognitive, or environmental factor alone.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the biopsychosocial model.', evidenceRequired: 'Names the biopsychosocial approach.' },
        { id: 'r2', pointValue: 1, criterion: 'Connects the three named factors to its three components.', evidenceRequired: 'Maps amygdala/thinking/job loss to biological/psychological/social.' },
        { id: 'r3', pointValue: 1, criterion: 'Explains why it is more complete than a single-cause model.', evidenceRequired: 'Notes interacting causes vs. one factor.' }
      ],
      modelAnswer: 'The clinician is using the biopsychosocial model, which explains a disorder as the product of interacting biological, psychological, and social influences. Here the heightened amygdala reactivity is the biological factor, the catastrophic interpretations of bodily sensations are the psychological factor, and the stress from job loss is the social factor. This model is considered more complete than a purely biological, cognitive, or environmental account because panic disorder typically emerges from the interaction of several causes, so focusing on any one factor alone would miss contributors that influence onset and treatment.',
      tags: ['biopsychosocial', 'panic', 'disorders', 'explanatory-models'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 1+ WRITTEN (FRQ) ─────────────────────────────────────────────────────
    {
      id: 'ap-psychology-u4-attitudes-attribution-frq-001', courseId: 'ap-psychology', courseName: 'AP Psychology',
      unitId: 'unit-4', unitName: 'Social Psychology and Personality', topicId: 'attitudes-attribution', topicName: 'Attitudes and Attribution',
      skill: 'argumentation', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'A driver is cut off in traffic and immediately concludes that the other driver is "a rude, careless person," while explaining their own past mistakes as caused by being in a hurry. (a) Identify the attribution error illustrated and define it. (b) Explain how cognitive dissonance could arise if this driver later learns the other car was rushing an injured passenger to a hospital, and describe one way the driver might reduce that dissonance.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Blaming another person’s character while excusing one’s own behavior by the situation is the fundamental attribution error (paired with the actor-observer asymmetry). New information that contradicts the harsh judgment can create dissonance, which people reduce by changing an attitude or adding justifying thoughts.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the fundamental attribution error.', evidenceRequired: 'Names the fundamental attribution error.' },
        { id: 'r2', pointValue: 1, criterion: 'Defines it as overweighting disposition and underweighting situation for others.', evidenceRequired: 'Accurate definition.' },
        { id: 'r3', pointValue: 1, criterion: 'Explains the source of cognitive dissonance.', evidenceRequired: 'New fact conflicts with the prior judgment/attitude.' },
        { id: 'r4', pointValue: 1, criterion: 'Describes one valid dissonance-reduction strategy.', evidenceRequired: 'Changing the attitude or adding a consonant justification.' }
      ],
      modelAnswer: '(a) The driver shows the fundamental attribution error: when judging another person, we overestimate the influence of stable personality (disposition) and underestimate the influence of the situation. The driver attributes the other person’s action to a rude character while attributing their own similar mistakes to circumstances. (b) If the driver learns the other car was rushing an injured passenger to a hospital, this new information conflicts with the earlier belief that the driver is "rude and careless," producing cognitive dissonance—an uncomfortable tension between the held attitude and the new fact. The driver could reduce this dissonance by changing the attitude (deciding the other driver was actually responsible and justified), which restores consistency between belief and evidence. Alternatively, the driver could add a consonant thought, such as acknowledging that anyone would drive aggressively in an emergency.',
      tags: ['fundamental-attribution-error', 'cognitive-dissonance', 'attribution', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
