import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// MAIN canon owns the public identity: Moon is the canonical display name and
// UL Night Shift Barista is the locked specialist title. The Wall handoff adds
// character texture to that one existing person; it does not create Moon II.
const moonId = "moon";
const moonIndex = allCharacters.findIndex(
  (character) =>
    character.id === moonId ||
    character.name === "Moon" ||
    character.name === "Moon久方" ||
    (character.aliases ?? []).some((alias) =>
      ["Moon久方", "Moon", "_marrrmarrr__", "_m__a__r__c_y_y_y_", "_marmarrr__"].includes(alias),
    ),
);

const moonRelationshipRummy = {
  name: "Rummy",
  note:
    "Moon can tease Rummy from the position of somebody with an actual opinion: `i like interior design,so whaT`. It is a small, comfortable lane where taste becomes the setup rather than a formal closeness claim.",
  href: "/characters/rummy",
};

const moonQuotes = [
  "I am a moon,so i see all",
  "I want to say it,but I feel like its too mean",
  "This moment will always be engraved in my single brain cell",
  "TIME FOR VACINATION FOR RUMFECTION AND GILLFECTION",
  "Wait this isn't main chat",
  "i like interior design,so whaT",
];

const moonClaims = [
  "Moon is stable account 646026925760053258; Moon久方 and the archived marcy/marmar handles belong to the same user-confirmed person.",
  "Moon repeatedly frames herself as watchful and socially retentive: `I am a moon,so i see all` in 2022 and `This moment will always be engraved in my single brain cell` in 2023. The `single brain cell` line is self-deprecating humor, not a cognitive or medical claim.",
  "On 2023-03-19 Moon explicitly stops herself from saying something because `I feel like its too mean`, supporting a real meanness brake inside an otherwise joke-forward style.",
  "Later the same day Moon extends the room's existing `-fection` wordplay, keeps the bit going, then realizes `Wait this isn't main chat`; the context slip is part of the contradiction, not evidence that she originated `gillifection`.",
  "On 2024-06-05 Moon tells Rummy `i like interior design,so whaT`, supporting a safe ordinary-life interior-design taste and bounded teasing texture.",
];

const moonAntiFanon = [
  "Moon is the canonical public name. Moon久方 and the old marcy/marmar handles are aliases/account history, not separate cast files.",
  "UL Night Shift Barista is Moon's locked specialist title; this Wall packet does not date the appointment.",
  "`I am a moon,so i see all` is self-styled watchfulness/social-radar humor, not literal omniscience, surveillance, or a formal monitoring role.",
  "The local referent `Dream` remains unresolved and is not mapped to Daya/Dayadream or any other person by similar naming.",
  "The pooled Deleted User parent in the `too mean` receipt remains pooled/unidentified.",
  "Moon participates in `RUMFECTION AND GILLFECTION`; this dossier does not credit her with originating the earlier `gillifection` wordplay.",
  "The nursing/doctor GIF is POSTED BY Moon only. Uninspected nearby media is not promoted to MADE BY, CAPTURED BY, or FEATURING attribution.",
  "The Rummy lane supports teasing/taste familiarity only; it is not a romance, family, intimacy, exclusivity, or closeness-ranking claim.",
];

const moonCharacter: ExtendedCharacter = {
  id: moonId,
  name: "Moon",
  aliases: ["Moon久方", "_marrrmarrr__", "_m__a__r__c_y_y_y_", "_marmarrr__"],
  billing: "recurring",
  role: "UL Night Shift Barista",
  era: "2020–present",
  logline:
    "The all-seeing night-shift barista who remembers the stupidest moments, calls the storage medium one brain cell, catches herself when a joke would be too mean, and can still get forty-seven seconds into a vaccination bit before noticing she is in the wrong chat.",
  tags: [
    "UL Night Shift Barista",
    "Wall",
    "Social memory",
    "Self-deprecating humor",
    "Meanness brake",
    "Rummy",
    "Interior design",
    "Wrong chat",
    "Petty Crimes",
  ],
  relationships: [moonRelationshipRummy],
  quotes: moonQuotes,
  claims: moonClaims,
  antiFanon: moonAntiFanon,
};

if (moonIndex >= 0) {
  const moon = allCharacters[moonIndex] as ExtendedCharacter;
  const relationships = [...(moon.relationships ?? [])];
  for (const relationship of moonCharacter.relationships ?? []) {
    const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
    if (index >= 0) relationships[index] = relationship;
    else relationships.push(relationship);
  }

  allCharacters[moonIndex] = {
    ...moon,
    ...moonCharacter,
    aliases: [...new Set([...(moon.aliases ?? []), ...(moonCharacter.aliases ?? [])])],
    tags: [...new Set([...(moon.tags ?? []), ...(moonCharacter.tags ?? [])])],
    relationships,
    quotes: [...new Set([...(moon.quotes ?? []), ...moonQuotes])],
    claims: [...new Set([...(moon.claims ?? []), ...moonClaims])],
    antiFanon: [...new Set([...(moon.antiFanon ?? []), ...moonAntiFanon])],
  } as ExtendedCharacter;
} else {
  allCharacters.push(moonCharacter);
}

const resolvedMoon = allCharacters.find((character) => character.id === moonId)!;
characterById.set(moonId, resolvedMoon);
