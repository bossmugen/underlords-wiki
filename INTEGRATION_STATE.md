# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05/06 — Run 494 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation is in `INTEGRATION_REPORT_RUN_494.md`.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** in Run 494.
- **0 unread pending review / 0 backlog / 0 overdue** at close.
- **10 MAIN publication-held families** remain reviewed publication debt.
- Club-Only 2021–2026 remains current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 remains current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Run 494 reviewed delta

QOTD / Officers: `310da416117fe8d82c655a1cf34d61932f3e361c → 969c9a81b90cdc1a427d75cb92a8e8d1954bc8d5`.

Review was checkpoint-first and intake-only. No raw archive was re-mined. The branch was rechecked before close and remained at `969c9a81…`.

## Canon reconciliation — Zyrcant = Akariel

The miner handed Akariel and Zyrcant over as separate quarry buckets. Project canon already resolves the identity: **Zyrcant and Akariel are the same person**. The WIKI already had one `zyrcant` character owner using the Akariel aliases, so this run merged the new material into that existing dossier instead of creating a duplicate character.

Fresh additive texture now public:

- September 2020 preserves Akariel introducing herself directly to Mugen before being let through.
- Zyrcant can take a practical coordination task almost instantly: `Got it .. thank you boss`.
- Officers Challenge participation is eager and unserious in exactly the right combination: `is it time??`, `where is the link`, then `i got bamboozled` when the trigger misbehaves.
- Mugen can route Zyrcant through tasks/DMs and also receive tiny mock-corrections or Wall opt-in from the same person. The relationship is useful without becoming stiff.
- Old Server 1 history survives socially. When Mugen asks why an insult carried over, Zyrcant answers `Aye it’s in the blood`; Mugen says it is apparently in the club title.

Reader-facing implementation: `src/data/character-biographies-zyrcant.ts`.

Exact reader commit: **`293027891a8d28b0aafb0abb8af494f5fda9aa49`**.

Verification for that exact reader head:

- Build Underlords Wiki workflow **`34010818706`** — success, including Astro build.
- Deploy Underlords Wiki Preview / Pages workflow **`34010818732`** — success.
- Pages preview build — success.
- Pages artifact upload — success.
- Actual GitHub Pages deployment — success.

## Holds / safety rails

- The September 2020 welcome is a Discord/intake threshold, not an exact in-game UL join date.
- Officers Challenge participation does not establish promotion chronology.
- Exported/current role arrays remain status snapshots only.
- The AOFT-qualified recruit remains unnamed.
- Predecessor-club continuity does not transfer old rank into UL governance.
- Uninspected media stays uninspected; POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

## Surface split

### WIKI

- Reader-facing changes: **1 existing character file** (`character-biographies-zyrcant.ts`).
- Reader commit: `293027891a8d28b0aafb0abb8af494f5fda9aa49`.
- Build `34010818706`: success.
- Pages `34010818732`: success/deployed.
- Detailed report: `INTEGRATION_REPORT_RUN_494.md`.

### MAIN

- Reader-facing changes: **0**.
- MAIN already has a substantial `src/content/people/zyrcant.md` biography with Akariel hard-wired as the same person. The fresh material is accepted for a richer person-first fold around practical usefulness, Mugen familiarity, Officers Challenge energy and old-server residue.
- MAIN's controlled production path still requires source verification + Astro build + built-output verification + deployment. The available GitHub connector does not expose the required workflow-dispatch action, so no reader source was pushed around the gate and no MAIN reader deployment is claimed.

## Current reviewed frontiers

- Core Rooms / Events: `28f5d28976cdc47611a170ddfec11b7f999c2bb5`.
- Louvre: `47959a2bcec03e1dad5d9f0e36b2d4d881bf9aa3`.
- Wall: `8dbafaff00474b1e63a1724769a546d108873fef`.
- Mugen person-first: `ed9782e36011a8ef135df3e7b31eb4a6879a67c5`.
- QOTD / Officers: `969c9a81b90cdc1a427d75cb92a8e8d1954bc8d5`.

QOTD / Officers remains a MAIN `pending_publication` family only because older accepted MAIN material plus this richer MAIN Zyrcant fold still waits behind the production gate. The fresh WIKI suffix is verified, deployed and consumed.