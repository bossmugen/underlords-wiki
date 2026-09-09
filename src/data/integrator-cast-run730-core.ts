import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

// Run 730 Core Rooms / Events: WOO is canonical Woosung. The April 2020 Lobby
// lane adds a different dimension from her already-public Wall reputation: she can
// hear a soft deferral, spot the loophole in its wording, and turn it into a shared
// half-hour bit without needing a new incident page.
const index = allCharacters.findIndex((character) => character.id === "woosung");
if (index >= 0) {
  const woosung = allCharacters[index] as ExtendedCharacter;
  const relationships = [...(woosung.relationships ?? [])];
  const snowIndex = relationships.findIndex((relationship) => relationship.name === "Snow");
  const snowAddition =
    "In an April 2020 Lobby bit, Snow answers WOO's request for a K-pop game with `SOMEDAY` / `when I am bored out of my mind`. WOO immediately converts the condition into a roughly thirty-one-minute boredom audit—`Are u bored yet`, `How about now`, `Now?`, and increasingly stretched variants—while Snow keeps answering in the same comic-refusal register. The useful texture is reciprocal pestering with excellent stamina: WOO keeps finding another way to ask because Snow keeps playing back.";

  if (snowIndex >= 0) {
    const existing = relationships[snowIndex];
    relationships[snowIndex] = {
      ...existing,
      note: existing.note.includes("thirty-one-minute boredom audit")
        ? existing.note
        : `${existing.note} ${snowAddition}`,
    };
  } else {
    relationships.push({
      name: "Snow",
      note: snowAddition,
      href: "/characters/snow",
    });
  }

  allCharacters[index] = {
    ...woosung,
    logline:
      "Former ScarletMoon leader, VIP and permanent Platelet who can turn `when I am bored out of my mind` into a half-hour `how about now` campaign, prosecute Nobu in two words, and then consider talking less because her own mouth keeps manufacturing Wall material.",
    tags: appendUnique(woosung.tags, [
      "Playful persistence",
      "K-pop game",
      "Snow",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(woosung.quotes, [
      "I wanted a K-pop game before that",
      "Are u bored yet",
      "How abouttt nowww",
      "How about nowwww",
      "my hair is a mess",
    ]),
    claims: appendUnique(woosung.claims, [
      "On 2020-04-08 in Lobby, WOO said she wanted a K-pop game; after Snow answered `SOMEDAY` and `when I am bored out of my mind`, WOO repeatedly checked whether Snow was bored yet for about 30m56s while Snow continued answering in the same joke lane.",
      "The April 2020 sequence supports a bounded playful-persistence trait and a comfortable WOO↔Snow pestering rhythm; it is not generalized into a claim that WOO ignores serious boundaries.",
      "In the same April 8 Lobby span, WOO joked `Lol I wish my hair could stay like that` and `my hair is a mess`, which is kept as mundane self-deprecating texture rather than visual biography.",
    ]),
    antiFanon: appendUnique(woosung.antiFanon, [
      "The K-pop-game scene establishes that WOO wanted that game in this dated exchange. It does not establish a favorite artist, specific fandom, lifelong genre identity, or broader taste history.",
      "Snow's repeated comic refusals and WOO's repeated `how about now` variants form a reciprocal joke lane in this scene. Do not generalize it into coerciveness, blanket disregard for refusal, romance, or a closeness ranking.",
      "The Tenor/pat-bot media in this April 2020 lane were not visually inspected. Preserve POSTED BY separately from MADE BY / CAPTURED BY / FEATURING, and do not infer WOO's hairstyle or hair type from the media.",
      "WOO / `_woo_woo` remains canonical Woosung. No second WOO person is created from this intake.",
    ]),
  } as ExtendedCharacter;

  characterById.set("woosung", allCharacters[index]);
}
