# UL WIKI INTEGRATION STATE

Last integration close: **2026-08-30 05:01 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier WIKI states remain in Git history.

## Current boundary

- Census: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite evidence-review queue after this pass: **0 pending / 0 backlog / 0 review-overdue** at the reviewed census boundary. `archive-miner/all-characters-hr-20260828` was reviewed through `e83a59b90d4e142b803ca0cf22cc2fc5925fded4`; its new Run 30 suffix is a successful no-public-change review and should be consumed on MAIN's durable branch board.
- One previously reviewed finite branch remains publication-blocked rather than consumed: `archive-miner/whiskey-longitudinal-hourly`, reviewed through `becfa8f3bc1a244597107a52a3272690a39242d6`. Its accepted Effie material remains queued for MAIN because the MAIN verification runner has repeatedly failed before substantive verification steps.
- Both Club-Only miners remain fully consumed/current. Core Rooms, Daycare, and Mugen person-first also remain consumed/current at the opening census.
- Wall forward review advanced through `6ea9fbdb4417995b509b0b51a6d5dbc6c4868091`. Historical safe-baseline recovery advanced through **2026-08-26 01:46**, with **02:46 next**. Formal Wall consumed SHA remains null while the older cumulative floor is open.

No miner branch was merged or cherry-picked wholesale.

## This close

### All Characters Run 30

The delta `433e6fad… → e83a59b…` was reviewed checkpoint-first and intake-only. It adds useful but already well-owned character texture rather than a new public story: Anthos is loudly welcomed back after Night End and immediately pulled back into room business; Nicole returns and recognizes old people; Kiddo creates a nickname-stripping mess and then tells everybody not to read the previous messages; Daya checks on Clark's wellbeing and tells him he needs sleep; Key is impatient with a five-month-old meme and matter-of-factly coordinates across time zones. None of those beats currently beats the richer public owners enough to justify duplicate prose. Jade's `mccown` referent and Alys's `welc` referent remain unresolved rather than being assigned by convenience.

### Wall forward 04:32

The forward suffix `a568a0f… → 6ea9fbd…` was reviewed directly from the miner branch. Daya's August 2023 `wall of shame more like wall of SMUT` is confirmed as a **one-scene title mutation**, not a formal recurring room name; the current WIKI already owns it inside the larger `Shame Worthfull Moments of People’s History` episode, so no duplicate episode was created. Marian/Panda is POSTED BY for the underlying attachment; Daya is SAID BY for the title mutation; the image remains visually unresolved. The same suffix gives Akamin a persuasive ordinary-life taste read — after Mugen offers `#whiskey-room or #club-only`, Akamin picks `Whiskey` and follows almost immediately with `Always gonna be my drink bb`. Under the lower evidence threshold that is publishable as a probable historical whiskey preference, but Akamin does not yet have a mature public owner worth manufacturing around one drink preference, so it is banked rather than sprayed into a starving dossier.

### Wall historical 01:46 — Zhēnxī

The 2021 `shamed within 6 minutes of entry` contestant is now safely identified as **Zhēnxī** (stable Discord account `rhymethero` / rendered `Zhēnxī`), and the clock is stranger than the remembered shorthand. Ren had already POSTED the uninspected Wall image about three minutes **before** the Stripclub Bouncer welcome in Lobby. Zhēnxī then says `*I am scare*`; Ren answers `*uwu*`, checks `Zhen right?`, and sends the server tour. Ren tags Zhēnxī on the Wall about **6m04.776s after the name check** and **6m53.343s after the automated welcome**. Zhēnxī answers `NOOOOOOOOOOO` and `NOT THE WALL OF SHAME FAME`; Ansun summarizes it as `shamed within 6 minutes of entry`; Ren asks whether Aesh still holds the record, and Ansun says yes.

That correction matters. The scene is not safely “newcomer commits an offense after joining and gets screenshotted six minutes later”; the Wall artifact already existed before the welcome, its pixels remain unresolved, and the later tag/reaction is the strong local association. It is also distinct from the separate July 2022 pooled-Deleted-User `New Record Holder Before She Even Joined` episode. A July 2022 callback gives Zhēnxī a perfect little sequel: they personally POST a Ren-centered screenshot, follow with `@RΣN so uh-`, and eventually rule the filing `Deserving`. The victim has learned the machinery well enough to become another clerk.

WIKI therefore added the discrete episode **`Zhēnxī and the Six-ish Minute Wall Speedrun`** in `src/data/integrator-episodes-20260830-0501.ts`, wired into Episodes, episode detail routes, and the 2021 season page. Reader head `12cbc9973c682e351ff1d2736926c5e96e629900` passed **Build Underlords Wiki run `33311296056`** and **Deploy Underlords Wiki Preview run `33311296009`**, both successful.

## Surface split

This pass intentionally publishes Zhēnxī's corrected speedrun as a **WIKI episode only**. It is a compact, discrete incident with a sequel and fits the WIKI's Episodes/Season architecture exactly. MAIN did not receive a thin duplicate incident module merely to mirror it. Daya's `Wall of SMUT` line likewise remains owned by the existing broader WIKI Wall-history episode rather than being cloned again. Akamin's whiskey preference and the All Characters Run 30 texture are banked for richer future person owners.

## Holds

- Wall historical recovery: **02:46 next**.
- Wall formal consumed SHA remains null until the older cumulative recovery floor is actually closed.
- Whiskey/Effie remains publication-blocked on MAIN, not falsely consumed.
- Jade `mccown`, Alys `welc`, the historical `Panda and panda` phrase, and the June 2021 nickname-stay referent remain unresolved.
- Zhēnxī's 2021 parent image and 2022 Ren-centered screenshot remain visually uninspected; POSTED BY is not MADE BY, CAPTURED BY, or FEATURING.
- Earliest surviving is not origin. Pooled Deleted User stays quarantined. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.
