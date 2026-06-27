/**
 * Five & A+ — AI Question Stream · Course data: AP Calculus BC
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) shape exactly.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Math is written with MathJax LaTeX: \( ... \) inline and \[ ... \] display.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-calculus-bc',
    displayName: 'AP Calculus BC',
    description: 'Single-variable calculus extending AB content with series, parametric/polar/vector functions, and advanced integration—organized around limits, differentiation, integration, and convergence.',
    category: 'stem',
    allowedQuestionTypes: ['mcq', 'calculation', 'graph-interpretation', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'calculation', 'frq'],
    skills: [
      'limits',
      'derivatives',
      'integrals',
      'differential equations',
      'applications',
      'series analysis',
      'justification'
    ],
    bigIdeas: ['Change', 'Limits', 'Analysis of Functions', 'Convergence'],
    units: [
      { id: 'unit-1', name: 'Limits and Continuity', examWeight: '4-7%', description: 'Limits, one-sided behavior, continuity, and the Intermediate Value Theorem.',
        topics: [
          { id: 'limit-evaluation', name: 'Evaluating Limits', description: 'Algebraic, graphical, and table-based evaluation of limits, including indeterminate forms.', skills: ['limits'] },
          { id: 'continuity', name: 'Continuity and Discontinuities', description: 'Defining continuity at a point and classifying removable, jump, and infinite discontinuities.', skills: ['limits'] },
          { id: 'asymptotes', name: 'Infinite Limits and Asymptotes', description: 'Vertical and horizontal asymptotes via limits at infinity and unbounded behavior.', skills: ['limits', 'justification'] }
        ] },
      { id: 'unit-2', name: 'Differentiation: Definition and Fundamental Properties', examWeight: '4-7%', description: 'The derivative as a limit, basic rules, and product/quotient rules.',
        topics: [
          { id: 'derivative-definition', name: 'Definition of the Derivative', description: 'Difference quotient, derivative as instantaneous rate of change and slope.', skills: ['derivatives'] },
          { id: 'basic-rules', name: 'Power, Product, and Quotient Rules', description: 'Differentiating polynomials, products, and quotients.', skills: ['derivatives'] }
        ] },
      { id: 'unit-3', name: 'Differentiation: Composite, Implicit, and Inverse Functions', examWeight: '4-7%', description: 'Chain rule, implicit differentiation, and derivatives of inverse functions.',
        topics: [
          { id: 'chain-rule', name: 'The Chain Rule', description: 'Differentiating composite functions and nested compositions.', skills: ['derivatives'] },
          { id: 'implicit', name: 'Implicit Differentiation', description: 'Differentiating relations not solved for y, finding slopes on curves.', skills: ['derivatives', 'justification'] },
          { id: 'inverse-derivatives', name: 'Derivatives of Inverse Functions', description: 'Using the inverse-function rule and inverse trig derivatives.', skills: ['derivatives'] }
        ] },
      { id: 'unit-4', name: 'Contextual Applications of Differentiation', examWeight: '6-9%', description: 'Motion, related rates, linearization, and L’Hôpital’s Rule.',
        topics: [
          { id: 'motion', name: 'Rectilinear Motion', description: 'Position, velocity, acceleration, speed, and direction of motion.', skills: ['derivatives', 'applications'] },
          { id: 'related-rates', name: 'Related Rates', description: 'Relating rates of change of linked quantities via implicit differentiation.', skills: ['derivatives', 'applications'] },
          { id: 'lhopital', name: 'L’Hôpital’s Rule', description: 'Evaluating indeterminate-form limits using derivatives.', skills: ['limits', 'derivatives'] }
        ] },
      { id: 'unit-5', name: 'Analytical Applications of Differentiation', examWeight: '8-11%', description: 'Mean Value Theorem, extrema, concavity, and curve analysis.',
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
      { id: 'unit-7', name: 'Differential Equations', examWeight: '6-9%', description: 'Slope fields, separation of variables, and exponential/logistic models.',
        topics: [
          { id: 'slope-fields', name: 'Slope Fields and Euler’s Method', description: 'Sketching solution behavior and approximating solutions numerically.', skills: ['differential equations'] },
          { id: 'separable', name: 'Separable Equations', description: 'Solving by separation of variables with initial conditions.', skills: ['differential equations', 'integrals'] },
          { id: 'growth-models', name: 'Exponential and Logistic Growth', description: 'Modeling population and decay with differential equations.', skills: ['differential equations', 'applications'] }
        ] },
      { id: 'unit-8', name: 'Applications of Integration', examWeight: '6-9%', description: 'Area, volume, average value, and arc length.',
        topics: [
          { id: 'area-between', name: 'Area Between Curves', description: 'Integrating to find regions bounded by curves.', skills: ['integrals', 'applications'] },
          { id: 'volume', name: 'Volumes of Revolution and Cross Sections', description: 'Disk, washer, and known-cross-section methods.', skills: ['integrals', 'applications'] },
          { id: 'arc-average', name: 'Arc Length and Average Value', description: 'Average value of a function and arc length of a curve.', skills: ['integrals', 'applications'] }
        ] },
      { id: 'unit-9', name: 'Parametric Equations, Polar Coordinates, and Vector-Valued Functions', examWeight: '11-12%', description: 'Calculus of parametric, vector, and polar curves.',
        topics: [
          { id: 'parametric', name: 'Parametric Derivatives and Arc Length', description: 'Slopes and lengths of parametrically defined curves.', skills: ['derivatives', 'integrals'] },
          { id: 'vector', name: 'Vector-Valued Functions and Motion', description: 'Velocity, speed, and acceleration of particles in the plane.', skills: ['derivatives', 'applications'] },
          { id: 'polar', name: 'Polar Curves and Area', description: 'Slopes and areas enclosed by polar curves.', skills: ['integrals', 'applications'] }
        ] },
      { id: 'unit-10', name: 'Infinite Sequences and Series', examWeight: '17-18%', description: 'Convergence tests, power series, and Taylor/Maclaurin series.',
        topics: [
          { id: 'convergence-tests', name: 'Series Convergence Tests', description: 'nth-term, geometric, p-series, ratio, comparison, and alternating series tests.', skills: ['series analysis', 'justification'] },
          { id: 'power-series', name: 'Power Series and Radius of Convergence', description: 'Interval and radius of convergence for power series.', skills: ['series analysis'] },
          { id: 'taylor', name: 'Taylor and Maclaurin Series', description: 'Constructing series representations and bounding error with the Lagrange term.', skills: ['series analysis', 'applications'] }
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
      id: 'ap-calculus-bc-u1-limit-evaluation-mcq-001', courseId: 'ap-calculus-bc', courseName: 'AP Calculus BC',
      unitId: 'unit-1', unitName: 'Limits and Continuity', topicId: 'limit-evaluation', topicName: 'Evaluating Limits',
      skill: 'limits', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'apply', estimatedTimeSeconds: 60,
      prompt: 'Evaluate \\( \\displaystyle \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} \\).',
      answerChoices: [
        { id: 'A', text: '\\(0\\)' },
        { id: 'B', text: '\\(3\\)' },
        { id: 'C', text: '\\(6\\)' },
        { id: 'D', text: 'The limit does not exist.' }
      ],
      correctAnswer: 'C',
      explanation: 'Factor the numerator: \\(\\frac{x^2-9}{x-3}=\\frac{(x-3)(x+3)}{x-3}=x+3\\) for \\(x\\neq3\\). As \\(x\\to3\\), this approaches \\(3+3=6\\).',
      distractorRationales: {
        A: 'Substituting directly gives \\(0/0\\), an indeterminate form, not \\(0\\); you must simplify first.',
        B: 'This is the value of \\(x\\) being approached, not the limit of the expression.',
        C: '',
        D: 'The discontinuity is removable, so the limit exists and equals \\(6\\).'
      },
      tags: ['limits', 'indeterminate-form', 'factoring'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-calculus-bc-u2-basic-rules-mcq-001', courseId: 'ap-calculus-bc', courseName: 'AP Calculus BC',
      unitId: 'unit-2', unitName: 'Differentiation: Definition and Fundamental Properties', topicId: 'basic-rules', topicName: 'Power, Product, and Quotient Rules',
      skill: 'derivatives', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'apply', estimatedTimeSeconds: 60,
      prompt: 'If \\( f(x) = 4x^3 - 2x + 7 \\), what is \\( f\'(x) \\)?',
      answerChoices: [
        { id: 'A', text: '\\(12x^2 - 2\\)' },
        { id: 'B', text: '\\(12x^2 - 2x\\)' },
        { id: 'C', text: '\\(4x^2 - 2\\)' },
        { id: 'D', text: '\\(12x^2 - 2 + 7\\)' }
      ],
      correctAnswer: 'A',
      explanation: 'Apply the power rule term by term: \\(\\frac{d}{dx}(4x^3)=12x^2\\), \\(\\frac{d}{dx}(-2x)=-2\\), and the constant \\(7\\) differentiates to \\(0\\). So \\(f\'(x)=12x^2-2\\).',
      distractorRationales: {
        A: '',
        B: 'The derivative of the linear term \\(-2x\\) is the constant \\(-2\\), not \\(-2x\\).',
        C: 'The coefficient should be \\(3\\cdot4=12\\), not \\(4\\); the exponent multiplies in.',
        D: 'The constant \\(7\\) has derivative \\(0\\) and should disappear.'
      },
      tags: ['derivatives', 'power-rule', 'polynomial'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-calculus-bc-u10-convergence-tests-mcq-001', courseId: 'ap-calculus-bc', courseName: 'AP Calculus BC',
      unitId: 'unit-10', unitName: 'Infinite Sequences and Series', topicId: 'convergence-tests', topicName: 'Series Convergence Tests',
      skill: 'series analysis', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      prompt: 'Which of the following geometric series converges?',
      answerChoices: [
        { id: 'A', text: '\\( \\sum_{n=0}^{\\infty} \\left(\\tfrac{3}{2}\\right)^n \\)' },
        { id: 'B', text: '\\( \\sum_{n=0}^{\\infty} \\left(\\tfrac{2}{3}\\right)^n \\)' },
        { id: 'C', text: '\\( \\sum_{n=0}^{\\infty} (1)^n \\)' },
        { id: 'D', text: '\\( \\sum_{n=0}^{\\infty} (-2)^n \\)' }
      ],
      correctAnswer: 'B',
      explanation: 'A geometric series \\(\\sum r^n\\) converges if and only if \\(|r|<1\\). Only choice B has \\(|r|=\\tfrac{2}{3}<1\\), so it converges (to \\(\\frac{1}{1-2/3}=3\\)).',
      distractorRationales: {
        A: 'Here \\(r=\\tfrac{3}{2}\\) with \\(|r|>1\\), so the terms grow and the series diverges.',
        B: '',
        C: 'With \\(r=1\\) the partial sums grow without bound, so the series diverges.',
        D: 'Here \\(|r|=2>1\\); the terms do not approach \\(0\\), so the series diverges.'
      },
      tags: ['series', 'geometric-series', 'convergence'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-calculus-bc-u3-chain-rule-mcq-001', courseId: 'ap-calculus-bc', courseName: 'AP Calculus BC',
      unitId: 'unit-3', unitName: 'Differentiation: Composite, Implicit, and Inverse Functions', topicId: 'chain-rule', topicName: 'The Chain Rule',
      skill: 'derivatives', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 90,
      prompt: 'Let \\( g(x) = \\sin(x^2) \\). What is \\( g\'(x) \\)?',
      answerChoices: [
        { id: 'A', text: '\\(\\cos(x^2)\\)' },
        { id: 'B', text: '\\(2x\\cos(x^2)\\)' },
        { id: 'C', text: '\\(2x\\sin(x^2)\\)' },
        { id: 'D', text: '\\(\\cos(2x)\\)' }
      ],
      correctAnswer: 'B',
      explanation: 'By the chain rule, differentiate the outer function and multiply by the derivative of the inner: \\(g\'(x)=\\cos(x^2)\\cdot\\frac{d}{dx}(x^2)=\\cos(x^2)\\cdot 2x=2x\\cos(x^2)\\).',
      distractorRationales: {
        A: 'This omits the chain-rule factor \\(\\frac{d}{dx}(x^2)=2x\\).',
        B: '',
        C: 'The derivative of \\(\\sin\\) is \\(\\cos\\), not \\(\\sin\\); the trig function is wrong.',
        D: 'The inner function \\(x^2\\) is not replaced by \\(2x\\) inside the cosine; the chain rule multiplies, it does not substitute.'
      },
      tags: ['chain-rule', 'trigonometric', 'composite'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-calculus-bc-u6-antiderivatives-calc-001', courseId: 'ap-calculus-bc', courseName: 'AP Calculus BC',
      unitId: 'unit-6', unitName: 'Integration and Accumulation of Change', topicId: 'antiderivatives', topicName: 'Antiderivatives and u-Substitution',
      skill: 'integrals', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'Evaluate the definite integral \\( \\displaystyle \\int_{0}^{2} 3x^2 \\, dx \\). Enter a numerical value.',
      correctAnswer: '8',
      numericTolerance: 0.01,
      acceptableAnswers: ['8', '8.0', '8.00'],
      explanation: 'An antiderivative of \\(3x^2\\) is \\(x^3\\). By the Fundamental Theorem of Calculus, \\(\\int_0^2 3x^2\\,dx = \\left[x^3\\right]_0^2 = 2^3 - 0^3 = 8\\). The signed area under the parabola on \\([0,2]\\) is \\(8\\) square units.',
      tags: ['integrals', 'definite-integral', 'ftc'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-calculus-bc-u4-related-rates-mcq-001', courseId: 'ap-calculus-bc', courseName: 'AP Calculus BC',
      unitId: 'unit-4', unitName: 'Contextual Applications of Differentiation', topicId: 'related-rates', topicName: 'Related Rates',
      skill: 'applications', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'A spherical balloon is inflated so that its radius increases at \\( \\frac{dr}{dt} = 2 \\) cm/s. At the instant the radius is \\( 5 \\) cm, how fast is the volume increasing? (Recall \\( V = \\tfrac{4}{3}\\pi r^3 \\).)',
      answerChoices: [
        { id: 'A', text: '\\(50\\pi\\) cm\\(^3\\)/s' },
        { id: 'B', text: '\\(100\\pi\\) cm\\(^3\\)/s' },
        { id: 'C', text: '\\(200\\pi\\) cm\\(^3\\)/s' },
        { id: 'D', text: '\\(400\\pi\\) cm\\(^3\\)/s' }
      ],
      correctAnswer: 'C',
      explanation: 'Differentiate with respect to time: \\(\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}\\). Substitute \\(r=5\\) and \\(\\frac{dr}{dt}=2\\): \\(\\frac{dV}{dt}=4\\pi(25)(2)=200\\pi\\) cm\\(^3\\)/s.',
      distractorRationales: {
        A: 'This uses \\(2\\pi r\\) (a circumference-type factor) instead of the correct \\(4\\pi r^2\\).',
        B: 'This forgets to multiply by \\(\\frac{dr}{dt}=2\\).',
        C: '',
        D: 'This doubles \\(r^2\\) incorrectly; \\(4\\pi(25)(2)=200\\pi\\), not \\(400\\pi\\).'
      },
      tags: ['related-rates', 'sphere', 'chain-rule'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-calculus-bc-u10-taylor-calc-001', courseId: 'ap-calculus-bc', courseName: 'AP Calculus BC',
      unitId: 'unit-10', unitName: 'Infinite Sequences and Series', topicId: 'taylor', topicName: 'Taylor and Maclaurin Series',
      skill: 'series analysis', questionType: 'calculation', difficulty: 'hard',
      bloomLevel: 'apply', estimatedTimeSeconds: 180,
      prompt: 'The Maclaurin series for \\( e^x \\) is \\( \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} \\). Use the first four nonzero terms (through \\( n=3 \\)) to approximate \\( e^{1} \\). Enter the decimal value of \\( 1 + 1 + \\tfrac{1}{2} + \\tfrac{1}{6} \\).',
      correctAnswer: '2.6667',
      numericTolerance: 0.01,
      acceptableAnswers: ['2.6667', '2.667', '8/3', '2.67'],
      explanation: 'Substituting \\(x=1\\) into the partial sum gives \\(1+1+\\tfrac{1}{2}+\\tfrac{1}{6}=\\tfrac{6+6+3+1}{6}=\\tfrac{16}{6}=\\tfrac{8}{3}\\approx 2.6667\\). This underestimates \\(e\\approx2.71828\\) because the remaining positive terms are omitted.',
      tags: ['taylor-series', 'maclaurin', 'approximation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-calculus-bc-u9-polar-mcq-001', courseId: 'ap-calculus-bc', courseName: 'AP Calculus BC',
      unitId: 'unit-9', unitName: 'Parametric Equations, Polar Coordinates, and Vector-Valued Functions', topicId: 'polar', topicName: 'Polar Curves and Area',
      skill: 'integrals', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'Which integral gives the area enclosed by one petal of the rose \\( r = 2\\cos(2\\theta) \\), where a petal is traced as \\( \\theta \\) runs from \\( -\\tfrac{\\pi}{4} \\) to \\( \\tfrac{\\pi}{4} \\)?',
      answerChoices: [
        { id: 'A', text: '\\( \\int_{-\\pi/4}^{\\pi/4} 2\\cos(2\\theta)\\, d\\theta \\)' },
        { id: 'B', text: '\\( \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4} \\left[2\\cos(2\\theta)\\right]^2 d\\theta \\)' },
        { id: 'C', text: '\\( \\int_{-\\pi/4}^{\\pi/4} \\left[2\\cos(2\\theta)\\right]^2 d\\theta \\)' },
        { id: 'D', text: '\\( \\frac{1}{2}\\int_{0}^{2\\pi} \\left[2\\cos(2\\theta)\\right]^2 d\\theta \\)' }
      ],
      correctAnswer: 'B',
      explanation: 'Polar area is \\(A=\\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta\\). For one petal, \\(r=2\\cos(2\\theta)\\) and the petal is swept on \\([-\\tfrac{\\pi}{4},\\tfrac{\\pi}{4}]\\), giving \\(\\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}[2\\cos(2\\theta)]^2 d\\theta\\).',
      distractorRationales: {
        A: 'This integrates \\(r\\), not \\(\\tfrac{1}{2}r^2\\); the polar-area formula squares \\(r\\).',
        B: '',
        C: 'This drops the factor \\(\\tfrac{1}{2}\\) required by the polar-area formula, doubling the area.',
        D: 'Integrating over \\([0,2\\pi]\\) sweeps the full rose (all four petals), not a single petal.'
      },
      tags: ['polar', 'area', 'rose-curve'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 1+ WRITTEN (FRQ with rubric) ─────────────────────────────────────────
    {
      id: 'ap-calculus-bc-u7-separable-frq-001', courseId: 'ap-calculus-bc', courseName: 'AP Calculus BC',
      unitId: 'unit-7', unitName: 'Differential Equations', topicId: 'separable', topicName: 'Separable Equations',
      skill: 'differential equations', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'Consider the differential equation \\( \\frac{dy}{dx} = xy \\) with the initial condition \\( y(0) = 2 \\). (a) Solve the equation by separation of variables to find \\( y \\) as an explicit function of \\( x \\). (b) Justify why the solution is always positive, and state \\( \\lim_{x \\to \\infty} y(x) \\).',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Separating variables gives \\(\\frac{1}{y}\\,dy = x\\,dx\\). Integrating yields \\(\\ln|y| = \\tfrac{x^2}{2} + C\\), so \\(y = Ae^{x^2/2}\\). The initial condition fixes \\(A=2\\), giving \\(y=2e^{x^2/2}\\).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Separates variables correctly: \\(\\frac{1}{y}dy = x\\,dx\\).', evidenceRequired: 'Both variables isolated before integrating.' },
        { id: 'r2', pointValue: 1, criterion: 'Integrates both sides to \\(\\ln|y| = \\tfrac{x^2}{2} + C\\).', evidenceRequired: 'Correct antiderivatives with constant of integration.' },
        { id: 'r3', pointValue: 1, criterion: 'Applies the initial condition to obtain \\(y = 2e^{x^2/2}\\).', evidenceRequired: 'Solves for the constant using \\(y(0)=2\\).' },
        { id: 'r4', pointValue: 1, criterion: 'Justifies positivity and states the infinite limit.', evidenceRequired: 'Notes exponential is always positive; limit is \\(+\\infty\\).' }
      ],
      modelAnswer: '(a) Separate: \\(\\frac{dy}{y} = x\\,dx\\). Integrate both sides: \\(\\ln|y| = \\tfrac{x^2}{2} + C\\). Exponentiate: \\(y = Ae^{x^2/2}\\) where \\(A=\\pm e^C\\). Using \\(y(0)=2\\): \\(2 = Ae^0 = A\\), so \\(y = 2e^{x^2/2}\\). (b) Because \\(e^{x^2/2} > 0\\) for all real \\(x\\) and the leading constant \\(2>0\\), the product \\(y=2e^{x^2/2}\\) is always positive, so the solution never crosses the \\(x\\)-axis. As \\(x\\to\\infty\\), \\(\\tfrac{x^2}{2}\\to\\infty\\), so \\(y\\to+\\infty\\).',
      tags: ['differential-equations', 'separation-of-variables', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── Extra graph-interpretation written question (bonus coverage) ─────────
    {
      id: 'ap-calculus-bc-u5-extrema-concavity-graph-001', courseId: 'ap-calculus-bc', courseName: 'AP Calculus BC',
      unitId: 'unit-5', unitName: 'Analytical Applications of Differentiation', topicId: 'extrema-concavity', topicName: 'Extrema and Concavity',
      skill: 'justification', questionType: 'graph-interpretation', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 240,
      prompt: 'The table gives values of \\( f\'(x) \\), the derivative of a differentiable function \\( f \\), at several points. Using only this information, identify where \\( f \\) has a local maximum on \\( (1,5) \\) and justify your answer with a sign analysis of \\( f\' \\).',
      dataTable: { columns: ['x', "f'(x)"], rows: [['1', '3'], ['2', '1'], ['3', '0'], ['4', '-2'], ['5', '-5']] },
      correctAnswer: 'f has a local maximum at x = 3.',
      acceptableAnswers: ['x = 3', 'x=3', '3'],
      explanation: 'The derivative \\(f\'\\) is positive for \\(x<3\\) and negative for \\(x>3\\), and \\(f\'(3)=0\\). By the First Derivative Test, \\(f\'\\) changes from positive to negative at \\(x=3\\), so \\(f\\) changes from increasing to decreasing there—indicating a local maximum at \\(x=3\\).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the critical point where \\(f\'=0\\).', evidenceRequired: 'States \\(f\'(3)=0\\).' },
        { id: 'r2', pointValue: 1, criterion: 'Performs a correct sign analysis of \\(f\'\\) around \\(x=3\\).', evidenceRequired: 'Notes \\(f\'>0\\) before and \\(f\'<0\\) after \\(x=3\\).' },
        { id: 'r3', pointValue: 1, criterion: 'Concludes a local maximum by the First Derivative Test.', evidenceRequired: 'Links sign change positive-to-negative to a maximum.' }
      ],
      modelAnswer: 'The function \\(f\\) has a local maximum at \\(x=3\\). From the table, \\(f\'(3)=0\\), making \\(x=3\\) a critical point. For \\(x<3\\) (at \\(x=1,2\\)) \\(f\'>0\\), so \\(f\\) is increasing; for \\(x>3\\) (at \\(x=4,5\\)) \\(f\'<0\\), so \\(f\\) is decreasing. Because \\(f\'\\) changes sign from positive to negative at \\(x=3\\), the First Derivative Test guarantees a local maximum there.',
      tags: ['first-derivative-test', 'extrema', 'justification'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
