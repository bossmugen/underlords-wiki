# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 392 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. A successor Run 393 census began while Run 392 was closing, so MAIN's newer ledger owns the late Daycare/Louvre/meems review boundaries rather than being overwritten by this state note.

## Current census / queue

Run 392 discovered one new active miner identity, `archive-miner/meems-2020-2025`, taking the tracked census from **49 to 50 identities = 29 active refs + 21 historical/missing refs**. It was registered before deep review. Its initial head was the already-reviewed Run 391 MAIN close, so the one-time safe baseline itself contained no miner-specific public delta.

Run 392 also reviewed the Wall suffix through `db47ea32c8dd1a970d28f2221b9e7550fdb4cb9d`. During closing concurrency, the successor census then caught additional Daycare, Louvre, and meems movement and persisted pending review state; a still-later Run 392 ref check observed Louvre at `16dea3b274b2545ef583fd6e923f8064f3d9f707` and meems at `793a72958c9b68162e005f3536a903c09baf887b`. Those late heads are handed to the successor rather than being misrepresented as reviewed here.

Both Club-Only recovery priorities were rechecked checkpoint-first: 2021–2026 remains current through `e45fb11c9239e236231bb65645dfd0285bc0078b`, and 2020 remains current through `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`. Their saturation / retrieval-locality / stop-churn boundaries are unchanged. No raw archive was re-mined.

## Public reconciliation

Run 392's new public family is **Kiro ↔ Seth delayed-return teasing**, folded into Kiro's existing person-first dossier at `src/data/character-biographies-kiro.ts` rather than spun into a standalone Episode.

Kiro's Wall filing says `Seraph needs some explaining to do`; more than three days later Seth returns to that exact filing with `Lol,no explanation for you,dear`. Kiro then appears in the laugh reaction set on Seth's comeback. The relationship read is bounded and reciprocal: Kiro mock-prosecutes, Seth accepts the joke frame while refusing the mock jurisdiction, and Kiro can laugh at the refusal. `dear` is treated as joke-softening familiarity, not romance or sex evidence.

Seth's broader Wall packet is strong enough to bank as a person read — affectionately evasive when prosecuted, enthusiastic in the gallery later — but WIKI does not yet have a safe canonical Cast owner / role placement for a standalone Seth dossier. That hold is taxonomy/identity-surface discipline, not an attempt to downgrade ordinary contextual inference. Export-time/current role arrays were not used to invent appointment chronology.

The same Wall suffix closes one backstage q18 topology point: Ren's `:Barbara_prays:` message is a true reply to the known Mugen parent about five hours later. That resolves reply structure only. It does not identify screenshot contents, maker, capturer, or featured person. Bubbles' `doegor` reaction support remains a fold-only deepener of already-owned material rather than a duplicate public item. Uninspected media remains POSTED BY only.

## Verification

WIKI reader commit: `489119f783ff78185fbf36b365243ae74197efc6`.

- Build `33900573087`: **success**.
- Pages `33900573112`: **success**.
- GitHub Pages build/artifact flow: **success**.
- `Deploy to GitHub Pages`: **success**.

MAIN reader-facing pages changed **0** in Run 392. Run 392's last direct MAIN bookkeeping head before the successor census was `47abfb44ea34c11e781f506f56e2e3071b2baaf9`. Its `UL Hourly Build + Deploy` run `33900270442` failed on attempt 1 before repository steps instantiated; `Build + verify` exposed no steps and verified Cloudflare deployment was skipped. The failed build job was explicitly retried once; attempt 2 failed in the same pre-runner form with no step list, and deployment again stayed skipped. Source verification, Astro, built-output verification, and Cloudflare therefore never executed and rejected reader content. No new MAIN deployment is claimed.

## Consumed cursors

The new meems branch's initial safe baseline was reviewed as zero-delta at the Run 391 MAIN close. A later meems head appeared during closing concurrency and is handed to the successor run for intake-only review.

Wall is reviewed by Run 392 through `db47ea32c8dd1a970d28f2221b9e7550fdb4cb9d`, but its conservative `last_consumed_sha` must not leapfrog older accepted MAIN Wall work that remains behind the mandatory MAIN publication gate. The same publication-held logic continues for Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey until MAIN verification actually executes successfully.

## Rails retained

Hard identity, role, family-language, romance, attribution, privacy, source-contradiction, and earliest-surviving rails remain unchanged. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. No similar-name identity bridge, hidden-pixel inference, role-array chronology, or private/safety-sensitive detail was promoted.
