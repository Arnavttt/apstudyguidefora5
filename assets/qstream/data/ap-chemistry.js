/**
 * Five & A+ — AI Question Stream · Course data: AP Chemistry
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the AP Biology GOLD TEMPLATE shape exactly.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-chemistry',
    displayName: 'AP Chemistry',
    description: 'Quantitative study of matter and its transformations, organized around atomic structure, bonding, intermolecular forces, reactions, kinetics, thermodynamics, and equilibrium.',
    category: 'stem',
    allowedQuestionTypes: ['mcq', 'calculation', 'data-analysis', 'graph-interpretation', 'lab-design', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'calculation', 'frq'],
    skills: [
      'models and representations',
      'question and method',
      'representing data',
      'model analysis',
      'mathematical routines',
      'argumentation'
    ],
    bigIdeas: ['Scale, Proportion, and Quantity', 'Structure and Properties', 'Transformations', 'Energy'],
    units: [
      { id: 'unit-1', name: 'Atomic Structure and Properties', examWeight: '7-9%', description: 'Moles, mass spectrometry, electron configuration, and periodic trends.',
        topics: [
          { id: 'mole-stoichiometry', name: 'Moles and Stoichiometry', description: 'Using the mole concept and molar mass to relate mass, particles, and amount.', skills: ['mathematical routines'] },
          { id: 'mass-spectrometry', name: 'Mass Spectrometry and Isotopes', description: 'Interpreting mass spectra and calculating average atomic mass from isotopic abundances.', skills: ['representing data'] },
          { id: 'electron-configuration', name: 'Electron Configuration and Photoelectron Spectroscopy', description: 'Orbital filling, the Aufbau principle, and PES evidence for subshells.', skills: ['models and representations'] },
          { id: 'periodic-trends', name: 'Periodic Trends', description: 'Trends in atomic radius, ionization energy, and electronegativity from effective nuclear charge.', skills: ['model analysis'] }
        ] },
      { id: 'unit-2', name: 'Molecular and Ionic Compound Structure and Properties', examWeight: '7-9%', description: 'Bonding types, Lewis structures, VSEPR geometry, and lattice energy.',
        topics: [
          { id: 'lewis-structures', name: 'Lewis Diagrams and Formal Charge', description: 'Drawing valid Lewis structures and evaluating resonance with formal charge.', skills: ['models and representations'] },
          { id: 'vsepr-geometry', name: 'VSEPR and Molecular Geometry', description: 'Predicting shape, bond angles, and polarity from electron-domain geometry.', skills: ['model analysis'] },
          { id: 'bonding-lattice', name: 'Bond Types and Lattice Energy', description: 'Comparing ionic, covalent, and metallic bonding and the Coulombic basis of lattice energy.', skills: ['argumentation'] }
        ] },
      { id: 'unit-3', name: 'Intermolecular Forces and Properties', examWeight: '18-22%', description: 'IMFs, phases, solutions, and spectroscopy.',
        topics: [
          { id: 'intermolecular-forces', name: 'Intermolecular Forces', description: 'London dispersion, dipole-dipole, and hydrogen bonding and their effect on properties.', skills: ['model analysis'] },
          { id: 'solutions-concentration', name: 'Solutions and Concentration', description: 'Molarity, dilution, and the particulate view of dissolving.', skills: ['mathematical routines'] },
          { id: 'beers-law', name: 'Beer–Lambert Law and Spectroscopy', description: 'Relating absorbance to concentration and interpreting calibration data.', skills: ['representing data'] }
        ] },
      { id: 'unit-4', name: 'Chemical Reactions', examWeight: '7-9%', description: 'Reaction types, net ionic equations, and titration stoichiometry.',
        topics: [
          { id: 'net-ionic', name: 'Net Ionic Equations', description: 'Writing balanced net ionic equations for precipitation, acid-base, and gas-forming reactions.', skills: ['models and representations'] },
          { id: 'redox-reactions', name: 'Oxidation–Reduction Reactions', description: 'Assigning oxidation numbers and identifying oxidizing and reducing agents.', skills: ['model analysis'] },
          { id: 'titration-stoichiometry', name: 'Titration Stoichiometry', description: 'Using mole ratios and volumes to determine an unknown concentration.', skills: ['mathematical routines'] }
        ] },
      { id: 'unit-5', name: 'Kinetics', examWeight: '7-9%', description: 'Reaction rates, rate laws, integrated laws, and mechanisms.',
        topics: [
          { id: 'rate-laws', name: 'Rate Laws and Reaction Order', description: 'Determining order and the rate constant from initial-rate data.', skills: ['representing data'] },
          { id: 'integrated-rate-laws', name: 'Integrated Rate Laws and Half-Life', description: 'Using zero-, first-, and second-order integrated laws and half-life relationships.', skills: ['mathematical routines'] },
          { id: 'mechanisms-catalysis', name: 'Reaction Mechanisms and Catalysis', description: 'Elementary steps, rate-determining step, intermediates, and catalysts.', skills: ['model analysis'] }
        ] },
      { id: 'unit-6', name: 'Thermodynamics', examWeight: '7-9%', description: 'Enthalpy, calorimetry, Hess’s law, and bond energies.',
        topics: [
          { id: 'calorimetry', name: 'Calorimetry and Heat Transfer', description: 'Using q = mcΔT and conservation of energy in calorimetry experiments.', skills: ['mathematical routines'] },
          { id: 'hess-law', name: 'Hess’s Law and Enthalpy of Reaction', description: 'Combining reactions and formation enthalpies to find ΔH of a reaction.', skills: ['mathematical routines'] },
          { id: 'bond-enthalpy', name: 'Bond Enthalpies', description: 'Estimating reaction enthalpy from bonds broken and formed.', skills: ['model analysis'] }
        ] },
      { id: 'unit-7', name: 'Equilibrium', examWeight: '7-9%', description: 'Equilibrium constants, ICE tables, Le Chatelier, and solubility.',
        topics: [
          { id: 'equilibrium-constant', name: 'Equilibrium Constant and Reaction Quotient', description: 'Writing K expressions and comparing Q to K to predict direction.', skills: ['models and representations'] },
          { id: 'ice-tables', name: 'ICE Tables and Equilibrium Calculations', description: 'Solving for equilibrium concentrations using initial-change-equilibrium reasoning.', skills: ['mathematical routines'] },
          { id: 'le-chatelier', name: 'Le Châtelier’s Principle', description: 'Predicting the response of a system to stress on concentration, pressure, or temperature.', skills: ['argumentation'] },
          { id: 'solubility-ksp', name: 'Solubility Equilibria (Ksp)', description: 'Relating Ksp to molar solubility and the common-ion effect.', skills: ['mathematical routines'] }
        ] },
      { id: 'unit-8', name: 'Acids and Bases', examWeight: '11-15%', description: 'pH, weak acid/base equilibria, buffers, and titration curves.',
        topics: [
          { id: 'ph-strong', name: 'pH and Strong Acids/Bases', description: 'Calculating pH and pOH for strong acid and base solutions.', skills: ['mathematical routines'] },
          { id: 'weak-acid-base', name: 'Weak Acid/Base Equilibria', description: 'Using Ka and Kb with equilibrium reasoning to find pH and percent ionization.', skills: ['model analysis'] },
          { id: 'buffers', name: 'Buffers and Henderson–Hasselbalch', description: 'How buffers resist pH change and computing buffer pH.', skills: ['argumentation'] },
          { id: 'titration-curves', name: 'Titration Curves', description: 'Interpreting equivalence points, half-equivalence, and buffer regions on a titration curve.', skills: ['representing data'] }
        ] },
      { id: 'unit-9', name: 'Applications of Thermodynamics', examWeight: '7-9%', description: 'Entropy, Gibbs free energy, and electrochemistry.',
        topics: [
          { id: 'entropy', name: 'Entropy and Spontaneity', description: 'Predicting the sign of ΔS and reasoning about disorder at the particulate level.', skills: ['model analysis'] },
          { id: 'gibbs-free-energy', name: 'Gibbs Free Energy', description: 'Using ΔG = ΔH − TΔS and the temperature dependence of spontaneity.', skills: ['mathematical routines'] },
          { id: 'electrochemistry', name: 'Electrochemistry and Cell Potential', description: 'Galvanic and electrolytic cells, standard cell potential, and the link between E° and ΔG.', skills: ['argumentation'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 90, weight: '50%', notes: '60 questions; many require quantitative reasoning and data interpretation.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'calculation', 'data-analysis', 'graph-interpretation', 'lab-design', 'short-answer'], timingMinutes: 105, weight: '50%', notes: '7 questions: 3 long and 4 short, including experimental design and analysis.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-chemistry-u1-periodic-trends-mcq-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-1', unitName: 'Atomic Structure and Properties', topicId: 'periodic-trends', topicName: 'Periodic Trends',
      skill: 'model analysis', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Moving left to right across a period, atomic radius generally decreases. Which factor best explains this trend?',
      answerChoices: [
        { id: 'A', text: 'Electrons are added to new, higher principal energy levels.' },
        { id: 'B', text: 'Effective nuclear charge increases, pulling the electron cloud inward.' },
        { id: 'C', text: 'The number of neutrons decreases across the period.' },
        { id: 'D', text: 'Electron shielding increases faster than nuclear charge.' }
      ],
      correctAnswer: 'B',
      explanation: 'Across a period electrons add to the same shell while protons increase, so effective nuclear charge rises. The greater pull on the valence electrons contracts the atom, decreasing atomic radius.',
      distractorRationales: {
        A: 'New shells are added down a group, not across a period; that would increase radius.',
        B: '',
        C: 'Neutron count does not control atomic radius, which depends on electron-nucleus attraction.',
        D: 'Shielding stays roughly constant across a period because the core electrons do not change.'
      },
      tags: ['periodic-trends', 'atomic-radius', 'effective-nuclear-charge'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-chemistry-u3-intermolecular-forces-mcq-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-3', unitName: 'Intermolecular Forces and Properties', topicId: 'intermolecular-forces', topicName: 'Intermolecular Forces',
      skill: 'model analysis', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Which intermolecular force is primarily responsible for the unusually high boiling point of water compared with other small molecules of similar mass?',
      answerChoices: [
        { id: 'A', text: 'London dispersion forces' },
        { id: 'B', text: 'Ion-dipole forces' },
        { id: 'C', text: 'Hydrogen bonding' },
        { id: 'D', text: 'Covalent bonding within the molecule' }
      ],
      correctAnswer: 'C',
      explanation: 'Water has O–H bonds, so each molecule can both donate and accept hydrogen bonds. This strong network of hydrogen bonds requires extra energy to break, raising the boiling point above what dispersion forces alone would predict.',
      distractorRationales: {
        A: 'Dispersion forces are present but weak for such a small, light molecule.',
        B: 'Ion-dipole forces require ions, which are not present in pure water.',
        C: '',
        D: 'Covalent bonds hold atoms within a molecule and are not broken during boiling.'
      },
      tags: ['intermolecular-forces', 'hydrogen-bonding', 'boiling-point'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-chemistry-u4-redox-reactions-mcq-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-4', unitName: 'Chemical Reactions', topicId: 'redox-reactions', topicName: 'Oxidation–Reduction Reactions',
      skill: 'model analysis', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'apply', estimatedTimeSeconds: 75,
      prompt: 'In the reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), which species is oxidized?',
      answerChoices: [
        { id: 'A', text: 'Zn(s)' },
        { id: 'B', text: 'Cu²⁺(aq)' },
        { id: 'C', text: 'Zn²⁺(aq)' },
        { id: 'D', text: 'Cu(s)' }
      ],
      correctAnswer: 'A',
      explanation: 'Zinc goes from an oxidation state of 0 to +2, losing two electrons. Loss of electrons is oxidation, so Zn(s) is oxidized and acts as the reducing agent.',
      distractorRationales: {
        A: '',
        B: 'Cu²⁺ gains electrons (goes from +2 to 0), so it is reduced, not oxidized.',
        C: 'Zn²⁺ is the product of oxidation, not the species being oxidized.',
        D: 'Cu(s) is the reduced product; it gained electrons rather than losing them.'
      },
      tags: ['redox', 'oxidation-states', 'electron-transfer'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-chemistry-u1-mass-spectrometry-calc-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-1', unitName: 'Atomic Structure and Properties', topicId: 'mass-spectrometry', topicName: 'Mass Spectrometry and Isotopes',
      skill: 'mathematical routines', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 120,
      prompt: 'An element has two isotopes: one of mass 62.93 amu at 69.2% abundance and one of mass 64.93 amu at 30.8% abundance. Calculate the average atomic mass in amu.',
      correctAnswer: '63.55',
      numericTolerance: 0.05,
      acceptableAnswers: ['63.55', '63.5', '63.6'],
      explanation: 'Average atomic mass is the abundance-weighted mean: (0.692)(62.93) + (0.308)(64.93) = 43.55 + 20.00 = 63.55 amu. Multiply each isotopic mass by its fractional abundance and sum the contributions.',
      tags: ['mass-spectrometry', 'isotopes', 'average-atomic-mass'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-chemistry-u5-rate-laws-data-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-5', unitName: 'Kinetics', topicId: 'rate-laws', topicName: 'Rate Laws and Reaction Order',
      skill: 'representing data', questionType: 'data-analysis', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'For the reaction A + B → products, initial-rate data are given. Determine the order with respect to A and with respect to B, and state the overall order.',
      dataTable: { columns: ['Trial', '[A] (M)', '[B] (M)', 'Initial rate (M/s)'], rows: [['1', '0.10', '0.10', '0.0020'], ['2', '0.20', '0.10', '0.0040'], ['3', '0.20', '0.20', '0.0160']] },
      correctAnswer: 'First order in A, second order in B, third order overall.',
      acceptableAnswers: ['first order in A', 'second order in B', 'third order overall', '1 in A, 2 in B'],
      explanation: 'Comparing trials 1 and 2, [A] doubles while [B] is held constant and the rate doubles, so the reaction is first order in A. Comparing trials 2 and 3, [B] doubles while [A] is held constant and the rate quadruples (2²), so it is second order in B. The overall order is 1 + 2 = 3.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Correctly determines first order in A.', evidenceRequired: 'Uses trials 1 and 2 (rate doubles when [A] doubles).' },
        { id: 'r2', pointValue: 1, criterion: 'Correctly determines second order in B.', evidenceRequired: 'Uses trials 2 and 3 (rate quadruples when [B] doubles).' },
        { id: 'r3', pointValue: 1, criterion: 'States overall order is 3.', evidenceRequired: 'Sums the individual orders.' }
      ],
      modelAnswer: 'Between trials 1 and 2, [B] is constant and [A] doubles; the rate doubles (2¹), so the reaction is first order in A. Between trials 2 and 3, [A] is constant and [B] doubles; the rate quadruples (2²), so the reaction is second order in B. The overall order is 1 + 2 = 3, and the rate law is rate = k[A][B]².',
      tags: ['kinetics', 'rate-law', 'reaction-order', 'data-analysis'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-chemistry-u2-vsepr-geometry-mcq-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-2', unitName: 'Molecular and Ionic Compound Structure and Properties', topicId: 'vsepr-geometry', topicName: 'VSEPR and Molecular Geometry',
      skill: 'model analysis', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'The molecule NH₃ has one lone pair on the central nitrogen atom. Which molecular geometry and approximate bond angle best describe NH₃?',
      answerChoices: [
        { id: 'A', text: 'Trigonal planar, 120°' },
        { id: 'B', text: 'Tetrahedral, 109.5°' },
        { id: 'C', text: 'Trigonal pyramidal, about 107°' },
        { id: 'D', text: 'Bent, about 104.5°' }
      ],
      correctAnswer: 'C',
      explanation: 'NH₃ has four electron domains (three bonds and one lone pair), giving a tetrahedral electron geometry. With one lone pair, the molecular shape is trigonal pyramidal, and lone-pair repulsion compresses the H–N–H angle slightly below 109.5° to about 107°.',
      distractorRationales: {
        A: 'Trigonal planar applies to three domains with no lone pair, such as BF₃.',
        B: 'Tetrahedral is the electron-domain geometry, but the molecular shape ignores the lone pair seen in NH₃.',
        C: '',
        D: 'Bent at 104.5° describes a molecule with two lone pairs, such as H₂O, not NH₃.'
      },
      tags: ['vsepr', 'molecular-geometry', 'lone-pair'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-chemistry-u8-buffers-calc-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-8', unitName: 'Acids and Bases', topicId: 'buffers', topicName: 'Buffers and Henderson–Hasselbalch',
      skill: 'mathematical routines', questionType: 'calculation', difficulty: 'hard',
      bloomLevel: 'apply', estimatedTimeSeconds: 180,
      prompt: 'A buffer is prepared with 0.40 M acetic acid (Ka = 1.8 × 10⁻⁵) and 0.20 M sodium acetate. Calculate the pH of this buffer. (pKa of acetic acid ≈ 4.74.)',
      correctAnswer: '4.44',
      numericTolerance: 0.05,
      acceptableAnswers: ['4.44', '4.4', '4.45'],
      explanation: 'Use the Henderson–Hasselbalch equation: pH = pKa + log([A⁻]/[HA]). pKa = −log(1.8 × 10⁻⁵) = 4.74. With [A⁻]/[HA] = 0.20/0.40 = 0.50, pH = 4.74 + log(0.50) = 4.74 − 0.30 = 4.44. The pH is below pKa because there is more weak acid than conjugate base.',
      tags: ['buffers', 'henderson-hasselbalch', 'pH', 'acid-base'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-chemistry-u9-gibbs-free-energy-mcq-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-9', unitName: 'Applications of Thermodynamics', topicId: 'gibbs-free-energy', topicName: 'Gibbs Free Energy',
      skill: 'argumentation', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'A reaction has ΔH = +55 kJ/mol and ΔS = +150 J/(mol·K). Which statement about the spontaneity of this reaction is best supported?',
      answerChoices: [
        { id: 'A', text: 'The reaction is spontaneous at all temperatures because ΔS is positive.' },
        { id: 'B', text: 'The reaction is nonspontaneous at all temperatures because ΔH is positive.' },
        { id: 'C', text: 'The reaction becomes spontaneous above a threshold temperature near 367 K.' },
        { id: 'D', text: 'The reaction becomes spontaneous below a threshold temperature near 367 K.' }
      ],
      correctAnswer: 'C',
      explanation: 'With ΔH > 0 and ΔS > 0, ΔG = ΔH − TΔS is negative only when TΔS exceeds ΔH. Setting ΔG = 0 gives T = ΔH/ΔS = 55000 J / 150 J/K ≈ 367 K. Above this temperature the −TΔS term dominates and ΔG becomes negative, so the reaction is spontaneous only at high temperature.',
      distractorRationales: {
        A: 'A positive ΔS alone does not guarantee spontaneity when ΔH is also positive.',
        B: 'A positive ΔH does not forbid spontaneity; entropy can drive the reaction at high T.',
        C: '',
        D: 'This reverses the temperature dependence; the entropy term helps at high, not low, temperature.'
      },
      tags: ['gibbs-free-energy', 'spontaneity', 'thermodynamics', 'temperature'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN with rubric (FRQ + lab-design) ───────────────────────────────
    {
      id: 'ap-chemistry-u7-le-chatelier-frq-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-7', unitName: 'Equilibrium', topicId: 'le-chatelier', topicName: 'Le Châtelier’s Principle',
      skill: 'argumentation', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'Consider the exothermic equilibrium N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g). (a) Predict and justify how increasing the total pressure (by decreasing volume) shifts the equilibrium. (b) Predict and justify how increasing the temperature affects the amount of NH₃ produced.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Le Châtelier’s principle predicts a system under stress shifts to partially relieve that stress: toward fewer gas moles under higher pressure, and in the endothermic direction when heated.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Predicts the equilibrium shifts toward NH₃ (right) when pressure increases.', evidenceRequired: 'Clear directional prediction.' },
        { id: 'r2', pointValue: 1, criterion: 'Justifies the pressure shift by comparing moles of gas.', evidenceRequired: 'Notes 4 mol reactant gas vs 2 mol product gas.' },
        { id: 'r3', pointValue: 1, criterion: 'Predicts increasing temperature decreases NH₃.', evidenceRequired: 'States the shift is to the left/reactants.' },
        { id: 'r4', pointValue: 1, criterion: 'Justifies the temperature shift using the exothermic nature of the forward reaction.', evidenceRequired: 'Treats heat as a product; added heat shifts toward reactants.' }
      ],
      modelAnswer: '(a) Increasing pressure by decreasing volume shifts the equilibrium to the right, toward NH₃. The system relieves the increased pressure by moving toward the side with fewer moles of gas: the reactant side has 4 mol of gas (1 N₂ + 3 H₂) while the product side has only 2 mol (2 NH₃), so the shift toward products lowers the total moles of gas. (b) Increasing temperature decreases the amount of NH₃. Because the forward reaction is exothermic, heat behaves like a product; adding heat stresses the product side, so the equilibrium shifts left toward reactants, reducing NH₃ and lowering K.',
      tags: ['equilibrium', 'le-chatelier', 'pressure', 'temperature', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-chemistry-u4-titration-stoichiometry-lab-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-4', unitName: 'Chemical Reactions', topicId: 'titration-stoichiometry', topicName: 'Titration Stoichiometry',
      skill: 'question and method', questionType: 'lab-design', difficulty: 'hard',
      bloomLevel: 'create', estimatedTimeSeconds: 600,
      prompt: 'You are given a solution of hydrochloric acid of unknown concentration, a standardized 0.100 M NaOH solution, and standard laboratory glassware. Design an experiment to determine the molarity of the HCl. Describe the procedure, the data you would collect, and how you would calculate the result.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A titration uses a known concentration and volume of titrant reacting in a 1:1 mole ratio with HCl to back-calculate the unknown concentration: M_acid = (M_base × V_base) / V_acid.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Specifies measuring a known volume of HCl with appropriate glassware.', evidenceRequired: 'Names a pipet/volumetric measurement of acid.' },
        { id: 'r2', pointValue: 1, criterion: 'Describes titrating with NaOH to an endpoint using an indicator or pH probe.', evidenceRequired: 'Identifies endpoint detection method.' },
        { id: 'r3', pointValue: 1, criterion: 'Identifies the data to record (volume of NaOH at the endpoint).', evidenceRequired: 'States burette volume readings collected.' },
        { id: 'r4', pointValue: 1, criterion: 'Gives a valid calculation using the 1:1 mole ratio.', evidenceRequired: 'Uses moles NaOH = moles HCl to solve for M_acid.' }
      ],
      modelAnswer: 'Use a pipet to deliver a precise, known volume (for example 25.00 mL) of the HCl into a flask and add a few drops of phenolphthalein. Fill a burette with the 0.100 M NaOH and record the initial volume. Add NaOH while swirling until the first persistent faint pink color marks the endpoint, then record the final burette volume; the difference is the volume of NaOH used. Repeat for consistent (concordant) trials. Because HCl + NaOH → NaCl + H₂O is a 1:1 reaction, moles of NaOH = moles of HCl. Calculate moles NaOH = M_base × V_base, then M_acid = moles HCl / V_acid (in liters). Averaging trials improves reliability.',
      tags: ['titration', 'lab-design', 'acid-base', 'stoichiometry'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── EXTRA: graph-interpretation + Ksp calculation ────────────────────────
    {
      id: 'ap-chemistry-u3-beers-law-graph-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-3', unitName: 'Intermolecular Forces and Properties', topicId: 'beers-law', topicName: 'Beer–Lambert Law and Spectroscopy',
      skill: 'representing data', questionType: 'graph-interpretation', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'A Beer–Lambert calibration produces a straight line through the origin of absorbance versus concentration, with absorbance = 200 × concentration (M). A sample of unknown concentration gives an absorbance of 0.60. Determine the concentration of the sample and explain how the calibration line is used.',
      graphDescription: 'A scatter plot of absorbance (y-axis, 0 to 1.0) versus concentration in mol/L (x-axis, 0 to 0.005) with points lying on a straight line passing through the origin with slope 200 M⁻¹.',
      correctAnswer: '0.0030 M',
      acceptableAnswers: ['0.0030', '0.003 M', '3.0e-3', '3 x 10^-3 M'],
      explanation: 'By Beer’s law, absorbance is directly proportional to concentration, so the calibration line’s slope (200 M⁻¹) equals molar absorptivity times path length. Solve A = 200 × c: c = 0.60 / 200 = 0.0030 M. The unknown’s absorbance is located on the line and read across to the matching concentration.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Uses the linear Beer’s law relationship A = slope × c.', evidenceRequired: 'Sets up A proportional to concentration.' },
        { id: 'r2', pointValue: 1, criterion: 'Correctly solves for the unknown concentration (0.0030 M).', evidenceRequired: 'Divides absorbance by the slope.' }
      ],
      modelAnswer: 'Because the calibration line passes through the origin and is linear, Beer’s law A = εbc applies with slope εb = 200 M⁻¹. For the unknown, 0.60 = 200 × c, so c = 0.60 / 200 = 0.0030 M. Graphically, you locate A = 0.60 on the y-axis, move horizontally to the line, and read down to the concentration axis to confirm 0.0030 M.',
      tags: ['beers-law', 'spectroscopy', 'calibration', 'graph-interpretation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-chemistry-u7-solubility-ksp-calc-001', courseId: 'ap-chemistry', courseName: 'AP Chemistry',
      unitId: 'unit-7', unitName: 'Equilibrium', topicId: 'solubility-ksp', topicName: 'Solubility Equilibria (Ksp)',
      skill: 'mathematical routines', questionType: 'calculation', difficulty: 'hard',
      bloomLevel: 'apply', estimatedTimeSeconds: 180,
      prompt: 'The solubility product of silver chloride, AgCl, is Ksp = 1.8 × 10⁻¹⁰ at 25 °C. Calculate the molar solubility of AgCl in pure water, in mol/L.',
      correctAnswer: '1.34e-5',
      numericTolerance: 0.0000005,
      acceptableAnswers: ['1.34e-5', '1.3e-5', '0.0000134', '1.34 x 10^-5'],
      explanation: 'For AgCl ⇌ Ag⁺ + Cl⁻, if molar solubility is s, then [Ag⁺] = [Cl⁻] = s, so Ksp = s². Therefore s = √(1.8 × 10⁻¹⁰) = 1.34 × 10⁻⁵ mol/L. Each mole of AgCl that dissolves releases one mole of each ion, which is why the expression is s squared.',
      tags: ['ksp', 'solubility', 'equilibrium', 'calculation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
