import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const cookieIndex = allCharacters.findIndex((character) => character.id === "cookie");
if (cookieIndex < 0) {
  throw new Error("Run 807 expected canonical Cookie / Kuki / Cookies and Juicebox; refusing to create a duplicate.");
}

const cookie = allCharacters[cookieIndex] as ExtendedCharacter;
const cookieRelationships = [...(cookie.relationships ?? [])];
const mugenIndex = cookieRelationships.findIndex((relationship) => relationship.name === "Mugen");
const mugenRelationship = {
  name: "Mugen",
  note:
    "One of Cookie's older nickname casualties has Mugen's fingerprints all over it. Cookie asks why he is `coochie`, later sighs that apparently people named him `Coochie`; the next night Mugen supplies `JuicyCoochie` and says `i know coz i named it`. Cookie's confusion and resignation are the useful part: another tiny house joke he gets saddled with and has to live through in public.",
  href: "/characters/mugen",
};
if (mugenIndex >= 0) cookieRelationships[mugenIndex] = mugenRelationship;
else cookieRelationships.push(mugenRelationship);

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
