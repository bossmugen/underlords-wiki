# Run 104 — 2026-11-28 — Photo Submissions: early-repeat Cast dossiers

## Reader repair

The LOVE → Lonely → Flowers repeat cohort already had its event-level Episode and person-level MAIN coverage. The missing WIKI piece was the actual Cast routes: the three existing dossier snapshots were not represented in the Cast data, so the Episode could name LEXI, Laila, and Miihi without giving each a navigable dossier.

Added three guest Cast entries and wired the existing dossiers into the WIKI reader:

- **LEXI** — stable account `688932590584987783`; January 11 self-report: `Okaa-san, LoliParadise, S8, 19`; later LOVE, Lonely, and Flowers participation. The LoliParadise / S8 status is preserved for that date; no later UL in-game membership transition is inferred.
- **_-Laila-_** — stable account `800180110573174824`; Lobby welcome on January 16, 2021; Gilli's `Welcome! One sec while I assign your roles hun` followed 1.637 seconds after the MEE6 welcome; then LOVE, Lonely, and Flowers. Her own IGN / club / age answer and exact role remain unresolved.
- **Miihi** — stable account `253897195290361856`; October 25, 2020 Lobby welcome; then LOVE, Lonely, and Flowers; later Wall material keeps the one-word `evidence` summons as her more distinctive social signature. Miihi remains separate from Korea / Milk.

The existing Photoshoot Episode already named all three in its cast list. With the Cast entries in place, its names now resolve to character pages rather than dead-end text.

## Source handoff

Read directly from `archive-miner-photo-submissions-2021`:

- `archive-intake/photo-submissions-2021-visual-contest-2026-08-19-1845-pdt/site-candidate-2026-08-27-0010-early-repeat-entry-context.md`
- `archive-intake/photo-submissions-2021-visual-contest-2026-08-19-1845-pdt/receipts-2026-08-27-0010.md`
- `archive-intake/photo-submissions-2021-visual-contest-2026-08-19-1845-pdt/people-index-addendum-2026-08-27-0010.md`
- `archive-intake/photo-submissions-2021-visual-contest-2026-08-19-1845-pdt/rabbit-holes-2026-08-27-0010.md`
- `archive-intake/photo-submissions-2021-visual-contest-2026-08-19-1845-pdt/checkpoint.md`

Receipt IDs:

- LEXI: `798420116374552596`, `798420201569517598`, `798420225716518932`, `798420339910377504`, `798420570072416277`, `805668415489835008`, `811621070733049886`, `818519188774977577`.
- Laila: `800197411184050256`, `800197418440327239`, `800197628763045898`, `805686930972737556`, `812055517882613810`, `818481503155650623`.
- Miihi: `769955396320231434`, `769955774154801173`, `769955847752777728`, `805842449753833482`, `812025598058561578`, `819449931655807026`.

## MAIN comparison — no duplicate prose

MAIN already has the person-first versions in:

- `src/content/people/lexi.md` — LEXI's January self-report and affection / return pattern.
- `src/content/people/laila.md` — the exact 1.637-second Gilli welcome and three-round return.
- `src/content/people/miihi.md` — the October 2020 Lobby entry, repeat Photoshoot run, and later Wall evidence behavior.

No MAIN reader file needed changing. The surface split is intentional: MAIN owns the fuller person story; WIKI owns the structured Cast entries and searchable routes.

## WIKI reader paths

Changed:

- `src/data/cast-run1614-photo-submissions-early-entrants.ts` — new guest Cast entries, stable account joins, and archive-cast membership.
- `src/data/cast.ts` — imports and applies Run 1614.
- `src/data/dossier-snapshots/laila.md` — folds the exact Gilli line and 1.637-second timing into Laila's existing dossier rather than appending a receipt report.

Existing WIKI files checked and reused:

- `src/data/dossier-snapshots/lexi.md`
- `src/data/dossier-snapshots/miihi.md`
- `src/data/integrator-episodes.ts` — existing Episode `photoshoot-love-theme-announcement-2021` already names all three.

No new Episode was created; this is one person-chronology candidate, not three separate incidents. No image binaries were inspected or published. All submission media remains POSTED BY only; no MADE BY / CAPTURED BY / FEATURING credit was inferred.

## Verification

- Reader commit: `297948baf2dcd3444563282748c9e7fae606dc67`
- Astro build: [run 46134475353](https://github.com/bossmugen/underlords-wiki/actions/runs/46134475353), job `140946595788` — **SUCCESS**
- Build output: **636 HTML files**; built-site audit passed **636 HTML files and 25,701 internal references**.
- The built output explicitly includes `/characters/lexi/index.html`, `/characters/laila/index.html`, and `/characters/miihi/index.html`.
- Exact-commit status: `wiki-build=success` and `wiki-preview=success`; the Pages preview status is posted only after both the Pages build and deployment succeed. Live target: https://bossmugen.github.io/underlords-wiki/

The automation runtime had no repository checkout and could not resolve github.com for a local clone, so the repository's exact-commit Actions build, built-output audit, and Pages deployment status were used for verification.

## Full branch census and anti-starvation

- **30 active miner refs**: 26 `archive-miner/*`, 4 `archive-miner-*`.
- **51 tracked branch records**; 21 historical refs are absent remotely; 0 newly discovered active branches.
- **5 review-overdue families**: `archive-miner-photo-submissions-2021`, `archive-miner-qotd-officers-20260824`, `archive-miner/aug-2026-living-ensemble-hourly`, `archive-miner/backroom-deals-2026-08-24`, and `archive-miner/main-hq-hourly`.

Checkpoint-first reviews:

- **Photo Submissions** — HEAD / last consumed `d45d441feca0110e9495f49b13df9666982bb45c`. Reviewed the 00:10 candidate, receipt, people-index, rabbit-hole, open-question, cumulative candidate, checkpoint, and exhaustion handoffs. The Cast indexing gap is repaired; the family remains open.
- **Club-Only 2021–2026** — HEAD / last consumed `e45fb11c9239e236231bb65645dfd0285bc0078b`. Checkpoint, accumulated findings, deep-mining findings/receipts, site candidates, receipt index, rabbit holes, open questions, media, motifs, timeline, manifest, and integration state reviewed. No new A/B delta; later target-room retrieval remains locality-biased and access-blocked.
- **Club-Only 2020** — HEAD / last consumed `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`. Checkpoint and the latest Aug. 27 00:46 findings/receipts/rabbit-holes/people/site-candidates handoffs reviewed. Danny, Carlene, and B-chan remain with their assigned publication owner; Feli↔Mugs remains unresolved.
- **QOTD Officers** — HEAD / last consumed `c51cd1914f65cb8ae65b850b1d0da85ffccb94ed`. Checkpoint-first anti-starvation review; no branch delta. Its DyingFox publication queue remains with its assigned owner.

No miner `last_consumed_sha` advanced: all reviewed branch HEADs already equaled their consumed SHAs. Photo remains `review_overdue / pending_publication`; this reader repair does not consume the family or close its two cumulative handoffs.

## Remaining Photo Submissions debt

- 28/28 named candidate files classified; 34/34 cumulative headings mapped.
- 0 unclassified individual candidate files; 2 cumulative handoffs remain open.
- The distinct accepted A/B remainder remains **unknown / not certified / not zero**.
- Separate holds remain: missing reply parents `835940038549569627` and `872535327926009928`; original media not yet inspected; no verified winner/result/finished-poster artifact; unresolved `🤳｜ul-photoshoot-event` audience/visibility; unsupported image credits; richer Type-X context; and Mërcy's stable identity/context.
- No blocked media or identity item was promoted by this run.
