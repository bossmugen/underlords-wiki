# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 364_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Historical cycles remain in per-run state files; current detail is in `INTEGRATION_STATE_RUN_364.md`.

## Current census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review after reconciliation: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

Both Club-Only recovery priorities remain current through head:
- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Run 364 found **no active miner ref advanced beyond Run 363's reviewed heads**. Wall remains at `e3fe863696413b23a65bcf8c0330310b6794c724`, Whiskey at `9a21ff247aea20718e26fd5fe43dd727a669997c`, Mugen person-first at `1fbbeb0e0806469d76f1be13442e27209affeaf5`, Louvre/Athenaeum at `3c00b784fc4a7c27b1279deb534ede73a5547b1c`, Core Rooms / Events at `a0797364529b05c45f22b420f1be6b2661e15ee4`, and Daycare at `14d37ef69503c4001b1ee645371582204403954c`. No raw archive was re-mined.

## Recovery continuation

The integrator re-read `archive-intake/club-only-2021-2026-longitudinal-20260819-1857/checkpoint.md` directly from the recovery miner branch. The checkpoint remains saturated at the current retrieval boundary: its A/B findings, exhausted routes, and do-not-churn rules are unchanged, and no new immutable target-room key exists to justify repeating the failed retrieval families.

## Public reconciliation

No new public character, episode, relationship, location, running-gag, quote, or gallery mutation was warranted this run because no miner delta advanced.

Run 363 Hishiro and Momo additions remain in their existing character owners. Anthos's accepted preservation-shaped care read remains banked for her existing owner rather than force-written over concurrent ownership history. Lunnely remains banked because no safe canonical public owner exists; casual `bae` / `taken` language remains non-literal and the `album` payload remains unresolved. The latest Mugen person-first tail remains an explicit negative/saturation pass with no additive public row.

The six reviewed-but-publication-held MAIN families remain Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey.

## Verification / deployment

Run 364 contains no reader-facing WIKI change; only durable integration state changed. Exact-head Build and Pages results are checked after this state write settles.

MAIN is independently verified on its own closing `master` head. A MAIN infrastructure failure does not invalidate a green WIKI state-only publication.

## Consumed cursors

No publication-held `last_consumed_sha` advanced. No miner head advanced either. `last_seen_sha` and `last_consumed_sha` remain distinct, and both Club-Only recovery branches remain consumed through current head.

## Rails retained

Hard canon and resolved identity bridges remain binding. No identity merging from similar names. No appointment chronology from export-time arrays or event-room behavior. Joke rank/family/romance/violence/property remains non-literal without support. Earliest surviving is not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. Uninspected media stays uninspected. Safety-sensitive intake material stays backstage.
