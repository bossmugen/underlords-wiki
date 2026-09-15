import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const roseIndex = allCharacters.findIndex((character) => character.id === "rose");
if (roseIndex < 0) {
  throw new Error("Run 1127 expected canonical Rose / DarkAsrai owner; refusing to create a duplicate person.");
}

const rose = allCharacters[roseIndex] as ExtendedCharacter;

allCharacters[roseIndex] = {
  ...rose,
  aliases: appendUnique(rose.aliases, ["DarkAsrai", "darkasrai"]),
  logline: rose.logline.includes("Beat me to it")
    ? rose.logline
    : `${rose.logline} She is also perfectly willing to miss the first filing by seconds, say \`Beat me to it\`, and then add two screenshots of her own. Rose does not merely survive Screenshot Court; sometimes she is annoyed somebody else reached the prosecution table first.`,
  tags: appendUnique(rose.tags, [
    "Screenshot Court",
    "Wall-of-shame culture",
    "Volunteer prosecutor",
    "Visual participation",
    "Petty Crimes",
  ]),
  quotes: appendUnique(rose.quotes, ["Beat me to it"]),
  claims: appendUnique(rose.claims, [
    "In the reviewed Daycare handoff, DarkAsrai resolves to the existing canonical Rose owner rather than a second character. Her `Beat me to it` line is followed by two additional screenshots from Rose herself, sharpening the older filing-race read into active Screenshot Court participation: she can be the defendant, the receipt courier, and the person adding exhibits when somebody else gets there first.",
    "Rose's Daycare participation is often visually economical: short reactions, screenshots, and compact lines can carry the room bit without requiring a speech. The new handoff deepens that social style rather than replacing her existing Staff / recruiting / retention history.",
  ]),
  antiFanon: appendUnique(rose.antiFanon, [
    "DarkAsrai / darkasrai are Rose aliases on the canonical Rose owner. Stable account 659305268684783628 in this Daycare handoff does not create a second DarkAsrai person or justify an invented account-migration chronology.",
    "Rose's ferris-wheel media and the two screenshots are POSTED BY Rose only in this handoff. Do not upgrade them to MADE BY, CAPTURED BY, or FEATURING without independent attribution.",
    "The one-emote ShiyaX revival/callback is room-level interaction texture only; it does not establish a friendship tier, romance, family relation, or special dyad.",
    "`Beat me to it` plus the two screenshots supports comfortable participation in the room's public-embarrassment filing ritual. It does not make Screenshot Court a formal governance process or establish the underlying screenshot subjects from uninspected media.",
  ]),
} as ExtendedCharacter;

const canonicalRose = allCharacters[roseIndex] as ExtendedCharacter;
characterById.set("rose", canonicalRose);
characterById.set("darkasrai", canonicalRose);
