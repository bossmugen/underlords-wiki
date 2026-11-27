# UNDERLORDS WIKI — Integration Final — 2026-09-17 — Run 1255

## Census and consumption

Run 1255 closes review-current at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered refs, 0 pending review, 0 backlog, and 0 overdue branches**. Both Club-Only recovery-priority lanes remain current.

The mandatory full active miner census was repeated against the live MAIN repository refs. Every one of the 30 active miner heads still matches the controlling `last_seen_sha` and `last_consumed_sha` in MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json`. No branch has an unread delta, so no intake handoff was re-read and no consumed cursor moved.

Eight reviewed MAIN families remain `pending_publication`; these are person-first resynthesis debt, not unread mining.

## Public integration

Reader-facing MAIN changes: **0**.

Reader-facing WIKI changes: **0**.

No genuinely new findings were available to reconcile, no duplicate evidence family changed state, and no unresolved conflict/rabbit changed state. There was therefore nothing to route asymmetrically between MAIN and WIKI.

Because reader bytes on both repositories were unchanged, this run does **not** claim MAIN source verification / Astro / built-output / production deployment or WIKI build / Pages deployment. The most recent verified/deployed WIKI reader remains Run 1253 reader `a776fcdd5e4a3e9e35a801bb0c5803972093248a`.

## Surface split

Nothing was intentionally published to only one surface because there was no publishable miner advance this run. MAIN's controlling branch ledger remains authoritative for consumption state; this file is the durable WIKI-side Run 1255 close.
