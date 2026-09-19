import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1362";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-base";

export const allCharacters: Character[] = [...previousCharacters];

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

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
