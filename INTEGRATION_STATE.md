# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 390 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. MAIN carries `archive-intake/INTEGRATION_REPORT_RUN_390.md`; this WIKI carries `INTEGRATION_STATE_RUN_390.md`.

## Current census / queue

Full closing census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

Run 390 reviewed Wall through `17d43862cd40dfcd0e680da14a14fabfc6a77ceb`, Louvre through `39edd54926abe23232143255716780d32c36d9e0`, and a late-closing Mugen person-first suffix through `f9c1fa4ba8362a967e10dfcd3b6c7f6a7817f3a7`. Both Club-Only recovery priorities remain current through head. No raw archive was re-mined.

## Public reconciliation

Reader-facing WIKI owner: **Snow**, canonical file `src/data/character-biographies-snow.ts`.

Two complementary Snow folds now coexist in that one biography instead of becoming duplicate Episodes or overlays. The first adds his practical tolerance for rough tools: janky controls, malformed generated output, accidental lake extension, and continuing to poke the toy anyway. The second broadens the mechanism into pathmaking: he pins other people's work and checks that Pins actually works, tells people `Everyone should give it a try`, explains enough of his AI-art process to make it usable while admitting six-hour exhaustion and `still learning the shit as well`, gives Moon concrete build guidance and routes her to Yuuma's guides, and later offers to make game channels around what people actually want. The person-read is not `Snow is the one true expert`; it is that Snow keeps reducing the distance between a person and the next usable step, including by pointing to somebody else's better resource.

The current Wall handoffs keep **KARIT / `capst3r`** and **Marsy~ / `marsy08_`** banked. KARIT is a tiny, reaction-first gallery participant with dry one-line incredulity (`What in tarnation`) and a probable later audience summon; Marsy has almost no surviving Wall prose but is explicitly summoned by Gilli `for your entertainment` and later answers a receipt with `LOL`. Neither currently has a safe canonical public Cast owner, so no thin dossier was fabricated. Tru Angel's Ultima / FFXIV comments remain B-tier game taste only. The late Mugen person-first suffix explicitly produced no new promotion; Ciphy's `strippers tacos and pizza` recruitment memory is already public/project-owned.

## Verification

First Snow reader commit: `3d6cf15f9f4085e4b68155e429c659dc0a732884`.
- Build `33896760345`: **success**.
- Pages `33896760303`: **success**, including deployment.

Second Snow reader commit: `3831a6e2122a471007217142ecdaa7a5ed969e6b`.
- Build `33897443052`: **success**.
- Pages `33897443191`: **success**.
- Pages jobs: preview build **success**, artifact upload **success**, `Deploy to GitHub Pages` **success**, report **success**.

MAIN verification target `7deb4271bbd5fc7053beeef26af7ec5c64b11028` produced workflow `33896997736`. Attempt 1 failed before `Build + verify` instantiated repository steps and skipped verified Cloudflare deployment. Failed jobs were explicitly retried once; attempt 2 failed in the same pre-runner shape and deployment was skipped again. Source verification, Astro, built-output verification, and Cloudflare therefore never actually ran.

## Consumed cursors

No conservative consumed cursor advanced across the six MAIN-held families: Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey. Their newer reviewed heads are durable so those exact suffixes should not be reread; older consumed boundaries stay behind accepted MAIN reader work that has not cleared the mandatory publication gate.

## Rails retained

Hard identity, role, family-language, romance, attribution, privacy, source-contradiction, and earliest-surviving rails remain unchanged. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. Uninspected media remains uninspected. No similar-name identity bridge, hidden-pixel inference, role-array chronology, or private/safety-sensitive detail was promoted.
