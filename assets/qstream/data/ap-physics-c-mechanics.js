/**
 * Five & A+ — AI Question Stream · Course data: AP Physics C: Mechanics
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the AP Biology GOLD TEMPLATE shape exactly.
 * Calculus-based mechanics. Prompts use LaTeX; calculation items carry
 * numericTolerance + acceptableAnswers. All questions are ORIGINAL, AP-style
 * practice — not copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-physics-c-mechanics',
    displayName: 'AP Physics C: Mechanics',
    description: 'Calculus-based study of classical mechanics: kinematics, Newtons laws, work and energy, momentum, rotational dynamics, oscillations, and gravitation, with an emphasis on modeling and experimental design.',
    category: 'stem',
    allowedQuestionTypes: ['mcq', 'calculation', 'data-analysis', 'graph-interpretation', 'lab-design', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'calculation', 'frq'],
    skills: [
      'calculus-based modeling',
      'kinematics',
      'forces',
      'energy',
      'momentum',
      'rotation',
      'oscillations',
      'experimental design'
    ],
    bigIdeas: ['Change', 'Force Interactions', 'Fields', 'Conservation'],
    units: [
      { id: 'unit-1', name: 'Kinematics', examWeight: '10-15%', description: 'Describing motion in one and two dimensions using calculus.',
        topics: [
          { id: 'motion-derivatives', name: 'Position, Velocity, and Acceleration', description: 'Relating x(t), v(t), and a(t) through differentiation and integration.', skills: ['calculus-based modeling'] },
          { id: 'projectile-motion', name: 'Projectile and 2D Motion', description: 'Independent horizontal and vertical components of motion.', skills: ['kinematics'] },
          { id: 'kinematics-graphs', name: 'Motion Graphs', description: 'Interpreting slopes and areas of motion graphs.', skills: ['kinematics'] }
        ] },
      { id: 'unit-2', name: 'Newtons Laws of Motion', examWeight: '20-25%', description: 'Forces, free-body diagrams, and dynamics.',
        topics: [
          { id: 'free-body-diagrams', name: 'Free-Body Diagrams and Newtons Second Law', description: 'Applying Sigma-F = ma to multi-force systems.', skills: ['forces'] },
          { id: 'friction-inclines', name: 'Friction and Inclined Planes', description: 'Static and kinetic friction on flat and inclined surfaces.', skills: ['forces'] },
          { id: 'resistive-forces', name: 'Drag and Terminal Velocity', description: 'Velocity-dependent forces and the differential equations they produce.', skills: ['calculus-based modeling'] }
        ] },
      { id: 'unit-3', name: 'Work, Energy, and Power', examWeight: '15-25%', description: 'Energy methods and conservation.',
        topics: [
          { id: 'work-integral', name: 'Work and the Work-Energy Theorem', description: 'Computing work as the integral of force over displacement.', skills: ['energy'] },
          { id: 'conservation-energy', name: 'Conservation of Mechanical Energy', description: 'Relating kinetic, potential, and nonconservative work.', skills: ['energy'] },
          { id: 'power', name: 'Power', description: 'Instantaneous and average power in mechanical systems.', skills: ['energy'] }
        ] },
      { id: 'unit-4', name: 'Systems of Particles and Linear Momentum', examWeight: '10-20%', description: 'Momentum, impulse, collisions, and center of mass.',
        topics: [
          { id: 'impulse-momentum', name: 'Impulse and Momentum', description: 'Relating impulse to the change in momentum.', skills: ['momentum'] },
          { id: 'collisions', name: 'Collisions and Conservation of Momentum', description: 'Elastic and inelastic collisions in isolated systems.', skills: ['momentum'] },
          { id: 'center-of-mass', name: 'Center of Mass', description: 'Locating and tracking the center of mass of a system.', skills: ['calculus-based modeling'] }
        ] },
      { id: 'unit-5', name: 'Rotation', examWeight: '10-15%', description: 'Rotational kinematics, torque, and angular momentum.',
        topics: [
          { id: 'rotational-kinematics', name: 'Rotational Kinematics and Inertia', description: 'Angular variables and moment of inertia by integration.', skills: ['rotation'] },
          { id: 'torque-dynamics', name: 'Torque and Rotational Dynamics', description: 'Applying tau = I*alpha to rigid bodies.', skills: ['rotation'] },
          { id: 'angular-momentum', name: 'Angular Momentum', description: 'Conservation of angular momentum in isolated systems.', skills: ['rotation'] }
        ] },
      { id: 'unit-6', name: 'Oscillations', examWeight: '10-15%', description: 'Simple harmonic motion and periodic systems.',
        topics: [
          { id: 'shm', name: 'Simple Harmonic Motion', description: 'Restoring forces, angular frequency, and energy in SHM.', skills: ['oscillations'] },
          { id: 'pendulums', name: 'Pendulums', description: 'Period of simple and physical pendulums in the small-angle limit.', skills: ['oscillations'] }
        ] },
      { id: 'unit-7', name: 'Gravitation', examWeight: '10-15%', description: 'Universal gravitation and orbital mechanics.',
        topics: [
          { id: 'universal-gravitation', name: 'Newtons Law of Universal Gravitation', description: 'Gravitational force and field from point and spherical masses.', skills: ['forces'] },
          { id: 'orbits', name: 'Orbits and Keplers Laws', description: 'Circular orbits, orbital energy, and Keplers third law.', skills: ['calculus-based modeling'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 45, weight: '50%', notes: '35 single-select questions; calculator permitted.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'calculation', 'data-analysis', 'graph-interpretation', 'lab-design'], timingMinutes: 45, weight: '50%', notes: '3 multi-part problems, often including an experimental-design component.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-physics-c-mechanics-u1-kinematics-graphs-mcq-001', courseId: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
      unitId: 'unit-1', unitName: 'Kinematics', topicId: 'kinematics-graphs', topicName: 'Motion Graphs',
      skill: 'kinematics', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'On a velocity-versus-time graph for an object moving along a straight line, what physical quantity does the slope of the curve at a given instant represent?',
      answerChoices: [
        { id: 'A', text: 'The instantaneous acceleration' },
        { id: 'B', text: 'The total displacement' },
        { id: 'C', text: 'The average speed' },
        { id: 'D', text: 'The net force on the object' }
      ],
      correctAnswer: 'A',
      explanation: 'Acceleration is the time derivative of velocity, $a = \\frac{dv}{dt}$. On a velocity-time graph that derivative is the slope, so the slope at an instant gives the instantaneous acceleration.',
      distractorRationales: {
        A: '',
        B: 'Displacement is the area under the velocity-time curve, not its slope.',
        C: 'Average speed compares total distance to total time; it is not the slope at an instant.',
        D: 'Force is proportional to acceleration but is not directly read as a slope on a velocity-time graph without knowing the mass.'
      },
      tags: ['kinematics', 'graphs', 'acceleration'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-mechanics-u2-free-body-diagrams-mcq-001', courseId: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
      unitId: 'unit-2', unitName: 'Newtons Laws of Motion', topicId: 'free-body-diagrams', topicName: 'Free-Body Diagrams and Newtons Second Law',
      skill: 'forces', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'A book of weight $W$ rests motionless on a level table. According to Newtons laws, what is the magnitude of the normal force the table exerts on the book?',
      answerChoices: [
        { id: 'A', text: 'Zero, because the book is not moving' },
        { id: 'B', text: '$W$, directed upward' },
        { id: 'C', text: '$2W$, to balance weight and inertia' },
        { id: 'D', text: 'Half of $W$, shared with the table' }
      ],
      correctAnswer: 'B',
      explanation: 'The book is in equilibrium, so the net vertical force is zero. The only vertical forces are gravity ($W$ down) and the normal force ($N$ up), so $N = W$ directed upward.',
      distractorRationales: {
        A: 'A normal force is still present; equilibrium requires it to cancel the weight, not vanish.',
        B: '',
        C: 'Inertia is not a force, so there is nothing extra to balance beyond the weight.',
        D: 'The single supporting surface provides the entire normal force needed to balance the weight.'
      },
      tags: ['forces', 'normal-force', 'equilibrium'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-mechanics-u3-conservation-energy-mcq-001', courseId: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
      unitId: 'unit-3', unitName: 'Work, Energy, and Power', topicId: 'conservation-energy', topicName: 'Conservation of Mechanical Energy',
      skill: 'energy', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'apply', estimatedTimeSeconds: 75,
      prompt: 'A ball of mass $m$ is released from rest at height $h$ and falls freely (neglect air resistance). Using energy conservation, what is its speed just before it reaches the ground?',
      answerChoices: [
        { id: 'A', text: '$gh$' },
        { id: 'B', text: '$\\sqrt{gh}$' },
        { id: 'C', text: '$\\sqrt{2gh}$' },
        { id: 'D', text: '$2gh$' }
      ],
      correctAnswer: 'C',
      explanation: 'With no air resistance, mechanical energy is conserved: $mgh = \\tfrac{1}{2}mv^2$. Solving for $v$ gives $v = \\sqrt{2gh}$, independent of mass.',
      distractorRationales: {
        A: '$gh$ has units of (velocity)$^2$, not velocity, so it cannot be a speed.',
        B: 'This omits the factor of 2 that comes from $\\tfrac{1}{2}mv^2$.',
        C: '',
        D: '$2gh$ also has the wrong units; the square root was not taken.'
      },
      tags: ['energy', 'conservation', 'free-fall'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-physics-c-mechanics-u1-motion-derivatives-calc-001', courseId: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
      unitId: 'unit-1', unitName: 'Kinematics', topicId: 'motion-derivatives', topicName: 'Position, Velocity, and Acceleration',
      skill: 'calculus-based modeling', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'A particle moves along the x-axis with position $x(t) = 3t^3 - 2t^2 + 5$ (meters, with $t$ in seconds). Find the magnitude of its acceleration, in $\\text{m/s}^2$, at $t = 2\\ \\text{s}$.',
      correctAnswer: '32',
      numericTolerance: 0.5,
      acceptableAnswers: ['32', '32 m/s^2', '32.0'],
      explanation: 'Differentiate twice: $v(t) = \\frac{dx}{dt} = 9t^2 - 4t$, and $a(t) = \\frac{dv}{dt} = 18t - 4$. Evaluating at $t = 2$ gives $a = 18(2) - 4 = 36 - 4 = 32\\ \\text{m/s}^2$.',
      tags: ['kinematics', 'derivatives', 'acceleration'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-mechanics-u4-collisions-mcq-001', courseId: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
      unitId: 'unit-4', unitName: 'Systems of Particles and Linear Momentum', topicId: 'collisions', topicName: 'Collisions and Conservation of Momentum',
      skill: 'momentum', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'A $2\\ \\text{kg}$ cart moving at $3\\ \\text{m/s}$ collides head-on with a stationary $4\\ \\text{kg}$ cart and they stick together. What is the speed of the combined carts immediately after the collision?',
      answerChoices: [
        { id: 'A', text: '$1\\ \\text{m/s}$' },
        { id: 'B', text: '$1.5\\ \\text{m/s}$' },
        { id: 'C', text: '$2\\ \\text{m/s}$' },
        { id: 'D', text: '$3\\ \\text{m/s}$' }
      ],
      correctAnswer: 'A',
      explanation: 'Momentum is conserved in the collision: $p_i = (2)(3) + (4)(0) = 6\\ \\text{kg}\\cdot\\text{m/s}$. After they stick, $p_f = (2+4)v$, so $v = 6/6 = 1\\ \\text{m/s}$.',
      distractorRationales: {
        A: '',
        B: 'This would result from dividing by the wrong total mass; the combined mass is $6\\ \\text{kg}$.',
        C: 'This ignores that the second cart adds to the moving mass, lowering the final speed.',
        D: 'Momentum cannot be conserved if the speed stays at $3\\ \\text{m/s}$ while mass triples.'
      },
      tags: ['momentum', 'inelastic-collision', 'conservation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-mechanics-u1-kinematics-graphs-graph-001', courseId: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
      unitId: 'unit-1', unitName: 'Kinematics', topicId: 'kinematics-graphs', topicName: 'Motion Graphs',
      skill: 'kinematics', questionType: 'graph-interpretation', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'An object moves along a straight line. Its velocity-time data are given in the table. (a) Determine the displacement over the interval from $t = 0$ to $t = 4\\ \\text{s}$. (b) Describe the objects acceleration during this interval and justify your answer using the data.',
      dataTable: { columns: ['t (s)', 'v (m/s)'], rows: [['0', '0'], ['1', '3'], ['2', '6'], ['3', '9'], ['4', '12']] },
      correctAnswer: 'Displacement = 24 m; acceleration is constant at 3 m/s^2.',
      acceptableAnswers: ['24 m', '24', 'constant 3 m/s^2'],
      explanation: 'The velocity increases linearly by $3\\ \\text{m/s}$ each second, so acceleration is constant at $3\\ \\text{m/s}^2$. Displacement is the area under the line: a triangle of base $4\\ \\text{s}$ and height $12\\ \\text{m/s}$, giving $\\tfrac{1}{2}(4)(12) = 24\\ \\text{m}$.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Computes displacement as the area under the v-t graph.', evidenceRequired: 'Shows area = 24 m via triangle or kinematics.' },
        { id: 'r2', pointValue: 1, criterion: 'Identifies constant acceleration of 3 m/s^2.', evidenceRequired: 'States constant slope of 3 m/s^2.' },
        { id: 'r3', pointValue: 1, criterion: 'Justifies using the linear, evenly spaced velocity data.', evidenceRequired: 'References equal 3 m/s increments per second.' }
      ],
      modelAnswer: '(a) Because the velocity rises linearly from 0 to 12 m/s, the displacement is the area of the triangle under the graph: $\\tfrac{1}{2}(4\\ \\text{s})(12\\ \\text{m/s}) = 24\\ \\text{m}$. (b) The velocity increases by exactly 3 m/s during each 1 s interval, so the slope is constant and the acceleration is a constant $3\\ \\text{m/s}^2$.',
      tags: ['kinematics', 'graph-interpretation', 'constant-acceleration'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-physics-c-mechanics-u5-torque-dynamics-calc-001', courseId: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
      unitId: 'unit-5', unitName: 'Rotation', topicId: 'torque-dynamics', topicName: 'Torque and Rotational Dynamics',
      skill: 'rotation', questionType: 'calculation', difficulty: 'hard',
      bloomLevel: 'apply', estimatedTimeSeconds: 210,
      prompt: 'A solid uniform disk of mass $M = 4\\ \\text{kg}$ and radius $R = 0.5\\ \\text{m}$ is free to rotate about its fixed central axis. A constant tangential force of $6\\ \\text{N}$ is applied at the rim. Find the angular acceleration of the disk, in $\\text{rad/s}^2$. (For a solid disk, $I = \\tfrac{1}{2}MR^2$.)',
      correctAnswer: '6',
      numericTolerance: 0.1,
      acceptableAnswers: ['6', '6 rad/s^2', '6.0'],
      explanation: 'The moment of inertia is $I = \\tfrac{1}{2}MR^2 = \\tfrac{1}{2}(4)(0.5)^2 = 0.5\\ \\text{kg}\\cdot\\text{m}^2$. The torque is $\\tau = FR = (6)(0.5) = 3\\ \\text{N}\\cdot\\text{m}$. From $\\tau = I\\alpha$, $\\alpha = \\tau / I = 3 / 0.5 = 6\\ \\text{rad/s}^2$.',
      tags: ['rotation', 'torque', 'moment-of-inertia'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-mechanics-u2-resistive-forces-mcq-001', courseId: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
      unitId: 'unit-2', unitName: 'Newtons Laws of Motion', topicId: 'resistive-forces', topicName: 'Drag and Terminal Velocity',
      skill: 'calculus-based modeling', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 180,
      prompt: 'An object of mass $m$ falls from rest under gravity with a resistive force $F_{drag} = bv$ opposing its motion. Which expression correctly gives its terminal velocity, and why?',
      answerChoices: [
        { id: 'A', text: '$v_t = mg/b$, because at terminal velocity the net force is zero so $mg = bv_t$.' },
        { id: 'B', text: '$v_t = b/(mg)$, because drag dominates gravity at large times.' },
        { id: 'C', text: '$v_t = \\sqrt{mg/b}$, because drag is proportional to $v^2$.' },
        { id: 'D', text: '$v_t = mgb$, because the forces multiply at equilibrium.' }
      ],
      correctAnswer: 'A',
      explanation: 'Newtons second law gives $m\\frac{dv}{dt} = mg - bv$. Terminal velocity occurs when acceleration is zero, so $mg - bv_t = 0$, giving $v_t = mg/b$. This is the steady-state solution of the differential equation.',
      distractorRationales: {
        A: '',
        B: 'This is the reciprocal and has incorrect units; it does not satisfy $mg = bv_t$.',
        C: 'A square root arises only for quadratic drag ($F \\propto v^2$), not for the linear drag $bv$ given here.',
        D: 'Forces are not multiplied at equilibrium; setting the net force to zero requires $mg = bv_t$.'
      },
      tags: ['drag', 'terminal-velocity', 'differential-equation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN (FRQ + lab-design, both with rubrics) ────────────────────────
    {
      id: 'ap-physics-c-mechanics-u6-shm-frq-001', courseId: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
      unitId: 'unit-6', unitName: 'Oscillations', topicId: 'shm', topicName: 'Simple Harmonic Motion',
      skill: 'oscillations', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 600,
      prompt: 'A block of mass $m$ is attached to an ideal spring of constant $k$ on a frictionless horizontal surface and oscillates with amplitude $A$. (a) Derive an expression for the angular frequency $\\omega$ of the motion starting from Newtons second law. (b) Determine the maximum speed of the block in terms of $k$, $m$, and $A$. (c) Explain how the period would change if the mass were quadrupled, and justify your answer.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'For a spring, $F = -kx$, so $m\\ddot{x} = -kx$ yields SHM with $\\omega = \\sqrt{k/m}$. Maximum speed is $v_{max} = \\omega A = A\\sqrt{k/m}$. Period $T = 2\\pi\\sqrt{m/k}$ scales with $\\sqrt{m}$, so quadrupling $m$ doubles $T$.',
      rubric: [
        { id: 'r1', pointValue: 2, criterion: 'Derives omega = sqrt(k/m) from F = -kx and Newtons second law.', evidenceRequired: 'Sets m times the second derivative of x equal to -kx and identifies omega^2 = k/m.' },
        { id: 'r2', pointValue: 1, criterion: 'Finds v_max = A*sqrt(k/m).', evidenceRequired: 'Uses v_max = omega*A correctly.' },
        { id: 'r3', pointValue: 1, criterion: 'States the period doubles when mass is quadrupled.', evidenceRequired: 'Correct directional change of T.' },
        { id: 'r4', pointValue: 1, criterion: 'Justifies using T proportional to sqrt(m).', evidenceRequired: 'References T = 2*pi*sqrt(m/k).' }
      ],
      modelAnswer: '(a) The spring force is $F = -kx$. Newtons second law gives $m\\ddot{x} = -kx$, i.e. $\\ddot{x} = -(k/m)x$. Comparing with $\\ddot{x} = -\\omega^2 x$ shows $\\omega = \\sqrt{k/m}$. (b) In SHM the speed is maximum at equilibrium, where $v_{max} = \\omega A = A\\sqrt{k/m}$. (c) The period is $T = 2\\pi/\\omega = 2\\pi\\sqrt{m/k}$, which is proportional to $\\sqrt{m}$. Quadrupling the mass multiplies $T$ by $\\sqrt{4} = 2$, so the period doubles.',
      tags: ['oscillations', 'shm', 'frq', 'derivation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-physics-c-mechanics-u7-orbits-lab-001', courseId: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
      unitId: 'unit-7', unitName: 'Gravitation', topicId: 'orbits', topicName: 'Orbits and Keplers Laws',
      skill: 'experimental design', questionType: 'lab-design', difficulty: 'exam-level',
      bloomLevel: 'create', estimatedTimeSeconds: 600,
      prompt: 'You are given data tables listing the orbital radius and orbital period of several moons of a planet. Design an experiment-style analysis to test whether the data obey Keplers third law and to determine the mass of the planet. Describe the measurements, the graph you would plot to obtain a straight line, and how you would extract the planets mass from the slope.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Keplers third law for circular orbits gives $T^2 = \\frac{4\\pi^2}{GM}r^3$. Plotting $T^2$ versus $r^3$ yields a straight line through the origin whose slope is $\\frac{4\\pi^2}{GM}$, from which $M = \\frac{4\\pi^2}{G\\,\\text{slope}}$.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the variables to measure (orbital radius r and period T).', evidenceRequired: 'Names r and T as the measured quantities.' },
        { id: 'r2', pointValue: 1, criterion: 'Specifies plotting T^2 versus r^3 to linearize the relationship.', evidenceRequired: 'States a linearizing graph that should pass through the origin.' },
        { id: 'r3', pointValue: 1, criterion: 'Relates the slope to 4*pi^2/(G*M).', evidenceRequired: 'Writes slope = 4*pi^2/(G*M).' },
        { id: 'r4', pointValue: 1, criterion: 'Solves for the planets mass from the slope.', evidenceRequired: 'M = 4*pi^2/(G*slope).' }
      ],
      modelAnswer: 'Measure each moons orbital radius $r$ and orbital period $T$. For circular orbits, gravity supplies the centripetal force: $\\frac{GMm}{r^2} = \\frac{4\\pi^2 m r}{T^2}$, which rearranges to $T^2 = \\frac{4\\pi^2}{GM} r^3$. Plot $T^2$ on the vertical axis against $r^3$ on the horizontal axis; if the data obey Keplers third law the points fall on a straight line through the origin. The slope equals $\\frac{4\\pi^2}{GM}$, so the planets mass is $M = \\frac{4\\pi^2}{G \\cdot \\text{slope}}$. A linear fit with small scatter confirms the law and yields $M$.',
      tags: ['gravitation', 'keplers-laws', 'lab-design', 'orbits'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
