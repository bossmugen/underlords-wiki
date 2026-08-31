# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 01:56 PDT_

This is the current durable dual-surface reconciliation snapshot. Earlier run detail remains in Git history and MAIN's dated `archive-intake/INTEGRATION_PASS_*` reports.

## Current dual-surface boundary

The lower-evidence rule remains binding, with the new character-biography correction now explicit: **the person is the spine; events are supporting scenes; the archive stays backstage.** Public biographies should read like fandom character pages about somebody the house actually knew, not research summaries explaining what each receipt did or did not establish. Mugen / Mugs is the structural reference. Small person-level lore goes under **Petty Crimes**, never Trivia.

Hard canon locks, resolved identities, privacy/safety, explicit contradictions, appointment chronology, and attribution fences still stay hard. Strong ordinary-life, relationship, humor, habit, emotional-subtext, care-pattern, social-role, and cumulative character reads may publish when the surrounding material makes them more likely than not.

- **Full census:** 49 tracked miner identities = 28 active remote refs + 21 historical/missing refs; 0 newly discovered; 0 backlog; 0 review-overdue.
- Both **Club-Only** recovery targets remain consumed/current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **Wall** was reviewed checkpoint-first through `f229eebe3763e8c392a5b2912965043fd94e8cfa`; its newest material was mostly already owned by the concurrent Run 50 Wall/person integrations, so this review closes that delta without manufacturing duplicate incidents. Wall remains an active recovery source only because future deltas can still arrive.
- **Mugen person-first** was reviewed through `a7ff06d4e577c1be0c16b43bb253271de002f087`. Thanksgiving gratitude was already published by the concurrent integration; the Nhou cursed-café exchange remains a good Petty Crimes / relationship-texture candidate rather than a reason to add another event paragraph.
- **Whiskey** was reviewed through `2974f6a66b26940a654b5889cd33294c21e8787c`. Its fresh public keeper is LEXI; older accepted Sye/Life MAIN material remains publication-blocked, so Whiskey's formal consumed SHA stays behind the reviewed frontier until MAIN can pass its own gate.
- Closing census still has finite review work on **All Characters**, **Core Rooms + Events**, and **Louvre / AI Art / Athenaeum / Other Games**. None is overdue; anti-starvation remains active for the next pass.
- No miner branch was merged or wholesale cherry-picked into either publishing branch. No raw archive was re-mined.

## Run 51 — The biographies stop talking like the evidence clerk

The public bio standard was corrected at the source instead of merely sanding a few phrases off individual pages. `CHARACTER_BIOGRAPHY_STANDARD.md` and `src/data/bio-policy.ts` now make the person the organizing spine: temperament, social style, reputation, relationships, contradictions, recurring behavior, tastes, habits, care patterns and change over time come first. Chronology connects those things; it does not automatically become the chapter structure. Provenance, confidence grades and anti-fanon housekeeping remain in the support layers where they belong.

### Alkey: hockey spouse, good timing, affection with teeth

Alkey's biography was rewritten rather than patched. The new version keeps the real hockey background front and center — Canadian, has coached hockey, also describes himself as a hockey official, discusses skates/rink life, and says `I'm married to hockey` / asks whether he can legally marry it — but stops treating each dated scene as a separate evidentiary exhibit.

The actual character spine is timing and social flexibility. His name can become peasant Alkey, officer Alkey, Sexy Alkey, horni Alkey, Batman Alkey, Alkitty, Nobu-as-Alkey or even an `:alkey:` emote and he often helps keep the mutation alive. Two chickens and crossed swords become `cock fight achieved`; Mugen gets popcorn; Alkey bows with `I aim to please`. Baby Lyssa says he saw nothing and he answers `i` / `saw` / `all` in separate bubbles. Aisha lands a comeback and he simply says `got me good`. The page now treats those as one recognizable social instinct rather than a year-by-year joke ledger.

Fresh Whiskey also adds a different temperature. LEXI and Alkey repeatedly use affection wrapped in mock aggression, culminating in `I have to go now I love you idiot` / `I love you too shorty`. The public read is comfortable reciprocal affection and teasing, not romance. It belongs in Alkey's character page because it shows how his timing and easy banter behave when the room gets warmer.

### LEXI: aggressively nice, anime in the bag, one smudged note

LEXI now has a dedicated person-first biography instead of only a dossier-shaped archive appendix. Her strongest recurring trait is uncomplicated public care: Valentine's greetings, a handwritten good-day note she sends despite smudging the ink, and `love you all be safe, know that you are loved and you are worth it.` The page lets that coexist with the house dialect rather than flattening her into Nice Person. With Alkey, tenderness arrives as `idiot` / `shorty`; the insult is packaging, not cancellation.

Her Petty Crimes are appropriately small and specific: she loves Sword Art Online: Alicization, is fluent enough in anime/2D-character language to joke about it casually, and forgot her Japanese pens needed drying time until after the note had already smeared. `mugen invited me` is used as social-entry texture: Mugen opens the Discord-side door, LEXI makes herself at home. It is not promoted into a fake game-club admission chronology.

### Mugen and Wall reconciliation

Mugen's newest miner suffix mostly repackaged a Thanksgiving character synthesis already published by concurrent work: gratitude should be said, invisible Officer labor deserves recognition, and the entire sincere speech still ends with `Your resident plutonian dumdum 👽`. The smaller fresh Nhou beat is excellent character texture — cursed question, Nhou turns it into café service, Mugen adds `extra foam too` — but it belongs in Petty Crimes / dyad texture when the Mugs page next needs a human-scale insert, not as a standalone incident.

The Wall delta through `f229eebe...` was also reviewed rather than reread forever. Sou's Fame self-mythology, Ren/Gilli mint-chocolate socks, Bailey's `Someone take my phone away pls`, and related Wall material were already being integrated by the concurrent Run 50 path. This pass treats those as duplicate/corroboration families rather than spawning parallel copies.

## Verification / publication

The reader head `c26b9bd4567ec240f4e0d1edbd3581bcbb6086b3` routes the rewritten Alkey biography and the new LEXI biography into the public character resolver. **Build Underlords Wiki `33375116180` succeeded** and **Deploy Underlords Wiki Preview `33375116186` succeeded**, including the Pages deployment.

This state commit must itself pass the repository's existing Build / Pages workflows before Run 51 is fully closed.

## Existing hard holds

- **Rich / DragonRich is not collapsed into unresolved Ricochet / `dragonrichard`.** A direct bridge is still required.
- **`sycessences` / `ƐℲı˥` = Sye/Life, not Effie.**
- Snow was not formally second-in-command / #2.
- MAIN's Snow biography still owes the direct Wall correction from ShiyaX to **Sou/Ansun** for the screenshot invitation; WIKI already carries the correct attribution.
- Exact Officer appointment chronology is never inferred from exporter-time role arrays.
- Joke family / romance roles remain jokes unless separately confirmed.
- LEXI / Alkey's reciprocal `I love you` language is affectionate relationship texture, not an automatic romance label.
- `mugen invited me` is a social-entry receipt for LEXI; it does not by itself create an exact in-game admission chronology.
- SAID BY / POSTED BY / VIA-SOURCE / CAPTURED BY / MADE BY / FEATURING remain distinct.

## Surface split

WIKI owns the fresh reader-facing work in this pass: the project-wide bio policy correction plus Alkey and LEXI's person-first character pages. MAIN intentionally receives no new reader prose while its mandatory verification workflow still fails before acquiring a runner. The same Whiskey material can later enrich MAIN only in MAIN's own biography voice rather than by copying the WIKI text verbatim.
