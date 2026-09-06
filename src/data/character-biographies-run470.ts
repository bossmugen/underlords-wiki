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
  },
  dainyamite: {
    intro: [
      "Dainyamite is quiet in exactly the way that fails to make a person forgettable. A few sensory preferences — cats, rain, warm showers, coffee-shop smell, late-night music — were already enough for Ansun to see `cat` and guess Dainy almost immediately. The Wall adds a second layer: she may check whether somebody is being sarcastic before she commits to the bit, but once the answer is no, the vowels start multiplying and mint chocolate has apparently acquired a defense ministry."
    ],
    sections: [
      {
        title: "SHE CHECKS THE VIBE BEFORE SHE STARTS YELLING",
        paragraphs: [
          "Ren answers Dainy's `mint choco is good 😮` with **`ThANKSSSSS`**. Dainy does not automatically assume the enthusiasm is sincere; she comes back with **`uhhh i can't tell if this is sarcasm or not 😅`**. Ren immediately clarifies **`ITS NOOOT!! I love mint choco chip`** and starts unloading emotes. Only then does Dainy go fully in: when Ren mentions mint-chocolate-chip birthday socks, the reply is an elongated **`oooooooooooooooooo`** plus Cat Sporkle. The hesitation is tiny, but it tells you how she moves. Dainy can be socially loud once she knows what room she is actually standing in.",
          "That makes Ren's older `serious until we actually started talking` impression feel less like a contradiction that needs solving and more like the operating system. Dainy can look measured at the threshold, check tone when she is unsure, and then become ridiculous with alarming efficiency once the safety of the exchange is clear."
        ]
      },
      {
        title: "MINT CHOCOLATE IS NOW A RELATIONSHIP TEST, APPARENTLY",
        paragraphs: [
          "Gilli knows exactly which food opinion to poke. She tags Dainy to announce **`I hate Mint and chocolate together`**. Dainy's rebuttal is not a policy paper; it is a mint-ice-cream Tenor link, followed by the discovery that if you search `minto choco` in GIFs, **`its all cookie run 😂`**. That is useful relationship texture because the targeting is the point. Gilli remembers the preference well enough to needle it directly, and Dainy answers by escalating the preference into propaganda.",
          "Ren can summon her the same way. Months later Ren tags Dainy into a Wall scrollback pocket; Dainy appears less than half a minute later with a wheeze reaction. She is not one of the people who needs to seize the floor to be socially legible. Sometimes the whole exchange is: somebody knows which joke will get her, somebody calls her over, Dainy arrives and laughs."
        ]
      },
      {
        title: "SHE WILL CORRECT THE ROOM WITHOUT MAKING A SPEECH",
        paragraphs: [
          "When Marian looks at a sleepy RV and asks whether they are high, Dainy answers **`lmao rv is half asleep 😂`**. It is one small context correction, delivered casually and without turning the moment into an inquiry. That same economy shows up all over her file: the person is vivid because the little interventions are specific, not because she writes the most."
        ]
      },
      {
        title: "Petty Crimes",
        paragraphs: [
          "Directly pro–mint chocolate. Has typed `minto choco` while trying to find supporting GIF evidence and discovered the search results had been annexed by Cookie Run. Can apparently go from `is this sarcasm` to an eighteen-letter `oooooooooooooooooo` once the vibe check clears. Still fundamentally vulnerable to cats, naps, warm showers after rain, and music that knows when to stop talking."
        ]
      }
    ],
    closing: [
      "Dainy does not become more interesting when the volume goes up; the volume change is interesting because it is selective. She reads tone, lets familiarity unlock the sillier register, and can be summoned by the exact preference somebody already knows will make her answer. Quiet was never the same thing as vague."
    ]
  },
  dyingfox: {
    intro: [
      "Dyingfox is a permanent Platelet whose public footprint keeps proving that authored-message count is a terrible substitute for presence. Fox can go nearly silent in prose and still spend years visibly inhabiting the Wall through reactions: laughing, wincing, sipping, screaming, facepalming, co-signing, and occasionally answering one direct summon with exactly the tiny gesture the room needed."
    ],
    sections: [
      {
        title: "FOX HAS APPARENTLY BEEN IN THE GALLERY THE WHOLE TIME",
        paragraphs: [
          "The authored Wall ledger is almost comically small: three direct messages in the surviving 2022 pocket. The reaction layer tells a different story. The same stable account is already reacting on the Wall by December 2020 and is still there in May 2025. That does not turn every emoji into a thesis. It does change the person-shaped read. Fox's quietness is not disappearance; a lot of the participation simply lives below the text box.",
          "And the reactions are not one automatic stamp. Depending on the filing, Fox can evil-smirk, mark something cursed, sip, fat-laugh, scream, facepalm, wheeze, skull, sob, or stack several reactions on one upload. The exact emotion stays local to the thing being reacted to. The broader habit is the point: Dyingfox often joins the room from the gallery rather than the podium."
        ]
      },
      {
        title: "REN CAN SAY `FOX HALP` AND FOX IS ALREADY THERE",
        paragraphs: [
          "The cleanest Ren scene is still gloriously small. Ren writes **`fox halp`**. Fox answers in under seven seconds with a pat emote, then follows with **`It's dinner you can eat it`**. The room immediately starts assigning dinner points. Fox does not become a formal support department because of one snack ruling; what lands is the ease of summons. Ren knows to call Fox. Fox understands enough to answer without requiring the whole relationship to be narrated first.",
          "The reaction layer makes that feel less isolated. Years later Fox is still among the people reacting to Ren's Wall uploads. No closeness ranking is needed. Their Wall-local rhythm is already visible: Ren can call; Fox can appear; the relationship is comfortable enough to function in tiny signals."
        ]
      },
      {
        title: "SMALL SIGNALS, STUPIDLY LONG HALF-LIFE",
        paragraphs: [
          "The rest of the Dyingfox file keeps the same scale. `Haii ghostie` gets `Hi fox` back. A knife-emote outbreak becomes **`Starting fights again`**. Daycare asylum costs snacks. Later the room feeds Fox and gets a hug back. In the 2026 reunion, Cele says `We make no promises` after Mugen tells everybody not to burn the house down; Fox signs underneath with the cleaner **`No promises`**. None of these needs an epic arc. Their continuity is the arc.",
          "That is why the Wall reaction history matters so much. Fox's style does not have to become more prose-heavy to become durable. Years can pass and the same person is still participating through the form that already suited them: a reaction, a compact line, a perfectly timed co-sign."
        ]
      },
      {
        title: "Petty Crimes",
        paragraphs: [
          "Has conducted a four-and-a-half-year Wall career partly through reaction buttons. Repeatedly chose `GuraHmph` under hydration reminders without this becoming evidence of actual hydration crimes. Once made snacks the unofficial price of Daycare asylum. Can answer `fox halp` with a pat and a dinner ruling in less time than some people take to find the emoji picker."
        ]
      }
    ],
    closing: [
      "Dyingfox's archive presence is small-scale, not small. Fox rarely needs a speech to be recognized inside the room. The long-running trick is almost the opposite: stay easy to summon, answer in the smallest useful unit, and let the house remember the signal."
    ]
  }
};
