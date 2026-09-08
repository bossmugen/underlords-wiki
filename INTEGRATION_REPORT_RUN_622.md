# UL Site + Wiki Integration — Run 622

## Census

- Tracked miner identities: **51**.
- Active matching refs: **30**.
- Historical / currently missing refs: **21**.
- New refs: **0**.
- Unread pending-review tails: **0**.
- Reviewed MAIN `pending_publication` families: **8**.
- Backlog: **0**.
- Review overdue: **0**.

The full miner-branch census was re-run against current GitHub refs. Every active ref remains exactly at the controlling MAIN ledger's `last_seen_sha` and `last_consumed_sha`. Both Club-Only recovery lanes remain current/saturated, so no raw archive was reopened.

## Intake / reconciliation

No miner branch advanced beyond its consumed frontier. There was therefore no new `archive-intake/*` handoff to review checkpoint-first, no new lore family to reconcile, no duplicate family to recombine, no conflict/rabbit state change, and no consumed SHA movement.

The eight MAIN `pending_publication` families remain reviewed publication debt rather than unread miner work.

## Public surfaces

### MAIN

Reader-facing changes: **0**. Only census/report bookkeeping changed. The MAIN reader tree was unchanged, so no new source-verification / Astro / built-output / production-deployment claim is made.

### WIKI

Reader-facing changes: **0**. No Cast dossier, Relationship, Episode, Running Gag, Quote, Location, Gallery/media note, or other reader owner changed. No redundant Astro/Pages build was triggered for reader-neutral bookkeeping.

The latest verified/deployed WIKI reader remains Run 621 SHA **`9b4fd1e1eee38d814bc8c8ed35cf0e0f400b1ca1`**, with successful Build workflow `34173653411` / job `101898689829` and Pages workflow `34173653392`, build/artifact `101898733009`, deploy `101898805370`, and report/status `101898848989`.

## Close

Run 622 closes stable at **51 tracked / 30 active / 21 historical-missing**, with **0 unread pending-review tails, 8 reviewed MAIN publication-debt families, 0 backlog, and 0 overdue**. No hard canon, identity correction, privacy boundary, attribution rail, or unresolved rabbit changed state.
