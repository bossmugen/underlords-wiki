import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);
const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

const replaceCharacter = (index: number, character: ExtendedCharacter) => {
  allCharacters[index] = character;
  characterById.set(character.id, character);
};

// Baby Lyssa is the user-confirmed Ghoulie person. The supporting Wall scene adds
// a useful contradiction: she can be the aggrieved target and still help write the
// next round of the joke instead of withdrawing from it.
const ghoulieIndex = allCharacters.findIndex(
  (character) =>
    character.id === "ghoulie" ||
    character.id === "baby-lyssa" ||
    character.name === "Ghoulie" ||
    character.name === "Baby Lyssa",
);
if (ghoulieIndex < 0) {
  throw new Error("Run 917 expected canonical Ghoulie / Baby Lyssa owner");
}
const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
const ghoulieRelationships = [...(ghoulie.relationships ?? [])];
upsertRelationship(
  ghoulieRelationships,
  "Gabu",
  "A Wall filing can make Ghoulie yell `WHY` and declare `it’s official, this is my wall`; Gabu turns the scene into an absurd people-eating premise, and Ghoulie is almost immediately helping write the fake menu with `but have you ever had them grilled?`, `covered in bbq sauce`, and `i like mines done medium rare`. She does not leave because she became the target. She returns the serve and makes the bit more specific.",
  "fake menu",
  "/characters/gabu",
);
replaceCharacter(ghoulieIndex, {
  ...ghoulie,
  name: "Ghoulie",
  aliases: appendUnique(ghoulie.aliases, ["Baby Lyssa"]),
  logline: appendOnce(
    ghoulie.logline,
    "Her Wall notoriety is participatory: mock outrage can become a fake menu in under a minute, and being filed is apparently no reason to stop helping the room make the joke worse.",
    "fake menu",
  ),
  tags: appendUnique(ghoulie.tags, ["Wall coauthor", "Shared-bit follow-through", "Petty Crimes"]),
  relationships: ghoulieRelationships,
  quotes: appendUnique(ghoulie.quotes, [
    "it’s official, this is my wall",
    "but have you ever had them grilled?",
    "covered in bbq sauce",
    "i like mines done medium rare",
    "don’t eat the deal pls",
    "he good sea doggo",
  ]),
  claims: appendUnique(ghoulie.claims, [
    "User-confirmed canon resolves Baby Lyssa as Ghoulie. In this April 28, 2021 supporting Wall scene the Baby Lyssa rendering is stable account 537786238665621504; that anchors this scene without requiring every historical Ghoulie source to use one Discord account.",
    "On April 28, 2021 Ghoulie/Baby Lyssa moves from `WHY` and `it’s official, this is my wall` into a rapid shared joke with Gabu: `but have you ever had them grilled?`, `covered in bbq sauce`, and `i like mines done medium rare`. Roughly twenty-two minutes later Cookie's hunger comment is enough for Ghoulie to revive the thread and mock-protect Gabu's sea-lion GIF.",
  ]),
  antiFanon: appendUnique(ghoulie.antiFanon, [
    "The April 28 people-eating language is an absurd cannibalism/zombie joke sequence. `grilled`, `bbq sauce`, and `medium rare` are not literal food preferences, threats, or real-world conduct.",
    "This Run 917 Ghoulie deepening comes from a supporting Wall scene while the direct Daycare source remains unavailable; do not relabel it as Daycare-direct evidence.",
  ]),
} as ExtendedCharacter);

// Booba already had the delayed Wall receipt. The Lobby scene adds how the same
// low-volume person enters a room: playful enough that Gabu checks whether he has
// accidentally welcomed a bot, then socially fluent enough to continue the form.
const boobaIndex = allCharacters.findIndex((character) => character.id === "booba");
if (boobaIndex < 0) throw new Error("Run 917 expected canonical Booba owner");
const booba = allCharacters[boobaIndex] as ExtendedCharacter;
replaceCharacter(boobaIndex, {
  ...booba,
  logline: appendOnce(
    booba.logline,
    "The same low-volume style is already visible on arrival: enough `SOBS` / `WAAAH` energy for Gabu to stop and ask whether he is welcoming a bot, then a month later one casual `Oh I forgot to share this one` receipt lands hard enough for the room to wheeze at it.",
    "welcoming a bot",
  ),
  tags: appendUnique(booba.tags, ["Lobby", "Playful onboarding", "Low-volume / high-hit"]),
  claims: appendUnique(booba.claims, [
    "Stable account 199399438391705600 is the same Booba / MsThiccy source across the August 6, 2022 Lobby intake and September 5 Wall receipt. The direct Daycare ledger has one March 22, 2023 row, but its body is unavailable and is not reconstructed.",
    "On August 6, 2022 Gabu greets Booba and then asks `_pls... I'm not welcoming a bot right?_`; Booba answers the intake prompt through `SOBS` / `:WAAAH:` reaction language before the normal route handoff.",
  ]),
  antiFanon: appendUnique(booba.antiFanon, [
    "The Lobby plus Wall continuity supports a thin person-shaped social read, not join chronology, bot identity, role appointment, or a claim about Booba's overall activity level.",
  ]),
} as ExtendedCharacter);

// ShiyaX's existing file already owns the self-roast/follow-through and care axes.
// Wall adds a different contradiction: socially unserious delivery attached to a
// very practical instinct for moving ongoing chatter to the room where it belongs.
const shiyaIndex = allCharacters.findIndex((character) => character.id === "shiyax");
if (shiyaIndex < 0) throw new Error("Run 917 expected canonical ShiyaX owner");
const shiya = allCharacters[shiyaIndex] as ExtendedCharacter;
replaceCharacter(shiyaIndex, {
  ...shiya,
  logline: appendOnce(
    shiya.logline,
    "He can also be unexpectedly orderly about everybody else’s chaos: when Wall chatter turns into ongoing conversation, Shiya’s instinct is `Take it to #🥃💬｜whiskey-room guys` or, six months later, the less diplomatic `get your arse to whiskey`.",
    "unexpectedly orderly",
  ),
  tags: appendUnique(shiya.tags, ["Room corraller", "Whiskey redirects", "Informal social housekeeping"]),
  quotes: appendUnique(shiya.quotes, [
    "Take it to #🥃💬｜whiskey-room guys",
    "get your arse to whiskey",
  ]),
  claims: appendUnique(shiya.claims, [
    "On March 13, 2021 ShiyaX tells the Wall `Take it to #🥃💬｜whiskey-room guys`; on September 15 he tells a pooled Deleted User `get your arse to whiskey`, with Erys linking the Whiskey channel three seconds later. Six months apart, the recurring behavior supports informal room-corralling rather than a one-off command.",
  ]),
  antiFanon: appendUnique(shiya.antiFanon, [
    "ShiyaX's recurring Whiskey redirects support informal social housekeeping only. They do not establish moderator, Staff, or officer status; appointment chronology; policy authority; or assigned channel-management responsibility.",
    "The September 2021 redirect targets pooled Deleted User 538699940059480087; do not infer a specific relationship or identity from that imperative.",
  ]),
} as ExtendedCharacter);

// Pride's recurring lost-body joke becomes more person-shaped once he is visible
// laughing inside it rather than existing only as the absent corpse people discuss.
const prideIndex = allCharacters.findIndex((character) => character.id === "pride");
if (prideIndex >= 0) {
  const pride = allCharacters[prideIndex] as ExtendedCharacter;
  const prideRelationships = [...(pride.relationships ?? [])];
  upsertRelationship(
    prideRelationships,
    "Euros",
    "Euros remembers repeatedly reading `we've lost Pride's body` in Club Chat; Pride's answer in the Wall pocket is `@Euros bruh`, then `lmfao` and `Aahahahaha`. He is not merely the subject of the old joke. He recognizes it and laughs from inside it.",
    "we've lost Pride's body",
    "/characters/illien",
  );
  upsertRelationship(
    prideRelationships,
    "Ren",
    "When the lost-Pride-body memory resurfaces, Ren immediately adds `I had to make an amber alert` and `For a lost CORPSE`. Pride is already laughing in the same pocket, so the recurring body joke reads as shared callback material rather than a story happening only around him.",
    "amber alert",
    "/characters/ren",
  );
  replaceCharacter(prideIndex, {
    ...pride,
    logline: appendOnce(
      pride.logline,
      "One of the old recurring jokes literally misplaces his body, and Pride’s contribution is not outrage so much as `bruh` followed by laughter while everybody else upgrades the missing-person search to an Amber Alert for a corpse.",
      "misplaces his body",
    ),
    tags: appendUnique(pride.tags, ["Recurring callback target", "Laughs inside the bit", "Petty Crimes"]),
    relationships: prideRelationships,
    quotes: appendUnique(pride.quotes, ["@Euros bruh", "lmfao", "Aahahahaha"]),
    claims: appendUnique(pride.claims, [
      "On November 4, 2020 Euros says a GIF reminded him of every time he read `we've lost Pride's body` on Club Chat; Pride responds in the same local pocket with `@Euros bruh`, `lmfao`, `Aahahahaha`, and a laugh emote before Ren adds the Amber Alert / lost-corpse punchline.",
      "A September 7, 2020 Ren filing says `Pride bout to kill us for bodies UwU`, and a December 29 Ren callback says Pride had threatened to make them into corpses. These are probable recurring-lore neighbors, but the uninspected attachments do not establish that September and December are the same incident.",
    ]),
    antiFanon: appendUnique(pride.antiFanon, [
      "Pride's lost-body / corpse material is recurring nonliteral group humor, not death, violence, disappearance, or threat canon.",
      "November 2020 participant memory says the line was seen repeatedly in Club Chat, but the direct source-room origin remains open. Earliest surviving Wall support is not guaranteed origin.",
      "The September and December Pride/body attachments are POSTED BY Ren and remain visually uninspected; do not merge the scenes or infer MADE BY / CAPTURED BY / FEATURING from semantic similarity alone.",
    ]),
  } as ExtendedCharacter);
}

// This module intentionally exports no Episode. It is person-first dossier work;
// all reader changes happen through canonical Cast owners above.
export const run917PersonDeepening = [];
