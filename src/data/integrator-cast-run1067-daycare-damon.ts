import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// Damon — six Daycare messages, but his same-day entrance has an actual social shape.
if (!allCharacters.some((character) => character.id === "damon")) {
  const damon: ExtendedCharacter = {
    id: "damon",
    name: "Damon",
    aliases: ["Damxn", "damon3838"],
    billing: "legacy",
    role: "External club leader · archive-era UL contact",
    era: "2021",
    logline:
      "Damon arrives with a title in his pocket and a joke in his mouth. Anthos greets him with `wazza`; Damon answers `heyyo`, drops `poser :P`, and only then gets around to the intake version of himself: `hi im Damxn` and `and im the leader of Purgatory`. Even his six-message Daycare footprint has the same useful contradiction—standing elsewhere, no need to walk into UL performing status first.",
    tags: ["Archive cast", "Daycare", "Lobby", "Purgatory", "External club leadership", "Casual entrance", "Light banter"],
    relationships: [
      {
        name: "Anthos",
        note:
          "Anthos opens with `wazza`; Damon answers in the same loose register before moving into formal intake, and Anthos later handles the roles/tour handoff. It is a clean onboarding interaction with conversational ease, not a friendship or authority ranking.",
        href: "/characters/anthos",
      },
    ],
    quotes: ["heyyo", "poser :P", "hi im Damxn", "and im the leader of Purgatory"],
    claims: [
      "Stable account 824950163911081995 bridges Damon's six-message Daycare ledger footprint to the same-day Lobby intake used here.",
      "Damon self-reports leadership of Purgatory during intake only after entering the room through casual banter. The useful person read is external-club standing paired with an unserious first social register.",
      "The current Daycare ledger contains six authored Damon messages, all on 2021-06-29; that thin room count is not treated as a whole-person status measure.",
    ],
    antiFanon: [
      "`leader of Purgatory` is Damon's own external Dragon Raja club claim. It does not establish any Underlords office, rank, appointment chronology, or governance authority.",
      "The export does not preserve an explicit target for `poser :P`; do not assign that line to Anthos or anyone else.",
      "A six-message Daycare footprint does not establish visitor/member status, closeness, duration of involvement, or low importance.",
      "An onboarding age string exists in the reviewed intake packet but is intentionally not surfaced in this public dossier.",
    ],
  };

  allCharacters.push(damon);
  characterById.set("damon", damon);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("damon")) {
    archiveCastGroup.characterIds.push("damon");
  }
}
