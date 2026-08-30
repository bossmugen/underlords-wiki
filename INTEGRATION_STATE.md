# UL WIKI INTEGRATION STATE

Last dual-surface integration close: **2026-08-30 00:00 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier WIKI states remain in Git history.

## Current boundary

- Census: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite pending: **0**.
- Backlog: **0**.
- Review-overdue: **0**.
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Core Rooms: seen/consumed `7fce5fa707febe5975757ab7278212d86f048a45`.
- All Characters: seen/consumed `721ecfa3c79ea0146582710374a4f74a1cce5e4a`.
- Daycare: seen/consumed `a68896131717b570ec7c6bdcc1a35e45fffe1f17`.
- Mugen person-first: seen/consumed `382b9e14494b84dd92db993ec7c7af3fa882bef3`.
- Whiskey: seen/consumed `7978dda241b2c8169ad13f98a16a54006db1c5a6`.
- Wall: forward-reviewed through `9626f775c308874d072e44ceeee1c3884bd612aa`; formal consumed remains null while cumulative historical recovery stays open. Historical safe-baseline recovery is reviewed through **2026-08-25 14:46**; **15:46 is next**.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

Checkpoint-first, intake-only review covered:

- All Characters finite delta `8852d2264762a7757564034a92fc74b47ec7f37a -> 721ecfa3c79ea0146582710374a4f74a1cce5e4a`.
- Wall historical safe-baseline package **2026-08-25 14:46** on `archive-miner-wall-hourly-20260824`.

Raw archives were not re-mined. The opening census registered All Characters before deep review, and anti-starvation was satisfied by reviewing that finite mover while continuing the Wall recovery.

## MAIN keeper — Tony learns the body's paperwork

TonyTonyChopper's February 2022 doorway already had the absurdly fast Wall transition: no current club, Discord paperwork, then screenshot jail in a little over three minutes. The All Characters delta gives the sequel two months later.

Rich describes Snow as `losing the bodies`; Tony answers `LOSING THE BODIES??`. The next morning Mugen asks `We lost bodies again?`, and Tony eventually supplies the compliance memo: `You gotta be careful with bodies can’t just misplace them like that`.

The character beat is the change in fluency. February Tony is the fresh defendant trying to stop the room from sharing his business. April Tony understands the house's fake/game corpse-logistics language well enough to become mock procedure. MAIN's Tony biography now owns that progression. WIKI's already-existing **We Lost Bodies Again?** episode was corrected to include Tony in cast rather than spawning a duplicate incident.

`Bodies` remains house/game joke-language here, not literal human remains, violence, a formal job, or a reconstructed game mechanic.

## MAIN keeper — KOREA has beverage opinions

KOREA / Milk's biography now includes a specific taste receipt: `try crystal or brown sugar crystal boba too~ is thee beeessstttt`. A later Whiskey beat has her joining the Gemini side of a joke with `fellow geminis here to FUCK SHIET UP~`.

The boba line is useful because it is ordinary person texture rather than another role or archive statistic: she is not neutrally naming a drink; the stretched `beeessstttt` is a recommendation with conviction. The Gemini line likewise supports self-placement in that joke without turning a zodiac category into an exact birthday or a personality diagnosis.

Hard identity fence preserved: **KOREA / Milk (`724114717182001284`) is not Miihi / Milk (`253897195290361856`)**.

## WIKI keeper — Moo/XiIN goes from evidence to idea attribution

The 14:46 Wall recovery strengthens the April 1, 2023 Moo scene without requiring a new episode. The stable `nixin.` account had already self-reported IGN `XiIN殿` that afternoon. Later, after another visual package turns into motor discourse, Moon writes `It was all tae,yamiyo and xin ... It was there idea`, then adds `I forgot feli was in this creativity too`.

Because the same stable account had supplied `XiIN殿` hours earlier, the local same-day `xin -> Moo/XiIN` join is supported here. WIKI's existing **Moo Reaches the Wall in Eleven Minutes** episode now records that Moo was not merely named in Moon's evidence package; Moon later places Xin/Moo among the people behind the idea in the extended creative/motor incident.

The images remain visually uninspected. Exact statue-versus-motor mechanics, what each person physically did, and the identities behind free-text `tae` and `yamiyo` remain unresolved. The separate 2021 `Moo` material remains separate.

## Reconciled / not duplicated

- BishopThaGuru's July 2021 `who is wrong / gloves` mock-boxing beat was accepted as useful Tofu/Bishop corroboration, but Bishop's current MAIN dossier already owns the richer Wall relationship pattern; no filler section was added.
- Baby Lyssa/Ghoulie's `i can't believe i forgot` followed by an image remains held until the visual/context join resolves what was forgotten.
- Jade, Jordayy, LEXI, and Milo yielded no new person evidence in this finite All Characters delta.
- Feli's `I... O and P is CLOSE` keyboard alibi and Moon's same-day `creativity` line were already public on MAIN, so Wall 14:46 is corroboration there.
- Hishiro's `ClubChat Karaoke` is a one-shot visual lead, not enough for a recurring gag or event series.

## Verification / publication

### MAIN

- Tony reader commit: `fa8ec4493d9148247d83b9414ed2921d7e523b87`.
- KOREA reader commit: `b91b586a78bdddf1d52fa55e6effed24cb4851b2`.
- Existing **UL Hourly Build + Deploy** run `33298756473` on reader head `b91b586a78bdddf1d52fa55e6effed24cb4851b2` completed successfully. Because Tony's commit is an ancestor of that head, the successful run verified both reader changes together through MAIN's normal source-verification, Astro-build, built-output-verification, production-deploy, and exact-commit checks.
- MAIN durable branch state now consumes All Characters through `721ecfa3c79ea0146582710374a4f74a1cce5e4a` and advances Wall historical recovery through 14:46.

### WIKI

- Reader commit: `672107e1eb3514ee6d760b5ff5e787fd7c323d73`.
- **Build Underlords Wiki** run `33298806332` completed successfully, including the Astro wiki build.
- **Deploy Underlords Wiki Preview** run `33298806348` completed its build, Pages deploy, and report jobs successfully.

This state commit itself must pass WIKI's native Build and Pages workflows before the run is reported closed.

## Consumption close

All Characters advanced to seen=consumed `721ecfa3c79ea0146582710374a4f74a1cce5e4a` after successful review and public verification.

Wall historical safe-baseline recovery advanced from **13:46 -> 14:46**. Formal Wall consumed remains null while the cumulative older floor remains open. **15:46 is next.**

The closing live miner census still matched all 28 active refs; finite debt is zero at the reviewed cutoff.
