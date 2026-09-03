# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 20:18 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Closing reconciliation holds **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue** at the reviewed boundary.

Reviewed checkpoint-first / intake-only through:

- `archive-miner-wall-hourly-20260824` → `9f44d6ef025c3eaa8ac4befa646d1c4fd5b507ba`
- `archive-miner/all-characters-hr-20260828` → `7271d354de17d7ad304e8592dc70faf7eae3b578`
- `archive-miner/whiskey-longitudinal-hourly` → `b41d5d29a5bd39f459fc656a40457f4ceb5ef406`
- `archive-miner/core-rooms-events-a91f-20260824` → `fa8948850f1ab351b2b48e89ace53af373b10e92`
- `archive-miner/mugen-person-first-20260828` → `2b2c6207f551c78df659aec13892d80605d5fdf7`

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall stays a recovery quarry only because more Wall material may arrive; its current reviewed suffix is consumed.

## Latest reader reconciliation

### Ghostt Keeps the Bit Alive

WIKI now indexes Ghostt's recurring Wall habit as a Running Gag rather than cloning MAIN's biography prose.

The recurrence is simple: when a joke is already moving, Ghostt often chooses continuation over correction. `porpcorn` gets protected instead of fixed. Mugen's `:Cursed:` gets `Bless your heart :hAhA:` and Cursed reactions back. `Poor ghoulie she lives on the wall lmao` is followed eighteen seconds later by Mugen asking where the rent is. When the screenshot machinery turns toward Ghostt herself, `She set me up for it 😂` becomes another beat instead of an exit from the joke.

Reader commit: `f23847ab1dbc58af1c53af5b10fc1ef648da2eaf`.

### MAIN stays person-first

MAIN owns the richer character synthesis in `src/content/people/ghostt.md`: the same receipts become one behavior pattern about preserving the funny version, including the role reversal when Ghostt becomes the exhibit herself.

WolfPhenix's direct Wall footprint / `purple = wolfie` shorthand was already represented correctly on MAIN and did not receive duplicate copy here.

## No-change review that still consumed

**All Characters HR Run 96:** Hishiro, GenGrey, Nhou, Alkey, Zepp, Ten and Ghostt were requalified to archive-boundary exhaustion/reopen-condition status. No materially new person mechanism survived novelty checking beyond already-reader-facing synthesis. The HR quarry reports **24 exhausted / 76 still in progress** and explicitly does not claim global character completion.

## Hard rails / dedupe

- February 2021 Ghostt attachment: Gilli is **POSTED BY** only. Pixels remain uninspected; MADE BY / CAPTURED BY / FEATURING unresolved.
- July 2022 screenshots: Ghostt is **POSTED BY** only; `she` in `She set me up for it 😂` remains unresolved.
- Ghoulie/rent is strong contextual co-riff, not a stored reply chain, literal tenancy, or exclusive origin proof.
- Ghostt's current Staff status does not establish appointment chronology.
- All Characters HR exhaustion means current-source saturation, not biographical completeness.
- Joke family, affection, flirt language, and mock-court language remain joke/social language unless stronger support exists.

## Verification / deployment

WIKI reader head `f23847ab1dbc58af1c53af5b10fc1ef648da2eaf` passed Build Underlords Wiki `33710551685` and Deploy Underlords Wiki Preview / Pages `33710551697`, including actual GitHub Pages deployment.

MAIN reader head `e05a205f57415e27426cc6b9bebc61388eadc891` passed UL Hourly Build + Deploy `33710536581`: source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment all succeeded.

Controlling MAIN consumption state advances Wall through `9f44d6ef025c3eaa8ac4befa646d1c4fd5b507ba` and All Characters HR through `7271d354de17d7ad304e8592dc70faf7eae3b578`.

Detailed reconciliation: `INTEGRATION_STATE_RUN_277_GHOSTT_WALL.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_277_GHOSTT_WALL.md`.
