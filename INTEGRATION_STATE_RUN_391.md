# UNDERLORDS WIKI — Integration State Run 391

## Census / intake

Fresh branch census from `bossmugen/underlords`: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review: 0
- backlog: 0
- overdue: 0
- MAIN publication-held families: 6

Every active miner ref exactly matches the Run 390 closing head. No new intake delta exists for WIKI review this pass. Wall remains at `17d43862cd40dfcd0e680da14a14fabfc6a77ceb`; Louvre at `39edd54926abe23232143255716780d32c36d9e0`; Mugen person-first at `f9c1fa4ba8362a967e10dfcd3b6c7f6a7817f3a7`.

Both Club-Only recovery priorities remain current through head. The 2021–2026 checkpoint was re-read and its retrieval-locality/saturation boundary is unchanged. No raw archive was re-mined.

## Public reconciliation

No reader-facing WIKI page changed. No finding from Run 390 was duplicated as new. The latest reader-facing owner remains Snow's canonical biography; KARIT, Marsy, Tru Angel taste, and the no-promotion Mugen suffix remain in their previously recorded dispositions.

No new identity, role, relationship, provenance, privacy, or source contradiction was introduced. Existing hard rails remain unchanged.

## Consumed cursors

No `last_consumed_sha` moved because no miner branch advanced. MAIN's six publication-held families remain governed by the controlling branch ledger on `bossmugen/underlords:master`.

## Verification

WIKI verification target: `ea10a0e5b21f7b99f06233c6f387a12ea6956858`.

- Build workflow `33898579064`: **success**, including `Build Astro wiki`.
- Pages workflow `33898579052`: **success**.
- Pages preview build: **success**.
- `Deploy to GitHub Pages`: **success**.
- Pages report: **success**.

MAIN verification target: `aedd7d56401a1fdb0f84ddf590bcbc0d6066dc31`.

- Workflow `33898562444`: **failure**, then failed jobs explicitly retried once.
- Attempt 2 failed in the same pre-runner form: `Build + verify` exposed no repository step list and verified Cloudflare deployment was skipped.
- Source verification, Astro, built-output verification, and Cloudflare did not run and reject content.

No reader-facing publication was required this pass. WIKI is green and deployed; MAIN remains verifier-blocked rather than content-rejected.
