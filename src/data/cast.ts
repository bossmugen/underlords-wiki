import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1362";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-base";

export const allCharacters: Character[] = [...previousCharacters];

// Run 1362 Wall synthesis: keep one Vanness continuity across surviving handles.
const vannessIndex = allCharacters.findIndex((character) => character.id === "vanness");
const vannessCharacter: Character = {
  id: "vanness",
  name: "Vanness",
  aliases: ["vanness0492", "varshoo"],
  billing: "guest",
  role: "Archive-era cast",
  era: "2021",
  logline: "Vanness understands Screenshot Court from both sides of the table. He can route an exhibit to Mugen, drop his own receipts, then follow an attachment with a bare `Why` like the image itself has offended him; the second somebody files on him, counsel immediately identifies another suspect in all caps.",
  tags: ["Archive cast", "2021", "Wall", "Receipt routing", "Direct filer", "Mock defendant", "Petty Crimes"],
  relationships: [
    {
      name: "Mugen",
      note: "Vanness can route a specific Wall item straight to Mugen, get welcomed onto the Wall by Mugen minutes later, and later receive Mugen's exact-object `:Hehe:` reply on one of his own filings. It reads as comfortable receipt-routing / prosecution-audience familiarity, not a friendship rank, governance hierarchy, or appointment history.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "This one @Mugen",
    "ITS GABU WHO SUCKED IT DRY, NOT MEEE:Raja_cat_frustrates:",
    "Why",
    "In the world would anyone have this idea",
    "My name is jack kinhoff? Or moe lester? Or Hugh Dick?",
    "Im too sad to play anymore:Cursed:",
  ],
  claims: [
    "Stable account 714781719357554718 / vanness0492, also previously rendered `varshoo` in the reconciled public state, authors fifteen surviving Wall messages and directly posts all three surviving attachments in the reviewed July 28 to August 10, 2021 span.",
    "Across multiple pockets Vanness behaves as a receipt router and direct filer: he points Mugen toward a Wall item, posts his own media, and repeatedly supplies immediate textual framing around the object.",
    "When ShiyaX posts a tagged Wall object, Vanness mechanically replies `ITS GABU WHO SUCKED IT DRY, NOT MEEE`, giving the filing instinct a matching theatrical-defendant side without independently establishing Gabu's conduct.",
    "On August 9 Vanness posts an attachment, follows it 2.866 seconds later with `Why`, then continues with `In the world would anyone have this idea`; the timing and same-author continuity make same-pocket framing strongly probable even though those follow-ups are Default messages rather than Reply edges.",
    "The Kahoot fake-name lineup and `Im too sad to play anymore:Cursed:` belong to his Petty Crimes / ordinary social-comedy layer, not literal aliases or a durable mood claim.",
  ],
  antiFanon: [
    "Pooled `Deleted User` remains unresolved and is not merged into another person.",
    "Vanness's Gabu line is his mock accusation / defense, not independent corroboration of what Gabu did or what the associated image shows.",
    "The August 2 and August 9 adjacent captions are probable local framing; they are not mechanical Reply edges unless explicitly noted.",
    "The August 9 object is POSTED BY Vanness. MADE BY, CAPTURED BY, and FEATURING remain unresolved because the native pixels were not inspected.",
    "Timestamp-looking attachment filenames are retrieval handles, not certified capture chronology or device ownership.",
  ],
};

if (vannessIndex >= 0) {
  const vanness = allCharacters[vannessIndex];
  allCharacters[vannessIndex] = {
    ...vanness,
    ...vannessCharacter,
    aliases: [...new Set([...(vanness.aliases ?? []), ...vannessCharacter.aliases!])],
    tags: [...new Set([...(vanness.tags ?? []), ...vannessCharacter.tags!])],
    relationships: vannessCharacter.relationships,
    quotes: [...new Set([...(vanness.quotes ?? []), ...vannessCharacter.quotes!])],
  };
} else {
  allCharacters.push(vannessCharacter);
}

// Run 1364 Wall synthesis: Miihi's tiny prose footprint still has a very clear job.
const miihiIndex = allCharacters.findIndex((character) => character.id === "miihi");
const miihiCharacter: Character = {
  id: "miihi",
  name: "Miihi",
  aliases: ["stephany_.", "程瀟 Miihi (Milk)"],
  billing: "guest",
  role: "VIP · archive-era Wall participant",
  era: "2020–2021",
  logline: "Miihi is a low-prose receipt carrier with excellent gallery instincts: she can drop the artifact with almost no narration, tag the people who need to see it, then become one of the loudest people in the room when somebody else files theirs.",
  tags: ["VIP", "Wall", "Receipt filer", "Low prose", "Reaction timing", "Shared-context handoff", "Petty Crimes"],
  stableDiscordIds: ["253897195290361856"],
  relationships: [
    {
      name: "Anayss",
      note: "Anayss can reply to an older filing with little more than `@Miihi evidence`, and Miihi answers as though the missing setup is already mutually understood. It reads as comfortable receipt-handoff / shared-context familiarity, not a friendship rank.",
      href: "/characters/anayss",
    },
  ],
  quotes: ["LMFAOOOO", "WHYYYYYY", ":Cursed:", "dem snow.. what a ride h e h"],
  claims: [
    "Stable account 253897195290361856 / stephany_. authors nine surviving Wall messages and directly posts three surviving attachments in the reviewed December 2020 to August 2021 span.",
    "Miihi repeatedly uses the artifact itself as the social sentence: a December filing is posted blank, a March filing directly tags Mob/BAPE and Woohyuk, and a third direct attachment follows in April without turning the room into a narrated case report.",
    "In the May 27 reaction pocket, Mugen's `:BOP2:`, Baby Lyssa's keyboard smash, and Miihi's `WHYYYYYY` then `:Cursed:` form a strongly probable shared uptake wave around Ren's attachment; Miihi's messages are not mechanical Reply edges.",
    "Anayss's August 24 true reply `@Miihi evidence` and Miihi's later `dem snow.. what a ride h e h` support a lived shared-context handoff without establishing relationship rank or the visual contents of the underlying media.",
  ],
  antiFanon: [
    "Miihi and Korea are separate stable accounts. Their shared `(Milk)` display-name suffix is not an identity bridge.",
    "Miihi's three direct attachments establish POSTED BY Miihi. MADE BY, CAPTURED BY, and FEATURING remain unresolved unless separately supported.",
    "The May 27 timing supports probable same-pocket uptake, not a mechanical reply relationship that is absent from the export.",
    "Current/export VIP or 18+ role arrays do not establish appointment chronology or personality.",
    "Timestamp-looking filenames are retrieval handles, not certified capture dates or device ownership.",
  ],
};

if (miihiIndex >= 0) {
  const miihi = allCharacters[miihiIndex];
  allCharacters[miihiIndex] = {
    ...miihi,
    ...miihiCharacter,
    aliases: [...new Set([...(miihi.aliases ?? []), ...miihiCharacter.aliases!])],
    tags: [...new Set([...(miihi.tags ?? []), ...miihiCharacter.tags!])],
    relationships: miihiCharacter.relationships,
    quotes: [...new Set([...(miihi.quotes ?? []), ...miihiCharacter.quotes!])],
  };
} else {
  allCharacters.push(miihiCharacter);
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
