# Run 109 — 2026-11-28 — BACKROOM Pass60: Moments Side Door / Ephxs–Ghoulie

## Source review

- Miner branch: `archive-miner/backroom-deals-2026-08-24`; HEAD and `last_consumed_sha` both remain `9c143a7c146af4fc90de4b258bee1c848a2818a0`.
- Read directly on the miner branch: `checkpoint.md`, `site-candidates-pass-60.md`, `findings-pass-60.md`, `receipts-pass-60.md`, `rabbit-holes-pass-60.md`, `people-index-pass-60.md`; Pass61 checkpoint/findings/receipts/rabbit-holes/site-candidates/people overlay also checked.
- Exact Pass60 receipts: Ephxs Lobby `871220461395124304`, Gilli reply `871220484782567425`, Ephxs club self-report `871220485453651979`; Gilli Moments post `879237597300408341`, return welcome `928732197270220860`; Reiinnaa self-ID `887091618992242740`, Anthos Moments post `887271925544546344`, replacement-account bridge `891842910838988800` / `891843127713890355`; BobaReii Moments post `895299124923080754`, replacement-account self-ID `898155892124581929`, Anayss welcome/access `898159542578319390` / `898159601067896893`.
- Pass60's three person subcandidates were compared against both readers: Ephxs, Reiinnaa, and BobaReii already have person pages/dossiers with their relevant account/return chronology. No duplicate prose was added for those already-covered beats.

## Reader changes

- MAIN `bossmugen/underlords`: `src/content/people/baby-lyssa.md` now folds Ephxs's “Who has my ghoulie?” Lobby entrance and Gilli's response/return greeting into Ghoulie's lived social orbit. `src/content/records-events.json` adds the “THE MOMENTS SIDE DOOR” section to the existing Photoshoot event rather than creating a duplicate event page.
- WIKI `bossmugen/underlords-wiki`: `src/data/dossier-snapshots/baby-lyssa.md` adds the relationship beat; existing Episode `moments-submission-side-door-2021` is retained and now includes Ghoulie in its cast; existing Ephxs dossier gains the Gilli relationship; `src/data/cast.ts` and new `src/data/cast-run1616-backroom-ephxs.ts` add Ephxs to searchable Cast with Ghoulie/Gilli links.
- Surface split is deliberate: MAIN tells the social story in the existing event/person owners; WIKI keeps the structured Episode and Cast associations. No identical prose was mirrored.

## Verification

- MAIN reader commit: `eca0d6f1eb49b2ede574f28fe8953e9f0f70d293`; production build/deploy run [46142706215](https://github.com/bossmugen/underlords/actions/runs/46142706215), job `140971972523`, succeeded. 303 pages built; `/people/baby-lyssa/`, `/people/ephxs/`, and `/events/photoshoot-contest-2021/` were emitted. Cloudflare live-production marker matched the exact commit.
- WIKI reader commit and Pages build version: `cd5c05c7640bd8cbefcddcda66e935eabfd6d034`. Astro build run [46142708313](https://github.com/bossmugen/underlords-wiki/actions/runs/46142708313), job `140971978905`, succeeded; 638 HTML files and 25,786 internal references passed the built-site audit. `/characters/ephxs/`, `/characters/baby-lyssa/`, and `/episodes/moments-submission-side-door-2021/` were emitted. Pages preview run [46142708282](https://github.com/bossmugen/underlords-wiki/actions/runs/46142708282) succeeded with exact `pages_build_version` `cd5c05c7640bd8cbefcddcda66e935eabfd6d034`.
- Prior Pass35 Ren/Tae bestie-Wall verification is now closed: MAIN reader commit `957365baf448efdc62666d9705fee1b9f9ed8136` is an ancestor of the exact-live MAIN commit above (87 ahead, 0 behind); WIKI reader commit `11c02681dc50de3b668e513eed90ee65fcc7feb8` is an ancestor of the exact Pages build version above (45 ahead, 0 behind).

## Dedupe, holds, and remaining work

- The three named Moments images remain individually source-blocked and uninspected: Ephxs attachment `879237597153619978`, Reiinnaa `887271925208973332`, BobaReii `895299124684021810`. No image description or MADE BY / CAPTURED BY / FEATURING credit was added.
- The transfer route to Gilli/Anthos remains unknown; do not invent a DM/proxy/Dragon Raja import procedure. Ephxs↔Ghoulie remains familiar/affectionate without a romance/family label. Reiinnaa's pooled Deleted User `456226577798135808` remains unbridged; BobaReii's old account ID and the formal meaning of “Passerby Pro/Recruiter” remain unresolved.
- BACKROOM remains `review_overdue / pending_reconciliation`. Pass60 is one of 60 site-candidate handoff files reviewed; 59 file-level handoffs remain, across 61 numbered passes and 240 top-level headings. Those are handoff counts, not distinct accepted A/B candidates; the distinct accepted A/B remainder is still unknown / not certified / not zero.
- Anti-starvation recovery reviewed `archive-miner/club-only-2021-2026-hourly` and `archive-miner-clubonly-2020-hourly` checkpoint-first. Both HEADs equaled their consumed SHAs; no new A/B delta and no cursor advance. Their existing target-room/thin-profile and Feli↔Mugs questions remain open.
- No miner branch was merged. No `last_consumed_sha` advanced.
