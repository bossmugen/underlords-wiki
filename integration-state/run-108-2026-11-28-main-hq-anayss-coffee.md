# Run 108 — 2026-11-28 — Main HQ Anayss coffee routine / Gabu relationship repair

## Source and reconciliation

Assigned Main HQ branch: `archive-miner/main-hq-hourly`, HEAD / consumed SHA `e172df0641d6fa9c9d47a2bec6ff40c1aee0fb3c`.

Source handoff: `archive-intake/main-hq-2022-2026-tail-20260819/site-candidates.md#Anayss — coffee before language`, cross-checked with `people-index.md#Anayss`. This is a Club Only cross-room candidate, not a Main HQ message.

Receipts: `749259018220077087`, `749259194531577856`, `749967471657615370`, `749969036678266901`, `751050916584489061`, `751051268377542687`, `751816722381537321`, `752847094477226026`, `752847113045671988`, `756131460749983859`, `757929930586587146`, `757929944067211385`, `757929954330804244`, `757929956956307526`.

The existing WIKI Episode `anayss-coffee-boot-sequence-2020` already held the scene, including the September 22 four-message sequence and Gabu's `maam drink water too`. The dossier's person-level relationship layer was thinner, so this run did not create another Episode.

## WIKI reader change

Updated `src/data/dossier-snapshots/anayss.md`:

- Added Gabu as a lived relationship: Gabu sometimes posts coffee back when Anayss asks, then answers one of the recurring `all the coffee` GIFs with `maam drink water too`.
- Expanded Petty Crimes with the repeated Snow White `all the coffee` GIF and September 22's `i` → `nneed` → `coffee u.` → `u` sequence.
- Updated the backstage claim to the exact August 29–September 22, 2020 date range and the complete receipt set.

The MAIN biography was also strengthened in `src/content/people/anayss.md`: the existing `Dawn Beverage Propaganda` Petty Crimes passage now names the repeated GIF and Gabu's exact water reminder. MAIN owns the fuller person-first story; WIKI owns the structured relationship and dossier detail.

## Build and deployment verification

- WIKI reader commit / exact Pages build version: `03f2123a88c378daf663c53cdd9cb6ca76a25b19`.
- Astro build [46141230902](https://github.com/bossmugen/underlords-wiki/actions/runs/46141230902), job `140967399180`: **SUCCESS**.
- Site graph audit passed with two orphan-page warnings (`/characters/key`, `/characters/torr`); built-site audit passed **637 HTML files / 25,743 internal references**.
- Pages deployment [46141230924](https://github.com/bossmugen/underlords-wiki/actions/runs/46141230924), build job `140967399554`, deploy job `140967502141`, report job `140967559232`: **SUCCESS**.
- The Pages artifact contains `characters/anayss/index.html` with the new Gabu relationship and expanded coffee sequence. Astro emitted non-fatal duplicate dynamic-route warnings for several character routes, including Anayss; the actual Anayss page is present in the built artifact.
- Live WIKI: https://bossmugen.github.io/underlords-wiki/

## Cross-surface and backlog state

MAIN reader commit `1a99a00523776e60019db75e9904886a5e36fe0e` passed production build/deploy run [46141228197](https://github.com/bossmugen/underlords/actions/runs/46141228197), job `140967391103`; Cloudflare's live production marker matched that exact commit. The WIKI did not copy MAIN prose.

The August Run 28 Momo / Anansa / Fire Legacy handoff was checked against current MAIN and WIKI dossiers and is already integrated; no duplicate. August still has **27 file-level handoffs**. Main HQ still has **47 file-level handoffs**; its base 16 headings remain 15 reader-covered / one Gabu Health Mafia source hold. The exact Gabu IDs/speaker chain are missing and the raw Main HQ ZIP/transcript is inaccessible. Distinct accepted A/B remainder for both families remains **unknown / not certified / not zero**.

No miner branch was merged. No consumed SHA advanced: every reviewed branch HEAD already equaled its recorded consumed SHA. Club-Only 2021–2026 and 2020 recovery plus QOTD anti-starvation reviews found no new delta; their remaining access/identity/ownership holds stay separate.
