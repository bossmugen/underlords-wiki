# Integration Run 122 — 2026-11-28 — Photo Submissions verification

## Result

No new WIKI reader prose was required. The 2021 Photo Submissions early-repeat entrant material is already represented in the structured Cast system; this run verifies those routes on the current Pages deployment and records the result in the persistent integration inventory. The Photo publication family remains open and must not be marked complete.

## Assigned source and candidate

Read directly from `archive-miner-photo-submissions-2021`, HEAD / consumed SHA `d45d441feca0110e9495f49b13df9666982bb45c`, beginning with `checkpoint.md`.

Primary candidate rechecked:

- `site-candidate-2026-08-27-0010-early-repeat-entry-context.md`

Related candidates checked against the same person/event owners:

- `site-candidate-2026-08-27-0010-hamittey-entry-to-flowers.md`
- `site-candidate-2026-08-26-2210-nhou-self-poop-reaction.md`
- `site-candidate-2026-08-26-2310-quiet-profile-spines.md`
- `site-candidate-2026-08-26-2210-newcomers-to-photoshoot.md`

LEXI receipts: `798420116374552596`, `798420201569517598`, `798420225716518932`, `798420339910377504`, `798420570072416277`, `805668415489835008`, `811621070733049886`, `818519188774977577`.

Laila receipts: `800197411184050256`, `800197418440327239`, `800197628763045898`, `805686930972737556`, `812055517882613810`, `818481503155650623`.

Miihi receipts: `769955396320231434`, `769955774154801173`, `769955847752777728`, `805842449753833482`, `812025598058561578`, `819449931655807026`.

Other spot-check receipts: HamitteY `800632681950871552` / `800632847504769055` / `819966871330750494`; Nhou `812921630560092200`.

## WIKI comparison

Checked:

- `src/data/cast-run1614-photo-submissions-early-entrants.ts`
- `src/data/cast.ts`
- `src/data/dossier-snapshots/lexi.md`
- `src/data/dossier-snapshots/laila.md`
- `src/data/dossier-snapshots/miihi.md`
- `src/data/dossier-snapshots/hamittey.md`
- `src/data/dossier-snapshots/nhou.md`
- `src/data/dossier-snapshots/acoryuie.md`
- `src/data/dossier-snapshots/lilly.md`
- `src/data/dossier-snapshots/ten.md`
- `src/data/dossier-snapshots/lena.md`
- `src/data/dossier-snapshots/tamika.md`
- `src/data/dossier-snapshots/crystalia.md`
- `src/data/integrator-episodes.ts`

Run 104 already repaired the missing searchable Cast routes for LEXI, Laila, and Miihi and updated Laila's entry chronology. The current LOVE Episode already carries all three. Nhou's self-reaction, HamitteY's entry-to-Flowers rail, and the quiet-profile/newcomer chronologies are also already present in their structured dossiers. No duplicate Cast entries or Episodes were added in Run 122.

## Current verification

- Current WIKI main: `554acb53d403ceb337538be325b035cdd17728b1`.
- Astro build [run 46158586169](https://github.com/bossmugen/underlords-wiki/actions/runs/46158586169), job `141020591239`: success; 643 HTML pages; built-site audit passed 25,987 internal references. `/characters/lexi/`, `/characters/laila/`, and `/characters/miihi/` were present in the build.
- Pages deploy [run 46158586167](https://github.com/bossmugen/underlords-wiki/actions/runs/46158586167), deploy job `141020758065`, report job `141020831063`: success. The deployment log confirms exact `pages_build_version` `554acb53d403ceb337538be325b035cdd17728b1` at https://bossmugen.github.io/underlords-wiki/.
- MAIN companion verification: current master `8d92e2fbdb17bc42b415ad6241128c362aa6fe90`; production run [46158409022](https://github.com/bossmugen/underlords/actions/runs/46158409022), job `141020052748`, succeeded with exact live marker; 304 HTML pages and 10,369 internal hrefs, including the three person routes.
- WIKI reader paths changed in Run 122: none.

## Remaining family state

- 28/28 named candidate files classified.
- 34/34 cumulative headings mapped: 14 reader-covered, 16 workflow-verified, 3 source/provenance-blocked, 1 superseded.
- 0 unrepresented file-level text-safe A/B candidates.
- 2 aggregate handoffs remain open.
- Distinct accepted A/B remainder remains **unknown / not certified / not zero**.

Do not close the family. Remaining dependencies are the January winner→poster result artifact, unrecovered reply parents `835940038549569627` / `872535327926009928`, inaccessible/uninspected originals, Type-X's richer context, Mërcy's stable identity/context, `🤳｜ul-photoshoot-event` audience/visibility, and unsupported MADE BY / CAPTURED BY / FEATURING credits.

## Anti-starvation review

Backroom Pass 61 was rechecked: Panda/Eos WALTZ and Candy WINTER are already represented; no duplicate was added. Raw War Room 2022–2023 remains source-blocked because the backing bytes for `6 war room.zip` are unavailable. Club-Only 2021–2026 and 2020 recovery checkpoints were also reviewed; no new branch deltas or consumed-SHA advances.

Five miner branches remain review-overdue: Photo Submissions, QOTD Officers, August Reunion, Backroom, and Main HQ. No miner branches were merged.
