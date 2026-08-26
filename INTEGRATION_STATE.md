# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 12:35 PDT**.

## Branch / baseline

- Wiki publishing branch: `main`.
- Pre-pass wiki baseline: `b5c9be5bb220027c414dbb3ad4ce8f2906419634` (`Log 11:35 dual-surface wiki integration state`).
- Main-site pre-pass baseline: `bossmugen/underlords@34b95d0f183fc4ba14ca9afa1f1ca58417860153` (`Detect Cloudflare Pages production branch from project config`).
- Previous main dual-surface checkpoint: `bossmugen/underlords@ea3e6dcf4b5d31232f7035406c3f3e5882bfb631` (`INTEGRATION_PASS_2026-08-26_1135_DUAL.md`).
- Previous wiki checkpoint was this file at `b5c9be5bb220027c414dbb3ad4ce8f2906419634`.

## Intake result

No completed miner handoff changed after the 11:35 dual-surface checkpoint. A compare from main checkpoint `ea3e6dcf4b5d31232f7035406c3f3e5882bfb631` to the pre-pass main head `34b95d0f183fc4ba14ca9afa1f1ca58417860153` contains exactly one changed file, `scripts/deploy.mjs`, and no `archive-intake/*` handoff path.

Therefore there is no new completed manifest, findings file, receipts packet, people/motif note, timeline/site candidate, rabbit-hole file, or hidden completed miner state to consume. Incomplete miner work was skipped safely and was not re-mined.

## Current cross-surface ownership

The August 26 website-first consolidation remains the active architecture:

- the **main Underlords site is the canonical public universe**;
- CHARACTERS owns the canonical person story;
- CHRONICLE owns the single public chronology;
- LORE owns incidents, recurring bits, relationships, rituals, rooms, orders, vocabulary, legends, and synthesis;
- ARCHIVE owns relics, screenshots, media, rooms/exports, and source trails;
- the wiki remains the long-form **reference mirror / companion**, not a competing canonical editorial universe.

The main repository's previously stale `SITE_ARCHITECTURE.md` was aligned during this pass with the already-current consolidation plan and `src/lib/site-architecture.ts`. That is architecture repair, not new lore.

The wiki may retain deeper dossiers, episode lookup, relationship indexing, legends, relics, quotes, locations, and continuity support when that extra layer adds value without duplicating the main site's full explanation.

## Accepted cross-surface state retained

- Mia's deep dossier remains the owner of the June–July 2023 communal-art behavior analysis inside the reference layer.
- **Doodles Part 2: Bananas** remains the concise 2023 Episode lookup treatment.
- The quote index retains Mia's `It funny` Wall ruling.
- PR / Slice / Character secondary handoffs remain one derivative evidence family rather than independent corroboration.
- Existing wiki reference material is preserved unless the main site supplies a stronger canonical explanation; future integration should cross-link rather than create two competing essays.

## Conflicts / rabbit holes held

Still unresolved and not promoted as fact:

- eyelash-banana maker / post / callback chain;
- tomato, Halloween, hand-turkey, and finger-art object-to-message joins;
- exact weekly-planner context;
- exact August 2026 `UL history short film in the works ahahahah` speaker attribution.

## Public changes this pass

No wiki lore, biography, Episode, relationship, Legend, quote, location, or relic content changed because no new completed miner evidence landed.

This file is the wiki's durable 12:35 integration checkpoint only.

## Main-site deployment change observed

The main site's Cloudflare deployment path materially improved between checkpoints. Commit `34b95d0f183fc4ba14ca9afa1f1ca58417860153` changed deployment detection to read the Cloudflare Pages project's configured production branch directly. On its verified workflow run, source verification, Astro build, built-output verification, credential validation, deployment, and exact live-commit verification all passed.

That operational repair is not wiki lore, so it is recorded here only as cross-surface state rather than mirrored into public wiki content.

## Verification / deployment

The wiki's pre-pass `main` head was already the successfully deployed 11:35 state. This state update is subject to the repository's existing push-triggered Astro build and GitHub Pages deployment workflows; no extra verification stage is invented beyond what this repository actually provides.
