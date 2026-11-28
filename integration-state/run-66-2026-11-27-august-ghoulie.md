# WIKI Integrator Run 66 — 2026-11-27

## Source and branch review

- Full MAIN branch census: 138 remote branches; 30 active miner refs (26 slash, 4 hyphen); 51 tracked identities; 0 missing active entries; 0 stale `last_seen_sha` values; 21 historical refs no longer remote.
- Assigned source branches read directly: August Reunion `archive-miner/aug-2026-living-ensemble-hourly` at `fcc27ac7a4457fc5c93c575bd2813b8e19abfa3b`; Main HQ `archive-miner/main-hq-hourly` at `e172df0641d6fa9c9d47a2bec6ff40c1aee0fb3c`.
- Anti-starvation branch: Backroom `archive-miner/backroom-deals-2026-08-24` at `9c143a7c146af4fc90de4b258bee1c848a2818a0`; Pass61 checkpoint/candidates/findings/receipts/rabbits/people-index read after the branch checkpoint.

## WIKI reader changes

August Reunion Run06 + Run11 Ghoulie Wall material was folded into:

- `src/data/dossier-snapshots/baby-lyssa.md`
- `src/data/integrator-episodes.ts`

Final WIKI reader commit: `2d9d2ce4631568c5956856bc41d854ca8a6aba0f`.

The Cast dossier now records Ghoulie's quote-channel demand, the `wanna bet?` / `wall of FAME` contest, and Ren's July `back to claim her wall` / `the shame doesn’t wait my dear` callback. The existing Episode was extended rather than creating a duplicate. MAIN carries the narrative version in `src/content/people/baby-lyssa.md`.

## Verification

- Build Underlords Wiki run `46089859951`, job `140807992833`: SUCCESS.
- Pages deployment run `46089859954`: build `140808028338`, deploy `140808177724`, report `140808261692`: all SUCCESS.
- Exact `pages_build_version`: `2d9d2ce4631568c5956856bc41d854ca8a6aba0f`.
- Live URL: `https://bossmugen.github.io/underlords-wiki/`.

## Reconciliation and holds

- Main HQ Yelik candidate is already reader-covered; no duplicate WIKI copy. Base Main HQ 16 headings remain 14 covered / 2 source-blocked. Gabu Health Mafia exact IDs/speaker chain and Mugen–Sye Plutonian exact message ID remain unavailable; raw Main HQ transcript remains inaccessible. The 47 file-level handoffs are not a distinct A/B count.
- Backroom Pass61 Panda/Eos WALTZ and Candy WINTER details are already integrated; no duplicate. Panda's image and the raw War Room ZIP remain source-blocked.
- Gilli's Run06 attachment `824501840443998238` remains uninspected. Pebble identity remains unresolved; no bridge was invented.
- August still has 27 known file-level handoffs and an unknown / uncertified distinct accepted A/B remainder. Main HQ still has 47 known file-level handoffs and an unknown / uncertified A/B remainder. Neither family is closed.
- No miner branch was merged. No consumed SHA advanced; all reviewed branch HEADs equal their existing consumed SHAs.

