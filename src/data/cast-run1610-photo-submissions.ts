import type { Character } from "./wiki";
import type { CastGroup } from "./cast-through-run1514";

export function applyRun1610PhotoSubmissionsCast(
  characters: Character[],
  groups: CastGroup[],
): void {
  const id = "confident-kitten-50951";
  const existingIndex = characters.findIndex((character) => character.id === id);
  const addition: Character = {
    id,
    name: "confident_kitten_50951",
    billing: "guest",
    role: "Photo Submissions entrant",
    era: "2021",
    logline: "The displayed handle appears for MAFIA, then returns for BEACH. Both entries are captionless; the repeat is the story.",
    tags: ["Photo Submissions", "MAFIA", "BEACH", "Captionless entries"],
  };

  if (existingIndex >= 0) {
    characters[existingIndex] = {
      ...characters[existingIndex],
      ...addition,
      tags: [...new Set([...(characters[existingIndex].tags ?? []), ...(addition.tags ?? [])])],
    };
  } else {
    characters.push(addition);
  }

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (!archiveGroup) throw new Error("Run 1610 expected the archive-cast group.");
  if (!archiveGroup.characterIds.includes(id)) archiveGroup.characterIds.push(id);
}
