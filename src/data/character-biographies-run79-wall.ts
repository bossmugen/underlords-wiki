import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { narrativeCharacterBios } from "./character-biographies-narrative";
import { anthosNarrativeCharacterBios } from "./character-biographies-anthos";
import { ghosttNarrativeCharacterBios } from "./character-biographies-ghostt";
import { gilliNarrativeCharacterBios } from "./character-biographies-gilli";
import { illienNarrativeCharacterBios } from "./character-biographies-illien";

function insertBeforeTitle(
  sections: NarrativeSection[],
  title: string,
  section: NarrativeSection,
): NarrativeSection[] {
  const index = sections.findIndex((candidate) => candidate.title === title);
  if (index < 0) return [...sections, section];
  return [...sections.slice(0, index), section, ...sections.slice(index)];
}

const gabuBase = narrativeCharacterBios.gabu;
const anthosBase = anthosNarrativeCharacterBios.anthos;
const gilliBase = gilliNarrativeCharacterBios.gilli;
const illienBase = illienNarrativeCharacterBios.illien;
const ghosttBase = ghosttNarrativeCharacterBios.ghostt;

const gabuReceiptSection: NarrativeSection = {
  period: "October 26, 2020",
  title: "She keeps the receipt, then asks if you want to see what she kept",
  paragraphs: [
    "Gabu's later Wall reputation gets a very early prototype with Anthos. She tells her, **`i still have your ss hahaha`**. Anthos's first question is **`which one @3@`** — not *what screenshot?*, but *which screenshot?* Gabu offers to post it. Anthos says **`im scared now`**. Gabu briefly backs off with **`nah im kidding hahahah`**. Anthos immediately ruins her own escape route: **`well im still curious XD`**.",
    "About a minute and a half after announcing that she still has the screenshot, Gabu posts `Capturar.PNG`. The file cannot be hard-joined to the earlier `your ss` sentence without pixels or a reply edge, but the live sequence makes the connection strongly likely: possession, offer, nervous curiosity, attachment, then Anthos going **`LMAOOO`**, **`nooooooo`**, **`XD`**. The important character beat does not depend on pretending we know the image. Gabu remembers old evidence, knows the target will understand the threat, and can turn private retention into a fresh social event on demand.",
    "It also adds another side to the Gabu–Anthos relationship already visible elsewhere. Anthos is one of the people Gabu remembers encouraging her when English felt difficult; here the traffic runs the other direction and the tone is pure familiar menace. Care and prosecution are apparently allowed to share a contact card."
  ]
};

const anthosReceiptSection: NarrativeSection = {
  period: "October 26, 2020",
  title: "Being scared of the screenshot does not stop her asking to see it",
  paragraphs: [
    "Gabu tells Anthos she **still has** one of Anthos's screenshots. Anthos answers **`which one @3@`**, which is already a tiny indictment of the household: apparently there are enough possible exhibits that clarification is necessary. When Gabu offers to post it, Anthos says **`im scared now`**. Gabu gives her a clean exit by claiming she is kidding. Anthos immediately chooses curiosity instead: **`well im still curious XD`**.",
    "That contradiction is extremely Anthos. She can perform the defendant's dread and still lean toward the thing that might embarrass her because the social bit is more interesting than self-protection. When Gabu posts an attachment shortly afterward, Anthos's **`LMAOOO` → `nooooooo` → `XD`** keeps the same rhythm: horror, recognition, laughter. The scene never turns into a rupture. It becomes more material.",
    "The relationship with Gabu matters because neither person needs to explain the rules. Gabu can use **having kept the receipt** as teasing leverage; Anthos can be wary and curious in the same breath. The image itself remains sealed, and Gabu posting it does not make her its capturer or maker. The lived part is already enough."
  ]
};

const gilliEosSection: NarrativeSection = {
  period: "July 8, 2021",
  title: "The same command voice can hydrate the children or help Eos get away with it",
  paragraphs: [
    "Gilli's caretaker mode is already familiar by 2021: stop fighting the Platelets, drink water, eat something, keep track of the children. Then Eos hesitates over posting more evidence because Marian sometimes writes her up. Gilli's entire intervention is **`@Eos donit`**. When Eos explains the risk, Gilli supplies the practical loophole instead of the moral lesson: **`How would she know it was you`**.",
    "That makes the responsible Gilli and the bad-influence Gilli look less like opposite personas. She has a very short route from *I see what is holding this moment up* to *here is the next action*. Sometimes the next action is hydration. Sometimes it is apparently operational advice for petty screenshot crime. The speed and terseness are the common denominator.",
    "Eos also tells us something about the relationship by hesitating out loud in front of Gilli and then getting goaded straight through it. The exchange reads like familiar joke-space rather than formal authority: Gilli can push, Eos can state the consequence plainly, and neither needs a ceremonial setup. That does not give them a formal relationship label. It does give Gilli one more person with whom care and chaos can occupy the same voice."
  ]
};

const illienWallSection: NarrativeSection = {
  period: "August 23, 2020",
  title: "By day two of the Wall, he is already bringing Ren exhibits",
  paragraphs: [
    "Ten days after admitting he still gets lost in the server, Illien is already perfectly capable of finding the room where everybody prosecutes each other. He drops a raw Discord attachment URL into the Wall; Ren answers **`AHAHAHAHAHA`** almost immediately, then **`Poetry`**. Six minutes later Illien posts another object directly to the Wall and, a minute after that, tags Ren with **`@RΣN XD`**. Nobody writes an explanatory memo. Apparently the exhibit has done its job.",
    "The sequence adds a nice correction to any version of Illien that mistakes **not knowing every hallway** for social hesitation. He can be honest about getting lost and still understand exactly how to make a joke travel. The first object even retains a different Discord channel ID inside its URL, so he is literally carrying something across rooms; the second arrives as a local Wall attachment. Two delivery methods, one delighted Ren, zero need to pretend Illien is some formal archivist.",
    "Ren matters here less as a label than as a rhythm. Illien sends something; Ren gets it fast enough to call it `Poetry`; Illien comes back with another object and an `XD` aimed directly at her. That is comfortable shared-humor territory. It does not need a friendship rank to feel lived. The room understands why the thing is funny before the biography ever does.",
    "The source trail stays narrower than the joke. Illien **posted** the raw URL and later Wall attachment. The preserved URL points to a different Discord channel, but the source room name, original source-message author, maker, capturer and people shown in either object are still unknown. The funny part is the courier behavior, not pretending we can see through sealed pixels."
  ]
};

const ghosttPorpcornSection: NarrativeSection = {
  period: "February 2021",
  title: "Porpcorn is the word now",
  paragraphs: [
    "Before the later conspiracy and table-flip defenses, Ghostt already had another tiny move available: somebody appears to have a spelling casualty, and Ghostt's response is not to fix it. Replying directly to a Gilli parent message hours later, Ghostt writes **`No you had it right it’s porpcorn now lmfao`**. Twelve minutes later Gilli comes back with **`I DIDNT SAY IT LOL`**.",
    "That is an extremely efficient Ghostt joke. The supposed mistake is not corrected; it is promoted. Whatever happened in the parent exhibit, **porpcorn is policy now** because the wrong version is funnier. The hours-long gap matters too: Ghostt can reopen an old receipt and keep the bit alive without needing the room to still be standing on the exact same conversational square.",
    "The pixels underneath Gilli's parent are still uninspected, so this page does not pin the original typo on Gilli or nominate Ghostt as the inventor of a permanent UL dialect word. One reply is enough for a Petty Crime, not a dictionary. What it does add cleanly is another angle on Ghostt and Gilli: comfortable enough to turn correction itself into teasing, then let the denial become part of the joke."
  ]
};

export const run79WallNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  gabu: {
    ...gabuBase,
    sections: insertBeforeTitle(
      gabuBase.sections,
      "Becoming part of the machinery",
      gabuReceiptSection,
    ),
  },
  anthos: {
    ...anthosBase,
    sections: insertBeforeTitle(
      anthosBase.sections,
      "The running bit gets bigger while her practical reliability becomes less visible and more important",
      anthosReceiptSection,
    ),
  },
  gilli: {
    ...gilliBase,
    sections: insertBeforeTitle(
      gilliBase.sections,
      "THE CARETAKER IS ALSO A REPEAT OFFENDER",
      gilliEosSection,
    ),
  },
  illien: {
    ...illienBase,
    sections: insertBeforeTitle(
      illienBase.sections,
      "The room starts handing him absurd premises, and he improves them",
      illienWallSection,
    ),
  },
  ghostt: {
    ...ghosttBase,
    sections: insertBeforeTitle(
      ghosttBase.sections,
      "A conspiracy, apparently, and absolutely no explanatory memo",
      ghosttPorpcornSection,
    ),
  },
};
