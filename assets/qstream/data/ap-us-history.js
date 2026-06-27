/**
 * Five & A+ — AI Question Stream · Course data: AP U.S. History
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) shape exactly.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Stimulus/DBQ sources are SHORT, original paraphrased descriptions, never copied documents.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-us-history',
    displayName: 'AP U.S. History',
    description: 'The political, economic, social, and cultural development of what became the United States from before European contact to the present, organized into nine chronological periods with emphasis on historical thinking skills.',
    category: 'history-social-science',
    allowedQuestionTypes: ['mcq', 'stimulus-based', 'short-answer', 'dbq', 'leq'],
    defaultQuestionTypes: ['mcq', 'stimulus-based', 'short-answer'],
    skills: [
      'developments and processes',
      'sourcing',
      'claims and evidence',
      'contextualization',
      'comparison',
      'causation',
      'continuity and change',
      'argumentation'
    ],
    bigIdeas: ['American and National Identity', 'Work, Exchange, and Technology', 'Geography and the Environment', 'Migration and Settlement', 'Politics and Power', 'America in the World', 'American and Regional Culture', 'Social Structures'],
    units: [
      { id: 'unit-1', name: 'Period 1: 1491–1607', examWeight: '4-6%', description: 'Native societies before contact and the Columbian Exchange.',
        topics: [
          { id: 'pre-contact-societies', name: 'Native Societies Before Contact', description: 'Diversity of Indigenous societies shaped by environment and agriculture.', skills: ['developments and processes'] },
          { id: 'columbian-exchange', name: 'The Columbian Exchange', description: 'Transfer of crops, animals, people, and disease across the Atlantic.', skills: ['causation'] },
          { id: 'labor-and-caste', name: 'Spanish Colonization and Caste', description: 'Encomienda, the casta system, and debates over Native peoples.', skills: ['comparison'] }
        ] },
      { id: 'unit-2', name: 'Period 2: 1607–1754', examWeight: '6-8%', description: 'Colonial settlement patterns and transatlantic systems.',
        topics: [
          { id: 'colonial-regions', name: 'Regional Colonial Development', description: 'Distinct economies and societies of New England, Middle, Chesapeake, and Southern colonies.', skills: ['comparison'] },
          { id: 'atlantic-slavery', name: 'Slavery and the Atlantic World', description: 'Growth of chattel slavery and the transatlantic trade.', skills: ['causation'] },
          { id: 'colonial-self-government', name: 'Colonial Self-Government', description: 'Representative assemblies, salutary neglect, and emerging political identity.', skills: ['developments and processes'] }
        ] },
      { id: 'unit-3', name: 'Period 3: 1754–1800', examWeight: '10-17%', description: 'Revolution, independence, and the founding of a republic.',
        topics: [
          { id: 'imperial-crisis', name: 'The Imperial Crisis', description: 'Post-1763 British policies and colonial resistance to taxation.', skills: ['causation'] },
          { id: 'revolution-ideology', name: 'Revolutionary Ideology', description: 'Enlightenment and republican ideas justifying independence.', skills: ['sourcing'] },
          { id: 'constitution-debates', name: 'Constitution and Ratification', description: 'Articles of Confederation weaknesses and Federalist vs. Anti-Federalist debate.', skills: ['argumentation'] }
        ] },
      { id: 'unit-4', name: 'Period 4: 1800–1848', examWeight: '10-17%', description: 'Democratization, market revolution, and reform.',
        topics: [
          { id: 'market-revolution', name: 'The Market Revolution', description: 'Transportation, industrial change, and shifting labor.', skills: ['continuity and change'] },
          { id: 'jacksonian-democracy', name: 'Jacksonian Democracy', description: 'Expanded suffrage, party politics, and presidential power.', skills: ['developments and processes'] },
          { id: 'reform-movements', name: 'Reform Movements', description: 'Abolition, temperance, women’s rights, and the Second Great Awakening.', skills: ['comparison'] }
        ] },
      { id: 'unit-5', name: 'Period 5: 1844–1877', examWeight: '10-17%', description: 'Expansion, sectional crisis, Civil War, and Reconstruction.',
        topics: [
          { id: 'manifest-destiny', name: 'Manifest Destiny and Expansion', description: 'Westward expansion, the Mexican-American War, and slavery debates.', skills: ['causation'] },
          { id: 'sectional-crisis', name: 'The Sectional Crisis', description: 'Compromises, popular sovereignty, and the road to secession.', skills: ['causation'] },
          { id: 'reconstruction', name: 'Reconstruction', description: 'Constitutional change, freedpeople’s rights, and Southern resistance.', skills: ['continuity and change'] }
        ] },
      { id: 'unit-6', name: 'Period 6: 1865–1898', examWeight: '10-17%', description: 'Industrialization, the Gilded Age, and the West.',
        topics: [
          { id: 'industrialization', name: 'Industrialization and Big Business', description: 'Rise of corporations, trusts, and new technologies.', skills: ['developments and processes'] },
          { id: 'gilded-age-labor', name: 'Labor and the Gilded Age', description: 'Unions, strikes, and responses to economic inequality.', skills: ['claims and evidence'] },
          { id: 'western-settlement', name: 'The West and Native Policy', description: 'Settlement, railroads, and federal policy toward Native nations.', skills: ['causation'] }
        ] },
      { id: 'unit-7', name: 'Period 7: 1890–1945', examWeight: '10-17%', description: 'Progressivism, world wars, and the Great Depression.',
        topics: [
          { id: 'progressive-era', name: 'The Progressive Era', description: 'Reform of politics, business, and society around 1900.', skills: ['continuity and change'] },
          { id: 'imperialism-ww1', name: 'Imperialism and World War I', description: 'Overseas expansion and U.S. entry into global conflict.', skills: ['causation'] },
          { id: 'depression-new-deal', name: 'Depression and the New Deal', description: 'Economic collapse and the expansion of the federal government.', skills: ['claims and evidence'] },
          { id: 'world-war-two', name: 'World War II at Home and Abroad', description: 'Mobilization, the home front, and America’s global role.', skills: ['developments and processes'] }
        ] },
      { id: 'unit-8', name: 'Period 8: 1945–1980', examWeight: '10-17%', description: 'Cold War, civil rights, and postwar society.',
        topics: [
          { id: 'cold-war', name: 'The Cold War', description: 'Containment, the arms race, and foreign interventions.', skills: ['causation'] },
          { id: 'civil-rights', name: 'The Civil Rights Movement', description: 'Struggles for racial equality and federal responses.', skills: ['continuity and change'] },
          { id: 'postwar-society', name: 'Postwar Society and Culture', description: 'Suburbanization, the Great Society, and social movements.', skills: ['developments and processes'] }
        ] },
      { id: 'unit-9', name: 'Period 9: 1980–Present', examWeight: '4-6%', description: 'Conservatism, globalization, and a changing nation.',
        topics: [
          { id: 'conservative-resurgence', name: 'The Conservative Resurgence', description: 'Reagan-era politics, economics, and the end of the Cold War.', skills: ['continuity and change'] },
          { id: 'globalization-tech', name: 'Globalization and Technology', description: 'Economic interdependence and the digital revolution.', skills: ['developments and processes'] },
          { id: 'contemporary-debates', name: 'Contemporary Political Debates', description: 'Immigration, demographic change, and partisan division.', skills: ['argumentation'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I, Part A: Multiple Choice', questionTypes: ['mcq', 'stimulus-based'], timingMinutes: 55, weight: '40%', notes: '55 stimulus-based multiple-choice questions in sets tied to sources.' },
        { name: 'Section I, Part B: Short Answer', questionTypes: ['short-answer'], timingMinutes: 40, weight: '20%', notes: '3 short-answer questions, several using sources.' },
        { name: 'Section II, Part A: Document-Based Question', questionTypes: ['dbq'], timingMinutes: 60, weight: '25%', notes: '1 DBQ analyzing several original-style documents.' },
        { name: 'Section II, Part B: Long Essay', questionTypes: ['leq'], timingMinutes: 40, weight: '15%', notes: '1 long essay chosen from options across periods.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-us-history-u1-columbian-exchange-mcq-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-1', unitName: 'Period 1: 1491–1607', topicId: 'columbian-exchange', topicName: 'The Columbian Exchange',
      skill: 'causation', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Which of the following was the most significant demographic consequence of the Columbian Exchange for Indigenous peoples of the Americas?',
      answerChoices: [
        { id: 'A', text: 'A rapid population increase from new European crops' },
        { id: 'B', text: 'A catastrophic population decline from introduced diseases' },
        { id: 'C', text: 'A large migration of Native peoples to Europe' },
        { id: 'D', text: 'A shift away from agriculture toward hunting' }
      ],
      correctAnswer: 'B',
      explanation: 'Old World diseases such as smallpox, to which Native populations had no immunity, spread rapidly and killed an enormous share of Indigenous people, the most devastating demographic effect of contact.',
      distractorRationales: {
        A: 'New crops moved mainly from the Americas to Europe; they did not cause Native population growth.',
        B: '',
        C: 'There was no large voluntary migration of Native peoples to Europe.',
        D: 'Many Native societies remained agricultural; contact did not push them toward hunting.'
      },
      tags: ['columbian-exchange', 'disease', 'demography'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-us-history-u3-imperial-crisis-mcq-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-3', unitName: 'Period 3: 1754–1800', topicId: 'imperial-crisis', topicName: 'The Imperial Crisis',
      skill: 'causation', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'Colonists who objected to the Stamp Act of 1765 most often based their protest on which principle?',
      answerChoices: [
        { id: 'A', text: 'That only Parliament could tax the colonies' },
        { id: 'B', text: 'That there should be no taxation without representation' },
        { id: 'C', text: 'That colonial assemblies should be abolished' },
        { id: 'D', text: 'That the king had no authority over the colonies at all' }
      ],
      correctAnswer: 'B',
      explanation: 'Colonists argued that because they elected no members to Parliament, Parliament could not levy internal taxes on them — the principle of "no taxation without representation."',
      distractorRationales: {
        A: 'This is the opposite of the colonial argument; colonists denied Parliament’s right to tax them directly.',
        B: '',
        C: 'Colonists wanted to preserve, not abolish, their own representative assemblies.',
        D: 'In 1765 most colonists still accepted the king’s authority and sought relief, not independence.'
      },
      tags: ['stamp-act', 'representation', 'revolution'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-us-history-u8-civil-rights-mcq-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-8', unitName: 'Period 8: 1945–1980', topicId: 'civil-rights', topicName: 'The Civil Rights Movement',
      skill: 'developments and processes', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'The Supreme Court’s decision in Brown v. Board of Education (1954) is most directly associated with which goal?',
      answerChoices: [
        { id: 'A', text: 'Ending the segregation of public schools' },
        { id: 'B', text: 'Guaranteeing the right to vote for women' },
        { id: 'C', text: 'Regulating large industrial monopolies' },
        { id: 'D', text: 'Limiting immigration from southern Europe' }
      ],
      correctAnswer: 'A',
      explanation: 'Brown v. Board of Education ruled that "separate but equal" public schools were unconstitutional, overturning Plessy v. Ferguson and targeting segregation in education.',
      distractorRationales: {
        A: '',
        B: 'Women’s voting rights were secured earlier by the Nineteenth Amendment (1920).',
        C: 'Antitrust regulation belongs to the Progressive Era, not the Brown decision.',
        D: 'Immigration restriction relates to 1920s laws, not to school segregation.'
      },
      tags: ['brown-v-board', 'segregation', 'civil-rights'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-us-history-u2-colonial-regions-mcq-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-2', unitName: 'Period 2: 1607–1754', topicId: 'colonial-regions', topicName: 'Regional Colonial Development',
      skill: 'comparison', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'Compared with the New England colonies, the Chesapeake colonies in the seventeenth century were more characterized by which feature?',
      answerChoices: [
        { id: 'A', text: 'Tight-knit family farming communities centered on towns' },
        { id: 'B', text: 'An economy built on cash-crop plantations and indentured/enslaved labor' },
        { id: 'C', text: 'A diversified manufacturing economy' },
        { id: 'D', text: 'Religious uniformity enforced by Puritan congregations' }
      ],
      correctAnswer: 'B',
      explanation: 'The Chesapeake economy depended on tobacco grown on large plantations worked first by indentured servants and increasingly by enslaved Africans, unlike New England’s town-based mixed farming.',
      distractorRationales: {
        A: 'Town-centered family farming describes New England, not the dispersed Chesapeake.',
        B: '',
        C: 'Neither region had large-scale manufacturing this early; the Chesapeake was agricultural.',
        D: 'Puritan religious uniformity was a New England trait, not a defining Chesapeake feature.'
      },
      tags: ['chesapeake', 'new-england', 'comparison', 'tobacco'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-us-history-u4-market-revolution-stimulus-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-4', unitName: 'Period 4: 1800–1848', topicId: 'market-revolution', topicName: 'The Market Revolution',
      skill: 'sourcing', questionType: 'stimulus-based', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'Source (original paraphrase): In an 1840s letter, a New England farmer’s daughter describes leaving the family farm to earn wages at a textile mill, noting both her new independence and the strict daily schedule set by the factory bell.\n\nThis source best illustrates which development of the Market Revolution?',
      answerChoices: [
        { id: 'A', text: 'The decline of wage labor in the Northeast' },
        { id: 'B', text: 'The movement of workers from household production into wage-earning factory work' },
        { id: 'C', text: 'The expansion of slavery into northern factories' },
        { id: 'D', text: 'The end of regional economic specialization' }
      ],
      correctAnswer: 'B',
      explanation: 'The daughter leaving the farm for paid mill work reflects the Market Revolution’s shift from household-based production to wage labor in factories, especially for young women in New England mills.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the development the source illustrates.', evidenceRequired: 'Selects the shift to wage-earning factory work.' }
      ],
      modelAnswer: 'Choice B. The source shows a young woman leaving household farm production for wage-earning factory labor, a hallmark of the Market Revolution and especially of New England textile mills.',
      distractorRationales: {
        A: 'The source shows the rise, not the decline, of wage labor.',
        B: '',
        C: 'Northern textile mills used free wage labor, not enslaved labor.',
        D: 'The Market Revolution increased regional specialization rather than ending it.'
      },
      tags: ['market-revolution', 'mills', 'wage-labor', 'sourcing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-us-history-u6-gilded-age-labor-mcq-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-6', unitName: 'Period 6: 1865–1898', topicId: 'gilded-age-labor', topicName: 'Labor and the Gilded Age',
      skill: 'claims and evidence', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'Which development best explains the rise of national labor organizations such as the American Federation of Labor in the late nineteenth century?',
      answerChoices: [
        { id: 'A', text: 'A decline in the size of factories and the workforce' },
        { id: 'B', text: 'Workers’ efforts to gain bargaining power against large industrial employers' },
        { id: 'C', text: 'Federal laws guaranteeing an eight-hour workday' },
        { id: 'D', text: 'The disappearance of wage labor in cities' }
      ],
      correctAnswer: 'B',
      explanation: 'As corporations grew large and powerful, individual workers had little leverage. Unions like the AFL organized skilled workers to bargain collectively for higher wages and better hours.',
      distractorRationales: {
        A: 'Factories and the industrial workforce grew, not shrank, in this period.',
        B: '',
        C: 'No federal eight-hour-day law existed then; such demands drove union activity rather than resulting from it.',
        D: 'Wage labor expanded rapidly in industrial cities during the Gilded Age.'
      },
      tags: ['afl', 'labor-unions', 'gilded-age'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-us-history-u5-sectional-crisis-stimulus-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-5', unitName: 'Period 5: 1844–1877', topicId: 'sectional-crisis', topicName: 'The Sectional Crisis',
      skill: 'causation', questionType: 'stimulus-based', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'Source (original paraphrase): An 1854 northern editorial argues that allowing settlers in newly organized western territories to vote slavery up or down betrays earlier agreements and will turn the plains into a battleground between free and slave settlers.\n\nThe editorial is most directly responding to which policy, and what was its main consequence?',
      answerChoices: [
        { id: 'A', text: 'The Missouri Compromise, which permanently banned slavery in the West' },
        { id: 'B', text: 'The Kansas-Nebraska Act’s popular sovereignty, which intensified sectional violence' },
        { id: 'C', text: 'The Emancipation Proclamation, which freed enslaved people in the territories' },
        { id: 'D', text: 'The Compromise of 1877, which ended Reconstruction' }
      ],
      correctAnswer: 'B',
      explanation: 'The reference to letting territorial settlers "vote slavery up or down" describes popular sovereignty under the Kansas-Nebraska Act (1854), which repealed the Missouri Compromise line and led to violent conflict ("Bleeding Kansas").',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the policy and its consequence.', evidenceRequired: 'Selects Kansas-Nebraska popular sovereignty and the resulting sectional violence.' }
      ],
      modelAnswer: 'Choice B. The phrase "vote slavery up or down" identifies popular sovereignty under the Kansas-Nebraska Act of 1854, which repealed the Missouri Compromise line and triggered the violence of "Bleeding Kansas."',
      distractorRationales: {
        A: 'The Missouri Compromise restricted slavery by a fixed line; the editorial protests its undoing, not its enforcement.',
        B: '',
        C: 'The Emancipation Proclamation came in 1863, nearly a decade later, during the Civil War.',
        D: 'The Compromise of 1877 concerned the disputed election and Reconstruction, not 1854 territorial policy.'
      },
      tags: ['kansas-nebraska', 'popular-sovereignty', 'sectionalism'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-us-history-u7-depression-new-deal-mcq-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-7', unitName: 'Period 7: 1890–1945', topicId: 'depression-new-deal', topicName: 'Depression and the New Deal',
      skill: 'continuity and change', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'Which statement best evaluates the long-term significance of the New Deal for the relationship between citizens and the federal government?',
      answerChoices: [
        { id: 'A', text: 'It permanently reduced the federal government’s role in the economy.' },
        { id: 'B', text: 'It expanded the federal government’s responsibility for economic security, a change that largely endured.' },
        { id: 'C', text: 'It ended all federal regulation of banking and industry.' },
        { id: 'D', text: 'It transferred most economic policy authority to state governments.' }
      ],
      correctAnswer: 'B',
      explanation: 'New Deal programs like Social Security and federal regulation established a lasting expectation that the national government would help manage economic security and stability, a durable shift in the citizen-government relationship.',
      distractorRationales: {
        A: 'The New Deal expanded, rather than reduced, the federal economic role.',
        B: '',
        C: 'The New Deal created new banking and industrial regulation (e.g., the SEC and FDIC), not its end.',
        D: 'It centralized authority in the federal government rather than shifting it to the states.'
      },
      tags: ['new-deal', 'federal-power', 'social-security'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: SHORT-ANSWER (rubric) ───────────────────────────────────────
    {
      id: 'ap-us-history-u5-reconstruction-saq-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-5', unitName: 'Period 5: 1844–1877', topicId: 'reconstruction', topicName: 'Reconstruction',
      skill: 'continuity and change', questionType: 'short-answer', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 360,
      prompt: 'Answer (a), (b), and (c). (a) Briefly describe ONE specific way Reconstruction expanded the rights of formerly enslaved people. (b) Briefly explain ONE specific way those gains were limited or rolled back by 1900. (c) Briefly explain ONE reason the rollback occurred.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A strong response names a concrete Reconstruction-era expansion of rights (e.g., a Reconstruction Amendment), a concrete later limitation (e.g., disenfranchisement or segregation), and a cause of that retreat.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Describes a specific expansion of rights during Reconstruction.', evidenceRequired: 'Names a concrete amendment, law, or change (e.g., 14th/15th Amendment, Black officeholding).' },
        { id: 'r2', pointValue: 1, criterion: 'Explains a specific limitation or rollback by 1900.', evidenceRequired: 'Identifies a concrete setback (e.g., Jim Crow laws, poll taxes, literacy tests, Plessy).' },
        { id: 'r3', pointValue: 1, criterion: 'Explains a reason the rollback occurred.', evidenceRequired: 'Gives a cause (e.g., end of federal enforcement after 1877, white Southern resistance, Supreme Court rulings).' }
      ],
      modelAnswer: '(a) The Fourteenth and Fifteenth Amendments granted formerly enslaved men citizenship, equal protection, and the right to vote, and many Black men held office during Reconstruction. (b) By 1900, Southern states had stripped most Black voters from the rolls using poll taxes and literacy tests, and Jim Crow laws enforced segregation, upheld by Plessy v. Ferguson (1896). (c) These reversals followed the withdrawal of federal troops after the Compromise of 1877, which ended federal enforcement and allowed white Southern "Redeemer" governments to undo Reconstruction gains.',
      tags: ['reconstruction', 'amendments', 'jim-crow', 'saq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: DBQ (rubric + modelAnswer) ──────────────────────────────────
    {
      id: 'ap-us-history-u7-progressive-era-dbq-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-7', unitName: 'Period 7: 1890–1945', topicId: 'progressive-era', topicName: 'The Progressive Era',
      skill: 'argumentation', questionType: 'dbq', difficulty: 'exam-level',
      bloomLevel: 'create', estimatedTimeSeconds: 3600,
      prompt: 'Evaluate the extent to which Progressive Era reforms (1890–1920) changed the role of the federal government in American economic and social life. Use the documents below (original paraphrased descriptions) and your knowledge of the period.\n\nDoc 1 (paraphrase): A muckraking journalist exposes unsafe conditions and adulterated products in the meatpacking industry.\nDoc 2 (paraphrase): A settlement-house reformer argues that government should protect women and child laborers.\nDoc 3 (paraphrase): A political cartoon shows a giant trust dwarfing small competitors and a regulator with a small net.\nDoc 4 (paraphrase): A constitutional amendment authorizes a federal income tax.\nDoc 5 (paraphrase): A business leader warns that new federal regulations threaten free enterprise.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A successful DBQ states a defensible thesis on the extent of change, supports it with documents and outside evidence, uses sourcing for at least one document, and addresses contextualization and complexity.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Thesis/Claim: defensible thesis on the extent of change in federal power.', evidenceRequired: 'A clear, evaluative thesis that responds to the prompt with a line of reasoning.' },
        { id: 'r2', pointValue: 1, criterion: 'Contextualization: situates reforms in broader developments.', evidenceRequired: 'Describes relevant context (e.g., industrialization, urbanization, inequality).' },
        { id: 'r3', pointValue: 2, criterion: 'Evidence from documents: uses content of at least four documents to support the argument.', evidenceRequired: 'Accurately applies four or more documents (3+ documents earns 1 point).' },
        { id: 'r4', pointValue: 1, criterion: 'Evidence beyond the documents: one specific relevant outside example.', evidenceRequired: 'Names a fact not in the documents (e.g., Pure Food and Drug Act, Federal Reserve Act).' },
        { id: 'r5', pointValue: 1, criterion: 'Sourcing: explains point of view, purpose, audience, or situation for at least one document.', evidenceRequired: 'Connects a document’s source to its meaning.' },
        { id: 'r6', pointValue: 1, criterion: 'Complexity: demonstrates a nuanced understanding (e.g., limits of reform or competing views).', evidenceRequired: 'Shows continuity as well as change, or qualifies the argument.' }
      ],
      modelAnswer: 'Thesis: Progressive Era reforms significantly expanded the federal government’s role in regulating the economy and protecting citizens, though that expansion was uneven and left major inequalities intact. Context: rapid industrialization and urban growth produced unsafe products, harsh labor conditions, and powerful trusts that earlier laissez-faire government had not addressed. Evidence: Doc 1’s exposé of meatpacking helped spur federal food-safety laws; Doc 2’s reformer reflects new pressure for protective labor regulation; Doc 3 portrays weak regulation of trusts, prompting stronger antitrust enforcement; Doc 4’s income-tax amendment gave the federal government a powerful new revenue tool. Beyond the documents, the Pure Food and Drug Act, the creation of the Federal Reserve, and antitrust action under Roosevelt and Wilson all expanded federal authority. Sourcing: Doc 5, written by a business leader, opposes regulation precisely because it threatens his interests, revealing how far federal power had grown. Complexity: yet reform was limited — many measures excluded Black Americans and did not end inequality — so the change, while real, was partial.',
      tags: ['progressive-era', 'federal-power', 'reform', 'dbq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: LEQ (rubric + modelAnswer) ──────────────────────────────────
    {
      id: 'ap-us-history-u8-cold-war-leq-001', courseId: 'ap-us-history', courseName: 'AP U.S. History',
      unitId: 'unit-8', unitName: 'Period 8: 1945–1980', topicId: 'cold-war', topicName: 'The Cold War',
      skill: 'argumentation', questionType: 'leq', difficulty: 'exam-level',
      bloomLevel: 'create', estimatedTimeSeconds: 2400,
      prompt: 'Evaluate the extent to which the policy of containment shaped United States foreign policy in the period from 1945 to 1975.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A successful LEQ presents a defensible thesis, supplies relevant context, supports the argument with multiple specific examples, and uses a reasoning skill (here, continuity and change or causation) including some complexity.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Thesis/Claim: defensible thesis with a line of reasoning.', evidenceRequired: 'A clear evaluative thesis on the extent of containment’s influence.' },
        { id: 'r2', pointValue: 1, criterion: 'Contextualization: situates the argument in broader developments.', evidenceRequired: 'Describes relevant context (e.g., postwar U.S.-Soviet rivalry).' },
        { id: 'r3', pointValue: 2, criterion: 'Evidence: supports the argument with specific relevant examples.', evidenceRequired: 'Two specific examples used to support the argument (one specific example earns 1 point).' },
        { id: 'r4', pointValue: 2, criterion: 'Analysis and Reasoning: uses a reasoning skill and demonstrates complexity.', evidenceRequired: 'Applies causation/continuity-and-change and qualifies or corroborates the argument (complexity earns the 2nd point).' }
      ],
      modelAnswer: 'Thesis: Containment was the dominant framework of U.S. foreign policy from 1945 to 1975, guiding interventions across Europe and Asia, though its application shifted from economic and diplomatic tools toward costly military commitments. Context: after World War II the United States and Soviet Union emerged as rival superpowers, and U.S. leaders feared the spread of communism. Evidence: the Truman Doctrine and Marshall Plan applied containment economically and diplomatically in Europe and Greece/Turkey; the Korean War extended containment militarily in Asia; and the Vietnam War showed containment pushed to its limits, sparking domestic backlash. Reasoning and complexity: while containment provided continuity across administrations, its meaning changed — détente in the early 1970s modified the strategy by seeking coexistence with communist powers — showing that containment shaped policy profoundly yet was not applied uniformly.',
      tags: ['cold-war', 'containment', 'foreign-policy', 'leq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
