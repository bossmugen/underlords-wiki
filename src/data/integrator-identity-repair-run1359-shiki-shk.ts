import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Hard canon from MAIN CANON_LOCKS.md: Shiki = Shk = yuki1794.
// Run 1359 briefly created a separate `shk` structured owner while processing
// the new Whiskey packet. Remove that duplicate and keep the material on Shiki.
const duplicateShkIndex = allCharacters.findIndex((character) => character.id === "shk");
if (duplicateShkIndex >= 0) {
  allCharacters.splice(duplicateShkIndex, 1);
}
characterById.delete("shk");

for (const group of castGroups) {
  group.characterIds = group.characterIds.filter((id) => id !== "shk");
}

const shikiIndex = allCharacters.findIndex((character) => character.id === "shiki");
if (shikiIndex < 0) {
  throw new Error("Run 1359 identity repair expected the canonical Shiki owner.");
}

const shiki = allCharacters[shikiIndex] as ExtendedCharacter;
const shikiNext: ExtendedCharacter = {
  ...shiki,
  aliases: unique([...(shiki.aliases ?? []), "Shk", "yuki1794"]),
  antiFanon: unique([
    ...(shiki.antiFanon ?? []).filter(
      (item) => !(/Shiki/i.test(item) && /Shk/i.test(item) && /separate|distinct|different person/i.test(item)),
    ),
    "Hard canon: Shiki, Shk, and yuki1794 are the same person. Do not split the Run 1359 Whiskey material into a second owner merely because `Shk` resembles a separate short name.",
  ]),
};

allCharacters[shikiIndex] = shikiNext;
characterById.set("shiki", shikiNext);
