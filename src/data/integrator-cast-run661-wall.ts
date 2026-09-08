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

const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex >= 0) {
  const eos = allCharacters[eosIndex];
  const relationships = [...(eos.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Panda",
    note: "Panda / Marian repeatedly goes receipt-hunting for Eos; Eos protests at full volume, then counter-files, tells Panda she has been `sort of spared`, and eventually calls the exchange `this is war`. Months later Panda is also the one who remembers Eos's proposal when the room asks for a genuinely positive `FAME moment`. Prosecution, retaliation and fond recognition all live in the same lane.",
    href: "/characters/panda",
  });

  allCharacters[eosIndex] = {
    ...eos,
    logline: "Low-ceremony without being low-warmth: Eos can object theatrically when Screenshot Court comes for them, counter-file on Panda without leaving the joke, and still wind up remembered by the room as its first genuinely positive `FAME moment`. Ren gets the softer bestie-and-backing lane; Panda gets reciprocal evidence war.",
    tags: [...new Set([...(eos.tags ?? []), "Wall", "Reciprocal receipt war", "First Fame moment", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(eos.quotes ?? []),
      "i said dont look:HissMadExplosionPan:",
      "A VALID EXCUSE",
      "WHYYY",
      "I just randomly said it, god damn it",
    ])],
  };
  characterById.set("eos", allCharacters[eosIndex]);
}

const beckiieIndex = allCharacters.findIndex((character) => character.id === "beckiie");
const beckiieCharacter: Character = {
  id: "beckiie",
  name: "Beckiie",
  aliases: ["beckiieboo"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021–2022+",
  logline: "Three surviving Wall posts, three attachments, one sentence: Beckiie says `i feel like i don’t say anything that gets me here` while literally filing an image. Verbally innocent; attachmentually suspicious.",
  tags: ["Archive cast", "Wall", "2021", "2022", "Attachment-first", "Low-verbiage", "Petty Crimes"],
  quotes: ["i feel like i don’t say anything that gets me here"],
};

if (beckiieIndex >= 0) {
  const beckiie = allCharacters[beckiieIndex];
  allCharacters[beckiieIndex] = {
    ...beckiie,
    ...beckiieCharacter,
    aliases: [...new Set([...(beckiie.aliases ?? []), ...beckiieCharacter.aliases!])],
    tags: [...new Set([...(beckiie.tags ?? []), ...beckiieCharacter.tags!])],
    quotes: [...new Set([...(beckiie.quotes ?? []), ...beckiieCharacter.quotes!])],
  };
  characterById.set("beckiie", allCharacters[beckiieIndex]);
} else {
  allCharacters.push(beckiieCharacter);
  characterById.set("beckiie", beckiieCharacter);
}
