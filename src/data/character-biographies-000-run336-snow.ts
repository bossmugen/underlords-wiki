import { allNarrativeCharacterBios } from "./character-biographies-all";

const current = allNarrativeCharacterBios.snow;

export const run336SnowNarrative = {
  snow: {
    ...current,
    sections: [
      ...current.sections,
      {
        period: "SABER CONTROL",
        title: "FIVE MINUTES EARLY, NOT FIVE REMINDERS FOREVER",
        paragraphs: [
          "Snow's event-maintenance brain is not only about making the clock exact. While testing Saber in September 2020, he confirms an event is deliberately set five minutes early `just so people can get on`. The schedule is supposed to bend around the humans using it. Then the room discovers Saber can stack reminder posts and Snow's immediate verdict is `ugh that might be anoying lol` — followed by the wonderfully domestic diagnosis that it is `like the never ending snooze button`.",
          "That adds an important edge to the technical Snow already preserved here. Precision is not the goal by itself. He is willing to build slack into the timing because people need time to arrive, and he is equally willing to reject technically useful behavior when it starts making the room irritating to live in. Structure, but apparently not at the cost of becoming everybody's worst alarm clock.",
          "The same session also lets Sye help him without turning the handoff into a prestige emergency. Sye — on her `sycessences` account, then displayed as `ƐℲı˥` — notices a duplicate schedule interfering, asks Snow to delete it, keeps trying when a command errors, then closes the loop with `Nvm I did it`. Snow answers `thank Sy`. When the bot keeps fighting them, Mugen laughs that it is `fightin yall`; Snow answers `Well partially my fault`. Technical authority here includes thanking the person who fixed the thing and admitting when part of the mess belongs to him.",
        ],
      },
    ],
  },
};
