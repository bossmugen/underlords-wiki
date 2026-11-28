import type { Character } from "./wiki";
import type { CastGroup } from "./cast-through-run1514";

type ArchiveCharacter = Character & { stableDiscordIds?: string[]; claims?: string[]; antiFanon?: string[] };

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

  const additions: ArchiveCharacter[] = [
    {
      id: "type-x",
      name: "Type-X",
      billing: "guest",
      role: "NightLife Photoshoot entrant",
      era: "2021",
      logline: "Type-X appears in the NightLife round with a captionless entry on October 11. The one clean fact is that the name made it into the contest.",
      tags: ["Photo Submissions", "NightLife", "Captionless entry", "2021"],
      stableDiscordIds: ["615280089541771359"],
      claims: ["Type-X posted a NightLife Magazine entry on 2021-10-11 (897041554089332737)."],
      antiFanon: ["One entry does not establish a wider personality or role.", "POSTED BY Type-X only; no image maker, capturer, or featured-person credit is assigned."]
    },
    {
      id: "mercy-display-name-2021",
      name: "Mërcy",
      billing: "guest",
      role: "Family Photoshoot entrant · displayed name only",
      era: "2021",
      logline: "The Family round has a November 8 entry under the displayed name Mërcy. One captionless appearance; no wider identity story is attached.",
      tags: ["Photo Submissions", "Family", "Captionless entry", "2021", "Display-name only"],
      claims: ["A Family-theme entry was posted on 2021-11-08 under the displayed name Mërcy (907472763281887304)."],
      antiFanon: ["Mërcy is preserved as a source-rendered display name; no stable account ID is normalized and no similar-name identity merge is made.", "POSTED BY only; no image maker, capturer, or featured-person credit is assigned."]
    }
  ];

  for (const addition of additions) {
    const existing = characters.findIndex((character) => character.id === addition.id);
    if (existing >= 0) {
      const current = characters[existing] as ArchiveCharacter;
      characters[existing] = {
        ...current,
        ...addition,
        tags: [...new Set([...(current.tags ?? []), ...(addition.tags ?? [])])]
      };
    } else {
      characters.push(addition);
    }
    if (!archiveGroup.characterIds.includes(addition.id)) archiveGroup.characterIds.push(addition.id);
  }
}
