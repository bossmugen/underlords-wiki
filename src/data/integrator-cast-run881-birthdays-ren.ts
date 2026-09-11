import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const renIndex = allCharacters.findIndex((character) => character.id === "ren");
if (renIndex < 0) {
  throw new Error("Run 881 expected the canonical Ren / RV owner; refusing to create a duplicate.");
}

const ren = allCharacters[renIndex] as ExtendedCharacter;

allCharacters[renIndex] = {
  ...ren,
  tags: unique([...(ren.tags ?? []), "Photoshoot", "Visual examples"]),
  quotes: unique([...(ren.quotes ?? []), "Example Photos"]),
  claims: unique([
    ...(ren.claims ?? []),
    "Across January, April, and July 2021 Photoshoot rounds, Ren repeatedly posts an `Example Photos` heading and then a small image bundle before the room moves into its official-submission phase. It is a very Ren kind of logistics: do not leave a theme floating as an abstraction if you can put the assignment in front of people's eyeballs first.",
    "January also shows Anthos posting an example-photo packet and then an `Official Submissions for photos` divider. The recurring room choreography supports a shared practical event culture — examples make the prompt visible, official submissions make the next move obvious — without turning that sequence into a formal org chart.",
  ]),
  antiFanon: unique([
    ...(ren.antiFanon ?? []),
    "The Photoshoot image bundles are POSTED BY Ren / RV in these receipts. Their creators, photographers, editors, and depicted subjects are not assigned without separate provenance.",
    "Repeated `Example Photos` packets support a lived organizer / visual-guidance behavior, not a formal Photoshoot title, judging appointment, exclusive ownership of the workflow, or proof that Ren invented the contest format.",
  ]),
} as ExtendedCharacter;
characterById.set("ren", allCharacters[renIndex]);
