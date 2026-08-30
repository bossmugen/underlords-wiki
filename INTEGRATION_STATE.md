# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-30 10:55 PDT_

## Current reconciliation boundary

The wiki is the long-form reference companion to `bossmugen/underlords`, not a competing lore system. The project-wide lower evidence threshold remains binding: hard canon, resolved identity, privacy/safety, contradictions, and exact attribution fences stay hard; strong contextual human reads are publishable when the surrounding evidence makes them more likely than not.

### Shared miner census

- **49 tracked miner identities** = **28 active remote refs + 21 historical/missing refs**.
- **0 newly discovered** at the fresh census; all 28 live miner heads matched their recorded `last_seen_sha` values.
- **0 finite pending / 0 backlog / 0 review-overdue**. Whiskey remains one reviewed finite **publication block**, not unread evidence.
- Core remains reviewed/consumed through `0e8081e48d429f258a2bf55287199c148a605f66`.
- Mugen person-first remains reviewed/consumed through `40999910f14f13d36a9cc578e555dd73030d01f4`.
- Both Club-Only recovery branches remain consumed/current.
- Wall forward review remains current through `95b37861d93d4959a74a1f5e2c66b369c22269ec`. Formal Wall `last_consumed_sha` remains null while its older cumulative recovery floor is open.
- Historical Wall recovery is now safely reviewed through the exact bounded **2026-08-26 06:46** handoff (`f7d40e43b7fd4813cc4feeb5e580aee558ae8dc1 -> 0804bae092332effa577522d92f118644f20609f`). **07:46 is next.**
- No miner branch was merged or wholesale cherry-picked into a publishing branch.

## This pass — Wall 04:46 → 06:46

The exact bounded **04:46** and **05:46** Wall handoffs were reviewed checkpoint-first and intake-only. Both are explicit negative-novelty passes: no A/B public candidate, no new receipt, no new identity/origin/mechanism, and no reason to breed a public page merely because an hourly package exists. Those deltas are now durably cleared and should not be reread as pending work.

The **06:46** package finally moved the story. Rich tells Gilli on July 11, 2022, `I think you may have to go tuck your pebble into bed better`; Gilli later answers `Lol @Ricochet`. The later 2023 profile already establishes Pebble as one item in Gilli's self-catalogued `Emotional Support Collection`. The useful new hinge is Rich's **`your pebble`**: before the later profile turned the joke into a visible taxonomy, another member was already treating Pebble as Gilli-associated enough to assign her mock bedtime duty.

That does not resolve who Pebble was, who coined the label, when it was assigned, or whether the bedtime line refers to any literal real-world caretaking. It does make the Collection feel less like a static About Me list and more like something people were already performing socially. The joke had household logistics before it had a catalog.

A possible earlier April 15, 2021 antecedent remains held: Gilli says `OwO go to whiskey`; seven seconds later Ren says `*yes pebble*`. It is not a stored reply and has no safe referent. A later Baby Lyssa tag does **not** prove Baby Lyssa = Pebble. Ryan X's unrelated `like pebble and yeet you` is an ordinary simile, and Mia's later `gili a jewel` praises Gilli rather than resolving the Collection noun `Jewel`.

### Public ownership

- **WIKI Cast / Gilli dossier:** `src/data/character-biographies-gilli.ts` now owns the July 2022 pre-catalog Pebble behavior inside Gilli's 2022 chronology. This is a person/relationship-joke development, not a standalone Episode.
- **MAIN:** the same evidence would fit the existing rich Gilli `Emotional Support Collection` biography section, but MAIN's required workflow is currently failing before runner allocation. The reader-facing MAIN version is intentionally held rather than bypassing its verification gate.
- The 04:46 and 05:46 negative passes produced no public change on either surface.

## Recent public integrations preserved

- **FireLegacy Speed-Runs Her Old Rank Stack** keeps FireLegacy's own period-role recollection as lived history, without back-dating exporter/current role arrays.
- **FireLegacy Sends Three Ranks Through the Front Door** keeps the tightly clustered FireLegacy visitor wave as probable socially linked traffic without inventing an inviter, alliance, transfer cohort, migration, or recruitment drive.
- **You Can't Shame Me If I Shamed Myself First** remains the cross-year self-filing owner; Snow is earliest surviving direct wording recovered, not origin.
- **Xuseio's Phone Becomes a Snitch** remains the Jan. 2, 2024 Co-Star callback owner; POSTED BY is not MADE BY / CAPTURED BY / FEATURING.
- **The Screenshot Isn't Even Here Yet** retains Mugen's probable `Owo my favee` recognition/rating beat after Korea threatens to find the missing pineapple screenshot; no unseen pixels or sexual-preference claim were invented.
- **Mugen Saves LilithEl 'On Vacation'** keeps the direct return/reassurance scene while exact implementation and LilithEl's Staff-role assignment remain unresolved.
- ShiyaX's recurring account-intruder alibi stays banked for the richer person owner rather than spawning repetitive Episodes.

## Holds / hard rails preserved

- Historical Wall: safely through **06:46**; exact bounded **07:46 next**.
- **Pebble identity remains unresolved.** The 2022 `your pebble` line proves live Gilli-associated use, not identity, coinage, assignment date, literal ownership, guardianship, parenthood, dependency, or a formal role.
- Possible 2021 `*yes pebble*` antecedent remains unjoined.
- Remaining unresolved Gilli Collection nouns: **Apple, Empress, Tree, Jewel, Pillow, Fire**. Pond -> DyingFox, Pie -> Cele, and Pizza Dough -> Trebach are safe identity bridges only where already established; exporter/current nickname state does not date assignment.
- `Panda and panda`, `B.O.B CRIIIIMME`, ring / `Lord of the Shorts`, Ghostt's daily phrase, Zhēnxī's pre-welcome image, prior Rummy body-snatches, Cookie ear target, Ansun ants, and opening-night Tag Yourself artifact remain unresolved where direct joins/media are required.
- FireLegacy: self-reported period roles only; no invented appointment sequence from exporter role arrays.
- `STAFF VACATION`: role/status concept confirmed; exact LilithEl Staff assignment remains unresolved.
- Snow self-shame: earliest surviving direct wording, **not origin**.
- `sycessences` / `ƐℲı˥` remains hard-resolved to **Sye/Life, not Effie**.

## Verification / deployment

The Gilli dossier change and this durable state update are committed on WIKI `main` and must pass the repository's existing native **Build Underlords Wiki** and Pages/deploy workflows on the exact final head before this pass is considered fully published. MAIN remains independently gated by its own source verification, Astro build, built-output verification, and Cloudflare deploy workflow; the current MAIN failure mode is pre-runner infrastructure, not a demonstrated source/build failure.
