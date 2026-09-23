# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-22 — Run 1630 reconciled close_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` remains the controlling miner-consumption ledger. MAIN canon locks and resolved identity corrections remain the highest-priority identity/role layer. WIKI owns structured Cast dossiers, Relationships, Episodes, Running Gags, Quotes, Locations, and Gallery/media notes; MAIN owns richer person-first biographies.

This file is the **current integration frontier**, not a duplicate run ledger. Earlier run detail remains durable in Git history and MAIN's per-run `archive-intake/INTEGRATION_FINAL_*` reports.

## Run 1630 — current queue

The mandatory full census is **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered refs, 0 unread pending-review branches, 3 reviewed MAIN lanes pending verification, 9 older reviewed `pending_publication` families, 0 backlog, and 0 overdue**. Both Club-Only recovery lanes remain current.

No active miner advanced beyond the Run 1629 frontier. No intake delta was reread and no new reader-facing material was published on either surface. MAIN refreshed the controlling branch-state JSON for Run 1630 at `cac463bffeb354620e34f9d9244965779af9e558`; all 30 live refs still match their recorded `last_seen_sha` values.

## WIKI reader frontier

Final verified/deployed reader remains **`1efa060f4b36eb975c340425545667a9b8998051`** from Run 1609.

The current Gabu NIGHTLIFE scheduler self-correction remains the newest reader-facing integration. No additional character, relationship, episode, running-gag, quote, location, or gallery material was added in Run 1630 because the miner frontier did not move.

## Verification / deployment

No WIKI reader bytes changed in Run 1630, so no new build or Pages deployment was triggered.

The existing reader frontier remains green on fresh status recheck:

- Build Underlords Wiki `35766902626`: **success**.
- Deploy Underlords Wiki Preview / Pages `35766902619`: **success**, including the deployed reader frontier.

This integration-state commit is reader-neutral and uses `[skip ci]`.

## MAIN surface decision

**MAIN reader-facing changes in Run 1630: 0.** No MAIN reader deployment is claimed.

The branch census found no new intake to integrate. Existing person-first biographies therefore remain untouched rather than receiving duplicate receipt paragraphs.

## MAIN verification debt / consumption

Fresh status checks found the three inherited MAIN reader gates unchanged without rereading their already-reviewed intake:

- Daycare workflow `35672332827`: attempt **50**, `startup_failure`, zero jobs.
- Core Rooms / Events workflow `35727743323`: attempt **26**, `cancelled`, zero jobs.
- Wall / Tony workflow `35749412434`: attempt **30**, `failure`; its required `Source + Astro + built-output verification` job has `steps=[]` and `runner_id: 0`, so it failed before the actual verification steps instantiated.

These remain runner/startup infrastructure failures, not demonstrated source, canon, Astro, or built-output failures.

Current review / consumption frontiers remain unchanged:

- Birthdays / PR / VC is reviewed and consumed through `e626131d172a6beaa297e68416403ae56abd20d8`.
- Wall is reviewed through `bbc22bedc7f47815c0df14fae1415776c51f580e`; contiguous consumed cursor remains `d13ba0116859c2ef50b06e2104fb38602a17c457` behind inherited accepted MAIN Tony verification debt.
- Daycare is reviewed through `8817bf01eb43a2d0553bae20bf8339b76cc2cd5c`; contiguous consumed cursor remains `16d9ac845f9375ee2fc67444595673b309235c38` behind inherited accepted MAIN Woosung→Rich / DragonRich verification debt.
- Core Rooms / Events remains reviewed through `72d2932b59ff7fe68ee9aab032542c3cfeed40c3`, consumed only through `e0d32f57ccbfb9433eac730ffd0e6786a0054b3d` behind inherited MAIN Ricochet verification debt.
- Louvre remains reviewed/consumed through `f6a40d1a008209684dbea53a4daaea602197fbc5`.
- Whiskey remains reviewed/consumed through `e82db8e2db344992ce0cee4f1dc029c4dff5169c`.
- `archive-miner/club-only-2021-2026-hourly` remains reviewed/consumed through `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- `archive-miner-clubonly-2020-hourly` remains reviewed/consumed through `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Hard rails still in force

Same display names do not bridge stable IDs. Mia remains distinct from Mimi / Opalite Honey / `༯`. The Whiskey Cele collision and Zhēnxī stable-ID conflict remain unresolved. Joke-family, joke-romance, and joke-role language stay nonliteral without support. Earliest surviving is not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

## Run 1630 durable handoff

MAIN controlling branch-state commit: `cac463bffeb354620e34f9d9244965779af9e558`.

MAIN per-run close report commit: `5a9bf64f6741debfc6d608cae13a6f6527f75b54`.
