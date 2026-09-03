# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 03:10 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary. Detailed reconciliation for the current pass lives in `INTEGRATION_STATE_RUN_300.md`; the previous completed reconciliation is Run 298.

## Current reviewed boundary

The controlling census tracks **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue** after Run 300 review.

Run 300 reviewed two advanced intake families checkpoint-first and consumed them through:

- All Characters HR → `7496d8021275c8294113fd3f87b737bc38b31678`
- Mugen person-first → `ccc451e115feb4108be5f3b6dc05ea9a1b386f69`

Both Club-Only recovery priorities remain current:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` only because more source can arrive later; its present head is already consumed through `161d27a6fd18de82b6aa09ff0f16a4e3c4256cf1`.

## Run 300 — two deltas, zero receipt mitosis

Reader-facing WIKI changes: **0**.

### All Characters HR

Run 103 requalified WolfPhenix, Sye / Life, RV / Ren, Gilli, Oyasumi, Snow, Anthos, and Daya / Dayadream. No target produced a materially new person mechanism after its mature HR was re-read against current source and the fresh-source gate.

All eight therefore move to `EXHAUSTED AT CURRENT ARCHIVE BOUNDARY`. The authoritative comprehensive HR quarry is now **67 exhausted / 33 in progress** out of 100 non-Mugen character files. That is reversible workflow state, not reader copy and not a claim that the human has been exhaustively known.

The current WIKI biographies already own the useful person mechanisms, so no status-only paragraphs were added.

### Mugen — official memory still refuses respectability

The Mugen miner sharpened a March 23, 2023 anniversary sequence into a useful person-level read. Mugen first announces three years, credits her `hypercompetent Officers` for keeping the family `safe and comfortable`, then toasts another year of `rumfection`, `corpse kidnapping`, `panic karaoke`, `music bot breaking`, `generalized confusion`, and `wholesome dumassery`.

The nuance is editorial selection: Mugen does not only retain old material; in an official commemoration she can choose shared absurdity as representative history worth carrying forward.

That nuance is accepted and banked, but it does not receive another WIKI entry this cycle. Run 298 already reviewed the same source family, and Mugen's current narrative already owns the preservation, framing, house-building, attribution, and sincerity-plus-stupid-house-language mechanisms. A duplicate Quote/Running Gag/Episode would make the structured side worse, not richer.

Reopen the public fold if a second formal commemoration, a deliberate sanitizing counterexample, or recipient-side reaction gives this selection/curation distinction its own movement. The three-message native strip also remains a recovery target before screenshot-grade presentation.

## Hard rails / held rabbits

- `our family` remains UL social/family language, not literal biological family.
- Anniversary callback nouns remain in-group commemorative language rather than literal real-world crime/harm claims.
- `music bot breaking` is not silently equated with the later Daycare endurance campaign.
- Snow remains never formal #2 / second-in-command.
- No identity merge by similar names.
- No appointment chronology from export-time role arrays.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.
- No unseen media gains visual content or creator/capturer/featured-subject attribution.

## Verification

Run 300 is state-only on WIKI. The exact closing `main` head must pass the repository's existing Build and Pages workflows before the run is reported complete. MAIN's exact closing `master` head is separately checked through source verification, Astro build, built-output verification, and production deployment.

Detailed reconciliation: `INTEGRATION_STATE_RUN_300.md`.
