// lib/data/content/apes_content.dart
//
// AP Environmental Science — 4 units transcribed from apes.html
// Accent: #22c55e (green)

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> apesUnits = [
  // ── Unit 1: Ecosystems & Biogeochemical Cycles ──────────────────────────
  Unit(
    title: 'Ecosystems & Biogeochemical Cycles',
    blocks: [
      DataTableBlock(
        headers: ['Concept', 'Details'],
        rows: [
          ['10% Rule', 'Only ~10% of energy transfers between trophic levels. 90% lost as heat, movement, waste.'],
          ['Trophic Levels', 'Producers \u2192 Primary consumers \u2192 Secondary \u2192 Tertiary. Each level 10\u00d7 less energy.'],
          ['Gross vs. Net Productivity', 'GPP = total photosynthesis. NPP = GPP minus plant respiration. NPP available to consumers.'],
          ['Keystone Species', 'Disproportionate ecosystem impact relative to biomass. Sea otters: eat urchins \u2192 protect kelp forests.'],
        ],
      ),
      CardRowBlock([
        ContentCardData(
          title: 'Carbon Cycle',
          body: 'Carbon in atmosphere (CO\u2082) \u2192 photosynthesis \u2192 organic matter \u2192 respiration/decomposition \u2192 back to atmosphere. FAST cycle: days\u2013years. SLOW cycle: fossil fuel formation (millions of years). Combustion of fossil fuels = excess CO\u2082 \u2192 greenhouse effect.',
        ),
        ContentCardData(
          title: 'Nitrogen Cycle',
          body: 'N\u2082 (unusable) \u2192 nitrogen fixation (bacteria, lightning) \u2192 NH\u2083 \u2192 nitrification \u2192 NO\u2083\u207b (usable) \u2192 plant uptake \u2192 denitrification \u2192 N\u2082. Human disruption: synthetic fertilizers (Haber-Bosch), runoff \u2192 eutrophication.',
        ),
        ContentCardData(
          title: 'Phosphorus Cycle',
          body: 'No atmospheric component. Weathering releases phosphate from rock \u2192 soil/water \u2192 plants/animals \u2192 decomposition. Runoff from fertilizers = eutrophication. Mined as fertilizer \u2014 non-renewable on human timescale.',
        ),
        ContentCardData(
          title: 'Water Cycle',
          body: 'Evaporation, transpiration, condensation, precipitation, runoff, infiltration, groundwater. Deforestation reduces transpiration and increases surface runoff.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'A lake receives excess phosphorus and nitrogen from agricultural runoff. The MOST LIKELY consequence is:',
          choices: [
            QuizChoice(text: 'A) Increased fish populations', isCorrect: false),
            QuizChoice(
              text: 'B) Eutrophication \u2014 algae blooms deplete oxygen \u2192 hypoxic dead zones',
              isCorrect: true,
              explanation: 'B: Eutrophication. Excess nutrients \u2192 algae bloom \u2192 algae die \u2192 bacteria decompose them \u2192 bacteria use all O\u2082 \u2192 fish die (hypoxic/anoxic zone). The Gulf of Mexico dead zone is driven by Mississippi River agricultural runoff.',
            ),
            QuizChoice(text: 'C) Higher water clarity', isCorrect: false),
            QuizChoice(text: 'D) Decreased plant growth', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The Haber-Bosch process most directly affects which biogeochemical cycle?',
          choices: [
            QuizChoice(text: 'A) Carbon cycle', isCorrect: false),
            QuizChoice(text: 'B) Phosphorus cycle', isCorrect: false),
            QuizChoice(
              text: 'C) Nitrogen cycle',
              isCorrect: true,
              explanation: 'C: Nitrogen cycle. Haber-Bosch industrially fixes atmospheric N\u2082 into NH\u2083 (ammonia) for synthetic fertilizers. This has dramatically increased food production but also caused massive disruption of the nitrogen cycle through runoff, eutrophication, and N\u2082O (nitrous oxide) \u2014 a potent greenhouse gas.',
            ),
            QuizChoice(text: 'D) Water cycle', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 2: Population Ecology & Earth Systems ───────────────────────────
  Unit(
    title: 'Population Ecology & Earth Systems',
    blocks: [
      CodeBlock([
        CodeSpan('Rule of 70 (doubling time):\n', kind: CodeSpanKind.highlight),
        CodeSpan('Doubling time (years) = 70 / annual growth rate (%)\n'),
        CodeSpan('Example: 2% growth rate \u2192 70/2 = 35 years to double\n'),
        CodeSpan('\n'),
        CodeSpan('Population growth rate:\n', kind: CodeSpanKind.highlight),
        CodeSpan('% growth rate = [(birth rate \u2212 death rate) / 1000] \u00d7 100\n'),
        CodeSpan('(or add immigration / subtract emigration for total change)\n'),
        CodeSpan('\n'),
        CodeSpan('Total Fertility Rate (TFR):\n', kind: CodeSpanKind.highlight),
        CodeSpan('TFR < 2.1 \u2192 population eventually DECREASES (below replacement)\n'),
        CodeSpan('TFR = 2.1 \u2192 stable population\n'),
        CodeSpan('TFR > 2.1 \u2192 population GROWS\n'),
      ]),
      DataTableBlock(
        headers: ['Stage', 'Birth Rate', 'Death Rate', 'Population Growth', 'Example'],
        rows: [
          ['Stage 1', 'High', 'High', 'Stable/slow', 'Pre-industrial societies'],
          ['Stage 2', 'High', 'Declining', 'Rapid growth', 'Early industrializing \u2014 sanitation, medicine improve'],
          ['Stage 3', 'Declining', 'Low', 'Slowing', 'Industrialized \u2014 urbanization, education, women\u2019s rights'],
          ['Stage 4', 'Low', 'Low', 'Stable', 'Developed nations (US, EU)'],
          ['Stage 5', 'Below replacement', 'Low', 'Declining', 'Some European nations, Japan'],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'A country has a birth rate of 35/1000 and a death rate of 10/1000. Its annual growth rate is:',
          choices: [
            QuizChoice(text: 'A) 3.5%', isCorrect: false),
            QuizChoice(
              text: 'B) 2.5%',
              isCorrect: true,
              explanation: 'B: 2.5%. (Birth rate \u2212 Death rate)/1000 \u00d7 100 = (35\u221210)/1000 \u00d7 100 = 25/1000 \u00d7 100 = 2.5%. Doubling time = 70/2.5 = 28 years.',
            ),
            QuizChoice(text: 'C) 10%', isCorrect: false),
            QuizChoice(text: 'D) 0.025%', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'A country in Stage 2 of the DTM is characterized by:',
          choices: [
            QuizChoice(text: 'A) Low birth and death rates', isCorrect: false),
            QuizChoice(
              text: 'B) High birth rates and rapidly falling death rates \u2192 rapid population growth',
              isCorrect: true,
              explanation: 'B is correct. Stage 2 begins when death rates decline (due to improved sanitation, medicine, food supply) while birth rates remain high \u2014 creating rapid natural population increase.',
            ),
            QuizChoice(text: 'C) Below-replacement birth rates', isCorrect: false),
            QuizChoice(text: 'D) Both high birth and death rates', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 3: Land Use, Energy & Pollution ─────────────────────────────────
  Unit(
    title: 'Land Use, Energy & Pollution',
    blocks: [
      DataTableBlock(
        headers: ['Source', 'Type', 'Advantages', 'Disadvantages'],
        rows: [
          ['Coal', 'Nonrenewable', 'Abundant, cheap to mine, reliable', 'Most CO\u2082 per kWh; mercury, SO\u2082, NO\u2093 emissions; mining impacts'],
          ['Natural Gas', 'Nonrenewable', 'Lower CO\u2082 than coal; flexible', 'Still fossil fuel; methane leaks; fracking water use'],
          ['Nuclear', 'Low-carbon (not renewable)', 'No air pollution; high energy density; reliable baseload', 'Waste storage; accident risk; high construction cost; uranium mining'],
          ['Hydroelectric', 'Renewable', 'Reliable; no emissions during operation', 'Dam destroys river ecosystems; displacement; drought vulnerability'],
          ['Wind', 'Renewable', 'No emissions; low land use (can dual-use)', 'Intermittent; bird/bat kills; visual impact; siting issues'],
          ['Solar', 'Renewable', 'Falling costs; distributed generation', 'Intermittent; land use for utility-scale; panel manufacturing'],
          ['Biomass', 'Renewable (debatable)', 'Uses waste; carbon-neutral in theory', 'Air pollution; land/water use; may not be carbon-neutral'],
        ],
      ),
      CalloutBlock(
        title: 'HIPPCO \u2014 Major Causes of Biodiversity Loss (in order of impact)',
        items: [
          'H \u2014 Habitat destruction (by far the #1 cause \u2014 deforestation, wetland draining, urban sprawl)',
          'I \u2014 Invasive species (displace natives; no natural predators; e.g., zebra mussels, kudzu, brown tree snake)',
          'P \u2014 Population growth (driving all other pressures through resource demand)',
          'P \u2014 Pollution (water, air, soil; includes light and noise pollution; endocrine disruptors)',
          'C \u2014 Climate change (shifting ranges, bleaching coral, phenology mismatch)',
          'O \u2014 Overexploitation (overfishing, bushmeat, illegal wildlife trade)',
        ],
      ),
      CalloutBlock(
        title: 'Pollution Distinctions',
        items: [
          'Primary pollutant: Directly emitted from a source (CO, SO\u2082, NOₓ, particulates).',
          'Secondary pollutant: Forms in atmosphere from primary pollutants. Ground-level ozone, smog, acid rain (H\u2082SO\u2084, HNO\u2083).',
          'Point source: Single, identifiable source (factory pipe, sewage outfall). Regulated under Clean Water Act.',
          'Nonpoint source: Diffuse, many sources (agricultural runoff, urban stormwater). Much harder to regulate.',
          'Montreal Protocol (1987): banned CFCs \u2192 ozone depletion. Most successful international environmental treaty.',
          'Paris Agreement (2015): climate change. Do NOT confuse with Montreal.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'The Montreal Protocol (1987) addressed which environmental problem?',
          choices: [
            QuizChoice(text: 'A) Acid rain', isCorrect: false),
            QuizChoice(text: 'B) Climate change', isCorrect: false),
            QuizChoice(
              text: 'C) Stratospheric ozone depletion by CFCs',
              isCorrect: true,
              explanation: 'C: Ozone depletion. CFCs (chlorofluorocarbons) catalytically destroy stratospheric ozone (O\u2083). The Montreal Protocol banned CFCs \u2014 it is considered the most successful international environmental treaty. The ozone layer is slowly recovering. Do NOT confuse with the Paris Agreement (2015, climate change).',
            ),
            QuizChoice(text: 'D) Eutrophication', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'A farmer applies excess nitrogen fertilizer. Rank the most likely sequence of events:',
          choices: [
            QuizChoice(
              text: 'A) Runoff \u2192 eutrophication \u2192 algae bloom \u2192 hypoxia \u2192 fish kills',
              isCorrect: true,
              explanation: 'A is correct. Classic eutrophication sequence: excess nutrients \u2192 algae bloom \u2192 algae die \u2192 bacteria decompose them \u2192 bacteria consume dissolved O\u2082 \u2192 hypoxic conditions \u2192 fish and other aquatic life die. The Gulf Dead Zone is the signature APES example.',
            ),
            QuizChoice(text: 'B) Runoff \u2192 fish kills \u2192 algae bloom \u2192 ozone depletion', isCorrect: false),
            QuizChoice(text: 'C) Algae bloom \u2192 acid rain \u2192 hypoxia', isCorrect: false),
            QuizChoice(text: 'D) Volatilization \u2192 greenhouse effect \u2192 drought', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 4: Aquatic & Global Change ──────────────────────────────────────
  Unit(
    title: 'Aquatic & Global Change',
    blocks: [
      CalloutBlock(
        title: 'Greenhouse Effect & Climate Change',
        items: [
          'Greenhouse gases: CO\u2082 (fossil fuels, deforestation), CH\u2084 (livestock, rice, landfills, natural gas), N\u2082O (fertilizers, combustion), H\u2082O, CFCs.',
          'Albedo feedback: Melting ice \u2192 less reflective surface \u2192 more heat absorbed \u2192 more warming.',
          'Ocean acidification: CO\u2082 + H\u2082O \u2192 H\u2082CO\u2083 (carbonic acid) \u2192 lower ocean pH \u2192 dissolves shells (calcium carbonate).',
          'Sea level rise causes: (1) thermal expansion of water, (2) melting glaciers/ice sheets.',
          'IPCC: Intergovernmental Panel on Climate Change \u2014 synthesizes climate science. Reports used for policy.',
        ],
      ),
      StepBoxBlock(
        title: 'FRQ Calculation: Rule of 70',
        steps: [
          'Given: A country has a birth rate of 28/1000 and death rate of 8/1000.',
          'Step 1: Calculate growth rate: (28\u22128)/1000 \u00d7 100 = 20/1000 \u00d7 100 = 2.0%',
          'Step 2: Doubling time = 70 / 2.0 = 35 years',
          'Show all work! APES FRQs give partial credit. Even if your final answer is wrong, writing the formula correctly earns points.',
        ],
      ),
      StepBoxBlock(
        title: 'FRQ Calculation: Energy Flow',
        steps: [
          'Given: A producer trophic level contains 100,000 kcal.',
          'Step 1: Primary consumers receive 100,000 \u00d7 0.10 = 10,000 kcal',
          'Step 2: Secondary consumers receive 10,000 \u00d7 0.10 = 1,000 kcal',
          'Step 3: Tertiary consumers receive 1,000 \u00d7 0.10 = 100 kcal',
          'Rule: each trophic level has approximately 10% of the energy of the level below it.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Ocean acidification is MOST directly caused by:',
          choices: [
            QuizChoice(text: 'A) Acid rain falling into the ocean', isCorrect: false),
            QuizChoice(
              text: 'B) Ocean absorption of CO\u2082 from the atmosphere forming carbonic acid',
              isCorrect: true,
              explanation: 'B is correct. Oceans absorb ~30% of CO\u2082 emissions. CO\u2082 + H\u2082O \u2192 H\u2082CO\u2083 \u2192 H\u207a + HCO\u2083\u207b \u2192 lowers pH. Since industrialization, ocean pH has dropped from ~8.2 to ~8.1 \u2014 a 25% increase in acidity (pH is logarithmic). This threatens shell-forming organisms (oysters, corals, pteropods).',
            ),
            QuizChoice(text: 'C) Industrial wastewater discharge', isCorrect: false),
            QuizChoice(text: 'D) Stratospheric ozone depletion', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'Rule of 70: doubling time = 70 \u00f7 growth rate (%)',
        'Growth rate = (birth rate \u2212 death rate) / 10 (per 1000 \u2192 percentage)',
        '10% energy rule: each trophic level has ~10% of the energy of the one below',
        'HIPPCO: Habitat, Invasive, Population, Pollution, Climate, Overexploitation',
        'Montreal Protocol (1987) = CFCs/ozone. Paris Agreement (2015) = climate change',
        'Eutrophication: nutrients \u2192 algae bloom \u2192 O\u2082 depletion \u2192 dead zone',
        'Primary pollutant = directly emitted. Secondary = formed in atmosphere (ozone, smog, acid rain)',
        'DTM Stage 2: high birth, falling death rates = fastest population growth',
        'Ocean acidification: CO\u2082 + H\u2082O \u2192 carbonic acid \u2192 threatens calcium carbonate shells',
        'APES FRQ always has a calculation \u2014 show formula, substitution, and units for full credit',
        'Point source pollution = identifiable single source (regulated). Nonpoint = diffuse (hard to regulate).',
      ]),
    ],
  ),
];
