import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const anthosIndex = allCharacters.findIndex((character) => character.id === "anthos");
if (anthosIndex < 0) {
  throw new Error("Run 781 expected canonical Anthos; refusing to manufacture a second Anth / antho.logy.");
}

const anthos = allCharacters[anthosIndex] as ExtendedCharacter;
const relationships = [...(anthos.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Mugen",
  note:
    "Mugen and Anthos repeatedly meet in the unglamorous middle of keeping rooms usable: explaining where people should go, getting people into games, and handling little setup problems without making the help feel official. Anthos can be useful first and ridiculous immediately after; Mugen treats both modes as normal operating conditions.",
  href: "/characters/mugen",
});

upsertRelationship(relationships, {
  name: "Snow",
  note:
    "Snow can greet her as `ANTO ANT`; Anthos answers `auntie snow~`. The family-language is a joke and shorthand, not a literal family claim. What matters is the ease: practical coordination and affectionate nonsense live in the same lane for them.",
  href: "/characters/snow",
});

allCharacters[anthosIndex] = {
  ...anthos,
  description:
    "Anthos is one of those people who quietly makes a room easier to enter. She explains the door, points people toward games, makes channels or roles when somebody needs them, and keeps asking what would make the place more usable. Then the competent host voice turns around and becomes part of the gremlin problem. The combination is the point: she can be practical without becoming stiff, welcoming without sounding like staff onboarding, and organized while still happily feeding the joke once everybody is inside.",
  logline:
    "Soft host, casual fixer, resident gremlin: Anthos gets people through the door, makes the room work, and then joins the nonsense she just made space for.",
  tags: appendUnique(anthos.tags, ["Soft host", "Casual fixer", "Gremlin infrastructure"]),
  relationships,
  quotes: appendUnique(anthos.quotes, [
    "EVERYONE IS WELCOME ALWAYSSS",
    "yes always! Everyone is welcome ~",
    "Babysitter Anthy reporting for duty ma’am!",
  ]),
  claims: appendUnique(anthos.claims, [
    "Whiskey-room person-first synthesis identifies Anthos as stable Discord account 695394317921026121, export username `antho.logy`, display `Anth`.",
    "Across the surviving room material Anthos repeatedly welcomes people, explains shared rooms, helps with games and logistics, and improvises channels/roles or other small infrastructure while keeping the tone casual rather than institutional.",
    "Mugs explicitly confirms Anthos uses she/her pronouns; that canon overrides conflicting archive/admin-pronoun noise.",
  ]),
  antiFanon: appendUnique(anthos.antiFanon, [
    "Do not turn export-time/current role arrays into Anthos appointment chronology. `Host` may describe lived behavior here, but it is not being added as a formal title from this intake alone.",
    "Do not literalize `auntie snow~` or other joke family-language into biological family.",
  ]),
} as ExtendedCharacter;

characterById.set("anthos", allCharacters[anthosIndex]);
