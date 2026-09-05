# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 421 final close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose run states remain recoverable in git history.

## Run 421 final close

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 8 MAIN publication-held families, 0 backlog, and 0 overdue** at close.

Both Club-Only recovery priorities remain current at their saturated / do-not-churn boundaries. The 2021–2026 recovery checkpoint was re-read at `e45fb11c9239e236231bb65645dfd0285bc0078b`; the 2020 recovery branch remains current at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`. No raw archive was re-mined.

### Wall — Usama, Kiro, Miihi

`archive-miner-wall-hourly-20260824` was reviewed checkpoint-first and intake-only from `9e6f79b7cee5354278a7f2b28875a82c1fe42f60` through `293c1b34f623107cb71e180bce24d12db1e2c4b0`.

The strongest new person texture belongs to Usama. His surviving March 2021 Wall footprint is attachment-heavy and low-prose, but not socially blank: he gives a setup (`my new motto`, `same bro`, `caption this`, `found spud`), drops the thing, and lets the room swarm it. Other people immediately caption, roast, or extend the joke. The useful read is an evidence-drop / self-roast / crowd-prompt participant who does not need a paragraph to make a post socially legible.

Kiro and Miihi also gain a small in-room linkage: Kiro replies directly to Miihi's attachment with `oh no`; later Kiro's broader Wall footprint shows quick reactions, recognition of recurring people/jokes, and ordinary gallery participation. Miihi's authored Wall volume is tiny, but inbound replies show more social presence than that authored count alone would suggest.

Public decision: **no reader-facing change on either surface this run.** Neither WIKI nor MAIN currently has a safe canonical Usama, Kiro, or Miihi person owner for this material, and this packet is not strong enough to justify manufacturing thin mystery dossiers. Uninspected attachments remain **POSTED BY** only. No role/title or identity bridge was inferred.

### Mugen person-first — explicit no-promotion close

`archive-miner/mugen-person-first-20260828` was reviewed checkpoint-first and intake-only from `5b4a8e8329f882b7d49ced531ff0739e42a5bebc` through `eae8d9ba9fa1340273d4136d918fa6a9d560a3c9`.

The actual changed suffix is the miner's 20:19 packet. It explicitly records **NO PROMOTION**: source corpus unchanged, repeats only, no genuinely new character mechanism, contradiction, quote, or relationship read that improves either current public surface. The current Mugen biography was novelty-checked and left alone rather than growing filler because the branch moved.

Public decision: **no Mugen reader change.** This is a successful reviewed-no-public-change suffix and is consumed through head.

### Louvre — Hishiro duplicate, Marsello banked

`archive-miner/louvre-ai-art-athenaeum-other-games-hourly` advanced late and was reviewed checkpoint-first and intake-only from `4b7f672ca375c646a8430fb9f98d0177da8da539` through `3d48226a83e0ef4fbd0f80df7545171171c6ec8c`. The branch moved twice during review; both suffixes were closed.

The Hishiro packet strengthens a mechanism already public on both surfaces: clipped setup, the room catching the joke, shared escalation, then practical finish. `Snow do know my humor`, the Gilgamesh nuking bit, and the later task-oriented close do not require another public incident paragraph just because a new handoff restated the same person.

The later cumulative handoff adds **Marsello / display `Relentless`** as a sparse person card in `old_guys_lounge`: `to be more stronger every day!!`, then `gg xD`, plus a profile row with blank roles. That is enough for a tiny competitive-improvement texture, not enough to resolve a canonical merge, infer a role, or create a standalone dossier.

Public decision: **no Louvre reader change.** Hishiro is duplicate/corroboration; Marsello is banked until there is a safe canonical owner or materially stronger person evidence.

### Consumption / queue close

- Wall reviewed/consumed through `293c1b34f623107cb71e180bce24d12db1e2c4b0`; status remains `pending_publication` only because older accepted MAIN Wall work is still trapped behind MAIN's publication gate.
- Mugen person-first reviewed/consumed through `eae8d9ba9fa1340273d4136d918fa6a9d560a3c9`; status remains `pending_publication` only because older accepted MAIN Mugen work is still trapped behind the same gate.
- Louvre reviewed/consumed through `3d48226a83e0ef4fbd0f80df7545171171c6ec8c`; status remains `pending_publication` only because older accepted MAIN Louvre work is still trapped behind the same gate.
- The eight MAIN publication-held families remain **Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**.
- Closing queue: **0 pending review / 8 publication-held / 0 backlog / 0 overdue**.

### Public surfaces / verification

Reader-facing MAIN pages changed: **0**.

MAIN verification target: `0cb251e2f8ee7c19962dc184cef884a2fe0ecb05`.
- Workflow `33942339444`, attempt 1: failed before repository steps instantiated; Cloudflare deployment skipped.
- The failed `Build + verify` job was explicitly rerun once.
- Attempt 2 failed in the same pre-runner shape; latest `Build + verify` again had no executable step list (`steps: null`) and Cloudflare remained skipped.
- MAIN source verification, Astro, built-output verification, and Cloudflare therefore did **not** execute and reject content. No new MAIN deployment is claimed.

Reader-facing WIKI pages changed: **0**.

WIKI verification target: `dcc6d19334bf473f612719f56444aa915f535ccc`.
- Build workflow `33942352572`: **success**; Astro build succeeded.
- Pages workflow `33942352680`: **success**.
- Pages preview build, configuration, artifact upload, `Deploy to GitHub Pages`, and report job: **success**.

No new reader prose was introduced on WIKI. The late Louvre close changed integration bookkeeping only; the already-successful reader verification/deployment remains the controlling public check for this run.
