# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 11:44 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**. No archive-miner refs live only in the wiki.

At the reviewed cutoff:

- finite pending: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**

Current important frontiers:

- All Characters — seen/consumed `0a7f1e2d811a8f85a4080465376563d5c978197d`
- Daycare — seen/consumed `5550f88d6659a38c4c967c4ae0203657ee98a179`
- Louvre / AI Art / Athenaeum / Other Games — seen/consumed `8729c12c787562155e5ea2abe0daca6936801729`
- Mugen person-first — seen/consumed `9ceb401612264d52d0ceb5b8971a4d67ccd7d5d5`
- Whiskey — seen/consumed `e477750affa41ffacf7151441afc2e26c9d6df35`
- Core Rooms — seen/forward-reviewed `f38fcb05669d4ca2bda3dcbe65704149bdf4cbee`; formal consumed null; older safe-baseline recovery through the **2026-08-25 14:46 package**, with 13:46 next
- Wall — seen/forward-reviewed `ce096efe589e4b09041888809f02e1072c779572`; formal consumed null while cumulative recovery remains open
- Club-Only 2021–2026 — seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020 — seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`

No miner branch was merged or cherry-picked wholesale.

## This pass — WIKI keeper: **Mint Choco Schism**

January 4, 2022. Dainyamite says `mint choco is good 😮`. Ren immediately reveals she is on the same side — `ITS NOOOT!! I love mint choco chip ...` — and then drops the better character receipt: **`Gilli got me a mint choco chip socks for my b-day`**.

Forty-three minutes later Gilli personally enters the record and tells Dainyamite: **`I hate Mint and chocolate together`**.

The lower-threshold read is exactly the kind of ordinary relationship texture the project now keeps instead of throwing away: Gilli apparently bought Ren a birthday gift themed around a flavor Gilli herself thinks is wrong because Ren likes it. No formal relationship tier is needed to make the care legible. The joke works because Gilli's own taste loses to the gift recipient's taste.

Attribution stays clean: Ren is SAID BY for the birthday-sock claim; Dainyamite is POSTED BY for the Tenor embed; the underlying media maker is not assigned.

Episode owner: `src/data/integrator-episodes-wall-20260829.ts`. Corrected reader-content commit: `f4fd082edbc373d4655be7c2fa4d5f88ecd606da`.

## MAIN-only keeper this pass: NemeMoka creator life

MAIN owns the new NemeMoka material because its value is cumulative biography rather than one bounded incident.

Neme's November 2020 line — `I finished my work in 2 days without sleep with that 216 layers` — establishes that Neme could choose an absurd creative pace without anyone else's help. Four months later Neme says a shop was made but she quit because `the dude annoys me to draw faster`, while some of her items would still sell and `They got a new artist already`.

The probable person-level read is now public: Neme had been contributing art/items to a selling project, did not like another person controlling the output pace, and left. The distinction matters more than the missing storefront name: **self-directed intensity is not consent to somebody else's quota**. Exact shop/platform, compensation, ownership, item inventory and the man's formal role remain unresolved. Uninspected media remains unattributed.

MAIN owner: `src/content/people/nememoka.md`, reader-content commit `083b1635ea9e96b88b3c2ea477e8275024361052`.

## Other reviewed deltas

### Daycare

Snow's early-April 2020 access-grant, role-assignment troubleshooting, `locked down`, server-build and audit-log lines corroborate his already-richer public access/security-operator history. They do not prove Snow created Daycare or establish an exact Daycare ACL. No duplicate public object was added.

### Mugen person-first

The branch's own public-integration handoff confirms MAIN already absorbed Dean/Zepp/Key off-game texting continuity, Ten `*barks*` → Mugen `Woof`, Sye's reunion age heckle, Rooks engagement memory updated to married + dog, and Nothien's `rant` / `You're welcome back anytime` step-away exchange. The late branch suffix was integration/checkpoint handoff only, so it was consumed rather than reread forever.

### Whiskey

Aizzy's `Old enuf` → `I feel old` is usable self-age humor without a numeric age. Marsy's arrival is probably the guest Milo said was coming, but that does not make Milo her recruiter or inviter. `PANCAKE ASS` probably points to Woohyuk by December 2020, but the nickname origin remains unresolved. No thin duplicate pages were forced.

### Wall

Forward review now reaches current `ce096efe...`. Besides Mint Choco Schism, the package strengthens Daya/RealGameJack's probable prior anime-taste familiarity, Alaina's context-defense collapse, Ansun's nickname-as-reaction beat, and SaraBunny's recurring `moo` vocal joke. Nhou's probable light-mode flashbang is already public. Uninspected images remain attribution-fenced.

### Core recovery

Older safe-baseline review advanced through the **2026-08-25 14:46 package**. The strongest relationship scene is already richer on MAIN Lilly: Sycee's theatrical `Mine!` / `I Love Her more then all of y'all` turns, five minutes later, into worry that Lilly will be mad; Gilli explicitly reads Sycee as `just looking out for her`; Anthos joins the worry. The strong human read is care underneath the bit, not literal possession, romance, exclusivity, or a permanent protector title. Ritha's Tower of God material is also already public. Nhou's conflicting historical `18` / `33M` strings stay unresolved.

## Surface split

- **WIKI** owns **Mint Choco Schism** because the value is a bounded incident with a clean reversal: Ren loves the flavor, Gilli hates it, Gilli apparently bought the socks anyway.
- **MAIN** owns NemeMoka's creator-life arc because the value is character accumulation across months rather than a one-scene episode.
- Snow permissions, Ritha Tower of God, Sycee/Lilly worry, Nhou flashbang, and other corroboration were deduplicated against richer owners rather than mirrored mechanically.

## Verification / deployment

- WIKI reader-content commit `f4fd082edbc373d4655be7c2fa4d5f88ecd606da` passed both existing workflows: **Build Underlords Wiki** and **Deploy Underlords Wiki Preview**, including the Pages build/deploy/report path.
- MAIN reader-content descendant `083b1635ea9e96b88b3c2ea477e8275024361052` passed the complete existing **UL Hourly Build + Deploy** workflow: source canon/architecture verification, Astro build, built-output verification, exact Cloudflare deployment, and production verification all succeeded.
- Final state/report descendants are verified after this state commit so concurrent work is not overwritten.

## Unresolved / protected

- NemeMoka shop/platform, compensation, ownership, exact item inventory, and `the dude`'s formal role;
- DiStratus/Torr object-level media provenance;
- Aizzy numeric age;
- Marsy recruiter/inviter identity;
- Woohyuk `PANCAKE ASS` origin;
- Nhou conflicting historical age strings;
- any uninspected image's MADE BY / CAPTURED BY / FEATURING claims;
- any literalization of Sycee/Lilly's one-scene possessive language into romance, ownership, exclusivity, or a formal protector role.
