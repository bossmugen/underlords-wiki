import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { suzimasuNarrativeCharacterBios } from "./character-biographies-suzimasu";
import { nemoNarrativeCharacterBios } from "./character-biographies-nemo";

const suziBase = suzimasuNarrativeCharacterBios.suzimasu;

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

const suziSections = suziBase.sections.map((section) =>
  section.title === "PETTY CRIMES"
    ? { ...section, paragraphs: [...section.paragraphs, ...pettyAdditions] }
    : section,
);

const pettyIndex = suziSections.findIndex((section) => section.title === "PETTY CRIMES");
if (pettyIndex >= 0) suziSections.splice(pettyIndex, 0, screenshotCourt);
else suziSections.push(screenshotCourt, { title: "PETTY CRIMES", paragraphs: pettyAdditions });

export const run253SuzimasuNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  suzimasu: {
    ...suziBase,
    sections: suziSections,
    closing: [
      "The structured Suzimasu dossier now has a cleaner contradiction than `scary founder became goofy`: Founder and later Consigliere on paper; initially quiet/scary/dangerous in several peers' memories; socially intermittent enough to joke about never checking in; repeatedly recognized when he returns; delighted to participate in screenshot court from either side; and still capable of dropping the prosecution voice the moment a friend needs a softer landing. Brisket, bathroom-drink failures, alien conversations, mustard-watermelon litigation, and `fun arc` do the rest. The title explains why he mattered institutionally. The pressure changes explain how he behaved around actual people."
    ]
  }
};

const nemoBase = nemoNarrativeCharacterBios.nemo;

const nemoBelonging: NarrativeSection = {
  period: "Recruitment / return contradiction",
  title: "RELATIONSHIPS — HE HOLDS THE DOOR OPEN MORE EASILY THAN HE WALKS BACK THROUGH IT",
  paragraphs: [
    "Nemo eventually gives the cleanest explanation of the person underneath the traveling-recruiter reputation himself: `everyone deserves attention thats why I bother [every]one`. When he talks about welcoming people, the reason gets even less tactical: `I like welcoming them... It gave me a purpose`. That shifts the role from résumé language into lived behavior. He notices people, makes contact, and treats welcome as worthwhile before there is any question of whether the relationship produces a recruit.",
    "Mugs' confirmed description of Nemo as UL's traveling recruiter fits that mechanism rather than replacing it. Nemo would visit other clubs, check them out, make friends, and sometimes return with new members. The important sequence is friendship first, conversion second. Nothing here turns every outside relationship into an assignment or makes Nemo a covert scout with a clipboard under his Cinnamoroll hat.",
    "The later ScarletMoon / re-entry material makes the direction reversal much more revealing. Nemo becomes uncertain about whether he himself still belongs or can comfortably return. The person who says everybody deserves attention is not automatically equally confident that the open door applies inward. He appears better at extending belonging than claiming it for himself. That does not rewrite formal membership policy; it gives the Sniper file a receiving side. Nemo can make somebody else feel welcome and still hesitate when he is the one standing at the threshold."
  ]
};

const nemoSections = [...nemoBase.sections];
const currentIndex = nemoSections.findIndex((section) => section.title.startsWith("Sniper is the shelf"));
if (currentIndex >= 0) nemoSections.splice(currentIndex, 0, nemoBelonging);
else nemoSections.push(nemoBelonging);

export const run254NemoNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  nemo: {
    ...nemoBase,
    sections: nemoSections,
    closing: [
      "Nemo's structured dossier now keeps both directions of the doorway in view. The early record shows social movement and the joke of becoming `one of you`; the recruiting reputation shows him carrying attention across club boundaries; his own words say welcome gave him purpose; and the later re-entry uncertainty shows that being good at offering belonging does not make receiving it effortless. Sanrio, Leo, baking, QOTD fins and `Find nemo` keep the person gloriously unlike a job description. Sniper is the shelf. The interesting part is who kept holding doors open, then occasionally had to ask whether one still opened for him."
    ]
  }
};
