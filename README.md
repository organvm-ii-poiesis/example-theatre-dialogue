# example-theatre-dialogue

[![CI](https://github.com/organvm-ii-poiesis/example-theatre-dialogue/actions/workflows/ci.yml/badge.svg)](https://github.com/organvm-ii-poiesis/example-theatre-dialogue/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/badge/coverage-pending-lightgrey)](https://github.com/organvm-ii-poiesis/example-theatre-dialogue)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/organvm-ii-poiesis/example-theatre-dialogue/blob/main/LICENSE)
[![Organ II](https://img.shields.io/badge/Organ-II%20Poiesis-EC4899)](https://github.com/organvm-ii-poiesis)
[![Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/organvm-ii-poiesis/example-theatre-dialogue)
[![Markdown](https://img.shields.io/badge/lang-Markdown-informational)](https://github.com/organvm-ii-poiesis/example-theatre-dialogue)


[![ORGAN-II: Poiesis](https://img.shields.io/badge/ORGAN--II-Poiesis-6a1b9a?style=flat-square)](https://github.com/organvm-ii-poiesis)
[![Status: In Development](https://img.shields.io/badge/status-in%20development-yellow?style=flat-square)]()
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

**Interactive theatre where audience choices shape dialogue in real-time — a system for collective authorship of live performance.**

`example-theatre-dialogue` is an ORGAN-II demonstration project that reimagines theatrical dialogue as a participatory, branching, and recursively authored experience. Rather than treating the script as a fixed artifact delivered from playwright to performer to audience, this project treats dialogue as an emergent structure — one that arises from the interplay between pre-authored narrative scaffolding, performer improvisation, audience voting, and (optionally) LLM-assisted dialogue generation.

The result is a theatre where no two performances are identical, where the audience is a co-author rather than a passive witness, and where the boundary between script and improvisation becomes productively blurred.

---

## Table of Contents

- [Artistic Purpose](#artistic-purpose)
- [Conceptual Approach](#conceptual-approach)
- [Comparative Landscape](#comparative-landscape)
- [Planned Architecture](#planned-architecture)
- [Cross-Organ Connections](#cross-organ-connections)
- [Theory Implemented](#theory-implemented)
- [Related Work](#related-work)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Artistic Purpose

Theatre has always been a live medium — responsive to the energy in the room, the cough in the third row, the collective breath held during a monologue. But the dialogue itself has remained largely static since the invention of the printed script. Even in devised theatre and improvisation, the audience's role is typically limited to laughter, applause, and the ambient pressure of attention. The audience watches. The performers perform. The script, whether memorized or improvised, flows in one direction.

`example-theatre-dialogue` asks: **what happens when the audience can steer the dialogue itself?**

Not in the shallow sense of "choose your own adventure" audience participation — not the comedian asking "where are you from?" or the pantomime's "he's behind you!" — but in a structurally meaningful way. The audience votes on narrative branches. Those votes reshape which scenes unfold, which characters speak, which conflicts escalate or resolve. The performers receive these choices through a live dashboard and must adapt — drawing on pre-authored dialogue variants, improvisation skills, and (when configured) AI-generated bridging text that stitches audience choices into coherent theatrical language.

The artistic goal is threefold:

1. **Collective authorship as aesthetic experience.** The audience discovers that their choices have consequences — that steering a character toward confrontation rather than reconciliation changes not just the plot but the emotional texture of the room. The audience becomes responsible for the story in a way that transforms passive consumption into active participation.

2. **Performer virtuosity under constraint.** The performers are not simply reading from a teleprompter of AI-generated text. They are navigating a branching structure in real-time, choosing how to embody dialogue they may not have rehearsed, finding the emotional truth in transitions that were decided thirty seconds ago by a room full of strangers. This is a new kind of theatrical skill — part improviser, part interpreter, part navigator.

3. **Dialogue as living system.** The script is not a document but a process. It has initial conditions (the authored scaffold), environmental inputs (audience votes), adaptive agents (performers), and emergent properties (the unique performance that results). This aligns with the broader ORGAN-II philosophy that art is not a product but a generative system.

---

## Conceptual Approach

### Theatre as Participatory System

The conceptual foundation of `example-theatre-dialogue` draws on a rich tradition of participatory and interactive theatre, but reframes it through the lens of systems thinking and computational structure.

**Augusto Boal's Theatre of the Oppressed** demonstrated that audiences could become "spect-actors" — intervening in theatrical scenes to explore alternative outcomes for situations of social oppression. Boal's Forum Theatre invited audience members to physically replace performers on stage and try different approaches to a scene. This was revolutionary in its politics but limited in its scalability: only one audience member could intervene at a time, and the intervention was physical, requiring courage and theatrical skill.

`example-theatre-dialogue` extends Boal's insight — that the audience has agency, that theatre can be a rehearsal for reality — but implements it through a distributed voting mechanism that allows the entire audience to participate simultaneously. Every audience member's phone becomes a voting device. Every vote shapes the narrative. The collective will of the room steers the story, creating a form of theatrical democracy that Boal intuited but could not implement with the technology of his era.

**Immersive theatre** (Punchdrunk's *Sleep No More*, Third Rail Projects' *Then She Fell*, Meow Wolf's installations) demonstrated that audiences could move through theatrical spaces, choosing their own paths and encountering different scenes. But immersive theatre typically offers spatial agency — you choose where to go — rather than narrative agency. The story unfolds around you regardless of your choices. You are an explorer, not an author.

`example-theatre-dialogue` inverts this: the audience remains seated (or distributed, in a digital performance), but their choices reshape what happens on stage. Spatial freedom is traded for narrative power. The audience cannot wander through the set, but they can decide whether the protagonist forgives or condemns, whether the secret is revealed in Act Two or withheld until the climax, whether the story ends in reconciliation or rupture.

### Dialogue Generation as Collective Authorship

The dialogue in `example-theatre-dialogue` is not purely pre-written, nor is it purely improvised, nor is it purely AI-generated. It exists on a spectrum:

- **Authored scaffold:** The playwright creates a branching narrative structure with fully written dialogue for major scenes and decision points. This is the skeleton — the dramatic architecture that ensures coherence regardless of which branches the audience selects.

- **Variant dialogue:** For each branching point, the playwright writes 2–4 dialogue variants that correspond to different audience choices. These variants are rehearsed and ready for performance. They represent the "expected" paths through the narrative.

- **Improvisation layer:** When audience choices create unexpected combinations — selecting Branch A in Act One but Branch D in Act Two, a pairing the playwright did not anticipate — performers must bridge the gap through improvisation. The system provides performers with context notes (character motivations, plot points that must be addressed) to guide their improvisation.

- **LLM-assisted bridging (optional):** For digital or hybrid performances, the system can generate bridging dialogue using a language model that has been fine-tuned on the playwright's style and the show's thematic vocabulary. This generated text appears on the performer's dashboard as suggested lines — not a script to be read verbatim, but raw material to be interpreted and embodied. The performer always has the final say.

This layered approach means that `example-theatre-dialogue` is not an "AI theatre" project in the reductive sense. The AI is one tool among many, subordinate to the playwright's vision and the performer's craft. The system's intelligence is distributed: it lives in the authored structure, in the audience's collective choices, in the performer's improvisational skill, and (optionally) in the language model's generative capacity.

---

## Comparative Landscape

`example-theatre-dialogue` sits at the intersection of several existing tools and traditions, but occupies a distinct position that none of them fully address.

| Tool / Tradition | What It Does Well | Where It Falls Short (for Our Purposes) |
|---|---|---|
| **Ink (Inkle Studios)** | Elegant branching narrative scripting language. Powers *80 Days*, *Heaven's Vault*. Clean syntax for conditional dialogue. | Designed for single-player digital games, not live multi-audience theatre. No real-time voting, no performer layer. |
| **Twine** | Accessible hypertext fiction tool. Visual node editor for branching stories. Large community. | Web-based, single-reader experience. No audience aggregation, no live performance integration. |
| **Dialogflow (Google)** | Conversational AI for chatbots. Intent recognition, entity extraction, context management. | Optimized for 1:1 human-machine conversation, not 1:many theatrical dialogue with aesthetic goals. |
| **Boal's Theatre of the Oppressed** | Pioneered audience-as-agent in live theatre. Deep political and pedagogical framework. | Physical intervention model limits participation to one person at a time. No digital infrastructure. |
| **Punchdrunk / Sleep No More** | Spatial agency, atmospheric immersion, audience-as-explorer. Set the standard for immersive theatre. | Narrative is fixed; audience chooses perspective, not plot. No collective decision-making mechanism. |
| **AI Dungeon / Character.ai** | Demonstrated public appetite for AI-generated interactive narrative. | Single-player, text-only, no theatrical embodiment, no authored scaffold, no quality control. |

`example-theatre-dialogue` combines the branching narrative structure of Ink/Twine, the audience-as-agent philosophy of Boal, the atmospheric ambition of immersive theatre, and the generative capacity of modern LLMs — but wraps it all in a live performance framework where human performers are the final interpretive layer.

---

## Planned Architecture

The system is designed as four interconnected layers, each with distinct responsibilities.

### 1. Dialogue Tree Engine

The core data structure is a directed acyclic graph (DAG) of dialogue nodes. Each node contains:

- **Scene metadata:** Act, scene number, characters present, location, time of day.
- **Dialogue text:** The authored lines for this node, including stage directions and emotional notes.
- **Branch points:** Decision moments where the audience votes. Each branch point specifies the question posed to the audience, the available options (2–4), the voting window duration, and the target nodes for each option.
- **Constraints:** Rules that govern which branches are available based on prior choices (e.g., "this branch is only available if the audience chose to reveal the secret in Act One").
- **Improvisation notes:** Context for performers when navigating unexpected branch combinations.

The engine traverses this graph in real-time, advancing to the next node based on audience votes, and exposing the current state to the performer dashboard and the optional LLM bridging layer.

### 2. Audience Voting System

Audience members connect via their phones (QR code at venue entry or link in digital programme). The voting interface is deliberately minimal — large buttons, clear choices, no login required. Design principles:

- **Low friction:** Voting must take less than 5 seconds. No accounts, no sign-up, no app download.
- **Visible stakes:** Each choice is presented with a brief, evocative description of its consequences (without spoiling the full outcome).
- **Aggregate display:** After voting closes, the room sees the results — a bar chart of collective will — before the scene continues. This moment of collective self-awareness ("we chose this together") is itself a theatrical event.
- **Timeout handling:** If the voting window expires, the system defaults to the playwright's preferred branch. The show never stalls.

### 3. Performer Dashboard

Performers wear earpieces or have tablet-sized displays in the wings (or, for intimate theatre, integrated into the set design). The dashboard shows:

- **Current scene:** The dialogue text for the node the engine is currently on.
- **Upcoming branch:** A preview of the next decision point, so performers can prepare for multiple possible continuations.
- **Audience vote results:** Real-time display of how the vote is trending (during the voting window) and the final result.
- **Improvisation prompts:** When the engine detects an unexpected branch combination, it surfaces context notes and (if LLM bridging is enabled) suggested transitional lines.
- **Stage manager controls:** The stage manager can pause the engine, override a branch (for safety or technical reasons), or extend a voting window.

### 4. LLM Bridging Layer (Optional)

When enabled, a language model generates transitional dialogue for branch combinations that the playwright did not fully script. The model receives:

- The current scene context (characters, location, emotional state).
- The prior branch history (what choices the audience has made so far).
- The playwright's style guide (vocabulary, sentence rhythm, thematic concerns).
- The target emotional beat (where the scene needs to arrive for the next authored node to make sense).

The generated text is presented to performers as suggestions, not commands. Performers may use it verbatim, paraphrase it, ignore it entirely, or use it as a springboard for improvisation. The system logs which generated lines performers actually used, creating a feedback dataset for future fine-tuning.

---

## Cross-Organ Connections

`example-theatre-dialogue` does not exist in isolation. It connects to other ORGAN-II projects and draws on the theoretical and infrastructural work of other organs.

### Within ORGAN-II

- **[core-engine](https://github.com/organvm-ii-poiesis/core-engine):** The core generative engine provides the computational substrate. Audience parameters (vote histories, participation rates, emotional trajectory as inferred from voting patterns) are fed into core-engine as input parameters that steer the generative process. The dialogue tree engine is, in a sense, a specialized front-end for core-engine's branching logic.

- **[performance-sdk](https://github.com/organvm-ii-poiesis/performance-sdk):** The performer dashboard is built on performance-sdk, which provides the real-time communication layer between the dialogue engine and the performers. Performance-sdk handles WebSocket connections, low-latency updates, and the stage manager's control interface. The dashboard for theatre direction — cueing, timing, override controls — is a performance-sdk application.

- **[metasystem-master](https://github.com/organvm-ii-poiesis/metasystem-master):** The meta-creative framework that governs how ORGAN-II projects relate to each other. `example-theatre-dialogue` is a demonstration of metasystem-master's principle that creative works should be systems, not static artifacts.

### Across Organs

- **ORGAN-I (Theoria) → [recursive-engine](https://github.com/organvm-i-theoria/recursive-engine--generative-entity):** The theoretical foundation. Recursive-engine models narrative as a recursive structure where stories contain stories, where the telling of a story is itself a story, where self-reference is not a bug but a feature. `example-theatre-dialogue` implements this by making the audience's act of choosing part of the narrative — the story is about an audience that shapes a story. The recursion is not merely structural; it is experiential.

- **ORGAN-IV (Taxis) → [agentic-titan](https://github.com/organvm-iv-taxis/agentic-titan):** The orchestration layer. In a multi-venue or networked performance scenario, agentic-titan could coordinate multiple simultaneous instances of `example-theatre-dialogue`, aggregating votes across locations, managing shared narrative state, and ensuring that the distributed performance remains coherent.

- **ORGAN-V (Logos) → [public-process](https://github.com/organvm-v-logos/public-process):** The development of `example-theatre-dialogue` — design decisions, technical challenges, artistic compromises — will be documented as essays in ORGAN-V's public process, contributing to the building-in-public ethos of the broader system.

---

## Theory Implemented

`example-theatre-dialogue` is not merely an engineering project. It implements specific theoretical commitments from ORGAN-I's epistemological and ontological work.

### Narrative as Recursive Structure

From recursive-engine's core thesis: narrative is not a linear sequence of events but a recursive structure where each level of telling contains and transforms the levels below it. In traditional theatre, the recursion is implicit — the play-within-a-play in *Hamlet*, the unreliable narrator in *An Inspector Calls*. In `example-theatre-dialogue`, the recursion is explicit and structural:

- **Level 0:** The authored scaffold — the playwright's original branching structure.
- **Level 1:** The audience's choices — a narrative about collective decision-making that is itself embedded within the authored narrative.
- **Level 2:** The performer's interpretation — a narrative about embodying and adapting text that is itself embedded within the audience's choices.
- **Level 3:** The AI's generation (when enabled) — a narrative about machine creativity that is itself embedded within the performer's interpretation.

Each level observes and transforms the levels below it, creating the kind of recursive depth that recursive-engine theorizes.

### Self-Referential Storytelling

The system is designed to support — and encourage — scripts that are *about* the act of collective storytelling. The ideal `example-theatre-dialogue` production is one where the characters within the play are themselves making collective decisions, where the audience's vote mirrors the characters' dilemma, where the boundary between the fictional world and the theatrical event becomes productively thin.

This is not a gimmick. It is an implementation of the self-referential principle at the heart of ORGAN-I's epistemological work: systems that model themselves generate richer, more adaptive behavior than systems that merely model their environment.

### Emergence from Constraint

The dialogue tree is a constraint structure — it limits what can happen. But within those constraints, genuine emergence occurs: unpredicted branch combinations, unexpected audience coalitions, performer discoveries that arise from navigating unfamiliar transitions. The system is designed so that constraint produces, rather than prevents, creative surprise. This mirrors recursive-engine's formalization of how bounded systems generate unbounded novelty.

---

## Related Work

Beyond the comparative landscape above, `example-theatre-dialogue` is informed by and in dialogue with:

- **Janet Murray, *Hamlet on the Holodeck* (1997):** The foundational text on interactive narrative and the "cyberbard." Murray's vision of procedural, participatory, spatial, and encyclopedic storytelling directly informs our design principles.
- **Chris Crawford, *Chris Crawford on Interactive Storytelling* (2004):** Crawford's insistence that true interactive storytelling requires a "story world" model — not just branching paths — influences our approach to constraint-based dialogue generation.
- **Emily Short's work on quality-based narrative (QBN):** Short's demonstrations (in *Fallen London*, *Annals of the Parrigues*) that branching narrative can be driven by accumulated qualities rather than binary choices informs our constraint system, where prior audience votes accumulate as "narrative qualities" that unlock or restrict future branches.
- **Rimini Protokoll's participatory theatre:** Productions like *100% City* and *Situation Rooms* where audience members are the performers, making choices that constitute the performance. Our project shares their commitment to collective agency but maintains a distinction between audience and performer.
- **The Living Theatre and Open Theatre movements (1960s–70s):** Historical precedent for breaking the fourth wall, inviting audience participation, and treating theatre as a collective ritual rather than a commodity. `example-theatre-dialogue` inherits their political commitment to audience agency but implements it through digital infrastructure rather than countercultural gesture.

---

## Roadmap

| Phase | Milestone | Status |
|-------|-----------|--------|
| **0** | Conceptual design and README | In progress |
| **1** | Dialogue tree data structure and parser | Planned |
| **2** | Minimal audience voting prototype (WebSocket + mobile web) | Planned |
| **3** | Performer dashboard MVP | Planned |
| **4** | Integration with core-engine and performance-sdk | Planned |
| **5** | LLM bridging layer (optional module) | Planned |
| **6** | First staged reading with live audience | Planned |
| **7** | Production-ready release with documentation | Planned |

Development will proceed iteratively. Phases 1–3 can be developed in parallel by separate contributors. Phase 4 requires coordination with the core-engine and performance-sdk teams. Phase 6 requires partnership with a theatre company or performance space.

---

## Contributing

This project is in early development. Contributions are welcome in the following areas:

- **Playwriting:** If you write for theatre and are interested in branching narrative, we would love to collaborate on sample scripts that test the dialogue tree engine.
- **Theatre technology:** Experience with live performance tech (QLab, show control systems, backstage communication) is valuable for the performer dashboard.
- **Frontend development:** The audience voting interface and performer dashboard need clean, responsive, low-latency web interfaces.
- **Interactive fiction:** If you have experience with Ink, Twine, ChoiceScript, or similar tools, your knowledge of branching narrative design patterns is directly applicable.
- **Theatre studies:** Academic perspectives on participatory theatre, audience agency, and the ethics of collective authorship are welcome.

Please open an issue to discuss your idea before submitting a pull request. See the ORGAN-II [contributing guidelines](https://github.com/organvm-ii-poiesis/.github/blob/main/CONTRIBUTING.md) for general standards.

---

## License

[MIT](LICENSE)

This project is open-source. The dialogue tree engine, voting system, and performer dashboard are freely available for use, modification, and distribution. Individual scripts written for the system may carry their own licenses at the playwright's discretion.

---

## Author

**[@4444j99](https://github.com/4444J99)**

Part of the [ORGAN-II: Poiesis](https://github.com/organvm-ii-poiesis) creative systems organ — generative art, performance technology, and experiential design within the [eight-organ system](https://github.com/meta-organvm).
