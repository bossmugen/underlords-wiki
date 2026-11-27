import type { CharacterNarrative } from "./character-biographies-narrative";
import { rummyNarrativeCharacterBios } from "./character-biographies-rummy";

const rummy = rummyNarrativeCharacterBios.rummy;

if (!rummy) {
  throw new Error("Run 521 expected the existing Rummy person-first biography.");
}

export const run521NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  rummy: {
    ...rummy,
    sections: rummy.sections.map((section) => {
      if (section.title === "THE CHAOS GREMLIN ALSO PINS THE BIRTHDAY CALENDAR") {
        return {
          ...section,
          paragraphs: [
            ...section.paragraphs,
            "The Sniper role has a very Rummy-shaped lived version too. In December 2022 Mugen names her old account one of the **`Snipers of the Week`** and thanks the on-call Snipers for their service; the 2023 anniversary wrap-up lists Rummy again among the **`Nitro Snipers`**, this time `x2`, while congratulating their **`fast fingers`**. The exact game mechanic can stay downstairs. The character beat is already excellent: the same woman whose challenge brain once reduced tennis to **`FUZZY BALLS AND BALLS AND SMACKING`** could apparently be extremely quick when the task was actually hers. Competence never required the clown software to uninstall itself."
          ]
        };
      }

      if (section.title === "THE SOFTWARE FORGETS HER. THE PEOPLE DO NOT.") {
        return {
          ...section,
          paragraphs: [
            ...section.paragraphs.slice(0, 2),
            "Even the game name refuses to cooperate with the reset. The old account's 2020 Lobby profile gives the IGN **`AnnaRum`**; when the replacement account gets processed like a stranger in 2026, it independently gives **`AnnaRum`** again. The software sees a new account. The room has Ren saying who it is, and Rummy is still walking through the same doorway with the same character name. Six years of social history apparently outrank a fresh Discord snowflake.",
            ...section.paragraphs.slice(2)
          ]
        };
      }

      return section;
    })
  }
};
