# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-30 19:36 PDT_

## Current dual-surface integration state — 19:15 pass close

The lower-evidence project rule remains binding. Hard canon locks, resolved identities, privacy/safety, explicit contradictions, appointment chronology, and attribution fences stay hard; persuasive ordinary human reads do not need courtroom-proof wording.

### Census / consumption boundary

- **49 tracked miner identities = 28 active remote refs + 21 historical/missing; 0 newly discovered; 0 backlog; 0 overdue.** The opening census had All Characters registered pending at `69c27bca913eeaa41e5814b8b5a0a76d1583d756`; the same census caught Core `dab2f546… → 31e0f17f…` and Daycare `8d8d867f… → 8c96125b…` before deep review. A closing census later caught Whiskey moving `c08359fa… → 800311c1…`; MAIN registered the new `last_seen_sha` before the Whiskey checkpoint was opened.
- **All Characters is reviewed and consumed through `69c27bca913eeaa41e5814b8b5a0a76d1583d756`.** Woohyuk/Tofu reciprocal sparring plus Woohyuk's short-handoff/social-routing texture was already public and verified on WIKI.
- **Daycare is reviewed and consumed through `8c96125bb2f568050579cfca4d2542659ad5fe69`.** CookieStream is public as a probable same-human Cookie/Kuki/JuicyCookie alt while the two stable Discord IDs and their histories remain technically separate. Athena's bounded manhwa/room-learning scene now also has a small archive-cast and Quote Book owner rather than being discarded for lack of a giant dossier.
- **Core Rooms + Events was checkpoint-first reviewed through `31e0f17f894ea365ef1eb19b86b38c2f446a57ca`.** The suffix is retrieval-boundary/checkpoint material only: direct searches returned false-zero alongside failed positive controls, semantic access hit 401, and materialization hit 403. No public historical absence claim was accepted. Once MAIN's durable branch state records this successful no-public-change review, Core may advance consumed to this head.
- **Whiskey was checkpoint-first reviewed through `800311c117753269699970d169c542e208ea633e`.** Jordayy materially improved and is public on WIKI. Formal Whiskey consumed remains `6cd5f9daeb20d77fad20e3cd7465ec938411993d` because older accepted Sye/Life material remains MAIN-publication-blocked. Hard correction: **`sycessences` / `ƐℲı˥` = Sye/Life, not Effie**. The miner's renewed claim that Ricochet / `dragonrichard` = Rich is rejected because the project still lacks a direct identity bridge; similar names, raw adjacency, and a miner assertion do not override that hard safety rail.
- Both Club-Only recovery branches remain fully consumed/current. Mugen person-first remains consumed through `7b4ff4dbf31e7c47d376fc556f2dabcb5366e549`.
- Wall remains the sole cumulative recovery at `9f794a9f296633c6e7d1419c9d4a29b8e7e89800`; checkpoint still says **NOT EXHAUSTED** through rails 496–507, so formal consumed SHA remains null and raw archives were not reopened.
- No miner branch was merged or wholesale cherry-picked into either publishing branch.

### Public additions this pass

**Athena finally got somewhere to put the terrible manhwa.** Her 2022 file now has a bounded archive-cast entry and Quote Book owner: she checks into Lobby as Underlords, later admits she stayed up late reading something overhyped, reviews it as `soooo baaaad`, and asks for a good manhwa to `wash my brain` while Mugen redirects the review toward Whiskey / Simp Here. The character read is deliberately small and human: she is a manhwa reader, susceptible to hype, willing to sacrifice sleep, and still learning where the house wants the rant. No giant fandom identity was invented from one bad night.

**Jordayy now has an actual Whiskey life instead of being a name in the upholstery.** She says she likes reading the room's `conversions`—almost certainly conversations—and a week earlier says she wanted into VC but work got in the way. Work interrupts her again months later. The repeated pattern supports room-as-company: sometimes she is talking, sometimes she is reading, sometimes her shift steals the social thing she wanted.

Her Ghostt lane is now public relationship texture. Ghostt posts a tired emote; Jordayy follows with `You wanna cuddle my dog for I can finish putting away laundry`, and a few days later says `I still want breakfast Ghost`. The prior breakfast request is probably the callback target because of `still`, but raw reply metadata is absent. WIKI therefore keeps the joke at the level the evidence earns: Ghostt gets rhetorically hired as **dog-cuddler and breakfast department** while Jordayy is visibly doing household life. No literal dog-sitting, breakfast delivery, romance, or closeness rank is asserted.

The same Jordayy file carries package-redelivery rage, dog/laundry, a dramatic haircut, recurring work interruptions, and likely JJK familiarity. When ShiyaX says `Decided to watch jjk`, Jordayy joins the character-GIF relay and later says `He's so handsome`; Gojo and Inumaki are both in the immediate surfaced exchange, so the public page keeps the fandom/taste read without naming which fictional man caused the problem.

**A latent Ricochet→Rich deletion trap was removed from `src/data/canonicalize-cast.ts`.** Current public cast data already preserves Ricochet separately, but the canonicalizer still contained code that would silently delete Ricochet as `actually Rich` if that path were reused. That contradicted the durable identity fence, so the regression was removed rather than waiting for some future refactor to resurrect bad canon.

### Reconciled / held

- The Whiskey miner calls `459696170759880745` `Rich / Ricochet` and then uses Snow's `hey rich anyone else want to join from Amaurot?` to promote a Rich↔Amaurot bridge. The raw Amaurot visitor stream itself is useful—Sitama self-identifies from Amaurot the next day, and Xerenity, MercyLA, Akariel, and Kaytt show repeated adjacent-club traffic—but the exact canonical Rich/Ricochet ownership remains contaminated by the unresolved identity bridge. This pass therefore did **not** publish the person-specific Rich claim.
- The identity-independent read is safe: **Amaurot was a recurring adjacent visitor/contact stream into UL Discord, not evidence of another formal alliance.** Xerenity's limited shared-room access fits the already-hard visitor/VIP model. The granting Deleted User remains pooled and personally unattributed.
- Jordayy's `Sama` addressee remains unresolved. The exact JJK man in `He's so handsome` remains unresolved. The dog/breakfast exchange is probable relationship texture, not a literal service record.
- The 2024-08-28 through 2024-09-23 quiet interval remains **Lobby-only archival quietness**, not a whole-server silence claim. Torr's conflicting intake details remain unresolved.
- Core's current suffix is a source-access failure record, not evidence that the searched people/events were absent.

### Verification / deployment

WIKI reader head `e7b31893bba8684835ce98992f4bbeb82f8e7dbf` contains the Athena archive-cast/Quote Book additions, the Ricochet canonicalizer safety fix, Jordayy's archive-cast file and room-as-company Quote Book card, and the Jordayy↔Ghostt relationship card.
- **Build Underlords Wiki** `33351059641` — **success**, including the Astro build.
- **Deploy Underlords Wiki Preview** `33351059640` — build **success**, Pages deploy **success**, report **success**.

The immediately preceding Athena-only reader head `0ed914c7138ae4a7e304444a9c8d07cac47d8513` also independently passed Build `33350674603` and Pages deployment `33350674651` before the Jordayy suffix landed.

This state commit follows the fully verified reader head; its own exact-head build/Pages result must be checked as the final WIKI close condition.

### Surface split

The fresh reader changes remain WIKI-owned because they are compact Cast/Quotes/Bonds material. MAIN was re-read and receives no mirrored encyclopedia prose merely for symmetry. MAIN's outstanding reader obligation remains the older accepted Sye/Life Whiskey biography material once the mandatory verifier can actually execute. Core's retrieval-boundary suffix needs durable consumption state, not a public story.

---

## Previous dual-surface integration state — 18:59 pass close

The lower-evidence project rule remains binding. Hard canon locks, resolved identities, privacy/safety, explicit contradictions, appointment chronology, and attribution fences stay hard; persuasive ordinary human reads do not need courtroom-proof wording.

### Census / consumption boundary

- **49 tracked miner identities = 28 active remote refs + 21 historical/missing; 0 newly discovered; 0 backlog; 0 overdue.** The opening census caught All Characters at `69c27bca913eeaa41e5814b8b5a0a76d1583d756` and registered it before deep review. A later full census, persisted independently on MAIN while this pass was in flight, also caught Core advancing to `31e0f17f894ea365ef1eb19b86b38c2f446a57ca` and Daycare advancing to `8c96125bb2f568050579cfca4d2542659ad5fe69` before either suffix could become invisible.
- **All Characters is checkpoint-first reviewed and consumable through `69c27bca913eeaa41e5814b8b5a0a76d1583d756`.** Prior consumed boundary: `111851bebb7def0b74912dcc533193a453992232`.
- **Daycare is checkpoint-first reviewed and consumable through `8c96125bb2f568050579cfca4d2542659ad5fe69`.** Prior consumed boundary: `8d8d867f7125dbdfaa87747be3d1c3aaba4e07fd`.
- **Core Rooms + Events has a registered late suffix pending review:** consumed `dab2f5465ae7bc61df33aa73c132c6ec60d54d1e` → seen `31e0f17f894ea365ef1eb19b86b38c2f446a57ca`. It is not falsely stamped consumed in this state.
- Both Club-Only recovery branches remain fully consumed/current. Mugen person-first remains consumed through `7b4ff4dbf31e7c47d376fc556f2dabcb5366e549`.
- Whiskey remains checkpoint-first reviewed through `c08359fa336f829a58f104c9211c3ff26d700881`; formal consumed remains `6cd5f9daeb20d77fad20e3cd7465ec938411993d` because earlier accepted Sye/Life material remains MAIN-publication-blocked. Hard correction: **`sycessences` / `ƐℲı˥` = Sye/Life, not Effie**. Ricochet / `dragonrichard` remains separate from Rich unless a direct bridge appears.
- Wall remains the sole cumulative recovery. Its branch head is still `9f794a9f296633c6e7d1419c9d4a29b8e7e89800`; the current checkpoint was re-read this pass and remains explicitly **NOT EXHAUSTED**, with recovery rails through 496–507. No new intake-local suffix exists at that head, so raw archives were not reopened and formal consumed SHA remains null.
- No miner branch was merged or wholesale cherry-picked into either publishing branch.

### Public additions this pass

**Woohyuk and Tofu had a repeatable little sparring lane, not one orphaned joke.** On June 25, 2021 Woohyuk tells Tofu `you're the only whale around here`; Tofu TRUE-REPLIES `Show the rebate then boo`; Woohyuk answers `Sheeet I gotchu`. Three days later Tofu posts an attachment, Woohyuk teases that `chat background doesnt exist for Tofu`, and Tofu TRUE-REPLIES with a rage-cry emoji. The attachment itself remains uninspected and `whale` stays a gaming/social joke rather than proof of wealth or spending. Two separate days with directed replies are enough to describe an established reciprocal banter rhythm without manufacturing a friendship rank.

The same Woohyuk dossier now carries the broader **short handoff** read. When his access breaks, he complains and Ren routes it to Mugen; when a warning reaches him, it moves through Gilli toward Staff; when Tofu asks for a receipt, he immediately says he has it. Across unrelated scenes Woohyuk tends to notice the thing, push it toward whoever can act on it, and let the room carry the rest. That is social routing, not command, office, or appointment. The October access-fix and February warning-path receipts were duplicate/corroboration rather than separate new incidents.

**CookieStream is now public as a likely Cookie alt / probable same-human controller, while the two Discord accounts remain technically separate.** On September 15, 2021 the distinct stable account `887703610052448257` is welcomed under the rendered name `CookieStream(kuki/juicycookie)`. It replies only `uwu`; eight seconds later Mugen says `gotchu cooks`. The same stable ID later has a short Daycare run and appears in Wall reaction metadata as `Mr.Cookie`. That combination is stronger than a similar-name guess: the archived nickname itself carries Kuki/JuicyCookie and Mugen recognizes the account without onboarding it as a stranger. WIKI therefore calls it a probable same controller while preserving Cookie/Kuki/JuicyCookie stable ID `249351359290277890` and CookieStream stable ID `887703610052448257` as separate account histories. No messages, roles, dates, or provenance are silently merged.

**Athena's small ordinary-life scene was reviewed but not force-promoted into a Cast dossier.** Her 2022 intake and October Wall rant show a manhwa reader willing to lose beauty sleep to hype, loudly regret it, ask for a better manhwa to `wash my brain`, then accept Mugen's gentle redirect toward discussion rooms. That is good taste/habit and room-learning texture. Athena does not currently have a clean canonical Cast owner on the public wiki, so this pass records the scene as reviewed rather than inventing a new public identity page just to house one rant.

The Daycare suffix also certified **27 complete Lobby-quiet calendar days from August 28 through September 23, 2024** between Qythel's August 27 role-assignment reply and Moon's September 24 MEE6 return. This is Lobby-only archival quietness, not whole-server silence, and is not promoted into a server-death claim.

### Held / unresolved

- Core's late suffix `dab2f546… → 31e0f17f…` is registered pending review and remains the only finite review backlog at this close unless another branch moves after the final census.
- CookieStream probable same-controller status does **not** erase the separate Discord IDs or allow ledger merging. Hard-confirmation material such as explicit self-ID or a staff `this is Cookie's alt` statement would still upgrade the bridge.
- Athena's scene does not support a giant fandom profile or personality diagnosis.
- Torr's conflicting intake details remain unresolved because the source contradiction could not be safely re-opened during the miner pass.
- Ricochet / `dragonrichard` ↔ Rich remains unresolved. Whiskey's accepted older Sye/Life ordinary-life biography material remains MAIN-owned/publication-blocked.
- No similar-name-only identity bridge, exporter-array appointment dating, joke-family literalization, or unseen-image description was accepted.

### Verification / deployment

WIKI reader head `f2def44fa69fc90c157df8667573decb8da05e07` contains both the Woohyuk/Tofu expansion and CookieStream probable-alt section in `src/data/character-biographies-run41.ts`.
- **Build Underlords Wiki** `33350344038` — **success**, including the Astro build.
- **Deploy Underlords Wiki Preview** `33350344070` — **success**, including Pages deployment and report completion.

The earlier Woohyuk-only reader head `8884bad736bf7b3dfd7ee40009e6ababf7696de1` also independently passed Build `33350038890` and Pages deployment `33350038891` before the Daycare addition landed.

This state commit follows the verified reader head. Its exact-head native build/Pages result should be checked as the final close condition.

### Surface split

WIKI owns both fresh reader additions because they are Cast/dossier and relationship texture. MAIN was re-read during reconciliation and does not need duplicate prose for symmetry. MAIN's outstanding richer publication obligation remains the accepted Sye/Life ordinary-life biography material in Whiskey once its mandatory verifier can actually execute. The new Core suffix remains a future review obligation, not something guessed from branch names.

---

## Previous dual-surface integration state — 18:43 pass close

The lower-evidence project rule remains binding. Hard canon locks, resolved identities, privacy/safety, explicit contradictions, appointment chronology, and attribution fences stay hard; persuasive ordinary human reads do not need courtroom-proof wording.

### Census / consumption boundary

- **49 tracked miner identities = 28 active remote refs + 21 historical/missing; 0 newly discovered; 0 finite pending; 0 backlog; 0 overdue.** Both Club-Only recovery branches remain fully consumed/current.
- All Characters is reviewed and public/consumable through `111851bebb7def0b74912dcc533193a453992232`.
- **Core Rooms + Events is checkpoint-first reviewed and consumed through `dab2f5465ae7bc61df33aa73c132c6ec60d54d1e`.**
- Daycare is consumed through `8d8d867f7125dbdfaa87747be3d1c3aaba4e07fd`.
- Whiskey is reviewed through `c08359fa336f829a58f104c9211c3ff26d700881`; formal consumed remains `6cd5f9daeb20d77fad20e3cd7465ec938411993d`. Hard correction: **`sycessences` / `ƐℲı˥` = Sye/Life, not Effie**. Ricochet / `dragonrichard` remains separate from Rich unless a direct bridge appears.
- Mugen person-first is consumed through `7b4ff4dbf31e7c47d376fc556f2dabcb5366e549`.
- Wall is forward-reviewed through `9f794a9f296633c6e7d1419c9d4a29b8e7e89800`; formal consumed remains null while cumulative recovery remains open.

### Public additions from that pass

Staff Vacation was established as a participant-described procedure; Lobby intake was shown handing newcomers directly into live Mafia/movie events; and Drink Water Reminder's recurring third-party Gandalf `YOU SHALL NOT PASS` gatehouse bit was integrated on WIKI. Shayduh, Oni, kenn/SageHero, and euphorysm were reviewed as bounded profile/game-history seeds without being inflated past their receipts.

### Held from that pass

Staff Vacation's exact eligibility/removal/return mechanics remain open; DWR's Gandalf media is third-party and not MADE BY DWR; Oni/Onikage remains unresolved; Ricochet ↔ Rich remains unresolved; and Sye/Life remains the hard Whiskey identity correction rather than Effie.

### Verification / deployment from that pass

WIKI reader head `8e839a25699b562a7579c568f8cfde8d28e897ea` passed **Build Underlords Wiki `33348688941`** and **Deploy Underlords Wiki Preview `33348688940`**. The later state close was separately tracked in repository history.