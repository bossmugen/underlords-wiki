# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 18:18 PDT**.

Full branch-level consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**.

- finite pending after review: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery track still open: **Wall**
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- All Characters: reviewed/consumed through `759401b59b6e8b2abe775a2b40ac1c8cb3e9601a`
- Core Rooms: reviewed/consumed through `9eb31f2da1eaf9d4068823387ae4e8fb6307ac30`
- Mugen person-first: seen/consumed `c34d8ca22e9eac6d6a035bfc4e738a09d186ec3e`
- Wall: forward-reviewed through `b02fb6d5fe5c142cc554474cbc501bb3e17ed0ee`; formal consumed remains null while its older cumulative recovery is open.

Core's prior hour-by-hour recovery note was reconciled against the miner branch itself. The oldest surviving durable recovery handoff on that branch is `checkpoint-delta-2026-08-25-0446.md`; there is no earlier durable checkpoint-delta package to consume without re-mining raw archives, which the integration rules explicitly forbid. The one-time Core recovery is therefore closed at the durable handoff floor rather than pretending nonexistent earlier packages were reviewed.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### All Characters — `188cebef… → 759401b5…`

The branch was reviewed checkpoint-first, including its late synchronization suffix. The important correction is Yassr: **male**, historical in-game identity `～Yakko～`, in Underlords by late 2020 after Gilli invited him, with a January 2021 historical Staff invitation preserved separately from current Game Officer canon.

The expanded person material finally makes the practical streak feel like a person rather than a job description. In 2019 Yassr is already in Mugen's wider social/game orbit asking what everybody is supposed to wear to a party and proposing `do we just wear our ugliest looking outfit`; when Mugen assembles patio furniture he congratulates her like a toddler who has finally learned construction. In 2021, asked what ISEKAI-Mafia role he wants, Yassr answers `Anything is fine. Just something useful.` Years later he is still translating game-state changes into things people can actually do.

The domestic material gives the same instinct less dignity. Yassr cooks regularly, but his lazy fallback is spaghetti with butter and ketchup. He describes himself as not outdoorsy; camping works when the group and basic comfort work, while a family cabin historically without internet is remembered as a sleep/eat/read/paint decompression place. That reads less like generic efficiency than a recurring dislike of unnecessary friction: useful things should be useful, not difficult for the honor of being difficult.

`src/data/character-biographies-yassr.ts` was expanded accordingly. Hard boundaries remain: no guessed employer/residence, no cabin geolocation, no exact role-tenure reconstruction, and no merging similarly named Discord accounts by display name alone.

Other Run 20 material — Yelik's White Day generosity, Noether's mock-scarcity dessert pattern, Zepp's `walmart key` / `AUTO BOT OF KEY` peer caricature, Ten's low-ego premise completion, Ghostt's old game-death caricature, and Cookie's context-sensitive exposure — was reviewed as corroboration or future-profile texture rather than multiplied into thin public objects.

### Core Rooms — current suffix through `9eb31f2d…` + recovery-floor reconciliation

The current Core package was reviewed checkpoint-first through findings, receipts, rabbit holes, people/profile notes and site candidates. Two Aether doorway scenes were accepted as WIKI Episodes.

**Spritely / Shurui, October 9, 2020:** Spritely checks into Lobby as `Shurui, Foot Soldier, 15`, then says `No I joined the club today, I came from Aether`. Mugen later welcomes Spritely, assigns an unnamed Discord role, and points them to the server map. The useful hinge is participant-authored: Aether immediately before, UL now, with `Foot Soldier` supplied by Spritely rather than inferred from exporter metadata. Five weeks later Shurui is already ordinary enough inside team traffic for people to ask somebody to grab them and pass along the plan. Recruiter, transfer motive, exact acceptance minute, and exact Discord role remain unresolved.

**Synetha, September 6, 2020:** `Hello! This is Synetha from Aether! I was invited by Snow for the movie`. Snow answers `Welcome Synetha ^_^`; Mugen follows with another welcome and an unnamed role assignment. This is one of the cleanest surviving reasons an outsider is at UL's door: not recruitment theater, not a generic alliance claim, just somebody from another club invited over because people are watching a movie. Snow's immediate welcome makes the guest feel expected; Mugen's role handoff operationalizes the hospitality. The exact movie, room, role, duration, later membership and any VIP label remain unresolved.

ÍKER/Altamar's Jason-mask anecdote, Sakura Zess Maou's privacy-aware age-form comedy, and Rummy's pancake scene were reviewed but held from new standalone publication. The latter remains especially attribution-sensitive: Rummy says `IT A PANCAKEEEE` with no attachment, while the nearby screenshot is POSTED BY Marian Kage. That is not permission to promote Rummy to cook, photographer or image-maker.

Core's one-time historical recovery is now closed at the oldest durable checkpoint-delta surviving on the miner branch. Raw archives were not re-mined to invent a lower floor.

## Reader-facing changes / surface split

### WIKI

`src/data/character-biographies-yassr.ts` now carries the longer Yassr dossier: pre-UL familiarity, Gilli invitation and `～Yakko～` identity, historical Staff invitation, usefulness pattern, cooking, camping/cabin decompression, event reminders and later Game Officer texture.

`src/data/integrator-episodes-core-20260829-1800.ts` adds two bounded incidents:

- **I Joined the Club Today, I Came from Aether** — Spritely/Shurui's October 9 transfer hinge.
- **I Was Invited by Snow for the Movie** — Synetha's Aether guest arrival through Snow.

The incident index and dynamic Episode route are wired to the new module. Reader head `fa38c7224f2775ba597fbcbd559a0a41ea41991e` passed standalone **Build Underlords Wiki** run `33285157680` and complete **Deploy Underlords Wiki Preview** run `33285157667`, including build, deploy and report, all successfully.

### MAIN

MAIN owns the person-first public Yassr version in `src/content/people/yassr.md`: same reconciled evidence, but organized around a lived chronology rather than a fandom dossier. The reader-facing MAIN head `7e75d4902359298d310bbee1d9f17d2cdabd419c` passed **UL Hourly Build + Deploy** run `33285103563`, including source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment.

The Spritely/Synetha doorway scenes remain WIKI-first because they are compact incident/access-history objects; MAIN does not need duplicate prose simply to prove the evidence was consumed.

## Duplicate / corroborative material combined

- Yelik, Noether, Zepp, Ten, Ghostt and Cookie Run 20 material was retained as corroboration/profile texture without spawning thin duplicate pages.
- Yassr's current Game Officer title is not backdated from historical Staff material.
- Spritely's later November team-plan scene is continuity for the October transfer, not a newly named event.
- Existing visitor/VIP infrastructure is strengthened by Synetha's purpose-specific guest scene, but the unnamed role assigned to Synetha is not rewritten as confirmed VIP.

## Held / unresolved

- Yassr: exact Discord-account continuity across similarly named historical accounts; employer/residence; cabin location; complete Staff/Game Officer tenure boundaries.
- Spritely: recruiter/inviter, transfer motive, exact acceptance minute, exact assigned Discord role, exact November `plabn` event identity.
- Synetha: movie title, watch room, assigned role, duration of access, later UL status; no automatic VIP or alliance claim.
- ÍKER/Altamar: later chronology and exact costume recurrence.
- Sakura Zess Maou: exact `Sakura Yami` / `Zess -Virt` identity parsing and exact age; only the adult/minor category is operationally relevant.
- Rummy pancake: cook, photographer, media ownership and depicted-object chain remain unresolved; Marian remains the confirmed POSTER of the nearby screenshot.
- Earliest surviving material is not promoted into an origin claim, and SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate attribution classes.
