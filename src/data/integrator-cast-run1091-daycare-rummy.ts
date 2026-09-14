import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const rummyIndex = allCharacters.findIndex((character) => character.id === "rummy");
if (rummyIndex < 0) {
  throw new Error("Run 1091 expected the canonical Rummy owner; refusing to create a duplicate.");
}

const rummy = allCharacters[rummyIndex] as ExtendedCharacter;

const next: ExtendedCharacter = {
  ...rummy,
  tags: unique([...(rummy.tags ?? []), "Context lawyer", "Petty Crimes"]),
  quotes: unique([
    ...(rummy.quotes ?? []),
    "In context, this was not an insult 😂",
    "Out of context however, you look real bad",
  ]),
  claims: unique([
    ...(rummy.claims ?? []),
    "On 2023-04-10 Rummy gives the cleanest version of her context-lawyer instinct: `In context, this was not an insult 😂`, followed immediately by `Out of context however, you look real bad`. The useful character beat is not denial but social interpretation — she can defend what the room actually meant while also admitting that the same line, detached from its setup, has already lost the optics case. It sharpens the older public pattern of Rummy demanding context after Wall filings instead of creating a separate incident-shaped personality trait.",
  ]),
  antiFanon: unique([
    ...(rummy.antiFanon ?? []),
    "The 2023-04-10 context joke supports Rummy's habit of distinguishing in-room intent from screenshot optics; it is not blanket absolution for every suspicious-looking line, and it does not license reconstruction of any uninspected media or missing setup beyond what the surviving text states.",
  ]),
};

allCharacters[rummyIndex] = next;
characterById.set("rummy", next);
