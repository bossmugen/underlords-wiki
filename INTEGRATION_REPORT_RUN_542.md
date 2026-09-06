# UNDERLORDS WIKI — Integration Report Run 542

## Reconciled intake scope

Full controlling miner census on MAIN: **51 tracked identities = 30 active matching refs + 21 historical/missing refs; 0 new; 0 unread active tails; 10 reviewed MAIN publication-held families; 0 backlog; 0 overdue.** Both Club-Only recovery lanes remain saturated/current and no raw archive was reopened.

Every active miner branch HEAD matched the controlling ledger's existing `last_seen_sha` / `last_consumed_sha` frontier. There was therefore **no new `archive-intake/*` handoff delta to review this cycle** and no consumed SHA needed to advance.

## Public surfaces

### MAIN
- Reader-facing files changed: **0**.
- The full census was persisted in `archive-intake/INTEGRATOR_BRANCH_STATE.json` and a Run 542 reconciliation report was recorded.
- No source-verification / Astro / built-output / Cloudflare deployment success is claimed because the MAIN reader tree did not change.

### WIKI
- Reader-facing files changed: **0**.
- `INTEGRATION_STATE.md` was refreshed through Run 542 and this report was added as bookkeeping only.
- No Astro / Pages reader build or deployment is claimed because the WIKI reader tree did not change.
- Latest verified reader publication remains Run 541 head `82564280a6c862358eae0c1517406a07fe19b5ba`, whose Build and Pages workflows succeeded.

## Queue / anti-starvation

`pending_review_count` is zero. The ten remaining `pending_publication` families are already-reviewed MAIN publication debt rather than unread miner evidence, so anti-starvation did not require another branch review this cycle.

Recovery recheck remained stable:
- `archive-miner/club-only-2021-2026-hourly` — `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- `archive-miner-clubonly-2020-hourly` — `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Carried holds

- DyingFox stable-ID conflict remains unresolved: fresh QOTD `629467952100982784` vs canonical/current `471370475050762251 / dyingfox`; do not merge by same-name similarity.
- Eos direct Louvre/AI creative body remains tooling-blocked; media-bearing posts are not maker attribution.
- Existing MAIN publication-held families stay reviewed debt and must not be re-read as miner backlog.
- Hard-resolved project identity **Zyrcant = Akariel / Akariel™ / akariel_star** remains resolved.
- Pooled `Deleted User` stays pooled; SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
