# Run 100 — 2026-11-28 — Photo Submissions Cast indexing repair

## What changed

The MAIN site's Photo Submissions page already names Type-X and Mërcy in its “THE ENTRIES THAT DIDN'T NEED A CAPTION” section and in the claims list. The WIKI's existing NightLife and Gabu runbook Episode loglines also mentioned them, but the structured `cast` arrays omitted both.

WIKI now has two small guest Cast dossiers and both existing Episodes list their entrants:

- **Type-X** — stable account `615280089541771359`; NightLife, 2021-10-11; receipt `897041554089332737`.
- **Mërcy** — Family, 2021-11-08; receipt `907472763281887304`. This remains a display-name-only record; no stable account ID or similar-name identity merge was added.

No separate `site-candidate-*.md` files exist for these two rows. The source handoffs are `archive-intake/photo-submissions-2021-visual-contest-2026-08-19-1845-pdt/people-index.md#Type-X`, `people-index.md#Mërcy`, and the matching `media-index.md` rows on the dedicated miner branch.

## WIKI reader changes

- `src/data/cast-run1610-photo-submissions.ts` — Type-X and Mërcy guest Cast entries; Type-X stable ID retained, Mërcy explicitly display-name-only.
- `src/data/integrator-episodes.ts` — Type-X added to `nightlife-location-rule-hotpatch-2021`; Mërcy added to `gabu-photoshoot-saber-runbook-2021`.
- `src/data/dossier-snapshots/type-x.md`.
- `src/data/dossier-snapshots/mercy-display-name-2021.md`.

Reader commit: `7d8f356d8971511ca6ea5be5f9efcc71a39c7ec8`.

## Verification

- Build run `46128978369`, job `140929759943`: **SUCCESS**.
- Astro generated **634 pages**; built-site audit passed **634 HTML files and 25,622 internal references**.
- Pages run `46128978467`: **SUCCESS**.
- Jobs: build `140929787626`, deploy `140929887416`, report `140929937215` — all **SUCCESS**.
- Exact `pages_build_version`: `7d8f356d8971511ca6ea5be5f9efcc71a39c7ec8`.
- Live WIKI: https://bossmugen.github.io/underlords-wiki/

## MAIN comparison

No MAIN reader change was necessary. The live MAIN source at deployed commit `4ea52f2f5aebd3d25186302e0bce4ab92f8c8fc4` already includes both names and dated entry facts.

The latest MAIN production workflow observed during this run was for unrelated commit `acf8747721d46f7138139e84e7b06e28ccabe776`; run `46128228202` / job `140927498092` failed because `verify-roster-profile-routes.mjs` found `amexistir` without a categorized roster entry or explicit archive-only route. This is outside the Photo Submissions family and remains with its existing owner. MAIN's last verified live commit remains `4ea52f2f5aebd3d25186302e0bce4ab92f8c8fc4` (run `46126803059` / job `140923083221`, success). No claim is made that the later failed MAIN head is deployed.

## Branch census and anti-starvation

Full census: 30 active miner refs (26 slash / 4 hyphen), 51 tracked identities, 21 historical refs absent, 0 newly discovered. Five families remain review-overdue: Photo Submissions, QOTD Officers, August Reunion, Backroom Deals, and Main HQ.

Direct branch reviews:

- `archive-miner-photo-submissions-2021`: checkpoint-first, then manifest, findings, receipt indexes, both cumulative site-candidate handoffs, people/media/incident indexes, open questions, rabbit holes, and integration handoffs. HEAD and consumed SHA both `d45d441feca0110e9495f49b13df9666982bb45c`; no new intake delta.
- `archive-miner/club-only-2021-2026-hourly`: checkpoint-first, then accumulated findings, deep-mining findings/receipts, people, motifs, timeline, media, receipt index, rabbit holes, open questions, manifest, integration state, and site candidates. HEAD and consumed SHA both `e45fb11c9239e236231bb65645dfd0285bc0078b`; no new A/B. Later target-room retrieval remains locality-biased toward 2020; no raw archive was re-mined.

No consumed SHA advanced on either branch.

## Remaining Photo boundary

- 28/28 named candidate files classified; 0 unclassified individual files.
- 34/34 cumulative headings mapped: 14 reader-covered, 16 workflow-verified, 3 source/provenance-blocked, 1 superseded.
- 2 cumulative handoffs remain open as a completeness boundary. Distinct accepted A/B remainder remains unknown / not certified / not zero.
- Still held: January winner-to-poster result artifact; missing reply parents `835940038549569627` and `872535327926009928`; uninspected original media including `835598011547516950` and `850373606083919892`; richer Type-X context; Mërcy's stable-account identity/context; `🤳｜ul-photoshoot-event` audience/visibility; unsupported image credits.

Photo remains `review_overdue / pending_publication`. The WIKI reader repair does not close the family or advance its consumed cursor.

## Surface choice

WIKI-only. MAIN already had the public narrative and claims; WIKI needed Cast/Episode indexing. No MAIN prose was copied.
