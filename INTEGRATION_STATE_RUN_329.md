# UNDERLORDS WIKI — Integration State — Run 329

## Census / queue

MAIN's controlling branch ledger performed the full census before deep review: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, 0 newly discovered, 0 backlog, 0 overdue. Opening review covered Mugen person-first, Wall, and Louvre / AI Art / Athenaeum / Other Games. Closing census also caught late Mugen and Core Rooms tails.

Both Club-Only recovery priorities remain current through head.

Final queue: **0 pending review, 2 pending-publication branches, 0 backlog, 0 overdue**.

## Mugen person-first

Reviewed `6c5451edecd0156b954b59e9452b2a99eb2f6e58` → `246c15de8d049d4f5b6904bfd43ef55bd452aebb` checkpoint-first, then caught the late checkpoint-only tail `246c15de...` → `89097a386de08c6001cd14165ffb3e5aed289a10` at closing census.

The miner's promoted synthesis joins Mugen's 2022 `Acts of Service + Quality Time` self-report to her self-description as a `distant drifter friend` who also serves as perspective/gameplan person, dork/hype person, and trip/event planner. The person read is **values presence / accepts intermittence** rather than constant availability.

WIKI already substantially owns that exact mechanism in `character-biographies-mugen.ts`: the `distant drifter friend` paragraph is paired with the care-language self-report and practical/social behavior. No new Episode, relationship entry, or extra receipt paragraph was justified. The late tail only rolls the same completed package into `checkpoint.md` and adds no independent semantic finding.

Disposition: duplicate/corroboration; MAIN ledger consumes Mugen through `89097a386de08c6001cd14165ffb3e5aed289a10`.

## Wall — ShiyaX works both benches

Reviewed `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d` → `6f2252e0ef47ada07c7684410f650d68ccd28afd` checkpoint-first.

This suffix materially deepens ShiyaX. The existing dossier already had `I AM THE CHAOS`, `:aworryWeirdExit:`, and the recurring `who was on my account?` defendant/alibi machinery. The new material supplies the missing prosecutor side: true-reply `Busted :kek:` to Cookie; `got caught in 4k` to Akariel; a Shiya-posted uninspected receipt that makes Vanness immediately return an alternate-culprit defense; Shiya asking why so many Wall posts are about him and HamitteY true-replying `cuz u do dis`; and, when the case turns toward Shiya, `im not even online wtf`, emergency-exit reactions, and the already-owned account-intruder alibi family.

The cumulative contradiction is **receipt-literate prosecutor / catastrophically unserious self-defense attorney**. HamitteY↔Shiya now has explicit reputation/accountability shorthand. Vanness↔Shiya gains a clean receipt-defense exchange. Ren and Nelph remain the already-owned defendant-side relationships.

WIKI integrated this into `src/data/character-biographies-shiyax.ts` as a structured Wall-court section and expanded relationship structure. It deliberately did **not** create a standalone Episode, because the value is cumulative person shape rather than one isolated case.

Reader commits:
- `c18dfe69b032ab1d1ea1e6f3cc7168ec98322262` — deepen ShiyaX Wall court contradiction
- `f5cf9afd73331c0774859e5ed5c39ddeb9499fbb` — correct Vanness relationship label

Exact reader head `f5cf9afd73331c0774859e5ed5c39ddeb9499fbb` passed:
- Build `33797650667` — success
- Pages / deployment `33797650715` — success

Hard rails held: images remain uninspected; POSTED BY does not become MADE BY / CAPTURED BY / FEATURING; `who was on my account` remains fake-alibi theater, not security history; `fatha` / `bbg` remain joke/social language rather than literal family or romance.

MAIN `shiyax.md` already owns the defendant/alibi/chaos half but not the prosecutor-side contradiction at the same depth. A MAIN person-first deepener is accepted but held because MAIN Actions still fails before verification steps instantiate. Wall therefore remains reviewed through `6f2252e0...` but consumed only through `ea893e9f...` until that accepted MAIN publication clears verification. Wall recovery remains open for future source.

## Louvre / AI Art / Athenaeum / Other Games

Reviewed rolling suffix `bd9f1603ce53324125c4950d284458e6646f6e42` → `517ea697ce8923bf1f609a12fc15cc3b7995a7a5` checkpoint-first.

This suffix is derivative consolidation of the LilsatanSir evidence family already accepted in Run 328, not a new independent lore family. The person read remains strong and banked: probable Marvel-leaning comics/superhero taste, blunt honesty about unread titles, specific Hulk/Thor/game-adaptation opinions, a shared comics conversation lane with D.I., and probable impish social styling. The two assigned Louvre bodies remain unrecovered and no safe existing public owner has been established. Privacy/location texture stays excluded.

The branch also retains the older Yumi relationship-afterlife MAIN publication debt. WIKI already owns the verified structured Yumi relationship read.

Disposition: seen/reviewed through `517ea697ce8923bf1f609a12fc15cc3b7995a7a5`; MAIN consumed boundary stays `cb7994b08c9a89051df732f27a99c1dd79a5ae93`; pending publication/ownership debt remains.

## Core Rooms — late closing tail

Closing census caught Core Rooms advancing `f57d28405733efd274b0fe7a2e3d7a55576f7a3a` → `5dfb15a8a090f84ab8e462d9a66e9d7713d006fa`. The one-commit delta stayed entirely inside the assigned intake and was reviewed checkpoint-first.

Noether's Anayss belonging spine and `ask them if they want` lived-Officer judgment are already richly public on both surfaces. Nothien's practical support formula — stay, show care, cook comfort food if words are hard — plus the high friend bar and `Speedrun` loophole are already substantially public on MAIN. Snow/Prince bar-orientation remains supporting Lobby corroboration, not a new Episode.

Open rails stay open: Noether's completed Officer action executor remains unresolved; Nothien's named enacted-care recipient remains unresolved; Cen's Voice Challenge media provenance remains unresolved.

Disposition: duplicate/corroboration; MAIN ledger consumes Core Rooms through `5dfb15a8a090f84ab8e462d9a66e9d7713d006fa` with no reader mutation.

## MAIN verification state

MAIN census commit `a7421e02bdaceb5e767952ad2cd3f7832ee5fad9` triggered workflow `33797060600`. Attempt 1's `Build + verify` failed before any steps instantiated (`steps=[]`, runner id 0), and deployment was skipped.

A targeted rerun of the failed job **was successfully dispatched** through the connected GitHub action. Attempt 2 reproduced the same pre-step failure: `Build + verify` again failed without instantiated steps, and deployment was skipped again.

This remains an operational verification gate, not a demonstrated source-verifier / Astro / rendered-output failure. MAIN reader-facing changes in Run 329: **0**.

## Closing queue

- Pending review: 0
- Pending publication branches: 2 — Wall/ShiyaX MAIN; Louvre/Yumi plus banked LilsatanSir ownership debt
- Backlog: 0
- Overdue: 0
- Wall recovery remains open

Only WIKI received a reader-facing change this run because its structured ShiyaX dossier had a real missing mechanism and cleared both build and deployment; MAIN's corresponding person-first deepener is deliberately held behind its broken verification gate.
