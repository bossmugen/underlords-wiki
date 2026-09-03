# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 306 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary. Detailed reconciliation for the current pass lives in `INTEGRATION_STATE_RUN_306.md`.

## Current reviewed boundary

The controlling census tracks **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue** at the Run 306 census boundary.

All 28 active miner refs were unchanged from their previously reviewed `last_seen_sha` / `last_consumed_sha` boundaries. There was therefore no advanced or unconsumed intake delta to review and no reason to reread already-consumed handoffs.

Both Club-Only recovery priorities remain current:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` only because future source may arrive; its current head `07847db8d326639d342b1873e3c27fd87abb428f` is consumed.

## Run 306 — no receipt mitosis because the quarry did not move

Genuinely new findings: **0**. New duplicate families: **0**. New conflicts/rabbits: **0**. No consumed SHA advanced because no miner branch advanced.

MAIN reader-facing pages changed: **0**. WIKI reader-facing pages changed: **0**. Nothing was intentionally published to only one surface because no new reader-facing material cleared the novelty bar.

This is a valid no-op integration pass: the mandatory branch census ran, the controlling ledger was refreshed, and both public surfaces were left alone rather than manufacturing a page mutation from already-consumed material.

## Verification

MAIN census/state commit `4caae4f5587ba62a2138d1d0cdca66b4ff3ef13d` passed exact workflow **33753282263**: source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment all succeeded.

MAIN final Run-306 reconciliation commit `0344144ca5372815018de0089b5937698d9d905e` passed exact workflow **33753499943**, including the same source/build/output gates and exact Cloudflare production deployment.

WIKI Run-306 state commit `d79e5090886fdc686b40962718f7a5404958a235` passed **Build Underlords Wiki 33753564003** and **Deploy Underlords Wiki Preview 33753563982**, including GitHub Pages deployment.

Detailed reconciliation: `INTEGRATION_STATE_RUN_306.md`.
