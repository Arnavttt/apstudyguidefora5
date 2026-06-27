/**
 * Five & A+ — AI Question Stream · Course data: AP Microeconomics
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE shape (assets/qstream/data/ap-biology.js).
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-microeconomics',
    displayName: 'AP Microeconomics',
    description: 'How individuals and firms make decisions in markets: scarcity and trade-offs, supply and demand, production and cost, market structures, factor markets, and the role of government in correcting market failure.',
    category: 'history-social-science',
    allowedQuestionTypes: ['mcq', 'graph-interpretation', 'calculation', 'data-analysis', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'graph-interpretation', 'frq'],
    skills: [
      'economic concepts',
      'graphing',
      'market analysis',
      'firm behavior',
      'quantitative reasoning',
      'policy analysis'
    ],
    bigIdeas: ['Scarcity and Choice', 'Markets and Efficiency', 'Firm Decision-Making', 'Government Intervention'],
    units: [
      { id: 'unit-1', name: 'Basic Economic Concepts', examWeight: '12-15%', description: 'Scarcity, trade-offs, opportunity cost, comparative advantage, and the production possibilities curve.',
        topics: [
          { id: 'scarcity-opportunity-cost', name: 'Scarcity and Opportunity Cost', description: 'Why choices are necessary and how opportunity cost measures the value of the next-best alternative.', skills: ['economic concepts'] },
          { id: 'ppc', name: 'Production Possibilities Curve', description: 'Modeling efficiency, growth, and increasing opportunity cost with the PPC.', skills: ['graphing'] },
          { id: 'comparative-advantage', name: 'Comparative Advantage and Trade', description: 'Specialization based on lower opportunity cost and the gains from trade.', skills: ['quantitative reasoning'] }
        ] },
      { id: 'unit-2', name: 'Supply and Demand', examWeight: '20-25%', description: 'Market equilibrium, elasticity, consumer and producer surplus, and government price controls.',
        topics: [
          { id: 'market-equilibrium', name: 'Demand, Supply, and Equilibrium', description: 'Determinants of demand and supply and how shifts change equilibrium price and quantity.', skills: ['market analysis'] },
          { id: 'elasticity', name: 'Elasticity', description: 'Price elasticity of demand and supply, income and cross-price elasticity, and total revenue.', skills: ['quantitative reasoning'] },
          { id: 'price-controls', name: 'Price Controls and Surplus', description: 'Price ceilings, price floors, deadweight loss, and consumer/producer surplus.', skills: ['policy analysis'] }
        ] },
      { id: 'unit-3', name: 'Production, Cost, and the Perfect Competition Model', examWeight: '22-25%', description: 'Production functions, short-run and long-run costs, profit maximization, and the perfectly competitive firm.',
        topics: [
          { id: 'production-costs', name: 'Production and Costs', description: 'Marginal product, diminishing returns, and the family of short-run cost curves.', skills: ['firm behavior'] },
          { id: 'profit-maximization', name: 'Profit Maximization', description: 'The MR = MC rule and how firms choose output to maximize profit.', skills: ['firm behavior'] },
          { id: 'perfect-competition', name: 'Perfect Competition', description: 'Short-run and long-run outcomes for price-taking firms and the industry.', skills: ['market analysis'] }
        ] },
      { id: 'unit-4', name: 'Imperfect Competition', examWeight: '15-22%', description: 'Monopoly, price discrimination, oligopoly and game theory, and monopolistic competition.',
        topics: [
          { id: 'monopoly', name: 'Monopoly', description: 'A single price-setting firm, the marginal revenue curve, and deadweight loss.', skills: ['firm behavior'] },
          { id: 'game-theory', name: 'Oligopoly and Game Theory', description: 'Strategic interaction, payoff matrices, and dominant strategies.', skills: ['market analysis'] },
          { id: 'monopolistic-competition', name: 'Monopolistic Competition', description: 'Differentiated products, long-run zero economic profit, and excess capacity.', skills: ['market analysis'] }
        ] },
      { id: 'unit-5', name: 'Factor Markets', examWeight: '10-13%', description: 'Derived demand for inputs, marginal revenue product, and least-cost input combinations.',
        topics: [
          { id: 'derived-demand-mrp', name: 'Derived Demand and MRP', description: 'How firms hire inputs by comparing marginal revenue product to factor price.', skills: ['firm behavior'] },
          { id: 'factor-market-equilibrium', name: 'Factor Market Equilibrium', description: 'Wage and employment determination in competitive and monopsony labor markets.', skills: ['market analysis'] }
        ] },
      { id: 'unit-6', name: 'Market Failure and the Role of Government', examWeight: '8-13%', description: 'Externalities, public goods, the distribution of income, and government correction of market failure.',
        topics: [
          { id: 'externalities', name: 'Externalities', description: 'Spillover costs and benefits, and corrective taxes and subsidies.', skills: ['policy analysis'] },
          { id: 'public-goods', name: 'Public Goods and the Commons', description: 'Non-excludable, non-rival goods, the free-rider problem, and common resources.', skills: ['economic concepts'] },
          { id: 'income-distribution', name: 'Income Distribution', description: 'Measuring inequality with the Lorenz curve and Gini coefficient.', skills: ['quantitative reasoning'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 70, weight: '66%', notes: '60 multiple-choice questions covering all six units.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'graph-interpretation', 'calculation'], timingMinutes: 60, weight: '34%', notes: '1 long question and 2 short questions; many require labeled graphs and quantitative work.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-microeconomics-u1-scarcity-opportunity-cost-mcq-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-1', unitName: 'Basic Economic Concepts', topicId: 'scarcity-opportunity-cost', topicName: 'Scarcity and Opportunity Cost',
      skill: 'economic concepts', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'A student has one free evening and can either study for an exam or attend a concert. The opportunity cost of attending the concert is best described as which of the following?',
      answerChoices: [
        { id: 'A', text: 'The price of the concert ticket only' },
        { id: 'B', text: 'The value of the studying that is given up' },
        { id: 'C', text: 'The total time available in the evening' },
        { id: 'D', text: 'Nothing, because the evening was free time' }
      ],
      correctAnswer: 'B',
      explanation: 'Opportunity cost is the value of the next-best alternative that is forgone. By choosing the concert, the student gives up the studying, so the value of that studying is the opportunity cost.',
      distractorRationales: {
        A: 'The ticket price is an explicit cost but ignores the forgone next-best use of the time.',
        B: '',
        C: 'Total available time is the resource being allocated, not the cost of one specific choice.',
        D: 'Even "free" time has an opportunity cost because it could have been used another way.'
      },
      tags: ['opportunity-cost', 'scarcity', 'trade-offs'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-microeconomics-u2-market-equilibrium-mcq-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-2', unitName: 'Supply and Demand', topicId: 'market-equilibrium', topicName: 'Demand, Supply, and Equilibrium',
      skill: 'market analysis', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'In the market for coffee, a sudden increase in consumer income (coffee is a normal good) will most likely cause which change in the short run?',
      answerChoices: [
        { id: 'A', text: 'The demand curve shifts left, lowering price and quantity.' },
        { id: 'B', text: 'The demand curve shifts right, raising price and quantity.' },
        { id: 'C', text: 'The supply curve shifts right, lowering price and raising quantity.' },
        { id: 'D', text: 'There is a movement along the demand curve with no shift.' }
      ],
      correctAnswer: 'B',
      explanation: 'For a normal good, higher income increases demand, shifting the demand curve rightward. At the original price there is a shortage, so equilibrium price and quantity both rise.',
      distractorRationales: {
        A: 'A leftward demand shift would follow a decrease in income for a normal good, not an increase.',
        B: '',
        C: 'A change in income affects demand, not the supply curve.',
        D: 'A change in income is a demand determinant, so it shifts the curve rather than causing a movement along it.'
      },
      tags: ['demand', 'normal-good', 'equilibrium'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-microeconomics-u3-perfect-competition-mcq-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-3', unitName: 'Production, Cost, and the Perfect Competition Model', topicId: 'perfect-competition', topicName: 'Perfect Competition',
      skill: 'firm behavior', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'A perfectly competitive firm is best described as a "price taker." This means that the firm',
      answerChoices: [
        { id: 'A', text: 'sets its own price above marginal cost to earn profit.' },
        { id: 'B', text: 'must sell at the market price determined by industry supply and demand.' },
        { id: 'C', text: 'faces a downward-sloping demand curve for its output.' },
        { id: 'D', text: 'can raise price without losing any customers.' }
      ],
      correctAnswer: 'B',
      explanation: 'Because each firm is tiny relative to the market and sells an identical product, it cannot influence price and must accept the market price, facing a perfectly elastic (horizontal) demand curve at that price.',
      distractorRationales: {
        A: 'Setting price above marginal cost describes firms with market power, not price takers.',
        B: '',
        C: 'A downward-sloping firm demand curve describes imperfect competition, not perfect competition.',
        D: 'If a price taker raised its price, it would lose all of its customers to identical rivals.'
      },
      tags: ['perfect-competition', 'price-taker', 'market-structure'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-microeconomics-u2-elasticity-calc-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-2', unitName: 'Supply and Demand', topicId: 'elasticity', topicName: 'Elasticity',
      skill: 'quantitative reasoning', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'When the price of a movie ticket falls from $10 to $8, the quantity demanded rises from 100 to 140 tickets. Using the simple (non-midpoint) percentage-change method based on the initial values, what is the absolute value of the price elasticity of demand? Report your answer as a number.',
      correctAnswer: '2',
      numericTolerance: 0.05,
      acceptableAnswers: ['2', '2.0', '|−2|', '2 (elastic)'],
      explanation: 'Percentage change in quantity = (140 − 100) / 100 = +40%. Percentage change in price = (8 − 10) / 10 = −20%. Elasticity = %ΔQ ÷ %ΔP = 40% ÷ (−20%) = −2, so the absolute value is 2. Because |Ed| > 1, demand is elastic over this range.',
      tags: ['elasticity', 'price-elasticity', 'calculation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-microeconomics-u3-production-costs-mcq-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-3', unitName: 'Production, Cost, and the Perfect Competition Model', topicId: 'production-costs', topicName: 'Production and Costs',
      skill: 'firm behavior', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'A firm notices that as it hires additional workers in the short run, total output keeps rising but each new worker adds less to output than the previous one. This pattern is explained by which concept?',
      answerChoices: [
        { id: 'A', text: 'Economies of scale' },
        { id: 'B', text: 'The law of diminishing marginal returns' },
        { id: 'C', text: 'Constant returns to scale' },
        { id: 'D', text: 'A leftward shift of the production function' }
      ],
      correctAnswer: 'B',
      explanation: 'In the short run at least one input (such as capital) is fixed. As more of a variable input is added to that fixed input, marginal product eventually declines—the law of diminishing marginal returns—so each extra worker adds less output than the last.',
      distractorRationales: {
        A: 'Economies of scale are a long-run concept that requires changing all inputs, not adding labor to fixed capital.',
        B: '',
        C: 'Constant returns to scale also concern proportional changes in all inputs in the long run.',
        D: 'Output is still rising, so the production function is not shifting; only marginal product is falling.'
      },
      tags: ['diminishing-returns', 'marginal-product', 'short-run'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-microeconomics-u4-game-theory-mcq-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-4', unitName: 'Imperfect Competition', topicId: 'game-theory', topicName: 'Oligopoly and Game Theory',
      skill: 'market analysis', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'Two firms, X and Y, each choose to set a High or Low price. Profits (X, Y) are: both High = (10, 10); both Low = (5, 5); X Low, Y High = (12, 3); X High, Y Low = (3, 12). What is the dominant strategy for each firm?',
      answerChoices: [
        { id: 'A', text: 'Each firm has a dominant strategy to set a High price.' },
        { id: 'B', text: 'Each firm has a dominant strategy to set a Low price.' },
        { id: 'C', text: 'Only firm X has a dominant strategy, to set a Low price.' },
        { id: 'D', text: 'Neither firm has a dominant strategy.' }
      ],
      correctAnswer: 'B',
      explanation: 'For firm X: if Y plays High, X earns 12 (Low) vs 10 (High) → Low; if Y plays Low, X earns 5 (Low) vs 3 (High) → Low. Low is dominant for X. By symmetry the same holds for Y, so both have a dominant strategy to set a Low price, even though both would be better off at (10, 10).',
      distractorRationales: {
        A: 'High is not dominant: each firm can do better by undercutting to Low regardless of the rival’s choice.',
        B: '',
        C: 'The payoffs are symmetric, so Y has the same dominant strategy as X, not just X.',
        D: 'Both firms do have a dominant strategy here; Low beats High in every column.'
      },
      tags: ['game-theory', 'dominant-strategy', 'oligopoly'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-microeconomics-u4-monopoly-graph-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-4', unitName: 'Imperfect Competition', topicId: 'monopoly', topicName: 'Monopoly',
      skill: 'graphing', questionType: 'graph-interpretation', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 240,
      prompt: 'A graph shows a single-price monopolist. Use the described curves to explain how the monopolist chooses its profit-maximizing quantity and price, and identify where deadweight loss appears relative to the allocatively efficient outcome.',
      graphDescription: 'A downward-sloping market demand (D) curve and a marginal revenue (MR) curve that lies below and falls twice as steeply as demand. An upward-sloping marginal cost (MC) curve crosses MR at quantity Qm. The price Pm is read up from Qm to the demand curve. The allocatively efficient quantity Qe is where MC crosses demand, with Qe > Qm.',
      correctAnswer: 'The monopolist produces Qm where MR = MC, charges Pm read off demand above Qm, and a deadweight-loss triangle lies between Qm and Qe bounded above by demand and below by MC.',
      explanation: 'A monopolist maximizes profit by producing where MR = MC (quantity Qm) and charging the highest price consumers will pay for that quantity, found on the demand curve (Pm). Because the firm restricts output below the allocatively efficient level Qe (where MC = demand, i.e., P = MC), units between Qm and Qe whose marginal benefit exceeds marginal cost are not produced, creating a deadweight-loss triangle bounded by demand above and MC below between Qm and Qe.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'States the monopolist produces where MR = MC (quantity Qm).', evidenceRequired: 'Identifies the MR = MC output rule.' },
        { id: 'r2', pointValue: 1, criterion: 'States price is read up from Qm to the demand curve (Pm), above MC.', evidenceRequired: 'Price taken from demand, not MR or MC.' },
        { id: 'r3', pointValue: 1, criterion: 'Identifies allocative efficiency at Qe where P = MC and Qe > Qm.', evidenceRequired: 'Names the efficient quantity and condition.' },
        { id: 'r4', pointValue: 1, criterion: 'Locates the deadweight-loss triangle between Qm and Qe.', evidenceRequired: 'Region bounded by demand above and MC below.' }
      ],
      modelAnswer: 'The monopolist finds the profit-maximizing quantity Qm where marginal revenue equals marginal cost (MR = MC). It then sets the highest price buyers will pay for Qm by going straight up to the demand curve, giving Pm, which lies above MC. The allocatively efficient quantity is Qe, where the demand curve (marginal benefit) intersects MC so that P = MC; because the monopolist restricts output, Qm < Qe. The units between Qm and Qe would generate more benefit (demand) than cost (MC) but go unproduced, so the deadweight loss is the triangle bounded by the demand curve above and the MC curve below, between Qm and Qe.',
      tags: ['monopoly', 'deadweight-loss', 'allocative-efficiency', 'graph'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-microeconomics-u5-derived-demand-mrp-mcq-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-5', unitName: 'Factor Markets', topicId: 'derived-demand-mrp', topicName: 'Derived Demand and MRP',
      skill: 'firm behavior', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 180,
      prompt: 'A perfectly competitive firm sells output at $4 per unit and hires labor in a competitive labor market at a wage of $40 per worker per day. The marginal product of the 5th worker is 12 units and of the 6th worker is 8 units. Which hiring decision is profit-maximizing, and why?',
      answerChoices: [
        { id: 'A', text: 'Hire the 6th worker because MRP ($32) exceeds the wage ($40).' },
        { id: 'B', text: 'Hire the 5th worker but not the 6th, because the 6th worker’s MRP ($32) is below the $40 wage.' },
        { id: 'C', text: 'Hire neither worker because marginal product is falling.' },
        { id: 'D', text: 'Hire the 6th worker because total output still rises.' }
      ],
      correctAnswer: 'B',
      explanation: 'Marginal revenue product = marginal product × output price. The 5th worker’s MRP = 12 × $4 = $48 > $40 wage, so hiring is profitable. The 6th worker’s MRP = 8 × $4 = $32 < $40 wage, so that worker costs more than they add. The firm hires up to the point where MRP ≥ wage, so it hires the 5th but not the 6th.',
      distractorRationales: {
        A: '$32 is less than the $40 wage, so the 6th worker reduces profit and should not be hired.',
        B: '',
        C: 'Falling marginal product alone does not stop hiring; firms hire while MRP ≥ wage, which is true for the 5th worker.',
        D: 'Rising total output is not the criterion; the firm compares each worker’s MRP to the wage.'
      },
      tags: ['mrp', 'derived-demand', 'labor-market', 'profit-maximization'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN (FRQ + data-analysis), each with a rubric ─────────────────────
    {
      id: 'ap-microeconomics-u6-externalities-frq-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-6', unitName: 'Market Failure and the Role of Government', topicId: 'externalities', topicName: 'Externalities',
      skill: 'policy analysis', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'A factory produces paint and releases pollution that imposes costs on nearby residents who are not part of the transaction. (a) Identify the type of externality and explain why the unregulated market output is not allocatively efficient. (b) Explain how a correctly set per-unit (Pigouvian) tax can move the market toward the efficient quantity, and state what happens to deadweight loss.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Pollution is a negative externality: marginal social cost (MSC) exceeds marginal private cost (MPC). The market sets MPC = demand and overproduces relative to the socially efficient point where MSC = demand, creating deadweight loss that a corrective tax equal to the marginal external cost can eliminate.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies a negative (production) externality.', evidenceRequired: 'Names negative externality / spillover cost.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains overproduction because MSC > MPC at the market quantity.', evidenceRequired: 'Compares social and private cost.' },
        { id: 'r3', pointValue: 1, criterion: 'Explains a per-unit tax equal to the marginal external cost shifts supply to MSC.', evidenceRequired: 'Tax size tied to external cost.' },
        { id: 'r4', pointValue: 1, criterion: 'States the efficient quantity is reached and deadweight loss is eliminated/reduced.', evidenceRequired: 'Links tax to efficiency and DWL.' }
      ],
      modelAnswer: '(a) The pollution is a negative externality of production: the factory’s private decision ignores the spillover cost borne by residents, so marginal social cost (MSC) lies above marginal private cost (MPC). The unregulated market produces where MPC equals demand, which is greater than the efficient quantity where MSC equals demand. The extra units cost society more than the marginal benefit they provide, producing a deadweight loss, so the outcome is not allocatively efficient. (b) A per-unit (Pigouvian) tax set equal to the marginal external cost raises the firm’s private cost so that the supply curve shifts up to coincide with MSC. The new equilibrium occurs at the socially efficient quantity where MSC equals demand. At that quantity the marginal benefit equals the full marginal social cost, so the deadweight loss from overproduction is eliminated (or at least reduced if the tax is imperfectly set).',
      tags: ['externalities', 'pigouvian-tax', 'market-failure', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-microeconomics-u6-income-distribution-data-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-6', unitName: 'Market Failure and the Role of Government', topicId: 'income-distribution', topicName: 'Income Distribution',
      skill: 'quantitative reasoning', questionType: 'data-analysis', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 240,
      prompt: 'The table shows the share of total income earned by each income quintile in two countries. Using the data, identify which country has the more equal income distribution and explain how the Lorenz curve and Gini coefficient would reflect that difference.',
      dataTable: { columns: ['Quintile (lowest to highest)', 'Country A income share (%)', 'Country B income share (%)'], rows: [['1st (lowest 20%)', '8', '4'], ['2nd', '12', '8'], ['3rd', '17', '13'], ['4th', '23', '22'], ['5th (highest 20%)', '40', '53']] },
      correctAnswer: 'Country A has the more equal distribution.',
      acceptableAnswers: ['Country A', 'A', 'Country A is more equal'],
      explanation: 'Each quintile in Country A holds a share closer to 20% than the matching quintile in Country B (e.g., the lowest 20% earns 8% in A vs 4% in B, and the top 20% earns 40% in A vs 53% in B). A more equal distribution means the Lorenz curve sits closer to the 45-degree line of perfect equality, so the area between them is smaller and the Gini coefficient is lower for Country A.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies Country A as more equal using the quintile shares.', evidenceRequired: 'Cites at least one comparative share (e.g., lowest or highest quintile).' },
        { id: 'r2', pointValue: 1, criterion: 'Connects greater equality to a Lorenz curve closer to the 45-degree line.', evidenceRequired: 'Mentions Lorenz curve and line of equality.' },
        { id: 'r3', pointValue: 1, criterion: 'States that a more equal distribution yields a lower Gini coefficient.', evidenceRequired: 'Links smaller area / equality to lower Gini.' }
      ],
      modelAnswer: 'Country A has the more equal income distribution. Its lowest quintile earns 8% of income versus 4% in Country B, and its highest quintile earns 40% versus 53% in B, so every group is closer to an equal 20% share in A. Because Country A’s shares are nearer to equality, its Lorenz curve lies closer to the 45-degree line of perfect equality, making the area between the line and the curve smaller. Since the Gini coefficient equals that area divided by the whole area under the line of equality, Country A has the lower Gini coefficient, confirming greater equality.',
      tags: ['income-distribution', 'lorenz-curve', 'gini', 'data-analysis'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── EXTRA MEDIUM MCQ (price controls) ─────────────────────────────────────
    {
      id: 'ap-microeconomics-u2-price-controls-mcq-001', courseId: 'ap-microeconomics', courseName: 'AP Microeconomics',
      unitId: 'unit-2', unitName: 'Supply and Demand', topicId: 'price-controls', topicName: 'Price Controls and Surplus',
      skill: 'policy analysis', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 90,
      prompt: 'A government sets a binding price ceiling on apartment rents below the equilibrium rent. Which outcome is most likely in this market?',
      answerChoices: [
        { id: 'A', text: 'A surplus of apartments and falling quality' },
        { id: 'B', text: 'A shortage of apartments as quantity demanded exceeds quantity supplied' },
        { id: 'C', text: 'No change because the ceiling is below equilibrium' },
        { id: 'D', text: 'An increase in the equilibrium rent over time' }
      ],
      correctAnswer: 'B',
      explanation: 'A binding price ceiling sits below equilibrium. At that lower legal rent, quantity demanded rises and quantity supplied falls, producing a shortage. This is the classic effect of effective rent control, often accompanied by long waiting lists.',
      distractorRationales: {
        A: 'Surpluses result from binding price floors (above equilibrium), not ceilings below equilibrium.',
        B: '',
        C: 'A ceiling below equilibrium is binding by definition and therefore does change the market outcome.',
        D: 'A legal ceiling holds the price down; it does not raise the equilibrium rent.'
      },
      tags: ['price-ceiling', 'shortage', 'price-controls'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
