/**
 * Five & A+ — AI Question Stream · Course data: AP Macroeconomics
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) shape exactly.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-macroeconomics',
    displayName: 'AP Macroeconomics',
    description: 'The economic principles that apply to an economic system as a whole, including measurement of economic performance, national income and price determination, the financial sector, stabilization policies, economic growth, and international economics.',
    category: 'history-social-science',
    allowedQuestionTypes: ['mcq', 'graph-interpretation', 'calculation', 'data-analysis', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'graph-interpretation', 'frq'],
    skills: [
      'economic concepts',
      'graphing',
      'economic models',
      'policy analysis',
      'quantitative reasoning'
    ],
    bigIdeas: ['Economic Measurement', 'Markets and Models', 'Policy and Stabilization', 'The Global Economy'],
    units: [
      { id: 'unit-1', name: 'Basic Economic Concepts', examWeight: '5-10%', description: 'Scarcity, opportunity cost, the production possibilities curve, comparative advantage, and supply and demand.',
        topics: [
          { id: 'scarcity-opportunity-cost', name: 'Scarcity and Opportunity Cost', description: 'Limited resources, trade-offs, and the cost of the next-best alternative.', skills: ['economic concepts'] },
          { id: 'ppc', name: 'Production Possibilities Curve', description: 'Efficiency, growth, opportunity cost, and the law of increasing costs on the PPC.', skills: ['economic models'] },
          { id: 'comparative-advantage', name: 'Comparative Advantage and Trade', description: 'Specialization and gains from trade based on lower opportunity cost.', skills: ['quantitative reasoning'] }
        ] },
      { id: 'unit-2', name: 'Economic Indicators and the Business Cycle', examWeight: '12-17%', description: 'GDP, unemployment, inflation, price indices, and the phases of the business cycle.',
        topics: [
          { id: 'gdp', name: 'Gross Domestic Product', description: 'Measuring output with the expenditure approach and distinguishing nominal from real GDP.', skills: ['quantitative reasoning'] },
          { id: 'unemployment', name: 'Unemployment', description: 'Types of unemployment, the unemployment rate, and the natural rate.', skills: ['economic concepts'] },
          { id: 'inflation', name: 'Inflation and Price Indices', description: 'The CPI, calculating inflation rates, and real versus nominal values.', skills: ['quantitative reasoning'] }
        ] },
      { id: 'unit-3', name: 'National Income and Price Determination', examWeight: '17-27%', description: 'Aggregate demand, aggregate supply, the multiplier, and fiscal policy.',
        topics: [
          { id: 'ad-as', name: 'Aggregate Demand and Aggregate Supply', description: 'Determinants of AD and AS and short-run macroeconomic equilibrium.', skills: ['economic models'] },
          { id: 'multiplier', name: 'The Spending Multiplier', description: 'How an initial change in spending produces a larger change in output.', skills: ['quantitative reasoning'] },
          { id: 'fiscal-policy', name: 'Fiscal Policy', description: 'Using government spending and taxation to close output gaps.', skills: ['policy analysis'] }
        ] },
      { id: 'unit-4', name: 'Financial Sector', examWeight: '18-23%', description: 'Money, the banking system, the money market, and monetary policy.',
        topics: [
          { id: 'money-banking', name: 'Money and Banking', description: 'Functions of money, fractional reserve banking, and the money multiplier.', skills: ['economic concepts'] },
          { id: 'money-market', name: 'The Money Market', description: 'Money supply, money demand, and the nominal interest rate.', skills: ['economic models'] },
          { id: 'monetary-policy', name: 'Monetary Policy', description: 'Central bank tools and their effect on interest rates and output.', skills: ['policy analysis'] }
        ] },
      { id: 'unit-5', name: 'Long-Run Consequences of Stabilization Policies', examWeight: '20-30%', description: 'The Phillips curve, economic growth, deficits, debt, and crowding out.',
        topics: [
          { id: 'phillips-curve', name: 'The Phillips Curve', description: 'Short-run and long-run relationships between inflation and unemployment.', skills: ['economic models'] },
          { id: 'economic-growth', name: 'Economic Growth', description: 'Sources of long-run growth and shifts in the long-run aggregate supply curve.', skills: ['economic concepts'] },
          { id: 'crowding-out', name: 'Deficits, Debt, and Crowding Out', description: 'How government borrowing affects interest rates and private investment.', skills: ['policy analysis'] }
        ] },
      { id: 'unit-6', name: 'Open Economy: International Trade and Finance', examWeight: '10-13%', description: 'The balance of payments, exchange rates, and the foreign exchange market.',
        topics: [
          { id: 'balance-of-payments', name: 'Balance of Payments', description: 'The current account and the financial (capital) account.', skills: ['economic concepts'] },
          { id: 'forex-market', name: 'The Foreign Exchange Market', description: 'Determinants of currency demand and supply and appreciation/depreciation.', skills: ['economic models'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 70, weight: '66%', notes: '60 questions covering concepts, graphs, and quantitative reasoning.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'graph-interpretation', 'short-answer'], timingMinutes: 60, weight: '33%', notes: '1 long and 2 short free-response questions, including 10 minutes of reading time.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-macroeconomics-u1-scarcity-opportunity-cost-mcq-001', courseId: 'ap-macroeconomics', courseName: 'AP Macroeconomics',
      unitId: 'unit-1', unitName: 'Basic Economic Concepts', topicId: 'scarcity-opportunity-cost', topicName: 'Scarcity and Opportunity Cost',
      skill: 'economic concepts', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'A student has one free evening and chooses to study for an economics exam instead of going to a concert or working a paid shift. The opportunity cost of studying is best described as which of the following?',
      answerChoices: [
        { id: 'A', text: 'The combined value of the concert and the paid shift' },
        { id: 'B', text: 'The value of the single most preferred alternative given up' },
        { id: 'C', text: 'Zero, because studying is free' },
        { id: 'D', text: 'The amount the student would have earned at the paid shift, minus tuition' }
      ],
      correctAnswer: 'B',
      explanation: 'Opportunity cost is the value of the next-best alternative forgone, not the sum of all alternatives. The student gives up only the one option they would otherwise have chosen.',
      distractorRationales: {
        A: 'Opportunity cost counts only the single best forgone alternative, not all of them added together.',
        B: '',
        C: 'Even an activity with no monetary price has an opportunity cost: the time and the best alternative use of it.',
        D: 'Tuition is a sunk cost unrelated to this evening’s decision and is not subtracted.'
      },
      tags: ['scarcity', 'opportunity-cost', 'trade-offs'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-macroeconomics-u2-unemployment-mcq-001', courseId: 'ap-macroeconomics', courseName: 'AP Macroeconomics',
      unitId: 'unit-2', unitName: 'Economic Indicators and the Business Cycle', topicId: 'unemployment', topicName: 'Unemployment',
      skill: 'economic concepts', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'A worker is laid off because a factory automated her assembly-line job, and her skills no longer match available openings. This is an example of which type of unemployment?',
      answerChoices: [
        { id: 'A', text: 'Frictional unemployment' },
        { id: 'B', text: 'Structural unemployment' },
        { id: 'C', text: 'Cyclical unemployment' },
        { id: 'D', text: 'Seasonal unemployment' }
      ],
      correctAnswer: 'B',
      explanation: 'Structural unemployment occurs when workers’ skills no longer match the jobs available, often due to technological change. It is part of the natural rate of unemployment.',
      distractorRationales: {
        A: 'Frictional unemployment is short-term joblessness while searching for or transitioning between jobs.',
        B: '',
        C: 'Cyclical unemployment results from a downturn in the business cycle, not a skills mismatch.',
        D: 'Seasonal unemployment follows predictable calendar patterns such as harvest or holiday cycles.'
      },
      tags: ['unemployment', 'structural', 'labor-market'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-macroeconomics-u4-money-banking-mcq-001', courseId: 'ap-macroeconomics', courseName: 'AP Macroeconomics',
      unitId: 'unit-4', unitName: 'Financial Sector', topicId: 'money-banking', topicName: 'Money and Banking',
      skill: 'economic concepts', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'When a person uses currency to buy groceries, which function of money is most directly being illustrated?',
      answerChoices: [
        { id: 'A', text: 'Store of value' },
        { id: 'B', text: 'Unit of account' },
        { id: 'C', text: 'Medium of exchange' },
        { id: 'D', text: 'Standard of deferred payment' }
      ],
      correctAnswer: 'C',
      explanation: 'Using money to pay for goods in a transaction illustrates its role as a medium of exchange, which eliminates the need for barter.',
      distractorRationales: {
        A: 'Store of value refers to money holding purchasing power over time, not being spent now.',
        B: 'Unit of account refers to money as a common measure of prices, such as listing prices in dollars.',
        C: '',
        D: 'Standard of deferred payment refers to settling debts in the future, not an immediate purchase.'
      },
      tags: ['money', 'functions-of-money', 'medium-of-exchange'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-macroeconomics-u3-ad-as-graph-001', courseId: 'ap-macroeconomics', courseName: 'AP Macroeconomics',
      unitId: 'unit-3', unitName: 'National Income and Price Determination', topicId: 'ad-as', topicName: 'Aggregate Demand and Aggregate Supply',
      skill: 'graphing', questionType: 'graph-interpretation', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'Using the described AD/AS graph, identify the type of output gap the economy is experiencing and explain what will happen to the price level and real output if aggregate demand increases. Then state one component of aggregate demand that could cause this shift.',
      graphDescription: 'A standard AD/AS diagram with the price level on the vertical axis and real GDP on the horizontal axis. The short-run aggregate supply curve (SRAS) slopes upward and the aggregate demand curve (AD) slopes downward. They intersect at a real output level Y1 that lies to the LEFT of the vertical long-run aggregate supply curve (LRAS) drawn at full-employment output Yf. Thus current equilibrium output Y1 is below Yf.',
      correctAnswer: 'A recessionary gap; an increase in AD raises both the price level and real output toward full employment.',
      explanation: 'Because equilibrium output Y1 is to the left of LRAS (Yf), the economy has a recessionary gap. An increase in AD shifts the curve rightward along the upward-sloping SRAS, raising both the price level and real GDP and moving output toward Yf.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies a recessionary (negative) output gap.', evidenceRequired: 'States Y1 is below full-employment output Yf.' },
        { id: 'r2', pointValue: 1, criterion: 'States the price level and real output both rise when AD increases.', evidenceRequired: 'Correct direction for both variables along SRAS.' },
        { id: 'r3', pointValue: 1, criterion: 'Names a valid AD component (C, I, G, or NX).', evidenceRequired: 'A specific spending component that could increase.' }
      ],
      modelAnswer: 'The economy has a recessionary gap because the short-run equilibrium output Y1 lies to the left of LRAS at full-employment output Yf. If aggregate demand increases, the AD curve shifts right and the new equilibrium moves up along the upward-sloping SRAS, so the price level rises and real GDP rises toward Yf. A component that could cause this is an increase in investment spending (I), for example from lower interest rates.',
      tags: ['ad-as', 'recessionary-gap', 'aggregate-demand'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-macroeconomics-u2-inflation-calc-001', courseId: 'ap-macroeconomics', courseName: 'AP Macroeconomics',
      unitId: 'unit-2', unitName: 'Economic Indicators and the Business Cycle', topicId: 'inflation', topicName: 'Inflation and Price Indices',
      skill: 'quantitative reasoning', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 120,
      prompt: 'The Consumer Price Index was 200 in year 1 and 210 in year 2. Calculate the rate of inflation between year 1 and year 2, expressed as a percent.',
      correctAnswer: '5',
      numericTolerance: 0.1,
      acceptableAnswers: ['5', '5%', '5.0', '5 percent'],
      explanation: 'Inflation rate = ((new CPI - old CPI) / old CPI) x 100 = ((210 - 200) / 200) x 100 = (10 / 200) x 100 = 5%. The CPI rose by 10 index points on a base of 200, which is a 5 percent increase in the price level.',
      tags: ['inflation', 'cpi', 'calculation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-macroeconomics-u4-monetary-policy-mcq-001', courseId: 'ap-macroeconomics', courseName: 'AP Macroeconomics',
      unitId: 'unit-4', unitName: 'Financial Sector', topicId: 'monetary-policy', topicName: 'Monetary Policy',
      skill: 'policy analysis', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'To combat a recession, a central bank conducts expansionary monetary policy. Which sequence correctly traces the intended effects?',
      answerChoices: [
        { id: 'A', text: 'Buy bonds → money supply rises → interest rates fall → investment and AD rise' },
        { id: 'B', text: 'Sell bonds → money supply rises → interest rates fall → investment and AD rise' },
        { id: 'C', text: 'Buy bonds → money supply falls → interest rates rise → investment and AD fall' },
        { id: 'D', text: 'Sell bonds → money supply falls → interest rates rise → investment and AD fall' }
      ],
      correctAnswer: 'A',
      explanation: 'Expansionary policy means buying bonds (open-market purchases), which increases the money supply, lowers the nominal interest rate, and stimulates interest-sensitive investment spending, shifting AD right.',
      distractorRationales: {
        A: '',
        B: 'Selling bonds is contractionary and would reduce the money supply, the opposite of the first step.',
        C: 'Buying bonds increases, not decreases, the money supply.',
        D: 'Selling bonds and falling AD describe contractionary policy, which would worsen a recession.'
      },
      tags: ['monetary-policy', 'open-market-operations', 'interest-rates'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-macroeconomics-u3-multiplier-calc-001', courseId: 'ap-macroeconomics', courseName: 'AP Macroeconomics',
      unitId: 'unit-3', unitName: 'National Income and Price Determination', topicId: 'multiplier', topicName: 'The Spending Multiplier',
      skill: 'quantitative reasoning', questionType: 'calculation', difficulty: 'hard',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'In an economy with a marginal propensity to consume (MPC) of 0.8, the government increases spending by $50 billion. Assuming no crowding out and a constant price level, calculate the total change in real GDP, in billions of dollars.',
      correctAnswer: '250',
      numericTolerance: 1,
      acceptableAnswers: ['250', '$250', '250 billion', '$250 billion'],
      explanation: 'The spending multiplier is 1 / (1 - MPC) = 1 / (1 - 0.8) = 1 / 0.2 = 5. Total change in real GDP = multiplier x change in spending = 5 x $50 billion = $250 billion. The initial injection is re-spent through successive rounds of consumption.',
      tags: ['multiplier', 'fiscal-policy', 'mpc', 'calculation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-macroeconomics-u5-crowding-out-mcq-001', courseId: 'ap-macroeconomics', courseName: 'AP Macroeconomics',
      unitId: 'unit-5', unitName: 'Long-Run Consequences of Stabilization Policies', topicId: 'crowding-out', topicName: 'Deficits, Debt, and Crowding Out',
      skill: 'policy analysis', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'A government finances a large increase in spending by borrowing heavily in the loanable funds market. Which result and explanation are best supported, assuming the economy is near full employment?',
      answerChoices: [
        { id: 'A', text: 'Real interest rates rise, reducing private investment (crowding out) and partially offsetting the fiscal stimulus.' },
        { id: 'B', text: 'Real interest rates fall because government borrowing increases the supply of loanable funds.' },
        { id: 'C', text: 'Private investment rises because higher deficits always raise business confidence.' },
        { id: 'D', text: 'The money supply automatically expands to keep interest rates unchanged.' }
      ],
      correctAnswer: 'A',
      explanation: 'Government borrowing increases the demand for loanable funds, raising the real interest rate. Higher rates discourage interest-sensitive private investment, the crowding-out effect, which partially offsets the expansionary impact of the spending.',
      distractorRationales: {
        A: '',
        B: 'Borrowing increases the demand for loanable funds, not the supply, so the real interest rate rises.',
        C: 'There is no automatic link from deficits to higher investment; crowding out typically reduces it.',
        D: 'The money supply does not automatically expand; that would require separate central bank action.'
      },
      tags: ['crowding-out', 'loanable-funds', 'deficits', 'interest-rates'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 1+ WRITTEN (FRQ) ─────────────────────────────────────────────────────
    {
      id: 'ap-macroeconomics-u6-forex-market-frq-001', courseId: 'ap-macroeconomics', courseName: 'AP Macroeconomics',
      unitId: 'unit-6', unitName: 'Open Economy: International Trade and Finance', topicId: 'forex-market', topicName: 'The Foreign Exchange Market',
      skill: 'policy analysis', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'Suppose interest rates in the United States rise relative to interest rates in the Eurozone, while interest rates in Europe stay the same. (a) Explain what happens to the demand for U.S. dollars in the foreign exchange market and why. (b) State whether the U.S. dollar appreciates or depreciates against the euro. (c) Predict and justify the effect of this currency change on U.S. exports.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Higher relative U.S. interest rates attract foreign financial investment, increasing demand for dollars. The dollar appreciates, which makes U.S. goods more expensive abroad and tends to reduce U.S. exports.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'States that demand for U.S. dollars increases and explains why (higher relative returns attract foreign investors).', evidenceRequired: 'Links higher U.S. interest rates to greater dollar demand.' },
        { id: 'r2', pointValue: 1, criterion: 'States that the dollar appreciates against the euro.', evidenceRequired: 'Correct direction of the exchange-rate change.' },
        { id: 'r3', pointValue: 1, criterion: 'Predicts that U.S. exports decrease.', evidenceRequired: 'Clear directional prediction for exports.' },
        { id: 'r4', pointValue: 1, criterion: 'Justifies the export effect through relative price changes.', evidenceRequired: 'Explains that a stronger dollar makes U.S. goods more expensive abroad.' }
      ],
      modelAnswer: '(a) The demand for U.S. dollars increases. Higher U.S. interest rates relative to the Eurozone make U.S. financial assets more attractive, so foreign investors must buy dollars to purchase those assets, raising dollar demand. (b) The dollar appreciates against the euro because greater demand for dollars raises its value in terms of euros. (c) U.S. exports decrease. A stronger dollar makes U.S. goods more expensive for foreign buyers (they need more euros per dollar), so foreign demand for U.S. exports falls.',
      tags: ['foreign-exchange', 'appreciation', 'exports', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
