# UNDERLORDS WIKI — Integration State Run 310

## Census / current boundary

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**. No new miner identity.

The pass initially opened clean because Run 309 had already consumed All Characters HR through `534b770a4e00065b2c31f555d8674ce9fc42c515`. A later branch recheck caught `archive-miner-wall-hourly-20260824` moving from consumed `e0ebf6025c1f5a50474008632b2b10cd467540ba` to `aa47f67fab33e30460dd836d6375fb8f4c25650c`. MAIN's controlling ledger registered that seen SHA before review, then the one-commit suffix was read checkpoint-first and intake-only.

Both Club-Only recovery priorities remain current through head:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall is now reviewed and consumed through `aa47f67fab33e30460dd836d6375fb8f4c25650c`. It remains `recovery_in_progress` only because future Wall source can arrive. Finite queue after review: **0 pending review / 0 pending publication / 0 backlog / 0 overdue**.

## Reconciled Wall tail

### Crystalia

The late Wall tail adds a repeated relationship/person mechanism rather than a new standalone event: Crystalia's own surviving Wall voice is tiny, but Mugen posts media and then summons/casts him on consecutive February 2021 nights. On February 20 she calls `@Crystalia^-^` less than a minute after her image post; the next night she upgrades the same no-explanation rhythm to `Tune in weekly for The Adventures of Phok the Pool Boy featuring UL's very own mermaid @Crystalia^-^` after another image post.

MAIN's existing Crystalia biography already owns the stronger game→community/ocean arc, so this recurrence was folded there as lived contradiction: **microscopic authored Wall presence / conspicuous peer-authored cameo presence**. Quiet does not equal socially invisible; Mugen can apparently draft him straight into the room's mythology without setup.

### Athena

Two exact Wall reply joins around Athena's manhwa complaint are now closed: Mugen's `XD rip` answers Athena, and Athena's `:6157_pat:` answers Mugen's redirect. This remains bounded low-friction interaction texture. Athena's stronger manhwa-taste story is already owned publicly, so no new WIKI relationship object or Episode was created.

## MAIN vs WIKI routing

**MAIN reader-facing mutation:** Crystalia biography only. Reader commit `0b4ff5f283b718b427a6b1e9c479a85e7a277ed6` folds the consecutive-night Mugen→Crystalia summon/cast rhythm into the existing mermaid/ocean section rather than appending receipt-shaped incident prose.

**WIKI reader-facing mutation: none.** WIKI already has the structured episode `The Only Reason He Was Still Playing Raja`, which owns the broader Crystalia game→community/ocean/mermaid hinge. The newly recovered repeat-casting rhythm improves biography/relationship texture on MAIN but does not justify a second Episode, Running Gag, or mirrored Cast paragraph here. This pass is intentionally MAIN-only at the reader layer.

## Rails / duplicates

- `mermaid`, `ocean king`, and Pool Boy remain house-joke/reputation language, not literal identities, titles, occupations, or gender evidence.
- The fake `weekly` show copy does not prove a recurring series.
- The fake-show title does not prove Crystalia is literally `Phok the Pool Boy`.
- The adjacent images were not visually inspected. They remain POSTED BY Mugen only; no MADE BY / CAPTURED BY / visual FEATURING claim is inferred from timing.
- Repeated Mugen summoning supports recognizability and bounded interaction texture, not friendship rank, exclusivity, or Crystalia's enjoyment/consent.
- Athena's exact reply joins close structure only; they do not create a relationship rank.
- Existing hard identity, role-chronology, privacy, earliest-surviving, and attribution rails remain binding.

## Consumption

MAIN advanced Wall `last_consumed_sha` to `aa47f67fab33e30460dd836d6375fb8f4c25650c` only after the accepted Crystalia reader mutation passed the complete MAIN verification/deployment workflow. The Athena no-reader-change reason is durably recorded with the same consumed suffix so it is not reread next run.

## Verification

MAIN Crystalia reader commit `0b4ff5f283b718b427a6b1e9c479a85e7a277ed6` passed exact workflow **33761104953**: source canon/architecture verification, Astro build, built-output verification, Cloudflare production deployment, and exact production-commit verification all succeeded.

Run 310's final MAIN state/report head is checked again through the same repository workflow after the closing commits.

WIKI reader pages changed 0. This final Run-310 state close must independently pass WIKI's existing Build and Pages workflows on the exact final `main` head.