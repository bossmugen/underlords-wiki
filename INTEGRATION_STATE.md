# Underlords Wiki Integration State

Latest detailed run: [Run 108 — 2026-11-28 — Main HQ Anayss coffee routine / Gabu relationship repair](run-108-2026-11-28-main-hq-anayss-coffee.md).

The Wiki is the structured reference companion to the main Underlords site. It owns Cast dossiers, Episodes, Relationships, Running Gags, Quotes, Locations, and Gallery/media notes; it does not mirror the main site's person-first narrative.

## Run 104 — Photo Submissions early-repeat Cast dossiers

The WIKI now has navigable guest Cast dossiers for LEXI, _-Laila-_, and Miihi, who were already named in the existing LOVE Episode but had no Cast routes. Laila's dossier now carries Gilli's exact `Welcome! One sec while I assign your roles hun` line and the 1.637-second gap after MEE6's welcome. The existing MAIN biographies already cover the same human story, so no MAIN prose was duplicated.

Reader commit `297948baf2dcd3444563282748c9e7fae606dc67` passed Astro build [46134475353](https://github.com/bossmugen/underlords-wiki/actions/runs/46134475353), job `140946595788`. The built output includes `/characters/lexi`, `/characters/laila`, and `/characters/miihi`; the built-site audit passed 636 HTML files and 25,701 internal references. Exact-commit statuses `wiki-build` and `wiki-preview` both succeeded; `wiki-preview` is posted only after the Pages build and deployment succeed. Live WIKI: https://bossmugen.github.io/underlords-wiki/

MAIN already covers the person-first versions in `src/content/people/lexi.md`, `src/content/people/laila.md`, and `src/content/people/miihi.md`. No MAIN reader file changed. No image binary was inspected or published; POSTED BY remains separate from MADE BY / CAPTURED BY / FEATURING.

Photo Submissions remains `pending_publication / review_overdue`: 28/28 named files classified, 34/34 cumulative headings mapped, 0 unclassified individual candidate files, 2 cumulative handoffs open, and distinct accepted A/B remainder unknown / not certified / not zero. The January winner-to-poster bridge, missing reply parents, uninspected original media, audience/visibility, unsupported credits, richer Type-X context, and Mërcy identity/context remain held.

Run 104 census: 30 active miner refs (26 `archive-miner/*`, 4 `archive-miner-*`), 51 tracked entries, 21 historical refs absent remotely, 0 new branches. Five families remain review-overdue: Photo Submissions, QOTD Officers, August Reunion, BACKROOM, and Main HQ. Checkpoint-first reviews covered Photo Submissions, Club-Only 2021–2026, Club-Only 2020, and QOTD Officers. All four branch HEADs equaled their last consumed SHAs; no miner cursor advanced. Club-Only 2021–2026 remains access-limited for later target-room retrieval; Club-Only 2020 Danny/Carlene/B-chan profile work remains with its assigned publication owner; Feli↔Mugs remains unresolved.

## Previous detailed run — Run 101
 — BACKROOM Earl Grey Photoshoot planning Episode

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


## Run 105 — 2026-11-28 — Photo Submissions: Grimlee Cast route + Popstar receipt

This run repaired one older accepted Photo Submissions reader gap. The miner branch had no new commit; publication debt remained actionable.

### Full census and branch reviews

- MAIN census: **30 active miner refs** (26 `archive-miner/*`, 4 `archive-miner-*`), 51 tracked identities, 21 historical refs absent remotely, 0 newly discovered active refs, 0 active HEAD advances.
- Five review-overdue families remain: Photo Submissions, QOTD Officers, August Reunion, BACKROOM, and Main HQ.
- Census was persisted on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`, commit `1fd2ac9680dd8e33545be44474cbd678252dfe5a`.
- Photo Submissions branch `archive-miner-photo-submissions-2021`: HEAD / consumed `d45d441feca0110e9495f49b13df9666982bb45c`; checkpoint-first review, no miner delta.
- Club-Only 2021–2026 recovery `archive-miner/club-only-2021-2026-hourly`: HEAD / consumed `e45fb11c9239e236231bb65645dfd0285bc0078b`; checkpoint-first review, no delta; target-room locality remains blocked.
- August Living Ensemble `archive-miner/aug-2026-living-ensemble-hourly`: HEAD / consumed `fcc27ac7a4457fc5c93c575bd2813b8e19abfa3b`; base checkpoint, Run 28 overlay, integration state, site candidates, and open questions reviewed; no delta. Momo Anansa / Fire Legacy prehistory is already owned/integrated elsewhere and was not duplicated.
- No miner branch was merged or cherry-picked into a publishing branch. No consumed SHA advanced.

### Reader change — Grimlee

Source: Photo Submissions branch handoff `site-candidates-hourly.md`, heading “Grimlee was quietly in this thing for months”; cross-checked against `people-index.md#Grimlee` and the four rows in `media-index.md`. There is no standalone `site-candidate-*.md` for this hourly heading.

Exact receipts:
- Waltz — `864030989507624960`
- Dusk til Dawn — `872752786582937600`
- Popstar — `878410496716443678`
- Winter — `917748209730875403`

MAIN already had the person-first biography and WIKI already had the dossier and Photoshoot Episode. The missing reader piece was Cast discoverability; the Popstar message ID was also missing from both person-level source lists. The new WIKI Cast entry uses `father.grim` as a handle alias only; no stable numeric account ID was invented. Blank captions are not a personality read, and POSTED BY is not promoted to MADE BY / CAPTURED BY / FEATURING.

### WIKI reader paths

- New `src/data/cast-run1615-photo-submissions-grimlee.ts`
- Updated `src/data/cast.ts`
- Updated `src/data/dossier-snapshots/grimlee.md`

Reader commit / Pages version: `0f7b63a96cafd180ecb1726e4ebd9fb13e7fdfc2`.

- Astro build [46136576283](https://github.com/bossmugen/underlords-wiki/actions/runs/46136576283), job `140953110803`: **SUCCESS**.
- Built output includes `/characters/grimlee/index.html` and existing `/episodes/grimlee-four-rounds-no-caption-2021/index.html`.
- 637 HTML pages built; built-site audit passed 637 HTML files / 25,737 internal references.
- Pages run [46136576265](https://github.com/bossmugen/underlords-wiki/actions/runs/46136576265): build `140953132371`, deploy `140953235143`, report `140953321387` all **SUCCESS**; `pages_build_version` exactly matches `0f7b63a96cafd180ecb1726e4ebd9fb13e7fdfc2`.

### MAIN reader verification

MAIN `src/content/people/grimlee.md` adds the exact Popstar receipt and removes the stale missing-ID note. Commit `e5d7b87e638523332fa5df65f83eeec4e5b759b1`; production run [46136524737](https://github.com/bossmugen/underlords/actions/runs/46136524737), job `140952949702`: **SUCCESS**, including exact live production marker confirmation.

### Surface ownership

MAIN retains the richer person story. WIKI owns the Cast route and structured round index. No new Episode and no copied MAIN prose. No image binary was inspected or published.

### Remaining Photo publication debt

- 28/28 named candidate files classified; 34/34 cumulative headings mapped; 0 unclassified individual files.
- 2 cumulative handoffs remain open; distinct accepted A/B remainder remains **unknown / not certified / not zero**.
- Still held: January winner-to-poster bridge; reply parents `835940038549569627` / `872535327926009928`; uninspected original media `835598011547516950` / `850373606083919892`; richer Type-X context `897041554089332737`; Mërcy identity/context `907472763281887304`; audience/visibility of `🤳｜ul-photoshoot-event`; unsupported image credits.
- Photo remains pending-publication / review-overdue. Do not mark the family exhausted or consumed.


## 2026-11-28 Run106 — BACKROOM Key Wall self-audit episode completion

- Assigned source branch: `archive-miner/backroom-deals-2026-08-24`, HEAD / last_consumed_sha `9c143a7c146af4fc90de4b258bee1c848a2818a0`. Checkpoint read first; Pass 61 overlay, current cumulative handoffs, and Pass 42 candidate/findings/receipts reviewed directly on the miner branch. No branch delta; consumed cursor did not advance.
- Candidate: `site-candidates-pass-42.md` / `findings-pass-42.md` / `receipts-pass-42.md`; Key self-audit receipt `946484073768054815`, Gilli direct reply `946563974328119307`, pooled Deleted User Wall-of-Fame line `946502428424024135`. MAIN already has the person-first story in `src/content/people/key.md`; WIKI dossier `src/data/dossier-snapshots/key.md` already has the structured claim. The existing Episode was incomplete and used the wrong pronoun. Updated only `src/data/integrator-episodes.ts`, episode `wall-throwback-shames-2021-2022`: corrected Key to he/him, distinguished the anonymous pooled reply from Gilli's direct `OG wall of shamer here uwu`, and added Gilli to cast. No new duplicate Episode or mirrored biography prose.
- WIKI reader commit: `5a616c9b23de644d332728d94f0f361c2fd83eae`. Build `46139046395`, job `140960695562`: SUCCESS. GitHub Pages preview deployment `46139046367`, jobs `140960695565` / `140960808864` / `140960868864`: SUCCESS; target `https://bossmugen.github.io/underlords-wiki/`. Cloudflare `underlords-wiki.pages.dev` production fingerprint was not independently available, so this is recorded as Pages-preview verified, not a separately confirmed Cloudflare production commit.
- MAIN reader paths checked: `src/content/people/key.md` and `src/lib/wall-archive-exhibits.ts`; no MAIN reader edit required. Current MAIN production commit remains `e5d7b87e638523332fa5df65f83eeec4e5b759b1`, run `46136524737`, job `140952949702`: SUCCESS including exact-master build/deploy/live-commit verification.
- Additional anti-starvation reviews: Club-Only 2021–2026 checkpoint + cumulative findings/site candidates/rabbit-holes/receipt index at `e45fb11c9239e236231bb65645dfd0285bc0078b`; Club-Only 2020 checkpoint at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`; Main HQ checkpoint at `e172df0641d6fa9c9d47a2bec6ff40c1aee0fb3c`. Each HEAD equaled its consumed SHA; no new miner delta and no cursor advance. Main HQ quarry remains exhausted at its current source boundary; raw transcript remains unavailable.
- Pass 58 Akariel/Zyrcant source identity bridge remains a hard conflict with user-confirmed separate-person canon; no merge. Akariel's caught-in-4k/WALTZ/DUSK material and Zyrcant's Kahoot/top-three profile are already separately represented. DUSK/Wall media remain individually uninspected.
- BACKROOM remains `review_overdue / pending_reconciliation`; 61 numbered passes, 60 site-candidate files, and 240 top-level headings are handoff counts, not a distinct accepted A/B count. Distinct accepted A/B remainder remains unknown / uncertified / not zero. Pass 53/56 private officer-room material, Pass 58 media, Pass 43 Anjou images, Pass 39 screenshots, and raw 2022–2023 War Room source remain individually held; none blocks the text-safe Key repair.


## Run 107 — Photo Submissions: Gilli/Ren Example Photos reader repair

The WIKI Ren dossier now carries the full seven-date Example Photos sequence and the repeated Gilli → Ren setup pairing on August 1 and August 15. The existing structured Episode already held the complete scene, so no duplicate Episode was created. MAIN's person-first Ren biography now folds the same shared-work beat into the narrative.

WIKI reader commit / exact Pages build version `9a289b7d501e2c922cd45a22f4df80f4bfc9c6fb` passed Astro build [46140484698](https://github.com/bossmugen/underlords-wiki/actions/runs/46140484698), job `140965085879`, with 637 pages and 25,743 internal references. Pages deployment [46140484676](https://github.com/bossmugen/underlords-wiki/actions/runs/46140484676), deploy job `140965205690`, report job `140965261474`, succeeded on the exact build version. MAIN commit `cb3cc763a7a0c2481f0c36614b552db2a590f37b` passed production build/deploy [46140481074](https://github.com/bossmugen/underlords/actions/runs/46140481074), job `140965073994`; 304 HTML pages, 130 public person bodies, and 10,362 internal hrefs passed, with the live marker matching the exact commit.

Source candidate: `site-candidate-2026-08-25-2045-gilli-ren-repeat-example-pair.md`; receipts `871516734203527198`, `871516826079731712`, `876518547826819121`, `876519248116219915`, `876863548733681695`. No image-maker/capturer/featured credit or formal Photoshoot office was inferred. Photo Submissions remains open: 28/28 named files classified, 34/34 cumulative headings mapped, 2 cumulative handoffs open, 3 source/provenance holds and 1 superseded heading; distinct accepted A/B remainder unknown / not certified / not zero. Full report: [Run 107](integration-state/run-107-2026-11-28-photo-gilli-ren-example-pair.md).


## Run 108 — 2026-11-28 — Main HQ Anayss coffee routine / Gabu relationship repair

The WIKI Anayss dossier now gives the coffee routine a proper person-level home. The existing Episode `anayss-coffee-boot-sequence-2020` already preserved the scene, so no duplicate Episode was added. The dossier now gives Gabu a lived relationship entry around the repeated coffee requests and the exact `maam drink water too` check-in, and Petty Crimes carries the recurring Snow White `all the coffee` GIF plus the September 22 four-message sequence.

Source: Main HQ branch `archive-miner/main-hq-hourly`, base `site-candidates.md#Anayss — coffee before language` and `people-index.md#Anayss`; Club Only receipts `749259018220077087`, `749259194531577856`, `749967471657615370`, `749969036678266901`, `751050916584489061`, `751051268377542687`, `751816722381537321`, `752847094477226026`, `752847113045671988`, `756131460749983859`, `757929930586587146`, `757929944067211385`, `757929954330804244`, `757929956956307526`.

WIKI reader commit / Pages build version `03f2123a88c378daf663c53cdd9cb6ca76a25b19`. Astro build [46141230902](https://github.com/bossmugen/underlords-wiki/actions/runs/46141230902), job `140967399180`, succeeded; built-site audit passed 637 HTML files / 25,743 internal references. Pages deployment [46141230924](https://github.com/bossmugen/underlords-wiki/actions/runs/46141230924), jobs `140967399554`, `140967502141`, `140967559232`, succeeded on the exact Pages build version. The downloaded artifact contains `characters/anayss/index.html` with the updated dossier. The build still reports two orphan-page warnings for Key/Torr and non-fatal duplicate dynamic-route warnings, including Anayss; the built route is present.

MAIN reader path `src/content/people/anayss.md` was strengthened in its existing `Dawn Beverage Propaganda` Petty Crimes entry; commit `1a99a00523776e60019db75e9904886a5e36fe0e` passed production run [46141228197](https://github.com/bossmugen/underlords/actions/runs/46141228197), job `140967391103`, including the exact live-production marker.

August Run 28 Momo / Anansa / Fire Legacy was rechecked and is already integrated; no duplicate. August remains open with 27 file-level handoffs. Main HQ remains open with 47 file-level handoffs, base 15/16 reader-covered and Gabu Health Mafia source-blocked pending exact IDs/speaker chain and accessible raw HQ ZIP. Distinct accepted A/B remainder remains unknown / not certified / not zero. Club-Only 2021–2026, Club-Only 2020, and QOTD anti-starvation reviews found no new delta. No miner branch was merged and no consumed SHA advanced.


## Run 109 — 2026-11-28 — BACKROOM Pass60 Moments side door / Ephxs–Ghoulie

MAIN adds the missing side-door story to the existing Photoshoot event and folds Ephxs’s “Who has my ghoulie?” entrance into Ghoulie’s biography. WIKI keeps its existing structured Episode, adds Ghoulie to the cast, and adds Ephxs to searchable Cast with Ghoulie/Gilli relationships. Existing Ephxs, Reiinnaa, and BobaReii profile chronology was already present; no duplicate biography prose or duplicate Episode was created.

MAIN commit `eca0d6f1eb49b2ede574f28fe8953e9f0f70d293` passed production build/deploy [46142706215](https://github.com/bossmugen/underlords/actions/runs/46142706215), including exact live-marker verification. WIKI commit / Pages build version `cd5c05c7640bd8cbefcddcda66e935eabfd6d034` passed Astro build [46142708313](https://github.com/bossmugen/underlords-wiki/actions/runs/46142708313) and Pages preview [46142708282](https://github.com/bossmugen/underlords-wiki/actions/runs/46142708282); 638 HTML files and 25,786 internal references passed audit.

Pass60 receipts: `871220461395124304`, `871220484782567425`, `871220485453651979`, `879237597300408341`, `928732197270220860`, `887091618992242740`, `887271925544546344`, `891842910838988800`, `891843127713890355`, `895299124923080754`, `898155892124581929`, `898159542578319390`, `898159601067896893`. The three exact image binaries remain separately source-blocked; transmission method and unresolved identity/relationship edges remain backstage.

Pass35 Ren/Tae reader debt is now verified on both current descendants. BACKROOM still has 59 of 60 file-level handoffs to reconcile; the 61-pass / 240-heading counts are not a distinct accepted A/B count. The family remains open and no miner consumed SHA advanced. Full report: [Run 109](integration-state/run-109-2026-11-28-backroom-moments-side-door.md).


## Run 115 — 2026-11-28 — Photo Submissions Cast and Saber-episode repair

WIKI added the missing structured Cast entry for **YｏＣｈａｎ9**. The MAIN person page and WIKI dossier/Scary Episode already contained the one-emoji Scary scene; the gap was discoverability in the structured Cast index. The new guest entry uses the stable `foxkanojo` account ID `835022648157143090` and joins the existing `archive-cast` group. Source: Photo Submissions candidate `site-candidate-2026-08-25-1245-yochan9-scary-eyes.md`; opening receipt `900068070364684408`; submission `900196282289774612`; attachment `900196281803231272`.

The existing Episode **“Sye Reviewed the Robot. Gabu Gave It the Keys.”** now runs through **December 22, 2021** instead of stopping at October 25. It includes Gabu's November 1 judge-deadline reminder, the December 2 December-6 opening reminder and 23.520-second correction, and the December 22 pinned `Photoshoot Event commands` runbook. It remains one continuous Photoshoot/Saber operations arc rather than a duplicate Episode. Source: `site-candidate-2026-08-26-2110-photoshoot-event-commands.md`; receipts `904887320279396372`, `904887320883396658`, `915994853228281897`, `915994854578864148`, `915994951878340658`, `915994952721395753`, `923268688151445544`.

MAIN already had both stories in `src/content/people/yochan9.md` and `src/content/people/gabu.md`; no MAIN reader prose was duplicated. The WIKI reader paths changed were `src/data/cast-run1618-photo-submissions-yochan9.ts`, `src/data/cast.ts`, and `src/data/integrator-episodes.ts`.

WIKI reader commit / exact Pages build version: `156399ca7a9f6bffe05f7aafada1479f09634463`. Astro build [46148522203](https://github.com/bossmugen/underlords-wiki/actions/runs/46148522203), job `140989739486`, succeeded. Pages preview/deploy [46148521990](https://github.com/bossmugen/underlords-wiki/actions/runs/46148521990), deploy job `140989850738` and report job `140989906089`, succeeded; deploy log confirmed exact `pages_build_version` and published URL https://bossmugen.github.io/underlords-wiki/.

MAIN reader source was unchanged. Its latest verified production reader commit remains `c98624dc9fe26d68f39676d71523fbe44a15be34`, production run [46134037097](https://github.com/bossmugen/underlords/actions/runs/46134037097), job `140945260132`, with the exact live production marker matched.

The Photo Submissions miner HEAD and consumed SHA are both `d45d441feca0110e9495f49b13df9666982bb45c`; no cursor advanced. The family remains open: 28/28 named candidate files classified, 34/34 cumulative headings mapped, 2 cumulative handoffs open, 3 source/provenance holds, 1 superseded, and distinct accepted A/B remainder unknown / not certified / not zero. No miner branch was merged.
