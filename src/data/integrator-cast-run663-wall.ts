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

const yumiIndex = allCharacters.findIndex((character) => character.id === "yumi");
const existing = yumiIndex >= 0 ? allCharacters[yumiIndex] : undefined;
const relationships = [...(existing?.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Mugen",
  note: "Mugen is part of Yumi's Wall acknowledgment/filing orbit without needing much setup. Yumi's own style stays sparse: the exhibit usually does the talking, and the room can pick the bit up from there.",
  href: "/characters/mugen",
});
upsertRelationship(relationships, {
  name: "Anthos",
  note: "When Anthos turns the Wall lens toward Yumi, Yumi does not retreat from the ritual; she true-replies `i mean at least I get to be famous`. Public exposure gets converted into status comedy instead of a defensive exit.",
  href: "/characters/anthos",
});

const yumiCharacter: Character = {
  id: "yumi",
  name: "Yumi",
  aliases: ["Yummibears", "Yummibears#3139"],
  billing: "legacy",
  role: "2020 Officer",
  era: "2020–2021+",
  logline: "Early officer with a very economical Wall register: Yumi can file an attachment with almost no narration, let `welp...` or `Yep` carry the aftertaste, and then take her own turn under Screenshot Court with `i mean at least I get to be famous`. Exhibit first, tiny caption second, dignity negotiable.",
  tags: ["Officer", "Archive cast", "Wall", "Attachment-first", "Sparse-verbiage", "Screenshot Court", "Exposure-positive", "Petty Crimes"],
  relationships,
  quotes: ["welp...", "Yep", "i mean at least I get to be famous", "This is me"],
  antiFanon: [
    "The Wall attachments are POSTED BY Yumi unless separate media inspection establishes who made, captured, or appears in them.",
    "The surviving Wall slice supports a receipt-led humor style; it does not make Yumi a formal screenshot or archive technician.",
    "Wall chronology is not treated as Yumi's join date, officer appointment date, or origin point.",
  ],
};

if (yumiIndex >= 0) {
  const yumi = allCharacters[yumiIndex];
  allCharacters[yumiIndex] = {
    ...yumi,
    ...yumiCharacter,
    aliases: [...new Set([...(yumi.aliases ?? []), ...yumiCharacter.aliases!])],
    tags: [...new Set([...(yumi.tags ?? []), ...yumiCharacter.tags!])],
    relationships,
    quotes: [...new Set([...(yumi.quotes ?? []), ...yumiCharacter.quotes!])],
    antiFanon: [...new Set([...(yumi.antiFanon ?? []), ...yumiCharacter.antiFanon!])],
  };
  characterById.set("yumi", allCharacters[yumiIndex]);
} else {
  allCharacters.push(yumiCharacter);
  characterById.set("yumi", yumiCharacter);
}
