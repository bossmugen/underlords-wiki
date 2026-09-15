import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const rummyIndex = allCharacters.findIndex((character) => character.id === "rummy");
if (rummyIndex < 0) {
  throw new Error("Run 881 expected the canonical Rummy owner; refusing to create a duplicate.");
}

const rummy = allCharacters[rummyIndex] as ExtendedCharacter;

allCharacters[rummyIndex] = {
  ...rummy,
  tags: unique([...(rummy.tags ?? []), "Wall defendant", "Context lawyer", "Light mode", "Petty Crimes"]),
  quotes: unique([
    ...(rummy.quotes ?? []),
    "**l i g h t**",
    "PFFF BEJDNWBSSODHW :Fat_Wheeze: :Fat_Wheeze: :Fat_Wheeze:",
    "bro u need hte context",
    "i did not say that randomly",
    "THAT NOT THE FULL CONVO",
    "IT A PANCAKEEEE",
  ]),
  claims: unique([
    ...(rummy.claims ?? []),
    "Across 2022–2024 Wall scenes, Rummy keeps landing in the defendant's chair for context-risk, a mock first-cuss milestone, repeat light-mode offenses, punctuation habits and later `rizz` material — and keeps answering with laughter, wheeze reactions, keyboard smash or more participation. The durable contradiction is public target ↔ active participant: the room can prosecute Rummy because Rummy visibly keeps playing back.",
    "The defendant pattern has a procedural streak of its own. In December 2023 Rummy answers exposure with `bro u need hte context` / `i did not say that randomly`; in August 2024 the same reflex is `THAT NOT THE FULL CONVO`. She contests the framing without leaving the joke, turning context-lawyering into part of the entertainment rather than an exit from it.",
    "Two tiny Petty Crimes survive the larger Wall pattern especially well: Rummy uses light mode more than once even after Rich tells her to put it back in dark mode, and Torr's wonderfully specific verdict is that `the only thing rummy guilty of is the overuse of the semi colon`.",
    "A 2022 screenshot thread gives the pancake version of the same public-defense instinct: Rummy insists `IT A PANCAKEEEE` while the room escalates through burnt, blackened and charcoal commentary. The funny part is Rummy defending the pictured object; the archive does not establish that she cooked it.",
    "A separate `rummy U STINK` / `stinky rummy?` / `stink off` chain is a tiny room reputation gag, not literal hygiene commentary.",
  ]),
  antiFanon: unique([
    ...(rummy.antiFanon ?? []),
    "Repeated Wall prosecution supports a room-level teasing reputation, not equal intimacy with every person who calls Rummy out and not a formal Wall role.",
    "`Our little rummy` / `They grow up so fast` is joke-family language only. `Rizz` / pickup-line commentary stays joke-language unless independent relationship evidence supports more.",
    "Uninspected screenshot pixels remain uninspected; the dossier preserves what participants said and how Rummy answered without reconstructing unseen media.",
    "The pancake receipt does not establish that Rummy made, cooked, captured, or posted the pictured pancake; only her defense of the pictured object and the room's response are used publicly.",
    "The stinky-Rummy chain is a recurring joke and must not be converted into a hygiene claim.",
  ]),
} as ExtendedCharacter;
characterById.set("rummy", allCharacters[rummyIndex]);
