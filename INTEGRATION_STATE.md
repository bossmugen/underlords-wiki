# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 14:00 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**. No archive-miner refs live only in the wiki.

At this reviewed cutoff:

- finite pending: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**

Important frontiers:

- All Characters — seen/consumed `c531e08e7ed3585e702bb2bb3285cacb0fc1fb11`
- Louvre / AI Art / Athenaeum / Other Games — seen/consumed `c4c5199d39f91d51b093133edb78d417513f0de9`
- Mugen person-first — seen/consumed `87366ffcb0ebb2d99d6e34135de416a40f0d2d2d`
- Wall — seen/forward-reviewed `49449d0a6cafa79a2a483dc9295308591035f24c`; formal consumed remains null because older cumulative recovery is still open
- Core Rooms — seen/forward-reviewed `644d6073b8ac2372206dd4e9880ca48d45e83b93`; formal consumed null; older safe-baseline recovery is complete through the **2026-08-25 08:46 package**, with 07:46 next
- Club-Only 2021–2026 — seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020 — seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`

No miner branch was merged or cherry-picked wholesale.

## WIKI keepers

### All Jokes Aside, Keep Your Guard Up

November 13, 2020. Sword asks the mature room what to do about someone she has known barely a week getting sexual too fast. Rummy starts in the room's normal bawdy register, then the moment the actual risk becomes clear she changes gears: **`yea like all jokes aside keep your guard up then`**, followed by **`not saying to expect the worst but no harm in being cautious`**.

Sword decides she probably should not meet the person. Once that decision lands, Rummy immediately releases the tension with **`KFC presents their latest burger`**.

The order is the character reveal. Rummy's absurdity is not an inability to notice when a friend is asking a real safety question. She can stop the bit, give practical caution without melodrama, then put the room back down gently after the decision is made. This is one care/safety scene, not a formal protector role. Public copy deliberately leaves the explicit sexual details downstairs.

Owner: `src/data/integrator-episodes-20260829-1334.ts`.

### The Requested Number Became Available

November 26, 2020. Lobby asks Spicy Hotpot for normal intake fields. Gilli asks **`Are you above 18?`**; Josh answers **`yes, I'm 5'7 actually.`** Mugen tries **`Legal or no?`**; Josh supplies **`I am a US citizen.`** Mugen introduces the **`mcdonalds playpen`**, Ansun contributes **`stinky cheese kids`**, and Gilli restores the actual administrative point: the server needs to know whether he is over 18. Josh immediately produces **`I'm over 18`**.

The age gate never disappears into the joke. Gilli laughs at the semantic evasions and is still the person who states the real safety boundary plainly before the bit ends. Josh's own **`I'm Joshx`** plus Gilli's earlier **`HI JOSH!`** safely bridges this scene to Spicy Hotpot. The over-18 statement remains historical; the height/citizenship answers stay inside the joke instead of becoming unnecessary current biodata.

Owner: `src/data/integrator-episodes-20260829-1334.ts`.

## Reviewed deltas

### All Characters — consumed

Reviewed checkpoint-first from `6f200afd458557aa7fb42c407e9403831ff232a3` through `c531e08e7ed3585e702bb2bb3285cacb0fc1fb11`, using only the changed `archive-intake/all-characters-hr-comprehensive-20260828/` handoffs.

Rummy's safety-advice gearshift was the clear public keeper and became the WIKI episode above. Feli's 2025 self-display remains too provenance-thin; Kaede's Hallows material mostly deepens already-known event texture and a later same-name ambiguity is not enough to merge identities; Nemo's mature-room lines and weak alias lane do not justify a hard identity bridge. Those are successful reviewed no-public-change lanes, not evidence left unread.

### Core Rooms — older recovery through 08:46

The older safe-baseline recovery advanced one complete package, from 09:46 through the **2026-08-25 08:46 package**; **07:46 is next**. Forward review remains current through `644d6073b8ac2372206dd4e9880ca48d45e83b93`.

Joshx/Spicy Hotpot's Lobby entrance produced the second WIKI keeper above. The same package also adds useful supporting material without demanding duplicate pages:

- Ren boasts that she made Snow say `UwU` twice and now holds `the power of god`; Gilli says Ren has Snow `wrapped around` her finger. The screenshots are POSTED BY Ren but remain visually unrecovered, so exact Snow wording/capture provenance stays open and the scene is pair-specific texture, not romance or hierarchy.
- Rookie Cookie's **`grandpa doesn’t know the modern apps and is stuck on myspace`** expands Old Man Snow from fake age arithmetic into technological-obsolescence roast grammar; Snow's defense is essentially that he does not look at the same smut.
- Gilli later threatens the hydration audience that Spicy Hotpot **`WILL GROUND YOU!!!`**. That broadens Grounded's fake-enforcement carriers but does not appoint Josh to anything.
- `boiled mayo` is shown spreading as room gossip when Josh asks Gilli what he has heard about it roughly ten minutes after Zoshaa's line; origin, literalness and `orb` remain unresolved.

Core formal consumed remains null until cumulative recovery closes.

## Surface split

- **WIKI** owns Rummy's November 2020 safety pivot and Joshx's Lobby age-gate fiasco because both are compact, incident-shaped scenes with excellent character timing.
- **MAIN** receives no new reader-facing lore page this pass. Rummy's MAIN biography is already exceptionally rich and Joshx does not yet have enough longitudinal public material to justify manufacturing a one-scene bio merely to mirror WIKI. MAIN still receives the branch-consumption ledger and durable dual-pass report.
- The Ren/Snow `UwU`, Old Man Snow/MySpace, Grounded-Josh and boiled-mayo-spread material remains supporting/corroborative for existing owners rather than spawning duplicate objects.

## Unresolved / protected

- Feli's 2025 Wall self-display image authorship/subjects;
- Kaede/Nhoelle same-name ambiguity: no identity merge without a hard bridge;
- Nemo's weak alias lane;
- Ren's two Snow-`UwU` screenshots: exact pixels, underlying Snow wording, capture authorship;
- Josh's first Wall offense and the trigger for his later 28-@Gilli ping bomb;
- boiled mayo origin, literalness and `orb` referent;
- the 2020 van `he` antecedent and any relationship to later corpse-van jokes;
- Anthos `Father / Son / HEYYYY MACARENA` missing preceding question;
- all unsupported MADE BY / CAPTURED BY / FEATURING promotions;
- hard canon locks, privacy boundaries, resolved identity corrections and direct contradictions continue to override lower-threshold inference.

## Verification / deployment

- WIKI reader-content commit `11bf53aa570408c8620b468bd3ab650e2cb45e46` passed standalone **Build Underlords Wiki** run `33275446716` and Pages run `33275446703`, which completed successfully.
- This state commit is verified again at its own exact `main` head before the pass is closed.
- MAIN's final state/report head is likewise verified through the repository's native source-verification → Astro build → built-output verification → Cloudflare deployment workflow before the pass is closed.
