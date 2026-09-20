import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";
import "./integrator-cast-run1443-whiskey-anayss";
import "./integrator-cast-run1445-wall-darkasrai";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// Hard canon repair: Akariel and Zyrcant are separate people. Older base/canonicalize
// layers still carry Akariel aliases on Zyrcant, so clean that contamination before
// locating the Akariel owner. Never use the contaminated aliases as an identity bridge.
const zyrcantIndex = allCharacters.findIndex((character) => character.id === "zyrcant");
if (zyrcantIndex >= 0) {
  const zyrcant = allCharacters[zyrcantIndex] as ExtendedCharacter;
  const akarielAliases = new Set(["Akariel", "Akariel™", "akariel_star"]);
  allCharacters[zyrcantIndex] = {
    ...zyrcant,
    aliases: (zyrcant.aliases ?? []).filter((alias) => !akarielAliases.has(alias)),
    logline:
      "UL VIP and recurring extended-family guest whose file remains distinct from Akariel; older fused Akariel labels are a superseded identity error, not an alias chain.",
    antiFanon: [
      ...new Set([
        ...(zyrcant.antiFanon ?? []),
        "Akariel and Zyrcant are separate people under current hard canon. Do not restore Akariel / Akariel™ / akariel_star as Zyrcant aliases from older public layers.",
      ]),
    ],
  } as ExtendedCharacter;
  characterById.set("zyrcant", allCharacters[zyrcantIndex]);
}
