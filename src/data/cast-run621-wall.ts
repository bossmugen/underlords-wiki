import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById, primaryGroupByCharacterId } from "./cast";

// Run 621 Wall tail: JumanjiBinx has one surviving authored Wall word, but it is
// not random noise. Gilli summons Jumanji into a screenshot pocket; almost three
// hours later Jumanji replies to the screenshot itself with `Yes`. Keep the page
// exactly that small: context-trusting response when called, not an invented
// reading of unseen pixels or a closeness ranking.
if (!allCharacters.some((character) => character.id === "jumanjibinx")) {
  const jumanji: Character = {
    id: "jumanjibinx",
    name: "JumanjiBinx",
    billing: "guest",
    role: "VIP",
    era: "2022",
    logline:
      "Near-silent Wall witness whom Gilli can summon into a screenshot pocket; almost three hours later Jumanji answers the screenshot itself with one complete surviving contribution: `Yes`.",
    tags: ["VIP", "2022", "Wall", "Summoned confirmer", "Low-verbiage", "Petty Crimes"],
    relationships: [
      {
        name: "Gilli",
        note: "Gilli posts a screenshot, then directly summons Jumanji into the pocket. Jumanji returns 2h48m44.568s later and replies to the screenshot itself with `Yes`. The delay does not break the shared context; the one-word answer assumes it.",
        href: "/characters/gilli",
      },
    ],
    quotes: ["Yes"],
  };

  allCharacters.push(jumanji);

  const vipGroup = castGroups.find((group) => group.id === "vip");
  if (vipGroup && !vipGroup.characterIds.includes(jumanji.id)) vipGroup.characterIds.push(jumanji.id);

  characterById.set(jumanji.id, jumanji);
  if (vipGroup) primaryGroupByCharacterId.set(jumanji.id, vipGroup);
}
