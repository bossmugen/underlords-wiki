# UL Site + Wiki Integrator — Run 1146

Run 1146 closes on a **stable miner frontier**: **51 tracked identities = 30 active refs + 21 historical/missing**, with **0 newly discovered refs, 0 pending review, 0 backlog, and 0 overdue**. Both Club-Only recovery-priority lanes remain current.

Five reviewed MAIN families remain `pending_publication`: **QOTD Officers, Wall, Backroom Deals, meems, and Daycare**. They are publication/verification debt rather than unread mining.

## Intake result

The mandatory full branch census was repeated at close. All 30 active miner HEADs still match the Run 1145 controlling ledger exactly, so there were **0 intake deltas, 0 genuinely new findings, 0 duplicate-family collapses, 0 rabbit/conflict changes, and 0 consumed-SHA advances**. No raw archive was re-mined and no miner branch was merged or cherry-picked into a publishing branch.

Because no miner head moved, MAIN's controlling branch ledger already contains the current `last_seen_sha` for every active branch and requires no per-branch SHA mutation this run.

## WIKI public result

Reader-facing WIKI change: **0**.

No redundant WIKI build/deploy was launched for an unchanged reader tree. The latest verified/deployed WIKI reader remains Run 1144 exact reader `fcef71ca2d67f87a9023895e33316abd07c47669`, already green on Build workflow **34990380736** and Pages/Preview workflow **34990380666**.

## Cross-surface publication gate

MAIN reader-facing change is also **0**. Run 1146 retried the accepted Joshua Israel MAIN reader gate at exact historical commit `0dfa7cb8be6b32fbab9bd1fc34807b3b5060fe54`. Workflow **34990286252** attempt **3**, job **104465865600**, again failed before runner allocation with `steps = null`, so source verification, Astro build, built-output verification, production deployment, and live confirmation never executed.

Daycare remains reviewed through `aa3afae9b4a472d937ca19106096d771537b7815`, while MAIN's formal consumed pointer stays at `87b1c20d24a74199a6caf11134822cbe0e61b282` until the accepted Joshua biography can pass the required gate.

Nothing new was published to only one surface in Run 1146. The inherited Joshua WIKI-only / MAIN-held split remains unchanged.

## Consumption close

No miner consumed SHA moved this run. The full live census matches the controlling MAIN ledger exactly; the remaining work is publication verification debt, not unread intake.