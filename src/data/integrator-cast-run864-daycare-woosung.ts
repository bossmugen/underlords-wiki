import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex < 0) {
  throw new Error("Run 864 expected canonical Woosung owner; refusing to create a duplicate WOO card");
}

const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
const relationships = [...(woosung.relationships ?? [])];
const snowIndex = relationships.findIndex((relationship) => relationship.name === "Snow");
const snowRelationship = {
  name: "Snow",
  note:
    "An April 2020 Lobby pocket shows Woosung turning Snow's mock exasperation into fuel: `Are u bored yet` becomes `How about now`, `Now?`, `What about now`, and eventually `How abouttt nowww` while Snow answers with stop/over-it GIFs. It is a scene-level pestering rhythm, not a global relationship rank.",
  href: "/characters/snow",
};
if (snowIndex >= 0) relationships[snowIndex] = snowRelationship;
else relationships.push(snowRelationship);

allCharacters[woosungIndex] = {
  ...woosung,
  tags: appendUnique(woosung.tags, ["Persistent bits", "Self-aware Wall victim", "K-pop game interest", "Petty Crimes"]),
  relationships,
  quotes: appendUnique(woosung.quotes, [
    "my hair is a mess",
    "I wanted a K-pop game before that",
    "Are u bored yet",
    "How abouttt nowww",
  ]),
  claims: appendUnique(woosung.claims, [
    "In an April 8, 2020 Lobby exchange, Woosung keeps one tiny boredom joke alive through repeated variants of `How about now` while Snow answers with stop/over-it GIFs. The useful trait is the persistence: mock exasperation does not end the bit; it becomes material for the next beat.",
    "The same Lobby pocket gives ordinary-life/taste crumbs without ceremony: after a pat GIF Woosung says `my hair is a mess`, and a few minutes later says `I wanted a K-pop game before that`.",
    "Read beside Woosung's later `I need to not talk sm I got so much stuff on the hall of shame`, the 2020 persistence gives the later self-complaint a clean contradiction: she keeps generating the material and later mock-regrets the pile.",
  ]),
  antiFanon: appendUnique(woosung.antiFanon, [
    "Snow's reaction-GIF exchange supports a comfortable pestering bit in this scene only. Do not promote it into a global closeness ranking, romance, or hierarchy.",
    "`I wanted a K-pop game before that` is a moment-level stated interest, not an exhaustive music or gaming profile.",
    "Export-time role arrays are not appointment chronology; none of this Lobby/Wall texture creates or dates a governance role.",
  ]),
} as ExtendedCharacter;

characterById.set("woosung", allCharacters[woosungIndex]);
