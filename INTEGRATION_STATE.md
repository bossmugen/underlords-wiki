# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 13:42 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — Xephy got here before the raid did

### Branch census / queue

- Main-site mandatory census enumerated **24 miner branches** before deep review.
- Newly discovered branches: **0**.
- Two discrete miner branches had advanced since their last consumed heads:
  - Daycare: `caf15b30a80a0ca641af339becb81330912abbb7 -> eb12127ec024ec5db3fb7e9787a529e729b4ab7f`
  - Whiskey: `a36a259d86b933231ae100e686774857bc4c9f01 -> cf4f884f34ec5a086f8e26c811fe7fa49a60cfe6`
- Club-Only 2021–2026 and Club-Only 2020 were already consumed through current HEAD and were not reread.
- Anti-starvation recovery also continued the cumulative **Living Ensemble** backlog at unchanged HEAD `66c3227c687965a4dae9b372fdcbe2dc128611ba`, moving recovery through Run08.
- No miner branch was merged or wholesale cherry-picked into either publishing branch.
- After successful review, Daycare and Whiskey are consumed through their current heads; remaining cumulative recovery branches are **Living Ensemble, Core Rooms, Wall**.

## Daycare delta — reviewed, no duplicate public object

The new Daycare handoff was read checkpoint-first. Its strongest advance centered on Eos, but current MAIN had already absorbed the high-value Eos chronology/character material through concurrent integration. The remaining newly surfaced names were intentionally thin and did not justify another public card/profile layer.

**Disposition:** successful no-public-change review. Daycare advances through `eb12127ec024ec5db3fb7e9787a529e729b4ab7f` rather than being reread forever.

## Whiskey delta — Acoryuie comes back and already knows the house

Stable Discord account `372340096613220356` appears at UL's doorway twice in 2021:

- February: `Hello, its Cinders here!` → Ren sends the Discord tour.
- March: the same account greets Whiskey with `Good afternoon lovelies!`.
- June: the same account supplies `Juᥒιρer`, and Mugen answers `welcome back bb, role assigned, you know your way uwu`.

The durable reading is narrower than a rename story and better than one: the **same numeric account** supplies two doorway names, and the June scene explicitly proves Discord return/re-onboarding plus prior server familiarity. It does not prove a formal IGN rename, alt switch, in-game UL leave/rejoin, club change, return cause, or historical officer/staff appointment.

MAIN now owns the full character scene in `src/content/people/acoryuie.md` at content commit `ae4e4b3432e3e96dfeb0f356243974c77a13bb12`.

WIKI intentionally does **not** add another Cast card for this one bounded doorway/return profile yet. The richer MAIN page can hold the scene without turning every newly stabilized archive identity into Wiki shelf sprawl.

### Ricochet / Rich identity evidence strengthened

The same Whiskey delta recovers a complete May 21, 2020 Lobby exchange where Snow addresses `rich`, stable Ricochet answers `yep`, and Snow closes `KK` with no intervening message. `Rich` is therefore safe as a peer-used alias for stable Ricochet at contextual-high / raw-complete-sequence evidence.

Current MAIN already publicly owns `Ricochet` and `dragonrichard` under Rich's much richer Amaurot / Fight Club / couch chronology. This delta was recorded as corroboration rather than published again. Ambiguous bare `Rich` elsewhere still requires local attribution.

## Living Ensemble recovery — Run08

Current Living checkpoint was read first, then only Run08 handoffs were inspected.

### Accepted on MAIN — Xephy had already knocked

The inspected August 14 DM receipt corrects the reunion choreography:

- **08:35** — Mugen accepts Xephy's friend request.
- **09:10** — Xephy writes `Mugsss it's Xephy from Underlords back in Dragon Raja days`.
- **11:31** — Mugen answers with recognition and the six-years reaction.
- Only afterward, around **11:36**, QOTD erupts with `DRAG ALL YALL BACK IN HERE I GOT XEPHY` and `XEPHY JUST DMED ME AFTER 6 YEARS`.

That ordering means the QOTD retrieval operation did **not demonstrably cause** Xephy's return. Xephy had already initiated contact; the room immediately absorbed that spontaneous return into the larger reunion campaign.

MAIN `src/content/people/xephy.md` now owns the full causal correction and character reading at content commit `7e3593c4eef0384c0de59fe375629967f3d4b703`.

WIKI deliberately leaves its existing compact Xephy dossier intact. The dossier already routes Xephy / WhitePhoenyx / `wagyuczili` and the 2020/2026 homecoming history; duplicating MAIN's minute-by-minute reunion choreography there would make the surfaces less complementary, not more complete.

### Run08 reviewed / bounded

- Ren's `SLIDE TO THEIR DMS` line is paired with a Nobu DM screenshot where Mugen sends a prone/sliding-man reaction visual. Anthos receives a visually matching frame before `The clowns are calling for you` / `Will you heed their call` + invite.
- Safe wording remains **visually matching / likely same source family**, not binary-identical media.
- Mugen is SENT/POSTED BY for the visible reaction media; this does not establish MADE BY, CAPTURED BY, or the featured person's identity.
- The retrieval operation remains mixed-mode: spontaneous Xephy, delegated Ren→Nobu, direct Mugen→Anthos. Do not flatten it into `Mugen DMed everybody`.
- Xephy's 2026 screenshot still does not expose a numeric Discord ID; same-person identity is safe, same historical numeric account object remains unproven.
- Hishiro / ScarletMoon ordering, the 2026 Qiqi/QQ identity bridge, exact sliding-media identity, and Pebble referents remain unresolved.

## Public verification / routing

MAIN content head `ae4e4b3432e3e96dfeb0f356243974c77a13bb12` passed the full public pipeline in workflow `33209029025`: source canon/architecture verification, Astro build, built-output verification, Cloudflare Pages deployment, and exact-production verification all succeeded.

This pass intentionally produces **no new Wiki public-content page/card/episode**. That is a routing decision, not an omission:
- Xephy's compact dossier already exists; the new causal choreography belongs on MAIN.
- Acoryuie is currently better as one rich MAIN archive-person page than another thin Wiki Cast entry.
- Ricochet/Rich is corroboration of an already-public identity/profile rather than a new Wiki object.

## Recovery state after pass

- **Daycare**: consumed through `eb12127ec024ec5db3fb7e9787a529e729b4ab7f` after successful review.
- **Whiskey**: consumed through `cf4f884f34ec5a086f8e26c811fe7fa49a60cfe6` after successful review and verified MAIN publication.
- **Living Ensemble**: reviewed Run02–Run08, Run17, Runs22–26. Runs09–16 and other cumulative gaps remain unswept; `last_consumed_sha` stays **null**.
- **Core Rooms**: cumulative recovery remains in progress at `8d9e6f40f7b0872aca3c20c6c1bd8fc45ebcec19`; `last_consumed_sha` stays **null**.
- **Wall**: cumulative recovery remains in progress at `36e85aa2025b030faf43fecd20a315b158debd4c`; `last_consumed_sha` stays **null**.
- Pending/backlog/overdue discrete branches after this pass: **none**.

## Current cross-surface continuity locks

- Main and Wiki are complementary surfaces, not independent canon systems.
- User-confirmed canon and direct stable-ID bridges outrank miner-local warnings and name resemblance.
- Discord onboarding is not silently converted into exact in-game admission chronology.
- Export-time role arrays are not appointment chronology.
- Generic `role assigned` is not a historical appointment receipt.
- Joke roles are not formal governance; joke prestige is not formal ownership or scoring.
- Joke ships and fake-family language are not literal romance/family canon.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Uninspected images remain uninspected; captions and reactions do not license invented contents.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
