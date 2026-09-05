# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 427 final handoff_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose states remain recoverable in git history.

## Run 427 handoff

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 0 unread pending review, 9 MAIN publication-held families, 0 backlog, and 0 overdue**. QOTD / Officers was reviewed checkpoint-first through `a3a5a90c1070fdbfa4c0e46603a263a424159e19`; a late Core Rooms / Events mover was also caught and reviewed through `0cc926eae5b97640cf631c8e5b56901948ed881a`. Both Club-Only recovery priorities remain current at saturated/do-not-churn heads. No raw archive was re-mined.

### Hard identity correction

**Akariel is Zyrcant.** MAIN `CANON_LOCKS.md` lists `Akariel`, `Akariel™`, and `akariel_star` as Zyrcant aliases. A concurrent Run-427 state close briefly wrote the opposite; that is a continuity error and must be ignored. Stable account `257294164746698763` belongs to canonical public person **Zyrcant**. Do not create a separate Akariel dossier.

### QOTD / Officers reconciliation

**Zyrcant** gains a strong Wall progression. In January 2021 she directly asks to be put on the Wall of Shame; RV/Ren mock-gatekeeps the privilege, then immediately says everybody ends up there eventually. In July she posts an image; Tofu opens bidding at five cents; Zyrcant answers with exaggerated distress; more than half an hour later Mugen is still carrying the premise as `Auction wars`, with RV and Gilli joining the money/bid bit. This is character progression from soliciting public embarrassment to performing outrage when the room actually turns one of her posts into a bargain-bin lot. It is archive irony, not a proven January→July callback. The image pixels remain uninspected.

**Tofu ↔ Kuki** gains a durable reciprocal-exposure mechanism. September 2021 already has Kuki publicly screenshot-filing Tofu, Tofu objecting theatrically and then promising recidivism. In November Anayss directly describes both of them as repeat DM exposers. By August 2024 Kuki still treats Tofu's Wall access as exposure risk and then posts another screenshot at Tofu two days later. Safe read: durable reciprocal ammunition. Do not infer blanket consent, that every exposure was welcome, or that every screenshot was a DM.

Separate concurrent Run-427 character work also added Petty-Crimes-scale Tofu self-debate and Kuki horror-game texture to their existing biographies. Those additions remain in the current reader tree and are not duplicated into the new structured Wall modules.

### Core Rooms / Events reconciliation

**YveSinclair** gains a developing person seed: Mugen first orients her to general-team voice/text; later, during escape-room-style group planning, Yve opts in, joins the room's silly spooky register, then admits she is doing this while in class and makes the collision itself into a joke. The useful read is quick social buy-in and willingness to match the room's language while ordinary life competes for attention. Do not inflate this into universal horror taste, chronic academic distraction, a dated Staff role, or a membership-start claim. No safe canonical public Yve owner exists yet, so this is banked as future person/Petty-Crimes material.

**Kuwei** remains held: the surfaced cute/counter-flattery sequence probably reflects playful affectionate register, but the intended counterpart is unresolved. Preceding images remain **POSTED BY Anthos** only. WOO task-help, Grim enacted warmth, and Tae/S42 spy-purpose checks produced no new publishable receipt.

### Reader changes

Current Run-427 WIKI reader tree includes the concurrent Tofu/Kuki biography deepeners plus two additional structured modules:

- `src/data/integrator-episodes-run427-qotd-wall.ts` — **Zyrcant — She Asked for the Wall, Then Got Valued at Five Cents**.
- `src/data/integrator-gags-run427-qotd-wall.ts` — **Tofu + Kuki: Mutual Assured Screenshot Destruction**.

Verified reader head containing those changes: `933d816d5ce519ed0933e8a7bd4789087518ed7b`.

Exact-head verification:
- Build workflow `33949056480` — **success**.
- Pages workflow `33949056450` — **success**.
- Preview build, artifact upload, **Deploy to GitHub Pages**, and report all succeeded.

The later `[skip ci]` state reconciliation commits are reader-neutral descendants of that verified reader head.

### MAIN surface split / verification

MAIN reader-facing changes: **0**. The richer Zyrcant Wall progression and Tofu↔Kuki relationship belong eventually inside person-first biographies rather than as mirrored WIKI prose, but MAIN's mandatory publication gate still fails before repository work instantiates.

Verification target `0d8dbf402a9f7f20bd1a4c4ee022c0ccb9db461d`, workflow `33949119763`, failed twice. Attempt 2 again exposed `Build + verify` with `steps=[]`, `runner_id=0`, and no runner name; verified Cloudflare deployment was skipped. MAIN source verification, Astro, built-output verification, and Cloudflare deployment therefore did not execute and reject content. No new MAIN deployment is claimed.

### Consumption / queue

QOTD / Officers is reviewed and consumed through `a3a5a90c1070fdbfa4c0e46603a263a424159e19`; its accepted WIKI changes passed WIKI verification. It remains `pending_publication` because older accepted MAIN Sye material and the richer MAIN person-first folds are still held behind MAIN verification.

Core Rooms / Events is reviewed and consumed through `0cc926eae5b97640cf631c8e5b56901948ed881a`; that fresh suffix is successful no-public-change while older MAIN Core publication debt remains held.

The nine MAIN-held families at close are **QOTD / Officers, Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**. These fresh suffixes are reviewed; `pending_publication` is not permission to reread them next cycle.
