# UL Site + Wiki Integrator — Run 819

## Full branch census and intake review

The main-site census found **30 active miner branches**: 26 matching `archive-miner/*` and 4 matching `archive-miner-*`. The persistent ledger tracks 51 branch identities, including 21 historical/missing remote refs. All 30 active HEADs were resolved; no new branch or advanced HEAD was found.

Five branches remain pending/backlog/overdue: Photo Submissions, QOTD Officers, August 2026 Living Ensemble, Backroom Deals, and Main HQ. This pass reviewed Photo Submissions first, then Main HQ plus the two Club-Only recovery checkpoints. No miner branch was merged into either publishing repository.

## Reader repair — HamitteY's Lobby self-report

The accepted Photo candidate `site-candidate-2026-08-27-0010-hamittey-entry-to-flowers.md` had been marked reader-covered because Wichita / Underlords and the Flowers entry were already present. A fresh read of the actual public files found that the third Lobby field — **age 23** — had not made it into either reader.

Source receipts:
- `800632681950871552` — HamitteY's January 17, 2021 self-report: Wichita / Underlords / 23.
- `800632847504769055` — Mugen's immediate role-assignment and server-map reply.
- `819966871330750494` — the March 12 Flowers submission.

**MAIN** now folds the dated self-report into the existing HamitteY biography at `src/content/people/hamittey.md`, commit `2cd100d13750336ff6d06d51ad31255075ef4412`. Production workflow **46080559903**, job **140778289388**, succeeded; its exact live marker matched that commit.

**WIKI** now separates the Mugs-confirmed early-member placement from the archive-confirmed Lobby self-report in `src/data/dossier-snapshots/hamittey.md`, commit `3cf5bf1689967f422de414833e82a2ce5bb23e10`. The Cast dossier carries the three fields as a structured fact; the existing Flowers Episode remains the event owner. No duplicate Episode was created.

- Astro build **46080716506**, job **140778790201** — SUCCESS.
- Pages preview/deploy **46080716541** — build job **140778790499**, deploy job **140778926631**, report job **140779004461** — all SUCCESS.
- Deploy log confirmed exact `pages_build_version` **`3cf5bf1689967f422de414833e82a2ce5bb23e10`**.

The two surfaces use different forms: MAIN gives the detail as part of Hami's lived biography; WIKI records the dated self-report in Cast. The age is a 2021 self-report, not a current-age calculation.

## Duplicate suppression and held material

The companion candidate `site-candidate-2026-08-27-0010-early-repeat-entry-context.md` was checked against LEXI, Laila, and Miihi's existing MAIN biographies and WIKI dossiers. Their onboarding and Photoshoot participation chronology is already represented. No duplicate prose was added. LEXI's previously removed public age remains withheld.

The January 4 poster invitation, receipt `795646309440815114`, is already present in MAIN's Photo Submissions event owner and WIKI's launch Episode. The unresolved item is the result/winner/finished-poster bridge, not the invitation itself.

Still held:
- Missing parent receipts `835940038549569627` and `872535327926009928`.
- Uninspected confident_kitten_50951 original attachments `835598011547516950` and `850373606083919892`; the text profile is already integrated, only the media remains blocked.
- Type-X context `897041554089332737` remains event-level/context-held, not a person dossier.
- Mërcy `907472763281887304` remains displayed-name-only; no stable identity bridge.
- `🤳｜ul-photoshoot-event` audience/visibility remains unresolved.
- Unsupported MADE BY / CAPTURED BY / FEATURING credits remain withheld. No uninspected image or private material was published.

## Remaining Photo Submissions count

- **28/28** named candidate files classified; **0** unclassified file-level candidates.
- **34** cumulative headings: 14 reader-covered, 16 workflow-verified, 3 source/provenance-blocked, 1 superseded.
- **0** unrepresented text-safe A/B subclaims in the classified heading set.
- Two cumulative handoffs still require incident-level closure. The distinct accepted A/B remainder remains **unknown / not certified, not zero**.

The Photo family therefore remains `pending_publication / review_overdue`. This one subclaim is integrated and verified; the family is not closed and its consumption cursor is not advanced.

## Anti-starvation / recovery checks

- `archive-miner/club-only-2021-2026-hourly`: checkpoint-first at HEAD/consumed `e45fb11c9239e236231bb65645dfd0285bc0078b`; no new delta, no raw archive re-mining.
- `archive-miner-clubonly-2020-hourly`: checkpoint at HEAD/consumed `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`; no new delta, existing exhausted-boundary/reopen triggers retained.
- `archive-miner/main-hq-hourly`: checkpoint and `site-candidates-2026-08-25-2045.md` at HEAD/consumed `e172df0641d6fa9c9d47a2bec6ff40c1aee0fb3c`; no delta, no duplicate reader edit. Its other integrator's publication ownership was respected.

No consumed SHA changed on any reviewed branch. The main-site branch state and Photo publication inventory now record the Run61 repair, exact reader paths, receipts, build IDs, remaining counts, and source holds. Main report: `archive-intake/INTEGRATION_FINAL_2026-11-27_RUN61_PHOTO_SUBMISSIONS.md` (commit `1756aec3b2d6c0309bad07c9c45f079b31f62ec6`); census/inventory state commit `823aec4f81490e0b1d7c493e4353fe84b34a2337`.

## Build environment

This automation runtime had no repository checkout and could not resolve github.com for a local clone. Exact MAIN production and WIKI Astro/Pages workflows supplied the repository-side verification above.
