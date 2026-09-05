# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 — WOO Wall-reputation integration_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Earlier verbose states remain recoverable in git history.

## Census / queue

Run 441 opened with **51 tracked miner identities = 30 active matching refs + 21 historical/missing**, 0 newly discovered, 1 unread pending-review tail, 10 MAIN publication-held families, 0 backlog, 0 overdue. `archive-miner-wall-hourly-20260824` had advanced from consumed `0790aaac20cb961271a6100958e754d1f4ce90fb` to `11cf2ea5517f3688263806a05ca14fbd55198fe5`; that intake delta was reviewed checkpoint-first from changed `archive-intake/wall-shame-fame-2020-2026-20260819-1857-pdt/` handoffs only. Both Club-Only recovery priorities were rechecked at their saturated/do-not-churn heads; no raw archive was re-mined.

The closing branch census caught two later miner moves after the reviewed boundary: Wall advanced again to `eacce9f6590ab2c63554318a74ada26631bd90f4`, and Whiskey advanced to `9b6d42a855567d38f4054d5c51ab87bd104119cd`. Those suffixes are seen but unread and remain pending review; they are not silently consumed by this run.

## Public integration

**WOO — famous because apparently talking is incriminating.** The Wall delta deepens WOO as a person whose social volume is compressed rather than low. Anthos can tag WOO under `woo.png` and receive three `:Umbreontraumatized:` in place of a defense. A mundane Gabu beat becomes `gabu....` → `I see you` → `in a whole different light` → `:KirbyWow:`. By 2023, WOO has rotated from summoned defendant into mock prosecutor and filer: `NOBU` / `TRAITOR`, then `:AUcatstare:` / `nobu` / `why`, followed two days later by WOO posting a Wall screenshot personally.

Moon and Ricochet add the relationship texture. Moon calls something `the perfect paragraph for tsundere Woo`; Ricochet later performs the stock paragraph, tags WOO, gets `OMG NO WHY WOULD U`, and answers the protest with a pat-head penguin GIF. The public copy keeps `tsundere` as peer joke-language rather than diagnosis. Ten days later WOO says `I need to not talk sm I got so much stuff on the hall of shame`; Moon replies `No no you famous uwu.`, and WOO answers through crying/skull reactions. The cumulative read is sparse Wall author but conspicuously quotable when activated: friends know what reaction they are summoning, WOO knows the mechanism, and the embarrassment keeps becoming participation rather than retreat.

The WIKI now owns this as a person-first Woosung/WOO narrative overlay in `src/data/character-biographies-run400.ts`, including a proper `Petty Crimes` section. The exact Wall target account ID in the miner (`454708201615523871`) does **not** match the current public Cast ID on the existing Woosung owner (`455489887860375558`), so no account-ID merge or metadata rewrite was made. The scene family was already publicly owned by WOO/Woosung through the earlier Nobu material; the unresolved ID mismatch remains backstage instead of being converted into identity certainty. Attachment pixels remain uninspected and therefore POSTED BY only.

No MAIN reader-facing WOO page was created. MAIN currently has no established WOO/Woosung biography owner worth turning into a thin mirror of the WIKI dossier, and production publishing is also intentionally paused for repository maintenance. The material is therefore published only to WIKI for now.

## Verification / deployment

Verified WIKI reader head: `26ecb21f4d934b7b4c324deb748caa6daa14bed7`.

- Build workflow `33960586105` — **success**; Astro build step succeeded.
- Pages workflow `33960586106` — **success**.
- Pages preview build, artifact upload, actual `Deploy to GitHub Pages`, and report job all succeeded.
- Reader-facing file changed: `src/data/character-biographies-run400.ts`.

MAIN automatic deploy triggers remain deliberately paused. Current `.github/workflows/ul-hourly-build-deploy.yml` is still `workflow_dispatch` only and explicitly says automatic production deploys are paused while the runner/account issue is resolved. Run 441 therefore made no MAIN reader edit and did not bypass the maintenance gate.

## Consumption boundary

- Wall was successfully reviewed through `11cf2ea5517f3688263806a05ca14fbd55198fe5`; the accepted WIKI change passed build and Pages deployment, so MAIN's controlling ledger may advance Wall `last_consumed_sha` through that reviewed SHA. The later `eacce9f6590ab2c63554318a74ada26631bd90f4` suffix remains unread.
- Whiskey remains consumed only through its previous safe boundary `2fa4c6b6e0185d6b4549eadc80d6098d8dc9d66c`; its newly observed `9b6d42a855567d38f4054d5c51ab87bd104119cd` head is pending review. Older accepted MAIN Whiskey publication debt remains held behind the MAIN maintenance / verification gate.
- QOTD / Officers remains reviewed/seen through `5f5df586a3e9ab4d50bd04ea1dcbf3228b71bf36` but consumed through `53694ef82001258fb7d374fea1bfbf91b39dd468` because its accepted MAIN Panda/Eos fold is still publication-held.
