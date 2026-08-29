# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 11:30 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**. No archive-miner refs live only in the wiki.

At the closing boundary:

- finite pending: **1** — Daycare, seen `5550f88d6659a38c4c967c4ae0203657ee98a179`, consumed `d7d99f9f3e22832e99c57602bc94c1a8061f42c1`
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**

Current important frontiers:

- All Characters — seen/consumed `0a7f1e2d811a8f85a4080465376563d5c978197d`
- Mugen person-first — seen/consumed `a63c39502a1478c1f87f1ebfb70061e1bf759433`
- Core Rooms — seen/forward-reviewed `f38fcb05669d4ca2bda3dcbe65704149bdf4cbee`; formal consumed null while older cumulative recovery remains open through the 15:46 package
- Wall — seen `ce096efe589e4b09041888809f02e1072c779572`; forward-reviewed through `1627e904778c679a9c742453fa195a3c79639cd0`; formal consumed null while cumulative recovery remains open
- Daycare — late finite advance above; pending review
- Club-Only 2021–2026 — seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020 — seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`

No miner branch was merged or cherry-picked wholesale.

## This pass — Core Rooms

Reviewed the Core forward handoffs checkpoint-first from the prior `639e63b1...` frontier through `f38fcb05...`.

### WIKI: **LoliGraveyard, I Mean LoliParadise**

On September 24, 2020 seven distinct stable accounts directly identify themselves with **LoliParadise** in the Lobby over the same evening: Zingzing, Nyann, Aithne, Lynneia, Iridescent22, Hwalei, and BaiQian. Five arrive inside roughly the first half hour.

Nyann's edited-final doorway line supplies the title: `Nyann, LoliGraveyard I mean LoliParadise`.

The lower-threshold read is now public because the context is strong: seven same-night direct club self-IDs make a socially linked guest wave more likely than seven unrelated coincidences. Mugen's nearby `LOL It wasnt hakai it was zingzing in my dms` probably belongs to the social/logistical prehistory of the influx, but the surviving material still does not identify one inviter, recruiter, formal delegation, or exact DM plan.

KrY is the negative control. KrY is processed inside the same queue but directly says `XkryX, uhm Virtuoso`, so adjacency does not draft somebody into LoliParadise.

Identity fence: **Lynneia/lunnely** and the different July guest **Lynnia/liangxiang** are separate stable accounts despite the spelling trap.

The Episode lives in `src/data/integrator-episodes-core-20260829.ts`.

### VIP mechanism deepened, not duplicated into another Episode

The same Core package confirms that VIP Lounge was actual early social/access infrastructure:

- Gilli sends arriving guests to `vip lounge chat room`;
- Gilli explains `Fight Club Channel to VC or to Vip Lounge to type and chat`;
- Mugen independently describes VIP Lounge as a typed backchannel while listening in Fight Club;
- Gilli directly grants `VIP access` / a `VIP role` on separate June and July arrivals;
- Snow directly grants VIP to Lorilee after her Caelum / S8 self-ID.

The proportionate historical read is now that VIP was probably a routine guest/visitor access class in 2020, while exact universal criteria remain unresolved. That strengthens the existing public/canon owner rather than spawning a duplicate near-identical Episode.

Core's older safe-baseline recovery remains through the **2026-08-25 15:46 package**; 14:46 is next. Formal consumed remains null.

## This pass — Wall

Wall forward handoffs were reviewed checkpoint-first from `5d1e684d...` through `1627e904...`.

The strongest MAIN-owned keeper is Nhou's August 31, 2020 appearance/brightness scene: Ren says `Appearance`, then `DARK`; Nhou immediately answers `MY EYES`; Anthos says `OKAY I CHANGED IT`; Nhou follows with `-vampire noises-` and later `i can read it now`. The chronology is direct; the light→dark interface reading is strong context rather than a medical claim or a proven first-ever origin.

Other usable Wall advances were reconciled without forcing more public objects into this pass:

- Anayss's `Daddy ansun shall be your new nn` is now a true reply to Ansun's own `A mistake was made` + `IMG_3942.png`; nickname-as-reaction is probable, exact visual reason remains unresolved.
- Daya true-replies to RealGameJack's *86 / Eighty-Six* Tenor with `luv this anime`; Jack answers `I knew you did`, making prior taste familiarity likely but appropriately small.
- Alaina tries `.... so is this just out of context....?`; Marian says `no. that was the context`; Alaina answers `Okay` then a BRB emote. Comic resignation is a fair social read. `af.PNG` itself remains uninspected.

Wall then advanced again to seen `ce096efe...`; that newest suffix is visible but unreviewed.

## Surface split

- MAIN owns Nhou's dark-interface / flashbang scene because the value is character texture inside an existing dossier.
- WIKI owns **LoliGraveyard, I Mean LoliParadise** because the value is bounded incident chronology, guest movement, and the Lobby's live administrative confusion.
- VIP's wider mechanism strengthens an existing evidence family instead of getting a redundant page.
- `Daddy ansun`, Daya/Jack, and Alaina remain usable contextual material; they were not rejected for lacking declarative exposition, they simply did not need three extra public objects in one pass.

## Verification / deployment

WIKI reader-content commit `eef19e61201c7e6770a0d63b00b38c6dc5b7cf96` passed **Build Underlords Wiki** and **Deploy Underlords Wiki Preview** successfully, including the Pages build/deploy path.

MAIN reader-content commit `639e08a59199331aa03acd4d589d512a3d48c0af` passed source canon/architecture verification, Astro build, built-output verification, and exact validated Cloudflare deployment successfully.

## Unresolved / protected

- exact universal VIP criteria or lifecycle;
- exact organizer/inviter of the LoliParadise wave;
- `IMG_3942.png` and `af.PNG` visual contents / MADE BY / CAPTURED BY / FEATURING;
- global origin of `Daddy Ansun`;
- any medical interpretation of Nhou's brightness joke;
- any merge of Lynneia/lunnely with Lynnia/liangxiang.
