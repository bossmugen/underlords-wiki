# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 22:27 PDT**.

Full pass detail is durable on MAIN under `archive-intake/INTEGRATION_PASS_2026-08-28_2227_DUAL.md`.

## Census / queue

The mandatory census found **25 miner branches**. Core Rooms and Wall both advanced during the run; every observed head was registered on MAIN before deep review. Core's packaged 22:20 handoff was reviewed through `b4a6d020cf85fbb8c7a02e70112da4467cd0b8e0`, and Wall's 22:13 handoff was reviewed through `e022c9928238c34931fa8503e08aacaa0d7ad58a`.

Finite pending / backlog / review-overdue closes at **0 / 0 / 0** at the reviewed boundary. Living Ensemble and both Club-Only branches remain fully consumed. The cumulative null-consumed recovery queue remains **Core Rooms + Wall** because older safe-baseline packages still exist.

## Core — Porgo gets a life outside the login screen

Stable account `475495417639993354` directly self-identifies as `alvolufi` in the 2020 Lobby and `itporgo!` in a 2022 Lobby pass. Those are safe historical IGN snapshots on one account; they are not a proven first-ever join date, return date, or exact rename chronology.

The useful story is not the name change anyway. In October 2020, when Porgo says real life may make game activity scarce, Anthos answers `irl always come first`, puts the game account `on vacation`, and Mugen explicitly separates the game from the room: `real life first always, pls don't worry about the game or the club. You're always welcome to come back and or still hang out with us here on discord ❤️`. In June 2022 the same account says work and unpacking may keep Porgo off the game while Discord messages still work; Sye replies `NW, Real Life Priority 👍`.

WIKI therefore adds **Real Life Priority** to `src/data/integrator-episodes.ts`. The scene says the larger continuity thesis through one actual person instead of another generic paragraph about UL outliving a game. The private third-party medical detail in the 2020 source is intentionally omitted.

Core's copy of the Porgo Wall self-shame lead still lacked exact caption-message IDs, but Wall independently recovered them in the same integration pass. The two handoffs were reconciled as one evidence family rather than treated as competing facts.

Core remains cumulative/recovery-in-progress with `last_consumed_sha: null`; older safe-baseline material remains. Spritely/Shurui `plabn` remains unresolved.

## Wall — Porgo prosecutes himself; Cit becomes chemistry

Wall's late handoff resolves Porgo's repeat self-filing at text level. On June 20, 2022 Porgo files `putting myself up here cause im very mad at myself`, follows with `figgy is mad at me`, and on July 9 returns with `im exposing myself`. The attached images remain visually uninspected, and Figgy remains unidentified. MAIN owns this material by deepening the existing Wall procedure exhibit rather than forcing a thin Porgo Character route into an unresolved roster shelf.

The same Wall package supplies the complete **Citrinitas** naming collapse. Mugen welcomes visible `cit`; Cele reads it as `zit`; Moon lands on `city`; Mugen's brain autofills `citric acid`; Ren answers `Citric`; and Citrinitas finally volunteers that the full name was `Citrinitas`, which admittedly does make the chemistry charge difficult to dismiss. WIKI adds **Welcome to Citric Acid** as a bounded episode. The full name is direct self-report, but `cit` predates the scene and `City` / `Citric` remain one-scene peer mutations unless later recurrence surfaces. Mugen is only POSTED BY for the uninspected welcome image.

Seth's three-day-later true reply — `Lol,no explanation for you,dear` — is good thin character evidence, but the screenshot accusation remains visually unresolved, so no standalone Seth object was manufactured. RealGameJack + Daya sharing *86* anime taste stays backstage.

Wall remains cumulative/recovery-in-progress with `last_consumed_sha: null`; the next older safe-baseline package remains **2026-08-25 01:46**.

## Current queue / recovery mirror

- **Full miner census:** 25 branches.
- **Finite pending / backlog / review-overdue:** 0 / 0 / 0 at the reviewed boundary.
- **Living Ensemble:** consumed through `66c3227c687965a4dae9b372fdcbe2dc128611ba`.
- **Core Rooms:** reviewed through `b4a6d020cf85fbb8c7a02e70112da4467cd0b8e0`; cumulative `last_consumed_sha` null.
- **Wall:** reviewed through `e022c9928238c34931fa8503e08aacaa0d7ad58a`; older safe-baseline recovery remains from 01:46; cumulative `last_consumed_sha` null.
- **Daycare:** consumed through `695233137ba596e92baccf646501ba4b40d2ef12`.
- **Louvre:** consumed through `b62a77b00685e9eb44de9945d5673f1592348c57`.
- **Whiskey:** consumed through `018540484985f4b1c172557d8efd6a187d04fe68`.
- **Club-Only 2020:** consumed through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **Club-Only 2021–2026:** consumed through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- All other finite miner branches remain consumed through their current seen heads in MAIN's ledger.

## Holds / canon fences

Porgo's exact IGN transition timing remains unknown. The 2020 Lobby door is not promoted into a first-ever join date; the 2022 Lobby pass is not promoted into a return. Porgo's attached Wall images and Figgy identity remain unresolved. Citrinitas's `City` / `Citric` mutations are not promoted into permanent aliases, and visible `cit` is not assigned an origin from a scene where it already exists. Seth's screenshot charge remains unknown. Spritely `plabn` remains unresolved. Similar names do not create identities; current/export role arrays do not create appointment chronology; POSTED BY does not become MADE BY, CAPTURED BY, or FEATURING.

## Public changes / verification

Reader-facing WIKI changes: `src/data/integrator-episodes.ts` gains **Real Life Priority** and **Welcome to Citric Acid** at content commit `0b8637de8844686655f86e04314aca99ad80a3b9`. The repository's standalone Astro workflow completed successfully in run `33236474484`, and the Pages build → deploy → report workflow completed successfully in run `33236474526`.

Reader-facing MAIN change: `src/lib/wall-archive-exhibits.ts` deepens the existing Wall self-procedure exhibit with Porgo's repeat self-filing at content commit `a2847b49f76738737d644a56703c821e89a2f909`. MAIN's exact-commit workflow completed source canon/architecture verification, Astro build, built-output verification, and Cloudflare deployment successfully in run `33236447213`.

This state reconciliation itself triggers the repository's normal exact-head workflows; the closing MAIN run report records final publishing-head verification without rewriting lore merely to chase its own status commit.
