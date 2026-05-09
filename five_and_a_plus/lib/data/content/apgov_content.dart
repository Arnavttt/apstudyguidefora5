// lib/data/content/apgov_content.dart
//
// Full content tree for AP U.S. Government & Politics — transcribed from apgov.html.
// 3 Unit objects: Exam & FRQs, SCOTUS Cases, Foundational Documents.
// All content is typed const data — zero dynamic dispatch at render time.

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> apgovUnits = [
  // ── Exam & FRQs ───────────────────────────────────────────────────────────
  Unit(
    title: 'AP U.S. Government & Politics — Exam & FRQs',
    blocks: [
      DataTableBlock(
        headers: ['Section', 'Format', 'Time', 'Weight'],
        rows: [
          [
            'MCQ',
            '55 questions, stimulus-based',
            '80 min',
            '50%',
          ],
          [
            'FRQ 1: Concept Application',
            'Scenario — apply a concept',
            '~20 min',
            '12.5%',
          ],
          [
            'FRQ 2: Quantitative Analysis',
            'Analyze chart/table/map',
            '~20 min',
            '12.5%',
          ],
          [
            'FRQ 3: SCOTUS Comparison',
            'Compare non-required case to required case',
            '~20 min',
            '12.5%',
          ],
          [
            'FRQ 4: Argument Essay',
            'Defend a position with evidence',
            '~40 min',
            '12.5%',
          ],
        ],
      ),
      CalloutBlock(
        title: 'FRQ Strategy Tips',
        items: [
          'FRQ 1 (Concept Application): Identify the concept in the scenario, define it, and explain its application to the specific situation. Name the concept explicitly.',
          'FRQ 2 (Quantitative Analysis): Describe the data, identify trends, and explain the political significance. Use specific data points from the chart.',
          'FRQ 3 (SCOTUS Comparison): State the constitutional principle at issue, compare the facts and reasoning of the given case to the required case, explain why the same or different outcome results.',
          'FRQ 4 (Argument Essay): Take a clear, defensible position. Use at least one required SCOTUS case, one foundational document, and one piece of outside evidence. Include a counterargument.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'The SCOTUS Comparison FRQ always requires:',
          choices: [
            QuizChoice(text: 'A) Analyzing a graph', isCorrect: false),
            QuizChoice(
              text: 'B) Comparing a non-required case to a required SCOTUS case',
              isCorrect: true,
              explanation:
                  'B is correct. You are given an unfamiliar case and must compare its facts, reasoning, or holding to a required SCOTUS case from the list.',
            ),
            QuizChoice(text: 'C) Writing an argument essay', isCorrect: false),
            QuizChoice(text: 'D) Summarizing the Bill of Rights', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Required SCOTUS Cases ──────────────────────────────────────────────────
  Unit(
    title: 'All 15 Required SCOTUS Cases',
    blocks: [
      DataTableBlock(
        headers: ['Case', 'Year', 'Ruling & Significance'],
        rows: [
          [
            'Marbury v. Madison',
            '1803',
            'Established judicial review — Court can strike down unconstitutional laws.',
          ],
          [
            'McCulloch v. Maryland',
            '1819',
            'Congress has implied powers (Necessary & Proper). Federal law supreme over state law.',
          ],
          [
            'Schenck v. United States',
            '1919',
            '"Clear and present danger" test. First Amendment can be limited in wartime.',
          ],
          [
            'Brown v. Board of Education',
            '1954',
            'Segregated schools unconstitutional. Overturned Plessy v. Ferguson.',
          ],
          [
            'Baker v. Carr',
            '1962',
            'Redistricting justiciable. Led to "one person, one vote" principle.',
          ],
          [
            'Engel v. Vitale',
            '1962',
            'State-sponsored prayer in public schools violates Establishment Clause.',
          ],
          [
            'Gideon v. Wainwright',
            '1963',
            'States must provide attorney to defendants who cannot afford one (6th Amendment incorporated).',
          ],
          [
            'Tinker v. Des Moines',
            '1969',
            'Students keep 1st Amendment rights at school. Black armbands = protected speech.',
          ],
          [
            'New York Times v. United States',
            '1971',
            'Government cannot impose prior restraint on press (Pentagon Papers case).',
          ],
          [
            'Wisconsin v. Yoder',
            '1972',
            'Free Exercise protects Amish from compulsory high school education.',
          ],
          [
            'Roe v. Wade',
            '1973',
            'Right to abortion under right to privacy. (OVERTURNED by Dobbs v. Jackson, 2022)',
          ],
          [
            'Shaw v. Reno',
            '1993',
            'Race cannot be predominant factor in drawing district lines — Equal Protection.',
          ],
          [
            'United States v. Lopez',
            '1995',
            'Gun-Free School Zones Act exceeded Commerce Clause — first limit on Congress\'s commerce power in 60 years.',
          ],
          [
            'McDonald v. Chicago',
            '2010',
            '2nd Amendment right to bear arms incorporated to states via 14th Amendment.',
          ],
          [
            'Citizens United v. FEC',
            '2010',
            'Corporations and unions have 1st Amendment rights to make independent political expenditures.',
          ],
        ],
      ),
      WarnBlock(
        title: 'High-Frequency Exam Traps',
        items: [
          'Roe v. Wade was OVERTURNED by Dobbs v. Jackson (2022) — states now regulate abortion. Know both cases.',
          'Citizens United protects INDEPENDENT expenditures only — direct contributions to campaigns are still regulated.',
          'McCulloch established implied powers (N&P Clause) AND federal supremacy (Supremacy Clause) — two separate holdings.',
          'Tinker protects symbolic speech at school, but Bethel v. Fraser (not required) limits vulgar speech — know the nuance.',
          'Baker v. Carr made redistricting justiciable; Shaw v. Reno limited racial gerrymandering — these are often confused.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Which case established judicial review?',
          choices: [
            QuizChoice(text: 'A) McCulloch v. Maryland', isCorrect: false),
            QuizChoice(text: 'B) Baker v. Carr', isCorrect: false),
            QuizChoice(
              text: 'C) Marbury v. Madison',
              isCorrect: true,
              explanation:
                  'C: Marbury v. Madison (1803). Chief Justice Marshall established that the Court has the power — and duty — to strike down laws that violate the Constitution.',
            ),
            QuizChoice(text: 'D) Gideon v. Wainwright', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Citizens United v. FEC (2010) held that:',
          choices: [
            QuizChoice(
                text: 'A) Campaign contributions are unlimited', isCorrect: false),
            QuizChoice(
                text: 'B) Corporations can directly donate to campaigns', isCorrect: false),
            QuizChoice(
              text:
                  'C) Corporations and unions have First Amendment rights to make independent political expenditures',
              isCorrect: true,
              explanation:
                  'C is correct. Independent expenditures (not coordinated with a campaign) by corporations and unions are protected First Amendment speech. The Court held political speech doesn\'t lose protection based on the speaker\'s corporate identity.',
            ),
            QuizChoice(
                text: 'D) The government can regulate all political advertising',
                isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Foundational Documents ─────────────────────────────────────────────────
  Unit(
    title: '9 Required Foundational Documents',
    blocks: [
      DataTableBlock(
        headers: ['Document', 'Key Idea / Argument'],
        rows: [
          [
            'Declaration of Independence (1776)',
            'Natural rights (Locke), consent of governed, list of British grievances',
          ],
          [
            'Articles of Confederation (1781)',
            'First US government — weak central authority; no taxing/commerce power',
          ],
          [
            'U.S. Constitution (1787)',
            'Federalism, separation of powers, checks & balances, limited government',
          ],
          [
            'Federalist No. 10 (Madison)',
            'Large republic controls faction better than pure democracy. Diversity of interests = protection.',
          ],
          [
            'Brutus No. 1 (Anti-Federalist)',
            'N&P and Supremacy Clauses would let federal government destroy state power and liberty.',
          ],
          [
            'Federalist No. 51 (Madison)',
            '"Ambition must counteract ambition." Separation of powers + checks prevent tyranny.',
          ],
          [
            'Federalist No. 70 (Hamilton)',
            'Single strong executive preferred — energy, accountability, decisiveness.',
          ],
          [
            'Federalist No. 78 (Hamilton)',
            'Judiciary needs lifetime tenure for independence. Judicial review legitimate.',
          ],
          [
            'Letter from Birmingham Jail (MLK, 1963)',
            'Justification for civil disobedience. Unjust laws need not be obeyed. Urgency of civil rights.',
          ],
        ],
      ),
      CalloutBlock(
        title: 'Document Analysis Framework',
        items: [
          'Federalist 10 vs. Brutus 1: Madison argues a large republic disperses faction; Brutus argues it concentrates power and ignores minority voices.',
          'Federalist 51: The key phrase is "ambition must counteract ambition" — structure (not virtue) protects liberty. Both horizontal (3 branches) and vertical (federal/state) separation matter.',
          'Federalist 70: Hamilton argues for unity in the executive (one president) — energy, decisiveness, and accountability. Contrast with the Articles\' executive weakness.',
          'Federalist 78: Hamilton defends judicial review and lifetime tenure — insulated from politics, judges can check the other branches. Connect to Marbury v. Madison.',
          'Letter from Birmingham Jail: MLK distinguishes just from unjust laws (Aquinas, Augustine), justifies civil disobedience, and rejects the "wait" argument. Used in FRQ 4 Argument Essays.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Federalist No. 51 primarily argues that tyranny is best prevented by:',
          choices: [
            QuizChoice(text: 'A) A virtuous citizenry', isCorrect: false),
            QuizChoice(
              text:
                  'B) Separation of powers and checks and balances — ambition counteracts ambition',
              isCorrect: true,
              explanation:
                  'B is correct. Madison argued constitutional structure — not virtue — is the key safeguard. Because men are not angels, government must be designed so institutions restrain each other.',
            ),
            QuizChoice(text: 'C) Direct democracy', isCorrect: false),
            QuizChoice(text: 'D) Judicial review', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'Judicial review: Marbury v. Madison (1803)',
        'Roe v. Wade overturned by Dobbs v. Jackson (2022) — states now regulate abortion',
        'Citizens United: unlimited independent expenditures = 1st Amendment speech',
        'Lopez (1995): first Commerce Clause limit in 60 years',
        'Gideon: right to counsel incorporated to states',
        'Tinker: students keep 1st Amendment rights at school (but not unlimited)',
        'Federalist 10: faction controlled by large republic; Fed 51: ambition counteracts ambition',
        'Brutus 1: Anti-Federalist fears of federal overreach',
        'FRQ 4 Argument Essay: clear position + required document + SCOTUS case + counterargument',
      ]),
    ],
  ),
];
