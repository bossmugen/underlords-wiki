# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 15:30 PDT**.

Full branch-level consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**.

- finite pending: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Wall: seen/forward-reviewed through `78cad71904eac083b40c74eaf224d59cefc6b435`; formal consumed remains null while older cumulative recovery is open.
- Core Rooms: seen/forward-reviewed through `c6cc9dd6bc0a6ef1f021fed4dad18e5aefc921f6`; older safe-baseline recovery is complete through the **2026-08-25 02:46 package**, with **01:46 next**; formal consumed remains null until cumulative recovery closes.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### Core 02:46 recovery package

Checkpoint-first review covered the package's new findings, receipts, people/motif notes, rabbit holes and site candidates only. No raw archives were re-mined.

The package's strongest new cross-surface evidence family is the Wall learning its own capture mechanics. Snow calls an early attachment `out of context perfection`; repeat filings turn into `once again snow is on the wall of shame`; he later tells Lana the Wall has her `as mvp`, knows a watcher pool is waiting for `something to post`, and eventually proposes the obvious loophole: `you cant wall of shame me in the wall of shame room if I shamed myself first 😛`. Han later threatens to rename the place `Han's wall of shame fame`. On January 1, 2022, Ren gives the cleanest surviving native definition: `This is where shame worthfull moments of People’s history`. Daya later mutates the title to `wall of shame more like wall of SMUT`; in 2023 Torr points out that if the offense happened inside the Wall, nobody even needs to screenshot-and-transfer it there.

That became the WIKI episode **Shame Worthfull Moments of People’s History**. The through-line is not a formal rule system; it is defendants learning the evidence-room workflow well enough to anticipate, feed, game, rename and occasionally try to preempt it. `MVP`, naming rights and self-shame immunity remain jokes, not ranks or policy. Uninspected attachments stay uninspected, and POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.

The same package deepened Aeshleen's `aesh van gogb` entrance relationship with Mugen. MAIN is the better owner because the payoff is biographical and relational rather than another bounded WIKI incident: Mugen folds the nickname into onboarding, Baby Lyssa calls the teasing `bulli with love`, Aesh extends the Van Gogh wordplay herself, and the next day explains `that's why mugen calls me aesh van gogb`. The exchange supports participatory teasing and familiarity, not an absolute nickname origin, an art profession, or health inference.

The package also contains Torr/Marian UI teasing, Beat Saber `140`/`141-` numeric chatter, and several smaller Panda/Anayss/Eos callbacks. Those were reviewed without manufacturing thin public objects. A stale miner caveat that treated Marian and Panda/PanPan as potentially separate was rejected under the hard user-confirmed Marian=Panda/PanPan identity lock.

## Reader-facing changes

`src/data/integrator-episodes-wall-20260829.ts` gained:

- **Shame Worthfull Moments of People’s History** — multi-year Wall capture-mechanics / self-awareness genealogy, 2020–2023.

Reader commit: `8d1231fc7e79f6f0c8482bc729a2495893b27eb1`.

## Held / unresolved

- Absolute origin of `aesh van gogb`; the surviving entrance proves active nickname use and Aesh's own recognition, not first coinage.
- The Aesh Wall attachment, Daya's `SMUT` parent attachment, Snow's early `out of context perfection` attachment and other uninspected pixels.
- Exact status of `MVP`, self-shame immunity and channel-renaming language beyond jokes; none are formal governance.
- Beat Saber `140` / `141-` measurement source; no medical-heart-rate interpretation is published.
- Torr/Marian's one-scene light-mode/red-dot teasing is useful texture but not enough for a separate relationship object.
- Older Core + Wall cumulative recovery floors remain open.
- Hard canon, resolved identities, privacy boundaries, appointment chronology rules, and SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING distinctions remain hard rails.

## Surface decision

The split is deliberate. WIKI gets the Wall's multi-year capture-mechanics genealogy because it functions as a running gag / location-history episode. MAIN gets Aeshleen's Van Gogh nickname scene because the useful part is not another event card; it is watching onboarding, teasing and mutual joke participation happen in the same breath.

## Verification / deployment

Exact reader commit `8d1231fc7e79f6f0c8482bc729a2495893b27eb1` passed **Build Underlords Wiki** run `33279005522` and **Deploy Underlords Wiki Preview** run `33279005489`; the Pages workflow completed successfully.

This durable state commit is subject to the repository's normal push-triggered build and Pages workflows; the run-closing report records the exact final `main` head and outcome.
