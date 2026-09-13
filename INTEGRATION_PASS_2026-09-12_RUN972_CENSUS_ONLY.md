# UNDERLORDS WIKI — Integration Pass Run 972

## Census

Closing census from MAIN's controlling ledger: **51 tracked miner identities = 30 active refs + 21 historical/missing refs**. Newly discovered refs: **0**. Pending review: **0**. Backlog: **0**. Review overdue: **0**. Reviewed `pending_publication` families: **8**.

All 30 active miner heads matched the Run 971 reviewed frontier during both the opening census and the closing recheck. No miner branch advanced, so no intake delta required review. Both Club-Only recovery-priority lanes remain current; anti-starvation had no pending/advanced branch eligible for rotation.

## Public result

Genuinely new findings: **0**. Duplicate/corroboration families newly combined: **0**. New conflict/rabbit resolutions: **0**.

WIKI reader-facing changes: **0**. No WIKI Astro build or Pages deployment was re-run because the reader tree did not change. The latest exact verified/deployed WIKI reader remains Run 970 commit **`e2d71d195da2c78ed0e1aa8b968d9441e66f2916`**, which passed Build Underlords Wiki run **34732911418** and Deploy Underlords Wiki Preview run **34732911506**.

MAIN reader-facing changes: **0**. The older accepted Daya MAIN reader `a5b4d5e088c00cea0c4d9abeec3c64e1b76034c1` was retried through `UL Production Build + Deploy` workflow run **34691433077**, attempt **19**. Job **103663680565** completed `failure` with `steps: null`, before source verification, Astro, built-output verification, or deployment could start. The older production-verification gate remains unresolved.

## Consumption state

No `last_consumed_sha` or miner `last_seen_sha` advanced. MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` is the controlling branch ledger and was updated for Run 972 so this stable census and retry result are durable rather than inferred.

Wall remains reviewed through `02618b3fc5911b19db34ef62cd2db5d09c0d995e`; its formal consumed pointer remains pinned at `10f63d817f4952c0b9da9354e462494916cbb21d` behind the older Daya MAIN production-verification gate. The eight `pending_publication` families remain reviewed publication/resynthesis debt, not unread mining.

No material was routed to only one public surface because this run had no new publishable material.
