# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 349_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Per-run files remain authoritative for historical cycles; current detail is in `INTEGRATION_STATE_RUN_349.md`.

## Current census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0
- Wall recovery quarry: open for future source

Both Club-Only recovery priorities remain current through head:
- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Run 349 performed the mandatory full branch census and repeated it before close. All 28 active miner refs remained on the Run 348 closing heads, so there was no new `archive-intake/*` suffix to review and no raw archive re-mining.

## Public reconciliation

Reader-facing WIKI change this run: **none**.

No genuinely new lore arrived. Existing structured ownership remains unchanged, including Mugen's Run 348 return-continuity deepener. No duplicate receipt prose was added merely because another integration cycle ran.

The six reviewed-but-publication-held MAIN families remain Wall, Louvre, Mugen person-first, Whiskey, Core Rooms / Events, and Daycare. Their reviewed heads remain recorded in MAIN's controlling branch ledger; publication-held consumed cursors remain behind accepted MAIN work because MAIN's verification workflow continues to fail before repository steps instantiate.

## Verification / deployment

MAIN opening-census commit `b5eed21ac037b0ec0ca89aa675dd8c8538bf16a3` triggered workflow `33831801341`; `Build + verify` completed failure without step summaries and `Deploy verified master to Cloudflare Pages` was skipped. Source/canon verification, Astro, and built-output verification therefore were not shown as executed failures.

WIKI receives state-only commits this run. The final exact-head Build and Pages workflows are checked separately at run close.

## Rails retained

Hard canon and resolved identity bridges remain binding. Earliest surviving is not origin. No identity merging from similar names. No appointment chronology from export-time arrays. Joke family/romance remains non-literal without support. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. Uninspected media stays uninspected. Safety-sensitive intake material stays backstage.
