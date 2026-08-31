# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 06:31 PDT_

This is the current durable dual-surface reconciliation snapshot. Earlier run detail remains in Git history and MAIN's dated `archive-intake/INTEGRATION_PASS_*` reports.

## Current boundary

The public biography rule remains binding: **the person is the spine; events are supporting scenes; the archive stays backstage.** MAIN gets rich person/legend writing. WIKI gets character-rich searchable dossiers plus Episodes, Relationships, Running Gags, Quotes, Locations and Gallery/reference structure. `Petty Crimes` is the public catch-all section name; never `Trivia`.

Hard user canon, resolved identities, privacy/safety, explicit contradictions, appointment chronology and attribution fences remain hard. Strong ordinary-life, relationship, humor, habit, emotional-subtext, care-pattern, reputation, social-role and cumulative character reads may publish when the surrounding material makes them more likely than not.

- **Closing census:** 49 tracked miner identities = 28 active refs + 21 historical/missing refs; 0 newly discovered; 2 finite pending reviews; 0 backlog; 0 overdue. The pass reviewed All Characters, Wall recovery and Mugen person-first, then a final sweep caught **post-review movement** on All Characters and Mugen. Their new heads are already registered in MAIN branch state rather than being allowed to disappear between runs.
- Both **Club-Only** recovery targets remain consumed/current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **All Characters HR** was reviewed/consumed through `2d53f2a5538971f6d563cd599e8351a36d2b0a02`. That reviewed Run 49 packet was duplicate/corroboration or already-public material around Nelph, Rummy, Shiki and Gabu. The branch then moved again after review to `d4e8e7688939a4bf72ea21060117360c6b326533`; only that fresh suffix remains `pending_review` for the next checkpoint-first pass.
- **Wall** recovery was reviewed from `f2f019bf40fd17549fc62fc8a63b04f46bf7e40b` through `fd3bacbd1e21a1bf081e25829da7489ed171c43c`. The genuinely new public keep is the reputation shift around Rummy: Ricochet's 2022 `Our little rummy first cuss` / `They grow up so fast` framing becomes Gilli's 2024 `Rummy level` severity scale and Momo being desensitized to `what rums says`. WIKI publishes this as the Running Gag / Legend **Rummy Level**. The same Wall suffix also adds Daya/Mugen absence-preservation texture around `I'm in the middle of a mountain, send ss`; that evidence family is collapsed with the Mugen-person-first handoff instead of being published twice. Wall is consumed/current through `fd3bac...` and remains recovery-open for future suffixes.
- **Mugen person-first** was reviewed through `3ae68c87c7486bcdd0987981762221d43d79b4c9`. Its strongest new read is that HyaLuna was already inside Mugen's private deliberation loop before the April 11, 2020 ScarletMoon offer reached wider leadership: Mugen says she and HyaLuna discussed it the night before, then opens the issue to the room for pros/cons. Current WIKI HyaLuna already carries that lived relationship correctly, so no duplicate WIKI biography prose was added. The Daya mountain screenshot request is the same evidence family surfaced by Wall. The branch then moved again after review to `9a3796f13d41d08db9bf8d72537873d5949c9739`; that new suffix is registered `pending_review` for the next pass. The older MAIN-Mugen publication hold remains separate, so formal consumed still stays at `8240054d3d27235ce9da97269fed033c699f9600`.
- **Core Rooms** remains reviewed through `6da0509a792f6c9d3c7fb36a81207a64c71d2299`; formal MAIN consumption stays pinned at `c9b33dca5df5fe46b8594a999ac888253a1ff27f` while accepted MAIN Nelph work cannot clear MAIN's mandatory verifier.
- **Daycare** remains reviewed through `fb8555f17219773af57a26514adc911d9f768a4e`; formal MAIN consumption stays pinned at `fccd131e47c0a03018ca3cecfcecbe8ebdd5b703` behind the older accepted Mia verification hold. Gabu remains she/her; an isolated miner masculine pronoun is a typo, not canon movement.
- **Whiskey** remains reviewed through `126ea76ae58e19f71b003ee626cb47e5d23c1548`; formal MAIN consumption stays pinned at `e381584248426262d36f254ca275151bdaf69dd9` because older accepted Sye/Life MAIN work remains publication-blocked.
- No miner branch was merged or wholesale cherry-picked; no raw archive was re-mined.

## Public work — Run 61

### Rummy Level

WIKI's Legends surface now preserves a very UL kind of reputation arc. In March 2022 Ricochet treats an alleged Rummy cuss as mock coming-of-age and Mugen answers with the crying-cat reaction. By August 2024 Gilli can simply say `Rummy level` about somebody else's offense and expect the room to understand the unit. By December Momo says she is desensitized to `what rums says`. The joke has stopped being only about what Rummy did and become a calibration tool for what everybody else does.

This went to WIKI rather than being forced into MAIN while MAIN's verifier is dead. A future MAIN Rummy pass can fold the same reputation shift into her person-first bio instead of mirroring the Legend copy.

## Duplicate / hold decisions

- All Characters Run 49 through `2d53f2...` is consumed as duplicate/corroboration; its strongest material already lives publicly. Its later `d4e8e7...` suffix is merely registered pending, not silently treated as reviewed.
- HyaLuna's Mugen sounding-board scene is already correctly integrated into the current WIKI HyaLuna dossier, so it was not republished under Mugen as a second version of the same relationship beat.
- Daya's `caught in 4k` / Mugen `middle of a mountain, send ss` sequence is one shared evidence family across Wall and Mugen handoffs. WIKI did not turn it into a thin Episode. MAIN Mugen is the richer eventual owner once MAIN can verify again.
- The fresh Rummy reputation sequence belongs naturally on WIKI's searchable Legends surface now; MAIN can later synthesize it into Rummy's lived reputation without copying the same prose.

## WIKI verification / publication

Reader commit `225c564e30423bc8536d775041f735e0db2f67c0` added **Rummy Level** and wired it into the existing Legends page.

Exact-reader-head checks:

- **Build Underlords Wiki `33396244531` — SUCCESS**
- **Deploy Underlords Wiki Preview `33396244581` — SUCCESS**

The first durable-state head `7f704701dc7a6432eaad946e9f3b5cb4276b80bd` also passed its exact-head build and Pages deployment. This closing state update exists only to register the two late miner heads caught after that state was written.

## MAIN publication status

No new MAIN reader prose was added in Run 61. The mandatory census commit `e1c21a0836a459d7880ea0d826c3cb67fb3528f5` triggered `UL Hourly Build + Deploy` run `33395250217`; attempt 1 failed before `Build + verify` received executable steps, and one explicit failed-job rerun produced the same pre-execution failure. The later Run 61 state head reproduced the same empty-job failure shape. Source verification, Astro and built-output verification therefore did **not** run and diagnose bad source; the runner failed before the checks existed.

The accepted/held MAIN queue remains explicit instead of being quietly marked done: Core/Nelph, Daycare/Mia, Whiskey/Sye-Life cleanup, and Mugen/HyaLuna + Daya absence-preservation deepeners. MAIN was not force-published around a dead verifier.

## Hard holds

- **Rich / DragonRich is not collapsed into unresolved Ricochet / `dragonrichard`.** A direct bridge is required.
- **`sycessences` / `ƐℲı˥` = Sye/Life, not Effie.**
- Snow was not formally second-in-command / #2.
- MAIN still owes the direct Wall screenshot-invitation attribution correction from ShiyaX to **Sou/Ansun** once its verifier can actually run.
- Exact Officer appointment chronology is never inferred from exporter-time role arrays.
- Joke family / romance language remains joke language unless separately confirmed.
- Candy / later Luna remains distinct from HyaLuna.
- WhitePhoenyx = Xephy and is not WolfPhenix.
- Gabu is a woman.
- SAID BY / POSTED BY / HOSTED BY / VIA-SOURCE / CAPTURED BY / MADE BY / FEATURING remain distinct.
