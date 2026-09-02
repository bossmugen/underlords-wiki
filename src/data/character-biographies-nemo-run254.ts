import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { nemoNarrativeCharacterBios } from "./character-biographies-nemo";

const base = nemoNarrativeCharacterBios.nemo;

const belongingSection: NarrativeSection = {
  period: "Recruitment / return contradiction",
  title: "RELATIONSHIPS — HE HOLDS THE DOOR OPEN MORE EASILY THAN HE WALKS BACK THROUGH IT",
  paragraphs: [
    "Nemo eventually gives the cleanest explanation of the person underneath the traveling-recruiter reputation himself: `everyone deserves attention thats why I bother [every]one`. When he talks about welcoming people, the reason gets even less tactical: `I like welcoming them... It gave me a purpose`. That shifts the role from résumé language into lived behavior. He notices people, makes contact, and treats welcome as worthwhile before there is any question of whether the relationship produces a recruit.",
    "Mugs' confirmed description of Nemo as UL's traveling recruiter fits that mechanism rather than replacing it. Nemo would visit other clubs, check them out, make friends, and sometimes return with new members. The important sequence is friendship first, conversion second. Nothing here turns every outside relationship into an assignment or makes Nemo a covert scout with a clipboard under his Cinnamoroll hat.",
    "The later ScarletMoon / re-entry material makes the direction reversal much more revealing. Nemo becomes uncertain about whether he himself still belongs or can comfortably return. The person who says everybody deserves attention is not automatically equally confident that the open door applies inward. He appears better at extending belonging than claiming it for himself. That does not rewrite formal membership policy; it gives the Sniper file a receiving side. Nemo can make somebody else feel welcome and still hesitate when he is the one standing at the threshold."
  ]
};

const sections = [...base.sections];
const currentIndex = sections.findIndex((section) => section.title.startsWith("Sniper is the shelf"));
if (currentIndex >= 0) sections.splice(currentIndex, 0, belongingSection);
else sections.push(belongingSection);

export const run254NemoNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  nemo: {
    ...base,
    sections,
    closing: [
      "Nemo's structured dossier now keeps both directions of the doorway in view. The early record shows social movement and the joke of becoming `one of you`; the recruiting reputation shows him carrying attention across club boundaries; his own words say welcome gave him purpose; and the later re-entry uncertainty shows that being good at offering belonging does not make receiving it effortless. Sanrio, Leo, baking, QOTD fins and `Find nemo` keep the person gloriously unlike a job description. Sniper is the shelf. The interesting part is who kept holding doors open, then occasionally had to ask whether one still opened for him."
    ]
  }
};
