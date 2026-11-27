# UL Wiki — Run 802 Identity Repair Addendum

Closed: 2026-09-10 09:56 PDT

## Why this addendum exists

Run 802's Aeshleen/Tae reader passed and deployed, but a post-close continuity audit found two older base-layer identity contaminations still surviving underneath the newer integration stack. Both violate the project-wide hard rule that similar display names or old fused public owners do not create identity bridges.

## Mimi ≠ Mia

Run 801 had already established the hard split:

- **Mimi** = stable account `783389804079349800`, username `opalite.honey`, display `༯`.
- **Mia** = stable account `439628808545632256`, username `.miaxxx`, display `m x`.

The current WIKI correctly had a separate Run-801 Mimi owner, but `cast-pre632.ts` still carried an older pre-correction overlay that added `Mimi`, `Opalite Honey`, and `༯` as aliases on Mia and attached the Mimi/Momo twin-bit material to Mia. That left the reader with the impossible state “Mimi is a separate person” and “Mimi is also Mia.”

`src/data/integrator-identity-repair-run802.ts` now enforces the resolved split at the final integration layer. It removes the contaminated Mimi aliases, Mimi/Momo twin-bit tags, dependent Momo relationship note, and dependent twin-bit quotes from Mia. It deliberately does **not** transfer those older twin-bit claims to Mimi without rechecking their stable-account provenance.

## Dean ≠ the separate Wall Support Tech candidate

A second continuity regression survived in `cast.ts`. Canonical **Dean / `supporttech900`** is stable account `770767336780070913`. The Wall candidate that supplied the old Support-Tech defendant/check-in packet is stable account `451712961667006465`. The shared `Support Tech`-like labeling does not bridge those accounts.

The final-layer repair removes the Wall-candidate-specific defendant/check-in quotes, Snow relationship note, and dependent personality tags from Dean. Dean keeps his independently established pre-UL online-son history with Mugen and the later Where Winds Meet mother/son continuity. The repair does not overcorrect by stripping account/name material that may independently belong to canonical Dean; it quarantines the specific foreign Wall behavior instead.

## Verification / deployment

Exact corrected WIKI reader: **`eca383cb42e77f377c3248da9ba9e5f4bea3e792`**.

- Build Underlords Wiki run **34505010673** — success.
  - build job **102964910893** — success, including Astro build.
- Deploy Underlords Wiki Preview / Pages run **34505010682** — success.
  - build/artifact job **102964968109** — success.
  - deploy job **102965132690** — success.
  - report/status job **102965205432** — success.

Reader-facing files changed:
- `src/data/integrator-identity-repair-run802.ts`
- `src/data/all-content.ts`

No miner consumption state changes are caused by this addendum. It is a public continuity repair on top of the already-closed Run 802 intake review.
