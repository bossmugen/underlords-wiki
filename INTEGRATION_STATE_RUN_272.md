# UNDERLORDS WIKI — Integration State — Run 272

## Census / reviewed boundary

The project-wide census remains **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue**.

The sole advanced active branch this run was `archive-miner/all-characters-hr-20260828`. Review began from consumed `4fa3f8e3b7bd0a862c7a0ddb34f5f47445029f21`. The miner advanced twice while the pass was in flight, so Run 272 continued checkpoint-first and intake-only through the final Run-95 checkpoint head:

- `archive-miner/all-characters-hr-20260828` → `a7f8355b645ed066cc0f4dd8547907bb1759a370`

The final `a7f8355b...` movement changed only `checkpoint.md` and explicitly marks itself as the final Run-95 miner write. MAIN's controlling consumption ledger now records both `last_seen_sha` and `last_consumed_sha` at that head in commit `1695e0396f8232cc7b6cf3a038e7e0ff7c26a824`.

Both Club-Only recovery priorities remain current. Wall remains recovery-open only for future growth and is consumed through its current recorded head.

## Intake reviewed

Checkpoint first, then only changed `archive-intake/*` handoffs:

- Run-95 comprehensive HR rewrites for Rooks, Tofu, Aeshleen, Eos, HamitteY, Nuien, Akuma/Matsu, Crystalia;
- `findings-run-95.md`;
- `receipts-run-95.md`;
- `rabbit-holes-run-95.md`;
- `site-candidates-run-95.md`;
- `coverage-ledger-run-95-delta.md`;
- `exhaustion-ledger.md`;
- final Run-95 `checkpoint.md` closure.

No raw archive was re-mined and no miner-branch content outside intake paths was used.

## Reader reconciliation

### Rooks

Run 95's only material person change is authoritative-HR catch-up to a scene already public on MAIN: Rooks announces a self-described painting-in-progress in the Louvre and asks `critique me`.

The person read is reciprocal scrutiny. The same person known for catching other people's details can expose unfinished work and explicitly invite scrutiny back. The tiny imperative matters because she does not cushion the request into a compliment trap; she hands over a work-in-progress and asks people to push on it.

WIKI gets **no duplicate Episode or Running Gag**. The scene changes how Rooks reads as a person; MAIN is already the stronger owner.

Attribution remains narrow: `my painting so far` supports Rooks as maker of that self-described WIP only. Unrelated Louvre assets do not inherit maker credit, and the WIP visual remains backstage until safely inspected/joined.

### Seven quarry closures

Run 95 moves **Tofu, Aeshleen, Eos, HamitteY, Nuien, Akuma/Matsu, and Crystalia** to `EXHAUSTED AT CURRENT ARCHIVE BOUNDARY` after repeated-pass rechecks yielded no materially new person mechanism.

WIKI gets **no reader mutation** for exhaustion status. Quarry state is backstage methodology, not public character lore.

Reinforcement families remain deduped rather than re-published:

- Hami can feed the receipt machine as well as become its product; `Got this from HAM` reinforces the existing target/supplier contradiction.
- Eos/Panda remains reciprocal care/prosecution/affection rather than one-way caretaker framing.
- Nuien's strongest object remains the first surviving family-tree predecessor / likely Nui-made map object, not literal family and not sole authorship of later Tumbleweed maintenance.
- Akuma/Matsu's adult music lane remains practical infrastructure around a producer/DJ ambition; the next meaningful source would be actual making/process verbs.
- Crystalia's durable split remains: UL is `the only reason` he still plays Raja, then Raja is deleted `4ever` while Discord stays for the people.

## Current quarry totals

Authoritative All Characters HR after Run 95:

- 100 canonical non-Mugen characters;
- 100 / 100 comprehensive HR files;
- 83 `IN PROGRESS`;
- 17 `EXHAUSTED AT CURRENT ARCHIVE BOUNDARY`;
- 0 blocked;
- `ALL CHARACTER QUARRIES EXHAUSTED`: **NO**.

Rooks remains open because the Louvre maker-process rail materially changed her comprehensive HR even though MAIN was already ahead.

## Hard rails / rabbits

- Rooks remains distinct from Cookie/Kuki.
- Rooks's `my painting so far` supports maker credit for that WIP only, not unrelated Louvre assets.
- Crystalia uses he/him.
- Nuien remains distinct from Illien.
- Joke family, affection, mock aggression, and flirt language are not literalized into biology, legal status, sex, or formal office.
- Uninspected pixels remain sealed.
- POSTED BY / SAID BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

Targeted reopen conditions remain person-shaped rather than permanent quarry limbo: Rooks later adulthood / received care / consequential repair / absent-talk; Hami-authored reciprocity for Aeshleen↔Hami; Eos post-grad/non-Panda care; later public-safe Nuien voice; Akuma actual maker-process verbs; later authored post-Raja Crystalia continuity.

## Reader changes

**0**.

This run is reconciliation / durable consumption-state work only. No Run-95 discovery survives novelty-check as a new WIKI Episode or Running Gag.

## Verification / deployment

WIKI reader content is unchanged. Exact state head `b82dc2711020a08b659fb6ad39c030a2198ce175` passed:

- Build Underlords Wiki **33705935084** — success; Astro build completed.
- Deploy Underlords Wiki Preview / Pages **33705935064** — success; preview build, Pages artifact upload, GitHub Pages deployment, and reporting all completed successfully.

MAIN's Run-272 reconciliation commit `ee1eec85cdff7fca7c00e8e233204ada2444d358` independently passed workflow **33705875164**, including source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare deployment.

MAIN consumption-ledger commit `1695e0396f8232cc7b6cf3a038e7e0ff7c26a824` is the state-bearing close for this reviewed miner boundary; its exact workflow result is checked separately at final close.
