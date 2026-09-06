# UL SITE + WIKI INTEGRATOR — RUN 518

## Census / intake state

- Full miner census persisted before deep review and rechecked after the late mover: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**.
- Newly discovered: **0**.
- Opening advanced/unconsumed tail after late census recheck: **1** (`archive-miner/mugen-person-first-20260828`).
- Closing unread pending-review tails: **0**.
- Reviewed MAIN publication-held families after this pass: **11**.
- Backlog: **0**. Review-overdue: **0**.
- Club-Only 2021–2026 and Club-Only 2020 remain current/saturated and were rechecked without raw-archive re-mining.

## Reviewed delta

### `archive-miner/mugen-person-first-20260828`

Reviewed checkpoint-first and intake-only from consumed `6d31eab494316737f855df25fe08399a56f7cb3f` through `f447ca12db8dea4426f1e4ea9012bb415dc4cc98`.

The delta contains only the 05:21 findings / HR / Petty Crimes / receipts package. Its genuinely new character value is not another Key Wall incident; it is **target-side reputation for Mugen's screenshot/preservation labor**.

Key returns to Wall on 2022-02-24 specifically to `see how many times i appeared here`, notices `mugs workin hard on them screenshots`, and says `dunno whether to be ashamed or impressed`.

Accepted cumulative read: Mugen's preservation habit was socially legible before the current archive project. A subject could recognize the effort and simultaneously experience the result as embarrassing exposure. `ashamed or impressed` is therefore a useful contradiction, not a choice the biography should resolve for Key.

Meaning-level dedupe/routing:
- Key's public pages already own the defendant → self-auditor → remembered-old-Wall-figure progression.
- Mugen's public use is different: **how somebody inside the record experiences the person doing the preserving**.
- This is not Petty Crimes and not a standalone Episode.

Attribution / hard holds:
- Key authored the line and names Mugs's screenshot work.
- Do not promote Mugen to CAPTURED BY / MADE BY / POSTED BY every Wall object involving Key.
- Do not turn the line into blanket objection, blanket consent, or a universal Wall-subject reaction.
- Mugen's adjacent `Litrally started it ^` retains an unresolved referent and does not establish that Key founded/started Wall.

Consumed through: `f447ca12db8dea4426f1e4ea9012bb415dc4cc98` after the accepted WIKI reader change passed the existing build/deploy gate.

## Public surfaces

### WIKI — `bossmugen/underlords-wiki` / `main`

Reader-facing file changed: `src/data/character-biographies-run515.ts`.

The mature Mugen narrative's **Don't lose the shit** section now carries the target-side contradiction without repeating Key's dossier. The page says, in effect: the person being preserved can come back, count their own crimes, notice Mugs doing the labor, and be both impressed and embarrassed by the mirror.

Reader commit: `e1af76c1a7cbb91500ff189b135f5023fcf76f72`.

Verification/deployment:
- Build workflow `34033540777`: SUCCESS.
- Pages workflow `34033540778`: SUCCESS.
- Pages build/artifact job `101487387459`: SUCCESS.
- Deploy to GitHub Pages job `101487459576`: SUCCESS.

### MAIN — `bossmugen/underlords` / `master`

Reader-facing files changed: **0**.

MAIN's existing `DON'T LOSE THE SHIT` section is the correct eventual owner for a fuller version of this person-first contradiction, but MAIN reader mutation remains publication-held until the complete source-verification → Astro build → built-output verification → Cloudflare production gate can be run. No MAIN reader build/deployment is claimed for an unchanged tree.

## Closing decision

This delta is a good example of using one source differently across complementary surfaces. Key's page owns what it says about Key. Mugen's page now owns what the same sentence says about being around Mugen: **the archive goblin's work was visible to the defendant, and the defendant's review was basically `goddamn, impressive; unfortunately I am in it`.**
