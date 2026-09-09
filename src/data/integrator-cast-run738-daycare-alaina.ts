import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const alainaIndex = allCharacters.findIndex((character) =>
  character.name.toLowerCase() === "alaina" ||
  (character.aliases ?? []).some((alias) => alias.toLowerCase() === "alaina" || alias.toLowerCase() === "alaina_iris_k"),
);

if (alainaIndex < 0) {
  throw new Error("Run 738 expected the existing canonical Alaina Cast owner; refusing to create a duplicate.");
}

const alaina = allCharacters[alainaIndex] as ExtendedCharacter;

allCharacters[alainaIndex] = {
  ...alaina,
  logline:
    "Alaina can look almost aggressively concise when the Wall hands her nonsense to sanity-check, but that is a room behavior, not the whole woman. Daycare is where she actually sticks around: a sustained year-long footprint there sits beside only a handful of authored Wall and Club-Only posts, making her much easier to read as selective about where she spends herself than simply quiet.",
  tags: unique([
    ...(alaina.tags ?? []),
    "Daycare",
    "Room-selective presence",
    "Compact support-room voice",
  ]),
  quotes: unique([
    ...(alaina.quotes ?? []),
    "Happy New Year:8070_ZeroYay:",
    "Bleh :Cute_catskrunky:",
  ]),
  claims: unique([
    ...(alaina.claims ?? []),
    "Alaina's Daycare ledger contains 670 authored messages from 2021-12-31 through 2022-12-29, while exact stable-ID sweeps found only three authored Club-Only messages and seven authored Wall messages in the support sources checked. Her compact Wall voice is therefore venue-specific evidence rather than a safe whole-person `quiet` label.",
    "Her three exact Club-Only authored posts in the accessible sweep are a New Year greeting, an attachment-only `unknown.gif`, and `Bleh :Cute_catskrunky:`; the small support-room footprint reinforces the contrast without establishing how expansive her Daycare prose was.",
  ]),
  antiFanon: unique([
    ...(alaina.antiFanon ?? []),
    "Do not flatten Alaina into a generally quiet or barely active person from her terse Wall / Club-Only footprint; Daycare preserves substantially more sustained participation.",
    "The participation contrast does not establish why Daycare fit her better, who her closest Daycare relationships were, or whether her Daycare messages were longer or chattier; those layers still need direct Daycare dialogue.",
    "Alaina's 2022-01-05 `unknown.gif` is POSTED BY Alaina only. Its pixels were not inspected, and chronological proximity does not turn it into a reply to iku+'s preceding bond question.",
  ]),
} as ExtendedCharacter;

characterById.set(allCharacters[alainaIndex].id, allCharacters[alainaIndex]);
