import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const hanIndex = allCharacters.findIndex((character) => character.id === "han");

if (hanIndex < 0) {
  throw new Error("Run 846 expected the canonical Han/Nai owner; refusing to create a duplicate.");
}

const han = allCharacters[hanIndex] as ExtendedCharacter;
const relationships = [...(han.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Mugen",
  note:
    "Han can ask `Is it fame or shame lol` inside a Wall pocket and Mugen can answer the exact question with `both uwu`. It is easy shared framing: neither needs to stop the joke to negotiate what category the embarrassment belongs to. Keep it as comfortable collaborative banter, not a closeness ranking or role claim.",
  href: "/characters/mugen",
});

allCharacters[hanIndex] = {
  ...han,
  aliases: unique([...(han.aliases ?? []), "Nai", "nai6965", "."]),
  logline:
    "UL Media Director and filmmaker who is perfectly willing to turn Wall exposure into publicity — `Im becoming famous ✨`, workday survival as a Fame moment, shame and fame collapsed into the same category — right up until he notices his name is appearing often enough that the room may need to become `Han's wall of shame fame`. Self-branding and self-consciousness get to coexist.",
  tags: unique([
    ...(han.tags ?? []),
    "Media Director",
    "Filmmaker",
    "Wall",
    "Fame",
    "Self-reframing",
    "Meta-commentary",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(han.quotes ?? []),
    "Im becoming famous ✨",
    "Is it fame or shame lol",
    "but im concerned about my name popping up in this channel pretty often",
    "Of course, its a shame fame wall",
    "Soon u guys will need to rename this channel to Han's wall of shame fame",
  ]),
  claims: unique([
    ...(han.claims ?? []),
    "Across August–October 2021 Han repeatedly reframes Wall exposure as fame or a mixed `shame fame` category, while also directly saying he is concerned about how often his name is appearing there; the useful person read is self-branding plus recurrence-awareness, not simple shamelessness or simple embarrassment.",
    "On 2021-08-24 Han asks `Is it fame or shame lol`; Mugen true-replies `both uwu`, a bounded shared-framing beat that does not establish hierarchy or exceptional closeness.",
    "By 2021-10-19 Han jokes that the room will soon need to become `Han's wall of shame fame`, then follows it with a walk-away emote; this extends the same self-aware Wall reputation rather than creating a separate episode.",
  ]),
  antiFanon: unique([
    ...(han.antiFanon ?? []),
    "Han/Nai/nai6965/`.` remain one canonical person and use he/him in current public canon. Source-local naming or miner prose does not create a second identity or override that lock.",
    "Han was never an Underlords Officer; current/export role arrays do not establish appointment chronology or explain these Wall jokes.",
    "Mugen's `both uwu` reply supports collaborative joke-framing only; it does not establish romance, family, rank, or a friendship hierarchy.",
    "The adjacent Wall screenshots remain POSTED BY their actual filers unless maker, capturer, or subjects are independently established.",
  ]),
} as ExtendedCharacter;

characterById.set("han", allCharacters[hanIndex]);
