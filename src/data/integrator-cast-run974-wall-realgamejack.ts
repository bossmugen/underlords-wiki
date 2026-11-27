import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

if (!allCharacters.some((character) => character.id === "realgamejack")) {
  const realGameJack: ExtendedCharacter = {
    id: "realgamejack",
    name: "RealGameJack",
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2022",
    logline:
      "Low-volume Wall regular whose preferred sentence can be a GIF, an emote, or three words that reveal he remembered what somebody else liked all along.",
    tags: ["Archive cast", "Wall", "Reaction media", "Anime", "People-memory"],
    relationships: [
      {
        name: "Daya",
        href: "/characters/daya",
        note:
          "On November 23, 2022 Daya replies `luv this anime` to RealGameJack's Eighty-Six / Frederica post. RealGameJack answers `I knew you did` about forty seconds later. It is a small but unusually clean bit of remembered-taste familiarity: he treats her reaction as confirmation, not new information.",
      },
    ],
    quotes: ["I knew you did"],
    claims: [
      "On November 23, 2022 RealGameJack posts an Eighty-Six / Frederica Tenor; Daya directly replies `luv this anime`, and RealGameJack answers `I knew you did` roughly forty seconds later.",
      "Later Wall appearances include a SmileDog emote and another Tenor link, fitting a compact reaction-media-heavy posting style rather than a chatty one.",
      "The useful contradiction is volume versus attention: RealGameJack says little in the surviving Wall pocket, but one tiny answer makes clear he had retained a specific piece of somebody else's taste.",
    ],
    antiFanon: [
      "The Daya exchange supports remembered-taste familiarity, not a formal friendship label or closeness ranking.",
      "The Eighty-Six post supports interest or recognition; it does not establish a favorite-anime ranking or a broad fandom identity.",
      "Hosted GIF/Tenor material is POSTED BY RealGameJack only. MADE BY, CAPTURED BY, and FEATURING are not assigned from the links alone.",
      "Do not promote shortened room references such as `realjack` into a formal alias without independent identity history.",
    ],
  };

  allCharacters.push(realGameJack);
  characterById.set("realgamejack", realGameJack);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("realgamejack")) {
    archiveCastGroup.characterIds.push("realgamejack");
  }
}
