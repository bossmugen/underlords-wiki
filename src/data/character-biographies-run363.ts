import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { hishiroNarrativeCharacterBios } from "./character-biographies-hishiro-core";
import { momoNarrativeCharacterBios } from "./character-biographies-momo";

const hishiroBase = hishiroNarrativeCharacterBios.hishiro;

const hishiroSelfFiling: NarrativeSection = {
  period: "Wall of Shame / Fame",
  title: "SHE DOES NOT NEED A SCREENSHOT TO FILE AGAINST HERSELF",
  paragraphs: [
    "Hishiro can make herself Wall material without asking a screenshot to do the embarrassing work. By late 2023 she is willing to post a plain-text confession about getting outplayed and let the room react to the sentence itself. There is no image carrying the joke and no somebody-else-caught-me defense available. She has written the charge, submitted it, and left her own reputation sitting on the counter.",
    "That fits the older Cold/Hishiro habit of turning self-description into self-heckling. `I'm phenomenal at holding doors open :D` can sit beside `I'm also short?` without either becoming a solemn personality claim. The joke is that she can supply an extremely ordinary credential, a physical fact, or a mistake with nearly the same compact delivery she uses for practical answers. Hishiro does not seem especially protective of looking impressive if the less flattering sentence is funnier and true enough for the moment.",
    "Her earlier comment that `the wall feels eternal` lands differently beside that willingness to feed it herself. It is not a date for the Wall's origin and it does not make her its historian. It does make the fatigue sound participant-level: Hishiro knows the machine, knows what it does to people, and can still walk up years later and save everybody the upload bandwidth by prosecuting herself in text."
  ]
};

export const run363HishiroNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  hishiro: {
    ...hishiroBase,
    sections: [...hishiroBase.sections, hishiroSelfFiling],
  }
};

const momoBase = momoNarrativeCharacterBios.momo;

const momoRebound: NarrativeSection = {
  period: "Wall banter",
  title: "SHE CAN THROW THE JOKE BACK, LOSE THE NEXT BEAT, AND KEEP PLAYING",
  paragraphs: [
    "Momo's Wall banter with Ricochet and Ten is tiny enough to miss and useful enough not to. Ricochet answers one of Momo's posts with `kawaii waifu`; Momo immediately tries to boomerang the attention back at him with `you just destroyed your own auto`. Then Ten reverses the reversal. Momo's answer is one word: `damn`.",
    "That little concession says more than a victory speech would. Momo is comfortable enough to redirect praise into teasing, and comfortable enough to admit when somebody else has landed the cleaner punchline. She does not explain herself, defend the failed counterattack, or leave the bit. `damn` is recognition: yes, all right, you got me. It belongs beside the rest of her compact social voice because the economy is doing relationship work, not signaling distance.",
    "The exchange also keeps the Wall's image attribution where it belongs. Momo posted the root attachment; the surviving thread does not by itself say who made it, captured it, or appears in it. The person-level story is in the replies anyway: Momo can start the rebound, get rebounded on, and remain perfectly comfortable in the game."
  ]
};

export const run363MomoNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  momo: {
    ...momoBase,
    sections: [...momoBase.sections, momoRebound],
  }
};
