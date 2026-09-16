import { allCharacters, castGroups, characterById } from "./cast";
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

// Core: WOO can turn one passing phrase into a whole recreational nuisance.
// Snow keeps feeding the volley with increasingly theatrical refusals, so the
// useful relationship read is reciprocal bit-escalation, not boundary fanfic.
const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex < 0) throw new Error("Run 1221 expected canonical Woosung owner.");
const snowIndex = allCharacters.findIndex((character) => character.id === "snow");
if (snowIndex < 0) throw new Error("Run 1221 expected canonical Snow owner.");
{
  const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
  const relationships = [...(woosung.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Snow",
    "A 2020 Lobby bit shows WOO taking Snow's throwaway `when I am bored out of my mind` and turning it into a campaign of `Are u bored yet`, `How about now`, and `Now?`. Snow keeps answering with expressive refusal GIFs instead of dropping the exchange, so the comedy becomes WOO's persistence colliding with Snow's theatrical resistance while both continue feeding the same bit.",
    "theatrical resistance",
    "/characters/snow",
  );
  allCharacters[woosungIndex] = {
    ...woosung,
    logline: appendOnce(
      woosung.logline,
      "Give WOO one reusable phrase and she may worry it like a dog with a squeaky toy until repetition itself becomes the joke.",
      "squeaky toy",
    ),
    tags: appendUnique(woosung.tags, ["Bit escalation", "Snow", "Lobby banter"]),
    relationships,
    quotes: appendUnique(woosung.quotes, ["Are u bored yet", "How about now", "Now?", "How abouttt nowww"]),
    claims: appendUnique(woosung.claims, [
      "On April 8, 2020, after Snow jokes that a requested K-pop game may happen when he is bored out of his mind, WOO repeatedly returns with variations of `Are u bored yet` / `How about now` while Snow keeps answering through refusal GIFs. There are no stored Discord Reply links tying every post together, so this is strong contextual adjacency rather than a mechanical reply chain; the cumulative social read is prolonged reciprocal bit-escalation.",
      "A nearby Snow pat-command makes WOO say she wishes her hair could stay like the bot rendering and that her hair is a mess. This is mundane self-commentary only; the external media was not inspected and does not establish an actual hairstyle or appearance.",
    ]),
    antiFanon: appendUnique(woosung.antiFanon, [
      "WOO's repeated `bored yet?` pestering is bounded to a scene Snow keeps actively feeding with his own replies. Do not generalize it into a claim that WOO ignores boundaries or that Snow welcomes all teasing.",
      "The WOO/Snow volley is strong contextual adjacency, not a stored reply tree, and supports familiar reciprocal teasing rather than romance, family, hierarchy, or a closeness ranking.",
    ]),
  } as ExtendedCharacter;
  characterById.set("woosung", allCharacters[woosungIndex]);

  const snow = allCharacters[snowIndex] as ExtendedCharacter;
  const snowRelationships = [...(snow.relationships ?? [])];
  upsertRelationship(
    snowRelationships,
    "Woosung",
    "WOO can seize one Snow phrase and refuse to let it die: after Snow says a K-pop game may happen when he is bored, WOO keeps returning with `bored yet?` variations while Snow answers with a whole vocabulary of refusal GIFs. His refusal is part of the performance because he keeps supplying fresh material into the volley.",
    "whole vocabulary of refusal GIFs",
    "/characters/woosung",
  );
  allCharacters[snowIndex] = {
    ...snow,
    tags: appendUnique(snow.tags, ["Woosung", "Theatrical refusal", "Lobby banter"]),
    relationships: snowRelationships,
    claims: appendUnique(snow.claims, [
      "In the April 8, 2020 WOO/Snow Lobby volley, Snow repeatedly answers WOO's `bored yet?` campaign with refusal GIFs whose stored metadata reads as stop/nope/go-to-your-room/over-it/lord-help-me style reactions. The external media was not visually inspected; the useful read is Snow's continued participation in the refusal theater, not any inferred pixel content beyond stored metadata.",
    ]),
    antiFanon: appendUnique(snow.antiFanon, [
      "The WOO exchange is a reciprocal room bit in which Snow keeps responding; it is not evidence of coercion, hostility, romance, family, or a universal teasing permission.",
    ]),
  } as ExtendedCharacter;
  characterById.set("snow", allCharacters[snowIndex]);
}

// Core: Nui is a distinct small Lobby seed. Keep the stable account bounded and
// never use the short name to fuse this person with Nuien or anybody else.
const nuiId = "nui";
if (allCharacters.some((character) => character.id === nuiId)) {
  throw new Error("Run 1221 found an unexpected pre-existing Nui owner; refusing to overwrite it silently.");
}
const nuiSeed: ExtendedCharacter = {
  id: nuiId,
  name: "Nui",
  aliases: [],
  billing: "legacy",
  role: "Archive-era Lobby cast",
  era: "2020+",
  logline:
    "Nui runs hot and fast: loud enough to answer a Mugen summons with `ON IT BITCHHHHH`, practical enough to turn open spots into a live two-spots / one-spot / sold-out countdown minutes later. The volume is real; so is the follow-through.",
  tags: ["Archive cast", "Lobby", "Mugen", "Fast response", "Mobilizing urgency", "High-volume shorthand"],
  relationships: [
    {
      name: "Mugen",
      note:
        "Their May 2020 Lobby shorthand is immediate and reciprocal: `BITCHHHHH` meets `BITCH`, then Mugen yells for Nui to get into the Whiskey room and Nui answers `ON IT BITCHHHHH` less than nine seconds later. High-volume familiarity plus fast uptake; no rank, romance, or family claim.",
      href: "/characters/mugen",
    },
  ],
  quotes: ["BITCHHHHH", "ON IT BITCHHHHH", "Hurry hurry TWO SPOTS KEFT", "ONE SPOT HURRYYYY", "SOLD OUT"],
  claims: [
    "Stable Discord account 709974359866998786 is rendered `Nui` in the reviewed Lobby source. This owner is intentionally bounded to that stable account rather than inferred from similar names.",
    "On May 14, 2020, Nui and Mugen trade reciprocal all-caps `BITCH` shorthand; when Mugen loudly summons Nui to the Whiskey room, Nui answers `ON IT BITCHHHHH` 8.627 seconds later.",
    "On May 18, Nui turns open spots into a live countdown with `TWO SPOTS`, `ONE SPOT`, and `SOLD OUT` over about six minutes and forty-eight seconds. The person-shaped read is mobilizing urgency: shouty presentation paired with visible movement, not a formal recruiter or event-leader appointment.",
  ],
  antiFanon: [
    "Nui stable account 709974359866998786 is not merged with Nuien or any similarly named person without an explicit identity bridge. Name resemblance is not identity evidence.",
    "The meaning of Nui's `cc` shorthand remains unresolved and is not expanded on the public owner.",
    "Current/export role arrays do not establish that Nui formally owned recruitment, events, or the May 18 signup.",
    "The Mugen/Nui `BITCH` exchange is reciprocal familiar banter in the observed scene, not literal hostility, romance, family, governance, or a general permission claim.",
  ],
};
allCharacters.push(nuiSeed);
characterById.set(nuiId, nuiSeed);
const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(nuiId)) archiveCastGroup.characterIds.push(nuiId);

// Daycare support-source synthesis: Candy's tiny-language owner already exists.
// The genuinely additive piece is the trajectory from tentative arrival to a
// regular who trusts noises, emotes, reactions and images to carry presence.
const candyIndex = allCharacters.findIndex((character) => character.id === "candy");
if (candyIndex < 0) throw new Error("Run 1221 expected canonical Candy owner.");
{
  const candy = allCharacters[candyIndex] as ExtendedCharacter;
  allCharacters[candyIndex] = {
    ...candy,
    logline: appendOnce(
      candy.logline,
      "That economy reads less like absence when placed against her earlier tentative arrival: Candy goes from checking whether she fits to trusting a `Wad00`, a cat emote, a `Moo`, or an uncaptioned image to be enough for the room to recognize her presence.",
      "tentative arrival",
    ),
    tags: appendUnique(candy.tags, ["Belonging arc", "Compressed social language", "Visual participation"]),
    claims: appendUnique(candy.claims, [
      "A 2021 support-source onboarding pocket shows Candy entering cautiously and checking whether she fits in the room; later material from the same stable account is socially economical rather than hesitant, with repeated `Wad00` / `Wad0.0`, emotes, reactions, `Moo`, and visual posts doing much of the work. The useful change-over-time read is tentative arrival becoming compressed, socially legible participation.",
      "On December 12, 2021 Candy posts an uncaptioned image in Photo Submissions and draws multiple reactions. The receipt establishes POSTED BY Candy only; it does not establish that Candy made, captured, or appears in the image.",
    ]),
    antiFanon: appendUnique(candy.antiFanon, [
      "Candy's onboarding hesitation can be described as uncertainty about fitting in without publishing the private age detail that prompted the exchange.",
      "The change-over-time read is contextual: it describes the surviving shift from tentative onboarding to tiny-language regularity, not a claim that Candy's entire personality transformed.",
    ]),
  } as ExtendedCharacter;
  characterById.set("candy", allCharacters[candyIndex]);
}

// Wall: Tony's defendant routine is already public. The additive wrinkle is
// role reversal: Marian can repeatedly file Tony, and Tony is still perfectly
// willing to bring Marian to court in return. Also: the haircut opinions are fierce.
const tonyIndex = allCharacters.findIndex((character) => character.id === "tonytonychopper");
if (tonyIndex < 0) throw new Error("Run 1221 expected canonical TonyTonyChopper owner.");
{
  const tony = allCharacters[tonyIndex] as ExtendedCharacter;
  const relationships = [...(tony.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Marian",
    "The filing lane is reciprocal, not a permanent prosecutor/defendant assignment. Marian repeatedly puts Tony on the Wall, but on June 12 Tony posts an attachment while tagging Marian and Marian immediately protests `oi` / `that'ssprivate`. The attachment remains visually unresolved, yet the reversal is socially legible: Tony is willing to counter-file the person who keeps catching her.",
    "counter-file",
    "/characters/panda",
  );
  allCharacters[tonyIndex] = {
    ...tony,
    logline: appendOnce(
      tony.logline,
      "Tony also understands that Screenshot Court has no permanent seating chart: get filed by Marian often enough and eventually you file Marian back.",
      "no permanent seating chart",
    ),
    tags: appendUnique(tony.tags, ["Reciprocal filer", "Fandom taste", "Haircut opinions"]),
    relationships,
    quotes: appendUnique(tony.quotes, [
      "Another person who simps for a character with a bad haircut",
      "She looks pretty I admit but the hairrr",
      "SOGGY BACON?? THAT EXISTS??",
    ]),
    claims: appendUnique(tony.claims, [
      "Tony and Marian's Wall rhythm includes a role reversal: after multiple Marian-to-Tony filings, Tony posts an attachment while tagging Marian on June 12, 2022; Marian answers `oi` and then `that'ssprivate` twenty-seven seconds later. Marian's protest is close adjacency rather than a stored Reply edge, and the image remains POSTED BY Tony only.",
      "Tony also has very specific tiny taste opinions: `Another person who simps for a character with a bad haircut` is immediately softened with `She looks pretty I admit but the hairrr`, a compact example of roasting the haircut while conceding the character is pretty.",
      "Petty Crimes: discovers soggy bacon exists and reacts with `SOGGY BACON?? THAT EXISTS??`.",
    ]),
    antiFanon: appendUnique(tony.antiFanon, [
      "The June 12 Tony/Marian attachment is uninspected. It is POSTED BY Tony only; MADE BY, CAPTURED BY, FEATURING, and the pictured subject remain unresolved.",
      "Marian's `oi` / `that'ssprivate` follows Tony's post closely but is not a structured Discord Reply in the export. Preserve contextual adjacency instead of rewriting it as reply topology.",
      "Tony's `simps` wording is fandom slang around a fictional-character appearance opinion; it is not sexuality or relationship evidence.",
    ]),
  } as ExtendedCharacter;
  characterById.set("tonytonychopper", allCharacters[tonyIndex]);
}
