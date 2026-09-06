# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 — Run 487 census-only close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed public reconciliation remains in `INTEGRATION_REPORT_RUN_*.md`; Run 485 is the latest substantive integration report. Earlier state detail remains preserved in Git history and matching per-run reports rather than being duplicated indefinitely in this operational file.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** this run.
- **0 unread pending review** at close.
- **10 older MAIN publication-held families** remain separate from review state.
- **0 backlog / 0 overdue**.
- Club-Only recovery lane `archive-miner/club-only-2021-2026-hourly` is current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 recovery lane `archive-miner-clubonly-2020-hourly` is current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Run 487 census-only result

No active miner branch advanced beyond the Run 486 consumed frontiers. The mandatory full branch census was persisted on MAIN at commit `cf786f7a26158f7f4f5bfe9b4a5aca1448b3742a`; there was therefore no intake delta to review, no new public lore to reconcile, and no reader-facing change on either surface.

No consumption cursor moved in Run 487 because every active branch was already reviewed through its current HEAD. The ten older MAIN publication-held families remain publication debt rather than unread miner work.

## Current reviewed frontiers

- Louvre: `1aa31ba46f57b4482d0eff8f6c095f4730e7ab36` — reviewed/consumed; Jas suffix meaning-deduped.
- Mugen person-first: `0d5da7259e9074af227eae5b28cd7c441b11b455` — reviewed/consumed; public-equivalent synthesis only.
- Wall: `8327c31120d9a7b231acc0e337b2240da24c032f` — reviewed/consumed after Daya WIKI publication verified.
- QOTD / Officers: `52c663a41b0fd0f9b6b750a7caf2badcb65706df` — reviewed/consumed; Lilly support packet already substantially public.

## Latest substantive public result — Run 485

### Daya — WIKI reader change

`src/data/character-biographies-daya.ts` was resynthesized in place at reader commit **`2dd7386f15864701b378bc3ecc2d2994a08e398f`**.

The biography now centers Daya's lived contradiction instead of archive bookkeeping: **real procedure gets simplified; fake procedure gets a department.** The August 2021 `wet enforcer` / bathwater `UL Law` scene and September `This calls for an investigation >:O` → `Mugen. Make this a priority.` scene sit beside her real-world-priority advice, onboarding handoffs, reciprocal Screenshot Court behavior, and habit of turning useful/funny things into the next useful/funny thing.

Safety is explicit backstage: the fake `UL Law` scene is joke procedure, not formal governance, exact membership chronology, an appointment route, or literal evidence about bathing.

Verification for exact reader head `2dd7386f15864701b378bc3ecc2d2994a08e398f`:
- Build Underlords Wiki workflow **`34002213376`** — **success**.
- Deploy Underlords Wiki Preview workflow **`34002213359`** — **success**.
- GitHub Pages deploy job **`101403031836`**, step `Deploy to GitHub Pages` — **success**.

### Meaning-deduped

- **Jas:** Sims/help/stuck-in-wall material reinforces an already-public objection → technicality/question → quick recovery/help-taking mechanism. No new section.
- **Mugen:** verification confusion, homework compression, systems wiring, gear/style and show-up-anyway behavior are already substantially public. No paragraph mitosis.
- **Rose / DarkAsrai:** fresh Wall defendant/prosecutor/rerun-desk lines are already owned by the current Rose dossier.
- **Lilly / ButteryButtz:** direct old-handle bridge, Aether/secretary self-description, Snow `with two L's`, and the October Wall social-welcome cluster are already substantially public on both surfaces. `secretary` is not converted into a UL office; `Role assigned` is not exact in-game admission; the Aether→UL transition date remains unresolved.

## Surface split

### WIKI
- Reader-facing changes in Run 487: **0**.
- No new Astro/Pages claim is made for the reader-neutral state-only close.
- Latest verified reader head remains `2dd7386f15864701b378bc3ecc2d2994a08e398f` from Run 485.

### MAIN
- Reader-facing changes in Run 487: **0**.
- The mandatory branch census is current in `archive-intake/INTEGRATOR_BRANCH_STATE.json` at `cf786f7a26158f7f4f5bfe9b4a5aca1448b3742a`.
- No fresh MAIN source-verification/Astro/built-output/Cloudflare claim is made because the reader tree did not change.
- The ten older accepted MAIN publication-held families remain publication debt, not unread miner work.

## Hard holds still in force

- Uninspected media: POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.
- Joke law, fake jail, fake family, theatrical possession, and joking role language do not become literal governance/family/romance/appointment canon.
- Export-time/current role arrays do not establish appointment chronology.
- Earliest surviving receipt does not establish origin unless separately supported.
- Resolved project identity corrections override quarry-local uncertainty; similar names alone never create a bridge.

Previous detailed public integration: `INTEGRATION_REPORT_RUN_485.md` and earlier `INTEGRATION_REPORT_RUN_*.md` files.