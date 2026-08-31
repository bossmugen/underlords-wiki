# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 15:16 PDT_

This is the current durable dual-surface reconciliation snapshot. Older run detail remains in Git history and MAIN's dated integration reports.

## Current boundary — Run 90

The public-bio rule remains: **the person is the spine; events are supporting scenes; the archive stays backstage.** MAIN owns the richest person/legend biographies. WIKI owns complementary Cast history, relationships, episodes, running gags, quotes, locations, gallery/reference structure, and person-first narrative where the character route uses it. `Petty Crimes` is the public catch-all; never `Trivia`.

Hard user canon, resolved identities, privacy/safety, explicit contradictions, appointment chronology and attribution fences remain hard. Outside those rails, strong contextual reads about habits, relationships, humor, care patterns, ordinary life, reputation and social roles may publish when more likely than not.

## Branch census / review boundary

- Full miner census: **49 tracked identities = 28 active refs + 21 historical/missing refs; 0 newly discovered; 0 finite pending review; 0 backlog; 0 overdue** at close.
- `archive-miner/all-characters-hr-20260828` advanced from reviewed boundary `6f8534bf00ef03bf000ac6050c558d2d1d485ddf` to `b1bb19a3da42bebf64f4e19757f92c8e1f75058d`. The nine-commit suffix was reviewed checkpoint-first and intake-only.
- Wall remains the one recovery-open branch, already reviewed through current head `4536afb9d607944f3e5a88b74325e84d5b8c9e6e`; resume only after future movement.
- Both Club-Only recovery priorities remain fully current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- No miner branch was merged or wholesale cherry-picked; no raw archive was re-mined by the integrator.

## All Characters HR — Run 57 routing

### Feli — the naming desk, the keyboard defense, and `It's like home`

Feli's prior public WIKI biography was too dependent on sparse-receipt caveats. The new HR suffix adds enough connective tissue to make the person clearer without inventing a generic Sniper personality.

The 2020 monster sequence now sits where it belongs as recurring behavior: Feli sees a visual set and starts naming it — Feluspex, Aurelius, Cobalus, Ocyris, Notos. The joke is playful, but the mechanism is oddly orderly: identify object, assign identity, continue. That pairs naturally with the later `I... O and P is CLOSE` Wall defense, another moment where Feli responds to social chaos by offering one compact concrete explanation.

The 2026 return supplies the missing relationship continuity. NL greets Feli with `MY BABYYYYY`; Feli answers `Hi momi!!`; Mugen follows with `Feliiiiiii!!!`; Feli asks how `Mrs Mugen` has been and says he heard things were party over here. The family terms remain house language, not literal kinship. The emotional payoff is Feli's own **`It's like home`**: the room recognizes him before anybody needs to reconstruct the relationship.

WIKI reader commit `076d30468e328dbf7ea6a3264d66b4962af266a6` rewrote `src/data/character-biographies-feli.ts` around that person-first continuity.

### Suzimasu — second-move humor and the `fun arc` return

Suzimasu's new material deepens a mechanism already visible elsewhere: Suzi is very good at seeing somebody else's premise and touching it exactly once until it gets worse. Mugen's `mugsiwawa` immediately becomes `mugsiuwuwa` / `mugsiwawa lmao`; the Gemini joke becomes roster question → `>.>` → exorcism GIF; the Gilli incident becomes advance apology → offense → `I HAD TO TRY IT LMAOOOO`.

The 2026 return gives the later arc a wonderfully non-resume reason: while Nelph is talking about renewed fun bringing old people back, Suzimasu says **`they lured me back in with fun arc`**. No fake reappointment story was created. The role history remains Founder → later Consigliere / Senior Advisor → retired Officer; the return beat is social attraction to the room becoming fun again, not a title restoration.

WIKI reader commit `efdfc943d81f2f78d4a463315aa4178a6e6a47b1` folded that material into `src/data/character-biographies-suzimasu.ts` and replaced visible archive-report voice with person-first synthesis and `Petty Crimes`.

### Bounded no-public-change checks

Jini, Jere/Beowulf, Rithy, Melon/Melonze, Coinpurse, and Torxey closed as successful bounded negatives. Their new Run 57 material was too singular or context-poor to justify public character expansion. Those checks are inside the reviewed boundary and should not be repeated unless new evidence arrives.

## MAIN / complementary-surface routing

MAIN received no reader-facing character change in Run 90. Its current Suzimasu page already carries substantial founder/ordinary-life/return-home texture, while Feli's MAIN page remains much thinner than the newly integrated WIKI story. The strongest complementary MAIN deepeners from this suffix — especially Feli's monster-naming + 2026 home-return continuity and Suzimasu's `mugsiwawa` / `fun arc` material — remain in the existing All Characters HR publication-debt family until MAIN can execute its source verification, Astro build, and built-output verification again.

Existing MAIN publication debt remains **All Characters HR, Core Rooms, Daycare, Mugen person-first, Whiskey**. Wall remains recovery-open only for future suffixes.

## Verification / deployment

- WIKI reader head `efdfc943d81f2f78d4a463315aa4178a6e6a47b1`, which includes both Feli and Suzimasu commits: `Build Underlords Wiki` run `33444970285` succeeded; `Deploy Underlords Wiki Preview` run `33444970279` succeeded, including Pages deployment.
- MAIN census commit `f8f0e6dae8d0f054fcdb1b138770bf982567ab1`: `UL Hourly Build + Deploy` run `33444643324` failed before execution. `Build + verify` returned no steps; Cloudflare deployment was skipped. This is still infrastructure failure, not a source/Astro/built-output rejection.

## Consumption / review state

All Characters HR is reviewed through `b1bb19a3da42bebf64f4e19757f92c8e1f75058d`. Its formal MAIN consumed cursor remains pinned behind older accepted MAIN work in the same publication-debt family; the reviewed-through boundary prevents this Run 57 suffix from being reread. Wall and both Club-Only recovery targets remain current at their existing reviewed boundaries.

## Next integration boundary

Do not reread All Characters HR Run 57. Resume it only after the branch advances beyond `b1bb19a3da42bebf64f4e19757f92c8e1f75058d`. Resume Wall only after it advances beyond `4536afb9d607944f3e5a88b74325e84d5b8c9e6e`. Keep the five MAIN publication-debt families intact until MAIN's verifier actually executes.
