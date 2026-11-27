import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

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
  note: "Ren can publicly invoke Aeshleen's shame record, Aeshleen can answer `lemme alone 💔` or `i hate you.`, and the exchange keeps moving instead of collapsing. In 2022 the mock prosecution resolves into Aeshleen's `ILY yall` and Ren's `WE LOVE U MOREEEE`; in 2024 the complaint turns almost immediately into a context packet. Comfortable recurring teasing, not a romance label.",
  href: "/characters/ren",
};

const mugenRelationship = {
  name: "Mugen",
  note: "In one 2023 Wall filing Mugen captions the screenshot `posted w permits`; Aeshleen answers by adding `for the record...` context rather than asking for removal. The useful distinction is scene-specific: permission to post did not make contextual framing irrelevant to her.",
  href: "/characters/mugen",
};

// Hard identity repair: the stable account mined as aεsh¡! / aeshleen is the
// already-public Aeshleen file. Never create a fallback `aesh` twin if lookup fails.
const aeshleenIndex = allCharacters.findIndex((character) => character.id === "aeshleen");
if (aeshleenIndex >= 0) {
  const aeshleen = allCharacters[aeshleenIndex];
  const relationships = [...(aeshleen.relationships ?? [])];
  upsertRelationship(relationships, renRelationship);
  upsertRelationship(relationships, mugenRelationship);

  allCharacters[aeshleenIndex] = {
    ...aeshleen,
    aliases: [...new Set([...(aeshleen.aliases ?? []), "Aesh", "aεsh¡!", "aeshleen"])],
    era: "2020–2024+",
    logline:
      "Historical Staff, One Piece fan, remembered Wall-speedrun benchmark, and contextual-defense comedian: Aeshleen can protest the filing, laugh at the prosecution, then submit the missing context herself. By 2023–2024, `for the record` has become less a disclaimer than a recurring personal ritual.",
    tags: [...new Set([...(aeshleen.tags ?? []), "Daycare", "Wall", "Context lawyer", "Self-roast", "Wonho fan", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(aeshleen.quotes ?? []),
      "making jokes is my way to cope.",
      "for the record. we were talking about law, zoro, robin, boa and luffy.",
      "## FOR THE CONTEXT ##",
      "WONHO SUPREMACY",
      ". . .",
    ])],
  };
  characterById.set(aeshleen.id, allCharacters[aeshleenIndex]);
}
