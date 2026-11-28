# Run 105 — 2026-11-28 — Photo Submissions / Grimlee Cast route

## Source and decision

- Miner branch: `archive-miner-photo-submissions-2021`, HEAD / last-consumed `d45d441feca0110e9495f49b13df9666982bb45c`; no miner delta.
- Source handoff: `archive-intake/photo-submissions-2021-visual-contest-2026-08-19-1845-pdt/site-candidates-hourly.md`, heading “Grimlee was quietly in this thing for months”.
- Cross-checks: `people-index.md#Grimlee`, `media-index.md`, `findings.md`, `receipt-index.md`, `manifest.md`, `checkpoint.md`, and the current MAIN publication reconciliation.
- Exact receipts: Waltz `864030989507624960`; Dusk til Dawn `872752786582937600`; Popstar `878410496716443678`; Winter `917748209730875403`.
- The WIKI dossier and Photoshoot Episode already existed. The actual reader gap was that Grimlee was not in the searchable Cast despite having a public dossier. The Popstar ID was also missing from the person-level source lists.
- No stable numeric Discord ID is normalized; `father.grim` remains a handle alias only. No personality inference from blank captions; no image maker/capturer/featured credit.

## Reader paths changed

1. `src/data/cast-run1615-photo-submissions-grimlee.ts` — new guest Cast record and `archive-cast` membership.
2. `src/data/cast.ts` — imports and applies Run 1615 after the prior Photo Submissions Cast additions.
3. `src/data/dossier-snapshots/grimlee.md` — adds the Popstar receipt to the claim/source list and Episodes table.

Reader commit / exact Pages artifact version: `0f7b63a96cafd180ecb1726e4ebd9fb13e7fdfc2`.

## Verification

- Astro build run [46136576283](https://github.com/bossmugen/underlords-wiki/actions/runs/46136576283), job `140953110803`: SUCCESS.
- The build generated `/characters/grimlee/index.html` and `/episodes/grimlee-four-rounds-no-caption-2021/index.html`.
- 637 HTML pages; built-site audit passed 637 HTML files and 25,737 internal references.
- Pages run [46136576265](https://github.com/bossmugen/underlords-wiki/actions/runs/46136576265): build job `140953132371`, deploy job `140953235143`, report job `140953321387` all SUCCESS.
- Deploy log reports `pages_build_version = 0f7b63a96cafd180ecb1726e4ebd9fb13e7fdfc2`.
- No new Episode and no duplicate MAIN narrative.

## Branch census / anti-starvation

- Full census: 30 active miner refs (26 slash / 4 hyphen), 51 tracked identities, 21 historical refs absent remotely, 0 new active refs, 0 active HEAD advances.
- Review-overdue: Photo Submissions, QOTD Officers, August Reunion, BACKROOM, Main HQ.
- Additional reviews this run: Club-Only 2021–2026 checkpoint-first (no delta; later target-room locality remains blocked) and August Living Ensemble (base checkpoint + Run 28 overlay + integration state + candidates + open questions; no delta; Momo Anansa / Fire Legacy already owned elsewhere).
- No miner cursor advanced. Photo remains pending-publication: 28/28 named files classified, 34/34 cumulative headings mapped, 2 cumulative handoffs open, distinct accepted A/B remainder unknown / not certified / not zero.
- The WIKI owns the structured Cast route; MAIN owns the richer person story. Photo-family publication debt remains open.
