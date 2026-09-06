import type { CharacterNarrative } from "./character-biographies-narrative";
import { narrativeCharacterBios } from "./character-biographies-narrative";
import { miaNarrativeCharacterBios } from "./character-biographies-mia";
import { snowNarrativeCharacterBios } from "./character-biographies-snow";
import { zoshaaNarrativeCharacterBios } from "./character-biographies-zoshaa";
import { ricochetNarrativeCharacterBios } from "./character-biographies-ricochet";
export { aeshleenNarrativeCharacterBios } from "./character-biographies-aeshleen";

const anayss = narrativeCharacterBios.anayss;
const mia = miaNarrativeCharacterBios.mia;
const snow = snowNarrativeCharacterBios.snow;
const zoshaa = zoshaaNarrativeCharacterBios.zoshaa;
const ricochet = ricochetNarrativeCharacterBios.ricochet;

export const run470NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ricochet,
  anayss: {
    ...anayss,
    sections: anayss.sections.map((section) => {
      if (section.title !== "The same instinct moves from rooms to clocks") return section;

      return {
        ...section,
        paragraphs: [
          ...section.paragraphs,
          "The same producer reflex could grab **content**, not just schedules. In July 2021 Snow was bragging about UL's `knowledge of pasties ... and there applicationly use`; Mugen joked that everybody had skipped the `entrance exam` but that this was `standard knowledge among our staff`. Anayss true-replied to that exact line: **`boss, that's totally giving us kahoot ideas`**, and tagged Gilli before the joke had even finished cooling off. Vanness immediately offered `jack kinhoff`, `moe lester`, and `Hugh Dick`; Gilli evil-clapped; Mugen answered with dark-side Kermit. There is no surviving proof that those exact questions shipped. The character beat is earlier than publication anyway: Anayss hears the room inventing bullshit and, almost instantly, starts seeing programming."
        ]
      };
    })
  },
  mia: {
    ...mia,
    sections: mia.sections.flatMap((section) => {
      if (section.title !== "Maho walks through the front desk and Mugen realizes who she is") return [section];

      return [
        section,
        {
          period: "October 2022–June 2023",
          title: "SHE COMES IN AS MIAKA, THEN STARTS SHOWING OTHER PEOPLE WHERE TO GO",
          paragraphs: [
            "A few weeks after the Maho alias puzzle, the same account gives the Lobby an almost aggressively efficient self-introduction: **`Miaka underlords 16`**. Hic answers **`Haiii miakaaaa`** almost immediately. There is no grand reveal hiding inside the three fields; the useful part is how little social explanation they need. Miaka supplies the form, Hic supplies the familiarity, and the room keeps moving.",
            "By the following spring, Mia is already standing on the other side of that same front door. A newcomer arrives and Mia true-replies with the house orientation: light-pink names are minors / Platelets and should be treated responsibly, keep sensitive topics out of the room, take drama to DMs, here is Biodata, here is the server map, here is main chat. Then she adds **`roles be assigned soon`**. The funny little reversal is that her own intake had said sixteen only months earlier. The teenager who had just been processed through the doorway is now one of the people explaining the minor-safety warning to everybody else.",
            "That practical competence does not erase the squealing. When LuCiel appears in June, Mia goes **`Lucielllll:Cute_Opposum:`**; nine seconds later LuCiel answers **`Miaaa`**. Mia immediately pivots from reunion noise to **`hai hai welcome answer the question and someone will get u inn`**, then drops the same safety-and-navigation block. Warmth and logistics are not separate Mia modes here. She can stretch somebody's name across the screen and, without changing rooms, become the person making sure they know what to do next.",
            "Daya supplies the softest peer description in the same stretch: **`mia the UL honorary sweetheart`**. Mia's account answers with a wheeze and then a blush. Nobody needs to turn `Honorary Sweetheart` into an office for the line to matter. It is simply a tiny piece of reputation from somebody in the room, and Mia's reaction is very Mia: laughter first, embarrassment second, no acceptance speech."
          ]
        }
      ];
    })
  },
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
