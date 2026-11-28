import type { Character } from "./wiki";
import type { CastGroup } from "./cast-through-run1514";

type ArchiveCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

export function applyRun1615PhotoSubmissionsGrimlee(
  characters: Character[],
  groups: CastGroup[],
): void {
  const addition: ArchiveCharacter = {
    id: "grimlee",
    name: "Grimlee",
    aliases: ["father.grim"],
    billing: "guest",
    role: "Photo Submissions entrant",
    era: "2021",
    logline: "Four rounds from July to December 2021; the captions stay blank, but Grimlee keeps showing up.",
    tags: [
      "Photo Submissions",
      "Waltz",
      "Dusk til Dawn",
      "Popstar",
      "Winter",
      "Repeat entrant",
    ],
    claims: [
      "The father.grim handle posted 2021 entries in Waltz (864030989507624960), Dusk til Dawn (872752786582937600), Popstar (878410496716443678), and Winter (917748209730875403).",
    ],
    antiFanon: [
      "The current handoff does not normalize a stable numeric Discord account ID; father.grim is preserved as a handle alias only.",
      "Blank captions are a feature of these four entries, not a personality diagnosis.",
      "POSTED BY Grimlee only; image maker, capturer, and depicted-person credits are not assigned.",
    ],
  };

  const existingIndex = characters.findIndex((character) => character.id === addition.id);
  if (existingIndex >= 0) {
    const current = characters[existingIndex] as ArchiveCharacter;
    characters[existingIndex] = {
      ...current,
      ...addition,
      aliases: [...new Set([...(current.aliases ?? []), ...(addition.aliases ?? [])])],
      tags: [...new Set([...(current.tags ?? []), ...(addition.tags ?? [])])],
      claims: [...new Set([...(current.claims ?? []), ...(addition.claims ?? [])])],
      antiFanon: [...new Set([...(current.antiFanon ?? []), ...(addition.antiFanon ?? [])])],
    };
  } else {
    characters.push(addition);
  }

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (!archiveGroup) throw new Error("Run 1615 expected the archive-cast group.");
  if (!archiveGroup.characterIds.includes("grimlee")) {
    archiveGroup.characterIds.push("grimlee");
  }
}
