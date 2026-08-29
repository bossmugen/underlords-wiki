# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 19:03 PDT**.

This is the rolling current integration state. Full pass detail is durable on MAIN under its `archive-intake/INTEGRATION_PASS_*_DUAL.md` convention.

## Current pass — Voice Challenge becomes a whole gallery

### Branch census / queue

- Mandatory opening census found **24 miner branches** matching `archive-miner-*` / `archive-miner/*`.
- Every discovered branch was represented in MAIN `archive-intake/INTEGRATOR_BRANCH_STATE.json` before deep review.
- No finite branch was advanced at the opening boundary.
- A later full census caught `archive-miner/core-rooms-events-a91f-20260824` advancing from `8d9e6f40f7b0872aca3c20c6c1bd8fc45ebcec19` to `a9aa456c05851939c3397a20e0435b112667a6d5`; MAIN persisted that new `last_seen_sha` as pending **before** the delta was reviewed.
- The Core delta was then reviewed checkpoint-first and intake-only. Core remains cumulative recovery with null consumed SHA because older safe-baseline packages remain.
- Club-Only 2020 and Club-Only 2021–2026 remain fully consumed through their unchanged heads and were not reread.

## Living Ensemble recovery — Runs13–14

Anti-starvation recovery continued on `archive-miner/aug-2026-living-ensemble-hourly` at `66c3227c687965a4dae9b372fdcbe2dc128611ba`.

Checkpoint first; raw archive re-mining was not repeated.

### Run13 — `slide into dms` grows house infrastructure

The surviving 2020 record tightens the genealogy of a house phrase:

- September 1, 2020: Ansun writes `_slides into his dms_`; Anthos then posts a literal sliding-person GIF and says that whenever somebody says `slides into dms` she now thinks of it; Mugen follows with a Tenor URL explicitly named `slide-into-dms`.
- October 7, 2020: Rookie Cookie uses `:SlideInDms:` and the export preserves an animated custom server emoji named `SlideInDms`.
- August 2026 reunion retrieval uses the same phrase while prone/sliding-person imagery is used to fetch old members back into the chat.

Safe reading: phrase → visual association → reusable server-reaction infrastructure → later reunion callback. September 1, 2020 is earliest surviving evidence found in this recovery slice, not proven origin; the 2026 images are not proven byte-identical to the 2020 GIFs.

Run13 also resolves the 2026 `trees` image as the giant UL Tumbleweed / family-tree object used during live reunion memory repair. It does **not** prove the 2026 binary is a direct revision descendant of either 2020 `Underlords_Tumbleweed.png` attachment.

These are retained as strong site candidates rather than duplicated into the current Wiki episode set in this pass; the published keeper below came from the newly advanced Core Rooms delta.

### Run14 — useful texture, no forced objects

- SevenVader's 2020 `snow poop` / `nasty and gross snow` complaints remain a person quirk, but no identity bridge to modern `s7even__` was inferred from name resemblance.
- Oyasumi's `Echo video when` → Echo `lemme finish rendering` → Oya `git gud` exchange is minor texture.
- Baby Lyssa's April 18, 2021 Main-HQ `HI AGAIN` / `hi ghost` first-day chatter and the room's `%DUNGEON` chaos are additive to an already-rich public Baby Lyssa chronology.

No duplicate page was created from these fragments.

## Advanced Core Rooms delta — reviewed through `a9aa456…`

Only the two changed intake-local handoffs were inspected after the Core checkpoint.

### The Voice Challenge becomes `A WHOLE GALLERY`

October 17–19, 2021 gives Han's Media Director work unusually clean motion instead of a static title badge.

Han launches the challenge around imagining a fitting voice/song for Dragon Raja characters. The next day, when Akariel wants to redo theirs after seeing everybody else's work, Han answers:

- `It is not about who does better or worse`
- `It is about having fun and expressing yourself`

Earlier that day he looks at the accumulating submissions and yells `AAAH WE HAVE A WHOLE GALLERY`.

Then the social idea hardens into literal server mechanics. Han says `All challenge works are pinned`; three minutes later Mugen writes that permissions were adjusted so `@Underlords Media Director` can pin messages there directly.

The small sequence matters because the permission does not invent the job. Han is already curating; Mugen makes the room accommodate the work. That is evidence of role function, **not** an appointment timestamp.

The room also becomes a peer editing clinic: DarkAsrai asks which app to use and Ren answers `Cap cut works!!`; Gilli names InShot; ShiyaX keeps making more after Han says repeat submissions are welcome. Sye posts despite saying video editing is not her thing and that she would rather stick with painting. Nobody needs to become a permanent `bad editor` character class for one self-deprecating line.

### Published here

WIKI now owns the discrete episode **Voice Challenge Becomes a Whole Gallery** in `src/data/integrator-episodes.ts` at content commit `110ca0c30f4dc67173111e0d951dbb984bd694bc`.

This is intentionally different from MAIN's preferred biography treatment: WIKI preserves the event-level sequence, cast, role/permission boundary, and creative-room behavior.

### Duplicate / corroboration in the same Core delta

- DarkAsrai / Rose / Galaxy's chronological return story was already public on MAIN, including Gilli's `Welcome back rose!` followed by the same stable account supplying `Galaxy / Dragons / 18+` at the door.
- The stable account continuity is real; a precise rename date, leave/rejoin chronology, or permanent identity replacement is not.
- `Gilli's Pond` still has no recovered origin earlier than its earliest surfaced stable-account Lobby appearance. Do not keep keyword-farming the same mounted corpus without a new source.

## Recovery / consumption state

- Daycare: consumed through `2c6ece9f30b742c7078a19d9780ae24b770e7ab8`.
- Whiskey: consumed through `a8a6cfaeaa3f21c35ca8cfaff5b14a8d8d4f63ed`.
- Club-Only 2020: consumed through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Club-Only 2021–2026: consumed through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Living Ensemble: recovery in progress, consumed SHA null; explicit reviewed coverage now includes **Runs02–17 except the already-separated later gaps, plus Runs22–26 and aggregate safe-baseline handoffs**. Runs18–21 and any remaining older safe-baseline gaps still need closure.
- Core Rooms: recovery in progress, consumed SHA null; the advanced delta through `a9aa456c05851939c3397a20e0435b112667a6d5` is reviewed. Older cumulative safe-baseline packages remain.
- Wall: recovery in progress, consumed SHA null; reviewed recovery remains 18:46 through 23:46 in the current descending sweep.

## Public-surface decision / verification

- **WIKI:** `src/data/integrator-episodes.ts` changed. Standalone `Build Underlords Wiki` passed for `110ca0c30f4dc67173111e0d951dbb984bd694bc`, and the repository's Pages build/deploy/report workflow also completed successfully for that exact content commit.
- **MAIN:** the matching rich Han biography expansion was attempted, but MAIN's repository-native source verification blocked before Astro build on an unrelated concurrent Biodata/roster change: the verifier reports multiple newly roster-filed people would fall through the generic explainer registry. The exact Han content commit therefore did **not** deploy. This failure is not being disguised as a successful MAIN publication.
- The Wiki was allowed to publish independently because its own build and deployment passed; one blocked surface did not overwrite or suppress the safe surface.

## Current cross-surface continuity locks

- MAIN and WIKI are complementary public surfaces, not independent canon systems.
- User-confirmed canon and direct stable-ID bridges outrank name resemblance and miner-local uncertainty.
- Export-time roles are not appointment chronology; joke roles/property/ships/family language are not formal authority or literal relationships.
- Earliest surviving is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain distinct.
- Uninspected images remain uninspected; captions/replies/reactions do not license invented contents.
- Miner branches remain isolated evidence workspaces and are never wholesale-merged into publishing branches.
