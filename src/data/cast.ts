import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre632";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-base";

export const allCharacters: Character[] = [...previousCharacters];

const roseIndex = allCharacters.findIndex((character) => character.id === "rose");
const roseRelationships = [
  {
    name: "Gilli",
    note: "Gilli recognizes `Rose` before Rose has re-supplied the later Lobby intake labels, then immediately moves into getting the role paperwork sorted. The person lands before the form does.",
    href: "/characters/gilli",
  },
  {
    name: "Mugen",
    note: "Daycare reads like easy existing familiarity rather than a formal reintroduction: Mugs can hit `@DarkAsrai hoiiiiiii`, Rose can tease the giant-headphones situation with `Lol crazy fool`, and ordinary catching-up includes Rose plainly saying she feels better than the last time they were hanging out.",
    href: "/characters/mugen",
  },
  {
    name: "Jan",
    note: "Jan teases Rose about getting `star struck` by the UL officers bunched up in Great Hall; Rose answers `I got star struck? Lol` and then `Ohhhh` when Jan explains. It is light peer teasing, not an officer-role claim for Rose.",
  },
  {
    name: "Moon",
    note: "Rose describes care as favorite food or a personalized wanted gift; in separate prompt-fiction answers, Rose and Moon independently put each other in the same botanical-garden kind of hangout with tea, snacks and gifts. Comfortable social imagination, not a literal outing.",
    href: "/characters/moon",
  },
];

const roseQuotes = [
  "I feel better than I did last time we were hanging out",
  "I've been home for a couple months but going back to working out helps a lot. I missed it...",
  "No need to apologize silly",
  "I got star struck? Lol",
  "Had to search my word document",
];

const roseCharacter: Character = {
  id: "rose",
  name: "Rose",
  aliases: ["Mochi", "DarkAsrai", "darkasrai"],
  billing: "legacy",
  role: "Historical Staff",
  era: "2021–2025+",
  logline: "Historical Staff whose chaos-goblin courtroom life sits beside a much softer ordinary register: Rose can turn up low-energy, say working out helps and she missed it, joke with Mugs and Jan, tell somebody `No need to apologize silly`, then still be the person who kept the QOTD source document months later and went back to fix the sequence.",
  tags: ["Historical Staff", "Archive cast", "Daycare", "Wall", "QOTD", "Ordinary life", "Supportive banter", "Follow-through", "Petty Crimes"],
  relationships: roseRelationships,
  quotes: roseQuotes,
};

if (roseIndex >= 0) {
  const rose = allCharacters[roseIndex];
  allCharacters[roseIndex] = {
    ...rose,
    ...roseCharacter,
    aliases: [...new Set([...(rose.aliases ?? []), ...roseCharacter.aliases!])],
    tags: [...new Set([...(rose.tags ?? []), ...roseCharacter.tags!])],
    relationships: roseRelationships,
    quotes: [...new Set([...(rose.quotes ?? []), ...roseQuotes])],
  };
} else {
  allCharacters.push(roseCharacter);
}

const zyrcantIndex = allCharacters.findIndex((character) => character.id === "zyrcant");
if (zyrcantIndex >= 0) {
  const zyrcant = allCharacters[zyrcantIndex];
  allCharacters[zyrcantIndex] = {
    ...zyrcant,
    aliases: [...new Set([...(zyrcant.aliases ?? []), "Akariel", "Akariel™", "akariel_star"])],
    role: "VIP · former Amaurot deputy",
    era: "2021–",
    logline: "Former Amaurot deputy and UL VIP whose administrative outside-club status never stopped her from becoming fluent in the house joke grammar: four days after the Lobby doorway she asks to be put on the Wall, accepts Ren's fake `earn your place` requirement with `fair lmaooo`, and later keeps showing up for the same communal nonsense.",
    tags: [...new Set([...(zyrcant.tags ?? []), "VIP", "Amaurot", "Wall", "Ritual play", "Visual shorthand", "Ordinary life", "Petty Crimes"])],
    relationships: [
      {
        name: "Rich",
        note: "Zyrcant was Rich's deputy in Amaurot before the later merger lineage brought that older org-chart history into UL's orbit. The old deputy title is not silently converted into UL command.",
        href: "/characters/rich",
      },
      {
        name: "Ren",
        note: "Zyrcant asks `put me on the wall of shame 😩`; Ren mock-gatekeeps the ritual with `You got to e a r n your place here`; Zyrcant answers `fair lmaooo` and stays in the bit. Fast acclimation through teasing, not a closeness ranking.",
        href: "/characters/ren",
      },
      {
        name: "Gabu",
        note: "Gabu is practical doorway help, pointing Akariel/Zyrcant to the UL server tour. Useful onboarding contact, not a promoted dyad.",
        href: "/characters/gabu",
      },
    ],
    quotes: [...new Set([
      ...(zyrcant.quotes ?? []),
      "put me on the wall of shame 😩",
      "fair lmaooo",
      "the only apps now on my mac is spotify chrome and discord 😛",
      "Quiet at first but a crackhead once I’m comfortable",
    ])],
  };
}

const alainaIndex = allCharacters.findIndex((character) => character.id === "alaina");
const alainaCharacter: Character = {
  id: "alaina",
  name: "Alaina",
  aliases: ["alaina_iris_k"],
  billing: "legacy",
  role: "Archive-era Daycare / Wall cast",
  era: "2021–2022+",
  logline: "Straight-person participant with a practical little operating system: check the actual referent, challenge the first answer if it still looks wrong, accept the better explanation, say when something is messed up, and get genuinely excited by an idea because everybody gets the option to participate. Even tired, her bedside manner can remain spectacularly economical: `I can't sleep` receives `Did you try`.",
  tags: ["Archive cast", "Daycare", "Wall", "Lobby", "Sanity checker", "Participation-positive", "Dry practical humor", "Light correction", "Reaction-emoji fluent", "Petty Crimes"],
  relationships: [
    {
      name: "Marian",
      note: "Across two Wall scenes Alaina can question Marian's framing and Marian can correct her back without either exchange becoming a fight. `I think that is tho` gets a direct account-level explanation; the useful texture is ordinary corrective familiarity, not a closeness ranking.",
    },
  ],
  quotes: [
    ".... so is this just out of context....?",
    "Okay",
    "I think that is tho",
    "why? Just... why?",
    "He should know better",
    "It’ll be a really cool channel I love that it lets everybody have the option to participate 😤",
    "I’m still tired",
    "Did you try",
  ],
};

if (alainaIndex >= 0) {
  const alaina = allCharacters[alainaIndex];
  allCharacters[alainaIndex] = {
    ...alaina,
    ...alainaCharacter,
    aliases: [...new Set([...(alaina.aliases ?? []), ...alainaCharacter.aliases!])],
    tags: [...new Set([...(alaina.tags ?? []), ...alainaCharacter.tags!])],
    relationships: alainaCharacter.relationships,
    quotes: [...new Set([...(alaina.quotes ?? []), ...alainaCharacter.quotes!])],
  };
} else {
  allCharacters.push(alainaCharacter);
}

export const castGroups = previousGroups.map((group) => ({
  ...group,
  characterIds: [...group.characterIds],
}));

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
for (const characterId of ["rose", "alaina"]) {
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(characterId)) {
    archiveCastGroup.characterIds.push(characterId);
  }
}

export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
