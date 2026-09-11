import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const requireIndex = (id: string, label: string): number => {
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) throw new Error(`Run 855 expected canonical ${label} owner; refusing to invent a duplicate.`);
  return index;
};

const ansunIndex = requireIndex("ansun", "Ansun / Sou");
const ansun = allCharacters[ansunIndex] as ExtendedCharacter;
allCharacters[ansunIndex] = {
  ...ansun,
  tags: appendUnique(ansun.tags, ["Wall", "Fame", "Self-filing", "Peer reputation", "Petty Crimes"]),
  claims: appendUnique(ansun.claims, [
    "In a Wall conversation peers explicitly remember Sou/Ansun as `always fame` and as somebody who never landed on the shame side of the room's running category. The useful point is reputation: other people already know how to classify him inside the joke.",
    "On 2021-04-29 Ansun/Sou personally posts a four-image Wall sequence after `and another one`. That makes him an active feeder of the same room where peers remember him as Fame material rather than a passive subject of somebody else's receipts.",
  ]),
  antiFanon: appendUnique(ansun.antiFanon, [
    "Sou / Souta / 颯太 / sou.san remain canonical Ansun aliases. Source-local display labels do not create a second Sou person.",
    "The 2021-04-29 media sequence is POSTED BY Ansun only. Uninspected pixels do not establish MADE BY, CAPTURED BY, or FEATURING attribution.",
    "Peers calling Ansun `always fame` is room reputation inside the Wall joke, not a formal rank, popularity metric, or chronology-of-origin claim.",
  ]),
} as ExtendedCharacter;
characterById.set("ansun", allCharacters[ansunIndex]);

const dayaIndex = requireIndex("daya", "Daya");
const daya = allCharacters[dayaIndex] as ExtendedCharacter;
allCharacters[dayaIndex] = {
  ...daya,
  tags: appendUnique(daya.tags, ["Color preference", "Petty Crimes"]),
  quotes: appendUnique(daya.quotes, ["Blue or black"]),
  claims: appendUnique(daya.claims, [
    "In QOTD #338 (`Favorite color?`), Daya directly answers `Blue or black`. Keep it as a tiny preference, not personality symbolism.",
  ]),
} as ExtendedCharacter;
characterById.set("daya", allCharacters[dayaIndex]);

// Nemu also directly answers `Blue and Black` in the same QOTD, but there is no
// canonical public Nemu owner on this surface. Bank the fact rather than creating
// a dossier from one preference answer.

for (const id of ["mimi", "mia"]) {
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) continue;
  const character = allCharacters[index] as ExtendedCharacter;
  allCharacters[index] = {
    ...character,
    antiFanon: appendUnique(character.antiFanon, [
      "Do not attribute `Yellow! 🌻🥂` from the legacy `--Mimi 🥂|| Mia` QOTD block to Mimi/Mia. The underlying message belongs to the annuh / ConfuLuna / mari account; pasted display labels are not authorship.",
    ]),
  } as ExtendedCharacter;
  characterById.set(id, allCharacters[index]);
}
