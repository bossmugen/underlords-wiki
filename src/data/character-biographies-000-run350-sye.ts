import { allNarrativeCharacterBios } from "./character-biographies-all";

const current = allNarrativeCharacterBios.sye;

export const run350SyeNarrative = {
  sye: {
    ...current,
    sections: [
      ...current.sections,
      {
        period: "RELATIONSHIPS",
        title: "SNOW GETS THE LECTURE",
        paragraphs: [
          "One Events-room exchange makes the Sye-and-Snow rhythm almost embarrassingly clear. Sye does not write the lecture herself; she tags Snow: `Snow come lecture everyone on the importance of RSVP and the rules of 😡`. The phrasing assumes he will understand both the problem and the assignment. Snow takes the room-facing part. Sye is perfectly willing to be blunt about process, but she does not seem precious about being the person who has to deliver every correction herself. If somebody else is the better mouth for the moment, she hands them the microphone.",
          "That directness does not make the relationship chilly. Later Sye tags Snow with `love you 🥺`; when she says she has to fly out, Snow answers `You better!!!`. The affection sits beside the operational friction instead of erasing it. They can disagree about how something should run, hand work sideways, and still sound completely at home with each other. It is one of the cleaner examples of Sye's competence being social rather than solitary: knowing when to fix the thing herself is only half of it. Knowing exactly who to summon is the other half."
        ],
      },
    ],
  },
};
