# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 19:41 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier rolling WIKI states remain in Git history.

## Current boundary

- Census: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite pending: **0** at the closing census.
- Backlog: **0**.
- Review-overdue: **0**.
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Core Rooms: seen/consumed `9eb31f2da1eaf9d4068823387ae4e8fb6307ac30`; one-time historical recovery remains closed.
- All Characters: seen/consumed `66403720821d2559c8b8e5f2699eaedba6d99341`.
- Whiskey: seen/consumed `392fc71d98e0cc120e832be282df81d61f888b7b`.
- Mugen person-first: seen/consumed `ab8054e7ac237863d023277fc63f87ef9ca8a203`.
- Wall: forward-reviewed through `c41fe5b64940b684913f6bfd99f25bd572fa448c`; formal consumed remains null while its older cumulative recovery stays open. Historical recovery is now reviewed through the `2026-08-24-2347` package; `2026-08-25-0046` is next.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### Mugen person-first — `abaa91a3… → ab8054e7…`

Reviewed the full eight-commit intake suffix checkpoint-first: rolling checkpoint, run checkpoint, findings, addendum, receipts, open questions, public-integration decision, and site candidates only.

The strongest new longitudinal read is Aeshleen's portability after Dragon Raja. On October 24, 2022 she says Raja is over for her and she barely uses Discord; Gilli says she is still an Underlord, Ren calls the people forever family, and Mugen says `you'll always be part of the UL fam`. In 2023 Aeshleen keeps using Slice as a low-frequency postcard address — goats, an art exhibit, a lake picnic, a forest/river outing, a village soap-box race, and other ordinary-life fragments.

That behavior matters more than another permanence slogan: reduced game activity and reduced Discord frequency do not stop the social room from being usable. The mechanism is collective, not Mugen-as-rescuer. This material is already public on the WIKI Aeshleen dossier, while MAIN Mugen already owns the core `always be part of the UL fam` scene, so no duplicate public object was added from this branch.

The same suffix records Mugen later remembering May 2020 as when Nui made the first family tree. That maker-memory corroborates the family-tree provenance just integrated publicly on both surfaces. It does not prove Mugen had perfect attribution discipline, and Nuien remains he/him under resolved canon.

The crab-language mutation and Mugen's generic `i have a lounge for that` redirect were reviewed and downranked: both are real, but the first repeats an already-saturated framing mechanism and the second cannot be safely bridged to a specific surviving Lounge room.

### Wall cumulative recovery — historical `2026-08-24-2347` package

Reviewed checkpoint-first and then the package findings, receipts, site candidates, and rabbit holes. The genuinely new keeper is **Marian + Eos's `too vanilla` prosecution arc**.

On July 7, 2021 Marian complains that she has said plenty of Wall-worthy things but `eos is too vanilla to shame me`. By November 28 she has stopped waiting and files `self shaming, cause eos is too vanilla`. February 1, 2022 supplies the reversal: messages appear under Marian's account; Marian says `no, it's eos` and `she's on my account`, asks Eos `why are you getting me shamed`, and Eos answers `i typed in the wrong account- eifsenf`.

The comedy is the asymmetry. Marian spends months wanting a more aggressive prosecutor; Eos finally gets her shamed through clerical incompetence. The exact-account-use scene is real, but it does **not** establish routine credential sharing, cohabitation, romance, permanent access, or any literal family relationship. Marian's November screenshot remains visually uninspected.

Other historical Wall material was reconciled rather than multiplied. Snow → Marian → Torr recursive self-shame is already owned by the public Wall genealogy. The February 2022 `not even a day yet and already wall shamed` / `speeed run!!` target remains unresolved. Ren/Snow fountain-of-youth transfer still needs media. Ansun's `and my ants?` likely belongs to another pest case but lacks enough exact context. Marian/Eos `our two childs` is a fake-family scene whose targets remain unresolved and is not literalized.

## Public changes

### MAIN

No reader-facing lore page changed this pass. That is intentional rather than evidence rejection: the strongest Mugen-suffix Aeshleen payoff is already public in WIKI's Aeshleen dossier, while MAIN Mugen already owns the core permanence scene. The authoritative branch ledger and dual-surface run report were updated on MAIN.

### WIKI

Added `src/data/integrator-episodes-wall-20260829-1930.ts` with **Eos Is Too Vanilla to Shame Marian**, then wired it into both the episode index and dynamic episode route.

Reader-complete WIKI head: `284cb52c1eed15fa2ed0b66de254dcc1a00c23be`.

The episode keeps the account-use claim bounded to the observed incident and refuses to turn the duo's fake-family/Wall language into romance, cohabitation, or routine credential-sharing lore.

## Verification / deployment

WIKI reader head `284cb52c1eed15fa2ed0b66de254dcc1a00c23be` passed **Build Underlords Wiki** run `33288454436` and **Deploy Underlords Wiki Preview** run `33288454441`; both completed successfully.

A direct external live-page check was attempted after deployment but the browsing service returned a transient 503, so the workflow's successful Pages deployment is the durable verification available in this pass.

MAIN's final durable-state/report commits trigger the repository's native **UL Hourly Build + Deploy** workflow; the exact final MAIN head must be green before this pass is called fully closed. Likewise this WIKI state commit becomes the new durable head and its own build + Pages workflows must be green before final close.

## Held / unresolved

- Absolute origin of UL's fake-family-tree tradition; earliest surviving is not origin.
- Mugen's maker-memory does not prove universal attribution accuracy.
- Exact Lounge referent behind Mugen's generic redirect.
- Marian's November 2021 screenshot pixels and exact underlying offense.
- Whether Eos's February 2022 access to Marian's account had any broader pattern; only the observed incident is public.
- Wall `speeed run!!` target, fountain-of-youth media, Ansun ants context, and Marian/Eos fake-family targets.
- Any literal romance, cohabitation, legal kinship, or routine credential-sharing inference from Marian/Eos jokes.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.
