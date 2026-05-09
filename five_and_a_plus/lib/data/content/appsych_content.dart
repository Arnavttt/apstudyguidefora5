// lib/data/content/appsych_content.dart
//
// AP Psychology — 5 units transcribed from appsych.html
// Accent: #a855f7 (purple)

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> appsychUnits = [
  // ── Unit 1: History & Perspectives ──────────────────────────────────────
  Unit(
    title: 'History & Perspectives',
    blocks: [
      DataTableBlock(
        headers: ['Perspective', 'Focus', 'Key Figures'],
        rows: [
          ['Psychodynamic', 'Unconscious drives, early childhood, id/ego/superego', 'Freud, Jung, Adler'],
          ['Behavioral', 'Observable behavior; environment shapes all behavior', 'Watson, Skinner, Pavlov'],
          ['Humanistic', 'Free will, growth, self-actualization', 'Maslow, Rogers'],
          ['Cognitive', 'Mental processes: memory, thinking, problem-solving', 'Piaget, Beck'],
          ['Biological/Neuroscience', 'Brain, genetics, nervous system, hormones', 'Broca, Wernicke'],
          ['Sociocultural', 'Culture, social norms, group influence', 'Vygotsky'],
          ['Evolutionary', 'Natural selection shaped behavior for survival', 'Darwin legacy, Buss'],
        ],
      ),
      CalloutBlock(
        title: 'Correlation vs. Causation',
        items: [
          'Correlation shows a relationship (r from \u22121 to +1). Does NOT prove causation.',
          'Only experiments can establish causation.',
          'Independent variable (IV): the variable manipulated.',
          'Dependent variable (DV): the variable measured.',
          'Control group: no manipulation. Experimental group: receives manipulation.',
          'Double-blind: neither participants nor researchers know group assignment.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Which research method is the ONLY one that can establish cause-and-effect?',
          choices: [
            QuizChoice(text: 'A) Case study', isCorrect: false),
            QuizChoice(text: 'B) Survey', isCorrect: false),
            QuizChoice(
              text: 'C) Experiment',
              isCorrect: true,
              explanation: 'C: Experiment. Only experiments manipulate an independent variable and control other factors, allowing causal conclusions. Correlational methods identify relationships but cannot rule out third variables or directionality.',
            ),
            QuizChoice(text: 'D) Naturalistic observation', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Negative reinforcement is best defined as:',
          choices: [
            QuizChoice(text: 'A) Punishment that decreases behavior', isCorrect: false),
            QuizChoice(
              text: 'B) Removing an aversive stimulus to increase behavior',
              isCorrect: true,
              explanation: 'B is correct. CRITICAL DISTINCTION: Negative reinforcement INCREASES behavior by REMOVING something unpleasant. It is NOT punishment. Example: taking Tylenol removes a headache (aversive stimulus), so you\'re more likely to take Tylenol again.',
            ),
            QuizChoice(text: 'C) Adding a pleasant stimulus to increase behavior', isCorrect: false),
            QuizChoice(text: 'D) Ignoring a behavior to decrease it', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 2: Biological Bases of Behavior ────────────────────────────────
  Unit(
    title: 'Biological Bases of Behavior',
    blocks: [
      DataTableBlock(
        headers: ['Neurotransmitter', 'Function', 'Imbalance'],
        rows: [
          ['Dopamine', 'Reward, pleasure, motor control', 'Low \u2192 Parkinson\u2019s; excess \u2192 schizophrenia'],
          ['Serotonin', 'Mood, sleep, appetite', 'Low \u2192 depression'],
          ['Norepinephrine', 'Alertness, arousal, fight-or-flight', 'Low \u2192 depression'],
          ['GABA', 'Inhibitory \u2014 calming', 'Low \u2192 anxiety, seizures'],
          ['Acetylcholine', 'Memory, muscle movement', 'Low \u2192 Alzheimer\u2019s'],
          ['Endorphins', 'Pain relief, pleasure', 'Released during exercise, laughing'],
        ],
      ),
      CardRowBlock([
        ContentCardData(
          title: 'Limbic System',
          body: 'Amygdala = fear/aggression/emotion. Hippocampus = NEW memory formation (not storage). Hypothalamus = hunger, thirst, body temperature, fight-or-flight trigger.',
        ),
        ContentCardData(
          title: 'Cerebral Cortex Lobes',
          body: 'Frontal = planning, judgment, personality, motor strip. Parietal = touch, spatial. Occipital = vision. Temporal = hearing, language (Wernicke\u2019s area).',
        ),
        ContentCardData(
          title: 'Brainstem',
          body: 'Medulla = breathing, heartbeat (survival). Pons = sleep, arousal. Cerebellum = balance, coordination, procedural memory.',
        ),
        ContentCardData(
          title: 'Language Areas',
          body: 'Broca\u2019s area (frontal lobe) = SPEECH PRODUCTION. Damage \u2192 Broca\u2019s aphasia (halting speech). Wernicke\u2019s area (temporal lobe) = language COMPREHENSION. Damage \u2192 Wernicke\u2019s aphasia (fluent but meaningless).',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'The hippocampus is most associated with:',
          choices: [
            QuizChoice(text: 'A) Fear and aggression', isCorrect: false),
            QuizChoice(
              text: 'B) Formation of new long-term memories',
              isCorrect: true,
              explanation: 'B is correct. The hippocampus converts short-term memories into long-term ones. Patient H.M. had his hippocampus removed and developed anterograde amnesia \u2014 he could not form new explicit memories. His old memories were intact (stored elsewhere in the cortex).',
            ),
            QuizChoice(text: 'C) Language production', isCorrect: false),
            QuizChoice(text: 'D) Motor coordination', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The \u2018fight-or-flight\u2019 response is controlled by the:',
          choices: [
            QuizChoice(text: 'A) Parasympathetic nervous system', isCorrect: false),
            QuizChoice(text: 'B) Somatic nervous system', isCorrect: false),
            QuizChoice(
              text: 'C) Sympathetic nervous system',
              isCorrect: true,
              explanation: 'C: Sympathetic nervous system. Sympathetic = fight-or-flight: increases heart rate, dilates pupils, inhibits digestion, releases adrenaline. Parasympathetic = rest-and-digest: reverses all these. An easy mnemonic: Sympathetic = \u2018Stress response.\u2019',
            ),
            QuizChoice(text: 'D) Central nervous system', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 3: Learning ─────────────────────────────────────────────────────
  Unit(
    title: 'Learning',
    blocks: [
      CalloutBlock(
        title: 'Classical Conditioning Terms',
        items: [
          'UCS (Unconditioned Stimulus): naturally causes response (food \u2192 salivation).',
          'UCR (Unconditioned Response): natural response to UCS (salivation).',
          'CS (Conditioned Stimulus): neutral stimulus paired with UCS (bell).',
          'CR (Conditioned Response): learned response to CS alone (salivation to bell).',
          'Extinction: CR weakens when CS presented without UCS repeatedly.',
          'Spontaneous Recovery: Extinguished CR reappears after rest period.',
          'Generalization: Responding to stimuli similar to the CS.',
          'Discrimination: Responding only to specific CS, not similar stimuli.',
        ],
      ),
      DataTableBlock(
        headers: ['Type', 'What Happens', 'Effect on Behavior', 'Example'],
        rows: [
          ['Positive Reinforcement', 'Add pleasant stimulus', 'INCREASES behavior', 'Gold star for good work'],
          ['Negative Reinforcement', 'REMOVE unpleasant stimulus', 'INCREASES behavior', 'Taking painkiller removes headache \u2192 take more'],
          ['Positive Punishment', 'Add unpleasant stimulus', 'DECREASES behavior', 'Speeding ticket'],
          ['Negative Punishment', 'REMOVE pleasant stimulus', 'DECREASES behavior', 'Take away phone for bad behavior'],
        ],
      ),
      CalloutBlock(
        title: 'Reinforcement Schedules',
        items: [
          'Fixed Ratio (FR): After set number of responses. High, steady rate. (Every 10 items = bonus.)',
          'Variable Ratio (VR): Unpredictable number of responses. HIGHEST rate, MOST resistant to extinction. (Slot machine \u2014 gambling).',
          'Fixed Interval (FI): After set time. Scalloped pattern \u2014 slow after reinforcement, speeds up near time. (Weekly paycheck.)',
          'Variable Interval (VI): Unpredictable time. Steady, moderate rate. (Checking email.)',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'A student cleans their room to stop their parent\u2019s nagging. This is an example of:',
          choices: [
            QuizChoice(text: 'A) Positive reinforcement', isCorrect: false),
            QuizChoice(
              text: 'B) Negative reinforcement',
              isCorrect: true,
              explanation: 'B: Negative reinforcement. An aversive stimulus (nagging) is REMOVED when the behavior occurs (cleaning), making the behavior more likely in the future. Negative = remove. Reinforcement = increase behavior.',
            ),
            QuizChoice(text: 'C) Positive punishment', isCorrect: false),
            QuizChoice(text: 'D) Negative punishment', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Which reinforcement schedule produces behavior most resistant to extinction?',
          choices: [
            QuizChoice(text: 'A) Fixed ratio', isCorrect: false),
            QuizChoice(text: 'B) Fixed interval', isCorrect: false),
            QuizChoice(
              text: 'C) Variable ratio',
              isCorrect: true,
              explanation: 'C: Variable ratio. Because reinforcement is unpredictable, the organism keeps responding hoping the next response will be reinforced \u2014 just like gambling. This is why slot machines are so addictive.',
            ),
            QuizChoice(text: 'D) Variable interval', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 4: Social Psychology ────────────────────────────────────────────
  Unit(
    title: 'Social Psychology',
    blocks: [
      DataTableBlock(
        headers: ['Study', 'Researcher', 'Key Finding', 'Concept'],
        rows: [
          ['Electric shock obedience', 'Milgram (1963)', '65% gave max shock when authority figure present', 'Obedience to authority overrides personal morality'],
          ['Stanford Prison Study', 'Zimbardo (1971)', 'Normal students rapidly adopted guard/prisoner roles', 'Situational power; deindividuation; role absorption'],
          ['Line conformity', 'Asch (1951)', '75% conformed to wrong group answer at least once', 'Normative social influence; social pressure'],
          ['Bystander effect', 'Darley & Latan\u00e9 (1968)', 'More bystanders \u2192 less likely anyone helps', 'Diffusion of responsibility; pluralistic ignorance'],
          ['Bobo Doll', 'Bandura (1961)', 'Children imitated aggressive adult model', 'Observational learning / social learning theory'],
        ],
      ),
      CardRowBlock([
        ContentCardData(
          title: 'Fundamental Attribution Error',
          body: 'Overestimating personality/disposition and underestimating situational factors when explaining OTHERS\u2019 behavior. We explain our own with situation.',
        ),
        ContentCardData(
          title: 'Cognitive Dissonance',
          body: 'Discomfort when beliefs and behavior conflict. We change beliefs to match behavior (post-purchase rationalization).',
        ),
        ContentCardData(
          title: 'Social Facilitation',
          body: 'Presence of others improves performance on simple/well-learned tasks but hurts performance on difficult/novel tasks.',
        ),
        ContentCardData(
          title: 'Groupthink',
          body: 'Group prioritizes harmony over critical thinking, leading to poor decisions. Symptoms: illusion of invulnerability, self-censorship.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'The Fundamental Attribution Error states that we tend to:',
          choices: [
            QuizChoice(text: 'A) Blame ourselves for others\u2019 failures', isCorrect: false),
            QuizChoice(text: 'B) Overestimate situational factors when explaining others\u2019 behavior', isCorrect: false),
            QuizChoice(
              text: 'C) Overestimate dispositional factors and underestimate situational factors when explaining OTHERS\u2019 behavior',
              isCorrect: true,
              explanation: 'C is correct. When we see someone trip, we think \u2018clumsy person\u2019 (disposition) rather than \u2018uneven sidewalk\u2019 (situation). For our own behavior, we do the opposite \u2014 we blame the situation. This is the actor-observer bias.',
            ),
            QuizChoice(text: 'D) Attribute our own failures to personality flaws', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 5: Disorders & Treatment ────────────────────────────────────────
  Unit(
    title: 'Disorders & Treatment',
    blocks: [
      DataTableBlock(
        headers: ['Disorder', 'Key Features', 'Treatment'],
        rows: [
          ['Major Depressive Disorder', 'Depressed mood/loss of interest for 2+ weeks, fatigue, feelings of worthlessness', 'CBT, SSRIs (fluoxetine/Prozac)'],
          ['Bipolar Disorder', 'Manic episodes (elevated mood, reduced sleep, grandiosity) + depressive episodes', 'Lithium, mood stabilizers'],
          ['Generalized Anxiety Disorder', 'Pervasive, uncontrollable worry about many things', 'CBT, benzodiazepines, SSRIs'],
          ['Schizophrenia', 'Positive symptoms: hallucinations, delusions, disorganized speech. Negative: flat affect, poverty of speech', 'Antipsychotics (block dopamine D2 receptors)'],
          ['PTSD', 'Flashbacks, nightmares, hyperarousal after trauma', 'CBT, EMDR, SSRIs'],
          ['Obsessive-Compulsive (OCD)', 'Intrusive obsessions + compulsive rituals to reduce anxiety', 'ERP (exposure + response prevention), SSRIs'],
          ['Antisocial Personality', 'No empathy, manipulative, disregard for others\u2019 rights', 'Difficult to treat; CBT may help'],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Schizophrenia is most associated with excess activity of which neurotransmitter?',
          choices: [
            QuizChoice(text: 'A) Serotonin', isCorrect: false),
            QuizChoice(text: 'B) GABA', isCorrect: false),
            QuizChoice(
              text: 'C) Dopamine',
              isCorrect: true,
              explanation: 'C: Dopamine. The dopamine hypothesis of schizophrenia holds that excess dopamine activity (especially in mesolimbic pathways) causes positive symptoms. Antipsychotic medications work by blocking dopamine D2 receptors.',
            ),
            QuizChoice(text: 'D) Acetylcholine', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Cognitive-Behavioral Therapy (CBT) primarily works by:',
          choices: [
            QuizChoice(text: 'A) Prescribing medication to correct neurotransmitter imbalances', isCorrect: false),
            QuizChoice(
              text: 'B) Identifying and challenging distorted thought patterns that lead to maladaptive behaviors',
              isCorrect: true,
              explanation: 'B is correct. CBT is based on the cognitive model: distorted thoughts (cognitive distortions like catastrophizing and all-or-nothing thinking) drive emotional distress and maladaptive behavior. By identifying and reframing these thoughts, symptoms improve.',
            ),
            QuizChoice(text: 'C) Exploring unconscious conflicts from childhood', isCorrect: false),
            QuizChoice(text: 'D) Using classical conditioning to replace negative responses', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'Negative reinforcement INCREASES behavior by REMOVING an aversive stimulus \u2014 NOT punishment',
        'Hippocampus = new memory FORMATION; amygdala = fear/emotion',
        'Variable ratio schedule = most resistant to extinction (slot machines)',
        'Dopamine low \u2192 Parkinson\u2019s; excess \u2192 schizophrenia. Serotonin low \u2192 depression.',
        'Fundamental Attribution Error: overestimate disposition, underestimate situation for OTHERS',
        'Milgram: 65% maximum shock \u2014 authority overrides morality',
        'Bystander effect: more witnesses = less helping (diffusion of responsibility)',
        'CBT = most evidence-based treatment for most anxiety and mood disorders',
        'Classical conditioning: UCS \u2192 UCR; CS+UCS \u2192 paired; CS alone \u2192 CR',
        'Broca\u2019s = speech production; Wernicke\u2019s = language comprehension',
      ]),
    ],
  ),
];
