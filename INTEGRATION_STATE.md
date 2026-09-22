# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-22 — Run 1594 close_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` remains the controlling miner-consumption ledger. MAIN canon locks and resolved identity corrections remain the highest-priority identity/role layer. WIKI owns structured Cast dossiers, Relationships, Episodes, Running Gags, Quotes, Locations, and Gallery/media notes; MAIN owns richer person-first biographies.

## Census / current queue

The mandatory full census remains **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered refs, 1 late pending-review branch, 1 reviewed branch pending inherited MAIN verification, 9 older reviewed `pending_publication` families, 0 backlog, and 0 overdue**. Both Club-Only recovery lanes remain current.

Run 1594 opened with one advanced miner: Whiskey moved `c36e159dff5ff3a8047cef255e96b6c505247b5d` → `d30a4856b7fd09c0e6e89f69affff31e76cd78f7`. It was reviewed checkpoint-first and intake-only. A closing census then caught a late Daycare move `3f68248fafcc26d5ff3b8b2bdebcc0341e2091f5` → `4a903c9ad99e2c0b54de1314951b17dd572bccff`; that delta was also reviewed checkpoint-first before close rather than being left to starve. A final post-close sweep caught **Core Rooms** moving again, `19cc627879b1942d133d488b03dc2a2f421eaf95` → `d54f032c8ec3987a57c9846d9a7740441f1d21b2`, after both reviews were complete. It is durably recorded as `pending_review` for the next pass instead of being silently consumed.

## Reader changes

### Anayss — Whiskey recognition runs both directions

Run 1594 adds a deliberately structured WIKI deepener to the existing canonical Anayss owner rather than creating a duplicate person. Stable account `698943572875149342` remains Anayss / `anayss_louvre`.

The Whiskey packet adds the reciprocal half of a character pattern already strong on MAIN: Anayss is not only someone who notices and re-legibilizes returners; other regulars visibly register **her** arrival too. Boshek announces `anayss is here` and jokes that `the superior naisu has joined us`; Digital greets her by name, says `pog`, then jokingly credits the room coming alive to her. Anayss accepts the welcome but trims the legend back down with `Thanks mister digital` and `Idk about all that that’s a little much`.

A second relationship lane is practical rather than ceremonial: Anayss says `someone invite whoamii`, explaining that guard missions are easy to miss. The WIKI owner therefore gains Whiskey-specific Boshek, Digital, and whoamii relationship texture, four compact quotes, the recognition-as-welcome synthesis, and backstage anti-fanon rails. This is ordinary room familiarity, not a formal reminder/moderation duty.

The January 4, 2021 `GRATS ANAYSS` from Gilli is retained only as an unresolved recognition beat. The surviving packet does not identify what she was being congratulated for, so no achievement, appointment, relationship milestone, or origin event was invented.

**MAIN intentionally received 0 reader-facing Anayss prose changes.** Its existing `The Reception Desk` section already owns the richer person-first recognition/welcome synthesis; adding four more receipts there would weaken the biography into an archive ledger. WIKI is the better home for the bounded Whiskey relationships/quotes/reference structure.

Reader commit: **`399198493d3e6fe8e812afcee70732629401f0f5`**.

### Late Daycare review — Moon

The closing census caught one additional reviewed family for Moon / Moon久方 (`646026925760053258`). Four Lobby re-entry scenes from January 2022 through September 2023 produce a strong cumulative contradiction: **the automation repeatedly treats Moon like a newcomer while the humans treat her like somebody who came back**. Moon moves from joking that she may have joined the wrong server, through `What is a ign?` / `My brain is trying hard to process ewe`, to the cleaner continuity line `Not new ,just things happens`, and finally self-describes as a `returning UL member` after temporarily quitting Raja. Six familiar-person reactions, Ren's `Thas alright UwU`, and Oyasumi's `MOOOOON` support human recognition without implying a closeness rank.

This late Daycare packet was fully reviewed and deduped, but **no additional reader file was created in Run 1594**. The branch already carries an inherited MAIN verification gate that prevents contiguous consumption from advancing, and Moon's new cumulative return pattern is durably recorded for person-first resynthesis rather than being rushed into a second end-of-run public commit. `What is a ign?` remains an excellent future `Petty Crimes` detail; it is paperwork brain-fog, not a competence judgment.

The low-volume Reinaa/Forsaken audit produced no new person-shaped material and was correctly left unpadded. RH-16 remains open: Saber/event-schedule proximity still does not identify the ~279-hour broken bot or bridge it to earlier word-chain activity.

## Verification / deployment

The Run 1594 Anayss WIKI reader passed both existing publication paths:

- **Build Underlords Wiki `35725675841` — success.** Astro build completed successfully.
- **Deploy to GitHub Pages & Preview `35725675846` — success.** Build, Pages artifact upload, actual Pages deployment, and report all completed successfully.

The reader frontier for Run 1594 is therefore **`399198493d3e6fe8e812afcee70732629401f0f5`**. This integration-state update is `[skip ci]` bookkeeping and does not replace that verified reader frontier.

MAIN reader changes were **0** this run, so no ceremonial MAIN reader build/deploy was manufactured. The inherited Daycare Woosung/Rich MAIN verifier was retried again as workflow `35672332827`, **attempt 47**. It failed before any Source + Astro + built-output verification step instantiated: the sole job returned `runner_id=0` and `steps=[]`. This remains runner/startup infrastructure failure rather than a demonstrated source, canon, Astro, or rendered-output failure.

## Consumption / review frontiers

- Whiskey is consumed through `d30a4856b7fd09c0e6e89f69affff31e76cd78f7` after the green WIKI build/deploy.
- Daycare is reviewed through the late closing-census head `4a903c9ad99e2c0b54de1314951b17dd572bccff`, but its contiguous consumed cursor remains `16d9ac845f9375ee2fc67444595673b309235c38` solely because the older accepted MAIN Woosung/Rich correction is still verification-gated. Do not reread the reviewed Daycare tail unless HEAD advances; retry the inherited verifier instead.
- Core Rooms is newly pending review at `d54f032c8ec3987a57c9846d9a7740441f1d21b2`; its last reviewed frontier remains `19cc627879b1942d133d488b03dc2a2f421eaf95` and its older contiguous consumed cursor remains `e0d32f57ccbfb9433eac730ffd0e6786a0054b3d` because of existing publication debt.
- Birthdays/PR/VC remains consumed through `163b2d77ad26d77fe41f15b6b3523c0abcb65f85`.
- Louvre / AI Art / Other Games remains consumed through `8375bbd4cc1c1f4e9176635ce1d8916cc1b676d2`.
- Wall remains consumed through `340ac47f406104bdd225453c386b5146427a87b6`.

## Rails carried forward

- Anayss stable account `698943572875149342` is the canonical owner; no duplicate profile was created.
- Gilli's `GRATS ANAYSS` cause is unresolved; no milestone/origin/appointment is inferred.
- Moon's repeated MEE6 welcomes are re-entry receipts, not first-join dates. Her own `returning UL member` wording is safe; `temporarily quit Raja` is a game-participation statement, not proof that she left the social community on the same dates.
- Oyasumi's `MOOOOON` and the March reaction cluster establish familiar recognition, not a special relationship category.
- RH-16 remains unresolved; temporal proximity does not bridge Saber to the 279-hour bot.
- BishopThaGuru matching display names remain unbridged because the conflicting stable IDs remain unresolved.
- Stable `459696170759880745` remains canonical Ricochet; the separate Woosung/WOO Rich / DragonRich actor stays distinct unless independently bridged.
- Mia and Mimi remain separate; Opalite belongs to Mimi.
- Joke-family language stays nonliteral; current/export role arrays do not establish appointment chronology.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
