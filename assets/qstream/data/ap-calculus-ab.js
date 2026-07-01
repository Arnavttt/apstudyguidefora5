/**
 * Five & A+ — AI Question Stream · Course data: AP Calculus AB
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js / ap-calculus-bc.js) shape exactly.
 * AP Calculus AB covers Units 1–8 of the AB/BC sequence (no series, parametric,
 * polar, or vector-valued functions — those are BC-only).
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Math is written with MathJax LaTeX: \( ... \) inline and \[ ... \] display.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-calculus-ab',
    displayName: 'AP Calculus AB',
    description: 'Single-variable calculus organized around limits, differentiation, integration, and their applications—covering the first eight units of the AB/BC sequence without series, parametric, polar, or vector-valued functions.',
    category: 'stem',
    allowedQuestionTypes: ['mcq', 'calculation', 'graph-interpretation', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'calculation', 'frq'],
    skills: [
      'limits',
      'derivatives',
      'integrals',
      'differential equations',
      'applications',
      'justification'
    ],
    bigIdeas: ['Change', 'Limits', 'Analysis of Functions'],
    units: [
      { id: 'unit-1', name: 'Limits and Continuity', examWeight: '10-12%', description: 'Limits, one-sided behavior, continuity, and the Intermediate Value Theorem.',
        topics: [
          { id: 'limit-evaluation', name: 'Evaluating Limits', description: 'Algebraic, graphical, and table-based evaluation of limits, including indeterminate forms.', skills: ['limits'] },
          { id: 'continuity', name: 'Continuity and Discontinuities', description: 'Defining continuity at a point and classifying removable, jump, and infinite discontinuities.', skills: ['limits'] },
          { id: 'asymptotes', name: 'Infinite Limits and Asymptotes', description: 'Vertical and horizontal asymptotes via limits at infinity and unbounded behavior.', skills: ['limits', 'justification'] }
        ] },
      { id: 'unit-2', name: 'Differentiation: Definition and Fundamental Properties', examWeight: '10-12%', description: 'The derivative as a limit, basic rules, and product/quotient rules.',
        topics: [
          { id: 'derivative-definition', name: 'Definition of the Derivative', description: 'Difference quotient, derivative as instantaneous rate of change and slope.', skills: ['derivatives'] },
          { id: 'basic-rules', name: 'Power, Product, and Quotient Rules', description: 'Differentiating polynomials, products, and quotients.', skills: ['derivatives'] }
        ] },
      { id: 'unit-3', name: 'Differentiation: Composite, Implicit, and Inverse Functions', examWeight: '9-13%', description: 'Chain rule, implicit differentiation, and derivatives of inverse functions.',
        topics: [
          { id: 'chain-rule', name: 'The Chain Rule', description: 'Differentiating composite functions and nested compositions.', skills: ['derivatives'] },
          { id: 'implicit', name: 'Implicit Differentiation', description: 'Differentiating relations not solved for y, finding slopes on curves.', skills: ['derivatives', 'justification'] },
          { id: 'inverse-derivatives', name: 'Derivatives of Inverse Functions', description: 'Using the inverse-function rule and inverse trig derivatives.', skills: ['derivatives'] }
        ] },
      { id: 'unit-4', name: 'Contextual Applications of Differentiation', examWeight: '10-15%', description: 'Motion, related rates, linearization, and L’Hôpital’s Rule.',
        topics: [
          { id: 'motion', name: 'Rectilinear Motion', description: 'Position, velocity, acceleration, speed, and direction of motion.', skills: ['derivatives', 'applications'] },
          { id: 'related-rates', name: 'Related Rates', description: 'Relating rates of change of linked quantities via implicit differentiation.', skills: ['derivatives', 'applications'] },
          { id: 'lhopital', name: 'L’Hôpital’s Rule', description: 'Evaluating indeterminate-form limits using derivatives.', skills: ['limits', 'derivatives'] }
        ] },
      { id: 'unit-5', name: 'Analytical Applications of Differentiation', examWeight: '15-18%', description: 'Mean Value Theorem, extrema, concavity, and curve analysis.',
        topics: [
          { id: 'mvt', name: 'Mean Value and Extreme Value Theorems', description: 'Conditions and conclusions of the MVT and EVT.', skills: ['derivatives', 'justification'] },
          { id: 'extrema-concavity', name: 'Extrema and Concavity', description: 'First and second derivative tests, inflection points, and increasing/decreasing behavior.', skills: ['derivatives', 'justification'] },
          { id: 'optimization', name: 'Optimization', description: 'Modeling and solving applied maximum/minimum problems.', skills: ['applications', 'justification'] }
        ] },
      { id: 'unit-6', name: 'Integration and Accumulation of Change', examWeight: '17-20%', description: 'Riemann sums, the FTC, antiderivatives, and integration techniques.',
        topics: [
          { id: 'riemann-ftc', name: 'Riemann Sums and the FTC', description: 'Approximating and evaluating definite integrals; the Fundamental Theorem of Calculus.', skills: ['integrals'] },
          { id: 'antiderivatives', name: 'Antiderivatives and u-Substitution', description: 'Finding antiderivatives and integrating by substitution.', skills: ['integrals'] },
          { id: 'integration-by-parts', name: 'Integration by Parts and Partial Fractions', description: 'BC techniques: parts, partial fractions, and improper integrals.', skills: ['integrals'] }
        ] },
      { id: 'unit-7', name: 'Differential Equations', examWeight: '6-12%', description: 'Slope fields, separation of variables, and exponential/logistic models.',
        topics: [
          { id: 'slope-fields', name: 'Slope Fields and Euler’s Method', description: 'Sketching solution behavior and approximating solutions numerically.', skills: ['differential equations'] },
          { id: 'separable', name: 'Separable Equations', description: 'Solving by separation of variables with initial conditions.', skills: ['differential equations', 'integrals'] },
          { id: 'growth-models', name: 'Exponential and Logistic Growth', description: 'Modeling population and decay with differential equations.', skills: ['differential equations', 'applications'] }
        ] },
      { id: 'unit-8', name: 'Applications of Integration', examWeight: '10-15%', description: 'Area, volume, average value, and arc length.',
        topics: [
          { id: 'area-between', name: 'Area Between Curves', description: 'Integrating to find regions bounded by curves.', skills: ['integrals', 'applications'] },
          { id: 'volume', name: 'Volumes of Revolution and Cross Sections', description: 'Disk, washer, and known-cross-section methods.', skills: ['integrals', 'applications'] },
          { id: 'arc-average', name: 'Arc Length and Average Value', description: 'Average value of a function and arc length of a curve.', skills: ['integrals', 'applications'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 105, weight: '50%', notes: 'Part A (30 questions, no calculator) and Part B (15 questions, graphing calculator).' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'calculation', 'graph-interpretation', 'short-answer'], timingMinutes: 90, weight: '50%', notes: '6 questions: 2 calculator-active and 4 no-calculator, scored by rubric.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'calcab-001', courseId: 'ap-calculus-ab', courseName: 'AP Calculus AB',
      unitId: 'unit-1', unitName: 'Limits and Continuity', topicId: 'limit-evaluation', topicName: 'Evaluating Limits',
      skill: 'limits', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'apply', estimatedTimeSeconds: 60,
      prompt: 'Evaluate \\( \\displaystyle \\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4} \\).',
      answerChoices: [
        { id: 'A', text: '\\(0\\)' },
        { id: 'B', text: '\\(4\\)' },
        { id: 'C', text: '\\(8\\)' },
        { id: 'D', text: 'The limit does not exist.' }
      ],
      correctAnswer: 'C',
      explanation: 'Factor the numerator: \\(\\frac{x^2-16}{x-4}=\\frac{(x-4)(x+4)}{x-4}=x+4\\) for \\(x\\neq4\\). As \\(x\\to4\\), this approaches \\(4+4=8\\).',
      distractorRationales: {
        A: 'Substituting directly gives \\(0/0\\), an indeterminate form, not \\(0\\); you must simplify first.',
        B: 'This is the value of \\(x\\) being approached, not the limit of the expression.',
        C: '',
        D: 'The discontinuity is removable, so the limit exists and equals \\(8\\).'
      },
      tags: ['limits', 'indeterminate-form', 'factoring'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    {
      id: 'calcab-002', courseId: 'ap-calculus-ab', courseName: 'AP Calculus AB',
      unitId: 'unit-2', unitName: 'Differentiation: Definition and Fundamental Properties', topicId: 'basic-rules', topicName: 'Power, Product, and Quotient Rules',
      skill: 'derivatives', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'apply', estimatedTimeSeconds: 60,
      prompt: 'If \\( f(x) = 5x^4 - 3x + 9 \\), what is \\( f\'(x) \\)?',
      answerChoices: [
        { id: 'A', text: '\\(20x^3 - 3\\)' },
        { id: 'B', text: '\\(20x^3 - 3x\\)' },
        { id: 'C', text: '\\(5x^3 - 3\\)' },
        { id: 'D', text: '\\(20x^3 - 3 + 9\\)' }
      ],
      correctAnswer: 'A',
      explanation: 'Apply the power rule term by term: \\(\\frac{d}{dx}(5x^4)=20x^3\\), \\(\\frac{d}{dx}(-3x)=-3\\), and the constant \\(9\\) differentiates to \\(0\\). So \\(f\'(x)=20x^3-3\\).',
      distractorRationales: {
        A: '',
        B: 'The derivative of the linear term \\(-3x\\) is the constant \\(-3\\), not \\(-3x\\).',
        C: 'The coefficient should be \\(4\\cdot5=20\\), not \\(5\\); the exponent multiplies in.',
        D: 'The constant \\(9\\) has derivative \\(0\\) and should disappear.'
      },
      tags: ['derivatives', 'power-rule', 'polynomial'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    {
      id: 'calcab-003', courseId: 'ap-calculus-ab', courseName: 'AP Calculus AB',
      unitId: 'unit-1', unitName: 'Limits and Continuity', topicId: 'continuity', topicName: 'Continuity and Discontinuities',
      skill: 'limits', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      prompt: 'A function \\( f \\) is continuous at \\( x = a \\) provided that which of the following conditions all hold?',
      answerChoices: [
        { id: 'A', text: 'Only \\( f(a) \\) is defined.' },
        { id: 'B', text: 'Only \\( \\lim_{x\\to a} f(x) \\) exists.' },
        { id: 'C', text: '\\( f(a) \\) is defined, \\( \\lim_{x\\to a} f(x) \\) exists, and the two are equal.' },
        { id: 'D', text: '\\( f \\) is differentiable at every point except \\( a \\).' }
      ],
      correctAnswer: 'C',
      explanation: 'Continuity at \\(x=a\\) requires three things simultaneously: \\(f(a)\\) is defined, \\(\\lim_{x\\to a} f(x)\\) exists, and \\(\\lim_{x\\to a} f(x)=f(a)\\). All three together characterize continuity at a point.',
      distractorRationales: {
        A: 'A defined value alone is not enough; the limit must exist and match \\(f(a)\\).',
        B: 'An existing limit alone is not enough; \\(f(a)\\) must be defined and equal to it.',
        C: '',
        D: 'This describes a differentiability condition and even excludes \\(a\\), which is unrelated to continuity at \\(a\\).'
      },
      tags: ['continuity', 'limits', 'definition'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'calcab-004', courseId: 'ap-calculus-ab', courseName: 'AP Calculus AB',
      unitId: 'unit-3', unitName: 'Differentiation: Composite, Implicit, and Inverse Functions', topicId: 'chain-rule', topicName: 'The Chain Rule',
      skill: 'derivatives', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 90,
      prompt: 'Let \\( g(x) = \\cos(x^3) \\). What is \\( g\'(x) \\)?',
      answerChoices: [
        { id: 'A', text: '\\(-\\sin(x^3)\\)' },
        { id: 'B', text: '\\(-3x^2\\sin(x^3)\\)' },
        { id: 'C', text: '\\(3x^2\\cos(x^3)\\)' },
        { id: 'D', text: '\\(-\\sin(3x^2)\\)' }
      ],
      correctAnswer: 'B',
      explanation: 'By the chain rule, differentiate the outer function and multiply by the derivative of the inner: \\(g\'(x)=-\\sin(x^3)\\cdot\\frac{d}{dx}(x^3)=-\\sin(x^3)\\cdot 3x^2=-3x^2\\sin(x^3)\\).',
      distractorRationales: {
        A: 'This omits the chain-rule factor \\(\\frac{d}{dx}(x^3)=3x^2\\).',
        B: '',
        C: 'The derivative of \\(\\cos\\) is \\(-\\sin\\), not \\(\\cos\\); the trig function and sign are wrong.',
        D: 'The inner function \\(x^3\\) is not replaced by \\(3x^2\\) inside the sine; the chain rule multiplies, it does not substitute.'
      },
      tags: ['chain-rule', 'trigonometric', 'composite'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    {
      id: 'calcab-005', courseId: 'ap-calculus-ab', courseName: 'AP Calculus AB',
      unitId: 'unit-6', unitName: 'Integration and Accumulation of Change', topicId: 'antiderivatives', topicName: 'Antiderivatives and u-Substitution',
      skill: 'integrals', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'Evaluate the definite integral \\( \\displaystyle \\int_{1}^{3} 4x^3 \\, dx \\). Enter a numerical value.',
      correctAnswer: '80',
      numericTolerance: 0.01,
      acceptableAnswers: ['80', '80.0', '80.00'],
      explanation: 'An antiderivative of \\(4x^3\\) is \\(x^4\\). By the Fundamental Theorem of Calculus, \\(\\int_1^3 4x^3\\,dx = \\left[x^4\\right]_1^3 = 3^4 - 1^4 = 81 - 1 = 80\\). The signed area under the curve on \\([1,3]\\) is \\(80\\) square units.',
      tags: ['integrals', 'definite-integral', 'ftc'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    {
      id: 'calcab-006', courseId: 'ap-calculus-ab', courseName: 'AP Calculus AB',
      unitId: 'unit-4', unitName: 'Contextual Applications of Differentiation', topicId: 'related-rates', topicName: 'Related Rates',
      skill: 'applications', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'A spherical balloon is inflated so that its radius increases at \\( \\frac{dr}{dt} = 3 \\) cm/s. At the instant the radius is \\( 4 \\) cm, how fast is the volume increasing? (Recall \\( V = \\tfrac{4}{3}\\pi r^3 \\).)',
      answerChoices: [
        { id: 'A', text: '\\(48\\pi\\) cm\\(^3\\)/s' },
        { id: 'B', text: '\\(64\\pi\\) cm\\(^3\\)/s' },
        { id: 'C', text: '\\(144\\pi\\) cm\\(^3\\)/s' },
        { id: 'D', text: '\\(192\\pi\\) cm\\(^3\\)/s' }
      ],
      correctAnswer: 'D',
      explanation: 'Differentiate with respect to time: \\(\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}\\). Substitute \\(r=4\\) and \\(\\frac{dr}{dt}=3\\): \\(\\frac{dV}{dt}=4\\pi(16)(3)=192\\pi\\) cm\\(^3\\)/s.',
      distractorRationales: {
        A: 'This uses \\(2\\pi r\\cdot\\frac{dr}{dt}\\cdot 2\\) or a circumference-type factor instead of the correct \\(4\\pi r^2\\).',
        B: 'This forgets to multiply by \\(\\frac{dr}{dt}=3\\), giving \\(4\\pi(16)=64\\pi\\).',
        C: 'This uses \\(3\\pi r^2\\cdot\\frac{dr}{dt}=3\\pi(16)(3)=144\\pi\\); the coefficient of \\(r^2\\) should be \\(4\\), not \\(3\\).',
        D: ''
      },
      tags: ['related-rates', 'sphere', 'chain-rule'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'calcab-007', courseId: 'ap-calculus-ab', courseName: 'AP Calculus AB',
      unitId: 'unit-4', unitName: 'Contextual Applications of Differentiation', topicId: 'motion', topicName: 'Rectilinear Motion',
      skill: 'applications', questionType: 'calculation', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'A particle moves along a line with position \\( s(t) = t^3 - 6t^2 + 9t \\) for \\( t \\ge 0 \\), where \\( s \\) is in meters and \\( t \\) in seconds. At what value of \\( t \\) (with \\( t > 1 \\)) is the particle momentarily at rest? Enter the value of \\( t \\) in seconds.',
      correctAnswer: '3',
      numericTolerance: 0.01,
      acceptableAnswers: ['3', '3.0', '3.00'],
      explanation: 'The particle is at rest when velocity \\(v(t)=s\'(t)=0\\). Here \\(v(t)=3t^2-12t+9=3(t^2-4t+3)=3(t-1)(t-3)\\), so \\(v(t)=0\\) at \\(t=1\\) and \\(t=3\\). The value greater than \\(1\\) is \\(t=3\\) seconds.',
      tags: ['motion', 'velocity', 'critical-points'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    {
      id: 'calcab-008', courseId: 'ap-calculus-ab', courseName: 'AP Calculus AB',
      unitId: 'unit-8', unitName: 'Applications of Integration', topicId: 'volume', topicName: 'Volumes of Revolution and Cross Sections',
      skill: 'integrals', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'The region bounded by \\( y = \\sqrt{x} \\), the \\( x \\)-axis, and \\( x = 4 \\) is revolved about the \\( x \\)-axis. Which integral gives the volume of the resulting solid using the disk method?',
      answerChoices: [
        { id: 'A', text: '\\( \\pi \\int_{0}^{4} \\sqrt{x}\\, dx \\)' },
        { id: 'B', text: '\\( \\pi \\int_{0}^{4} x \\, dx \\)' },
        { id: 'C', text: '\\( 2\\pi \\int_{0}^{4} x\\sqrt{x}\\, dx \\)' },
        { id: 'D', text: '\\( \\pi \\int_{0}^{2} x^2 \\, dx \\)' }
      ],
      correctAnswer: 'B',
      explanation: 'The disk method gives \\(V=\\pi\\int_a^b [R(x)]^2\\,dx\\) with radius \\(R(x)=\\sqrt{x}\\). Thus \\([R(x)]^2=(\\sqrt{x})^2=x\\), and the volume is \\(\\pi\\int_0^4 x\\,dx\\).',
      distractorRationales: {
        A: 'This uses \\(R(x)=\\sqrt{x}\\) without squaring it; the disk formula requires \\([R(x)]^2\\).',
        B: '',
        C: 'This is a shell-method-style integrand \\(2\\pi x\\cdot\\text{height}\\), not the disk method requested, and mismatches the axis of revolution.',
        D: 'This uses the wrong bounds \\([0,2]\\) and integrand; the region runs over \\(x\\in[0,4]\\) with \\([R(x)]^2=x\\).'
      },
      tags: ['volume', 'disk-method', 'solid-of-revolution'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    // ── 1+ WRITTEN (FRQ with rubric) ─────────────────────────────────────────
    {
      id: 'calcab-009', courseId: 'ap-calculus-ab', courseName: 'AP Calculus AB',
      unitId: 'unit-7', unitName: 'Differential Equations', topicId: 'separable', topicName: 'Separable Equations',
      skill: 'differential equations', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'Consider the differential equation \\( \\frac{dy}{dx} = 2xy \\) with the initial condition \\( y(0) = 3 \\). (a) Solve the equation by separation of variables to find \\( y \\) as an explicit function of \\( x \\). (b) Justify why the solution is always positive, and state \\( \\lim_{x \\to \\infty} y(x) \\).',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Separating variables gives \\(\\frac{1}{y}\\,dy = 2x\\,dx\\). Integrating yields \\(\\ln|y| = x^2 + C\\), so \\(y = Ae^{x^2}\\). The initial condition fixes \\(A=3\\), giving \\(y=3e^{x^2}\\).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Separates variables correctly: \\(\\frac{1}{y}dy = 2x\\,dx\\).', evidenceRequired: 'Both variables isolated before integrating.' },
        { id: 'r2', pointValue: 1, criterion: 'Integrates both sides to \\(\\ln|y| = x^2 + C\\).', evidenceRequired: 'Correct antiderivatives with constant of integration.' },
        { id: 'r3', pointValue: 1, criterion: 'Applies the initial condition to obtain \\(y = 3e^{x^2}\\).', evidenceRequired: 'Solves for the constant using \\(y(0)=3\\).' },
        { id: 'r4', pointValue: 1, criterion: 'Justifies positivity and states the infinite limit.', evidenceRequired: 'Notes exponential is always positive; limit is \\(+\\infty\\).' }
      ],
      modelAnswer: '(a) Separate: \\(\\frac{dy}{y} = 2x\\,dx\\). Integrate both sides: \\(\\ln|y| = x^2 + C\\). Exponentiate: \\(y = Ae^{x^2}\\) where \\(A=\\pm e^C\\). Using \\(y(0)=3\\): \\(3 = Ae^0 = A\\), so \\(y = 3e^{x^2}\\). (b) Because \\(e^{x^2} > 0\\) for all real \\(x\\) and the leading constant \\(3>0\\), the product \\(y=3e^{x^2}\\) is always positive, so the solution never crosses the \\(x\\)-axis. As \\(x\\to\\infty\\), \\(x^2\\to\\infty\\), so \\(y\\to+\\infty\\).',
      tags: ['differential-equations', 'separation-of-variables', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    // ── Extra graph-interpretation written question (bonus coverage) ─────────
    {
      id: 'calcab-010', courseId: 'ap-calculus-ab', courseName: 'AP Calculus AB',
      unitId: 'unit-5', unitName: 'Analytical Applications of Differentiation', topicId: 'extrema-concavity', topicName: 'Extrema and Concavity',
      skill: 'justification', questionType: 'graph-interpretation', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 240,
      prompt: 'The table gives values of \\( f\'(x) \\), the derivative of a differentiable function \\( f \\), at several points. Using only this information, identify where \\( f \\) has a local minimum on \\( (1,5) \\) and justify your answer with a sign analysis of \\( f\' \\).',
      dataTable: { columns: ['x', "f'(x)"], rows: [['1', '-4'], ['2', '-2'], ['3', '0'], ['4', '3'], ['5', '6']] },
      correctAnswer: 'f has a local minimum at x = 3.',
      acceptableAnswers: ['x = 3', 'x=3', '3'],
      explanation: 'The derivative \\(f\'\\) is negative for \\(x<3\\) and positive for \\(x>3\\), and \\(f\'(3)=0\\). By the First Derivative Test, \\(f\'\\) changes from negative to positive at \\(x=3\\), so \\(f\\) changes from decreasing to increasing there—indicating a local minimum at \\(x=3\\).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the critical point where \\(f\'=0\\).', evidenceRequired: 'States \\(f\'(3)=0\\).' },
        { id: 'r2', pointValue: 1, criterion: 'Performs a correct sign analysis of \\(f\'\\) around \\(x=3\\).', evidenceRequired: 'Notes \\(f\'<0\\) before and \\(f\'>0\\) after \\(x=3\\).' },
        { id: 'r3', pointValue: 1, criterion: 'Concludes a local minimum by the First Derivative Test.', evidenceRequired: 'Links sign change negative-to-positive to a minimum.' }
      ],
      modelAnswer: 'The function \\(f\\) has a local minimum at \\(x=3\\). From the table, \\(f\'(3)=0\\), making \\(x=3\\) a critical point. For \\(x<3\\) (at \\(x=1,2\\)) \\(f\'<0\\), so \\(f\\) is decreasing; for \\(x>3\\) (at \\(x=4,5\\)) \\(f\'>0\\), so \\(f\\) is increasing. Because \\(f\'\\) changes sign from negative to positive at \\(x=3\\), the First Derivative Test guarantees a local minimum there.',
      tags: ['first-derivative-test', 'extrema', 'justification'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
