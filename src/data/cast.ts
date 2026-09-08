import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre632";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-base";

export const allCharacters: Character[] = [...previousCharacters];

const roseIndex = allCharacters.findIndex((character) => character.id === "rose");
const roseRelationships = [
  {
    name: "Gilli",
    note: "Gilli recognizes `Rose` before Rose has re-supplied the later Lobby intake labels, then immediately moves into getting the role paperwork sorted. The person lands before the form does.",
    href: "/characters/gilli",
  },
  {
    name: "Mugen",
    note: "Daycare reads like easy existing familiarity rather than a formal reintroduction: Mugs can hit `@DarkAsrai hoiiiiiii`, Rose can tease the giant-headphones situation with `Lol crazy fool`, and ordinary catching-up includes Rose plainly saying she feels better than the last time they were hanging out.",
    href: "/characters/mugen",
  },
  {
    name: "Jan",
    note: "Jan teases Rose about getting `star struck` by the UL officers bunched up in Great Hall; Rose answers `I got star struck? Lol` and then `Ohhhh` when Jan explains. It is light peer teasing, not an officer-role claim for Rose.",
  },
  {
    name: "Moon",
    note: "Rose describes care as favorite food or a personalized wanted gift; in separate prompt-fiction answers, Rose and Moon independently put each other in the same botanical-garden kind of hangout with tea, snacks and gifts. Comfortable social imagination, not a literal outing.",
    href: "/characters/moon",
  },
];

const roseQuotes = [
  "I feel better than I did last time we were hanging out",
  "I've been home for a couple months but going back to working out helps a lot. I missed it...",
  "No need to apologize silly",
  "I got star struck? Lol",
  "Had to search my word document",
];

const roseCharacter: Character = {
  id: "rose",
  name: "Rose",
  aliases: ["Mochi", "DarkAsrai", "darkasrai"],
  billing: "legacy",
  role: "Historical Staff",
  era: "2021–2025+",
  logline: "Historical Staff whose chaos-goblin courtroom life sits beside a much softer ordinary register: Rose can turn up low-energy, say working out helps and she missed it, joke with Mugs and Jan, tell somebody `No need to apologize silly`, then still be the person who kept the QOTD source document months later and went back to fix the sequence.",
  tags: ["Historical Staff", "Archive cast", "Daycare", "Wall", "QOTD", "Ordinary life", "Supportive banter", "Follow-through", "Petty Crimes"],
  relationships: roseRelationships,
  quotes: roseQuotes,
};

if (roseIndex >= 0) {
  const rose = allCharacters[roseIndex];
  allCharacters[roseIndex] = {
    ...rose,
    ...roseCharacter,
    aliases: [...new Set([...(rose.aliases ?? []), ...roseCharacter.aliases!])],
    tags: [...new Set([...(rose.tags ?? []), ...roseCharacter.tags!])],
    relationships: roseRelationships,
    quotes: [...new Set([...(rose.quotes ?? []), ...roseQuotes])],
  };
} else {
  allCharacters.push(roseCharacter);
}

export const castGroups = previousGroups.map((group) => ({
  ...group,
  characterIds: [...group.characterIds],
}));

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes("rose")) {
  archiveCastGroup.characterIds.push("rose");
}

export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
