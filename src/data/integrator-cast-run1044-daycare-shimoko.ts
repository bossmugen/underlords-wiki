import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

if (!allCharacters.some((character) => character.id === "queen-shimoko")) {
  const shimoko: ExtendedCharacter = {
    id: "queen-shimoko",
    name: "Queen Shimoko",
    aliases: ["~°♡𝒬𝓊𝑒𝑒𝓃 𝒮𝒽𝒾𝓂𝑜𝓀𝑜♡°~", "Shimok0"],
    billing: "legacy",
    role: "Archive-era cast",
    era: "2021",
    logline:
      "Queen Shimoko barely leaves a Daycare footprint, yet the rooms around it show somebody who could drop into a running joke, bend the wording once, and watch the room immediately steal her version. Low volume did not mean low legibility.",
    tags: ["Archive cast", "Daycare", "Wall", "Low-volume presence", "Bit mutation", "Petty Crimes"],
    quotes: ["Crab booty omgsh"],
    claims: [
      "Stable account 825953265430691860 anchors the reviewed Queen Shimoko / Shimok0 traces; this is an account-ID bridge, not a display-name guess.",
      "Shimoko's Daycare ledger contains only one authored message, surfaced on 2021-05-06, while nearby UL rooms show her participating almost immediately after onboarding. Gabu welcomes her and assigns the server role on 2021-04-28; by 2021-04-30 she is already visible in Wall with an emote-only `:Hehe:`.",
      "On 2021-05-02 Mugen supplies `crabs on the menu tonight`; Shimoko mutates the running bit into `Crab booty omgsh:Laugh:`; Rich answers 61.840 seconds later with `Pancake crab booty??`. Shimoko did not invent the crab premise, but her wording is the version Rich immediately picks up.",
      "The useful character read is compressed social participation: an archive-thin author who could still make a tiny contribution land loudly enough for the next person to run with it.",
    ],
    antiFanon: [
      "Do not reconstruct Shimoko's lone Daycare-authored message; its text/message ID was unavailable in the reviewed parsed object.",
      "Do not infer a special Shimoko↔Rich relationship from one immediate wording echo.",
      "Do not call Shimoko the originator of the crab premise; Mugen's line comes first.",
      "The April 28 Discord onboarding receipt is not Dragon Raja club-admission chronology, and the adjacent-room traces support a contextual social read rather than a totalizing personality claim.",
    ],
  };

  allCharacters.push(shimoko);
  characterById.set("queen-shimoko", shimoko);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("queen-shimoko")) {
    archiveCastGroup.characterIds.push("queen-shimoko");
  }
}
