import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

// Daycare: DyingFox's dry literalism does not keep her outside the room's nonsense.
// She can begin by parsing the housekeeping line straight and then enter the bit
// through the most practical question imaginable: `how to balloon`.
const dyingFoxIndex = allCharacters.findIndex((character) => character.id === "dyingfox");
if (dyingFoxIndex < 0) {
  throw new Error("Run 1214 expected canonical DyingFox owner; refusing to create DyingFox II.");
}
{
  const fox = allCharacters[dyingFoxIndex] as ExtendedCharacter;
  allCharacters[dyingFoxIndex] = {
    ...fox,
    logline: appendOnce(
      fox.logline,
      "Her literal streak has a useful failure mode: DyingFox can start by taking the room's setup at face value, then quietly join the nonsense without changing register at all. `how to balloon` is basically participation disguised as troubleshooting.",
      "participation disguised as troubleshooting",
    ),
    tags: appendUnique(fox.tags, ["Literal-to-nonsense pivot", "Dry participation", "Daycare absurdity"]),
    quotes: appendUnique(fox.quotes, ["how to balloon"]),
    claims: appendUnique(fox.claims, [
      "In the February 28, 2021 Daycare bubbles/food-replacement pocket, DyingFox first answers the setup with flat literal parsing (`i can read.` / `this one yes.`), then joins the absurdity by asking `how to balloon`. The scene deepens the existing dry/direct read: she does not need a louder register to participate in a ridiculous room.",
    ]),
    antiFanon: appendUnique(fox.antiFanon, [
      "Kana and Saya in this Daycare pocket remain display-name-level participants here; this scene does not create identity bridges from similar names or surrounding context.",
    ]),
  } as ExtendedCharacter;
  characterById.set("dyingfox", allCharacters[dyingFoxIndex]);
}

// Wall: Bishop gets jokingly promoted to `cafe officer` for knowing the answer and
// immediately dissolves the office himself: he is there to help newer players,
// then points them toward the whole Fame-role knowledge pool.
const bishopIndex = allCharacters.findIndex((character) => character.id === "bishop");
if (bishopIndex < 0) {
  throw new Error("Run 1214 expected canonical Bishop owner; refusing to create Bishop II.");
}
{
  const bishop = allCharacters[bishopIndex] as ExtendedCharacter;
  const relationships = [...(bishop.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Mugen",
    "Mugen can summon Bishop into a practical player question and joke that he is `cafe officer`; Bishop immediately narrows it to `Just for advice for the newer players` and routes the asker toward anyone with the Fame role. He accepts being useful without turning usefulness into a throne.",
    "cafe officer",
    "/characters/mugen",
  );

  allCharacters[bishopIndex] = {
    ...bishop,
    logline: appendOnce(
      bishop.logline,
      "When the room jokingly promotes him for knowing a practical answer, Bishop's reflex is to deflate the title and distribute the expertise: help the newer player, then point them toward the other people who know the system too.",
      "distribute the expertise",
    ),
    tags: appendUnique(bishop.tags, ["Practical player guide", "Title deflation", "Peer routing"]),
    relationships,
    quotes: appendUnique(bishop.quotes, ["Just for advice for the newer players"]),
    claims: appendUnique(bishop.claims, [
      "On December 3, 2021, Mugen jokingly calls Bishop `cafe officer` after he answers a cafe/Fame question. Bishop immediately reframes his role as advice for newer players and tells the asker to consult anyone with the Fame role for strong English-language advice. The lived-role read is practical guidance plus distributed authority, not office-building.",
    ]),
    antiFanon: appendUnique(bishop.antiFanon, [
      "`cafe officer` is joke language in this exchange, not a formal UL title, appointment, governance role, or chronology marker.",
    ]),
  } as ExtendedCharacter;
  characterById.set("bishop", allCharacters[bishopIndex]);
}

// Wall: Cele gets prosecuted, protests, participates anyway, then accidentally
// uploads the wrong image and becomes her own strongest witness.
const celeIndex = allCharacters.findIndex((character) => character.id === "cele");
if (celeIndex < 0) {
  throw new Error("Run 1214 expected canonical Cele owner; refusing to create Cele II.");
}
{
  const cele = allCharacters[celeIndex] as ExtendedCharacter;
  const relationships = [...(cele.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Maclos",
    "Maclos jokes that Cele must have plenty of material for the Shame Wall; Cele protests `Noooo I don't`, keeps participating, then posts an image and realizes `Wait wrong image`. The comfortable part is not that she wins the case. It is that protest, participation and catastrophic self-own can all happen in the same social breath.",
    "catastrophic self-own",
  );

  allCharacters[celeIndex] = {
    ...cele,
    logline: appendOnce(
      cele.logline,
      "Screenshot Court brings out a very specific Cele loop: protest the allegation, stay in the bit anyway, then accidentally hand the room fresh evidence and keysmash through the consequences.",
      "accidentally hand the room fresh evidence",
    ),
    tags: appendUnique(cele.tags, ["Wall", "Protest-then-participate", "Accidental self-own", "Petty Crimes"]),
    relationships,
    quotes: appendUnique(cele.quotes, ["Noooo I don't", "Just do it", "Wait wrong image", "Ahshdjdjdiisksbdvdudk"]),
    claims: appendUnique(cele.claims, [
      "In the December 3, 2021 Wall pocket, Cele protests Maclos's claim that she has material worth filing, continues participating, posts an attachment herself, then realizes `Wait wrong image` and collapses into a keysmash. That is useful social texture for Cele as a willing-but-theatrical defendant and accidental self-filer, not a separate event ledger entry.",
      "The attachment in this reviewed packet is safely attributable as POSTED BY Cele. Its contents, maker, capturer and featured people remain unassigned without inspection/support.",
    ]),
    antiFanon: appendUnique(cele.antiFanon, [
      "Wall teasing and Cele's participation here do not establish romance, sex, literal family, or a formal relationship category with the people joking around her.",
      "Do not convert Cele's uninspected attachment from POSTED BY into MADE BY, CAPTURED BY, or FEATURING claims.",
    ]),
  } as ExtendedCharacter;
  characterById.set("cele", allCharacters[celeIndex]);
}
