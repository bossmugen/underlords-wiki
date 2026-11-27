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

const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex < 0) {
  throw new Error("Run 777 expected the canonical Woosung owner; refusing to manufacture a second WOO.");
}

const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
const relationships = [...(woosung.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Ren",
  note:
    "When WOO signs off after a February 2023 catch-up with `Bye guys so nice catching up with you`, Ren reacts with `:run:`. It is a tiny send-off joke rather than a closeness ranking, but it fits WOO's larger pattern neatly: she can say outright that she misses everybody and still leave the room on a stupid little beat instead of turning the goodbye solemn.",
  href: "/characters/ren",
});

const quotes = appendUnique(woosung.quotes, [
  "I miss y’all so much",
  "Bye guys so nice catching up with you",
]);

const claims = appendUnique(woosung.claims, [
  "On 2023-02-09 WOO / Woosung says `I miss y’all so much`, then later signs off with `Bye guys so nice catching up with you`; Ren reacts `:run:` to the goodbye. The scene supports open attachment to the group and a light reciprocal send-off without establishing a unique closeness rank or a formal return event.",
]);

const antiFanon = appendUnique(woosung.antiFanon, [
  "The Daycare display `WOO / Royal Guard` belongs to stable account 454708201615523871, already resolved project-wide as Woosung. `Royal Guard` is a visible nickname/state here, not evidence of a formal UL appointment or role chronology.",
  "Ren's `:run:` reaction to WOO's goodbye is a tiny reciprocal joke. Do not turn one reaction into romance, exclusivity, or a closeness leaderboard.",
]);

allCharacters[woosungIndex] = {
  ...woosung,
  logline:
    "Former ScarletMoon leader, VIP and permanent Platelet who can be tiny in self-description and enormous in recognition, openly admit she misses the room, prosecute Nobu from two words, treat `im gabriel` like breaking news, and then consider talking less because her own mouth keeps manufacturing Wall material.",
  tags: appendUnique(woosung.tags, ["Catch-up", "Return texture"]),
  relationships,
  quotes,
  claims,
  antiFanon,
} as ExtendedCharacter;

characterById.set("woosung", allCharacters[woosungIndex]);
