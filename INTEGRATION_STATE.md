# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 — Run 447 Han pronoun repair + family/Wall deepening_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Earlier verbose states remain recoverable in git history.

## Census / queue

Run 447 completed a full branch census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered branches, 1 unread pending-review tail, 0 backlog, and 0 overdue**. Ten families still carry older MAIN publication debt; Daycare is one of them but its status is currently `pending_review` because a newer unread suffix takes precedence.

Reviewed this pass:

- `archive-miner-qotd-officers-20260824`: `23107ad0e90144d07dc66da0b7e12682d64a27fb` → `95a349adf53c2d430b05c03f21e9ddfd38228f70`.
- `archive-miner-wall-hourly-20260824`: `e086e03f58c921fd5c114cefb1e58c282b8640d8` → `8e7999dc478c29af161cde2e5e5313c7bdb802e3`.

Both were reviewed checkpoint-first and intake-only; no raw archive was re-mined. Both Club-Only recovery priorities remain current at their saturated / do-not-churn heads (`e45fb11c…` for 2021–2026, `ed66714f…` for 2020).

The closing census caught one later mover: Daycare advanced from consumed `4f06cd5a…` to `b743337b…`. That suffix is recorded as seen and unread, not silently consumed.

## Reader correction — Han stops inheriting an unsupported pronoun canon

The fresh QOTD / Officers handoff explicitly withdraws earlier miner use of **he/him for Han/Nai**. No direct self-identification or user-confirmed pronoun lock supports that wording. Sye/Life's 2021-10-12 **`Like mother Like daughter`** is meaningful scene context and strong contextual gender evidence, but Run 447 does not turn one third-party phrase into a new she/her canon lock.

`src/data/character-biographies-han.ts` therefore now uses Han/name-neutral construction throughout. This is not visible source-method narration; the public page simply stops asserting something the project has not actually resolved.

The same revision folds the useful new material into Han's existing person story rather than appending another receipt report:

- Han says a broken toe went unnoticed for roughly a week. Mom asks **`Are you dumb?`**. Han's defense is precedent: Mom once walked on a broken leg/bone for roughly a month before realizing it. Mom's reported **`....`** becomes the punchline.
- Sye answers the family resemblance with **`Like mother Like daughter`**; Han reacts positively.
- Another unresolved-ID member later answers with a similar delayed-fracture confession, and Han responds with pats/hugs. The room moves from roast to recognition without needing a tonal reset.
- On 2021-10-19, after Gilli posts an uninspected Wall screenshot, Han answers with FBI emotes, **`im not saying anything`**, predicts the channel will soon need to become **`Han's wall of shame fame`**, and exits with a walk-away emote. It reads as self-aware public embarrassment turned into performance and naming rights.

The page now also has a proper **Petty Crimes** section for the small recurring humiliations: surviving work as Fame, the weirdly seated cat, refusing to crop unnecessary Discord context, walking on the broken toe, and the Wall naming-rights defense.

Known material was meaning-deduped rather than duplicated. The October 11 Spooky Night editor credit and October 17 Voice Challenge launch were already part of Han's media/facilitator story. Exact Media Director appointment chronology remains unresolved and was not inferred from exporter roles or adjacent dates.

## Wall anti-starvation review — Josh banked, Candy already owned

The fresh Wall suffix gives stable account `186245940699463680`, locally addressed as **Josh / Spicy Hotpot**, a genuinely usable Wall profile: summon-sensitive deadpan defendant, callback hunter, and intermittent escalation gremlin. Tiny defendant noises (`pls pp`, `??????`, `What did I do`) eventually flip into old-receipt retrieval (`I knew it`) and twenty-eight consecutive Gilli pings. Gilli is a recurring mock-prosecution/callback foil; Ren has a bounded mock-defiance lane.

No new global Josh Cast owner was minted. The bridge is strong inside the Wall corpus but is not yet a project-wide user-confirmed identity lock, and there is no existing canonical public person owner that can safely absorb it without risking identity overreach. The person material is banked, not rejected.

Candy's fresh material is duplicate/deepening only. Current WIKI already owns the same low-prose reaction-language mechanism, the Vanness self-shame reply, the Moo relay, and the `— Luna` identity hazard. No duplicate paragraph was added merely because the miner emitted a newer addendum.

## Verification / deployment

Final Run 447 reader head: **`09e14ebd47a2cc8898aa97887931c80f45c92602`**.

- Build workflow `33965699073` — **success** on the exact reader head.
- Pages workflow `33965699098` — **success** on the exact reader head.
- Pages preview build — **success**.
- artifact upload — **success**.
- actual `Deploy to GitHub Pages` job — **success**.
- final Pages report — **success**.

This state-only close uses `[skip ci]`; it does not replace or re-run the already verified reader deployment.

## MAIN split / publication debt

MAIN made **0 reader-facing changes** in Run 447. Its current `src/content/people/han.md` still carries unsupported `pronouns: "he/him"` frontmatter and he/him prose, so the Han correction is explicitly recorded as MAIN publication debt rather than forgotten.

MAIN's production workflow remains intentionally `workflow_dispatch`-only while the GitHub Actions runner/account problem is under maintenance, and the available connector exposes no dispatch action. The run therefore did not bypass the gate or claim that MAIN source verification, Astro, built-output verification, or Cloudflare ran. No new MAIN deployment is claimed.

This asymmetric publication is intentional: WIKI could safely verify and deploy the correction now; MAIN must wait until its required verification/deploy gate is runnable.

## Consumption boundary / held rabbits

The controlling MAIN ledger is now current through:

- QOTD / Officers — `95a349adf53c2d430b05c03f21e9ddfd38228f70`
- Wall — `8e7999dc478c29af161cde2e5e5313c7bdb802e3`
- Daycare — still consumed only through `4f06cd5a15e8346392516ef1e63a6e279a586448`; fresh head `b743337b681034c3e0a74a08b0511d1553112372` is unread.

Held correctly:

- Han pronouns remain unresolved beyond safe name-neutral wording; no she/her lock was manufactured.
- exact Han Media Director appointment date remains unresolved.
- stable account `456226577798135808` remains pooled/unresolved outside the specifically supported QOTD Nemo boundary.
- Oyasumi's `HE DIED ON THE STAIRS AGAIN?!?!` hook remains unresolved because the earlier referent/origin is not readable and the screenshot is uninspected.
- Josh/Spicy Hotpot remains a Wall-local bridge pending stronger global ownership.
- Gilli's October 19 screenshot is POSTED BY Gilli only; maker/captor/subject remain unresolved.
- no joke family/romance/governance language was literalized, and no unseen media was upgraded from POSTED BY to MADE BY / CAPTURED BY / FEATURING.
