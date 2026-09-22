# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-22 — Run 1589 close_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` remains the controlling miner-consumption ledger. MAIN canon locks and resolved identity corrections remain the highest-priority identity/role layer. WIKI owns structured Cast dossiers, Relationships, Episodes, Running Gags, Quotes, Locations, and Gallery/media notes; MAIN owns richer person-first biographies.

## Census / current queue

The mandatory full census remains **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered refs, 0 unread pending-review branches after close, 1 reviewed branch pending inherited MAIN verification, 9 older reviewed `pending_publication` families, 0 backlog, and 0 overdue**. Both Club-Only recovery lanes remain current.

Run 1589 reviewed two advanced miner tails checkpoint-first from changed `archive-intake/*` handoffs only:

- Daycare: prior reviewed frontier `55c03c707c3ccbc73df0d8fc0f342a7211f572ba` → `cebe1d6f12a29b2e905ae56cb2996faa5ab00c34`.
- Louvre / AI Art / Other Games: consumed `85f39bb2161a251ab164eacad46f303b385bd078` → `e662f17bd76721d8303236a0536f8a0d4f7155fa`.

The closing live branch sweep found both reviewed heads still pinned there, with the other active miner refs unchanged. No raw archive was re-mined and no miner branch was merged into a publishing branch.

## Reader changes

Final Run 1589 reader commit: **`8ae75128e192866acee7f5a4cb731a5bb97ca815`**.

### Tae ↔ Rummy

Tae now has a structured owner keyed to stable account `592243050722492424`, and Rummy's existing owner carries the reciprocal half. Their strongest surviving grammar is almost comically compressed: on March 31, 2022 they escalate through versions of each other's names, longer vowels and caps, then drop directly into a reciprocal goodnight. Later Tae can swing from `LEAVE RUMMY ALONE` to `rummy what is this behavior` without the relationship suddenly becoming hostile. The durable read is high-context friendship play with a mock-defender ↔ mock-prosecutor swing.

The nearby attachment remains POSTED BY Rummy only; its contents were not inspected. Nothing in this packet establishes romance, literal family, exclusivity, a closeness hierarchy, moderation authority, or actual conflict.

### Momo

Momo / `miin_mochii`, stable account `687376846647853107`, now carries the stronger longitudinal contradiction: in April 2023 she says she had deleted Dragon Raja the previous year because she was burnt out and the person running her account had quit too, while the same account remains present in UL's assigned creative-room corpus afterward. The useful read is **game withdrawal ↔ continued social/creative participation**, not abstract loyalty, uninterrupted attendance, or a diagnosis. `the one running my account` remains unidentified.

`It always makes me pale` is kept as AI-render/filter output recognition, not real-world appearance evidence or media authorship.

The initial Run 1589 patch briefly attached the April 2023 interlocutor to canonical Mia from the miner handoff's display label. That was corrected before final verification: the public owner no longer uses the display label as an identity bridge. The resolved project correction **Mia ≠ Mimi; Opalite belongs to Mimi** remains controlling, and this packet does not reopen it.

MAIN received **0 reader-facing prose changes intentionally** from these packets: both findings currently deepen structured WIKI owners more cleanly than they justify new or padded whole-person MAIN biography copy.

## Verification / deployment

Final corrected reader commit `8ae75128e192866acee7f5a4cb731a5bb97ca815` passed:

- **Build Underlords Wiki `35717583232` — success.**
- **Deploy Underlords Wiki Preview / Pages `35717583242` — success**, including successful Pages build, deployment, and report jobs.

The earlier reader `0bbd54f0d86b780fd3d2465f0038fb6210e6f758` also built successfully, but it is superseded by the identity-custody correction above and is not the controlling reader frontier.

This integration-state commit is reader-neutral and intentionally uses skip-CI bookkeeping semantics.

## Existing rails carried forward

- BishopThaGuru matching display names remain unbridged because miner stable `362396877502808064` conflicts with earlier WIKI stable `532544823624810506`.
- Stable `459696170759880745` remains canonical Ricochet / Rich; the separate WOO/DragonRich actor stays distinct unless independently bridged.
- Mia and Mimi remain separate under the resolved project correction; stale display/alias wording does not fuse them.
- Shame → Fame remains a public culture pattern with narrowed chronology, not an exact origin certificate.
- Joke-family language stays nonliteral; role arrays do not establish appointment chronology.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
- Tae/Rummy social familiarity does not establish romance, family, exclusivity, conflict severity, or a closeness ranking.
- Momo's game-specific burnout statement does not establish burnout from UL, gaming generally, or other parts of her life.

## Consumption / MAIN verification debt

Louvre / Other Games is reviewed and consumed through `e662f17bd76721d8303236a0536f8a0d4f7155fa` after the corrected WIKI reader passed build and deployment.

Daycare is reviewed through `cebe1d6f12a29b2e905ae56cb2996faa5ab00c34`, but its contiguous consumed cursor remains `16d9ac845f9375ee2fc67444595673b309235c38` solely because the older MAIN Woosung/Rich reader correction is still verification-gated. Workflow `35672332827`, **attempt 40**, again failed before any Source + Astro + built-output verification step instantiated; the job returned `steps=null`. The new Tae/Rummy tail is interpreted and published and does not need rereview unless the miner HEAD advances; only the inherited MAIN verifier gate should be retried.
