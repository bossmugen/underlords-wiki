# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 308 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary. Detailed reconciliation for the current pass lives in `INTEGRATION_STATE_RUN_308.md`.

## Current reviewed boundary

The controlling census tracks **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending publication, 0 backlog, and 0 overdue**. All Characters HR was the only genuinely unconsumed branch in the reviewed pass and was checkpoint-first/intake-only reviewed from `b269d21067a0fb76885eeb2c97df63da44798458` through stable Run-106 head `534b770a4e00065b2c31f555d8674ce9fc42c515`. The reviewed delta supports advancing that branch's consumed boundary through the same SHA.

Both Club-Only recovery priorities remain current:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` only because future source may arrive; its current seen head is consumed.

## Run 308 — HR catches up; readers do not grow extra limbs

Run 106 requalified Candy → Ricochet → BishopThaGuru → Clotho Fate → Dainyamite → Damon → Grim Raven → Jade. Ricochet, BishopThaGuru, and Dainyamite remain **IN PROGRESS** because their HR bodies were catching up to person mechanisms already represented publicly. Candy, Clotho Fate, Damon, Grim Raven, and Jade move to **EXHAUSTED AT CURRENT ARCHIVE BOUNDARY**. Comprehensive non-Mugen HR is now **88 exhausted / 12 in progress / 0 blocked / 0 queued**; the global character quarry remains open.

**WIKI reader-facing changes: none.** Ricochet is already separated from Rich / DragonRich and already has ordinary-life portability, return/familiarity, and teasing-care texture in the active WIKI cast/dossier layers. Dainyamite is already a distinct cast entity with the low-volume preference/social-recognition spine. BishopThaGuru's repaired HR catches up to an already-public MAIN role-rotation read; it does not need a fake standalone WIKI Episode just to mirror biography prose.

A stale fallback sentence in `character-bios-extended.ts` still contains the superseded phrase `Rich / Ricochet / DragonRich`. It is not the active Rich narrative or active deep-VIP canon owner, both of which keep Ricochet separate. That sentence is logged as cleanup debt rather than rewritten through a large legacy fallback file during a no-reader-change pass.

## Rails

Ricochet / `dragonrichard` remains separate from Rich / DragonRich. Candy's later `— Luna` display remains separate from HyaLuna. Jade's `Joy` display remains the same stable account while the meaning of the display stays unresolved. Damon naming himself Purgatory leader does not create UL membership, alliance, subordination, or a UL office. Bishop/Tofu affection and waltz language remain relationship texture, not romance canon. Ren/Dainy shorthand remains friendship/peer familiarity, not romance, exclusivity, or rank. Candy's Winter visual post establishes participation only until direct asset inspection; provenance roles stay distinct. One Ricochet Steelix failure does not become global technical incompetence.

## Verification

MAIN reconciliation report commit `c5c43034fa2b69681cd05aa66d15617824dc4ae5` passed exact workflow **33759339822**, including source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment.

WIKI reader pages did not change. The final WIKI Run-308 state head is verified with the repository's existing Build and Pages workflows after this rolling-state commit lands.

Detailed reconciliation: `INTEGRATION_STATE_RUN_308.md`.
