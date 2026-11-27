import type { CharacterNarrative } from "./character-biographies-narrative";
import { tofu1602NarrativeCharacterBios } from "./character-biographies-tofu-1602";
import { cookieNarrativeCharacterBios } from "./character-biographies-cookie";

const tofu = tofu1602NarrativeCharacterBios.tofu;
const cookie = cookieNarrativeCharacterBios.cookie;

export const run516NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  tofu: {
    ...tofu,
    sections: [
      ...tofu.sections,
      {
        period: "2021 → 2024",
        title: "COOKIE IS NOT THE VICTIM. COOKIE HAS A RETURN-FIRE BUTTON.",
        paragraphs: [
          "The longer Tofu/Cookie file finally makes the reciprocity impossible to miss. On November 1, 2021 Anayss tags both of them and says **`I saw you both exposing your dms again ~`**. The important words are `both` and `again`: by then a third person already recognizes repeated exposure from both directions. Two days later Tofu announces **`I HAVE TO EXPOSE`** Cookie and posts image receipts. The images stay undescribed; the relationship mechanism does not need their pixels.",
          "Three years later Cookie sees Tofu with Wall access and immediately goes **`who gave Tofu access to this channel lmao she bouta expose me`**. Then, instead of behaving like a helpless target, Cookie posts a Tofu-tagged receipt with **`forgive me but i had to`**. Tofu answers **`OH~ you wanna play that game huh`**. That phrasing is the cleanest summary of the pair: exposure has become a known game with expected counterplay, not a one-way Tofu hobby that Cookie merely survives.",
          "The September 2024 round makes the rhythm even clearer without opening a single screenshot. Cookie posts an image. Tofu says **`Just you wait`**. Cookie answers with `:WiggleButt:` instead of backing out. Tofu later posts two image files plus evil-coded emotes; Cookie answers `:screm:`; Tofu closes on an angel smile. The room does not need a consent manifesto in the middle of the bit because these particular two people already understand the local script. That still does **not** make every exposure welcome in every context, and it does not turn their teasing into romance or literal hostility. It makes this pair's receipt warfare bidirectional enough to have choreography."
        ]
      }
    ]
  },
  cookie: {
    ...cookie,
    sections: [
      ...cookie.sections,
      {
        period: "2021 → 2024",
        title: "HE CAN DREAD TOFU'S RECEIPTS AND POST HIS OWN ANYWAY",
        paragraphs: [
          "Cookie's Tofu problem gets much funnier once the Wall stops treating him like passive prey. On November 1, 2021 Anayss tells both Cookie and Tofu **`I saw you both exposing your dms again ~`**. That one sentence upgrades the whole running-panda prosecution from `Tofu keeps catching Cookie` to a reciprocal habit the room already recognizes. The absolute beginning is still missing; `again` only tells us the game is older than that surviving line.",
          "By August 2024 Cookie knows Tofu's reputation well enough to predict the problem before anything happens: **`who gave Tofu access to this channel lmao she bouta expose me`**. Two days later he personally posts a Tofu-tagged receipt with **`forgive me but i had to`**. Tofu's answer is immediate recognition: **`OH~ you wanna play that game huh`**. Cookie therefore manages the very Cookie contradiction of anticipating his own prosecution and then opening court himself.",
          "The next round keeps the same posture. Cookie posts another image; Tofu says **`Just you wait`**; Cookie answers `:WiggleButt:` and stays in the exchange. Later come Tofu image posts and evil emotes, Cookie `:screm:`, and Tofu's angel smile. None of the screenshot pixels need to be invented. The human part is already visible: Cookie can complain about the exposure system, predict what Tofu will do, strike first anyway, and keep feeding the retaliation after being warned it is coming. `:PandaRun:` was never a resignation from Screenshot Court. Apparently it is what he wears to court."
        ]
      }
    ]
  }
};
