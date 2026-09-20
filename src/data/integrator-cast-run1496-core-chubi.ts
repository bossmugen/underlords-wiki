import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const stableId = "559670680287969281";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === "chubi" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);

const chubi: ExtendedCharacter = {
  id: "chubi",
  name: "Chubi",
  aliases: ["Chibiterasu", "chibiterasu", "Chibi", "Chuu~tan", "Hannya"],
  billing: "recurring",
  role: "Core-room regular",
  era: "2020–2024+",
  logline:
    "Practical game-brain with a low-volume comic streak: Chubi can sort clan logistics, account IDs, and Discord audio without making any of it ceremonial, then show up years later under `Chuu~tan` with exactly the same low-drama instinct for just being back in the room.",
  tags: [
    "Core rooms",
    "Games",
    "Practical helper",
    "VC troubleshooting",
    "Dry humor",
    "Returns",
    "Petty Crimes",
  ],
  stableDiscordIds: [stableId],
  relationships: [
    {
      name: "Beo",
      note: "In May 2020 Beo, then using JereGilgamesh, calls `Chuu~tan` and Chubi answers immediately. The tiny exchange carries old-name familiarity without needing to become a friendship rank or role claim.",
    },
    {
      name: "Nobu",
      note: "During a PUBG Mobile pocket Chubi offers to add Xuseio — Nobu's old name — while sorting account identifiers and clan obligations. Their surviving lane here is practical game coordination.",
    },
  ],
  quotes: [
    "clan shiz",
    "i can",
    "welcome to my worl",
    "Hold on lemme finish getting ready... whats up?",
    "Chuu~tan, Underlords and I'm 25 :Cat_Drool:",
  ],
  claims: [
    "Stable Discord account 559670680287969281 is Chibiterasu / Chubi / Chuu~tan; the reviewed Core material ties those names to one account rather than a same-name inference.",
    "Across 2020 Core Rooms, Chubi repeatedly handles game logistics, clan obligations, account identifiers, VC/audio friction, weekend coordination, and short dry jokes without turning practical help into a formal role performance.",
    "The reviewed 2022/2024 tail adds a low-drama return lane: the same stable account self-identifies as `chibiterasu` in March 2022, then is freshly welcomed in May 2024 and answers as `Chuu~tan`. The person-level continuity is easy re-entry and flexible self-presentation.",
  ],
  antiFanon: [
    "Do not infer a formal role or appointment chronology from export-time role arrays, practical help, or onboarding behavior.",
    "The 2022/2024 welcome sequence does not establish an exact departure date, rejoin date, cause of absence, or uninterrupted membership.",
    "Do not merge unrelated Hannya-, Chibi-, Chuu-, or similarly named accounts without a direct identity bridge.",
  ],
};

if (existingIndex >= 0) {
  const current = allCharacters[existingIndex] as ExtendedCharacter;
  allCharacters[existingIndex] = {
    ...current,
    ...chubi,
    id: current.id,
    name: current.name,
    aliases: [...new Set([...(current.aliases ?? []), ...chubi.aliases])],
    tags: [...new Set([...(current.tags ?? []), ...chubi.tags])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), stableId])],
    relationships: [
      ...(current.relationships ?? []).filter(
        (relationship) => !chubi.relationships.some((next) => next.name === relationship.name),
      ),
      ...chubi.relationships,
    ],
    quotes: [...new Set([...(current.quotes ?? []), ...chubi.quotes])],
    claims: [...new Set([...(current.claims ?? []), ...(chubi.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(chubi.antiFanon ?? [])])],
  } as ExtendedCharacter;
  characterById.set(allCharacters[existingIndex].id, allCharacters[existingIndex]);
} else {
  allCharacters.push(chubi);
  characterById.set(chubi.id, chubi);
}
