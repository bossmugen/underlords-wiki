# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 03:30 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary. Detailed reconciliation for the current pass lives in `INTEGRATION_STATE_RUN_301.md`; the previous substantive reconciliation is Run 300.

## Current reviewed boundary

The controlling census tracks **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue** after Run 301 reconciliation.

Run 301's initial full census found every active ref current through its consumed head. A final movement check then caught Wall advancing during the run. The late delta was reviewed checkpoint-first and intake-only, and Wall is consumed through:

- `archive-miner-wall-hourly-20260824` → `f83d1b8824833cbadee5388b7cac7eacb9fe159e`

Both Club-Only recovery priorities remain current:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` only because more source can arrive later; its present head is reviewed and consumed.

## Run 301 — Alaina checks the context, then joins the crime

Reader-facing WIKI changes: **0**.

Reader-facing MAIN changes: **0**.

The new Wall handoff advances **Alaina** from thin reaction account to a materially contextualized person read. Her seven authored Wall messages are small but unusually coherent: she repeatedly checks whether context or attribution rescues an exhibit, accepts correction without drama, and still participates in the joke. Rotini's `Sorry not sorry` becomes a sung callback; Marian/Panda's `no. that was the context` gets a defeated `Okay` and immediate BRB; and the later wrong-account pocket gets `:Cute_Catpeek:` / `I think that is tho` before Marian and Eos resolve the attribution.

The useful contradiction is **context sanity-checker who is still one of the clowns and can be wrong for a beat**. Marian/Panda↔Alaina also gains a bounded low-friction context-arbitration rhythm across two separated scenes.

The delta also closes the Eos→Marian/Panda q18 reply join around the February wrong-account scene. That improves source structure for an already-public Panda↔Eos rail rather than creating a second Episode.

### Why no reader mutation

Alaina's personality material clears the contextual-confidence threshold. The hold is institutional ownership, not evidentiary timidity: neither public surface currently has a canonical Alaina person file/status shelf, and this Wall packet does not resolve UL member vs Staff vs Platelet vs VIP/visitor vs another historical category. A new Cast card would silently invent status.

Panda already owns the broader February wrong-account scene and a much larger Eos relationship spine, so adding this mini-arbitration to his biography would be receipt mitosis rather than useful resynthesis.

## Previous substantive boundary — Run 300

Run 300 reviewed two advanced intake families checkpoint-first and consumed them through:

- All Characters HR → `7496d8021275c8294113fd3f87b737bc38b31678`
- Mugen person-first → `ccc451e115feb4108be5f3b6dc05ea9a1b386f69`

All Characters HR Run 103 moved WolfPhenix, Sye / Life, RV / Ren, Gilli, Oyasumi, Snow, Anthos, and Daya / Dayadream to `EXHAUSTED AT CURRENT ARCHIVE BOUNDARY`, bringing the authoritative comprehensive HR quarry to **67 exhausted / 33 in progress** out of 100 non-Mugen character files. That remains workflow state, not reader copy.

The Mugen miner sharpened the March 23, 2023 anniversary sequence into a useful editorial-selection read: Mugen could move from sincere Officer credit and safe/comfortable language straight into selecting `rumfection`, `corpse kidnapping`, `panic karaoke`, `music bot breaking`, `generalized confusion`, and `wholesome dumassery` as the group's official remembered highlights. That nuance remains banked because the current public surfaces already own the preservation/framing mechanism and the native anniversary strip still needs recovery before screenshot-grade presentation.

## Hard rails / held rabbits

- Alaina's Default messages remain contextual joins unless a Reply pointer exists.
- Marian/Panda↔Alaina remains bounded relationship texture, not a friendship rank.
- Eos→Marian/Panda q18 parentage above is CLOSED / DO NOT REDISCOVER.
- Rotini is POSTED BY for `20220125_141332.jpg`; Snow is POSTED BY for the February `unknown.png`; no unseen media gains visual semantics or MADE BY / CAPTURED BY / FEATURING attribution.
- `our family` remains UL social/family language, not literal biological family.
- Snow remains never formal #2 / second-in-command.
- No identity merge by similar names.
- No appointment chronology from export-time role arrays.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.

## Verification

Run 301 is state-only on WIKI. The exact closing `main` head must pass the repository's existing Build and Pages workflows before the run is reported complete. MAIN's exact closing `master` head is separately checked through source verification, Astro build, built-output verification, and production deployment.

Detailed reconciliation: `INTEGRATION_STATE_RUN_301.md`.
