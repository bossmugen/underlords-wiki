import type { CharacterNarrative } from "./character-biographies-narrative";
import { snowNarrativeCharacterBios } from "./character-biographies-snow";
import { zoshaaNarrativeCharacterBios } from "./character-biographies-zoshaa";

const snow = snowNarrativeCharacterBios.snow;
const zoshaa = zoshaaNarrativeCharacterBios.zoshaa;

export const run470NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  snow: {
    ...snow,
    sections: [
      ...snow.sections,
      {
        period: "Unasked-for help",
        title: "IF THE THING IS BROKEN, HE IS ALREADY POKING IT",
        paragraphs: [
          "Another September 2020 mess catches a different side of Snow's technical instinct. Mugen thanks the people who tried to fix a problem, then gets more specific: `like i never even asked you guys to help fix it and you troubleshooted and tested uhu`. The important part is the lack of assignment. Something in Mugs's orbit was broken; people had already started testing it before she turned the problem into a task.",
          "Anthos immediately hands the credit away from the group with `it was all snow`. Snow is in the troubleshooting stretch himself. Whatever the broken thing actually was has dropped out of the surviving scene, but the social shape is clear enough: Snow sees a problem worth fixing and apparently starts working on it without waiting for somebody to make a ceremony out of asking.",
          "That is a useful kind of care for Snow because it does not require softness in presentation. He can be rules-minded, technical and exacting while still making somebody else's problem smaller before they have to request the labor. Anthos noticing enough to redirect the praise toward him completes the scene: Snow does the work; somebody else makes sure the room knows where the work came from."
        ]
      }
    ]
  },
  zoshaa: {
    ...zoshaa,
    sections: zoshaa.sections.flatMap((section) => {
      if (section.title !== "Petty Crimes") return [section];

      return [
        {
          period: "Recruitment / house fluency",
          title: "First she waits to get dragged in. Then she starts describing the place as a black hole.",
          paragraphs: [
            "July 2020 catches Zoshaa in the awkward half-second before belonging becomes ordinary. `i'm waiting for Gilli recruiting me to UL xD`, she says. Gilli answers that she is apparently already doing it while blackout drunk and had better be recruiting her to the right club. When `The new UL team` appears the next day, Zoshaa's first question is wonderfully practical: `Casual? 👀`. She is not standing outside giving a speech about how much she wants in. She is already inside the joke, checking which version of the plan these people have accidentally enrolled her in.",
            "A few months later the direction of gravity has flipped. Mugen mentions Nintendo planning an alt; Zoshaa answers, `its one of us dragging someone to our black hole`. That `our` does a lot of work for one tiny word. The person who had been waiting for Gilli to pull her through the door is now talking like a resident who knows exactly what the house does to newcomers: eventually somebody else gets dragged in too.",
            "Belonging never makes her omniscient, which is the part that keeps the arc recognizably Zoshaa. In November she can ask `whats the new cerb?` and `can i be in the group pwease 😭`, only for Mugen to explain that Cerberus is not a new boss at all, just a new level and an old mechanic returning. Zoshaa can know the house well enough to joke about its gravitational field and still show up late to the patch notes. Social fluency and mechanical awareness are apparently two completely different subscription tiers."
          ]
        },
        {
          ...section,
          paragraphs: [
            ...section.paragraphs,
            "**Tiny Font Menace:** NintendoShitcube could make typography itself part of the performance — ornate script, superscript mini-text, spaced letters, regional-indicator letters, stretched nonsense — and then use the daintiest possible visual delivery for `fucking zorb ball`, Wi-Fi rage, `ancient fuck`, or an aggressively tiny `idk`. The joke is not bad spelling. Zoshaa was styling the damn sentence."
          ]
        }
      ];
    })
  }
};
