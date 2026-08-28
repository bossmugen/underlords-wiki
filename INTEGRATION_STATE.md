# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 14:44 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — Tofu meets the Wall; Whiskey queue closes behind her

### Branch census / queue

- Main-site mandatory opening census enumerated **24 miner branches** before deep review and persisted every current head first.
- Newly discovered branches: **0**.
- Advanced/unconsumed branches encountered across the overlapping 14:30/14:35 integration window were **Daycare** `eb12127ec024ec5db3fb7e9787a529e729b4ab7f -> fa56460c845519c8e8c9496e089ed70245b03f10` and **Whiskey** `cf4f884f34ec5a086f8e26c811fe7fa49a60cfe6 -> e7b3192a8a6d5ba240cf00c7737864e46018ddb9`.
- Club-Only 2021–2026 and Club-Only 2020 remained consumed through unchanged heads and were not reread.
- Anti-starvation recovery rotated to **Wall** at unchanged HEAD `36e85aa2025b030faf43fecd20a315b158debd4c`, advancing durable cumulative recovery into the older 20:46 handoff package.
- The publishing branches were re-read around concurrent edits. No miner branch was merged or wholesale cherry-picked into either publishing branch.
- After the Whiskey review completed, there are **0 pending / 0 backlog / 0 review-overdue discrete miner branches**.

## Daycare delta — reviewed, duplicate publicly

The Daycare checkpoint was read first, then only changed intake-local findings, receipts and site candidates were inspected.

The strongest delta was Oyasumi's chronology: his February 25, 2022 self-introduction includes `Boy what the hell boy`, `IGN: TankHead94`, `Club: Underlords`, while by May 2023 he is personally sending the welcome / Platelet-safety / routing packet to newcomers.

That material was already public on MAIN and WIKI from concurrent integration, including the `TankHead94` doorway and later front-door behavior, so the pass did **not** publish a duplicate version. Athena and Yami remain below the threshold for thin standalone public cards in this delta, and the cause of Kiro's duplicate re-welcome remains unresolved.

Daycare is successfully reviewed and consumed through `fa56460c845519c8e8c9496e089ed70245b03f10` even though this delta required no new public Daycare copy.

## Whiskey delta — Ricochet is already where he belongs

The Whiskey checkpoint was read first, then only the changed 14:01 intake-local handoffs were reviewed.

The new handoff deepens stable account `459696170759880745 / dragonrichard / Ricochet` with ordinary-life material: a family puppy plan, a tank-game comparison to Dragon Raja, `Way to freaking cold for south texas`, an explicitly hypothetical `if i ever get married` reaction, a Family Feud roast clip, and Panda / Marian's `@Ricochet got me my Cheesecake Factory ... (but no cheesecake)` favor receipt.

Novelty check found that WIKI's existing `src/data/dossier-snapshots/ricochet.md` already owns this evidence family with the right boundaries. MAIN does not need a duplicate thin Ricochet biography just to mirror the wiki.

The nearby April 9 ACORYUIE birthday cluster remains unresolved: the available media-preview layer does not technically name ACORYUIE / Cinders / Juniper as Eos's birthday target. Adjacency remains insufficient for a birthday date.

Whiskey is therefore successfully reviewed with no additional public copy and consumed through `e7b3192a8a6d5ba240cf00c7737864e46018ddb9`.

## Wall recovery — 20:46 Tofu package

The Wall checkpoint was read first, then only the older 20:46 findings, receipts and site candidates were inspected.

The new keeper is Tofu's first-week Wall chronology:

- recovered Discord metadata gives the stable Tofu account a **June 20, 2021 server-join timestamp**;
- five days later, **June 25**, Tofu has the earliest Wall post found in the checked surviving Tofu interval, with an attachment that remains visually uninspected;
- on **June 28**, ShiyaX tells Tofu `you’re all over the wall`; Tofu answers `Shiya no I’m scared of the walls`; ShiyaX replies `you better`;
- on **August 27**, a direct reply to one of Tofu's Wall posts reads `OH GOD NO`; Tofu answers `HAHAHAHAHAHA`.

The chronology is useful precisely because the joke lands so fast: Tofu has barely crossed the Discord threshold before the Wall is already both a room she uses and a room she is expected to fear. The archive does **not** convert the June 20 server timestamp into an in-game admission or Staff appointment date, does not promote June 25 into a proven global Wall origin, and does not invent contents for the uninspected attachment.

MAIN owns the richer character scene in `src/content/people/tofu.md`, content commit `ddf9430e5a09d9b745e36b2963cb040543803d4c`.

WIKI owns the compact chronology in `src/data/dossier-snapshots/tofu.md`, content commit `67fbeb76294e5a51d23b4432af877a8c4674ae59`.

## Continuity correction — Dayadream is Daya

Reading current MAIN `CANON_LOCKS.md` exposed a continuity error in the previous Wiki integration state. Current canon explicitly maps **Daya / Dayadream** as the same person, and the existing Daya dossier already carries `Dayadream` as an alias.

The prior rolling state incorrectly said `Dayadream` should not be merged with Daya, and the `Moon Cites the Contract` episode cast filed Dayadream as if she were a separate person. That was wrong.

WIKI `src/data/integrator-episodes.ts` is corrected at commit `6148d84e41bba44fc5879336dfe1b003ace9c365`: the scene now routes to **Daya**, notes that she was posting under the Dayadream alias, and keeps the same anti-fanon limits around the joking marriage contract and `Sushi`/Oyasumi scene-local reference.

The correction changes identity routing, not the social reading of the September 11, 2022 scene.

## Verification / deployment

- MAIN public-content commit `ddf9430e5a09d9b745e36b2963cb040543803d4c` passed workflow **33213440517** end-to-end: source/canon verification, Astro build, built-output verification, Cloudflare deployment and exact-production verification all succeeded.
- WIKI public-content head `67fbeb76294e5a51d23b4432af877a8c4674ae59` passed standalone Astro build workflow **33213483570**.
- The same WIKI content head passed Pages workflow **33213484048**, including Pages build, deploy and report.
- The Whiskey delta required no new public-content commit because its strongest material was already owned by the existing Ricochet dossier; its consumed frontier is recorded in MAIN's branch ledger instead of generating duplicate prose.

## Recovery state after pass

- **Daycare**: consumed through `fa56460c845519c8e8c9496e089ed70245b03f10`.
- **Whiskey**: consumed through `e7b3192a8a6d5ba240cf00c7737864e46018ddb9`.
- **Living Ensemble**: durable reviewed coverage includes Run02–Run09, Run17 and Runs22–26. Runs10–16 and other cumulative gaps remain unswept; `last_consumed_sha` stays **null**.
- **Core Rooms**: durable cumulative recovery includes the 07:46 Moon/Daya (Dayadream alias) package beneath previously recorded 08:46 and 09:46 work. Older 06:46-and-below safe-baseline material remains; `last_consumed_sha` stays **null**.
- **Wall**: durable cumulative recovery now includes 23:46 Light Mode, 22:46 Baby Lyssa property, 21:46 Alkey and 20:46 Tofu packages. Older safe-baseline material remains; `last_consumed_sha` stays **null**.

## Current cross-surface continuity locks

- Main and Wiki are complementary surfaces, not independent canon systems.
- **Daya = Dayadream** in current canon. Do not create a separate Dayadream person from the alias.
- User-confirmed canon and direct stable-ID bridges outrank miner-local warnings and name resemblance.
- Discord onboarding is not silently converted into exact in-game admission chronology.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; joke prestige is not formal ownership or scoring.
- Joke ships, fake-marriage contracts and fake-family language are not literal romance/family canon without stronger evidence.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Uninspected images remain uninspected; captions and reactions do not license invented contents.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
