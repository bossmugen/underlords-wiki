# Run 107 — Photo Submissions: Gilli/Ren Example Photos reader repair

**Date:** 2026-11-28  
**Assigned family:** Photo Submissions 2021  
**Source branch:** `archive-miner-photo-submissions-2021`  
**Source HEAD / last_consumed_sha:** `d45d441feca0110e9495f49b13df9666982bb45c` / same; no miner delta.

## Reader repair

Source candidate: `archive-intake/photo-submissions-2021-visual-contest-2026-08-19-1845-pdt/site-candidate-2026-08-25-2045-gilli-ren-repeat-example-pair.md`.

Receipts:
- Gilli, August 1 Example Photos: `871516734203527198`
- Ren, August 1 Example Photos: `871516826079731712`
- Gilli, August 15 Example Photos: `876518547826819121`
- Ren, August 15 Example Photos: `876519248116219915`
- Gilli, August 16 POPSTAR opening: `876863548733681695`

The same Gilli → Ren posting order recurs twice: 21.905 seconds apart on August 1, then 166.962 seconds apart on August 15. Gilli opens POPSTAR the following morning. The material had already reached the WIKI's structured Episode logline and both surfaces' claims, but the visible Ren dossier section still stopped at August 1 and the MAIN biography did not yet tell the shared-work scene in its body. This pass folded the scene into the existing person-first biography/dossier rather than creating another event ledger or duplicate Episode.

## WIKI reader

Changed: `src/data/dossier-snapshots/ren.md`  
Reader commit / Pages build version: `9a289b7d501e2c922cd45a22f4df80f4bfc9c6fb`.

- Astro build: [46140484698](https://github.com/bossmugen/underlords-wiki/actions/runs/46140484698), job `140965085879` — **SUCCESS**.
- Built output: 637 pages; audit passed 637 HTML files and 25,743 internal references.
- Pages deployment: [46140484676](https://github.com/bossmugen/underlords-wiki/actions/runs/46140484676), deploy job `140965205690`, report job `140965261474` — **SUCCESS**.
- Exact `pages_build_version`: `9a289b7d501e2c922cd45a22f4df80f4bfc9c6fb`.
- Live WIKI: https://bossmugen.github.io/underlords-wiki/

No new WIKI Episode was created: the existing shared-setup Episode in `src/data/integrator-episodes.ts` already carries the complete scene. The dossier now has the corrected seven-date reference list and exact paired receipts.

## MAIN cross-surface result

MAIN reader path: `src/content/people/ren.md`. Its person-first body now folds the repeated Gilli/Ren setup into Ren's lived Photo Submissions work. MAIN reader commit: `cb3cc763a7a0c2481f0c36614b552db2a590f37b`.

- Production workflow: [46140481074](https://github.com/bossmugen/underlords/actions/runs/46140481074), job `140965073994` — **SUCCESS**.
- Built output: 304 HTML pages; 130 public person bodies verified as substantive biographies; 10,362 internal hrefs verified.
- Cloudflare deployment: https://ac218f33.underlords.pages.dev
- Exact live production marker matched commit `cb3cc763a7a0c2481f0c36614b552db2a590f37b`.

## Reconciliation / holds

- No duplicate Episode; existing WIKI Episode retained.
- No formal Photoshoot office inferred.
- The two reference images remain POSTED BY Gilli / Ren; no MADE BY, CAPTURED BY, or FEATURING credit added.
- No source conflict introduced.

## Remaining Photo Submissions boundary

- 28/28 named candidate files classified; 34/34 cumulative headings mapped; 0 unclassified individual candidate files.
- 2 cumulative handoffs remain open.
- 3 source-blocked / provenance-only headings and 1 superseded heading remain.
- Distinct accepted A/B remainder remains **unknown / not certified / not zero**. Do not close the family.
- Still held: January winner-to-poster bridge (pitch receipt `795646309440815114`, no verified result/artifact); unrecovered reply parents `835940038549569627` and `872535327926009928`; uninspected original media `835598011547516950` and `850373606083919892`; richer Type-X context `897041554089332737`; Mërcy identity/context `907472763281887304`; `🤳｜ul-photoshoot-event` audience/visibility; unsupported creator/capturer/featured credits.

The miner branch remains review-overdue for publication debt, not because its HEAD is unconsumed. No consumed SHA advanced.
