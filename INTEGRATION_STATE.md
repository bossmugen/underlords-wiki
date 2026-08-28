# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 01:48 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — Daycare walks in + Panda/Eos gets verbs + Illien turns an empty club into a lifeboat

### Branch census / queue

- Main-site mandatory census enumerated **24 miner branches** before deep review.
- One newly discovered branch, `archive-miner/daycare-2020-2026-hourly`, was immediately registered at HEAD `65ea31df34bfcb24c0c02147d581d372ca084bb4` with null consumed state before its recovery review.
- `archive-miner/backroom-deals-2026-08-24` had advanced to HEAD `541eb4eac818abf09e52eb396c99e83b11e4d893`; its prior durable recovery frontier was `d12a8aece2339a38ae60fab54979f8156bb787e8`.
- Census state was persisted on main before deep review at `745d1abd5f762e952049d6bd7a863950fe85cb3a`.
- Club-Only 2021–2026 (`d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`) and Club-Only 2020 (`99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`) were already consumed through unchanged current heads and were not reread.
- No miner branch was merged or cherry-picked into either public repository.
- After review there are **zero `pending_review`, backlog, or `review_overdue` branches**.
- The remaining cumulative safe-baseline recoveries are Living Ensemble, Backroom Deals, Core Rooms, and Wall.

## Reviewed branches

### Daycare — new-branch one-time recovery through HEAD

`archive-miner/daycare-2020-2026-hourly` was reviewed checkpoint-first through `65ea31df34bfcb24c0c02147d581d372ca084bb4`, using only its branch-local `archive-intake/daycare-2020-2026-longitudinal-20260819-2311-pdt/` handoffs: checkpoint, cumulative findings/site candidates, receipts, people notes, identity notes, open questions, and referenced indexes. Raw archives were not re-mined.

The miner may keep advancing after this SHA. `consumed` means this handoff frontier was actually reviewed, not that Daycare can never produce another finding.

### Whiskey — advanced delta reviewed and deduped

`archive-miner/whiskey-longitudinal-hourly` was reviewed from consumed `a12ef05f72c6bc0d723b2127556668f5995ab8f4` to HEAD `ff8df14f0f54dbe86044bc5b1425e45992a28511`, checkpoint first and only inside changed intake handoffs.

Its strongest new handoff was Panda's grounding / `Eternally Grounded Panda` / Cheesecake Factory `(but no cheesecake)` material. That material was already present on current main before this pass, so this was a successful duplicate/no-public-change review. The weaker June Marian↔Eos rail is also superseded by the fuller Daycare chronology accepted below.

### Backroom Deals — anti-starvation recovery frontier advanced

`archive-miner/backroom-deals-2026-08-24` was reviewed across the new intake-only recovery frontier `d12a8aece2339a38ae60fab54979f8156bb787e8` → `541eb4eac818abf09e52eb396c99e83b11e4d893`, checkpoint first.

The older cumulative safe baseline is still not completely walked, so its `last_consumed_sha` remains null. The reviewed frontier is durable; the branch is not being allowed to starve just because older material remains underneath it.

## Reconciliation accepted

### Panda / Marian Kage is one person; the miner split is rejected

Daycare attempted to treat `Panda` / `Panda-san` on stable account `356954091198480404` as a nickname for Marian Kage while warning not to merge that account with Staff Panda/PanPan.

That warning conflicts with stronger current canon: Mugs-confirmed identity and existing cross-room stable-account evidence already establish **Marian Kage = Panda / PanPan**. The integrator therefore keeps one canonical Panda entity and treats the Daycare warning as a miner-local continuity error, not new canon.

### Panda ↔ Eos — the relationship finally has chronology

Daycare gives a much better person-level arc than a static `related people` tag:

- Oct. 31, 2021 — Panda: `like how much i love eos`.
- Jan. 19, 2022 — Panda does not want to continue a shared game without Eos.
- Jan. 21 — Panda starts talking Paris, `we movin there`, and paired dolls bought for Eos and himself.
- Feb. 11 — Panda says they have known each other almost three years; Eos immediately corrects him with `3? or u mean 2`, so no exact origin date is manufactured.
- Mar. 7 — Panda uses UL marriage language: `because you're married to me`.
- Mar. 15 — Eos answers Panda with `you stole my heart a long time ago`; Panda dedicates a song and says he wants to sing it for Eos one day.

This is reciprocal affectionate / romantic-style UL social language. It stays exactly that: not a real-world marriage certificate, exclusivity claim, sexual-orientation inference, or other sensitive biography.

Main owns the full scene in Panda's character page. Wiki adds a compact **Panda ↔ Eos · You Stole My Heart** relationship card and deepens Panda's dossier snapshot instead of duplicating the whole main essay.

### Illien — WarlordZ becomes a tiny lifeboat

Backroom Deals supplies a clean June 13, 2020 character beat. Mugen explains that Illien had an old empty club, `WarlordZ`, and offered it to solo Joyonto so Joyonto could collect club benefits / EXP. Illien checked with Mugen first and made Joyonto a **WarlordZ deputy** so he could receive diamonds. Ren's immediate read was `Illien is so selfless`.

The useful fact is the action, not a new office: WarlordZ deputy is an external/game-club benefit mechanism, **not** an Underlords appointment. Joyonto's exact UL status at that moment remains unresolved.

This is richer biography texture than a reference-index need, so it was intentionally published **main-only** on Illien's Character page.

## Surface split / verification

### Main site

Public lore changed:

- `src/content/people/panda.md` — full Panda↔Eos Daycare chronology, reciprocal-language boundary, and explicit rejection of the bad Marian/Panda split.
- `src/content/people/illien.md` — WarlordZ/Joyonto lifeboat scene and strict external-club role boundary.

Public content head: `4900b7de2066f1c9424f4d3ca5380910841ba2b5`.

Main workflow run `33156597366` passed the complete production gate on that exact public-content head: source canon/architecture verification, Astro build, built-output verification, Cloudflare deployment, and exact-commit production verification.

### Wiki

Public lore changed:

- `src/pages/relationships.astro` — **Panda ↔ Eos · You Stole My Heart** relationship index card.
- `src/data/dossier-snapshots/panda.md` — fuller Daycare chronology plus the same identity/sensitive-biography boundaries.

Public wiki content head: `e869911ff87d11545d64377e633b8cfba15cb243`.

Verification on that exact public-content head:

- standalone Astro build run `33156694914` — **success**;
- GitHub Pages build/deploy/report run `33156694916` — **success**.

## Consumption advanced

- `archive-miner/daycare-2020-2026-hourly` → `65ea31df34bfcb24c0c02147d581d372ca084bb4`
- `archive-miner/whiskey-longitudinal-hourly` → `ff8df14f0f54dbe86044bc5b1425e45992a28511`
- `archive-miner/backroom-deals-2026-08-24` remains `last_consumed_sha: null` because its older cumulative safe-baseline recovery is still incomplete; the new d12a8ae→541eb4 frontier is nevertheless durably reviewed.

## Reviewed but held / deduped

- Daycare: Tae's Aug. 27, 2021 `pull a Jas` gives Absent Father Jas an earlier name-as-verb mutation; Rich's Sept. 16 typed `absent father` improves the corpus genealogy; exact origin remains open. The Snack Toll, Queen Elsa, Grimlee, Halkenburg, YuKanada and other thin-person rails remain below current public-depth thresholds. `Mr. Streamer (Gabu's Chair)` remains an unresolved stable account and is not merged by adjacency.
- Backroom: Suzi + Key's April 2020 server-birth Bouncer scene, the corrected Nov. 30 `Riot Without a Prisoner`, Gilli's hidden karaoke-room infrastructure, Little Bird, Kross and related rails are preserved for later placement / recovery rather than dumped publicly all at once. Sensitive workplace / health / private-target material stays backstage.
- Whiskey: Panda's grounding/Cheesecake Factory material is duplicate of current main; H2 media attribution limits remain.
- Wider standing rabbits remain open for Nitro creator/exact first noun, ShiyaX fake-family genealogy, Snow/Big Bang, Alabama/Tumbleweed expansion, Feli↔Mugs Tumbleweed, Daycare channel creator/permission mechanics, earliest exact Platelet assignment, and unresolved media maker/captor/featured joins.

## Current cross-surface continuity locks

- Main and wiki are complementary surfaces, not independent canon systems.
- Mugs-confirmed canon and direct stable-ID bridges outrank miner-local warnings and name resemblance.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; fake-family / UL marriage language is not silently converted into literal legal or sensitive real-world biography.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
