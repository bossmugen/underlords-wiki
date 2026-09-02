# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 13:01 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side current-state rollup; prior run detail remains preserved in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue** at this close.

Current key reviewed heads:

- All Characters HR: `dd500657470b71415cc839832dc5e03ead307e68`
- Core Rooms: `aac6703622099dd3c96138c59f51b87287d2a92e`
- Wall recovery: `b3027f56ee3fff9178746ac4ee88adcb1a618f7d`
- Daycare: `e80d25323fb73a1b802adb7e71b91d64d5dcff5b`
- Whiskey Longitudinal: `5e5fe0b86a5130efa3798bbf0f4097ddcca912ba`
- Louvre / AI Art / Athenaeum / Other Games: `518686748761233d30d01d10f1224ce179dcefe8`
- Mugen person-first: `f8065759c98fa6c40aabd3f72d8b48cd55285442`
- Club-Only 2020: `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Club-Only 2021–2026: `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`

Both Club-Only recovery priorities remain current. Wall remains `recovery_in_progress` only because that quarry may grow again; its present head is already reviewed.

## Latest reconciliation — Pride appeals the charge

`archive-miner/all-characters-hr-20260828` advanced from `8b54baaf8cf3f6cd37afa497367b0382ff5dd32d` to `dd500657470b71415cc839832dc5e03ead307e68`. The delta was reviewed checkpoint-first and intake-only and changed exactly one handoff: Pride's comprehensive HR file.

The refined mechanism is simple and extremely Pride: the Wall can have the exhibit, but Pride still wants a vote on what the exhibit means. Earlier Pride explains that everyone gets exposed, warns that they are always watching, predicts being plastered for dumb things, and then answers Gilli's `im watching you` with `keep watching baby`. In the December sequence Pride answers a fresh filing with `:sip:` and `i regret nothing`, then explicitly argues that it is not a shame moment but a proud moment before sipping again.

MAIN already owned that exact person-first contradiction and the full December scene, so adding another biography paragraph there would have been receipt mitosis.

WIKI did have Pride in Cast with Wall/sip context, but it did not expose this recurring move as searchable reference lore. WIKI now owns the complementary Running Gag:

- `src/data/integrator-gags-20260902-1258.ts`
- **Pride Appeals the Charge**
- reader commit `548ee31d12d7b60798c6d6adb3eede995f79cc0e`

The joke is not that Pride denies everything. The better pattern is that Pride occasionally accepts the prosecution and appeals the classification until embarrassment has been rezoned as an achievement.

## Verification / deployment

WIKI exact reader verification on `548ee31d12d7b60798c6d6adb3eede995f79cc0e`:

- Build Underlords Wiki `33676397482`: success.
- Pages `33676397437`: success.
- Pages build: success.
- Deploy to GitHub Pages: success.
- Pages report: success.

MAIN's run-246 census commit `dbb10f9e52920a9f17e0e7efc4fec2e3a422e46a` passed `UL Hourly Build + Deploy` workflow `33676040514`: source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare Pages deployment all succeeded. MAIN's final state/report commit is checked separately at run close.

## Held rabbits / rails

- Pride-adjacent media remains uninspected where not explicitly inspected. POSTED BY stays distinct from MADE BY / CAPTURED BY / FEATURING.
- `keep watching baby` remains playful Wall language, not romance evidence.
- Pride's boast does not establish literal sexual history, gender, real-world identity, or relationship status.
- The December `proud moment` wording does not establish the origin of the Wall of Fame concept.
- Pride/body/corpse language remains social/game joke language rather than literal violence; Ren-posted images retain separate attribution boundaries.
- Earliest surviving contextual evidence is not silently promoted into an origin claim.
- Export-time role metadata does not become appointment chronology.

## Surface routing

MAIN: **0 reader-facing changes** for this delta because the canonical Pride biography already carries the stronger person-shaped read.

WIKI: **1 reader-facing structured change** — the searchable Running Gag `Pride Appeals the Charge`.

Detailed reconciliation: `INTEGRATION_STATE_RUN_246.md`.
