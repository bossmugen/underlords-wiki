# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 00:12 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

The current census tracks **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **1 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue**.

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` only because more source can arrive; its current reviewed/consumed head is now `3049613453ad7cbeaf6a2febd69cae883350419f`.

The only pending advanced branch is All Characters HR. Its seen head reached `f71f8518355a1591d126137ae3e03811baead7b9`, but `checkpoint.md` still says **Run 99 complete**, so the consumed cursor correctly remains at `5153f57ecf18c12e6fea7dffeb87ba3ec2651b56` until Run 100 finalizes.

## Latest substantive reconciliation

### Zhēnxī — the defendant learns to enjoy the prosecutor chair

The newest Wall suffix reinforces a relationship mechanism already public on both surfaces. In May 2021 Zhēnxī is the person yelling **`NOT THE WALL OF SHAME FAME`** after Ren files her. In June 2022 Rummy true-replies one of Zhēnxī's `NOOOOOO` protests with **`I love YoU ...`**, and Zhēnxī later answers **`I love you too`**. By July, Zhēnxī is posting against Ren herself and laughing through Ren's `STAWP`, eventually calling the filing **`Deserving`**.

The movement is not `hated the Wall → loved the Wall`. It is more socially specific: being the defendant can still trigger theatrical panic while familiarity with the ritual makes prosecution increasingly playable when the chair turns around. Rummy's affection does not acquit Zhēnxī; it makes the embarrassment safer without cancelling the joke.

WIKI already owns this in `src/data/character-biographies-zhenxi.ts`, so the Wall suffix was consumed without duplicating another Episode or paragraph. The same material is already person-shaped on MAIN.

### Woosung / WOO — hard canon wins the identity fight

The prior rolling state temporarily treated stable account `454708201615523871` / `_woo_woo` as a separate WOO person. That was a continuity error.

**Hard project canon resolves WOO / `_woo_woo` as Woosung. Woohyuk is a different person.** Current WIKI no longer carries a separate WOO Archive / Extended Cast card; Woosung is the canonical owner for account-level material, with source-specific attribution fences preserved.

This matters for the live All Characters HR Run-100 handoff: its temporary identity-reconciliation hold cannot override the higher-priority canon lock. The miner is still useful for person texture, but the identity question itself is closed unless Mugs explicitly changes canon.

### Rich — tease, protest, immediate customer service

The live Run-100 handoff adds one compact Rich/Woosung relationship verb. Rich drags Woosung into the stock tsundere bit; she answers **`OMG NO WHY WOULD U`**; Rich immediately responds with a pat-head penguin GIF.

The useful read is the order: **provoke → protest → softener**. Rich does not erase the teasing premise, but he follows the outrage with a tiny affectionate landing pad. WIKI now carries that relationship rhythm in Rich's dossier rather than turning the exchange into a standalone communal Episode. It is teasing/softening texture, not romance, diagnosis, or blanket proof that every protest is unserious. Rich is POSTED BY for the Tenor response only; the third-party GIF is not credited as MADE BY Rich.

## Pending / held

All Characters HR Run 100 remains a live write. Its current handoffs have been anti-starvation reviewed, but consumption will not advance until its checkpoint declares the run complete. Current public-owner comparisons already show Zyrcant, Woohyuk, Syv, Beowulf, Acoryuie, and Ghoulie's mature mechanisms represented; no filler updates are warranted merely because qualification status changes backstage.

## Hard rails / held rabbits

- WOO / `_woo_woo` = Woosung by hard canon; Woohyuk remains separate.
- Rummy / Zhēnxī reciprocal `love you` language remains friendship texture, not romance or fictive-family literalism.
- `tsundere` is room teasing vocabulary, not diagnosis.
- Ren, Rummy, Zhēnxī, Rich, and other named uploaders are only POSTED BY where the source supports that verb; uninspected media do not acquire maker/capture/subject attribution.
- The May 2021 Zhēnxī Wall scene is an early surviving shame/record scene, not a guaranteed origin or exact entry mechanic.
- Current/export-time role arrays do not create appointment chronology.

## Reader decision

The Wall suffix required **no new reader mutation** on either surface because the Zhēnxī cumulative mechanism was already public in the correct form.

WIKI's current reader lineage includes Rich's tease→protest→pat relationship deepener. MAIN already has a large person-first Rich biography and will not receive a receipt append merely to mirror WIKI structure while Run 100 is still unfinished.

Detailed reconciliation: `INTEGRATION_STATE_RUN_291_WALL_REVIEW.md`.

## Verification / durable state

The controlling MAIN consumption ledger now advances Wall through `3049613453ad7cbeaf6a2febd69cae883350419f` while holding All Characters HR at its Run-99 consumed boundary. Exact final MAIN and WIKI heads still must pass their existing build/deploy workflows before this pass is reported as green; a green ancestor is not enough.
