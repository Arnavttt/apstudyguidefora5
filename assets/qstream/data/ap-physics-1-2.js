/**
 * Five & A+ — AI Question Stream · Course data: AP Physics 1 & 2
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the AP Biology GOLD TEMPLATE shape exactly.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Equations use LaTeX. Dual-exported: browser registers into
 * window.__FA_QSTREAM_DATA__, Node exports via module.exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-physics-1-2',
    displayName: 'AP Physics 1 & 2',
    description: 'Algebra-based physics spanning mechanics, waves, fluids, thermodynamics, electricity, magnetism, optics, and modern physics, organized around models, mathematical routines, and experimental reasoning.',
    category: 'stem',
    allowedQuestionTypes: ['mcq', 'calculation', 'data-analysis', 'graph-interpretation', 'lab-design', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'calculation', 'frq'],
    skills: [
      'models',
      'mathematical routines',
      'scientific questioning',
      'experimental design',
      'data analysis',
      'argumentation'
    ],
    bigIdeas: ['Systems', 'Fields', 'Force Interactions', 'Conservation', 'Waves'],
    units: [
      { id: 'unit-1', name: 'Kinematics', examWeight: '10-15%', description: 'Describing motion in one and two dimensions.',
        topics: [
          { id: 'kinematics-1d', name: 'One-Dimensional Motion', description: 'Position, velocity, acceleration, and kinematic equations.', skills: ['mathematical routines'] },
          { id: 'free-fall', name: 'Free Fall and Vertical Motion', description: 'Motion under constant gravitational acceleration.', skills: ['models'] },
          { id: 'projectile-motion', name: 'Projectile Motion', description: 'Independent horizontal and vertical components of motion.', skills: ['mathematical routines'] }
        ] },
      { id: 'unit-2', name: 'Dynamics', examWeight: '12-18%', description: 'Forces and Newton’s laws of motion.',
        topics: [
          { id: 'newtons-laws', name: 'Newton’s Laws', description: 'Inertia, net force, and action–reaction pairs.', skills: ['models'] },
          { id: 'friction', name: 'Friction and Inclines', description: 'Static and kinetic friction on flat and inclined surfaces.', skills: ['mathematical routines'] },
          { id: 'free-body-diagrams', name: 'Free-Body Diagrams', description: 'Representing forces acting on a system.', skills: ['argumentation'] }
        ] },
      { id: 'unit-3', name: 'Circular Motion and Gravitation', examWeight: '4-6%', description: 'Uniform circular motion and universal gravitation.',
        topics: [
          { id: 'uniform-circular', name: 'Uniform Circular Motion', description: 'Centripetal acceleration and force.', skills: ['mathematical routines'] },
          { id: 'gravitation', name: 'Newtonian Gravitation', description: 'Universal law of gravitation and orbital motion.', skills: ['models'] }
        ] },
      { id: 'unit-4', name: 'Energy', examWeight: '16-24%', description: 'Work, kinetic and potential energy, and conservation.',
        topics: [
          { id: 'work-energy', name: 'Work and the Work–Energy Theorem', description: 'Work done by forces and changes in kinetic energy.', skills: ['mathematical routines'] },
          { id: 'conservation-energy', name: 'Conservation of Energy', description: 'Mechanical energy conservation and energy transfer.', skills: ['argumentation'] },
          { id: 'power', name: 'Power', description: 'Rate of energy transfer.', skills: ['mathematical routines'] }
        ] },
      { id: 'unit-5', name: 'Momentum', examWeight: '10-16%', description: 'Impulse, momentum, and collisions.',
        topics: [
          { id: 'impulse-momentum', name: 'Impulse and Momentum', description: 'Impulse–momentum theorem and force–time graphs.', skills: ['mathematical routines'] },
          { id: 'collisions', name: 'Collisions', description: 'Elastic and inelastic collisions and conservation of momentum.', skills: ['models'] }
        ] },
      { id: 'unit-6', name: 'Simple Harmonic Motion', examWeight: '2-4%', description: 'Oscillations of springs and pendulums.',
        topics: [
          { id: 'springs-shm', name: 'Spring Oscillators', description: 'Restoring force, period, and energy in mass–spring systems.', skills: ['mathematical routines'] },
          { id: 'pendulums', name: 'Simple Pendulums', description: 'Period dependence and small-angle approximation.', skills: ['experimental design'] }
        ] },
      { id: 'unit-7', name: 'Torque and Rotational Motion', examWeight: '10-16%', description: 'Rotational kinematics, torque, and angular momentum.',
        topics: [
          { id: 'torque', name: 'Torque and Equilibrium', description: 'Rotational analog of force and rotational equilibrium.', skills: ['models'] },
          { id: 'rotational-dynamics', name: 'Rotational Dynamics', description: 'Moment of inertia and rotational form of Newton’s second law.', skills: ['mathematical routines'] },
          { id: 'angular-momentum', name: 'Angular Momentum', description: 'Conservation of angular momentum.', skills: ['argumentation'] }
        ] },
      { id: 'unit-8', name: 'Electric Charge and Electric Force', examWeight: '4-6%', description: 'Charge, charging processes, and Coulomb’s law.',
        topics: [
          { id: 'charge', name: 'Electric Charge and Conservation', description: 'Charging by friction, conduction, and induction.', skills: ['models'] },
          { id: 'coulombs-law', name: 'Coulomb’s Law', description: 'Force between point charges.', skills: ['mathematical routines'] }
        ] },
      { id: 'unit-9', name: 'DC Circuits', examWeight: '6-8%', description: 'Current, resistance, and circuit analysis.',
        topics: [
          { id: 'ohms-law', name: 'Ohm’s Law and Resistance', description: 'Relationship among voltage, current, and resistance.', skills: ['mathematical routines'] },
          { id: 'series-parallel', name: 'Series and Parallel Circuits', description: 'Equivalent resistance and Kirchhoff’s rules.', skills: ['data analysis'] }
        ] },
      { id: 'unit-10', name: 'Mechanical Waves and Sound', examWeight: '12-16%', description: 'Wave properties, superposition, and sound.',
        topics: [
          { id: 'wave-properties', name: 'Wave Properties', description: 'Wavelength, frequency, speed, and the wave equation.', skills: ['mathematical routines'] },
          { id: 'standing-waves', name: 'Standing Waves and Resonance', description: 'Harmonics on strings and in air columns.', skills: ['models'] },
          { id: 'doppler', name: 'Doppler Effect', description: 'Shift in observed frequency due to relative motion.', skills: ['argumentation'] }
        ] },
      { id: 'unit-11', name: 'Fluids', examWeight: '10-12%', description: 'Density, pressure, buoyancy, and fluid flow.',
        topics: [
          { id: 'pressure-density', name: 'Pressure and Density', description: 'Hydrostatic pressure in fluids at rest.', skills: ['mathematical routines'] },
          { id: 'buoyancy', name: 'Buoyancy and Archimedes’ Principle', description: 'Floating, sinking, and buoyant force.', skills: ['models'] },
          { id: 'fluid-flow', name: 'Continuity and Bernoulli', description: 'Conservation of mass and energy in moving fluids.', skills: ['argumentation'] }
        ] },
      { id: 'unit-12', name: 'Thermodynamics', examWeight: '12-18%', description: 'Heat, temperature, and the gas laws.',
        topics: [
          { id: 'heat-transfer', name: 'Heat and Temperature', description: 'Thermal energy, specific heat, and heat transfer.', skills: ['mathematical routines'] },
          { id: 'ideal-gas', name: 'Ideal Gas Law and Kinetic Theory', description: 'PV = nRT and molecular interpretation of temperature.', skills: ['models'] },
          { id: 'thermo-laws', name: 'Laws of Thermodynamics', description: 'First law, PV diagrams, and entropy.', skills: ['data analysis'] }
        ] },
      { id: 'unit-13', name: 'Electric Force, Field, and Potential', examWeight: '10-12%', description: 'Electric fields, potential, and capacitors.',
        topics: [
          { id: 'electric-field', name: 'Electric Fields', description: 'Field of point charges and field lines.', skills: ['models'] },
          { id: 'electric-potential', name: 'Electric Potential and Energy', description: 'Potential difference and potential energy of charges.', skills: ['mathematical routines'] }
        ] },
      { id: 'unit-14', name: 'Geometric and Physical Optics', examWeight: '12-16%', description: 'Reflection, refraction, lenses, and interference.',
        topics: [
          { id: 'reflection-refraction', name: 'Reflection and Refraction', description: 'Law of reflection and Snell’s law.', skills: ['mathematical routines'] },
          { id: 'lenses-mirrors', name: 'Lenses and Mirrors', description: 'Image formation and the thin-lens equation.', skills: ['models'] },
          { id: 'interference-diffraction', name: 'Interference and Diffraction', description: 'Two-slit interference and the wave nature of light.', skills: ['argumentation'] }
        ] },
      { id: 'unit-15', name: 'Quantum, Atomic, and Nuclear Physics', examWeight: '10-12%', description: 'Photons, atomic models, and nuclear processes.',
        topics: [
          { id: 'photoelectric', name: 'Photons and the Photoelectric Effect', description: 'Quantization of light and photon energy.', skills: ['argumentation'] },
          { id: 'atomic-models', name: 'Atomic Energy Levels', description: 'Discrete energy levels and emission spectra.', skills: ['models'] },
          { id: 'nuclear', name: 'Nuclear Physics', description: 'Radioactive decay, mass–energy equivalence, and reactions.', skills: ['mathematical routines'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 80, weight: '50%', notes: 'Single-select and multi-correct items, including qualitative and quantitative reasoning.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'data-analysis', 'graph-interpretation', 'lab-design', 'short-answer'], timingMinutes: 100, weight: '50%', notes: 'Includes experimental design, qualitative/quantitative translation, and paragraph-length argument items.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-physics-1-2-u1-kinematics-1d-mcq-001', courseId: 'ap-physics-1-2', courseName: 'AP Physics 1 & 2',
      unitId: 'unit-1', unitName: 'Kinematics', topicId: 'kinematics-1d', topicName: 'One-Dimensional Motion',
      skill: 'models', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'A car moves along a straight road with constant velocity. Which statement about its acceleration is correct?',
      answerChoices: [
        { id: 'A', text: 'The acceleration is constant and nonzero.' },
        { id: 'B', text: 'The acceleration is zero.' },
        { id: 'C', text: 'The acceleration increases steadily with time.' },
        { id: 'D', text: 'The acceleration equals the velocity divided by time.' }
      ],
      correctAnswer: 'B',
      explanation: 'Acceleration is the rate of change of velocity, $a = \\frac{\\Delta v}{\\Delta t}$. If velocity is constant, $\\Delta v = 0$, so the acceleration is zero.',
      distractorRationales: {
        A: 'Constant velocity means no change in velocity, so acceleration cannot be nonzero.',
        B: '',
        C: 'A steadily increasing acceleration would require a changing velocity, contradicting constant velocity.',
        D: 'Acceleration is the change in velocity over time, not velocity divided by time.'
      },
      tags: ['kinematics', 'velocity', 'acceleration'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-1-2-u2-newtons-laws-mcq-001', courseId: 'ap-physics-1-2', courseName: 'AP Physics 1 & 2',
      unitId: 'unit-2', unitName: 'Dynamics', topicId: 'newtons-laws', topicName: 'Newton’s Laws',
      skill: 'models', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'A book rests on a level table. The table pushes up on the book with a normal force. According to Newton’s third law, what is the reaction force to this normal force?',
      answerChoices: [
        { id: 'A', text: 'The gravitational pull of Earth on the book' },
        { id: 'B', text: 'The weight of the book pressing on the table' },
        { id: 'C', text: 'The downward force the book exerts on the table' },
        { id: 'D', text: 'The friction force between the book and the table' }
      ],
      correctAnswer: 'C',
      explanation: 'A third-law pair acts between the same two objects in opposite directions. The table pushes up on the book, so the reaction is the book pushing down on the table with an equal magnitude force.',
      distractorRationales: {
        A: 'Earth’s gravity on the book pairs with the book’s gravity on Earth, a different interaction.',
        B: 'Weight is the gravitational force, not the reaction to the contact normal force.',
        C: '',
        D: 'Friction is a separate (tangential) interaction, not the reaction to the normal force.'
      },
      tags: ['newtons-laws', 'third-law', 'normal-force'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-1-2-u9-ohms-law-mcq-001', courseId: 'ap-physics-1-2', courseName: 'AP Physics 1 & 2',
      unitId: 'unit-9', unitName: 'DC Circuits', topicId: 'ohms-law', topicName: 'Ohm’s Law and Resistance',
      skill: 'mathematical routines', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'apply', estimatedTimeSeconds: 75,
      prompt: 'A resistor of $4\\ \\Omega$ is connected across a $12\\ \\text{V}$ battery. What current flows through the resistor?',
      answerChoices: [
        { id: 'A', text: '$0.33\\ \\text{A}$' },
        { id: 'B', text: '$3\\ \\text{A}$' },
        { id: 'C', text: '$16\\ \\text{A}$' },
        { id: 'D', text: '$48\\ \\text{A}$' }
      ],
      correctAnswer: 'B',
      explanation: 'By Ohm’s law, $I = \\frac{V}{R} = \\frac{12\\ \\text{V}}{4\\ \\Omega} = 3\\ \\text{A}$.',
      distractorRationales: {
        A: 'This is $R/V$, the inverse of the correct ratio.',
        B: '',
        C: 'This adds voltage and resistance ($12 + 4$), which is not a valid operation.',
        D: 'This multiplies voltage by resistance ($12 \\times 4$) instead of dividing.'
      },
      tags: ['ohms-law', 'current', 'circuits'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-physics-1-2-u4-conservation-energy-mcq-001', courseId: 'ap-physics-1-2', courseName: 'AP Physics 1 & 2',
      unitId: 'unit-4', unitName: 'Energy', topicId: 'conservation-energy', topicName: 'Conservation of Energy',
      skill: 'argumentation', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'A ball is released from rest at the top of a frictionless ramp of height $h$. Ignoring air resistance, what is the speed of the ball at the bottom of the ramp?',
      answerChoices: [
        { id: 'A', text: '$\\sqrt{gh}$' },
        { id: 'B', text: '$\\sqrt{2gh}$' },
        { id: 'C', text: '$2gh$' },
        { id: 'D', text: '$gh$' }
      ],
      correctAnswer: 'B',
      explanation: 'With no friction, mechanical energy is conserved: $mgh = \\tfrac{1}{2}mv^2$. Solving for $v$ gives $v = \\sqrt{2gh}$, independent of mass.',
      distractorRationales: {
        A: 'This omits the factor of 2 from $\\tfrac{1}{2}mv^2$.',
        B: '',
        C: 'This is $v^2$, not $v$; you must take the square root.',
        D: 'This has incorrect units and skips both the square root and the factor of 2.'
      },
      tags: ['energy-conservation', 'kinetic-energy', 'ramp'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-1-2-u11-buoyancy-calculation-001', courseId: 'ap-physics-1-2', courseName: 'AP Physics 1 & 2',
      unitId: 'unit-11', unitName: 'Fluids', topicId: 'buoyancy', topicName: 'Buoyancy and Archimedes’ Principle',
      skill: 'mathematical routines', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'A solid object of volume $2.0 \\times 10^{-3}\\ \\text{m}^3$ is fully submerged in water of density $1000\\ \\text{kg/m}^3$. Using $g = 9.8\\ \\text{m/s}^2$, calculate the magnitude of the buoyant force on the object in newtons.',
      correctAnswer: '19.6',
      numericTolerance: 0.3,
      acceptableAnswers: ['19.6', '19.6 N', '20', '~20 N'],
      explanation: 'The buoyant force equals the weight of displaced fluid: $F_B = \\rho V g = (1000)(2.0\\times10^{-3})(9.8) = 19.6\\ \\text{N}$. The displaced volume equals the object’s full volume because it is completely submerged.',
      tags: ['buoyancy', 'archimedes', 'fluids', 'calculation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-1-2-u12-thermo-laws-graph-001', courseId: 'ap-physics-1-2', courseName: 'AP Physics 1 & 2',
      unitId: 'unit-12', unitName: 'Thermodynamics', topicId: 'thermo-laws', topicName: 'Laws of Thermodynamics',
      skill: 'data analysis', questionType: 'graph-interpretation', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'A fixed quantity of ideal gas is taken through the process shown in the table, which lists pressure and volume at the start and end of a straight-line segment on a PV diagram. Determine whether the gas does work on its surroundings or has work done on it, and estimate the magnitude of the work using the area under the path.',
      dataTable: { columns: ['Point', 'Pressure (kPa)', 'Volume (m^3)'], rows: [['Start', '200', '0.01'], ['End', '200', '0.04']] },
      graphDescription: 'On a PV diagram, the gas moves horizontally to the right at constant pressure of 200 kPa from a volume of 0.01 m^3 to 0.04 m^3.',
      correctAnswer: 'The gas does about 6000 J of work on the surroundings.',
      acceptableAnswers: ['6000 J', '6 kJ', 'gas does work, ~6000 J'],
      explanation: 'At constant pressure, $W = P\\,\\Delta V = (200\\times10^3\\ \\text{Pa})(0.04 - 0.01\\ \\text{m}^3) = 6000\\ \\text{J}$. Because the volume increases, the gas expands and does positive work on its surroundings.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies that the gas does work on the surroundings (expansion).', evidenceRequired: 'States volume increases so work is done by the gas.' },
        { id: 'r2', pointValue: 1, criterion: 'Computes work as area under the path, $W = P\\Delta V$.', evidenceRequired: 'Shows $W \\approx 6000\\ \\text{J}$.' }
      ],
      modelAnswer: 'The path is at constant pressure (isobaric) with increasing volume, so the gas expands and does positive work on the surroundings. The work equals the rectangular area under the path: $W = P\\,\\Delta V = (200\\times10^3)(0.03) = 6000\\ \\text{J}$.',
      tags: ['thermodynamics', 'pv-diagram', 'work'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-physics-1-2-u5-collisions-calculation-001', courseId: 'ap-physics-1-2', courseName: 'AP Physics 1 & 2',
      unitId: 'unit-5', unitName: 'Momentum', topicId: 'collisions', topicName: 'Collisions',
      skill: 'mathematical routines', questionType: 'calculation', difficulty: 'hard',
      bloomLevel: 'apply', estimatedTimeSeconds: 180,
      prompt: 'A $2.0\\ \\text{kg}$ cart moving at $3.0\\ \\text{m/s}$ collides head-on and sticks to a stationary $1.0\\ \\text{kg}$ cart on a frictionless track. Calculate the speed of the combined carts immediately after the collision in m/s.',
      correctAnswer: '2.0',
      numericTolerance: 0.05,
      acceptableAnswers: ['2.0', '2 m/s', '2.0 m/s'],
      explanation: 'In a perfectly inelastic collision momentum is conserved: $m_1 v_1 = (m_1 + m_2)v_f$. So $v_f = \\frac{(2.0)(3.0)}{2.0 + 1.0} = \\frac{6.0}{3.0} = 2.0\\ \\text{m/s}$. Kinetic energy is not conserved because the carts stick together.',
      tags: ['momentum', 'inelastic-collision', 'conservation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-1-2-u14-interference-diffraction-mcq-001', courseId: 'ap-physics-1-2', courseName: 'AP Physics 1 & 2',
      unitId: 'unit-14', unitName: 'Geometric and Physical Optics', topicId: 'interference-diffraction', topicName: 'Interference and Diffraction',
      skill: 'argumentation', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 165,
      prompt: 'In a double-slit experiment with monochromatic light, the slit separation $d$ is decreased while everything else is held constant. Which result and reasoning are best supported?',
      answerChoices: [
        { id: 'A', text: 'The bright fringes spread farther apart because fringe spacing is proportional to $1/d$.' },
        { id: 'B', text: 'The bright fringes move closer together because fringe spacing is proportional to $d$.' },
        { id: 'C', text: 'The fringe pattern disappears because interference requires large $d$.' },
        { id: 'D', text: 'The fringe spacing is unchanged because it depends only on wavelength.' }
      ],
      correctAnswer: 'A',
      explanation: 'For small angles the fringe spacing on a screen is $\\Delta y = \\frac{\\lambda L}{d}$. Spacing is inversely proportional to $d$, so decreasing $d$ increases $\\Delta y$, spreading the bright fringes farther apart.',
      distractorRationales: {
        A: '',
        B: 'This reverses the relationship; spacing varies as $1/d$, not $d$.',
        C: 'Interference still occurs for small slit separations; the pattern simply spreads out.',
        D: 'Spacing depends on $\\lambda$, $L$, and $d$, so changing $d$ does change it.'
      },
      tags: ['double-slit', 'interference', 'optics', 'fringe-spacing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN (lab-design + FRQ) WITH RUBRICS ──────────────────────────────
    {
      id: 'ap-physics-1-2-u6-pendulums-lab-001', courseId: 'ap-physics-1-2', courseName: 'AP Physics 1 & 2',
      unitId: 'unit-6', unitName: 'Simple Harmonic Motion', topicId: 'pendulums', topicName: 'Simple Pendulums',
      skill: 'experimental design', questionType: 'lab-design', difficulty: 'hard',
      bloomLevel: 'create', estimatedTimeSeconds: 600,
      prompt: 'You are given string, a set of hanging masses, a meterstick, a protractor, and a stopwatch. Design an experiment to determine experimentally how the period of a simple pendulum depends on its length. Describe the procedure, the data you would collect, and how you would analyze the data to reveal the relationship.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'For a simple pendulum at small angles, $T = 2\\pi\\sqrt{\\frac{L}{g}}$, so the period depends on length (and $g$) but not on mass or small amplitude. A graph of $T^2$ versus $L$ should be linear with slope $\\frac{4\\pi^2}{g}$.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies length as the independent variable and period as the dependent variable, holding mass and small amplitude constant.', evidenceRequired: 'Names controlled, independent, and dependent variables.' },
        { id: 'r2', pointValue: 1, criterion: 'Describes a valid measurement procedure (timing multiple oscillations to reduce error).', evidenceRequired: 'Measures total time for several swings and divides.' },
        { id: 'r3', pointValue: 1, criterion: 'Specifies collecting period at several different lengths with repeated trials.', evidenceRequired: 'Multiple lengths and repeated measurements.' },
        { id: 'r4', pointValue: 1, criterion: 'Describes a linearized analysis (plot $T^2$ vs $L$) to reveal the relationship.', evidenceRequired: 'Linear graph or stated proportionality $T \\propto \\sqrt{L}$.' }
      ],
      modelAnswer: 'Vary the length of the string (independent variable) while keeping the same hanging mass and a small release angle (< 10°) constant. For each of at least five lengths, measure the length with the meterstick and time 10 complete oscillations with the stopwatch, then divide by 10 to find the period; repeat three times per length and average to reduce timing error. Plot $T^2$ on the vertical axis versus $L$ on the horizontal axis. A straight line through the origin confirms $T^2 \\propto L$, i.e. $T \\propto \\sqrt{L}$, and the slope $\\frac{4\\pi^2}{g}$ can be used to find $g$.',
      tags: ['pendulum', 'experimental-design', 'period', 'lab'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-1-2-u15-photoelectric-frq-001', courseId: 'ap-physics-1-2', courseName: 'AP Physics 1 & 2',
      unitId: 'unit-15', unitName: 'Quantum, Atomic, and Nuclear Physics', topicId: 'photoelectric', topicName: 'Photons and the Photoelectric Effect',
      skill: 'argumentation', questionType: 'frq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'In a photoelectric experiment, light below a certain threshold frequency ejects no electrons from a metal, no matter how intense the light. Light above the threshold ejects electrons immediately, even when dim. (a) Explain why these observations support a particle (photon) model of light rather than a purely wave model. (b) Predict and justify how increasing the intensity of light above the threshold frequency affects the number and the maximum kinetic energy of the ejected electrons.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Photon energy is $E = hf$. A purely wave model predicts that enough intensity over time should always eject electrons, which contradicts the threshold; the photon model explains it because each photon delivers a fixed quantum of energy.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Explains that a threshold frequency implies energy comes in discrete photons of energy $hf$.', evidenceRequired: 'Links threshold to per-photon energy $E = hf$.' },
        { id: 'r2', pointValue: 1, criterion: 'States why the wave model fails (intensity alone should eventually eject electrons).', evidenceRequired: 'Contrasts wave prediction with observation.' },
        { id: 'r3', pointValue: 1, criterion: 'Predicts more intensity ejects more electrons.', evidenceRequired: 'Intensity increases electron count.' },
        { id: 'r4', pointValue: 1, criterion: 'Predicts maximum kinetic energy is unchanged by intensity (depends on frequency).', evidenceRequired: 'Max KE set by frequency, not intensity.' }
      ],
      modelAnswer: '(a) The existence of a threshold frequency shows light delivers energy in discrete packets (photons) of energy $E = hf$. Only a photon with enough energy can free an electron; below the threshold no single photon has enough energy, so no electrons leave regardless of how many photons arrive. A purely wave model predicts that sufficient intensity over time should accumulate enough energy to eject electrons at any frequency, which is not observed. (b) Above the threshold, increasing intensity means more photons per second, so more electrons are ejected per second (greater current). However, the maximum kinetic energy of each electron, $KE_{max} = hf - \\phi$, depends only on the frequency and the work function $\\phi$, not on intensity, so the maximum kinetic energy stays the same.',
      tags: ['photoelectric-effect', 'photons', 'quantum', 'argumentation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
