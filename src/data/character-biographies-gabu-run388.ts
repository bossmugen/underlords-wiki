import type { CharacterNarrative } from "./character-biographies-narrative";
import { coreDeepOfficerCharacterBios } from "./character-bios-officers-core-deep";

const gabu = coreDeepOfficerCharacterBios.gabu;

export const run388GabuCharacterBios: Record<string, CharacterNarrative> = {
  gabu: {
    intro: gabu.overview,
    sections: [
      {
        title: "WHAT KEEPS HAPPENING",
        paragraphs: [
          ...gabu.characterNotes.map((note) => `${note.title}. ${note.text}`),
          "Access is another version of the same habit. When Mugi needed Club access in August 2022, Gabu did not make the room perform a scavenger hunt: she checked whether he was already on the current-members list, said she would scouter him, confirmed the access, and closed the ticket. Two years later, when Kaz said the bot was not updated, Gabu went straight back to IDs and registry state — then discovered the funniest possible continuity bug: `Already have him added from 2022 lol`. The joke only works because the infrastructure remembered what everybody else had forgotten. Gabu's practical care is often like that: make the doorway work now, leave enough behind that Future Gabu has something to find later.",
        ],
      },
      {
        title: "SCENES THAT STUCK",
        paragraphs: [
          ...gabu.history.map((beat) => beat.text),
          "In August 2022, a Daycare access request turns into a tiny Gabu workflow: check the current-members list, scouter the person, grant access, `Closed the ticket`. In July 2024, another bot/registry question sends her through UID and Miyu-net-ID checks until she realizes the person is already present from 2022. Nothing about the exchange is ceremonial. That is exactly why it belongs in her story: Gabu keeps turning belonging into fields somebody can actually use, and sometimes the old machinery gets to deliver the punchline back to her.",
        ],
      },
    ],
  },
};
