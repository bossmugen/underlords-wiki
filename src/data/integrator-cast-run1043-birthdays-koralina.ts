import "./integrator-cast-run1043-daycare-shimoko";
import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

if (!allCharacters.some((character) => character.id === "koralina-alycei")) {
  const koralina: ExtendedCharacter = {
    id: "koralina-alycei",
    name: "Koralina",
    aliases: ["~Koralina~", "Koralina#1356", "Alycei", "Alycei#1356"],
    billing: "legacy",
    role: "Archive-era cast",
    era: "2020–2021+",
    logline:
      "Koralina is a low-volume but warm participant in UL's birthday culture: one year she is the person thanking everybody for the hearts and wishes; later, under the Alycei handle, she is the one starting the celebration for somebody else. She does not need much text to make the social instinct legible—receive affection, remember the ritual, pass it forward.",
    tags: ["Archive cast", "Birthdays", "Warmth", "Reciprocity", "Low-volume presence", "Petty Crimes"],
    quotes: [
      "thank you guys ❤️❤️",
      "Happy birthday to a great person",
    ],
    claims: [
      "Stable account 224621375762890752 ties the surviving Koralina / ~Koralina~ / Koralina#1356 and Alycei / Alycei#1356 handles together. The alias bridge comes from the account ID, not name similarity.",
      "On 2020-05-11, Koralina answers a cluster of birthday wishes with `thank you guys ❤️❤️`. On 2021-11-30, the same stable account under Alycei initiates birthday recognition for Mik with a warm wish, calling them `a great person` and hoping they have a wonderful day.",
      "The useful person read is reciprocal rather than ceremonial: Koralina first appears as the person being celebrated, then later as somebody actively carrying the same little room ritual toward someone else.",
    ],
    antiFanon: [
      "The birthday-channel traces support a compact warmth/reciprocity read, not a claim about Koralina's whole social life, formal role, or closeness ranking.",
      "The 2020 birthday receipt is a surviving celebration moment, not guaranteed origin for Koralina's birthday tradition or first UL birthday.",
      "No additional identity bridge beyond stable account 224621375762890752 is inferred from display-name similarity.",
    ],
  };

  allCharacters.push(koralina);
  characterById.set("koralina-alycei", koralina);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("koralina-alycei")) {
    archiveCastGroup.characterIds.push("koralina-alycei");
  }
}
