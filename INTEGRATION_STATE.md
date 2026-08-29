# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 15:14 PDT**.

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
- Mugen person-first: seen/consumed `24b17195cdb95673b11031e03678b2bb7375fde0`
- Wall: seen/forward-reviewed through `78cad71904eac083b40c74eaf224d59cefc6b435`; formal consumed remains null while older cumulative recovery is open.
- Core Rooms: seen/forward-reviewed through `c6cc9dd6bc0a6ef1f021fed4dad18e5aefc921f6`; older safe-baseline recovery is now complete through the **2026-08-25 03:46 package**, with **02:46 next**; formal consumed remains null until cumulative recovery closes.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### Core 03:46 recovery package

Checkpoint-first review covered the package's findings, receipts, people/motif notes, rabbit holes and site candidates without re-mining raw archives.

The strongest still-unpublished keeper was Baby Lyssa/Ghoulie's July 7, 2021 Wall-house escalation. By then Ghoulie had already spent months protesting repeat Wall appearances. On the morning filing she asks `YOU COULDNT WAIT LIKE AT LEAST 5 MINUTES?`; Ren answers `the shame doesn’t wait my dear`. Later the same day Ghoulie says `i’m no longer safe`; Marian/Panda tells her at least she is not alone; Ghoulie changes strategy completely and declares `this is my house y’all just livin in it`. Panda accepts the fake-house premise immediately, which somehow becomes an argument over the kitchen, whose dishes they are, and whose food was on them.

That became the WIKI episode **This Is My House, Y’all Just Livin In It**. The useful progression is repeat defendant → resident → landlord. It is fake domesticity built from Wall recurrence, not literal cohabitation, ownership, governance or a new relationship label. MAIN already carries the wider Ghoulie residency chronology more richly, so the July beat was not duplicated into another biography paragraph this pass.

The same package also sharpened voluntary self-shame progression and Marian/Panda ↔ Eos `too vanilla` / role-reversal teasing. Those were retained as useful culture/relationship texture but did not warrant thin additional public objects.

### Wall forward delta `b66aa468… → 78cad719…`

Checkpoint-first review covered the newly changed Wall intake handoffs only.

The strongest WIKI keeper is Erys's recurring defense stack across May 5–10, 2022: `i swear i didnt say that` → `i swear that isnt me` → `its photoshopped` → `im being hacked` → `objection` → `hearsay`. Ren true-replies `Denied, it was your own answer`; Erys still answers `no it wasn't` / `i swear`.

That became **Objection. Hearsay. Photoshopped.** The human joke is recurrence, not one denial: embarrassment keeps acquiring a new jurisdiction until the whole evidentiary system is supposedly invalid. The Photoshop/hacking lines remain comic alibis in context, not evidence of actual account compromise or image manipulation. Ren and Mugen are POSTED BY for the relevant screenshots; pixels, MADE BY, CAPTURED BY and FEATURING remain unresolved.

The same Wall delta produced Rich's recurring couch ecology, which belongs more naturally on MAIN Rich: self-described stripclub `couch potato`, later Fight Club VC becoming `my couch`, Mugen remembering that the room stopped screaming after Rich passed out so they would not wake him, and Sou later commemorating Rich being broom-swept back to the couch. WIKI intentionally did not photocopy that longitudinal character material into another episode this pass.

Danny's Sprite / `sprite goblin adverts` sequence is a probable callback under the lower evidence threshold, but Danny already has a stronger recent bounded WIKI episode; it was reviewed without spawning duplicate furniture.

### Mugen person-first late delta `bb8d1981… → 24b17195…`

The branch advanced during closing census and was reviewed checkpoint-first rather than left pending. Its sole promoted evidence family is the same Rich sleeping-friend accommodation already published on MAIN: Mugen true-replies `We stopped screaming since you passed out on the couch so we dont wake you :3`.

The Mugen miner itself identifies Rich as the strongest public owner. MAIN Rich already absorbed the evidence family and passed verification/deployment, so the Mugen delta closes as reviewed/corroborative with no duplicate Mugen section. MAIN consumption state advances Mugen person-first through `24b17195…`.

## Reader-facing changes

`src/data/integrator-episodes-wall-20260829.ts` gained:

- **This Is My House, Y’all Just Livin In It** — Baby Lyssa/Ghoulie + Marian/Panda + Ren, July 7, 2021.
- **Objection. Hearsay. Photoshopped.** — Erys + Ren + Mugen (+ Rich in the surrounding prosecution joke), May 5–10, 2022.

Reader commit: `73795ed7cde01563205245dfd09ef191f6982bcd`.

## Held / unresolved

- Rich's exact Fight Club→couch room rename/conversion mechanics and exact rename date.
- Sou's Rich broom screenshots, Erys screenshot pixels, and all unsupported MADE BY / CAPTURED BY / FEATURING promotion.
- Erys's hacking/Photoshop lines are joke-defense language, not factual compromise evidence.
- Ghoulie/Panda fake-house chores are comedy, not literal cohabitation.
- Marian/Panda's `(panda 100% = eos)` line is content commentary, never identity evidence; Panda/Marian and Eos remain separate people.
- Absolute origin of the Wall-residency joke, the self-shame mechanism, and unresolved underlying screenshot offenses remain open.
- Older Core + Wall cumulative recovery floors remain open.
- Hard user-confirmed canon, resolved identities, privacy boundaries, direct contradictions, appointment chronology rules, and SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING distinctions remain hard rails.

## Surface decision

The split is deliberate. MAIN gets Rich because the couch material only becomes funny enough when read longitudinally: outside-club leader → Funcle → stripclub couch potato → Fight Club's screaming room becoming `my couch` → everybody apparently lowering the volume when he falls asleep → broom-assisted return to habitat. WIKI gets Ghoulie's July landlord scene and Erys's appellate-defense stack because each is a bounded incident with its own clean escalation.

## Verification / deployment

Exact reader commit `73795ed7cde01563205245dfd09ef191f6982bcd` passed **Build Underlords Wiki** run `33278668326` and **Deploy Underlords Wiki Preview** run `33278668358`; the latter completed Pages build, deploy and report successfully.

This durable state commit is also subject to the repository's normal push-triggered build and Pages workflows; the run-closing report records the exact final `main` head and outcome.
