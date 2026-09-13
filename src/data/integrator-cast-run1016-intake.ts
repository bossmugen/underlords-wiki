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
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = current.note.includes(incoming.note)
      ? current
      : { ...current, note: `${current.note} ${incoming.note}` };
  } else {
    relationships.push(incoming);
  }
};

// BIRTHDAYS / PR / VC — Snow
// August 31 is a public birthday-guessing scene, not Snow's actual birthday.
const snowIndex = allCharacters.findIndex((character) => character.id === "snow");
if (snowIndex < 0) {
  throw new Error("Run 1016 expected canonical Snow owner.");
}

const snow = allCharacters[snowIndex] as ExtendedCharacter;
const snowRelationships = [...(snow.relationships ?? [])];
upsertRelationship(snowRelationships, {
  name: "Mugen",
  note:
    "Snow gives Mugen just enough birthday information to keep the room moving without surrendering the date: `not yet but this month hehe ^_^`, then `Libra I am very judgey cant you tell by now`. Mugen answers by opening `Snow's BIRTHDAY BETS`, reposting the ledger, and turning the uncertainty itself into programming.",
  href: "/characters/mugen",
});

allCharacters[snowIndex] = {
  ...snow,
  tags: appendUnique(snow.tags, ["Birthday bets", "Selective disclosure"]),
  relationships: snowRelationships,
  quotes: appendUnique(snow.quotes, [
    "not yet but this month hehe ^_^",
    "Libra I am very judgey cant you tell by now",
  ]),
  claims: appendUnique(snow.claims, [
    "On August 31, 2020 Mugen wished Snow happy birthday; Snow answered that it was not yet his birthday but was that month. Rooks proposed saying happy birthday every day until the room got it right. Snow offered `Libra I am very judgey cant you tell by now`; Mugen immediately turned the clue into `Snow's BIRTHDAY BETS`, later reposting an expanded September 22–October 22 ledger with @here.",
    "The birthday-bets ledger is visibly fallible inside the scene: Mugen records Rooks on September 25, Rooks corrects the guess to the 26th, and Mugen answers `oh shiet` / `mb`. A later `HAPPY BIRTHDAY @Snow` announcement continues the guessing ritual after the August 31 greeting had already been rejected.",
    "Snow also suggests making a birthday page; Mugen says Anthos had mentioned the idea earlier and that it was already on her forgotten list. The exchange supports pre-existing planning around a birthday page, not a clean origin or implementation date.",
  ]),
  antiFanon: appendUnique(snow.antiFanon, [
    "The August 31 birthday greeting and later birthday-bets guesses do not establish Snow's actual birthday. The surviving scene only narrows the joke to Snow's own Libra clue and the room's guesses.",
    "The birthday-page exchange is planning history. Snow's suggestion does not establish origin because Mugen explicitly says Anthos had already raised the idea, and the pocket does not establish when or whether a page was implemented.",
  ]),
} as ExtendedCharacter;
characterById.set("snow", allCharacters[snowIndex]);

// DAYCARE + WALL support — Meowk
// Stable account 264889543365230614. The March 13 `i` / `saw` / `all` beat
// belongs here, not to Alkey. Run 843 already separated the two owners; this
// pass repairs the remaining public episode attribution and deepens Meowk.
const meowkIndex = allCharacters.findIndex((character) => character.id === "meowk");
if (meowkIndex < 0) {
  throw new Error("Run 1016 expected canonical Meowk owner after Run 843 repair.");
}

const meowk = allCharacters[meowkIndex] as ExtendedCharacter;
const meowkRelationships = [...(meowk.relationships ?? [])];
upsertRelationship(meowkRelationships, {
  name: "Ghoulie",
  note:
    "Meowk can play the witness against Ghoulie/Baby Lyssa with almost no explanation: tag her with `:KEKW:`, then answer `you saw nothing` by dropping `i` / `saw` / `all` across three messages. The joke is the timing and the certainty; Meowk does not need to narrate the alleged crime for the room to understand the ambush.",
  href: "/characters/baby-lyssa",
});

allCharacters[meowkIndex] = {
  ...meowk,
  logline:
    "A tiny-verdict witness who is equally good at becoming the room's target: Meowk can walk into somebody else's chaos with `Ayo wtf goin’ on in here`, slow-release `i` / `saw` / `all`, then get cute-cast themself and protest `You all suck` while everybody treats the complaint as fresh fuel.",
  tags: appendUnique(meowk.tags, ["Witness timing", "Reciprocal embarrassment", "Ghoulie"]),
  relationships: meowkRelationships,
  quotes: appendUnique(meowk.quotes, [
    "Ayo wtf goin’ on in here",
    "i",
    "saw",
    "all",
  ]),
  claims: appendUnique(meowk.claims, [
    "Stable-account reconciliation assigns the March 13, 2021 Wall sequence `i` / `saw` / `all` to Meowk (account 264889543365230614), not Alkey. Ghoulie/Baby Lyssa writes `you saw nothing`; Rooks answers `I SAW IT`; Meowk delivers the three-word witness statement over 1.725 seconds.",
    "The broader support-room pattern is reciprocal embarrassment: Meowk can arrive as the concise witness/sniper (`Ayo wtf goin’ on in here`; `i` / `saw` / `all`) and can also become the satisfying target whose `You all suck :myv_Reeeeee:` protest makes Ren and Mugen extend the cute/blushing pile-on instead of ending it.",
  ]),
  antiFanon: appendUnique(meowk.antiFanon, [
    "The March 13 `i` / `saw` / `all` sequence belongs to Meowk's stable account, not Alkey. Do not restore the older Alkey attribution.",
    "The Ghoulie/Baby Lyssa witness bit and the Ren/Mugen cute-casting scenes support low-friction reciprocal teasing. They do not establish romance, literal family, bullying, or a closeness ranking.",
    "Meowk's 2025 Wall presence in the current Daycare support packet is reaction-only. Do not turn reaction metadata into authored dialogue or a narrated return scene.",
  ]),
} as ExtendedCharacter;
characterById.set("meowk", allCharacters[meowkIndex]);
