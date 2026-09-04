# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 379_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Full detail for this cycle is in `INTEGRATION_STATE_RUN_379.md`; MAIN carries the matching `archive-intake/INTEGRATION_REPORT_RUN_379.md`.

## Current census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review after reconciliation: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

Run 379 reviewed three intake-only advances checkpoint-first:
- `archive-miner-wall-hourly-20260824` → `5335812c4ae87b80ef57241d02155ef835ef9335`
- `archive-miner/daycare-2020-2026-hourly` → `4d5ac910d38222f7d528f35c0dc5c5c91102be5c`
- `archive-miner/whiskey-longitudinal-hourly` → `d105c5ad606c6b3737734fdd1b95de7c8d74f960`

Both Club-Only recovery priorities remain current through head:
- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

The 2021–2026 recovery checkpoint was re-read directly; saturation / retrieval-failure / active-rabbit / do-not-churn boundaries remain unchanged. No raw archive was re-mined.

## Public reconciliation

Reader-facing WIKI changes in Run 379: **Anayss + DyingFox**.

Anayss now gets the missing evidence-memory mechanism. Across the Wall, other people repeatedly notice that old receipts reappear around Ana: Momo says there are no receipts and gets `I do`; Mugen predicts Ana will pull something back up months later; Hishiro says `Evidence retriever`; Daya says old material comes from `Ana's pocket`; Kaede lands `Evidence goblin`. Anayss also wants old `TBT ART` they missed. The public read is not a formal Archivist title. It is a recurring social habit: the past becomes live room material again because Ana remembers, retrieves, or asks to see it.

DyingFox gains a different kind of agency. Across Dec. 2020 → Feb. 2021, Fox repeatedly starts tiny contact with Lilly — `Morning lilly!`, later a hug command — while Lilly receives it at stadium volume: `FOX OMG HIIIII`, `I LOVE YOU`, `HI SUNSHINE`. Fox answers warmly without changing bandwidth. That makes the low-verbal style less passive: Fox can be the initiator while somebody else supplies the fireworks. The relationship supports familiar affectionate friendship, not romance, literal family, exclusivity, or a closeness ranking.

Whiskey's new Tofu lane was meaning-deduped. Music solicitation, dehydrated-squad prompting and the Marian mock-fight shard all corroborate Tofu's already-public habit of turning minor ordinary chaos into group activity with cooperative timing. No receipt-shaped appendicitis was added merely because another folder existed.

Reader-facing MAIN changes in Run 379: **0**. The six accepted families remain held behind MAIN's mandatory verifier.

## Consumed cursors

No conservative consumed SHA advanced. Wall, Daycare and Whiskey are reviewed through their current heads but remain publication-held because older accepted MAIN reader work in those same families has not cleared MAIN's verification gate. Their current `last_seen_sha` / `last_reviewed_at` values are durable in MAIN's controlling ledger, so this cycle's intake is not unread mining debt.

## Verification / deployment

WIKI reader head `319d13112da921784e6946dea39771e68e1dc15d` passed exact Build workflow `33874580685`. Exact Pages workflow `33874580625` also passed, including deployment. Anayss and DyingFox are deployed.

MAIN workflow `33874899520` on report head `93cb3302c4b332271a05e2c1e500d2cd3e86e4c3` completed failure before repository execution. `Build + verify` had no instantiated steps; verified Cloudflare deployment was skipped. No source-verifier, Astro, built-output, or reader-content failure was demonstrated because those checks never began. No new MAIN reader deployment is claimed.

## Rails retained

`Evidence goblin` / `Evidence retriever` remain peer reputation language, not formal governance roles. Anayss old-media circulation does not collapse POSTED BY / MADE BY / CAPTURED BY / FEATURING. DyingFox↔Lilly love/hug language remains affectionate familiarity rather than romance or family canon. Tofu↔Marian remains same-scene reciprocal play without a technical reply graph. Sensitive/private Tofu snippets stay backstage. The unresolved `does this count as water?` image remains unresolved. No identity bridge was inferred from nickname similarity.
