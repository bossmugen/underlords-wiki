import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const zyrcantIndex = allCharacters.findIndex(
  (character) => character.id === "zyrcant" || character.name === "Zyrcant",
);

if (zyrcantIndex < 0) {
  throw new Error("Run 967 expected canonical Zyrcant owner; refusing to create Akariel as a duplicate person");
}

const zyrcant = allCharacters[zyrcantIndex] as ExtendedCharacter;
const relationships = [...(zyrcant.relationships ?? [])];

const upsertRelationship = (name: string, note: string, href?: string) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, href, note } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

upsertRelationship(
  "RV",
  "Ren is part of Zyrcant's Wall-initiation grammar. In January 2021 Zyrcant asks `put me on the wall of shame 😩`; Ren answers `You got to e a r n your place here`, and Zyrcant accepts the premise with `fair lmaooo`. It reads as playful Wall gatekeeping inside a familiar social ritual, not literal admissions policy or a closeness rank.",
  "/characters/ren",
);

upsertRelationship(
  "Tofu",
  "When Zyrcant/Akariel posts an uninspected image to Wall on July 3, 2021, Tofu true-replies `Starting bid: 5¢`; Zyrcant answers with gasp/worry and three CatCry. The joke lands because Zyrcant had already volunteered for Wall months earlier. Tofu's reply targets the post, not a proven person in the image.",
  "/characters/tofu",
);

allCharacters[zyrcantIndex] = {
  ...zyrcant,
  logline:
    "Former Amaurot deputy and UL VIP who treats public embarrassment like a game she both volunteers for and loudly regrets: she asks into Wall, accepts `earn your place`, three-CatCry panics when Tofu prices her own post at five cents, then keeps self-supplying fresh material anyway.",
  tags: appendUnique(zyrcant.tags, [
    "Voluntary Wall aspirant",
    "Self-supplied embarrassment",
    "Theatrical defendant",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(zyrcant.quotes, [
    "The word of the day is ass",
    "i wrote playing hentai at one point",
  ]),
  claims: appendUnique(zyrcant.claims, [
    "Zyrcant's Wall relationship is self-propelled rather than purely defensive. She asks to be put on Wall in January 2021 and accepts Ren's joke that she has to earn the spot. On July 3, the same stable account posts an image; Tofu true-replies `Starting bid: 5¢`, and Zyrcant answers with gasp/worry plus three CatCry. Five days later she supplies another embarrassing self-report, `i wrote playing hentai at one point`, and Eos immediately laughs/points. The useful contradiction is voluntary Wall aspirant and self-supplier versus theatrical defendant once the room actually uses the material.",
  ]),
  antiFanon: appendUnique(zyrcant.antiFanon, [
    "The July 3 image is POSTED BY the Akariel/Zyrcant stable account only. Tofu's true-reply proves the reply target, not who appears in the image; MADE BY / CAPTURED BY / FEATURING remain unresolved.",
    "The Wall packet does not itself establish the Akariel → Zyrcant identity bridge. This dossier routes the receipts through the already-canonical stable-account bridge established elsewhere; do not use similar names alone.",
    "`i wrote playing hentai at one point` is preserved as Zyrcant's own self-report. The missing application/action context is unresolved and should not be reconstructed.",
    "Ren's `earn your place` is Wall joke grammar, not governance, membership procedure, or a formal shame-ranking system.",
  ]),
} as ExtendedCharacter;

characterById.set("zyrcant", allCharacters[zyrcantIndex]);
