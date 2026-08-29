# UL WIKI INTEGRATION STATE

Last dual-surface integration continuation: **2026-08-29 06:27 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Census / queue

The full census is **27 active remote miner refs** plus **21 historical/missing refs** = **48 tracked branch identities**.

Opening finite queue was empty, and the closing census still has **0 pending / 0 backlog / 0 review-overdue** finite branches. Core Rooms and Wall are the two cumulative recoveries with `last_consumed_sha: null`; both advanced during this run and were reviewed through their new forward heads. Both Club-Only miners remain fully consumed/current. No miner branch was merged or cherry-picked wholesale.

## Reviewed material / public split

### Core Rooms — forward head through `152dbda8…`, older recovery through 01:46

The current Core suffix from seen `1ad4e64a…` through `152dbda8e4900b5b2f8e3bf68f93354cc54b8f6f` was reviewed checkpoint-first and intake-only. Its strongest current package is Allenne / crimsonmushroom: on August 13, 2020 Allenne says `Oh, Yess!! I'm in Underlords`, then `My ign is Allenne`, and later `Hello! I'm new here!`. That safely proves contemporaneous UnderLords membership plus IGN; the `new here` doorway line does not become an exact in-game admission date. Current MAIN and WIKI already own the richer Allenne story, so this is corroboration, not another public paragraph. Floofy and TinyChungus remain thin Ethereal visitors; Spritely/Shurui's `plabn` rabbit remains unresolved.

The older Core recovery also moved backward through the **2026-08-26 01:46** package. Gilli and Gabu's recurring height dispute is real across months — `Gabu finally admitted she is shorter`, `Gilli is shorter!!!!`, later `Gilli is shortest, Gabu is not imposter` — but both public surfaces already own the safer joke genealogy. `finally` implies prehistory, not origin, and no real-world height claim is made. Xuseio's `Finesse of a comedy duo...` line about a Namo scene remains held because the second participant/context is still unresolved.

Core is therefore reviewed through current forward head `152dbda8…` while the cumulative older floor is through **01:46**; older material remains. Formal consumed SHA stays null until that safe baseline actually closes.

### Wall — forward head through `c7f0822e…`, older recovery still through 22:06

The Wall forward delta `33d136fe… → c7f0822ecad21bdad32a19246da01a036a17e6b5` was reviewed checkpoint-first. Its A-grade keeper is **The Eh Chorus** on March 31, 2021.

iBwoy posts an image with `Eh`. Cookie answers `Eh`; Lilly answers `Eh`; Mugen answers `Eh`; Nelph drops a reaction file. iBwoy briefly interrupts with `Ahem. I'm always here btw o.o`, only for Cookie to answer him with another `Eh`. Gilli joins, iBwoy eventually gives in with his own `Eh`, and the room starts stretching the syllable until Mugen, iBwoy, and ShiyaX are effectively competing in vowel inflation. The social turn is the whole scene: whatever the image originally meant, the reply itself becomes the content. The trigger image remains visually uninspected, so iBwoy is **POSTED BY** only; MADE BY, CAPTURED BY, FEATURING, and the pixels remain unresolved. This is a bounded surviving chorus scene, not proof that UL invented `Eh` that day.

This belongs on the WIKI as a discrete Episode, not on MAIN as a thin iBwoy dossier. MAIN already has enough stable-account evidence to know iBwoy existed across 2020 Lobby and 2021 Wall, but not enough human texture to justify pretending a greeting and one excellent chorus are a whole biography.

Beckiie's later confrontation (`We all know you are using him`; `Are you asking that cause we caught you with a shame act?`) remains too context-poor for publication because the target is unresolved. Habba's image later gets interpreted as a small-person/tall-person visual, but the file is still visually unresolved, so no identities or literal height claims are inferred.

Wall's older cumulative recovery remains through **22:06; 21:24 and below next**. Formal consumed SHA stays null until the older baseline closes.

## Duplicates combined / held

- Allenne's UnderLords membership + IGN is corroboration of existing MAIN/WIKI owners, not a new join-date claim.
- Gilli/Gabu height warfare is already owned on both surfaces; no real height ranking is inferred.
- Floofy/TinyChungus remain thin Ethereal visitors rather than paper-doll dossiers.
- Spritely/Shurui `plabn` remains unresolved.
- Namo's alleged `comedy duo` counterpart/context remains unresolved.
- The Eh trigger image and its maker/capturer/subjects remain unresolved.
- Beckiie's target/context remains unresolved.
- Habba's image subjects and exact visual remain unresolved.
- Core and Wall remain formally null-consumed until their older cumulative baselines close.

## Public changes this continuation

**MAIN:** no reader-facing page changed. The reviewed Core material was duplicate/corroboration or unresolved, and iBwoy is intentionally too thin for a biography.

**WIKI:** `src/data/integrator-episodes-wall-20260828.ts` gained **The Eh Chorus** at reader-facing commit `172a32e9e8758d132ddd61e9b799d72c2a1cf142`. This is intentionally WIKI-only because the evidence is incident-shaped, not a rich person dossier.

## Verification / deployment

WIKI reader-facing commit `172a32e9e8758d132ddd61e9b799d72c2a1cf142` passed the standalone **Build Underlords Wiki** Astro build. Its existing Pages workflow also completed **build → artifact upload → deploy → report** successfully.

MAIN has no reader-facing content commit in this continuation; its census/state/report commits are still required to pass the repository's normal source verification, Astro build, built-output verification, and Cloudflare production deployment before the run is reported closed.

This rolling-state commit itself is checked through the WIKI's normal exact-head workflows before final closeout.
