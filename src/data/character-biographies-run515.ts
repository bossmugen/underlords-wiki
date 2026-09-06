import type { CharacterNarrative } from "./character-biographies-narrative";
import { run470NarrativeCharacterBios } from "./character-biographies-run470";
import { feliNarrativeCharacterBios } from "./character-biographies-feli";

const anayss = run470NarrativeCharacterBios.anayss;
const feli = feliNarrativeCharacterBios.feli;

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
  },
  feli: {
    ...feli,
    sections: [
      ...feli.sections,
      {
        period: "2023",
        title: "THE UNDERWORLD APPARENTLY HAS A LOADING SCREEN",
        paragraphs: [
          "Feli's Wall behavior adds a useful complication to the compact, practical version of him. He can perform annoyance like he is about to leave the entire stupid production behind — an eye-roll, a taunt, the general posture of somebody above the proceedings — and then about ten seconds later post **`Feli has ENTERED the Underworld server`** with another attachment. The mock resistance is not the opposite of participation. Half the time it looks like the loading screen.",
          "The same self-aware escalation shows up in his later Wall philosophy: **`To be the shamer you have to have no shame for others to shame you over`**. That is a magnificently convenient legal theory for somebody who is perfectly willing to prosecute other people while feeding the room material himself. Feli does not need to choose between being annoyed by Screenshot Court and enjoying the theater; apparently he can complain from inside the production and then add lighting cues."
        ]
      }
    ]
  }
};

// Keep the later Run 516 Tofu/Cookie overlays discoverable without touching the
// central biography registry in a separate commit. The registry imports this module
// as a namespace and merges every exported narrative map in declaration order.
export { run516NarrativeCharacterBios } from "./character-biographies-run516";
