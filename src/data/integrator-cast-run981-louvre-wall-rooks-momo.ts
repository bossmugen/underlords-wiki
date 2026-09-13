import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const rooksIndex = allCharacters.findIndex((character) => character.id === "rooks");
const momoIndex = allCharacters.findIndex((character) => character.id === "momo");
const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
const miaIndex = allCharacters.findIndex((character) => character.id === "mia");

if (rooksIndex < 0 || momoIndex < 0 || mimiIndex < 0 || miaIndex < 0) {
  throw new Error("Run 981 expected canonical Rooks, Momo, Mimi, and Mia owners; refusing to create or merge identities.");
}
if (allCharacters[mimiIndex].id === allCharacters[miaIndex].id) {
  throw new Error("Run 981 hard canon guard: Mimi / opalite.honey and Mia are separate people.");
}

const rooks = allCharacters[rooksIndex] as ExtendedCharacter;
const rooksNext: ExtendedCharacter = {
  ...rooks,
  tags: unique([
    ...(rooks.tags ?? []),
    "Home art station",
    "Watercolor",
    "Acrylic painting",
    "Digital art",
    "PC building",
  ]),
  quotes: unique([
    ...(rooks.quotes ?? []),
    "paint at times and some digital art",
    "I like acrylics too 😊",
  ]),
  claims: unique([
    ...(rooks.claims ?? []),
    "On October 4, 2021, Rooks said she had an art station in her room, painted at times, did some digital art, liked watercolors and acrylics, and was slowly building her own PC. It broadens the existing printmaking/Louvre picture into an ordinary home-making practice rather than a single-event art phase.",
  ]),
  antiFanon: unique([
    ...(rooks.antiFanon ?? []),
    "The October 4 art exchange does not establish when Rooks's home art setup began or whether the PC build was completed. Oils belonged to another participant in that conversation and must not be transferred onto Rooks.",
  ]),
};
allCharacters[rooksIndex] = rooksNext;
characterById.set("rooks", rooksNext);

const momo = allCharacters[momoIndex] as ExtendedCharacter;
const momoNext: ExtendedCharacter = {
  ...momo,
  tags: unique([
    ...(momo.tags ?? []),
    "Wall gallery",
    "Cursed gallery",
    "Wall memories",
  ]),
  quotes: unique([
    ...(momo.quotes ?? []),
    "Can we still post here?",
    "Someone give me an idea of what to post",
    "Is it okay if i post cursed stuff from my gallery here?",
    "My pride is forever tarnished",
    "The wall holds many memories!",
    "Whoever posted here is best waifu",
  ]),
  claims: unique([
    ...(momo.claims ?? []),
    "Across 2021 Momo treats the Wall less like a static feed than a room she helps keep alive: she checks whether posting is still open, asks the room for an idea, offers cursed gallery material, laughs at her own ruined pride, calls out the Wall's memories, and praises whoever posted as `best waifu`. The pattern reads as reciprocal gallery participation rather than a one-way prosecution role.",
  ]),
  antiFanon: unique([
    ...(momo.antiFanon ?? []),
    "Mimi / opalite.honey is separate from Mia. Momo's reciprocal twin bit belongs to Mimi and Momo; never transfer it onto Mia because of stale display-name prose.",
    "Wall reply/reaction topology is room-specific interaction texture, not a friendship ranking. Uninspected media stays POSTED BY Momo only unless maker, capturer, or featured subjects are independently established.",
  ]),
};
allCharacters[momoIndex] = momoNext;
characterById.set("momo", momoNext);
