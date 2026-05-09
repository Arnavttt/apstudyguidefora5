import 'package:flutter/material.dart';
import '../models/subject.dart';
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

// ---------------------------------------------------------------------------
// subjectsRegistry — master list of all 17 subjects
//
// Each subject has full metadata (id, title, subtitle, accent colors, badge,
// icon, pills, meta label) but units: [] — content is populated in later stages.
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
    units: apushUnits,
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
    units: apworldUnits,
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
    units: apgovUnits,
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
    units: appsychUnits,
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
    units: aplangUnits,
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
    units: aplitUnits,
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
    units: apcsaUnits,
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
    units: apcspUnits,
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
    units: calcbcUnits,
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
    units: physicsUnits,
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
    units: apchemUnits,
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
    units: apbioUnits,
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
    units: apesUnits,
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
    units: arthistoryUnits,
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
    units: musictheoryUnits,
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
    units: collegealgebraUnits,
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
    units: collegetrigUnits,
  ),
];

/// Fast id-keyed lookup map built once at program start.
final Map<String, Subject> subjectById = {
  for (final s in subjectsRegistry) s.id: s,
};
