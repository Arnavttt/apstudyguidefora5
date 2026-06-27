/**
 * Five & A+ — AI Question Stream · Course data: AP Biology
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * GOLD TEMPLATE: other course data files mirror this exact shape.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-biology',
    displayName: 'AP Biology',
    description: 'Foundational principles of living systems from molecules to ecosystems, organized around evolution, energetics, information, and systems interactions.',
    category: 'stem',
    allowedQuestionTypes: ['mcq', 'data-analysis', 'graph-interpretation', 'lab-design', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'data-analysis', 'frq'],
    skills: [
      'Explain biological concepts, processes, and models.',
      'Analyze visual representations of biological structures and processes.',
      'Determine scientific questions and methods.',
      'Represent and describe data.',
      'Perform statistical tests and analyze data.',
      'Develop and justify scientific arguments using evidence.'
    ],
    bigIdeas: ['Evolution', 'Energetics', 'Information Storage and Transmission', 'Systems Interactions'],
    units: [
      { id: 'unit-1', name: 'Chemistry of Life', examWeight: '8-11%', description: 'Water, macromolecules, and the chemical basis of life.',
        topics: [
          { id: 'water-properties', name: 'Properties of Water', description: 'Polarity, hydrogen bonding, cohesion, and their biological consequences.', skills: ['Explain biological concepts.'] },
          { id: 'macromolecules', name: 'Biological Macromolecules', description: 'Structure and function of carbohydrates, lipids, proteins, and nucleic acids.', skills: ['Analyze visual representations.'] }
        ] },
      { id: 'unit-2', name: 'Cell Structure and Function', examWeight: '10-13%', description: 'Organelles, membranes, and transport.',
        topics: [
          { id: 'organelles', name: 'Cell Organelles', description: 'Compartmentalization and division of labor in eukaryotic cells.', skills: ['Explain biological concepts.'] },
          { id: 'membrane-transport', name: 'Membrane Transport', description: 'Diffusion, osmosis, and active transport across membranes.', skills: ['Represent and describe data.'] }
        ] },
      { id: 'unit-3', name: 'Cellular Energetics', examWeight: '12-16%', description: 'Enzymes, photosynthesis, and cellular respiration.',
        topics: [
          { id: 'enzymes', name: 'Enzymes', description: 'Catalysis, active sites, and factors affecting reaction rate.', skills: ['Analyze data.'] },
          { id: 'photosynthesis', name: 'Photosynthesis', description: 'Light reactions and the Calvin cycle.', skills: ['Explain energy flow.'] },
          { id: 'respiration', name: 'Cellular Respiration', description: 'Glycolysis, the Krebs cycle, and oxidative phosphorylation.', skills: ['Explain energy flow.'] }
        ] },
      { id: 'unit-4', name: 'Cell Communication and Cell Cycle', examWeight: '10-15%', description: 'Signaling, feedback, and mitosis.',
        topics: [
          { id: 'cell-signaling', name: 'Cell Signaling', description: 'Reception, transduction, and response pathways.', skills: ['Explain biological concepts.'] },
          { id: 'cell-cycle', name: 'Cell Cycle and Mitosis', description: 'Regulation and checkpoints of the cell cycle.', skills: ['Analyze visual representations.'] }
        ] },
      { id: 'unit-5', name: 'Heredity', examWeight: '8-11%', description: 'Meiosis and Mendelian inheritance.',
        topics: [
          { id: 'meiosis', name: 'Meiosis', description: 'Reduction division and sources of genetic variation.', skills: ['Explain biological concepts.'] },
          { id: 'inheritance', name: 'Patterns of Inheritance', description: 'Mendelian and non-Mendelian inheritance, probability.', skills: ['Analyze data.'] }
        ] },
      { id: 'unit-6', name: 'Gene Expression and Regulation', examWeight: '12-16%', description: 'DNA, transcription, translation, and regulation.',
        topics: [
          { id: 'replication', name: 'DNA Replication', description: 'Semiconservative replication and its enzymes.', skills: ['Explain biological concepts.'] },
          { id: 'transcription-translation', name: 'Transcription and Translation', description: 'The flow of genetic information to proteins.', skills: ['Analyze visual representations.'] },
          { id: 'gene-regulation', name: 'Gene Regulation', description: 'Operons and differential gene expression.', skills: ['Develop scientific arguments.'] }
        ] },
      { id: 'unit-7', name: 'Natural Selection', examWeight: '13-20%', description: 'Evolution, evidence, and population genetics.',
        topics: [
          { id: 'natural-selection', name: 'Mechanisms of Natural Selection', description: 'Fitness, selection pressures, and adaptation.', skills: ['Develop scientific arguments.'] },
          { id: 'hardy-weinberg', name: 'Hardy-Weinberg Equilibrium', description: 'Modeling allele and genotype frequencies.', skills: ['Perform statistical tests.'] }
        ] },
      { id: 'unit-8', name: 'Ecology', examWeight: '10-15%', description: 'Energy flow, populations, and ecosystems.',
        topics: [
          { id: 'energy-flow', name: 'Energy Flow in Ecosystems', description: 'Trophic levels and ecological efficiency.', skills: ['Represent and describe data.'] },
          { id: 'population-ecology', name: 'Population Ecology', description: 'Growth models and carrying capacity.', skills: ['Analyze data.'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 90, weight: '50%', notes: '60 questions including grid-in calculations.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'data-analysis', 'lab-design'], timingMinutes: 90, weight: '50%', notes: '6 questions: 2 long (interpreting/analyzing) and 4 short.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-biology-u1-water-properties-mcq-001', courseId: 'ap-biology', courseName: 'AP Biology',
      unitId: 'unit-1', unitName: 'Chemistry of Life', topicId: 'water-properties', topicName: 'Properties of Water',
      skill: 'Explain biological concepts, processes, and models.', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Water molecules stick to one another through hydrogen bonds. This property is most directly responsible for which of the following?',
      answerChoices: [
        { id: 'A', text: 'The ability of water to transport sugars but not ions' },
        { id: 'B', text: 'The cohesion that pulls water upward in a plant’s xylem' },
        { id: 'C', text: 'The breakdown of starch into glucose during digestion' },
        { id: 'D', text: 'The storage of genetic information in cells' }
      ],
      correctAnswer: 'B',
      explanation: 'Hydrogen bonding between water molecules produces cohesion, which allows a continuous column of water to be pulled upward through xylem during transpiration.',
      distractorRationales: {
        A: 'Solubility differences come from water’s polarity, not from cohesion specifically.',
        C: 'Starch breakdown is an enzyme-catalyzed hydrolysis, unrelated to cohesion.',
        D: 'Genetic information is stored in nucleic acids, not a property of water.'
      },
      tags: ['water', 'cohesion', 'hydrogen-bonding'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-biology-u2-organelles-mcq-001', courseId: 'ap-biology', courseName: 'AP Biology',
      unitId: 'unit-2', unitName: 'Cell Structure and Function', topicId: 'organelles', topicName: 'Cell Organelles',
      skill: 'Analyze visual representations of biological structures and processes.', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'A cell is observed to secrete large amounts of digestive enzymes. Which organelle would you expect to be especially abundant in this cell?',
      answerChoices: [
        { id: 'A', text: 'Smooth endoplasmic reticulum' },
        { id: 'B', text: 'Rough endoplasmic reticulum' },
        { id: 'C', text: 'Central vacuole' },
        { id: 'D', text: 'Peroxisome' }
      ],
      correctAnswer: 'B',
      explanation: 'Secreted enzymes are proteins. Rough ER is studded with ribosomes that synthesize proteins destined for secretion, so it would be abundant.',
      distractorRationales: {
        A: 'Smooth ER specializes in lipid synthesis and detoxification, not protein secretion.',
        C: 'The central vacuole stores materials and maintains turgor, mostly in plant cells.',
        D: 'Peroxisomes break down fatty acids and detoxify; they do not produce secreted enzymes.'
      },
      tags: ['organelles', 'rough-er', 'protein-secretion'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-biology-u5-inheritance-mcq-001', courseId: 'ap-biology', courseName: 'AP Biology',
      unitId: 'unit-5', unitName: 'Heredity', topicId: 'inheritance', topicName: 'Patterns of Inheritance',
      skill: 'Represent and describe data.', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'apply', estimatedTimeSeconds: 75,
      prompt: 'In pea plants, purple flower color (P) is dominant to white (p). Two heterozygous plants (Pp) are crossed. What fraction of the offspring are expected to have white flowers?',
      answerChoices: [
        { id: 'A', text: '0' }, { id: 'B', text: '1/4' }, { id: 'C', text: '1/2' }, { id: 'D', text: '3/4' }
      ],
      correctAnswer: 'B',
      explanation: 'A Pp × Pp cross yields a 1:2:1 genotype ratio (PP:Pp:pp). Only pp (1/4) shows the recessive white phenotype.',
      distractorRationales: {
        A: 'White offspring are possible because each parent carries a recessive p allele.',
        C: '1/2 is the fraction of heterozygotes, which are purple, not white.',
        D: '3/4 is the fraction with purple flowers, the dominant phenotype.'
      },
      tags: ['punnett-square', 'mendelian', 'probability'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-biology-u3-photosynthesis-mcq-001', courseId: 'ap-biology', courseName: 'AP Biology',
      unitId: 'unit-3', unitName: 'Cellular Energetics', topicId: 'photosynthesis', topicName: 'Photosynthesis',
      skill: 'Explain how energy flows through biological systems.', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'A plant is exposed to light but deprived of carbon dioxide. Which outcome is most likely in the Calvin cycle?',
      answerChoices: [
        { id: 'A', text: 'The cycle increases sugar production because the light reactions continue.' },
        { id: 'B', text: 'The cycle slows because carbon fixation is limited.' },
        { id: 'C', text: 'The cycle produces more oxygen because carbon dioxide is absent.' },
        { id: 'D', text: 'The cycle switches to fermentation to generate ATP.' }
      ],
      correctAnswer: 'B',
      explanation: 'The Calvin cycle requires CO₂ as the carbon source for fixation by rubisco. Without CO₂, sugar production slows even when ATP and NADPH are available from the light reactions.',
      distractorRationales: {
        A: 'The light reactions alone supply energy carriers but no carbon atoms for sugar.',
        C: 'Oxygen is released by the light reactions from water splitting, not by the Calvin cycle.',
        D: 'Fermentation is not part of photosynthesis or the Calvin cycle.'
      },
      tags: ['photosynthesis', 'calvin-cycle', 'energy'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-biology-u3-enzymes-data-001', courseId: 'ap-biology', courseName: 'AP Biology',
      unitId: 'unit-3', unitName: 'Cellular Energetics', topicId: 'enzymes', topicName: 'Enzymes',
      skill: 'Represent and describe data.', questionType: 'data-analysis', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 150,
      prompt: 'A student measures the initial rate of an enzyme-catalyzed reaction at several pH values. Using the table, identify the enzyme’s optimal pH and explain what happens to reaction rate above and below it.',
      dataTable: { columns: ['pH', 'Initial rate (µmol/min)'], rows: [['4', '5'], ['5', '18'], ['6', '42'], ['7', '67'], ['8', '40'], ['9', '12']] },
      correctAnswer: 'Optimal pH is about 7.',
      acceptableAnswers: ['7', 'pH 7', 'about 7', 'neutral'],
      explanation: 'Reaction rate peaks at pH 7 (67 µmol/min). Moving away from the optimum in either direction lowers the rate because extreme pH alters charges on amino acid side chains in the active site, distorting its shape and reducing substrate binding (and at extremes, denaturing the enzyme).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies optimal pH ≈ 7 from the data.', evidenceRequired: 'States pH 7 / highest rate.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains decreased rate away from optimum.', evidenceRequired: 'Links pH to active-site shape/charge.' }
      ],
      modelAnswer: 'The optimal pH is 7, where the initial rate is highest (67 µmol/min). Below and above pH 7 the rate falls because changes in pH change the protonation of side chains in the active site, altering its shape so the substrate binds less effectively; at extreme pH the enzyme denatures.',
      tags: ['enzymes', 'ph', 'data-analysis'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-biology-u2-membrane-transport-mcq-001', courseId: 'ap-biology', courseName: 'AP Biology',
      unitId: 'unit-2', unitName: 'Cell Structure and Function', topicId: 'membrane-transport', topicName: 'Membrane Transport',
      skill: 'Explain biological concepts, processes, and models.', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'A cell with an internal solute concentration of 0.4 M is placed in a 0.1 M solution. Which best predicts the net movement of water and its effect on the cell?',
      answerChoices: [
        { id: 'A', text: 'Water leaves the cell; the cell shrinks.' },
        { id: 'B', text: 'Water enters the cell; the cell swells.' },
        { id: 'C', text: 'No net water movement; the cell stays the same.' },
        { id: 'D', text: 'Solutes move out of the cell until concentrations are equal.' }
      ],
      correctAnswer: 'B',
      explanation: 'The cell interior (0.4 M) is hypertonic to the surrounding solution (0.1 M), so water moves by osmosis toward the higher solute concentration—into the cell—causing it to swell.',
      distractorRationales: {
        A: 'Water leaves only when the surroundings are hypertonic to the cell, the reverse of this case.',
        C: 'There is a concentration gradient, so net osmosis does occur.',
        D: 'Membranes restrict solute movement; osmosis moves water, not the solutes here.'
      },
      tags: ['osmosis', 'tonicity', 'transport'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-biology-u7-hardy-weinberg-mcq-001', courseId: 'ap-biology', courseName: 'AP Biology',
      unitId: 'unit-7', unitName: 'Natural Selection', topicId: 'hardy-weinberg', topicName: 'Hardy-Weinberg Equilibrium',
      skill: 'Perform statistical tests and analyze data.', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'In a population at Hardy-Weinberg equilibrium, 16% of individuals are homozygous recessive (aa) for a trait. What percentage of the population is expected to be heterozygous (Aa)?',
      answerChoices: [
        { id: 'A', text: '24%' }, { id: 'B', text: '36%' }, { id: 'C', text: '48%' }, { id: 'D', text: '60%' }
      ],
      correctAnswer: 'C',
      explanation: 'q² = 0.16, so q = 0.4 and p = 0.6. Heterozygotes = 2pq = 2(0.6)(0.4) = 0.48 = 48%.',
      distractorRationales: {
        A: '24% would arise from 2pq with incorrect allele frequencies (e.g., p or q miscalculated).',
        B: '36% is p² (the homozygous dominant frequency), not 2pq.',
        D: '60% confuses the dominant allele frequency p with the heterozygote frequency.'
      },
      tags: ['hardy-weinberg', 'population-genetics', 'calculation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-biology-u3-respiration-mcq-001', courseId: 'ap-biology', courseName: 'AP Biology',
      unitId: 'unit-3', unitName: 'Cellular Energetics', topicId: 'respiration', topicName: 'Cellular Respiration',
      skill: 'Develop and justify scientific arguments using evidence.', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'A drug blocks the enzyme that pumps protons across the inner mitochondrial membrane during the electron transport chain. Which result and explanation are best supported?',
      answerChoices: [
        { id: 'A', text: 'ATP synthesis by chemiosmosis falls because the proton gradient cannot form.' },
        { id: 'B', text: 'ATP synthesis rises because electrons flow faster without a gradient.' },
        { id: 'C', text: 'Glycolysis stops immediately because it depends on the proton pump.' },
        { id: 'D', text: 'Oxygen consumption increases to compensate for the blocked pump.' }
      ],
      correctAnswer: 'A',
      explanation: 'Proton pumping builds the electrochemical gradient that ATP synthase uses to make ATP (chemiosmosis). Blocking the pump prevents the gradient, so oxidative phosphorylation—the major ATP source—drops sharply.',
      distractorRationales: {
        A: '',
        B: 'Without a gradient there is no proton-motive force, so ATP synthase cannot make ATP.',
        C: 'Glycolysis occurs in the cytosol and does not require the proton pump, though it may slow later as NAD⁺ regeneration is affected.',
        D: 'With the chain disrupted, oxygen consumption typically falls, not rises.'
      },
      tags: ['electron-transport', 'chemiosmosis', 'atp'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 1+ WRITTEN (FRQ) ─────────────────────────────────────────────────────
    {
      id: 'ap-biology-u8-energy-flow-frq-001', courseId: 'ap-biology', courseName: 'AP Biology',
      unitId: 'unit-8', unitName: 'Ecology', topicId: 'energy-flow', topicName: 'Energy Flow in Ecosystems',
      skill: 'Develop and justify scientific arguments using evidence.', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'A grassland food chain runs grass → grasshopper → mouse → hawk. (a) Explain why the biomass available to the hawk is far smaller than the biomass of grass. (b) Predict and justify how a sustained drought that reduces grass productivity would affect the hawk population.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Energy transfer between trophic levels averages roughly 10% efficiency; the rest is lost to metabolism (cellular respiration as heat), egestion, and unconsumed tissue. A drop in producer productivity propagates up the chain.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'States that only ~10% of energy/biomass transfers between trophic levels.', evidenceRequired: 'Quantified or clearly described inefficiency.' },
        { id: 'r2', pointValue: 1, criterion: 'Identifies a loss mechanism (respiration/heat, egestion, unconsumed biomass).', evidenceRequired: 'Names a specific loss pathway.' },
        { id: 'r3', pointValue: 1, criterion: 'Predicts the hawk population declines.', evidenceRequired: 'Clear directional prediction.' },
        { id: 'r4', pointValue: 1, criterion: 'Justifies the prediction by tracing reduced energy up the chain.', evidenceRequired: 'Causal link grass→grasshopper→mouse→hawk.' }
      ],
      modelAnswer: '(a) Only about 10% of the energy stored at one trophic level is incorporated into the next; the remaining ~90% is lost as heat through cellular respiration, in egested waste, and as biomass that is never eaten. Across three transfers (grass→grasshopper→mouse→hawk) these compounding losses leave the hawk far less biomass than the grass. (b) The hawk population would decline. Lower grass productivity reduces the energy reaching grasshoppers, then mice, then hawks; with less prey energy available, hawk reproduction and survival fall, lowering the population.',
      tags: ['energy-flow', 'trophic-levels', 'ecology', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
