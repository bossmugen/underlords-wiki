import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { ghosttNarrativeCharacterBios } from "./character-biographies-ghostt";
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

const illienBase = illienNarrativeCharacterBios.illien;
const ghosttBase = ghosttNarrativeCharacterBios.ghostt;

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
