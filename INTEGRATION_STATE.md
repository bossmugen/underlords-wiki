# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 — Run 473 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed Run 473 reconciliation is in `INTEGRATION_REPORT_RUN_473.md` here and `archive-intake/INTEGRATION_REPORT_RUN_473.md` on MAIN.

## Run 473 — Pride discovers the failure tree and refuses to leave

Mandatory opening census was persisted before deep review: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered**, **3 opening unread families**, **10 older MAIN publication-held families**, **0 backlog**, and **0 overdue**.

Reviewed checkpoint-first from changed intake handoffs only:

- Louvre / Athenaeum / Other Games: `90389ec8ebc639d8262b4cd9e5df656aa1a35eb4 -> 0ce27625d258459d17cc7ccfc02b59aef316d2b1`, then late mover `0ce27625d258459d17cc7ccfc02b59aef316d2b1 -> 064bd6de98bb919bee49accf6a38026d4d093e5d`.
- Mugen person-first: `e38c2dec52cb984399c416678f88d87d25127c0c -> 11605ae9ef39b941e4d2c7e57d1e6449ac5a2cd1`.
- Wall: `50f62a6b7b7b5282634e62580ec87791acb42fb5 -> 64233003bbce9e54a807a43833a5cd0bbd0b5783`, then late mover `64233003bbce9e54a807a43833a5cd0bbd0b5783 -> 6c2a7ace2c486590c610532be695054dd5f12878`.

Both Club-Only recovery priorities remain current at saturated/do-not-churn heads `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`. No raw archive was re-mined.

A concurrent Run 474 census landed while this pass was closing. Its controlling ledger preserves this review and leaves **1 unread active family** — Core Rooms / Events `61a0c7f0... -> a7fe1fc7...` — with **0 backlog** and **0 overdue**. Do not collapse that newer Core tail into Run 473.

### Reconciliation

**Beowulf / JereGilgamesh** gains useful extra door/confusion texture, including needing invite mechanics clarified and accepting practical help, but MAIN already meaning-owns the larger person mechanism: swagger survives confusion, help is accepted, and the person who once needed the door explained later helps somebody else find it. No duplicate incident ledger.

**Mugen** gets a cumulative systems-brain/clown-brain reinforcement rather than two new scenes. In 2020 Snow turns a real permissions repair into `discord gnomes`; Mugen later answers `I heard the distant screams, thanks for fixing em!`. In 2023 Mugen herself converts QOTD bot setup into `New barista on board!` / `Onboarding in process`. The useful read is that technical infrastructure can become social theater while the actual task stays live. Snow owns the gnome invention; Mugen joins it. Nothing says Mugen created/coded/owned QOTD bot. No duplicate chronology blocks.

**Han / Nelph / Syv** mostly deepen already-public Wall contradictions. Syv adds recurring caption-first mini-narration and dry practical reality checks plus one exact structured-Reply edge to Ricochet; existing person-first owners already carry the stronger cumulative shape, so the fresh lines are banked rather than multiplied into another event block.

**Logic ↔ Gilli** gains a compact lived relationship rhythm around reciprocal Wall embarrassment. After Gilli files material, Logic answers `Don't worry Gilli I still love you`, then `Now we are even` with a hug; another filing gets `Don't worry I still love you`. The social repair and mock score-settling are useful. The uninspected media remains **POSTED BY Gilli only**; no maker/subject/capture claims were invented, and no thin new character page was created.

**Pride** is the genuine WIKI publication. A cursed UNO/cube premise gets stress-tested through repeated `imagine...` edge cases until Pride has turned ordinary UNO into `survival`, `last man standing wins`, and a `high stakes uno game`. In a separate crime-show conversation Pride jokes about taking `mental notes`, then focuses on the tiny mistakes that ruin supposedly perfect plans. The cumulative person read is **professional escape artist socially ↔ mentally sticky once an interesting system appears; methodical attention delivered like a goblin**. Crime-media jokes remain media-context dark humor, not violent intent or planning; exact show title and UNO-object provenance remain unresolved.

The existing Pride narrative was already discoverable by the generic `character-biographies*.ts` resolver and Pride already existed in public cast data, so this pass folded the new axis directly into `src/data/character-biographies-pride.ts` instead of creating a duplicate dossier. The new person-shaped section is **`THE CHAOS HAS ARCHITECTURE`**.

### Verification and publication

Reader-facing WIKI changes:

- `src/pages/characters/torr.astro` — minimal route repair for an existing Snoop link to `/characters/torr`; it reuses the existing Torr character data and generic character page rather than inventing lore. Reader commit `a4c96f3606abe5eb746d563e3a8ebbad1f053591`; Build `33990778875` succeeded; Pages `33990778869` built and deployed successfully.
- `src/data/character-biographies-pride.ts` — Pride failure-mode / edge-case axis folded into the existing biography. Reader commit **`375b5a5e256ad3b276fc5bd145f8b061d33db7ce`**; Build **`33990905513`** succeeded; Pages **`33990905500`** completed preview build, artifact upload, **Deploy to GitHub Pages**, and report successfully.

One transient unsupported synthesis was caught during reconciliation and removed before final close. The final verified/deployed reader tree does **not** contain it.

Reader-facing MAIN files changed **0**. MAIN's publication workflow remains manual/schedule-gated and the connected GitHub surface exposes no workflow-dispatch write action, so this pass did not push reader copy that could not clear the required source verification + Astro + built-output + Cloudflare gate. No MAIN reader build or deployment is claimed.

### Consumption close

- Mugen person-first consumed through `11605ae9ef39b941e4d2c7e57d1e6449ac5a2cd1`.
- Wall consumed through `6c2a7ace2c486590c610532be695054dd5f12878`.
- Louvre / Athenaeum / Other Games consumed through `064bd6de98bb919bee49accf6a38026d4d093e5d` after the Pride WIKI publication cleared build + Pages deployment.

The controlling MAIN ledger still carries **10 older MAIN publication-held families**. Those are publication debt, not unread miner tails. The newer concurrent Core Rooms / Events tail remains the sole active unread family at this close.

Previous detailed public integration: `INTEGRATION_REPORT_RUN_471.md` (Torr corrected publication pass).