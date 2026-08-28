# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-27 22:35 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — Eos → Gilli + QOTD / Officers recovery closure

### Branch census / queue

- Main-site mandatory census confirmed **23 miner branches** before deep review.
- Every discovered miner branch already had a state entry, and every actual branch HEAD matched the recorded `last_seen_sha`.
- Census state was persisted before deep review at main-site commit `9725d7e627592cd211d1869fe4f3250ad5282d95`.
- No miner branch was merged or cherry-picked into either public repository.
- Club-Only 2021–2026 (`d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`) and Club-Only 2020 (`99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`) remain consumed through unchanged current heads and were not reread.
- No branch is currently `pending_review`, `backlog`, or `review_overdue`.
- Active cumulative recovery remains on Living Ensemble, Backroom Deals, Core Rooms, Photo Submissions, and Wall.

### Reviewed branch

`archive-miner-qotd-officers-20260824` was closed through current HEAD `f1de32451c4a493584cee090aafe7e50b0b1adb6` using the one-time safe-baseline handoff review:

- `checkpoint.md` read first;
- then cumulative findings, site candidates, open questions, people/incident/motif indexes and receipt index;
- then the latest dated checkpoint `checkpoint-2026-08-27-0107.md`;
- raw archives were not re-mined.

The latest miner checkpoint says the assigned Officers / Voice transcript bodies were not directly addressable in that miner runtime. `consumed` therefore means the available handoff through this SHA was reviewed and reconciled. It does **not** mean inaccessible transcript bodies or uninspected media were invented.

## Reconciliation accepted

### Eos → Gilli — the lie was mashed potatoes

On **April 18, 2022**, Eos gives three Two Truths, One Lie statements:

1. `I have a small pinky`
2. `Gilli is my reason for joining underlords`
3. `I like mashed potatoes`

Eos confirms #3 is the lie, then adds `my body REJECTS mashed potatoes`.

That makes #2 direct first-person relationship evidence: **Gilli is Eos's stated reason for joining Underlords.** The receipt does not safely establish whether they knew each other before UL, whether Gilli sent an invite, whether she formally recruited/admitted him, or whether the Raja-club and Discord steps happened in which order.

The small construction is almost offensively efficient: Eos slips the important relationship fact between a pinky and mashed potatoes, then proves the potato statement false. The game is trying to manufacture uncertainty and accidentally gives us one of the cleanest Eos → Gilli edges in the archive.

## Surface split

### Main site

`src/content/people/eos.md` now owns the detailed claim and its evidence boundary.

Public lore commit: `9611656d370f76b9d9710de427cc508da900444d`.

Workflow run `33145401394` passed:
- source canon / architecture verification;
- Astro build;
- built-output verification;
- exact-commit Cloudflare production deployment.

### Wiki

`src/pages/relationships.astro` now indexes **Eos → Gilli · Why Eos Joined** in Bonds. It uses the direct statement and the mashed-potato lie as compact relationship context rather than duplicating Eos's full main-site archive profile.

Public lore commit: `efd253a7b44f9be9ae7108e70c5860acbfbf24d9`.

Verification:
- standalone Astro build run `33145412032` passed;
- GitHub Pages run `33145412001` passed build, deploy, and report.

## Consumption advanced

- `archive-miner-qotd-officers-20260824` → `f1de32451c4a493584cee090aafe7e50b0b1adb6`

The branch is now `consumed` through its current handoff rather than remaining permanently `last_consumed_sha: null` merely because some source objects remain inaccessible.

## Deduped / not republished

- **Oyasumi:** TankHead94 self-ID, the 2022 `hard evidence` / cropping register, and the later `Caught my boy in 4k` material are already represented more richly on main.
- **Pervy Sage vocabulary:** Panda-directed coinage → Rich/Jiraiya transfer to Eos → Cookie later usage remains a strong existing evidence family. Eos's source images remain uninspected, so the exact behavior receiving Rich's charge is not narrated.
- **Bombs:** the September 2020 Keep Talking and Nobody Explodes disaster explains Snow's 2022 `remember bombs??` refusal. The remembered `Go left snow.. no your other left snow` wording survives in the 2022 callback, not as a recovered verbatim 2020 chat line.
- **Voice Challenge:** Akariel asking Han for editing help and the later remake remain collaboration evidence; the remake creator remains unresolved without a stable-ID bridge.
- **Gabu nosebleed:** April 11, 2021 remains the earliest surviving Gabu-linked nosebleed evidence surfaced by this intake, not proven origin.

## Held rabbit holes / safety rails

- Eos/Gilli: exact pre-UL relationship, recruitment/invite mechanics, Raja-vs-Discord order.
- Eos Pervy Sage: visual contents / maker / capturer / featured-person provenance for `mhmhm.png` and `ehe.png`.
- Bombs: exact original 2020 spoken/text wording behind Snow's later `other left` memory; Oct. 25 Anthos directional warning remains possible afterlife, not a proven join.
- Voice Challenge: stable identity of Akariel's remake creator.
- WHOMSTF clue archaeology: Gabu `naked`, Snow `catboy` / glasses, Alkey clue origins.
- Wider queue remains open for Nitro creator/exact first noun, ShiyaX fake-family genealogy, Snow/Big Bang, Alabama/Tumbleweed expansion, Feli↔Mugs Tumbleweed, and other media-dependent joins already carried by main integration state.

## Current cross-surface continuity locks

- Main and wiki remain complementary surfaces, not independent canon systems.
- Stable-ID evidence outranks name resemblance.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; fake-family language is not literal kinship or romance.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.