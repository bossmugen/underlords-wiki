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
// The reviewed tail deepens her self-aware Wall notoriety and the way recurring public
// teasing becomes an affectionate belonging language rather than a one-note victim gag.
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
  name: "Ren",
  note:
    "Ren repeatedly treats Ghoulie's Wall reputation as affectionate shared language: `Love u ghoulie UwU`, later `Ghoulie back to claim her wall`, then `Pls ghoulie is the Icon we need`. Ghoulie eventually asks whether all this filing is everyone's way of showing her love and answers the premise herself with `i love y’all too`. The recurring teasing lands as affection without becoming romance or a closeness ranking.",
  href: "/characters/ren",
});
upsertRelationship(ghoulieRelationships, {
  name: "Ansun",
  note:
    "In the March 2021 Wall pocket, Ansun/Sou challenges Ghoulie to outdo him in notoriety; she answers `wanna bet?`, he upgrades the premise to `our wall of FAME baby`, and she fires back `SHIII SAY LESS`. It is a bounded competitive co-conspirator bit, not a formal rivalry or relationship rank.",
  href: "/characters/ansun",
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
    "Wall resident jokes",
    "Affection through teasing",
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
    "At this point just name it Ghoulies wall of shame",
    "wanna bet?",
    "SHIII SAY LESS",
    "is this y’all’s way of showing me love???",
    "cause if that’s the case i love y’all too",
  ]),
  claims: unique([
    ...(ghoulie.claims ?? []),
    "Ghoulie's surviving Wall voice is compact and reactive: a June 2021 accidental-mic self-own arrives in fragments, later reactions stay punchy, and she is comfortable joining an existing roast instead of merely watching it.",
    "Ghoulie explicitly says she likes Discord light mode and explains the preference in visibility terms: the full-screen redesign lets her see more clearly. This is a dated interface/taste preference, not a universal accessibility diagnosis.",
    "In a separate Wall exchange she calls a cleaned-up rewrite `Such mundane language`; Torr's `Thanks for the topic shift` reply preserves the same dry economy. The cumulative read is humor that can land in one short line and then move on.",
    "Ghoulie also participates directly in a 2022 roast pocket with lines including `you look like my pp` and `30 yo rusty spoon`, adding active humiliation-game participation to the quieter reaction-layer side of her Wall presence.",
    "By March 2021 Ghoulie is self-aware enough about her Wall reputation to mock-cry and then propose `Ghoulies wall of shame`; when Ansun/Sou challenges her to outdo him, she answers `wanna bet?` and accepts the rebrand from shame to fame with `SHIII SAY LESS`. The theatrical victim pose and the appetite for the bit coexist.",
    "By late May, Ghostt, Mugen, and Hami independently joke that Ghoulie lives on the Wall or owes rent there. Ren later calls her return `back to claim her wall`. The repeated home/rent/return language makes her Wall-regular status a peer-recognized reputation, not literal residence or ownership.",
    "The affectionate undercurrent becomes explicit in July 2021: after Ren calls Ghoulie `the Icon we need`, Ghoulie asks `is this y’all’s way of showing me love???` and follows with `cause if that’s the case i love y’all too`. Around Ghoulie, recurring public filing can function as a social language of recognition and belonging rather than simple punishment.",
  ]),
  antiFanon: unique([
    ...(ghoulie.antiFanon ?? []),
    "The light-mode preference is Ghoulie's stated interface taste in the reviewed scene. Do not infer a medical condition or permanent accessibility need from it.",
    "Ghoulie's roast lines are participation in an existing joke pocket, not literal sexual/body claims, hostility, or a relationship rank.",
    "The Ghoulie↔Torr exchange supports room-level banter and timing; it does not establish exceptional closeness or a broader off-Wall relationship history.",
    "Wall-home, rent, ownership, and fame language around Ghoulie are recurring social jokes, not literal residence, channel ownership, governance, office, or appointment claims.",
    "Ren↔Ghoulie affection-through-teasing is directly supported, but it does not establish romance, exclusivity, or a closeness ranking. Ansun/Sou↔Ghoulie remains a bounded competitive Wall bit unless other material independently deepens it.",
    "Ren's July 2021 attachments remain uninspected and are POSTED BY Ren only; do not infer MADE BY, CAPTURED BY, FEATURING, or guild-icon provenance from the pixels or the word `Icon`.",
    "Current/export role arrays are not used here to infer appointment chronology or formal duties.",
  ]),
} as ExtendedCharacter;
characterById.set(allCharacters[ghoulieIndex].id, allCharacters[ghoulieIndex]);
