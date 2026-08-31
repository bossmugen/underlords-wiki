# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 04:14 PDT_

This is the current durable dual-surface reconciliation snapshot. Earlier run detail remains in Git history and MAIN's dated `archive-intake/INTEGRATION_PASS_*` reports.

## Current dual-surface boundary

The project-wide biography rule remains binding: **the person is the spine; events are supporting scenes; the archive stays backstage.** MAIN gets rich person/legend writing; WIKI gets structured Cast dossiers, Episodes, Relationships, Running Gags, Quotes, Locations and Gallery/reference structure. `Petty Crimes` is the catch-all bio section name; never `Trivia`.

Hard canon locks, resolved identities, privacy/safety, explicit contradictions, appointment chronology, and attribution fences stay hard. Strong ordinary-life, relationship, humor, habit, emotional-subtext, care-pattern, reputation, social-role, and cumulative character reads may publish when the surrounding material makes them more likely than not.

- **Full census:** 49 tracked miner identities = 28 active remote refs + 21 historical/missing refs; 0 newly discovered; **0 finite pending review; 0 backlog; 0 review-overdue** at close.
- Both **Club-Only** recovery targets remain consumed/current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **Wall** was reviewed through `304d9374ff707a603394ce2251d2a5883e6727a8` and is now consumed through that head; `recovery_in_progress` means only that future suffixes may still arrive.
- **Mugen person-first** was reviewed through `8240054d3d27235ce9da97269fed033c699f9600`; the suffix was a successful negative control and is consumed with no public change.
- **Core Rooms** was reviewed through `6da0509a792f6c9d3c7fb36a81207a64c71d2299`, but formal consumed remains `c9b33dca5df5fe46b8594a999ac888253a1ff27f` because accepted MAIN Nelph work could not clear MAIN's mandatory verifier.
- **Daycare** was reviewed through `b92f0f77bf20d84a0d6e984e81a03c30faef7cd3`, but formal consumed remains `fccd131e47c0a03018ca3cecfcecbe8ebdd5b703` for the same MAIN verification block after accepted Mia work.
- **Whiskey** remains reviewed/current through `e381584248426262d36f254ca275151bdaf69dd9`; its older accepted Sye/Life MAIN material remains publication-blocked, not unread.
- No miner branch was merged or wholesale cherry-picked into either publishing branch; no raw archive was re-mined.

## 04:14 PDT reviewed material

### Nelph — lived Officer work, not a résumé

Core Rooms deepened Nelph in the places a title alone cannot. Her October 5, 2021 Officer induction says the promotion recognizes services already being done, says `Real life first, always`, and explicitly describes Officer positions as positions of service. The next month shows what that means in practice: she keeps known information separate from what is still missing in a sensitive case, gathers and labels updates, asks follow-ups, and wants people to read before moving. The private case stays private; the character point is that Nelph can enjoy the tea without pretending tea is a verdict.

The same low-ego competence appears in scheduling: compare overlapping event windows, suggest the workable day, add `That's my opinion though`, let somebody else take the recommendation. Five days before asking for a break, Nelph is volunteering as a recruitment contact and saying `I'm active in both ^^`; the break therefore interrupts an active stretch rather than confirming a slow administrative fade.

The ordinary-life side got better too. Mugen says she will miss `nelphies chicken pics`; people ask for chicken pictures even while Nelph is away; Nelph defends the chickens from being eaten, discloses goats, gets sentenced by Sye to `FarmVille`, and `satellite WiFi` becomes `satellite wife` before `I MEANT WIFI😭`. The role works because the person is still visible inside it.

### Mia — learns the house, then becomes one of the people who can explain it

Daycare supplies a clean newcomer-to-guide progression. In October 2022 Mia is being routed through the house by Gabu / shared onboarding infrastructure. By May 2023 she is routing Saiyura through the same core destinations herself, adding Platelet/minor caution, sensitive-topic and no-drama boundaries, welcome language, and reassurance that roles will be assigned.

The stronger read is the contradiction with `BREAK THE BOT`: careful where actual people, minors, conflict, and vulnerable members are involved; cheerfully feral when the casualty is low-stakes machinery. That does not create a Staff appointment or assign authorship of the shared onboarding script. It makes Mia more like a person instead of a list of titles.

### Erys / Emi — defendant, counterfiler, then suddenly missing everybody

Wall supplied the cleanest WIKI-only story of the run. Ren files an image and Erys escalates through `NO` -> `i swear that isnt me` -> `its photoshopped` -> `im being hacked`. Those are theatrical defenses, not factual media-forensics conclusions. Erys then appears to counterfile Ren with an image of her own; pixels remain uninspected. When Mugen says more receipts exist but the chat is defeating capture, Erys's defense evolves into `good`, `no one needs to see the rest mugss`, and `:))` — cheerful evidence suppression after starting from total denial.

Eight days later the register flips. Sou tells a tired-sounding Emi to sleep; Erys insists `i dont needff sleepp`, keeps asking where everybody went, says `i missssg yalll`, warmly receives Rummy's best-friends hug, and gets redirected toward Whiskey by Eos. No intoxication claim is needed. The better contradiction is theatrical Wall defendant versus openly group-seeking softie once the room gets quiet.

## WIKI reader work

WIKI uses this material in structured form rather than copying MAIN prose:

- `src/data/character-biographies-run57.ts` deepens **Mia** and **Nelph** and adds a lived **Erys** dossier.
- `src/data/integrator-episodes-20260831-0330.ts` adds **Erys Appeals the Evidence**, a structured May 6–14, 2022 Wall episode.

The first build after the Erys change exposed an unrelated syntax problem in the current Ansun biography: an unescaped inner quote in `Tae said "fuck" July 12 2021`. The corrective commit preserved the new work and made current reader head `ef744171a0f1ac0aefa9aee612d722d2dfeb5dc4`.

Exact-head verification on that reader head passed:

- **Build Underlords Wiki `33385844839` — SUCCESS**
- **Deploy Underlords Wiki Preview `33385844850` — SUCCESS**

This state commit should itself run through the same existing Build/Pages workflows; it changes durable bookkeeping, not reader lore.

## MAIN publication status

MAIN accepted person-first edits in:

- `src/content/people/nelph.md` — reader commit `93039085be0cc8b7c00cd1bf28f182e300519f55`.
- `src/content/people/mia.md` — reader commit `d6c0f5957b5c7345c87099325b74dbd5c73c794b`.

Exact reader-head `UL Hourly Build + Deploy` run `33385650644` failed before executing verification. Attempt 1 produced a failed `Build + verify` job with no step body and skipped deploy; one failed-job retry reproduced the same pre-execution shape. Source verification, Astro build, built-output verification and Cloudflare deploy therefore did not execute and fail on source. No MAIN deployment was forced around the gate.

Because those accepted MAIN edits have not cleared mandatory verification, Core and Daycare remain `publication_blocked` and their formal consumed SHAs do not advance yet.

## Existing hard holds

- **Rich / DragonRich is not collapsed into unresolved Ricochet / `dragonrichard`.** A direct bridge is still required.
- **`sycessences` / `ƐℲı˥` = Sye/Life, not Effie.**
- Snow was not formally second-in-command / #2.
- MAIN's Snow biography still owes the direct Wall correction from ShiyaX to **Sou/Ansun** for the screenshot invitation; WIKI already carries the correct attribution.
- Exact Officer appointment chronology is never inferred from exporter-time role arrays.
- Joke family / romance roles remain jokes unless separately confirmed.
- Stable account `717133949457137775` remains fenced from a global Rummy identity merge unless a direct bridge appears.
- SAID BY / POSTED BY / HOSTED BY / VIA-SOURCE / CAPTURED BY / MADE BY / FEATURING remain distinct.

## Surface split

Erys was intentionally **WIKI-only** this pass: the structured Cast dossier plus a dated Wall Episode fits the current material better than creating a thin MAIN biography merely because receipts exist. Nelph and Mia belong on both surfaces but use different writing: MAIN folds the scenes into person/legend biographies; WIKI keeps searchable character and episode structure. Mugen's suffix was intentionally published nowhere because novelty did not clear the already rich biography.
