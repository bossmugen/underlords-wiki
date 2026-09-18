import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertCharacter = (seed: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === seed.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      ...seed,
      aliases: unique([...(current.aliases ?? []), ...(seed.aliases ?? [])]),
      tags: unique([...(current.tags ?? []), ...(seed.tags ?? [])]),
      relationships: [...(current.relationships ?? []), ...(seed.relationships ?? [])],
      quotes: unique([...(current.quotes ?? []), ...(seed.quotes ?? [])]),
      claims: unique([...(current.claims ?? []), ...(seed.claims ?? [])]),
      antiFanon: unique([...(current.antiFanon ?? []), ...(seed.antiFanon ?? [])]),
    } as ExtendedCharacter;
  } else {
    allCharacters.push(seed);
  }

  const character = allCharacters.find((candidate) => candidate.id === seed.id)!;
  characterById.set(seed.id, character);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(seed.id)) {
    archiveCastGroup.characterIds.push(seed.id);
  }
};

upsertCharacter({
  id: "meowk",
  name: "Meowk",
  aliases: ["Meowk"],
  billing: "recurring",
  role: "Member",
  era: "2021–2025+",
  logline:
    "Meowk can turn almost no material into a full little stage production. Two chicken emotes and crossed swords become a duel; Mugen arrives with popcorn; Meowk bows with `I aim to please`. When Baby Lyssa insists nobody saw anything, Meowk spends three separate messages delivering `i / saw / all` over less than two seconds because apparently one message lacked sufficient entrance music. The same roast-friendly gremlin can get openly sentimental when old receipts resurface. He is not above Screenshot Court; he is one of the people helping it have better timing.",
  tags: [
    "Archive cast",
    "Wall",
    "Compact bit-builder",
    "Reciprocal teasing",
    "Old-receipt nostalgia",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Ren / RV",
      note:
        "Their strongest surviving Wall lane is reciprocal and tease-safe. Meowk height-roasts Ren one day; the next night Ren directly pulls him into a cat/paws pile-on with Sou and Mugen, and Meowk answers the group with mock outrage instead of leaving the bit. The material supports comfortable two-way teasing, not a friendship ranking.",
      href: "/characters/ren",
    },
    {
      name: "Mugen",
      note:
        "Mugen mechanically replies to Meowk's chicken duel with popcorn; Meowk answers with a bow and `I aim to please`. It is a tiny but very clean audience/performer loop: she recognizes the bit, he notices the audience and gives it a curtain call.",
      href: "/characters/mugen",
    },
    {
      name: "Baby Lyssa",
      note:
        "Meowk tags Baby Lyssa into the March witness pileup, then turns her `you saw nothing` into his three-beat `i / saw / all`. Scene-local shared-witness teasing is clear; broader closeness is not assigned from one pocket.",
    },
  ],
  quotes: [
    "cock fight achieved",
    "I aim to please :8_bow:",
    "i / saw / all",
    "The good ol' days",
    "You all suck :myv_Reeeeee:",
  ],
  claims: [
    "Across independent February–April 2021 Wall pockets, Meowk repeatedly uses emotes, very short lines, and timing to co-build jokes rather than merely react to them.",
    "The Ren lane is reciprocal: Meowk initiates a height roast, then comfortably survives a Ren/Sou/Mugen catification pile-on the following night with mock protest.",
    "His Wall register has a sentimental seam. `The good ol' days` plus repeated Cozy_Cry participation around an old-receipt pocket supports nostalgia for old room chaos; the exact object join is probable rather than mechanically guaranteed.",
    "Petty Crimes: stages a chicken duel, gives himself a bow when Mugen supplies popcorn, spends three messages saying `i saw all`, and gets publicly catified after roasting Ren.",
  ],
  antiFanon: [
    "Meowk is stable account 264889543365230614 and remains separate from Alkey unless a stable account-level bridge is produced.",
    "Meowk is not Key / 445845564119187456. Similar names do not bridge identities.",
    "`alkitty` is a scene-local joke, not a locked alias and not an identity bridge to Alkey.",
    "The Mar. 24 pooled Deleted User poster remains unresolved.",
    "Final-state reaction membership has no click timestamps.",
    "Adjacent uninspected images do not establish Meowk as FEATURING, MADE BY, or CAPTURED BY; POSTED BY remains separate.",
    "The Meowk↔Ren material supports reciprocal teasing, not literal conflict or a ranked friendship claim.",
  ],
} as ExtendedCharacter);
