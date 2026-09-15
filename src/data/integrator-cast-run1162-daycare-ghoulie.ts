import "./integrator-cast-run1163-birthdays-sailorluna";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (ghoulieIndex < 0) {
  throw new Error("Run 1162 expected canonical Ghoulie / Baby Lyssa owner; refusing to create a duplicate card");
}

const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
const relationships = [...(ghoulie.relationships ?? [])];

const upsertRelationship = (name: string, note: string, href?: string) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

upsertRelationship(
  "Ren",
  "Ren does not just preserve the receipt and wander off; Ren pings Ghoulie back into the room. Ghoulie asks `is this y’all’s way of showing me love???`, immediately answers with `cause if that’s the case i love y’all too`, and Ren replies `You’re my idol`. Their public-prosecution routine is familiar enough that affection can stay inside the joke instead of pausing it.",
  "/characters/ren",
);

allCharacters[ghoulieIndex] = {
  ...ghoulie,
  name: "Ghoulie",
  aliases: appendUnique(ghoulie.aliases, ["Baby Lyssa", "sl33py.brxt", ".phantasghoul_"]),
  logline:
    "Screenshot Court’s recurring defendant eventually claims the Wall as `ma damn wall` and asks whether everybody’s receipt-filing is how they show her love—then answers that she loves them too. Ghoulie can protest the exhibit, feed the ritual, and later stop in Daycare just to tell AJ their art style is wonderful.",
  tags: appendUnique(ghoulie.tags, [
    "Wall residency",
    "Receipt culture",
    "Teasing as affection",
    "Ren",
  ]),
  relationships,
  quotes: appendUnique(ghoulie.quotes, [
    "this ma house",
    "ma damn wall",
    "is this y’all’s way of showing me love???",
    "cause if that’s the case i love y’all too",
    "sama is like fuck you you’re joining",
  ]),
  claims: appendUnique(ghoulie.claims, [
    "Across June and July 2021, Ghoulie explicitly claims the Wall as `this ma house` / `ma damn wall`, later interprets Ren summoning her to fresh receipts as `y’all’s way of showing me love???`, and immediately reciprocates; Ren replies `You’re my idol`.",
    "The March 13, 2021 Wall sequence—ShiyaX `GHOULIE IN UL` / `YOU JOINING BB ?`, Ghoulie `MAYBE?`, another participant `welcome`, then Ghoulie `sama is like fuck you you’re joining`—makes her Dragon Raja move into UL probable by that social scene, while the exact system admission action and operator remain unresolved.",
  ]),
  antiFanon: appendUnique(ghoulie.antiFanon, [
    "Ghoulie calling the Wall her house / wall is ownership of the bit, not literal channel ownership, moderation, or governance.",
    "Ghoulie and Ren’s `showing me love` / `You’re my idol` exchange supports familiar teasing and affection inside receipt culture, not romance or literal family.",
    "Ren is POSTED BY for the nearby attachments in the July 18 scene; their subjects, maker, and capturer remain uninspected here and are not needed for the relationship read.",
    "The March 13 transition is probable social evidence of Ghoulie’s Dragon Raja move into UL. Do not invent an exact accept command, operator, or timestamp, and do not resolve `sama` without a separate identity bridge.",
  ]),
} as ExtendedCharacter;

characterById.set("baby-lyssa", allCharacters[ghoulieIndex]);
