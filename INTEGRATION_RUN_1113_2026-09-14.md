# UL Site + Wiki Integrator — Run 1113

Date: 2026-09-14 PDT / 2026-09-15 UTC

The full miner census remains stable at 51 tracked identities = 30 active remote refs + 21 historical/missing refs, with 0 newly discovered branches, 0 pending review, 0 backlog, and 0 overdue branches. Both Club-Only recovery-priority lanes remain current. All 30 active miner heads matched the Run 1112 closing frontier, so this run had 0 intake deltas, 0 new findings, 0 duplicate/corroboration collapses, 0 new rabbit/conflict changes, and 0 consumed-SHA advances.

MAIN reader-facing changes: 0. WIKI reader-facing changes: 0. No fresh reader build/deploy cycle was launched for either unchanged reader tree.

The accepted Run 1112 WIKI readers remain the latest green reader state: Kuki reader `74880ab152ae5935c4206943867394c4af73d064` passed Build `34928723853` and Pages/Preview `34928723872`; final Birthdays / PR / VC reader `4f3c37190e8d7123c845f541eb9ae09d1e1a3d2c` passed Build `34929406740` and Pages/Preview `34929406744`.

MAIN still carries Daycare publication verification debt. Daycare is reviewed through `2eabcba7387fbc96925a1168f686aa63c9c898b1` but its formal consumed pointer remains `7a35122d65d2d607990b6b0f2222b0ebe3b2a1e8`. This run re-ran failed jobs for MAIN `UL Production Build + Deploy` workflow run `34928736842`, exact head `ac622a253536251dbfb9d26a3c4455a6fa04f9f3`. Attempt 4 failed before runner allocation; job `104259578929` completed `failure` with `steps: null`, so MAIN source verification, Astro build, built-output verification, production deploy, and live confirmation did not execute. This remains infrastructure/pre-runner failure rather than a demonstrated content-build failure.

No material was intentionally published to only one reader surface this run because there was no new intake. MAIN's refreshed `archive-intake/INTEGRATOR_BRANCH_STATE.json` is the controlling consumption ledger for this close.