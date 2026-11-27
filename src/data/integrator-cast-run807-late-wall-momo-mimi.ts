import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const momoIndex = allCharacters.findIndex((character) => character.id === "momo");
const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");

if (momoIndex < 0 || mimiIndex < 0) {
  throw new Error("Run 807 late Wall fold expected canonical Momo and Mimi owners; refusing to create or merge identities.");
}

const momo = allCharacters[momoIndex] as ExtendedCharacter;
const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
const momoRelationships = [...(momo.relationships ?? [])];
const mimiRelationships = [...(mimi.relationships ?? [])];

upsertRelationship(momoRelationships, {
  name: "Mimi",
  note:
    "Mimi starts the April 2023 twin bit with `me and momo are twinsss`; Momo immediately mirrors it as `Mimi’s twin`. Mimi follows with `love u twinnn`, and Momo returns `Love ya 2`. The shorthand works because both keep feeding it back: a comfortable affectionate joke, not literal family or romance.",
  href: "/characters/mimi",
});

upsertRelationship(mimiRelationships, {
  name: "Momo",
  note:
    "Mimi calls the pair twins; Momo answers by naming herself `Mimi’s twin`, then reciprocates Mimi's `love u twinnn` with `Love ya 2`. Two days later Momo is still playing with the paired-name joke. Their rhythm is mutual mirroring rather than one person assigning the other a label.",
  href: "/characters/momo",
});

allCharacters[momoIndex] = {
  ...momo,
  tags: unique([...(momo.tags ?? []), "Mimi/Momo twin bit", "Affectionate mirroring", "Petty Crimes"]),
  relationships: momoRelationships,
  quotes: unique([...(momo.quotes ?? []), "Mimi’s twin", "Love ya 2", "you are both Mimi & Momo."]),
  claims: unique([
    ...(momo.claims ?? []),
    "Stable Momo account 687376846647853107 directly mirrors Mimi / opalite.honey's April 7, 2023 `twinsss` framing with `Mimi’s twin` and reciprocates `love u twinnn` with `Love ya 2`.",
    "On April 9, 2023 Momo again uses Mimi/Momo doubling language while mentioning Mimi, but the referenced parent is unresolved, so the exact trigger is not reconstructed.",
  ]),
  antiFanon: unique([
    ...(momo.antiFanon ?? []),
    "Momo's `twin` language with Mimi is reciprocal social/joke shorthand. It does not establish biological kinship, romance, exclusivity, or a ranked closeness claim.",
    "The April 9 `you are both Mimi & Momo.` reply has an unresolved parent; preserve the line without inventing the missing referent or setup.",
  ]),
} as ExtendedCharacter;

allCharacters[mimiIndex] = {
  ...mimi,
  tags: unique([...(mimi.tags ?? []), "Mimi/Momo twin bit", "Affectionate mirroring", "Petty Crimes"]),
  relationships: mimiRelationships,
  quotes: unique([...(mimi.quotes ?? []), "me and momo are twinsss", "love u twinnn"]),
  claims: unique([
    ...(mimi.claims ?? []),
    "Stable Mimi account 783389804079349800 / `opalite.honey` directly authors `me and momo are twinsss` and `love u twinnn` to Momo on April 7, 2023; Momo mirrors both the twin framing and the affection.",
  ]),
  antiFanon: unique([
    ...(mimi.antiFanon ?? []),
    "Mimi remains distinct from Mia. The mechanically anchored Momo↔Mimi twin exchange belongs to Mimi / opalite.honey and must not be transferred back onto Mia.",
    "Mimi and Momo calling each other twins is nonliteral social language and reciprocal affection, not biological family or romance canon.",
    "Nearby media remains POSTED BY the account that posted it unless MADE BY, CAPTURED BY, or FEATURING is independently established.",
  ]),
} as ExtendedCharacter;

characterById.set("momo", allCharacters[momoIndex]);
characterById.set("mimi", allCharacters[mimiIndex]);
