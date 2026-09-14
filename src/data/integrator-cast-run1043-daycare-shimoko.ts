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
    era: "2021+",
    logline:
      "Queen Shimoko is archive-thin and socially audible anyway. She can enter a running bit with almost no text, bend the wording once, and leave the room with a new phrase to play with—exactly what happens when Mugen puts crabs on the menu, Shimoko upgrades them to `crab booty`, and Rich picks up her mutation barely a minute later.",
    tags: ["Archive cast", "Daycare", "Wall", "Low-volume presence", "Bit mutation", "Petty Crimes"],
    quotes: [":Hehe:", "Crab booty omgsh:Laugh:"],
    claims: [
      "Stable account 825953265430691860 anchors Queen Shimoko's surviving labels and her one-message Daycare footprint. The lone Daycare message body is unavailable in the parsed source used for this pass, so the public read comes from adjacent direct receipts rather than reconstructed text.",
      "On 2021-04-28 Gabu welcomes Shimoko in Lobby and points her toward the server map. By 2021-04-30 she is already participating in Wall with a compact `:Hehe:`; this is Discord/onboarding chronology, not Dragon Raja club-admission chronology.",
      "On 2021-05-02 Mugen says `crabs on the menu tonight`; six minutes later Shimoko answers `Crab booty omgsh:Laugh:`. Rich responds 61.840 seconds after that with `Pancake crab booty??`, carrying Shimoko's new wording forward. Shimoko did not invent the crab premise; her contribution is the mutation that the next person immediately finds usable.",
      "The useful contradiction is low archival volume / clear social legibility. One authored Daycare message does not make Shimoko socially silent when a nearby Wall pocket shows her changing the language of the bit with a single line.",
    ],
    antiFanon: [
      "Do not promote Rich's immediate echo into a special Shimoko↔Rich relationship; one uptake beat is enough for social texture, not closeness ranking.",
      "Do not credit Shimoko with originating the crab premise. Mugen's `crabs on the menu tonight` comes first.",
      "Do not invent the body or message ID of Shimoko's lone Daycare-authored message; the reviewed ledger exposes the footprint, not that text.",
      "The 2021 Lobby welcome is onboarding-space evidence only and does not establish Dragon Raja club-admission chronology, a formal appointment, or who technically assigned roles.",
      "`Fast bit mutator` is a scene-level read from a bounded pocket, not a total personality claim.",
    ],
  };

  allCharacters.push(shimoko);
  characterById.set("queen-shimoko", shimoko);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("queen-shimoko")) {
    archiveCastGroup.characterIds.push("queen-shimoko");
  }
}
