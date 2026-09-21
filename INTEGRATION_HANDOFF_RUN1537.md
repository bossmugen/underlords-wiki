# UNDERLORDS WIKI — Run 1537 Integration Handoff

Date: 2026-09-21

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling miner-consumption ledger. Run 1537 closes with **51 tracked miner identities = 30 active refs + 21 historical/missing**, **0 newly discovered refs, 0 unread pending review, 0 backlog, and 0 overdue**. The remaining 9 `pending_publication` families are reviewed publication/resynthesis debt rather than unread mining.

Opening and closing active-ref sweeps found **all 30 miner HEADs unchanged from the Run 1536 reviewed frontier**. No intake delta required review, no raw archive was re-mined, no duplicate family changed, no conflict/rabbit moved, and no consumed SHA advanced. Both Club-Only recovery lanes remain current.

## Reader state

WIKI reader-facing pages changed **0**. With no new miner material, there was nothing honest to append or resynthesize.

The latest verified/deployed WIKI reader remains **`2dad837df03e1e7063e177b71be980ce6d752c3e`**:

- Build Underlords Wiki **`35620702149`** — success.
- Deploy Underlords Wiki Preview / Pages **`35620702454`** — success, deploying the exact reader above.

No fresh WIKI build/deploy is claimed for unchanged reader bytes.

MAIN reader-facing pages also changed **0**. Its inherited verifier workflow **`35621716651`** was retried again during Run 1537 as attempt 4. It again failed before any workflow step instantiated; the only job (`Source + Astro + built-output verification`) returned `steps: null`. This remains runner/startup failure rather than a demonstrated content/build failure, and no MAIN deployment is claimed.

## Consumption handoff

All active frontiers remain unchanged from Run 1536. In particular:

- Daycare: **`c05f77745092f6d8ee04bada14cdc94214bc9482`**.
- Whiskey: **`235f5e5b9ec8f6eb86b66994d19213f88debaa72`**.
- Wall: **`dd30116c5b2fc88152795ff890b3fd0e84a69a21`**.
- Louvre / Other Games: **`bc2cbe519b4d646bbb9c8b3f79f189d73820f50d`**.
- Birthdays / PR / VC: **`87b11ae8d0d37f60e6dd7ae43f214bbdde024d80`**.
- Club-Only 2021–2026: **`e45fb11c9239e236231bb65645dfd0285bc0078b`**.
- Club-Only 2020: **`ed66714f8d2c18f23bbb2b951bf305f0fa913f21`**.
- Core Rooms remains fully reviewed through **`1871a9caf06b82862b99cf52ea3104cb9fae1ea6`** with its older publication-gated contiguous cursor retained.

Held identity, provenance, source-boundary, earliest-surviving, role-array, joke-family/romance/governance, and media-attribution rails remain unchanged.

MAIN's persisted Run 1537 branch census commit is **`8be0dbc48232a0688eb5e8b749336457e039b6e6`**; its dedicated final report is at **`9bb10f56f2a1ad32e8e1146dddd06f7388bfc630`**.
