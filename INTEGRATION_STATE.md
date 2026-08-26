# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 13:35 PDT**.

## Branch / baseline

- Wiki publishing branch: `main`.
- Pre-pass wiki baseline: `937995ded443df9d4542ed2ac3ae994b038c01d6` (`Log 12:35 dual-surface wiki integration state`).
- Main-site pre-pass baseline: `bossmugen/underlords@0dbbf0438a487da1b0a4f520c3cc4d2b462318a9` (`Verify curated character biographies instead of mined flows`).
- Previous main dual-surface checkpoint: `bossmugen/underlords@c971f82b85df6e6c2cce0f265b38e76f09908860` (`INTEGRATION_PASS_2026-08-26_1235_DUAL.md`).
- Main-site durable checkpoint for this run: `archive-intake/INTEGRATION_PASS_2026-08-26_1335_DUAL.md`, created at `479f518069516dfe38bea73e72a587e5c0c338c8`.

## Intake result

No completed miner handoff changed after the 12:35 dual-surface checkpoint. A compare from main checkpoint `c971f82b85df6e6c2cce0f265b38e76f09908860` to pre-pass main head `0dbbf0438a487da1b0a4f520c3cc4d2b462318a9` is 14 commits ahead but contains **no changed `archive-intake/*` handoff path**.

Therefore there is no new completed manifest, findings file, receipts packet, people/motif note, timeline/site candidate, rabbit-hole file, or hidden completed miner state to consume. Incomplete miner work was skipped safely and was not re-mined.

The intervening main-site commits are editorial / component / verification work, not archive-miner handoffs. The current head explicitly verifies curated Character biographies and rejects letting miner-flow headings dictate public biography order.

## Current cross-surface ownership

The August 26 website-first consolidation remains the active architecture:

- the **main Underlords site is the canonical public universe**;
- CHARACTERS owns the canonical person story;
- CHRONICLE owns the single public chronology;
- LORE owns incidents, recurring bits, relationships, rituals, rooms, orders, vocabulary, legends, and synthesis;
- ARCHIVE owns relics, screenshots, media, rooms/exports, and source trails;
- the wiki remains the long-form **reference mirror / companion**, not a competing canonical editorial universe.

The wiki may retain deeper dossiers, episode lookup, relationship indexing, legends, relics, quotes, locations, and continuity support when that extra layer adds value without duplicating the main site's full explanation.

The main site's current curated-biography direction reinforces this split: Character pages may deliberately shape the public narrative from canon + evidence rather than replay miner handoffs in excavation order. The wiki should preserve useful dossier/reference depth, but it should not mechanically mirror each main-site editorial rewrite as a second essay.

## Accepted cross-surface state retained

- Mia's deep dossier remains the owner of the June–July 2023 communal-art behavior analysis inside the reference layer.
- **Doodles Part 2: Bananas** remains the concise 2023 Episode lookup treatment.
- The quote index retains Mia's `It funny` Wall ruling.
- PR / Slice / Character secondary handoffs remain one derivative evidence family rather than independent corroboration.
- Existing wiki reference material is preserved unless the main site supplies a stronger canonical explanation; future integration should cross-link or index rather than create two competing essays.

## Conflicts / rabbit holes held

Still unresolved and not promoted as fact:

- eyelash-banana maker / post / callback chain;
- tomato, Halloween, hand-turkey, and finger-art object-to-message joins;
- exact weekly-planner context;
- exact August 2026 `UL history short film in the works ahahahah` speaker attribution.

## Public changes this pass

No wiki lore, biography, Episode, relationship, Legend, quote, location, relic, or other public data changed because no new completed miner evidence landed.

This file is the wiki's durable 13:35 integration checkpoint only.

## Main-site concurrent work observed

Fourteen main-site commits landed after the previous integration checkpoint without touching miner handoffs. They are preserved as concurrent canonical-site development rather than treated as evidence intake. The current head's verifier now checks curated Mugen, Snow, Gabu, Ren, and Newmal profile structure and explicitly states that miner flows no longer define public bio order.

That editorial implementation does not need a parallel wiki content rewrite merely because the main Character presentation changed.

## Verification / deployment

The main report commit and this wiki state commit are subject to their repositories' existing push-triggered verification/deployment workflows. Main must pass source verification, Astro build, built-output verification, and its Cloudflare deployment checks. Wiki must pass its existing Astro build and GitHub Pages workflow. No extra verification stage is invented and no failed gate is treated as success.
