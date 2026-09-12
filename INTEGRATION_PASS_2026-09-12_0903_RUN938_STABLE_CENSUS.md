# Underlords Wiki — Run 938 Stable Census

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling miner-consumption ledger.

## Census

The mandatory full miner census closes at **51 tracked identities = 30 active refs + 21 historical/missing refs**. All 30 active heads exactly match the reviewed Run 937 frontiers. There are **0 newly discovered refs, 0 unread active tails, 0 backlog, and 0 overdue branches**. Eight older reviewed families remain `pending_publication`; those are MAIN synthesis / verification debt, not unread mining.

Both Club-Only recovery-priority lanes remain current. No advanced miner branch existed this pass, so no intake was reopened, no raw archive was re-mined, and no miner branch was merged wholesale.

## Public integration

Reader-facing WIKI changes: **0**.

New public findings: **0**.

New duplicate families: **0**.

Conflict / rabbit changes: **0**. Existing identity, source-provenance, retrieval, and publication-gate boundaries remain unchanged.

Consumed SHA updates: **0**.

No fresh WIKI Astro / Pages cycle was triggered for an unchanged reader tree. The last exact verified/deployed reader remains Run 937 **`2d84a577cbfd9b94cb3133ff40331aca4b3588cd`**:

- Build Underlords Wiki run **`34703037360`** — success; Astro build job **`103578047662`** — success.
- Deploy Underlords Wiki Preview / Pages run **`34703037308`** — success.
  - build/artifact job **`103578057253`** — success;
  - deploy job **`103578142895`** — success;
  - report/status job **`103578175597`** — success.

## MAIN dependency state

The older accepted Daya MAIN production gate was retried at exact reader `a5b4d5e088c00cea0c4d9abeec3c64e1b76034c1`.

`UL Production Build + Deploy` run `34691433077` reached **attempt 8**. Job `103580583650` (`Verify + deploy exact master`) failed before GitHub allocated a runner: `steps: []`, `runner_id: 0`. Source verification, Astro, built-output verification, and deployment therefore did not start. No formal consumed pointer tied to that older accepted MAIN publication was advanced.

## Close

WIKI remains reader-stable and green at the Run 937 exact reader. There is no new WIKI-only or MAIN-only publication this pass. The only material change is durable census bookkeeping plus another recorded pre-runner failure on the older MAIN Daya gate.

The archives contributed no new crimes. GitHub Actions contributed another absence from work.