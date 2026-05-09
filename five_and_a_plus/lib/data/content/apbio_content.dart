// lib/data/content/apbio_content.dart
//
// AP Biology — all 5 units transcribed from apbio.html
// Accent: #4ade80 (green)

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> apbioUnits = [
  // ── Unit 1: Chemistry of Life & Cell Structure ──────────────────────────
  Unit(
    title: 'Chemistry of Life & Cell Structure',
    blocks: [
      DataTableBlock(
        headers: ['Macromolecule', 'Monomer', 'Function', 'Key Feature'],
        rows: [
          ['Carbohydrates', 'Monosaccharides', 'Quick energy; structural (cellulose)', '1:2:1 C:H:O; glucose=C\u2086H\u2081\u2082O\u2086'],
          ['Lipids', 'Fatty acids + glycerol', 'Long-term energy; membranes; hormones', 'Hydrophobic; phospholipids = bilayer'],
          ['Proteins', 'Amino acids (20 types)', 'Enzymes, structure, transport, signaling', 'R-group determines function; 4\u00b0 structure'],
          ['Nucleic Acids', 'Nucleotides', 'DNA = heredity; RNA = protein synthesis', 'DNA: A-T, G-C. RNA: A-U, G-C'],
        ],
      ),
      CalloutBlock(
        title: 'Fluid Mosaic Model & Transport',
        items: [
          'Phospholipid bilayer: Hydrophilic heads face water; hydrophobic tails face inward.',
          'Passive transport: With gradient, no energy. Simple diffusion (nonpolar), facilitated (protein channels).',
          'Active transport: Against gradient, requires ATP. Na\u207a/K\u207a pump (3 Na out, 2 K in).',
          'Osmosis: Water moves toward higher solute (lower water potential). Hypertonic = water leaves. Hypotonic = water enters.',
          'Endocytosis/Exocytosis: Bulk transport via vesicles.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'A red blood cell in a hypertonic solution will:',
          choices: [
            QuizChoice(text: 'A) Swell and lyse', isCorrect: false),
            QuizChoice(text: 'B) Remain unchanged', isCorrect: false),
            QuizChoice(
              text: 'C) Shrink (crenate) as water leaves',
              isCorrect: true,
              explanation: 'C: Shrink. Hypertonic = more solute outside. Water moves out by osmosis \u2192 cell crenates. Hypotonic = water enters \u2192 cell swells. Isotonic = no net change.',
            ),
            QuizChoice(text: 'D) Divide', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Which macromolecule has the highest energy yield per gram?',
          choices: [
            QuizChoice(text: 'A) Carbohydrates', isCorrect: false),
            QuizChoice(text: 'B) Proteins', isCorrect: false),
            QuizChoice(
              text: 'C) Lipids',
              isCorrect: true,
              explanation: 'C: Lipids (~9 kcal/g vs. ~4 for carbs/proteins). Fats are more reduced (more C-H bonds to oxidize), making them more energy-dense.',
            ),
            QuizChoice(text: 'D) Nucleic acids', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 2: Cell Division — Mitosis & Meiosis ───────────────────────────
  Unit(
    title: 'Cell Division — Mitosis & Meiosis',
    blocks: [
      DataTableBlock(
        headers: ['Phase', 'Stage', 'What Happens'],
        rows: [
          ['Interphase', 'G1', 'Cell grows; proteins synthesized; organelles replicated'],
          ['Interphase', 'S', 'DNA replication \u2014 each chromosome duplicated into 2 sister chromatids'],
          ['Interphase', 'G2', 'Further growth; proteins for division prepared; DNA checked'],
          ['Mitotic Phase', 'Prophase', 'Chromatin condenses; spindle forms; nuclear envelope dissolves'],
          ['Mitotic Phase', 'Metaphase', 'Chromosomes align at metaphase plate (equator); spindle fibers attach to kinetochores'],
          ['Mitotic Phase', 'Anaphase', 'Sister chromatids pulled to opposite poles by spindle fibers'],
          ['Mitotic Phase', 'Telophase', 'Nuclear envelopes reform; chromosomes decondense'],
          ['Cytokinesis', '\u2014', 'Cytoplasm divides: cleavage furrow (animals), cell plate (plants)'],
        ],
      ),
      CalloutBlock(
        title: 'Checkpoints & Cancer',
        items: [
          'G1 checkpoint: Is the cell large enough? Is DNA undamaged? Controlled by cyclins/CDKs.',
          'G2 checkpoint: Was DNA replicated correctly? Checks for damage before mitosis.',
          'M checkpoint (spindle): Are all chromosomes attached to spindle fibers?',
          'Cancer = checkpoint failure. Proto-oncogenes (accelerators) mutate to oncogenes \u2192 uncontrolled division. Tumor suppressor genes (brakes) like p53 mutated \u2192 checkpoints lost.',
          'Telomeres shorten with each division (Hayflick limit). Cancer cells express telomerase \u2014 restoring telomeres = cellular immortality.',
        ],
      ),
      DataTableBlock(
        headers: ['Feature', 'Mitosis', 'Meiosis'],
        rows: [
          ['Purpose', 'Growth, repair, asexual reproduction', 'Sexual reproduction \u2014 gamete production'],
          ['Divisions', 'One division', 'Two divisions (Meiosis I + II)'],
          ['Daughter cells', '2 identical diploid (2n)', '4 haploid (n), genetically unique'],
          ['Crossing over', 'Does not occur', 'Occurs during Prophase I between homologous chromosomes'],
          ['Homolog pairing', 'Homologs do NOT pair', 'Homologs pair as bivalents (tetrads) at Metaphase I'],
        ],
      ),
      CalloutBlock(
        title: 'Oogenesis vs. Spermatogenesis',
        items: [
          'Spermatogenesis: 1 primary spermatocyte \u2192 4 functional sperm (equal cytokinesis).',
          'Oogenesis: 1 primary oocyte \u2192 1 large egg + 3 small polar bodies (unequal cytokinesis concentrates nutrients in egg).',
          'Crossing over: Prophase I. Non-sister chromatids of homologs exchange segments at chiasmata.',
          'Independent assortment: Metaphase I. Random orientation of homolog pairs \u2192 2\u00b2\u00b3 \u2248 8 million chromosome combos in humans.',
          'Nondisjunction in Meiosis I: ALL 4 gametes abnormal (2 with extra, 2 missing). In Meiosis II: only 2 of 4 abnormal.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Crossing over in meiosis occurs between:',
          choices: [
            QuizChoice(text: 'A) Sister chromatids of the same chromosome', isCorrect: false),
            QuizChoice(
              text: 'B) Homologous chromosomes during Prophase I',
              isCorrect: true,
              explanation: 'B: Homologous chromosomes during Prophase I. Crossing over (recombination) occurs when non-sister chromatids of homologous chromosomes exchange corresponding DNA segments at chiasmata during Prophase I. This creates new combinations of alleles not on either parent chromosome.',
            ),
            QuizChoice(text: 'C) Any two chromosomes during Anaphase', isCorrect: false),
            QuizChoice(text: 'D) Sister chromatids during Meiosis II', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'A cell undergoes nondisjunction during Meiosis I. How many of the resulting gametes will have an abnormal chromosome number?',
          choices: [
            QuizChoice(text: 'A) 1 out of 4', isCorrect: false),
            QuizChoice(text: 'B) 2 out of 4', isCorrect: false),
            QuizChoice(
              text: 'C) All 4',
              isCorrect: true,
              explanation: 'C: All 4. Nondisjunction in Meiosis I means homologs fail to separate. Both homologs end up in the same cell. After Meiosis II, ALL 4 resulting gametes are abnormal \u2014 2 will have an extra chromosome (n+1) and 2 will be missing one (n-1). Compare: nondisjunction in Meiosis II only affects 2 of the 4 gametes.',
            ),
            QuizChoice(text: 'D) 0 out of 4', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Which event in meiosis directly explains Mendel\'s Law of Independent Assortment?',
          choices: [
            QuizChoice(text: 'A) Crossing over during Prophase I', isCorrect: false),
            QuizChoice(text: 'B) Separation of sister chromatids in Anaphase II', isCorrect: false),
            QuizChoice(
              text: 'C) Random alignment of homologous pairs at Metaphase I',
              isCorrect: true,
              explanation: 'C is correct. Mendel\'s Law of Independent Assortment states that alleles of different genes are distributed independently. This occurs because during Metaphase I, each homologous pair lines up at the metaphase plate independently \u2014 the orientation of one pair doesn\'t affect any other pair. This produces 2\u00b2\u00b3 possible gamete types in humans from chromosome assortment alone.',
            ),
            QuizChoice(text: 'D) Synapsis forming bivalents', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'During oogenesis (egg formation), meiosis produces:',
          choices: [
            QuizChoice(text: 'A) 4 equally-sized egg cells', isCorrect: false),
            QuizChoice(
              text: 'B) 1 large secondary oocyte and 3 polar bodies',
              isCorrect: true,
              explanation: 'B: 1 egg + 3 polar bodies. Oogenesis uses unequal cytokinesis to concentrate cytoplasm and nutrients into one cell. Primary oocyte \u2192 (Meiosis I) secondary oocyte + 1st polar body. Secondary oocyte \u2192 (Meiosis II) egg + 2nd polar body. The 1st polar body may also divide, giving 3 total polar bodies. All polar bodies degenerate.',
            ),
            QuizChoice(text: 'C) 2 haploid cells, each dividing once more', isCorrect: false),
            QuizChoice(text: 'D) 1 egg and 1 polar body', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 3: Cellular Energetics ──────────────────────────────────────────
  Unit(
    title: 'Cellular Energetics',
    blocks: [
      CalloutBlock(
        title: 'Photosynthesis: 6CO\u2082 + 6H\u2082O \u2192 C\u2086H\u2081\u2082O\u2086 + 6O\u2082',
        items: [
          'Light Reactions (thylakoid membrane): Capture light \u2192 ATP + NADPH + O\u2082. Water splits. PS II \u2192 ETC \u2192 PS I \u2192 NADP\u207a reductase.',
          'Calvin Cycle (stroma): ATP + NADPH + CO\u2082 \u2192 G3P. 3 turns net 1 G3P. Carbon fixation by RuBisCO.',
          'C3 plants: Normal Calvin Cycle. CO\u2082 \u2192 3-carbon compound directly.',
          'C4 plants: CO\u2082 fixed into 4-carbon compound in mesophyll \u2192 shuttled to bundle sheath \u2192 Calvin Cycle. Reduces photorespiration (corn, sugarcane).',
          'CAM plants: Open stomata at night, store CO\u2082 as malate, do Calvin Cycle by day (cacti, pineapple).',
        ],
      ),
      DataTableBlock(
        headers: ['Stage', 'Location', 'Net ATP', 'Key Products'],
        rows: [
          ['Glycolysis', 'Cytoplasm', '2 ATP', '2 pyruvate, 2 NADH, 2 ATP'],
          ['Pyruvate Oxidation', 'Mito. matrix', '0', '2 acetyl-CoA, 2 CO\u2082, 2 NADH'],
          ['Krebs Cycle', 'Mito. matrix', '2 ATP', '6 CO\u2082, 8 NADH, 2 FADH\u2082, 2 ATP'],
          ['Oxidative Phosphorylation', 'Inner mito membrane', '~32\u201334', 'H\u2082O, ATP'],
          ['TOTAL', '\u2014', '~36\u201338', '\u2014'],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Glycolysis occurs in the:',
          choices: [
            QuizChoice(text: 'A) Mitochondrial matrix', isCorrect: false),
            QuizChoice(text: 'B) Thylakoid membrane', isCorrect: false),
            QuizChoice(
              text: 'C) Cytoplasm',
              isCorrect: true,
              explanation: 'C: Cytoplasm. Glycolysis is the only stage of cellular respiration that doesn\'t require mitochondria \u2014 it evolved in ancient prokaryotes before mitochondria existed. This is why even anaerobic organisms can do glycolysis.',
            ),
            QuizChoice(text: 'D) Inner mitochondrial membrane', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 4: Genetics & Gene Expression ──────────────────────────────────
  Unit(
    title: 'Genetics & Gene Expression',
    blocks: [
      CalloutBlock(
        title: 'Hardy-Weinberg: p\u00b2 + 2pq + q\u00b2 = 1 and p + q = 1',
        items: [
          'p = dominant allele freq; q = recessive allele freq',
          'p\u00b2 = homozygous dominant; 2pq = heterozygous (carriers); q\u00b2 = homozygous recessive (shows trait)',
          '5 HW conditions: Large population, random mating, no mutation, no gene flow (migration), no natural selection.',
          'Exam shortcut: Always find q from q\u00b2 first \u2192 then p = 1\u2212q \u2192 then 2pq for carrier freq.',
        ],
      ),
      CardRowBlock([
        ContentCardData(
          title: 'Incomplete Dominance',
          body: 'Heterozygote is intermediate: red \u00d7 white = pink. Alleles unchanged \u2014 only phenotype appears blended.',
        ),
        ContentCardData(
          title: 'Codominance',
          body: 'Both alleles expressed simultaneously: ABO blood type AB shows both A and B antigens.',
        ),
        ContentCardData(
          title: 'Sex-Linked',
          body: 'X-linked recessive expressed more in males (only one X, no second copy to mask). Hemophilia, color blindness.',
        ),
        ContentCardData(
          title: 'Epistasis',
          body: 'One gene masks the expression of another. ABO blood type masked by Bombay phenotype (h gene).',
        ),
      ]),
      CalloutBlock(
        title: 'Central Dogma + Regulation',
        items: [
          'Transcription: DNA \u2192 mRNA (nucleus). RNA polymerase reads 3\u2019\u21925\u2019, synthesizes 5\u2019\u21923\u2019.',
          'Translation: mRNA \u2192 protein (ribosome). tRNA anticodons match codons. AUG = start. UAA/UAG/UGA = stop.',
          'lac operon: ON when lactose present (allolactose removes repressor). Negative control.',
          'trp operon: ON when tryptophan absent (tryptophan activates repressor = off). Negative control.',
          'Eukaryotic regulation: Enhancers, silencers, transcription factors. Methylation = off. Histone acetylation = on.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'In Hardy-Weinberg, if 9% show recessive phenotype, carrier frequency is:',
          choices: [
            QuizChoice(text: 'A) 9%', isCorrect: false),
            QuizChoice(text: 'B) 30%', isCorrect: false),
            QuizChoice(
              text: 'C) 42%',
              isCorrect: true,
              explanation: 'C: 42%. q\u00b2 = 0.09 \u2192 q = 0.3 \u2192 p = 0.7 \u2192 2pq = 2(0.7)(0.3) = 0.42.',
            ),
            QuizChoice(text: 'D) 48%', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The lac operon is ON when:',
          choices: [
            QuizChoice(text: 'A) Lactose is absent', isCorrect: false),
            QuizChoice(text: 'B) Glucose is present', isCorrect: false),
            QuizChoice(
              text: 'C) Lactose is present (allolactose blocks the repressor)',
              isCorrect: true,
              explanation: 'C is correct. Lactose \u2192 allolactose \u2192 binds lac repressor \u2192 repressor falls off operator \u2192 RNA polymerase transcribes lac genes. Without lactose, repressor blocks transcription.',
            ),
            QuizChoice(text: 'D) tRNA binds the operator', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 5: Evolution & Ecology ──────────────────────────────────────────
  Unit(
    title: 'Evolution & Ecology',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Natural Selection',
          body: 'Heritable variation + differential reproductive success. Directional (one extreme), stabilizing (intermediate), disruptive (both extremes).',
        ),
        ContentCardData(
          title: 'Genetic Drift',
          body: 'Random allele frequency changes. Bottleneck effect (population crash) and founder effect (small colonizing group) are forms. Greater in small populations.',
        ),
        ContentCardData(
          title: 'Gene Flow',
          body: 'Movement of alleles between populations via migration. Tends to reduce genetic differences between populations.',
        ),
        ContentCardData(
          title: 'Speciation',
          body: 'Allopatric: geographic isolation. Sympatric: polyploidy in plants. Prezygotic vs. postzygotic reproductive barriers.',
        ),
      ]),
      CodeBlock([
        CodeSpan('Exponential:  dN/dt = rN\n', kind: CodeSpanKind.highlight),
        CodeSpan('Logistic:     dN/dt = rN \u00d7 (K\u2212N)/K   ', kind: CodeSpanKind.highlight),
        CodeSpan('// max rate when N = K/2\n', kind: CodeSpanKind.comment),
        CodeSpan('\n'),
        CodeSpan('10% Energy Rule:\n', kind: CodeSpanKind.highlight),
        CodeSpan('Producer \u2192 Primary consumer \u2192 Secondary \u2192 Tertiary\n'),
        CodeSpan('  100%          10%                 1%         0.1%\n'),
        CodeSpan('\n'),
        CodeSpan('Trophic level efficiency = (energy at level n+1 / energy at level n) \u00d7 100%', kind: CodeSpanKind.highlight),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'Genetic drift would have the greatest effect on allele frequencies in:',
          choices: [
            QuizChoice(text: 'A) A large, isolated population', isCorrect: false),
            QuizChoice(
              text: 'B) A small population that just survived a disaster (bottleneck)',
              isCorrect: true,
              explanation: 'B is correct. Genetic drift is random and has disproportionately large effects in small populations. A bottleneck event drastically reduces population size, and random chance \u2014 not fitness \u2014 determines which alleles survive. Alleles can go to fixation or be lost entirely through drift alone.',
            ),
            QuizChoice(text: 'C) A population with high migration', isCorrect: false),
            QuizChoice(text: 'D) A population under strong directional selection', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Logistic population growth rate is maximized when N equals:',
          choices: [
            QuizChoice(text: 'A) 0', isCorrect: false),
            QuizChoice(text: 'B) K/4', isCorrect: false),
            QuizChoice(
              text: 'C) K/2',
              isCorrect: true,
              explanation: 'C: K/2. dN/dt = rN(K\u2212N)/K. This product is maximized at N=K/2 \u2014 large enough population for high birth rate, but enough resources remaining to sustain fast growth.',
            ),
            QuizChoice(text: 'D) K', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'Mitosis: 1 diploid \u2192 2 identical diploid cells (growth/repair)',
        'Meiosis: 1 diploid \u2192 4 haploid genetically unique gametes',
        'Crossing over: Prophase I of meiosis. Homologs exchange segments at chiasmata.',
        'Independent assortment: Metaphase I. 2\u00b2\u00b3 \u2248 8 million chromosome combos.',
        'Nondisjunction in Meiosis I \u2192 ALL 4 gametes abnormal. Meiosis II \u2192 2 of 4.',
        'Oogenesis: 1 egg + 3 polar bodies. Spermatogenesis: 4 sperm.',
        'ATP accounting: Glycolysis 2, Krebs 2, ETC ~32\u201334 = ~36\u201338 total',
        'Glycolysis = cytoplasm; Krebs = mitochondrial matrix; ETC = inner membrane',
        'Hardy-Weinberg: q\u00b2 \u2192 q \u2192 p=1\u2212q \u2192 2pq for carriers',
        'lac operon ON when lactose present (repressor blocked)',
        '10% energy rule between trophic levels',
        'Logistic growth max rate at N = K/2',
        'Genetic drift most powerful in small populations (bottleneck, founder effect)',
      ]),
    ],
  ),
];
