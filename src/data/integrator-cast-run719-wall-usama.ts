import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const usamaId = "usama";

if (!allCharacters.some((character) => character.id === usamaId)) {
  const usama: ExtendedCharacter = {
    id: usamaId,
    name: "Usama",
    aliases: ["usama1."],
    billing: "legacy",
    role: "Wall regular · archive-era cast",
    era: "2021",
    logline:
      "Mostly `lol` until the room drops a continuity problem: Usama's tiny Wall footprint gets specific exactly when somebody needs yesterday remembered, a surprising detail checked, or founder lore located. He barely spends words, but when he does there is usually a filing-cabinet reason.",
    tags: [
      "Archive cast",
      "2021",
      "Wall",
      "Low-verbiage",
      "Context memory",
      "Callbacks",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Mugen",
        note:
          "Usama asks `ooo Suzzi one of founders ???`; Mugen TRUE-replies `Yus`. Minutes later, when Mugen escalates into a Suzi lore riff, Usama TRUE-replies with the much more native historical method: `lol`.",
        href: "/characters/mugen",
      },
    ],
    quotes: [
      "key was asking Sushi yesterday too lol",
      "wait , really !!!",
      "ooo Suzzi one of founders ???",
    ],
    claims: [
      "On 2021-07-21 Usama remembers a prior-day social detail with `key was asking Sushi yesterday too lol`; Gilli and Mugen are present in the final reaction membership on that message.",
      "On 2021-07-27 Usama asks `wait , really !!!` during a surprising context pocket and follows it nine seconds later with `👀`.",
      "On 2021-09-11 Usama asks whether Suzi is one of the founders; Mugen TRUE-replies `Yus`, and Usama later TRUE-replies `lol` to Mugen's follow-up Suzi lore riff.",
      "His assigned Wall footprint is low-verbiage: most surviving authored messages are laughter, emotes, or short reactions, while the longer lines disproportionately surface callbacks or context questions.",
    ],
    antiFanon: [
      "Context/memory spotting is a social behavior read, not a formal historian role.",
      "`key was asking Sushi yesterday too lol` is a callback only; it does not establish romance or sex.",
      "One Sailor Moon surprise question does not establish an anime preference profile.",
      "Usama's `lol thats Shiya` line does not identify the subject of an uninspected image.",
      "Usama's closed q18 topology branch is separate backstage structure and is not used as personality, popularity, or closeness evidence.",
    ],
  };

  allCharacters.push(usama);
  characterById.set(usamaId, usama);

  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(usamaId)) {
    archiveCastGroup.characterIds.push(usamaId);
  }
}

// Run 833 deepens this canonical owner and adds Queen Shimoko. Keep the activation
// here so older all-content import order still resolves Usama before the new overlay.
import "./integrator-cast-run833-daycare-usama-wall-queen";
