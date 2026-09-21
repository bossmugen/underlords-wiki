import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertCharacter = (allCharacters: Character[], next: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) =>
      character.id === next.id ||
      next.stableDiscordIds?.some((stableId) =>
        (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
      ),
  );

  if (index < 0) {
    allCharacters.push(next);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationshipMap = new Map(
    [...(current.relationships ?? []), ...(next.relationships ?? [])].map((relationship) => [relationship.name, relationship]),
  );

  allCharacters[index] = {
    ...current,
    ...next,
    id: current.id,
    name: current.name,
    role: current.role,
    aliases: [...new Set([...(current.aliases ?? []), ...(next.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(next.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(next.stableDiscordIds ?? [])])],
    relationships: [...relationshipMap.values()],
    quotes: [...new Set([...(current.quotes ?? []), ...(next.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(next.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(next.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

export const applyRun1515 = (allCharacters: Character[]) => {
  // Whiskey / Wall / Photo Submissions: Miihi often trusts the visual and the room enough to leave the caption blank.
  upsertCharacter(allCharacters, {
    id: "miihi",
    name: "Miihi",
    aliases: ["Milk"],
    billing: "recurring",
    role: "Archive-era Whiskey / Wall regular",
    era: "2020–2021+",
    logline: "Visual-first and extremely comfortable with shared context: Miihi can post the exhibit with no caption at all, let the room explode around it, and use the people themselves as the entire caption when somebody specific needs dragging into frame.",
    tags: ["Whiskey", "Wall", "Photo Submissions", "Visual-first", "Shared-context call-ins", "Caption Budget: $0", "Petty Crimes"],
    stableDiscordIds: ["253897195290361856"],
    relationships: [
      {
        name: "Anayss",
        note: "Anayss can pull an older receipt back into circulation, call Miihi in with one word — `evidence` — and Miihi answers the Snow history without asking for the setup again: `dem snow.. what a ride h e h`. It is a clean little evidence-handoff / shared-context beat, not a closeness rank.",
        href: "/characters/anayss",
      },
    ],
    quotes: ["dem snow.. what a ride h e h", "LMFAOOOO"],
    claims: [
      "Across independent 2020–2021 Wall and Photo Submissions scenes, Miihi repeatedly posts media with an empty message body and lets the artifact plus the room's shared context carry the social act.",
      "When a destination matters, Miihi can keep the same low-caption style: one March 2021 media post uses only technical mentions for Mob/BAPE and Woohyuk instead of explaining the image.",
      "The Anayss `evidence` handoff supports modest shared-context fluency: Miihi recognizes the Snow-associated history and answers it without needing the old setup reconstructed.",
      "Miihi's media-bearing authored posts establish POSTED BY Miihi only; they do not automatically establish MADE BY, CAPTURED BY, or FEATURING.",
    ],
    antiFanon: [
      "Blank or tiny captions are a recurring visual-posting habit, not evidence that Miihi is shy, quiet, withdrawn, or generally nonverbal.",
      "The Mob/BAPE + Woohyuk call-in establishes who Miihi summoned, not what the unseen image depicts or what either relationship means beyond that scene.",
      "The Anayss evidence handoff is modest relationship texture, not proof of private closeness or a formal archive role.",
      "Earliest surviving visual-first examples are source boundaries, not an origin date for the habit.",
    ],
  } as ArchiveCharacter);
};
