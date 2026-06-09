#!/usr/bin/env python3
"""
Five & A+ AP® Course Page Generator v2 (MCQ edition)
Usage:
  python generate_ap_content.py                         # all courses into ../site
  python generate_ap_content.py ap-biology              # one full course group
  python generate_ap_content.py bio college-algebra     # multiple course groups
  python generate_ap_content.py --dry-run               # print planned writes
  python generate_ap_content.py --output-dir path/site  # alternate site root
"""

import argparse
import hashlib
import importlib.util
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent
DEFAULT_OUTPUT_DIR = REPO_ROOT / 'site'
CONTENT_DIR = SCRIPT_DIR / 'ap_content'

sys.dont_write_bytecode = True

AP_DISCLAIMER = (
    'AP® and Advanced Placement® are trademarks registered by the College Board, '
    'which is not affiliated with, and does not endorse, this site. '
    'Five &amp; A+ is an independent educational resource and is not affiliated with, '
    'endorsed by, or sponsored by the College Board.'
)

DEFAULT_AP_FOCUS = {
    'skill': 'Course vocabulary, evidence, and exam-style reasoning',
    'unit': 'Before answering, name the topic, choose the evidence that proves it, and explain why the distractors miss the target.',
    'course': 'Move through the unit map first, then mix course-level questions so you practice switching topics under exam pressure.',
    'official': 'After each unit, pair this page with AP Daily videos, topic questions, or progress checks assigned in AP Classroom.',
}

AP_FOCUS_PROFILES = {
    'ap-art-history': {
        'skill': 'Visual evidence, attribution, and cultural context',
        'unit': 'For each work, connect form, function, material, and context before relying on memorized titles.',
        'course': 'Cycle through global traditions and compare works across place, patronage, function, and audience.',
        'official': 'Use official image-based practice to rehearse identification, visual analysis, and attribution writing.',
    },
    'ap-biology': {
        'skill': 'Mechanism, data interpretation, and claim-evidence-reasoning',
        'unit': 'State the biological mechanism, identify the variable or evidence, then connect it to the observed result.',
        'course': 'Mix molecular, cellular, organismal, and ecological questions so mechanisms stay connected across scale.',
        'official': 'Use AP Daily and progress checks to practice data tables, experimental design, and model-based explanations.',
    },
    'ap-calculus-bc': {
        'skill': 'Representations, theorem conditions, and justified solution paths',
        'unit': 'Name the representation, write the rule or theorem, and include conditions before simplifying.',
        'course': 'Interleave limits, derivatives, integrals, series, and parametric/polar/vector topics to build transfer.',
        'official': 'Use official free-response practice to rehearse notation, units, calculator setup, and justification language.',
    },
    'ap-chemistry': {
        'skill': 'Particle-level reasoning, quantitative setup, and lab evidence',
        'unit': 'Start with the particles or reaction model, track units, and explain what the calculation means chemically.',
        'course': 'Rotate between conceptual particle models, equilibrium reasoning, thermodynamics, kinetics, and electrochemistry.',
        'official': 'Use AP Classroom topic questions to check whether calculations and particle-level explanations agree.',
    },
    'ap-comparative-government-and-politics': {
        'skill': 'Core-country comparison with institutional evidence',
        'unit': 'Define the political concept, name the country evidence, then explain the similarity or difference.',
        'course': 'Compare the six core countries by regime, institutions, participation, rights, and political change.',
        'official': 'Use official practice to rehearse concept application, country comparison, and argument-style responses.',
    },
    'ap-computer-science-a': {
        'skill': 'Code tracing, object design, and algorithmic control flow',
        'unit': 'Trace state changes line by line before choosing an answer, especially with loops, references, and collections.',
        'course': 'Mix syntax, class design, arrays, ArrayLists, inheritance, and recursion so code-reading stays flexible.',
        'official': 'Use official practice to rehearse both multiple-choice tracing and free-response method design.',
    },
    'ap-computer-science-principles': {
        'skill': 'Algorithm reasoning, data abstraction, and computing impact',
        'unit': 'Explain what the abstraction or procedure does, why it is useful, and how data moves through it.',
        'course': 'Review creative development, data, algorithms, networks, and impacts as one connected computing system.',
        'official': 'Use AP Classroom practice to pair vocabulary with scenario-based reasoning and program-behavior questions.',
    },
    'ap-english-language-composition': {
        'skill': 'Claims, evidence, commentary, and rhetorical choice',
        'unit': 'Move from claim to evidence to commentary: explain how the writer choices shape audience, purpose, and argument.',
        'course': 'Alternate rhetorical analysis, synthesis, and argument so your thesis and commentary stay adaptable.',
        'official': 'Use released prompts and AP Classroom practice to rehearse timing, source use, and rubric-aligned commentary.',
    },
    'ap-english-literature-composition': {
        'skill': 'Literary evidence, interpretation, and line-level commentary',
        'unit': 'Tie each device or passage detail to meaning; avoid naming a technique without explaining its effect.',
        'course': 'Rotate poetry, prose, and longer fiction/drama so evidence selection and commentary stay text-specific.',
        'official': 'Use official prompts to practice thesis control, textual evidence, and sophistication under timed conditions.',
    },
    'ap-environmental-science': {
        'skill': 'Systems thinking, data analysis, and environmental tradeoffs',
        'unit': 'Identify the system, trace the cause-effect path, and support claims with numbers, trends, or mechanisms.',
        'course': 'Connect ecosystems, populations, resources, pollution, and global change through feedback loops and tradeoffs.',
        'official': 'Use progress checks to practice calculations, graph reading, and written environmental explanations.',
    },
    'ap-european-history': {
        'skill': 'Historical reasoning, sourcing, and evidence-based argument',
        'unit': 'Place events in context, identify the reasoning skill, and support claims with specific evidence.',
        'course': 'Interleave periods so continuity, change, causation, comparison, and sourcing become automatic.',
        'official': 'Use official DBQ, LEQ, SAQ, and MCQ practice to rehearse rubrics and source analysis.',
    },
    'ap-human-geography': {
        'skill': 'Spatial reasoning, models, and real-world application',
        'unit': 'Name the model or pattern, locate it spatially, and explain why the place-based evidence matters.',
        'course': 'Connect population, culture, politics, agriculture, cities, and development through scale and spatial patterns.',
        'official': 'Use AP Classroom practice for map, model, stimulus, and FRQ application questions.',
    },
    'ap-macroeconomics': {
        'skill': 'Graph-based policy reasoning and macroeconomic cause-effect chains',
        'unit': 'Draw the graph mentally, identify the shock or policy, and predict the chain of changes before answering.',
        'course': 'Interleave indicators, AD-AS, money markets, stabilization policy, growth, and international finance.',
        'official': 'Use official practice to rehearse graph labels, directional changes, and short-answer explanations.',
    },
    'ap-microeconomics': {
        'skill': 'Market graph analysis, marginal reasoning, and efficiency',
        'unit': 'Identify the market structure, shift or decision rule, and explain the efficiency or welfare result.',
        'course': 'Mix supply-demand, elasticity, firm behavior, market structures, factor markets, and market failure.',
        'official': 'Use official practice for graph drawing, marginal analysis, and policy-impact explanations.',
    },
    'ap-music-theory': {
        'skill': 'Aural recognition, notation fluency, and harmonic analysis',
        'unit': 'Sing, count, label, and analyze: connect what you hear to notation and harmonic function.',
        'course': 'Alternate written theory, aural skills, voice leading, and sight-singing so recognition becomes automatic.',
        'official': 'Use official-style listening and sight-singing practice to rehearse timing and notation accuracy.',
    },
    'ap-physics-1-2': {
        'skill': 'Conceptual modeling, representations, and evidence-based physics reasoning',
        'unit': 'Draw the representation first, identify forces or fields, and explain the physical relationship before calculating.',
        'course': 'Interleave mechanics, rotation, fluids, electricity, magnetism, waves, optics, and modern physics concepts.',
        'official': 'Use official practice to rehearse graph interpretation, model selection, and experimental reasoning.',
    },
    'ap-physics-c-electricity-and-magnetism': {
        'skill': 'Calculus-based field models, circuits, and electromagnetic reasoning',
        'unit': 'Choose the field, potential, circuit, or flux model, then connect the math to the physical situation.',
        'course': 'Mix fields, Gauss law, potential, capacitors, circuits, magnetism, and induction to build transfer.',
        'official': 'Use official free-response practice for setup, calculus notation, diagrams, and unit-aware answers.',
    },
    'ap-physics-c-mechanics': {
        'skill': 'Calculus-based mechanics, diagrams, and conservation reasoning',
        'unit': 'Draw the system, choose Newton, energy, momentum, rotation, or oscillation tools, then justify the setup.',
        'course': 'Interleave translational motion, energy, momentum, rotation, gravitation, and oscillations.',
        'official': 'Use official free-response practice to rehearse diagrams, derivations, and equation justification.',
    },
    'ap-precalculus': {
        'skill': 'Function behavior, multiple representations, and model interpretation',
        'unit': 'Translate between equation, graph, table, and verbal description before solving.',
        'course': 'Mix polynomial, rational, exponential, logarithmic, trigonometric, polar, parametric, vector, and matrix ideas.',
        'official': 'Use official practice to rehearse calculator strategy, model interpretation, and notation control.',
    },
    'ap-psychology': {
        'skill': 'Term precision, scenario application, and evidence from studies',
        'unit': 'Define the concept accurately, apply it to the scenario, and avoid everyday-language shortcuts.',
        'course': 'Interleave biological, cognitive, developmental, learning, social, personality, and health topics.',
        'official': 'Use official practice to rehearse stimulus questions, research-methods reasoning, and term application.',
    },
    'ap-u-s-government-politics': {
        'skill': 'Constitutional reasoning, required documents, and required cases',
        'unit': 'Name the principle, connect it to a case or document, and explain how the evidence supports the claim.',
        'course': 'Rotate foundations, branches, rights, ideologies, participation, required documents, and required cases.',
        'official': 'Use official practice for concept application, SCOTUS comparison, quantitative analysis, and argument essays.',
    },
    'ap-u-s-history': {
        'skill': 'Historical reasoning, sourcing, and evidence-based argument',
        'unit': 'Anchor the period, identify the historical reasoning skill, and support each claim with specific evidence.',
        'course': 'Interleave all periods so causation, comparison, continuity/change, and sourcing become automatic.',
        'official': 'Use official DBQ, LEQ, SAQ, and MCQ practice to rehearse rubrics and source analysis.',
    },
    'ap-world-history-modern': {
        'skill': 'Global comparison, causation, continuity/change, and source analysis',
        'unit': 'Place the topic in region and period, then explain interaction, diffusion, or change over time.',
        'course': 'Move across regions and periods so SPICE-T themes, comparison, and causation stay connected.',
        'official': 'Use official DBQ, LEQ, SAQ, and MCQ practice to rehearse rubrics and source analysis.',
    },
}

RESPONSE_PROFILES = {
    'default': {
        'title': 'Command Verb Toolkit',
        'habit': 'Read the verb first, then decide how much evidence the answer needs before writing or choosing.',
        'commands': [
            ('Identify', 'Name the concept, value, evidence, or choice without extra explanation.'),
            ('Describe', 'Give the relevant characteristics in clear AP vocabulary.'),
            ('Explain', 'Connect cause to effect using evidence or reasoning.'),
            ('Justify', 'Defend the answer with a rule, data point, source detail, or model.'),
        ],
        'watch': 'Do not turn an identify task into a long paragraph, and do not answer explain with a definition only.',
    },
    'history': {
        'title': 'History Response Toolkit',
        'habit': 'Anchor every answer in period, region, and evidence before moving into reasoning.',
        'commands': [
            ('Identify', 'Name the event, process, claim, document feature, or historical example.'),
            ('Describe', 'State the relevant historical characteristic or source detail.'),
            ('Explain', 'Show how or why evidence supports causation, comparison, or continuity/change.'),
            ('Support', 'Use specific evidence and sourcing language rather than broad summary.'),
        ],
        'watch': 'Avoid vague evidence like "trade increased" when the prompt needs a specific route, policy, group, or effect.',
    },
    'government': {
        'title': 'Government Response Toolkit',
        'habit': 'Define the principle, attach it to the institution/case/document, then explain the political effect.',
        'commands': [
            ('Define', 'Give the precise meaning of the political concept.'),
            ('Describe', 'State the relevant institutional feature, process, or data pattern.'),
            ('Explain', 'Connect the feature to a political behavior, policy, power, or outcome.'),
            ('Compare', 'Name both sides and state the similarity or difference using course terms.'),
        ],
        'watch': 'Do not mention a required case or document by title only; explain the constitutional rule it proves.',
    },
    'english': {
        'title': 'Writing Response Toolkit',
        'habit': 'Move from claim to quoted/paraphrased evidence to commentary that explains meaning or rhetorical effect.',
        'commands': [
            ('Analyze', 'Explain how the writer or text creates meaning, persuasion, tone, or complexity.'),
            ('Develop', 'Build a defensible line of reasoning rather than listing examples.'),
            ('Support', 'Choose evidence that directly proves the claim.'),
            ('Synthesize', 'Put sources in conversation instead of summarizing them one by one.'),
        ],
        'watch': 'Device naming is not analysis; always say what the detail does for the argument, speaker, or theme.',
    },
    'science': {
        'title': 'Science Response Toolkit',
        'habit': 'Start with the model or mechanism, then use data, variables, or particle/biological reasoning to support it.',
        'commands': [
            ('Describe', 'State the relevant pattern, structure, process, or observation.'),
            ('Explain', 'Connect the mechanism to the result using evidence.'),
            ('Predict', 'Use the model to state what should happen under changed conditions.'),
            ('Justify', 'Cite data, controls, variables, or scientific principles that support the claim.'),
        ],
        'watch': 'Do not stop at a memorized fact when the prompt asks for mechanism, experimental evidence, or data reasoning.',
    },
    'math': {
        'title': 'Math Response Toolkit',
        'habit': 'Show setup, notation, units or context, and the reason a method applies.',
        'commands': [
            ('Calculate', 'Show enough steps to make the numerical result traceable.'),
            ('Determine', 'Choose and apply the correct method, theorem, graph, or representation.'),
            ('Interpret', 'Translate the result back into the context, including units when relevant.'),
            ('Justify', 'Give mathematical reasons, not just calculator output or a final answer.'),
        ],
        'watch': 'A correct number can still lose value if the setup, interpretation, or justification is missing.',
    },
    'economics': {
        'title': 'Economics Response Toolkit',
        'habit': 'Draw or imagine the graph first, label the shock, then explain the chain of directional changes.',
        'commands': [
            ('Identify', 'State the variable, policy, market outcome, or curve affected.'),
            ('Calculate', 'Show work for the final value and keep units or percentages clear.'),
            ('Draw/Label', 'Create correctly labeled axes, curves, equilibria, and directional changes.'),
            ('Explain', 'Connect the graph or calculation to incentives, scarcity, policy, or market behavior.'),
        ],
        'watch': 'Do not describe a shift without naming the curve, direction, and resulting price/output or macro variable change.',
    },
    'computer-science': {
        'title': 'Computer Science Response Toolkit',
        'habit': 'Trace inputs, state changes, return values, and abstractions before judging output or writing code.',
        'commands': [
            ('Trace', 'Follow variable values, object state, indexes, or loop iterations in order.'),
            ('Explain', 'Describe what the code, abstraction, network, or algorithm does and why.'),
            ('Write', 'Produce code or pseudocode that satisfies every stated condition.'),
            ('Evaluate', 'Reason about correctness, efficiency, data use, or computing impact.'),
        ],
        'watch': 'Do not infer behavior from method names; trace the actual control flow and data flow.',
    },
    'arts': {
        'title': 'Arts Response Toolkit',
        'habit': 'Connect what you see or hear to function, context, structure, and evidence.',
        'commands': [
            ('Identify', 'Name the work, element, texture, chord, form, or stylistic feature.'),
            ('Describe', 'State observable visual or musical characteristics.'),
            ('Analyze', 'Explain how form, sound, material, or technique creates meaning or function.'),
            ('Compare', 'Use specific similarities and differences rather than general impressions.'),
        ],
        'watch': 'Avoid unsupported attribution or analysis; point to the visual or musical evidence that proves it.',
    },
}

COURSE_RESPONSE_PROFILE = {
    'ap-art-history': 'arts',
    'ap-biology': 'science',
    'ap-calculus-bc': 'math',
    'ap-chemistry': 'science',
    'ap-comparative-government-and-politics': 'government',
    'ap-computer-science-a': 'computer-science',
    'ap-computer-science-principles': 'computer-science',
    'ap-english-language-composition': 'english',
    'ap-english-literature-composition': 'english',
    'ap-environmental-science': 'science',
    'ap-european-history': 'history',
    'ap-human-geography': 'history',
    'ap-macroeconomics': 'economics',
    'ap-microeconomics': 'economics',
    'ap-music-theory': 'arts',
    'ap-physics-1-2': 'science',
    'ap-physics-c-electricity-and-magnetism': 'math',
    'ap-physics-c-mechanics': 'math',
    'ap-precalculus': 'math',
    'ap-psychology': 'science',
    'ap-u-s-government-politics': 'government',
    'ap-u-s-history': 'history',
    'ap-world-history-modern': 'history',
}

STIMULUS_PROFILES = {
    'default': [
        ('Name the input', 'Identify what the prompt gives you: source, graph, image, data, passage, model, scenario, or code.'),
        ('Mark the task', 'Circle the command verb and decide whether the answer needs a fact, comparison, explanation, or justification.'),
        ('Use evidence', 'Point to one detail from the stimulus before adding outside course knowledge.'),
        ('Check transfer', 'Ask how the same idea could appear in a different unit or official practice format.'),
    ],
    'history': [
        ('Source it first', 'Name the author, audience, purpose, point of view, period, and region before choosing evidence.'),
        ('Context before claim', 'Place the stimulus in a broader process such as causation, continuity/change, comparison, or exchange.'),
        ('Evidence over summary', 'Use one concrete document detail and one course fact instead of retelling the whole source.'),
        ('Rubric scan', 'Check whether the answer actually supports the historical reasoning skill the prompt asks for.'),
    ],
    'government': [
        ('Classify the stimulus', 'Decide whether it is data, a required document, a case, an institution, a policy, or a political behavior.'),
        ('Attach the rule', 'Connect the stimulus to the constitutional principle, institution, actor, or comparative country evidence.'),
        ('Explain the effect', 'Move from definition to outcome: power, participation, policy, rights, legitimacy, or accountability.'),
        ('Compare carefully', 'When two systems or branches appear, state both sides before explaining the similarity or difference.'),
    ],
    'english': [
        ('Read for purpose', 'Identify speaker, audience, situation, conflict, or line of reasoning before naming devices.'),
        ('Choose live evidence', 'Pick a phrase, image, syntax choice, or source detail that proves the claim instead of decorating it.'),
        ('Commentary does work', 'Explain how the evidence shapes meaning, tone, argument, theme, or complexity.'),
        ('Synthesize, do not stack', 'When sources appear, put them in conversation around one defensible claim.'),
    ],
    'science': [
        ('Read the setup', 'Mark variables, controls, units, axes, treatment groups, model parts, or particle/biological scale.'),
        ('Find the pattern', 'State the data trend, anomaly, mechanism, or causal relationship before jumping to the answer.'),
        ('Link to model', 'Use the course model or mechanism to explain why the observed result makes sense.'),
        ('Justify with evidence', 'Cite a number, comparison, condition, control, graph feature, or scientific principle.'),
    ],
    'math': [
        ('Identify representation', 'Name the graph, table, equation, series, vector, parameter, or context before calculating.'),
        ('Check conditions', 'Look for intervals, units, differentiability, convergence, calculator context, and theorem requirements.'),
        ('Show the setup', 'Write the expression, equation, derivative, integral, or reasoning path before simplifying.'),
        ('Interpret the result', 'Translate numbers back into the problem context with units, sign, direction, or meaning.'),
    ],
    'economics': [
        ('Draw mentally', 'Identify the market, axes, curves, equilibrium, policy, shock, or macro model before answering.'),
        ('Name the shift', 'State which curve or variable changes and why incentives, scarcity, or policy caused it.'),
        ('Track direction', 'Follow price, quantity, output, unemployment, inflation, interest rate, or trade effects in order.'),
        ('Label the evidence', 'Keep graph labels, calculation work, and economic interpretation tied together.'),
    ],
    'computer-science': [
        ('Trace the input', 'Follow parameters, data structures, indexes, object state, and return values before trusting intuition.'),
        ('Watch control flow', 'Track loops, conditionals, method calls, abstractions, and side effects in execution order.'),
        ('State the purpose', 'Explain what the program, procedure, data representation, network, or computing impact is doing.'),
        ('Check constraints', 'Confirm the code or explanation satisfies every condition in the prompt.'),
    ],
    'arts': [
        ('Observe first', 'Name visible or audible features: form, material, line, space, texture, harmony, rhythm, or structure.'),
        ('Tie to context', 'Connect the feature to function, patronage, culture, period, performance practice, or audience.'),
        ('Compare evidence', 'Use specific similarities and differences rather than broad impressions.'),
        ('Support attribution', 'When naming style or identity, point to the visual or musical evidence that proves it.'),
    ],
}

MISTAKE_LOG_STEPS = [
    ('Tag the miss', 'Use Wrong only, then label the miss as content, command verb, evidence, graph/calculation, or careful reading.'),
    ('Repair the rule', 'Write the one rule, mechanism, source detail, model, or formula that would have prevented the miss.'),
    ('Redo cold', 'Wait a short gap, reset just that bank if needed, and answer again without looking at the explanation.'),
    ('Transfer it', 'Find one nearby lesson, AP Daily topic, or teacher-assigned AP Classroom question that tests the same idea.'),
]

SPACED_REVIEW_STEPS = [
    ('Same day', 'Finish the lesson bank, read every explanation, and mark the lesson checkbox only after you can explain the misses.'),
    ('48 hours', 'Use Unanswered only or Wrong only, then redo a small set without notes to force retrieval.'),
    ('1 week', 'Return to the unit review bank and mix in one older unit so the course stays interleaved.'),
    ('Before a quiz', 'Pair this guide with assigned AP Classroom topic questions, progress checks, or AP Daily review for the same skills.'),
]

OFFICIAL_BRIDGE_STEPS = [
    ('Match the framework', 'Use the AP Central course page or CED to map weak lessons to the official content and skill categories.'),
    ('Watch with retrieval', 'Before an AP Daily video, write what you already know; after it, answer one guide question without notes.'),
    ('Use assigned practice', 'Pair this guide with teacher-assigned topic questions, progress checks, or practice sessions in AP Classroom.'),
    ('Read scoring evidence', 'For written or worked responses, compare your answer to scoring guidelines, samples, or the explanation logic here.'),
]

EXAM_DAY_STEPS = [
    ('First pass', 'Answer the clear questions first, mark uncertainty, and keep moving so one hard prompt does not steal the section.'),
    ('Evidence pass', 'Return to marked items and check that every response points to evidence, a setup, a graph, a source, code behavior, or a mechanism.'),
    ('Final check', 'Use remaining time to catch missing units, labels, thesis/claim language, command verbs, and unsupported explanations.'),
]

FINAL_REVIEW_STEPS = [
    ('Find the leak', 'Use Wrong only and Unanswered only to choose the two weakest units instead of rereading the whole course.'),
    ('Mix the bank', 'Alternate one weak unit, one older unit, and the course quiz so recall has to survive topic switching.'),
    ('Score the response', 'Compare one written, worked, or performance response with released scoring evidence or teacher feedback.'),
    ('Lock the routine', 'The night before, review your miss tags, required materials, calculator/device rules, and the first-pass plan.'),
]

REVIEW_SPRINT_STEPS = [
    ('Days 1-2', 'Find two weak units with Wrong only and Unanswered only, then repair one miss from each as a rule, model, source move, setup, or code trace.'),
    ('Days 3-4', 'Write or work one AP-style response using the command toolkit, then compare the answer to explanations, teacher feedback, or scoring evidence.'),
    ('Days 5-6', 'Mix a weak unit, an older unit, and the course quiz so recall has to survive topic switching and stimulus changes.'),
    ('Day 7', 'Review miss tags, stimulus routine, pacing plan, required materials, and the first-pass strategy you will use when the timer starts.'),
]

SCORE_BUILDER_STEPS = [
    ('1. Learn', 'Start with gateway ideas and lesson questions until the vocabulary, model, source, formula, or process is usable without notes.'),
    ('2. Prove', 'Use unit review questions and one transfer prompt to show you can explain, justify, calculate, compare, or analyze under pressure.'),
    ('3. Mix', 'Use the course bank to switch units without warning; this exposes fragile recall better than rereading a favorite topic.'),
    ('4. Transfer', 'Finish with AP Daily, assigned AP Classroom practice, released questions, or scoring evidence for the same skill.'),
]

# ── helpers ─────────────────────────────────────────────────────────────────

def qid(seed):
    return hashlib.md5(seed.encode()).hexdigest()[:12]

def shuffle_choices(correct, distractors, qid_val):
    """Deterministic shuffle: rotate by first hex digit mod 4."""
    choices = [correct] + list(distractors)   # 4 items
    rot = int(qid_val[0], 16) % 4
    choices = choices[rot:] + choices[:rot]
    correct_idx = (4 - rot) % 4
    return choices, correct_idx

LETTERS = ['A', 'B', 'C', 'D']

def make_mcq(n, stem, correct, distractors, bank_id, course_slug, level, seed_str):
    """Generate a click-to-select MCQ .q-item block."""
    qid_val = qid(seed_str)
    choices, correct_idx = shuffle_choices(correct, distractors, qid_val)
    correct_letter = LETTERS[correct_idx]

    choices_html = ''
    for i, ch in enumerate(choices):
        is_correct = 'true' if i == correct_idx else 'false'
        label = LETTERS[i]
        choices_html += (
            f'<li class="q-choice" data-correct="{is_correct}" '
            f'onclick="mcqPick(this,\'{qid_val}\')">'
            f'{label}) {ch}</li>'
        )

    explain = f'<strong>{correct_letter} is correct.</strong> {correct}'

    return (
        f'<div class="q-item" data-qid="{qid_val}" data-bank="{bank_id}" '
        f'data-course="{course_slug}" data-level="{level}">'
        f'<div class="q-num">Q{n}</div>'
        f'<div class="q-text">{stem}</div>'
        f'<ul class="q-choices">{choices_html}</ul>'
        f'<div class="q-explain" id="exp-{qid_val}" style="display:none">{explain}</div>'
        f'</div>'
    )

def make_video(title, desc, url):
    """Return embedded iframe for YouTube links; external link otherwise."""
    yt = re.search(r'(?:v=|youtu\.be/)([A-Za-z0-9_-]{11})', url)
    if yt:
        vid_id = yt.group(1)
        return (
            f'<div class="vid-wrap">'
            f'<iframe src="https://www.youtube-nocookie.com/embed/{vid_id}" '
            f'title="{title}" frameborder="0" loading="lazy" '
            f'allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" '
            f'allowfullscreen></iframe>'
            f'<a class="vid-fallback" href="{url}" target="_blank" rel="noopener">'
            f'Open in YouTube →</a>'
            f'</div>'
        )
    return (
        f'<a class="res video" target="_blank" rel="noopener" href="{url}">'
        f'<b>{title}</b><span>{desc}</span><code>{url}</code></a>'
    )

def footer_html():
    return (
        f'<footer class="site-footer">'
        f'<div class="f-brand">Five &amp; A+</div>'
        f'<p class="trademark">{AP_DISCLAIMER}</p>'
        f'<p class="f-sub">Free AP® &amp; College Review &middot; Built by Arnav Sinha &amp; Yashwin Kandra</p>'
        f'</footer>'
    )

def topnav_html(course_name, course_slug, course_html_file):
    return (
        f'<nav class="topnav">'
        f'<a class="nav-brand-link" href="../index.html">Five &amp; A+</a>'
        f'<a href="../index.html">← Hub</a>'
        f'<a href="../courses/{course_html_file}">← {course_name}</a>'
        f'<div class="topnav-right">'
        f'<input id="q" placeholder="Search this page…" oninput="filterSite()">'
        f'</div>'
        f'</nav>'
    )

def dashboard_html():
    return (
        f'<section class="dashboard">'
        f'<div class="dash-row">'
        f'<div class="dash-card"><b id="dash-total">0</b><span>questions</span></div>'
        f'<div class="dash-card"><b id="dash-answered">0</b><span>answered</span></div>'
        f'<div class="dash-card"><b id="dash-right">0</b><span>correct</span></div>'
        f'<div class="dash-card"><b id="dash-wrong">0</b><span>wrong</span></div>'
        f'<div class="dash-card"><b id="dash-unmarked">0</b><span>unanswered</span></div>'
        f'<div class="dash-card hidden" id="dash-lessons-card"><b id="dash-lessons">0 / 0</b><span>lessons done</span></div>'
        f'<div class="dash-card"><b id="dash-pct">0%</b><span>score</span></div>'
        f'</div>'
        f'<div class="dash-actions">'
        f'<button onclick="showGlobal(\'all\')">Show all</button>'
        f'<button onclick="showGlobal(\'missed\')">Wrong only</button>'
        f'<button onclick="showGlobal(\'correct\')">Correct only</button>'
        f'<button onclick="showGlobal(\'unmarked\')">Unanswered only</button>'
        f'<button onclick="resetAll()">Reset page</button>'
        f'</div>'
        f'</section>'
    )

def quiz_section_html(bank_id, label, questions_html, total_qs):
    return (
        f'<div class="quiz-section" data-bank="{bank_id}">'
        f'<div class="quiz-header">'
        f'<span class="quiz-title">{label}</span>'
        f'<span class="quiz-score" data-bank-score="{bank_id}">0 / {total_qs} correct</span>'
        f'<button class="quiz-reset" onclick="resetBank(\'{bank_id}\')">Reset</button>'
        f'</div>'
        f'<div class="quiz-body">{questions_html}</div>'
        f'</div>'
    )


def ap_focus_profile(course_slug):
    return AP_FOCUS_PROFILES.get(course_slug, DEFAULT_AP_FOCUS)


def ap_response_profile_key(course_slug):
    return COURSE_RESPONSE_PROFILE.get(course_slug, 'default')


def ap_response_profile(course_slug):
    key = ap_response_profile_key(course_slug)
    return RESPONSE_PROFILES.get(key, RESPONSE_PROFILES['default'])


def command_summary(commands):
    return '; '.join(f'{name}: {desc}' for name, desc in commands[:4])


def short_unit_title(unit_title):
    return unit_title.split(': ', 1)[-1] if unit_title.lower().startswith(('unit ', 'period ')) else unit_title


def ap_response_toolkit_html(course_slug, is_non_ap=False):
    if is_non_ap:
        return ''

    profile = ap_response_profile(course_slug)
    command_cards = ''.join(
        f'<article><b>{name}</b><p>{desc}</p></article>'
        for name, desc in profile['commands']
    )

    return (
        f'<section class="response-toolkit">'
        f'<div class="response-toolkit-head">'
        f'<span class="eyebrow">AP&reg; Free-Response Habits</span>'
        f'<h3>{profile["title"]}</h3>'
        f'<p>{profile["habit"]}</p>'
        f'</div>'
        f'<div class="response-command-grid">{command_cards}</div>'
        f'<p class="response-watch"><b>Watch for:</b> {profile["watch"]}</p>'
        f'</section>'
    )


def ap_stimulus_strategy_html(course_slug, is_non_ap=False):
    if is_non_ap:
        return ''

    focus_profile = ap_focus_profile(course_slug)
    profile_key = ap_response_profile_key(course_slug)
    stimulus_cards = STIMULUS_PROFILES.get(profile_key, STIMULUS_PROFILES['default'])
    cards = ''.join(
        f'<article><b>{label}</b><p>{desc}</p></article>'
        for label, desc in stimulus_cards
    )

    return (
        f'<section class="stimulus-strategy">'
        f'<div class="stimulus-strategy-head">'
        f'<span class="eyebrow">AP&reg; Stimulus Strategy</span>'
        f'<h3>Read the source before chasing the answer</h3>'
        f'<p>Use this routine whenever a prompt starts with a passage, graph, image, map, data table, '
        f'scenario, score excerpt, or code segment. It keeps {focus_profile["skill"].lower()} tied to the evidence in front of you.</p>'
        f'</div>'
        f'<div class="stimulus-strategy-grid">{cards}</div>'
        f'</section>'
    )


def ap_mistake_log_html(course_slug, is_non_ap=False):
    if is_non_ap:
        return ''

    focus_profile = ap_focus_profile(course_slug)
    cards = ''.join(
        f'<article><b>{label}</b><p>{desc}</p></article>'
        for label, desc in MISTAKE_LOG_STEPS
    )

    return (
        f'<section class="mistake-log">'
        f'<div class="mistake-log-head">'
        f'<span class="eyebrow">AP&reg; Mistake Repair</span>'
        f'<h3>Turn wrong answers into a retake plan</h3>'
        f'<p>Use the dashboard filters with a short feedback loop: isolate misses, repair the reasoning, '
        f'and then retrieve the idea again later. For this course, prioritize {focus_profile["skill"].lower()}.</p>'
        f'</div>'
        f'<div class="mistake-log-grid">{cards}</div>'
        f'</section>'
    )


def ap_unit_mistake_strip_html(course_slug, is_non_ap=False):
    if is_non_ap:
        return ''

    profile = ap_response_profile(course_slug)
    return (
        f'<section class="mistake-strip">'
        f'<span class="eyebrow">After the Unit Quiz</span>'
        f'<h3>Run a 10-minute miss audit</h3>'
        f'<p>Switch to <b>Wrong only</b>, choose one missed question, and write: '
        f'what the prompt asked, why the correct answer works, and what to remember next time. '
        f'Then revisit the same idea with the {profile["title"].lower()} above.</p>'
        f'</section>'
    )


def ap_spaced_review_html(course_slug, is_non_ap=False):
    if is_non_ap:
        return ''

    profile = ap_focus_profile(course_slug)
    cards = ''.join(
        f'<article><b>{label}</b><p>{desc}</p></article>'
        for label, desc in SPACED_REVIEW_STEPS
    )

    return (
        f'<section class="spaced-review">'
        f'<div class="spaced-review-head">'
        f'<span class="eyebrow">AP&reg; Spaced Review</span>'
        f'<h3>Keep the course warm between units</h3>'
        f'<p>Use the checkboxes, dashboard counts, and filters as a lightweight review calendar. '
        f'For this course, keep returning to {profile["skill"].lower()} so old units stay ready for new prompts.</p>'
        f'</div>'
        f'<div class="spaced-review-grid">{cards}</div>'
        f'</section>'
    )


def ap_official_bridge_html(course_slug, is_non_ap=False):
    if is_non_ap:
        return ''

    profile = ap_focus_profile(course_slug)
    cards = ''.join(
        f'<article><b>{label}</b><p>{desc}</p></article>'
        for label, desc in OFFICIAL_BRIDGE_STEPS
    )

    return (
        f'<section class="official-bridge">'
        f'<div class="official-bridge-head">'
        f'<span class="eyebrow">AP&reg; Official Practice Bridge</span>'
        f'<h3>Connect this guide to the official AP ecosystem</h3>'
        f'<p>Use Five &amp; A+ for retrieval and explanations, then check transfer with College Board materials. '
        f'Keep the focus on {profile["skill"].lower()} as you move between local practice and official tasks.</p>'
        f'</div>'
        f'<div class="official-bridge-grid">{cards}</div>'
        f'<p class="official-bridge-links">'
        f'<a href="https://apcentral.collegeboard.org/courses" target="_blank" rel="noopener">AP Central course pages</a>'
        f'<span>&middot;</span>'
        f'<a href="https://apstudents.collegeboard.org/ap-daily" target="_blank" rel="noopener">AP Daily</a>'
        f'<span>&middot;</span>'
        f'<a href="https://apcentral.collegeboard.org/instructional-resources/ap-classroom/overview" target="_blank" rel="noopener">AP Classroom overview</a>'
        f'</p>'
        f'</section>'
    )


def ap_exam_day_strategy_html(course_slug, is_non_ap=False):
    if is_non_ap:
        return ''

    focus_profile = ap_focus_profile(course_slug)
    response_profile = ap_response_profile(course_slug)
    cards = ''.join(
        f'<article><b>{label}</b><p>{desc}</p></article>'
        for label, desc in EXAM_DAY_STEPS
    )
    command_names = ', '.join(name for name, _ in response_profile['commands'][:3])

    return (
        f'<section class="exam-day-strategy">'
        f'<div class="exam-day-head">'
        f'<span class="eyebrow">AP&reg; Exam-Day Strategy</span>'
        f'<h3>Have a plan before the timer starts</h3>'
        f'<p>Use this course bank to rehearse pacing, then carry a simple pass system into the official exam. '
        f'For this course, keep watching for {focus_profile["skill"].lower()} and command verbs like {command_names}.</p>'
        f'</div>'
        f'<div class="exam-day-grid">{cards}</div>'
        f'<p class="exam-day-note"><b>Before test day:</b> confirm the current College Board exam-day rules, '
        f'calculator/device requirements, and what to bring with your AP teacher or coordinator.</p>'
        f'</section>'
    )


def ap_final_review_priorities_html(course_slug, is_non_ap=False):
    if is_non_ap:
        return ''

    focus_profile = ap_focus_profile(course_slug)
    response_profile = ap_response_profile(course_slug)
    cards = ''.join(
        f'<article><b>{label}</b><p>{desc}</p></article>'
        for label, desc in FINAL_REVIEW_STEPS
    )

    return (
        f'<section class="final-review">'
        f'<div class="final-review-head">'
        f'<span class="eyebrow">AP&reg; Final Review Priorities</span>'
        f'<h3>Spend the last week on evidence, not panic</h3>'
        f'<p>Use the dashboard to decide what deserves time. For this course, the priority is still '
        f'{focus_profile["skill"].lower()}; pair that with the {response_profile["title"].lower()} and official scoring evidence.</p>'
        f'</div>'
        f'<div class="final-review-grid">{cards}</div>'
        f'</section>'
    )


def ap_review_sprint_html(course_slug, units, is_non_ap=False):
    if is_non_ap:
        return ''

    focus_profile = ap_focus_profile(course_slug)
    response_profile = ap_response_profile(course_slug)
    cards = ''.join(
        f'<article><b>{label}</b><p>{desc}</p></article>'
        for label, desc in REVIEW_SPRINT_STEPS
    )

    return (
        f'<section class="review-sprint">'
        f'<div class="review-sprint-head">'
        f'<span class="eyebrow">AP&reg; Review Sprint</span>'
        f'<h3>Use the last week as a controlled reset</h3>'
        f'<p>When the exam is close, use the {len(units)}-unit map, dashboard filters, and course quiz '
        f'to make a short plan instead of rereading everything. Keep each session tied to '
        f'{focus_profile["skill"].lower()} and the {response_profile["title"].lower()}.</p>'
        f'</div>'
        f'<div class="review-sprint-grid">{cards}</div>'
        f'</section>'
    )


def ap_unit_spaced_strip_html(course_slug, is_non_ap=False):
    if is_non_ap:
        return ''

    profile = ap_focus_profile(course_slug)
    return (
        f'<section class="spaced-strip">'
        f'<span class="eyebrow">Spaced Review</span>'
        f'<h3>Revisit this unit before it goes stale</h3>'
        f'<p>After today, come back at <b>48 hours</b> and <b>1 week</b>. '
        f'Use <b>Unanswered only</b> or <b>Wrong only</b>, then connect one repaired question back to '
        f'{profile["skill"].lower()}.</p>'
        f'</section>'
    )


def ap_course_focus_html(course_name, course_slug, units, is_non_ap=False):
    if is_non_ap:
        return ''

    profile = ap_focus_profile(course_slug)
    unit_count = len(units)
    return (
        f'<section class="study-flow">'
        f'<div class="study-flow-head">'
        f'<span class="eyebrow">AP&reg; Exam Study Loop</span>'
        f'<h3>Use this guide with official practice</h3>'
        f'<p>{course_name} is strongest when you study content, practice the AP skill, '
        f'and then check transfer with official AP-style questions.</p>'
        f'</div>'
        f'<div class="study-flow-grid">'
        f'<article class="study-flow-card"><span>1</span><h4>Map the course</h4>'
        f'<p>{profile["course"]}</p>'
        f'<small>{unit_count} units on this guide</small></article>'
        f'<article class="study-flow-card"><span>2</span><h4>Practice the skill</h4>'
        f'<p><b>{profile["skill"]}</b>. Use lesson questions first, then the course bank '
        f'to switch topics without warning.</p>'
        f'<small>Dashboard filters help isolate missed and unmarked questions</small></article>'
        f'<article class="study-flow-card"><span>3</span><h4>Check official transfer</h4>'
        f'<p>{profile["official"]}</p>'
        f'<small><a href="https://apstudents.collegeboard.org/ap-daily" target="_blank" rel="noopener">AP Daily</a> '
        f'&middot; <a href="https://apcentral.collegeboard.org/courses" target="_blank" rel="noopener">Course pages</a></small></article>'
        f'</div>'
        f'</section>'
    )


def ap_score_builder_ladder_html(course_slug, is_non_ap=False):
    if is_non_ap:
        return ''

    focus_profile = ap_focus_profile(course_slug)
    response_profile = ap_response_profile(course_slug)
    cards = ''.join(
        f'<article><b>{label}</b><p>{desc}</p></article>'
        for label, desc in SCORE_BUILDER_STEPS
    )
    commands = ', '.join(name for name, _ in response_profile['commands'][:4])

    return (
        f'<section class="score-ladder">'
        f'<div class="score-ladder-head">'
        f'<span class="eyebrow">AP&reg; Score Builder</span>'
        f'<h3>Move from knowing it to proving it</h3>'
        f'<p>Use this path when a course feels too big: build the idea, prove it in one unit, '
        f'then mix it with older content and official practice. Keep checking {focus_profile["skill"].lower()} '
        f'and command verbs like {commands}.</p>'
        f'</div>'
        f'<div class="score-ladder-grid">{cards}</div>'
        f'</section>'
    )


def ap_unit_checkpoint_html(course_slug, unit_title, lessons, is_non_ap=False):
    if is_non_ap:
        return ''

    profile = ap_focus_profile(course_slug)
    response_profile = ap_response_profile(course_slug)
    lesson_names = ', '.join(L['title'] for L in lessons[:3])
    if len(lessons) > 3:
        lesson_names += ', and more'

    return (
        f'<section class="ap-checkpoint">'
        f'<div class="ap-checkpoint-head">'
        f'<span class="eyebrow">AP&reg; Skill Checkpoint</span>'
        f'<h3>{profile["skill"]}</h3>'
        f'<p>{profile["unit"]}</p>'
        f'</div>'
        f'<div class="ap-checkpoint-grid">'
        f'<div><b>Before the quiz</b><p>Skim the gateway and lessons: {lesson_names}.</p></div>'
        f'<div><b>During practice</b><p>Answer from evidence first, then use the explanation to repair the exact misconception.</p></div>'
        f'<div><b>After this unit</b><p>{profile["official"]}</p></div>'
        f'<div><b>Command verbs</b><p>{command_summary(response_profile["commands"])}</p></div>'
        f'</div>'
        f'</section>'
    )

# ── Unit renderer ─────────────────────────────────────────────────────────────

def ap_unit_transfer_practice_html(course_slug, unit_title, lessons, is_non_ap=False):
    if is_non_ap:
        return ''

    response_profile = ap_response_profile(course_slug)
    commands = response_profile['commands']
    primary = commands[0][0] if commands else 'Explain'
    secondary = commands[1][0] if len(commands) > 1 else 'Justify'
    lesson_names = ', '.join(L['title'] for L in lessons[:2])
    if len(lessons) > 2:
        lesson_names += ', and one later lesson'
    clean_title = short_unit_title(unit_title)

    return (
        f'<section class="transfer-practice">'
        f'<div class="transfer-practice-head">'
        f'<span class="eyebrow">AP&reg; Transfer Practice</span>'
        f'<h3>Turn {clean_title} into a scored response</h3>'
        f'<p>Before the unit quiz, write a short response that uses the same habits as official free-response, '
        f'written-response, performance-task, or worked-problem scoring.</p>'
        f'</div>'
        f'<div class="transfer-practice-grid">'
        f'<article><b>Prompt frame</b><p>{primary} and {secondary.lower()} one idea from {lesson_names}. '
        f'Use a specific term, source detail, graph, calculation, data point, image feature, or code trace.</p></article>'
        f'<article><b>Rubric check</b><p>Underline the claim, the evidence or setup, and the reasoning step. '
        f'If one part is missing, revise before looking at an explanation.</p></article>'
        f'<article><b>Official transfer</b><p>Compare your wording with a released free-response/scoring guideline, '
        f'an AP Classroom progress check, or a teacher-assigned practice item.</p></article>'
        f'</div>'
        f'</section>'
    )


def ap_unit_prompt_builder_html(course_slug, unit_title, lessons, is_non_ap=False):
    if is_non_ap:
        return ''

    focus_profile = ap_focus_profile(course_slug)
    response_profile = ap_response_profile(course_slug)
    commands = response_profile['commands']
    command_names = ', '.join(name for name, _ in commands[:3]) if commands else 'Explain, justify, and describe'
    first_lesson = lessons[0]['title'] if lessons else short_unit_title(unit_title)
    later_lesson = lessons[-1]['title'] if len(lessons) > 1 else first_lesson
    clean_title = short_unit_title(unit_title)

    cards = (
        f'<article><b>1. Command</b><p>Choose one verb from {command_names}. '
        f'Rewrite the task in your own words before answering.</p></article>'
        f'<article><b>2. Evidence</b><p>Pull one specific term, model, source detail, data point, '
        f'image feature, calculation, or code trace from {first_lesson} or {later_lesson}.</p></article>'
        f'<article><b>3. Reasoning</b><p>Add the because/therefore sentence that connects the evidence to '
        f'{focus_profile["skill"].lower()}.</p></article>'
        f'<article><b>4. Score scan</b><p>Underline the claim, evidence, and reasoning. '
        f'If the answer only names content from {clean_title}, revise it into an AP-style explanation.</p></article>'
    )

    return (
        f'<section class="prompt-builder">'
        f'<div class="prompt-builder-head">'
        f'<span class="eyebrow">AP&reg; Prompt Builder</span>'
        f'<h3>Draft the answer before the unit quiz</h3>'
        f'<p>Use this four-step routine after the lesson banks and before the unit review. '
        f'It turns recall from {clean_title} into the kind of concise, scored language AP prompts reward.</p>'
        f'</div>'
        f'<div class="prompt-builder-grid">{cards}</div>'
        f'</section>'
    )


def ap_unit_connections_html(course_name, course_slug, unit_title, course_html_file,
                             prev_unit=None, next_unit=None, is_non_ap=False):
    if is_non_ap:
        return ''

    profile = ap_focus_profile(course_slug)
    clean_title = short_unit_title(unit_title)

    if prev_unit:
        prev_title = short_unit_title(prev_unit['title'])
        prev_action = (
            f'<a href="{prev_unit["file"]}">Review Unit {prev_unit["num"]}: {prev_title}</a>'
        )
        prev_text = (
            f'Redo one missed or unanswered item from Unit {prev_unit["num"]}, then explain how it sets up {clean_title}.'
        )
    else:
        prev_action = f'<a href="../courses/{course_html_file}">Open the {course_name} map</a>'
        prev_text = f'Start by checking where {clean_title} fits in the full course sequence before drilling details.'

    if next_unit:
        next_title = short_unit_title(next_unit['title'])
        next_action = (
            f'<a href="{next_unit["file"]}">Preview Unit {next_unit["num"]}: {next_title}</a>'
        )
        next_text = (
            f'Name one idea from {clean_title} that should carry forward into Unit {next_unit["num"]}.'
        )
    else:
        next_action = f'<a href="../courses/{course_html_file}">Use the course bank</a>'
        next_text = f'You are at the end of this course map; mix {clean_title} with two older units before final review.'

    return (
        f'<section class="unit-connections">'
        f'<div class="unit-connections-head">'
        f'<span class="eyebrow">AP&reg; Unit Connections</span>'
        f'<h3>Keep this unit tied to the course map</h3>'
        f'<p>AP questions rarely stay inside one clean topic. Use these links to connect {clean_title} '
        f'to adjacent units and to keep practicing {profile["skill"].lower()} across the course.</p>'
        f'</div>'
        f'<div class="unit-connections-grid">'
        f'<article><b>Bridge back</b><p>{prev_text}</p>{prev_action}</article>'
        f'<article><b>Bridge forward</b><p>{next_text}</p>{next_action}</article>'
        f'<article><b>Mix now</b><p>Answer two questions from this unit, then one course-bank question without previewing the topic.</p>'
        f'<a href="../courses/{course_html_file}">Open mixed course practice</a></article>'
        f'</div>'
        f'</section>'
    )


def render_unit(course_name, course_slug, abbrev, unit_num, unit_title,
                unit_desc, gateway, lessons, unit_qs, course_html_file,
                accent_color='#4ade80', is_non_ap=False, prev_unit=None, next_unit=None):

    acfaint = accent_color  # will generate rgba below
    # parse hex to rgb for --ACfaint
    h = accent_color.lstrip('#')
    if len(h) == 6:
        r, g, b = int(h[0:2],16), int(h[2:4],16), int(h[4:6],16)
        acfaint_val = f'rgba({r},{g},{b},0.07)'
    else:
        acfaint_val = 'rgba(74,222,128,0.07)'

    total_q = len(lessons) * 5 + min(len(unit_qs), 10)

    # ── gateway
    gw_html = ''.join(f'<li>{g}</li>' for g in gateway)

    # ── lessons
    seen_vids_in_unit = set()   # track embedded video IDs to avoid per-unit repetition

    lessons_html = ''
    for li, L in enumerate(lessons, 1):
        bank_id = f'{abbrev}-u{unit_num}-l{li}-bank'

        topics_html = ''.join(
            f'<div class="topicnote"><h5>{t["title"]}</h5><p>{t["content"]}</p>'
            f'<p><b>Common misconception:</b> {t["misconception"]}</p>'
            f'<p><b>How it can be tested:</b> {t["how_tested"]}</p></div>'
            for t in L['topics']
        )
        # vocab: support (term, definition) tuples OR plain strings
        def fmt_vocab(v):
            if isinstance(v, (list, tuple)) and len(v) >= 2:
                return f'<li><b>{v[0]}</b> &mdash; {v[1]}</li>'
            return f'<li>{v}</li>'
        vocab_html = ''.join(fmt_vocab(v) for v in L['vocab'])
        obj_html   = ''.join(f'<li>{o}</li>' for o in L['objectives'])
        ht_html    = ''.join(f'<li>{h}</li>' for h in L['how_tested'])
        prac_html  = ''.join(f'<li>{p}</li>' for p in L['practice'])
        exit_html  = ''.join(f'<li>{e}</li>' for e in L['exit_ticket'])

        # MCQ questions for this lesson
        qs_html = ''
        for qi, q in enumerate(L['questions'][:5], 1):
            seed = f'{course_slug}-u{unit_num}-l{li}-q{qi}'
            stem    = q[0]
            correct = q[1]
            dists   = q[2] if len(q) > 2 else []
            # Fallback: if old format (stem, [pts]), use pts[0] as correct, rest as distractors
            if isinstance(correct, list):
                pts = correct
                correct = pts[0] if pts else 'See lesson notes.'
                dists = pts[1:4] if len(pts) > 1 else ['Not enough data', 'See notes', 'Review lesson']
            while len(dists) < 3:
                dists.append('None of the above')
            qs_html += make_mcq(qi, stem, correct, dists, bank_id, course_slug, 'lesson', seed)

        # videos: support (title, desc, url) 3-tuples OR bare URL strings
        # Deduplication: if the same YouTube video was already embedded earlier in
        # this unit, emit only a plain fallback link (not a second iframe).
        def fmt_video(v, _seen=seen_vids_in_unit):
            if isinstance(v, (list, tuple)) and len(v) >= 3:
                title, desc, url = v[0], v[1], v[2]
            elif isinstance(v, (list, tuple)) and len(v) == 2:
                title, desc, url = v[0], '', v[1]
            else:
                title, desc, url = 'Video resource', '', str(v)
            yt = re.search(r'(?:v=|youtu\.be/)([A-Za-z0-9_-]{11})', url)
            vid_id = yt.group(1) if yt else None
            if vid_id and vid_id in _seen:
                # Already embedded in this unit — show a plain link instead
                watch_url = f'https://www.youtube.com/watch?v={vid_id}'
                return (
                    f'<a class="res video" target="_blank" rel="noopener" href="{watch_url}">'
                    f'<b>{title}</b>'
                    f'<span>Unit review video — Watch on YouTube</span>'
                    f'<code>youtu.be/{vid_id}</code></a>'
                )
            if vid_id:
                _seen.add(vid_id)
            return make_video(title, desc, url)
        vid_html = ''.join(fmt_video(v) for v in L.get('videos', []))

        # Optional lesson enrichment fields (backward-compatible — absent = no output)
        frq_note     = L.get('frq_note', '')
        key_formulas = L.get('key_formulas', [])
        exam_tip     = L.get('exam_tip', '')
        frq_html = (
            f'<div class="frq-note"><h5>FRQ / Essay Strategy</h5><p>{frq_note}</p></div>'
        ) if frq_note else ''
        formula_html = (
            '<div class="formula-strip"><h5>Key Formulas</h5><ul>' +
            ''.join(
                f'<li><b>{f[0]}</b>: {f[1]}</li>' if isinstance(f, (list, tuple)) else f'<li>{f}</li>'
                for f in key_formulas
            ) + '</ul></div>'
        ) if key_formulas else ''
        tip_html = (
            f'<div class="exam-tip"><h5>AP® Exam Tip</h5><p>{exam_tip}</p></div>'
        ) if exam_tip else ''

        lesson_quiz = quiz_section_html(bank_id, f'Lesson {li} — 5 practice questions', qs_html, 5)

        lessons_html += (
            f'<section class="lesson" data-search="{L["title"].lower()}">'
            f'<div class="lesson-head">'
            f'<label><input type="checkbox" data-progress="{abbrev}-u{unit_num}-l{li}"> Lesson {li}</label>'
            f'<h4>{L["title"]}</h4></div>'
            f'<div class="lesson-body">'
            f'<div class="lesson-grid">'
            f'<section><h5>Learn on this site</h5>{topics_html}</section>'
            f'<section>'
            f'<h5>Key Vocabulary</h5><ul>{vocab_html}</ul>'
            f'<h5>Objectives</h5><ul>{obj_html}</ul>'
            f'<h5>How this can be tested</h5><ul>{ht_html}</ul>'
            f'<h5>Practice before moving on</h5><ul>{prac_html}</ul>'
            f'</section></div>'
            f'{frq_html}{formula_html}'
            f'{lesson_quiz}'
            f'{tip_html}'
            f'<div class="exit"><h5>Exit ticket</h5><ul>{exit_html}</ul></div>'
            f'<div class="watch"><h5>Videos &amp; resources</h5>'
            f'<div class="resources">{vid_html}</div></div>'
            f'</div></section>'
        )

    # ── unit review bank
    ubank_id = f'{abbrev}-u{unit_num}-unit-bank'
    uqs_html = ''
    for qi, q in enumerate(unit_qs[:10], 1):
        seed    = f'{course_slug}-u{unit_num}-unit-q{qi}'
        stem    = q[0]
        correct = q[1]
        dists   = q[2] if len(q) > 2 else []
        if isinstance(correct, list):
            pts = correct
            correct = pts[0] if pts else 'See unit notes.'
            dists = pts[1:4] if len(pts) > 1 else ['Not enough data', 'See notes', 'Review unit']
        while len(dists) < 3:
            dists.append('None of the above')
        uqs_html += make_mcq(qi, stem, correct, dists, ubank_id, course_slug, 'unit', seed)

    unit_quiz = quiz_section_html(ubank_id, f'Unit {unit_num} Review — 10 questions', uqs_html, 10)
    ap_unit_checkpoint = ap_unit_checkpoint_html(course_slug, unit_title, lessons, is_non_ap)
    ap_unit_connections = ap_unit_connections_html(
        course_name, course_slug, unit_title, course_html_file, prev_unit, next_unit, is_non_ap
    )
    ap_unit_transfer_practice = ap_unit_transfer_practice_html(course_slug, unit_title, lessons, is_non_ap)
    ap_unit_prompt_builder = ap_unit_prompt_builder_html(course_slug, unit_title, lessons, is_non_ap)
    ap_unit_mistake_strip = ap_unit_mistake_strip_html(course_slug, is_non_ap)
    ap_unit_spaced_strip = ap_unit_spaced_strip_html(course_slug, is_non_ap)

    non_ap_badge = '<span class="badge non-ap">Non-AP® / Non-standardized</span>' if is_non_ap else ''

    return (
        f'<!doctype html><html lang="en">'
        f'<head><meta charset="utf-8">'
        f'<meta name="viewport" content="width=device-width,initial-scale=1">'
        f'<title>{course_name} — {unit_title} | Five &amp; A+</title>'
        f'<link rel="stylesheet" href="../assets/site.css"></head>'
        f'<body style="--AC:{accent_color};--ACfaint:{acfaint_val};">'
        f'{topnav_html(course_name, course_slug, course_html_file)}'
        f'<div class="masthead">'
        f'<div class="mh-inner">'
        f'<p class="mh-breadcrumb">'
        f'<a href="../index.html">Hub</a> / '
        f'<a href="../courses/{course_html_file}">{course_name}</a> / '
        f'Unit {unit_num}</p>'
        f'<p class="mh-tag">Unit {unit_num} of {course_name}</p>'
        f'<h1 class="mh-title">{unit_title.split(": ", 1)[-1] if unit_title.lower().startswith("unit ") else unit_title}</h1>'
        f'<p class="mh-sub">{unit_desc}</p>'
        f'<div class="mh-pills">'
        f'<span class="mh-pill">{len(lessons)} lessons</span>'
        f'<span class="mh-pill">{total_q} questions</span>'
        f'{non_ap_badge}'
        f'</div></div></div>'
        f'<div class="page-wrap">'
        f'{dashboard_html()}'
        f'<div class="gateway"><h4>Unit learning gateway</h4><ul>{gw_html}</ul></div>'
        f'{ap_unit_checkpoint}'
        f'{ap_unit_connections}'
        f'{ap_unit_transfer_practice}'
        f'{lessons_html}'
        f'{ap_unit_prompt_builder}'
        f'{unit_quiz}'
        f'{ap_unit_mistake_strip}'
        f'{ap_unit_spaced_strip}'
        f'</div>'
        f'{footer_html()}'
        f'<script src="../assets/app.js"></script>'
        f'</body></html>'
    )

# ── Course page renderer ──────────────────────────────────────────────────────

def render_course(course_name, course_slug, abbrev, units, course_qs,
                  course_html_file, accent_color='#4ade80', is_non_ap=False):
    """Generate the course overview page with unit map + 20 course-level MCQs."""

    h = accent_color.lstrip('#')
    if len(h) == 6:
        r, g, b = int(h[0:2],16), int(h[2:4],16), int(h[4:6],16)
        acfaint_val = f'rgba({r},{g},{b},0.07)'
    else:
        acfaint_val = 'rgba(74,222,128,0.07)'

    # unit map — strip "Unit N:" or "Period N:" prefix already present in title
    def _pill_label(u):
        import re as _re
        t = u['title']
        if _re.match(r'^Unit \d+\s*:', t):
            return 'Unit %d: %s' % (u['num'], t.split(':', 1)[1].strip())
        if _re.match(r'^Period \d+\s*:', t):
            return t  # "Period 1: 1491–1607" — self-contained, no extra prefix
        return 'Unit %d: %s' % (u['num'], t)

    unit_links = ''.join(
        f'<a class="mh-pill" href="../units/{u["file"]}">{_pill_label(u)}</a>'
        for u in units
    )

    # course-level MCQ bank
    cbank_id = f'{abbrev}-course-bank'
    cqs_html = ''
    for qi, q in enumerate(course_qs[:20], 1):
        seed    = f'{course_slug}-course-q{qi}'
        stem    = q[0]
        correct = q[1]
        dists   = q[2] if len(q) > 2 else []
        if isinstance(correct, list):
            pts = correct
            correct = pts[0] if pts else 'See course notes.'
            dists = pts[1:4] if len(pts) > 1 else ['Not enough data', 'See notes', 'Review course']
        while len(dists) < 3:
            dists.append('None of the above')
        cqs_html += make_mcq(qi, stem, correct, dists, cbank_id, course_slug, 'course', seed)

    course_quiz = quiz_section_html(cbank_id, f'{course_name} — 20 course-level questions', cqs_html, 20)
    ap_course_focus = ap_course_focus_html(course_name, course_slug, units, is_non_ap)
    ap_score_builder_ladder = ap_score_builder_ladder_html(course_slug, is_non_ap)
    ap_response_toolkit = ap_response_toolkit_html(course_slug, is_non_ap)
    ap_stimulus_strategy = ap_stimulus_strategy_html(course_slug, is_non_ap)
    ap_mistake_log = ap_mistake_log_html(course_slug, is_non_ap)
    ap_spaced_review = ap_spaced_review_html(course_slug, is_non_ap)
    ap_official_bridge = ap_official_bridge_html(course_slug, is_non_ap)
    ap_review_sprint = ap_review_sprint_html(course_slug, units, is_non_ap)
    ap_final_review_priorities = ap_final_review_priorities_html(course_slug, is_non_ap)
    ap_exam_day_strategy = ap_exam_day_strategy_html(course_slug, is_non_ap)

    non_ap_badge = '<span class="badge non-ap">Non-AP® / Non-standardized</span>' if is_non_ap else '<span class="badge">AP® Exam Review</span>'

    return (
        f'<!doctype html><html lang="en">'
        f'<head><meta charset="utf-8">'
        f'<meta name="viewport" content="width=device-width,initial-scale=1">'
        f'<title>{course_name} | Five &amp; A+</title>'
        f'<link rel="stylesheet" href="../assets/site.css"></head>'
        f'<body style="--AC:{accent_color};--ACfaint:{acfaint_val};">'
        f'<nav class="topnav">'
        f'<a class="nav-brand-link" href="../index.html">Five &amp; A+</a>'
        f'<a href="../index.html">← Hub</a>'
        f'<div class="topnav-right">'
        f'<input id="q" placeholder="Search this page…" oninput="filterSite()">'
        f'</div></nav>'
        f'<div class="masthead">'
        f'<div class="mh-inner">'
        f'<p class="mh-breadcrumb"><a href="../index.html">Hub</a> / {course_name}</p>'
        f'<p class="mh-tag">Course Overview</p>'
        f'<h1 class="mh-title">{course_name}</h1>'
        f'<p class="mh-sub">{len(units)} units &middot; {len(units)*30+20} total questions &middot; Click a unit to begin.</p>'
        f'<div class="mh-pills">{non_ap_badge}{unit_links}</div>'
        f'</div></div>'
        f'<div class="page-wrap">'
        f'{dashboard_html()}'
        f'{ap_course_focus}'
        f'{ap_score_builder_ladder}'
        f'{ap_response_toolkit}'
        f'{ap_stimulus_strategy}'
        f'{ap_mistake_log}'
        f'{ap_spaced_review}'
        f'{ap_official_bridge}'
        f'{ap_review_sprint}'
        f'{ap_final_review_priorities}'
        f'{ap_exam_day_strategy}'
        f'{course_quiz}'
        f'</div>'
        f'{footer_html()}'
        f'<script src="../assets/app.js"></script>'
        f'</body></html>'
    )

# ── Loader + main ─────────────────────────────────────────────────────────────

def load_course(slug):
    path = CONTENT_DIR / f'{slug}.py'
    if not path.exists():
        return None
    spec = importlib.util.spec_from_file_location(slug, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def normalize_selector(value):
    value = value.strip().lower().replace('\\', '/')
    value = value.rsplit('/', 1)[-1]
    return value[:-5] if value.endswith('.html') else value


def build_course_groups():
    content_files = sorted(p.stem for p in CONTENT_DIR.glob('*.py'))
    groups = {}

    for module_slug in content_files:
        mod = load_course(module_slug)
        if mod is None:
            continue
        course_slug = getattr(mod, 'SLUG', module_slug)
        if course_slug not in groups:
            groups[course_slug] = {
                'primary': mod,
                'modules': [],
                'module_slugs': [],
            }
        groups[course_slug]['modules'].append(mod)
        groups[course_slug]['module_slugs'].append(module_slug)

    return groups


def group_selectors(course_slug, group):
    primary = group['primary']
    course_file = getattr(primary, 'COURSE_FILE', f'{course_slug}.html')
    selectors = {
        normalize_selector(course_slug),
        normalize_selector(getattr(primary, 'ABBREV', '')),
        normalize_selector(course_file),
        normalize_selector(Path(course_file).stem),
    }
    selectors.update(normalize_selector(slug) for slug in group['module_slugs'])
    return {selector for selector in selectors if selector}


def select_course_groups(groups, selectors):
    if not selectors:
        return groups

    wanted = {normalize_selector(selector) for selector in selectors}
    all_selectors = {
        selector
        for course_slug, group in groups.items()
        for selector in group_selectors(course_slug, group)
    }
    selected = {
        course_slug: group
        for course_slug, group in groups.items()
        if wanted & group_selectors(course_slug, group)
    }
    missing = sorted(wanted - all_selectors)
    if missing:
        available = ', '.join(sorted(groups))
        raise ValueError(
            'Unknown course selector(s): '
            + ', '.join(missing)
            + f'\nAvailable course slugs: {available}'
        )
    return selected


def clear_generated_html(courses_dir, units_dir, dry_run=False):
    targets = []
    for directory in (courses_dir, units_dir):
        if directory.exists():
            targets.extend(sorted(directory.glob('*.html')))

    if dry_run:
        print(f'[dry-run] Would remove {len(targets)} stale generated HTML file(s).')
        return

    for target in targets:
        target.unlink()


def write_file(path, html, dry_run=False):
    if dry_run:
        return
    path.write_text(html, encoding='utf-8')


def generate(filter_selectors=None, output_dir=None, dry_run=False):
    output_root = Path(output_dir).expanduser().resolve() if output_dir else DEFAULT_OUTPUT_DIR
    courses_dir = output_root / 'courses'
    units_dir = output_root / 'units'

    groups = build_course_groups()
    course_mods = select_course_groups(groups, filter_selectors)

    if not dry_run:
        courses_dir.mkdir(parents=True, exist_ok=True)
        units_dir.mkdir(parents=True, exist_ok=True)

    # Full-site regeneration owns the generated HTML folders. Filtered runs only
    # overwrite the selected course files so they do not remove unrelated pages.
    if not filter_selectors:
        clear_generated_html(courses_dir, units_dir, dry_run=dry_run)

    total_units = 0
    total_courses = 0
    mode = 'planned' if dry_run else 'written'

    for course_slug in sorted(course_mods):
        group = course_mods[course_slug]
        primary_mod = group['primary']
        mods = group['modules']

        course_name = primary_mod.NAME
        abbrev = primary_mod.ABBREV
        course_html_file = getattr(primary_mod, 'COURSE_FILE', f'{course_slug}.html')
        accent_color = getattr(primary_mod, 'ACCENT_COLOR', '#4ade80')
        is_non_ap = getattr(primary_mod, 'NON_AP', False)

        all_units = []
        for m in mods:
            all_units.extend(m.UNITS)
        all_units.sort(key=lambda u: u['num'])

        for idx, unit in enumerate(all_units):
            prev_unit = all_units[idx - 1] if idx > 0 else None
            next_unit = all_units[idx + 1] if idx + 1 < len(all_units) else None
            html = render_unit(
                course_name=course_name,
                course_slug=course_slug,
                abbrev=abbrev,
                unit_num=unit['num'],
                unit_title=unit['title'],
                unit_desc=unit['desc'],
                gateway=unit['gateway'],
                lessons=unit['lessons'],
                unit_qs=unit.get('unit_qs', []),
                course_html_file=course_html_file,
                accent_color=accent_color,
                is_non_ap=is_non_ap,
                prev_unit=prev_unit,
                next_unit=next_unit,
            )
            write_file(units_dir / unit['file'], html, dry_run=dry_run)
            print(f'  [unit]   {unit["file"]}')
            total_units += 1

        course_qs = []
        for m in mods:
            course_qs.extend(getattr(m, 'COURSE_QS', []))

        if course_qs:
            html = render_course(
                course_name=course_name,
                course_slug=course_slug,
                abbrev=abbrev,
                units=all_units,
                course_qs=course_qs,
                course_html_file=course_html_file,
                accent_color=accent_color,
                is_non_ap=is_non_ap,
            )
            write_file(courses_dir / course_html_file, html, dry_run=dry_run)
            print(f'  [course] {course_html_file}')
            total_courses += 1

    print(f'\nDone - {total_units} unit page(s), {total_courses} course page(s) {mode}.')
    print(f'Output root: {output_root}')


def parse_args(argv=None):
    parser = argparse.ArgumentParser(
        description='Generate Five & A+ static course and unit pages.'
    )
    parser.add_argument(
        'selectors',
        nargs='*',
        help='Optional course selectors: module slug, course slug, abbrev, or course HTML file.',
    )
    parser.add_argument(
        '--output-dir',
        default=None,
        help='Site root to write into. Defaults to the repo-local site directory.',
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Print planned writes without changing files.',
    )
    return parser.parse_args(argv)


def main(argv=None):
    args = parse_args(argv)
    try:
        generate(
            filter_selectors=args.selectors or None,
            output_dir=args.output_dir,
            dry_run=args.dry_run,
        )
    except ValueError as exc:
        print(exc, file=sys.stderr)
        return 2
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
