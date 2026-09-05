# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 Run 435 late-Daycare close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose states remain recoverable in git history.

## Run 435 final

Opening census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**, 0 newly discovered. Five unread tails were present at opening: Birthdays / PR / VC, QOTD / Officers, Louvre, Wall, and Backroom. Mugen person-first and Daycare advanced during the close and were reviewed before final handoff. Both Club-Only recovery priorities remained current at their saturated/do-not-churn heads; no raw archive was re-mined.

Reviewed checkpoint-first and intake-only through:

- Birthdays / PR / VC — `723331556b777cd7798e69df18f7d39f68280fd9`
- QOTD / Officers — `ad1de2de7150179e77fe8bdd7deee44c45ca362a`
- Louvre / AI Art / Athenaeum / Other Games — `f1289fd1b2cdf9c3195c6f813958332f15053d78`
- Wall — `2a8fd0e5bca3ad7db3dcfc42c16df9990a5c100f`
- Backroom — `3d59f36df323e9a070a0edc5e58ed374f0c905f9`
- Late-closing Mugen person-first tail — `e89ff4e6808c2c05902c36de2eb0d5376fb3ecd9`; negative novelty gate, no public change.
- Late-closing Daycare tail — `735a276bb88271eb2705a833007f17c584894b05`; Tofu evidence-sport reinforcement meaning-deduped against existing public characterization, no reader change.

### Aeshleen — ninety-three seconds to become house lore

Aeshleen now has a finished person-first WIKI biography instead of surviving primarily as a role/logline. Her April 24, 2021 doorway begins with her already naming Mugen and HamitteY as friends. Thirty-two seconds later Mugen is greeting `aesh van gogb`, assigning roles, and handing over the server map. About a minute after that Mugen has already welcomed her to the Wall of Shame.

The useful character beat is Aeshleen's response: `im leaving bye`, then `THATS BULLYING`, then continuing straight into the Van Gogh riff while Ghoulie calls it `bulli with love`. Same-day witnesses call the speed a record; in May 2022 Ren says Aeshleen `still holds the fastest shame`, and Aeshleen answers `stop bringing up my past 💔`. The nickname is handled carefully: Mugen is already using `aesh van gogb` before the ear joke, so the later neat explanation is a callback, not a clean origin story.

Public WIKI file:
- `src/data/character-biographies-run435.ts`

### Woohyuk — precision roast, theatrical cover-up

Woohyuk's WIKI page now gets the person-shaped contradiction the Wall tail was actually giving us. He can roast Gilli with absurd specificity — `high school spirit week`, `sergeants on timeout` — and Gilli directly replies that the roast killed her. When Ren later turns evidence toward him, Woohyuk immediately changes departments and offers to `top up the witnesses`; Ren refuses because `Money can’t buy my silence`.

The same social flexibility appears at lower volume with Mugen: `hey Megan!` → `Who dis` → `your simps-` → `admirer` → `affinity`. Petty Crimes keeps the smaller absurdities: Mass Effect as a project to sleep with everybody, watermelon as sweet water in melon disguise, and witness-tampering as a public embarrassment strategy.

Public WIKI file:
- `src/data/character-biographies-run435.ts`

### Kahoot Season — recurring programming becomes its own incident

The Backroom tail is now routed where it belongs: a structured WIKI episode rather than a footnote in somebody's biography. June 2021 establishes a club-knowledge Kahoot with one-attempt rules, identity checks, anti-alt rules and prize intent; the announced results unexpectedly contain four names. July is explicitly the `2nd KAHOOT`. August turns a spelling-themed Kahoot into code-management slapstick: Ren posts a corrected code, apologizes to Staff, then has to announce the next day that the corrected code was still wrong and earlier participants need another one.

The WIKI episode keeps the unresolved pieces unresolved: why June had four named winners is not stated; the spelling-Kahoot redo outcome is not recovered; the spelling Kahoot is not silently merged into the separate `speeling bee` program. Poster images remain POSTED BY Ren only until inspected.

Public WIKI file:
- `src/data/integrator-episodes-run435.ts`

### Reviewed but not promoted as new reader copy

- **Birthdays / PR / VC:** Rich / DragonRich posting a Corpse Husband Tenor link in December 2020 creates a real earlier linguistic neighborhood for later corpse-title jokes, but it does not recover the actual `Richard's Corpse On A Cooch` naming ceremony. The exact title-name provenance remains open, so no neat origin story was manufactured. Eos's Dec-2020 EnyoCal/UL → Jan-2021 Eos/Deviations stable-account endpoints are banked without inventing the transition mechanics. Bailey remains contextual only.
- **Louvre:** Jonith / D.I. gains a strong selective-confidence read — specific comics knowledge, easy uptake when corrected, and no shame about saying `I have no idea what yall are talking bout` when the topic leaves his lane. Good person material, but held rather than opening another large reader rewrite in the same pass. Pooled Deleted User remains pooled.
- **Wall / RotiniLM:** lurker → exhibit-dropper → reluctant defendant → compact chaos correspondent is strong, as is Ansun's block-advice / Rotini reassurance care beat. Rotini still lacks a safe canonical public owner, so no mystery dossier was created.
- **Mugen person-first:** the late tail is explicitly a no-promotion pass. Eleven mature reverse-angle surfaces were checked; every near-miss repeats already-owned Mugen mechanisms. Recurrence stays backstage when it adds no cost, contradiction, relationship change, failure state or evolution.
- **Daycare / Tofu:** the late tail is corroborative rather than a new character mechanism. Tofu protesting `PUTTING ME ON BLAST!` and, thirty-seven seconds later, announcing `I'll fucking do it again too.` is an excellent extra specimen of the already-public prosecutor/defendant contradiction. Her Bishop/Cookie reciprocity and evidence-sport appetite were already owned, so no second paragraph was appended just because the receipt is funny. Bishop remains relationship-level; media stays uninspected.

### Verification and publication

Verified reader head: `48ccdad257f3baee163b04ba545242b410f2fbd8`.

- Build workflow `33955739775` — **success**.
- Pages workflow `33955739770` — **success**, including the actual `Deploy to GitHub Pages` job.

This state commit is reader-neutral and uses `[skip ci]`; the verified reader head beneath it is the public content target described above.

### MAIN surface

MAIN reader-facing changes in this pass: **0**. The strongest fresh material had clean WIKI owners, while MAIN still carries older publication debt behind its verification/deploy gate. No thin mirrored biography was created merely to make both repositories move.

The controlling MAIN ledger consumes all seven reviewed tails above while preserving the older MAIN `pending_publication` families separately from unread review work.
