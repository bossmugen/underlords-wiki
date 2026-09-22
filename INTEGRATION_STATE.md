# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-22 — Run 1608 reconciled close_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. MAIN canon locks and resolved identity corrections remain the highest-priority identity/role layer. WIKI owns structured Cast dossiers, Relationships, Episodes, Running Gags, Quotes, Locations, and Gallery/media notes; MAIN owns richer person-first biographies.

This file is intentionally the **current integration frontier**, not a duplicate run ledger. Earlier run-by-run detail remains durable in Git history and MAIN's per-run `archive-intake/INTEGRATION_FINAL_*` reports.

## Run 1608 — current queue

The mandatory opening and closing censuses agree on **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered refs, 0 unread pending-review branches, 3 reviewed MAIN lanes pending verification, 9 older reviewed `pending_publication` families, 0 backlog, and 0 overdue**. Both Club-Only recovery lanes remain current.

Three active miner lanes advanced and were reviewed checkpoint-first from changed `archive-intake/*` handoffs only:

- Birthdays / PR / VC: `163b2d77ad26d77fe41f15b6b3523c0abcb65f85 → e4f739d39733553bf2611509ecc2444791c6660e`.
- Daycare: `89a11ea6107420acab1a20fc3d72a9d5dcb900a6 → 8817bf01eb43a2d0553bae20bf8339b76cc2cd5c`.
- Wall: `5fb20d777b5169de9a74cce277617d7a39bd8db9 → bbc22bedc7f47815c0df14fae1415776c51f580e`.

The closing matching-ref census found all 30 active miner heads unchanged after review.

## WIKI reader frontier

Final verified/deployed reader: **`582f7691a8fca275ce4c4d3427473dcba4b3f1fd`**.

The Run 1608 cast integration does three things without mirroring MAIN prose:

### Gabu — the machine gets tested before it gets trusted

The September 13, 2021 Photoshoot FESTIVAL control-lane packet is folded into Gabu's existing event-systems dossier as an earlier instance of a recurring habit. A literal `test3` fires first; Gabu then loads the actual closure copy into Saber, retimes it to fire inside the control lane, watches the bot post it there, and later rebuilds the same closure for the real September 20 deadline. Paired with the already-published February 2022 anniversary Festival live-fire sequence ending in `OKAY IT WORKS`, the useful character read is repetition: Gabu tests production machinery with real payloads until timing/output are visible enough to trust.

Do not rewrite the September 2021 control-lane rehearsal as a public premature closure, an accidental member-facing mistake, or bot failure. The surviving closure template says `12am` while the public winner schedule says `12pm`; preserve the mismatch rather than silently correcting it. Earliest surviving Saber checklist material remains earliest surviving, not origin.

### Gilli — one human, two account eras, one unnecessary voice toy

Daycare's final identity correction directly bridges Gilli's newer account `585466495757451284` and older account `615878920583249920` (`Mr. Streamer (Gabu's Chair)`). On November 10, 2020, New Account Gilli targets the older account with Eli Jail; the bot resolves the target as `Gilli#8635`, and the successful embed both names jailed Gilli and supplies the older stable ID. Keep both stable IDs in forensic chronology while treating them as one human biography.

The May 2021 voice-tool scene belongs in **Petty Crimes**: Gilli says they bought the full version and were playing around with it; Eos likes the result and Anayss recognizes the altered voice strongly enough to riff on it. The exact software, effect, settings, and audible output remain unknown. The origin/date/meaning of the rendered `Gabu's Chair` nickname remains unresolved.

This Gilli work arrived concurrently in the Run 1608 WIKI owner and was reconciled, not duplicated.

### Nobu — tiny caption, enormous evidence bag

Wall's terminal Nobu sweep deepens the dossier around a repeat filing mechanism rather than another chronology dump. Nobu repeatedly posts screenshot packets with almost no setup: rapid paired filings, multi-image batches, and eventually two images introduced only by `*coughs*`. The best direct explanation of selection logic is Nobu's own: `Ngl, I legit thought that said children. Which is why I posted it.` Repeated Rummy-directed lines such as `RUMMY IT'S BURNT`, `Rummy has rizz??`, and `I'm proud of you, Rummy` fit the same compact/high-context voice.

The Wall miner now marks its quarry exhausted at the current archive boundary.

Attribution rails stay hard: Nobu's attachments are POSTED BY Nobu unless another source resolves maker, capturer, or featured people. A November 2022 `RUMMY` reply that mechanically mentions Marian does **not** create a project-wide `Rummy = Marian` bridge. `Nobu and Gabu sound nice together` plus ship/get-a-room replies remain joke play, not romance, sex, or attraction evidence.

## Verification / deployment

WIKI reader `582f7691a8fca275ce4c4d3427473dcba4b3f1fd` is green:

- Build Underlords Wiki `35765187704`: **success**.
- Deploy Underlords Wiki Preview / Pages `35765187711`: **success through Pages deployment**.

This integration-state commit is reader-neutral and uses `[skip ci]`.

## MAIN surface decision

**MAIN reader-facing changes in Run 1608: 0.** No MAIN reader deployment is claimed.

The new material was intentionally WIKI-owned where it improves structured reference: Gabu's cross-time system-testing recurrence and Nobu's receipt-curator mechanism. Gilli's new account/voice material was already concurrently integrated on WIKI. MAIN's Gabu, Gilli, and Nobu biographies already own the richer person-first arcs, so another receipt-shaped paragraph would be duplication rather than character deepening.

## MAIN verification debt / consumption

Three inherited MAIN reader gates were retried without rereading already-reviewed intake:

- Daycare workflow `35672332827`, attempt **50**: `startup_failure`, with **zero jobs** instantiated.
- Core Rooms / Events workflow `35727743323`, attempt **21**: verification job created but failed before any steps instantiated (`steps=null`).
- Wall / Tony workflow `35749412434`, attempt **11**: verification job again failed before any steps instantiated (`steps=null`).

These remain runner/startup infrastructure failures, not demonstrated source, canon, Astro, or built-output failures.

Current review / consumption frontiers:

- Birthdays / PR / VC is reviewed and consumed through `e4f739d39733553bf2611509ecc2444791c6660e`.
- Wall is reviewed through `bbc22bedc7f47815c0df14fae1415776c51f580e`; contiguous consumed cursor remains `d13ba0116859c2ef50b06e2104fb38602a17c457` behind inherited accepted MAIN Tony verification debt. Do not reread through `bbc22be` unless the miner advances.
- Daycare is reviewed through `8817bf01eb43a2d0553bae20bf8339b76cc2cd5c`; contiguous consumed cursor remains `16d9ac845f9375ee2fc67444595673b309235c38` behind inherited accepted MAIN Woosung→Rich / DragonRich verification debt. Do not reread through `8817bf0` unless the miner advances.
- Core Rooms / Events remains reviewed through `72d2932b59ff7fe68ee9aab032542c3cfeed40c3`, consumed only through `e0d32f57ccbfb9433eac730ffd0e6786a0054b3d` behind inherited MAIN Ricochet verification debt.
- Louvre remains reviewed/consumed through `f6a40d1a008209684dbea53a4daaea602197fbc5`.
- Whiskey remains reviewed/consumed through `e82db8e2db344992ce0cee4f1dc029c4dff5169c`.
- Both Club-Only recovery branches remain fully current.

## Hard rails still in force

Same display names do not bridge stable IDs. Nobukatsu is **not** canonical Nobu without an explicit bridge. Mia is distinct from Mimi / Opalite Honey / `༯`. The Whiskey Cele collision and Zhēnxī stable-ID conflict remain unresolved. Joke-family, joke-romance, and joke-role language stay nonliteral without support. Earliest surviving is not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
