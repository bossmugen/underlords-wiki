import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Run 1247 publishes the direct A/B ordinary-taste gain into Daya's existing
// owner. RealGameJack's four-message Wall footprint stays banked as a strong thin
// person read until another scene gives that character enough breadth for a
// durable standalone Cast owner.
const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex < 0) {
  throw new Error("Run 1247 expected canonical Daya owner; refusing to create a duplicate.");
}

const daya = allCharacters[dayaIndex] as ExtendedCharacter;
allCharacters[dayaIndex] = {
  ...daya,
  tags: unique([...(daya.tags ?? []), "Eighty-Six", "Anime taste", "Petty Crimes"]),
  quotes: unique([...(daya.quotes ?? []), "luv this anime"]),
  claims: unique([
    ...(daya.claims ?? []),
    "Daya likes `86 / Eighty-Six`. RealGameJack posts a Frederica/Eighty-Six reaction GIF and Daya directly replies `luv this anime`; Jack's `I knew you did` follows less than a minute later, making the preference feel remembered by at least one peer without turning it into a guild-wide reputation.",
  ]),
  antiFanon: unique([
    ...(daya.antiFanon ?? []),
    "Daya's Eighty-Six preference is direct. RealGameJack apparently knowing it already is contextual rather than an encoded reply edge, and one exchange does not establish friendship rank, romance, or a server-wide known trait.",
    "RealGameJack remains a banked thin profile candidate from a complete four-message Wall footprint: three expressive media posts plus `I knew you did`. Do not manufacture a standalone Cast biography from that single social axis until another materially different person scene appears.",
  ]),
} as ExtendedCharacter;

characterById.set("daya", allCharacters[dayaIndex]);
