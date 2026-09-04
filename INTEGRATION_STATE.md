# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 391 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. MAIN carries `archive-intake/INTEGRATION_REPORT_RUN_391.md`; this WIKI carries `INTEGRATION_STATE_RUN_391.md`.

## Current census / queue

Full closing census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

Run 391 is a genuine no-delta pass: every active miner ref matched the Run 390 closing head. Wall remains at `17d43862cd40dfcd0e680da14a14fabfc6a77ceb`, Louvre at `39edd54926abe23232143255716780d32c36d9e0`, Mugen person-first at `f9c1fa4ba8362a967e10dfcd3b6c7f6a7817f3a7`, Core Rooms / Events at `4def21e7262a6211b11453fb1e91cc6c39366960`, Daycare at `b925502abd685fa9d17a6e845ce534a5fe589831`, and Whiskey at `d105c5ad606c6b3737734fdd1b95de7c8d74f960`. Both Club-Only recovery priorities remain current through head. The 2021–2026 checkpoint was re-read; its retrieval-locality failure and saturated-route boundary remain unchanged. No raw archive was re-mined.

## Public reconciliation

No reader-facing WIKI page changed in Run 391, and no Run 390 finding was repackaged as new. The latest reader-facing WIKI owner remains **Snow**, canonical file `src/data/character-biographies-snow.ts`.

The two complementary Snow folds from Run 390 remain the current public synthesis: practical tolerance for rough tools and malformed generated output, plus his broader pathmaking habit of reducing the distance between another person and the next usable step without pretending he is the sole expert. KARIT and Marsy remain banked without safe canonical Cast owners; Tru Angel's Ultima / FFXIV comments remain B-tier game taste; the late Mugen suffix remains no-promotion because its material is already project-owned or belongs to other people.

No new identity, role, relationship, provenance, privacy, or source contradiction was introduced this pass.

## Verification

WIKI Run 391 verification target: `ea10a0e5b21f7b99f06233c6f387a12ea6956858`.

- Build `33898579064`: **success**, including `Build Astro wiki`.
- Pages `33898579052`: **success**.
- GitHub Pages preview build: **success**.
- Artifact upload: **success**.
- `Deploy to GitHub Pages`: **success**.
- Pages report: **success**.

MAIN Run 391 verification target: `aedd7d56401a1fdb0f84ddf590bcbc0d6066dc31`.

- `UL Hourly Build + Deploy` workflow `33898562444`: **failure**.
- `Build + verify` failed before repository steps instantiated; the job exposed no step list.
- Verified Cloudflare deployment was skipped.
- Failed jobs were explicitly retried once; attempt 2 failed in the same pre-runner form and deployment stayed skipped.
- Source verification, Astro, built-output verification, and Cloudflare therefore did not run and reject content.

## Consumed cursors

No `last_consumed_sha` moved because no miner branch advanced. The six MAIN-held families remain Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey. Their newer reviewed heads remain durable while older consumed boundaries stay behind accepted MAIN work that has not cleared the mandatory publication gate.

## Rails retained

Hard identity, role, family-language, romance, attribution, privacy, source-contradiction, and earliest-surviving rails remain unchanged. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. Uninspected media remains uninspected. No similar-name identity bridge, hidden-pixel inference, role-array chronology, or private/safety-sensitive detail was promoted.
