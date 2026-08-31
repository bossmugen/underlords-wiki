# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 10:49 PDT_

This is the current durable dual-surface reconciliation snapshot. Earlier run detail remains in Git history and MAIN's dated `archive-intake/INTEGRATION_PASS_*` reports.

## Current boundary — Run 75

The binding public-bio rule remains: **the person is the spine; events are supporting scenes; the archive stays backstage.** MAIN owns rich person/legend biographies. WIKI owns searchable Cast dossiers plus Episodes, Relationships, Running Gags, Quotes, Locations and Gallery/reference structure. `Petty Crimes` is the public catch-all section name; never `Trivia`.

Hard user canon, resolved identities, privacy/safety, explicit contradictions, appointment chronology and attribution fences remain hard. Outside those rails, strong contextual reads about habits, relationships, humor, care patterns, ordinary life, reputation and social roles may publish when more likely than not.

- Full opening census: **49 tracked miner identities = 28 active refs + 21 historical/missing; 0 newly discovered; 1 finite pending branch at opening; 0 backlog; 0 overdue.**
- Both Club-Only recovery priorities remain consumed/current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Wall recovery was reviewed from `a20b60b5fae8e9458c09f710fbbad72051057bc7` through the later-arriving `7118b5ef4caed4f2a6d31884f48bbf763b0ee861` in two intake-only suffixes. Quarry remains NOT EXHAUSTED for future movement.
- Core Rooms was reviewed from prior reviewed-through `1a4ddefdaa3babf3e86f6222ba2df2e4a41e5147` through current `5984725fff0be21e3d16a5260832d02315c38546`; commits after `cbb2a6df09a740d3d6d27f677431f1a4652b5888` completed the same 10:20 handoff package rather than adding a second substantive scene set.
- Daycare, Mugen person-first and Whiskey remain reviewed-through-current but their formal MAIN consumed cursors remain pinned behind older accepted MAIN reader work that has not cleared MAIN verification.
- No miner branch was merged or wholesale cherry-picked; no raw archive was re-mined.

## Run 75 review / reconciliation

### WOO / Woosung gets to be a person instead of a receipt stack

Core Rooms adds a particularly clean 2020 taste/relationship scene. WOO complains that her hair will not stay put, asks for a K-pop game, and then objects that she wanted the K-pop game *before* the BL room Snow has apparently supplied instead. Snow's `yes yes I know` makes the request feel like familiar low-stakes household lobbying rather than a formal feature ticket. In 2023 WOO herself notices the consequence of being this expressive: she says she needs to talk less because she has too much Hall of Shame material; Moon answers `No no you famous uwu`, and WOO responds with crying/skull reactions.

WIKI now folds those scenes into a person-first Woosung biography rather than creating another event card. The narrative centers the contradiction already visible elsewhere in her file: Woo can be brutally compact in verdicts, loudly preference-forward, and deeply practical in care, then become extremely interested in denying what everybody just watched her do. K-pop-before-BL, unruly hair and self-generated Hall abundance belong to the character, not to an archive-method paragraph.

### Ricochet and Syv resume ordinary stupidity immediately

Wall gives a strong 2022 return scene for **Ricochet / `dragonrichard`**. Ricochet says it is his first time in the Wall in a while; Syv answers that he disappeared for weeks; he says `I'm busy`; seconds later he asks Syv to send ramen; Syv answers `I'm broke`.

The useful read is low-friction familiarity. Syv noticed the absence, but neither person turns the return into a ceremony. Ricochet gives the minimum viable explanation and immediately resumes ordinary banter; Syv lets him, then kills procurement on budgetary grounds. WIKI now gives Ricochet and Syv person-first narrative biographies that use this as relationship texture rather than as a standalone `2022 incident`.

This review also repaired a hard public identity error: **Rich = DragonRich. Ricochet / `dragonrichard` is a separate unresolved identity and must not be merged into Rich.** Older active VIP copy had incorrectly attached the Syv ramen scene to Rich; that is now corrected in the active data layer and the hard fence remains backstage in canon notes.

### Late Wall suffix — reviewed, mostly folded into existing owners

A later Wall suffix arrived during the run and was reviewed through `7118b5ef4caed4f2a6d31884f48bbf763b0ee861`.

- Torr says he tried to delete an ambiguous comment and that Tae saved it; the immediately prior Tae attachment is a probable/strong join, not a hard same-object claim. Person read: Torr is evidence-conscious enough to attempt cleanup and still playful enough to keep litigating `totally ambiguous` once caught. Tae is experienced by Torr as the person who made deletion strategically useless. This is good future Torr/Tae character texture, but neither public surface currently has a strong canonical owner page that would justify manufacturing a thin new dossier this run.
- Sye gives a six-message pickle/fermentation explanation in 2024, distinguishing acidity, brine and process efficiency. It is excellent mundane texture but substantially corroborates an already-public Sye pattern: terse until a mechanism matters, then suddenly specific about systems and food. No duplicate paragraph was added merely because a fresh receipt exists.
- Mercy's tiny Wall footprint becomes human in a Nelph-linked cookie-promo / synchronized-smirk scene, but two authored messages remain too thin for a dedicated public biography. Hold as a future profile snippet if another distinct scene gives her more shape.

No new visual claims were made from uninspected media; POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.

### Thin Core candidates held

`gab.` / KaraZorElPH now has a useful first-day cluster — asks how Lobby/Whiskey work, moves quickly into timezone/music small talk, says `HipHop/Rap`, and participates in a Tagalog phrase exchange with Mugen. This supports active social navigation and music taste without supporting nationality, ethnicity or language-fluency claims. Ice Man Cree modestly advances; Nia and Stranger remain thin. None was inflated into a public biography this run.

ULCC publication/adoption remains unresolved; transient retrieval failures are not converted into negative historical claims.

## Public work / verification — Run 75

### MAIN SITE

Reader-facing pages changed: **none this run**.

The new WOO material overlaps an already-rich MAIN Woosung biography, while Ricochet/Syv is cleaner as a WIKI Cast relationship deepener. MAIN remains under the existing verification/deployment infrastructure problem; reader copy was not bypassed around that gate.

MAIN still receives the mandatory branch census, post-review consumption ledger and dated Run 75 integration report.

### WIKI

Reader-facing work:

- `src/data/character-bios-vip.ts`: hard Rich/Ricochet correction plus person-first base tightening for Rich, Syv and Woosung.
- `src/data/character-biographies-run75.ts`: person-first narrative biographies for Woosung, Ricochet and Syv.
- `src/pages/characters/[id].astro`: routes Run 75 narratives before legacy overview/history copy.
- `src/data/character-bios-vip-late.ts`: keeps hard identity/attribution rails backstage while making visible `Petty Crimes` actually about the people.

Reader head `dd12d5e9a51a1532ab21770c56bf0839c2e91984` passed:

- Build Underlords Wiki `33421333459`: **SUCCESS**.
- Deploy Underlords Wiki Preview `33421333306`: initial deploy attempt hit a transient GitHub OIDC ID-token timeout after its Pages build succeeded; the deploy job was retried and then **SUCCESSFULLY DEPLOYED** from the same head.

The person-first bio work is therefore build-clean and live. This state commit records that exact publication result and will receive its own exact-head build/Pages verification.

## Hard rails held

- Rich = DragonRich; Ricochet / `dragonrichard` stays separate.
- Syv is not Sye/Life; `sycessences` / `ƐℲı˥` = Sye/Life, not Effie.
- Snow is not formal second-in-command / #2.
- WhitePhoenyx = Xephy, not WolfPhenix.
- Candy / later Luna is not HyaLuna.
- Cookie is Staff; Han, not Cookie, is UL Media Director / filmmaker.
- No appointment chronology from export-time/current role arrays.
- Joke family language is not literal genealogy; joke flirting/romance is not literal romance without support.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

## Consumption / next boundary

Post-review MAIN ledger is the controlling consumption record. If closing miner heads remain stable, Wall may advance formal consumed through `7118b5ef4caed4f2a6d31884f48bbf763b0ee861`. Core Rooms may advance `reviewed_through_sha` through `5984725fff0be21e3d16a5260832d02315c38546`, while its older formal consumed cursor remains pinned by pre-existing MAIN publication debt. Both Club-Only recovery branches remain current.

The Run 75 editorial gain is deliberately character-shaped: WOO has a remembered K-pop grievance with Snow and knows she talks herself onto the Wall; Ricochet can reappear after weeks and be asking Syv for ramen within seconds; Syv notices he vanished and still has the good sense not to fund him. The archive machinery stays backstage where it belongs.
