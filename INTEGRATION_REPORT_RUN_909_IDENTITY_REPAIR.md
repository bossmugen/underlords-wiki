# WIKI Integrator Run 909 — Mimi / Mia hard-lock audit

Date: 2026-09-12

The shared miner census closed stable at **51 tracked identities = 30 active refs + 21 historical/missing refs**, with 0 unread active tails, 0 backlog, 0 overdue, and 7 older MAIN pending-publication/resynthesis families. No WIKI reader change was required from miner novelty this pass.

A cross-surface hard-canon audit did find a regression on MAIN: Mimi and Mia had been re-merged in MAIN public sources despite the existing hard identity lock. WIKI's final integration layer was checked directly and remains on the correct side of the split.

Canonical identity boundary:

- **Mia** = Maho / Miaka / `.miaxxx` / `m x`; stable account `439628808545632256`.
- **Mimi** = Opalite Honey / `༯`; stable account `783389804079349800`.
- Similar names do not bridge the accounts.
- The April 2023 twin exchange belongs to **Mimi ↔ Momo**, not Mia ↔ Momo.

Current WIKI enforcement:

- `src/data/integrator-identity-repair-run802.ts` removes Mimi / Opalite Honey / `༯` contamination from Mia and records the two stable account IDs as separate owners.
- `src/data/integrator-cast-run807-late-wall-momo-mimi.ts` requires separate canonical Mimi and Momo owners and folds the twin scene into Mimi↔Momo.
- `src/data/all-content.ts` activates both repair layers.

Therefore WIKI received **0 reader-facing changes intentionally**. No duplicate dossier, alias collapse, or mirrored MAIN repair prose was added, and no redundant Astro/Pages build was launched for an unchanged reader tree.

MAIN separately restored the hard split in `src/lib/roster.ts`, `src/content/people/mia.md`, and `src/content/people/momo.md`. MAIN production verification remains unresolved because workflow run `34678205755` failed before any job steps were allocated; WIKI should not inherit that deployment failure because its reader tree was unchanged.
