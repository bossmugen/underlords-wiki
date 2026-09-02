# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 07:19 PDT_

This is the rolling dual-surface reconciliation snapshot. Older detail remains in Git history and run-specific records. MAIN's controlling branch-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`.

## Current reviewed boundary

The closing shared census is **49 miner identities = 28 active refs + 21 historical/missing**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue**.

The three advanced active refs were reviewed checkpoint-first and intake-only. Wall is consumed through `b09ec5743c5db933444572e90c70aeeb59e80d7e`; Daycare through `cc8bd1812f5ffaa6cde0af3c1e7d8be2b171eac6`; Mugen person-first through `10104ccb1782df0e59c0a0d71eab050b9041b37a`. Wall remains an active recovery quarry, but there is no currently unread Wall delta. Both Club-Only recovery priorities remain current through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa` and `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.

## Current reconciliation — planner mess, Screenshot Court role-switches, and one concurrency correction

MAIN deepened **Mugen** by folding the 2021 Photoshoot backroom family into her existing planner self-description: useful external structure can coexist with Mugs personally being in bed, hunting for glasses/contacts, forgetting a winner detail, correcting channels, dumping ideas after `two pots of earl grey`, leaning on Anthos's `Theme tally`, and discovering she is in the wrong chat. `Two pots of Earl Grey` also enters MAIN `Petty Crimes`. The read is planner/personally-chaotic, not general incompetence or tea-habit canon.

MAIN deepened **Kiro** as well. Six days after self-filing `Being petty`, he posts `Seraph needs some explaining to do`; the same person can therefore occupy defendant/self-filer and mock-prosecutor positions inside the Wall. His later `Who's kiro` denial is followed by Sou's affectionate `i love you youre so unserious`, which reads as peer recognition of the performance rather than identity uncertainty or romance canon. MAIN synthesizes this as one Kiro mechanism rather than an event ledger.

MAIN also deepened **Suzimasu** after the first state draft was composed. The new Wall family now sits inside the person-first biography: `Trying to win the wall of shame awards`, active evidence-sharing, the quick shift into `Aww it’s okay` / `I still wuv you` when Ren's self-roast softens, and the later `I can explainnnnnnn` defendant posture. The useful contradiction is not innocence-versus-wildness; Suzi repeatedly walks into the same embarrassment economy, can prosecute or defend from inside it, and can still notice when the joke should become reassurance.

Daycare's new **Eos** pocket is not a new MAIN thesis, but it is useful WIKI structure. `no context is needed wym`, self-filing, `Debating on sending more`, Gilli's `@Eos donit`, and Dayadream coaxing after `i wanna say smth but ima keep quiet` reinforce the existing selective-restraint / defendant-prosecutor / evidence-gremlin contradiction.

## WIKI surface split

WIKI now carries **three searchable Running Gags** in `src/data/integrator-gags-wall-20260902-run222.ts`, loaded by the existing `integrator-gags*.ts` runtime glob rather than by mirrored biography prose:

- **Kiro: Mock Prosecutor, Evasive Witness** — the `Being petty` self-file, `Seraph needs some explaining to do`, `Who's kiro`, and Sou's `so unserious` peer verdict as one recurring anti-straight-answer mechanism.
- **Eos vs. Context** — self-filing, evidence hesitation, Gilli activation, explicit context-stripping, and later room-coaxed restraint as one reciprocal Screenshot Court pattern.
- **Suzimasu Enters the Blast Radius** — Wall-award ambition, active filing, reassurance toward Ren, mustard-watermelon participation, and later defendant posture as one recurring social pattern.

This corrects the earlier Run 223 state draft, which was written concurrently and inherited the reader commit in its ancestry while still describing WIKI reader-facing changes as `0`. `INTEGRATION_STATE_RUN_223_CONCURRENCY_ADDENDUM.md` preserves that correction explicitly rather than silently rewriting history.

## Held rabbits and hard rails

Wall q4 did not receive a reliable advance; unreliable negative searching was not promoted into a conclusion. Uninspected media remains opaque. Kiro's October 14 screenshot keeps POSTED BY distinct from MADE BY / CAPTURED BY / FEATURING. Sou's affectionate line does not establish romance. Suzimasu's June 2022 screenshot linkage is strong probable from tag/timing/defense language rather than a true-reply join. The Mugen Photoshoot family does not establish a permanent Anthos/Mugen division of labor, all-last-minute planning, general incompetence, or an Earl Grey preference/habit. Existing Wall provenance/identity rabbits remain unresolved unless a later source actually closes them.

## Surface / verification

MAIN reader pages in the accepted ancestry: `src/content/people/mugen.md`, `src/content/people/kiro.md`, and `src/content/people/suzimasu.md`. WIKI reader-facing objects: the three Running Gags above. Exact final publishing heads are validated by each repository's existing Actions gates: MAIN source canon/architecture verification + Astro build + built-output verification + exact Cloudflare deployment; WIKI Build + Pages deployment.

Hard rails remain unchanged: user-confirmed canon wins; similar names do not merge people; appointment chronology is not inferred from export-time role arrays; joke family/romance language stays nonliteral; SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct; earliest surviving remains only earliest surviving unless a stronger origin claim is earned.
