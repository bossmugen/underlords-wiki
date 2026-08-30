# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 20:14 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier rolling WIKI states remain in Git history.

## Current boundary

- Census: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite pending: **0** at the closing census.
- Backlog: **0**.
- Review-overdue: **0**.
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Core Rooms: seen/consumed `1721db9e4dcb329264d87f8d12f6704c3f04d0ab`; one-time historical recovery remains closed.
- All Characters: seen/consumed `6b2f24a57bd0c373cd07e01d7f0c8c4ea47ad771`.
- Whiskey: seen/consumed `392fc71d98e0cc120e832be282df81d61f888b7b`.
- Mugen person-first: seen/consumed `ab8054e7ac237863d023277fc63f87ef9ca8a203`.
- Wall: forward-reviewed through `cbba723a102c7fd67544e09cca1739bbfb8a8209`; formal consumed remains null while its older cumulative recovery stays open. Historical recovery is now reviewed through the `2026-08-25-0246` package; `2026-08-25-0346` is next.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### All Characters — `66403720… → 6b2f24a5…`

The pending suffix was reviewed checkpoint-first and intake-only. Its late `da715de3… → 6b2f24a5…` segment is derivative character/coverage/exhaustion consolidation plus negative rechecks of already-reviewed Run 22 material. Crystalia and HamitteY/Wichita had already received their accepted public treatment; Jas, Ciphy, Nothien, and the remaining sync material did not warrant duplicate copy. This is a successful no-public-change review, so All Characters is consumed through `6b2f24a5…` instead of being reread forever.

### Core Rooms — `9eb31f2d… → 1721db9e…`

Dean/Beansprout's October 27, 2020 first Discord night is now public on both surfaces. The surviving sequence catches a familiar social welcome before server navigation: Ren greets Dean, Dean answers `Hello my beautiful fam ✨`, Anthos helps him through access/tour mechanics, Dean explains that classmates wanted weekend Among Us and his parents did not object to Discord, and Gabu's `Your mom boi` produces Dean's `OH hi mama! I only read the first word...`.

The safety boundary is period-specific and hard: do not sexualize the minor-period material; do not infer an exact recruiter/inviter from Anthos helping him navigate; and keep `mama` attributed to Gabu in this scene rather than redirecting it to Mugen. MAIN published the richer biography version in `src/content/people/dean.md` at `685052598d5d54c257f54766dd83eac52fc6361e`; WIKI published the dossier version in `src/data/character-biographies-dean.ts` at `b9163815e01c86aeea680c442c2f6719622a0468`. MAIN's full `UL Hourly Build + Deploy` run `33289872522` succeeded, and both WIKI workflows for `b9163815…` succeeded.

Aspen/Council guest-access evidence remains a probable cross-club social-access read, not a resolved VIP status or lifecycle. Core is consumed through `1721db9e…`.

### Wall historical recovery — `2026-08-25 02:46`

This package produced one clean new episode and several deliberate deduplications.

**The Chucken Was Amazing:** Gilli files `For shame. She let us get murdered for Chicken`. The screenshot remains visually uninspected and Gilli's caption alone does not identify its `she`. Thirty-seven minutes later Rummy answers `It very much worth it the chucken was amazing`, supplying strong scene-level ownership of the chicken tradeoff while still leaving the exact game, mechanics, victims, and action unresolved. The funny part is not a teamwork diagnosis; it is that Rummy's defense appears to concede the tradeoff and argue only that the chicken justified it.

The June 2022 recommendation desk was already folded into Rummy's public BL/yaoi taste history: Gabu recommends yuri, delegates yaoi to Rummy, and Marian calls Rummy's recommendations `cheesy shit`. That is media-taste/recommendation characterization, not sexuality evidence. The charcoal-pancake thread is likewise already publicly owned. Gilli's `Don't make me spam you with the bot answers again` proves an older missing callback but leaves the bot, answer contents, and origin unresolved; do not infer Saber. Moon's `I am a moon,so i see all` after finding `Dream hiding shrooms` remains a one-scene quirk because Dream and the shrooms context are unresolved.

Historical Wall recovery advances through **02:46**; **03:46 is next**.

### Wall forward suffix — `c41fe5b6… → cbba723a…`

The late Wall suffix was also reviewed checkpoint-first rather than merely registered.

**Another Week of Scrambled Egg Bunny Fursona:** Ren says `I got so many`, posts `image0.jpg`, Zoshaa addresses Ren, Ansun asks why Ren brings `this` up `again`, Ren calls it `one of my fav ss`, and Ansun announces that `zoshaa suffers another week of being called scrambled egg bunny fursona everytime this appears`. The text makes the mechanism legible: this is not just an orphan nickname; it behaves like a renewable sentence attached to a recurring exhibit. The tight chronology makes Ren's posted `image0.jpg` the probable exhibit in this surviving recurrence. Its pixels, maker, capturer, featured subject, first appearance, and the phrase's absolute origin remain unresolved. Earliest surviving recurrence is not origin.

**The Ansun Fur-Suit Startup:** Daya opens with `petition to get ansun in a fur suit`. Ansun's first objection is the thousand-plus-dollar price; Daya proposes a Party City + Shein budget build; Ansun pivots to TikTok/Douyin fame and says `Go ahead and make me famous; your move`; account `opalite.honey` supplies `raja woof suit`; Daya upgrades Ansun to `UL's money maker. main attraction for the strip club`; Rummy true-replies with `BUNNY BARTENDER OUTFIT`. The text alone supports the escalation from accusation to procurement to influencer strategy to nightlife staffing. Daya's attached screenshot is a probable trigger but remains visually uninspected, so no costume/model or image provenance is invented.

`opalite.honey` / display `༯` advances to a thin contextualized supporting-account candidate only. No real-world/name identity bridge is inferred. JumanjiBinx, Lithium_Darko, Booba, and Wolf Phenix controls were retained without fake uplift.

Wall is forward-reviewed through `cbba723a…`; formal consumption stays null solely because the cumulative older recovery remains open.

## Public changes

### MAIN

- Dean's first Discord night and safety boundary were integrated into `src/content/people/dean.md` at `685052598d5d54c257f54766dd83eac52fc6361e` and verified/deployed successfully by `UL Hourly Build + Deploy` run `33289872522`.
- No additional Wall reader page was added to MAIN this pass. The strongest new Wall material is cleaner as discrete WIKI incidents, while Rummy's recommendation/pancake material already has richer canonical MAIN owners and was not duplicated.
- MAIN's authoritative branch ledger now consumes All Characters through `6b2f24a5…`, Core through `1721db9e…`, records Wall forward review through `cbba723a…`, and advances Wall historical recovery through 02:46.

### WIKI

`src/data/integrator-episodes-wall-20260829-1930.ts` now publishes three new incidents from the reviewed Wall work:

- **The Chucken Was Amazing**
- **Another Week of Scrambled Egg Bunny Fursona**
- **The Ansun Fur-Suit Startup**

Reader commit `01318ce93f8f17b1cca7b0a37ab495ff7d29340e` passed **Build Underlords Wiki** run `33290116887` and **Deploy Underlords Wiki Preview** run `33290116899`; both completed successfully.

Dean's first Discord night remains separately integrated in the character dossier at `b9163815…`, whose build and Pages deployment also succeeded.

## Held / unresolved

- Rummy chicken screenshot pixels and exact game/mechanics/victims/action.
- The bot-answer spam origin, bot identity, and contents; do not infer Saber.
- `Dream` identity and hidden-shrooms context.
- Rummy pancake parent/media join and maker/cook attribution.
- `image0.jpg` pixels/provenance and absolute origin of `scrambled egg bunny fursona`.
- Daya's fur-suit screenshot pixels and whether `raja woof suit` refers to a specific Dragon Raja costume/model.
- `opalite.honey` real-world/name identity.
- Aspen's exact lifecycle/role; no unsupported VIP promotion.
- Any unsupported jump among SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING.

This state amendment records the verified reader commits above. The resulting WIKI state commit is itself subject to the repository's native build and Pages workflows before the run is reported closed.
