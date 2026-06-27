/**
 * Five & A+ — AI Question Stream · Course data: AP Physics C: Electricity and Magnetism
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) shape exactly.
 * All questions are ORIGINAL, calculus-based AP-style practice — not copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-physics-c-electricity-magnetism',
    displayName: 'AP Physics C: Electricity and Magnetism',
    description: 'Calculus-based study of electric and magnetic phenomena: electrostatics, conductors and capacitance, DC circuits, magnetic fields, and electromagnetic induction, emphasizing integral and differential field models.',
    category: 'stem',
    allowedQuestionTypes: ['mcq', 'calculation', 'data-analysis', 'graph-interpretation', 'lab-design', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'calculation', 'frq'],
    skills: [
      'calculus-based modeling',
      'mathematical reasoning',
      'experimental design',
      'field analysis',
      'circuit analysis',
      'electromagnetic reasoning'
    ],
    bigIdeas: ['Fields', 'Force Interactions', 'Conservation (Charge and Energy)', 'Change and Induction'],
    units: [
      { id: 'unit-1', name: 'Electrostatics', examWeight: '26-34%', description: 'Charge, Coulomb’s law, electric fields, flux, Gauss’s law, and electric potential.',
        topics: [
          { id: 'coulombs-law', name: 'Coulomb’s Law and Electric Force', description: 'Force between point charges and superposition of forces.', skills: ['mathematical reasoning'] },
          { id: 'electric-field', name: 'Electric Fields of Charge Distributions', description: 'Integrating dE over continuous charge distributions.', skills: ['calculus-based modeling'] },
          { id: 'gauss-law', name: 'Gauss’s Law', description: 'Using symmetry and flux to find fields of symmetric distributions.', skills: ['field analysis'] },
          { id: 'electric-potential', name: 'Electric Potential and Energy', description: 'Potential from charge distributions and the V–E gradient relationship.', skills: ['calculus-based modeling'] }
        ] },
      { id: 'unit-2', name: 'Conductors, Capacitors, Dielectrics', examWeight: '14-17%', description: 'Charge on conductors, capacitance, dielectrics, and stored energy.',
        topics: [
          { id: 'conductors', name: 'Conductors in Electrostatic Equilibrium', description: 'Surface charge, shielding, and field behavior at conductor surfaces.', skills: ['field analysis'] },
          { id: 'capacitance', name: 'Capacitance', description: 'Parallel-plate, cylindrical, and spherical capacitor geometries.', skills: ['mathematical reasoning'] },
          { id: 'dielectrics', name: 'Dielectrics and Stored Energy', description: 'Effect of dielectrics and energy density of the electric field.', skills: ['electromagnetic reasoning'] }
        ] },
      { id: 'unit-3', name: 'Electric Circuits', examWeight: '17-23%', description: 'Current, resistance, DC circuits, and RC transients.',
        topics: [
          { id: 'current-resistance', name: 'Current, Resistivity, and Power', description: 'Microscopic current, resistance, and power dissipation.', skills: ['mathematical reasoning'] },
          { id: 'kirchhoff', name: 'Kirchhoff’s Rules', description: 'Analyzing multi-loop circuits with junction and loop rules.', skills: ['circuit analysis'] },
          { id: 'rc-circuits', name: 'RC Circuits', description: 'Charging and discharging transients governed by exponential decay.', skills: ['calculus-based modeling'] }
        ] },
      { id: 'unit-4', name: 'Magnetic Fields', examWeight: '17-23%', description: 'Magnetic forces, fields of currents, Biot–Savart, and Ampère’s law.',
        topics: [
          { id: 'magnetic-force', name: 'Magnetic Force on Charges and Currents', description: 'The qv×B force and forces on current-carrying wires.', skills: ['electromagnetic reasoning'] },
          { id: 'biot-savart', name: 'Biot–Savart Law', description: 'Field from current elements by integration.', skills: ['calculus-based modeling'] },
          { id: 'amperes-law', name: 'Ampère’s Law', description: 'Field of symmetric current distributions using closed loops.', skills: ['field analysis'] }
        ] },
      { id: 'unit-5', name: 'Electromagnetism', examWeight: '14-20%', description: 'Faraday’s law, induction, inductance, and LR circuits.',
        topics: [
          { id: 'faradays-law', name: 'Faraday’s Law and Induced EMF', description: 'EMF from changing magnetic flux and Lenz’s law.', skills: ['electromagnetic reasoning'] },
          { id: 'inductance', name: 'Inductance and LR Circuits', description: 'Self-inductance, LR transients, and energy stored in fields.', skills: ['calculus-based modeling'] },
          { id: 'motional-emf', name: 'Motional EMF', description: 'EMF from conductors moving through magnetic fields.', skills: ['experimental design'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 45, weight: '50%', notes: '35 questions; calculator permitted.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'calculation', 'data-analysis', 'graph-interpretation', 'lab-design'], timingMinutes: 45, weight: '50%', notes: '3 multi-part questions including experimental design and analysis.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-physics-c-electricity-magnetism-u1-coulombs-law-mcq-001', courseId: 'ap-physics-c-electricity-magnetism', courseName: 'AP Physics C: Electricity and Magnetism',
      unitId: 'unit-1', unitName: 'Electrostatics', topicId: 'coulombs-law', topicName: 'Coulomb’s Law and Electric Force',
      skill: 'mathematical reasoning', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Two point charges separated by a distance r exert a force F on each other. If the distance is doubled to 2r while the charges are unchanged, what is the new magnitude of the force?',
      answerChoices: [
        { id: 'A', text: 'F/4' },
        { id: 'B', text: 'F/2' },
        { id: 'C', text: '2F' },
        { id: 'D', text: '4F' }
      ],
      correctAnswer: 'A',
      explanation: 'Coulomb’s law gives F ∝ 1/r². Doubling r multiplies the denominator by 4, so the force becomes F/4.',
      distractorRationales: {
        A: '',
        B: 'This treats the force as inverse to the first power of distance, but Coulomb’s law is inverse-square.',
        C: 'Force decreases with greater separation, not increases.',
        D: 'This would result if force were proportional to r², the opposite of the inverse-square dependence.'
      },
      tags: ['coulombs-law', 'inverse-square', 'electric-force'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-electricity-magnetism-u3-current-resistance-mcq-001', courseId: 'ap-physics-c-electricity-magnetism', courseName: 'AP Physics C: Electricity and Magnetism',
      unitId: 'unit-3', unitName: 'Electric Circuits', topicId: 'current-resistance', topicName: 'Current, Resistivity, and Power',
      skill: 'mathematical reasoning', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'A resistor R carries a steady current I. Which expression gives the power dissipated by the resistor?',
      answerChoices: [
        { id: 'A', text: 'I/R' },
        { id: 'B', text: 'I²R' },
        { id: 'C', text: 'IR²' },
        { id: 'D', text: 'I/R²' }
      ],
      correctAnswer: 'B',
      explanation: 'Power dissipated in a resistor is P = IV, and since V = IR, substituting gives P = I²R.',
      distractorRationales: {
        A: 'I/R has units of current over resistance and is not a power expression.',
        B: '',
        C: 'IR² incorrectly squares the resistance instead of the current.',
        D: 'I/R² does not follow from P = IV with V = IR.'
      },
      tags: ['power', 'resistance', 'ohms-law'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-electricity-magnetism-u4-magnetic-force-mcq-001', courseId: 'ap-physics-c-electricity-magnetism', courseName: 'AP Physics C: Electricity and Magnetism',
      unitId: 'unit-4', unitName: 'Magnetic Fields', topicId: 'magnetic-force', topicName: 'Magnetic Force on Charges and Currents',
      skill: 'electromagnetic reasoning', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      prompt: 'A positive charge moves with velocity v directed to the east through a uniform magnetic field B pointing north (both horizontal). What is the direction of the magnetic force on the charge?',
      answerChoices: [
        { id: 'A', text: 'Upward (out of the ground)' },
        { id: 'B', text: 'Downward (into the ground)' },
        { id: 'C', text: 'To the west' },
        { id: 'D', text: 'The force is zero' }
      ],
      correctAnswer: 'A',
      explanation: 'The force is F = qv×B. With v east (+x) and B north (+y), v×B points in +z (upward) by the right-hand rule, and q is positive, so the force is upward.',
      distractorRationales: {
        A: '',
        B: 'Downward would result for a negative charge or if the cross-product direction were reversed.',
        C: 'West would arise from an incorrect cross product; v×B is perpendicular to both v and B, hence vertical here.',
        D: 'The force is nonzero because v and B are perpendicular, giving maximum force magnitude qvB.'
      },
      tags: ['lorentz-force', 'right-hand-rule', 'cross-product'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-physics-c-electricity-magnetism-u1-gauss-law-mcq-001', courseId: 'ap-physics-c-electricity-magnetism', courseName: 'AP Physics C: Electricity and Magnetism',
      unitId: 'unit-1', unitName: 'Electrostatics', topicId: 'gauss-law', topicName: 'Gauss’s Law',
      skill: 'field analysis', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'An infinitely long, uniformly charged line has linear charge density λ. Using a coaxial cylindrical Gaussian surface, how does the magnitude of the electric field E depend on the radial distance r from the line?',
      answerChoices: [
        { id: 'A', text: 'E ∝ 1/r²' },
        { id: 'B', text: 'E ∝ 1/r' },
        { id: 'C', text: 'E is independent of r' },
        { id: 'D', text: 'E ∝ r' }
      ],
      correctAnswer: 'B',
      explanation: 'Gauss’s law with a cylinder of radius r and length L gives E(2πrL) = λL/ε₀, so E = λ/(2πε₀r), which is proportional to 1/r.',
      distractorRationales: {
        A: '1/r² is the field of a point charge, where the Gaussian surface is a sphere (area ∝ r²).',
        B: '',
        C: 'A constant field corresponds to an infinite plane of charge, not a line.',
        D: 'E does not grow with distance; the enclosed charge per unit length is fixed while the surface area grows linearly with r.'
      },
      tags: ['gauss-law', 'line-charge', 'symmetry'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-electricity-magnetism-u3-rc-circuits-calculation-001', courseId: 'ap-physics-c-electricity-magnetism', courseName: 'AP Physics C: Electricity and Magnetism',
      unitId: 'unit-3', unitName: 'Electric Circuits', topicId: 'rc-circuits', topicName: 'RC Circuits',
      skill: 'calculus-based modeling', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'A capacitor C = 4.0 μF is charged through a resistor R = 5.0 × 10³ Ω from a 12 V battery. The charge approaches Q(t) = Cε(1 − e^(−t/RC)). How long (in milliseconds) does it take for the capacitor to reach 63% of its final charge? Give your answer in ms.',
      correctAnswer: '20',
      numericTolerance: 1,
      acceptableAnswers: ['20', '20 ms', '0.02 s', '20.0'],
      explanation: 'The time constant is τ = RC = (5.0×10³ Ω)(4.0×10⁻⁶ F) = 0.020 s = 20 ms. After one time constant, the charge reaches 1 − e⁻¹ ≈ 0.632 = 63.2% of its final value, so t = τ = 20 ms.',
      tags: ['rc-circuit', 'time-constant', 'exponential'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-electricity-magnetism-u2-capacitance-calculation-001', courseId: 'ap-physics-c-electricity-magnetism', courseName: 'AP Physics C: Electricity and Magnetism',
      unitId: 'unit-2', unitName: 'Conductors, Capacitors, Dielectrics', topicId: 'capacitance', topicName: 'Capacitance',
      skill: 'mathematical reasoning', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'A parallel-plate capacitor has plate area A = 0.020 m² and plate separation d = 1.0 mm, with vacuum between the plates. Using ε₀ = 8.85 × 10⁻¹² F/m, find the capacitance in picofarads (pF).',
      correctAnswer: '177',
      numericTolerance: 3,
      acceptableAnswers: ['177', '177 pF', '1.77e-10 F', '1.77 × 10^-10'],
      explanation: 'For a parallel-plate capacitor, C = ε₀A/d = (8.85×10⁻¹² F/m)(0.020 m²)/(1.0×10⁻³ m) = 1.77×10⁻¹⁰ F = 177 pF.',
      tags: ['parallel-plate', 'capacitance', 'epsilon-naught'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-physics-c-electricity-magnetism-u1-electric-potential-calculation-001', courseId: 'ap-physics-c-electricity-magnetism', courseName: 'AP Physics C: Electricity and Magnetism',
      unitId: 'unit-1', unitName: 'Electrostatics', topicId: 'electric-potential', topicName: 'Electric Potential and Energy',
      skill: 'calculus-based modeling', questionType: 'calculation', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 240,
      prompt: 'In a region the electric potential varies as V(x) = 6x² − 4x (volts, with x in meters). The x-component of the electric field is E_x = −dV/dx. Find E_x (in V/m) at x = 2.0 m.',
      correctAnswer: '-20',
      numericTolerance: 0.5,
      acceptableAnswers: ['-20', '-20 V/m', '-20.0'],
      explanation: 'The field is the negative gradient of potential: E_x = −dV/dx = −(12x − 4) = −12x + 4. At x = 2.0 m, E_x = −12(2.0) + 4 = −24 + 4 = −20 V/m. The negative sign indicates the field points toward decreasing x at this location.',
      tags: ['potential-gradient', 'derivative', 'electric-field'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-electricity-magnetism-u4-amperes-law-mcq-001', courseId: 'ap-physics-c-electricity-magnetism', courseName: 'AP Physics C: Electricity and Magnetism',
      unitId: 'unit-4', unitName: 'Magnetic Fields', topicId: 'amperes-law', topicName: 'Ampère’s Law',
      skill: 'field analysis', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 180,
      prompt: 'A long solid cylindrical conductor of radius R carries a current I uniformly distributed over its cross-section. Using Ampère’s law, which statement correctly describes the magnetic field magnitude B at a radius r inside the conductor (r < R)?',
      answerChoices: [
        { id: 'A', text: 'B is constant and equal to μ₀I/(2πR) for all r < R.' },
        { id: 'B', text: 'B ∝ 1/r, the same form as outside the wire.' },
        { id: 'C', text: 'B ∝ r, increasing linearly from zero at the axis to a maximum at r = R.' },
        { id: 'D', text: 'B = 0 everywhere inside because the conductor shields its interior.' }
      ],
      correctAnswer: 'C',
      explanation: 'The enclosed current at radius r is I_enc = I(r²/R²) since current is uniform. Ampère’s law gives B(2πr) = μ₀I(r²/R²), so B = μ₀Ir/(2πR²), which is proportional to r and rises linearly to a maximum at r = R.',
      distractorRationales: {
        A: 'B is not constant inside; the enclosed current grows with r² while the path length grows with r.',
        B: 'B ∝ 1/r holds only outside the conductor where all of I is enclosed.',
        C: '',
        D: 'Magnetic fields are not shielded the way static electric fields are inside conductors; the field is nonzero for r > 0.'
      },
      tags: ['amperes-law', 'cylindrical-conductor', 'enclosed-current'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN (FRQ + lab-design) ───────────────────────────────────────────
    {
      id: 'ap-physics-c-electricity-magnetism-u5-faradays-law-frq-001', courseId: 'ap-physics-c-electricity-magnetism', courseName: 'AP Physics C: Electricity and Magnetism',
      unitId: 'unit-5', unitName: 'Electromagnetism', topicId: 'faradays-law', topicName: 'Faraday’s Law and Induced EMF',
      skill: 'electromagnetic reasoning', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'A circular conducting loop of radius a and resistance R lies flat in a uniform magnetic field directed perpendicular to its plane. The field magnitude increases with time as B(t) = B₀ + kt, where k > 0. (a) Derive an expression for the magnitude of the induced EMF in the loop. (b) Determine the magnitude of the induced current and use Lenz’s law to state its direction (as viewed along the field). (c) Explain what happens to the induced current if the field instead became constant after some time.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Faraday’s law states EMF = −dΦ_B/dt, where Φ_B = BA. With a fixed area, only B changes in time, so the rate of change of flux is A(dB/dt).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Computes flux Φ_B = B(t)·πa² and applies Faraday’s law.', evidenceRequired: 'Shows Φ_B = (B₀+kt)πa² and EMF = |dΦ/dt|.' },
        { id: 'r2', pointValue: 1, criterion: 'Obtains EMF = kπa².', evidenceRequired: 'Differentiates B(t) to get dB/dt = k and multiplies by area.' },
        { id: 'r3', pointValue: 1, criterion: 'Finds induced current I = kπa²/R.', evidenceRequired: 'Applies I = EMF/R.' },
        { id: 'r4', pointValue: 1, criterion: 'States direction by Lenz’s law (opposes increasing flux).', evidenceRequired: 'Current opposes the increase, i.e. its field points opposite to B inside the loop.' },
        { id: 'r5', pointValue: 1, criterion: 'Explains current goes to zero when B is constant.', evidenceRequired: 'No changing flux means no induced EMF.' }
      ],
      modelAnswer: '(a) The flux is Φ_B = B(t)·πa² = (B₀ + kt)πa². By Faraday’s law, EMF = |dΦ_B/dt| = πa²·dB/dt = πa²k = kπa². (b) The induced current is I = EMF/R = kπa²/R. Because the flux through the loop is increasing, by Lenz’s law the induced current flows so as to oppose that increase—it circulates to create a magnetic field opposite to the external field inside the loop (counterclockwise when viewed with the external field pointing toward you). (c) If B becomes constant, dB/dt = 0, so dΦ_B/dt = 0 and the induced EMF and current both drop to zero; induction requires a changing flux.',
      tags: ['faradays-law', 'lenz-law', 'induced-emf', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-electricity-magnetism-u5-motional-emf-lab-design-001', courseId: 'ap-physics-c-electricity-magnetism', courseName: 'AP Physics C: Electricity and Magnetism',
      unitId: 'unit-5', unitName: 'Electromagnetism', topicId: 'motional-emf', topicName: 'Motional EMF',
      skill: 'experimental design', questionType: 'lab-design', difficulty: 'hard',
      bloomLevel: 'create', estimatedTimeSeconds: 600,
      prompt: 'A conducting rod of length L slides at constant speed along two parallel frictionless rails connected by a resistor, all within a uniform magnetic field perpendicular to the plane of the rails. Design an experiment to verify that the induced EMF is proportional to the rod’s speed. Identify the independent and dependent variables, the measurements and equipment, and how you would analyze the data to support or refute the relationship EMF = BLv.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Motional EMF for a rod moving through a perpendicular field is EMF = BLv, so a controlled experiment should vary v and measure the resulting EMF while holding B and L fixed.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies independent variable (rod speed v) and dependent variable (induced EMF or voltage).', evidenceRequired: 'Names both variables explicitly.' },
        { id: 'r2', pointValue: 1, criterion: 'Specifies controlled variables and equipment.', evidenceRequired: 'Holds B and L constant; lists voltmeter, motion sensor/timer, known field source.' },
        { id: 'r3', pointValue: 1, criterion: 'Describes a valid measurement procedure with repeated trials at several speeds.', evidenceRequired: 'Measures EMF at multiple known speeds.' },
        { id: 'r4', pointValue: 1, criterion: 'Describes data analysis using a linear graph.', evidenceRequired: 'Plots EMF vs v; expects a straight line through the origin with slope BL.' }
      ],
      modelAnswer: 'Independent variable: the rod’s speed v; dependent variable: the induced EMF (measured as the voltage across the resistor with a high-impedance voltmeter, or the rod’s open-circuit voltage). Controlled variables: magnetic field strength B (fixed magnet/Helmholtz setup), rod length L, and rail geometry. Equipment: parallel rails, a sliding rod, a known uniform field, a motion sensor or photogates to measure speed, and a voltmeter/data logger for EMF. Procedure: pull the rod at several constant speeds, recording v with the photogates and the corresponding steady EMF for several trials at each speed; average trials to reduce random error. Analysis: plot EMF on the y-axis versus v on the x-axis. If EMF = BLv, the data should fall on a straight line through the origin with slope equal to BL. Compute the slope and compare it to the product of the measured B and L; agreement within experimental uncertainty supports the relationship, while systematic curvature or a nonzero intercept would refute simple proportionality.',
      tags: ['motional-emf', 'experimental-design', 'graph-analysis', 'lab-design'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
