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

  // Wall: Ten keeps forgetting the room records everything, then turns that embarrassment into her own running legacy bit.
  upsertCharacter(allCharacters, {
    id: "ten",
    name: "Ten!",
    aliases: ["dripsy_gk"],
    billing: "minor",
    role: "Wall regular",
    era: "2020+",
    logline: "Sparse in the room but weirdly grand about the receipts that survive her: Ten can forget Wall is recording everybody, sweat about it, and thirty-five seconds later decide the embarrassment is apparently her legacy.",
    tags: ["Wall", "Receipt self-awareness", "Legacy bit", "Compact reactions", "Petty Crimes"],
    stableDiscordIds: ["225809160460173312"],
    relationships: [],
    quotes: [
      "i keep forgetting y'all record these :mochi_sweat:",
      "at least i'll leave some kind of legacy i guess",
      "i'm leaving a legacy here too apparently. i only hope my heir lives up to this.",
      "h y d r a t e",
    ],
    claims: [
      "Ten's exact surviving Wall footprint is fourteen authored messages and no direct attachment objects from August through September 2020.",
      "Her `legacy` language recurs: she first turns the embarrassment of being recorded into a legacy joke, then later extends it to an `heir`, making the self-mythology a callback rather than a one-line accident.",
      "Her Wall voice is otherwise compact and reactive — tiny lines and emotes such as `:oop:`, `:HELP:`, `jesus`, `Drop em`, and `h y d r a t e` — which makes the grand legacy framing funnier by contrast.",
      "The Wall slice supports Ten's own words and room participation only; it does not establish media authorship because no direct attachment object survives under her authorship there.",
    ],
    antiFanon: [
      "`heir` is joke continuity, not literal family, succession, inheritance, appointment history, or governance.",
      "A nearby Ren `XD` and final-state Mugen/Anthos reactions are local reception texture, not relationship rank; reaction timing is not preserved.",
      "`h y d r a t e` is a tiny command-style hydration nudge, not evidence of a formal care role or a specific target.",
      "The earliest surviving `legacy` line in Wall is not guaranteed to be the true origin of the bit.",
    ],
  } as ArchiveCharacter);
};
