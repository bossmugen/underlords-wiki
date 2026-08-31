import type { CharacterNarrative } from "./character-biographies-narrative";
import { run57NarrativeCharacterBios } from "./character-biographies-run57";
import { gilliNarrativeCharacterBios } from "./character-biographies-gilli";

const mia = run57NarrativeCharacterBios.mia;
const nelph = run57NarrativeCharacterBios.nelph;
const gilli = gilliNarrativeCharacterBios.gilli;

if (!mia || !nelph || !gilli) throw new Error("Run 58 biography bases are missing.");

export const run58NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mia: {
    ...mia,
    sections: [
      ...mia.sections,
      {
        title: "SHE DOESN'T MAKE COMING BACK A PENANCE",
        paragraphs: [
          "Mia can be dramatic about approximately everything except the part where somebody actually needs permission to come back. When an old rupture resurfaced in 2024, her answer was basically: yes, obviously I accept you, stop making this weird. `NO HARD FEELINGHSHS SHUT UP` is not elegant conflict-resolution language. It is better character language. Mia refuses the ceremonial apology loop and follows it with `life is too short to care fr`. The warmth is in how quickly she tries to lower the emotional price of re-entry.",
          "That same instinct shows up when Erys is trying to catch up in Raja and hates half the chores required to do it. Mia does not sell her a motivational poster. She gives her the useful little survival list: weeklies, dailies, bot training, bounties, class and squad tokens, plus the practical trick of dropping titles when attending class elsewhere. Erys can complain; Mia can agree the grind is annoying; the checklist still gets handed over. She is good at making the next step feel less like a referendum on whether you belong.",
        ],
      },
    ],
  },

  nelph: {
    ...nelph,
    sections: [
      ...nelph.sections,
      {
        title: "SHE WILL FIX THE PICTURE. SHE MAY ALSO MAKE IT WORSE ON PURPOSE.",
        paragraphs: [
          "Nelph's practical streak has a gremlin twin. Give her photos and there is a decent chance she starts thinking about the edit — sometimes because the image needs help, sometimes because humiliating somebody more efficiently is itself the artistic brief. `Snow knows. I love editing pics` is the whole problem in one sentence. She can also plant her flag on the serious side with `LET THE ARTISTS HANDLE THE EDITING AND MODELLING`, which makes the joke sharper: this is not somebody randomly discovering a crop tool. She has opinions about what looks right and enough confidence to say so.",
          "Those opinions escape the art department. Food has to go together; clashing flavors bother her. Tarot gets an immediate `I LOVE TAROT`, followed by enough familiarity to talk about using only the major arcana. Then the Wall catches the same brain facing the apocalypse and skipping directly from survival logistics to whether dead people should be wall-shamed before burial. Nelph can be extremely practical. Unfortunately, practicality does not prevent her from applying the workflow to completely deranged premises.",
        ],
      },
    ],
  },

  gilli: {
    ...gilli,
    sections: [
      ...gilli.sections,
      {
        title: "HER GAME LIBRARY HAS A COMMUTE",
        paragraphs: [
          "Gilli is not naturally a shooter person — `Shooting games aren't my cup of boba` — but she will still try Valorant because apparently taste is not the same thing as refusing the invitation. Her older copy of The Forest is marooned on an abandoned laptop, and a chunk of her physical game collection lives at her mom's house, including games she inherited from her dad. Visiting home can therefore include the extremely specific side quest of gathering her own library back together.",
          "It is small ordinary-life material, which is exactly why it belongs. Gilli's game taste is not a neat genre label. It is old hardware, inherited boxes, things left at home, willingness to try somebody else's game anyway, and the kind of personal collection that has accumulated enough history to require logistics.",
        ],
      },
    ],
  },
};
