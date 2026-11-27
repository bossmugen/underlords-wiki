import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const addRelationshipTexture = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index < 0) {
    relationships.push(relationship);
    return;
  }

  const existing = relationships[index];
  relationships[index] = {
    ...existing,
    note: `${existing.note} ${relationship.note}`,
    href: existing.href ?? relationship.href,
  };
};

const anthosIndex = allCharacters.findIndex((character) => character.id === "anthos");
if (anthosIndex < 0) {
  throw new Error("Run 1110 expected canonical Anthos owner; refusing to manufacture a second person from antho.logy / Xanthos material");
}

const anthos = allCharacters[anthosIndex] as ExtendedCharacter;
const relationships = [...(anthos.relationships ?? [])];

addRelationshipTexture(relationships, {
  name: "Ren",
  note:
    "Ren repeatedly notices the throwaway Anthos line and turns it into room lore: `Anthos i love your quotes`, a proposed favorite-quotes collection, Anthos singing in VC while Mugs and Gabu scream at each other, then `Anthos is the solution` and the named `Anthos arc`. Anthos does not merely endure the attention. When Ren's rebellion framing reaches her, she asks `do I get a snazzy title`, stepping into the serialization on purpose.",
  href: "/characters/ren",
});

allCharacters[anthosIndex] = {
  ...anthos,
  description:
    "Anthos keeps being useful in ways that make her refusal to act important much funnier. She can scaffold Photo Submissions, welcome people into rooms, quietly seed a birthday-page idea that somebody else later turns into a channel, and then spend the same social life supplying tiny deadpan lines everybody else treats like collectibles. The short-text style is not distance. Ren can narrate Anthos singing in VC while Mugs and Gabu scream, the room can turn her name into a universal answer and mock theology, and Anthos will wait until the mythology is fully ridiculous before asking whether her corruption arc comes with a `snazzy title`. She is both connective tissue and willing material for the bit: competent enough to make the room easier to inhabit, unserious enough to help the room mythologize her for it.",
  logline:
    "Soft host, casual fixer, deadpan quote machine, willing mythological object: Anthos helps build the room and knows exactly when to become part of its stupidest lore.",
  tags: appendUnique(anthos.tags, [
    "Birthday-page seed",
    "Deadpan quotes",
    "VC singer",
    "Anthos arc",
    "Willing bit co-author",
  ]),
  relationships,
  quotes: appendUnique(anthos.quotes, [
    "do I get a snazzy title",
    "yes",
    "perfect",
  ]),
  claims: appendUnique(anthos.claims, [
    "During the August 31-September 1, 2020 birthday-channel sequence, Mugen says Anthos had already mentioned making a birthday page; the next morning Anthos thanks Rookie Cookie for `starting out the new channel with birthdays`. This supports Anthos as an earlier idea-seeder and Rookie as the directly credited implementer, not an origin certificate for either person.",
    "Across late 2020 and April 2021 social material, Ren repeatedly treats Anthos's compact phrasing as quotable, narrates Anthos singing in VC, amplifies `Anthos is the solution`, and names an `Anthos arc`; Anthos participates rather than remaining a passive target, including asking `do I get a snazzy title` during the rebellion/corruption bit.",
    "Mugs-confirmed canon is Anthos uses she/her pronouns. Conflicting pronouns in source-adjacent miner prose do not override that lock.",
  ]),
  antiFanon: appendUnique(anthos.antiFanon, [
    "The surviving birthday sequence shows Mugen saying Anthos had mentioned a birthday page before Snow's reminder and Anthos later crediting Rookie Cookie with starting the channel. Do not turn that into a proven sole-origin story, a formal birthday-office appointment, or exclusive ownership.",
    "`Anthos arc`, rebellion/corruption language, mock theology, and the requested `snazzy title` are room-lore jokes. They do not establish formal governance, religion, rank, or appointment chronology.",
    "Anthos being a recurring target of quotes, renaming and teasing does not make her socially passive; the same material shows her singing, answering, escalating and deliberately stepping into the bit.",
  ]),
} as ExtendedCharacter;

characterById.set("anthos", allCharacters[anthosIndex]);
