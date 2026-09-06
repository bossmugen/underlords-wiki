import type { CharacterNarrative } from "./character-biographies-narrative";
import { run470NarrativeCharacterBios } from "./character-biographies-run470";

const anayss = run470NarrativeCharacterBios.anayss;

export const run515NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  anayss: {
    ...anayss,
    sections: [
      ...anayss.sections,
      {
        period: "Petty Crimes",
        title: "Petty Crimes",
        paragraphs: [
          "Anayss has an extremely specific relationship with escape-room competence: **`i love escape rooms!`**. This is the same person whose older game-map testimony includes **`Which is always cuz i get lost a lot`**. Apparently controlled puzzles are welcome; ordinary navigation remains entitled to fight back.",
          "Has also confessed, with no visible shame, **`omg ive watched so many otter's vids lol`**. No grand fandom thesis is required. Sometimes a Deputy is simply deep enough into otter videos to volunteer the fact unprompted.",
          "Operational typo hall of fame remains strong: **`STAR OR CASSELL IS UPPOPOO`** while trying to get everybody to an event, plus the later welcome packet that briefly sent the server index to Whiskey by mistake. Being useful has never required Anayss to become a polished notification appliance."
        ]
      }
    ]
  }
};
