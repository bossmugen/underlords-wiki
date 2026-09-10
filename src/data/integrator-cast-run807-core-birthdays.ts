import { allCharacters, characterById } from "./cast";
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
    relationships[index] = {
      ...relationships[index],
      ...relationship,
      note: relationship.note,
    };
  } else {
    relationships.push(relationship);
  }
};

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex < 0) {
  throw new Error("Run 807 expected canonical Daya / Dayadream; refusing to create a duplicate.");
}

const daya = allCharacters[dayaIndex] as ExtendedCharacter;
const dayaRelationships = [...(daya.relationships ?? [])];
upsertRelationship(dayaRelationships, {
  name: "Ansun",
  note:
    "Daya and Ansun have a clean bait-and-escalate rhythm once Daya has the room context. Ansun throws down `Go ahead and make me famous; your move`; Daya later answers with the Raja `woof suit`, `ansun gonna be a puppy 😏`, then formally replies to his challenge with the absurd `UL's money maker` / `main attraction for the strip club` escalation. Months later she is still signing a Wall filing `-xoxo ansun`. It reads as comfortable reciprocal joke-building, not romance or literal employment.",
  href: "/characters/ansun",
});

allCharacters[dayaIndex] = {
  ...daya,
  tags: unique([...(daya.tags ?? []), "Context-aware instigator", "Ansun bait-and-escalate", "Petty Crimes"]),
  relationships: dayaRelationships,
  quotes: unique([
    ...(daya.quotes ?? []),
    "i didnt know we had a chat here woaaa",
    "reading to catch myself up!",
    "raja woof suit",
    "ansun gonna be a puppy 😏",
    "hell yea, you'd be UL's money maker. main attraction for the strip club",
    "-xoxo ansun",
  ]),
  claims: unique([
    ...(daya.claims ?? []),
    "Dayadream is canonical Daya. In Officers VC she openly says when she lacks room context (`i didnt know we had a chat here woaaa`; later `reading to catch myself up!`) rather than bluffing familiarity; adjacent sensitive restricted-room dispute material is intentionally excluded from public use.",
    "On May 31, 2023 Ansun directly authors `Go ahead and make me famous; your move`; Daya later builds on the same joke lane and formally replies to that exact challenge with the `UL's money maker` / `main attraction for the strip club` punchline. The mechanical reply edge makes the bait-and-escalate relationship read unusually clean.",
    "On September 30, 2023 Daya posts an uninspected Wall image and then authors `-xoxo ansun`; the text is Daya's, while the image remains POSTED BY Daya only unless stronger provenance resolves creation, capture, or depicted subjects.",
  ]),
  antiFanon: unique([
    ...(daya.antiFanon ?? []),
    "Daya's context-catch-up lines do not license publication of adjacent sensitive restricted-room dispute material.",
    "The Daya↔Ansun puppy / strip-club lane is reciprocal joke material. It does not establish romance, sex, literal strip-club work, governance, exclusivity, or a closeness ranking.",
    "`-xoxo ansun` is authored by Daya; do not transfer authorship to Ansun. The nearby Wall media remains provenance-bounded.",
  ]),
} as ExtendedCharacter;
characterById.set("daya", allCharacters[dayaIndex]);

const cookieIndex = allCharacters.findIndex((character) => character.id === "cookie");
if (cookieIndex < 0) {
  throw new Error("Run 807 expected canonical Cookie / Kuki / Cookies and Juicebox; refusing to create a duplicate.");
}

const cookie = allCharacters[cookieIndex] as ExtendedCharacter;
const cookieRelationships = [...(cookie.relationships ?? [])];
upsertRelationship(cookieRelationships, {
  name: "Mugen",
  note:
    "One of Cookie's older nickname casualties has Mugen's fingerprints all over it. Cookie asks why he is `coochie`, later sighs that apparently people named him `Coochie`; the next night Mugen supplies `JuicyCoochie` and says `i know coz i named it`. Cookie's confusion and resignation are the useful part: another tiny house joke he gets saddled with and has to live through in public.",
  href: "/characters/mugen",
});

allCharacters[cookieIndex] = {
  ...cookie,
  tags: unique([...(cookie.tags ?? []), "Nickname casualty", "JuicyCoochie", "Petty Crimes"]),
  relationships: cookieRelationships,
  quotes: unique([
    ...(cookie.quotes ?? []),
    "the hell why am i coochie",
    "apparently they named me Coochie smh",
  ]),
  claims: unique([
    ...(cookie.claims ?? []),
    "By September 29–30, 2020 stable Cookie / `juicy.cookie` account 249351359290277890 directly reacts to being called `Coochie`; Mugen's stable account 684998869553381424 supplies the fuller `JuicyCoochie` and says `i know coz i named it`.",
  ]),
  antiFanon: unique([
    ...(cookie.antiFanon ?? []),
    "The September 2020 `Coochie` / `JuicyCoochie` cluster is a nickname-culture beat, not a sexuality claim or a new identity owner.",
    "Mugen's `i know coz i named it` supports her authorship claim for the nickname in this surviving exchange; it does not prove this is the absolute first-ever occurrence if an earlier lost receipt existed.",
    "Do not connect Cookie's `JuicyCoochie` nickname to Richard's later `...On A Cooch` voice-channel title without an explicit callback or rename-history bridge.",
  ]),
} as ExtendedCharacter;
characterById.set("cookie", allCharacters[cookieIndex]);
