# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 11:00 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full opening and closing census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**. No archive-miner refs live only in the wiki.

At the closing boundary:

- finite pending: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**

Current frontiers:

- All Characters — seen/consumed `0a7f1e2d811a8f85a4080465376563d5c978197d`
- Mugen person-first — seen/consumed `a63c39502a1478c1f87f1ebfb70061e1bf759433`
- Core Rooms — closing census seen `b204eecf431b46cd43864702a0dd88e8802b61b8`; forward-reviewed through `639e63b14c7602a2fa514afd4d875c3560fb0a90`; formal consumed null while cumulative recovery remains open
- Wall — seen/forward-reviewed `5d1e684dfa1760e278f133af832e204dcde8cce4`; formal consumed null while cumulative recovery remains open
- Daycare — seen/consumed `d7d99f9f3e22832e99c57602bc94c1a8061f42c1`
- Club-Only 2021–2026 — seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020 — seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`

No miner branch was merged or cherry-picked wholesale.

## This pass — All Characters Run-14

Reviewed `archive-miner/all-characters-hr-20260828` delta `a4b5cded... -> 0a7f1e2d...` checkpoint-first and intake-only under the project-wide lower evidence threshold.

### WIKI: **Hours of Hiding in the Bathroom**

On September 30, 2020 Gilli says `Welp.  I finished all my work`. Roughly nine seconds later: `Time to start my hours of hiding in the bathroom`.

The tiny timing gap is the actual scene. Gilli has successfully cleared the task list and apparently decides the appropriate reward is to become bathroom infrastructure until further notice. Nearby `Heading to work lol` that day and `Driving to work` the next anchor the joke in ordinary workday life, which gives Gilli useful anti-glamour outside her better-known caretaker / organizer presence.

Hard fence: `hours` is Gilli's joke wording, not a verified duration. The archive does not identify her employer, occupation, schedule, or prove workplace misconduct.

The Episode lives in `src/data/integrator-episodes-allcharacters-20260829.ts` and is wired into the Episode index/detail/season routes.

### Reconciled without duplicate publication

- Anayss's manga/manhua/light-novel texture already has a richer public owner.
- Ren's `senpai` / `god` / `stronger then 5 tequila` cluster is peer hype and affection, not formal rank or kinship; Ren's existing public owner is already richer.
- Sye's `Brain no work` -> `I need sleep` -> later `Go back to sleep ppl` is useful lower-threshold tiredness/fake-curfew texture. It remains available for a future bio enrichment; it was not rejected merely because no single sentence labels the habit for us.

## Recovery / anti-starvation

Core's older safe-baseline recovery advanced one full package, from 16:46 through the **2026-08-25 15:46 package**. Next older package is 14:46. Formal consumed remains null.

The 15:46 package adds contemporaneous grounding beneath Shk's already-published Sensei progression: he says he will teach Anayss, Anayss calls him `my master`, Mugen says `we stan a master`, and Shk later says `like i quit but i didnt quit teach u all`. That strengthens the existing teacher/mentor read without backdating a formal Sensei appointment or inventing a formal apprenticeship.

The same package shows Shk deliberately wanting to use Jail so `kids will not see me`, alongside independent `Jail locks you out` context. The proportionate read is that a punishment/isolation room could be repurposed in at least this scene as a visibility boundary. It does **not** establish Jail as formally adults-only, identify hidden content, or prove Shk could self-assign Jail.

Mugen's Wall caption `Kitsune's deputy walks in, is greeted by strippers, hands over wallet` is good outsider-facing Stripclub micro-lore. The screenshot remains visually unrecovered, so deputy identity, literal depicted action, literal money transfer, MADE BY, CAPTURED BY and FEATURING remain unresolved.

Closing census caught Core moving again to `b204eecf...`; that suffix is recorded as seen but remains unreviewed. Forward-reviewed stays `639e63b1...`.

Wall remains forward-reviewed through `5d1e684d...`, with its older cumulative baseline still open.

## Surface split

WIKI owns **Hours of Hiding in the Bathroom** because the value is a compact scene with a sharp reversal: task list cleared, employee immediately attempts to become restroom furniture. MAIN does not get a matching thin Gilli paragraph merely for symmetry.

The new Shk 15:46 material is folded into the already-established Sensei evidence family rather than spawning a second near-duplicate Episode. Its strongest value is corroboration/deepening of the existing progression, while the Jail/Kitsune material remains contextual micro-lore pending stronger page fit or visual recovery.

## Verification / deployment

WIKI reader content head `a938bca38769aaec76e0ab6a083160177b31754d` passed **Build Underlords Wiki** and **Deploy Underlords Wiki Preview** successfully, including the Pages build/deploy path.

MAIN made no reader-facing lore-page change this pass; it owns the mandatory census/consumption state and dual integration report. MAIN's final exact state/report head is verified through its existing source-verification → Astro-build → built-output-verification → Cloudflare deployment workflow before this pass is reported green.
