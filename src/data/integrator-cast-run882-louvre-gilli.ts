import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const gilliIndex = allCharacters.findIndex((character) => character.id === "gilli");
if (gilliIndex < 0) {
  throw new Error("Run 882 expected the canonical Gilli owner; refusing to create a duplicate.");
}

const gilli = allCharacters[gilliIndex] as ExtendedCharacter;

allCharacters[gilliIndex] = {
  ...gilli,
  tags: unique([
    ...(gilli.tags ?? []),
    "Louvre",
    "Practical builder",
    "Collaborative maker",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(gilli.quotes ?? []),
    "So I created an official art room underneath",
    "is because of your help lol would have been lost",
    "Server banner is next",
  ]),
  claims: unique([
    ...(gilli.claims ?? []),
    "Across three 2020 Louvre scenes, Gilli's practical instinct is to keep the activity usable. When an art room was being flooded with disturbing images, she said she created an official art room underneath rather than describing a grand cleanup victory. When Ten asked what belonged there, she gave the broad invitation — bring your own work or another artist's work, as long as credit stays attached.",
    "The October 2020 server-icon/banner workshop sharpens the contradiction: Gilli can own a visible design task without performing self-sufficiency. Cookie and Sye give concrete feedback, Gilli applies it, says the result is `because of your help lol would have been lost`, and immediately moves to `Server banner is next`. Competence and an easy admission of needing help coexist instead of cancelling each other out.",
    "The strongest cumulative read is builder behavior as continuation rather than control: if the current container stops serving the activity, make the next usable container; if somebody can help the object work better, use the help and name it plainly.",
  ]),
  antiFanon: unique([
    ...(gilli.antiFanon ?? []),
    "Gilli saying she created an official art room underneath supports the observed practical fix, not exact Discord channel genealogy, ownership of the original Louvre, or a new formal office.",
    "The one Louvre credit instruction is a lived room norm in that exchange, not proof that Gilli authored a universal UL copyright policy.",
    "Server-icon/banner maker activity in this sequence does not turn every nearby media object into MADE BY Gilli; object-level attribution still requires object-level grounding.",
  ]),
} as ExtendedCharacter;

characterById.set("gilli", allCharacters[gilliIndex]);
