# WIKI Integration State — Run97 — BACKROOM Pass35 Ren / Tae verification

Date: 2026-11-28

## Cross-surface result

The July 19, 2021 Wall exchange between Ren and Tae is now fully reader-verified on both public surfaces. This run did not add WIKI reader prose; it closed the WIKI side's durable verification record and confirmed that the existing Cast relationship remains present at the current deployed WIKI head.

## WIKI reader owner

- Reader paths: `src/data/dossier-snapshots/ren.md`, `src/data/cast.ts`, and `src/data/cast-run1612-backroom-ren-tae.ts`.
- Reader commit: `11c02681dc50de3b668e513eed90ee65fcc7feb8`.
- The Cast helper is imported and applied by `src/data/cast.ts`. It gives Ren and Tae reciprocal relationship notes, adds Tae's stable `homethey_` alias, and retains the two participants' own lines as searchable quotes. It does not copy MAIN's longer biography prose and does not create a duplicate Episode.
- Exact reader build: run `46113055954`, job `140880657011`, SUCCESS. The `wiki-build` and `wiki-preview` commit statuses both report SUCCESS for the exact reader commit.
- Current WIKI main at the start of this run: `0bb148fe154983e1d1bb81dfc99a1b37d4208d39`, a descendant of the reader commit. Current-head build: run `46119356733`, job `140900206937`, SUCCESS. Current-head Pages deployment: run `46119356765`; build job `140900207036`, deploy job `140900313886`, report job `140900387862`, all SUCCESS. Pages build version is exactly `0bb148fe154983e1d1bb81dfc99a1b37d4208d39`.
- Current deployed URL: https://bossmugen.github.io/underlords-wiki/

## MAIN cross-check

- MAIN reader path: `src/content/people/ren.md`.
- Reader commit: `957365baf448efdc62666d9705fee1b9f9ed8136`; current MAIN master and the verified production commit are descendants of it.
- Production commit: `c1e63bca97333cc52d18e2600d6f00147bf40ce1`.
- Production run `46116442273`, job `140891244655`, SUCCESS. The build produced 303 pages; built-output checks verified 129 public person biographies and 10,334 internal hrefs across 304 generated HTML pages. The production deployment step confirmed that the live marker matched exact commit `c1e63bc`.
- MAIN's longer person-first Ren biography owns the scene; WIKI keeps the reciprocal, searchable Cast relationship. No identical prose was mirrored.

## Source and safety boundary

Source files were read directly from `archive-miner/backroom-deals-2026-08-24`: `checkpoint-pass-35.md`, `site-candidates-pass-35.md`, `findings-pass-35.md`, `receipts-pass-35.md`, and `rabbit-holes-pass-35.md`.

Receipts: `866784597924904995` (Ren: `Best pick up lines provided by ma bestie tae`), `866784631663099914` (Tae: `POST ALL IT YOU WONT`), `866784675677732864` (Ren: `I’ll post something better`). The direct account bridge for `homethey_` remains stable ID `592243050722492424`. The actual pickup-line material was not recovered and is not invented.

Separate Pass35 holds remain:
- Celeana's reverse-Marie-Kondo text is reader-covered; trigger image attachment `850498788299636747` remains uninspected.
- Tae's named Roach-casualty text is reader-covered; game screenshot attachment `870839877002993684` remains uninspected.
- Hami's price/cooking-state referent remains unresolved; receipts `994941235829678110`, `995007992120496208`, and `995129902749728908` are not literalized.
- Sota's September `Tae likes it when you smell Tae` line remains a separate rabbit hole, not a bridge to the July exchange.

## Consumption and remaining work

BACKROOM HEAD, `last_seen_sha`, and `last_consumed_sha` remain `9c143a7c146af4fc90de4b258bee1c848a2818a0`. No miner delta was found and no consumed SHA advances. Pass35 Ren/Tae is now candidate-level `integrated_verified`; this does not close the BACKROOM family. The 61 numbered passes, 60 site-candidate handoff files, and 240 headings are not a distinct accepted A/B count. The remainder remains unknown / not certified / not zero.
