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

const porgoCharacter: Character = {
  id: "porgo",
  name: "porgo!",
  aliases: ["p0rg0"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2022",
  logline: "Self-prosecuting Wall gremlin who brings their own evidence, reacts like it has poisoned them, and can turn toe jam into peach-flavored cuisine in three lines.",
  tags: ["Archive cast", "2022", "Wall", "Screenshot Court", "Petty Crimes"],
  relationships: [
    {
      name: "Daya",
      note: "Daya repeatedly meets porgo's self-inflicted embarrassment in playful-support mode: a pat on the first self-filing, `what flavor?` in the toe-jam thread, and `let it out!!` after porgo announces imminent vomiting.",
      href: "/characters/daya",
    },
  ],
  quotes: [
    "putting myself up here cause im very mad at myself",
    "cuisine",
    "peach :Cat_Drool:",
    "im exposing myself",
    "im gona vomit",
  ],
};

const supplementalCharacters = [hamitteyCharacter, porgoCharacter];

export const allCharacters: Character[] = [...baseCharacters];
for (const character of supplementalCharacters) {
  if (!allCharacters.some((existing) => existing.id === character.id)) allCharacters.push(character);
}

export const castGroups = baseGroups.map((group) => {
  if (group.id !== "archive-cast") return { ...group, characterIds: [...group.characterIds] };
  const characterIds = [...group.characterIds];
  for (const character of supplementalCharacters) {
    if (!characterIds.includes(character.id)) characterIds.push(character.id);
  }
  return { ...group, characterIds };
});

export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
