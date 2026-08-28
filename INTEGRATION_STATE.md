# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 09:34 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — Aesh arrives with references; Daycare is a couch, not a roster gate

### Branch census / queue

- Main-site mandatory census enumerated **24 miner branches** before deep review and persisted every current `last_seen_sha` on `master` before any long review began.
- Advanced beyond consumed frontier:
  - Daycare `39267fd6c9526522c42ec628e6ecceb1beeb9f31 -> 024c55e8aab88f73a761ce6f29499621dd9f6e56`
  - Whiskey `ee40c5bd6097e9631f72a4b9859e1cd3a107b14c -> e323af44487113b9c25188141f8be93faa37fbed`
- Anti-starvation recovery continued on Wall at unchanged HEAD `36e85aa2025b030faf43fecd20a315b158debd4c`.
- Club-Only 2021–2026 and Club-Only 2020 were already consumed through unchanged heads and were not reread.
- No miner branch was merged or cherry-picked into either publishing branch.
- After review: **0 pending_review, 0 backlog, 0 review_overdue**.
- Remaining cumulative safe-baseline recovery branches: **Living Ensemble, Core Rooms, Wall**.

## Reviewed branches

### Daycare — `39267fd6… -> 024c55e8…`

Checkpoint first, then only changed `archive-intake/*` handoffs.

The strongest public result is structural rather than another thin biography: **Daycare's social constituency did not map one-to-one onto current in-game club label.**

- Nori explicitly answers `Yesh` when Ren asks `Underlord? UwU`, then appears in Daycare that same day.
- Damon introduces himself as `the leader of Purgatory`, gets normal Discord routing, and appears in Daycare the same day.
- AJ says `I am in a random club lol`, identifies the current club as YungLyeTH, gets welcomed/role-assigned, and appears in Daycare the next day.

The wiki therefore adds **UL Daycare** to Domains with the plain-language read: this room looks less like a roster checkpoint than the couch people kept ending up on. That does **not** establish universal technical access, a formal visitor policy, or which Discord role each person had.

Other Daycare material reviewed but held:

- Mats / Akuma is securely one stable account across a 2020 `Sebno` Underlords/Rebellation self-report and a 2021 `神Nyx道, Abaddon` self-report; Mugen still calls them `sebs`. Exact club-transition chronology stays unresolved.
- Nekoz says `I’m with cyan`; cyan separately confirms Forsaken. The archive does not copy cyan's club answer onto Nekoz or invent the relationship type.
- Trebach is visibly `Gilli's Pizza Dough` by the December 2022 return, but no origin/explanation surfaced. Gilli's unrelated pineapple-pizza line is not nickname genealogy.

Result: Daycare consumed through `024c55e8aab88f73a761ce6f29499621dd9f6e56` after the accepted public changes passed verification.

### Whiskey — `ee40c5bd… -> e323af44…`

Both new checkpoints were read first, then continuity corrections, findings, receipt indexes, rabbits/open questions, people notes, motif notes, and site candidates.

The strongest new biography receipt belongs to **Aeshleen**:

- April 24, 2021: Aeshleen introduces herself in Lobby as `from council, s9, friend of ladymugen and hamittey`.
- Mugen welcomes her, applies unspecified roles, and sends the server map.
- **2.918 seconds later**, Baby Lyssa is already in Whiskey telling Aeshleen `I love your pfp!!`.

Main owns the full character version because it improves Aeshleen's lived chronology: she arrives socially legible before the Discord paperwork has cooled. The exact in-game UL status, recruiter, assigned role list, and contents of later uninspected photos remain unresolved.

Aeshleen's later `im bein noticed` plus Cookie's matching notice GIF is contextual-high social volley, not reacquired technical reply proof. Her `my Spotify calling me out i cannot` screenshot remains uninspected. Support Tech and Abie were reviewed into thin/developing states but not forced public.

### Identity firewall correction — Ricochet is not canonical Rich

The Whiskey handoff strengthens only a contextual lead: stable Ricochet / `dragonrichard` is active minutes before one peer-authored `Rich` line, with other peer `Rich` uses elsewhere. There is still no technical target, explicit self-equation, or stable-ID bridge.

The wiki had stale seeded data listing `Ricochet` as an alias of canonical Rich / DragonRich while also maintaining a separate Ricochet dossier. That was unsafe and is now corrected. **Rich and Ricochet remain separate characters unless stronger evidence closes the bridge.** Similar names do not get married by the archive clerk.

Result: Whiskey consumed through `e323af44487113b9c25188141f8be93faa37fbed` after accepted public changes passed verification.

### Wall recovery — successful no-public-change review

Wall remains at HEAD `36e85aa2025b030faf43fecd20a315b158debd4c` with `last_consumed_sha: null` because its older cumulative safe-baseline recovery is incomplete. The checkpoint was read first, followed by the cumulative site-candidate/findings handoffs. Surfaced candidate rails are already public or owned more strongly elsewhere, so this turn accepted no new Wall publication. The review is durable; the older baseline is not skipped.

## Surface split / verification

### Main site

Public lore changed:

- `src/content/people/aeshleen.md` — added Aeshleen's Council/S9 + LadyMugen/Hamittey doorway self-description, Mugen's role/tour handoff, Baby Lyssa's 2.918-second Whiskey greeting, and the connection into her existing Wall speedrun chronology.

Public-content commit: `16dda1ea1b65bb63f859e450d7127c496a85769f`.

Exact public-content workflow **33191718056** completed successfully, including source canon/architecture verification, Astro build, built-output verification, and Cloudflare deployment.

Aeshleen is intentionally **main-first** this pass: the new evidence deepens her biography more than it creates a distinct wiki navigation object.

### Wiki

Public lore / safety changed:

- `src/pages/locations.astro` — added **UL Daycare** as a Domain with the Nori/Damon/AJ social-boundary evidence and explicit no-permission-policy overclaim.
- `src/data/wiki.ts` — removed stale `Ricochet` from canonical Rich's aliases. `DragonRich` remains with Rich; the separate Ricochet / `dragonrichard` dossier remains separate.

Public-content commits:
- `5b90889ee265bb1dd9307472bc19431516e4e76b` — identity firewall correction.
- `7b7bf7d12f6a3fc7a613c26a6848f451eec50575` — visible Daycare Domain card.

Verification on final public-content HEAD `7b7bf7d12f6a3fc7a613c26a6848f451eec50575`:
- standalone Build Underlords Wiki workflow **33192171428**: success;
- Pages workflow **33192171338**: build, deploy, and report all success.

Daycare is intentionally **wiki-focused** because the finding belongs naturally in Locations/Domains rather than being Xeroxed into several low-volume character cards.

## Consumption advanced

- `archive-miner/daycare-2020-2026-hourly` -> `024c55e8aab88f73a761ce6f29499621dd9f6e56`
- `archive-miner/whiskey-longitudinal-hourly` -> `e323af44487113b9c25188141f8be93faa37fbed`
- Wall remains `last_consumed_sha: null` / `recovery_in_progress`; this turn's no-change audit is recorded but the older floor remains open.
- Living Ensemble remains `last_consumed_sha: null` / `recovery_in_progress`.
- Core Rooms remains `last_consumed_sha: null` / `recovery_in_progress`.

## Reviewed but held / deduped

- Mats / Akuma exact Underlords/Rebellation -> Abaddon transition mechanics.
- AJ's exact assigned Discord role(s) and any later in-game UL membership.
- Damon/Purgatory relationship to UL and invitation route.
- Nekoz/cyan exact relationship and Nekoz's own club statement.
- Trebach `Gilli's Pizza Dough` origin.
- Aeshleen exact assigned roles/status, arrival-photo contents, `im bein noticed` referent, and Spotify screenshot contents.
- Support Tech doorway answer/status and Jan 27 antecedent.
- Abie recruiter/status and uninspected fashion/water media.
- Ricochet = Rich remains unresolved; public data now keeps them separate.
- Whiskey raw z23 reply/reference/edit metadata remains source-blocked.
- Wall, Living Ensemble, and Core Rooms retain older cumulative recovery floors.

## Current cross-surface continuity locks

- Main and wiki are complementary surfaces, not independent canon systems.
- User-confirmed canon and direct stable-ID bridges outrank miner-local warnings and name resemblance.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; fake-family / UL-marriage language is not silently converted into literal legal or sensitive real-world biography.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
