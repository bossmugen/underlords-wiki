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

const captainAjId = "captain-aj";

if (!allCharacters.some((character) => character.id === captainAjId)) {
  const captainAj: ExtendedCharacter = {
    id: captainAjId,
    name: "Captain AJ",
    aliases: ["Captain AJ"],
    billing: "legacy",
    role: "Daycare returner",
    era: "2021",
    logline:
      "Captain AJ treats the welcome bot like paperwork, not an introduction. He comes back recognizing Daycare, immediately compares it to the old room, and when MEE6 cheerfully welcomes him three days later, answers with the extremely practical correction: `I used to be a member actually.`",
    tags: [
      "Archive cast",
      "Daycare",
      "Return continuity",
      "Game chatter",
      "Nostalgia",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Twizzed Panda",
        note:
          "Captain AJ's return does not need a full reintroduction before older UL history becomes ordinary conversation. When he says UL had stopped its AQW / Bleach Realm activity for a long stretch, Twizzed Panda answers from the same older-era frame instead of treating the comment like newcomer lore. It is small, lived recognition: AJ remembers the gap, Panda knows what gap he means.",
      },
      {
        name: "Ary_Bot",
        note:
          "Their surviving game chatter is compact and easy. AJ calls Flying Dutchman `a strong boss lol`, stays relatively matter-of-fact, and then starts escalating into `holy!! danger` and `last hit danger holy` once the fight earns it. The enthusiasm has to be dragged out of him by spectacle.",
      },
    ],
    quotes: [
      "Oh this is daycare",
      "The old one was better",
      "I used to be a member actually",
      "But you guys stopped UL in AQW/Bleach Realm for a long time",
      "It's a strong boss lol",
      "holy!! danger",
      "last hit danger holy",
      "actually I thought jolly nice dmg :3",
    ],
    claims: [
      "Stable account 295330264773476353 is Captain AJ in the reviewed July 2021 Daycare return pocket.",
      "Captain AJ explicitly says `I used to be a member actually` after an automated welcome and separately refers to UL's earlier AQW / Bleach Realm activity gap. That supports return continuity in his own words without establishing any former office, rank, or appointment chronology.",
      "His July 21 `Oh this is daycare` / `The old one was better` exchange and July 24 return conversation make the automated welcome procedural rather than biographical: the bot treats the moment as an arrival while AJ talks like somebody revisiting a place he already knows.",
      "The Flying Dutchman exchange supports a small ordinary-life contrast: understated boss assessment gives way to visibly excited danger / last-hit commentary once the fight gets dramatic.",
    ],
    antiFanon: [
      "Captain AJ (stable account 295330264773476353) is not the same account as the existing AJ / lordaj911 dossier (stable account 748610243432284160). Do not merge them from the shared `AJ` name fragment.",
      "`I used to be a member actually` is Captain AJ's own membership statement. It does not establish a former officer title, Staff status, governance role, or appointment date.",
      "An automated welcome is not an origin certificate; his own language in the same return pocket explicitly points backward to prior UL participation.",
      "Do not infer broad personality from the small surviving Daycare footprint. The keeper is return familiarity plus a narrow game-chatter beat, not a global introvert/extrovert label.",
    ],
  };

  allCharacters.push(captainAj);
  characterById.set(captainAjId, captainAj);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(captainAjId)) {
    archiveCastGroup.characterIds.push(captainAjId);
  }
}
