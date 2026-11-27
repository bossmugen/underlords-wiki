import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Run 801 hard identity repair, enforced at the final integration layer:
// Mimi / opalite.honey / ༯ is stable account 783389804079349800.
// Mia / .miaxxx is stable account 439628808545632256.
// Older WIKI layers predate that correction and had folded Mimi's name trail and
// a Mimi/Momo twin bit into Mia. Do not leave both the repaired Mimi owner and
// the old fused Mia owner active at the same time.
const miaIndex = allCharacters.findIndex((character) => character.id === "mia");
if (miaIndex < 0) {
  throw new Error("Run 802 identity repair expected canonical Mia; refusing to create a replacement owner.");
}

const mia = allCharacters[miaIndex] as ExtendedCharacter;
const contaminatedMiaAliases = new Set(["Mimi", "Opalite Honey", "༯"]);
const contaminatedMiaTags = new Set(["Mimi & Momo", "Twin bit"]);
const contaminatedMiaQuotes = new Set(["me and momo are twinsss", "love u twinnn"]);

allCharacters[miaIndex] = {
  ...mia,
  aliases: (mia.aliases ?? []).filter((alias) => !contaminatedMiaAliases.has(alias)),
  tags: (mia.tags ?? []).filter((tag) => !contaminatedMiaTags.has(tag)),
  relationships: (mia.relationships ?? []).filter(
    (relationship) =>
      !(
        relationship.name === "Momo" &&
        /Mimi|matching.*name|twin bit/i.test(relationship.note)
      ),
  ),
  quotes: (mia.quotes ?? []).filter((quote) => !contaminatedMiaQuotes.has(quote)),
  antiFanon: unique([
    ...(mia.antiFanon ?? []),
    "Mia is not Mimi. Stable account 439628808545632256 / `.miaxxx` belongs to Mia; stable account 783389804079349800 / `opalite.honey` / `༯` belongs to Mimi. Similar names and an older fused public owner do not bridge the accounts.",
    "The old Mimi/Momo twin-bit material was removed from Mia when the Mimi ≠ Mia identity correction landed. Do not reassign that material to either person without checking its stable-account provenance.",
  ]),
} as ExtendedCharacter;
characterById.set("mia", allCharacters[miaIndex]);

// Run 795 hard continuity repair, enforced again because an older base layer still
// contains Wall material from a distinct account under the display label Support
// Tech. Canonical Dean / supporttech900 is stable account 770767336780070913;
// the Wall candidate that supplied these defendant/check-in lines is stable
// account 451712961667006465. Similar display language is not an identity bridge.
const deanIndex = allCharacters.findIndex((character) => character.id === "dean");
if (deanIndex < 0) {
  throw new Error("Run 802 identity repair expected canonical Dean; refusing to create a replacement owner.");
}

const dean = allCharacters[deanIndex] as ExtendedCharacter;
const foreignWallQuotes = new Set([
  "Is this where you expose Peopl",
  "Ehehehhehe",
  "Me UH gOt EXpOsE WEE",
  "WhY U expOse Me",
  "Feed me Soba",
  "Bee stink hurt you 😔",
]);
const foreignWallTags = new Set(["Rapid acclimation", "Mock defendant", "Exposure-positive", "Soft concern"]);

allCharacters[deanIndex] = {
  ...dean,
  logline:
    "Mugen's online son whose relationship with her predates Dragon Raja. Years later the same mother/son shorthand survives a Where Winds Meet friend-add problem: Mugen expects Dean to be lost; Dean mildly protests that he already added her.",
  tags: (dean.tags ?? []).filter((tag) => !foreignWallTags.has(tag)),
  relationships: (dean.relationships ?? []).filter(
    (relationship) =>
      !(
        relationship.name === "Snow" &&
        /Bee stink hurt you|Support Tech display/i.test(relationship.note)
      ),
  ),
  quotes: (dean.quotes ?? []).filter((quote) => !foreignWallQuotes.has(quote)),
  antiFanon: unique([
    ...(dean.antiFanon ?? []),
    "Do not fold Wall stable account 451712961667006465 into Dean / supporttech900 stable account 770767336780070913 from the shared `Support Tech`-like labeling alone. The identities remain separate unless a direct bridge appears.",
  ]),
} as ExtendedCharacter;
characterById.set("dean", allCharacters[deanIndex]);
