# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 04:22 PDT_

This is the current durable dual-surface reconciliation snapshot. Earlier run detail remains in Git history and MAIN's dated `archive-intake/INTEGRATION_PASS_*` reports.

## Current boundary

The biography rule is binding: **the person is the spine; events are supporting scenes; the archive stays backstage.** MAIN gets rich person/legend writing. WIKI gets character-rich searchable biographies plus Episodes, Relationships, Running Gags, Quotes, Locations and Gallery/reference structure. `Petty Crimes` is the public catch-all section name; never `Trivia`.

Hard canon locks, resolved identities, privacy/safety, explicit contradictions, appointment chronology and attribution fences remain hard. Strong ordinary-life, relationship, humor, habit, emotional-subtext, care-pattern, reputation, social-role and cumulative character reads may publish when the surrounding material makes them more likely than not.

- **Full closing census:** 49 tracked miner identities = 28 active remote refs + 21 historical/missing refs; 0 newly discovered; **2 finite pending-review suffixes; 0 backlog; 0 review-overdue**.
- Both **Club-Only** recovery targets remain consumed/current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **Wall** is reviewed and consumed through `304d9374ff707a603394ce2251d2a5883e6727a8`; `recovery_in_progress` means future suffixes may still arrive.
- **Mugen person-first** is consumed through `8240054d3d27235ce9da97269fed033c699f9600` after a successful no-public-change review. The checkpoint's instruction was correct: do not bloat the woman.
- **Core Rooms** is reviewed through `6da0509a792f6c9d3c7fb36a81207a64c71d2299`, while formal consumed remains `c9b33dca5df5fe46b8594a999ac888253a1ff27f` because accepted MAIN Nelph work still cannot clear MAIN's mandatory verifier.
- **Daycare** is reviewed through `b92f0f77bf20d84a0d6e984e81a03c30faef7cd3`, while formal consumed remains `fccd131e47c0a03018ca3cecfcecbe8ebdd5b703` for the same MAIN verification block. The branch moved again during closing census to `7a428d475739437a2efc4d2d86699f2c1a5c556c`; that late suffix is pending the next fair rotation.
- **All Characters HR** moved during closing census from consumed `1026759dfd18238b5b2d6d6d4ebcbf064a0c7911` to `1804f4ea229bd6608d98fed7d916ee0dcd100e7c`. Its checkpoint still names Run 46 while a Run 47 handoff is also present, so it remains pending rather than being half-consumed.
- **Whiskey** remains reviewed/current through `e381584248426262d36f254ca275151bdaf69dd9`; older accepted Sye/Life MAIN material remains publication-blocked.
- No miner branch was merged or wholesale cherry-picked; no raw archive was re-mined.

## Person-first public work

### Nelph

Nelph now reads like a person rather than an Officer résumé. Her recurring move is turning information into a usable next step: event alerts become directions, scam warnings become the actual 2FA menu path, and scheduling becomes a concrete recommendation softened with `That's my opinion though`. In sensitive work she can openly enjoy the tea while still separating what is known from what is missing and slowing the room down before consequences land.

The ordinary-life side is allowed to matter too: chickens, goats, `nelphies chicken pics`, Sye sentencing her to `FarmVille`, and `satellite WiFi` becoming Mugen's `satellite wife` before Nelph's `I MEANT WIFI😭`. The Officer title sits on top of the woman instead of replacing her.

### Mia

Mia's biography now centers her communication and participation style: tiny Wall replies that make the room carry half the sentence, immediate willingness to open the blank canvas and turn an idea into something everybody can touch, and the clean newcomer-to-guide progression where somebody once handed her the house map and she later handed it to the next person.

The `BREAK THE BOT` material survives as contradiction rather than incident bookkeeping: careful and explicit where people, minors and conflict are involved; cheerfully feral where the casualty is harmless machinery. Momo's reciprocal twin language stays lived relationship texture rather than a Related People footnote.

### Erys / Emi

Erys now has an actual character page instead of a screenshot prosecution log. Her Wall persona escalates through `NO`, `its photoshopped`, `im being hacked`, then counterfiling and cheerful attempts to suppress Mugen's remaining receipts. Off the witness stand, the register flips: she notices when everybody disappears, says she misses them, and returns affection openly. The theatrical defendant and the group-seeking softie are the same person.

## WIKI reader architecture

The second-pass biographies live in `src/data/character-biographies-run58.ts` and override the earlier Nelph/Mia/Erys drafts through `src/data/character-biographies-all.ts`.

More importantly, the **character route itself was corrected project-wide**. `src/pages/characters/[id].astro` no longer publicly renders the old Archive Appendix, source/receipt ledger, or anti-fanon / `What not to turn into fanon` block after the biography. Those materials remain available backstage in data and integration state; they no longer barge into the character story wearing a lab coat.

The visible catch-all formerly titled `Recurring bits & behavior` is now **Petty Crimes**.

The reader changes are all ancestors of durable head `d2c9566fd6c09b1b740e1de63048718845d98a95`. Exact-head verification passed there:

- **Build Underlords Wiki `33386304896` — SUCCESS**
- **Deploy Underlords Wiki Preview `33386304879` — SUCCESS**

This state update should run through the same existing workflows; it changes durable bookkeeping, not reader lore.

## MAIN publication status

MAIN already carries distinct person-first edits in `src/content/people/nelph.md` and `src/content/people/mia.md`; they are not copies of the WIKI text.

MAIN's mandatory verifier still fails before verification executes. The affected exact-reader-head workflow produced no executable Build + verify step body and skipped deploy, so source verification, Astro build, built-output verification and Cloudflare deploy did **not** run and fail on source. No unsafe deployment was forced around that gate.

Core and the reviewed Daycare slice therefore remain publication-blocked at the formal consumption boundary even though their accepted WIKI work is green. Whiskey's older accepted Sye/Life MAIN biography material remains blocked by the same infrastructure problem.

## Hard holds

- **Rich / DragonRich is not collapsed into unresolved Ricochet / `dragonrichard`.** A direct bridge is required.
- **`sycessences` / `ƐℲı˥` = Sye/Life, not Effie.**
- Snow was not formally second-in-command / #2.
- MAIN still owes the direct Wall screenshot-invitation attribution correction from ShiyaX to **Sou/Ansun** once its verifier can actually run.
- Exact Officer appointment chronology is never inferred from exporter-time role arrays.
- Joke family / romance language remains joke language unless separately confirmed.
- Stable account `717133949457137775` remains fenced from a global Rummy identity merge absent a direct bridge.
- SAID BY / POSTED BY / HOSTED BY / VIA-SOURCE / CAPTURED BY / MADE BY / FEATURING remain distinct.

## Surface split

Erys remains intentionally **WIKI-first**: the current material works well as a full Cast biography plus a dated Wall Episode, while a thin MAIN page would add less. Nelph and Mia belong on both surfaces with different writing jobs. Mugen's reviewed suffix belongs on neither because nothing new improved her already rich page.
