# WIKI Integration Run 120 — BACKROOM Pass59 Verification

Date: 2026-11-28  
Primary publication family: BACKROOM  
Source branch: `archive-miner/backroom-deals-2026-08-24`  
Source HEAD / last_seen_sha / last_consumed_sha: `9c143a7c146af4fc90de4b258bee1c848a2818a0`

## Source review

Read the miner's base `checkpoint.md` first, then directly read:

- `checkpoint-pass-59.md`
- `site-candidates-pass-59.md`
- `findings-pass-59.md`
- `receipts-pass-59.md`
- `rabbit-holes-pass-59.md`
- `people-index-pass-59.md`
- `incident-index-pass-59.md`

Pass59 receipts: `850534904475418655`, `851168710680379422`, `864921845160214528`, `865313236172537866`, `873628678809088010`, `873686056938123284`, `873686072561926144`, `873686142720024686`, `874033999436189746`, `874034086434463774`, `788827631642345493`, `901635188013035520`, `912148868681056297`, `912585110304460851`, `912585981268480091`, `916135374592540682`.

## WIKI reader disposition

The structured owners are already present:

- Episode `ul-kahoot-2021-three-rounds` in `src/data/integrator-episodes.ts` carries the June first Kahoot, July explicitly second Kahoot, and August spelling-code fiasco as one chronological program with distinct rounds.
- Canonical Cast dossier `src/data/dossier-snapshots/nelph.md` and Cast identity `nelph` carry the person-level chronology. The direct 2020 self-ID `Nelphie` is an alias, not a second person.
- No duplicate episode, duplicate Cast entry, or additional biography paragraph was added.
- WIKI reader paths edited in this run: **none**.

## Cross-surface verification

MAIN canonical owners: `src/content/records-events.json#events/kahoot`, `src/content/people/ren.md`, and `src/content/people/nelph.md`. Current master reader blobs for all three are identical to the production commit `173d2283cb94bec7e944072063c727676f8430ab`.

- MAIN production workflow [46150967311](https://github.com/bossmugen/underlords/actions/runs/46150967311), job `140997305363`: Astro build, built-output audits, Cloudflare deploy, and exact live-production marker all succeeded.
- WIKI main / Pages build version: `36745b2429e8efb3938a1c164999ea93b7d88400`.
- WIKI Astro build [46153472512](https://github.com/bossmugen/underlords-wiki/actions/runs/46153472512): success.
- WIKI Pages deploy [46153472481](https://github.com/bossmugen/underlords-wiki/actions/runs/46153472481): success; `pages_build_version` exactly matches `36745b2429e8efb3938a1c164999ea93b7d88400`; published URL https://bossmugen.github.io/underlords-wiki/.

## Dedupe and unresolved items

- Pass60 Moments Submission Side Door / Ephxs–Ghoulie is already integrated on MAIN and WIKI.
- Pass61 Panda/Eos WALTZ and Candy WINTER are already integrated on both surfaces.
- June Kahoot's top-four result remains unexplained; July's three winners remain unranked; August's redo has no result receipt.
- Media remains uninspected. No creator, capturer, or featured-person credit is added. The spelling Kahoot is not merged into Speeling Bee.
- BACKROOM remains open: 61 numbered passes / 240 headings do not establish a distinct accepted A/B candidate count. Remaining count is **unknown / uncertified / not zero**. No miner consumed SHA advanced because HEAD already equals the consumed SHA.
- The raw War Room 2022–2023 transcript remains source-blocked pending re-upload or equivalent accessible bytes for `6 war room.zip`; officers-only Pass53/55 material remains withheld.
