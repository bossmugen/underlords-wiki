import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { deepAnayssOfficerCharacterBios } from "./character-bios-officers-anayss-deep";
import { dyingfoxNarrativeCharacterBios } from "./character-biographies-dyingfox";
import { hishiroNarrativeCharacterBios } from "./character-biographies-hishiro-core";
import { jasNarrativeCharacterBios } from "./character-biographies-jas";
import { momoNarrativeCharacterBios } from "./character-biographies-momo";
import { mugenNarrativeCharacterBios } from "./character-biographies-mugen";
import { oyasumiNarrativeCharacterBios } from "./character-biographies-oyasumi";
import { prideNarrativeCharacterBios } from "./character-biographies-pride";
import { ryoNarrativeCharacterBios } from "./character-biographies-ryo";
import { run388GabuCharacterBios } from "./character-biographies-gabu-run388";

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

// Ryo's finished person-first biography was deepened from the current Wall pass in its
// own file. Exporting it through this already-registered module makes that biography an
// actual public owner instead of leaving a good character file stranded off-route.
export const run376RyoNarrativeCharacterBios: Record<string, CharacterNarrative> = ryoNarrativeCharacterBios;

// Pride's Wall history is its own person-shaped file; export it through the registered
// overlay module so the corpse mythology replaces the thin Staff fallback on his route.
export const run378PrideNarrativeCharacterBios: Record<string, CharacterNarrative> = prideNarrativeCharacterBios;

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

const dyingfoxBase = dyingfoxNarrativeCharacterBios.dyingfox;

const dyingfoxLilly: NarrativeSection = {
  period: "December 2020 – February 2021",
  title: "FOX SAYS GOOD MORNING FIRST; LILLY ANSWERS AT STADIUM VOLUME",
  paragraphs: [
    "Dyingfox's low-bandwidth style is easy to mistake for passivity until Lilly enters the file. Fox is the one repeatedly starting the tiny contact: `Morning lilly!` in December, another `Morning lilly!` three days later, the same greeting again in January, then `Eli hug @Lilly👽` in February. Lilly receives those little openings at approximately one hundred times the volume: `FOX OMG HIIIII`, `I LOVE YOU`, later `HI SUNSHINE`. Fox answers `Love you too!`, `Hi!`, and `:Milk_Love:`. Quiet does not mean waiting to be noticed. Fox keeps knocking first.",
    "That makes the rest of Dyingfox's compact care language feel less like an archive accident and more like a social method. With Lilly, the initiative is often Fox's; the response is just spectacularly louder on the other side. Neither person needs to define the relationship for the rhythm to be obvious. Fox offers a small opening, Lilly turns the porch light into a stadium, Fox answers without suddenly becoming verbose.",
    "The affection language earns familiar closeness and mutual warmth, not romance, literal family, or a hierarchy of who mattered most. What it does add is agency. Dyingfox is not merely the person other people summon for a pat. In this older relationship, Fox repeatedly creates the contact and seems perfectly comfortable letting Lilly be the one who makes the reunion sound enormous."
  ]
};

export const run379DyingfoxNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  dyingfox: {
    ...dyingfoxBase,
    sections: [
      dyingfoxBase.sections[0],
      dyingfoxLilly,
      ...dyingfoxBase.sections.slice(1),
    ],
  },
};

const anayssArchive = deepAnayssOfficerCharacterBios.anayss;

const anayssEvidenceGoblin: NarrativeSection = {
  period: "Wall of Shame / Fame",
  title: "THE RECEIPTS ARE APPARENTLY IN HER POCKET",
  paragraphs: [
    "Anayss has a second kind of wayfinding problem: sometimes the thing everybody is looking for is an old stupid receipt, and she is alarmingly likely to know where it went. When Momo declares `No receipts noh evidence!` in October 2020, Anayss answers simply `I do`. Mugen soon jokes that Ana will pull old material up again in three months. By winter, other people are not merely noticing the pattern; they are naming the job she keeps accidentally performing. Hishiro calls her `Evidence retriever`. Daya says she `just grab[s] the old evidence of people`, later announces `All these are from Ana's pocket`, and Kaede upgrades the reputation to `Evidence goblin`.",
    "The funniest part is that Anayss does not behave like a solemn keeper of records. When an old Cuttlefish screenshot comes back, her explanation is `I just wanted @CHIBIᵗᵉʳᵃˢᵘ to see it XD`; when the room starts spawning more evidence while she is at work, she complains about that too. The archive-memory loop is social before it is archival. She remembers an old bit because somebody would laugh at it now, digs it back up, and hands the past to the current room like conversational ammunition.",
    "That same appetite shows up without prosecution attached. In August 2021 she is loudly asking Mugen for `TBT ART`, then goes `HIGHKEY SALTY` over older 2020 pieces she missed. Anayss does not only remember people through embarrassing screenshots; she wants the old art, the old jokes, the pieces of the house that happened before she saw them. Her map-giving habit helps people find where to go next. This other habit keeps asking what the hell everybody did before she got there.",
    "None of that creates an Archivist office, and `Evidence goblin` remains exactly what it sounds like: a peer nickname for a recurring menace, not a governance title. The better character read is that Anayss repeatedly turns memory back into live social material. UL does not have to explain to her why an old receipt is funny. More often, everybody else is discovering that Ana already has the fucking thing."
  ]
};

export const run379AnayssNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  anayss: {
    intro: anayssArchive.overview,
    sections: [
      {
        title: "WHAT KEEPS HAPPENING",
        paragraphs: anayssArchive.characterNotes.map((note) => `${note.title}. ${note.text}`),
      },
      anayssEvidenceGoblin,
      {
        title: "SCENES THAT STUCK",
        paragraphs: anayssArchive.history.map((beat) => beat.text),
      },
    ],
  },
};

// Run 388: Gabu's Daycare access continuity lives in its own source file, but this
// already-registered overlay makes the finished person-shaped version the public owner.
export const run388GabuNarrativeCharacterBios: Record<string, CharacterNarrative> = run388GabuCharacterBios;
