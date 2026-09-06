# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05/06 — Run 502 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass is in `INTEGRATION_REPORT_RUN_502.md`.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** in Run 502.
- **0 unread pending review / 0 backlog / 0 overdue** at close.
- **10 MAIN publication-held families** remain reviewed publication debt.
- Club-Only 2021–2026 remains current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 remains current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Run 502

The mandatory full miner-branch census was persisted on MAIN before deep review. The only opening mover was Wall (`d38bf30a560d8562109db805f3f02f3af947698e → 6a17a10406668f8da56c5628213e138f61c5aa6f`). The suffix was reviewed checkpoint-first and intake-only. Closing census found no additional active miner movers.

No miner branch was merged or cherry-picked and no raw archive was re-mined.

## Public integration

### WIKI

Reader-facing files changed:

- `src/data/character-biographies-ricochet.ts`
- `src/data/character-biographies-run470.ts`

Reader commit `6dc5cf05aac41c31fe514b1061771996bbc5aa34` gives Ricochet / `dragonrichard` a finished person-first narrative and wires it into the existing finished-narrative resolver path.

The page now owns the cumulative contradiction rather than stacking event reports: Ricochet can turn Ren's room redirect into a `never` joke, get cut through by `Rich I'm serious lol`, and later become the person telling Rummy to move the `eh hehe` to the correct chat. Syv's `You disappeared for weeks` → `I'm busy` → immediate ramen request stays a low-friction return scene. Gabu/avatar banter and Ricochet's self-roast sit under the self-roast ↔ mock-confidence mechanism rather than literal appearance/body claims.

Exact-reader verification passed:

- Build workflow `34017083096`, build job `101442643931`: **SUCCESS**.
- Pages workflow `34017083116`, build job `101442644206`: **SUCCESS**.
- Deploy job `101442703635`: **SUCCESS**, including `Deploy to GitHub Pages`.
- Pages report job `101442729133`: **SUCCESS**.

Hard identity separation remains intact: **Ricochet / dragonrichard is not Rich / DragonRich**.

### MAIN

Reader-facing changes: **0**.

MAIN already has a substantial Ricochet biography, so the fresh Wall synthesis belongs as an additive deepener there rather than a second page. The equivalent reader update remains legitimate publication debt behind MAIN's controlled source-verification → Astro → built-output → production gate. The gate was not bypassed and no fresh MAIN reader build/deploy is claimed.

## Duplicate / corroboration

- Syv's disappearance→ramen scene was already public on MAIN; WIKI uses it as relationship texture inside the broader person synthesis rather than treating it as a newly discovered standalone incident.
- Existing WIKI cast material already had Ricochet's Ren teasing-care line; the new Wall packet changes the room-boundary read rather than duplicating that older bedtime joke.
- Rich / DragonRich material remains completely separate and was not imported into Ricochet.

## Banks carried forward

- **BishopThaGuru** remains a substantial developing WIKI candidate: mock-suspicious Wall magnet, attention-as-affection converter, comfortable Bishop↔Tofu tease/investigation grammar, occasional receipt filer, and `heiroglyohics` Petty Crime. Affection language remains social/playful, not romance. Screenshot attribution remains POSTED BY Bishop only.
- **Alaina** remains thin but person-shaped: context-checking skeptic, graceful retreat after context (`I see`), and compact incredulity (`This dude`, `Why are you here`, `Wow`, `Shameful`). The March-17 follow-up rabbit remains open.

## Holds / safety rails

- Ricochet / `dragonrichard` is not Rich / DragonRich.
- Room shepherding does not create a moderator or governance appointment.
- Syv absence-noticing / ramen banter does not create romance, cohabitation, or a formal relationship label.
- The Tenor `leave the house` title does not establish a homebody trait.
- Self-roast lines do not establish actual appearance or self-esteem.
- `milkshakes` remains absurd game/avatar banter, not sexual/body evidence.
- `IMG_3764.jpg` remains POSTED BY Ricochet only; MADE BY / CAPTURED BY / FEATURING unresolved until direct media inspection.
- Bishop affection language remains social/playful, not romance.
- Bishop screenshot attribution remains POSTED BY only.
- Alaina's q18/March-17 follow-up remains unresolved.
- No appointment chronology was derived from export-time arrays.

## Consumed frontiers

- Core Rooms / Events: `15b2516792fd178a578717b850e9925f268ac468`.
- QOTD / Officers: `43f34198e6ca73b45424712d7fece2bb8b287cb2`.
- Wall: `6a17a10406668f8da56c5628213e138f61c5aa6f`.

Latest verified WIKI reader publication is Run 502 Ricochet at reader commit `6dc5cf05aac41c31fe514b1061771996bbc5aa34` (Build workflow `34017083096`; Pages workflow `34017083116`; successful deploy job `101442703635`).
