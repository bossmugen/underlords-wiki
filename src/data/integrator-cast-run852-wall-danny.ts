import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const dannyId = "danny";
const dannyIndex = allCharacters.findIndex((character) => character.id === dannyId);

const wallRelationships = [
  {
    name: "Ren",
    note:
      "Danny can throw a receipt into the room, get an immediate `DANNY I SWEAR TO GOD` / `IM GONNA MURDER YOU` from Ren, and answer the mock outrage by improving the premise instead of retreating: `I should get a new ss with the persons name added 😝😝`. The useful relationship texture is receipt-provocation and escalation banter where both people understand the bit; the threat language is theatrical, not literal hostility.",
  },
];

const dannyCharacter: ExtendedCharacter = {
  id: dannyId,
  name: "Danny",
  aliases: ["danny_ftm", "Danny🟥⬜"],
  billing: "guest",
  role: "Member",
  era: "2020+",
  logline:
    "Danny's tiny surviving Wall footprint manages to make one contradiction extremely clear: socially chaotic filer, weirdly conscientious receipt-quality-control brain. He can apparently carry a live screenshot from Club-only into Wall, add another image, get mock-threatened by Ren, and respond by proposing a *better* screenshot with the person's name visible. Then, because one tangent is never enough, he can drop a 2006 Sprite-goblin advert into the room and explain that there were loads of them. The instinct is rarely to retreat from the bit. Danny improves it, labels it, or finds another odd piece of media to make everybody deal with.",
  tags: [
    "Wall",
    "Screenshot filing",
    "Cross-room receipt porter",
    "Receipt legibility",
    "Joke escalation",
    "Odd-media callbacks",
    "Petty Crimes",
  ],
  relationships: wallRelationships,
  quotes: [
    "Sorry youre right, I should get a new ss with the persons name added 😝😝",
    "But what sprite?",
    "There was loads of sprite goblin adverts lol",
  ],
  claims: [
    "Danny is anchored here to stable account 497107210200154153 / username `danny_ftm` / rendered `Danny🟥⬜`; this owner must not absorb other Danny-named accounts by string similarity.",
    "On October 12, 2020 Danny posts a screenshot in Club-only and, 3m50.566s later, posts two attachments in Wall. One Wall attachment shares the earlier object's raw filename and exact byte size, making cross-room reuse/repost strongly probable even though byte-level identity is not claimed without a checksum.",
    "Ren's immediate mock outrage at the Wall filing is followed by Danny's `Sorry youre right, I should get a new ss with the persons name added 😝😝`. The useful person read is a chaotic filer who answers social heat by improving the receipt premise rather than backing out of it.",
    "Danny's role in this pocket is lived behavior, not an office: cross-room receipt porter / provenance-minded joke escalator. Nothing here creates a formal archivist, moderator, or governance title.",
    "On October 21, 2020 Danny posts a YouTube embed for `Sprite - All-Nighter (2006, UK)`, follows it with `But what sprite?`, and later says `There was loads of sprite goblin adverts lol`. It is good weird-media recall and callback texture, not evidence of nationality, location, or drink preference.",
    "Petty Crimes: MOVES A RECEIPT ACROSS ROOMS AND APPARENTLY DECIDES THE REAL PROBLEM IS THAT THE PERSON'S NAME IS NOT VISIBLE ENOUGH; RESPONDS TO MOCK THREATS WITH BETTER FILING STANDARDS; AND BRINGS A 2006 SPRITE GOBLIN ADVERT INTO WALL BECAUSE THE TANGENT WAS AVAILABLE.",
  ],
  antiFanon: [
    "Stable account 497107210200154153 is the identity anchor for this owner. Do not merge other Danny-named accounts into it by display-name similarity alone.",
    "A newer miner handoff contains a contradictory much-larger 2021–2025 message-count/display-name-chain claim for the same stable ID while the current checkpoint says the assigned Wall footprint is five messages and two attachments in October 2020. Until that source-custody contradiction is reconciled, do not publish the larger chronology, later aliases, or later callback/gamer scenes as this owner's canon.",
    "The October 12 cross-room object is a PROBABLE sibling/repost based on same raw filename, exact byte size, same stable author, and a 3m50.566s interval. Do not call the binaries identical without bytes/checksum confirmation.",
    "Danny's Wall attachments are POSTED BY Danny only. MADE BY / CAPTURED BY / FEATURING remain unresolved without separate media support; filename timestamps are not capture proof.",
    "Ren's `IM GONNA MURDER YOU` is joke-language inside the receipt-escalation pocket, not evidence of literal violence, hostility, romance, family, governance, or a ranked closeness claim.",
    "The Sprite-goblin link is conversational weird-media recall, not evidence of Danny's geography, nationality, beverage preference, or personal history with the advert.",
    "Earliest surviving support is not guaranteed origin, and export-time role arrays are not appointment chronology.",
  ],
};

if (dannyIndex >= 0) {
  const danny = allCharacters[dannyIndex] as ExtendedCharacter;
  const relationships = [...(danny.relationships ?? [])].filter(
    (relationship) => relationship.name !== "Ren",
  );
  relationships.push(...wallRelationships);

  allCharacters[dannyIndex] = {
    ...danny,
    ...dannyCharacter,
    aliases: appendUnique(danny.aliases, dannyCharacter.aliases ?? []),
    tags: appendUnique(danny.tags, dannyCharacter.tags ?? []),
    relationships,
    quotes: appendUnique(danny.quotes, dannyCharacter.quotes ?? []),
    claims: appendUnique(danny.claims, dannyCharacter.claims ?? []),
    antiFanon: appendUnique(danny.antiFanon, dannyCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
  characterById.set(dannyId, allCharacters[dannyIndex]);
} else {
  allCharacters.push(dannyCharacter);
  characterById.set(dannyId, dannyCharacter);
}
