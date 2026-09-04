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
          "Gabu's maintenance habit gets even more specific when the house considers replacing Saber with Carl. She does not jump from `new bot exists` to `ship it`. Her own pinned note starts `If everything works ok, i will try replace saber with carl`, then turns the week into a checklist of warning/start alerts and gets edited again days later. The social instinct and the technical one line up almost embarrassingly well: make the thing feel easy for everybody else by being the person who quietly verifies the boring parts before they become everybody else's problem.",
        ],
      },
      {
        title: "SCENES THAT STUCK",
        paragraphs: [
          ...gabu.history.map((beat) => beat.text),
          "On April 17, 2023, Carl is being tested against Saber's event-alert work. Gabu pins `Gabu's alerts check`, opens with `If everything works ok, i will try replace saber with carl`, and lays out paired alert checks across Monday through Sunday; the post is edited again on April 22. By October, Carl is visibly issuing live event alerts. The interesting part is not bot trivia. It is Gabu refusing to make a migration on vibes: test it, watch it, leave a checklist, come back. Soft delivery; methodical backend brain.",
        ],
      },
    ],
  },
};
