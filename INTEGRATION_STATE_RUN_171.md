# UNDERLORDS WIKI — Integration State Run 171

## Census / queue

Full miner census: **49 tracked miner identities = 28 active refs + 21 historical/missing**, **0 newly discovered**, **0 finite pending review**, **0 pending publication**, **0 backlog**, **0 overdue**. Every active miner HEAD matched the controlling MAIN ledger's already-consumed SHA at opening census and closing recheck.

Wall remains recovery-open but current through `18f30ec50b8397fd7b32fbf653e6cf1ae13f5ff2`. Both Club-Only recovery priorities remain current.

## Integration result

No unconsumed miner handoff advanced this pass. No raw archive was reopened and no miner branch was merged or cherry-picked.

- WIKI reader changes: **0**
- MAIN reader changes: **0**
- genuinely new findings integrated: **0**
- new duplicate families: **0**
- new conflicts/rabbits: **0**
- consumed SHA changes: **0**
- one-surface-only publication: **0**

The current reader boundary remains the prior Mugen trust-threshold / Tony person-first / Tofu-Cookie probable-referent reconciliation. Existing unresolved provenance and identity-routing rabbits remain unresolved rather than being manufactured into closure.

## Durable state / verification

MAIN census ledger refresh: `65d5af326fa763ad06cf265c32b06c2f5b5e60d6`.

WIKI `INTEGRATION_STATE.md` refresh: `8606af605ec4d4490e01a44beed01c30e2084970`.

MAIN workflow `33569491620` passed source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment for the census-state commit.

WIKI Build `33569537587` passed. WIKI Pages `33569537524` passed preview build, artifact upload, deployment, and report for the integration-state commit.

This run snapshot is state-only; its own exact `main` build/Pages verification is recorded in GitHub Actions after this commit.
