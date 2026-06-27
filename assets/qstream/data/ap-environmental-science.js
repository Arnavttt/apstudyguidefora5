/**
 * Five & A+ — AI Question Stream · Course data: AP Environmental Science
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the AP Biology gold-template shape exactly.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-environmental-science',
    displayName: 'AP Environmental Science',
    description: 'Interdisciplinary study of natural systems and human impacts, organized around energy transfer, system interactions, population dynamics, resource use, and sustainable solutions.',
    category: 'stem',
    allowedQuestionTypes: ['mcq', 'data-analysis', 'graph-interpretation', 'calculation', 'lab-design', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'data-analysis', 'frq'],
    skills: [
      'Explain environmental concepts, processes, and models.',
      'Analyze visual representations of environmental systems.',
      'Analyze sources and text for environmental claims.',
      'Design and analyze scientific experiments.',
      'Analyze and interpret quantitative environmental data.',
      'Apply mathematical routines to environmental problems.',
      'Propose and justify environmental solutions.'
    ],
    bigIdeas: ['Energy Transfer', 'Interactions Between Earth Systems', 'Interactions Between Different Species and the Environment', 'Sustainability'],
    units: [
      { id: 'unit-1', name: 'The Living World: Ecosystems', examWeight: '6-8%', description: 'Energy flow, biogeochemical cycles, and ecosystem structure.',
        topics: [
          { id: 'energy-flow', name: 'Energy Flow and Trophic Levels', description: 'Producers, consumers, the 10% rule, and ecological pyramids.', skills: ['Explain environmental concepts, processes, and models.'] },
          { id: 'biogeochemical-cycles', name: 'Biogeochemical Cycles', description: 'Carbon, nitrogen, phosphorus, and the hydrologic cycle.', skills: ['Analyze visual representations of environmental systems.'] },
          { id: 'primary-productivity', name: 'Primary Productivity', description: 'Gross and net primary productivity and how they are measured.', skills: ['Analyze and interpret quantitative environmental data.'] }
        ] },
      { id: 'unit-2', name: 'The Living World: Biodiversity', examWeight: '6-8%', description: 'Diversity, ecosystem services, and ecological resilience.',
        topics: [
          { id: 'biodiversity-value', name: 'Value of Biodiversity', description: 'Genetic, species, and habitat diversity and ecosystem services.', skills: ['Explain environmental concepts, processes, and models.'] },
          { id: 'ecological-succession', name: 'Ecological Succession', description: 'Primary and secondary succession and pioneer species.', skills: ['Analyze visual representations of environmental systems.'] },
          { id: 'island-biogeography', name: 'Island Biogeography and Resilience', description: 'Size, distance effects, and the resilience of communities.', skills: ['Propose and justify environmental solutions.'] }
        ] },
      { id: 'unit-3', name: 'Populations', examWeight: '10-15%', description: 'Population dynamics, growth models, and human demographics.',
        topics: [
          { id: 'population-growth', name: 'Population Growth Models', description: 'Exponential vs. logistic growth and carrying capacity.', skills: ['Apply mathematical routines to environmental problems.'] },
          { id: 'survivorship-strategies', name: 'Reproductive Strategies and Survivorship', description: 'K-selected and r-selected species and survivorship curves.', skills: ['Analyze visual representations of environmental systems.'] },
          { id: 'demographic-transition', name: 'Human Demographics', description: 'Age structure diagrams, total fertility rate, and demographic transition.', skills: ['Analyze and interpret quantitative environmental data.'] }
        ] },
      { id: 'unit-4', name: 'Earth Systems and Resources', examWeight: '10-15%', description: 'Geology, soil, the atmosphere, and global wind patterns.',
        topics: [
          { id: 'plate-tectonics', name: 'Plate Tectonics and Soil', description: 'Plate boundaries, the rock cycle, and soil horizons.', skills: ['Explain environmental concepts, processes, and models.'] },
          { id: 'atmosphere-structure', name: 'Atmosphere and Wind', description: 'Atmospheric layers, the greenhouse effect, and global circulation cells.', skills: ['Analyze visual representations of environmental systems.'] },
          { id: 'soil-properties', name: 'Soil Properties', description: 'Soil texture, permeability, porosity, and water-holding capacity.', skills: ['Design and analyze scientific experiments.'] }
        ] },
      { id: 'unit-5', name: 'Land and Water Use', examWeight: '10-15%', description: 'Agriculture, mining, fishing, and sustainable use.',
        topics: [
          { id: 'agriculture-impacts', name: 'Agricultural Impacts', description: 'The Green Revolution, irrigation, salinization, and the tragedy of the commons.', skills: ['Propose and justify environmental solutions.'] },
          { id: 'mining-extraction', name: 'Mining and Extraction', description: 'Surface and subsurface mining and ecological footprint.', skills: ['Explain environmental concepts, processes, and models.'] },
          { id: 'sustainable-practices', name: 'Sustainable Land Use', description: 'IPM, sustainable forestry, and sustainable agriculture.', skills: ['Propose and justify environmental solutions.'] }
        ] },
      { id: 'unit-6', name: 'Energy Resources and Consumption', examWeight: '10-15%', description: 'Fossil fuels, nuclear power, and renewable energy.',
        topics: [
          { id: 'fossil-fuels', name: 'Fossil Fuels', description: 'Formation, extraction, combustion, and associated emissions.', skills: ['Explain environmental concepts, processes, and models.'] },
          { id: 'nuclear-energy', name: 'Nuclear Power', description: 'Fission, reactor function, and the trade-offs of nuclear power.', skills: ['Analyze sources and text for environmental claims.'] },
          { id: 'renewable-energy', name: 'Renewable Energy', description: 'Solar, wind, hydro, geothermal, and energy efficiency.', skills: ['Apply mathematical routines to environmental problems.'] }
        ] },
      { id: 'unit-7', name: 'Atmospheric Pollution', examWeight: '7-10%', description: 'Air pollutants, smog, and indoor air quality.',
        topics: [
          { id: 'air-pollutants', name: 'Primary and Secondary Pollutants', description: 'Criteria air pollutants and their sources.', skills: ['Explain environmental concepts, processes, and models.'] },
          { id: 'photochemical-smog', name: 'Photochemical Smog and Inversions', description: 'Smog formation, thermal inversions, and ground-level ozone.', skills: ['Analyze visual representations of environmental systems.'] },
          { id: 'indoor-air', name: 'Indoor Air Pollution', description: 'Radon, asbestos, VOCs, and sick building syndrome.', skills: ['Propose and justify environmental solutions.'] }
        ] },
      { id: 'unit-8', name: 'Aquatic and Terrestrial Pollution', examWeight: '7-10%', description: 'Water pollution, solid waste, and human health.',
        topics: [
          { id: 'water-pollution', name: 'Water Pollution', description: 'Point and nonpoint sources, eutrophication, and BOD.', skills: ['Analyze and interpret quantitative environmental data.'] },
          { id: 'solid-waste', name: 'Solid and Hazardous Waste', description: 'Landfills, e-waste, and waste reduction strategies.', skills: ['Propose and justify environmental solutions.'] },
          { id: 'pollution-health', name: 'Pollution and Human Health', description: 'Bioaccumulation, biomagnification, and dose-response curves.', skills: ['Analyze and interpret quantitative environmental data.'] }
        ] },
      { id: 'unit-9', name: 'Global Change', examWeight: '15-20%', description: 'Ozone depletion, climate change, and invasive species.',
        topics: [
          { id: 'ozone-depletion', name: 'Stratospheric Ozone Depletion', description: 'CFCs, the ozone hole, and the Montreal Protocol.', skills: ['Explain environmental concepts, processes, and models.'] },
          { id: 'climate-change', name: 'Climate Change', description: 'Greenhouse gases, global warming potential, and feedback loops.', skills: ['Analyze and interpret quantitative environmental data.'] },
          { id: 'invasive-species', name: 'Invasive Species and Ocean Change', description: 'Invasive species, ocean acidification, and ocean warming.', skills: ['Propose and justify environmental solutions.'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 90, weight: '60%', notes: '80 questions, some referencing data, models, or text sources.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'data-analysis', 'lab-design'], timingMinutes: 70, weight: '40%', notes: '3 questions: design an investigation, analyze an environmental problem with calculations, and propose a solution.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-environmental-science-u1-energy-flow-mcq-001', courseId: 'ap-environmental-science', courseName: 'AP Environmental Science',
      unitId: 'unit-1', unitName: 'The Living World: Ecosystems', topicId: 'energy-flow', topicName: 'Energy Flow and Trophic Levels',
      skill: 'Explain environmental concepts, processes, and models.', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'According to the 10% rule of ecological energy transfer, approximately how much of the energy stored in one trophic level is incorporated into the biomass of the next higher trophic level?',
      answerChoices: [
        { id: 'A', text: 'About 1%' },
        { id: 'B', text: 'About 10%' },
        { id: 'C', text: 'About 50%' },
        { id: 'D', text: 'About 90%' }
      ],
      correctAnswer: 'B',
      explanation: 'Only about 10% of the energy at one trophic level is transferred to the next; the remaining ~90% is lost as heat through cellular respiration, in waste, and in unconsumed biomass.',
      distractorRationales: {
        A: '1% is closer to the fraction of incoming solar energy fixed by producers, not the transfer between consumer levels.',
        B: '',
        C: '50% greatly overstates trophic efficiency; most energy is lost between levels.',
        D: '90% is the proportion lost between levels, not the proportion transferred.'
      },
      tags: ['energy-flow', 'trophic-levels', 'ten-percent-rule'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-environmental-science-u4-atmosphere-structure-mcq-001', courseId: 'ap-environmental-science', courseName: 'AP Environmental Science',
      unitId: 'unit-4', unitName: 'Earth Systems and Resources', topicId: 'atmosphere-structure', topicName: 'Atmosphere and Wind',
      skill: 'Explain environmental concepts, processes, and models.', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'In which layer of the atmosphere does most weather occur and where are humans and surface ecosystems located?',
      answerChoices: [
        { id: 'A', text: 'Troposphere' },
        { id: 'B', text: 'Stratosphere' },
        { id: 'C', text: 'Mesosphere' },
        { id: 'D', text: 'Thermosphere' }
      ],
      correctAnswer: 'A',
      explanation: 'The troposphere is the lowest atmospheric layer, where nearly all weather, water vapor, and life are found.',
      distractorRationales: {
        A: '',
        B: 'The stratosphere lies above the troposphere and contains the protective ozone layer, but little weather.',
        C: 'The mesosphere is higher still and is where most meteors burn up.',
        D: 'The thermosphere is the outermost layer with very thin air and very high temperatures.'
      },
      tags: ['atmosphere', 'troposphere', 'earth-systems'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-environmental-science-u9-ozone-depletion-mcq-001', courseId: 'ap-environmental-science', courseName: 'AP Environmental Science',
      unitId: 'unit-9', unitName: 'Global Change', topicId: 'ozone-depletion', topicName: 'Stratospheric Ozone Depletion',
      skill: 'Explain environmental concepts, processes, and models.', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Which class of human-made chemicals was primarily responsible for thinning the stratospheric ozone layer and was phased out under the Montreal Protocol?',
      answerChoices: [
        { id: 'A', text: 'Chlorofluorocarbons (CFCs)' },
        { id: 'B', text: 'Carbon dioxide (CO2)' },
        { id: 'C', text: 'Sulfur dioxide (SO2)' },
        { id: 'D', text: 'Methane (CH4)' }
      ],
      correctAnswer: 'A',
      explanation: 'CFCs release chlorine atoms in the stratosphere that catalytically destroy ozone. The Montreal Protocol phased them out, and ozone levels are slowly recovering.',
      distractorRationales: {
        A: '',
        B: 'CO2 is a greenhouse gas driving climate change, not the main cause of ozone depletion.',
        C: 'SO2 contributes to acid deposition and smog, not stratospheric ozone loss.',
        D: 'Methane is a potent greenhouse gas but is not the chemical targeted by the Montreal Protocol for ozone protection.'
      },
      tags: ['ozone', 'cfcs', 'montreal-protocol'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-environmental-science-u8-water-pollution-mcq-001', courseId: 'ap-environmental-science', courseName: 'AP Environmental Science',
      unitId: 'unit-8', unitName: 'Aquatic and Terrestrial Pollution', topicId: 'water-pollution', topicName: 'Water Pollution',
      skill: 'Explain environmental concepts, processes, and models.', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'A lake receiving heavy fertilizer runoff develops a large algal bloom. After the algae die, fish in the lake begin to suffocate. Which sequence best explains the fish die-off?',
      answerChoices: [
        { id: 'A', text: 'Nutrients raise dissolved oxygen, which is toxic to fish at high levels.' },
        { id: 'B', text: 'Nutrients fuel algal growth; decomposers consume oxygen as algae decay, lowering dissolved oxygen.' },
        { id: 'C', text: 'Algae block sunlight, freezing the lake and killing the fish.' },
        { id: 'D', text: 'Fertilizer directly poisons the fish on contact with their gills.' }
      ],
      correctAnswer: 'B',
      explanation: 'This is cultural eutrophication: nutrient runoff causes an algal bloom; when the algae die, aerobic decomposers multiply and consume dissolved oxygen (high BOD), creating hypoxic conditions that suffocate fish.',
      distractorRationales: {
        A: 'Excess nutrients lower, not raise, dissolved oxygen after decomposition; high oxygen is not the lethal factor.',
        B: '',
        C: 'Shading can reduce submerged plant photosynthesis, but it does not freeze the lake; oxygen depletion is the cause.',
        D: 'The fish kill is driven by oxygen depletion from decomposition, not direct chemical poisoning.'
      },
      tags: ['eutrophication', 'dissolved-oxygen', 'bod', 'runoff'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-environmental-science-u3-demographic-transition-data-001', courseId: 'ap-environmental-science', courseName: 'AP Environmental Science',
      unitId: 'unit-3', unitName: 'Populations', topicId: 'demographic-transition', topicName: 'Human Demographics',
      skill: 'Analyze and interpret quantitative environmental data.', questionType: 'data-analysis', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'The table shows total fertility rate (TFR) for four countries. Using the data, identify which country has a population most likely to grow rapidly and which is most likely to shrink, and explain your reasoning. (Replacement-level TFR is about 2.1.)',
      dataTable: { columns: ['Country', 'Total Fertility Rate (births per woman)'], rows: [['Country W', '5.4'], ['Country X', '2.1'], ['Country Y', '1.3'], ['Country Z', '3.0']] },
      correctAnswer: 'Country W grows fastest; Country Y is most likely to shrink.',
      acceptableAnswers: ['W', 'Country W', 'Y', 'Country Y'],
      explanation: 'A TFR well above replacement (2.1) drives population growth, while a TFR below replacement leads to long-term decline. Country W (5.4) is far above replacement and grows fastest; Country Y (1.3) is below replacement and is most likely to shrink absent immigration.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies Country W as the fastest-growing population.', evidenceRequired: 'Names Country W with its high TFR.' },
        { id: 'r2', pointValue: 1, criterion: 'Identifies Country Y as most likely to shrink.', evidenceRequired: 'Names Country Y with its sub-replacement TFR.' },
        { id: 'r3', pointValue: 1, criterion: 'Explains reasoning relative to replacement-level fertility (~2.1).', evidenceRequired: 'Connects TFR above/below 2.1 to growth or decline.' }
      ],
      modelAnswer: 'Country W (TFR 5.4) will grow most rapidly because its fertility rate is far above the replacement level of 2.1, so each generation is larger than the last. Country Y (TFR 1.3) is most likely to shrink because its fertility is below replacement, meaning fewer children are born than needed to replace the current population, leading to decline over time unless offset by immigration.',
      tags: ['demographics', 'tfr', 'replacement-rate', 'data-analysis'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-environmental-science-u6-renewable-energy-mcq-001', courseId: 'ap-environmental-science', courseName: 'AP Environmental Science',
      unitId: 'unit-6', unitName: 'Energy Resources and Consumption', topicId: 'renewable-energy', topicName: 'Renewable Energy',
      skill: 'Explain environmental concepts, processes, and models.', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'A coastal community wants a renewable energy source that produces no direct air pollution but is intermittent and depends on local weather. Which option best fits these criteria while also having relatively low land disturbance per unit of energy?',
      answerChoices: [
        { id: 'A', text: 'Coal-fired power plant' },
        { id: 'B', text: 'Offshore wind turbines' },
        { id: 'C', text: 'Natural gas peaker plant' },
        { id: 'D', text: 'Large reservoir hydroelectric dam' }
      ],
      correctAnswer: 'B',
      explanation: 'Offshore wind is renewable and emits no direct air pollutants during operation, but it is intermittent because output depends on wind. Placing turbines offshore avoids the large land footprint of many other options.',
      distractorRationales: {
        A: 'Coal is a nonrenewable fossil fuel that releases substantial air pollution.',
        B: '',
        C: 'Natural gas is a nonrenewable fossil fuel and emits CO2 and other pollutants when burned.',
        D: 'Large dams are renewable but flood extensive land and disrupt river ecosystems, a high land disturbance.'
      },
      tags: ['renewable-energy', 'wind', 'intermittency'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL (one is a calculation with numericTolerance) ──────
    {
      id: 'ap-environmental-science-u3-population-growth-calc-001', courseId: 'ap-environmental-science', courseName: 'AP Environmental Science',
      unitId: 'unit-3', unitName: 'Populations', topicId: 'population-growth', topicName: 'Population Growth Models',
      skill: 'Apply mathematical routines to environmental problems.', questionType: 'calculation', difficulty: 'hard',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'A town has a population of 40,000 people growing at a constant rate of 3.5% per year. Using the rule of 70, calculate the approximate doubling time of the population in years.',
      correctAnswer: '20',
      numericTolerance: 0.5,
      acceptableAnswers: ['20', '20 years', '~20'],
      explanation: 'The rule of 70 estimates doubling time as 70 divided by the percent growth rate. Doubling time = 70 / 3.5 = 20 years. The population will reach about 80,000 in roughly 20 years if the growth rate stays constant.',
      tags: ['rule-of-70', 'doubling-time', 'population-growth', 'calculation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-environmental-science-u9-climate-change-mcq-001', courseId: 'ap-environmental-science', courseName: 'AP Environmental Science',
      unitId: 'unit-9', unitName: 'Global Change', topicId: 'climate-change', topicName: 'Climate Change',
      skill: 'Analyze sources and text for environmental claims.', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'As Arctic sea ice melts, darker open ocean replaces reflective white ice, absorbing more solar energy and warming the region further, which melts still more ice. Which statement best characterizes this process and its effect on climate models?',
      answerChoices: [
        { id: 'A', text: 'It is a negative feedback loop that stabilizes Arctic temperatures.' },
        { id: 'B', text: 'It is a positive feedback loop that amplifies warming and can accelerate projected change.' },
        { id: 'C', text: 'It has no net effect because reflectivity and absorption cancel out.' },
        { id: 'D', text: 'It is driven entirely by stratospheric ozone depletion rather than albedo.' }
      ],
      correctAnswer: 'B',
      explanation: 'Lower surface reflectivity (albedo) means more absorbed solar energy, which causes more melting and even lower albedo. This self-reinforcing cycle is a positive feedback loop that amplifies warming and can make projections more severe.',
      distractorRationales: {
        A: 'A negative feedback would counteract the change; this loop reinforces warming, so it is positive.',
        B: '',
        C: 'Replacing ice with darker water increases net absorption; the effects do not cancel.',
        D: 'The mechanism described is an albedo (reflectivity) feedback, not ozone depletion.'
      },
      tags: ['climate-change', 'albedo', 'positive-feedback', 'sea-ice'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN (lab-design with rubric + model answer) ──────────────────────
    {
      id: 'ap-environmental-science-u4-soil-properties-lab-001', courseId: 'ap-environmental-science', courseName: 'AP Environmental Science',
      unitId: 'unit-4', unitName: 'Earth Systems and Resources', topicId: 'soil-properties', topicName: 'Soil Properties',
      skill: 'Design and analyze scientific experiments.', questionType: 'lab-design', difficulty: 'hard',
      bloomLevel: 'create', estimatedTimeSeconds: 600,
      prompt: 'A student hypothesizes that sandy soil drains water faster than clay soil. Design a controlled experiment to test this hypothesis. In your answer, identify the independent and dependent variables, describe at least two variables you would hold constant, and state how you would use your data to support or reject the hypothesis.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A valid experimental design must isolate soil type as the independent variable while controlling confounding factors such as soil volume and water added, and must measure a clear dependent variable such as drainage time or volume of water collected.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies soil type as the independent variable and a drainage measure as the dependent variable.', evidenceRequired: 'Names both variables clearly.' },
        { id: 'r2', pointValue: 1, criterion: 'States at least two appropriately controlled (constant) variables.', evidenceRequired: 'Lists two valid controls such as soil volume and water volume.' },
        { id: 'r3', pointValue: 1, criterion: 'Describes a measurable procedure to collect drainage data.', evidenceRequired: 'Explains how drainage is measured (time or volume).' },
        { id: 'r4', pointValue: 1, criterion: 'Explains how the data would support or reject the hypothesis.', evidenceRequired: 'Connects faster drainage in sand to accepting the hypothesis.' }
      ],
      modelAnswer: 'Independent variable: soil type (sandy vs. clay). Dependent variable: drainage rate, measured as the time for a fixed volume of water to pass through, or the volume of water collected below the soil after a set time. Controlled variables: the same volume of soil in each identical funnel, the same volume of water poured, the same starting moisture, and the same funnel size and pour rate. Procedure: place equal volumes of each dry soil in identical funnels lined with filter paper over graduated cylinders, pour the same volume of water into each, and record either how long water takes to stop dripping or how much water collects in 2 minutes; repeat several trials and average. If the sandy soil drains the set volume faster (or releases more water in the fixed time) than the clay soil, the data support the hypothesis; if drainage times are equal or clay drains faster, the hypothesis is rejected.',
      tags: ['soil', 'permeability', 'experimental-design', 'lab-design'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── EXTRA: FRQ written question (solutions) ──────────────────────────────
    {
      id: 'ap-environmental-science-u5-agriculture-impacts-frq-001', courseId: 'ap-environmental-science', courseName: 'AP Environmental Science',
      unitId: 'unit-5', unitName: 'Land and Water Use', topicId: 'agriculture-impacts', topicName: 'Agricultural Impacts',
      skill: 'Propose and justify environmental solutions.', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'A farming region relies on heavy irrigation in a dry climate, and over decades the soil has become increasingly salty, reducing crop yields. (a) Explain how irrigation in a dry climate leads to soil salinization. (b) Propose one practice that could reduce salinization and justify how it addresses the cause.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Salinization occurs when irrigation water evaporates and leaves dissolved salts behind in the soil. Solutions either reduce evaporative loss or flush and drain salts away from the root zone.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Explains that irrigation water evaporates, leaving salts behind in the soil.', evidenceRequired: 'Links evaporation in a dry climate to salt accumulation.' },
        { id: 'r2', pointValue: 1, criterion: 'Connects salt buildup to reduced crop productivity.', evidenceRequired: 'States salinity harms plant water uptake or yields.' },
        { id: 'r3', pointValue: 1, criterion: 'Proposes a valid practice that reduces salinization.', evidenceRequired: 'Names a practice such as drip irrigation or improved drainage.' },
        { id: 'r4', pointValue: 1, criterion: 'Justifies how the proposed practice addresses the cause.', evidenceRequired: 'Explains how the practice reduces evaporative salt buildup or flushes salts.' }
      ],
      modelAnswer: '(a) In a dry climate, water applied through irrigation evaporates quickly from the soil surface. The irrigation water carries small amounts of dissolved salts, and when the water evaporates the salts are left behind. Over many cycles these salts accumulate in the upper soil, raising salinity. (b) High soil salinity makes it harder for crop roots to absorb water by osmosis, lowering yields. A solution is drip irrigation, which delivers water slowly and directly to the root zone, reducing the amount of water exposed to evaporation and therefore reducing the salts deposited at the surface. Alternatively, installing subsurface drainage and periodically applying extra water flushes accumulated salts below the root zone. Both approaches address the cause by limiting or removing the salt that evaporation concentrates in the soil.',
      tags: ['salinization', 'irrigation', 'sustainable-agriculture', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
