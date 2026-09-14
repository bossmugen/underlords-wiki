import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const ajId = "aj";

if (!allCharacters.some((character) => character.id === ajId)) {
  const aj: ExtendedCharacter = {
    id: ajId,
    name: "AJ",
    aliases: ["lordaj911"],
    billing: "legacy",
    role: "Archive-era Daycare / Lobby cast",
    era: "2022",
    logline:
      "AJ manages to make onboarding feel like a person happened to it. Before finishing the paperwork, they stop to react to Mugen's welcome emoji with `That emoji 😳`; once the form gets confusing, they ask the practical question, laugh at the ambiguity, and then simply finish the job.",
    tags: [
      "Archive cast",
      "Daycare",
      "Lobby",
      "Onboarding",
      "Casual curiosity",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Mugen",
        note:
          "Their surviving onboarding exchange is brisk but already socially loose. AJ notices Mugen's welcome-emoji bundle before the administrative part, asks `Club?` rather than bluffing through a field they do not understand, then follows Mugen's clarification with `I am in a random club lol` and completes the handoff. Mugen answers with the role / rules / tour / biodata navigation. It reads like a newcomer comfortable enough to react like a person while still cooperating with the boring bits.",
        href: "/characters/mugen",
      },
    ],
    quotes: [
      "That emoji 😳",
      "Club?",
      "I am in a random club lol",
      "I will include that",
    ],
    claims: [
      "Stable account 748610243432284160 is AJ / lordaj911 in the reviewed Jan. 2, 2022 Lobby onboarding sequence and the assigned Daycare ledger.",
      "AJ's assigned Daycare footprint is currently eight surviving messages from January 3 through January 6, 2022; the direct bodies of those eight messages were not reconstructed in this integration pass.",
      "AJ's first authored line surfaced in the local onboarding sequence is a direct Reply to Mugen's older welcome-emoji bundle: `That emoji 😳`. Seventeen seconds later the exchange pivots into role-assignment intake.",
      "The sequence `Club?` → Mugen clarification → `I am in a random club lol` → `I will include that` → completed intake / Mugen tag supports a person read of casual curiosity followed by straightforward cooperation once the task is legible.",
    ],
    antiFanon: [
      "Do not call the Jan. 2 automated welcome AJ's first-ever Discord arrival; the surviving scene is onboarding evidence, not an origin certificate.",
      "`I am in a random club lol` is AJ's own casual description in that moment, not independently verified club rank or status.",
      "AJ's intake completion contains a private age disclosure. Keep that detail backstage; it is unnecessary to the public character story.",
      "Eight surviving Daycare messages do not establish that AJ was socially peripheral, globally quiet, shy, extroverted, or otherwise classifiable from message volume alone.",
      "Export-time role arrays do not establish appointment chronology.",
    ],
  };

  allCharacters.push(aj);
  characterById.set(ajId, aj);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(ajId)) {
    archiveCastGroup.characterIds.push(ajId);
  }
}
