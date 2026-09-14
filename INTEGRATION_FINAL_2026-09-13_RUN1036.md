# Underlords Wiki — Integration Final — Run 1036

## Census and intake

MAIN's controlling census remains **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered refs, 0 unread review tails, 0 backlog, and 0 overdue branches**. Both Club-Only recovery-priority lanes remain current.

Every active miner HEAD matches the Run 1035 frontier. No miner delta required review, so no archive handoff was reopened and no new public lore was manufactured from an unchanged corpus.

## Reader result

WIKI reader-facing changes: **0**.

The exact Kuki reader `66a7318e224cfbc40ca04bd3e64b56ffe6db68da` remains the previously verified/deployed reader from Run 1035:

- Build Underlords Wiki run **34793526445** — success.
- Deploy Underlords Wiki Preview / Pages run **34793526451** — success.

No redundant Astro/Pages cycle was launched for an unchanged reader tree.

## MAIN gate status

MAIN reader-facing changes this run: **0**. The accepted Kuki reader remains publication-gated at exact candidate `6a77343bcbb6f34459d28a2457cbabd0b2db1141`.

`UL Production Build + Deploy` run `34793538849` was retried as attempt 3. Job `103825361046` again failed before runner allocation with an empty steps array / runner id 0. MAIN source verification, Astro build, built-output verification, deployment, and live confirmation therefore still did not execute. This remains infrastructure/pre-runner failure rather than a content-build failure.

Wall is fully reviewed through `b825955d947e023ddde498541f97456f8715ba88`, but its formal MAIN consumed pointer remains at `066e3c3f1ed8dad6b0ac38f55f6dfa5de3abe6b4` until the accepted MAIN publication gate clears.

## Held state

No new findings were integrated, no duplicate family was newly collapsed, no rabbit/conflict changed state, no formal consumed SHA advanced, and nothing was intentionally published to only one surface. Existing Kuki identity/provenance rails and the eight Wall forensic rabbits remain unchanged.