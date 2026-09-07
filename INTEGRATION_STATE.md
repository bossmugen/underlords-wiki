# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-07 — Run 577 identity repair_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` remains the controlling miner-consumption ledger. WIKI uses the same reconciled canon/evidence system. Detailed run history lives in `INTEGRATION_REPORT_RUN_*.md` here and `archive-intake/INTEGRATION_REPORT_RUN_*.md` on MAIN.

## Current census

Mandatory closing census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**. No newly discovered miner branch. Closing state remains **0 unread pending-review tails, 9 reviewed MAIN `pending_publication` families, 0 backlog, 0 overdue**. Both Club-Only recovery lanes remain current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`; no raw archive was reopened.

The active frontiers consumed by the immediately preceding reconciliation remain unchanged: Core Rooms / Events through `6b6e509b8856ff458a9a6f7dbd03f0eb542c90dd`; Daycare through `33de3b4ce4e8d4d0347c72a2f4eac3c9f1aa6674`; Birthdays / PR / VC through `ea270681401aa603cf785b73b9160e03be807ad9`; Wall through `a4d5a4a0bf1d60d7143cb9afa6600625cd0433a3`; Mugen person-first through `5013800cdaaebbccd7b925f0d7ce0849960b9ae8`.

## HARD CORRECTION — Mimi is not Mia

Run 576's Mimi/Mia interpretation is superseded.

Exact stable author objects in the Birthdays / PR / VC intake separate two Discord accounts:

- **Mimi / Opalite Honey / `༯`** — stable author ID `783389804079349800`.
- **Mia / `.miaxxx` / `m x`** — stable author ID `439628808545632256`.

Do **not** bridge these stable IDs without explicit account-history evidence. Similar names and older site alias drift are not an identity bridge.

Consequences now locked across WIKI publication:

- April 7–9, 2023 `me and momo are twinsss` / `Mimi's twin` / `love u twinnn` / `you are both Mimi & Momo` belongs to **Mimi ↔ Momo**, not Mia ↔ Momo. The twin language is playful peer shorthand, not biological kinship or a same-person claim.
- Mugen's April 2 `LMFAOO SAID THE POSTER MAKER` reply targets the **Mimi / Opalite Honey** stable account. The attached image remains POSTED BY that account; MADE BY / CAPTURED BY / FEATURING remain unresolved unless separately sourced.
- The PR-room `GOODBYE UNDERLORDS` item is POSTED BY **Mia's** distinct stable account. That establishes posting provenance, not maker/capture/subject provenance or exact downstream deployment.
- Mia keeps independently supported aliases such as **Maho / Miaka**; Mimi / Opalite Honey / `༯` are removed from Mia's public identity trail.

## WIKI reader publication

Reader commit **`8c7992a05a031e486b30f7243647295482904496`** repairs the cast metadata and adds corrected person-first narratives for Mia and Momo. Mia's public read now stays with her own material: Maho recognition, learned-and-reproduced house routing, adaptable concern, fake-departure humor, and lived responsibility. Momo now owns the Mimi twin scene alongside her sideways-answer habit, Screenshot Court reciprocity, and voice-room `ONE PIECE` wake-up energy.

Verification on that exact reader SHA:

- Build workflow `34098203835` — **SUCCESS**.
- Pages workflow `34098203828` — **SUCCESS**.
- Pages build/artifact job `101666447641` — **SUCCESS**.
- Actual Deploy to GitHub Pages job `101666564078` — **SUCCESS**.
- Pages report job `101666616646` — **SUCCESS**.
- Commit statuses `wiki-build` and `wiki-preview` — **success**.

## MAIN surface

MAIN's current public `mia.md` / `momo.md` still contain the stale conflation at this exact close because MAIN's production procedure requires the full exact-master verification → Astro build → built-output verification → deployment gate, and the connected GitHub action surface available to this integrator does not expose safe manual workflow dispatch.

A corrected MAIN reader tree is staged on branch `integrator/mimi-mia-identity-repair-20260907` at commit **`176d48afc3e9bb35c8923109f7293c20b3f1814e`**. It is **not** promoted to `master` until MAIN's complete existing verification/deploy gate can run successfully. This is publication debt, not unresolved identity canon.

## Carried holds / rails

The Mimi/Mia split is a hard source correction. Do not let stale integration reports or old alias arrays reopen it by inertia. `ulstreamer` / Gabu-chair human owner/operator history remains unresolved. DyingFox's stable-ID conflict remains unresolved. Nothien's stale MAIN he/him repair remains production-gated. Wall q18 retrieval gaps remain open. Akariel/Zyrcant stays hard-resolved as one person. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate, and export-time/current role arrays do not date appointments.
