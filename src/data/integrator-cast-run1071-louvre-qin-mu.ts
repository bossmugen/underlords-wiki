import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const qinMuId = "qin-mu";
const qinMuIndex = allCharacters.findIndex((character) => character.id === qinMuId);

const qinMuCharacter: ExtendedCharacter = {
  id: qinMuId,
  name: "Qin-Mu",
  aliases: ["yoza6592"],
  billing: "legacy",
  role: "Archive-era Louvre / Where Winds Meet cast",
  era: "Dragon Raja era–2025+",
  logline:
    "Qin-Mu can be gone long enough to talk about the `OG dragon Raja days` and still come back with the logistics and the feeling in the same sentence: `I need a guild lol I miss you guys`. The game changes; the social address does not.",
  tags: [
    "Archive cast",
    "Louvre",
    "Where Winds Meet",
    "Return",
    "Cross-game continuity",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "Qin-Mu's 2025 Where Winds Meet return is low-ceremony and practical: `I need a guild lol I miss you guys`; Mugen answers `We have an Underlords guild yes 😄.` The exchange reads like an open return path, not proof they stayed continuously close while Qin-Mu was away.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "I need a guild lol I miss you guys",
    "OG dragon Raja days",
  ],
  claims: [
    "The assigned Qin-Mu archive body currently contains 85 messages across Louvre and Where Winds Meet, with 55 media-bearing posting events; those media events establish POSTED BY Qin-Mu's stable account unless stronger object-level attribution exists.",
    "On 2025-12-21 Qin-Mu framed a Where Winds Meet guild request with `I miss you guys`, making the surviving return scene explicitly social rather than simple game-shopping nostalgia.",
    "Mugen's immediate answer that an Underlords guild already existed supports a modest open-door / re-entry lane without requiring a formal reintroduction in the surviving exchange.",
  ],
  antiFanon: [
    "The 2025 exchange does not establish a formal UL rejoin date, uninterrupted contact, continuous closeness, or a four-year relationship chronology.",
    "`OG dragon Raja days` is remembered-era language, not an origin certificate for when Qin-Mu first met UL.",
    "Fifty-five media-bearing posts are not fifty-five Qin-Mu artworks. POSTED BY does not become MADE BY, CAPTURED BY, or FEATURING without object-level support.",
    "The Where Winds Meet exchange does not establish a UL governance role, appointment chronology, or permanent main-game preference.",
  ],
};

if (qinMuIndex >= 0) {
  const current = allCharacters[qinMuIndex] as ExtendedCharacter;
  allCharacters[qinMuIndex] = {
    ...current,
    ...qinMuCharacter,
    aliases: appendUnique(current.aliases, qinMuCharacter.aliases ?? []),
    tags: appendUnique(current.tags, qinMuCharacter.tags ?? []),
    quotes: appendUnique(current.quotes, qinMuCharacter.quotes ?? []),
    claims: appendUnique(current.claims, qinMuCharacter.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, qinMuCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(qinMuCharacter);
}
characterById.set(qinMuId, allCharacters.find((character) => character.id === qinMuId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(qinMuId)) {
  archiveCastGroup.characterIds.push(qinMuId);
}
