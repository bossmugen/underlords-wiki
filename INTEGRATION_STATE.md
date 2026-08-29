# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 23:14 PDT**.

Full pass detail is durable on MAIN under `archive-intake/INTEGRATION_PASS_2026-08-28_2314_DUAL.md`. The immediately preceding state remains preserved in Git history.

## Census / queue

The mandatory opening census found **26 miner branches**, up from 25 because `archive-miner/mugen-person-first-20260828` appeared and was registered on MAIN before deep review. A closing census still found 26 branches but caught fresh movement on Mugen, Whiskey, and Wall.

Closing queue:

- **Finite pending:** 2 — Mugen's late `10f13e7... -> 615dcbcb...` delta and Whiskey's fresh `01854048... -> 55bd3d3b...` delta.
- **Backlog / review-overdue:** 0 / 0.
- **Cumulative recoveries:** Core Rooms + Wall remain `last_consumed_sha: null` because older safe-baseline packages still exist.
- **Living Ensemble:** fully consumed through `66c3227c687965a4dae9b372fdcbe2dc128611ba`.
- **Club-Only 2020:** fully consumed through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **Club-Only 2021–2026:** fully consumed through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.

## Branches reviewed this pass

### Core Rooms — reviewed frontier through `a0560fccb869aa8a56105d9bf95429fd1878dca2`

The new keeper is NemeMoka. In 2020 the stable account is still living inside Dragon Raja's ordinary calendar: `NemeMoka is here to check in~ from dragon raja`, then a `New class` post, then a ladder-team plan that loses a fight with sleep after repeated pings end in `i think Neme past out`. ShiyaX later tells Neme, Lilly, and Rummy that their `corpses` are parked AFK with dailies done.

The same stable account surfaces again in 2026 without a ceremonial reintroduction. Mugen immediately says `wazzaaa neme`; Neme joins the live conversation with a story about offering a hacked friend soup; then on March 3 supplies the line that changes the whole chronology: `I drop by Raja once a year on my bday to see how it's going`.

WIKI owns **Neme Turns Raja Into a Birthday Pilgrimage** as the bounded chronology. MAIN owns the richer character dossier. The archive does not turn the 2020→2026 authored-message gap into a departure/return date, does not declare March 3 to be Neme's birthday, and does not infer account-sharing mechanics from ShiyaX's dailies line. Core remains cumulative recovery-in-progress, so its consumed SHA stays null.

### Mugen person-first — reviewed through `10f13e7b6f5b863ed3e5c7fb822325dafae9ab3d`

The clean new episode is the 2021 NightLife feedback pivot. Members object to the location restriction; Mugen answers `We hear your concerns and we're revising this month's photoshoot guideline!`, announces `SHOOTS ARE NOW OPEN TO ANY LOCATION`, and the room immediately goes back to JoJo-pose / `LEGGO STRIPPEEEERS` nonsense.

WIKI owns **Mugs Changes the Rule and Keeps the Party** because it is a discrete incident with a beginning, decision, and snap-back to social life. It is evidence that Mugen changed this guideline after feedback, not proof that every UL decision was democratic or that every challenge forced a reversal.

Other material from the reviewed Mugen frontier was deduplicated against richer current owners: shared-club ownership, HQ filtering, scream→nap→scream, `So many character arcs`, and Wolf anniversary circulation were already public elsewhere by comparison time. Broad 2024 work/move material remains privacy-minimized, and external-meem-to-UL framing remains developing rather than being dumped as a quote list.

The miner advanced again during the run to `615dcbcb75ec5cbce58739b58d5e42502d540430`. MAIN's ledger therefore records the reviewed/consumed frontier at `10f13e7...` while keeping the newer delta visibly pending.

### Daycare — consumed through `d3c309506e59ace80fcbaadd61d39244f0b25cc8`

The finite delta was a successful no-public-change review. ToniTan's direct IGN bridge and YoChan9's literal Lobby fields are useful provenance, but the handoff lacks enough direct Daycare body text for a character-rich public owner. `!9` is not normalized into an age; generic `Role assigned` is not converted into a specific role; Daycare adjacency is not used to manufacture Platelet status. The delta is consumed so it will not be reread forever.

### Louvre — consumed through `33e9f41723d1ae1e56efa2897c98d6b843a58de0`

Also a successful no-public-change review. LEXI's Lobby→Louvre doorway, Mirose/gyeo's stripper/customer entrance, and mupett's earliest surfaced Lobby handoff remain developing leads because direct Louvre content is still thin in this package. Wolf's anniversary-art circulation corroborates an already-owned family and does not solve the uninspected image/cast map. No role, join date, or relationship was guessed from neighboring context.

## Concurrent work preserved rather than overwritten

The publishing branches moved while this pass was running. Those changes were re-read before edits and preserved. In particular, the concurrent Wall recovery advanced through an older 2026-08-25 00:46 package and published **Woohyuk Keeps the Disney Receipts**. That evidence family remains separate from this pass's Neme/Mugen additions; no duplicate episode was created.

Wall's closing head is now `7a6588d0c1fde70262c0dfd6c2843ee03e1e9fb0`. That newest movement is registered as seen but not yet reviewed, while older Wall safe-baseline recovery still exists.

## Public changes / verification

WIKI reader-facing change: `src/data/integrator-episodes.ts` at content commit `7e960be4e7f7d108c74ce373db33e6287e257b12`, adding:

- **Mugs Changes the Rule and Keeps the Party**
- **Neme Turns Raja Into a Birthday Pilgrimage**

The exact content commit passed both existing WIKI workflows: standalone Astro build run `33238380361` succeeded, and Pages build → deploy → report run `33238380394` succeeded.

MAIN's corresponding Neme work is a full character dossier plus archive-grounded Staff shelf. The first dossier-only commit correctly failed MAIN's source verifier because a public People file was not yet categorized; the fix added NemeMoka to the archive-grounded Staff shelf without inventing appointment chronology. Exact fixed content commit `41c3271d6df114071b1c8e90d9e9e29320a727a5` then passed source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare deployment in run `33238512269`.

## Holds carried forward

Neme's first-ever UL join date, exact Staff appointment date, exact IGN transition history, exact birthday date, and ShiyaX account-operation mechanics remain unresolved. NightLife proves one guideline revision, not a universal governance rule. Daycare's adult/Platelet edge remains unresolved without direct role proof. Louvre's LEXI role, Mirose/gyeo relationship, mupett join history, and uninspected media remain bounded. Spritely/Shurui `plabn` remains unresolved. Similar names do not create identities; current/export role arrays do not create appointment chronology; joke family/romance does not become literal; POSTED BY / MADE BY / CAPTURED BY / FEATURING stay separate.

This state commit triggers WIKI's normal exact-head workflows. The dual-pass closing report verifies the final publishing heads after bookkeeping lands.
