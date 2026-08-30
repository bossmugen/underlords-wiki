# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-30 11:13 PDT_

## Current reconciliation boundary

The wiki is the long-form reference companion to `bossmugen/underlords`, not a competing lore system. The project-wide lower evidence threshold remains binding: hard canon, resolved identity, privacy/safety, contradictions, and exact attribution fences stay hard; strong contextual human reads are publishable when the surrounding evidence makes them more likely than not.

### Shared miner census

- **49 tracked miner identities** = **28 active remote refs + 21 historical/missing refs**.
- **0 newly discovered** at the opening census.
- **0 finite pending / 0 backlog / 0 review-overdue** after this pass. Whiskey remains one reviewed finite **publication block**, not unread evidence.
- `archive-miner/all-characters-hr-20260828` is reviewed/consumed through `ef6101b4bf4da030f4a76438c6bc8e7239af7f3a`.
- Both Club-Only recovery branches remain consumed/current: `archive-miner-clubonly-2020-hourly` through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`, and `archive-miner/club-only-2021-2026-hourly` through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Wall forward review remains current through `95b37861d93d4959a74a1f5e2c66b369c22269ec`. Formal Wall `last_consumed_sha` remains null while its older cumulative recovery floor is open.
- Historical Wall recovery is safely reviewed through the exact bounded **2026-08-26 07:46** handoff (`0804bae092332effa577522d92f118644f20609f -> e0995afa90ed287a7a87de6b4b27b6541365a7bf`). **08:46 is next.**
- No miner branch was merged or wholesale cherry-picked into a publishing branch.

## This pass — All Characters + Wall 07:46

### Dyingfox: `Gilli's Pond` finally gets a social neighborhood

The All Characters delta `0a1ebf6b6eb7a951b1154e04c20f6f7c65b63c10 -> ef6101b4bf4da030f4a76438c6bc8e7239af7f3a` materially strengthens Dyingfox's old display `DyingFox(Gilli's Pond)`. Gilli's April 2023 About Me explicitly opens an **`Emotional Support Collection`** and lists `Pebble`, `Apple`, `Empress`, `Pond`, `Tree`, `Jewel`, `Pie`, `Pizza Dough`, `Pillow`, and `Fire`. Separate stable-account evidence gives Cele the display `Gilli's Pie` and Trebach `Gilli's Pizza Dough`.

Taken together, the surrounding evidence makes it more likely than not that Dyingfox's **Pond** label occupies the same affectionate object-name ecology rather than being an unrelated one-off nickname. The wiki now carries that read naturally inside Dyingfox's person-first biography instead of leaving `Gilli's Pond` as a mystery parenthetical.

The hard boundaries remain: the retrospective profile does **not** establish who coined Pond, the first assignment date, why the object was a pond, literal ownership, kinship, guardianship, dependency, or a ranked relationship. Export/current nickname state is not appointment chronology.

The same All Characters suffix also corroborates Pride as a carrier of the already-established **Boiled Mayo** joke family: after the July 2020 `brought to you by Boiled Mayo Corp.` fake-sponsor wrapper, Pride later drops `boiled Mayo` / `boiled mayo` in ordinary club chat and Ren mutates it into `M a YO` / `It be thick cream`. This is useful Pride texture and phrase propagation, not an origin claim, and it did not need a duplicate public Episode this pass. NemeMoka, SaraBunny, and Yaza produced bounded no-new results in this delta.

### WOO: Shame gets rebranded as Fame

The exact bounded Wall **07:46** package produced one clean person-specific scene. On April 9, 2023 WOO says, `I need to not talk sm I got so much stuff on the hall of shame`. Ten minutes later Moon **true-replies to that exact message** with `No no you famous uwu.` WOO reacts with crying and skull reactions.

The room-wide Shame/Fame history is already established, so the public owner is not another generic culture essay. The wiki now owns the scene as **WOO Diagnoses a Shame Problem; Moon Calls It Fame**: WOO interprets accumulated evidence as a reason to maybe stop talking; Moon refuses the shame diagnosis and converts the same exposure into celebrity; WOO's reaction pair lands as mock defeat. The archive still does not safely identify which older screenshots WOO meant by `so much stuff`, so none were retroactively attached.

The same 07:46 pass narrows but does not resolve WOO's March 2023 `NOBU` / `TRAITOR` sequence. Nobu/Xuseio POSTS two screenshots; Gilli tags WOO; WOO answers `NOBU`, `TRAITOR`, and later `nobu` / `why`. The betrayal joke is strongly localized to those filings, but the image contents remain uninspected. **POSTED BY Nobu/Xuseio** is safe; maker, capturer, internal subjects, and exact offense remain unresolved. That material stays held rather than receiving invented pixels.

## Public ownership

- **WIKI Cast / Dyingfox dossier:** `src/data/character-biographies-dyingfox.ts` now integrates Pond into the Emotional Support Collection ecology while preserving unresolved origin/assignment mechanics.
- **WIKI Episodes:** `src/data/integrator-episodes-20260830-0836.ts` now includes **WOO Diagnoses a Shame Problem; Moon Calls It Fame**.
- **MAIN:** no reader-facing copy from these two findings was added this pass. Dyingfox's richer MAIN biography already has a natural future owner for the Pond ecology, but MAIN's required verification chain has repeatedly failed before runner allocation. The evidence is not rejected; WIKI carries the verified public treatment now, and MAIN may absorb it later in a distinct biography form.
- Pride's Boiled Mayo propagation remains banked/corroborative rather than spawning a redundant public owner.

## Holds / hard rails preserved

- Historical Wall: safely through **07:46**; exact bounded **08:46 next**.
- WOO/Nobu `TRAITOR`: localized to two Nobu-posted screenshots, but exact betrayal/offense remains media-pending.
- **Pebble identity remains unresolved.** The 2022 `your pebble` line proves live Gilli-associated use, not identity, coinage, assignment date, literal ownership, guardianship, parenthood, dependency, or a formal role.
- Remaining unresolved Gilli Collection nouns: **Apple, Empress, Tree, Jewel, Pillow, Fire**. Pond -> DyingFox, Pie -> Cele, and Pizza Dough -> Trebach are safe identity bridges only where established; exporter/current nickname state does not date assignment.
- No identity inference was made from the display `WOO`; it was published as WOO without silently mapping it to Woohyuk, Woosung, or another similar name.
- `Panda and panda`, `B.O.B CRIIIIMME`, ring / `Lord of the Shorts`, Ghostt's daily phrase, Zhēnxī's pre-welcome image, prior Rummy body-snatches, Cookie ear target, Ansun ants, and opening-night Tag Yourself artifact remain unresolved where direct joins/media are required.
- `STAFF VACATION`: role/status concept confirmed; exact LilithEl Staff assignment remains unresolved.
- Snow self-shame: earliest surviving direct wording, **not origin**.
- `sycessences` / `ƐℲı˥` remains hard-resolved to **Sye/Life, not Effie**.

## Verification / deployment

Reader-facing WIKI commit `9756f485dd7e4fb2c50b900b9ce453f73b7271fa` passed the repository's native workflows on that exact head:

- **Build Underlords Wiki** run `33327300649` — **success**.
- **Deploy Underlords Wiki Preview** run `33327300652` — **success**.

This state update must also pass the repository's existing build and Pages/deploy workflows on its exact final `main` head before the pass is considered durably closed. MAIN remains independently gated by its own source verification, Astro build, built-output verification, and deployment workflow; no reader-facing MAIN change is treated as verified unless that chain actually executes and passes.
