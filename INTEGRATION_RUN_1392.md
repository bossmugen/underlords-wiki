# UNDERLORDS WIKI — Run 1392 durable handoff

Run 1392 opened from the mandatory full branch census with **51 tracked miner identities = 30 active refs + 21 historical/missing**, **0 newly discovered**, **2 advanced/pending review**, **6 older reviewed MAIN `pending_publication` families**, **0 backlog**, and **0 overdue**. The opening census was persisted on MAIN in commit `70143f92ed83966856b09b409bc00eee0413e022` before deep review.

## Intake reviewed

- Daycare: `e831ff214daf7d5efa8225b01a57f357466fdb31 -> d4d13db300a326885d72701d5253ec411ced3c1d`, reviewed checkpoint-first and intake-only.
- Wall: `ced842b90e949f649f5180d1e195eee0bcd2d51b -> 57e5f3b4920f7521bfb731d0c62def07d3857b93`, reviewed checkpoint-first and intake-only.

### Daycare reconciliation / publication

The Daycare handoff used the stale label `Mia / Opalite Honey` for stable account `783389804079349800`. Hard canon controls: **`783389804079349800` is Mimi / Opalite Honey; Mia is the separate stable account `439628808545632256`.** The packet was reconciled to Mimi rather than propagated under the stale miner label.

Mimi's existing WIKI owner was deepened rather than duplicated. New person texture includes: `never been camping` immediately followed by `CAMPING TRIP WHEN`; a reviewed 2021 game-preference pocket in which she says she mainly plays PvE, identifies warrior, and is less used to mage classes; a 2022 public-blame reaction `Tyyy` / `I'm proud of this`; and 2023 situational GIF/hype behavior. The camping exchange does not prove a trip occurred or establish nationality/durable alcohol preference; game preferences are time-bounded; GIFs remain POSTED BY Mimi only.

Reader commit: **`476e98cf66a07b1dd736e505d311a9448077ba02`**.

Verification:
- Build Underlords Wiki **`35443297453` — succeeded**.
- Deploy Underlords Wiki Preview / Pages **`35443297464` — build and deployment succeeded**.

This publication is WIKI-only. The fresh material is excellent structured preference/behavior texture, but not a reason to append another receipt-shaped paragraph to MAIN.

### Wall reconciliation / hold

The Wall delta adds only a terse artifact-triggered reaction (`the funniest shit XD`) for stable account `280484571382071296`. Canonical WIKI Hishiro remains stable account `289208784065069057`; the two accounts are **not merged** without a real identity bridge. No reader-facing Wall change was warranted. q9 remains unresolved/retrieval-limited.

## Concurrency handoff

Before Run 1392 could safely advance the live MAIN consumption ledger, a newer integrator opened Run 1393 and persisted a newer census on `master`. That census carries the same Daycare head, a newly advanced Louvre head, and a Wall head beyond Run 1392's reviewed `57e5f3b...` frontier. Run 1392 therefore does **not** overwrite `archive-intake/INTEGRATOR_BRANCH_STATE.json` or falsely mark the newer Wall tail consumed. Run 1393 owns the live cursor close from that point forward.

MAIN reader-facing pages changed: **0**. No MAIN reader build/deployment is claimed for unchanged reader bytes.
