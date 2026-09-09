import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const shadowId = "lilgrinchy6058";
const shadowIndex = allCharacters.findIndex((character) => character.id === shadowId);

const shadowCharacter: Character = {
  id: shadowId,
  name: "影の戦士",
  aliases: ["lilgrinchy6058"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2020+",
  logline:
    "One surviving authored Wall sentence and somehow a whole participation style: tag Gilli, add 😂, get `XD` back, then later join the same-night bro-code laugh pile. Almost no prose; extremely readable gallery behavior.",
  tags: [
    "Archive cast",
    "Wall",
    "Laughter-first",
    "Low-verbiage",
    "Gallery participant",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note:
        "The entire surviving authored Wall bibliography is `@New Account Gilli#3226 😂`; Gilli answers `XD` a little over two minutes later, and both names later appear in the final 😂 reaction membership on Rookie's `Can’t have bro code if we aren’t bros`. It reads as easy, low-verbiage banter without needing a grander relationship label.",
      href: "/characters/gilli",
    },
  ],
  quotes: ["@New Account Gilli#3226 😂"],
  claims: [
    "On 2020-12-13, 影の戦士 / lilgrinchy6058 directly tagged Gilli with a laughing emoji in their only surviving authored Wall message; Gilli answered `XD` 2m16.555s later in the same pocket.",
    "Later that night, 影の戦士 and Gilli both appear in the final 😂 reaction-user membership on Rookie Cookie's `Can’t have bro code if we aren’t bros`.",
  ],
  antiFanon: [
    "The one-message authored Wall footprint supports a bounded laughter-first / low-verbiage Wall style, not a broad lifelong personality claim.",
    "Gilli's earlier screenshot was posted 19m47.603s before 影の戦士's line, was not visually inspected, and is not assigned as that line's exact referent.",
    "Gilli's `XD` is a same-pocket default message rather than a structured Reply; the uptake is contextual rather than mechanical Reply proof.",
    "Final Discord reaction-user lists do not preserve click timestamps, so shared reaction membership does not establish reaction order.",
    "The Gilli lane is easy-banter texture only; it does not establish special closeness, romance, family, or rank.",
  ],
};

if (shadowIndex >= 0) {
  const shadow = allCharacters[shadowIndex];
  allCharacters[shadowIndex] = {
    ...shadow,
    ...shadowCharacter,
    aliases: [...new Set([...(shadow.aliases ?? []), ...(shadowCharacter.aliases ?? [])])],
    tags: [...new Set([...(shadow.tags ?? []), ...(shadowCharacter.tags ?? [])])],
    relationships: shadowCharacter.relationships,
    quotes: [...new Set([...(shadow.quotes ?? []), ...(shadowCharacter.quotes ?? [])])],
    claims: [...((shadow as Character & { claims?: string[] }).claims ?? []), ...(shadowCharacter as Character & { claims?: string[] }).claims ?? []],
    antiFanon: [...((shadow as Character & { antiFanon?: string[] }).antiFanon ?? []), ...(shadowCharacter as Character & { antiFanon?: string[] }).antiFanon ?? []],
  } as Character;
} else {
  allCharacters.push(shadowCharacter);
}

characterById.set(shadowId, allCharacters.find((character) => character.id === shadowId)!);
