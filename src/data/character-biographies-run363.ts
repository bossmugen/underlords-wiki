import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { hishiroNarrativeCharacterBios } from "./character-biographies-hishiro-core";
import { jasNarrativeCharacterBios } from "./character-biographies-jas";
import { momoNarrativeCharacterBios } from "./character-biographies-momo";
import { mugenNarrativeCharacterBios } from "./character-biographies-mugen";
import { oyasumiNarrativeCharacterBios } from "./character-biographies-oyasumi";

const hishiroBase = hishiroNarrativeCharacterBios.hishiro;

const hishiroSelfFiling: NarrativeSection = {
  period: "Wall of Shame / Fame",
  title: "SHE CAN FILE THE RECEIPT AND SIGN IT `:HEHE:`",
  paragraphs: [
    "Hishiro can make herself Wall material without asking a screenshot to do the embarrassing work. By late 2023 she is willing to post a plain-text confession about getting outplayed and let the room react to the sentence itself. There is no image carrying the joke and no somebody-else-caught-me defense available. She has written the charge, submitted it, and left her own reputation sitting on the counter.",
    "The older Wall version is even smaller and somehow more Hishiro. In September 2020 she is the lone `Hehe` on one of Anthos's screenshot filings; twice more that month, Hishiro posts an attachment of her own and follows it within seconds with `:Hehe:`. The useful part is already done. The tiny grin is the signature. Her practical screenshot-helper brain and her gremlin court-stamp are not competing personalities; sometimes she completes the filing and immediately becomes the menace who seems delighted that the filing exists.",
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

// Later person-first overlays can ride this already-registered module without turning
// the resolver into another giant receipt ledger. Jas's source lives in its own file;
// exporting the map here makes the public route pick it up through run363Module.
export const run366JasNarrativeCharacterBios: Record<string, CharacterNarrative> = jasNarrativeCharacterBios;

const mugenBase = mugenNarrativeCharacterBios.mugen;
const oyasumiBase = oyasumiNarrativeCharacterBios.oyasumi;

const oyasumiDefenseCollapse: NarrativeSection = {
  period: "August 2022",
  title: "HE CAN WIN THE DEFENSE IN ONE WORD AND THEN PERSONALLY REOPEN THE CASE",
  paragraphs: [
    "One August 31 Wall filing reduces Oyasumi's entire legal strategy to two messages. Gilli tags him with a screenshot. Oya answers `No 💀`. Seven seconds later, apparently dissatisfied with the dangerous amount of certainty he has accidentally created, he adds `Or did I ?`. The first line could have ended the defense. The second line volunteers reasonable doubt against himself.",
    "That is the same contradiction already sitting inside `Didn't want to crop me in this mess` followed by `Still hard evidence of your crimes`, only cleaner. Oyasumi likes the witness position and knows the language of the case file, but he is too willing to improve the joke to stay safely outside the exhibit. Gilli barely has to prosecute. Oya can apparently cross-examine his own alibi."
  ]
};

const oyasumiPettyCrimes: NarrativeSection = {
  period: "Petty Crimes",
  title: "Petty Crimes",
  paragraphs: [
    "Oyasumi has a reusable emergency procedure for visual assault: the exact same light-mode-flashbang cat Tenor page turns up under his name in March 2023, September 2023, and October 2024. Nineteen months pass; the cat remains on call. It is less a grand running gag than a personal reaction prop he apparently refuses to retire.",
    "He also has a habit of making one line do the work of a paragraph. `Most intelligible ul conversation.` `Caught my boy in 4k.` `A face only a mother could love.` `Float like a butterfly, stink like a bee.` Oya's small crimes are mostly crimes of compression: assess disaster, issue sentence, leave before anybody can ask for an essay."
  ]
};

const mugenKiroBandwidth = "Kiro gives the structure-person one of her nicer contradictions. He can throw `Nuts` into the room and get `you`; hours later `Me` gets hearts. At the opposite extreme, a full character essay gets `A full ass essay and I'm here for it`. Kiro has separately described how much he once overthought ordinary interaction, right down to whether to hit Send. With Mugs, at least, that pre-processing is hard to see in these scenes. The planner is not asking him to arrive neatly packaged. One-word nonsense can land. So can the whole fucking essay.";

export const run372NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  oyasumi: {
    ...oyasumiBase,
    sections: [
      oyasumiBase.sections[0],
      oyasumiDefenseCollapse,
      ...oyasumiBase.sections.slice(1),
      oyasumiPettyCrimes,
    ],
  },
  mugen: {
    ...mugenBase,
    sections: mugenBase.sections.map((section) =>
      section.title === "Control freak, not oracle"
        ? { ...section, paragraphs: [...section.paragraphs, mugenKiroBandwidth] }
        : section
    ),
  },
};
