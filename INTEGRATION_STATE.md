# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 18:03 PDT**.

This is the rolling current integration state. Full pass detail is durable on MAIN in `archive-intake/INTEGRATION_PASS_2026-08-28_1803_DUAL.md`.

## Current pass — Wolf finds the exhibit; Snow dodges the Wall; Eos clocks in dead

### Branch census / queue

- Mandatory opening census: **24 miner branches**, persisted on MAIN before deep review.
- Closing census: **24 miner branches** again; no miner branch was newly discovered and no already-consumed discrete miner head advanced during the run.
- Discrete queue: **0 pending / 0 backlog / 0 review-overdue**.
- Club-Only 2020 and Club-Only 2021–2026 remain consumed through unchanged heads and were not reread.
- Anti-starvation recovery rotated to `archive-miner/aug-2026-living-ensemble-hourly` at unchanged HEAD `66c3227c687965a4dae9b372fdcbe2dc128611ba`.
- Cumulative recovery remains open for Living Ensemble, Core Rooms, and Wall.

## Reviewed evidence — Living Ensemble Run11 / Run12

Run11 was reviewed checkpoint-first and intake-only. Rooks's screenshot-hunter scene (`rooks wouldnt miss this for the world` → `uwu cant hide from me`) is already owned richly on both public surfaces. Key/Woohyuk's 2021 vehicle-escalation screenshots are also already owned on MAIN. The genuinely useful missing character beat was the person doing the 2026 recovery: WolfPhenix remembers an old screenshot that would prove Mugen's `the bots call us deranged a lot`, admits `i forget where i put it :>>`, then returns seventeen minutes later as `i` → `found` → `iiit` before presenting the old Key/Woohyuk evidence as `UL BACK IN DE DAY`.

That sequence is now in WIKI's WolfPhenix dossier as dated character chronology. The useful movement is memory → hunt → recovery → verdict. It supports `screenshot archaeologist` as behavior rather than a label while preserving the attribution boundary: the surviving 2026 package is POSTED BY Mugen; Wolf visibly presents the older screenshots; original 2021 CAPTURED BY remains unresolved.

Run12 was also reviewed. `Family reunion` is a clean archive-native name for the August 14 reunion scene, but WIKI already owns a 2026 `Family Reunion` episode and Season Seven already uses `family reunion / website arc`, so another episode object would be duplicate. Rooks's first-person `I wasnt an officer just a regular :Fat_Wheeze:` corroborates existing canon rather than changing it. Mugen's reunion recollection that Sye and Nelph became Officers together in 2021 conflicts with Sye's immediate `I was t here in 2021`; that remains a memory contradiction, not appointment chronology. The site-being-shown-to-the-cast scene is already represented by WIKI's `The Cast QA's Its Own Wiki` episode and does not need a second meta object.

## Reviewed evidence — Living Ensemble Run15 / Run16

Run15 was deliberately closed checkpoint-first after the concurrent public commit landed. On November 4, 2020 ShiyaX tells Snow that if he would literally type, she could screenshot him onto the Wall. Snow answers `That is why i leave my best material in vc 😛`; Anthos immediately replies `all u do in vc is monch`; Zoshaa adds that Snow still got on her case for eating `ONE(1) FREEZIE`. WIKI now owns this as the discrete episode **Snow Keeps the Best Material in VC**. The line is a joke about evidence exposure and medium choice, not a formal privacy policy or proof that VC could not be recorded.

Five minutes earlier in the same Wall throwback burst, Gilli remembers `when Ana left Snow in the bushes naked`; Pride/neffiegames says `i have picture`; Zoshaa later calls the remembered era `raining nude bush hours`. Separate stable-account context safely bridges `Ana` to Anayss. WIKI now owns the retelling as **Raining Nude Bush Hours**, with the actual old incident still unresolved: why Snow was naked, why bushes, what `raining` or `emo` modify, and the referenced picture's provenance are all still missing. A 2022 Snow bushes GIF was checked and rejected as a trustworthy callback because its local context is only `I Blame DR`.

Run16 supplied the older half of the reunion corpse language. On May 2, 2021 Eos says `so tired that i am a dead corpse`; Mugen replies directly with a Tenor titled `cheers-to-our-pretty-corpses`; Eos later returns as `this ded corpse always around for the taking`. WIKI now owns the longitudinal **Corpses / Reanimation** Running Gag, connecting that bounded 2021 singular→plural→repeat scene to WolfPhenix's 2026 `de corpses are aliiive` and Rummy's `Reanimate the whole server fr`. May 2, 2021 is earliest surviving relevant evidence currently recovered, not origin, and no uninterrupted 2022–2025 bridge is claimed.

## Public-surface decision

- **MAIN Wolf:** `src/content/people/wolfphenix.md` owns the full seventeen-minute recovery scene.
- **WIKI Wolf:** `src/data/dossier-snapshots/wolfphenix.md` owns the compact dated memory → hunt → recovery → verdict chronology.
- **MAIN Snow:** `src/content/people/snow.md` owns the rich VC-evidence scene and the naked-bush retelling as character texture.
- **WIKI Snow:** `src/data/integrator-episodes.ts` owns the two discrete incident objects instead of mirroring MAIN's prose.
- **MAIN Eos:** `src/content/people/eos.md` owns the person-level 2021 corpse scene.
- **WIKI corpse genealogy:** `src/data/integrator-gags.ts` owns the 2021→2026 running-gag line.
- MAIN's existing `/lore/corpses-reanimation` route remains folded into the canonical `This Is Your House` story, so this pass did not create a rival MAIN lore essay merely because WIKI benefits from a dedicated Running Gag object.

## Held / unresolved

- Rooks's March 2021 attachments remain visually uninspected; POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.
- Key/Woohyuk's exact original 2021 day/channel and original screenshot CAPTURED BY remain unresolved.
- The Run12 Sye/Nelph promotion recollection is not safe appointment chronology.
- The exact image Mugen showed while saying she was building a website was not re-promoted visually without a safe binary inspection.
- Snow's original freezie incident remains missing; the 2020 Wall scene proves the callback, not the original mechanics.
- The original Anayss/Snow naked-bush incident and Pride's referenced picture remain missing; November 4 is a retelling, not origin.
- The 2022 Snow bushes GIF is a negative callback check, not continuity.
- Corpse/reanimation has no trustworthy 2022–2025 bridge yet.
- Living Run13–14, Runs18–21, and other older safe-baseline gaps remain for deliberate recovery closure.

## Recovery / consumption state

- Living Ensemble: recovery now explicitly covers Runs02–12, Runs15–17, and Runs22–26 plus aggregate safe-baseline handoffs; `last_consumed_sha` remains null because Run13–14, Runs18–21, and other older gaps are not yet fully closed.
- Core Rooms: recovery open; consumed SHA null.
- Wall: recovery open; consumed SHA null.
- Daycare: consumed through `0247cee810368486dbef7a4cffc74859068991c0`.
- Whiskey: consumed through `a8a6cfaeaa3f21c35ca8cfaff5b14a8d8d4f63ed`.
- Club-Only 2020: consumed through current head.
- Club-Only 2021–2026: consumed through current head.

## Verification / deployment

- MAIN reconciled publishing head `56bfe06865e7065acfe335135184f31015094af5` successfully completed the repository's full source verification → Astro build → built-output verification → exact Cloudflare production deployment workflow. That head preserves Wolf, Snow, Eos, and the concurrent durable Run11–12 state/report work.
- WIKI publishing head `16f9aa77e7d77f1d082b8c6a304dfa821e15fbca` successfully completed the standalone Astro build and the Pages build/deploy/report workflow. It preserves the Wolf dossier parent, `Corpses / Reanimation` Running Gag, and both Snow episodes.
- This rolling-state commit is followed by the same repository-native WIKI workflows; final publishing-head status is checked after it lands.

## Current cross-surface continuity locks

- MAIN and WIKI are complementary public surfaces, not independent canon systems.
- User-confirmed canon and direct stable-ID bridges outrank name resemblance and miner-local uncertainty.
- Export-time roles are not appointment chronology; joke roles/property/ships/family language are not formal authority or literal relationships.
- Earliest surviving is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain distinct.
- Uninspected images remain uninspected; captions/replies/reactions do not license invented contents.
- Miner branches remain isolated evidence workspaces and are never wholesale-merged into publishing branches.
