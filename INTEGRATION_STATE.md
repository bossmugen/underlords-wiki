# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-07 — Run 609 intake reconciliation_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. MAIN `CANON_LOCKS.md` remains the highest-priority identity/role correction layer and wins over miner-local hypotheses, integration prose, site alias drift, or account-level ambiguity until Mugs explicitly changes it. Detailed run history lives in durable per-run reports; this file is the current operational snapshot.

## Current census

Mandatory full census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**. Closing state: **0 newly discovered branches, 0 unread pending-review tails, 8 reviewed `pending_publication` MAIN families, 0 backlog, and 0 overdue**.

This reconciliation reviewed checkpoint-first/intake-only:
- Core Rooms / Events `5b0a45e78790acc3b5e54e16916bc4564ec13661` → **`3ae83b1f6aa92e8a3332137c17c227340c4ff668`**.
- Daycare `41659e4b9dd16854b574517e59bb7bf790b00b96` → `4832ee23410851f218331641577cf474d28d5ed8`, then the late suffix → **`28d85eb899568a7e021e392c8fd069275ca835fa`**.
- Wall `4f08501576f20f63865a17eb56386ec026bba19f` → **`ac6de06ea0030047eabae636587393087688ded4`**.

Both Club-Only recovery lanes remain current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`; neither was churned and no raw archive was reopened.

The eight reviewed publication-held MAIN families are Backroom, Birthdays / PR / VC, Daycare, Louvre / AI / Athenaeum / Other Games, Meems, Whiskey, QOTD / Officers, and Wall. `pending_publication` means reviewed debt, not unread mining.

## Mia — newsroom confidence includes surviving the correction

The Daycare packet deepens an existing Mia behavior rather than inventing a Reporter job. On March 6, 2023 she packages the missing-Nitro mystery as `underlords news for today`, posts the project-report video, announces `WE FOUND IT`, then publicly corrects herself with `NOPE NOT ANTHOS`. Anthos answers `I AM GONNA SUE`; Mia gives the prosecution one `AHHH` and keeps the scene moving with `reward for find 1million fake dollars!`.

The person read is low-ego public correction. Mia is comfortable enough with the room that a wrong call does not require defensiveness or a repair ceremony; it becomes Act Two. The video is **POSTED BY Mia**. Sye's `yall made a video` / Mia's `Yesss` supports group-made framing, not sole maker credit. Reporter / Newscaster remains joke-shaped behavior, not Mia's formal specialist title.

## Noether — the joke gets a reusable handle too

Core adds a second expression of Noether's existing practical instinct. Anayss repeatedly summons Noether into Hami-centered Wall nonsense; Noether moves from laughing at `Unsugar hami` to `Unsugar hamihami`, then expands the same vocabulary a month later into `Unsugared snow, history of a sugar daddy and unsugar boiii...`.

That is useful because it is the same reusable-handle instinct already visible when Noether turns fuzzy process into a person, form, or next action. Sometimes the reusable handle is administrative. Sometimes the institution being maintained is an entirely unnecessary `Unsugar` taxonomy. MAIN already had the stronger version of this synthesis, so Core was duplicate/corroboration there while WIKI received the structured relationship/callback deepener.

Hard canon wins: **Noether is current Game Officer**. Old Junior-Officer wording is historical context only and does not replace the current role.

## Nobu — evidence filing with a delightfully compromised chain of custody

Wall deepens Nobu / Xuseio as a mostly-silent visual filer. She can post an exhibit with almost no caption and let the room prosecute it, then later admit: `I legit thought that said children. Which is why I posted it.`

That contradiction is the point. Nobu likes receipts without pretending the first interpretation is sacred. A misunderstanding can itself be the reason the item is funny enough to file. Rummy recurs as a familiar exhibit/observer counterpart who objects loudly from inside the same joke lane.

`Light mode gets me every time.` stays a UI grievance / Petty Crime, not a medical diagnosis. `My favorite food.` remains visually unresolved. Screenshots are **POSTED BY Nobu** unless maker, capturer, or depicted subject credit is separately established.

Hard canon wins: **Nobu = Xuseio; UL Party Director; not Officer.**

## Moon — all-seeing witness, wrong-room physician

The late Daycare suffix adds a clean contradiction to Moon's existing observer role. She catches Dream `HIDING SHROOMS!!` and declares `I am a moon,so i see all`; months later she joins the `rumfection` / `gillifection` bit as a fake vaccinator, reassures the patients `It will hurt alittle ~♡`, and only after completing the treatment plan realizes: `Wait this isn't main chat`.

Two weeks later she effectively sentences Sou to Wall; Sou claims the `fame` half for herself; Moon immediately points out `But the word shame is right there`.

Moon therefore likes the observer/prosecutor seat without staying outside the incident. She sees the joke, names it, assigns mock jurisdiction, then climbs into it. Moon↔Sou supports comfortable direct counter-teasing, not a friendship rank. The fake clinic is theatrical chat play, not a medical role, and the nurse GIF is POSTED BY Moon rather than authored by her.

## Broken-bot rabbit materially advanced, not solved

A 2022 Lobby source now directly labels a separately added account/function `(word chain bot^)`. The export has collapsed the mentioned account into a pooled Deleted User object, so the original bot identity is not recoverable there. This independently confirms a word-chain bot existed by August 2022 but still does **not** bridge that exact account to the March 2023 `Approx 279 hours` breakage. Saber is not inferred from adjacency.

## Publication / verification

Run 609 intake reader work touched the Run 608/609 deepener layer, including:
- `src/data/character-bios-run608-intake.ts`
- `src/data/cast-run608-intake.ts`
- `src/data/bio-policy.ts`
- `src/data/character-page-data.ts`
- canon-preserving Run 608 overlays that keep Noether and Nobu on their locked current roles.

Exact verified/deployed reader SHA for the Mia / Noether / Nobu / Moon bundle: **`32b13a78cb3083b9562c0f2feed59cb8dcfc4443`**.

Verification/deployment:
- Build workflow `34158934464`: **success**.
- Pages workflow `34158934468`: **success**.
- Pages build/artifact job `101856493388`: **success**.
- Actual Pages deploy job `101856569019`: **success**.
- Pages report/status job `101856605652`: **success**.

`main` subsequently advanced with a separate Run 609 Julian reader change. That later change is not claimed as part of this intake review; `32b13a78...` is the exact independently verified receipt for the four-person bundle above. This state/report update is reader-neutral.

## MAIN split

MAIN reader-facing files changed **0** in this reconciliation. Noether's Core delta was already owned there and was deduped. Mia's newsroom correction loop, Moon's witness/prosecutor contradiction, and Nobu's ambiguity-powered filing are accepted richer MAIN biography debt. The controlled MAIN source-verification → Astro → built-output verification → production deployment workflow is deliberately decoupled from ordinary pushes and was not safely dispatchable through the available repository action surface, so no unverified MAIN reader edit was made.

## Attribution / safety rails applied

- Current role canon beats old role snapshots and miner-local wording.
- Mia = Mimi / Miaka / Opalite Honey / `༯` remains one person.
- Noether is current Game Officer.
- Nobu = Xuseio and is UL Party Director, not Officer.
- `Unsugar`, `sugar daddy`, infection/doctor, ship/marriage, and mock-lawsuit language remains theatrical unless separately supported.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
- Final-export reactions do not establish click timing.
- Earliest surviving evidence is not automatically origin.
- q18 remains partial.

## Carried unresolved rabbits

Still open: DyingFox stable-ID conflict; `ulstreamer` / Mr. Streamer owner; Ghoulie's exact admission date/person/mechanism and unidentified `sama`; Nothien's MAIN repair; q18 partial/retrieval-blocked branches; ShiyaX account-intruder recurrence; `#PROTECCtheASSETS` recurrence; exact 2023 broken word-chain bot identity; unresolved Wall/Louvre/Daycare media attribution; Ritha lived Battle Leader execution; Chubi lived Officer/Sniper execution; Spirit event identity/rules.