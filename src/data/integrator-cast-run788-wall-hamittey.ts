import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const hamitteyId = "hamittey";
const hamitteyIndex = allCharacters.findIndex((character) => character.id === hamitteyId);

const wallRelationships = [
  {
    name: "ShiyaX",
    note:
      "Hami and Shiya have a recurring blame-and-chaos rhythm that needs almost no setup. Hami calls Shiya `caught in 4k`, tells them `u missed the chaos`, gets the immediate answer `I AM THE CHAOS`, and months later answers Shiya's `You're most welcome` with `I blame you`. The joke keeps putting Shiya in the culprit chair while Hami keeps volunteering to prosecute.",
  },
  {
    name: "Baby Lyssa",
    note:
      "When Hami resurfaces a stored Wall screenshot after admitting `forgot i had this`, Baby Lyssa replies `i thought you was my friend`; Hami answers `Sorry not Sorry` with a heart and adds `welcome back from vacation`. The mock-betrayal is affectionate enough to survive being filed.",
    href: "/characters/baby-lyssa",
  },
];

const hamitteyCharacter: ExtendedCharacter = {
  id: hamitteyId,
  name: "HamitteY",
  aliases: ["hamittey", "Wichita"],
  billing: "legacy",
  role: "Historical Staff · archive-era UL cast",
  era: "2020–2022+",
  logline:
    "Older UL cast with a remarkably casual relationship to incriminating material: Hami can forget a receipt exists, remember it long enough to file it, then pivot straight into treating ShiyaX as the room's designated chaos culprit. The delivery stays understated even when the accusation does not.",
  tags: [
    "Historical Staff",
    "Archive cast",
    "Wall",
    "2021",
    "2022",
    "Evidence culture",
    "ShiyaX blame loop",
    "Petty Crimes",
  ],
  relationships: wallRelationships,
  quotes: [
    "forgot i had this :SpidySip:",
    "@ShiyaX got caught in 4k:DiCaprio_laugh:",
    "@ShiyaX u missed the chaos",
    "we’re lucky you were not there than:HuH:",
    "I blame you:EmoJi_WOT:",
    "Sorry not Sorry",
  ],
  claims: [
    "HamitteY is stable account 400116637266870273 / `hamittey`; `Wichita` is Hami's directly self-reported Dragon Raja IGN, not a location inference.",
    "On 2021-08-03 Hami POSTS `Screenshot_20210803-003235_Dragon_Raja2.jpg` and 29.219 seconds later writes `forgot i had this :SpidySip:`. The useful person read is casual receipt pack-rat: stored material can apparently vanish from active memory and still come back as Wall ammunition.",
    "Across 2021-08-17, 2021-08-24, and 2022-01-21, Hami repeatedly casts ShiyaX as the chaos culprit: `got caught in 4k`, `u missed the chaos`, then later `I blame you` after Shiya's `You're most welcome`. The recurrence supports a familiar mock-prosecution loop rather than a one-off jab.",
    "On 2021-08-03 Baby Lyssa TRUE-replies `i thought you was my friend` to Hami's stored screenshot; Hami replies `Sorry not Sorry` with a heart and then `welcome back from vacation`, keeping the filing inside affectionate mock-betrayal rather than real conflict.",
    "A 2021-09-01 Anayss summon of HamitteY and Nhou gets Hami back into the room with `@nhou RIP` plus an image; it supports responsive participation, not a special formal role in the scene.",
  ],
  antiFanon: [
    "Do not merge HamitteY / `hamittey` with similarly named accounts by string similarity. This owner is anchored to stable account 400116637266870273; `Wichita` is an in-game name.",
    "Historical Staff is carried as historical role information; export-time role arrays do not date Hami's appointment or establish a current roster seat.",
    "Hami's 2021-08-03 JPEG is POSTED BY Hami only. Its pixels were not inspected in this handoff, so MADE BY / CAPTURED BY / FEATURING and the depicted event remain unresolved.",
    "The ShiyaX `caught in 4k` / chaos / blame pattern supports comfortable teasing and recurring mock-prosecution. It does not establish romance, conflict, family, exclusivity, or a ranked closeness claim.",
    "Baby Lyssa's `i thought you was my friend` and Hami's `Sorry not Sorry` / heart / welcome-back language are joking social texture, not a literal relationship rupture or romance claim.",
    "The 2021-09-01 image Hami posts after Anayss's summon is also POSTED BY Hami only unless stronger provenance separately resolves creation, capture, or depicted subjects.",
  ],
};

if (hamitteyIndex >= 0) {
  const current = allCharacters[hamitteyIndex] as ExtendedCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const addition of wallRelationships) {
    const existing = relationships.findIndex((relationship) => relationship.name === addition.name);
    if (existing >= 0) {
      if (!relationships[existing].note.includes(addition.note.slice(0, 24))) {
        relationships[existing] = {
          ...relationships[existing],
          note: `${relationships[existing].note} ${addition.note}`,
          href: relationships[existing].href ?? addition.href,
        };
      }
    } else {
      relationships.push(addition);
    }
  }

  allCharacters[hamitteyIndex] = {
    ...current,
    aliases: unique([...(current.aliases ?? []), ...(hamitteyCharacter.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(hamitteyCharacter.tags ?? [])]),
    relationships,
    quotes: unique([...(current.quotes ?? []), ...(hamitteyCharacter.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(hamitteyCharacter.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(hamitteyCharacter.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(hamitteyCharacter);
}

characterById.set(hamitteyId, allCharacters.find((character) => character.id === hamitteyId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(hamitteyId)) {
  archiveCastGroup.characterIds.push(hamitteyId);
}
