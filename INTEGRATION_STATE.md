# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 — Run 489 census-only close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed public reconciliation remains in `INTEGRATION_REPORT_RUN_*.md`; Run 488 is the latest substantive reconciliation report. Earlier state detail remains preserved in Git history and matching per-run reports rather than being duplicated indefinitely in this operational file.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** this run.
- **0 unread pending review** at close.
- **10 older MAIN publication-held families** remain separate from review state.
- **0 backlog / 0 overdue**.
- Club-Only recovery lane `archive-miner/club-only-2021-2026-hourly` is current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 recovery lane `archive-miner-clubonly-2020-hourly` is current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Run 489 result

The mandatory full branch census was repeated against all active `archive-miner/*` and `archive-miner-*` refs plus the explicitly recorded historical identities. Every one of the 30 active miner heads exactly matched the Run 488 `last_seen_sha` / `last_consumed_sha` frontier, including the two Club-Only recovery lanes.

There was therefore **no branch-local intake delta to reopen**, no anti-starvation candidate waiting behind another branch, no new conflict/rabbit, and no honest reader mutation to make on either surface. The ten older MAIN publication-held families remain publication debt only; they do not convert reviewed evidence back into unread miner work.

A closing spot-check found the same 30 active heads unchanged after the census state write.

## Current reviewed frontiers

- Core Rooms / Events: `92036d71ef5c378853bb55b219f5ee0a6663b5d0` — reviewed/consumed; Hic/Ricochet cumulative person texture banked.
- Wall: `9459bbd2fe5c3338c7bf89819924034285845551` — reviewed/consumed; Eos/sippp/first-Fame tail reconciled.
- Louvre: `1aa31ba46f57b4482d0eff8f6c095f4730e7ab36` — reviewed/consumed; Jas suffix meaning-deduped.
- Mugen person-first: `0d5da7259e9074af227eae5b28cd7c441b11b455` — reviewed/consumed; public-equivalent synthesis only.
- QOTD / Officers: `52c663a41b0fd0f9b6b750a7caf2badcb65706df` — reviewed/consumed; Lilly support packet already substantially public.

## Latest reader publication — Run 485

### Daya — WIKI reader change

`src/data/character-biographies-daya.ts` was resynthesized in place at reader commit **`2dd7386f15864701b378bc3ecc2d2994a08e398f`**.

The biography centers Daya's lived contradiction instead of archive bookkeeping: **real procedure gets simplified; fake procedure gets a department.**

Verification for exact reader head `2dd7386f15864701b378bc3ecc2d2994a08e398f`:
- Build Underlords Wiki workflow **`34002213376`** — **success**.
- Deploy Underlords Wiki Preview workflow **`34002213359`** — **success**.
- GitHub Pages deploy job **`101403031836`**, step `Deploy to GitHub Pages` — **success**.

## Surface split

### WIKI
- Reader-facing changes in Run 489: **0**.
- This run is census/state only; no new `INTEGRATION_REPORT_RUN_489.md` was warranted because no intake delta was reviewed.
- No new Astro/Pages claim is made for the reader-neutral state close.
- Latest verified reader head remains `2dd7386f15864701b378bc3ecc2d2994a08e398f` from Run 485.

### MAIN
- Reader-facing changes in Run 489: **0**.
- The mandatory census was persisted in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; no public source file was changed.
- No fresh MAIN source-verification/Astro/built-output/Cloudflare claim is made because the reader tree did not change.
- The ten older accepted MAIN publication-held families remain publication debt, not unread miner work.

## Hard holds still in force

- Uninspected media: POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.
- Joke law, fake jail, fake family, theatrical possession, joking proposal/divorce/corpse language, and joking role language do not become literal governance/family/romance/harm/appointment canon.
- Export-time/current role arrays do not establish appointment chronology.
- Earliest surviving receipt does not establish origin unless separately supported.
- Resolved project identity corrections override quarry-local uncertainty; similar names alone never create a bridge.
- Ricochet's missing 2020 VC line stays missing; probable Shk direction is not promoted to certainty.
- `sippp.gif` chronology does not identify creator/uploader or prove binary identity among exported assets.

Previous detailed public integration: `INTEGRATION_REPORT_RUN_488.md` and earlier `INTEGRATION_REPORT_RUN_*.md` files.
