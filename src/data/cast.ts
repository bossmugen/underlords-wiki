import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-through-run1514";
import { applyRun1515 } from "./cast-run1515";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-through-run1514";

export const allCharacters: Character[] = [...previousCharacters];

applyRun1515(allCharacters);

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
