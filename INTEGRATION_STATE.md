# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 310 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary. Detailed reconciliation for this pass lives in `INTEGRATION_STATE_RUN_310.md`.

## Current reviewed boundary

The controlling census tracks **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue** after the late-Wall review. All Characters HR remains consumed through `534b770a4e00065b2c31f555d8674ce9fc42c515`.

Both Club-Only recovery priorities remain current:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall moved late in Run 310 from consumed `e0ebf6025c1f5a50474008632b2b10cd467540ba` to `aa47f67fab33e30460dd836d6375fb8f4c25650c`; MAIN's ledger registered the seen SHA before review, then reviewed the one-commit intake-only suffix checkpoint-first. Wall is now consumed through `aa47f67fab33e30460dd836d6375fb8f4c25650c` and remains `recovery_in_progress` only because future source may arrive.

## Run 310 — Crystalia is quiet; Mugen apparently cast him anyway

The late Wall suffix materially deepened **Crystalia**. His own surviving Wall output is microscopic, but Mugen posts media and then summons/casts him on consecutive February 2021 nights: first a plain `@Crystalia^-^`, then the next night the fake-show copy `Tune in weekly for The Adventures of Phok the Pool Boy featuring UL's very own mermaid @Crystalia^-^`.

MAIN folded that recurrence into Crystalia's existing person-first mermaid/ocean section. The useful contradiction is **tiny authored Wall presence / conspicuous peer-authored cameo presence**: quiet does not equal socially invisible, and Mugen can apparently draft him directly into the room's mythology without much setup.

**Reader-facing WIKI changes: none.** WIKI already has the structured `The Only Reason He Was Still Playing Raja` episode owning the broader Crystalia game→community/ocean/mermaid hinge. The recovered consecutive-night summon/cast rhythm is stronger as lived biography/relationship texture than as another Episode, Running Gag, or mirrored Cast paragraph. This pass is therefore intentionally MAIN-only at the reader layer.

The same Wall tail also closed two exact **Athena** reply joins around her manhwa complaint: Mugen's `XD rip` answers Athena, and Athena's `:6157_pat:` answers Mugen's redirect. That is useful structure but not a new public person mechanism; Athena's stronger manhwa-taste material is already owned.

A stale fallback sentence in `character-bios-extended.ts` still contains the superseded phrase `Rich / Ricochet / DragonRich`. Active Rich/Ricochet owners correctly keep them separate. The fallback line remains targeted cleanup debt rather than a reason to rewrite a large legacy file during this pass.

## Rails

`mermaid`, `ocean king`, and Pool Boy remain joke/reputation language, not literal identities, titles, occupations, or gender evidence. `weekly` does not establish a recurring series, and the fake-show title does not prove Crystalia is literally `Phok the Pool Boy`. The adjacent images were not visually inspected and remain POSTED BY Mugen only; no MADE BY / CAPTURED BY / visual FEATURING assignment is inferred. Repeated summoning supports recognizability and bounded relationship texture, not friendship rank, exclusivity, or Crystalia's enjoyment. Formal appointment chronology is not inferred from export-time roles; earliest surviving is not guaranteed origin; hard identity and privacy corrections remain controlling.

## Verification

MAIN reader commit `0b4ff5f283b718b427a6b1e9c479a85e7a277ed6` passed exact workflow **33761104953**: source canon/architecture verification, Astro build, built-output verification, Cloudflare production deployment, and exact production-commit verification all succeeded. MAIN's final Run-310 state/report head is checked again after the closing commits.

WIKI reader pages changed 0. This final rolling-state commit is checked through the repository's existing Build and Pages workflows on the exact final `main` head.

Detailed reconciliation: `INTEGRATION_STATE_RUN_310.md`.
