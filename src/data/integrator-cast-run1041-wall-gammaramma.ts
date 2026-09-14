import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

if (!allCharacters.some((character) => character.id === "gammaramma")) {
  const gammaramma: ExtendedCharacter = {
    id: "gammaramma",
    name: "gammaramma",
    billing: "legacy",
    role: "Archive-era cast",
    era: "2021",
    logline:
      "A low-prose Wall regular who can register an entire opinion with one reaction or one full-capital LMAO and apparently sees no reason to explain the joke twice.",
    tags: ["Archive cast", "Wall", "Low-prose presence", "Reaction shorthand", "Petty Crimes"],
    quotes: ["LMAO"],
    claims: [
      "Stable account 283290211524411394 anchors gammaramma's authored Wall object in the reviewed Run-1041 packet.",
      "One October Wall pocket ends with gammaramma among the final `frognod` reactors. A later November pocket gives the entire authored contribution as `LMAO`. Together they support a small but coherent social read: quiet in prose, visibly amused, and apparently perfectly content to let louder people explain the joke.",
      "The November `LMAO` lands 12m33s after a pooled Deleted User crying-cat media post, but there is no stored reply edge. The timing belongs backstage as context, not as a claim that gammaramma was laughing at that specific image.",
    ],
    antiFanon: [
      "Do not turn Sye's nearby `Like mother Like daughter` joke-family wording into literal biological, adoptive, or formal family history.",
      "Do not claim gammaramma's standalone `LMAO` replies to, endorses, describes, or identifies the nearby crying-cat image; no reply edge survives.",
      "The nearby attachment is POSTED BY its author only. Maker, capture, subject, featured-person, and edit provenance remain unresolved.",
      "Two low-prose traces support a compact person read, not a fabricated relationship edge, role, or standalone Episode.",
    ],
  };

  allCharacters.push(gammaramma);
  characterById.set("gammaramma", gammaramma);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("gammaramma")) {
    archiveCastGroup.characterIds.push("gammaramma");
  }
}
