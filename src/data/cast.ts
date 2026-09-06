import {
  allCharacters as baseCharacters,
  castGroups as baseGroups,
} from "./cast-base";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-base";

const hamitteyCharacter: Character = {
  id: "hamittey",
  name: "HamitteY",
  aliases: ["Glazed Ham"],
  billing: "legacy",
  role: "Historical Staff",
  era: "2020–2026+",
  logline: "Historical Staff, selective receipt goblin, dry QOTD sniper, and the woman who can turn Water into a saviour title while treating Screenshot Court like a personal filing cabinet.",
  tags: ["Historical Staff", "Archive cast", "QOTD", "Wall", "Petty Crimes"],
  relationships: [
    {
      name: "Aeshleen",
      note: "Aeshleen's surviving April 2020 introduction explicitly calls HamitteY a friend; that dates visible familiarity without pretending the scene is the friendship's origin.",
      href: "/characters/aeshleen",
    },
    {
      name: "ShiyaX",
      note: "Recurring receipt shorthand: Ham can reduce the case against ShiyaX to `cuz u do dis`, while Shiya is comfortable answering chaos allegations by promoting himself to `I AM THE CHAOS`.",
      href: "/characters/shiyax",
    },
  ],
  quotes: [
    "u like being poor, noted.",
    "As a water saviour, I believe in you.",
    "There is no Ham. Only the food the people asked for",
  ],
};

export const allCharacters: Character[] = baseCharacters.some((character) => character.id === hamitteyCharacter.id)
  ? [...baseCharacters]
  : [...baseCharacters, hamitteyCharacter];

export const castGroups = baseGroups.map((group) => {
  if (group.id !== "archive-cast" || group.characterIds.includes(hamitteyCharacter.id)) {
    return { ...group, characterIds: [...group.characterIds] };
  }
  return { ...group, characterIds: [...group.characterIds, hamitteyCharacter.id] };
});

export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
