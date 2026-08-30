# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 19:32 PDT**.

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
- Wall: forward-reviewed through `c41fe5b64940b684913f6bfd99f25bd572fa448c`; formal consumed remains null while its older cumulative recovery stays open.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### All Characters — `759401b5… → 66403720…`

Reviewed checkpoint-first and then through the changed Run 21 Staff second-pass handoffs only.

The strongest genuinely new keeper is **Nuien's early family-tree role**. On May 22, 2020 Nuien writes `MUGGY DE FAM TREE READY` immediately before posting an early UL fake-family diagram. The room answers with `IS IT ALL ALABAMA`, `ALAABAMAAA`, `black hole family tree`, `BAMA BABIES`, and Mugen reaching for `Sweet Home Alabama`. A later 2021 Mugen retrospective remembers May 2020 as when `Nui made the first family tree`.

That combination makes **POSTED BY Nuien** direct and **maker/assembler** a strong contextual read. WIKI deliberately says *first surviving predecessor* rather than absolute origin: an earlier lost chart may have existed, and one early artifact does not make Nuien sole author of every later Tumbleweed iteration. All family labels remain nonliteral. Nuien remains hard-separated from Illien.

The character payoff is better than a title. Nuien begins as somebody who can turn UL's relationship nonsense into an object the room can yell at; by September he is himself `Nuien (papi)` inside a later chart, and Ansun immediately notices when another update loses him. The map-maker becomes map content. That is actual role progression without inventing a formal Genealogist office.

Other Run 21 material was reconciled rather than multiplied: Rooks' safety/check-in behavior and explicit streaming-alt disclosure, Aeshleen's low-frequency-but-still-family continuity, Akuma's food-summons callback, Allenne/Anthos and Churro/Ren likely prior familiarity, and Tofu's `Breaking Raja logic for this pic` all remain useful corroboration/secondary character texture but did not need duplicate public objects this run.

### Wall forward suffixes — `765429d6… → c41fe5b6…`

The Wall moved twice during the integration window. Both late suffixes were caught and reviewed checkpoint-first rather than left invisible.

The 19:04 pass added Queen Shimoko's probable same-scene `Crab booty omgsh` wording handoff, a machine-old timestamp for the Discord entity currently exported as `☠ Members Only Lounge`, and Mugen's probable generic lounge redirect after an explicit-content joke. The Lounge entity timestamp dates the entity only, not its present display name at origin; the generic redirect cannot safely be bridged to that exact room because several lounge referents survive.

The 19:09 pass corrected an earlier too-personal reading of SaraBunny's `moo`: Sept. 1, 2021 has Candy, Ansun, phenomenal_lamb_14960, Ren, Gilli, SaraBunny, and Cookies and Juicebox all participating in `Moo/Mooo` variants, followed by cow media. This is contagious group culture, not Sara as Patient Zero. It also surfaced Marian Kage's Wizard101 `livin the panda dream` wrong-Wall self-filing and Woohyuk's `The goal of mass effect IS sleeping with every character PERIODT` playstyle doctrine.

No new Wall public object was accepted because the two strongest person beats are already publicly owned: MAIN Panda already carries the Wizard101 panda-set scene, and MAIN Woohyuk already carries the Mass Effect line. The shared moo register is a useful culture correction but does not yet need another public object merely to prove review. Wall remains an open cumulative recovery; formal consumed stays null.

## Public changes

### MAIN

`src/content/people/nuien.md` now owns the person-shaped version. It adds **MUGGY DE FAM TREE READY**, the probable maker/assembler credit, the immediate Alabama pile-on, and the later inversion from family-map maker to somebody whose omission from a map becomes noticeable enough for Ansun to open an audit.

Reader-facing MAIN commit: `55bbd665e32c47434f3fee469e5453876eb92b2b`.

### WIKI

`src/data/character-biographies-nuien.ts` now carries the same evidence as Cast progression rather than mirrored copy. The dossier inserts a May 22, 2020 family-tree section, preserves direct-vs-probable attribution, and frames the early artifact as a social role without turning it into governance.

Initial reader commit: `f5736335b64cd679fcd971ca476543ce4d29612c`.

Hard canon was re-applied before close: Nuien is male, so the newly added dossier copy was corrected to **he/him** throughout in follow-up commit `44a9c0788a6ad09926fd00a2a01fc68b0c9aa3f7`. The pronoun correction changes no archive interpretation; it repairs presentation to match resolved person canon.

## Verification / deployment

MAIN reader commit `55bbd665e32c47434f3fee469e5453876eb92b2b` passed **UL Hourly Build + Deploy** run `33287624936`: source canon/architecture verification, Astro build, built-output verification, exact Cloudflare deployment and production verification all succeeded.

MAIN durable head `e00569c2bbea6b4958abb6b474d5c667a8843194` also passed **UL Hourly Build + Deploy** run `33287931842`, including the same source/build/output/deployment chain.

WIKI initial reader commit `f5736335b64cd679fcd971ca476543ce4d29612c` passed standalone **Build Underlords Wiki** run `33287698376`; its **Deploy Underlords Wiki Preview** run `33287698375` also completed successfully.

The present WIKI state commit supersedes the pronoun-correction head only to record durable integration state. Its own push-triggered Wiki build and Pages workflow must be green before the pass is fully closed.

## Held / unresolved

- Absolute origin of UL's fake-family-tree tradition; earliest surviving is not origin.
- Whether Nuien personally drew every visual element versus assembled/post-produced the May 22 chart; maker/assembler remains the proportionate read.
- Literalizing any `papi`, parent, child, spouse, concubine or other fake-family label.
- Queen Shimoko screenshot pixels and CAPTURED BY / MADE BY / FEATURING.
- Exact original name/function of the early Lounge entity and whether Mugen's generic `lounge` redirect points to Members Only Lounge.
- Guild-icon first-use chronology and inaccessible visual contents.
- Absolute origin of the shared moo/cow register; Sara's Aug. 30 `so much moo` is earlier surviving context, not origin proof.
- Historical Staff appointment chronology from export-time role arrays.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.
