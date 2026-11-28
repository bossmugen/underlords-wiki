# Underlords Wiki Integration State

Latest detailed run: [Run 101 — 2026-11-28 — BACKROOM Earl Grey Photoshoot planning Episode](integration-state/run-101-2026-11-28-backroom-earl-grey.md).

The Wiki is the structured reference companion to the main Underlords site. It owns Cast dossiers, Episodes, Relationships, Running Gags, Quotes, Locations, and Gallery/media notes; it does not mirror the main site's person-first narrative.

## Run 101 — BACKROOM Earl Grey Photoshoot planning Episode

The WIKI now indexes the August 26, 2021 Mugen–Anthos planning scene as Episode `mugen-earl-grey-photoshoot-idea-burst-2021` in `src/data/integrator-episodes.ts`. Source handoffs: BACKROOM branch `archive-miner/backroom-deals-2026-08-24`, cumulative `findings.md` section “A — Aug 26 2021: Mugen's two-pot Earl Grey idea burst” and `receipts.md` section “Two pots of Earl Grey”; receipts `880377260564168714`, `880383286529126400`, `880383366367698964`, `880383379227426856`, `880383409665507388`, `880383414967083069`.

Reader commit `0437ff92c33c710b4a0fc4e6f1905fff6eaff2f4` passed Astro build [46131759972](https://github.com/bossmugen/underlords-wiki/actions/runs/46131759972), job `140938250528`, and Pages deployment [46131759963](https://github.com/bossmugen/underlords-wiki/actions/runs/46131759963), deploy job `140938358436`, report job `140938411970`. Exact `pages_build_version`: `0437ff92c33c710b4a0fc4e6f1905fff6eaff2f4`.

MAIN needed no duplicate narrative: `src/content/people/mugen.md` already carries the person-first planning scene and Petty Crimes callback. Its current blob matches live production commit `88f44da98d8ffe6f0f4dc0868d675440288f9d5e`; production run [46130438027](https://github.com/bossmugen/underlords/actions/runs/46130438027), job `140934154515`, passed the exact live marker. The surface split is intentional: MAIN owns the character read; WIKI owns the searchable Episode.

BACKROOM remains open: 61 numbered passes, 60 site-candidate handoff files, 240 headings; distinct accepted A/B remainder unknown / not certified / not zero. No miner consumed SHA advanced. Full census and the two Club-Only recovery checks are recorded in the detailed Run 101 report.

## Previous detailed run — Run 100

Run 100 repaired a real reader-level indexing gap: Type-X and Mërcy were already named in the MAIN event prose and in WIKI Episode loglines, but were missing from the structured WIKI Episode cast arrays. Both now have guest Cast entries and dossier snapshots. Type-X retains stable account ID 615280089541771359; Mërcy remains a display-name-only entry with no stable account ID or identity merge. The existing NightLife and Gabu runbook Episodes now include their respective submitters.

Reader commit 7d8f356d8971511ca6ea5be5f9efcc71a39c7ec8 passed Astro build 46128978369/job 140929759943 and Pages deploy 46128978467 (exact pages_build_version 7d8f356d8971511ca6ea5be5f9efcc71a39c7ec8). The report ledger update commit 294fc1037574c59c426d1f3a45ffc00f0521c8c9, which added the QOTD anti-starvation review, also passed build 46129877864 and Pages deploy 46129877830; exact pages_build_version 294fc1037574c59c426d1f3a45ffc00f0521c8c9.

No MAIN narrative was copied. MAIN already had both names and dated submission facts. The Photo Submissions family remains pending publication because two cumulative handoffs remain open and the distinct accepted A/B remainder is unknown/not certified/not zero. Richer Type-X context, Mërcy's stable identity/context, the winner-to-poster artifact, missing reply parents, original media, event visibility, and unsupported image credits remain held.

Anti-starvation reviews also covered Club-Only 2021–2026 and QOTD Officers. Both branches were already consumed through their current HEADs; neither had a new delta. QOTD's DyingFox candidate queue remains with its assigned owner.

MAIN's last verified live commit remains 4ea52f2f5aebd3d25186302e0bce4ab92f8c8fc4. A later unrelated MAIN workflow on acf8747721d46f7138139e84e7b06e28ccabe776 failed the roster-route verifier because amexistir lacks a categorized roster entry or explicit archive-only route; no claim is made that the failed latest MAIN head is deployed.

Full branch census, consumed SHA state, pending-publication inventory, and MAIN production verification are recorded in the linked Run 100 report and the main repository's archive-intake/INTEGRATOR_BRANCH_STATE.json.
