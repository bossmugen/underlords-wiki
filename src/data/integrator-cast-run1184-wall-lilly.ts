import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const lillyIndex = allCharacters.findIndex((character) => character.id === "lilly");
if (lillyIndex < 0) throw new Error("Run 1184 expected canonical Lilly owner");

{
  const lilly = allCharacters[lillyIndex] as ExtendedCharacter;
  const relationships = [...(lilly.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Woohyuk",
    note:
      "Lilly repeatedly turns a Wall filing into a social summons. On three surviving dates in late 2020 she pairs her own receipt post with pulling Woohyuk into the room—twice by a follow-up tag and once by mentioning him in the same parent. The recurrence reads as comfortable public-prosecution texture: she does not just drop evidence and leave; she wants the defendant at the table.",
    href: "/characters/woohyuk",
  });

  upsertRelationship(relationships, {
    name: "Ren",
    note:
      "Ren greets Lilly with a full-volume `LILLYYYY`; Lilly later answers `@RΣN I LOVE YOU`. It is a compact example of Lilly's easy warmth inside the same room where she is also filing and prosecuting people for sport.",
    href: "/characters/ren",
  });

  allCharacters[lillyIndex] = {
    ...lilly,
    logline:
      "Staff with the social instincts of a prosecutor who refuses to stay behind the bench: Lilly files receipts, summons people into their own cases, worries when she is missing the live nonsense, and can pivot from public prosecution to `I LOVE YOU` without changing rooms.",
    tags: appendUnique(lilly.tags, [
      "Wall",
      "Receipt-summoner",
      "Participatory prosecutor",
      "Easy warmth",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(lilly.quotes, [
      "stop simping over the girls here",
      "where is this convo why am i missing it",
      "ill join you in jail bb",
      "OOP WRONG PLACE",
    ]),
    claims: appendUnique(lilly.claims, [
      "Across 2020-11-14, 2020-12-01, and 2020-12-31 Lilly repeatedly pairs her own Wall receipt posts with summoning or mentioning Woohyuk. The durable relationship read is recurring comfortable public-prosecution, not a claim about what any uninspected image depicts.",
      "Lilly's Wall behavior is participatory rather than drop-and-run: she asks where a live conversation is because she is missing it, joins the filing burst once she finds it, summons people into receipt scenes, and volunteers to join Shiki in the jail bit.",
      "The same Wall footprint holds both prosecution and conspicuous warmth: Lilly opens by telling Danny to stop simping, giggles through a room welcome, and answers Ren's `LILLYYYY` with `I LOVE YOU`. Teasing people publicly does not require emotional distance for her.",
    ]),
    antiFanon: appendUnique(lilly.antiFanon, [
      "Run 1184 does not infer the visual subject, maker, capturer, or featured people of Lilly's uninspected Wall attachments. POSTED BY Lilly remains distinct from every other attribution lane.",
      "The recurring Lilly/Woohyuk receipt-summon pattern supports familiar public-prosecution texture, not romance, a ranked friendship tier, or proof that Woohyuk appears in every associated image.",
      "Ren/Lilly `I LOVE YOU`, Shiki/Lilly `bb`, and similar affectionate room language remain bounded social warmth rather than literal romance or family evidence.",
    ]),
  } as ExtendedCharacter;

  characterById.set("lilly", allCharacters[lillyIndex]);
}
