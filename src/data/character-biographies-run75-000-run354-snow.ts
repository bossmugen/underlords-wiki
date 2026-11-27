import { run336SnowNarrative } from "./character-biographies-000-run336-snow";

const current = run336SnowNarrative.snow;

const saberControlIndex = current.sections.findIndex(
  (section) => section.title === "FIVE MINUTES EARLY, NOT FIVE REMINDERS FOREVER",
);

const sections = current.sections.map((section, index) =>
  index === saberControlIndex
    ? {
        ...section,
        paragraphs: [
          ...section.paragraphs,
          "The useful part is that this was not only Snow narrating his own design logic after the fact. By January 2021, other people remembered the early-start habit as deliberate arrival slack too: Anthos remembered Snow putting an event a little early so people had time to get online, while Sye/Life remembered a larger original buffer and that automatic reminders had eventually made it unnecessary. The remembered minute count wanders; the motive does not. People needed time to actually arrive, so the schedule bent around people.",
          "That makes the very next day funnier. When the event tooling needs a reset, the same Snow whose timing logic other people remembered says `I just dont recall how lol`, then asks Gabu to `fix stupid bot?`. Competence does not require him to cosplay as a man who remembers every lever forever. He can help build the system, forget the procedure, ask somebody who knows, and keep moving. The structure matters; protecting a technical-authority persona apparently does not.",
        ],
      }
    : section,
);

export const run354SnowNarrative = {
  snow: {
    ...current,
    sections,
  },
};
