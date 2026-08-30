# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-30 09:16 PDT_

## Current reconciliation boundary

The wiki remains the long-form reference companion to `bossmugen/underlords`, not a competing lore system. Current integration follows the project-wide lower evidence threshold: hard canon/identity/privacy/attribution boundaries stay hard; strong contextual human reads are publishable when the surrounding evidence earns them.

### Miner census shared with MAIN

- **49 tracked miner identities** = **28 active remote refs + 21 historical/missing refs**.
- **0 finite pending-review**, **0 backlog**, **0 review-overdue**.
- Both Club-Only miners and Core Rooms are consumed/current.
- Wall is the sole cumulative historical recovery floor.
- Whiskey is reviewed through its live head but remains publication-blocked on MAIN rather than unread.
- Miner branches are evidence workspaces only; none were merged or wholesale cherry-picked into either public branch.

## This pass

### Wall forward delta — reviewed through `b9f3211d0a2792e82ed6ad2d0639233270e88a4a`

The 08:36 Wall package was reviewed checkpoint-first and intake-only. Its strongest owner is now the 2021 Episode **Ghoulie & Panda's House of Shame**.

On July 7, 2021, Ren announces Ghoulie's return as reclaiming the Wall. Baby Lyssa/Ghoulie and Marian/Panda promptly turn the room into live evidence generation: Eos files Marian, considers whether to send more, and jokes that one receipt might get them `divorced`; Tofu files another receipt; Ghoulie says she is `no longer safe` and then declares `this is my house y’all just livin in it`; Marian answers the fake-domestic premise with dishes/kitchen/food talk; Mugen points out that if they simply keep talking in the Wall nobody even needs screenshots anymore; Snow mock-renames the room **Ghoulie & Panda's house of shame** and suggests they may need their own subchannel because the material is apparently self-producing.

The useful read is the mechanism, not fake literal domestic canon: the Wall briefly stops being a place where somebody brings evidence from elsewhere and becomes a room where the defendants manufacture admissible material in real time. Eos's restraint is also part of the scene—she visibly has more receipts and chooses whether to spend them.

Hard boundaries remain: no literal cohabitation, divorce, marriage, or household inference; Ren/Eos/Tofu images remain visually uninspected; POSTED BY is not MADE BY/CAPTURED BY/FEATURING. Baby Lyssa's immediate reaction makes her probable target/subject of Tofu's receipt without authorizing pixel description.

The same package resolves the parent of Gilli's `B.O.B CRIIIIMME`: it is a true reply to Daya's December 13, 2022 Dragon Raja height screenshot and `why am i ... Gilli's height`. The acronym expansion itself remains unresolved. Keon's five authored Wall messages remain too thin for forced characterization.

Historical Wall safe-baseline recovery remains through the bounded **2026-08-26 03:46** package. **04:46 is next**, but the exact bounded handoff is not yet safely resolved; no raw archive was re-mined to manufacture one.

### Whiskey / Sye correction

The Whiskey live delta through `becfa8f3bc1a244597107a52a3272690a39242d6` remains fully reviewed. Its miner labels account `488099199938986004` / `sycessences` / `ƐℲı˥` as Effie, but hard project identity canon resolves that account to **Sye/Life**. The accepted ordinary-life material therefore belongs to Sye: pizza follow-through to ShiyaX, repeated boba plus terminology fussiness, folk-metal taste, accidental eye-doctor flirting versus ambient room flirting, individually named morning greetings, `come meet your neighbors`, pandemic-era gym avoidance over poor distancing, and probable validation of Gilli's workplace nonsense. No nationality/ethnicity, orientation, relationship status, medical vulnerability, or exact location is inferred.

This material remains queued for MAIN's Sye biography because MAIN owns the canonical public character story. The wiki already has a substantial Sye life-story and does not need a mirror dump merely because MAIN's runner is sick.

## Public ownership / dedup

- **WIKI only this pass:** `Ghoulie & Panda's House of Shame` — bounded Episode / 2021-season lookup owner.
- **MAIN intentionally unchanged reader-side:** no duplicate Ghoulie/Panda incident; Sye ordinary-life enrichment remains queued for MAIN once its required verification can actually execute.
- Eos selective-filer texture is integrated inside the Ghoulie/Panda Episode rather than split into a second page.
- `B.O.B CRIIIIMME` remains a resolved-parent / unresolved-acronym note, not a fabricated Running Gag definition.

## Verification / deployment

The reader-facing Ghoulie/Panda close reached exact WIKI head `cc9f14ec7e096b41e3f7c40aacb338dd684c2ee9` before this state update.

- **Build Underlords Wiki** run `33320910846` — **success**.
- **Deploy Underlords Wiki Preview** run `33320910844` — **success**.

This state-only commit must also pass the repository's normal build + Pages workflow; record its exact-head result in the next close if the run is still in flight at handoff time.

## MAIN dependency / hold

MAIN verification remains infrastructure-blocked. `UL Hourly Build + Deploy` run `33321303376` failed before executable steps appeared; attempt 2 failed the same way and deployment was skipped. Because source verification, Astro build, and built-output verification never actually ran, Whiskey's `last_consumed_sha` intentionally remains at `6cd5f9daeb20d77fad20e3cd7465ec938411993d` and the Sye reader edit is not being shoved through a dead gate.
