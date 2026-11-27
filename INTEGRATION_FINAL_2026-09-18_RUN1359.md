# Underlords Wiki — Run 1359 Integration Close

Date: 2026-09-18

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling miner-consumption ledger. Run 1359 closes at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 backlog, and 0 overdue**. Both Club-Only recovery lanes remain current. The six older MAIN whole-person resynthesis families remain publication debt rather than unread mining.

## Reviewed frontiers

- Core Rooms / Events: `2d1d6c10f53475f83c1760fa51ffa3cd214c0277` → `7033af60d97e753efccfb909b9fa1141b894ab0f`.
- Whiskey: `71e948a9bbda40361ff7856f5bf05087ba5a27f3` → `d7710a24da022ca2d5421cd97a6537f0955d5fd5`.
- Wall: `2e8afcba8d436c4841416ee2c6b91beaabea5701` → `df9ec69ec7d03093b43cbd204d52c271379a7c9f`.

All three closing miner heads remained stable after review.

## WIKI reader changes

Final corrected reader commit: `42f3bb69ce6f51900092d9115014d9a05edb2323`.

The live structured Cast surface now:

- keeps **Akariel** separate from **Zyrcant**, gives Akariel her own Wall-shaped dossier, and removes Akariel account forms / Wall receipts from Zyrcant;
- keeps **Alkey** separate from **Meowk** instead of routing Meowk account labels / Wall receipts into Alkey;
- deepens **Gabu** from tentative Saber learner with ƐℲı˥ / Sye backup into the person Snow can eventually dismiss the room with: `Gabu has this`, plus later multi-day alert validation and conditional migration planning;
- deepens the existing **Shiki** owner with the Shk / yuki1794 Whiskey material around game exit without social exile: `quit long ago` can coexist with still telling Crystalia she is `always free to chill or hang out`;
- preserves **Jas** as Staff / recurring cast rather than letting the new Wall slice downgrade him to an archive-only guest.

A concurrent Run 1359 module briefly created a second `shk` character owner after the first reader pass. That violated the hard identity lock **Shiki = Shk = yuki1794**. The final reader commit removes that duplicate owner, routes the new material into canonical `shiki`, and preserves current role/billing metadata instead of letting an intake-local slice overwrite the person's established public identity.

Jas's newest Wall material remains mostly duplicate/corroboration against the mature person read; the final module preserves his canonical Staff metadata while folding only the useful structured texture.

## Verification / deployment

The first Run 1359 reader frontier `a167a2c6b7018466bbfb08e6262eb3bfe7c5ff17` passed both build and Pages deployment, but later concurrent WIKI changes required the hard-canon Shiki repair described above.

For the final corrected reader SHA `42f3bb69ce6f51900092d9115014d9a05edb2323`:

- **Build Underlords Wiki** run `35407267780` — completed successfully.
- **Deploy Underlords Wiki Preview / Pages** run `35407267786` — Pages build completed successfully, but the deploy job was cancelled; rerunning the cancelled deployment job produced the same cancellation. No successful deployment of the final corrected reader SHA is claimed from that run.

This state-only report update intentionally triggers one fresh WIKI build + Pages attempt so the final corrected reader can receive a clean deployment verification without changing reader content again.

## MAIN cross-surface result

MAIN attempted a person-first Akariel owner, corrected Zyrcant page, and Alkey/Meowk roster repair. Its required production verifier/deployer, run `35406800629`, failed before runner steps on attempt 1 and again on attempt 2. MAIN therefore rolled every reader-facing change back instead of leaving unverified public bytes on `master`. The hard-canon correction is live in WIKI source but remains a durable MAIN publication blocker for a later verified pass.

## Rails held

Akariel ≠ Zyrcant. Alkey ≠ Meowk. Shiki = Shk = yuki1794. Rich / DragonRich ≠ Ricochet. Gabu's Saber→Carl wording remains conditional planning, not completed migration. Shiki's Dragon Raja exit is not a UL departure. Lilly/Shiki Jail language remains a joke. Vanness/ShiyaX's `GABU` screenshot referent remains unresolved without pixels. Akariel's `tackles ppl` wording remains chat slapstick. POSTED BY never silently becomes MADE BY / CAPTURED BY / FEATURING.

The person-shaped payoff is clean: Gabu's competence gets more convincing because the uncertainty never disappears into a superhero rewrite; people simply start trusting her with more. Shiki's `quit long ago` lands the opposite way—less game, same doorway. And Akariel's Wall personality is basically `post exhibit, get prosecuted, contribute to prosecution anyway`, which is an extremely UL method of self-preservation.
