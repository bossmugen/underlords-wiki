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

// Birthdays / PR / VC: the Nov. 2020 moderation scene proves the stream account
// wearing `Gilli#8635` and human Gilli were distinct stable accounts in the same scene.
// Keep the account history unresolved; the public keeper is Gilli's tiny panic-and-undo beat.
const gilliIndex = allCharacters.findIndex(
  (character) => character.id === "gilli" || character.name === "Gilli",
);
if (gilliIndex < 0) {
  throw new Error("Run 910 expected the canonical Gilli owner; refusing to create a duplicate.");
}

const gilli = allCharacters[gilliIndex] as ExtendedCharacter;
allCharacters[gilliIndex] = {
  ...gilli,
  tags: unique([
    ...(gilli.tags ?? []),
    "Eli command chaos",
    "Staff-room mischief",
    "Integration fossils",
  ]),
  quotes: unique([
    ...(gilli.quotes ?? []),
    "Oops",
    "Oh god we gotta unjail before mugs find out",
  ]),
  claims: unique([
    ...(gilli.claims ?? []),
    "In November 2020 Gilli successfully jails the separate stream account then immediately realizes the mistake: `Oops`, followed by `Oh god we gotta unjail before mugs find out`. She reverses it about eighty-two seconds after the successful jail response. The useful character beat is the scramble itself: command confidence, instant recognition that she has made a mess, and very specific fear of Mugs discovering it before she can put the furniture back.",
    "The target stream account is stable ID `615878920583249920`; structured moderation output renders that target as `Gilli#8635`. Human Gilli is stable ID `585466495757451284` and explicitly targets the other account in the same scene, so the matching tag is account-history weirdness rather than an identity bridge.",
  ]),
  antiFanon: unique([
    ...(gilli.antiFanon ?? []),
    "Do not add `Gilli#8635` as a human-Gilli alias from this scene. The moderation event shows human Gilli and the stream account carrying that tag as two distinct stable IDs at the same time.",
    "The reason the stream account carried `Gilli#8635` is unresolved. Do not infer ownership, operator identity, credentials, a transfer/handoff, or who renamed it.",
    "The stream-account artifact does not establish a new staff office, streaming role, bot-operator appointment, or appointment chronology for Gilli.",
  ]),
} as ExtendedCharacter;
characterById.set(allCharacters[gilliIndex].id, allCharacters[gilliIndex]);

// Wall: Ghoulie is the primary person; Baby Lyssa remains a legacy/display alias.
// The new material deepens taste, joke delivery, and low-ceremony Mugen rapport without
// turning one room lane into a role claim or a closeness ranking.
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
upsertRelationship(ghoulieRelationships, {
  name: "Mugen",
  note:
    "Mugen can casually ping Ghoulie toward VC with `hop in vc if you can owo`; Ghoulie later circles back and admits she saw the @ and was simply too lazy to answer until then. The funny part is the lack of ceremony: no elaborate excuse, just a candid confession that the notification absolutely reached her.",
  href: "/characters/mugen",
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
    "I saw the message @ me, I was just lazy and didn't answer till now",
  ]),
  claims: unique([
    ...(ghoulie.claims ?? []),
    "Ghoulie's surviving Wall voice is compact and reactive: a June 2021 accidental-mic self-own arrives in fragments, later reactions stay punchy, and she is comfortable joining an existing roast instead of merely watching it.",
    "Ghoulie explicitly says she likes Discord light mode and explains the preference in visibility terms: the full-screen redesign lets her see more clearly. This is a dated interface/taste preference, not a universal accessibility diagnosis.",
    "In a separate Wall exchange she calls a cleaned-up rewrite `Such mundane language`; Torr's `Thanks for the topic shift` reply preserves the same dry economy. The cumulative read is humor that can land in one short line and then move on.",
    "Ghoulie also participates directly in a 2022 roast pocket with lines including `you look like my pp` and `30 yo rusty spoon`, adding active humiliation-game participation to the quieter reaction-layer side of her Wall presence.",
    "When Mugen pings `hop in vc if you can owo`, Ghoulie later acknowledges the missed social beat with `I saw the message @ me, I was just lazy and didn't answer till now`. It is unusually clean personality texture: she does not manufacture a noble reason for the silence; she just admits she saw it and ignored it for a while.",
  ]),
  antiFanon: unique([
    ...(ghoulie.antiFanon ?? []),
    "The light-mode preference is Ghoulie's stated interface taste in the reviewed scene. Do not infer a medical condition or permanent accessibility need from it.",
    "Ghoulie's roast lines are participation in an existing joke pocket, not literal sexual/body claims, hostility, or a relationship rank.",
    "The Ghoulie↔Torr exchange supports room-level banter and timing; it does not establish exceptional closeness or a broader off-Wall relationship history.",
    "The Mugen↔Ghoulie VC ping supports casual familiarity and Ghoulie's candid response style; it is not a closeness ranking, romance claim, or evidence of a formal VC duty.",
    "Current/export role arrays are not used here to infer appointment chronology or formal duties.",
  ]),
} as ExtendedCharacter;
characterById.set(allCharacters[ghoulieIndex].id, allCharacters[ghoulieIndex]);
