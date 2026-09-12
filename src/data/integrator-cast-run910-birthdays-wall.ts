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

// Birthdays / PR / VC: old Discord-tag continuity, not manual authorship of bot-style ads.
const gilliIndex = allCharacters.findIndex(
  (character) => character.id === "gilli" || character.name === "Gilli",
);
if (gilliIndex < 0) {
  throw new Error("Run 910 expected the canonical Gilli owner; refusing to create a duplicate.");
}

const gilli = allCharacters[gilliIndex] as ExtendedCharacter;
allCharacters[gilliIndex] = {
  ...gilli,
  aliases: unique([...(gilli.aliases ?? []), "GILLI#8635"]),
  tags: unique([
    ...(gilli.tags ?? []),
    "Historical Discord tag",
    "Stream-account era",
    "Integration fossils",
  ]),
  claims: unique([
    ...(gilli.claims ?? []),
    "Late-November 2020 ordinary-room messages and the historical `#stream-account` snapshots both render Gilli as `GILLI#8635`, making it a strong historical Discord-tag bridge for the same person.",
    "The `#stream-account` rows are integration/bot-style posting artifacts around IFTTT links and Featured24 stream advertisements. They are useful for tag continuity and platform-history texture, not for claiming that Gilli manually typed every advertisement bearing the rendered sender tag.",
  ]),
  antiFanon: unique([
    ...(gilli.antiFanon ?? []),
    "`GILLI#8635` is a historical Discord tag. Its appearance on automated/integration-style stream-account rows does not establish manual authorship by Gilli of every wrapped stream advertisement.",
    "The stream-account artifact does not establish a new staff office, streaming role, bot-operator appointment, or appointment chronology for Gilli.",
  ]),
} as ExtendedCharacter;
characterById.set(allCharacters[gilliIndex].id, allCharacters[gilliIndex]);

// Wall: Ghoulie is the primary person; Baby Lyssa remains an alias. The new material
// deepens taste and joke delivery without turning one room lane into a role claim.
let ghoulieIndex = allCharacters.findIndex(
  (character) =>
    character.id === "ghoulie" ||
    character.name === "Ghoulie" ||
    character.id === "baby-lyssa" ||
    character.name === "Baby Lyssa" ||
    (character.aliases ?? []).some((alias) => alias === "Ghoulie" || alias === "Baby Lyssa"),
);
if (ghoulieIndex < 0) {
  throw new Error("Run 910 expected the canonical Ghoulie / Baby Lyssa owner; refusing to create a duplicate.");
}

const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
const ghoulieRelationships = [...(ghoulie.relationships ?? [])];
upsertRelationship(ghoulieRelationships, {
  name: "Torr",
  note:
    "When Ghoulie calls a sanitized rewrite `Such mundane language`, Torr answers `Thanks for the topic shift.` It is a tiny, dry handoff where one line is enough for both people to understand the room has changed subjects; useful banter texture, not a closeness ranking.",
  href: "/characters/torr",
});

allCharacters[ghoulieIndex] = {
  ...ghoulie,
  name: "Ghoulie",
  aliases: unique([...(ghoulie.aliases ?? []), "Baby Lyssa"]),
  tags: unique([
    ...(ghoulie.tags ?? []),
    "Wall",
    "Light-mode enjoyer",
    "Dry commentary",
    "Roast participant",
    "Short-form self-own",
    "Petty Crimes",
  ]),
  relationships: ghoulieRelationships,
  quotes: unique([
    ...(ghoulie.quotes ?? []),
    "Me accidentally somehow yet in discord vc with mic on",
    "Im dead",
    "I like it",
    "Such mundane language",
    "you look like my pp",
    "30 yo rusty spoon",
  ]),
  claims: unique([
    ...(ghoulie.claims ?? []),
    "Ghoulie's surviving Wall voice is compact and reactive: a June 2021 accidental-mic self-own arrives in fragments, later reactions stay punchy, and she is comfortable joining an existing roast instead of merely watching it.",
    "Ghoulie explicitly says she likes Discord light mode and explains the preference in visibility terms: the full-screen redesign lets her see more clearly. This is a dated interface/taste preference, not a universal accessibility diagnosis.",
    "In a separate Wall exchange she calls a cleaned-up rewrite `Such mundane language`; Torr's `Thanks for the topic shift` reply preserves the same dry economy. The cumulative read is humor that can land in one short line and then move on.",
    "Ghoulie also participates directly in a 2022 roast pocket with lines including `you look like my pp` and `30 yo rusty spoon`, adding active humiliation-game participation to the quieter reaction-layer side of her Wall presence.",
  ]),
  antiFanon: unique([
    ...(ghoulie.antiFanon ?? []),
    "The light-mode preference is Ghoulie's stated interface taste in the reviewed scene. Do not infer a medical condition or permanent accessibility need from it.",
    "Ghoulie's roast lines are participation in an existing joke pocket, not literal sexual/body claims, hostility, or a relationship rank.",
    "The Ghoulie↔Torr exchange supports room-level banter and timing; it does not establish exceptional closeness or a broader off-Wall relationship history.",
    "Current/export role arrays are not used here to infer appointment chronology or formal duties.",
  ]),
} as ExtendedCharacter;
characterById.set(allCharacters[ghoulieIndex].id, allCharacters[ghoulieIndex]);
