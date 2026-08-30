# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 18:23 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier rolling wiki states remain in Git history.

## Current boundary

- Census: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite pending: **0**.
- Backlog: **0**.
- Review-overdue: **0**.
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- All Characters: seen/consumed through `759401b59b6e8b2abe775a2b40ac1c8cb3e9601a`.
- Core Rooms: seen/consumed through `9eb31f2da1eaf9d4068823387ae4e8fb6307ac30`.
- Wall: forward-reviewed through `6b2d0d7c6b654eec0c06f7c3e2465c3d791c7935`; formal consumed remains null while its older cumulative recovery stays open.
- Mugen person-first: seen/consumed `c34d8ca22e9eac6d6a035bfc4e738a09d186ec3e`.

Core's old rolling recovery countdown is closed. The oldest surviving durable Core recovery handoff on the miner branch is `checkpoint-delta-2026-08-25-0446.md`; no earlier checkpoint-delta exists to consume without re-mining raw archives, which the integration rules forbid. Core therefore closes at the durable handoff floor instead of pretending nonexistent earlier packages were reviewed.

No miner branch was merged or cherry-picked wholesale.

## All Characters — Yassr

All Characters was reviewed checkpoint-first from consumed `188cebef879a3ebef40e28918e42c70849662666` through late head `759401b59b6e8b2abe775a2b40ac1c8cb3e9601a`. Its miner-side public-page edit was ignored because it sits outside the permitted intake path; only intake handoffs were consumed.

The hard correction is that **Yassr is male**. The restored person file also gives historical in-game identity `～Yakko～`, late-2020 Underlords membership through Gilli's invitation, and a January 2021 historical Staff invitation. Current Game Officer canon remains separate; no exact Staff tenure or later promotion date is backfilled from exporter roles.

The person material finally gives the useful streak a life outside titles. In 2019 Yassr is already around Mugen's wider social/game orbit asking what everybody is supposed to wear to a party and proposing `do we just wear our ugliest looking outfit`; when Mugen assembles patio furniture he congratulates her like she has just graduated from diapers. In February 2021, asked which ISEKAI-Mafia role he wants, he answers `Anything is fine. Just something useful.` Later reminders, a clean Saber-bot handoff, Scourge information and gift logistics keep rhyming with that preference.

The domestic details stop the pattern from becoming corporate virtue copy. Yassr cooks regularly, but his lazy fallback is spaghetti with butter and ketchup. He says he is not outdoorsy; camping works when the group and basic comfort work. A family cabin historically without internet is remembered as a sleep/eat/read/paint decompression place. The probable cumulative read is not `Yassr loves work`; it is that he tends to prefer useful things to be useful rather than difficult for the honor of difficulty.

WIKI now carries that as the expanded `src/data/character-biographies-yassr.ts` dossier. MAIN carries the distinct person-first chronology in `src/content/people/yassr.md`.

## Core Rooms — Spritely and Synetha at the door

Core was reviewed checkpoint-first through the complete 17:56 handoff package at `9eb31f2da1eaf9d4068823387ae4e8fb6307ac30`.

### I Joined the Club Today, I Came from Aether

On October 9, 2020 Spritely checks into Lobby as `Shurui, Foot Soldier, 15`, then clarifies: `No I joined the club today, I came from Aether`. Mugen later welcomes Spritely, assigns an unnamed Discord role and points them to the server map.

This safely establishes Shurui as Spritely's scene-level in-game identity, participant-authored `Foot Soldier` wording, and an Aether→Underlords transfer dated by Spritely themselves. Recruiter, motive, exact in-game acceptance minute and exact Discord role remain unresolved. Five weeks later an already-known team scene has people asking somebody to grab Shurui and pass along the plan, which is enough for the small social-speed read: new enough to explain the transfer at the door in October; ordinary enough to be expected in coordination by November.

### I Was Invited by Snow for the Movie

On September 6, 2020 Synetha enters Lobby with `Hello! This is Synetha from Aether! I was invited by Snow for the movie`. Snow immediately answers `Welcome Synetha ^_^`; Mugen follows with another welcome and an unnamed role assignment.

The value is the reason. Synetha is an outside-club guest and is at UL's door because Snow invited them over for a movie. Snow's immediate recognition makes the arrival read as expected social traffic; Mugen's role handoff operationalizes the hospitality. Exact movie, watch room, access duration, assigned role and later membership remain open. The unnamed role is not rewritten as VIP and the scene is not inflated into a formal-alliance claim.

WIKI owns both scenes in `src/data/integrator-episodes-core-20260829-1800.ts`; the episode index and dynamic routes are wired to them.

ÍKER/Altamar's Jason-mask anecdote, Sakura Zess Maou's privacy-aware age-form arithmetic and Rummy's pancake scene were reviewed but held from standalone publication. Rummy says `IT A PANCAKEEEE` with no attachment while Marian Kage remains the confirmed POSTER of the nearby screenshot; cook, photographer, image-maker and depicted-object chain remain unresolved.

## Late Wall suffix — `b02fb6d5… → 6b2d0d7c…`

A closing recensus caught Wall moving after the first durable close. The suffix was reviewed checkpoint-first through its 18:05 findings, receipts, rabbit holes, site candidates and people-profile addenda. Formal consumed remains null because the older Wall recovery is still open, but the forward-reviewed edge is now `6b2d0d7c6b654eec0c06f7c3e2465c3d791c7935`.

The useful new person read is **Usama as a probable low-volume receipt interpreter / social-memory carrier**. On July 21, 2021 BeaEder posts a receipt, Mugen replies `Og strippers hard at work 😂`, and Usama follows with `key was asking Sushi yesterday too lol`. Four days later Mugen posts a two-image Raja package, ShiyaX replies `Lina`, and after a long surviving-text silence Usama enters with edited-final `lol thats Shiya`, then `for sure`.

Two separate scenes are enough for the probable behavioral texture: Usama sometimes stands behind the evidence board and supplies the remembered footnote or tells the room what he thinks the receipt is about. It is **not** enough to claim Key/Sushi are visibly in Bea's image or Shiya is visibly in Mugen's screenshots. Pixels remain uninspected; POSTED BY remains distinct from FEATURING / MADE BY / CAPTURED BY. This remains a profile-snippet candidate rather than a new public page in this pass because the useful behavior is real but still image-adjacent and thin.

The same suffix closes one overgrown Snow rabbit: direct Wall text supports one Dec. 11, 2023 `FURY` / `FURRY` spelling-defense scene, not a demonstrated recurring Snow-furry label. Ren says Snow accepted his `inner furry`; Daya crowns him `the furry king of this whole club`; Snow eventually fires back `THATS  FURY .. AS IN ANGRY` and, 2.499 seconds later, `not FURRY`. A whole-Wall direct-text sweep supplies no separate Snow precursor or later recurrence. Future recurrence needs media, a direct callback or another source; generic Wall-text searching is exhausted.

Ren's July 2021 `Pls ghoulie is the Icon we need` is also fenced correctly. Because it sits on a Ghoulie/Baby Lyssa receipt package, it is probably local praise/caption language, not provenance for Mugen's server/guild icon. The assigned Wall supplies no direct `logo`, `lounge` or `members only` bridge. Mugen MADE BY remains hard user-confirmed canon; visual content still requires actual image inspection.

## Public verification / deployment

MAIN reader-facing head `7e75d4902359298d310bbee1d9f17d2cdabd419c` passed **UL Hourly Build + Deploy** run `33285103563`: source canon/architecture verification, Astro build, built-output verification and exact Cloudflare production deployment all succeeded.

WIKI reader-facing head `fa38c7224f2775ba597fbcbd559a0a41ea41991e` passed standalone **Build Underlords Wiki** run `33285157680` and complete **Deploy Underlords Wiki Preview** run `33285157667`, including build, deploy and report.

The first durable WIKI state head `8db934d012cb5db9daf0f199df59761cf6f4f6a5` also passed **Build Underlords Wiki** run `33285279939` and Pages run `33285279935`, including build, deploy and report. This file's present commit supersedes that state only to record the late Wall suffix caught during closing census; its own workflows must be green before this pass is considered fully closed.

## Intentional surface split

Yassr belongs on both public surfaces with different jobs: MAIN owns the lived chronology; WIKI owns the fandom dossier and role-progression framing. Spritely/Synetha stay WIKI-first because they are compact incident/access-history stories. Usama's late Wall advance is consumed as meaningful profile texture but intentionally not published yet because it remains a thin, image-adjacent two-scene character read rather than a richer standalone dossier.

## Held / unresolved

- Yassr: exact continuity across similarly named historical Discord accounts; employer/residence; cabin location; complete Staff/Game Officer tenure boundaries.
- Spritely: recruiter/inviter, transfer motive, exact acceptance minute, exact assigned Discord role, exact November `plabn` event identity.
- Synetha: movie title, watch room, assigned role, access duration, later UL status; no automatic VIP/alliance claim.
- Usama: actual screenshot subjects and media provenance; the behavioral read is conversational, not pixel identification.
- Snow `FURY/FURRY`: direct Wall-text recurrence is not demonstrated beyond the Dec. 11, 2023 scene.
- Ren's `Ghoulie ... Icon` wording is not guild-icon provenance.
- ÍKER/Altamar later chronology; Sakura identity parsing/exact age; Rummy pancake cook/capture/media chain.
- Earliest surviving is not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.
