import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const deanIndex = allCharacters.findIndex((character) => character.id === "dean");
if (deanIndex < 0) {
  throw new Error("Run 794 expected canonical Dean / Support Tech owner; refusing to create a duplicate.");
}

const dean = allCharacters[deanIndex] as ExtendedCharacter;
const relationships = [...(dean.relationships ?? [])];
const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
const mugenRelationship = {
  name: "Mugen",
  note:
    "Dean is Mugen's online son from before Dragon Raja, so the later Support Tech Wall rhythm lands inside an already long relationship rather than inventing a new one. As Support Tech he learns Screenshot Court fast enough that both surviving direct filing pockets pair the exhibit with Mugen within seconds — attachment then summon in 2021, summon then attachment in 2023. The names and room mechanics change; the instinct to pull Mugen into the bit does not need much setup.",
  href: "/characters/mugen",
};

if (mugenIndex >= 0) relationships[mugenIndex] = mugenRelationship;
else relationships.push(mugenRelationship);

allCharacters[deanIndex] = {
  ...dean,
  relationships,
} as ExtendedCharacter;
characterById.set("dean", allCharacters[deanIndex]);