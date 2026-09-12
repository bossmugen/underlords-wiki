import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) {
    const current = relationships[index];
    if (!current.note.includes(relationship.note)) {
      relationships[index] = {
        ...current,
        note: `${current.note} ${relationship.note}`,
        href: current.href ?? relationship.href,
      };
    }
  } else {
    relationships.push(relationship);
  }
};

// Daycare support-room synthesis: Torr already has a canonical owner. This pass folds
// four nearby Wall receipts into one stronger mechanism instead of another event ledger.
const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex < 0) {
  throw new Error("Run 925 expected the canonical Torr owner; refusing to create a duplicate.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;
const torrRelationships = [...(torr.relationships ?? [])];
upsertRelationship(torrRelationships, {
  name: "Gilli",
  note:
    "By early October 2022 Torr is not merely noticing that Gilli keeps finding Wall-ready wording; he narrates the recurring mechanism himself. `XD i'm giving a lot of material with this stream` becomes `i get on here a lot. i blame @New Account Gilli#3226 bad influence.` The joke works because Torr sees the trap, names Gilli as the catalyst, and keeps participating anyway.",
  href: "/characters/gilli",
});

allCharacters[torrIndex] = {
  ...torr,
  tags: unique([
    ...(torr.tags ?? []),
    "Self-aware receipt generator",
    "Gilli's bad influence",
    "ULese acclimation",
    "Petty Crimes",
  ]),
  relationships: torrRelationships,
  quotes: unique([
    ...(torr.quotes ?? []),
    "XD i'm giving a lot of material with this stream",
    "i get on here a lot. i blame @New Account Gilli#3226 bad influence.",
    "oh no the eglish has become normalized to me",
  ]),
  claims: unique([
    ...(torr.claims ?? []),
    "Late-September and early-October 2022 form one cumulative Torr pattern: he repeatedly notices that ordinary stream/chat wording is becoming Wall material, then keeps feeding the bit. By October 5 he says he is `giving a lot of material with this stream`; the next day he blames Gilli's `bad influence` for how often he ends up there.",
    "The Gilli lane is therefore more than one screenshot summons. Torr treats Gilli as a recurring chaos catalyst / receipt magnet in his own joke-language, while his continued participation makes the blame affectionate and self-deprecating rather than literal misconduct.",
    "By January 2023 Torr can defend Rummy from everything except `the overuse of the semi colon` and immediately catch himself with `oh no the eglish has become normalized to me`. His earlier context-awareness has become fluency in the room's fast-typing joke culture without disappearing.",
  ]),
  antiFanon: unique([
    ...(torr.antiFanon ?? []),
    "`bad influence` is playful social blame in Torr's recurring Wall/Gilli lane, not evidence that Gilli caused real misconduct or exercised authority over him.",
    "`eglish has become normalized to me` supports familiarity with UL's fast-typing typo culture; it is not a claim that UL members cannot spell.",
    "The 2022 supporting screenshots are POSTED BY Gilli / Mr. Streamer where specified. `Via @DiStratus(Torr)` does not establish MADE BY, CAPTURED BY, or FEATURING, and uninspected pixels stay unclaimed.",
  ]),
} as ExtendedCharacter;
characterById.set("torr", allCharacters[torrIndex]);

// Ghostt's topology closure stays backstage; the person-level gain is the ordinary-life
// gaming crumb recovered while enumerating the complete Wall parent set.
const ghosttIndex = allCharacters.findIndex((character) => character.id === "ghostt");
if (ghosttIndex < 0) {
  throw new Error("Run 925 expected the canonical Ghostt owner; refusing to create a duplicate.");
}

const ghostt = allCharacters[ghosttIndex] as ExtendedCharacter;
allCharacters[ghosttIndex] = {
  ...ghostt,
  tags: unique([...(ghostt.tags ?? []), "Mass Effect", "Repeat playthroughs", "Petty Crimes"]),
  quotes: unique([...(ghostt.quotes ?? []), "I put so many hours in that game on playthroughs lol"]),
  claims: unique([
    ...(ghostt.claims ?? []),
    "In a May 2021 Wall pocket explicitly discussing Mass Effect, Ghostt follows with `It is though` and `I put so many hours in that game on playthroughs lol`. With no intervening surviving Wall message, Mass Effect is the probable referent: a small ordinary-life signal that Ghostt put serious time into repeat playthroughs.",
  ]),
  antiFanon: unique([
    ...(ghostt.antiFanon ?? []),
    "Mass Effect is the probable local referent for Ghostt's `so many hours ... on playthroughs` line, not a structured Reply target. Keep that qualifier; do not turn the scene into a platform, build, romance-route, completion-count, or favorite-character claim.",
    "Ghostt's closed Wall reply-topology count is backstage source bookkeeping, not a popularity, affection, closeness, or social-value score.",
  ]),
} as ExtendedCharacter;
characterById.set("ghostt", allCharacters[ghosttIndex]);

// egotism has only one surviving authored Wall line, but it has unusually complete social
// framing. WIKI can own the micro-dossier without pretending this is a full MAIN biography.
const egotismId = "egotism";
const egotismIndex = allCharacters.findIndex((character) => character.id === egotismId);
const egotismCharacter: ExtendedCharacter = {
  id: egotismId,
  name: "egotism",
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021",
  logline:
    "One surviving line, one extremely clear entrance: Anthos welcomes egotism to the Wall of Shame and egotism answers `LOL` 2.755 seconds later. Microscopic footprint, immediately legible willingness to join the joke.",
  tags: ["Archive cast", "2021", "Wall", "Low-volume cast", "Screenshot Court"],
  relationships: [
    {
      name: "Anthos",
      note:
        "Anthos directly says `@egotism welcome to wall of shame ft @RyuuUzu`; egotism answers `LOL` almost immediately. That supports bounded welcomer / freshly exposed participant familiarity, not a closeness rank.",
      href: "/characters/anthos",
    },
  ],
  quotes: ["LOL"],
  claims: [
    "The complete assigned Wall stable-ID footprint is exactly two occurrences: Anthos's direct welcome mention and egotism's one authored `LOL` 2.755 seconds later.",
    "The clean scene framing supports a deliberately narrow social read: when the Wall's attention lands on egotism, they immediately laugh with the room rather than turning the moment into a denial or exit.",
  ],
  antiFanon: [
    "One good-humored Wall reception is not a global temperament claim or a complete biography.",
    "Anthos's nearby Dragon Raja screenshot is POSTED BY Anthos only. Its subjects, maker, capturer, and exact charge remain unresolved because the pixels were not inspected.",
    "Anthos's welcome is a Default message rather than a structured Reply to the screenshot; adjacency does not create a media-reference edge.",
    "RyuuUzu is co-tagged in the welcome, but the tag alone does not establish a relationship among the three people.",
  ],
};

if (egotismIndex >= 0) {
  const current = allCharacters[egotismIndex] as ExtendedCharacter;
  allCharacters[egotismIndex] = {
    ...current,
    ...egotismCharacter,
    aliases: unique([...(current.aliases ?? []), ...(egotismCharacter.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(egotismCharacter.tags ?? [])]),
    relationships: [...(current.relationships ?? []), ...(egotismCharacter.relationships ?? [])],
    quotes: unique([...(current.quotes ?? []), ...(egotismCharacter.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(egotismCharacter.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(egotismCharacter.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(egotismCharacter);
}
characterById.set(egotismId, allCharacters.find((character) => character.id === egotismId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(egotismId)) {
  archiveCastGroup.characterIds.push(egotismId);
}
