# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 06:43 PDT**.

## Branch / baseline

- Wiki publishing branch: `main` (the repository does not publish from `master`).
- Pre-pass wiki baseline: `7858b30e3cd08bc0817f82ba419936101e8bbdf4`.
- Main-site baseline consulted: `bossmugen/underlords@b0624321555501c2355cf3edcbc9fe4e456bbc82`.
- Main-site durable intake checkpoint consulted: `archive-intake/INTEGRATION_PASS_2026-08-26_0635.md`.

## Accepted cross-surface integration

The latest completed miner evidence did not add a new historical discovery after the main site's 06:35 checkpoint. This pass therefore compared already-accepted material against the wiki rather than pretending it was new lore.

The wiki already contained Mia's full June–July 2023 communal-art character scene in `src/data/character-biographies-mia.ts`: Ren proposes the blank canvas, Mia answers `Lemme get one` / `I started it`, Gilli asks for themed repeats, and Mia returns with bananas. That biography was left intact rather than duplicated.

Accepted wiki-only catch-up from the same reconciled evidence family:

- rewrote Mia's cast-list logline around her observable communal-art behavior instead of another role-stack summary;
- added the 2023 episode **Doodles Part 2: Bananas**, spanning the Ren → Mia → Gilli relay and Daya's August Raja-poster payoff;
- added Mia's `It funny` Wall ruling to the quote index with April 2023 context.

Accepted content commit: `4c4d8f01625794912bed125d29d10675a5fb69b8`.

## Duplicate handling

The PR / Slice / Character secondary handoffs remain one derivative evidence family, not independent corroboration. The wiki does not duplicate the full Mia communal-art analysis into the episode record; the character dossier owns the deeper behavior analysis, while Episodes owns the concise chronology.

No duplicate main-site event was created. The main site already owns its richer Mia/PR treatment.

## Conflicts / rabbit holes held

Still unresolved and not promoted as fact:

- eyelash-banana maker / post / callback chain;
- tomato, Halloween, hand-turkey, and finger-art object-to-message joins;
- exact weekly-planner context;
- exact August 2026 `UL history short film in the works ahahahah` speaker attribution.

## Verification / deployment

Content commit `4c4d8f01625794912bed125d29d10675a5fb69b8` passed the repository's `Build Underlords Wiki` Astro workflow and the `Deploy Underlords Wiki Preview` GitHub Pages workflow. This state file is non-public bookkeeping and will be validated by the same push-triggered workflows before this checkpoint is treated as final.
