# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 22:41 PDT**.

Full pass detail is durable on MAIN under `archive-intake/INTEGRATION_PASS_2026-08-28_2241_DUAL.md`. The immediately preceding advanced-branch publication pass is preserved at `archive-intake/INTEGRATION_PASS_2026-08-28_2227_DUAL.md`.

## Census / queue

The mandatory census found **25 miner branches**. Every observed `archive-miner-*` / `archive-miner/*` head is represented in MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` with separate `last_seen_sha` and `last_consumed_sha` state. A closing branch listing showed the same 25 miner heads.

Finite pending / backlog / review-overdue closes at **0 / 0 / 0** at the reviewed boundary. Living Ensemble and both Club-Only branches remain fully consumed. The cumulative null-consumed recovery queue is now only **Core Rooms + Wall** because older safe-baseline packages still exist.

The old prompt-level Club-Only recovery warning is stale against durable state: Club-Only 2020 remains consumed through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`, and Club-Only 2021–2026 remains consumed through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.

## Advanced current-head work preserved

The preceding 22:27 pass safely reviewed Core Rooms through `b4a6d020cf85fbb8c7a02e70112da4467cd0b8e0` and Wall's current head through `e022c9928238c34931fa8503e08aacaa0d7ad58a`. This continuation re-read that durable state rather than racing or duplicating it.

Core's new Porgo evidence family remains WIKI-owned as **Real Life Priority**: the same stable account self-identifies as `alvolufi` in 2020 and `itporgo!` in 2022, while exact rename timing stays unresolved. In 2020 Anthos answers a real-life interruption with `irl always come first`, and Mugen explicitly separates game/club obligations from remaining welcome in Discord. In 2022 the same account says work/unpacking may block game activity while Discord remains reachable; Sye replies `NW, Real Life Priority 👍`. Private third-party medical detail from the source remains omitted.

Wall's current-head package remains split cleanly across surfaces. MAIN owns Porgo's repeat self-filing inside the established Wall procedure exhibit. WIKI owns **Welcome to Citric Acid**, where visible `cit` gets read as `zit`, `city`, `citric acid`, and `Citric` before the account directly self-reports the full name `Citrinitas`. `cit` predates the scene; `City` / `Citric` remain scene-level mutations, not permanent aliases. Seth's delayed `Lol,no explanation for you,dear` stays held as thin voice because Kiro's accusation image is still uninspected.

## Wall recovery — 01:46 closes as duplicate/corroboration

The next older Wall safe-baseline package, `2026-08-25 01:46`, has now been reviewed checkpoint-first and intake-only.

### Mia ↔ Momo — already owned

The package preserves the reciprocal April 7→9 sequence:

- Mia: `me and momo are twinsss`.
- Momo: `Mimi’s twin`.
- Mia: `love u twinnn`.
- Momo: `Love ya 2`.
- Two days later Momo true-replies to another Mia Wall post: `you are both Mimi & Momo.`

This exact relationship texture already exists on MAIN's Mia/Momo dossiers and WIKI's Mia material, with the correct boundary that Mia and Momo are distinct people and `twin` is house/play language rather than biology or an identity merge. No duplicate WIKI relationship or episode object was added.

The two source images remain visually uninspected, so the archive still does not claim what visual resemblance or situation caused the bit. The scene is also not the origin of UL's broader `twin` vocabulary.

### Oyasumi — already owned

The package also preserves Oyasumi's recurring fake-evidence register:

- 2022: `Still hard evidence of your crimes`.
- 2023: `Caught my boy in 4k`.

Both MAIN and WIKI Oyasumi dossiers already own this person-level behavior. It remains social Wall language, not a Prosecutor/Investigator appointment and not proof UL invented generic `caught in 4k` phrasing. The underlying 2022 exhibit and the identity behind `my boy` remain unresolved. No duplicate public object was added.

### Mean Tree — corroboration belongs elsewhere

Sye's December 2020 `Oh damn ! Mean Tree at it again TwT` is useful evidence that recurrence was already legible by that date, but the image remains uninspected and the canonical Mean Tree explanation belongs to the dedicated Mean Tree corpus. WIKI therefore does not manufacture a competing origin from Wall.

## Holds / rabbits carried forward

The 01:46 package intentionally leaves unresolved: what prompted Mia/Momo's twin bit visually; Oyasumi's 2022 exhibit and 2023 `my boy`; Gilli→Gabu `bot answers again` origin; WOO→Nobu `TRAITOR` cause; Oyasumi→Ansun unsellable-items mechanics; Sye's contextless `mating ritual`; the Ren/Snow fountain-of-youth screenshot cause; Eos/Marian `our two childs` targets; and older Wall rabbits not explicitly closed.

Core still holds Spritely/Shurui `plabn`, Porgo's exact IGN transition timing, and its older safe-baseline recovery. Similar names do not create identities; exporter role arrays do not create appointment chronology; joke family/relationship language does not become literal; POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.

## Current queue / recovery mirror

- **Full miner census:** 25 branches.
- **Finite pending / backlog / review-overdue:** 0 / 0 / 0.
- **Living Ensemble:** consumed through `66c3227c687965a4dae9b372fdcbe2dc128611ba`.
- **Core Rooms:** reviewed through `b4a6d020cf85fbb8c7a02e70112da4467cd0b8e0`; cumulative `last_consumed_sha` remains null.
- **Wall:** current head reviewed through `e022c9928238c34931fa8503e08aacaa0d7ad58a`; older safe-baseline recovery now additionally covers the `2026-08-25 01:46` package; cumulative `last_consumed_sha` remains null.
- **Daycare:** consumed through `695233137ba596e92baccf646501ba4b40d2ef12`.
- **Louvre:** consumed through `b62a77b00685e9eb44de9945d5673f1592348c57`.
- **Whiskey:** consumed through `018540484985f4b1c172557d8efd6a187d04fe68`.
- **Club-Only 2020:** consumed through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **Club-Only 2021–2026:** consumed through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- All other finite miner branches remain consumed through their current seen heads in MAIN's ledger.

## Public changes / verification

No new reader-facing WIKI copy was accepted from the Wall 01:46 recovery slice because its A/B material is already richer on existing canonical owners or remains unresolved. The immediately preceding reader-facing WIKI change remains `src/data/integrator-episodes.ts` at content commit `0b8637de8844686655f86e04314aca99ad80a3b9`, adding **Real Life Priority** and **Welcome to Citric Acid**. Standalone Astro build run `33236474484` succeeded, and Pages build → deploy → report run `33236474526` succeeded for that exact content commit.

The corresponding reader-facing MAIN change remains Porgo's repeat self-filing in `src/lib/wall-archive-exhibits.ts` at content commit `a2847b49f76738737d644a56703c821e89a2f909`; its exact-content workflow `33236447213` succeeded through source verification, Astro build, built-output verification, and Cloudflare deployment.

This state-only reconciliation triggers WIKI's normal exact-head workflows. The closing run report checks the final publishing heads after durable bookkeeping lands.
