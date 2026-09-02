# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 01:07 PDT_

This is the rolling dual-surface reconciliation snapshot. Older detail remains in Git history and run-specific records. MAIN's controlling branch-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`.

## Current reviewed boundary

Mandatory census: **49 miner identities = 28 active refs + 21 historical/missing**, **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, **0 overdue** after Run 203 review.

Run 203 reviewed All Characters HR checkpoint-first and intake-only from consumed `c2e167d092468ecda8a87026610703de126edb43` through stable reviewed head `18c3b457cd60af3db0f9ece12cd9300bb84294cc`. The branch advanced during the run; both the original Run-83 handoffs and its later exhaustion/checkpoint closure were included before the cursor moved.

Wall remains `recovery_in_progress` only because it may advance again; current head `245403178c7599d30571e8fd3561fa7bad1fb730` is consumed. Both Club-Only recovery priorities remain current at `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa` and `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.

## Run 203 — Gabu's social distance actually moves

The only genuinely new comprehensive-HR person beat was Gabu. Her earlier archive already carries a shy / language-conscious newcomer phase, Souta / Ansun as one of her first contacts, and an intimidating first-impression lane around Mugen. On May 22, 2023, a hypothetical puts those relationships in a much more ordinary register: Gabu says she would probably be `drinking and talking to @颯太 and @Mugen at the bar tender`; Souta answers `🍻 kanpai~`.

The useful read is change, not bar lore. An early peer and somebody who once felt socially large now both fit inside Gabu's low-stakes imagined company. Souta's immediate uptake gives the older early-peer memory a later casual echo without inventing a fixed trio or closeness ranking.

MAIN was already ahead of this miner packet: `src/content/people/gabu.md` had the person-first version live at reader commit `5d0efe97f2ffc14bde5f663b3611486ff17a0c97`, including the explicit guard that the hypothetical is not proof of an actual outing, recurring bar habit, drinking frequency, fixed trio, or romance.

WIKI was not yet carrying the same relationship-evolution beat in its live rich Cast data, so `src/data/character-bios-officers-core-deep.ts` was updated at reader commit `be8898f1a4c4048c3fcc61b5c0b6464cc14073e3`. WIKI uses the source differently from MAIN: a May 22 history entry, a `Social distance actually moves` character note, a structured claim, and canon fences. It is deliberately **not** a standalone Episode.

Reader verification for `be8898f1...`: Build workflow `33606815588` completed successfully; Pages workflow `33606815533` completed successfully, including deployment.

## Duplicate / bounded material consumed without public growth

Run 83 also rechecked Nelph, Kiro/Hic, Rummy, Shiki, Han/Nai, Ansun/Souta, and Anayss. Their material was corroboration or already-public mature character work rather than a new person-changing lane: Nelph's `Caught you in 4K` evidence-court rhythm, Kiro's trusted rough-banter/reassurance contradiction, Rummy's birthday persistence, Shiki's audience-aware work/conflict texture, Han's media/finite-bandwidth behavior, and the existing Ansun/Anayss relationship reads all remain better represented by current public material.

Hard rails remain unchanged: Gabu is she/her; Ansun = Souta/Sou/颯太 and is distinct from Anthos; Kiro = Gum/HicUUOOOOGH and was a full Officer, never Sniper; Rummy was Party Director Apprentice under Nobu/Xuseio rather than co-equal; Han = Nai = `.` and is neither Officer nor Platelet; role arrays do not establish appointment chronology; earliest surviving is not guaranteed origin; SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.

## Held rabbits

Reacquire the exact raw May 22, 2023 QOTD snowflake IDs / reply context if available. Continue looking for more Gabu↔Mugen social-distance change, ordinary Gabu↔Souta life, care received by Gabu, Anayss→Gabu reciprocity, post-Raja adult-life texture, and consequential repair. None of these blocks the current public read.

Ryan X and Spicy Hotpot / Joshx remain banked rather than forced into unsafe roster categories. FuentesKaede remains held behind unresolved identity reconciliation. Daycare RH16 target-bot identity remains unresolved. Wall media provenance remains source-specific.

## Consumption / verification

Run 203 consumes All Characters HR through `18c3b457cd60af3db0f9ece12cd9300bb84294cc` after successful review and reader verification. MAIN and WIKI closing publishing heads are verified separately after durable state commits.
