import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertCharacter = (seed: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === seed.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      ...seed,
      aliases: unique([...(current.aliases ?? []), ...(seed.aliases ?? [])]),
      tags: unique([...(current.tags ?? []), ...(seed.tags ?? [])]),
      relationships: [...(current.relationships ?? []), ...(seed.relationships ?? [])],
      quotes: unique([...(current.quotes ?? []), ...(seed.quotes ?? [])]),
      claims: unique([...(current.claims ?? []), ...(seed.claims ?? [])]),
      antiFanon: unique([...(current.antiFanon ?? []), ...(seed.antiFanon ?? [])]),
    } as ExtendedCharacter;
  } else {
    allCharacters.push(seed);
  }

  const character = allCharacters.find((candidate) => candidate.id === seed.id)!;
  characterById.set(seed.id, character);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(seed.id)) {
    archiveCastGroup.characterIds.push(seed.id);
  }
};

// Whiskey longitudinal late tail, routed through clean Lobby + Club Only primary
// objects: Annie/Kuwei's person-shape is compact presence with disproportionate
// relational return. Do not flatten sparse direct prose into "quiet".
upsertCharacter({
  id: "annie-kuwei",
  name: "Annie",
  aliases: ["Kuwei", "annie6690"],
  billing: "guest",
  role: "Archive-era extended cast",
  era: "2020–2021+",
  logline:
    "Annie, better known as Kuwei in the earlier rooms, has a funny little social superpower: she can put almost nothing on the table and still get answered like she put her whole coat down. A `Morninnn`, a tiny compliment, a room-wide `Gunni everyone`—the lines are small, but people keep selecting her back out of the crowd. Gabu replies by name, Anthos sends her off with `sleep well bb ~`, Mugen circles back with `gunni Wei`, and Annie is not just soaking up the affection either. When Gabu tries to inherit somebody else's cuteness, she fires it straight back at him: `No you're cuter ʕっ•ᴥ•ʔっ`. Compact footprint, extremely sticky return.",
  tags: [
    "Archive cast",
    "Club Only",
    "Compact social bids",
    "Warm reciprocity",
    "2020–2021",
  ],
  relationships: [
    {
      name: "Gabu",
      note:
        "Their surviving H1 2021 rhythm is easy and soft without needing a grand label. Annie redirects a compliment onto Gabu in May; in June, when she says goodnight to everyone, Gabu replies directly to her exact message with `Nini kuweiii`. Two separate scenes give them a familiar little compliment-and-sendoff lane where affection moves both ways.",
    },
  ],
  quotes: [
    "Morninnn",
    "He do be cute",
    "No you're cuter ʕっ•ᴥ•ʔっ",
    "Gunni everyone :6650318696617083371: :718487617783726080:",
  ],
  claims: [
    "The same stable Discord account is rendered as Kuwei in reviewed 2020–H1 2021 Lobby/Club Only material and as Annie in later Photo Submissions source objects; exact nickname-change chronology remains unresolved.",
    "Across the reviewed slices, Annie/Kuwei's compact social bids repeatedly draw individualized responses, including three personalized returns to the same June 15, 2021 room-wide goodnight from Gabu, Anthos, and Mugen.",
    "The May 15, 2021 Gabu exchange matters because Annie actively returns and escalates the warmth instead of merely receiving it.",
    "The useful contradiction is compact verbal footprint / high relational return. Sparse surviving prose does not justify calling her shy, withdrawn, introverted, or universally low-volume.",
  ],
  antiFanon: [
    "Nearby `dad` / `horse kun` language is joke-family material and does not establish literal kinship.",
    "The Gabu lane supports familiar affectionate comfort, not a romance or sex claim.",
    "Exporter/current Staff role arrays do not establish Annie/Kuwei's appointment chronology or lived role behavior.",
    "No provenance-safe Annie/Kuwei-authored Whiskey row surfaced through the current readable/indexed layer. That is a source-routing limitation, not evidence that she never spoke in Whiskey.",
    "The exact date and reason Kuwei began appearing as Annie are unresolved; do not infer them from exporter/current snapshots.",
  ],
} as ExtendedCharacter);
