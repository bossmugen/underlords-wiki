import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { suzimasuNarrativeCharacterBios } from "./character-biographies-suzimasu";

const base = suzimasuNarrativeCharacterBios.suzimasu;

const screenshotCourt: NarrativeSection = {
  title: "SCREENSHOT COURT — COMPETE UNTIL THE HUMAN NEEDS A SOFTER LANDING",
  paragraphs: [
    "Suzimasu is not merely a recurring Wall defendant. Across 2020–2022 he treats the evidence machine as reciprocal sport: `Trying to win the wall of shame awards`, then `Since were sharing`, then later the inevitable defendant brief, `I can explainnnnnnn`. The useful pattern is participation from both sides. He can volunteer for the embarrassment economy, file somebody else, and accept that sooner or later the camera turns back around.",
    "The Ren sequence adds the brake pedal. When the self-roast under the filing changes temperature, Suzi stops optimizing for prosecution and answers `Aww it’s okay` / `I still wuv you`. The room does not have to abandon the Wall bit for him to change jobs inside it. One second he is playing evidence court; the next he is making sure the person under the joke lands softly enough to keep playing.",
    "That matters beside the old intimidating-first-impression material. Familiarity does not only make Suzimasu less scary to other people; it gives him enough information to respond to people without protecting a stern senior-Officer silhouette. Reciprocal embarrassment is fun while everybody is still in the same game. The joke is not more important than reading the room. `I still wuv you` remains affectionate peer language, not romance canon, and the surrounding Wall images remain visually sealed."
  ]
};

const pettyAdditions = [
  "**Wall Awards Applicant:** has explicitly announced `Trying to win the wall of shame awards`. Historical Consigliere, volunteer defendant, excellent career planning.",
  "**Mustard Watermelon, Watermelon Still Innocent:** Suzi labels a July 2021 filing `Me this afternoon`, tells Baby Lyssa to look up Lizzo eating mustard on watermelon, then refuses to dignify Tofu calling watermelon itself gross. Experimental topping: negotiable. Fruit slander: apparently unconstitutional. The posted MP4 remains uninspected, so the dossier does not invent its pixels or attribution beyond POSTED BY Suzimasu."
];

const sections = base.sections.map((section) =>
  section.title === "PETTY CRIMES"
    ? { ...section, paragraphs: [...section.paragraphs, ...pettyAdditions] }
    : section,
);

const pettyIndex = sections.findIndex((section) => section.title === "PETTY CRIMES");
if (pettyIndex >= 0) sections.splice(pettyIndex, 0, screenshotCourt);
else sections.push(screenshotCourt, { title: "PETTY CRIMES", paragraphs: pettyAdditions });

export const run253SuzimasuNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  suzimasu: {
    ...base,
    sections,
    closing: [
      "The structured Suzimasu dossier now has a cleaner contradiction than `scary founder became goofy`: Founder and later Consigliere on paper; initially quiet/scary/dangerous in several peers' memories; socially intermittent enough to joke about never checking in; repeatedly recognized when he returns; delighted to participate in screenshot court from either side; and still capable of dropping the prosecution voice the moment a friend needs a softer landing. Brisket, bathroom-drink failures, alien conversations, mustard-watermelon litigation, and `fun arc` do the rest. The title explains why he mattered institutionally. The pressure changes explain how he behaved around actual people."
    ]
  }
};
