// lib/data/content/apworld_content.dart
//
// Full content tree for AP World History: Modern — transcribed from apworld.html.
// 5 Unit objects: P1–P4 + SPICE-T Themes.
// All content is typed const data — zero dynamic dispatch at render time.

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> apworldUnits = [
  // ── Period 1 (1200–1450) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 1 (1200–1450) — Trade Networks & Land-Based Empires',
    blocks: [
      DataTableBlock(
        headers: ['Network', 'Region', 'Key Goods', 'Cultural Diffusion'],
        rows: [
          [
            'Silk Roads',
            'Eurasia overland',
            'Silk, spices, paper, gunpowder, horses',
            'Buddhism, Islam, plague (Black Death 1347), technology',
          ],
          [
            'Indian Ocean',
            'East Africa → India → SE Asia → China',
            'Spices, textiles, porcelain, ivory, gold',
            'Islam spread via merchants; monsoon navigation',
          ],
          [
            'Trans-Saharan',
            'N. Africa ↔ Sub-Saharan Africa',
            'Gold, salt, enslaved people, kola nuts',
            'Islam spread; Mali/Songhai rise on gold-salt trade',
          ],
          [
            'Mediterranean',
            'Europe, N. Africa, Middle East',
            'Grain, wine, olive oil, manufactured goods',
            'Crusades; Italian city-states; Byzantine legacy',
          ],
        ],
      ),
      CardRowBlock([
        ContentCardData(
          title: 'Mongol Empire',
          body:
              'Largest contiguous land empire. Pax Mongolica enabled trade. Destroyed Baghdad (1258). Spread Black Death westward. Adopted local cultures (Yuan China, Ilkhanate Islam).',
        ),
        ContentCardData(
          title: 'Mali Empire',
          body:
              'Mansa Musa\'s hajj (1324) — displayed enormous wealth, destabilized Mediterranean gold prices. Timbuktu = Islamic learning center. Built on gold-salt trade.',
        ),
        ContentCardData(
          title: 'Song China',
          body:
              'Champa rice (↑food supply). Gunpowder, printing, compass. Paper money. Eventually conquered by Mongols (Yuan 1271).',
        ),
        ContentCardData(
          title: 'Aztec & Inca',
          body:
              'Aztec: chinampas, tribute system, Tenochtitlan. Inca: mit\'a labor, quipus, road network. Both fell rapidly to Spanish — disease + internal divisions.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'The Mongol Empire most directly contributed to which development?',
          choices: [
            QuizChoice(text: 'Spread of Christianity across Asia', isCorrect: false),
            QuizChoice(
              text: 'Pax Mongolica enabling trade AND spread of the Black Death along Silk Road routes',
              isCorrect: true,
              explanation:
                  'B is correct. The Mongol peace (Pax Mongolica) allowed unprecedented trade across Eurasia. However, the same Silk Roads that carried goods also carried the plague. The Black Death spread westward along Mongol trade routes, killing an estimated 1/3 of Europe\'s population.',
            ),
            QuizChoice(text: 'Development of oceanic trade routes', isCorrect: false),
            QuizChoice(text: 'End of the Islamic Caliphates', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 2 (1450–1750) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 2 (1450–1750) — Exploration, Conquest & Gunpowder Empires',
    blocks: [
      CalloutBlock(
        title: 'Columbian Exchange Effects',
        items: [
          'Old World → Americas: Horses, cattle, pigs, wheat, sugarcane, smallpox, measles (devastated indigenous populations — up to 90% in some regions)',
          'Americas → Old World: Potatoes, maize, tomatoes, cacao, tobacco, silver (destabilized Spanish and Chinese economies)',
          'Silver: Potosí mines funded Spanish empire; silver flowed to China (required for taxes) → global trade networks',
          'Atlantic Slave Trade: ~12.5 million Africans transported; ~2 million died in Middle Passage. Replaced indigenous labor. Created plantation economy in Americas.',
        ],
      ),
      DataTableBlock(
        headers: ['Empire', 'Region', 'Religion', 'Key Feature', 'Decline'],
        rows: [
          [
            'Ottoman',
            'Middle East, N. Africa, SE Europe',
            'Sunni Islam',
            'Devshirme, janissaries, millet system; Fall of Constantinople 1453',
            'Military stagnation vs. Europe; nationalism',
          ],
          [
            'Safavid',
            'Persia (Iran)',
            'Shia Islam',
            'Constant conflict with Ottomans; Persian culture; Isfahan',
            'Afghan invasion 1722',
          ],
          [
            'Mughal',
            'Indian subcontinent',
            'Sunni Islam ruling Hindu majority',
            'Akbar\'s religious tolerance; Taj Mahal; Aurangzeb\'s intolerance → revolt',
            'British East India Company',
          ],
          [
            'Qing China',
            'East Asia',
            'Confucianism/Buddhism',
            'Manchu conquest 1644; Silver economy; Tributary system',
            'Opium Wars; 1912 fall',
          ],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'The Atlantic slave trade was MOST directly connected to:',
          choices: [
            QuizChoice(text: 'The Columbian Exchange', isCorrect: false),
            QuizChoice(
              text:
                  'The demand for labor on New World plantations after indigenous population collapsed',
              isCorrect: true,
              explanation:
                  'B is correct. The primary driver of the Atlantic slave trade was plantation agriculture (sugar, tobacco, cotton, rice) in the Americas that required massive labor. Indigenous populations had been devastated by disease. Enslaved Africans became the "solution" to this labor shortage.',
            ),
            QuizChoice(text: 'Portuguese exploration of African coasts', isCorrect: false),
            QuizChoice(text: 'The fall of the Aztec Empire', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 3 (1750–1900) ───────────────────────────────────────────────────
  Unit(
    title: 'Period 3 (1750–1900) — Revolutions, Industrialization & Imperialism',
    blocks: [
      DataTableBlock(
        headers: ['Revolution', 'Key Causes', 'Key Outcomes', 'Global Impact'],
        rows: [
          [
            'American (1776)',
            'Enlightenment ideas; "No taxation without representation"',
            'Republic; Constitution; limited democracy',
            'Model for later revolutions; weakened mercantilism',
          ],
          [
            'French (1789)',
            'Enlightenment; bankruptcy; food crisis; class inequality',
            'Abolition of feudalism; Terror; Napoleon',
            'Spread liberal/nationalist ideals; changed European diplomacy',
          ],
          [
            'Haitian (1791)',
            'Slavery; Enlightenment; slave revolt under Toussaint',
            'First Black republic; abolished slavery',
            'Terrified slaveholders globally; slowed French colonialism',
          ],
          [
            'Latin American (1810s–20s)',
            'Enlightenment; Napoleon weakened Spain; creole resentment',
            'Independence (Bolívar, San Martín)',
            'New nations struggled with inequality, caudillo rule',
          ],
          [
            'Industrial (Britain 1760s+)',
            'Coal, iron, enclosure movement, colonial markets',
            'Factory system; urbanization; middle class',
            'Changed global power balance — industrial nations dominate',
          ],
        ],
      ),
      CardRowBlock([
        ContentCardData(
          title: 'Motives (MEN)',
          body:
              'Markets & raw materials. European nationalism & competition. National pride + "civilizing mission" (Social Darwinism). Also: strategic bases, missionary activity.',
        ),
        ContentCardData(
          title: 'Scramble for Africa',
          body:
              'Berlin Conference (1884–85): Europeans divide Africa without African input. By 1914: only Ethiopia (Adwa 1896) and Liberia independent. Colonial economies extract raw materials.',
        ),
        ContentCardData(
          title: 'Responses to Imperialism',
          body:
              'Sepoy Mutiny (India 1857) → direct crown control. Boxer Rebellion (China 1900) — anti-foreign uprising. Meiji Japan: successful modernization to resist imperialism. Ethiopia: defeated Italy at Adwa (1896).',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'The Haitian Revolution (1791–1804) was significant primarily because:',
          choices: [
            QuizChoice(text: 'It inspired the French Revolution', isCorrect: false),
            QuizChoice(
              text:
                  'It was the only successful slave revolution resulting in an independent Black republic',
              isCorrect: true,
              explanation:
                  'B is correct. Haiti became the first Black republic in history and the first free nation in the Caribbean. Enslaved people under Toussaint L\'Ouverture defeated Napoleon\'s army. Slaveholders across the Atlantic were terrified by the precedent.',
            ),
            QuizChoice(text: 'It established democratic elections in the Caribbean', isCorrect: false),
            QuizChoice(text: 'It led to the abolition of slavery throughout the Americas', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Period 4 (1900–Present) ────────────────────────────────────────────────
  Unit(
    title: 'Period 4 (1900–Present) — World Wars, Cold War & Globalization',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'WWI (1914–1918)',
          body:
              'MAIN: Militarism, Alliances, Imperialism, Nationalism. ~20 million dead. Collapse of Ottoman, Austro-Hungarian, Russian, German empires. Sykes-Picot divided Middle East. Treaty of Versailles → seeds of WWII.',
        ),
        ContentCardData(
          title: 'WWII (1939–1945)',
          body:
              'Rise of fascism. Holocaust — 6 million Jews + millions others. ~70–85 million dead. Atomic bombs on Japan. Decolonization accelerates. Cold War begins. UN founded.',
        ),
        ContentCardData(
          title: 'Cold War',
          body:
              'US (capitalism) vs. USSR (communism). Truman Doctrine; Marshall Plan; NATO vs. Warsaw Pact. Proxy wars: Korea, Vietnam, Angola, Afghanistan. Non-Aligned Movement.',
        ),
        ContentCardData(
          title: 'Decolonization',
          body:
              'India (1947) — Gandhi\'s nonviolence; Partition. Africa (1950s–70s) — "Wind of Change." Artificial colonial borders → conflict. Cold War superpowers compete for influence.',
        ),
      ]),
      QuizBlock([
        QuizQuestion(
          question: 'Decolonization after WWII was MOST directly caused by:',
          choices: [
            QuizChoice(text: 'United Nations pressure on European powers', isCorrect: false),
            QuizChoice(
              text:
                  'A combination of nationalist movements within colonies, weakened European powers, and Cold War pressure on democracy\'s credibility',
              isCorrect: true,
              explanation:
                  'B is correct. Decolonization resulted from multiple forces: nationalist movements (Gandhi, Nkrumah), weakened European powers after WWII, Cold War ideological pressure (US couldn\'t support colonialism and claim to champion freedom), and economic costs of maintaining empires.',
            ),
            QuizChoice(text: 'American support for independence movements', isCorrect: false),
            QuizChoice(text: 'Economic prosperity making colonies unnecessary', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── SPICE-T Themes ─────────────────────────────────────────────────────────
  Unit(
    title: 'SPICE-T Themes & Essay Strategy',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'S — Social',
          body:
              'Class, gender, family, ethnic/racial groups. How societies organize relationships and hierarchies.',
        ),
        ContentCardData(
          title: 'P — Political',
          body:
              'States, governments, empires, revolutions, nationalism. How power is organized and contested.',
        ),
        ContentCardData(
          title: 'I — Interactions',
          body: 'Trade, migration, warfare, diplomacy, environment-human interactions.',
        ),
        ContentCardData(
          title: 'C — Culture',
          body: 'Belief systems, religion, philosophy, art, science. How ideas spread and change.',
        ),
        ContentCardData(
          title: 'E — Economy',
          body: 'Agriculture, labor, trade, industrialization. Production and exchange of goods.',
        ),
        ContentCardData(
          title: 'T — Technology',
          body: 'Innovations in agriculture, military, communication, transportation.',
        ),
      ]),
      CalloutBlock(
        title: 'DBQ/LEQ Essay Strategy',
        items: [
          'Thesis: Make a historically defensible claim with a line of reasoning — HOW and WHY, not just what.',
          'Contextualization: Describe broader historical context BEFORE the prompt\'s time frame — a full developed paragraph.',
          'HAPP Sourcing: For 2+ documents, explain how Historical situation, Audience, Purpose, or Point of view affects the argument.',
          'Complexity: Connect to another period, geographic area, or demonstrate nuanced causation.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Contextualization in the AP World DBQ requires:',
          choices: [
            QuizChoice(text: 'A brief mention of earlier events in your introduction', isCorrect: false),
            QuizChoice(
              text:
                  'A developed description of broader historical context that CONNECTS to the prompt — more than a phrase',
              isCorrect: true,
              explanation:
                  'B is correct. Contextualization must be a developed paragraph (not just a sentence) describing the broader context — events, developments, or processes BEFORE the prompt\'s time frame — AND connecting that context to your argument. A throwaway sentence earns nothing.',
            ),
            QuizChoice(text: 'Identifying the historical period of each document', isCorrect: false),
            QuizChoice(text: 'Citing secondary sources', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'Columbian Exchange: Disease killed up to 90% indigenous → labor shortage → Atlantic slave trade',
        'Silver: Potosí silver flowed Spain → global trade networks → China\'s silver-based economy',
        'Gunpowder empires all used military technology to consolidate large territories',
        'Meiji Japan = successful modernization in response to imperialism',
        'Haitian Revolution = first Black republic, only successful slave revolution',
        'Berlin Conference (1884): Europeans divided Africa without African input',
        'SPICE-T: Social, Political, Interactions, Culture, Economy, Technology',
        'Contextualization = developed paragraph, not a phrase',
        'HAPP sourcing for DBQ = Historical situation, Audience, Purpose, Point of view',
        'Complexity point: connect to another period, region, or demonstrate nuanced causation',
      ]),
    ],
  ),
];
