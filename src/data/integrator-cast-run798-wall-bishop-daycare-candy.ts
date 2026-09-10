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
        "Tofu repeatedly understands Bishop's Wall framing immediately: screenshot-jail warnings in his first weekend, then a direct `:nyasSmack1:` answer when Bishop escalates an unresolved July dispute into `Time to find my gloves`. Their surviving rhythm can move from mock prosecution to affectionate play without needing the joke explained.",
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
