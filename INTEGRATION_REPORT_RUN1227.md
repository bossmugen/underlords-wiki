# UL Wiki Integration Report — Run 1227 Close

## What changed

The mandatory full miner census closes at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered refs, 0 unread active tails, 0 backlog, and 0 overdue branches**. Both Club-Only recovery-priority lanes remain current.

Three intake deltas were reviewed checkpoint-first and intake-only:

- Core Rooms / Events `bcb6fe9f1a2717a25ad49c001745326bbc12c1ae -> 1c1598699b5d4ce091e592ce8da67e4946bce0da`
- Daycare `a7e82c67705faaa3e9c8d406635c07f942106796 -> 1778258f535e11f173364b57a341b27670e5a6bf`
- Wall `d14f99ec4be8b67ff28e226f31ced7559de09572 -> 61ebe10df849b74c4f49fc42b2c8dc3b88d04ae6`

## Public result

Reader-facing WIKI files changed:

- `src/data/integrator-cast-run1195-wall-ghostt.ts`
- `src/data/integrator-cast-run704-intake.ts`

### Ghostt

The existing Ghostt owner now carries a Photo Submissions communication contradiction rather than another receipt paragraph. Ghostt's 2021-10-05 post is attachment-only and the 2021-10-19 post is an image plus only `:worryShrug1::worryShrug2:`, while independent samples place the same account repeatedly in other members' reaction bars. The structured read is **under-captioned self-presentation / expressive audience participation**: low prose about Ghostt's own media is not low room presence.

The images remain visually uninspected and POSTED BY Ghostt only. Sparse captions do not become shyness/anxiety/modesty, and reaction-user membership does not become authorship, endorsement, CAPTURED BY, MADE BY, FEATURING, or a closeness rank.

### Chibiterasu

The existing Chibiterasu owner now carries a bounded 2022 -> 2024 Lobby return/name-drift chronology. Stable Discord account `559670680287969281` self-reports `chibiterasu`, `Underlords`, age 22 on 2022-03-09, then appears in the Lobby onboarding flow again 796 days later on 2024-05-13 as `Chuu~tan, Underlords and I'm 25`.

This is stable-account continuity plus changed self-reported in-game naming across two onboarding moments. It does not establish leaving/rejoining UL, expulsion/re-admission, a 796-day absence, continuous use of either IGN, or appointment chronology. ƐℲı˥'s later `chu chu` remains contextual adjacency rather than a stored reply/reference/mention, and ƐℲı˥'s role-routing behavior was not inherited by Chibiterasu.

### Wall dedupe

Miihi's low-volume receipt-shaped profile packet and Tofu's enthusiastic-filer / theatrical-target / immediate-repeat-offender packet were already owned by current WIKI dossiers. No duplicate owners or standalone Episodes were created. The guild-icon proposal and q9 media/provenance remain unresolved backstage.

## Verification and deploy

Exact verified/deployed WIKI reader: **`dc895eecb3b2712d8e605717a4d5e4a37e4923c3`**.

- Build Underlords Wiki run **35160760808** — success; build job **105010721216** — success.
- Deploy Underlords Wiki Preview / Pages run **35160760868** — success.
  - build/artifact job **105010721571** — success;
  - deploy job **105010869341** — success;
  - report/status job **105011058134** — success.

## MAIN routing

Chibiterasu's two-onboarding chronology is intentionally WIKI-only at current depth; it belongs in structured person chronology and is not enough by itself for a rich MAIN biography.

Ghostt's Photo Submissions material was strong enough for a richer MAIN person-first fold, but MAIN's exact-commit production verifier/deployer failed twice before allocating a runner (`runner_id: 0`, `steps: []`). MAIN therefore fast-forward reverted that unverified reader attempt instead of claiming a build/deploy success that never occurred. The Ghostt MAIN fold remains publication-held.

WIKI was not rolled back merely because MAIN infrastructure failed before verification could begin; the two public surfaces remain independently safe.

## Durable state

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling miner-consumption ledger. The closing census advances Core through `1c1598699b5d4ce091e592ce8da67e4946bce0da`, Daycare through `1778258f535e11f173364b57a341b27670e5a6bf`, and Wall through `61ebe10df849b74c4f49fc42b2c8dc3b88d04ae6`.

All 30 active miner refs are reviewed through their closing HEADs. Eight families are now `pending_publication`: the prior seven MAIN resynthesis/publication families plus Daycare's held MAIN Ghostt fold. That is publication debt, not unread miner intake.