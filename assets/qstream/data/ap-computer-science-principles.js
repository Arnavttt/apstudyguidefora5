/**
 * Five & A+ — AI Question Stream · Course data: AP Computer Science Principles
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE shape (assets/qstream/data/ap-biology.js).
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Code questions use AP CSP pseudocode style (DISPLAY, REPEAT, IF).
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-computer-science-principles',
    displayName: 'AP Computer Science Principles',
    description: 'A broad introduction to computing built around creative development, data, algorithms and programming, computer systems and networks, and the impact of computing on society.',
    category: 'computer-science',
    allowedQuestionTypes: ['mcq', 'short-answer', 'coding', 'code-tracing', 'data-analysis', 'stimulus-based'],
    defaultQuestionTypes: ['mcq', 'code-tracing', 'data-analysis'],
    skills: [
      'computational solution design',
      'algorithms and program development',
      'abstraction',
      'data analysis',
      'computing systems and networks',
      'impact of computing'
    ],
    bigIdeas: ['Creative Development', 'Data', 'Algorithms and Programming', 'Computer Systems and Networks', 'Impact of Computing'],
    units: [
      { id: 'unit-1', name: 'Creative Development', examWeight: '10-13%', description: 'Collaboration, program design, development processes, and identifying and correcting errors.',
        topics: [
          { id: 'collaboration', name: 'Collaboration', description: 'Working effectively in teams and incorporating multiple perspectives during development.', skills: ['computational solution design'] },
          { id: 'program-design-development', name: 'Program Design and Development', description: 'Investigating, designing, and iteratively refining a program to meet a purpose.', skills: ['computational solution design'] },
          { id: 'identifying-correcting-errors', name: 'Identifying and Correcting Errors', description: 'Logic, syntax, and runtime errors and the testing strategies that reveal them.', skills: ['algorithms and program development'] }
        ] },
      { id: 'unit-2', name: 'Data', examWeight: '17-22%', description: 'Binary representation, data compression, and extracting information from data.',
        topics: [
          { id: 'binary-representation', name: 'Binary Representation', description: 'Representing numbers, text, and other information using bits.', skills: ['abstraction'] },
          { id: 'data-compression', name: 'Data Compression', description: 'Lossless and lossy techniques for reducing the size of data.', skills: ['abstraction'] },
          { id: 'extracting-information', name: 'Extracting Information from Data', description: 'Using filtering, aggregation, and visualization to find patterns and answer questions.', skills: ['data analysis'] }
        ] },
      { id: 'unit-3', name: 'Algorithms and Programming', examWeight: '30-35%', description: 'Variables, control structures, lists, procedures, and algorithm efficiency.',
        topics: [
          { id: 'variables-assignment', name: 'Variables and Assignment', description: 'Storing and updating values, and tracing how variables change.', skills: ['algorithms and program development'] },
          { id: 'control-structures', name: 'Selection and Iteration', description: 'Conditional statements and loops that control program flow.', skills: ['algorithms and program development'] },
          { id: 'lists', name: 'Lists', description: 'Storing collections of values and traversing them with loops.', skills: ['algorithms and program development'] },
          { id: 'procedures-abstraction', name: 'Procedures and Abstraction', description: 'Defining procedures with parameters and return values to manage complexity.', skills: ['abstraction'] }
        ] },
      { id: 'unit-4', name: 'Computer Systems and Networks', examWeight: '11-15%', description: 'The Internet, fault tolerance, and parallel and distributed computing.',
        topics: [
          { id: 'internet-fundamentals', name: 'The Internet', description: 'Protocols, IP addressing, packets, and routing across networks.', skills: ['computing systems and networks'] },
          { id: 'fault-tolerance', name: 'Fault Tolerance', description: 'Redundancy and routing that let networks keep working when parts fail.', skills: ['computing systems and networks'] },
          { id: 'parallel-distributed', name: 'Parallel and Distributed Computing', description: 'Splitting work across processors or machines and analyzing speedup.', skills: ['computing systems and networks'] }
        ] },
      { id: 'unit-5', name: 'Impact of Computing', examWeight: '21-26%', description: 'Beneficial and harmful effects, the digital divide, bias, and safe computing.',
        topics: [
          { id: 'beneficial-harmful-effects', name: 'Beneficial and Harmful Effects', description: 'Evaluating intended and unintended consequences of computing innovations.', skills: ['impact of computing'] },
          { id: 'digital-divide-bias', name: 'Digital Divide and Bias', description: 'Unequal access to computing and bias embedded in data and algorithms.', skills: ['impact of computing'] },
          { id: 'safe-computing', name: 'Safe Computing', description: 'Privacy, personally identifiable information, and protecting against cyber threats.', skills: ['impact of computing'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Create Performance Task', questionTypes: ['coding', 'short-answer'], weight: '30%', notes: 'Student-developed program with written responses, completed during the course.' },
        { name: 'End-of-Course Multiple Choice Exam', questionTypes: ['mcq', 'code-tracing', 'data-analysis', 'stimulus-based'], timingMinutes: 120, weight: '70%', notes: '70 single-select and multi-select questions, some referencing reading-passage or pseudocode stimuli.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-computer-science-principles-u2-binary-representation-mcq-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-2', unitName: 'Data', topicId: 'binary-representation', topicName: 'Binary Representation',
      skill: 'abstraction', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'A single bit can represent how many distinct values, and a sequence of 3 bits can represent how many distinct values?',
      answerChoices: [
        { id: 'A', text: '1 value and 3 values' },
        { id: 'B', text: '2 values and 6 values' },
        { id: 'C', text: '2 values and 8 values' },
        { id: 'D', text: '3 values and 9 values' }
      ],
      correctAnswer: 'C',
      explanation: 'Each bit has 2 possible states (0 or 1). With n bits there are 2^n combinations, so 3 bits give 2^3 = 8 distinct values.',
      distractorRationales: {
        A: 'A bit has two states, not one, and combinations grow as a power of 2, not by adding.',
        B: 'Bits combine multiplicatively (2 × 2 × 2 = 8), not by multiplying the bit count by 2.',
        C: '',
        D: 'A bit represents 2 values, not 3, so 3 bits give 2^3 = 8, not 9.'
      },
      tags: ['binary', 'bits', 'representation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-principles-u4-internet-fundamentals-mcq-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-4', unitName: 'Computer Systems and Networks', topicId: 'internet-fundamentals', topicName: 'The Internet',
      skill: 'computing systems and networks', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'When a large file is sent across the Internet, it is broken into smaller units that are routed independently and reassembled at the destination. What are these units called?',
      answerChoices: [
        { id: 'A', text: 'Packets' },
        { id: 'B', text: 'Protocols' },
        { id: 'C', text: 'Pixels' },
        { id: 'D', text: 'Servers' }
      ],
      correctAnswer: 'A',
      explanation: 'Data sent over the Internet is divided into packets. Each packet carries part of the data plus addressing information, can travel a different path, and is reassembled in order at the destination.',
      distractorRationales: {
        A: '',
        B: 'A protocol is an agreed set of rules for communication, not a unit of data.',
        C: 'Pixels are the smallest elements of a digital image, unrelated to network transmission.',
        D: 'A server is a computer that provides resources; it is not a unit of transmitted data.'
      },
      tags: ['internet', 'packets', 'networks'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-principles-u3-control-structures-mcq-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-3', unitName: 'Algorithms and Programming', topicId: 'control-structures', topicName: 'Selection and Iteration',
      skill: 'algorithms and program development', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      prompt: 'In a program, a block of code should run only when a value stored in score is at least 90. Which control structure is most appropriate?',
      answerChoices: [
        { id: 'A', text: 'A REPEAT loop that runs a fixed number of times' },
        { id: 'B', text: 'An IF statement that tests the condition score >= 90' },
        { id: 'C', text: 'A procedure with two parameters' },
        { id: 'D', text: 'A list that stores every score' }
      ],
      correctAnswer: 'B',
      explanation: 'Running code only when a condition is true is selection, which is expressed with an IF statement. Here the condition score >= 90 decides whether the block executes.',
      distractorRationales: {
        A: 'A REPEAT loop performs iteration (repetition), not a single conditional decision.',
        B: '',
        C: 'A procedure groups reusable code but does not by itself decide whether code runs based on a condition.',
        D: 'A list stores data; it does not control which code runs.'
      },
      tags: ['selection', 'if-statement', 'control-flow'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-computer-science-principles-u3-control-structures-trace-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-3', unitName: 'Algorithms and Programming', topicId: 'control-structures', topicName: 'Selection and Iteration',
      skill: 'algorithms and program development', questionType: 'code-tracing', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 120,
      prompt: 'Trace the AP CSP pseudocode below and give the exact output, with each displayed value on its own line.',
      codeBlock: 'total <- 0\nREPEAT 4 TIMES\n{\n  total <- total + 2\n  DISPLAY(total)\n}',
      correctAnswer: '2\n4\n6\n8',
      explanation: 'total starts at 0. Each of the 4 iterations adds 2 to total and then displays it: 2, then 4, then 6, then 8. REPEAT 4 TIMES runs the block exactly four times.',
      tags: ['code-tracing', 'repeat', 'loops'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-principles-u3-lists-trace-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-3', unitName: 'Algorithms and Programming', topicId: 'lists', topicName: 'Lists',
      skill: 'algorithms and program development', questionType: 'code-tracing', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 130,
      prompt: 'The list scores uses 1-based indexing, as in AP CSP. Trace the pseudocode and give the exact output.',
      codeBlock: 'scores <- [5, 8, 3, 10]\nbig <- scores[1]\nFOR EACH s IN scores\n{\n  IF (s > big)\n  {\n    big <- s\n  }\n}\nDISPLAY(big)',
      correctAnswer: '10',
      explanation: 'big starts at the first element, 5. The loop compares each value: 8 > 5 sets big to 8; 3 is not greater; 10 > 8 sets big to 10. The final DISPLAY shows the maximum, 10.',
      tags: ['lists', 'traversal', 'maximum'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-principles-u2-data-compression-mcq-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-2', unitName: 'Data', topicId: 'data-compression', topicName: 'Data Compression',
      skill: 'abstraction', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'A team must archive legal documents so that the original text can be recovered exactly, character for character. Which compression approach should they choose and why?',
      answerChoices: [
        { id: 'A', text: 'Lossy compression, because it always produces the smallest possible files' },
        { id: 'B', text: 'Lossless compression, because the exact original data can be fully reconstructed' },
        { id: 'C', text: 'Lossy compression, because text can never be compressed without loss' },
        { id: 'D', text: 'Either approach, because both reconstruct the original data exactly' }
      ],
      correctAnswer: 'B',
      explanation: 'Lossless compression reduces size while allowing the exact original to be restored, which is required when no information may be lost. Lossy compression discards detail and cannot perfectly reconstruct the original.',
      distractorRationales: {
        A: 'Smaller size does not matter if the original cannot be recovered exactly, which lossy compression cannot guarantee.',
        B: '',
        C: 'Text is routinely compressed losslessly (for example with run-length or dictionary methods), so this claim is false.',
        D: 'Only lossless compression reconstructs the original exactly; lossy compression does not.'
      },
      tags: ['compression', 'lossless', 'lossy'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-computer-science-principles-u3-procedures-abstraction-trace-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-3', unitName: 'Algorithms and Programming', topicId: 'procedures-abstraction', topicName: 'Procedures and Abstraction',
      skill: 'abstraction', questionType: 'code-tracing', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 160,
      prompt: 'Trace the AP CSP pseudocode. The procedure mystery returns a value. Give the exact output, one value per line.',
      codeBlock: 'PROCEDURE mystery(n)\n{\n  result <- 1\n  REPEAT n TIMES\n  {\n    result <- result * 2\n  }\n  RETURN(result)\n}\nDISPLAY(mystery(3))\nDISPLAY(mystery(0))',
      correctAnswer: '8\n1',
      explanation: 'mystery(n) computes 2 raised to the n by doubling result n times starting from 1. For n = 3: 1→2→4→8, so it returns 8. For n = 0 the loop body never runs, so result stays 1 and it returns 1.',
      tags: ['procedures', 'return-values', 'code-tracing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-principles-u4-parallel-distributed-mcq-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-4', unitName: 'Computer Systems and Networks', topicId: 'parallel-distributed', topicName: 'Parallel and Distributed Computing',
      skill: 'computing systems and networks', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 180,
      prompt: 'A task takes 60 seconds when run on a single processor. It is made of a part that must run sequentially and takes 20 seconds and a part that can be split perfectly across processors and takes 40 seconds on one processor. If the parallel part is divided among 4 processors running at the same time, what is the shortest possible total time, and what limits further speedup?',
      answerChoices: [
        { id: 'A', text: '15 seconds; the whole task scales evenly with the number of processors' },
        { id: 'B', text: '30 seconds; the sequential 20-second part cannot be sped up by adding processors' },
        { id: 'C', text: '20 seconds; the parallel part disappears entirely with 4 processors' },
        { id: 'D', text: '10 seconds; both parts are divided by the number of processors' }
      ],
      correctAnswer: 'B',
      explanation: 'Only the parallel part is shortened: 40 seconds split across 4 processors is 40/4 = 10 seconds. The sequential 20-second part is unchanged, so total time is 20 + 10 = 30 seconds. The sequential portion sets a floor on how much speedup additional processors can provide.',
      distractorRationales: {
        A: 'The sequential part does not scale with processors, so the total does not simply equal 60/4 = 15.',
        B: '',
        C: 'The parallel part is reduced to 10 seconds, not eliminated, and the 20-second sequential part remains.',
        D: 'The sequential 20-second part cannot be divided among processors, so 10 seconds is not achievable.'
      },
      tags: ['parallel-computing', 'speedup', 'sequential'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: data-analysis with rubric ───────────────────────────────────
    {
      id: 'ap-computer-science-principles-u2-extracting-information-data-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-2', unitName: 'Data', topicId: 'extracting-information', topicName: 'Extracting Information from Data',
      skill: 'data analysis', questionType: 'data-analysis', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 300,
      prompt: 'A school app logs how many minutes students spent reading each weekday last week, shown in the table. (a) Identify the day with the highest total reading time. (b) Describe one trend you can extract from the data. (c) Explain one additional column of data the school could collect to draw a more reliable conclusion about reading habits.',
      dataTable: { columns: ['Day', 'Total minutes read'], rows: [['Monday', '420'], ['Tuesday', '510'], ['Wednesday', '480'], ['Thursday', '530'], ['Friday', '300']] },
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Reading the table, Thursday has the highest total (530 minutes) and Friday the lowest (300). A defensible trend is that reading time rises midweek and drops sharply on Friday. More context (such as number of students logged in each day) would make per-student conclusions more reliable.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Correctly identifies Thursday (530 minutes) as the highest day.', evidenceRequired: 'Names Thursday and/or 530 minutes.' },
        { id: 'r2', pointValue: 1, criterion: 'Describes a valid trend supported by the data.', evidenceRequired: 'States a pattern such as midweek peak or sharp Friday drop.' },
        { id: 'r3', pointValue: 1, criterion: 'Proposes a relevant additional column and justifies how it improves the conclusion.', evidenceRequired: 'Names useful data (e.g., number of active students) and explains the benefit.' }
      ],
      modelAnswer: '(a) Thursday has the highest total reading time at 530 minutes. (b) One trend is that reading time builds through the middle of the week (Monday 420, peaking Thursday at 530) and then drops sharply on Friday to 300 minutes, suggesting engagement falls before the weekend. (c) The school could log the number of students who were active each day. Total minutes alone can be misleading because a high total might just mean more students logged in; dividing total minutes by active students would give average minutes per student and support a more reliable conclusion about individual reading habits.',
      tags: ['data-analysis', 'trends', 'extracting-information'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── EXTRA: stimulus-based written + easy MCQ for coverage ─────────────────
    {
      id: 'ap-computer-science-principles-u5-safe-computing-stimulus-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-5', unitName: 'Impact of Computing', topicId: 'safe-computing', topicName: 'Safe Computing',
      skill: 'impact of computing', questionType: 'stimulus-based', difficulty: 'medium',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 240,
      prompt: 'A free mobile game asks players to sign in with their email, then requests permission to access their contacts, photos, and precise location, none of which the game needs to function. (a) Identify one privacy risk this creates for the user. (b) Explain one step the user could take to reduce the risk while still playing the game.',
      stimulus: 'App permission screen: "Allow GameApp to access your Contacts, Photos, and Precise Location?" The game is a single-player puzzle that runs entirely on the device.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Collecting personally identifiable information and location data that an app does not need increases the chance that sensitive data is misused, sold, or exposed in a breach. Granting only the minimum necessary permissions limits that exposure.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies a specific privacy risk tied to unnecessary data collection.', evidenceRequired: 'Names a risk such as location tracking, data being sold, or breach exposure of PII.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains a concrete protective step.', evidenceRequired: 'Describes denying permissions, adjusting settings, or limiting shared information.' }
      ],
      modelAnswer: '(a) Because the puzzle runs entirely on the device, the requested contacts, photos, and precise location are unnecessary, so collecting them creates a privacy risk: the developer could track the player\'s movements or sell their personal information, and a data breach could expose this personally identifiable information. (b) The user can deny the contacts, photos, and location permissions in the app or device settings; since the game does not need them to run, the player can still play while sharing far less personal data.',
      tags: ['safe-computing', 'privacy', 'permissions', 'pii'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-principles-u1-identifying-correcting-errors-mcq-001', courseId: 'ap-computer-science-principles', courseName: 'AP Computer Science Principles',
      unitId: 'unit-1', unitName: 'Creative Development', topicId: 'identifying-correcting-errors', topicName: 'Identifying and Correcting Errors',
      skill: 'algorithms and program development', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      prompt: 'A program runs without crashing but always reports the average of a list as too low. The code adds the values correctly but divides by one more than the number of values. What type of error is this?',
      answerChoices: [
        { id: 'A', text: 'A syntax error' },
        { id: 'B', text: 'A logic error' },
        { id: 'C', text: 'An error that prevents the program from running at all' },
        { id: 'D', text: 'A hardware failure' }
      ],
      correctAnswer: 'B',
      explanation: 'The program runs but produces incorrect results because the algorithm itself is wrong (dividing by the wrong count). A flaw that yields wrong output without stopping the program is a logic error.',
      distractorRationales: {
        A: 'A syntax error violates the language rules and would prevent the program from running; here it runs fine.',
        B: '',
        C: 'The program does run; it simply returns an incorrect value, which describes a logic error.',
        D: 'The fault is in the program\'s logic, not in the physical hardware.'
      },
      tags: ['debugging', 'logic-error', 'testing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
