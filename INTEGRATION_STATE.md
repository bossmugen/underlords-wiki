# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 19:25 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier rolling WIKI states remain in Git history.

## Current boundary

- Census: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite pending: **0** at the reviewed closing boundary.
- Backlog: **0**.
- Review-overdue: **0**.
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Core Rooms: seen/consumed `9eb31f2da1eaf9d4068823387ae4e8fb6307ac30`; one-time historical recovery remains closed.
- All Characters: reviewed/consumed through `66403720821d2559c8b8e5f2699eaedba6d99341`.
- Wall: forward-reviewed through `d9c579e7414fe6e73893364bc04d5e30000c7ce6`; formal consumed remains null while its older cumulative recovery stays open.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### All Characters — `759401b5… → 66403720…`

Reviewed checkpoint-first and then through the changed Run 21 Staff second-pass handoffs only.

The strongest genuinely new keeper is **Nuien's early family-tree role**. On May 22, 2020 Nuien writes `MUGGY DE FAM TREE READY` immediately before posting an early UL fake-family diagram. The room answers with `IS IT ALL ALABAMA`, `ALAABAMAAA`, `black hole family tree`, `BAMA BABIES`, and Mugen reaching for `Sweet Home Alabama`. A later 2021 Mugen retrospective remembers May 2020 as when `Nui made the first family tree`.

That combination makes **POSTED BY Nuien** direct and **maker/assembler** a strong contextual read. WIKI deliberately says *first surviving predecessor* rather than absolute origin: an earlier lost chart may have existed, and one early artifact does not make Nuien sole author of every later Tumbleweed iteration. All family labels remain nonliteral. Nuien remains hard-separated from Illien.

The character payoff is better than a title. Nuien begins as somebody who can turn UL's relationship nonsense into an object the room can yell at; by September she is herself `Nuien (papi)` inside a later chart, and Ansun immediately notices when another update loses her. The map-maker becomes map content. That is actual role progression without inventing a formal Genealogist office.

Other Run 21 material was reconciled rather than multiplied: Rooks' safety/check-in behavior and explicit streaming-alt disclosure, Aeshleen's low-frequency-but-still-family continuity, Akuma's food-summons callback, Allenne/Anthos and Churro/Ren likely prior familiarity, and Tofu's `Breaking Raja logic for this pic` all remain useful corroboration/secondary character texture but did not need duplicate public objects this run.

### Wall forward suffix — `765429d6… → d9c579e7…`

The late 19:04 Wall suffix was caught and reviewed checkpoint-first rather than left invisible.

- Queen Shimoko's `Crab booty omgsh` is a probable same-scene wording handoff after Mugen's `crabs on the menu tonight`; Rich then inherits it as `Pancake crab booty??`. Queen contributes the phrase; the screenshot pixels remain unresolved.
- The underlying Discord entity now exported as `☠ Members Only Lounge` snowflake-dates to **2020-04-03 23:00:07.920 PDT**. That dates the channel entity only, not its current name at origin.
- Mugen's September 2020 `i have a lounge for that` immediately after Ryan X's explicit-content joke is a strong probable lounge redirect, but the destination cannot safely be identified as `☠ Members Only Lounge` because the corpus contains several lounge referents.
- Matching 2026 guild-icon metadata across exports is snapshot consistency, not a first-use date. `MADE BY Mugen` remains user-confirmed hard canon; inaccessible pixels and historical install chronology remain held.

No Wall reader-facing change was accepted this run. The new material is useful provenance/texture but not stronger than the existing public owners yet, and the Wall cumulative recovery remains open.

## Public changes

### MAIN

`src/content/people/nuien.md` now owns the person-shaped version. It adds **MUGGY DE FAM TREE READY**, the probable maker/assembler credit, the immediate Alabama pile-on, and the later inversion from family-map maker to somebody whose omission from a map becomes noticeable enough for Ansun to open an audit.

Reader-facing MAIN commit: `55bbd665e32c47434f3fee469e5453876eb92b2b`.

### WIKI

`src/data/character-biographies-nuien.ts` now carries the same evidence as Cast progression rather than mirrored copy. The dossier inserts a May 22, 2020 family-tree section, preserves direct-vs-probable attribution, and frames the early artifact as a social role without turning it into governance.

Reader-facing WIKI commit: `f5736335b64cd679fcd971ca476543ce4d29612c`.

## Verification / deployment

MAIN reader commit `55bbd665e32c47434f3fee469e5453876eb92b2b` passed **UL Hourly Build + Deploy** run `33287624936`: source canon/architecture verification, Astro build, built-output verification, exact Cloudflare deployment and production verification all succeeded.

WIKI reader commit `f5736335b64cd679fcd971ca476543ce4d29612c` passed standalone **Build Underlords Wiki** run `33287698376`; its **Deploy Underlords Wiki Preview** run `33287698375` also completed successfully.

The present WIKI state commit supersedes the reader head only to record this durable integration state; its own push-triggered build and Pages workflow must also be green before the pass is fully closed.

## Held / unresolved

- Absolute origin of UL's fake-family-tree tradition; earliest surviving is not origin.
- Whether Nuien personally drew every visual element versus assembled/post-produced the May 22 chart; maker/assembler remains the proportionate read.
- Literalizing any `papi`, parent, child, spouse, concubine or other fake-family label.
- Queen Shimoko screenshot pixels and CAPTURED BY / MADE BY / FEATURING.
- Exact original name/function of the early Lounge entity and whether Mugen's generic `lounge` redirect points to Members Only Lounge.
- Guild-icon first-use chronology and inaccessible visual contents.
- Historical Staff appointment chronology from export-time role arrays.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.
