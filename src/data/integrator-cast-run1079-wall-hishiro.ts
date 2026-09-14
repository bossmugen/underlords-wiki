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
  throw new Error("Run 1079 expected canonical Hishiro owner; refusing to create a second Hishiro from an early Wall slice");
}

const hishiro = allCharacters[hishiroIndex] as ExtendedCharacter;

allCharacters[hishiroIndex] = {
  ...hishiro,
  aliases: appendUnique(hishiro.aliases, ["αむろしひ", "thicc shiro"]),
  tags: appendUnique(hishiro.tags, ["Early Wall", "Self-own typos", "Dry callouts"]),
  quotes: appendUnique(hishiro.quotes, [
    "Pqf ahit i wrote his name wrong",
    "Hes a god damn play boy smh",
    "ayyyy kek",
  ]),
  claims: appendUnique(hishiro.claims, [
    "Stable Discord account 289208784065069057 carries the older display names `αむろしひ` and `thicc shiro` in the reviewed July 2020 Wall packet, safely extending Hishiro's alias history without a name-only identity guess.",
    "The July 13, 2020 self-own `Pqf ahit i wrote his name wrong` adds an older version of Hishiro's low-ceremony humor: she notices her own mistake, says exactly what happened, and lets the typo make the joke for her.",
    "The same early Wall pocket includes compact anime/meme reactions such as `Hes a god damn play boy smh` and `ayyyy kek`. Read beside later screenshot-first and tiny-commentary habits, this is useful continuity for her terse social style rather than a new formal role or a whole-person personality reset.",
  ]),
  antiFanon: appendUnique(hishiro.antiFanon, [
    "The July 2020 image and GIF in this packet are POSTED BY Hishiro only. Do not upgrade them to MADE BY, CAPTURED BY, or FEATURING without an independent provenance bridge.",
    "A nearby invite-context row does not establish event ownership, social leadership, recruiting authority, or appointment chronology for Hishiro.",
    "The older display aliases are safe because they occur on Hishiro's stable Discord account; do not use them to merge similarly named people elsewhere.",
  ]),
} as ExtendedCharacter;

characterById.set("hishiro", allCharacters[hishiroIndex]);
