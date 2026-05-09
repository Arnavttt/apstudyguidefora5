// lib/data/content/apcsp_content.dart
//
// AP Computer Science Principles — 5 units transcribed from apcsp.html
// Accent: #f97316 (orange)

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> apcspUnits = [
  // ── Unit 1: 5 Big Ideas Overview ─────────────────────────────────────────
  Unit(
    title: '5 Big Ideas Overview',
    blocks: [
      DataTableBlock(
        headers: ['Big Idea', 'Code', 'What It Covers'],
        rows: [
          ['Creative Development', 'CRD', 'Collaboration, iterative design, documenting programs, computational artifacts'],
          ['Data', 'DAT', 'Binary representation, compression, metadata, data collection & analysis'],
          ['Algorithms & Programming', 'AAP', 'Variables, conditionals, loops, procedures, lists, algorithms'],
          ['Computing Systems & Networks', 'CSN', 'Hardware, internet protocols, redundancy, fault tolerance'],
          ['Impact of Computing', 'IOC', 'Beneficial/harmful effects, digital divide, cybersecurity, privacy, algorithmic bias'],
        ],
      ),
      CalloutBlock(
        title: 'Exam Format (2025)',
        items: [
          'Section I: 70 MCQ \u2014 60 single-select, 10 multi-select. 120 min.',
          'Section II: Create Performance Task (Create PT) \u2014 programming project submitted to College Board before exam.',
          'The Create PT has a written response component scored on a 6-row rubric.',
          'Through-Course Assessment: Create PT = 30% of score. End-of-course exam = 70%.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Which Big Idea covers algorithmic bias and the digital divide?',
          choices: [
            QuizChoice(text: 'A) DAT', isCorrect: false),
            QuizChoice(text: 'B) AAP', isCorrect: false),
            QuizChoice(
              text: 'C) IOC',
              isCorrect: true,
              explanation: 'C: IOC (Impact of Computing). The Impact of Computing Big Idea addresses both the beneficial and harmful social effects of computing, including: digital divide, algorithmic bias, privacy, surveillance, cybersecurity threats, intellectual property, and the environmental impact of computing.',
            ),
            QuizChoice(text: 'D) CSN', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 2: Binary, Compression & Data Analysis ──────────────────────────
  Unit(
    title: 'Binary, Compression & Data Analysis',
    blocks: [
      CodeBlock([
        CodeSpan('Binary (Base-2):\n', kind: CodeSpanKind.highlight),
        CodeSpan('Each position: 2\u2077  2\u2076  2\u2075  2\u2074  2\u00b3  2\u00b2  2\u00b9  2\u2070\n'),
        CodeSpan('Value:          128  64   32   16   8    4    2    1\n'),
        CodeSpan('\n'),
        CodeSpan('Example: 10110101 = 128+32+16+4+1 = 181\n'),
        CodeSpan('\n'),
        CodeSpan('Hexadecimal (Base-16):', kind: CodeSpanKind.highlight),
        CodeSpan(' 0-9, A=10, B=11, C=12, D=13, E=14, F=15\n'),
        CodeSpan('Each hex digit = 4 binary digits\n'),
        CodeSpan('FF = 1111 1111 = 255\n'),
        CodeSpan('\n'),
        CodeSpan('Bits and Bytes:\n', kind: CodeSpanKind.highlight),
        CodeSpan('1 byte = 8 bits\n'),
        CodeSpan('1 KB = 1,024 bytes \u2248 10\u00b3\n'),
        CodeSpan('1 MB = 1,024 KB \u2248 10\u2076\n'),
        CodeSpan('1 GB = 1,024 MB \u2248 10\u2079\n'),
        CodeSpan('\n'),
        CodeSpan('Overflow:', kind: CodeSpanKind.highlight),
        CodeSpan('  If a value exceeds what n bits can store, overflow error occurs.\n'),
        CodeSpan('With 8 bits: max unsigned = 255. 256 \u2192 wraps to 0.\n'),
      ]),
      CalloutBlock(
        title: 'Data Compression',
        items: [
          'Lossless: No data lost. Original can be perfectly reconstructed. Used for text, code, ZIP files. (Run-length encoding: AAABBCC \u2192 3A2B2C).',
          'Lossy: Some data permanently removed. Smaller file, cannot recover original. Used for images (JPEG), audio (MP3), video (MP4). Human perception exploited \u2014 removes data we don\u2019t notice.',
          'Metadata: Data about data. A photo\u2019s metadata: date, GPS location, camera model, resolution. Metadata can reveal more than the data itself (NSA phone metadata controversy).',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Convert binary 1101 to decimal.',
          choices: [
            QuizChoice(text: 'A) 11', isCorrect: false),
            QuizChoice(
              text: 'B) 13',
              isCorrect: true,
              explanation: 'B: 13. 1101: 1\u00d78 + 1\u00d74 + 0\u00d72 + 1\u00d71 = 8+4+0+1 = 13. Always write out the place values: 8,4,2,1 for a 4-bit number.',
            ),
            QuizChoice(text: 'C) 14', isCorrect: false),
            QuizChoice(text: 'D) 15', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Which is an example of LOSSY compression?',
          choices: [
            QuizChoice(text: 'A) ZIP file', isCorrect: false),
            QuizChoice(text: 'B) Text file encoding', isCorrect: false),
            QuizChoice(
              text: 'C) MP3 audio compression',
              isCorrect: true,
              explanation: 'C: MP3. MP3 permanently removes audio data that human hearing is less sensitive to (high frequencies, sounds masked by louder sounds). The original audio cannot be recovered. ZIP (A) is lossless \u2014 your files are perfectly recovered.',
            ),
            QuizChoice(text: 'D) Run-length encoding', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 3: AP Pseudocode Reference ──────────────────────────────────────
  Unit(
    title: 'AP Pseudocode Reference',
    blocks: [
      CodeBlock([
        CodeSpan('// Variables & Assignment\n', kind: CodeSpanKind.comment),
        CodeSpan('x', kind: CodeSpanKind.keyword),
        CodeSpan(' \u2190 5                    ', kind: CodeSpanKind.plain),
        CodeSpan('// Assign value 5 to x\n', kind: CodeSpanKind.comment),
        CodeSpan('a', kind: CodeSpanKind.keyword),
        CodeSpan(' \u2190 ', kind: CodeSpanKind.plain),
        CodeSpan('b', kind: CodeSpanKind.keyword),
        CodeSpan('                    ', kind: CodeSpanKind.plain),
        CodeSpan('// Assign value of b to a\n', kind: CodeSpanKind.comment),
        CodeSpan('\n'),
        CodeSpan('// Display\n', kind: CodeSpanKind.comment),
        CodeSpan('DISPLAY', kind: CodeSpanKind.highlight),
        CodeSpan('(expression)       ', kind: CodeSpanKind.plain),
        CodeSpan('// Print to screen\n', kind: CodeSpanKind.comment),
        CodeSpan('INPUT', kind: CodeSpanKind.highlight),
        CodeSpan('()                   ', kind: CodeSpanKind.plain),
        CodeSpan('// Read user input\n', kind: CodeSpanKind.comment),
        CodeSpan('\n'),
        CodeSpan('// Conditionals\n', kind: CodeSpanKind.comment),
        CodeSpan('IF', kind: CodeSpanKind.keyword),
        CodeSpan(' (condition)\n'),
        CodeSpan('{\n'),
        CodeSpan('  <statements>\n'),
        CodeSpan('}\n'),
        CodeSpan('IF', kind: CodeSpanKind.keyword),
        CodeSpan(' (condition)\n'),
        CodeSpan('{\n'),
        CodeSpan('  <statements>\n'),
        CodeSpan('}\n'),
        CodeSpan('ELSE\n', kind: CodeSpanKind.keyword),
        CodeSpan('{\n'),
        CodeSpan('  <statements>\n'),
        CodeSpan('}\n'),
        CodeSpan('\n'),
        CodeSpan('// Loops\n', kind: CodeSpanKind.comment),
        CodeSpan('REPEAT', kind: CodeSpanKind.keyword),
        CodeSpan(' n '),
        CodeSpan('TIMES\n', kind: CodeSpanKind.keyword),
        CodeSpan('{\n'),
        CodeSpan('  <statements>\n'),
        CodeSpan('}\n'),
        CodeSpan('REPEAT UNTIL', kind: CodeSpanKind.keyword),
        CodeSpan(' (condition)\n'),
        CodeSpan('{\n'),
        CodeSpan('  <statements>\n'),
        CodeSpan('}\n'),
        CodeSpan('\n'),
        CodeSpan('// Lists \u2014 1-INDEXED (index starts at 1, NOT 0!)\n', kind: CodeSpanKind.comment),
        CodeSpan('myList \u2190 [1, 2, 3]\n'),
        CodeSpan('myList[1]              ', kind: CodeSpanKind.plain),
        CodeSpan('// First element = 1 (NOT index 0!)\n', kind: CodeSpanKind.comment),
        CodeSpan('LENGTH', kind: CodeSpanKind.highlight),
        CodeSpan('(myList)         ', kind: CodeSpanKind.plain),
        CodeSpan('// Number of elements\n', kind: CodeSpanKind.comment),
        CodeSpan('APPEND', kind: CodeSpanKind.highlight),
        CodeSpan('(myList, val)    ', kind: CodeSpanKind.plain),
        CodeSpan('// Add val to end\n', kind: CodeSpanKind.comment),
        CodeSpan('\n'),
        CodeSpan('// Procedures (Functions)\n', kind: CodeSpanKind.comment),
        CodeSpan('PROCEDURE', kind: CodeSpanKind.keyword),
        CodeSpan(' myProc(param1, param2)\n'),
        CodeSpan('{\n'),
        CodeSpan('  <statements>\n'),
        CodeSpan('  '),
        CodeSpan('RETURN', kind: CodeSpanKind.keyword),
        CodeSpan(' value\n'),
        CodeSpan('}\n'),
        CodeSpan('result \u2190 myProc(arg1, arg2)\n'),
      ]),
      WarnBlock(
        title: 'AP CSP List Trap \u2014 1-Indexed!',
        items: [
          'AP Pseudocode lists start at index 1, NOT 0.',
          'myList \u2190 [10, 20, 30] \u2192 myList[1] = 10, myList[2] = 20, myList[3] = 30.',
          'This is the #1 pseudocode mistake on the AP exam \u2014 especially if you know Python (0-indexed) or Java (0-indexed).',
          'LENGTH(myList) returns the count of elements. Last element = myList[LENGTH(myList)].',
        ],
      ),
      CardRowBlock([
        ContentCardData(
          title: 'Linear (Sequential) Search',
          body: 'Check each element one by one. Works on ANY list. O(n) worst case. Simple but slow for large lists.',
        ),
        ContentCardData(
          title: 'Binary Search',
          body: 'Only works on SORTED lists. Compare to middle, eliminate half. O(log n). Much faster \u2014 but requires sorted data.',
        ),
        ContentCardData(
          title: 'Undecidable Problems',
          body: 'Some problems cannot be solved by any algorithm \u2014 halting problem. No matter how much computing power, there is no algorithm that always correctly answers \u2018will this program halt?\u2019',
        ),
        ContentCardData(
          title: 'Heuristics',
          body: 'Approximate solutions for problems where exact solution is impractical. Not guaranteed optimal, but good enough in reasonable time. Used in: GPS routing, chess AI, spam filters.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'In AP Pseudocode, myList \u2190 [5, 10, 15, 20]. What is myList[3]?',
          choices: [
            QuizChoice(text: 'A) 5', isCorrect: false),
            QuizChoice(text: 'B) 10', isCorrect: false),
            QuizChoice(
              text: 'C) 15',
              isCorrect: true,
              explanation: 'C: 15. AP Pseudocode is 1-indexed. myList[1]=5, myList[2]=10, myList[3]=15, myList[4]=20. This trips up students who know Python (0-indexed). On the exam, always remember: AP Pseudocode starts at 1.',
            ),
            QuizChoice(text: 'D) 20', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Binary search REQUIRES that the data be:',
          choices: [
            QuizChoice(text: 'A) Stored in a 2D array', isCorrect: false),
            QuizChoice(
              text: 'B) Sorted',
              isCorrect: true,
              explanation: 'B: Sorted. Binary search works by comparing the target to the middle element and eliminating half the list. This only works if the data is sorted \u2014 otherwise you can\u2019t know which half to keep.',
            ),
            QuizChoice(text: 'C) Numerical', isCorrect: false),
            QuizChoice(text: 'D) Larger than 100 elements', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 4: Internet & Protocols ─────────────────────────────────────────
  Unit(
    title: 'Internet & Protocols',
    blocks: [
      DataTableBlock(
        headers: ['Concept', 'Definition', 'Key Detail'],
        rows: [
          ['IP Address', 'Unique identifier for every device on a network', 'IPv4: 32-bit (4 octets, e.g. 192.168.1.1). IPv6: 128-bit (more addresses)'],
          ['DNS', 'Domain Name System \u2014 translates URLs to IP addresses', '\u2018Phone book of the internet\u2019: google.com \u2192 142.250.80.46'],
          ['HTTP/HTTPS', 'Protocol for web communication', 'HTTPS uses TLS/SSL encryption. HTTP is unencrypted.'],
          ['TCP/IP', 'Transmission Control Protocol / Internet Protocol', 'TCP ensures reliable, ordered delivery. Packets may take different routes.'],
          ['UDP', 'User Datagram Protocol', 'Faster but unreliable (no delivery guarantee). Used for video streaming, gaming.'],
          ['Packet Switching', 'Data split into packets, sent independently, reassembled', 'Each packet may take a different path. More efficient and fault-tolerant than circuit switching.'],
          ['Redundancy', 'Multiple paths between nodes in a network', 'If one path fails, data reroutes. The internet was designed for this resilience.'],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Why does packet switching make the internet more fault-tolerant than circuit switching?',
          choices: [
            QuizChoice(text: 'A) Packets are smaller than circuits', isCorrect: false),
            QuizChoice(
              text: 'B) Packets can take multiple routes, so if one path fails, data can reroute through alternative paths',
              isCorrect: true,
              explanation: 'B is correct. In circuit switching (like old telephone calls), one dedicated path is established for the entire communication \u2014 if it breaks, the call drops. Packet switching breaks data into independently routed packets, so network failures only affect some packets, which can be rerouted or re-requested.',
            ),
            QuizChoice(text: 'C) Packet switching is faster', isCorrect: false),
            QuizChoice(text: 'D) Packets are encrypted by default', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 5: Create PT \u2014 6-Row Rubric ────────────────────────────────────────
  Unit(
    title: 'Create PT \u2014 Performance Task',
    blocks: [
      CalloutBlock(
        title: 'What You Submit',
        items: [
          '1. Program code \u2014 your program file(s). Must include at least one procedure you wrote.',
          '2. Video \u2014 1 minute max showing your program running and its input/output.',
          '3. Written responses \u2014 4 prompts (3A\u20133D) submitted in the AP Digital Portfolio.',
        ],
      ),
      RubricBoxBlock([
        RubricRow(
          label: 'Row 1: Program Purpose & Function',
          points: '1 pt',
          description: 'Describe what the program does (purpose), what it accepts as input, and what it produces as output. Reference the VIDEO.',
        ),
        RubricRow(
          label: 'Row 2: Data Abstraction',
          points: '1 pt',
          description: 'Show a LIST being used to store/access data. Explain how the list stores multiple values and why a list was necessary vs. individual variables.',
        ),
        RubricRow(
          label: 'Row 3: Managing Complexity',
          points: '1 pt',
          description: 'Explain how the list MANAGES COMPLEXITY \u2014 how it would be more complex without the list. Don\u2019t just say it stores data \u2014 explain what would change in the code without it.',
        ),
        RubricRow(
          label: 'Row 4: Procedural Abstraction',
          points: '1 pt',
          description: 'Show a PROCEDURE with a parameter that affects functionality. Explain what the procedure does, what the parameter represents, and how it\u2019s called.',
        ),
        RubricRow(
          label: 'Row 5: Algorithm Implementation',
          points: '1 pt',
          description: 'Show an ALGORITHM inside your procedure that includes: SEQUENCING + SELECTION (if/conditional) + ITERATION (loop). Trace through the algorithm with a specific input.',
        ),
        RubricRow(
          label: 'Row 6: Testing',
          points: '1 pt',
          description: 'Describe TWO DIFFERENT test cases with specific inputs, expected outputs, and actual outputs. Tests should check different conditions (e.g., edge case vs. normal case).',
        ),
      ]),
      WarnBlock(
        title: 'Create PT Mistakes That Cost Points',
        items: [
          'Row 3: Do NOT just say \u201cthe list stores multiple values.\u201d You must explain what would be more complex WITHOUT the list.',
          'Row 5: Your algorithm MUST have all three: sequencing AND selection AND iteration. Missing any one = 0 points.',
          'Row 6: Two tests must be meaningfully different \u2014 not the same scenario with slightly different numbers.',
          'Do NOT use code you didn\u2019t write \u2014 libraries, frameworks, or partner code as your procedure.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'For Row 3 (Managing Complexity), the strongest response explains that the list:',
          choices: [
            QuizChoice(text: 'A) Makes the code look cleaner', isCorrect: false),
            QuizChoice(text: 'B) Stores multiple values', isCorrect: false),
            QuizChoice(
              text: 'C) Reduces code complexity \u2014 without it, the program would require multiple separate variables or conditional chains, making the code harder to maintain and expand',
              isCorrect: true,
              explanation: 'C is correct. Row 3 is specifically about MANAGING COMPLEXITY \u2014 not just using a list. The rubric requires you to explain how the code would be MORE COMPLEX without the list. \u2018I would need 20 separate variables instead of 1 list, and my loop would need to be rewritten for each one\u2019 is the kind of explanation that earns the point.',
            ),
            QuizChoice(text: 'D) Is required by the assignment', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'AP Pseudocode lists are 1-INDEXED \u2014 myList[1] is the first element',
        'Binary = base 2. Hex = base 16 (A=10 through F=15). Each hex digit = 4 bits.',
        'Lossless = perfect recovery (ZIP, PNG). Lossy = data permanently removed (MP3, JPEG).',
        'Metadata = data about data \u2014 can reveal location, time, identity',
        'Binary search only works on SORTED data',
        'Undecidable problems cannot be solved by any algorithm (halting problem)',
        'Packet switching: data split into independently routed packets \u2192 fault tolerant',
        'DNS translates domain names to IP addresses',
        'HTTPS = encrypted (TLS). HTTP = unencrypted.',
        'Create PT Row 5 requires ALL THREE: sequence + selection + iteration',
        'Create PT Row 6 requires TWO tests with DIFFERENT conditions',
        'IOC covers: algorithmic bias, digital divide, privacy, cybersecurity, intellectual property',
      ]),
    ],
  ),
];
