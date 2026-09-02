# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 13:10 PDT_

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

## Latest reconciliation — zero-delta census

The run-247 full branch census found **no advanced or unconsumed active miner head**. Every active ref still matched the controlling MAIN ledger's `last_consumed_sha` at census time, so there was no legitimate intake delta to reread.

That means the correct integration result is pleasantly boring:

- genuinely new findings integrated: **0**;
- new duplicate evidence families requiring reconciliation: **0**;
- newly opened conflicts / rabbits: **0**;
- MAIN reader-facing changes: **0**;
- WIKI reader-facing changes: **0**;
- consumed SHA advances: **0**.

No raw archive was reopened, no already-consumed tail was re-mined, and no duplicate biography paragraph or reference object was manufactured just to make the hour look busy. The previous Pride reconciliation remains where it belongs: MAIN owns the person-first appellate/self-reclassification story; WIKI owns the searchable `Pride Appeals the Charge` Running Gag.

## Verification / deployment

MAIN census state commit `0f74a1c4bf5861557733cb41da923a45375acd8e` passed exact workflow `33677390141`:

- Verify source canon and architecture: success.
- Build Astro site: success.
- Verify built output: success.
- Deploy and verify exact production commit to Cloudflare Pages: success.

WIKI run-detail commit `e5cd5b833a7e5aa8b87e01e674a074ec4977aa3b` passed both existing pipelines:

- Build Underlords Wiki `33677486855`: success.
- Pages `33677486841`: success.
- Pages preview build: success.
- Pages artifact upload: success.
- Deploy to GitHub Pages: success.
- Pages report: success.

This rolling-state commit is verified separately at run close so the final WIKI head, not merely its parent, is green.

## Held rabbits / rails

No new rabbit was opened this cycle. Existing unresolved identity, attribution, origin, reply-parent, and media-inspection boundaries remain unchanged. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING stay separate; earliest surviving stays distinct from origin; joke family/romance/rank language stays non-literal unless independently supported; export-time role arrays remain unsafe appointment chronology.

## Surface routing

MAIN: **0 reader-facing changes** — no new miner material existed to deepen a canonical owner.

WIKI: **0 reader-facing changes** — no new miner material existed to justify another dossier, Episode, Running Gag, quote, relationship edge, or location object.

Detailed reconciliation: `INTEGRATION_STATE_RUN_247.md`.
