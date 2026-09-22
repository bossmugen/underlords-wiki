# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-22 — Run 1591 close_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` remains the controlling miner-consumption ledger. MAIN canon locks and resolved identity corrections remain the highest-priority identity/role layer. WIKI owns structured Cast dossiers, Relationships, Episodes, Running Gags, Quotes, Locations, and Gallery/media notes; MAIN owns richer person-first biographies.

## Census / current queue

The mandatory full census remains **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered refs, 0 unread pending-review branches, 1 reviewed branch pending inherited MAIN verification, 9 older reviewed `pending_publication` families, 0 backlog, and 0 overdue**. Both Club-Only recovery lanes remain current.

Run 1591 enumerated all 30 active `archive-miner-*` / `archive-miner/*` refs directly from the repository and found **every active miner HEAD unchanged from the Run 1590 frontier**. Because the recorded `last_seen_sha` values were already current, `archive-intake/INTEGRATOR_BRANCH_STATE.json` required no content mutation this run; the census result is durably recorded in the MAIN Run 1591 report instead of manufacturing a timestamp-only ledger rewrite.

There were no intake deltas to reread, no new evidence families to reconcile, no new duplicate/corroboration decisions, and no conflict/rabbit movement. No raw archive was re-mined and no miner branch was merged into a publishing branch.

The most recent reviewed tails remain:

- Daycare reviewed through `cebe1d6f12a29b2e905ae56cb2996faa5ab00c34`.
- Louvre / AI Art / Other Games consumed through `e662f17bd76721d8303236a0536f8a0d4f7155fa`.

## Reader changes

Run 1591 reader-facing WIKI changes: **0 intentionally**. With no miner delta, there was nothing new to synthesize into Cast, Relationships, Episodes, Running Gags, Quotes, Locations, or Gallery/media notes.

The latest verified reader remains Run 1589 commit **`8ae75128e192866acee7f5a4cb731a5bb97ca815`**, carrying the Tae ↔ Rummy friendship grammar and Momo's game-withdrawal ↔ continued social/creative-presence contradiction.

MAIN likewise received **0 reader-facing prose changes** this run. No biography was padded merely to create activity from a zero-delta census.

## Verification / deployment

No WIKI reader bytes changed in Run 1591, so no ceremonial rebuild or redeploy was triggered.

The latest verified/deployed WIKI reader remains `8ae75128e192866acee7f5a4cb731a5bb97ca815`:

- **Build Underlords Wiki `35717583232` — success.**
- **Deploy Underlords Wiki Preview / Pages `35717583242` — success**, including successful Pages build, deployment, and report.

This integration-state update is reader-neutral and uses skip-CI bookkeeping semantics.

## Existing rails carried forward

- BishopThaGuru matching display names remain unbridged because miner stable `362396877502808064` conflicts with earlier WIKI stable `532544823624810506`.
- Stable `459696170759880745` remains canonical Ricochet / Rich; the separate WOO/DragonRich actor stays distinct unless independently bridged.
- Mia and Mimi remain separate under the resolved project correction; Opalite belongs to Mimi, and stale display/alias wording does not fuse them.
- Shame → Fame remains a public culture pattern with narrowed chronology, not an exact origin certificate.
- Joke-family language stays nonliteral; role arrays do not establish appointment chronology.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
- Tae/Rummy social familiarity does not establish romance, family, exclusivity, conflict severity, or a closeness ranking.
- Momo's game-specific burnout statement does not establish burnout from UL, gaming generally, or other parts of her life.

## Consumption / MAIN verification debt

There were **no consumed-SHA advances in Run 1591** because no miner branch advanced.

Daycare remains reviewed through `cebe1d6f12a29b2e905ae56cb2996faa5ab00c34`, but its contiguous consumed cursor remains `16d9ac845f9375ee2fc67444595673b309235c38` solely because the older MAIN Woosung/Rich reader correction is still verification-gated.

Workflow `35672332827`, **attempt 43**, again failed before any Source + Astro + built-output verification step instantiated; the failed job returned `steps=null`. This remains runner/startup infrastructure failure rather than a demonstrated source, canon, Astro, or rendered-output failure. The reviewed Daycare tail does not need rereview unless its miner HEAD advances; only the inherited MAIN verifier gate should be retried.
