import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

export const applyRun1547WallErysCast = (allCharacters: Character[]) => {
  const next: ArchiveCharacter = {
    id: "erys",
    name: "Erys",
    aliases: ["usedtolovesom"],
    billing: "minor",
    role: "Wall-era regular",
    era: "2020–2021+",
    logline: "Erys can get delighted enough to turn one reaction into a whole bit, then realize halfway through that she has personally become the exhibit. Loud enthusiasm and abrupt self-conscious retreat are both part of the same package.",
    tags: ["Wall", "Reaction escalation", "Callback fluency", "Self-conscious exits", "Petty Crimes"],
    stableDiscordIds: ["934054466463739914"],
    relationships: [
      {
        name: "Snow",
        href: "/characters/snow",
        note: "Erys can arrive openly delighted by something Snow has put in front of the room, take his teasing in stride for several beats, and then suddenly become aware of how enthusiastic she has been. The fun is the switch: Snow does not need to manufacture a new premise once Erys realizes she has become part of the bit.",
      },
      {
        name: "Miihi",
        note: "Miihi can puncture one of Erys's confident reads with a tiny correction — `you were wrong` — and get a full explanation plus comic frustration back. Their surviving exchange is compact but socially fluent: Miihi needs very few words to make Erys start narrating the miss herself.",
      },
      {
        name: "Nuggie",
        note: "Erys and Nuggie share enough old-joke fluency that a callback can be recognized as a callback and immediately made worse. Nuggie's `bringin back some old jokes` is less a history lecture than permission for Erys to keep escalating the nonsense.",
      },
    ],
    quotes: [
      "that's so embarrassing… ill go now",
      "dammit miihi",
    ],
    claims: [
      "Erys's surviving Wall voice repeatedly moves from animated reaction into escalation and then abrupt self-consciousness once the room has noticed her enthusiasm.",
      "Her exchanges with Snow, Miihi, and Nuggie show different versions of the same social reflex: she responds quickly to teasing, correction, and callbacks, often supplying enough extra context or absurdity to become part of the joke herself.",
    ],
    antiFanon: [
      "Erys's teasing exchanges with Snow, Miihi, Nuggie, and Leon do not establish romance, sex, exclusivity, or a formal closeness rank.",
      "A Wall screenshot Erys reposted establishes POSTED BY Erys only; it does not establish who made or captured the image or who appears in it.",
      "Do not reproduce sensitive race/ethnicity text visible inside that reposted screenshot on the public site.",
      "The latest surviving Wall row is not a departure date and does not establish that Erys left UL.",
    ],
  };

  const index = allCharacters.findIndex((character) => character.id === next.id);
  if (index < 0) allCharacters.push(next);
  else allCharacters[index] = { ...allCharacters[index], ...next };
};
