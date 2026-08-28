# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 07:02 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — Dragon on the form, Whiskey on the couch

### Branch census / queue

- Main-site mandatory census enumerated **24 miner branches** before deep review and persisted every current `last_seen_sha` on `master` before any long review began.
- Advanced/unconsumed branches: Daycare `969b6f22307eb55c7c45e05fb4bc0cdce39ab326 -> 7b441bcb9c800072123a7bb61d2bb150631146b2`; Whiskey `921be57142e05ad97102886803237dbe8bc5164f -> a3eba38e6500631c350ff9f23c6c9ebbffe9f9d2`.
- Anti-starvation recovery continued on Wall. Club-Only 2021–2026 and Club-Only 2020 were already consumed through unchanged heads and were not reread.
- No miner branch was merged or cherry-picked into either publishing branch.
- After review: **0 pending_review, 0 backlog, 0 review_overdue**.
- Remaining cumulative safe-baseline recovery branches: **Living Ensemble, Core Rooms, Wall**.

## Reviewed branches

### Daycare — `969b6f22… -> 7b441bcb…`

Checkpoint first, then only changed `archive-intake/*` handoffs.

This delta mostly sharpened Discord doorways rather than producing new public biographies. Ghostt's December 2020 entry/routing and Zyrcant/Akariel's January 2021 Amaurot/IGN bridge were already public more strongly. DyingFox gained an Oct. 8, 2020 pre-Daycare Discord doorway, useful chronology but not enough reason to rewrite an already rich main/wiki dossier in this pass.

Torr, Alaina, asapROG3R, Lyzette, Queen Shimoko, delay, and porgo remain thin identity/doorway shells. The review preserved minor-age and role-chronology boundaries rather than turning one-message Daycare appearances into fake full biographies.

Result: successful no-public-change review; consumed through `7b441bcb9c800072123a7bb61d2bb150631146b2`.

### Whiskey — `921be571… -> a3eba38e…`

Checkpoint first, then changed Whiskey handoffs only.

The genuinely new person-scale material was **Jade**. Her March 5, 2021 Lobby doorway says `蛋挞吃多了(JADE)` and self-reports **Dragon**. After the role/Tour handoff, Mugen is personally welcoming her in Whiskey about forty-four seconds later. That distinction matters: the Discord doorway is documented, but the archive does not get to convert it into an Underlords in-game join date.

A few weeks later Jade is inviting Whiskey to watch *Get Out* via DM link, references `going against each other in contest again tmr` without enough nouns to identify the contest or opponent, and then defends Prince Caspian with `he's forever prince caspian in my heart` followed by `IDC HES HOT AF`.

Main now owns that full character vignette because the social story is better than the taxonomy: another-club label on the form, immediate house placement in practice, then ordinary shared-media and thirst-banter life. The wiki intentionally does **not** add a thinner duplicate Jade card this pass; the current evidence does not improve Cast/Relationship/Episode lookup enough to justify mirroring the biography.

KOREA Milk's 0601 Whiskey packet had already been independently published on current main before this review and was treated as duplicate/corroboration. Miihi/Milk's cat adoption, Dragon Raja puzzle, and Woohyuk birthday line remain a small future-profile packet rather than being forced into a thin dossier. KOREA Milk and Miihi/Milk remain distinct stable accounts; similar milk naming is not an identity bridge.

Raw z23 re-acquisition remained 403/source-blocked, so no reply/edit inference was manufactured.

### Wall recovery

Checkpoint first. The latest rail-105 Akariel/Zyrcant sequence — volunteer for Wall placement, Ren says `You got to e a r n your place here`, later `caught in 4k`, Akariel answers `oooh shit *runs*` — was re-reviewed and found already public on Zyrcant's main dossier. No duplicate publication was accepted.

Wall's older safe-baseline recovery remains incomplete, so its `last_consumed_sha` stays null. Next unresolved older rail remains Sushi.

## Surface split / verification

### Main site

Public lore changed:

- **new:** `src/content/people/jade.md`

Jade is intentionally main-first. Her current value is the lived social contradiction — Dragon on the intake line, Whiskey almost immediately after — plus the movie invite and Prince Caspian defense. Turning that into a tiny wiki card would repeat the same material without adding a useful indexable relationship/episode structure.

Public-content commit: `ba5c48591bdebc290598b5e8287095fc1bf10802`.

Exact public-content verification/deployment: main workflow run **33178822465** passed source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment.

### Wiki

No public lore page changed this pass by design. The wiki records the reconciliation here instead of cloning Jade's main biography. KOREA Milk is likewise left with main as the current person owner; Woohyuk's pancake birthday vocabulary remains a future gag/callback candidate if recurrence makes it useful as a wiki lookup object.

The wiki's own build/Pages verification for this state commit is recorded by the current workflow runs on `main`.

## Consumption advanced

- `archive-miner/daycare-2020-2026-hourly` -> `7b441bcb9c800072123a7bb61d2bb150631146b2`
- `archive-miner/whiskey-longitudinal-hourly` -> `a3eba38e6500631c350ff9f23c6c9ebbffe9f9d2`
- Wall remains `last_consumed_sha: null` / `recovery_in_progress`; its latest reviewed tail is durable without skipping the older floor.

Remaining cumulative safe-baseline recoveries: Living Ensemble, Core Rooms, Wall.

## Reviewed but held / deduped

- Daycare Ghostt and Zyrcant doorway packets: duplicate/corroboration under stronger existing public owners.
- Daycare DyingFox Oct. 8, 2020 doorway: useful chronology, held from redundant public rewrite.
- Daycare Torr, Alaina, asapROG3R, Lyzette, Queen Shimoko, delay, porgo: thin shells, no generic one-scene dossiers.
- Whiskey KOREA Milk: already public on current main before this review; no duplicate discovery publication.
- Whiskey Miihi/Milk: future small profile; uninspected cat image and Raja puzzle screenshot stay uninspected.
- Jade's March contest/opponent/sides/result remain unresolved.
- Wall rail 105 exact `caught in 4k` offense/evidence remains missing.
- Standing source-blocked/media rabbits remain held rather than guessed.

## Current cross-surface continuity locks

- Main and wiki are complementary surfaces, not independent canon systems.
- User-confirmed canon and direct stable-ID bridges outrank miner-local warnings and name resemblance.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; fake-family / UL marriage language is not silently converted into literal legal or sensitive real-world biography.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
