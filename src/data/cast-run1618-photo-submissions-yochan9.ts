import type { Character } from "./wiki";
import type { CastGroup } from "./cast-through-run1514";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

export function applyRun1618PhotoSubmissionsYochan9(
  characters: Character[],
  groups: CastGroup[],
): void {
  const addition: ArchiveCharacter = {
    id: "yochan9",
    name: "YｏＣｈａｎ9",
    aliases: ["foxkanojo"],
    billing: "guest",
    role: "Photo Submissions entrant",
    era: "2021",
    logline: "Gabu opened SCARY with a dark, ominous prompt and a lighting warning; YｏＣｈａｎ9 answered with one photo and one tiny caption: 👀. The room supplied eleven GhostDance reactions.",
    tags: ["Photo Submissions", "SCARY", "2021", "One-emoji caption"],
    stableDiscordIds: ["835022648157143090"],
    claims: [
      "On 2021-10-19, stable account 835022648157143090 (foxkanojo / YｏＣｈａｎ9) posted the Scary entry with the entire caption 👀 (message 900196282289774612; attachment 900196281803231272).",
      "The Scary entry carried eleven GhostDance reactions; Gabu's opening prompt was message 900068070364684408.",
    ],
    antiFanon: [
      "One emoji-caption scene does not establish a permanent personality trait or habitual caption style.",
      "POSTED BY YｏＣｈａｎ9 only; image creator, photographer, and depicted subjects remain unresolved.",
      "GhostDance reactions are communal response, not a judging result or rank.",
      "The image has not been independently inspected; do not infer its composition, lighting, location, or subject.",
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
  if (!archiveGroup) throw new Error("Run 1618 expected the archive-cast group.");
  if (!archiveGroup.characterIds.includes("yochan9")) {
    archiveGroup.characterIds.push("yochan9");
  }
}
