# UNDERLORDS WIKI — Run 1535 Integration Handoff

Date: 2026-09-21

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling miner-consumption ledger. Run 1535 closes with **51 tracked miner identities = 30 active refs + 21 historical/missing**, **0 newly discovered refs, 0 unread pending review, 0 backlog, and 0 overdue**. The remaining 9 `pending_publication` families are reviewed publication/resynthesis debt rather than unread mining.

Reviewed intake frontiers:

- Daycare: `3e0590456ed6f6ea34da9c9fa82c03b9473a17d0` → `c05f77745092f6d8ee04bada14cdc94214bc9482`.
- Whiskey: `ec8cf861415034f1a421d32bb92bb69100ecc493` → `235f5e5b9ec8f6eb86b66994d19213f88debaa72`.
- Wall: `ab1e2890c5f7f0394912cc8ef618a76dbb47663e` → `dd30116c5b2fc88152795ff890b3fd0e84a69a21`.

All three were reviewed checkpoint-first from changed `archive-intake/*` handoffs only; no raw archive was re-mined.

## Reader changes

Run 1535's final WIKI reader is **`2dad837df03e1e7063e177b71be980ce6d752c3e`**.

The reader deepens:

- **Korea** — active-instigator / spectator-pose `:v_sip:` mannerism, recurring RV receipt-accomplice fluency, easy Woohyuk ribbing, plus boba and Gemini Petty Crimes. Korea/Milk remains hard-separated from Miihi/Milk.
- **Nobu** — screenshot-first fast filing, competitive receipt-catching, fallible self-correction, phenomenal_lamb callback continuity, probable light-mode aversion, and strict POSTED BY attribution rails.
- **Ghoulie / Baby Lyssa** — Wall-homeowner/publication-panic contradiction as one cumulative reputation rather than isolated event cards; protests remain scene-local and are not blanket consent.
- **Snow** — rules/security competence coexisting with deliberate Wall-bait supply; no formal Wall office or role chronology is inferred.
- **Zhēnxī** — public mortification and immediate reciprocal affection with Rummy can coexist; friendship texture only, not romance/sex.
- **HamitteY** — compressed deadpan verdicts around ShiyaX, heart-softened mock betrayal with Baby Lyssa, and the reverse comic-exit gag when Hami becomes the exhibit.

Concurrent **Captain AJ** return-continuity work was preserved rather than duplicated. The AJ / lordaj911 stable-account separation remains intact.

## Verification / repair

The first Korea/Nobu reader exposed a genuine route failure: Korea's RV relationship pointed to nonexistent `/characters/rv`. Canonical RV is Ren, so the WIKI was repaired to `/characters/ren` rather than creating a duplicate person.

Verified final reader:

- Build Underlords Wiki **`35620702149`** — **success**.
- Deploy Underlords Wiki Preview / Pages **`35620702454`** — **success**, including the `Deploy to GitHub Pages` job, deploying reader `2dad837df03e1e7063e177b71be980ce6d752c3e`.

MAIN reader-facing pages changed **0 intentionally**. Its complete verifier was nevertheless retriggered on reader-neutral commit `4692856081db53c4116dbf67a758531bb64c2545` as workflow run **`35621716651`**. Attempt 1 and the single failed-job retry both failed before any workflow step executed (`steps: null`), so source verification, Astro build, and built-output verification never actually ran. This is recorded as inherited runner/startup failure rather than a demonstrated content/build failure, and no MAIN deployment is claimed.

## Surface split / no-public-change decisions

Existing MAIN biographies already own the richer Ghoulie, Snow, Zhēnxī, and HamitteY person-shaped stories; receipt-level additions would have made those pages more archive-led rather than better biographies. Korea/Nobu were strongest as structured WIKI work in this run.

The late Ghoulie Wall family was deduped by meaning instead of published twice. Captain AJ's concurrent dossier was novelty-checked and left as the canonical WIKI owner for that return-continuity packet.

## Consumption handoff

- Daycare: consumed through **`c05f77745092f6d8ee04bada14cdc94214bc9482`**; do not reread.
- Whiskey: consumed through **`235f5e5b9ec8f6eb86b66994d19213f88debaa72`**; do not reread.
- Wall: consumed through **`dd30116c5b2fc88152795ff890b3fd0e84a69a21`**; do not reread.
- Club-Only 2021–2026 and Club-Only 2020 remain recovery-current.

Held rails remain held: Korea ≠ Miihi, Tofu rule-source rabbit, RH-16, unresolved visual/media provenance, same-name identity boundaries, historical role arrays as non-chronological metadata, earliest surviving ≠ origin, and joke family/romance/governance as nonliteral unless independently supported.
