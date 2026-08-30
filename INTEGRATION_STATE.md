# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 17:37 PDT**.

Full branch-level consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**.

- finite pending after review: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Mugen person-first: seen/consumed `c34d8ca22e9eac6d6a035bfc4e738a09d186ec3e`
- Wall: forward-reviewed through `b02fb6d5fe5c142cc554474cbc501bb3e17ed0ee`; formal consumed remains null while older cumulative recovery is open.
- Core Rooms: seen/forward-reviewed through `4e11636b450374ae023ffb46098159f9fc3d9c80`; older safe-baseline recovery is complete through historical **2026-08-24 21:46**; **20:46 is next**; formal consumed remains null until cumulative recovery closes.

Opening and closing censuses found the same 28 active miner refs. No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### Mugen person-first — `d59fda7e… → c34d8ca2…`

The delta was reviewed checkpoint-first through intake-local findings, receipts and site candidates. The keeper is Dean's January 2021 whole-club wedding dream and its February sequel. In the first, dream-Mugen tells Dean to put on a wedding suit while his sleeping brain also casts Mugen as the one person in a strip-club outfit. Anthos hears the contradiction and settles it with `master dean we are a strip club first`. A month later another Dean dream starts as Underlords-versus-Council warfare, still finds room for dream-Mugen pole-dancing, then dissolves into a beach, bacon dragon and baby Underlord. Anthos immediately tries to promote the involuntary material into `underlords fanfics`; Dean protests that it was a dream; Anthos answers `its potential 🤩`.

The lower-threshold read is useful without pretending dream content is literal conduct: Dean's subconscious had already compressed Mugen into two familiar social roles at once — mum-shaped authority who can tell him to dress properly, and walking exemption clause for UL's strip-club house joke. The contradiction is the character evidence.

The same delta also strengthens ShiyaX's `AUUUU` arrival-call genealogy and Mugen's habit of answering people inside their own joke language, but that material was retained as texture rather than given a duplicate public object.

### Wall — forward suffix `42bd15c8… → b02fb6d5…`

The new Wall suffix was reviewed checkpoint-first. The keeper is Ansun's insect callback. On August 25, 2020, Club Only already has an ant-related sequence around `For my ants`; on November 4, Ren says `I still got your grasshopper ss`, Ansun immediately asks `and my ants?`, Ren answers `Yeth`, and Anthos supplies a `Small center for ants` reaction. That is enough for the ordinary human read: the grasshopper was not Ansun's only remembered insect file, and he expected Ren to have retained separate ant material too. The nearby images remain visually uninspected, so the wiki does not assign those pixels to the ants or promote POSTED BY into MADE BY/CAPTURED BY/FEATURING.

Gabu's May 2021 `What are you all doing with me while i sleep?` followed by tags to Mugen, Kuwei and Rummy is useful accusatory conversation texture, but the missing trigger means no physical prank or exact offense is invented. Feli's Anjou-statue sequence remains image-dependent.

### Core Rooms — historical 21:46 recovery package

Older Core recovery advanced one package through the handoffs corresponding to historical **2026-08-24 21:46** (`checkpoint/findings/receipts/site-candidates-2026-08-25-0446`).

Three useful families emerged:

- Ansun's July 28 `if i become godfather one more time in mafia im changing my name to godfather` threat is later paid off by bot output directly resolving his account as `Godfather`. Current MAIN already owns the richer person-shaped version, so WIKI did not clone it.
- Wall time-to-shame record logic is already visible in March–April 2021 before later ranking language: Mugen says `WE SHOULD HAVE A RECORD`, Woohyuk calls Aeshleen's under-an-hour Wall appearance `That's a record`, and Mugen says `ghoulie got competition`. This was reconciled with the existing Wall speedrun/ranking genealogy rather than duplicated into a separate history object.
- Ghoulie and Panda's July 7 Wall conversation becomes imaginary server architecture. Mugen says `Yall can just talk here and we won't even need ss`; Snow stage-directs `-renames it Ghoulie & Panda's house of shame-`, then jokes that their volume might need its own subchannel. No channel was literally renamed and no real subchannel is claimed. The joke is an evidence-room capacity problem: if the recurring defendants generate the material inside the Wall itself, screenshot transport has become optional and the imaginary property now needs an annex.

Core's unresolved `eats people` / `CANNIBALISM??` / `or the seal?` family remains unresolved pending the missing media/context. Recovery boundary is now **21:46; 20:46 next**.

## Reader-facing change / surface split

### WIKI

`src/data/integrator-episodes-20260829-1737.ts` adds three bounded incident owners:

- **Master Dean, We Are a Strip Club First**
- **Ghoulie & Panda's House of Shame**
- **And My Ants?**

The incident index, dynamic Episode route and season pages were wired to the new module. Reader head `20b0bdb040e5716849e55eb0a308de7ac9498e4d` passed standalone **Build Underlords Wiki** run `33284020615` and the complete **Deploy Underlords Wiki Preview** run `33284020644`, including build, deploy and report, all successfully.

### MAIN

No new reader-facing MAIN lore object was added by this integrator pass. Ansun's Godfather payoff is already richly owned by his current MAIN biography. The Dean dream and House-of-Shame material are cleaner as bounded WIKI Episodes, while the ant callback is incident-shaped rather than another paragraph bolted onto an already substantial Ansun dossier. MAIN receives the reconciled branch ledger and durable dual-pass report instead.

## Duplicate / corroborative material combined

- Ansun's Godfather display-name payoff was deduplicated against current MAIN rather than republished.
- March–April 2021 time-to-shame `record` language was folded into the existing Wall speedrun/ranking evidence family.
- ShiyaX/Mugen `AUUUU` arrival-call material was kept as voice/relationship texture instead of becoming a standalone object.
- The current Club-Only recovery-priority prose is superseded by the durable ledger: both Club-Only miner branches are already fully consumed/current.

## Held / unresolved

- Dean's dream scenes remain dream evidence; they do not establish literal Mugen conduct.
- The exact ant screenshots/pixels and their maker/capturer/featured provenance remain unresolved.
- Gabu's sleep accusation does not identify the missing triggering act.
- Feli's exact Anjou-statue action remains screenshot-dependent.
- Ghoulie's `eats people` / cannibalism / seal referent is narrowed, not solved.
- Earliest surviving Wall `record` language is not claimed as the origin of later rankings.
- No joke role, house joke, strip-club dream, or screenshot joke is converted into formal governance, literal family/romance, or offline conduct.
