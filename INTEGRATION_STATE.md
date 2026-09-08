# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-08 — Run 629 Wall + Daycare reconciliation_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. MAIN canon locks remain the highest-priority identity/role correction layer. Per-run history remains durable in `INTEGRATION_REPORT_RUN_*.md`; this file tracks the current reconciled frontier rather than duplicating every old run.

## Current census

Mandatory full census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**. Run 629 discovered **0** new refs. The run reviewed the Daycare tail through `bee70f3bf3dab5122d9c201c30fd7d68850fbad3` and Wall through the newer `f3d9f972b856eee10b8592b8eacf9da110dcdc17` frontier that appeared while reconciliation was in progress.

Both Club-Only recovery lanes remain current/saturated:

- `archive-miner/club-only-2021-2026-hourly` — `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` — `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

No raw archive was reopened.

A newer MAIN integrator census became the authoritative branch-state writer before Run 629 closed. Run 629 therefore did not replace that newer `INTEGRATOR_BRANCH_STATE.json` snapshot with an older local copy; its durable review scope is recorded in `INTEGRATION_REPORT_RUN_629.md` for the controlling writer to reconcile safely.

## Run 629 — Wall + Daycare

### Ghostt

The Wall packet strengthens Ghostt's existing person read: reaction-first gallery regular, visual shorthand, dry one-line commentary, mock prosecution/alibi, and continued social Wall presence after explicit game/club disengagement. MAIN already owns the richer synthesis, so the packet is largely duplicate/corroboration.

Concurrent work added `src/data/character-bios-run629-intake.ts` with a good Ghostt structured dossier. **That module is not imported or merged by the active `src/data/cast.ts` pipeline.** Its successful Build/Pages run therefore proves the repository still builds, not that Ghostt's new dossier is visible to readers. Do not count the module as a public reader integration until it is explicitly wired.

### Rosario17 / Yazaki

Rosario now clears a thin but useful person synthesis as **approval-first gallery spectator / warm validator**. Strongest join: `Nice idea 😀😂` true-replies to a Mugen screenshot filing, followed by `😂😂😂`; other surviving positive evaluatives include `Cool 😀.`, `Aww so sweet!!`, and a warm Rookie-directed reply whose parent body remains unresolved. This is WIKI-sized profile texture and a Petty-Crimes candidate, not enough breadth for a rich MAIN biography by itself.

### Woosung

Daycare adds **small-game enthusiasm / tiny-grievance narrator** texture. Snow says she might make a K-pop game `when I am bored out of my mind`; about eighty seconds later Woosung posts a crying anime GIF and asks `Are u bored yet`. The same lane includes `I only played among us like 14 times` → `never the imposter` and `I can fly in genshin`. MAIN already owns the broader hobby/tiny-news mechanism and already has the Among Us beat; K-pop/Snow and Genshin are useful structured-WIKI deepeners for the existing Woosung owner.

Hard identity rail preserved: current canonical Woo and Woosung owners remain distinct; no name-shape merge.

### SaraBunny

`so much moo` / `Mooo :Cat_Sporkle:` is corroboration of the existing recurring sound-bit characterization. No duplicate public copy. Sensitive onboarding age material remains excluded.

## Rabbit/source state

- Illien/Pride `we've lost Pride's body` is now **WALL-TEXT-EXHAUSTED / SIBLING-CC-NOT-SURFACED**. `every time ... on cc` plus Pride's `I still laugh about that day` supports a repeated `cc` phrase tied to a remembered incident/day, not an origin date/source.
- Ghostt `actual definition of trolling` / `Bullying Mugen` remain media-context blocked.
- The 279-hour word-chain bot remains unresolved/source-gated.
- DyingFox remains underwritten beyond already-known food/reaction material.

## Publication / verification

Reader-facing WIKI files changed by Run 629 itself: **0**.

Concurrent commit `b2ff3a2bec7f186eb54f44eb97616eb14817e319` (`Add Ghostt Wall character dossier`) passed:

- `Build Underlords Wiki` workflow **34182768725** — success.
- `Deploy Underlords Wiki Preview` / Pages workflow **34182768701** — success.

However, because the new Run-629 Ghostt module is not wired into `cast.ts`, those successful workflows do **not** establish visible Ghostt reader publication. Run 629 therefore does not claim a new live Cast dossier from that commit.

No additional Astro/Pages run was triggered for reader-neutral report/state bookkeeping.

## Controls

Hard canon and resolved identity corrections remain controlling. No identity-by-name guessing, no appointment chronology from export/current role arrays, no joke family/romance inflation, no earliest-surviving=origin claim, and no POSTED BY → MADE BY/CAPTURED BY/FEATURING promotion. Uninspected media remains attribution-limited. Sensitive material stays backstage.

Recent report: `INTEGRATION_REPORT_RUN_629.md`.
