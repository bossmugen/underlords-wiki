import { allNarrativeCharacterBios } from "./character-biographies-all";

const current = allNarrativeCharacterBios.sye;

export const run350SyeNarrative = {
  sye: {
    ...current,
    sections: [
      ...current.sections,
      {
        period: "RELATIONSHIPS",
        title: "SHE DOESN'T NEED TO LOOK SMART TO BE USEFUL",
        paragraphs: [
          "Sye's working rhythm with Snow is unusually comfortable with unfinished answers. When Snow is trying to change the event system's timezone globally instead of editing every event one by one, Sye does not stand outside the problem and perform expertise at her. She asks if Snow needs help, climbs into the debugging, guesses wrong, immediately says `oh wait doest not the right command`, laughs, checks GitHub, and keeps trying. Snow is doing the same thing beside her: testing syntax, asking whether they are even in the right channel, throwing possibilities back into the loop. Neither of them needs the other to be infallible for the collaboration to keep working.",
          "Once Sye lands the working configuration, Snow's response is not just relief. She says `we need to document lol`, pins Sye's successful command, and explains that it is for the next time change. A separated September exchange already has Sye saying she is `just helping snow out` and Snow answering that the help is greatly appreciated. Put together, their competence looks shared rather than hierarchical: Sye is useful because she will stay in somebody else's problem even while being visibly wrong on the way there, and Snow turns the answer they found together into something future-them can reuse."
        ],
      },
    ],
  },
};
