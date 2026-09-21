import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = { name: string; note: string; href?: string };

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mergeRelationship = (relationships: Relationship[], incoming: Relationship): Relationship[] => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index < 0) return [...relationships, incoming];
  const current = relationships[index];
  const next = [...relationships];
  next[index] = {
    ...current,
    note: current.note.includes(incoming.note) ? current.note : `${current.note} ${incoming.note}`,
    href: current.href ?? incoming.href,
  };
  return next;
};

export function applyRun1540WallCast(characters: Character[]): void {
  const index = characters.findIndex(
    (character) =>
      character.id === "hamittey" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes("400116637266870273"),
  );
  if (index < 0) return;

  const current = characters[index] as ArchiveCharacter;
  let relationships = [...(current.relationships ?? [])] as Relationship[];
  relationships = mergeRelationship(relationships, {
    name: "Baby Lyssa",
    href: "/characters/baby-lyssa",
    note:
      "Hami's old-receipt instinct is not abstract: in August 2021 she resurfaces a screenshot with `forgot i had this :SpidySip:`; Lyssa TRUE-REPLIES the exact post with `you know what` and then `i thought you was my friend`, and Hami answers the mock betrayal with `Sorry not Sorry` plus a heart before welcoming her back from vacation. The ambush lands as affectionate mischief, not rupture.",
  });
  relationships = mergeRelationship(relationships, {
    name: "Noether",
    note:
      "Noether can prosecute Hami over imaginary dessert-hoarding and Hami will defend herself all the way down: `i dont have no desserts`, `listen women i dont have any desserts`, then `if i had i would but i dont`. The useful lane is mock food prosecution versus stubborn comic denial; the accusation is the joke, not a confirmed dessert habit.",
  });

  characters[index] = {
    ...current,
    logline:
      "Hami is dry enough to look like the adult in the room right up until you notice she is carrying old screenshots. She can summarize somebody else's recurring chaos in one line, ambush a friend with a forgotten receipt, insist context is optional when the joke is good enough, and deploy a cartoon exit door when nonsense swings back toward her.",
    stableDiscordIds: unique([...(current.stableDiscordIds ?? []), "400116637266870273"]),
    tags: unique([...(current.tags ?? []), "Old-receipt keeper", "Context minimalist", "Peepo exit", "Noether", "Petty Crimes"]),
    relationships,
    quotes: unique([
      ...(current.quotes ?? []),
      "forgot i had this :SpidySip:",
      "Sorry not Sorry:Raja_dino_heart:",
      "welcome back from vacation :SpidySip:",
      "i dont have no desserts :Cursed:",
      "listen women i dont have any desserts :EmoJi_tired:",
      "if i had i would but i dont:Cute_Maddoggo:",
      "No context required, it's hilarious as it is lol:mochi_laugh:",
    ]),
    claims: unique([
      ...(current.claims ?? []),
      "Hami's August 2021 receipt ambush turns an old screenshot into person-level behavior: she had kept it long enough to forget it, resurfaced it, and stayed in the joke after the target objected. Old-receipt keeper/resurfacer is therefore stronger than a one-off filing label.",
      "The exact peepo-exit GIF recurs on at least three separated dates, making the cartoon doorway a genuine comic-evasive habit rather than a single reaction.",
      "Her `No context required, it's hilarious as it is lol` line sharpens a broader Wall-humor tendency: Hami can prefer the joke's immediate social hit over exhaustive explanation.",
      "The cumulative contradiction is dry/mock-disapproving observer versus active chaos participant. Hami notices everybody else's patterns, preserves receipts, prosecutes with them, and then dramatically exits when the same ecosystem points back at her.",
    ]),
    antiFanon: unique([
      ...(current.antiFanon ?? []),
      "Baby Lyssa's TRUE-REPLY establishes the social target of Hami's August 2021 filing, not who is visually depicted in the screenshot. Hami is POSTED BY only; MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
      "Noether's dessert-hoarder accusation is explicitly denied in the scene and must not become a confirmed food preference, possession fact, or behavior claim.",
      "The repeated peepo-exit GIF is comic-evasive texture; identical media across dates does not imply identical conversational parentage.",
      "Export-time Staff arrays are not appointment chronology.",
    ]),
  } as ArchiveCharacter;
}
