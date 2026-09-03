# UNDERLORDS WIKI — Integration State Run 301

_Last updated: 2026-09-03 03:21 PDT_

## Census boundary

MAIN's controlling miner ledger completed the full branch census first and still tracks **49 miner identities = 28 active refs + 21 historical/missing refs**.

Current queue:

- newly discovered: 0
- pending review: 0
- pending publication: 0
- backlog: 0
- review overdue: 0

Every active `archive-miner-*` / `archive-miner/*` ref remained at its Run 300 `last_seen_sha`. No branch advanced beyond its `last_consumed_sha`.

Both Club-Only recovery priorities remain current through head:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains the only `recovery_in_progress` quarry, but its current head `161d27a6fd18de82b6aa09ff0f16a4e3c4256cf1` is already consumed.

## Reconciliation

No miner delta exists to review this cycle, so no already-consumed intake was reread simply to create activity.

Reader-facing WIKI changes: **0**.

Reader-facing MAIN changes: **0**.

No consumed SHA advances were needed. No duplicate lore, unresolved identity, joke role/family/romance language, appointment chronology, or unseen-media attribution was promoted.

## Surface split

Nothing was intentionally published to only one surface because there was no genuinely new public material. MAIN and WIKI remain complementary at the existing Run 300 boundary.

## Verification

This is a state-only WIKI pass. The exact closing `main` head must pass the repository's existing Build and Pages workflows before Run 301 is reported complete. MAIN is verified separately through its source/canon checks, Astro build, built-output verification, and production deployment.
