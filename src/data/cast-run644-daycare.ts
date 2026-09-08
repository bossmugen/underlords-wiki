import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById, primaryGroupByCharacterId } from "./cast";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const renRelationship = {
  name: "Ren",
  note: "Ren can publicly invoke Aesh's shame record, Aesh can answer `lemme alone 💔` or `i hate you.`, and the exchange keeps moving instead of collapsing. In 2022 the mock prosecution resolves into Aesh's `ILY yall` and Ren's `WE LOVE U MOREEEE`; in 2024 Aesh follows the complaint almost immediately with a context packet. Comfortable recurring teasing, not a romance label.",
  href: "/characters/rv",
};

const mugenRelationship = {
  name: "Mugen",
  note: "In one 2023 Wall filing Mugen captions the screenshot `posted w permits`; Aesh answers by adding `for the record...` context rather than asking for removal. The useful distinction is scene-specific: permission to post did not make contextual framing irrelevant to Aesh.",
  href: "/characters/mugen",
};

const aeshIndex = allCharacters.findIndex((character) => character.id === "aesh");
if (aeshIndex >= 0) {
  const aesh = allCharacters[aeshIndex];
  const relationships = [...(aesh.relationships ?? [])];
  upsertRelationship(relationships, renRelationship);
  upsertRelationship(relationships, mugenRelationship);

  allCharacters[aeshIndex] = {
    ...aesh,
    aliases: [...new Set([...(aesh.aliases ?? []), "aεsh¡!", "aeshleen"])],
    logline:
      "A contextual-defense comedian: Aesh can protest the Wall, laugh at the prosecution, and then file the missing context herself. By 2023–2024, `for the record` has become less a disclaimer than a recurring personal ritual.",
    tags: [...new Set([...(aesh.tags ?? []), "Daycare", "Wall", "Context lawyer", "Self-roast", "Wonho fan", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(aesh.quotes ?? []),
      "making jokes is my way to cope.",
      "for the record. we were talking about law, zoro, robin, boa and luffy.",
      "## FOR THE CONTEXT ##",
      "WONHO SUPREMACY",
      ". . .",
    ])],
  };
  characterById.set(aesh.id, allCharacters[aeshIndex]);
} else {
  const aesh: Character = {
    id: "aesh",
    name: "Aesh",
    aliases: ["aεsh¡!", "aeshleen"],
    billing: "guest",
    role: "Archive-era Daycare / Wall participant",
    era: "2021–2024",
    logline:
      "A contextual-defense comedian: Aesh can protest the Wall, laugh at the prosecution, and then file the missing context herself. By 2023–2024, `for the record` has become less a disclaimer than a recurring personal ritual.",
    tags: ["Daycare", "Wall", "Context lawyer", "Self-roast", "Wonho fan", "Petty Crimes"],
    relationships: [renRelationship, mugenRelationship],
    quotes: [
      "making jokes is my way to cope.",
      "for the record. we were talking about law, zoro, robin, boa and luffy.",
      "## FOR THE CONTEXT ##",
      "WONHO SUPREMACY",
      ". . .",
    ],
  };

  allCharacters.push(aesh);
  const vipGroup = castGroups.find((group) => group.id === "vip");
  if (vipGroup && !vipGroup.characterIds.includes(aesh.id)) vipGroup.characterIds.push(aesh.id);
  characterById.set(aesh.id, aesh);
  if (vipGroup) primaryGroupByCharacterId.set(aesh.id, vipGroup);
}
