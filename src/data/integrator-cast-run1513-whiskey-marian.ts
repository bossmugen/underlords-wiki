import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const extendRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  addition: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${addition}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note: addition, href } : { name, note: addition });
  }
};

// Marian Kage = Panda is user-confirmed canon and stable-account backed at
// 356954091198480404. Fold the new context/case-building pattern into the canonical
// person instead of creating a Marian receipt ledger.
const pandaIndex = allCharacters.findIndex((character) => character.id === "panda");
if (pandaIndex < 0) {
  throw new Error("Run 1513 expected canonical Marian / Panda owner; refusing duplicate creation.");
}

const panda = allCharacters[pandaIndex] as ExtendedCharacter;
const pandaRelationships = [...(panda.relationships ?? [])];
extendRelationship(
  pandaRelationships,
  "Eos",
  "Their Wall rhythm also turns context itself into the battleground. Marian can volunteer self-shame to get Eos filed, scream `DELETE THAT` when Eos fires back, complain later that Eos is not shaming enough of the genuinely Wall-worthy material, and repeatedly argue that a receipt is missing its actual meaning. She also supplies reference proactively and can suggest an edit that Eos later shows back to her for a `:PandaPERFECTION:` verdict. The ease is in arguing over the case together, not in either person staying permanently prosecutor or defendant.",
  "context itself into the battleground",
  "/characters/eos",
);
extendRelationship(
  pandaRelationships,
  "Ghoulie",
  "A July 2021 Wall pocket gives Marian/Panda and Baby Lyssa/Ghoulie an easy fake-household squabble: Lyssa says `this is my house y’all just livin in it`, accuses Marian of not cleaning the kitchen, and Marian counters `they're your dishes` / `you cooked it`. It reads as comfortable premise play, not literal cohabitation or family.",
  "fake-household squabble",
  "/characters/baby-lyssa",
);

const nextPanda: ExtendedCharacter = {
  ...panda,
  tags: appendUnique(panda.tags, [
    "Context restorer",
    "Willing co-defendant",
    "Case-building humor",
    "Fast-typing self-own",
    "Petty Crimes",
  ]),
  relationships: pandaRelationships,
  quotes: appendUnique(panda.quotes, [
    "even if i have to shame myself while doing it, i'm getting eos on this wall",
    "okay, wait. there's a whole meaning and context missing to that",
    "of all the shameful things i've said, this is the one you choose",
    "and without context, no less",
    "idk wht you mena",
    "smy spelling is perfect",
  ]),
  claims: appendUnique(panda.claims, [
    "Across May–December 2021 Marian repeatedly treats Wall receipts as arguments whose framing can be repaired. She will accept self-incrimination to get Eos onto the Wall, object that a filing has lost its meaning/context, supply reference herself so another joke can be understood, and later complain that Eos selected the wrong shameful thing `and without context, no less`. The person-level pattern is less `do not perceive me` than `if you are prosecuting me, prosecute the correct case`.",
    "That context instinct is not merely defensive. On August 27 Marian proactively labels her own follow-up with `reference:` before supplying more material, so the cumulative read is context-restorer / willing co-defendant rather than somebody who only invokes context to escape embarrassment.",
    "The Wall contradiction stays intact instead of being smoothed away: Marian can scream `DELETE THAT` during Eos retaliation, then weeks later complain that Eos is too vanilla to shame all the Wall-worthy material she has already produced. Mock self-protection and active case-building are both part of the bit.",
    "Petty Crimes: PERFECT SPELLING, ACCORDING TO MARIAN — `idk wht you mena` followed 4.175 seconds later by `smy spelling is perfect`. The joke is the live fast-typing self-own, not a literacy diagnosis.",
  ]),
  antiFanon: appendUnique(panda.antiFanon, [
    "Marian's repeated context objections do not mean she universally consented to every public filing or always wanted attention. The reviewed scenes establish a recurring joke mechanic, not a blanket private-boundary claim.",
    "`DELETE THAT`, `this is war`, `im gonna strangle you`, and adjacent fight language belong to the local joke register and are not literal violence evidence.",
    "`eos is too vanilla to shame me` is Wall joke language and is not sexuality evidence for Eos or Marian.",
    "The Baby Lyssa/Ghoulie `my house` / kitchen / dishes exchange is mock-household play, not literal cohabitation, family, property, or domestic-role evidence.",
    "The September 2021 spelling self-own supports fast-typing humor. Do not characterize Marian or UL generally as unable to spell.",
  ]),
};
allCharacters[pandaIndex] = nextPanda;
characterById.set("panda", nextPanda);

// BL-Q03: Ren/RV ↔ Baby Lyssa/Ghoulie has a clean non-receipt lane too. Extend the
// existing affection-through-teasing relationship rather than creating another scene card.
const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
const renIndex = allCharacters.findIndex((character) => character.id === "ren");
if (ghoulieIndex < 0 || renIndex < 0) {
  throw new Error("Run 1513 expected canonical Ghoulie and Ren owners.");
}

const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
const ghoulieRelationships = [...(ghoulie.relationships ?? [])];
extendRelationship(
  ghoulieRelationships,
  "Ren",
  "Their fluency is not limited to Wall reputation play. When Ghoulie says she is afraid of scorpions, RV/Ren true-replies to that exact message, insists `I’m nice ghoulie` / `don’t be afraid uwu`, then instantly `**morphs into a scorpion**` when Ghoulie realizes the zodiac premise. Ghoulie laughs. It is fast pretend-monster teasing built from her setup, not romance or literal threat.",
  "pretend-monster teasing",
  "/characters/ren",
);
const nextGhoulie: ExtendedCharacter = {
  ...ghoulie,
  tags: appendUnique(ghoulie.tags, ["Ren", "Premise play", "Scorpion bit"]),
  relationships: ghoulieRelationships,
  quotes: appendUnique(ghoulie.quotes, ["i’m afraid of scorpions", "oh no RV is a scorpion"]),
  claims: appendUnique(ghoulie.claims, [
    "On April 15, 2021 Ghoulie's `i’m afraid of scorpions` gets a true reply from RV/Ren; after he reassures her in exaggerated cute language, she realizes `oh no RV is a scorpion` and he answers almost instantly by `**morphs into a scorpion**`. Her laughter closes a non-receipt relationship beat that broadens their later icon/idol Wall mythology into quick shared-premise teasing.",
  ]),
  antiFanon: appendUnique(ghoulie.antiFanon, [
    "The scorpion exchange is pretend-monster / zodiac-premise teasing. It does not establish literal danger, romance, hierarchy, or a complete closeness ranking.",
  ]),
};
allCharacters[ghoulieIndex] = nextGhoulie;
characterById.set("baby-lyssa", nextGhoulie);

const ren = allCharacters[renIndex] as ExtendedCharacter;
const renRelationships = [...(ren.relationships ?? [])];
extendRelationship(
  renRelationships,
  "Ghoulie",
  "An April 2021 pocket shows the same easy uptake outside Screenshot Court: Ghoulie says she fears scorpions; RV/Ren replies directly, performs reassurance, and the second she clocks him as a scorpion he `morphs` into one for the bit. Ghoulie's laugh makes the rhythm reciprocal rather than a one-sided scare gag.",
  "same easy uptake outside Screenshot Court",
  "/characters/baby-lyssa",
);
const nextRen: ExtendedCharacter = {
  ...ren,
  tags: appendUnique(ren.tags, ["Ghoulie", "Premise play", "Scorpion bit"]),
  relationships: renRelationships,
  quotes: appendUnique(ren.quotes, ["I’m nice ghoulie", "*don’t be afraid uwu*", "**morphs into a scorpion**"]),
  claims: appendUnique(ren.claims, [
    "The April 2021 scorpion pocket broadens Ren/RV's Ghoulie lane beyond later public filing/praise: he can catch a fear premise in a direct reply, reassure her theatrically, then weaponize the exact premise for a near-instant transformation gag that she laughs at. The value is quick mutual joke fluency, not a new relationship rank.",
  ]),
  antiFanon: appendUnique(ren.antiFanon, [
    "The scorpion bit is fictional/premise play and zodiac language, not literal transformation, threat, romance, or authority.",
  ]),
};
allCharacters[renIndex] = nextRen;
characterById.set("ren", nextRen);
