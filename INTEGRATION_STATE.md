# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 18:47 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Run 270 completed a full census of **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**.

The project-wide `UL-TASK-STANDARD-2026-09-02.1` propagation advanced every active miner ref. Run 270 path-checked the propagated deltas instead of treating root policy syncs as archive findings. The propagated movements on the ordinary miner branches contained no changed `archive-intake/*` handoff paths.

Both Club-Only recovery priorities are reviewed through their current propagated heads:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Whiskey Longitudinal is reviewed through `90b19702014618c42eebfca4e3d4e900ffe5af1a`. Wall is reviewed through `6838cbbbcc64824c5cdb302bfdf5ad26b3077bc` and remains a recovery quarry only because more Wall material may arrive later. Mugen person-first is reviewed through `09c1d2009bf158e103aea3c35ee7a149e9c67b9e`.

Detailed branch/path disposition is in MAIN `archive-intake/INTEGRATION_REPORT_RUN_270.md` and WIKI `INTEGRATION_STATE_RUN_270.md`.

## Latest reader reconciliation

### Spicy Hotpot — What Did I Do?

WIKI now owns the new Spicy Hotpot Wall material as a searchable Running Gag.

Spicy's Wall life repeatedly starts with some version of needing the room to explain the charges: `??????`, `What did I do`, then an archival self-audit where `Nah, you probably put me here ages ago` turns into `I knew it` once he finds Gilli's older receipt.

The fun part is that he is not merely a confused defendant. In May 2021 he posts `stop get some help`; Ren exact-replies `*make me*`. By September he sends twenty-eight consecutive Gilli mentions in one message, five people wheeze-react, Ren laughs, and Gilli answers `SOME EXILE HIM`.

So the recurring mechanism is defendant → nuisance without a costume change. Spicy can genuinely want context and still manufacture the next case himself.

Reader head: **`91139edc22a8a85ce735d9098aa6b71aad841277`**. A first draft accidentally said `September 2020`; that reader head corrects the chronology to May/September **2021** before final verification.

Exact WIKI verification:

- Build **33704629947** — success.
- Pages **33704629958** — success through deployment.

## MAIN / WIKI split

MAIN receives **no final Spicy person page yet**. A provisional page was removed because the current People architecture would force an unsupported public category/role classification. The character material is accepted; the shelf is not.

WIKI can safely own the Running Gag because the reference job does not require inventing a roster category.

ShiyaX's Whiskey relationship deepener remains WIKI-owned at `890eb2da1722b9cb8fdd65848876bbf4d96785d2`; MAIN already owns the stronger person-shaped participation story and does not need a receipt duplicate.

The newest Mugen person-first tail is banked for a future MAIN resynthesis rather than duplicated into WIKI. It adds a useful inverse to her `framing editor` habit: ShiyaX can throw a music/artist premise and Mugen can simply catch it within seconds as an ordinary peer. Good texture; not a standalone Episode.

## Reviewed without duplicate reader churn

- Standard-propagation-only branch movement was consumed as review bookkeeping, not raw archive work.
- Baby Lyssa = Ghoulie remains hard canon in the ShiyaX material.
- `Josh` is strong Wall-local first-name support for Spicy's stable visible account, not a preferred-display-name replacement.
- Zoshaa remains the surviving boiled-mayo author; Gilli's later participation does not transfer authorship.
- Wall media remains uninspected where the handoff says it is uninspected.
- No DJ/playback control, song preference, private ShiyaX ritual, friendship ranking, role chronology, joke romance, or media authorship was manufactured.
- POSTED BY / SAID BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

## Verification / deployment

- WIKI reader head `91139edc22a8a85ce735d9098aa6b71aad841277`: Build **33704629947** success; Pages **33704629958** success through deployment.
- MAIN reconciliation head `caa3bffe407a9ae78b1caedf1196df90ee487478` passed `UL Hourly Build + Deploy` **33704649963** before the durable Run 270 report commit.
- Run 270 state/report commits are verified separately by each repository's existing push workflows.

Detailed reconciliation: `INTEGRATION_STATE_RUN_270.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_270.md`.
