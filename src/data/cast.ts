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
    logline: "Former Amaurot deputy and UL VIP who turns public embarrassment into a two-act bit: first volunteer for prosecution, then flee the sentence. She asks to be put on the Wall, accepts Ren's fake `earn your place` rule with `fair lmaooo`, answers a later `caught in 4k` with `oooh shit *runs*`, and eventually starts baiting the Snow-is-old joke with the escape already preloaded.",
    tags: [...new Set([...(zyrcant.tags ?? []), "VIP", "Amaurot", "Wall", "Ritual play", "Visual shorthand", "Ordinary life", "Self-incrimination", "Kinetic humor", "Snow-is-old ecology", "Petty Crimes"])],
    relationships: [
      {
        name: "Rich",
        note: "Zyrcant was Rich's deputy in Amaurot before the later merger lineage brought that older org-chart history into UL's orbit. The old deputy title is not silently converted into UL command.",
        href: "/characters/rich",
      },
      {
        name: "Ren",
        note: "Zyrcant asks `put me on the wall of shame 😩`; Ren mock-gatekeeps the ritual with `You got to e a r n your place here`; Zyrcant answers `fair lmaooo` and stays in the bit. The correction itself becomes the joke rather than a defensive moment.",
        href: "/characters/ren",
      },
      {
        name: "ShiyaX",
        note: "ShiyaX can publicly call Akariel/Zyrcant `caught in 4k`; Zyrcant's contextual answer is `oooh shit *runs*`. Comfortable public teasing is supported; exceptional closeness is not being manufactured from it.",
      },
      {
        name: "Gabu",
        note: "Gabu is practical doorway help, pointing Akariel/Zyrcant to the UL server tour. Elsewhere Zyrcant narrates himself as the person who `tackles ppl`, specifically Gabu in that bit; keep the stage direction as chat slapstick, not literal physical contact or a closeness ranking.",
        href: "/characters/gabu",
      },
      {
        name: "Snow",
        note: "Zyrcant knows calling Snow old is a reliable room button well enough to press it deliberately: `Everytime someone calls snow old` is followed ten seconds later by `-runs-`. Better evidence for her self-aware troublemaking and the running-gag ecology than for a special Snow dyad.",
        href: "/characters/snow",
      },
    ],
    quotes: [...new Set([
      ...(zyrcant.quotes ?? []),
      "put me on the wall of shame 😩",
      "fair lmaooo",
      "oooh shit *runs*",
      "im the one person who tackles ppl",
      "and im tackling gabu in this case",
      "Everytime someone calls snow old",
      "-runs-",
      "the only apps now on my mac is spotify chrome and discord 😛",
      "Quiet at first but a crackhead once I’m comfortable",
    ])],
  };
}

const shikiIndex = allCharacters.findIndex((character) => character.id === "shiki");
if (shikiIndex >= 0) {
  const shiki = allCharacters[shikiIndex];
  const relationships = [...(shiki.relationships ?? [])];
  const upsert = (name: string, note: string, href?: string) => {
    const index = relationships.findIndex((relationship) => relationship.name === name);
    const next = href ? { name, note, href } : { name, note };
    if (index >= 0) relationships[index] = next;
    else relationships.push(next);
  };

  upsert(
    "Mugen",
    "`Sensei being sensei after 5 years` is recognition-through-behavior, not a ceremonial title dump: names and games have changed, but Mugen still recognizes Shiki by the fact that he is explaining how the system works. The callback supports long continuity without inventing an appointment date.",
    "/characters/mugen",
  );
  upsert(
    "Moon",
    "When Where Winds Meet auto-promotes Shiki into guild leadership, Moon supplies the mechanical explanation and Shiki simply acts on it. The scene is practical context exchange, not a prestige dispute or friendship ranking.",
    "/characters/moon",
  );

  allCharacters[shikiIndex] = {
    ...shiki,
    logline: "Sensei by behavior more than ceremony: Shiki can spend years explaining builds and systems, survive enough alias drift to joke that UL has too many names and rooms, accidentally inherit a WWM guild crown, ask `wat how im guild leader lol`, pass it on, do his dailies and go back to HoK.",
    tags: [...new Set([...(shiki.tags ?? []), "Where Winds Meet", "Teaching", "Systems help", "Alias drift", "Accidental guild leader", "HoK", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(shiki.quotes ?? []),
      "i got many name in this discord",
      "just so many room in UL you get lost",
      "wat how im guild leader lol",
      "i pass to rich",
      "I log in wwm then go daily and then back to HoK",
    ])],
    claims: [
      ...(shiki.claims ?? []),
      "In the 2025–2026 Where Winds Meet return, Shiki's actual teaching/helping behavior is recognizable enough that Mugen calls it `Sensei being sensei after 5 years` despite alias drift.",
      "WWM mechanics unexpectedly put guild leadership on Shiki; his response is `wat how im guild leader lol`, followed by the game-local handoff `i pass to rich`.",
      "Shiki later describes WWM as a daily-stop before returning to HoK, so game expertise and exclusive game devotion are not treated as the same trait.",
    ],
    antiFanon: [
      ...(shiki.antiFanon ?? []),
      "WWM Guild Leader is an in-game mechanic, not a UL promotion, succession, or appointment.",
      "`Sensei being sensei after 5 years` supports behavioral reputation; it does not date a formal Sensei appointment from current/export role arrays.",
      "`i pass to rich` stays game-local here and does not establish UL hierarchy, friendship rank, or command succession.",
      "Shiki's HoK-over-WWM routine is a dated play habit, not a permanent preference.",
    ],
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

const supportTechIndex = allCharacters.findIndex((character) => character.id === "support-tech");
const supportTechCharacter: Character = {
  id: "support-tech",
  name: "Support Tech",
  aliases: ["✔️ Support Tech", "supporttech900"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021–2023+",
  logline: "Wall participant who learns the room's prosecution ritual almost in real time and immediately decides being exposed is fun. Confusion becomes `Is this where you expose Peopl` and then `Ehehehhehe`; a month later getting caught is `Me UH gOt EXpOsE WEE`, while a later filing gets the mock-victim version, `WhY U expOse Me`. The useful contradiction is that the same chaos-noise register can go abruptly soft when Snow may be hurting: `Bee stink hurt you 😔`.",
  tags: ["Archive cast", "Wall", "Rapid acclimation", "Mock defendant", "Exposure-positive", "Self-incrimination", "Kinetic humor", "Mugen summons", "Soft concern", "Disappearance / return", "Petty Crimes"],
  relationships: [
    {
      name: "Mugen",
      note: "Support Tech can summon Mugen with almost no setup right beside Wall media on both sides of a long authored gap: 2021 goes attachment → `@Mugen`; 2023 goes `@Mugen` → attachment. The recurrence supports persistent low-setup Wall familiarity, not a closeness ranking or formal role.",
      href: "/characters/mugen",
    },
    {
      name: "Snow",
      note: "Snow posts an image, tags Support Tech shortly afterward, and Support Tech later true-replies to that exact image parent with `Bee stink hurt you 😔`. The direct edge supports a small soft-check-in register inside the room's bee-pun mess; the uninspected image does not tell us what happened to Snow.",
      href: "/characters/snow",
    },
  ],
  quotes: [
    "I'm confused myself 😨",
    "Is this where you expose Peopl",
    "Ehehehhehe",
    "Me UH gOt EXpOsE WEE",
    "WhY U expOse Me",
    "Feed me Soba",
    "Bee stink hurt you 😔",
  ],
};

if (supportTechIndex >= 0) {
  const supportTech = allCharacters[supportTechIndex];
  allCharacters[supportTechIndex] = {
    ...supportTech,
    ...supportTechCharacter,
    aliases: [...new Set([...(supportTech.aliases ?? []), ...supportTechCharacter.aliases!])],
    tags: [...new Set([...(supportTech.tags ?? []), ...supportTechCharacter.tags!])],
    relationships: supportTechCharacter.relationships,
    quotes: [...new Set([...(supportTech.quotes ?? []), ...supportTechCharacter.quotes!])],
  };
} else {
  allCharacters.push(supportTechCharacter);
}

const zhenxiIndex = allCharacters.findIndex((character) => character.id === "zhenxi");
const zhenxiCharacter: Character = {
  id: "zhenxi",
  name: "Zhēnxī",
  billing: "legacy",
  role: "Archive-era Daycare / Wall cast",
  era: "2021–2022+",
  logline: "Converted Wall prosecutor: Zhēnxī enters the ritual from the defendant's chair screaming `NOT THE WALL OF SHAME FAME`, stays affectionate with the people roasting her, then learns the machinery well enough to exhume months-old evidence on Ren, rule it `Deserving`, and encourage another witness. The embarrassment never disappears; she just becomes dangerous too.",
  tags: ["Archive cast", "Daycare", "Wall", "Converted prosecutor", "Theatrical embarrassment", "Affectionate teasing", "Cold-case receipts", "Co-conspirator", "Petty Crimes"],
  relationships: [
    {
      name: "Rummy",
      note: "Rummy can post material that gets an immediate `NOOOOOO` out of Zhēnxī, then answer the panic with `I love YoU`; Zhēnxī replies `I love you too` instead of leaving the bit. Embarrassment and affection coexist comfortably here without being turned into romance canon.",
      href: "/characters/rummy",
    },
    {
      name: "Ren",
      note: "Zhēnxī first meets the Wall with Ren in the room joking about how quickly she got shamed; by 2022 she can tag Ren with old evidence, laugh through `STAWP`, and pronounce the receipt `Deserving`. Familiarity is lived as public evidence warfare, not a closeness ranking.",
      href: "/characters/ren",
    },
    {
      name: "Gabu",
      note: "When Gabu piles onto Zhēnxī's Ren filing, Zhēnxī answers `Yes, you tell her-`. It is a small but wonderfully clear co-conspirator beat: once she owns the prosecutor chair, she is happy to call another witness.",
      href: "/characters/gabu",
    },
  ],
  quotes: [
    "NOOOOOOOOOOO",
    "NOT THE WALL OF SHAME FAME",
    "I love you too",
    "@RΣN so uh-",
    "AKDJHASJD LMAO",
    "Deserving",
    "Yes, you tell her-",
  ],
  claims: [
    "The same stable account is visible first as a theatrically horrified Wall defendant and later as an active filer of old evidence against Ren.",
    "Ren says the receipt Zhēnxī posts is roughly four months old; Zhēnxī answers the age objection with `Deserving` rather than apology.",
  ],
  antiFanon: [
    "The Wall scenes used for this person-level arc are support-room receipts, not relabeled Daycare dialogue.",
    "Rummy posted the June attachment; Zhēnxī posted the July screenshot. POSTED BY does not establish MADE BY, CAPTURED BY, or FEATURING.",
    "Reciprocal `I love you` language here is affectionate teasing and does not establish romance, family, or an exclusive relationship category.",
    "The July screenshot contents were not visually inspected; the social use of the receipt is supported by surrounding dialogue, not guessed pixels.",
  ],
};

if (zhenxiIndex >= 0) {
  const zhenxi = allCharacters[zhenxiIndex];
  allCharacters[zhenxiIndex] = {
    ...zhenxi,
    ...zhenxiCharacter,
    tags: [...new Set([...(zhenxi.tags ?? []), ...zhenxiCharacter.tags!])],
    relationships: zhenxiCharacter.relationships,
    quotes: [...new Set([...(zhenxi.quotes ?? []), ...zhenxiCharacter.quotes!])],
    claims: [...new Set([...(zhenxi.claims ?? []), ...zhenxiCharacter.claims!])],
    antiFanon: [...new Set([...(zhenxi.antiFanon ?? []), ...zhenxiCharacter.antiFanon!])],
  };
} else {
  allCharacters.push(zhenxiCharacter);
}

const nekozIndex = allCharacters.findIndex((character) => character.id === "nekoz");
const nekozCharacter: Character = {
  id: "nekoz",
  name: "Nekoz",
  aliases: [".notouch", "Nekoz (orsaken)"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2020",
  logline: "Microscopic surviving Wall footprint, immaculate comic timing: Rooks says `I’ll walk myself out`; 4.213 seconds later Nekoz's entire authored Wall bibliography answers with one sleepy emote. Almost no prose, but the placement does all the heckling.",
  tags: ["Archive cast", "Wall", "Deadpan drive-by", "Low-verbiage", "Timing", "Petty Crimes"],
  relationships: [
    {
      name: "Rooks",
      note: "Historical Rookie Cookie says `I’ll walk myself out`; Nekoz drops a sleepy emote 4.213 seconds later. The chronology makes a deadpan tag more likely than not, but there is no structured Reply pointer and no closeness claim.",
      href: "/characters/rooks",
    },
  ],
  quotes: [":7063_homu_zzzz:"],
  claims: [
    "Nekoz has exactly one surviving authored Wall message in the current census: a sleepy emote 4.213 seconds after Rooks says `I’ll walk myself out`.",
  ],
  antiFanon: [
    "One sleepy emote does not establish that Nekoz is habitually sleepy, lazy, bored, dismissive, or socially distant.",
    "The Nekoz/Rooks connection is a probable timing-based response, not a structured Discord Reply edge or closeness ranking.",
    "Gilli posted the screenshot preceding the pocket; MADE BY, CAPTURED BY, and FEATURING remain unresolved without separate visual attribution.",
  ],
};

if (nekozIndex >= 0) {
  const nekoz = allCharacters[nekozIndex];
  allCharacters[nekozIndex] = {
    ...nekoz,
    ...nekozCharacter,
    aliases: [...new Set([...(nekoz.aliases ?? []), ...nekozCharacter.aliases!])],
    tags: [...new Set([...(nekoz.tags ?? []), ...nekozCharacter.tags!])],
    relationships: nekozCharacter.relationships,
    quotes: [...new Set([...(nekoz.quotes ?? []), ...nekozCharacter.quotes!])],
  };
} else {
  allCharacters.push(nekozCharacter);
}

export const castGroups = previousGroups.map((group) => ({
  ...group,
  characterIds: [...group.characterIds],
}));

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
for (const characterId of ["rose", "alaina", "support-tech", "zhenxi", "nekoz"]) {
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(characterId)) {
    archiveCastGroup.characterIds.push(characterId);
  }
}

export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
