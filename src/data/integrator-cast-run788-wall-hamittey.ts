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
    name: "Ghoulie",
    note:
      "An old screenshot ambush gets the explicit friendship protest `i thought you was my friend`; Hami answers with a hearted `Sorry not Sorry` and then notices Ghoulie is back from vacation. Baby Lyssa is Ghoulie under the locked identity bridge, so the useful relationship read is public menace with actual attention attached: tease-safe enough to file, attentive enough to notice an absence and return.",
    href: "/characters/baby-lyssa",
  },
  {
    name: "Noether",
    note:
      "Noether is comfortable accusing Hami of not sharing desserts; Hami's entire defense is `i dont have no desserts :Cursed:`. It is tiny, mundane familiarity: accusation, technicality, case closed, apparently.",
    href: "/characters/noether",
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
    "HamitteY has the soul of somebody who keeps an invisible misdemeanor ledger. Old screenshots can reappear with a sip emote, fresh nonsense gets compared against older offenses, and friends can get publicly filed in the same breath that Hami notices they just came back. The contradiction is excellent: callback-retentive prosecutor with an attentive social edge, compact little defendant the second the Wall points back.",
  tags: [
    "Historical Staff",
    "Archive cast",
    "Wall",
    "Callback prosecutor",
    "Old-receipt memory",
    "Compact defendant",
    "Return-aware teasing",
    "Prior-offense ledger",
    "Dessert technicality",
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
    "welcome back from vacation :SpidySip:",
    "i dont have no desserts :Cursed:",
    ":frogmad:",
    "first a furry and now dis",
  ],
  claims: [
    "HamitteY is stable account 400116637266870273 / `hamittey`; `Wichita` is Hami's directly self-reported Dragon Raja IGN, not a location inference.",
    "On 2021-08-03 Hami POSTS `Screenshot_20210803-003235_Dragon_Raja2.jpg` and 29.219 seconds later writes `forgot i had this :SpidySip:`. The useful person read is casual receipt pack-rat: stored material can apparently vanish from active memory and still come back as Wall ammunition.",
    "Across 2021-08-17, 2021-08-24, and 2022-01-21, Hami repeatedly casts ShiyaX as the chaos culprit: `got caught in 4k`, `u missed the chaos`, then later `I blame you` after Shiya's `You're most welcome`. The recurrence supports a familiar mock-prosecution loop rather than a one-off jab.",
    "Ghoulie's `i thought you was my friend` reply, Hami's hearted `Sorry not Sorry`, and Hami's `welcome back from vacation` sit in one relationship pocket. The strong read is friendship-language, tease-safe receipt ambush, and real return-awareness living together without visible rupture.",
    "A 2021-09-01 Anayss summon of HamitteY and Nhou gets Hami back into the room with `@nhou RIP` plus an image; it supports responsive participation, not a special formal role in the scene.",
    "Hami's Wall habit is cumulative rather than screenshot-only: old material gets remembered and resurfaced, targets get directly summoned, and `first a furry and now dis` shows fresh nonsense being compared against an older offense whose exact referent remains unresolved. The recurring person read is callback-retentive prosecutor, not formal archivist or appointed Wall staff.",
    "The prosecutor/defendant asymmetry is part of Hami's charm. When Anayss posts `**facts**` at Hami and Noether, Hami's complete surviving defense is `:frogmad:`. When Noether says Hami does not share desserts, Hami answers `i dont have no desserts :Cursed:`. Public filing can get elaborate; self-defense gets very small, very fast.",
    "Petty Crimes: STORES OLD RECEIPTS LONG ENOUGH TO FORGET THEM; ANSWERS FRIENDSHIP COMPLAINTS WITH HEARTED NON-APOLOGIES; DEFEATS DESSERT CHARGES ON A TECHNICALITY; USES `:frogmad:` AS A FULL LEGAL BRIEF; APPARENTLY MAINTAINS AN UNRESOLVED PRIOR-OFFENSE LEDGER.",
  ],
  antiFanon: [
    "Do not merge HamitteY / `hamittey` with similarly named accounts by string similarity. This owner is anchored to stable account 400116637266870273; `Wichita` is an in-game name.",
    "Historical Staff is carried as historical role information; export-time role arrays do not date Hami's appointment or establish a current roster seat.",
    "Hami's 2021-08-03 JPEG is POSTED BY Hami only. Its pixels were not inspected in this handoff, so MADE BY / CAPTURED BY / FEATURING and the depicted event remain unresolved.",
    "The ShiyaX `caught in 4k` / chaos / blame pattern supports comfortable teasing and recurring mock-prosecution. It does not establish romance, conflict, family, exclusivity, or a ranked closeness claim.",
    "Baby Lyssa and Ghoulie are the same person under the user-confirmed identity bridge; do not split this relationship into two people. The vacation timing does not establish that Hami deliberately held the screenshot until Ghoulie returned.",
    "Noether's dessert accusation is social microtexture, not proof that Hami literally hoards or refuses to share desserts.",
    "The earlier `furry` in `first a furry and now dis` is unresolved. Do not assign that referent to Snow or anyone else from this scene alone.",
    "The 2021-09-01 image Hami posts after Anayss's summon is POSTED BY Hami only unless stronger provenance separately resolves creation, capture, or depicted subjects.",
  ],
};

if (hamitteyIndex >= 0) {
  const current = allCharacters[hamitteyIndex] as ExtendedCharacter;
  const relationships = [...(current.relationships ?? [])].filter(
    (relationship) => relationship.name !== "Baby Lyssa" && relationship.name !== "Ghoulie" && relationship.name !== "Noether" && relationship.name !== "ShiyaX",
  );
  relationships.push(...wallRelationships);

  allCharacters[hamitteyIndex] = {
    ...current,
    ...hamitteyCharacter,
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
