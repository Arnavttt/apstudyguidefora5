import 'package:flutter/material.dart';
import '../models/subject.dart';
import '../models/unit.dart';
import 'content/apush_content.dart';
import 'content/apworld_content.dart';
import 'content/collegetrig_content.dart';
import 'content/calcbc_content.dart';
import 'content/collegealgebra_content.dart';
import 'content/aplang_content.dart';
import 'content/apcsa_content.dart';
import 'content/apgov_content.dart';
import 'content/aplit_content.dart';
import 'content/appsych_content.dart';
import 'content/apcsp_content.dart';
import 'content/physics_content.dart';
import 'content/apchem_content.dart';
import 'content/apbio_content.dart';
import 'content/apes_content.dart';
import 'content/arthistory_content.dart';
import 'content/musictheory_content.dart';
import 'content/apeuropean_content.dart';
import 'content/aphumangeography_content.dart';
import 'content/apmacro_content.dart';
import 'content/apmicro_content.dart';
import 'content/apcomparativegov_content.dart';
import 'content/apphysicscm_content.dart';
import 'content/apphysicscem_content.dart';
import 'content/apprecalc_content.dart';
import 'content/apush_chunked_content.dart';
import 'content/apworld_chunked_content.dart';
import 'content/apgov_chunked_content.dart';
import 'content/appsych_chunked_content.dart';
import 'content/aplang_chunked_content.dart';
import 'content/aplit_chunked_content.dart';
import 'content/apcsa_chunked_content.dart';
import 'content/apcsp_chunked_content.dart';
import 'content/calcbc_chunked_content.dart';
import 'content/physics_chunked_content.dart';
import 'content/apchem_chunked_content.dart';
import 'content/apbio_chunked_content.dart';
import 'content/apes_chunked_content.dart';
import 'content/arthistory_chunked_content.dart';
import 'content/musictheory_chunked_content.dart';
import 'content/collegealgebra_chunked_content.dart';
import 'content/collegetrig_chunked_content.dart';

// ---------------------------------------------------------------------------
// Combined unit lists — existing rich content + chunked ZIP study frames
// ---------------------------------------------------------------------------

const List<Unit> apushAllUnits = [...apushUnits, ...apushChunkedUnits];
const List<Unit> apworldAllUnits = [...apworldUnits, ...apworldChunkedUnits];
const List<Unit> apgovAllUnits = [...apgovUnits, ...apgovChunkedUnits];
const List<Unit> appsychAllUnits = [...appsychUnits, ...appsychChunkedUnits];
const List<Unit> aplangAllUnits = [...aplangUnits, ...aplangChunkedUnits];
const List<Unit> aplitAllUnits = [...aplitUnits, ...aplitChunkedUnits];
const List<Unit> apcsaAllUnits = [...apcsaUnits, ...apcsaChunkedUnits];
const List<Unit> apcspAllUnits = [...apcspUnits, ...apcspChunkedUnits];
const List<Unit> calcbcAllUnits = [...calcbcUnits, ...calcbcChunkedUnits];
const List<Unit> physicsAllUnits = [...physicsUnits, ...physicsChunkedUnits];
const List<Unit> apchemAllUnits = [...apchemUnits, ...apchemChunkedUnits];
const List<Unit> apbioAllUnits = [...apbioUnits, ...apbioChunkedUnits];
const List<Unit> apesAllUnits = [...apesUnits, ...apesChunkedUnits];
const List<Unit> arthistoryAllUnits = [...arthistoryUnits, ...arthistoryChunkedUnits];
const List<Unit> musictheoryAllUnits = [...musictheoryUnits, ...musictheoryChunkedUnits];
const List<Unit> collegealgebraAllUnits = [...collegealgebraUnits, ...collegealgebraChunkedUnits];
const List<Unit> collegetrigAllUnits = [...collegetrigUnits, ...collegetrigChunkedUnits];

// ---------------------------------------------------------------------------
// subjectsRegistry — master list of all 25 subjects
// ---------------------------------------------------------------------------

const List<Subject> subjectsRegistry = [
  // ── History & Social Science ─────────────────────────────────────────────

  Subject(
    id: 'apush',
    title: 'AP U.S. History',
    subtitle:
        'All 9 periods with current 2025 rubrics. 7-pt DBQ, 6-pt LEQ, SAQ. HIPP sourcing, Heimler thesis formula, Tom Richey contextualization.',
    accentColor: Color(0xFFc9a96e),
    accentFaint: Color(0x26C9A96E),
    category: 'History & Social Science',
    badge: 'HISTORY',
    icon: '📜',
    pills: ['7-pt DBQ', '6-pt LEQ', 'HIPP', 'Unit Quizzes', 'FRQ Models'],
    meta: '9 periods · P1–P9',
    units: apushAllUnits,
  ),

  Subject(
    id: 'apworld',
    title: 'AP World History: Modern',
    subtitle:
        '1200–present. Trade networks, gunpowder empires, Atlantic slave trade, revolutions, imperialism, decolonization, globalization. SPICE-T themes.',
    accentColor: Color(0xFFf59e0b),
    accentFaint: Color(0x26F59E0B),
    category: 'History & Social Science',
    badge: 'HISTORY',
    icon: '🌍',
    pills: ['4 Periods', 'SPICE-T', 'DBQ/LEQ', 'Columbian Exchange', 'Quizzes'],
    meta: '4 periods · 1200–present',
    units: apworldAllUnits,
  ),

  Subject(
    id: 'apgov',
    title: 'AP U.S. Government & Politics',
    subtitle:
        'All 15 required SCOTUS cases fully analyzed. 9 foundational documents. Argument essay, SCOTUS comparison, concept application FRQs.',
    accentColor: Color(0xFF60a5fa),
    accentFaint: Color(0x2660A5FA),
    category: 'History & Social Science',
    badge: 'SOCIAL SCIENCE',
    icon: '🏛️',
    pills: ['15 SCOTUS', '9 Docs', 'FRQ Types', 'Branches', 'Quizzes'],
    meta: '5 units · Branches & Rights',
    units: apgovAllUnits,
  ),

  Subject(
    id: 'appsych',
    title: 'AP Psychology',
    subtitle:
        '7 perspectives, classical & operant conditioning, memory models, Milgram/Asch/Zimbardo key studies, all disorders + treatment. Unit quizzes throughout.',
    accentColor: Color(0xFFa855f7),
    accentFaint: Color(0x26A855F7),
    category: 'History & Social Science',
    badge: 'SOCIAL SCIENCE',
    icon: '🧠',
    pills: ['Key Studies', 'Conditioning', 'Memory', 'Disorders', 'Quizzes'],
    meta: '9 units · Milgram to CBT',
    units: appsychAllUnits,
  ),

  // ── English Language Arts ─────────────────────────────────────────────────

  Subject(
    id: 'aplang',
    title: 'AP Language & Composition',
    subtitle:
        'Current 2025 analytic rubric (1+4+1). SPACE-CAT rhetorical analysis. 30+ devices. Scored model essays for all 3 FRQ types with line-by-line annotation.',
    accentColor: Color(0xFFfb923c),
    accentFaint: Color(0x26FB923C),
    category: 'English Language Arts',
    badge: 'AP ENGLISH',
    icon: '✍️',
    pills: ['1+4+1 Rubric', 'SPACE-CAT', 'Synthesis', 'Rhet. Analysis', 'Argument'],
    meta: '3 FRQ types · Analytic rubric',
    units: aplangAllUnits,
  ),

  Subject(
    id: 'aplit',
    title: 'AP Literature & Composition',
    subtitle:
        '60+ literary devices. TPCASTT. Poetry analysis, prose fiction, literary argument FRQs with scored model responses and rubric annotation.',
    accentColor: Color(0xFFf472b6),
    accentFaint: Color(0x26F472B6),
    category: 'English Language Arts',
    badge: 'AP ENGLISH',
    icon: '📖',
    pills: ['Poetry Analysis', 'Prose FRQ', 'Literary Terms', 'Novels', 'Quizzes'],
    meta: '3 FRQ types · Poetry to prose',
    units: aplitAllUnits,
  ),

  // ── STEM ─────────────────────────────────────────────────────────────────

  Subject(
    id: 'apcsa',
    title: 'AP Computer Science A',
    subtitle:
        'All 4 FRQ types with complete step-by-step solutions. Java syntax reference, OOP, arrays, ArrayLists, 2D arrays. Common traps. Per-unit quizzes.',
    accentColor: Color(0xFF5b9cf6),
    accentFaint: Color(0x265B9CF6),
    category: 'STEM',
    badge: 'AP STEM',
    icon: '⌨️',
    pills: ['4 FRQ Types', 'Java Reference', 'Step-by-Step', 'OOP', 'Unit Quizzes'],
    meta: '10 units · Java',
    units: apcsaAllUnits,
  ),

  Subject(
    id: 'apcsp',
    title: 'AP Computer Science Principles',
    subtitle:
        '5 Big Ideas: creative development, data, algorithms, systems/networks, impact. Full Create PT row-by-row breakdown with example responses.',
    accentColor: Color(0xFFf97316),
    accentFaint: Color(0x26F97316),
    category: 'STEM',
    badge: 'AP STEM',
    icon: '💻',
    pills: ['Pseudocode', 'Binary', 'Networks', 'Create PT', 'Quizzes'],
    meta: '5 Big Ideas · Create PT',
    units: apcspAllUnits,
  ),

  Subject(
    id: 'calcbc',
    title: 'AP Calculus BC',
    subtitle:
        'Limits through series. Every BC-only topic: Taylor/Maclaurin, parametric, polar, all convergence tests. Worked examples for every problem type.',
    accentColor: Color(0xFFa78bfa),
    accentFaint: Color(0x26A78BFA),
    category: 'STEM',
    badge: 'AP STEM',
    icon: '∫',
    pills: ['Series Tests', 'Taylor/Maclaurin', 'Polar', 'FRQ Guide', 'Quizzes'],
    meta: '10 units · AB + BC topics',
    units: calcbcAllUnits,
  ),

  Subject(
    id: 'physics',
    title: 'AP Physics 1 & 2',
    subtitle:
        'Mechanics through modern physics. Every equation with worked examples. FBDs, rotational motion, E&M, optics, thermodynamics, nuclear.',
    accentColor: Color(0xFF34d399),
    accentFaint: Color(0x2634D399),
    category: 'STEM',
    badge: 'AP STEM',
    icon: '⚡',
    pills: ['Equations', 'FBDs', 'Worked Examples', 'Lab Questions', 'Quizzes'],
    meta: 'Physics 1 + 2 combined',
    units: physicsAllUnits,
  ),

  Subject(
    id: 'apchem',
    title: 'AP Chemistry',
    subtitle:
        'Atomic structure through electrochemistry. Every equation, ICE table walkthrough, titration, Henderson-Hasselbalch, Nernst. Step-by-step problem solving.',
    accentColor: Color(0xFF2dd4bf),
    accentFaint: Color(0x262DD4BF),
    category: 'STEM',
    badge: 'AP STEM',
    icon: '⚗️',
    pills: ['Kinetics', 'Equilibrium', 'Acid-Base', 'Electrochemistry', 'Quizzes'],
    meta: '9 units · Calculations focus',
    units: apchemAllUnits,
  ),

  Subject(
    id: 'apbio',
    title: 'AP Biology',
    subtitle:
        'Chemistry of life through ecology. Photosynthesis/respiration ATP counts, genetics, gene expression, Hardy-Weinberg, evolution, ecology. FRQ experimental design.',
    accentColor: Color(0xFF4ade80),
    accentFaint: Color(0x264ADE80),
    category: 'STEM',
    badge: 'AP STEM',
    icon: '🧬',
    pills: ['Cell Biology', 'Genetics', 'Evolution', 'Ecology', 'Quizzes'],
    meta: '8 units · All topics',
    units: apbioAllUnits,
  ),

  Subject(
    id: 'apes',
    title: 'AP Environmental Science',
    subtitle:
        'HIPPCO, Rule of 70, demographic transition, energy source comparison. Climate vs. ozone distinction. FRQ always includes a calculation — we show all of them.',
    accentColor: Color(0xFF22c55e),
    accentFaint: Color(0x2622C55E),
    category: 'STEM',
    badge: 'AP STEM',
    icon: '🌿',
    pills: ['HIPPCO', 'Rule of 70', 'Energy Sources', 'Climate', 'Quizzes'],
    meta: '9 units · Earth systems',
    units: apesAllUnits,
  ),

  // ── Arts ──────────────────────────────────────────────────────────────────

  Subject(
    id: 'arthistory',
    title: 'AP Art History',
    subtitle:
        'All 10 content areas. OPTIC formal analysis, 40+ key works with full analysis, movements prehistoric through contemporary, contextual lenses, essay types.',
    accentColor: Color(0xFFc9a84c),
    accentFaint: Color(0x26C9A84C),
    category: 'Arts',
    badge: 'AP ARTS',
    icon: '🖼️',
    pills: ['OPTIC', '40+ Works', 'Movements', 'Contextual Lenses', 'Quizzes'],
    meta: '10 content areas',
    units: arthistoryAllUnits,
  ),

  Subject(
    id: 'musictheory',
    title: 'AP Music Theory',
    subtitle:
        'Scales, intervals, chords, SATB voice leading rules (no parallel 5ths/octaves), cadences, circle of fifths, musical form, and aural skills strategy.',
    accentColor: Color(0xFFe879f9),
    accentFaint: Color(0x26E879F9),
    category: 'Arts',
    badge: 'AP ARTS',
    icon: '🎵',
    pills: ['Circle of 5ths', 'Voice Leading', 'Cadences', 'SATB', 'Quizzes'],
    meta: 'Written + Aural sections',
    units: musictheoryAllUnits,
  ),

  // ── New AP Courses (2026 expansion) ──────────────────────────────────────

  Subject(
    id: 'apeuropean',
    title: 'AP European History',
    subtitle:
        'Renaissance to present day. Causation, comparison, CCOT across 9 units. DBQ/LEQ/SAQ frameworks, primary source analysis, per-unit self-check question banks.',
    accentColor: Color(0xFF60a5fa),
    accentFaint: Color(0x2660A5FA),
    category: 'History & Social Science',
    badge: 'HISTORY',
    icon: '🏰',
    pills: ['9 Units', 'DBQ/LEQ', 'SAQ', 'Source Analysis', 'Self-Check'],
    meta: '9 units · c.1450–present',
    units: apeuropeanUnits,
  ),

  Subject(
    id: 'aphumangeography',
    title: 'AP Human Geography',
    subtitle:
        'Thinking geographically through urban land use and economic development. 7 units, spatial reasoning, APHUG FRQ, per-unit self-check question banks.',
    accentColor: Color(0xFF34d399),
    accentFaint: Color(0x2634D399),
    category: 'History & Social Science',
    badge: 'SOCIAL SCIENCE',
    icon: '🗺️',
    pills: ['7 Units', 'Spatial Reasoning', 'FRQ', 'Urban Models', 'Self-Check'],
    meta: '7 units · Space & Place',
    units: aphumangeographyUnits,
  ),

  Subject(
    id: 'apcomparativegov',
    title: 'AP Comparative Government & Politics',
    subtitle:
        '6 core countries: UK, Mexico, Russia, Iran, China, Nigeria. Political systems, institutions, participation, elections. FRQ with country-specific evidence.',
    accentColor: Color(0xFFfb7185),
    accentFaint: Color(0x26FB7185),
    category: 'History & Social Science',
    badge: 'SOCIAL SCIENCE',
    icon: '🌐',
    pills: ['6 Countries', 'Institutions', 'Elections', 'FRQ', 'Self-Check'],
    meta: '5 units · Comparative Politics',
    units: apcomparativegovUnits,
  ),

  Subject(
    id: 'apmacro',
    title: 'AP Macroeconomics',
    subtitle:
        'GDP, business cycles, fiscal and monetary policy, AD/AS model, loanable funds, money markets, and open economy. Full FRQ walkthroughs with graphs.',
    accentColor: Color(0xFFfacc15),
    accentFaint: Color(0x26FACC15),
    category: 'History & Social Science',
    badge: 'ECONOMICS',
    icon: '📈',
    pills: ['AD/AS', 'Fiscal Policy', 'Monetary Policy', 'Graphs', 'Self-Check'],
    meta: '6 units · Macro models',
    units: apmacroUnits,
  ),

  Subject(
    id: 'apmicro',
    title: 'AP Microeconomics',
    subtitle:
        'Supply & demand, elasticity, production costs, perfect & imperfect competition, factor markets, market failure. Graph interpretation and FRQ.',
    accentColor: Color(0xFFf97316),
    accentFaint: Color(0x26F97316),
    category: 'History & Social Science',
    badge: 'ECONOMICS',
    icon: '📉',
    pills: ['Supply/Demand', 'Elasticity', 'Market Structures', 'Graphs', 'Self-Check'],
    meta: '6 units · Micro models',
    units: apmicroUnits,
  ),

  Subject(
    id: 'apphysicscm',
    title: 'AP Physics C: Mechanics',
    subtitle:
        'Calculus-based mechanics: kinematics, Newton\'s laws, work-energy, momentum, rotation, oscillations. Every topic with calculus derivations and FRQ.',
    accentColor: Color(0xFF38bdf8),
    accentFaint: Color(0x2638BDF8),
    category: 'STEM',
    badge: 'AP STEM',
    icon: '⚙️',
    pills: ['Calculus-Based', 'Rotation', 'Oscillations', 'FRQ', 'Self-Check'],
    meta: '7 units · Calc mechanics',
    units: apphysicscmUnits,
  ),

  Subject(
    id: 'apphysicscem',
    title: 'AP Physics C: Electricity & Magnetism',
    subtitle:
        'Calculus-based E&M: Gauss\'s law, electric potential, capacitors, circuits, magnetic fields, Faraday\'s law, electromagnetic induction.',
    accentColor: Color(0xFFa78bfa),
    accentFaint: Color(0x26A78BFA),
    category: 'STEM',
    badge: 'AP STEM',
    icon: '⚡',
    pills: ['Gauss\'s Law', 'Faraday\'s Law', 'Circuits', 'Calculus-Based', 'Self-Check'],
    meta: '6 units · Calc E&M',
    units: apphysicscemUnits,
  ),

  Subject(
    id: 'apprecalc',
    title: 'AP Precalculus',
    subtitle:
        'Polynomial and rational functions, exponential and logarithmic functions, trigonometric and polar functions, parametric and vector functions.',
    accentColor: Color(0xFFc084fc),
    accentFaint: Color(0x26C084FC),
    category: 'STEM',
    badge: 'AP STEM',
    icon: '📐',
    pills: ['Polynomials', 'Trig Functions', 'Polar', 'Vectors', 'Self-Check'],
    meta: '4 units · Pre-calc',
    units: apprecalcUnits,
  ),

  // ── College Courses ───────────────────────────────────────────────────────

  Subject(
    id: 'collegealgebra',
    title: 'College Algebra',
    subtitle:
        'Number systems through functions, polynomials, rational functions, exponentials, logarithms, systems of equations, matrices, sequences & series, conic sections.',
    accentColor: Color(0xFF38bdf8),
    accentFaint: Color(0x2638BDF8),
    category: 'College Math',
    badge: 'COLLEGE MATH',
    icon: '📐',
    pills: ['Functions', 'Polynomials', 'Exponentials', 'Logarithms', 'Matrices', 'Conics', 'Unit Quizzes'],
    meta: '8 units · Step-by-step',
    units: collegealgebraAllUnits,
  ),

  Subject(
    id: 'collegetrig',
    title: 'College Trigonometry',
    subtitle:
        'Unit circle mastery, all 6 trig functions and graphs, Pythagorean/sum-difference/double-angle identities, inverse trig, equations, Law of Sines & Cosines, polar coordinates.',
    accentColor: Color(0xFF818cf8),
    accentFaint: Color(0x26818CF8),
    category: 'College Math',
    badge: 'COLLEGE MATH',
    icon: '📊',
    pills: ['Unit Circle', 'All Identities', 'Inverse Trig', 'Law of Sines/Cosines', 'Polar', 'Quizzes'],
    meta: '11 units · All identities',
    units: collegetrigAllUnits,
  ),
];

/// Fast id-keyed lookup map built once at program start.
final Map<String, Subject> subjectById = {
  for (final s in subjectsRegistry) s.id: s,
};
