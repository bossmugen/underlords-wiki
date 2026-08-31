# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 07:06 PDT_

This is the current durable dual-surface reconciliation snapshot. Earlier run detail remains in Git history and MAIN's dated `archive-intake/INTEGRATION_PASS_*` reports.

## Current boundary

The public biography rule remains binding: **the person is the spine; events are supporting scenes; the archive stays backstage.** MAIN gets rich person/legend writing. WIKI gets character-rich searchable dossiers plus Episodes, Relationships, Running Gags, Quotes, Locations and Gallery/reference structure. `Petty Crimes` is the public catch-all section name; never `Trivia`.

Hard user canon, resolved identities, privacy/safety, explicit contradictions, appointment chronology and attribution fences remain hard. Strong ordinary-life, relationship, humor, habit, emotional-subtext, care-pattern, reputation, social-role and cumulative character reads may publish when the surrounding material makes them more likely than not.

- **Run 63 census:** 49 tracked miner identities = 28 active refs + 21 historical/missing; 0 newly discovered; 0 finite pending review after close; 0 backlog; 0 overdue; Wall remains the one recovery-open branch.
- Both **Club-Only** recovery targets remain consumed/current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **All Characters HR** Run 50 was reviewed checkpoint-first through late closing head `2647dc449ce752d15dea6613e93125c1b22fb940`. Its Anthos, Daya, Oyasumi, Snow, Ren, Sye, Gilli and Moon synthesis consolidates scenes already on current public person pages. No duplicate public paragraphs were added; the branch is consumed through that head as successful no-public-change review.
- **Daycare** was reviewed through `46eb2d160c760692e28caaf58bc964bd2f23e521`. The genuinely new keep is Nobu's cumulative person arc: terse Daycare boundaries in 2022, later `Quit aging` / `smol platelet` nostalgia, then her 2024 self-reply to her old intake as a high-context return callback. WIKI now folds this into Nobu's structured character dossier rather than making a standalone Episode. Formal MAIN consumption remains pinned at `fccd131e47c0a03018ca3cecfcecbe8ebdd5b703` because MAIN's verifier still does not execute; this also preserves the older Mia verification hold.
- **Mugen person-first** was reviewed through `44857564d4b3d6bda5e7a2f0cad6df0492b07e9b`. The fresh small keep is `satellite wife`: Mugen misreads Nelph's `satellite WiFi`, Nelph immediately answers `I MEANT WIFI😭`, sharpening competence-without-omniscience and ordinary correction texture. Concurrent WIKI work already integrated this at `ed81d5d2befed6b2203e81b74466346068917792`; it was not duplicated on MAIN in this pass because the existing Mugen biography is already rich and the stronger MAIN holds are older HyaLuna/Daya deepeners. Formal consumed remains `8240054d3d27235ce9da97269fed033c699f9600` while those MAIN changes cannot verify.
- **Wall** is current/consumed through `fd3bacbd1e21a1bf081e25829da7489ed171c43c`; its active-recovery checkpoint was rechecked and no later suffix existed during this pass.
- **Core Rooms** remains reviewed through `6da0509a792f6c9d3c7fb36a81207a64c71d2299`; formal MAIN consumption remains `c9b33dca5df5fe46b8594a999ac888253a1ff27f` behind verifier failure.
- **Whiskey** remains reviewed through `126ea76ae58e19f71b003ee626cb47e5d23c1548`; formal MAIN consumption remains `e381584248426262d36f254ca275151bdaf69dd9` behind the older accepted Sye/Life MAIN hold.
- No miner branch was merged or wholesale cherry-picked; no raw archive was re-mined.

## Public work — Run 63

### Nobu / Xuseio

WIKI's Nobu biography now uses the Daycare material as a person-shaped contradiction instead of another incident pile. In 2022 she can settle a boundary with `No cursing, this the daycare.` and `No drunk texting, this is a daycare.` In 2024 the same compact voice says `Quit aging. You make me feel old. Last I recall you a smol platelet.` Then, when the Lobby bot asks for another introduction, Nobu replies `jes.` to her own old intake while familiar people welcome her back.

The structured read is **short rule line / long social memory**. It complements rather than mirrors MAIN: WIKI keeps the chronology, relationship anchors and searchable role facts; MAIN turns the same source family into a richer lived biography.

### Mugen `satellite wife`

WIKI also retains the small Mugen/Nelph Petty Crime already published immediately before this pass. The useful joke is not generic carelessness. Mugen can remember people and callbacks across years and still fail the object directly in front of her by reading `satellite WiFi` as `satellite wife`. Nelph's `I MEANT WIFI😭` also gives ordinary correction-without-ceremony texture around Boss.

Hard boundary: this is Mugen's misread, not evidence about Nelph's relationship, household, location, farm, occupation or private life.

## Duplicate / hold decisions

- All Characters Run 50 is consumed without public mutation because the miner itself reconciled its eight source scenes against current public person pages and found them already present. Snow's current public page was spot-checked and already carries the exact permissions/VC contradiction. Rewriting eight people again would be integration-by-echo.
- Daycare's secondary `paperwork becomes lore` mechanism is supporting onboarding/history texture only. It was not promoted into a new standalone Wiki Episode.
- The unresolved person addressed by Nobu's `smol platelet` line stays unresolved. No identity was inferred from adjacency.
- Mugen `satellite wife` remains WIKI-only for this pass; MAIN already has a very rich Mugen biography and the new beat is a small contradiction/Petty Crime rather than a reason to staple another report paragraph onto her.
- Gabu remains she/her. Sye/Life is not Effie. Rich is not resolved Ricochet/`dragonrichard`. Snow was never formal #2.

## Verification / publication

- WIKI reader commit `0634bf71dc557ebb26677e8e227e6e07cebc8542` rewrote Nobu's structured dossier around the Daycare continuity arc.
- **Build Underlords Wiki** run `33400358382`: success.
- **Deploy Underlords Wiki Preview** run `33400358530`: success. Pages deployment completed for the same reader head.
- MAIN reader commit `21f6b7bd7c497bfea4e430f9b4d9992705b06534` rewrote Nobu into a rich person-first biography, but MAIN `UL Hourly Build + Deploy` run `33400292654` failed before executable build steps on attempt 1 and again after an explicit `Build + verify` job rerun; deployment was skipped. This is an infrastructure gate failure, not a reported source/build test failure.

## Next integration boundary

Start from MAIN `archive-intake/INTEGRATOR_BRANCH_STATE.json`. Review only miner movement beyond recorded consumed heads. Wall remains recovery-open. The finite review queue is empty at this snapshot; Core, Daycare, Mugen and Whiskey are publication-blocked solely because MAIN's required verification gate has not executed successfully.
