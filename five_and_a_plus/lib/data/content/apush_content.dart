// lib/data/content/apush_content.dart
//
// Full content tree for AP U.S. History — transcribed from apush.html.
// 11 Unit objects: Exam, Writing, P1–P9.
// All content is typed const data — zero dynamic dispatch at render time.

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> apushUnits = [
  // ── Exam Overview ──────────────────────────────────────────────────────────
  Unit(
    title: 'AP United States History Exam',
    blocks: [
      DataTableBlock(
        headers: ['Section', 'Format', 'Time', 'Weight'],
        rows: [
          ['Section I-A: MCQ', '55 questions, stimulus-based sets', '55 min', '40%'],
          ['Section I-B: SAQ', '3 Short Answer Questions (choose Q3 or Q4)', '40 min', '20%'],
          ['Section II-A: DBQ', '1 Document-Based Question (7 docs)', '60 min (15 read)', '25%'],
          ['Section II-B: LEQ', '1 of 3 Long Essay Questions', '40 min', '15%'],
        ],
      ),
      CardRowBlock([
        ContentCardData(
          title: 'NAT – National Identity',
          body:
              'How American identity has evolved across groups, regions, and time. Immigration, citizenship, assimilation, pluralism.',
        ),
        ContentCardData(
          title: 'WXT – Work, Exchange, Technology',
          body:
              'Labor systems, economic change, technological innovation, trade, capitalism, and industrialization.',
        ),
        ContentCardData(
          title: 'GEO – Geography & Environment',
          body:
              'How geography shapes migration, settlement, and development. Environmental consequences of human activity.',
        ),
        ContentCardData(
          title: 'MIG – Migration & Settlement',
          body: 'Internal and external migration patterns. Push/pull factors, urbanization, frontier expansion.',
        ),
        ContentCardData(
          title: 'POL – Politics & Power',
          body:
              'Government structure, political parties, reform movements, civil rights, constitutional development.',
        ),
        ContentCardData(
          title: 'WOR – America in the World',
          body: 'Diplomatic relations, foreign policy, wars, colonialism, imperialism, role in global affairs.',
        ),
        ContentCardData(
          title: 'ARC – American & Regional Culture',
          body: 'Cultural movements, religion, arts, literature, ideologies, regional identities.',
        ),
        ContentCardData(
          title: 'SOC – Social Structures',
          body:
              'Class, gender, race, and ethnicity. How social hierarchies are created, maintained, and challenged.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'Which section of the APUSH exam carries the most weight?',
          choices: [
            QuizChoice(
              text: 'Multiple Choice (40%)',
              isCorrect: true,
              explanation:
                  'A is correct. The MCQ section is 40% of your score — the single largest component. However, the two FRQ sections together (DBQ 25% + LEQ 15%) total 40%, making writing equally important.',
            ),
            QuizChoice(text: 'SAQ (20%)', isCorrect: false),
            QuizChoice(text: 'DBQ (25%)', isCorrect: false),
            QuizChoice(text: 'LEQ (15%)', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The APUSH DBQ rubric awards points in which categories?',
          choices: [
            QuizChoice(text: 'Thesis, Evidence, Argument, Grammar', isCorrect: false),
            QuizChoice(
              text: 'Thesis, Contextualization, Evidence (docs + outside), Sourcing (HIPP), Complexity',
              isCorrect: true,
              explanation:
                  'B is correct. The 7-point DBQ rubric covers: Thesis (1), Contextualization (1), Evidence-Documents (up to 2), Evidence-Beyond Docs (1), Analysis/Sourcing-HIPP (1), Analysis/Complexity (1).',
            ),
            QuizChoice(text: 'Introduction, Body, Conclusion, Citations', isCorrect: false),
            QuizChoice(text: 'Content Knowledge, Writing Style, Document Use, Creativity', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Writing / Essay ────────────────────────────────────────────────────────
  Unit(
    title: 'DBQ, LEQ & SAQ Mastery',
    blocks: [
      RubricBoxBlock([
        RubricRow(
          label: 'Thesis',
          points: '1 pt',
          description:
              'Thesis/Claim: Responds to the prompt with a historically defensible thesis that establishes a line of reasoning. Must be more than a restatement of the prompt. Can appear in intro OR conclusion.',
        ),
        RubricRow(
          label: 'Context',
          points: '1 pt',
          description:
              'Contextualization: Describes a broader historical context accurately and connects it to the argument. Must be more than a phrase — needs to be a developed description of events before, during, or after the time frame.',
        ),
        RubricRow(
          label: 'Evidence — Docs',
          points: '1 pt',
          description:
              'Accurately uses content from at least 3 documents to address the topic of the prompt.',
        ),
        RubricRow(
          label: 'Evidence — Docs+',
          points: '1 pt',
          description:
              'Uses content from at least 4 documents AND supports an argument in response to the prompt.',
        ),
        RubricRow(
          label: 'Beyond Docs',
          points: '1 pt',
          description:
              'Uses at least one additional piece of specific historical evidence (not in documents) relevant to the argument.',
        ),
        RubricRow(
          label: 'HIPP Sourcing',
          points: '1 pt',
          description:
              'For at least 2 documents, explains how/why the document\'s Historical situation, Intended audience, Purpose, or Point of view is relevant to the argument.',
        ),
        RubricRow(
          label: 'Complexity',
          points: '1 pt',
          description:
              'Demonstrates complex understanding through corroboration, qualification, or modification of the argument. Using ALL 7 docs counts. Connecting to a different period, geographic area, or theme counts.',
        ),
      ]),
      StepBoxBlock(
        title: 'The Heimler DBQ Thesis Formula',
        steps: [
          'Read the prompt. Identify the time period, the exact question asked, and the reasoning process required (causation? comparison? CCOT?)',
          'Scan all 7 documents in 10–12 minutes. Annotate each with HIPP: Historical situation, Intended audience, Purpose, Point of view.',
          'Group documents into 2–3 categories that will form your body paragraph arguments. Your groups should support a unified thesis.',
          'Write your thesis using the Heimler formula: "Although [counterpoint/nuance], [your line of reasoning], because [evidence group 1], [evidence group 2], and [evidence group 3]."',
          'Write contextualization in a separate paragraph BEFORE your thesis: describe 2–3 sentences about the broader historical backdrop that existed BEFORE the prompt\'s time frame.',
          'Write body paragraphs: Each uses docs + outside evidence + at least one HIPP sourcing analysis.',
          'Complexity: In your conclusion or throughout, connect your argument to another time period, region, or use all 7 docs.',
        ],
      ),
      RubricBoxBlock([
        RubricRow(
          label: 'Thesis',
          points: '1 pt',
          description:
              'Historically defensible thesis with a line of reasoning. Cannot simply restate or rephrase the prompt.',
        ),
        RubricRow(
          label: 'Context',
          points: '1 pt',
          description:
              'Describes broader historical context and connects it to the argument. Developed description — not just a phrase.',
        ),
        RubricRow(
          label: 'Evidence — Examples',
          points: '1 pt',
          description: 'Provides at least two specific examples of evidence relevant to the topic.',
        ),
        RubricRow(
          label: 'Evidence — Argument',
          points: '1 pt',
          description: 'Uses specific evidence to support an argument in response to the prompt.',
        ),
        RubricRow(
          label: 'Historical Reasoning',
          points: '1 pt',
          description:
              'Uses comparison, causation, or CCOT to frame or structure the argument. Must be consistent throughout, not just mentioned.',
        ),
        RubricRow(
          label: 'Complexity',
          points: '1 pt',
          description:
              'Demonstrates complex understanding by corroborating, qualifying, or modifying the argument using diverse evidence or perspectives.',
        ),
      ]),
      CalloutBlock(
        title: 'SAQ Structure (A, B, C = 1 point each)',
        items: [
          'Each SAQ part is worth exactly 1 point. There is no thesis required.',
          'Identify/Describe tasks: One sentence is usually sufficient — name the thing and say something accurate about it.',
          'Explain tasks: Requires a sentence PLUS reasoning that connects evidence to a historical claim. Ask yourself: "So what? Why did this matter?"',
          'Write in complete sentences. Bullet points are acceptable but complete sentences are safer.',
          'Be specific — vague answers like "it caused problems" earn nothing. Name the people, events, and dates.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question:
              'According to the current APUSH DBQ rubric, what is required to earn the Sourcing (HIPP) point?',
          choices: [
            QuizChoice(text: 'Quote directly from at least 3 documents', isCorrect: false),
            QuizChoice(
              text:
                  'For at least 2 documents, explain how/why the document\'s historical situation, audience, purpose, or POV is relevant to the argument',
              isCorrect: true,
              explanation:
                  'B is correct. HIPP = Historical situation, Intended audience, Purpose, Point of view. You must explain how or why it\'s relevant — not just identify it. For 2 documents minimum.',
            ),
            QuizChoice(text: 'Use all 7 documents in your essay', isCorrect: false),
            QuizChoice(text: 'Identify the author and date for each document', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The Complexity point on the DBQ can be earned by:',
          choices: [
            QuizChoice(text: 'Writing a five-paragraph essay', isCorrect: false),
            QuizChoice(
              text:
                  'Using all 7 documents, or connecting to a different time period/region/theme, or corroborating/qualifying/modifying your argument',
              isCorrect: true,
              explanation:
                  'B is correct. The complexity point rewards genuinely sophisticated historical thinking. Using all 7 documents is one path. Others include: connecting to a different period, comparing to another geographic area, or explaining multiple causes/effects with corroboration or qualification.',
            ),
            QuizChoice(text: 'Having no grammatical errors', isCorrect: false),
            QuizChoice(text: 'Citing a secondary source', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 1 (1491–1607) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 1 (1491–1607) — Pre-Columbian through Early Contact',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Native American Diversity',
          body:
              'Hundreds of distinct nations — Aztec/Inca (complex empires), Eastern Woodlands (agriculture + hunting), Plains (nomadic buffalo hunting), Pacific Northwest (fishing). Environment shaped political and social structures.',
        ),
        ContentCardData(
          title: 'European Motivations (3 G\'s)',
          body:
              'God (religious conversion), Gold (wealth/trade routes), Glory (national prestige). Spain, Portugal, France, England competed. Columbus 1492 — accident seeking Asia.',
        ),
        ContentCardData(
          title: 'Columbian Exchange',
          body:
              'EUROPE→AMERICAS: horses, cattle, wheat, sugar, smallpox (devastating), measles, influenza. AMERICAS→EUROPE: corn, potatoes, tomatoes, tobacco, cacao. Demographic catastrophe for indigenous peoples — up to 90% population loss in some regions.',
        ),
        ContentCardData(
          title: 'Spanish Encomienda System',
          body:
              'Labor system: Spanish colonizers given authority over indigenous people in exchange for military service. Led to enslavement, forced labor, population collapse. Las Casas documented abuses — early critique of colonialism.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'The Columbian Exchange most significantly impacted the Americas through:',
          choices: [
            QuizChoice(text: 'Introduction of democratic government', isCorrect: false),
            QuizChoice(
              text: 'Spread of European diseases that devastated indigenous populations',
              isCorrect: true,
              explanation:
                  'B is correct. European diseases — especially smallpox — killed an estimated 50–90% of indigenous populations in many regions. This was the single most significant consequence of first contact, enabling later conquest and colonization.',
            ),
            QuizChoice(text: 'Arrival of European manufactured goods', isCorrect: false),
            QuizChoice(text: 'Introduction of new agricultural techniques', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The encomienda system established by Spain in the Americas was primarily:',
          choices: [
            QuizChoice(text: 'A system of free trade between Spain and indigenous nations', isCorrect: false),
            QuizChoice(
              text:
                  'A labor system granting colonizers authority over indigenous people in exchange for military service',
              isCorrect: true,
              explanation:
                  'B is correct. The encomienda gave Spanish colonizers (encomenderos) authority over a number of indigenous people who owed labor or tribute. It effectively created a system of forced labor and is closely associated with the demographic collapse of indigenous populations.',
            ),
            QuizChoice(text: 'A religious mission system for converting Native Americans', isCorrect: false),
            QuizChoice(text: 'A land grant system for Spanish soldiers', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 2 (1607–1754) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 2 (1607–1754) — Colonial America',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'British Colonies: Regional Differences',
          body:
              'New England: Puritan theocracy, small farms, fishing/trade, town meetings. Middle: diverse religions/ethnicities, wheat farming, artisan economy. Southern: tobacco/rice/indigo plantations, headright system, indentured servants → enslaved Africans.',
        ),
        ContentCardData(
          title: 'Chesapeake vs. New England',
          body:
              'Chesapeake (Virginia, Maryland): high death rate, male-dominated, tobacco economy, indentured servants. New England: religious community, family migration, longer lives, diversified economy.',
        ),
        ContentCardData(
          title: 'Bacon\'s Rebellion (1676)',
          body:
              'Nathaniel Bacon led frontier farmers against Governor Berkeley\'s Native American policy. Revealed tension between wealthy planters and poor whites → Virginia planters shifted from indentured servants to enslaved Africans.',
        ),
        ContentCardData(
          title: 'Salutary Neglect',
          body:
              'British policy of not strictly enforcing colonial trade laws (Navigation Acts). Created de facto colonial self-governance. When Britain reversed course (1763), colonists resisted — setting stage for Revolution.',
        ),
        ContentCardData(
          title: 'Great Awakening (1730s–1740s)',
          body:
              'Religious revival — Whitefield, Edwards. Challenged established churches, emphasized individual conversion. Democratized religion, fostered spirit of questioning authority → contributed to Revolutionary ideology.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'Bacon\'s Rebellion (1676) most directly contributed to which long-term development in Virginia?',
          choices: [
            QuizChoice(text: 'The establishment of representative government', isCorrect: false),
            QuizChoice(
              text: 'Planter elites shifting from indentured servants to enslaved Africans',
              isCorrect: true,
              explanation:
                  'B is correct. Bacon\'s Rebellion revealed the danger of having a large class of armed, discontented, landless white men (former indentured servants). Virginia planters increasingly turned to enslaved Africans who could be controlled more completely and who had no prospect of freedom to look forward to.',
            ),
            QuizChoice(text: 'The end of the tobacco economy', isCorrect: false),
            QuizChoice(text: 'Improved relations between colonists and Native Americans', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The policy of \'salutary neglect\' most directly contributed to:',
          choices: [
            QuizChoice(text: 'Growth of the slave trade in colonial America', isCorrect: false),
            QuizChoice(
              text:
                  'Development of de facto colonial self-governance that colonists later defended as their right',
              isCorrect: true,
              explanation:
                  'B is correct. For decades, Britain largely ignored colonial violations of trade laws, allowing colonial assemblies to develop real governing power. When Britain tried to reassert control after 1763, colonists argued they had a right to self-governance they had long exercised.',
            ),
            QuizChoice(text: 'Increased British military presence in the colonies', isCorrect: false),
            QuizChoice(text: 'Economic dependence on Britain', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 3 (1754–1800) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 3 (1754–1800) — Revolution & Republic',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Road to Revolution',
          body:
              'French & Indian War (1754–63) → Britain needs revenue → Stamp Act (1765), Townshend Acts (1767), Tea Act (1773). Colonists: "No taxation without representation." Boston Massacre (1770), Tea Party (1773), Intolerable Acts (1774).',
        ),
        ContentCardData(
          title: 'Declaration of Independence (1776)',
          body:
              'Locke\'s natural rights theory: life, liberty, property. "All men are created equal" — revolutionary claim, though limited in practice. Listed grievances against King George III. Legitimized Revolution with Enlightenment philosophy.',
        ),
        ContentCardData(
          title: 'Articles of Confederation (1781–1789)',
          body:
              'First government: weak central authority, no power to tax or regulate commerce, no executive or judicial branch. Failed to handle Shays\' Rebellion (1786). Led to Constitutional Convention (1787).',
        ),
        ContentCardData(
          title: 'Constitution & Bill of Rights',
          body:
              'Federalism: divided sovereignty between national/state. Separation of powers. Great Compromise: bicameral legislature. 3/5 Compromise. Ratification debate: Federalists (Hamilton, Madison, Jay — Federalist Papers) vs. Anti-Federalists. Bill of Rights (1791) addressed Anti-Federalist concerns.',
        ),
        ContentCardData(
          title: 'Hamilton vs. Jefferson',
          body:
              'Hamilton: strong federal government, national bank, manufacturing economy, loose construction. Jefferson: states\' rights, agrarian republic, strict construction. First American political party system.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'The Articles of Confederation failed primarily because:',
          choices: [
            QuizChoice(text: 'It gave too much power to the president', isCorrect: false),
            QuizChoice(
              text:
                  'It lacked the power to tax, regulate commerce, or enforce laws — making it unable to address national crises',
              isCorrect: true,
              explanation:
                  'B is correct. The Articles gave Congress no power to tax citizens directly (only request money from states), no power to regulate commerce, and no executive branch to enforce laws. Shays\' Rebellion (1786) — farmers unable to pay debts — showed the central government couldn\'t handle domestic crises.',
            ),
            QuizChoice(text: 'It was rejected by most states', isCorrect: false),
            QuizChoice(text: 'It created an overly powerful Congress', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Alexander Hamilton\'s economic program most directly reflected which vision for America?',
          choices: [
            QuizChoice(text: 'An agrarian republic of small farmers', isCorrect: false),
            QuizChoice(
              text:
                  'A powerful industrial nation with a strong central government and national bank',
              isCorrect: true,
              explanation:
                  'B is correct. Hamilton\'s Report on Manufactures, national bank, assumption of state debts, and protective tariffs all aimed to build American industrial and financial power. Jefferson opposed this as threatening republican virtue and state sovereignty.',
            ),
            QuizChoice(text: 'Economic isolationism from European markets', isCorrect: false),
            QuizChoice(text: 'State-controlled manufacturing', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 4 (1800–1848) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 4 (1800–1848) — Democracy & Expansion',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Jeffersonian Democracy',
          body:
              '"Revolution of 1800" — peaceful transfer of power. Jefferson reduced federal power, cut military, but expanded federal authority with Louisiana Purchase (1803). Lewis & Clark. Marbury v. Madison (1803) established judicial review.',
        ),
        ContentCardData(
          title: 'Market Revolution',
          body:
              'Early 1800s–1840s: Interchangeable parts, textile mills (Lowell System), Erie Canal (1825), railroads. Created national market economy. Transformed labor: factory work, "Cult of Domesticity," free Black workers in North.',
        ),
        ContentCardData(
          title: 'Jacksonian Democracy',
          body:
              'Andrew Jackson (1829–1837): expanded voting rights for white men, spoils system, Indian Removal Act (1830) → Trail of Tears. Destroyed Second Bank of US. Nullification Crisis with South Carolina (1832).',
        ),
        ContentCardData(
          title: 'Antebellum Reform Movements',
          body:
              'Second Great Awakening fueled reform. Temperance (WCTU), prison reform, public education (Horace Mann), women\'s rights (Seneca Falls 1848 — Declaration of Sentiments), abolitionism (Garrison — radical; Douglass — lived experience; ACS — colonization).',
        ),
        ContentCardData(
          title: 'Manifest Destiny & Expansion',
          body:
              'John O\'Sullivan coined term 1845. Texas Annexation (1845), Oregon Territory (1846), Mexican-American War (1846–48) → Treaty of Guadalupe Hidalgo. Wilmot Proviso — should slavery expand? Intensified sectional crisis.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'The Market Revolution of the early 19th century most directly contributed to:',
          choices: [
            QuizChoice(text: 'The abolition of slavery in the North', isCorrect: false),
            QuizChoice(
              text:
                  'Greater economic interdependence between regions and the transformation of labor from artisan/farm to factory/market',
              isCorrect: true,
              explanation:
                  'B is correct. The Market Revolution — driven by canals, railroads, and industrial technology — created a national economy. Northern factory workers became wage laborers. Southern cotton fed Northern mills. This interdependence (with underlying tensions) was a major feature of antebellum America.',
            ),
            QuizChoice(text: 'A decline in American manufacturing', isCorrect: false),
            QuizChoice(text: 'Reduced immigration to the United States', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The Indian Removal Act of 1830 most directly resulted in:',
          choices: [
            QuizChoice(
              text: 'Peaceful relocation of Native Americans with government compensation',
              isCorrect: false,
            ),
            QuizChoice(
              text:
                  'The forced removal of the Five Civilized Tribes from southeastern lands, causing mass death on the Trail of Tears',
              isCorrect: true,
              explanation:
                  'B is correct. Despite a Supreme Court ruling in Worcester v. Georgia that the Cherokee had sovereignty, Jackson enforced removal. The Cherokee Trail of Tears (1838–39) killed approximately 4,000 of 17,000 people. This is a major example of federal power overriding both judicial rulings and treaty obligations.',
            ),
            QuizChoice(
              text: 'A constitutional amendment guaranteeing Native American land rights',
              isCorrect: false,
            ),
            QuizChoice(
              text: 'Improved relations between the US government and Native nations',
              isCorrect: false,
            ),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 5 (1844–1877) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 5 (1844–1877) — Civil War & Reconstruction',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Causes of Civil War (SCALED)',
          body:
              'Slavery (core issue), Compromise failures (Missouri Compromise struck down), Abolitionism intensifying, Lincoln\'s election (1860), Economic differences (industrial North vs. agrarian slave South), Dred Scott v. Sandford (1857) — enslaved people have no citizenship rights.',
        ),
        ContentCardData(
          title: 'Civil War Military & Political',
          body:
              'Union advantages: industrial capacity, railroads, navy, population. Emancipation Proclamation (Jan 1, 1863) — freed enslaved people in rebel states; changed war\'s meaning; prevented European recognition of Confederacy. 54th Massachusetts Infantry. 13th Amendment (1865).',
        ),
        ContentCardData(
          title: 'Reconstruction (1865–1877)',
          body:
              '13th (abolition), 14th (citizenship, equal protection), 15th (Black male voting) Amendments. Freedmen\'s Bureau. Black Codes. Sharecropping replaced slavery economically. Radical Republicans vs. Johnson. Compromise of 1877 ended Reconstruction.',
        ),
        ContentCardData(
          title: 'Reconstruction\'s End',
          body:
              'Ku Klux Klan terrorized Black voters. Supreme Court weakened 14th Amendment (Slaughterhouse Cases, Civil Rights Cases). Compromise of 1877: Hayes wins presidency, federal troops withdrawn from South. "Redeemer" Democrats restore white supremacy. Sharecropping, convict leasing, Jim Crow began.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'The Emancipation Proclamation (1863) was significant primarily because:',
          choices: [
            QuizChoice(text: 'It immediately freed all enslaved people in the United States', isCorrect: false),
            QuizChoice(
              text:
                  'It transformed the Civil War into a war against slavery, preventing European recognition of the Confederacy and allowing Black men to enlist',
              isCorrect: true,
              explanation:
                  'B is correct. The Proclamation only freed enslaved people in rebel states (not border states), and was unenforceable in Confederate territory. Its true significance: it changed the war\'s ideological stakes to include freedom, made European support for the Confederacy politically impossible, and opened the door for 180,000+ Black soldiers to fight for the Union.',
            ),
            QuizChoice(
              text: 'It gave formerly enslaved people full citizenship and voting rights',
              isCorrect: false,
            ),
            QuizChoice(
              text: 'It ended the war by convincing Confederate states to rejoin the Union',
              isCorrect: false,
            ),
          ],
        ),
        QuizQuestion(
          question: 'Reconstruction ended primarily because:',
          choices: [
            QuizChoice(
              text: 'All formerly enslaved people had achieved economic and political equality',
              isCorrect: false,
            ),
            QuizChoice(
              text:
                  'The Compromise of 1877 withdrew federal troops, allowing Southern "Redeemer" governments to dismantle Black political gains through terror and law',
              isCorrect: true,
              explanation:
                  'B is correct. The Compromise of 1877 resolved the disputed Hayes-Tilden election by giving Hayes the presidency in exchange for withdrawing federal troops from the South. Without federal enforcement, Ku Klux Klan violence, poll taxes, grandfather clauses, and literacy tests effectively ended Black political participation for decades.',
            ),
            QuizChoice(text: 'The Supreme Court ruled Reconstruction unconstitutional', isCorrect: false),
            QuizChoice(
              text: 'President Grant ended federal involvement to focus on western expansion',
              isCorrect: false,
            ),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 6 (1865–1898) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 6 (1865–1898) — Gilded Age & Industrialization',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Industrial Revolution (2nd)',
          body:
              'Steel (Bessemer process), railroads, oil (Rockefeller/Standard Oil), electricity (Edison), telephone (Bell). Robber Barons vs. Captains of Industry debate. Trusts and monopolies. Social Darwinism justified inequality.',
        ),
        ContentCardData(
          title: 'Labor Movement',
          body:
              'Knights of Labor (all workers), AFL (Gompers — skilled workers, bread-and-butter unionism). Homestead Strike (1892), Pullman Strike (1894 — Debs, federal injunction). Child labor, 12-hour days, unsafe conditions.',
        ),
        ContentCardData(
          title: 'Gilded Age Politics',
          body:
              'Political machines (Tammany Hall — Tweed). Pendleton Civil Service Act (1883) — merit system. Farmers: Grange Movement → Populist Party (People\'s Party) 1892 — William Jennings Bryan, free silver, graduated income tax, direct election of senators.',
        ),
        ContentCardData(
          title: 'New South & Jim Crow',
          body:
              'Plessy v. Ferguson (1896) — "separate but equal." Sharecropping, convict leasing. Ida B. Wells (anti-lynching). Booker T. Washington (accommodation, Atlanta Compromise) vs. W.E.B. Du Bois (civil rights NOW, Talented Tenth).',
        ),
        ContentCardData(
          title: 'Western Expansion',
          body:
              'Homestead Act (1862). Transcontinental Railroad (1869). Destruction of buffalo. Dawes Act (1887) — assimilation, allotment of reservation lands, destroyed tribal sovereignty. Ghost Dance. Wounded Knee (1890). Frederick Jackson Turner\'s Frontier Thesis (1893).',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'Plessy v. Ferguson (1896) is most significant because:',
          choices: [
            QuizChoice(text: 'It ended racial segregation in public schools', isCorrect: false),
            QuizChoice(
              text:
                  'It established the "separate but equal" doctrine, providing constitutional justification for Jim Crow segregation for 58 years',
              isCorrect: true,
              explanation:
                  'B is correct. Plessy held that "separate but equal" facilities were constitutional under the 14th Amendment. This ruling validated Jim Crow laws across the South and remained law until Brown v. Board of Education (1954). Justice Harlan\'s dissent — calling the Constitution "color-blind" — became the basis for the later civil rights argument.',
            ),
            QuizChoice(text: 'It gave formerly enslaved people full voting rights', isCorrect: false),
            QuizChoice(text: 'It declared the Civil Rights Act of 1875 constitutional', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The Populist (People\'s) Party of the 1890s primarily represented:',
          choices: [
            QuizChoice(text: 'Urban factory workers seeking higher wages', isCorrect: false),
            QuizChoice(
              text:
                  'Farmers and debtors seeking to address economic inequality through government intervention — free silver, graduated income tax, railroad regulation',
              isCorrect: true,
              explanation:
                  'B is correct. Populists were mostly Southern and Western farmers crushed by falling crop prices, high railroad rates, and tight credit. Their platform — free coinage of silver (inflation to help debtors), direct election of senators, graduated income tax — challenged Gilded Age laissez-faire orthodoxy. Many Populist ideas were later adopted by Progressives.',
            ),
            QuizChoice(text: 'Industrialists seeking protective tariffs', isCorrect: false),
            QuizChoice(text: 'Progressive middle-class reformers', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 7 (1890–1945) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 7 (1890–1945) — Progressivism through WWII',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Progressive Era (1900–1920)',
          body:
              'Muckrakers: Upton Sinclair (The Jungle), Ida Tarbell (Standard Oil), Jacob Riis (How the Other Half Lives). Reforms: Pure Food & Drug Act, Sherman Antitrust Act enforcement (TR), 16th (income tax), 17th (direct Senate election), 18th (Prohibition), 19th (women\'s suffrage) Amendments.',
        ),
        ContentCardData(
          title: 'WWI & its Aftermath',
          body:
              'US neutral 1914–17. Zimmermann Telegram + unrestricted submarine warfare → US enters 1917. Wilson\'s 14 Points, League of Nations. Senate rejected League (isolationism). Red Scare, Palmer Raids. Nativist backlash: Emergency Quota Act (1921), National Origins Act (1924).',
        ),
        ContentCardData(
          title: '1920s',
          body:
              'Harlem Renaissance (Langston Hughes, Zora Neale Hurston). Great Migration of Black Americans North. Jazz Age. Consumerism (installment buying, automobiles). Fundamentalism vs. Modernism (Scopes Trial 1925). KKK revival. Women\'s changed roles.',
        ),
        ContentCardData(
          title: 'Great Depression & New Deal',
          body:
              'Stock market crash 1929. Hoover\'s "voluntarism" failed. FDR\'s New Deal: relief, recovery, reform. CCC, TVA, FDIC, Social Security Act (1935), Wagner Act (NLRA). Conservative opposition: "court-packing" plan failed. New Deal coalition: labor unions, urban immigrants, Black Americans, Solid South.',
        ),
        ContentCardData(
          title: 'WWII',
          body:
              'US "Arsenal of Democracy" — Lend-Lease. Pearl Harbor (Dec 7, 1941) → full entry. Japanese American internment (Korematsu v. US 1944). Double V Campaign. Atomic bombs: Hiroshima/Nagasaki (Aug 1945). Holocaust. UN founded. Beginning of Cold War.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'The National Origins Act of 1924 most directly reflected:',
          choices: [
            QuizChoice(text: 'American commitment to democratic values', isCorrect: false),
            QuizChoice(
              text:
                  'Nativist and racist anxieties about immigration from Southern and Eastern Europe and total exclusion of Asian immigration',
              isCorrect: true,
              explanation:
                  'B is correct. The National Origins Act set quotas based on 1890 census data (before mass Southern/Eastern European immigration) to drastically limit "undesirable" immigrants from Italy, Poland, Russia, and other countries. It completely barred immigration from Asia. This was overtly nativist and racist legislation.',
            ),
            QuizChoice(text: 'Economic need for more labor', isCorrect: false),
            QuizChoice(text: 'Progressive reform of the immigration system', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Roosevelt\'s New Deal most significantly changed American life by:',
          choices: [
            QuizChoice(text: 'Completely ending the Great Depression', isCorrect: false),
            QuizChoice(
              text:
                  'Establishing the principle that the federal government had responsibility for citizens\' economic well-being and creating lasting social safety net programs',
              isCorrect: true,
              explanation:
                  'B is correct. The New Deal did not end the Depression (WWII did), but it permanently changed the relationship between citizens and the federal government. Social Security, FDIC, SEC, and labor rights created a social safety net and regulatory framework that survived despite conservative opposition.',
            ),
            QuizChoice(text: 'Nationalizing major industries', isCorrect: false),
            QuizChoice(text: 'Balancing the federal budget', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 8 (1945–1980) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 8 (1945–1980) — Cold War & Civil Rights',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Cold War Origins',
          body:
              'USSR vs. USA: ideological conflict (communism vs. capitalism/democracy). Truman Doctrine (1947): contain communism. Marshall Plan (1948): rebuild Europe. NATO (1949). Korean War (1950–53): limited war, 38th parallel.',
        ),
        ContentCardData(
          title: 'Civil Rights Movement',
          body:
              'Brown v. Board (1954) — "separate but equal" unconstitutional. Montgomery Bus Boycott (1955–56) — King, nonviolent direct action. Sit-ins (Greensboro 1960), Freedom Rides, March on Washington (1963 — "I Have a Dream"), Civil Rights Act (1964), Voting Rights Act (1965). Malcolm X: Black nationalism. Black Power movement.',
        ),
        ContentCardData(
          title: 'Great Society & Liberal Consensus',
          body:
              'LBJ: Medicare/Medicaid, Voting Rights Act, Immigration Act (1965), War on Poverty. Warren Court: Gideon, Miranda, Roe v. Wade (1973). New Left: SDS, antiwar movement. Second-wave feminism: NOW, ERA, Roe v. Wade.',
        ),
        ContentCardData(
          title: 'Vietnam & Counterculture',
          body:
              'Gulf of Tonkin Resolution (1964) — escalation. Tet Offensive (1968) — turned public opinion. Pentagon Papers. Kent State (1970). Nixon\'s "Vietnamization." Fall of Saigon (1975). Counterculture: hippies, anti-war protests, sexual revolution, environmental movement (Earth Day 1970, EPA created).',
        ),
        ContentCardData(
          title: 'Nixon & Détente',
          body:
              'Nixon: opened China (1972), SALT I (détente with USSR), EPA, wage/price controls. Watergate (1972–74) — cover-up, Saturday Night Massacre, resignation. Ford pardons Nixon. Carter: Camp David Accords, Iran hostage crisis, energy crisis → Reagan Revolution.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'The Civil Rights Act of 1964 was most directly a result of:',
          choices: [
            QuizChoice(text: 'President Eisenhower\'s commitment to racial equality', isCorrect: false),
            QuizChoice(
              text:
                  'Decades of nonviolent direct action, legal challenges, and mass protest organized by civil rights activists that forced legislative action',
              isCorrect: true,
              explanation:
                  'B is correct. The Civil Rights Act resulted from sustained organizing: the Montgomery Bus Boycott, sit-ins, Freedom Rides, Birmingham campaign (Bull Connor\'s fire hoses shocked the nation), and the March on Washington. LBJ pushed it through Congress after JFK\'s assassination, using Kennedy\'s martyrdom and the pressure of visible injustice.',
            ),
            QuizChoice(text: 'A Supreme Court ruling requiring congressional action', isCorrect: false),
            QuizChoice(text: 'International pressure from Cold War allies', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The Tet Offensive (1968) was a turning point in the Vietnam War primarily because:',
          choices: [
            QuizChoice(text: 'It was a massive military victory for North Vietnam', isCorrect: false),
            QuizChoice(
              text:
                  'Despite being a military setback for North Vietnam, it destroyed American public credibility in the government\'s claim that the war was being won',
              isCorrect: true,
              explanation:
                  'B is correct. The Tet Offensive was militarily defeated by the US, but it shocked Americans who had been told the war was nearly won. Walter Cronkite called it a "stalemate." LBJ\'s approval ratings collapsed and he chose not to run for re-election. It is a classic example of how military success and political/psychological outcomes can diverge.',
            ),
            QuizChoice(text: 'It caused the US to immediately withdraw from Vietnam', isCorrect: false),
            QuizChoice(text: 'It led to a formal declaration of war by Congress', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 9 (1980–Present) ────────────────────────────────────────────────
  Unit(
    title: 'Period 9 (1980–Present) — Conservative Revolution & 21st Century',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Reagan Revolution',
          body:
              'Reagan (1981–89): tax cuts (Reaganomics/supply-side), deregulation, anti-communism (Reagan Doctrine — funding anti-communist movements), "Morning in America." Deficit spending soared. AIDS crisis. Iran-Contra affair. Conservative coalition: Moral Majority, Sun Belt.',
        ),
        ContentCardData(
          title: 'End of Cold War',
          body:
              'Reagan arms buildup pressured USSR. Gorbachev: glasnost, perestroika. Fall of Berlin Wall (1989). Soviet Union dissolved (1991). Gulf War (1991) — limited war, US-led coalition expelled Iraq from Kuwait. "New World Order."',
        ),
        ContentCardData(
          title: '1990s–2000s',
          body:
              'Clinton: NAFTA, welfare reform, balanced budget, Monica Lewinsky scandal, impeachment. George W. Bush: 9/11 (2001) → War on Terror, Afghanistan War, Iraq War (WMD controversy), Patriot Act, Homeland Security. Hurricane Katrina (2005) — government failure.',
        ),
        ContentCardData(
          title: 'Obama–Trump Era',
          body:
              'Obama (2009–17): ACA ("Obamacare"), economic recovery (Great Recession 2008), Dodd-Frank, same-sex marriage (Obergefell 2015), Iran nuclear deal. Trump (2017–21): Tax Cuts and Jobs Act, immigration restrictions, Jan 6 (2021), two impeachments. Polarization, social media\'s political role.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'Reagan\'s economic policy ("Reaganomics") was primarily based on the theory that:',
          choices: [
            QuizChoice(text: 'Taxing the wealthy heavily would fund programs for the poor', isCorrect: false),
            QuizChoice(
              text:
                  'Cutting taxes on corporations and the wealthy ("supply-side economics") would stimulate growth that would "trickle down" to benefit all Americans',
              isCorrect: true,
              explanation:
                  'B is correct. Supply-side ("trickle-down") economics held that tax cuts for businesses and high-income earners would spur investment and growth, benefiting everyone. Critics noted the federal deficit tripled under Reagan. This debate over taxation and economic inequality remains a major fault line in American politics.',
            ),
            QuizChoice(
              text: 'Government spending on infrastructure was the key to economic growth',
              isCorrect: false,
            ),
            QuizChoice(text: 'Balanced budgets should be the government\'s top priority', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'The September 11, 2001 attacks most directly led to:',
          choices: [
            QuizChoice(text: 'An immediate withdrawal from Afghanistan', isCorrect: false),
            QuizChoice(
              text:
                  'The invasion of Afghanistan, the USA PATRIOT Act, creation of the Department of Homeland Security, and the Iraq War based on contested intelligence about WMDs',
              isCorrect: true,
              explanation:
                  'B is correct. 9/11 fundamentally reshaped American foreign and domestic policy. The "War on Terror" framing led to Afghanistan (2001), Iraq (2003), expanded surveillance (Patriot Act), and a new cabinet department. The Iraq War\'s justification (WMDs that weren\'t found) later generated major controversy about intelligence and executive power.',
            ),
            QuizChoice(text: 'A formal declaration of war by Congress against Al-Qaeda', isCorrect: false),
            QuizChoice(text: 'A national consensus supporting isolationism', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'HIPP sourcing = Historical situation, Intended audience, Purpose, Point of view — required for 2 documents in DBQ',
        'Contextualization ≠ intro sentence — must be a developed paragraph connecting broader history to the prompt\'s time frame',
        'DBQ thesis must establish a LINE OF REASONING — not just take a position, but explain HOW/WHY',
        'Complexity point requires genuine sophistication: corroboration, qualification, modification, or connecting across time/space',
        'SAQ "explain" tasks require a sentence PLUS reasoning — "because" or "therefore" statements',
        'Bacon\'s Rebellion (1676) → shift from indentured servants to enslaved labor in Virginia',
        'Compromise of 1877 ended Reconstruction — federal troops withdrew, Jim Crow began',
        'New Deal permanently established federal responsibility for economic welfare — did NOT end Depression (WWII did)',
        'Tet Offensive (1968) was a US military victory but a psychological/political defeat — turning point in Vietnam',
        'Brown v. Board (1954) overturned Plessy v. Ferguson (1896) — "separate but equal" unconstitutional',
      ]),
    ],
  ),
];
