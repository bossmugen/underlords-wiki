# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-07 — Run 577 canon reconciliation_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` remains the controlling miner-consumption ledger. `bossmugen/underlords:master` `CANON_LOCKS.md` is the highest-priority identity/role correction layer and wins over miner-local hypotheses, integration prose, site alias drift, or account-level ambiguity until Mugs explicitly changes it.

## Current census

Mandatory full census remains **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**. No newly discovered miner branch. Closing state remains **0 unread pending-review tails, 9 reviewed MAIN `pending_publication` families, 0 backlog, 0 overdue**. Both Club-Only recovery lanes remain current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`; no raw archive was reopened.

The active frontiers consumed by the immediately preceding reconciliation remain unchanged: Core Rooms / Events through `6b6e509b8856ff458a9a6f7dbd03f0eb542c90dd`; Daycare through `33de3b4ce4e8d4d0347c72a2f4eac3c9f1aa6674`; Birthdays / PR / VC through `ea270681401aa603cf785b73b9160e03be807ad9`; Wall through `a4d5a4a0bf1d60d7143cb9afa6600625cd0433a3`; Mugen person-first through `5013800cdaaebbccd7b925f0d7ce0849960b9ae8`.

## HARD CANON — Mia / Mimi

The controlling canon remains **Mia = Mimi / Miaka / Opalite Honey / `༯`**. This is explicit in MAIN `CANON_LOCKS.md`, whose header states that it is the highest-priority correction layer and wins until Mugs explicitly changes it.

The Birthdays / PR / VC miner surfaced distinct Discord author IDs associated with different account records. Those records remain useful provenance, but **distinct account IDs do not by themselves create a second human identity when hard canon already resolves the aliases to one person**. The project safety rule against inferring identity from similar names prevents unsupported bridges; it does not erase an existing explicit canon lock.

Accordingly:

- the reciprocal `me and momo are twinsss` / `Mimi's twin` / `love u twinnn` / `you are both Mimi & Momo` material remains Mia/Momo matching-name twin shorthand under the canonical Mia owner;
- the twin language is playful peer shorthand, not biological kinship;
- account-level POSTED BY provenance remains account-specific backstage, while person-level public identity follows the hard canon owner;
- POSTED BY still does not silently become MADE BY / CAPTURED BY / FEATURING.

A temporary WIKI reader change at `8c7992a05a031e486b30f7243647295482904496` incorrectly split Mimi from Mia by treating distinct account IDs as a second public person despite the hard canon lock. That reader change was reverted at **`d7964ce097627a9135fc9ae32cec443690ca0ab2`** (`revert(identity): restore hard Mia alias canon`). The incorrect Run-577 split narrative is superseded by this state.

## WIKI reader publication

Current reader canon is the post-revert tree at `d7964ce097627a9135fc9ae32cec443690ca0ab2`; later Run-577 commits are documentation-only.

Verification on the revert reader SHA:

- Build workflow `34098599365` — **SUCCESS**; Astro build job `101667661648` — **SUCCESS**.
- Pages workflow `34098599376` — **SUCCESS**.
- Pages build/artifact job `101667662225` — **SUCCESS**.
- Actual Deploy to GitHub Pages job `101667797573` — **SUCCESS**.
- Pages report job `101667853228` — **SUCCESS**.

## MAIN surface

MAIN's current reader identity shape already follows `CANON_LOCKS.md`; **do not promote** `integrator/mimi-mia-identity-repair-20260907` or commit `176d48afc3e9bb35c8923109f7293c20b3f1814e`. That staging branch was created from the now-rejected account-split interpretation and is invalid publication debt, not a pending canonical repair.

No MAIN reader mutation is required for Mimi/Mia in this reconciliation. Because MAIN reader source did not change, no new MAIN source-verification / Astro / built-output-verification / production-deploy success is claimed here.

## Carried holds / rails

`ulstreamer` / Gabu-chair human owner/operator history remains unresolved. DyingFox's stable-ID conflict remains unresolved. Nothien's stale MAIN he/him repair remains production-gated. Wall q18 retrieval gaps remain open. Akariel/Zyrcant stays hard-resolved as one person. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate, and export-time/current role arrays do not date appointments.
