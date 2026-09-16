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
  const relationships = [...(fox.relationships ?? [])];
  upsertRelationship(
    relationships,
    "PissedCog",
    "Daycare familiarity is immediate enough that DyingFox can insist `ITS FOX`, say they see each other there a lot, call PissedCog `bitch` inside the joke, and keep talking without any social reset. More revealingly, DyingFox remembers PissedCog's old emote-release clip as a favorite because it made her laugh: recognition is tied to shared artifacts and old bits, not just names on a roster.",
    "old emote-release clip",
  );

  allCharacters[dyingFoxIndex] = {
    ...fox,
    logline: appendOnce(
      fox.logline,
      "Her literal streak has a useful failure mode: DyingFox can start by taking the room's setup at face value, then quietly join the nonsense without changing register at all. `how to balloon` is basically participation disguised as troubleshooting.",
      "participation disguised as troubleshooting",
    ),
    tags: appendUnique(fox.tags, [
      "Literal-to-nonsense pivot",
      "Dry participation",
      "Daycare absurdity",
      "Shared-joke memory",
      "Emote-release callback",
    ]),
    relationships,
    quotes: appendUnique(fox.quotes, [
      "how to balloon",
      "ITS FOX",
      "we see each other in day care a lot",
      "i remember that",
    ]),
    claims: appendUnique(fox.claims, [
      "In the February 28, 2021 Daycare bubbles/food-replacement pocket, DyingFox first answers the setup with flat literal parsing (`i can read.` / `this one yes.`), then joins the absurdity by asking `how to balloon`. The scene deepens the existing dry/direct read: she does not need a louder register to participate in a ridiculous room.",
      "On May 1, 2021, DyingFox explicitly says she and PissedCog see each other in Daycare a lot, then remembers the old Mugen emote-release video and says PissedCog's clip was her favorite because it made her laugh. The useful relationship texture is repeated low-stakes proximity plus memory for the artifacts and jokes attached to a person.",
    ]),
    antiFanon: appendUnique(fox.antiFanon, [
      "Kana and Saya in this Daycare pocket remain display-name-level participants here; this scene does not create identity bridges from similar names or surrounding context.",
      "Frequent Daycare overlap with PissedCog supports easy familiarity and shared-memory texture, not a closeness rank, formal relationship label, or origin claim.",
    ]),
  } as ExtendedCharacter;
  characterById.set("dyingfox", allCharacters[dyingFoxIndex]);
}

// Wall: Bishop gets jokingly promoted to `cafe officer` for knowing the answer and
// immediately dissolves the office himself: he is there to help newer players,
// then points them toward the whole Fame-role knowledge pool. Earlier Wall pockets
// add the other side of him: once he is caught, he can turn the charge into his own bit.
const bishopIndex = allCharacters.findIndex((character) => character.id === "bishopthaguru");
if (bishopIndex < 0) {
  throw new Error("Run 1214 expected canonical BishopThaGuru owner; refusing to create Bishop II.");
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
      appendOnce(
        bishop.logline,
        "When the room jokingly promotes him for knowing a practical answer, Bishop's reflex is to deflate the title and distribute the expertise: help the newer player, then point them toward the other people who know the system too.",
        "distribute the expertise",
      ),
      "The same anti-status instinct makes him a cheerful defendant: once Wall catches him, `fodder` stops being an insult and becomes a name he is willing to wear, and even a supposed record becomes something he will help publish himself.",
      "cheerful defendant",
    ),
    tags: appendUnique(bishop.tags, [
      "Practical player guide",
      "Title deflation",
      "Peer routing",
      "Self-filing",
      "Fodder self-mythology",
    ]),
    relationships,
    quotes: appendUnique(bishop.quotes, [
      "Just for advice for the newer players",
      "Damn im fodder already",
      "I might as well change my name to Fodder",
      "Come on gimme my records",
    ]),
    claims: appendUnique(bishop.claims, [
      "On December 3, 2021, Mugen jokingly calls Bishop `cafe officer` after he answers a cafe/Fame question. Bishop immediately reframes his role as advice for newer players and tells the asker to consult anyone with the Fame role for strong English-language advice. The lived-role read is practical guidance plus distributed authority, not office-building.",
      "Across May 4-6, 2021 Wall pockets, Bishop answers being caught with `Damn im fodder already`, later says he might as well rename himself `Fodder`, and participates in publishing the material. In a separate record joke he asks `Come on gimme my records` and helps surface his own proof. Being prosecuted becomes material for self-mythology instead of a reason to leave the bit.",
    ]),
    antiFanon: appendUnique(bishop.antiFanon, [
      "`cafe officer` is joke language in this exchange, not a formal UL title, appointment, governance role, or chronology marker.",
      "Bishop's `record` language and near-instant self-publication do not resolve the archive-wide fastest-shame / q22 question. Current miner handoffs conflict on that absolute; keep the superlative unresolved while retaining Bishop's non-comparative self-filing behavior.",
      "Bishop-posted links and attachments in these Wall pockets are POSTED BY Bishop only unless maker, capture, or featured-subject attribution is independently established.",
    ]),
  } as ExtendedCharacter;
  characterById.set("bishopthaguru", allCharacters[bishopIndex]);
}

// Wall: Cele gets prosecuted, protests, participates anyway, then accidentally
// uploads the wrong image and becomes her own strongest witness. The older Fame
// callback shows that this is not only event behavior: she remembers the room's
// retired receipt grammar and can reactivate it socially.
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
  upsertRelationship(
    relationships,
    "Thai",
    "Cele's `thai always expose me` / `no where is safe from her` complaint lands as recurring public-prosecution familiarity rather than a one-off filing. The repetition is the relationship texture: Cele already knows what Thai is going to do with material and performs the doomed defendant accordingly.",
    "thai always expose me",
  );
  upsertRelationship(
    relationships,
    "Mugen",
    "When Mugen remembers the older Fame format and says it stopped after people stopped sending material, Cele answers `i remember`; when asked why she never said anything, she gives a pure `nahhhh`. She and Mugen can invoke the old receipt machinery with almost no setup, which makes the format itself part of their shared room memory.",
    "older Fame format",
    "/characters/mugen",
  );

  allCharacters[celeIndex] = {
    ...cele,
    logline: appendOnce(
      appendOnce(
        cele.logline,
        "Screenshot Court brings out a very specific Cele loop: protest the allegation, stay in the bit anyway, then accidentally hand the room fresh evidence and keysmash through the consequences.",
        "accidentally hand the room fresh evidence",
      ),
      "She also remembers the machinery after it retires: old Fame receipts survive as instant callbacks, especially when Thai's habit of exposing her gives the joke a familiar repeat defendant.",
      "old Fame receipts survive",
    ),
    tags: appendUnique(cele.tags, [
      "Wall",
      "Protest-then-participate",
      "Accidental self-own",
      "Petty Crimes",
      "Fame callback memory",
      "Repeat defendant",
    ]),
    relationships,
    quotes: appendUnique(cele.quotes, [
      "Noooo I don't",
      "Just do it",
      "Wait wrong image",
      "Ahshdjdjdiisksbdvdudk",
      "damn exposed",
      "i remember",
      "thai always expose me",
      "no where is safe from her",
    ]),
    claims: appendUnique(cele.claims, [
      "In the December 3, 2021 Wall pocket, Cele protests Maclos's claim that she has material worth filing, continues participating, posts an attachment herself, then realizes `Wait wrong image` and collapses into a keysmash. That is useful social texture for Cele as a willing-but-theatrical defendant and accidental self-filer, not a separate event ledger entry.",
      "The attachment in this reviewed packet is safely attributable as POSTED BY Cele. Its contents, maker, capturer and featured people remain unassigned without inspection/support.",
      "On January 29, 2021, Cele recognizes Mugen's self-file with `damn exposed`. On February 5, when Mugen recalls the older Fame system and says it stopped after people stopped sending material, Cele says `i remember`, then jokes that Thai always exposes her and that nowhere is safe. The retired receipt format is functioning as shared social memory, not merely a dead channel mechanic.",
    ]),
    antiFanon: appendUnique(cele.antiFanon, [
      "Wall teasing and Cele's participation here do not establish romance, sex, literal family, or a formal relationship category with the people joking around her.",
      "Do not convert Cele's uninspected attachment from POSTED BY into MADE BY, CAPTURED BY, or FEATURING claims.",
      "Thai repeatedly exposing Cele supports recurring teasing/prosecution familiarity, not a romance claim, family relationship, or formal status hierarchy.",
    ]),
  } as ExtendedCharacter;
  characterById.set("cele", allCharacters[celeIndex]);
}
