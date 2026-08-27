# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-27 13:36 PDT**.

## Current pass — ShiyaX buys the playground before you arrive

### Branch / baseline

- Main-site mandatory census discovered/confirmed **23 miner branches** before deep review and persisted every current `last_seen_sha` at census commit `dbf096e1245673d60cd248009f05ef913aa87cb6`.
- Six cumulative branches remain explicitly `review_overdue`: Living Ensemble, Backroom Deals, Core Rooms, Main HQ hourly, QOTD/Officers, and Wall.
- Photo Submissions received the anti-starvation turn this pass and moved from overdue to active cumulative recovery.
- Miner handoffs were read directly from isolated miner branches. No miner branch was merged or cherry-picked into either public repository.

### Reviewed evidence

- `archive-miner/club-only-2021-2026-hourly` @ `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`: mandatory cumulative recovery continued checkpoint-first. Fish Revolution, AUUUUU, Dean dreams, Tummy, Han fame/shame and other already-public families were not recycled. Nitro creator/exact first noun, Shiya fake-family genealogy, Snow/Big Bang, Alabama ancestry and related origin joins remain held. Older recovery is still incomplete, so `last_consumed_sha` remains null.
- `archive-miner-clubonly-2020-hourly` @ `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`: mandatory cumulative recovery continued. Danny's daily-pack dungeon scheme, Carlene's Aether visitor rail, B-chan's incomplete intake, and Feli↔Mugs Tumbleweed remain useful but not publication-ready. Older recovery remains incomplete.
- `archive-miner-photo-submissions-2021` @ `2494310084b7bee80a1e7607a0fe201605528bf3`: anti-starvation review reached the fresh 00:10 checkpoint/handoff frontier. HamitteY/Wichita now has a Jan. 17 self-ID → unnamed role/tour → Flowers chronology; LEXI's Jan. 11 `Okaa-san, LoliParadise, S8, 19` self-ID supplies an important status boundary immediately before her repeated Photoshoot run; Laila and Miihi gain clean but thin entry rails. No public page changed from this branch because the fresh evidence is chronology/status-boundary material and the older Photo queue is still incomplete.
- `archive-miner/whiskey-longitudinal-hourly`: the new handoff delta `9495698116812c648bd9e34746593b1df2f76240 → e2524f946d0be8e966d907f690656c2b971fbb80` was reviewed checkpoint-first. It gives ShiyaX a proper Whiskey progression: Oct. 6, 2020 Lobby `👀` doorway; Feb. 26 reaction-GIF dancefloor with `Did the song put yall to sleep ? 🙀`; Mar. 23–30 Doodle Week; and Apr. 6–10 GTA preparation/co-play with Baby Lyssa/Ghoulie.

### Cross-surface publication

- **Main site — ShiyaX Character:** the full biography now owns the lived chronology. It keeps his existing AUUUUU/lobster/Slice/Wall material and folds in the new Whiskey scenes instead of treating every receipt as a separate artifact. Public-content commit: `785cae7d2c7df6a86d5f213ef8e2eff920efd375`.
- **Wiki — Archive / Extended Cast:** added a compact ShiyaX dossier in `src/data/cast.ts` with the doorway, howl/lobster continuity, Whiskey dancefloor, Doodle Week, GTA preparation, relationship hooks, and quotes. Public-content commit: `764ae2fa945d4982dd7c7abc8adb9b3d3351f910`.

The GTA scene is the keeper because ShiyaX never says anything sentimental. He brags about being rich, tells Baby Lyssa `i bought the sub`, then explains the purchase with **`Buying shit for when you are able to play`**. Four days later the same stable account is posting **`Them long drives with @Baby Lyssa`**. The care is buried inside logistics and profanity; he prepares the shared playground before the other person can arrive and never stops to call it care. That is much stronger character writing than stapling `caring friend` onto a dossier.

The dancefloor has the same small tell. `Did the song put yall to sleep ? 🙀` is not a résumé claim. The worried-cat face is a room pulse-check: he is watching whether everybody is still with the sequence, and the room answers by continuing. Current evidence does **not** prove that he controlled playback, so the wiki does not promote him into DJ by vibes.

### Deduplication / unresolved boundaries

- Existing AUUUUU, lobster, Slice field-desk, tree-branch, room-routing, and `I AM THE CHAOS` material was treated as ShiyaX's existing spine, not rediscovered as new.
- The Oct. 6 Lobby scene is a surviving Discord doorway, not a proven original in-game admission date. Mugen's `role assigned` message does not name the role.
- ShiyaX's Feb. 26 participation does not prove DJ/playback control.
- Doodle Week and GTA attachments remain visually uninspected; the wiki uses ShiyaX's own captions rather than inventing pixel content.
- Baby Lyssa = Ghoulie remains Mugs-confirmed project canon. The Whiskey sequence supports preparation and later shared-play language, not the reason Lyssa initially could not play or a closeness ranking.
- `@RΣN DOUGHTAA` remains unresolved family-language context and is not published as a literal family edge.
- Photo participation is not silently converted into in-game UL membership when a contemporary self-ID says another club or the status answer is missing.
- Earliest surviving remains distinct from origin; export-time roles remain distinct from appointment chronology; joke roles/relationships remain distinct from formal jobs or literal family; POSTED BY / MADE BY / SAID BY / CAPTURED BY / FEATURING remain separate claims.

### Consumption

No `last_consumed_sha` advanced among this pass's four reviewed branches because all four are still being handled as unfinished cumulative safe-baseline recoveries. Their **current reviewed frontiers are nevertheless durably recorded** in the main-site `INTEGRATOR_BRANCH_STATE.json`, including the exact Whiskey `949569…→e2524f…` delta and the Photo 00:10 checkpoint frontier. Advancing a consumed SHA to current HEAD while older buried handoffs remain unreviewed would skip history rather than consume it.

### Verification / publication

- Main public-content commit `785cae7d2c7df6a86d5f213ef8e2eff920efd375` passed `UL Hourly Build + Deploy` run `33114651220`: source canon/architecture verification, Astro build, built-output verification, and exact validated Cloudflare production deployment all succeeded.
- Wiki public-content commit `764ae2fa945d4982dd7c7abc8adb9b3d3351f910` passed `Build Underlords Wiki` run `33114795479` and Pages build/deploy run `33114795573`.

## Prior state

The previous detailed Snow/weather-liability pass is preserved in Git history at wiki commit `e645a979d45030aa1e75e3ff7614cccbe038b073`. Older integration decisions remain recoverable from repository history and the main-site per-pass reports.
