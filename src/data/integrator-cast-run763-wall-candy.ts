import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const candyIndex = allCharacters.findIndex((character) => character.id === "candy");
if (candyIndex < 0) {
  throw new Error("Run 763 expected the canonical Candy owner; refusing to create a duplicate.");
}

const candy = allCharacters[candyIndex] as ExtendedCharacter;
const relationships = [...(candy.relationships ?? [])];

if (!relationships.some((relationship) => relationship.name === "Vanness")) {
  relationships.push({
    name: "Vanness",
    note:
      "When Vanness files himself for losing five orange dracs, Candy true-replies `Wad00` and follows with `:CatCry:` four seconds later: surprise and sympathy compressed into practically no prose.",
    href: "/characters/vanness",
  });
}

if (!relationships.some((relationship) => relationship.name === "Yochan")) {
  relationships.push({
    name: "Yochan",
    note:
      "Yochan tags Candy with `oink oink`; Candy answers through an `Opossum_AAAHH` reaction instead of spending a sentence on the matter. A tiny direct-tease lane, not a closeness ranking.",
  });
}

allCharacters[candyIndex] = {
  ...candy,
  logline:
    "Candy can communicate in almost comically small packets—`Wad00`, a reaction, one `Moo`, two Cat_Sporkles—and still give the room enough of a cue that everybody else knows how to continue. Low word count, extremely high social legibility.",
  tags: unique([
    ...(candy.tags ?? []),
    "Wall",
    "Reaction-native",
    "Micro-bits",
    "Wad00",
    "Moo chorus",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(candy.quotes ?? []),
    "Wad00",
    "Wad0.0",
    "Moo",
    ":Cat_Sporkle: :Cat_Sporkle:",
  ]),
  claims: unique([
    ...(candy.claims ?? []),
    "Candy's surviving 2021 Wall voice is unusually compact: repeated `Wad00` / `Wad0.0`, custom emotes, reactions, and one-word noises do much of the conversational work.",
    "On September 1, 2021, Candy posts `Moo` and then two Cat_Sporkle emotes. Sou, Rummy, Ren, Gilli, SaraBunny, and Cookie continue the same moo/Cat_Sporkle grammar over the next roughly two hours. The messages are Defaults rather than a structured reply tree; the useful social read is a tiny cue that catches and becomes a room bit.",
    "Candy true-replies `Wad00` to Vanness publicly shaming himself over five lost orange dracs, then adds `:CatCry:` 4.700 seconds later.",
    "When Yochan tags Candy with `oink oink`, Candy's surviving answer is an `Opossum_AAAHH` reaction rather than prose.",
  ]),
  antiFanon: unique([
    ...(candy.antiFanon ?? []),
    "Candy is the later Candy / `— Luna` account and remains distinct from HyaLuna.",
    "The September 1 moo/Cat_Sporkle spread is tight chronological/textual mimicry among Default messages; it is not rewritten as a machine-linked reply tree or a closeness hierarchy.",
    "Earlier moo material survives elsewhere, so Candy is not credited as the inventor or universal origin of the moo bit.",
    "No native media pixels were inspected for this packet; emoji names, message text, and reaction metadata are transcript-level material only.",
  ]),
} as ExtendedCharacter;

characterById.set("candy", allCharacters[candyIndex]);
