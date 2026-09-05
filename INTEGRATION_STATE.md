# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 Run 438 final close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Earlier verbose states remain recoverable in git history.

## Census / queue

Run 438 final census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing**, 0 newly discovered, **0 unread pending review**, **10 MAIN publication-held families**, 0 backlog, 0 overdue. Both Club-Only recovery priorities remain current at their saturated/do-not-churn heads; no raw archive was re-mined.

Reviewed through current heads this run:
- Birthdays / PR / VC — `6c8bbbb79f0c52827b917c27bb2e5615de9eeef8`
- Core Rooms / Events — `33a1736ba5a323ad610b5834bcb8eb5655671a26`
- Mugen person-first — `4626ad36a621b8cecc5aed9634fac7e64743dafe`
- Backroom — `68d2fba7adda1f110a9be57013dd7712c450f82d`
- Wall — `0790aaac20cb961271a6100958e754d1f4ce90fb`
- Whiskey — reviewed through `c8c656a16e5656d728408f398e04a9810bd075af`; conservative consumed cursor remains `2fa4c6b6e0185d6b4549eadc80d6098d8dc9d66c` because the accepted MAIN Milo reader change did not pass MAIN's required verification gate.

## Public integration

**Rich / Richard.** The 2020 Birthdays / PR / VC tail directly maps `Richard` onto Rich as a house reprimand/call-name: Ren posts the meme, instructs the room to say it whenever Rich messes up, and asks for the response in unison; Zoshaa immediately supplies a use case. WIKI now treats `Richard` as a communal consequence-name that later normalizes into ordinary call-name use. It is not presented as Rich's legal/offline name or guaranteed first use. The exact full later room-title coiner, rename date, and remaining title wording are still unresolved.

**Booba / MsThiccy.** Core Rooms / Events adds a 2023 return scene: Booba announces she is back, asks to join again, Sota says to reapply and welcomes her back, and Mugen recognizes her as `Ms t`. The WIKI page keeps both halves: socially recognized returnee, procedurally still required to reapply. No successful rejoin is claimed.

**Milo.** Whiskey deepens MAIN Milo into a clearer cozy-routine / competitive-teeth contradiction, especially through recurring Gilli challenge language. Historical reconciliation blocks the miner's November 2020 Lobby wording from becoming an origin claim because the same stable account is already present in Whiskey in June 2020.

**Mugen.** The latest tail was duplicate/corroborative only; no reader paragraph was added.

**Backroom.** The `Moments submission` side-door pattern strengthened: three surviving labeled posts are carried by Gilli or Anthos for people who locally self-report other clubs. That is useful social-infrastructure evidence, but it does not establish a DM/proxy/import rule. Images remain uninspected; the incident is banked for its canonical owner.

**HamitteY.** The final-closing Wall tail promotes stable `hamittey` into a substantial person scaffold: recurring receipt-keeping, context-stripping humor, repeated visual exit reactions, affectionate mock-betrayal with Baby Lyssa, chaos teasing with Shiya, and a small shared-joke lane around Mugen's `bonus` reputation. No public page was manufactured because neither surface currently has a safe canonical Hamitte owner. The profile is banked as WIKI-ready material. Visual media remains unresolved and attribution boundaries stay intact.

## Verification / deployment

Final verified WIKI reader head: `d0d0a6151682e1936a48db69c8e215174022c887`.

- Build workflow `33958493857` — **success**.
- Pages workflow `33958493907` — **success**.
- Preview build, artifact upload, and actual GitHub Pages deployment all succeeded.

WIKI reader-facing files changed in the verified tree:
- `src/data/character-biographies-rich.ts`
- `src/data/character-biographies-run438.ts`
- `src/data/character-biographies-run400.ts` (registration/export)

MAIN reader target `1a7b3b37f97b7f9c31a15515696e293e4b4bd169` contains changes to `src/content/people/milo.md` and `src/content/people/rich.md`. Workflow `33958451942` failed before repository execution on attempt 1; the failed jobs were rerun once and attempt 2 failed in the same pre-runner/no-step shape. Verified Cloudflare deployment was skipped. MAIN source verification, Astro build, and built-output verification therefore did not reject the copy; they never executed. **No new MAIN deployment is claimed.**
