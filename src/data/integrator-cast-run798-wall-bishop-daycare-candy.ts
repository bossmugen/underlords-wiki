import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const bishopId = "bishopthaguru";
const bishopSeed: ExtendedCharacter = {
  id: bishopId,
  name: "BishopThaGuru",
  aliases: ["bishopthaguru"],
  billing: "legacy",
  role: "Archive-era cast",
  era: "2021+",
  logline:
    "Bishop keeps turning Wall nonsense into mock procedure: one minute he is the defendant asking which of the alleged `19+ files` the feds mean, the next he is giving somebody else's grievance a dry `you deserved it`, and when his own screenshot leaves the case muddy he acknowledges the ambiguity before deciding it is still time to find the boxing gloves. Cautious wording; absolutely no reluctance to continue the bit.",
  tags: [
    "Archive cast",
    "Wall",
    "Mock procedure",
    "Dry adjudication",
    "Gilli",
    "Tofu",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note:
        "Gilli brings Bishop the grievance that Strawbs is a meanie; Bishop loads `:lethink:`, rules `you deserved it`, and gets called a meanie himself. It reads as a compact, comfortable complaint → adverse-ruling → objection teasing lane, not a closeness ranking.",
      href: "/characters/gilli",
    },
    {
      name: "Tofu",
      note:
        "Tofu understands Bishop's Wall framing immediately: screenshot-jail warnings in his first weekend, then a direct `:nyasSmack1:` answer when Bishop escalates an unresolved July dispute into `Time to find my gloves`. The scene works because Tofu catches the theatrical premise without needing it explained.",
      href: "/characters/tofu",
    },
  ],
  quotes: [
    "W-which file?",
    "You mean the 19+ files specifically?",
    "you deserved it",
    "I'm not sure who's in the wrong here, or if we're both right.",
    "Either way... Time to find my gloves 🥊🥊",
    "Is that a compliment, or a warning?",
  ],
  claims: [
    "Stable account 362396877502808064 / username `bishopthaguru` carries BishopThaGuru's repeated Wall mock-procedure voice in June–July 2021.",
    "The earlier `feds` / `files` scene becomes a repeated social habit when read beside Bishop's July `you deserved it` ruling to Gilli and his own ambiguity-aware screenshot filing followed by `Time to find my gloves`.",
    "Bishop explicitly says he is not sure who is wrong — or whether both sides are right — before escalating the unresolved dispute into boxing theater. The useful contradiction is uncertainty-aware wording paired with gleeful participation once a bit exists.",
    "Bishop's July screenshot remains POSTED BY Bishop only; its pixels were not inspected, so MADE BY / CAPTURED BY / FEATURING and the exact visual offense remain unresolved.",
  ],
  antiFanon: [
    "The `feds`, `files`, verdict language, and boxing-glove language are social jokes, not evidence of law enforcement, criminal history, disciplinary authority, or a formal UL adjudicator role.",
    "The Gilli exchange supports bounded comfortable teasing, not a friendship rank or broader relationship label.",
    "Tofu's direct uptake of the gloves bit is scene-level relationship texture; it does not by itself establish romance, exclusivity, kinship, or formal partnership.",
    "Uninspected media remains POSTED BY only unless maker, capturer, or depicted subjects are independently established.",
  ],
};

const bishopIndex = allCharacters.findIndex((character) => character.id === bishopId);
if (bishopIndex >= 0) {
  const current = allCharacters[bishopIndex] as ExtendedCharacter;
  allCharacters[bishopIndex] = {
    ...current,
    ...bishopSeed,
    aliases: appendUnique(current.aliases, bishopSeed.aliases ?? []),
    tags: appendUnique(current.tags, bishopSeed.tags ?? []),
    relationships: bishopSeed.relationships,
    quotes: appendUnique(current.quotes, bishopSeed.quotes ?? []),
    claims: appendUnique(current.claims, bishopSeed.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, bishopSeed.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(bishopSeed);
}

const canonicalBishop = allCharacters.find((character) => character.id === bishopId)!;
characterById.set(bishopId, canonicalBishop);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(bishopId)) {
  archiveCastGroup.characterIds.push(bishopId);
}

const candyIndex = allCharacters.findIndex((character) => character.id === "candy");
if (candyIndex < 0) {
  throw new Error("Run 798 expected the canonical Candy owner; refusing to create a duplicate.");
}

const candy = allCharacters[candyIndex] as ExtendedCharacter;
const candyRelationships = [...(candy.relationships ?? [])];
if (!candyRelationships.some((relationship) => relationship.name === "Ansun")) {
  candyRelationships.push({
    name: "Ansun",
    note:
      "Candy reopens a quiet September Wall stretch with `Moo` plus paired Cat_Sporkles; Ansun answers in the same tiny language less than a minute later with `Mooo:Cat_Sporkle:`. A clean mirroring beat: Candy can hand the room almost no prose and Ansun still knows exactly how to catch it.",
    href: "/characters/ansun",
  });
}

allCharacters[candyIndex] = {
  ...candy,
  relationships: candyRelationships,
  tags: appendUnique(candy.tags, ["Ansun"]),
  claims: appendUnique(candy.claims, [
    "On September 1, 2021, Candy posts `Moo` with paired Cat_Sporkle emotes and Ansun mirrors the register less than a minute later with `Mooo:Cat_Sporkle:`. This supports a small direct mirroring/familiar-nonsense beat, not a closeness hierarchy.",
  ]),
  antiFanon: appendUnique(candy.antiFanon, [
    "Ansun's quick September `Mooo:Cat_Sporkle:` uptake is relationship texture inside one room bit; it is not promoted into a friendship rank, origin claim, or machine-linked reply edge unless separately established.",
  ]),
} as ExtendedCharacter;
characterById.set("candy", allCharacters[candyIndex]);

const deanIndex = allCharacters.findIndex((character) => character.id === "dean");
if (deanIndex < 0) {
  throw new Error("Run 798 expected the canonical Dean / Beansprout owner; refusing to create Support Tech as a duplicate person.");
}

const dean = allCharacters[deanIndex] as ExtendedCharacter;
const deanRelationships = [...(dean.relationships ?? [])];
const mugenRelationshipIndex = deanRelationships.findIndex((relationship) => relationship.name === "Mugen");
const deanMugenNote =
  "Dean's mum/son language with Mugen predates UL as an online-family relationship. On the Wall, he also develops a tiny filing habit around her: in 2021 he posts a screenshot and tags Mugen seconds later; in 2023 he tags her and then posts another image seconds later. Same person, same summon, years apart — affectionate shorthand plus learned Screenshot Court procedure.";
if (mugenRelationshipIndex >= 0) {
  deanRelationships[mugenRelationshipIndex] = {
    ...deanRelationships[mugenRelationshipIndex],
    note: deanMugenNote,
    href: "/characters/mugen",
  };
} else {
  deanRelationships.push({ name: "Mugen", note: deanMugenNote, href: "/characters/mugen" });
}

allCharacters[deanIndex] = {
  ...dean,
  aliases: appendUnique(dean.aliases, ["Support Tech", "supporttech900"]),
  logline:
    "Mugen's online son from before Dragon Raja and UL, and—under the old Support Tech handle—a very fast learner at Screenshot Court. Dean goes from asking whether this is where people get exposed, to being the defendant, to posting his own exhibits and summoning Mugen around them years apart.",
  tags: appendUnique(dean.tags, ["Wall", "Support Tech", "Screenshot Court", "Petty Crimes"]),
  relationships: deanRelationships,
  quotes: appendUnique(dean.quotes, [
    "Is this where you expose Peopl",
    "Ehehehhehe",
    "Me UH gOt EXpOsE WEE",
    "WhY U expOse Me",
    "Only if pizza man was hot",
    "Don't you agree mum",
  ]),
  claims: appendUnique(dean.claims, [
    "Stable account 770767336780070913 / username `supporttech900`, rendered Support Tech in the Wall export, is Dean / Beansprout. This is a resolved identity route, not a second Support Tech character.",
    "Across Dean's Wall material, the useful change is newcomer → defendant → learned filer: in March 2021 he asks whether the room is where people get exposed; by June he is posting a screenshot there himself.",
    "Dean pairs two independent Wall exhibits with Mugen summons: attachment then tag within seconds in June 2021, and tag then attachment within seconds in March 2023. That recurring delivery rhythm is useful relationship texture without becoming hierarchy or role chronology.",
    "The two Dean / Support Tech images in this packet remain POSTED BY Dean only; uninspected pixels do not establish maker, capturer, depicted people, or subject matter.",
  ]),
  antiFanon: appendUnique(dean.antiFanon, [
    "Support Tech account 770767336780070913 is the resolved Dean / Beansprout account. Do not use this bridge to merge Dean with the distinct stable account 451712961667006465 or any other similarly labeled account.",
    "Dean calling Mugen `mum` and Mugen's established online-son framing are social/online-family language, not a biological-family claim.",
    "Wall activity dates describe surviving Wall participation only; they do not create join dates, absences, appointments, or formal governance roles.",
    "Uninspected screenshots remain POSTED BY only unless creator, capturer, or depicted subjects are independently established.",
  ]),
} as ExtendedCharacter;
characterById.set("dean", allCharacters[deanIndex]);

const tofuIndex = allCharacters.findIndex((character) => character.id === "tofu");
if (tofuIndex < 0) {
  throw new Error("Run 798 expected the canonical Tofu owner; refusing to create a duplicate.");
}

const tofu = allCharacters[tofuIndex] as ExtendedCharacter;
const tofuRelationships = [...(tofu.relationships ?? [])];
const cookieRelationshipIndex = tofuRelationships.findIndex((relationship) => relationship.name === "Cookie");
const tofuCookieNote =
  "Cookie and Tofu have been doing reciprocal receipt theater for years. In 2021 Cookie gives Tofu the stare after a filing and Tofu invokes `fair warning`; days later Cookie posts the screenshot that gets `PUTTING ME ON BLAST!` followed almost immediately by `I'll fucking do it again too.` Later receipts keep the same comfortable prosecution/defendant grammar alive without turning it into a closeness ranking.";
if (cookieRelationshipIndex >= 0) {
  tofuRelationships[cookieRelationshipIndex] = {
    ...tofuRelationships[cookieRelationshipIndex],
    note: tofuCookieNote,
    href: "/characters/cookie",
  };
} else {
  tofuRelationships.push({ name: "Cookie", note: tofuCookieNote, href: "/characters/cookie" });
}

allCharacters[tofuIndex] = {
  ...tofu,
  logline:
    "Visual-first Staff who knows exactly where the brake is and keeps choosing comedy anyway. Tofu can tell somebody else `At least pace yourself`, chant for the Wall to publish the shame, accept a challenge to self-file, call the receipts `Quality content`, then get caught by Cookie and turn theatrical outrage into `I'll fucking do it again too.`",
  tags: appendUnique(tofu.tags, ["Receipt instigator", "Reciprocal defendant", "Wall of Shame", "Cookie"]),
  relationships: tofuRelationships,
  quotes: appendUnique(tofu.quotes, [
    "Shame. Shaaaaaaaaame",
    "Wall of shame, wall of shame. Post the rebate 😝",
    "Maybe ^^",
    "Bet! I got nothing to hide",
    "I am a shrimp at best. 😘",
    "Quality content we strive for here in UL.",
    "Don't give me that look, I gave a fair warning",
    "PUTTING ME ON BLAST!",
    "I'll fucking do it again too.",
  ]),
  claims: appendUnique(tofu.claims, [
    "Tofu's first surviving Wall day already has them actively encouraging filings, answering an accusation of trying to expose everyone with `Maybe ^^`, accepting Woohyuk's direct `You post it rn` challenge, and then posting an image with `I am a shrimp at best. 😘` shortly afterward.",
    "The keeper contradiction is reciprocal shame tolerance: Tofu eagerly prosecutes, but being made the defendant does not make them reject the ritual. Cookie's 2021 filing gets `PUTTING ME ON BLAST!` and then, 37 seconds later, `I'll fucking do it again too.`",
    "The 2021 Cookie/Tofu exchanges materially deepen their already-known later receipt rhythm into a long-running comfortable reciprocal-filing dynamic.",
  ]),
  antiFanon: appendUnique(tofu.antiFanon, [
    "Tofu's Wall filing language is peer comedy, not disciplinary authority, moderation, governance, or a formal prosecutor role.",
    "The Woohyuk challenge plus Tofu's later upload supports a strong/probable self-filing read; the image pixels remain uninspected and therefore do not establish maker, capturer, depicted people, or literal wealth/spending status.",
    "The Cookie rhythm supports long-running reciprocal teasing, not a friendship rank, family relationship, romance, sex, or exclusivity.",
  ]),
} as ExtendedCharacter;
characterById.set("tofu", allCharacters[tofuIndex]);
