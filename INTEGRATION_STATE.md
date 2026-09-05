# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 411 no-delta close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Run 411 revalidated the full census at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 advanced active heads, 0 pending review, 0 backlog, and 0 overdue**. Eight older MAIN publication-held families remain Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey. Both Club-Only recovery priorities remain current at their saturation / do-not-churn boundaries.

## Miner review

Every active `archive-miner-*` / `archive-miner/*` head matched the Run 410 reviewed frontier. There was therefore no changed `archive-intake/*` handoff suffix to review, no consumed cursor to advance, and no raw archive was reopened.

## Canon reconciliation check

Current controlling MAIN canon was re-read before publication decisions. Older integration history contains intermediate mistaken splits for two identities, so the later corrective state was explicitly checked rather than rediscovered as a new conflict:

- `Akariel`, `Akariel™`, and `akariel_star` remain aliases of **Zyrcant** under current controlling canon. Later WIKI corrective history restored this bridge after an intermediate mistaken split.
- **Ame / Amexistir** remains one locked Game Officer identity under current controlling canon. Later WIKI corrective history restored this bridge after an intermediate mistaken split.

No identity change was made in Run 411. This is continuity housekeeping so superseded intermediate reports do not outrank current canon.

## Public integration

Reader-facing WIKI changes: **0**.

No Cast biography, Relationships, Episodes, Running Gags, Quotes, Locations, or Gallery material changed because no miner delta advanced. The current reader-facing Han, Tae, and Mugen work remains the verified Run 410 layer in `src/data/character-biographies-run410.ts`.

MAIN reader-facing changes: **0**. Run 411 only refreshed branch-census / integration bookkeeping on MAIN.

## Verification / publication

Run 411 WIKI state verification target: `2a381c57666cab0466f2c216d97e74f679127c93`.

- Build workflow `33931866504`: **success**; Astro build completed.
- Pages workflow `33931866407`: **success**; preview build, artifact upload, **Deploy to GitHub Pages**, and final report all completed successfully.

This was a state-only deployment; no new lore was added. The last reader-facing lore publication remains Run 410 reader head `b4b97b5d45b6827d55869a22decdec16cbfbc369`, whose exact Build workflow `33930578753` and Pages workflow `33930578787` also succeeded.

MAIN verification target `eabd9206257102b1b928afd7ee80b7390e52d96d` ran workflow `33931851264`. Attempt 1 failed before `Build + verify` acquired executable steps; the failed job was explicitly rerun once and attempt 2 failed in the same no-step pre-runner shape. Verified Cloudflare deployment was skipped. MAIN was not newly deployed.

## Queue

Controlling state remains **0 pending review / 8 MAIN publication-held / 0 backlog / 0 overdue**. No reviewed suffix should be reread next cycle unless its miner head actually advances.
