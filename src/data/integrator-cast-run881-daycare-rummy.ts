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
  tags: unique([...(rummy.tags ?? []), "Wall defendant", "Light mode", "Petty Crimes"]),
  quotes: unique([
    ...(rummy.quotes ?? []),
    "**l i g h t**",
    "PFFF BEJDNWBSSODHW :Fat_Wheeze: :Fat_Wheeze: :Fat_Wheeze:",
  ]),
  claims: unique([
    ...(rummy.claims ?? []),
    "Across 2022–2024 Wall scenes, Rummy keeps landing in the defendant's chair for context-risk, a mock first-cuss milestone, repeat light-mode offenses, punctuation habits and later `rizz` material — and keeps answering with laughter, wheeze reactions, keyboard smash or more participation. The durable contradiction is public target ↔ active participant: the room can prosecute Rummy because Rummy visibly keeps playing back.",
    "Two tiny Petty Crimes survive the larger Wall pattern especially well: Rummy uses light mode more than once even after Rich tells her to put it back in dark mode, and Torr's wonderfully specific verdict is that `the only thing rummy guilty of is the overuse of the semi colon`.",
  ]),
  antiFanon: unique([
    ...(rummy.antiFanon ?? []),
    "Repeated Wall prosecution supports a room-level teasing reputation, not equal intimacy with every person who calls Rummy out and not a formal Wall role.",
    "`Our little rummy` / `They grow up so fast` is joke-family language only. `Rizz` / pickup-line commentary stays joke-language unless independent relationship evidence supports more.",
    "Uninspected screenshot pixels remain uninspected; the dossier preserves what participants said and how Rummy answered without reconstructing unseen media.",
  ]),
} as ExtendedCharacter;
characterById.set("rummy", allCharacters[rummyIndex]);
