import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex < 0) {
  throw new Error("Run 1127 expected canonical Ricochet owner; refusing to manufacture a second owner");
}

const ricochet = allCharacters[ricochetIndex] as ExtendedCharacter;
const relationships = [...(ricochet.relationships ?? [])];
const mugenNote =
  "In later Where Winds Meet play, a possible 30v30 arena makes Ricochet say `fight club might be back`, and Mugen answers the same little revival fantasy with `FIGHT FIGHT FIGHT`. Another WWM memory has Ricochet calling an older club war `the most chaotic club war we had`; the reviewed catalog records Mugen as surprised he still remembered it. The useful relationship beat is shared history resurfacing at unequal expected strength, not a memory contest or closeness ranking.";
const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
if (mugenIndex >= 0) relationships[mugenIndex] = { name: "Mugen", note: mugenNote, href: "/characters/mugen" };
else relationships.push({ name: "Mugen", note: mugenNote, href: "/characters/mugen" });

allCharacters[ricochetIndex] = {
  ...ricochet,
  tags: appendUnique(ricochet.tags, [
    "Where Winds Meet",
    "Cross-game memory",
    "Fight Club callbacks",
    "Continuity recognizer",
  ]),
  relationships,
  quotes: appendUnique(ricochet.quotes, [
    "fight club might be back",
    "the most chaotic club war we had",
  ]),
  claims: appendUnique(ricochet.claims, [
    "The reviewed Louvre/Other Games handoff assigns the 2025 Where Winds Meet memory material to stable account 459696170759880745. Current user-confirmed public canon maps that stable account to Ricochet / `dragonrichard`, not Rich / DragonRich, so the material is routed to the canonical Ricochet owner despite the miner's conflicting display-label bridge.",
    "On December 26, 2025 a possible 30v30 arena in Where Winds Meet prompts Ricochet to say `fight club might be back`; Syv extends the premise toward UL participation and Mugen answers `FIGHT FIGHT FIGHT`. The scene supports continuity-recognition rather than a formal revival of the old room.",
    "A later reviewed WWM catalog entry preserves Ricochet calling an older club war `the most chaotic club war we had` and records Mugen as surprised he still remembered it. Together with the 30v30 callback, this gives Ricochet a later-era habit of using new-game mechanics as retrieval cues for old UL social formats.",
  ]),
  antiFanon: appendUnique(ricochet.antiFanon, [
    "Hard user-confirmed identity canon overrides the miner's conflicting `Rich = Ricochet` bridge: Ricochet / `dragonrichard` (stable account 459696170759880745) and Rich / DragonRich are separate people. Never merge their biographies or import Rich's Amaurot leadership onto Ricochet.",
    "`fight club might be back` is a conditional social callback, not evidence that Fight Club was formally revived in Where Winds Meet, that Ricochet owned it, or that 30v30 mechanics created UL governance.",
    "`the most chaotic club war we had` is Ricochet's retrospective characterization. Do not identify or rank a specific historical war unless a direct source names it.",
    "The reviewed catalog preserves the WWM wording/date and same-sequence context, while exact message IDs, second-level timestamps, reply geometry, edits, and reactions remain forensic backfill. Those missing fields can refine nuance but do not license reassignment to Rich against the stable-account canon lock.",
  ]),
} as ExtendedCharacter;

characterById.set("ricochet", allCharacters[ricochetIndex]);
