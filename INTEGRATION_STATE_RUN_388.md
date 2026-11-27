# UNDERLORDS WIKI — Integration State Run 388

_Date: 2026-09-04_

## Census / intake

Full miner census closed at **49 tracked identities = 28 active refs + 21 historical/missing refs**. Newly discovered: 0. Pending review: 0. Backlog: 0. Overdue: 0.

Reviewed current heads this run:

- Wall `2c29acfd38ae6fdf283858175e03632546f60a54`
- Core Rooms / Events `4def21e7262a6211b11453fb1e91cc6c39366960`
- Daycare `b925502abd685fa9d17a6e845ce534a5fe589831`
- Louvre / AI Art / Athenaeum / Other Games `297b618d5b352a4705e80effbbaa63fa352a3464`
- Mugen person-first late close `d44184af526b71b6884969c42fd9e0f4107fc4e7`

Whiskey did not advance. Both Club-Only recovery priorities remain current through head (`e45fb11c9239e236231bb65645dfd0285bc0078b` for 2021–2026; `ed66714f8d2c18f23bbb2b951bf305f0fa913f21` for 2020). Saturation / do-not-churn boundaries remain unchanged; no raw archive was re-mined.

## Public WIKI changes

### Gabu — Carl/Saber QA folded into the canonical person owner

Fresh Daycare material deepened the existing Gabu systems-care contradiction. On April 17, 2023, Carl was being tested against Saber's event-alert workload. Gabu pinned `Gabu's alerts check`, wrote `If everything works ok, i will try replace saber with carl`, and kept a Monday-through-Sunday QA checklist that accumulated `ok` marks before a later edit. The canonical owner in `src/data/character-bios-officers-core-deep.ts` now carries the person-level synthesis: the same Gabu who makes human doorways easy also refuses to migrate infrastructure on vibes. Test it, watch it, leave a visible trail, then trust it.

A transient Run-388 overlay briefly duplicated this material. That overlay was emptied in commit `c370b00ca8c36226359e0c2388cedb9a1be7b084` so the canonical deep Gabu file remains the sole public narrative owner. Do not restore the duplicate overlay.

Hard boundary retained: Carl's test is specifically against Saber's event-alert function. It does not identify Saber as the bot in the separate March 2023 234h/279h failure story.

### Hard identity repair — Akariel is not Zyrcant

The current WIKI had a stale canonicalization bridge that assigned Akariel aliases and Wall receipts to Zyrcant. Commit `b133af6b23890f9f09d018cb24130d9ca322fbaf` removed those Akariel aliases/receipts from Zyrcant and restored Zyrcant's own Amaurot/VIP context. `WikiLayout.astro` already imports `canonicalize-cast`, so the correction is part of the public page data path; commit `fe9585118f9d22fa8097679dbfbed7147517f664` also makes the canonicalization explicit on `all-content` load. No new Akariel public page was invented merely to repair the bad bridge.

### Reviewed but not promoted

- Wall / Crystalia: fresh light-mode / aquatic material is corroboration of an already-owned person read; no duplicate paragraph. Uninspected pixels remain uninspected.
- Core / Type-X + Gilli: reciprocal terse teasing is useful person texture, but no safe canonical Type-X owner exists yet; flirt-coded lines remain social play, not romance/sex canon.
- Louvre / Skully: theatrical entrance + early game/class enthusiasm + later update fatigue is a coherent person scaffold, but no safe public owner exists yet. `at the moment` is not permanent quitting; local-clock mismatch is not geography/timezone.
- Mugen: late close package explicitly produced no new public Mugen promotion.

## Verification / deployment

Final reader head for this run: `c370b00ca8c36226359e0c2388cedb9a1be7b084`.

- Astro Build workflow `33891845206`: build job **success**.
- Pages workflow `33891845183`: preview build **success** and `Deploy to GitHub Pages` job **success**.

The earlier hard-identity repair head `b133af6b23890f9f09d018cb24130d9ca322fbaf` independently passed Build `33891446383` and Pages `33891446411` as well.

MAIN remained independently blocked by its pre-runner verification failure; WIKI publication was not held hostage to that separate surface.

## Consumption / rails

MAIN remains the controlling branch-consumption ledger. No conservative consumed cursor advanced across the six MAIN publication-held families because older accepted MAIN reader debt remains behind MAIN's mandatory verification gate. Reviewed heads and dispositions are durable and should not be rediscovered as fresh novelty.

Hard identity, role, family-language, romance, attribution, privacy, source-contradiction, and earliest-surviving rails remain unchanged. In particular: Akariel ≠ Zyrcant; no similar-name bridge may recreate that error.