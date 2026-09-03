# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 309 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary. Detailed reconciliation for this pass lives in `INTEGRATION_STATE_RUN_309.md`.

## Current reviewed boundary

The controlling census tracks **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue**. All Characters HR was the only advanced/unconsumed active branch in this pass and was checkpoint-first/intake-only reviewed from `b269d21067a0fb76885eeb2c97df63da44798458` through `534b770a4e00065b2c31f555d8674ce9fc42c515`; MAIN's ledger now consumes the branch through that exact head.

Both Club-Only recovery priorities remain current:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` only because future source may arrive; current seen head `e0ebf6025c1f5a50474008632b2b10cd467540ba` is consumed.

## Run 309 — HR catches up; public pages stay human

Run 106 requalified Candy → Ricochet → BishopThaGuru → Clotho Fate → Dainyamite → Damon → Grim Raven → Jade. Ricochet, BishopThaGuru, and Dainyamite remain **IN PROGRESS** because their miner HR bodies were catching up to stronger person mechanisms already public. Candy, Clotho Fate, Damon, Grim Raven, and Jade are **EXHAUSTED AT CURRENT ARCHIVE BOUNDARY**. Comprehensive non-Mugen HR is **88 exhausted / 12 in progress / 0 blocked / 0 queued**; the global character quarry remains open.

**WIKI reader-facing changes: none.** Bishop's practical adaptation/tool-learning receipts, Dainy's opponent-perspective tactical curiosity, and Ricochet's low-theater screenshot help + peer celebration all deepen existing people without creating a new Episode, Running Gag, relationship object, or role progression worth publishing. MAIN already owns the richer person-first versions; WIKI does not mirror them for sport.

A stale fallback sentence in `character-bios-extended.ts` still contains the superseded phrase `Rich / Ricochet / DragonRich`. Active Rich/Ricochet owners correctly keep them separate. The fallback line remains targeted cleanup debt rather than a reason to rewrite a large legacy file during a no-reader-change pass.

## Rails

Ricochet / `dragonrichard` remains separate from Rich / DragonRich. Candy's later `— Luna` display remains separate from HyaLuna. Jade's `Joy` display stays on the same stable account while its human meaning remains unresolved. Damon naming himself Purgatory leader does not create UL membership, alliance, subordination, or a UL office. Bishop/Tofu affection and waltz language remain relationship texture, not romance canon. Ren/Dainy shorthand remains friendship/peer familiarity, not romance, exclusivity, or rank. Ricochet reacting to Onmia's promotion is peer celebration, not appointment authority. Screenshot-help dialogue does not create MADE BY / CAPTURED BY / FEATURING provenance. One Steelix bot failure does not become global technical incompetence.

## Verification

MAIN final Run-309 head `834ba7bb609f6648c41ae893337ccbedba73bfb3` passed exact workflow **33760273443**: source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment all succeeded.

The immediately preceding WIKI head `5f25e01dbb2c799f3e50cf9c51a30c76b54a8f71` was green on Build **33759695214** and Pages **33759694979**. This Run-309 rolling-state commit is checked again with both existing WIKI workflows after it lands.

Detailed reconciliation: `INTEGRATION_STATE_RUN_309.md`.
