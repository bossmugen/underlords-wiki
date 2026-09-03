# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 03:22 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary. Detailed reconciliation for the current pass lives in `INTEGRATION_STATE_RUN_301.md`; the previous substantive reconciliation is Run 300.

## Current reviewed boundary

The controlling census tracks **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue** after the Run 301 full census.

Run 301 found **no active branch movement**. Every active miner ref remains at its Run 300 `last_seen_sha`, and every active ref remains consumed through that head. No already-consumed handoff was reread merely to manufacture activity.

Both Club-Only recovery priorities remain current:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` only because more source can arrive later; its present head is already consumed through `161d27a6fd18de82b6aa09ff0f16a4e3c4256cf1`.

## Run 301 — everybody stayed put for once

Reader-facing WIKI changes: **0**.

Reader-facing MAIN changes: **0**.

There was no new checkpoint/findings/receipts/site-candidate delta to reconcile. No consumed SHA advances were required. No duplicate lore, unresolved rabbit, identity merge, role chronology, joke-family/romance literalization, or unseen-media attribution was promoted.

The public surfaces therefore remain at the substantive Run 300 boundary rather than receiving state-shaped filler.

## Previous substantive boundary — Run 300

Run 300 reviewed two advanced intake families checkpoint-first and consumed them through:

- All Characters HR → `7496d8021275c8294113fd3f87b737bc38b31678`
- Mugen person-first → `ccc451e115feb4108be5f3b6dc05ea9a1b386f69`

All Characters HR Run 103 moved WolfPhenix, Sye / Life, RV / Ren, Gilli, Oyasumi, Snow, Anthos, and Daya / Dayadream to `EXHAUSTED AT CURRENT ARCHIVE BOUNDARY`, bringing the authoritative comprehensive HR quarry to **67 exhausted / 33 in progress** out of 100 non-Mugen character files. That remains workflow state, not reader copy.

The Mugen miner sharpened the March 23, 2023 anniversary sequence into a useful editorial-selection read: Mugen could move from sincere Officer credit and safe/comfortable language straight into selecting `rumfection`, `corpse kidnapping`, `panic karaoke`, `music bot breaking`, `generalized confusion`, and `wholesome dumassery` as the group's official remembered highlights. That nuance remains banked because the current public surfaces already own the preservation/framing mechanism and the native anniversary strip still needs recovery before screenshot-grade presentation.

## Hard rails / held rabbits

- `our family` remains UL social/family language, not literal biological family.
- Anniversary callback nouns remain in-group commemorative language rather than literal real-world crime/harm claims.
- `music bot breaking` is not silently equated with the later Daycare endurance campaign.
- Snow remains never formal #2 / second-in-command.
- No identity merge by similar names.
- No appointment chronology from export-time role arrays.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.
- No unseen media gains visual content or creator/capturer/featured-subject attribution.

## Verification

Run 301 is state-only on WIKI. The exact closing `main` head must pass the repository's existing Build and Pages workflows before the run is reported complete. MAIN's exact closing `master` head is separately checked through source verification, Astro build, built-output verification, and production deployment.

Detailed reconciliation: `INTEGRATION_STATE_RUN_301.md`.
