# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 Run 431 final handoff_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose states remain recoverable in git history.

## Run 431 final

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 0 unread pending review, 9 MAIN publication-held families, 0 backlog, and 0 overdue** at close. Both Club-Only recovery priorities remain current at their saturated/do-not-churn heads. No raw archive was re-mined.

Reviewed miner delta:

- `archive-miner-qotd-officers-20260824`: `a3a5a90c1070fdbfa4c0e46603a263a424159e19 → 32bfe92b6f8194fa92a0bb87409a0eed253f9289`

The changed handoffs were read checkpoint-first and intake-only. The March 13, 2021 Ghoulie threshold family was reconciled against existing public ShiyaX material instead of duplicated. Later Officer/operator material is corroborative and does not establish appointment chronology.

### ShiyaX — socially ahead of the map

The additive public read is that Shiya can be socially at home before he has every procedural hallway memorized. On March 13, 2021 he blurts `GHOULIE IN UL` and immediately follows by asking Ghoulie / Baby Lyssa `YOU JOINING BB ?`. Ghoulie's `I-`, `MAYBE?`, and screaming reaction keep the answer visibly undecided, so the scene is not used as a formal admission timestamp. Shiya is instead treating the possibility of her joining as shared room business: delighted social pressure from somebody comfortable enough to pull another person toward the center of the conversation.

A later basic room question to Mugen supplies the useful contradiction. Shiya can still be learning where things live while already acting like the person who notices somebody at the edge and asks whether they are coming in. Procedural mastery and belonging are separate skills.

`bb` remains casual/affectionate room language, not romance evidence. `GHOULIE IN UL` is not promoted into an exact membership date. Social pressure is not admission authority. No exact Shiya membership or Officer appointment chronology was inferred from this packet.

Public WIKI file changed:

- `src/data/character-biographies-shiyax.ts` — adds `YOU JOINING BB?`, a structured narrative section tying the Ghoulie threshold scene to Shiya's own still-in-progress map of the house.

### Verification / deployment

Verified reader head: `70e5b48268e4264853c149087d41dd2f3082a242`.

- Build workflow `33951938884` — **success**; Astro wiki build completed successfully.
- Pages workflow `33951938892` — **success through deployment**; preview build, Pages configuration, artifact upload, actual **Deploy to GitHub Pages**, and reporting all completed successfully.

This final state commit is reader-neutral and uses `[skip ci]`; the verified reader head immediately beneath it is the public content target described above.

### MAIN surface

MAIN reader-facing changes in this pass: **0**. The same evidence belongs there as a person-first ShiyaX fold rather than copied WIKI prose, but the mandatory MAIN gate is still failing before repository execution.

The latest scheduled verification run `33951354958` failed before repository steps instantiated; the failed jobs were explicitly rerun once and attempt 2 failed in the same shape. `Build + verify` exposed `steps: null`; verified Cloudflare deployment was skipped. Source verification, Astro build, built-output verification, and Cloudflare deployment therefore did not execute and reject the ShiyaX fold. No new MAIN deployment is claimed.

The nine MAIN publication-held families at close are **QOTD / Officers, Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**. QOTD / Officers is reviewed through `32bfe92b…` but its conservative consumed cursor remains at `a3a5a90c…` because accepted MAIN ShiyaX publication work has not cleared the required verifier.
