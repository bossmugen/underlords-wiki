import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const hishiroIndex = allCharacters.findIndex((character) => character.id === "hishiro");
if (hishiroIndex < 0) {
  throw new Error("Run 864 expected canonical Hishiro owner; refusing to recreate Hishiro from a Wall slice");
}

const hishiro = allCharacters[hishiroIndex] as ExtendedCharacter;
const relationships = [...(hishiro.relationships ?? [])];
const anthosIndex = relationships.findIndex((relationship) => relationship.name === "Anthos");
const anthosRelationship = {
  name: "Anthos",
  note:
    "Hishiro's practical help with Anthos stays low-ceremony: coffee gets an immediate `Me pls`, game luck becomes two good drops, and screenshot trouble gets an Android edit tip followed by the blunt realization `oh emulator`. Useful little exchanges seem to travel between them without either person needing to turn them into a speech.",
  href: "/characters/anthos",
};
if (anthosIndex >= 0) relationships[anthosIndex] = anthosRelationship;
else relationships.push(anthosRelationship);

allCharacters[hishiroIndex] = {
  ...hishiro,
  logline:
    "Staff who likes useful things to arrive with a handle and jokes to arrive with almost none: Hishiro answers summons, corrects figures, labels her own work, explains screenshot mechanics, then can file the screenshot and let a tiny `:Hehe:` do the rest.",
  tags: appendUnique(hishiro.tags, [
    "Wall",
    "Screenshot fluency",
    "Receipt filing",
    "Low-commentary humor",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(hishiro.quotes, [
    "ClubChat Karaoke",
    "android has one as well, after you take the screen shot you can edit it right there and then",
    "oh emulator",
    ":Hehe:",
  ]),
  claims: appendUnique(hishiro.claims, [
    "Across late August through early October 2020, Hishiro repeatedly files screenshots and images to the Wall with little or no commentary. Two separate filings are followed within seconds by a standalone `:Hehe:`, giving her a recurring screenshot-first, tiny-giggle-after rhythm rather than a one-off media post.",
    "On September 12, 2020, Hishiro answers Anthos's screenshot-workflow problem with the concrete Android post-capture edit path and then compresses the Mac/emulator realization to `oh emulator`. Read beside the repeat filings, the practical screenshot knowledge and the actual filing habit belong to the same lived pattern.",
    "`ClubChat Karaoke` is Hishiro's most elaborate surviving Wall label in this slice: enough context to tell the room what she is carrying over, then back to letting the attachment do the work.",
  ]),
  antiFanon: appendUnique(hishiro.antiFanon, [
    "Wall attachments in this packet are POSTED BY Hishiro only. Do not upgrade them to MADE BY, CAPTURED BY, or FEATURING without an independent bridge.",
    "Hishiro's use of `edit` refers only to an unspecified screenshot-editing function after capture. It does not establish fabrication, tampering, or authorship of any filed image.",
    "Repeated receipt filing and screenshot fluency deepen Hishiro's social style; they do not create a formal archivist, editor, fact-checker, media, or information-officer appointment. Her public role remains Staff.",
  ]),
} as ExtendedCharacter;

characterById.set("hishiro", allCharacters[hishiroIndex]);
