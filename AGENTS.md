# Agent guidelines for the NIKA website

These guidelines apply to any agent that edits this repository. Follow them for
every change to the website's text, and use them when reviewing that text.

## What this repository is

This repository is the official technical project page for **NIKA (Network
Incident Benchmark for AI Agents)**. NIKA is an open benchmark that evaluates AI
agents on realistic, reproducible network troubleshooting incidents in live
emulated networks. It has two parts: a benchmark suite of incidents and an
orchestrator that runs them. This page presents the project. It is not the
framework documentation.

- Public website: https://sands-lab.github.io/nika/
- Framework repository: https://github.com/sands-lab/nika
- Content authority: the public `main` branch, https://github.com/sands-lab/nika/tree/main
- Framework documentation: https://github.com/sands-lab/nika/blob/main/docs/README.md

**Audience.** The page is for AI engineers, network engineers, and researchers
seeing NIKA for the first time. Use terminology that connects these audiences
in the context of network troubleshooting and benchmarking. Do not assume
knowledge of NIKA's internals, but do not write a beginner's networking tutorial.

**Spelling.** Always write **NIKA** in capitals, including in headings, alt
text and link text. Call the benchmark **NIKA** or **the NIKA benchmark** in
public-facing prose, not an internal package or release label such as
`nika-bench`. Preserve literal identifiers only where necessary in verified
code, URLs or citations.

## Factual claims need evidence

Before you add or change any factual claim, check both the relevant
documentation **and** the implementation on the public `main` branch. Factual claims
include capability descriptions, supported scenarios, faults, agents,
integrations, tools, commands, counts, configuration examples and
compatibility statements.

- Do not use the internal development branch as evidence for public website
  content. This replaces the earlier instruction to consult that branch.
- Text already on the website is not evidence. It may be out of date.
- The `main` README is a starting point, not text to copy. Its wording is
  compressed and written for existing users. Check what it says against the
  docs and the code, then rewrite it for a first-time reader.
- Never invent or guess capabilities, claims, links, counts or roadmap
  promises.
- If the evidence is missing, contradicts itself, or the request is unclear,
  ask the user one focused question before you add the content.

## Style rules

### Write for a website, not a paper

Visitors scan this page; they should not have to read paragraphs to understand
each section. Concision and technical precision must work together. Making
something understandable does not mean expanding it into an explanation of
every detail.

- **Section introductions:** usually one short sentence. Do not summarize all
  the cards or rehearse the whole agent workflow before showing them.
- **Cards:** communicate one point in a short sentence or a compact list.
  A second sentence must add essential information, not background or caveats.
  If a card needs a paragraph, cut detail or move it to the docs.
- **Captions:** use a short label, or omit one that merely repeats the heading
  or image. Do not write paper-style captions such as "Conceptual illustration
  of NIKA: a benchmark suite of network incidents and an orchestrator...".
- **Headings:** use concise, conventional technical terms that identify the
  subject. Avoid both long conversational headings and compressed advertising
  phrases. Shorter is not better if the meaning becomes vague or misleading.

These are defaults, not word quotas. Review the visual density of the whole
section on desktop and mobile, not just whether individual sentences are
grammatical. A fact can be accurate and still be unnecessary on the website.

### Write an overview, not a manual

Explain what NIKA makes possible and why it matters. Leave operational detail to
the official docs and link to the relevant page. Operational detail includes
prerequisites, schemas, field names, IDs, configuration keys, installation steps
and exhaustive API references. Short, selected tool lists are appropriate in
the telemetry section; they are not a substitute for full tool documentation.

Use established networking and AI terms, including telemetry, packet capture,
routing, MCP and benchmark evaluation, where they accurately name the subject.
Do not replace useful technical vocabulary with generic phrases such as
"collect evidence" merely to sound accessible. Expand an unfamiliar acronym
once when needed to connect the two audiences; do not add repeated definitions.
Introduce NIKA-specific concepts briefly only when the reader needs them. If
explaining a release or internal concept adds clutter, omit the concept instead.
Code snippets are allowed if brief, verified against `main`, and useful to the
overview rather than an installation or configuration tutorial.

### Write for a first visit

Use natural, concise sentences in prose; short labels and list items need not
be complete sentences. Avoid stacks of insider nouns that only make sense to
someone who already knows the codebase. Describe what a capability does without
turning each card into a tutorial. Do not replace a scannable list with a dense
paragraph in the name of accessibility.

| Avoid | Prefer (style illustration, not approved copy) |
| --- | --- |
| "Sized scenarios" | "networks of different sizes" |
| "Fields in a case row" | "describing a troubleshooting task" |
| "Score submitted resource and fault-type IDs against benchmark ground truth" | "checking whether an agent identifies the cause of an incident" |
| "Bring Your Own (BYO)" with no explanation | "Agent integration", with one short explanation |
| "Live Networks Without Hardware" | "Network emulation"; do not imply that execution needs no hardware |
| "Ready-Made Incidents" | A precise subject label, such as "Network scenarios and faults" |
| "Evaluate the Agent You Choose" plus a long introduction | "Agent integration" plus only the essential compatibility point |
| "How Agents Investigate the Network" | "MCP & Network Telemetry" when that is the section's subject |
| "Claude, GPT-4, Gemini, open-source LLMs…" | Omit the model list; describe compatibility only in the integration section |

The "Prefer" column shows the style only. Each phrase still has to be checked
against `main` before you use it, and it is not final wording.

### Organize telemetry cards for scanning

Make the network telemetry and MCP purpose explicit in the section heading.
Group related tools under meaningful technical headings, such as host probes,
packet capture or routing state. A compact list of tools within each card is
welcome and often clearer than prose. Use a tool name and a brief purpose where
that helps readers; do not include signatures, parameter schemas or exhaustive
inventories.

Group by technical function, not internal server/module boundaries. Do not
create one card per individual tool or invent an arbitrary number of cards to
fill a layout. Do not force useful technical names into generic action headings.
Grouping must not imply that different tools are interchangeable or universally
available; state a necessary availability distinction briefly, without repeating
the same qualification in every card.

### Keep network work separate from benchmark mechanics

Diagnosis and telemetry are what an agent does inside the network. Running
sessions, evaluation and result submission are how the benchmark works. Keep
the two apart. For example, task submission is not a network tool and does not
belong among the telemetry or tool cards. Mention it only where the page
explains evaluation, and only if it is needed there.

### One job per section

Each section answers one question. Agent and model compatibility belongs in the
agents and integration section. Do not repeat it in the telemetry or tools text.
Remove repeated points, trivial filler, unexplained slogans such as "Bring Your
Own", and empty promises such as "More tools coming soon". When you describe how
users connect their own agents, use clear language that has been checked
against `main`. Do not repeat the diagnosis-and-submission workflow in the
compatibility introduction if it is already explained elsewhere.

### Keep emulation backends in the background

Present NIKA's benchmark and network capabilities, not its implementation
dependencies. Kathará and Containerlab are emulation backends, not the organizing
theme of the page. Mention them once in a relevant place when useful, rather
than repeating them in the overview, feature cards and every scenario.
Elsewhere, use "emulated networks" or "emulation backends" when sufficient.
Retain a backend-specific distinction only when it materially affects the
capability being described. Keep established links in an appropriate place;
preserving citations does not require repeating product names across sections.

### Restrained, credible tone

NIKA is an established research project. Write in a factual, specific tone.
Do not use hype, marketing inflation, or claims about prestige or popularity
that you cannot support. Avoid clever-sounding but imprecise promises such as
"without hardware" or "zero-effort". Brevity is not permission to write slogans.
Do not add content the user did not ask for. Do not state the project's
reputation as a public claim.

### Links and references

- Do not add third-party links, services, catalogs, comparisons, endorsements or
  references unless the user asks for them. For example, do not link
  `mcp.so` or any similar directory.
- Keep existing official project links and established technical citations,
  such as the Pingmesh paper or the Kathará and Containerlab sites. Do not remove
  them as a group without a request.
- Ask before you recommend any new external resource.

### Evergreen wording

Refer to **NIKA** or **the NIKA benchmark**, not release labels such as
"the frozen release nika-bench 0.2.0", in descriptive text. Do not add version
numbers to badges, introductions or cards just because a source provides them.
A release version belongs only where identifying that release is essential,
such as a verified command or an explicitly requested release announcement.

Counts must have a clear meaning and a reason to be on the page. Verification
alone does not make a number useful. Do not add unexplained numbers, dates,
versions or internal names, or long explanations to justify their inclusion.

Descriptive text must not name specific model versions such as GPT-4, and must
not include model lists that change over time. Avoid lists of models or vendors
even when they have no version numbers. Include version-specific details only
where needed in a verified code snippet or in technical documentation.

### Figures follow the same rules

Check visible text inside diagrams as well as HTML copy. Outdated counts, model
lists and unsupported claims do not become acceptable when embedded in an image.
Flag a figure that needs correction and respect the authorized editing scope;
do not compensate for it with a long disclaimer caption or call the page fully
compliant while leaving the issue unresolved.

## Editing this repository

- **Source vs. output.** `content/*.md` and `index.template.html` are the
  source. `index.html` is generated by `npm run build`. Never edit
  `index.html` by itself. When you change a source file, rebuild so the two stay
  consistent. Some text, including the code snippets and BibTeX entries, lives
  directly in `index.template.html`. The same rules apply to it. See
  `README.md` for the content block format.
- **Slack.** Public links point to the stable page `community/`
  (https://sands-lab.github.io/nika/community/). The raw `join.slack.com` invite
  appears only in `community/invite-url.js`.
- **Scope.** Change only what the user asked for. Do not redesign the page or
  rewrite unrelated sections. Do not make unrequested changes, even if you
  believe they would improve the website. Propose any additional improvement
  first and wait for the user's explicit approval before implementing it.
  A request to revise these guidelines is documentation-only: do not also edit
  website content, templates, assets or generated output.
- **Publishing.** Do not commit, push, open pull requests or deploy unless the
  user explicitly asks. A push to `main` starts the deployment workflow, which
  publishes the public site.

## Check before you deliver

1. Is every new or changed claim about NIKA (capability, count, command,
   configuration, compatibility) checked against `main` docs **and** code? Is
   every new or changed link checked to work and to point to a relevant,
   approved source? Citations and external links need that check, not a check
   against the implementation. If anything is unverified, ask the user one
   focused question.
2. Can visitors scan the headings, introductions, cards and captions without
   reading dense paragraphs? Have explanations been cut rather than merely
   reworded? Does the page feel like a website, not a paper or a manual?
3. Do the headings use precise terms shared by network and AI engineers, rather
   than slogans or generic conversational phrases? Are compact tool lists kept
   where they communicate better than prose?
4. Is each point in the one section where it belongs? Are emulation backends,
   compatibility claims and workflow explanations repeated unnecessarily?
5. Is NIKA named consistently, without release/package labels or gratuitous
   version numbers? Are any counts useful, clear and verified?
6. Is there any model list, hype, unsupported figure text or unrequested external
   link? A passing text test does not replace editorial and visual review.
7. Did you edit only the source files in scope, rebuild `index.html` when
   needed, and leave committing and publishing to the user?
