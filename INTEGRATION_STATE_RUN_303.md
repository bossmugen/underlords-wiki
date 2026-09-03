# UNDERLORDS WIKI — Integration State Run 303

_Last updated: 2026-09-03 04:33 PDT run window_

## Census / reviewed boundary

MAIN persisted the full census before deep review: **49 miner identities = 28 active refs + 21 historical/missing refs**, **0 newly discovered**.

Run 303 reviewed two branch deltas checkpoint-first and intake-only:

- `archive-miner/daycare-2020-2026-hourly`: `8f9f6f7dde2765be051329152c16b834e235fcae` → `3756ed048c8d9c421fa94350afeeb8acf770f4e1`.
- `archive-miner/louvre-ai-art-athenaeum-other-games-hourly`: `8c21c7f9e7b1149effe94518d8b183850a7aa2a4` → `d7f62b1c3bc74d0b5ee0dacc1b8e99dca613c734`, including a late in-run advance after the first review slice.

A successor census landed while Run 303 was closing. It detected a new Mugen person-first tail and a new Wall recovery tail. Run 303 preserved that newer ledger rather than overwriting it. After Run 303 consumed its own two reviewed branches, the controlling finite pending-review queue is Mugen person-first at `33ddd7fdb0d301186f1b1c8a7c154977cabced67`; Wall remains `recovery_in_progress` at seen `07847db8d326639d342b1873e3c27fd87abb428f`. No backlog or overdue. Both Club-Only recovery priorities remain current.

## Dhanushka / ArtsyRaven — WIKI gets the safe owner

The genuinely new public packet is a 2021 Other Games horror-session cluster. Dhanushka supplies the final-door code `04134`, catches a prestige number as a clue, remembers game / room names, says `i love COH3 <3`, and eventually notices the session has lasted almost seven hours: `almost 7h omfg`.

The structured dossier read is **clue-routing + absorbed long-session play**, not a formal role. Gilli's `want to restart?` is recorded as low-ceremony co-play: they can apparently roll the nightmare back and keep going without turning it into a friendship-ranking claim.

WIKI has a canonical **Archive / Extended Cast** shelf specifically for people with real story presence who are not being presented as current living-roster members. Dhanushka therefore gets a structured cast entry here without forcing an unsupported UL-member / Staff / VIP label.

Reader commit: `66ed710222d008b90675d3018025030fa2174645`.

## Surface split

**WIKI reader change:** `src/data/cast.ts` gained Dhanushka / ArtsyRaven under Archive / Extended Cast with Other Games / horror-game / puzzle-routing tags, Gilli co-play relationship texture, and the three concise quotes `the code for the final door is 04134`, `i love COH3 <3`, and `almost 7h omfg`.

**MAIN reader change:** 0. MAIN's public People categories do not currently expose a safe Archive / Extended Cast owner, and the reviewed material does not establish Dhanushka's current/member/Staff/VIP status. The person is publishable; the institutional shelf is not. No status was invented for convenience.

## Daycare and late Louvre material — banked, not duplicated

Daycare's Mugen/Milobot pocket deepens an existing Mugen mechanism: utility bots and commands become unreliable coworkers / house props rather than sterile infrastructure. MAIN already owns that broader character behavior, so no new reader paragraph was manufactured.

The Louvre branch then advanced again with Woosung and Hishiro material. Woosung's `Hi Woosung.....idk what else` sharpens a situational contrast between minimal self-presentation and much looser reactive play once somebody else supplies a concrete premise. It is not global shyness canon. Hishiro's explicit `and damn i want that denim skirt` is clean ordinary-person / Petty Crimes texture that keeps the useful information-person from becoming a disembodied help desk. Both are banked for natural future resynthesis rather than appended receipt paragraphs.

## Hard rails / rabbits

- Dhanushka's game participation does not establish current UL role or membership.
- Unresolved external names remain unresolved.
- Gilli↔Dhanushka co-play is not promoted into a relationship rank.
- Milobot's missing later task is not invented.
- Woosung is not globally labeled shy / quiet / introverted from one minimal introduction.
- Hishiro's exact `support` referent remains unresolved.
- Status cards do not establish appointment chronology.
- Uninspected media remains free of MADE BY / CAPTURED BY / FEATURING inference.

## Verification

WIKI reader commit `66ed710222d008b90675d3018025030fa2174645` passed:

- **Build Underlords Wiki 33750026174** — success.
- **Pages / Deploy Underlords Wiki Preview 33750026366** — success, including deployment.

MAIN's corresponding branch-consumption / reconciliation closure is recorded in `archive-intake/INTEGRATION_REPORT_RUN_303.md` and preserves the successor Run-304 queue.

This state-documentation commit reruns WIKI Build and Pages and is checked before completion.
