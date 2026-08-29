# UL WIKI INTEGRATION STATE

Last dual-surface integration continuation: **2026-08-29 04:14 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Census / queue

The mandatory opening census was persisted on MAIN before deep review: **27 active remote miner refs** plus **21 historical/missing refs**, for **48 tracked branch identities** total.

The closing census caught additional movement while the pass was running. `archive-miner/louvre-ai-art-athenaeum-other-games-hourly` advanced from consumed `b06734a45772461c972141f280c208115a5e1cd3` to `f1dda8a59de25f52014e4b02937f2625fdc51eef`; that finite delta was reviewed checkpoint-first in the same pass and consumed through the new head after MAIN's accepted Beowulf change passed verification and deployment. Cumulative Wall advanced through `365a1a944e1cf4a25b05a21db43202664cc0f5ff` and was reviewed through that head, but its older safe baseline remains open so `last_consumed_sha` stays null. Core Rooms moved late to `052cf0544b971eed68f60abbdc48d018800dee58` and is durably seen inside its cumulative recovery without pretending the new suffix was reviewed. Whiskey moved late from consumed `e0c751afb41276b9f24d293985c99311da8dc68b` to `0862ebc888c7e736ca7e408e1276a25721d4d54f` and closes as the sole finite pending branch.

Closing finite queue: **1 pending / 0 backlog / 0 review-overdue**. Core Rooms and Wall remain the two cumulative recovery tracks. Both Club-Only miners remain fully consumed/current; unchanged heads were not reopened merely because the standing prompt still describes an older backlog state.

## Reviewed this continuation

### Louvre finite delta — `b06734a4… → f1dda8a5…`

The Louvre checkpoint was read first, followed only by the new branch-local findings, receipts, Beowulf profile, people addendum, rabbits, and site candidates.

The accepted public correction is Beowulf's pre-Louvre chronology. On April 7, 2020 the stable `jeregilgamesh` account is at the Discord door saying `It say, locked`. A pooled Deleted User directly calls him `BEO`; when asked whether he had joined the club before, Beowulf answers `Yeah long time ago`. The pooled account says `I REMEMBER U` and `U WERE MY PRENTICE`; Beowulf answers `Yesss`. That makes the next night's earliest surviving Louvre message a surviving bookmark, not an admission scene.

The same doorway window catches voice access trouble, `Where is the memes section`, Pokecord testing, and `Because 3 am`. Five weeks later the direction of traffic reverses: Beowulf asks `Invite shamont to the server`, Mugen answers `you can share the link with him beo!`, Beowulf pings Shamont, and Mugen performs the visible role assignment after Shamont appears. Safe claim: Beowulf is the immediate Discord invitation/access bridge in that scene. Unsafe claim: Beowulf formally recruited or admitted Shamont into the in-game club.

MAIN's Beowulf biography was the canonical owner for this correction and was expanded there. WIKI did not clone the full biography patch into the VIP dossier during this pass; the current WIKI Beowulf page remains a shorter fandom summary, while MAIN carries the richer pre-Louvre correction. Held: the pooled `prentice` speaker's identity, exact UL admission date, Beowulf-name origin, Shamont's in-game admission mechanics, and all visual claims from Beowulf's three uninspected Louvre media posts.

**Consumption:** Louvre advances through `f1dda8a59de25f52014e4b02937f2625fdc51eef`.

### Wall cumulative recovery — current forward head plus older 23:47 package

Wall was read checkpoint-first through current branch head `365a1a944e1cf4a25b05a21db43202664cc0f5ff`. The 04:04 derivative addenda were reconciled against already-reviewed findings instead of counted twice. The 04:12 handoff then produced one clean new person beat: Milo believed an incriminating moment had escaped notice; Gilli already had the screenshot.

On December 15, 2020 Gilli POSTS a screenshot, tags Milo ten seconds later, and Milo answers twenty-two seconds after the tag: `You mf ... haha thought no one seen that`. Milo's message has a later edited timestamp, so the export preserves the final wording only. Four laugh reactions land on the surviving version and Mugen follows with a binoculars/bird-watching GIF. The underlying screenshot remains visually uninspected, so the incident does not name what Milo did or assign CAPTURED BY / MADE BY / FEATURING.

WIKI owns the bounded incident as the new episode **Milo Thought Nobody Saw That**. MAIN's already-rich Milo biography was not patched with a duplicate scene in this pass.

The older Wall safe-baseline recovery also continued through the **2026-08-24 23:47 package**. Its strongest Panda/Marian ↔ Eos material is already richer on current public owners: Panda complains Eos is `too vanilla to shame me`, self-files, and later Eos accidentally types from Panda's account and gets Panda shamed anyway. MAIN's Panda biography already tells that relationship arc and WIKI's existing Panda ↔ Eos relationship card already owns the fandom-wiki version. The recursive Wall-jurisdiction material is likewise already represented in MAIN's broader Wall genealogy. No duplicate public object was created from those receipts.

Wall remains `last_consumed_sha: null` because older pre-23:47 recovery material still exists. Current forward handoffs are reviewed through `365a1a944e1cf4a25b05a21db43202664cc0f5ff`.

## Public integration split

**MAIN:** `src/content/people/beowulf.md` gained the pre-Louvre doorway / old-history correction, BEO/beo alias receipts, unresolved remembered `prentice` language, 3 a.m. voice/memes/Pokecord texture, earliest-Louvre-not-origin boundary, and the later Shamont Discord-link handoff. Reader-facing commit: `a931e66ef3b5f468c56c6244d654dc611728cc02`.

**WIKI:** `src/data/integrator-episodes-wall-20260828.ts` gained **Milo Thought Nobody Saw That**, keeping the Wall exposure as a bounded episode rather than cloning MAIN's person-biography structure. Reader-facing commit: `8985c2c645b2635cb735cc876069fd05a55673b3`.

## Duplicates combined / held

Already richer on current owners and therefore not republished: Panda/Marian ↔ Eos `too vanilla` / self-shame / wrong-account payoff; recursive Wall self-jurisdiction; Scar's `want me to exposed?` witness posture; Tofu/Cookie bee spam; Queen Shimoko's already-sampled three-message Wall footprint.

Held rather than guessed: pooled Deleted User identity in Beowulf's `U WERE MY PRENTICE` scene; exact Beowulf admission date and name origin; Shamont in-game recruitment/admission; Beowulf's three Louvre media contents; Milo's screenshot contents and CAPTURED BY / MADE BY / FEATURING; Ansun's underlying ant incident; the February 2022 Wall-speedrun target; Ren's fountain-of-youth screenshot cause; Panda/Eos fake-family child targets; Gabu's sleep-scene trigger; and Momo's reported-speech-only `2fer1` source.

## Verification / deployment

MAIN reader-facing Beowulf commit `a931e66ef3b5f468c56c6244d654dc611728cc02` passed `UL Hourly Build + Deploy` run **33250103050**. Its Build + verify job passed source canon/architecture verification, Astro build, and built-output verification; the verified exact commit then deployed successfully to Cloudflare Pages.

WIKI reader-facing Milo episode commit `8985c2c645b2635cb735cc876069fd05a55673b3` passed standalone `Build Underlords Wiki` run **33250119545** and Pages run **33250119540**, including Pages build and deployment.

MAIN durable branch-state reconciliation commit is `140e21d8196fbfd9dd854216401da1fe63ce44bc`. A matching MAIN run report is recorded separately under the 04:14 integration-pass convention. No miner branch was merged or cherry-picked wholesale.