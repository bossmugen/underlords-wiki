import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { anthosNarrativeCharacterBios } from "./character-biographies-anthos";
import { oyasumiNarrativeCharacterBios } from "./character-biographies-oyasumi";
import { snowNarrativeCharacterBios } from "./character-biographies-snow";
import { renNarrativeCharacterBios } from "./character-biographies-ren";
import { syeNarrativeCharacterBios } from "./character-biographies-sye";
import { gilliNarrativeCharacterBios } from "./character-biographies-gilli";
import { moonNarrativeCharacterBios } from "./character-biographies-moon";

function withSection(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  return { ...base, sections: [...base.sections, section] };
}

export const run40NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  anthos: withSection(anthosNarrativeCharacterBios.anthos, {
    period: "April 2021",
    title: "She can draw a line without first inventing a villain",
    paragraphs: [
      "One April 2021 conflict gives Anthos a sharper edge than the furniture mythology usually gets to show. Harsh in-group wording lands badly once it crosses into a different context. Anthos does not pretend the speaker must have meant harm in order for the harm to count; she acknowledges the non-malicious intent and still says the phrasing should stop. The distinction is very Anthos: nobody has to become a cartoon monster before a boundary becomes legitimate.",
      "She also says genuinely toxic friendships can be difficult to leave. The wiki does not reproduce the harmful wording or identify the person it hurt; Anthos's side is enough. The important thing is that her gentleness is not avoidance. She can stay soft in tone while being perfectly clear that impact outranks the comfort of insisting somebody meant well."
    ],
  }),

  oyasumi: withSection(oyasumiNarrativeCharacterBios.oyasumi, {
    title: "Petty Crimes: pineapple belongs on the pizza, apparently",
    paragraphs: [
      "For once the evidence-procedure man is on trial for an ordinary stupid opinion. During a pineapple-pizza discussion, Anthos asks Oyasumi directly whether he actually likes pineapple on pizza. Oya does not retreat into procedural ambiguity; he keeps the pro-pineapple alignment going and answers with a pineapple-pizza GIF.",
      "One pizza argument does not become a signature dish or lifelong creed. It is just useful to know that beneath the mock filings, dry verdicts, and attempts to amend the record, Oyasumi is apparently willing to stand in public and defend fruit on pizza. Nobody made him do that."
    ],
  }),

  snow: withSection(snowNarrativeCharacterBios.snow, {
    title: "The prosecution turns him into a cat, so he joins the exhibit",
    paragraphs: [
      "A later off-duty embarrassment scene catches Snow doing something more interesting than winning an argument. Peers circulate a cute/embarrassing Snow-as-cat bit: Mia says `they got u`, Cogumelo says `he's a cat now`, Rotini immediately nominates the material for the Wall, and Moon calls it `cutest nyah`. Snow's answer is not a dignity hearing. He changes his avatar to join the bit.",
      "The actual image has not been safely inspected, so the wiki keeps the visual claims exactly where the witnesses put them: cat framing, public teasing, avatar response. What matters is the recovery move. Snow gets turned into the exhibit, then voluntarily helps author the next version of it. For somebody whose public file contains rules, systems, privacy boundaries, and enough old-man prosecution to fill a courthouse, the willingness to put on the cat avatar is excellent evidence that embarrassment does not always end in defense. Sometimes the defendant changes costumes."
    ],
  }),

  ren: withSection(renNarrativeCharacterBios.ren, {
    period: "January 2021",
    title: "Before the easy teasing, Ren was watching Gilli from a distance",
    paragraphs: [
      "Ren later becomes one of the people who can tease Gilli with complete familiarity, which makes an older memory much sweeter. In January 2021 Ren calls Gilli the `top assassin in my eyes`, says she wanted to be like her, and remembers an earlier phase when Gilli could feel intimidating or scary. Gilli laughs that Ren used to quietly watch.",
      "That gives the relationship an actual before-picture. Ren does not enter every connection as the loud continuity gremlin who already knows everybody's lore. At least here, admiration comes first: watch the person, be a little intimidated, want to be like her, then eventually become familiar enough that the distance disappears into ordinary teasing."
    ],
  }),

  sye: withSection(syeNarrativeCharacterBios.sye, {
    period: "March 2022",
    title: "The care she gives is louder than the care she asks to receive",
    paragraphs: [
      "Sye gives the archive one of its cleaner first-person distinctions between how she cares for people and how she wants people to care for her. She describes helping as her preferred language, especially acts of service, and also names food as something she likes to give. That tracks beautifully with the person who keeps solving, organizing, writing, fixing, and feeding systems until they behave.",
      "What she wants back is quieter. Sye describes simple presence, somebody lending an ear, a gesture that makes her feel welcome; when she is emotionally drained, sometimes the useful thing is simply space to recover. It should not be turned into a universal rule for every mood she has ever had. As a stated preference, though, it matters: the systems brain does not necessarily want to be system-managed in return. She can offer care in tasks and receive it best as company."
    ],
  }),

  gilli: withSection(gilliNarrativeCharacterBios.gilli, {
    period: "February 2022",
    title: "The house beats Dragon Raja in the budget meeting",
    paragraphs: [
      "In February 2022 Gilli says she has stopped spending money on Dragon Raja because she is buying a house and expects house expenses. The archive does not need the location, price, mortgage, co-buyer, income, or legal paperwork; none of that is public business and none of it is required for the scene to work.",
      "The useful character beat is simpler. Real adult life has entered the budget meeting, and the mobile game loses. Gilli does not have to stop caring about UL for Dragon Raja's financial claim on her to shrink. It is a tiny but concrete glimpse of the point where the game's demands start competing with a life that has bigger bills."
    ],
  }),

  moon: withSection(moonNarrativeCharacterBios.moon, {
    period: "March 2025",
    title: "The old student snapshot finally gets a later-life update",
    paragraphs: [
      "Moon's older archive catches a nursing/study motivation snapshot, but that is not where the public biography should freeze her. By March 2025 she gives a later first-person update: she is working as a pharmacy tech while pursuing further education.",
      "That does not make the wiki entitled to an employer, school, exact program, extra credentials, or a neat career prophecy. It does give Moon an evolving adult-life line instead of leaving her trapped in the first educational frame the archive happened to catch. The safer version is also the more human one: healthcare-adjacent pharmacy work, more education still in progress, story continuing."
    ],
  }),
};
