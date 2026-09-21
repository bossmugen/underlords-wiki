import "./integrator-identity-repair-run1501-cele";
import "./integrator-cast-run1505-louvre-nhou";
import "./integrator-cast-run1507-whiskey-anayss";
import "./integrator-cast-run1510-reviewed-tails";
import "./integrator-cast-run1521-whiskey-suzi";
import "./integrator-cast-run1544-whiskey-wolf-phenix";
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
    character.id === "chibiterasu" ||
    character.id === "chubi" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);

const chibiterasu: ExtendedCharacter = {
  id: "chibiterasu",
  name: "Chibiterasu",
  aliases: ["Chubi", "Chuubi", "Chibi", "Chuu~tan", "Chuutan", "Hannya", "chibiterasu"],
  billing: "recurring",
  role: "Game Officer · Parterre Gardener",
  era: "2020–2024+",
  logline:
    "Practical game-brain with a low-volume comic streak: Chibiterasu can sort clan logistics, account IDs, and Discord audio without making any of it ceremonial, then show up years later under `Chuu~tan` with exactly the same low-drama instinct for just being back in the room.",
  tags: [
    "Core rooms",
    "Games",
    "Game Officer",
    "Parterre Gardener",
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
      note: "In May 2020 Beo, then using JereGilgamesh, calls `Chuu~tan` and Chibiterasu answers immediately. The tiny exchange carries old-name familiarity without needing to become a friendship rank or a new role claim.",
    },
    {
      name: "Nobu",
      note: "During a PUBG Mobile pocket Chibiterasu offers to add Xuseio — Nobu's old name — while sorting account identifiers and clan obligations. Their surviving lane here is practical game coordination.",
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
    "Stable Discord account 559670680287969281 is Chibiterasu; Chubi / Chuubi / Chibi / Chuu~tan / Chuutan are names on the same person rather than same-name inference.",
    "Chibiterasu's hard public roles remain Game Officer and Parterre Gardener. Practical help, export-time role arrays, and onboarding scenes do not establish a new appointment chronology.",
    "Across 2020 Core Rooms, Chibiterasu repeatedly handles game logistics, clan obligations, account identifiers, VC/audio friction, weekend coordination, and short dry jokes without turning practical help into a formal-role performance.",
    "The reviewed 2022/2024 tail adds a low-drama return lane: the same stable account self-identifies as `chibiterasu` in March 2022, then is freshly welcomed in May 2024 and answers as `Chuu~tan`. The person-level continuity is easy re-entry and flexible self-presentation.",
  ],
  antiFanon: [
    "Do not replace Chibiterasu's locked Game Officer / Parterre Gardener roles with contextual labels such as `Core-room regular`.",
    "Do not infer appointment chronology from export-time role arrays, practical help, or onboarding behavior.",
    "The 2022/2024 welcome sequence does not establish an exact departure date, rejoin date, cause of absence, or uninterrupted membership.",
    "Do not merge unrelated Hannya-, Chibi-, Chuu-, or similarly named accounts without a direct identity bridge.",
  ],
};

if (existingIndex >= 0) {
  const current = allCharacters[existingIndex] as ExtendedCharacter;
  allCharacters[existingIndex] = {
    ...current,
    ...chibiterasu,
    // Primary identity and formal roles are hard canon locks here.
    id: "chibiterasu",
    name: "Chibiterasu",
    role: "Game Officer · Parterre Gardener",
    aliases: [...new Set([...(current.aliases ?? []), ...chibiterasu.aliases])],
    tags: [...new Set([...(current.tags ?? []), ...chibiterasu.tags])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), stableId])],
    relationships: [
      ...(current.relationships ?? []).filter(
        (relationship) => !chibiterasu.relationships.some((next) => next.name === relationship.name),
      ),
      ...chibiterasu.relationships,
    ],
    quotes: [...new Set([...(current.quotes ?? []), ...chibiterasu.quotes])],
    claims: [...new Set([...(current.claims ?? []), ...(chibiterasu.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(chibiterasu.antiFanon ?? [])])],
  } as ExtendedCharacter;
  characterById.delete(current.id);
  characterById.set("chibiterasu", allCharacters[existingIndex]);
} else {
  allCharacters.push(chibiterasu);
  characterById.set(chibiterasu.id, chibiterasu);
}
