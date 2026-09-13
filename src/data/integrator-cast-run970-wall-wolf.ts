import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

if (!allCharacters.some((character) => character.id === "wolf-phenix")) {
  const wolf: ExtendedCharacter = {
    id: "wolf-phenix",
    name: "Wolf Phenix",
    aliases: ["Wolfie"],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2021–2024",
    logline:
      "Wolf Phenix barely needs prose to register. His surviving Wall authorship is tiny and reaction-heavy, yet people notice the possibility of him showing up, Dean can apparently turn a purple cue into `wolfie`, and Wolf keeps surfacing around the gallery years after the chatty footprint goes quiet.",
    tags: [
      "Archive cast",
      "Wall",
      "Low-prose regular",
      "Reaction-native",
      "Socially recognizable",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Anayss",
        note:
          "Anayss notices Wolf as a presence, not just a username in the reaction list: on September 3, 2022 she says she thought Wolf had come online at the same time. Wolf appears in authored prose forty-three minutes later with double `Fat_Wheeze`, but there is no reply edge tying that post to her line. The useful read is bounded presence-noticing familiarity, not a closeness rank.",
      },
      {
        name: "Dean",
        note:
          "Mugen reports that Dean `saw purple and he thought purple = wolfie`. That is a very small but very Wolf-specific recognition cue: in that moment Dean apparently had an association strong enough to make the leap immediately. What was purple is unresolved, so the line stays social shorthand rather than becoming an avatar, body, or design claim.",
      },
    ],
    quotes: [
      "Happy Neww Yearsssss",
      ":Fat_Wheeze: :Fat_Wheeze:",
      "XD",
    ],
    claims: [
      "Wolf's current combined Wall source contains only five authored message objects despite a much larger stable-ID footprint. The authored set is mostly greeting/reaction language: a New Year's line plus cheer emotes, a reaction GIF followed by `XD`, and double `Fat_Wheeze`.",
      "The more interesting person read comes from everybody else. Anayss explicitly thinks Wolf may have come online, and Mugen later reports Dean turning a purple cue into `wolfie`. Wolf can be nearly silent in text and still remain socially recognizable enough to be noticed and associated on sight/cue.",
      "Wolf's stable ID survives in Wall participation from a February 2021 final-state reaction membership through another final-state reaction membership in December 2024. That supports sparse-authorship ≠ disappearance; it does not prove continuous activity between those points.",
      "Petty Crimes: `purple = wolfie` is the tiniest possible room-association fact and exactly the kind of shorthand that makes a low-volume person legible anyway.",
    ],
    antiFanon: [
      "The 2021 and 2024 reaction-user arrays are final-state membership lists and do not provide reaction-click timestamps. They support surviving participation bounds, not continuous presence or exact moment-by-moment activity.",
      "Anayss's September 3, 2022 line and Wolf's later `Fat_Wheeze` post are chronologically adjacent only. There is no structured reply proving Wolf was answering her.",
      "`Dean saw purple and he thought purple = wolfie` is SAID BY Mugen and reports Dean's association. The underlying purple object/interface cue was not inspected; do not turn it into a physical trait, stable avatar fact, or media-content claim.",
      "The available Wall packet supports recognizable social presence and bounded familiarity with Anayss/Dean. It does not establish a stronger friendship tier from those receipts alone.",
    ],
  };

  allCharacters.push(wolf);
  characterById.set("wolf-phenix", wolf);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("wolf-phenix")) {
    archiveCastGroup.characterIds.push("wolf-phenix");
  }
}
