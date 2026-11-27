import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const spicyId = "spicy-hotpot";

if (!allCharacters.some((character) => character.id === spicyId)) {
  const spicy: ExtendedCharacter = {
    id: spicyId,
    name: "Spicy Hotpot",
    aliases: ["Joshx", "_spicyhotpot"],
    billing: "guest",
    role: "Discord visitor · extended cast",
    era: "2020–2021+",
    logline:
      "Formal outsider who learned the house grammar alarmingly fast: Joshx arrives saying he is `not from your server`, answers an age-threshold question with his height and citizenship before eventually complying, then becomes familiar enough for Gilli to cast him as the person who will `GROUND YOU` if you refuse food or water — a mock threat backed by Spicy's own repeated hydration nags.",
    tags: [
      "Guest cast",
      "Lobby",
      "Whiskey",
      "Wall",
      "Outsider",
      "Procedural playfulness",
      "Hydration nag",
      "Mock enforcer",
      "Gilli nuisance license",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Gilli",
        note:
          "Gilli recognizes `JOSH` before his surviving doorway self-introduction, later receipts and tags him, turns him into the mock threat behind `DRINK WATER AND EAT OR @Spicy Hotpot WILL GROUND YOU!!!`, and reopens old Wall evidence with him months later. Spicy answers by investigating `boiled mayo`, remembering that Gilli had probably put him on the Wall `ages ago`, and eventually sending her mention 28 times in one message. Gilli is among the wheeze reactors. By then their shared language includes both remembering old evidence and deliberately becoming new evidence for each other.",
        href: "/characters/gilli",
      },
    ],
    quotes: [
      "I'm Joshx, I'm not from your server, but I fanboy for Kinou",
      "yes, I'm 5'7 actually.",
      "I am a US citizen.",
      "so what's this I heard about boiled mayo? @New Account Gilli#3226",
      "wait wtf my nickname",
      "Nah, you probably put me here ages ago",
    ],
    claims: [
      "At the surviving 2020-11-26 Discord doorway, Spicy explicitly says he is Joshx and `not from your server`, while Gilli has already greeted him as `JOSH`. The safe arc is formal outsider with prior social recognition, not UL in-game admission.",
      "When Gilli asks whether he is above the adult threshold, Spicy first answers `yes, I'm 5'7 actually.` and then `I am a US citizen.` before eventually supplying the threshold answer the rule actually needs. The joke stays inside the procedure rather than replacing compliance.",
      "Gilli's 2021-05-22 announcement threatens that Spicy will `GROUND YOU` if people do not drink water and eat. Assigned Whiskey separately shows Spicy repeatedly posting hydration-reminder material in June 2021, supporting a mock-threatening wrapper around an ordinary care/nag function.",
      "On 2021-09-08 Spicy technically replies to Gilli's Wall question with `Nah, you probably put me here ages ago` and then replies back to her April screenshot post with `I knew it`. On 2021-09-18 he sends Gilli's mention 28 times in one message; Gilli is among the wheeze reactors.",
    ],
    antiFanon: [
      "Spicy's first-party `I'm not from your server` doorway statement is not overwritten by later exporter role arrays or server familiarity. No reviewed receipt establishes that he later joined UL in-game.",
      "`GROUND YOU` is Gilli's joke-care framing about Spicy. It is not literal authority, parenting, discipline, governance, family status, or a formal role.",
      "The Whiskey `@Drink Water/ Eat Food Reminder` rendering lacks preserved technical mention objects in the portable derivative; do not force those targets onto a stable account without a direct bridge.",
      "Gilli's April screenshot is POSTED BY Gilli only. MADE BY, CAPTURED BY, FEATURING, and exact visual subject remain unresolved without pixel inspection.",
      "`fanboy for Kinou` supports Spicy's own fandom/admiration wording only; it does not establish a romance, family tie, or formal affiliation.",
      "The exact actor and content of Spicy's May 17 nickname change remain unresolved; the timing around Gilli does not establish who changed it.",
    ],
  };

  allCharacters.push(spicy);
  characterById.set(spicyId, spicy);

  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(spicyId)) {
    archiveCastGroup.characterIds.push(spicyId);
  }
}
