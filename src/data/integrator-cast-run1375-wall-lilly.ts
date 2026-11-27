import "./integrator-cast-run1390-intake";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const lillyIndex = allCharacters.findIndex((character) => character.id === "lilly");
if (lillyIndex < 0) throw new Error("Run 1375 expected canonical Lilly owner");

const lilly = allCharacters[lillyIndex] as ExtendedCharacter;
const relationships = [...(lilly.relationships ?? [])];
const woohyukIndex = relationships.findIndex((relationship) => relationship.name === "Woohyuk");
const woohyuk = {
  name: "Woohyuk",
  note:
    "Lilly keeps pulling Woohyuk into public receipt scenes, and the lane is not limited to tagging him under screenshots. When Woohyuk declares `i am pure`, Lilly answers twenty-seven seconds later, `Also that’s the biggest lie you’ve ever told`, and he fires back almost immediately. Across the repeated filings and the purity challenge, their surviving Wall rhythm reads as tease-safe public prosecution: Lilly is comfortable summoning him, contradicting him, and trusting him to understand the bit without a ceremonial setup.",
  href: "/characters/woohyuk",
};
if (woohyukIndex >= 0) relationships[woohyukIndex] = woohyuk;
else relationships.push(woohyuk);

allCharacters[lillyIndex] = {
  ...lilly,
  logline:
    "Staff with the social instincts of a prosecutor who refuses to stay behind the bench: Lilly wants enough context to get into the live nonsense, then becomes one of the people filing it—often with so little caption that the room is expected to keep up on its own.",
  tags: unique([...(lilly.tags ?? []), "Context-seeker", "Caption-light filer", "Woohyuk challenge loop"]),
  relationships,
  quotes: unique([...(lilly.quotes ?? []), "Also that’s the biggest lie you’ve ever told"]),
  claims: unique([
    ...(lilly.claims ?? []),
    "Lilly's best Wall contradiction is social rather than ideological: when she is outside a live receipt exchange she asks where the conversation is because she wants in; once she catches up, she can switch almost immediately into blank or tag-only screenshot filing and trust the room to supply the rest of the context.",
    "The Woohyuk lane now includes both repeated receipt summons and direct conversational challenge. His `i am pure` gets Lilly's immediate `Also that’s the biggest lie you’ve ever told`, adding ordinary tease-safe contradiction to the existing public-prosecution rhythm.",
    "Petty Crimes: asks where the live receipt conversation is, finds it, then starts supplying exhibits herself; can file with almost no caption once she knows everyone else has the premise; and treats `i am pure` as an allegation requiring immediate correction.",
  ]),
  antiFanon: unique([
    ...(lilly.antiFanon ?? []),
    "Woohyuk's `NOOO LUNA` in the December 2 exchange does not identity-bridge Luna to Lilly and does not add Luna as a Lilly alias.",
    "The newly reviewed Lilly attachment sequences establish POSTED BY Lilly and, in the December 31 same-message case, Woohyuk as the explicit conversational target. MADE BY / CAPTURED BY / visual FEATURING remain unresolved without the pixels.",
  ]),
} as ExtendedCharacter;

characterById.set("lilly", allCharacters[lillyIndex]);
