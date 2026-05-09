// lib/data/content/arthistory_content.dart
//
// AP Art History — 4 units transcribed from arthistory.html
// Accent: #c9a84c (gold)

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> arthistoryUnits = [
  // ── Unit 1: OPTIC & Contextual Lenses ───────────────────────────────────
  Unit(
    title: 'OPTIC & Contextual Lenses',
    blocks: [
      CalloutBlock(
        title: 'OPTIC \u2014 Use for Any Work of Art',
        items: [
          'O \u2014 Overview: First impression. What is the overall subject? What do you notice first?',
          'P \u2014 Parts: What specific elements are present? Figure placement, architecture, objects, symbols. Left to right, foreground to background.',
          'T \u2014 Title: What does the title tell you? Does it confirm or complicate what you see?',
          'I \u2014 Interrelationships: How do the parts relate to each other? What creates unity, tension, or hierarchy? How do line, color, scale, and composition guide the viewer\u2019s eye?',
          'C \u2014 Conclusion: What is the work\u2019s meaning or purpose? What does the formal analysis reveal about the work\u2019s cultural, religious, or political function?',
        ],
      ),
      DataTableBlock(
        headers: ['Lens', 'Questions to Ask', 'Example Application'],
        rows: [
          ['Formal Analysis', 'What visual elements create meaning? Line, color, scale, composition, perspective.', 'How does the diagonal composition of Las Meninas create ambiguity about the viewer\u2019s role?'],
          ['Historical Context', 'What events, power structures, or ideas shaped this work?', 'How does Jacques-Louis David\u2019s Napoleon convey Napoleonic propaganda?'],
          ['Cultural Context', 'What beliefs, values, and practices does this reflect?', 'How do the proportions of the Seated Scribe reflect Egyptian conventions of idealism and hierarchy?'],
          ['Patron & Function', 'Who commissioned it? What was it for? Where was it displayed?', 'How does the Ara Pacis Augustae serve Augustus\u2019s political agenda?'],
          ['Audience & Reception', 'Who saw it? How would they have experienced or interpreted it?', 'How did Counter-Reformation Catholics experience Caravaggio\u2019s naturalistic saints?'],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'The \u2018patron\u2019 contextual lens in AP Art History primarily asks:',
          choices: [
            QuizChoice(text: 'A) What the work looks like formally', isCorrect: false),
            QuizChoice(text: 'B) What cultural beliefs the work reflects', isCorrect: false),
            QuizChoice(
              text: 'C) Who commissioned the work and for what purpose or function',
              isCorrect: true,
              explanation: 'C is correct. The patron lens examines the relationship between who funded/commissioned a work and how that relationship shaped its content, style, and placement. The Sistine Chapel ceiling was commissioned by Pope Julius II \u2014 understanding papal power and the political relationship with Michelangelo is essential context.',
            ),
            QuizChoice(text: 'D) How audiences today interpret the work', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 2: Prehistoric through Renaissance ──────────────────────────────
  Unit(
    title: 'Prehistoric through Renaissance',
    blocks: [
      DataTableBlock(
        headers: ['Work', 'Date/Location', 'Key Features', 'Significance'],
        rows: [
          ['Cave paintings, Lascaux', '~17,000 BCE, France', 'Naturalistic animals; ochre/charcoal; varied scale', 'Earliest known narrative art; possible shamanistic purpose'],
          ['Great Pyramids, Giza', '~2550\u20132490 BCE, Egypt', 'Mortuary complex; precise geometry; Ka statues', 'Power of pharaoh; afterlife beliefs; labor organization'],
          ['Parthenon, Athens', '447\u2013432 BCE, Greece', 'Doric order; entasis; Pheidias sculptures; Panathenaic procession frieze', 'Classical idealism; civic religion; Athenian democracy and empire'],
          ['Augustus of Prima Porta', '~20 BCE, Rome', 'Contrapposto; idealized portrait; cupid at foot; Hellenistic armor', 'Imperial propaganda: Augustus as divinely ordained ruler'],
          ['Pantheon, Rome', '118\u2013125 CE', 'Perfect sphere interior; oculus; coffered dome; concrete', 'Engineering mastery; cosmic symbolism; influence on Western architecture'],
          ['Chi Rho Page, Book of Kells', 'c. 800 CE, Ireland', 'Interlace; zoomorphic forms; gold leaf; no perspective', 'Hiberno-Saxon Christian manuscript illumination; sacred text as art object'],
          ['Bayeux Tapestry', '1066\u20131082 CE, Normandy', 'Embroidered narrative; Latin captions; secular subject', 'Norman conquest narrative; unique secular medieval work'],
          ['Lamentation (Piet\u00e0), Giotto', 'c. 1305, Padua', '3D space illusion; emotional figures; foreshortening', 'Proto-Renaissance turn toward naturalism and human emotion'],
        ],
      ),
      DataTableBlock(
        headers: ['Work', 'Date/Artist', 'Key Features', 'Significance'],
        rows: [
          ['Baptistry Doors (Gates of Paradise)', '1425\u20131452, Ghiberti', 'Linear perspective; narrative relief; gilded bronze', 'Early Renaissance mastery of perspective and illusionism in sculpture'],
          ['Birth of Venus', 'c. 1484\u20131486, Botticelli', 'Classical nude; mythological subject; idealized beauty; flat space', 'Medici neoplatonism; rebirth of classical mythology in art'],
          ['David', '1501\u20131504, Michelangelo', 'Contrapposto; colossal scale; marble; pre-battle tension', 'Florentine civic pride; Renaissance humanism \u2014 man as ideal; David as emblem of republic vs. tyranny'],
          ['Sistine Chapel Ceiling', '1508\u20131512, Michelangelo', 'Fresco; nine Genesis scenes; Sibyls/Prophets; ignudi', 'Pope Julius II commission; most ambitious fresco program ever; Creation of Adam'],
          ['School of Athens', '1509\u20131511, Raphael', 'Fresco; one-point perspective; Plato/Aristotle center; Greek philosophers', 'Humanist synthesis; Plato pointing up (ideals) vs. Aristotle pointing down (empiricism)'],
          ['Calling of Saint Matthew', '1599\u20131600, Caravaggio', 'Tenebrism; ordinary people as biblical figures; beam of light', 'Counter-Reformation naturalism; dramatic light makes sacred immediate; rejected by patrons initially'],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'The Parthenon\u2019s use of entasis (slight column bulge) most directly demonstrates:',
          choices: [
            QuizChoice(text: 'A) Egyptian influence on Greek architecture', isCorrect: false),
            QuizChoice(
              text: 'B) Purposeful optical refinements to prevent the illusion of sagging lines \u2014 the Greek pursuit of ideal visual perfection',
              isCorrect: true,
              explanation: 'B is correct. Entasis and other \u2018refinements\u2019 (slightly curved stylobate, columns that tilt inward) corrected visual distortions the human eye would perceive if columns were perfectly straight. This reveals the Greek commitment to creating a work that looks perfect, not merely is perfect.',
            ),
            QuizChoice(text: 'C) The limits of Greek engineering', isCorrect: false),
            QuizChoice(text: 'D) Roman influence', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Caravaggio\u2019s tenebrism was a deliberate rejection of which Renaissance ideal?',
          choices: [
            QuizChoice(text: 'A) Symmetry', isCorrect: false),
            QuizChoice(
              text: 'B) Idealization \u2014 he replaced idealized figures with recognizable working-class models, making sacred subjects feel immediate and present',
              isCorrect: true,
              explanation: 'B is correct. Caravaggio painted saints with dirty feet, using tavern workers as models. His Counter-Reformation patrons sometimes rejected these works as undignified. But his radical naturalism and dramatic lighting influenced virtually every European painter for the next century.',
            ),
            QuizChoice(text: 'C) Perspective', isCorrect: false),
            QuizChoice(text: 'D) Classical subject matter', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 3: 17th Century through Contemporary ────────────────────────────
  Unit(
    title: '17th Century through Contemporary',
    blocks: [
      DataTableBlock(
        headers: ['Work', 'Date/Artist', 'Movement', 'Significance'],
        rows: [
          ['The Oath of the Horatii', '1784, David', 'Neoclassicism', 'Republican virtue; stoic sacrifice over emotion; French Revolutionary context; linear clarity'],
          ['Third of May, 1808', '1814, Goya', 'Romanticism/Realism', 'Anti-war; Napoleonic atrocity; anonymous victim as universal martyr; predecessors to war photography'],
          ['A Bar at the Folies-Berg\u00e8re', '1882, Manet', 'Impressionism/Realism', 'Mirror ambiguity; commodification of women; modernity; the male gaze'],
          ['The Starry Night', '1889, van Gogh', 'Post-Impressionism', 'Expressive brushwork; emotional landscape; painted from asylum; personal vision over observation'],
          ['Les Demoiselles d\u2019Avignon', '1907, Picasso', 'Proto-Cubism', 'Multiple perspectives; African mask influence; fragmentation; rejection of perspective; challenges Western beauty standards'],
          ['The Persistence of Memory', '1931, Dal\u00ed', 'Surrealism', 'Unconscious/dream imagery; melting watches = time\u2019s subjectivity; Freudian symbolism'],
          ['Campbell\u2019s Soup Cans', '1962, Warhol', 'Pop Art', 'Mass production; consumer culture; blurs art/commercial boundary; seriality; questions what art is'],
          ['Fountain', '1917, Duchamp', 'Dada/Conceptual', 'Readymade; context defines art; most influential modern artwork; questions artworld authority'],
        ],
      ),
      DataTableBlock(
        headers: ['Movement', 'Period', 'Key Characteristics', 'Key Artists'],
        rows: [
          ['Neoclassicism', '1750\u20131820', 'Linear; rational; Classical subjects; civic virtue; clear lighting', 'David, Ingres'],
          ['Romanticism', '1800\u20131850', 'Emotion; nature\u2019s power; exotic; subjective experience', 'Goya, Delacroix, Friedrich'],
          ['Realism', '1840\u20131880', 'Everyday working-class subjects; rejected idealization', 'Courbet, Manet'],
          ['Impressionism', '1860\u20131890', 'Broken brushwork; light effects; outdoor painting; snapshot quality', 'Monet, Renoir, Degas'],
          ['Post-Impressionism', '1880\u20131910', 'Personal expression; structure; color theory; multiple styles', 'C\u00e9zanne, van Gogh, Gauguin, Seurat'],
          ['Cubism', '1907\u20131920', 'Multiple viewpoints simultaneously; fragmentation; geometric forms', 'Picasso, Braque'],
          ['Surrealism', '1920s\u20131940s', 'Unconscious; dreams; juxtaposition; Freudian imagery', 'Dal\u00ed, Magritte, Ernst'],
          ['Abstract Expressionism', '1940s\u20131950s', 'Gesture; pure emotion; non-representational; large scale', 'Pollock, de Kooning, Rothko'],
          ['Pop Art', '1950s\u20131970s', 'Commercial imagery; mass culture; irony; seriality', 'Warhol, Lichtenstein, Hockney'],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Marcel Duchamp\u2019s Fountain (1917) challenged the art world primarily by:',
          choices: [
            QuizChoice(text: 'A) Using a new painting technique', isCorrect: false),
            QuizChoice(
              text: 'B) Arguing through a readymade that context and concept, not craft, define art \u2014 the artist designates something as art',
              isCorrect: true,
              explanation: 'B is correct. Duchamp submitted a commercial urinal to an art exhibition, signed \u2018R. Mutt.\u2019 By removing the work of making and replacing it with the work of choosing and framing, he raised the fundamental question: what makes something art? This Dada gesture is arguably the most influential single act in 20th-century art.',
            ),
            QuizChoice(text: 'C) Depicting inappropriate subject matter', isCorrect: false),
            QuizChoice(text: 'D) Being too large for gallery display', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 4: Writing About Art ─────────────────────────────────────────────
  Unit(
    title: 'Writing About Art',
    blocks: [
      DataTableBlock(
        headers: ['FRQ Type', 'Task', 'Key Strategy'],
        rows: [
          ['Long Essay (30 min)', 'Analyze 1 or 2 works using formal analysis + contextual lenses', 'OPTIC first, then contextual lenses. Thesis connects formal choices to cultural meaning.'],
          ['Short Answer (10 min)', 'Identify, compare, or analyze a work in 3\u20135 sentences', 'Be specific: name medium, date, culture. One evidence per claim.'],
          ['Comparison FRQ', 'Compare 2 works \u2014 may be both known or one unknown', 'Structure: similarity (both) \u2192 difference (each) \u2192 significance (so what?)'],
        ],
      ),
      StepBoxBlock(
        title: 'Long Essay Strategy',
        steps: [
          'Read the prompt. Does it ask for formal analysis, contextual analysis, or both? Does it specify a lens (patron, function)?',
          'OPTIC the work quickly in your notes before writing anything.',
          'Thesis: Claim about how the formal choices serve the work\u2019s cultural, religious, or political function.',
          'Body paragraph 1: Formal analysis \u2192 connect each element to meaning.',
          'Body paragraph 2: Contextual lens (patron, historical context, audience) \u2192 deepen the formal analysis.',
          'Conclusion: What does this work tell us about its culture\u2019s values, beliefs, or power structures?',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'In an AP Art History comparison essay, the most important thing to establish after identifying similarities and differences is:',
          choices: [
            QuizChoice(text: 'A) Which work is more aesthetically pleasing', isCorrect: false),
            QuizChoice(
              text: 'B) The significance \u2014 what do the similarities and differences reveal about each work\u2019s cultural context, function, or meaning?',
              isCorrect: true,
              explanation: 'B is correct. Comparison without significance earns minimal credit. The \u2018so what?\u2019 is everything: if a Greek and Roman sculpture share contrapposto, what does that tell us about cultural transmission and adaptation? The AP reader is looking for interpretation, not inventory.',
            ),
            QuizChoice(text: 'C) The date each work was made', isCorrect: false),
            QuizChoice(text: 'D) The technique used', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'OPTIC: Overview, Parts, Title, Interrelationships, Conclusion \u2014 use for any work',
        '5 contextual lenses: Formal, Historical, Cultural, Patron/Function, Audience/Reception',
        'Entasis = deliberate optical correction in Greek columns',
        'Tenebrism (Caravaggio) = extreme light/dark contrast. Contrapposto = weight-bearing hip shift',
        'Duchamp\u2019s Fountain = most influential conceptual art gesture \u2014 readymade questions what art is',
        'Movements in order: Neoclassicism \u2192 Romanticism \u2192 Realism \u2192 Impressionism \u2192 Post-Imp \u2192 Cubism \u2192 Dada \u2192 Surrealism \u2192 AbEx \u2192 Pop',
        'Las Meninas: painter in painting + mirror = viewer implicated; questions representation and royal authority',
        'Bayeux Tapestry = EMBROIDERY not true tapestry \u2014 often tested',
        'Comparison essay: similarities \u2192 differences \u2192 SIGNIFICANCE',
        'Long essay thesis: connect formal choices to cultural, religious, or political function',
      ]),
    ],
  ),
];
