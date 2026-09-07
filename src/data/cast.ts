import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre575";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-base";

export const allCharacters: Character[] = [...previousCharacters];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 575: Ricochet's existing file already had tank-game complaints, weather,
// Cheesecake Factory absurdity and the sleepy-Ren care lane. Core Rooms adds a
// different dimension: ordinary life keeps leaking into the room, and he is
// considerate about shared atmosphere even when his own schedule is mildly cursed.
const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex >= 0) {
  const ricochet = allCharacters[ricochetIndex];
  const relationships = [...(ricochet.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ansun",
    note: "Ricochet checks whether Ansun likes slow music before adding to the shared soundtrack; later, when Ricochet describes an overstuffed travel/class day, Ansun answers `oo get there safely rich!`. Tiny calibration plus a tiny safety wish: easy peer familiarity rather than a closeness ranking.",
    href: "/characters/ansun",
  });
  upsertRelationship(relationships, {
    name: "Anthos",
    note: "When Ricochet describes the same travel/class plan, Anthos independently lands on `be safe!!`. It is ordinary peer concern, quick enough that the room does not need to make a ceremony out of it.",
    href: "/characters/anthos",
  });

  const quotes = [...new Set([
    ...(ricochet.quotes ?? []),
    "I use cayenne pepper",
    "I get eat everything on that table",
    "Well enjoy my sleep asmr I got class in the morning",
  ])];

  allCharacters[ricochetIndex] = {
    ...ricochet,
    logline: "VIP whose chat life refuses to stay game-only: food, cayenne, shared-music calibration, cursed class/sleep logistics, South Texas cold, Cheesecake Factory with no cheesecake, and a teasing-care instinct that will apparently argue sleepy Ren into bed.",
    tags: [...new Set([...(ricochet.tags ?? []), "Ordinary life", "Shared-space calibration", "Petty Crimes"])],
    relationships,
    quotes,
  };
}

// Run 575: Zhēnxī's public owner already knew the big arc — instant Wall casualty
// to somebody who can file Ren back. Daycare adds the lived warmth inside that
// transition: the scream can be real, Rummy can answer it with affection, and
// Zhēnxī can answer back without exiting the bit.
const zhenxiIndex = allCharacters.findIndex((character) => character.id === "zhenxi");
if (zhenxiIndex >= 0) {
  const zhenxi = allCharacters[zhenxiIndex];
  const relationships = [...(zhenxi.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ren",
    note: "Ren can summon Zhēnxī directly into a receipt and still get the full `NOOOOOO`. One month later Zhēnxī posts an old Discord screenshot herself, tags Ren with `so uh-`, laughs at his four-month-old protest, and rules it `Deserving`. Defendant and prosecutor are now the same person depending on whose screenshot is open.",
    href: "/characters/ren",
  });
  upsertRelationship(relationships, {
    name: "Rummy",
    note: "In the middle of Zhēnxī's 2022 receipt panic, Rummy true-replies `I love YoU`; Zhēnxī answers `I love you too` half a minute later. The affection sits comfortably inside the teasing instead of requiring either person to leave the joke.",
    href: "/characters/rummy",
  });

  const quotes = [...new Set([
    ...(zhenxi.quotes ?? []),
    "NOOOOOO",
    "I love you too",
    "@RΣN so uh-",
  ])];

  allCharacters[zhenxiIndex] = {
    ...zhenxi,
    role: "Platelet · Archive-era Wall cast",
    logline: "Platelet who entered Wall life screaming `NOT THE WALL OF SHAME FAME`, kept the theatrical panic, and eventually learned the more dangerous skill: posting the receipt herself, tagging Ren, laughing at the appeal, and ruling it `Deserving`.",
    tags: [...new Set([...(zhenxi.tags ?? []), "Platelet", "Reciprocal receipt play", "Petty Crimes"])],
    relationships,
    quotes,
  };
}

// Run 575: WOO finally has enough Wall recurrence to be a person rather than a
// loose handful of reaction lines. Keep the three chairs together: scandalized
// witness, willing prosecutor, and self-aware repeat defendant.
const wooCharacter: Character = {
  id: "woo",
  name: "WOO",
  aliases: ["_woo_woo"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2020–2023+",
  logline: "Wall regular who can treat `im gabriel` like breaking news, become a prosecutor the second Gilli summons her into somebody else's receipt, and then propose talking less because her own mouth keeps generating Hall-of-Shame material.",
  tags: ["Archive cast", "Wall", "Screenshot Court", "Repeat defendant", "Petty Crimes"],
  relationships: [
    {
      name: "Moon",
      note: "WOO says she needs to talk less because she has so much Hall-of-Shame material; Moon true-replies `No no you famous uwu.` Embarrassment gets reframed as mock celebrity, and WOO stays inside the gag instead of retreating from it.",
      href: "/characters/moon",
    },
    {
      name: "Gabu",
      note: "Gabu says `im gabriel`; WOO answers with `gabu....`, `I see you`, `in a whole different light`, then Kirby. No formal reply edge, just an extremely probable four-message comic reappraisal.",
      href: "/characters/gabu",
    },
    {
      name: "Gilli",
      note: "Gilli can summon WOO straight into screenshot evidence and get immediate prosecutorial uptake. The useful part is the low setup: WOO already understands what kind of room she has been called into.",
      href: "/characters/gilli",
    },
    {
      name: "Nobu",
      note: "When Gilli brings WOO into Nobu evidence, WOO goes straight to `NOBU` / `TRAITOR`, later `nobu` / `why`. The screenshot itself stays visually unresolved; the prosecution does not.",
      href: "/characters/nobu",
    },
  ],
  quotes: [
    "gabu....",
    "I see you",
    "in a whole different light",
    "NOBU",
    "TRAITOR",
    "I need to not talk sm I got so much stuff on the hall of shame",
  ],
};
if (!allCharacters.some((character) => character.id === wooCharacter.id)) allCharacters.push(wooCharacter);

export const castGroups = previousGroups.map((group) => {
  if (group.id !== "archive-cast") return { ...group, characterIds: [...group.characterIds] };
  const characterIds = [...group.characterIds];
  if (!characterIds.includes(wooCharacter.id)) characterIds.push(wooCharacter.id);
  return { ...group, characterIds };
});

export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
