# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 11:12 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file records the WIKI-side reconciliation boundary and surface-routing decisions.

## Current reviewed boundary

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing**, no newly discovered branches. The opening census found **1 pending review, 0 pending publication, 0 backlog, 0 overdue**: `archive-miner/all-characters-hr-20260828` had advanced from consumed `aae636d85caea05a2567ae038af68021309beeea` to `8b54baaf8cf3f6cd37afa497367b0382ff5dd32d`. That intake delta has now been reviewed checkpoint-first and intake-only; MAIN's branch ledger is the authoritative place where the consumed cursor is advanced after final dual-surface verification.

Current reviewed heads:
- All Characters HR: `8b54baaf8cf3f6cd37afa497367b0382ff5dd32d`
- Core Rooms: `aac6703622099dd3c96138c59f51b87287d2a92e`
- Wall recovery: `6eceecc6e8b4a741838b9d7ada8d47dcb9ef53c8`
- Daycare: `d562eb295a4834b943eb80373487777a7f730271`
- Whiskey: `35d8f84662543ee2e3f77df684f4a65f9ae9f337`
- Mugen person-first: `5006c460da61782a0c32aebb0a8a03353f1944fa`
- Club-Only 2020: `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Club-Only 2021–2026: `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`

Wall remains `recovery_in_progress` because the quarry may move again; its current head is reviewed and consumed. Both Club-Only recovery priorities remain current.

### All Characters HR — Run 88 reconciliation

Run 88 materially repaired the comprehensive miner files for **Ten** and **Ghostt**, but the two public surfaces were not equally stale.

**Ten:** MAIN already owned the person-first recurrence in which Ten realizes `i keep forgetting y'all record these`, then roughly thirty-five seconds later bargains the embarrassment into `at least i'll leave some kind of legacy i guess`, before returning two weeks later with `legacy` and an imaginary `heir`. WIKI had only the later `heir` line. `src/data/dossier-snapshots/ten.md` now treats the pair as a searchable Running Gag / character mechanism: Screenshot Court catches Ten, Ten accepts the premise, and the defendant somehow founds a dynasty instead of filing an appeal. `legacy` / `heir` remains social-memory humor, not succession, office, literal family, or appointment evidence; the Aug-27 raw snowflake IDs were not reacquired and no reply arrow was invented.

**Ghostt:** MAIN was already substantially ahead of the old WIKI dossier. The reconciled WIKI file now carries the contradiction instead of reducing Ghostt to Raja-detachment chronology: ordinary work pressure without an occupation claim; the self-filed beard-fire story; `Aye i used to box, wassup?`; low-ceremony concern for Rooks's paper; two-date reciprocal heart-coded affection with Anthos; Mass Effect repeat-playthrough investment; apple-juice law; and the older clean social arc where Raja can leave while Discord/UL remains. The file explicitly keeps **Ghostt ≠ Moon**, avoids boxing/aggression inflation, keeps the Rooks join contextual-high rather than a true-reply claim, and does not turn heart reciprocity into romance/family/rank.

Reader head `1f580f937306d81360886d03d696565e378dc82d` contains both WIKI catch-ups. Exact Build `33665508611` succeeded and exact Pages `33665508362` succeeded, including deployment.

**No-public-change / duplicate-by-meaning:** Hishiro, GenGrey, Nhou, Alkey, and Zepp were rechecked in the miner handoff but produced no stronger reader delta than the mature public material already present. MAIN reader files did not change in this reconciliation because its Ten and Ghostt biographies already carried the stronger person-first versions.

**Held rabbits:** Ten still needs later authored ordinary-life/care/repair material and exact Aug-27 raw IDs only if a forensic exhibit requires them. Ghostt still has the missing Gilli `everyday` phrase, later-adult-life gaps, incoming-care/repair holes, and uninspected visual provenance. None blocks the current character reads.

### Latest census-only pass

The immediately preceding project-wide census found no active miner branch advanced beyond its then-consumed head. No reader-facing MAIN or WIKI lore changed in that quiet pass. MAIN's branch ledger was still refreshed so `last_seen_sha` and `last_consumed_sha` remained explicitly distinct rather than silently assuming quiet meant reviewed.

## Surface routing this close

**Ten:** MAIN remains the richer person-first owner and already had the posterity recurrence. WIKI now owns the structured Running Gag/relationship/episode indexing at reader commit `ecca1163806958ef6129aa7cd41d0bd91c3a2fdb`, included in verified reader head `1f580f937306d81360886d03d696565e378dc82d`.

**Ghostt:** MAIN remains the richer person-first owner and already had the ordinary-life/toughness/care package. WIKI now owns the searchable role/relationships/episodes/Petty Crimes structure at reader commit `1f580f937306d81360886d03d696565e378dc82d`.

**Rose / DarkAsrai:** MAIN owns the rich person-first QOTD follow-through and Moon-care texture. WIKI owns the structured Episode **Twenty QOTDs and the Word Document**. Reader verification at `353ba4133423152c4271082e1bebb9723350843e`: Build `33659530841` succeeded and Pages `33659530813` succeeded.

**Zhēnxī:** WIKI owns the cumulative Running Gag **Zhēnxī vs. the Wall** at `f4a914d8c0e337e7a54674fab88c4834bbfa3b3f`; Build `33660655380` and Pages `33660655362` succeeded. MAIN does not force a person page without a resolved public owner. Reply-parent joins close structure only; media contents and creator/capture credit remain unresolved.

**Tony:** Wall is consumed through `6eceecc6e8b4a741838b9d7ada8d47dcb9ef53c8`. Stable account `173295352407293952` bridges Tony's historical display handles without name-similarity guessing. MAIN owns the richer prosecutor/defendant contradiction; WIKI keeps the searchable Running Gag/reference form already present on `main`. No second incident page was created.

**Mia:** Daycare is consumed through `d562eb295a4834b943eb80373487777a7f730271`. The 2024 return scene deepens the existing front-door-care arc: Mia quickly shifts from `New person` to welcoming an old returner and then gives that person a live entry point into the room. MAIN already owns that mechanism, so no duplicate paragraph was added. The Oolong Tea → Pu-Erh Tea bot-name continuity strengthens a probable replacement-lineage read but does not prove the cause of replacement or a formal appointment chronology.

**Gabu:** Whiskey is consumed through `35d8f84662543ee2e3f77df684f4a65f9ae9f337`. MAIN already owns Gabu's practical-care-with-silly-delivery pattern. WIKI indexes the cumulative motif as **Gabu's Care Has Legs** at reader commit `3705c1b2796fcbb0a53e362a6697b3049ef45a9b`; Build `33661352041` and Pages `33661351855` succeeded. Repeated morning media supports a recurring arrival habit, not a literal every-day schedule.

**Mugen:** person-first intake is consumed through `5006c460da61782a0c32aebb0a8a03353f1944fa`. The new gum-laughter line and pre-dawn chicken-nugget craving are valid **Petty Crimes** / ordinary-life texture, but neither improves the mature biography enough to create a new section by itself. They are banked for a future natural Petty Crimes fold. WIKI gets no standalone Episode. The missing Zoshaa/Zepp setup remains unresolved, so their exact trigger is not invented.

## No-public-change decisions

Run 88's Hishiro, GenGrey, Nhou, Alkey, and Zepp checks were consumed as bounded negatives/corroboration rather than spawning receipt paragraphs. MAIN's Ten and Ghostt reader biographies were already ahead of the comprehensive miner, so MAIN reader content stayed unchanged while WIKI caught up structurally.

Mia's 2024 endpoint corroborates an already-public MAIN mechanism. Mugen's two small ordinary-life facts are banked instead of interrupting the biography spine. Thin people remain thin rather than being inflated into profiles. No extra Gabu Episode was created because the value is cumulative character texture, not a discrete event.

## Hard rails held

User-confirmed canon and resolved identity corrections remain controlling. Current/export-time role arrays do not establish appointment chronology. Reply-parent joins establish parentage, not media contents. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate. Similar display names do not merge identities. Earliest surviving is not automatically origin. Joke inheritance is not governance; heart-coded affection is not romance/family/rank; work mentions do not reveal occupation.