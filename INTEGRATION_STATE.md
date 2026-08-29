# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 18:03 PDT**.

This is the rolling current integration state. Full pass detail is durable on MAIN in `archive-intake/INTEGRATION_PASS_2026-08-28_1803_DUAL.md`.

## Current pass — Wolfie remembers the exhibit before she remembers where the exhibit is

### Branch census / queue

- Mandatory opening census: **24 miner branches**, persisted on MAIN before deep review.
- No miner branch was newly discovered and no already-consumed discrete miner head advanced.
- Discrete queue: **0 pending / 0 backlog / 0 review-overdue**.
- Club-Only 2020 and Club-Only 2021–2026 remain consumed through unchanged heads and were not reread.
- Anti-starvation recovery rotated to `archive-miner/aug-2026-living-ensemble-hourly` at unchanged HEAD `66c3227c687965a4dae9b372fdcbe2dc128611ba`.
- Cumulative recovery remains open for Living Ensemble, Core Rooms, and Wall.

## Reviewed evidence — Living Ensemble Run11 / Run12

Run11 was reviewed checkpoint-first and intake-only. Rooks's screenshot-hunter scene (`rooks wouldnt miss this for the world` → `uwu cant hide from me`) is already owned richly on both public surfaces. Key/Woohyuk's 2021 vehicle-escalation screenshots are also already owned on MAIN. The genuinely useful missing character beat was the person doing the 2026 recovery: WolfPhenix remembers an old screenshot that would prove Mugen's `the bots call us deranged a lot`, admits `i forget where i put it :>>`, then returns seventeen minutes later as `i` → `found` → `iiit` before presenting the old Key/Woohyuk evidence as `UL BACK IN DE DAY`.

That sequence is now in WIKI's WolfPhenix dossier as dated character chronology. The useful movement is memory → hunt → recovery → verdict. It supports `screenshot archaeologist` as behavior rather than a label while preserving the attribution boundary: the surviving 2026 package is POSTED BY Mugen; Wolf visibly presents the older screenshots; original 2021 CAPTURED BY remains unresolved.

Run12 was also reviewed. `Family reunion` is a clean archive-native name for the August 14 reunion scene, but WIKI already owns a 2026 `Family Reunion` episode and Season Seven already uses `family reunion / website arc`, so another episode object would be duplicate. Rooks's first-person `I wasnt an officer just a regular :Fat_Wheeze:` corroborates existing canon rather than changing it. Mugen's reunion recollection that Sye and Nelph became Officers together in 2021 conflicts with Sye's immediate `I was t here in 2021`; that remains a memory contradiction, not appointment chronology. The site-being-shown-to-the-cast scene is already represented by WIKI's `The Cast QA's Its Own Wiki` episode and does not need a second meta object.

## Public-surface decision

- **MAIN:** `src/content/people/wolfphenix.md` owns the full seventeen-minute scene: Wolf remembers the receipt, loses the filing system, comes back triumphantly, and uses the artifact as proof of what old UL was like.
- **WIKI:** `src/data/dossier-snapshots/wolfphenix.md` owns the compact dated chronology and explicit provenance boundary.
- This is intentionally complementary rather than mirrored copy: MAIN gets the character movie; WIKI gets the searchable dossier beat.

## Concurrent public work preserved

While this pass was running, MAIN also advanced through separate safe concurrent commits adding Snow's `best material in vc` / naked-bush retelling and Eos's 2021 `dead corpse` prehistory. Those commits were preserved as parents of later MAIN work rather than overwritten. They clearly draw from later Living Ensemble recovery material, but this pass does **not** claim that the entire Run13–16 handoff set was reviewed merely because selected public keepers landed concurrently.

## Held / unresolved

- Rooks's March 2021 attachments remain visually uninspected; POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.
- Key/Woohyuk's exact original 2021 day/channel and original screenshot CAPTURED BY remain unresolved.
- The Run12 Sye/Nelph promotion recollection is not safe appointment chronology.
- The exact image Mugen showed while saying she was building a website was not re-promoted visually without a safe binary inspection.
- Living Runs13–16 and other older safe-baseline gaps remain for deliberate recovery closure even though some Run13/15/16 keepers have already landed via concurrent public work.

## Recovery / consumption state

- Living Ensemble: recovery now explicitly reviewed through Runs02–12 plus Run17 and Runs22–26 and aggregate safe-baseline handoffs; `last_consumed_sha` remains null because Runs13–16 and other older gaps are not yet fully closed.
- Core Rooms: recovery open; consumed SHA null.
- Wall: recovery open; consumed SHA null.
- Daycare: consumed through `0247cee810368486dbef7a4cffc74859068991c0`.
- Whiskey: consumed through `a8a6cfaeaa3f21c35ca8cfaff5b14a8d8d4f63ed`.
- Club-Only 2020: consumed through current head.
- Club-Only 2021–2026: consumed through current head.

## Verification / deployment

- MAIN public-content commit `a4eda1c64c5b1d126a402f28b97e576cd819fa37`, which also preserves the immediately preceding concurrent Snow commit, completed the repository's full `Build + verify` → production deploy workflow successfully: source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare deployment all cleared.
- WIKI public-content commit `ed7f01984d5bba690932acd213ac0615ee545151` completed standalone Astro build successfully and the Pages build/deploy workflow successfully.
- Durable state commits are followed by the same repository-native workflows; the final publishing-head results are checked after those commits land.

## Current cross-surface continuity locks

- MAIN and WIKI are complementary public surfaces, not independent canon systems.
- User-confirmed canon and direct stable-ID bridges outrank name resemblance and miner-local uncertainty.
- Export-time roles are not appointment chronology; joke roles/property/ships/family language are not formal authority or literal relationships.
- Earliest surviving is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain distinct.
- Uninspected images remain uninspected; captions/replies/reactions do not license invented contents.
- Miner branches remain isolated evidence workspaces and are never wholesale-merged into publishing branches.
