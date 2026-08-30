# UL WIKI INTEGRATION STATE

Last dual-surface integration close: **2026-08-29 23:14 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier WIKI states remain in Git history.

## Current boundary

- Census: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite pending: **0**.
- Backlog: **0**.
- Review-overdue: **0**.
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Core Rooms: seen/consumed `7fce5fa707febe5975757ab7278212d86f048a45`.
- All Characters: seen/consumed `8852d2264762a7757564034a92fc74b47ec7f37a`.
- Daycare: seen/consumed `a68896131717b570ec7c6bdcc1a35e45fffe1f17`.
- Mugen person-first: seen/consumed `1503b2494bbe42e0730d79cb4d695ad6b2938f5d`.
- Whiskey: seen/consumed `7978dda241b2c8169ad13f98a16a54006db1c5a6`.
- Wall: forward-reviewed through `f24df16b7f73905baca448b70cae9c0937992fa4`; formal consumed remains null while cumulative historical recovery stays open. Historical recovery is reviewed through **2026-08-25 12:46**; **13:46 is next**.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

Checkpoint-first, intake-only review covered the Wall historical **12:46** package through checkpoint `f5edd4d2752be87b78be4ee685b2c79436ab7f55`, receipts `fec6dec64a5a298ff421e917e9d9970823ca0385`, findings `71c0fe3bb802f96a81deecb517d95706af8bb761`, rabbit holes `47965cbd94747ecb41a7e4d30b575c9bc6e0fed4`, and site candidates `86af68406f5188c4b9101165eb01ab9fd0f58fab`.

Raw archives were not re-mined. No finite miner advanced during the opening or closing census, so anti-starvation did not require a second finite review this pass.

## Public change — Beat Me to It

The Wall's `beat me to it` wording is now treated as a recurring curator-race mechanism rather than a handful of disconnected reactions.

The richest early scene is October 16, 2020. Snow says he figured he would give `Sycee, Kuki or ana something to post`; Anayss says she is so used to Snow saying things like that she ignored it, Sye says `I can't beat them to it`, and Snow jokes that Ansun is `always waiting in the wings for it`. That is already a room with expected filers and somebody deliberately producing bait for the evidence desk.

The wording then travels: Rooks loses a filing race to Ansun in November 2020; Mugs says `YOU BEAT ME TO IT` when Snow gets there first in April 2021; Baby Lyssa asks how somebody beat her to it that August; Ren loses a February 2023 race to Gilli; and Xuseio tells Ansun `Dang, beat me to it` in April 2023.

The public read stays proportionate: Wall curation itself sometimes became competitive. This is different from the Wall's newcomer/subject speedrun folklore. `First-to-file` or `curator race` are editorial descriptions, not formal UL labels. October 16 is the earliest surfaced example in this reviewed evidence family, not a proven origin, and unresolved attachments remain unresolved.

WIKI reader-content commit `f44dfb5f7a0ffab01d1da1ae88a4b8dfc96baaff` passed **Build Underlords Wiki** run `33296311100` and **Deploy Underlords Wiki Preview** run `33296311082`, including Pages deployment.

MAIN carries the same evidence family in its richer channel-history voice at `/channels/wall`; MAIN reader-content commit `24f17084e7803159fc2112981744b19268a3cacd` passed **UL Hourly Build + Deploy** run `33296348776`, including source verification, Astro build, built-output verification, Cloudflare deployment, and exact production-commit verification. MAIN durable close commit is `1a4fce35cef603bcc9eec5c48b03b92a3bc17bab`.

## Duplicate / corroboration handling

- The curator race was not collapsed into newcomer speedruns: one is competition among filers, the other is speed of becoming a Wall subject.
- Snow's October baiting, later wins/losses, and Ansun's repeated `waiting in the wings` / first-to-file presence strengthen the same evidence family rather than spawning separate Episodes for every `beat me to it` line.
- Unseen attachments remain visually unresolved; POSTED BY is not promoted into MADE BY / CAPTURED BY / FEATURING.

## Held / unresolved

- A September 19, 2020 Beat Saber scene has Ansun saying she, Gilli, Rooks, and an ambiguous `ana may` were dying laughing while watching Snow work out. No matching Wall receipt surfaced in the bounded reviewed handoff. This may corroborate the already-public `The Wall Misses the Best Ones` observer effect, but bounded non-retrieval is not proof of absolute noncapture, so it remains held.
- The October 16 winning attachment/antecedent remains unresolved.
- `Sycee` is preserved as source wording without creating a new global identity bridge. Local `ana` wording is not made into a project-wide alias.
- Earliest surviving remains distinct from origin; joke language is not formal governance; attribution categories stay separate.

## Consumption close

No finite miner consumed SHA changed because every finite active miner remained current.

Wall historical recovery advanced from **11:46 -> 12:46**. Forward review remains through `f24df16b7f73905baca448b70cae9c0937992fa4`; formal consumed stays null while the cumulative older floor remains open. **13:46 is next.**

This durable-state commit must itself pass both native WIKI workflows before the pass is reported closed. MAIN's durable report/ledger head must likewise pass its exact-head verification/deployment workflow.
