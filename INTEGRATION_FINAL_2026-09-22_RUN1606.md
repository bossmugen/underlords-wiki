# UNDERLORDS WIKI — RUN 1606 FINAL

## Census / intake

The mandatory opening and closing censuses on MAIN both found **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered refs, 0 unread pending-review branches, 3 reviewed MAIN lanes pending verification, 9 older reviewed `pending_publication` families, 0 backlog, and 0 overdue**.

All 30 live `archive-miner-*` / `archive-miner/*` heads matched the reconciled Run 1605 frontiers at both census points. There were therefore **0 intake deltas to reread, 0 genuinely new findings, 0 duplicate-family changes, 0 conflict/rabbit resolutions, and 0 consumed-SHA advances**. Both Club-Only recovery lanes remain current.

## WIKI surface

**Reader-facing changes: 0.** No reader build or deployment was triggered because reader bytes did not change.

The latest verified/deployed WIKI reader remains `853c0d0e582e262cdbff9c45b4355425e89fc5a1`, with:

- Build Underlords Wiki `35756416424`: **success**.
- Deploy Underlords Wiki Preview / Pages `35756416358`: **success through Pages deployment**.

Run 1606 records state only; it does not alter Cast, Relationships, Episodes, Running Gags, Quotes, Locations, Gallery/media notes, or other reader surfaces.

## MAIN verification debt

The three inherited MAIN verification lanes were retried without rereading intake:

- Daycare / Woosung→Rich workflow `35672332827` remains **startup_failure at attempt 50**, with zero jobs instantiated.
- Core Rooms / Events / Ricochet workflow `35727743323` reached **attempt 18** and again produced a failed verification job with `steps=null` before Source + Astro + built-output checks instantiated.
- Wall / Tony workflow `35749412434` reached **attempt 8** and again produced a failed verification job with `steps=null` before Source + Astro + built-output checks instantiated.

These remain runner/startup-shaped failures rather than demonstrated content failures. Consumption therefore remains gated at:

- Wall reviewed `5fb20d777b5169de9a74cce277617d7a39bd8db9`, consumed `d13ba0116859c2ef50b06e2104fb38602a17c457`.
- Daycare reviewed `89a11ea6107420acab1a20fc3d72a9d5dcb900a6`, consumed `16d9ac845f9375ee2fc67444595673b309235c38`.
- Core reviewed `72d2932b59ff7fe68ee9aab032542c3cfeed40c3`, consumed `e0d32f57ccbfb9433eac730ffd0e6786a0054b3d`.

## Held rails

Mia and Mimi remain separate; Opalite belongs to Mimi. Same display names do not bridge stable IDs. Emi `509574963015974932`, command-prompt Erys `752184632629198919`, and existing Erys `934054466463739914` remain separate absent an explicit bridge. Account-specific Oyasumi/Wasa and Eos records remain distinct from same-name owners absent direct bridges. The Whiskey Cele collision, Zhēnxī stable-ID conflict, and Nobukatsu→Nobu non-bridge remain unresolved. Joke-family / romance / role language stays nonliteral without support. Earliest surviving is not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
