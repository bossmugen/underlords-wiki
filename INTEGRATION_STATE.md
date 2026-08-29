# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 15:00 PDT**.

Full branch-level consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**.

- finite pending: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Louvre / AI Art / Athenaeum / Other Games: seen/consumed `7740c227916f23acbe15381146c27044be61aba6`
- Mugen person-first: seen/consumed `bb8d1981afe346c6848cde2468fb4237f42bbbaf`
- Wall: forward-reviewed through `b66aa46869e06f710415886c6c8e52c1c188a9b4`; formal consumed remains null while older cumulative recovery is open.
- Core Rooms: forward-reviewed through `c6cc9dd6bc0a6ef1f021fed4dad18e5aefc921f6`; older safe-baseline recovery is now complete through the **2026-08-25 04:46 package**, with **03:46 next**; formal consumed remains null until cumulative recovery closes.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### Core 05:46 recovery package

Checkpoint-first review covered the referenced findings, receipts, people/motif deltas, rabbit holes, and site candidates only. The strongest material — Rumfection/Gillfection contagion language, Rummy's Panda misunderstanding repair (`be like water and move past it`), and Rummy's recurring Wall context-defense progression — is already public in richer canonical owners. This package therefore closed as duplicate/corroboration rather than spawning another page or gag.

### Core 04:46 recovery package

Checkpoint-first review recovered several strong but already-owned lines:

- Ansun's July 2020 promise that another Mafia Godfather roll would make him rename himself `godfather`, followed by later `Godfather` display evidence and a same-account bot bridge. MAIN already owns this follow-through.
- Aeshleen's sub-hour Wall record and Mugen's `ghoulie got competition` comparison. WIKI already owns this in the Wall speedrun genealogy.
- July 2021 self-documenting-Wall logic: Mugen says `Yall can just talk here and we won't even need ss`; Snow later types `-renames it Ghoulie & Panda's house of shame-` and jokes that the volume might require its own subchannel. The current public Wall gag already owns the Ghoulie/Panda house-of-shame framing and later self-documenting procedure. The 2021 line sharpens the genealogy but is corroborative rather than a reason to breed a second near-identical public object.

No reader-facing WIKI copy was added this pass. That is an editorial decision, not a failed review: recovery evidence was reconciled against both surfaces and found to be already public in stronger form.

## Held / unresolved

- Rumfection / Gillfection absolute origin.
- Exact Mafia round and exact rename instant behind Ansun's Godfather display follow-through.
- Aeshleen's first Wall screenshot pixels and unsupported image provenance.
- Snow's `Ghoulie & Panda's house of shame` / extra-subchannel lines are typed joke architecture, not evidence that a channel was literally renamed or created.
- Ghoulie's `eats people` / `CANNIBALISM??` / `or the seal?` media referent remains unresolved.
- Older Core + Wall cumulative recovery floors remain open.
- Hard user-confirmed canon, resolved identities, privacy boundaries, direct contradictions, appointment chronology rules, and SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING distinctions remain hard rails.

## Surface decision

Neither public surface needed new reader-facing lore this pass. MAIN already tells Ansun/Rummy/Ghoulie/Aeshleen more richly; WIKI already owns Rumfection, Rummy's context appeals, the Wall speedrun genealogy, and the Ghoulie/Panda house-of-shame running gag. Repeating the same receipts would flatten rather than enrich them.

## Verification / deployment

Durable state commits were pushed to both publishing branches. Their exact final heads are checked through each repository's existing GitHub Actions build/deploy workflow before this pass is declared closed; the final run report records those exact commit SHAs and outcomes.
