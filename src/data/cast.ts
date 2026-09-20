import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1440b";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1440b";

export const allCharacters: Character[] = [...previousCharacters];

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: Array<{ name: string; note: string; href?: string }>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const mergeCharacter = (candidate: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) => character.id === candidate.id ||
      candidate.stableDiscordIds?.some((stableId) => (character as ArchiveCharacter).stableDiscordIds?.includes(stableId)),
  );
  if (index < 0) {
    allCharacters.push(candidate);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of candidate.relationships ?? []) {
    upsertRelationship(relationships, relationship.name, relationship.note, relationship.href);
  }

  allCharacters[index] = {
    ...current,
    ...candidate,
    aliases: [...new Set([...(current.aliases ?? []), ...(candidate.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(candidate.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(candidate.stableDiscordIds ?? [])])],
    relationships,
    quotes: [...new Set([...(current.quotes ?? []), ...(candidate.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(candidate.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(candidate.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

// Run 1440 late Wall tail: Rotini files the case from the back row and would strongly prefer not to become Exhibit A.
mergeCharacter({
  id: "rotini-lm",
  name: "RotiniLM",
  aliases: ["rotinilm"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2022–2024+",
  logline: "A self-described lurker who keeps somehow producing receipts: Rotini can file `One more-`, follow with `Sorry not sorry`, and then answer a direct nomination for center-stage duty with the wonderfully immediate `Nah I'm good`. The jokes look chaotic; the person underneath them is practical enough to have already blocked the strangers Sou is worried about.",
  tags: ["Archive cast", "Wall", "Receipt curator", "Spotlight dodger", "Practical boundaries", "Dry humor", "Petty Crimes"],
  stableDiscordIds: ["531215677978312716"],
  relationships: [
    { name: "Ansun", note: "After Rotini posts `Chats with strangers`, Sou/Ansun true-replies with a pat-pat, `bb`, and practical advice to block them. Rotini answers `I did dont worry` plus a heart. The scene is protective check-in → reassurance/affectionate return; importantly, Rotini had already handled the boundary before being told to.", href: "/characters/ansun" },
    { name: "Mugen", note: "Mugen can answer a Rotini filing with `Pasta said reverse card`, and later Rotini true-replies Mugen with `This is what you miss when you're gone send help`. Their surviving lane is receipt-joke / chaos-catch-up familiarity, not a closeness rank.", href: "/characters/mugen" },
    { name: "Daya", note: "Daya directly summons Rotini and Snow; Rotini replies `SHH EVERYTHING'S FINE`, Daya escalates with an FBI-open-up GIF, and Rotini answers with a heart. It is direct-summon / mock-denial escalation without any need to identify the preceding media subjects.", href: "/characters/daya" },
  ],
  quotes: [
    "Just lurking the WC:R_stare:",
    "One more-",
    "Sorry not sorry",
    "Nah I'm good",
    "I did dont worry :Raja_Heart:",
    "SHH EVERYTHING'S FINE",
  ],
  claims: [
    "Stable Discord account 531215677978312716 is RotiniLM / rotinilm in the reviewed Wall footprint.",
    "Rotini repeatedly frames receipt filing as casual background behavior — `Just lurking`, `One more-`, `Sorry not sorry` — while directly declining the same Wall spotlight when somebody says it is their turn to be center of attention.",
    "The June 2022 Sou exchange adds a practical counterweight to the chaos presentation: Rotini says they had already blocked the strangers before reassuring Sou not to worry.",
    "Across 2022–2024, Rotini's strongest continuity is not a forced arc but a stable social mechanism: observe, file, joke, and dodge the center seat when the camera turns around.",
  ],
  antiFanon: [
    "`WC` remains unresolved and must not be expanded by guess.",
    "Rotini's Wall attachments establish POSTED BY Rotini where applicable; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved without independent media evidence.",
    "The Sou/Ansun, Mugen, and Daya lanes are bounded social familiarity, not friendship ranks, romance, family, or governance hierarchy.",
    "The Jan. 24, 2022 and Jan. 3, 2024 messages are surviving boundaries in this reviewed Wall footprint, not origin/departure dates.",
    "The pooled Deleted User who nominates Rotini for center-of-attention duty remains pooled and unresolved.",
  ],
});

const ansunRotiniIndex = allCharacters.findIndex((character) => character.id === "ansun");
if (ansunRotiniIndex >= 0) {
  const ansun = allCharacters[ansunRotiniIndex] as ArchiveCharacter;
  const relationships = [...(ansun.relationships ?? [])];
  upsertRelationship(relationships, "RotiniLM", "Sou/Ansun sees Rotini's stranger-chat filing and immediately turns the reaction into practical care: pat-pat, `bb`, and block-them advice. Rotini says it is already handled and returns the warmth with a heart. It is care shorthand plus competence, not rescue drama.", "/characters/rotini-lm");
  allCharacters[ansunRotiniIndex] = { ...ansun, relationships } as ArchiveCharacter;
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
