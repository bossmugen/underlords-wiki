import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertCharacter = (allCharacters: Character[], next: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) =>
      character.id === next.id ||
      next.stableDiscordIds?.some((stableId) =>
        (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
      ),
  );

  if (index < 0) {
    allCharacters.push(next);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationshipMap = new Map(
    [...(current.relationships ?? []), ...(next.relationships ?? [])].map((relationship) => [relationship.name, relationship]),
  );

  allCharacters[index] = {
    ...current,
    ...next,
    id: current.id,
    name: current.name,
    role: current.role,
    aliases: [...new Set([...(current.aliases ?? []), ...(next.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(next.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(next.stableDiscordIds ?? [])])],
    relationships: [...relationshipMap.values()],
    quotes: [...new Set([...(current.quotes ?? []), ...(next.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(next.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(next.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

export const applyRun1540 = (allCharacters: Character[]) => {
  upsertCharacter(allCharacters, {
    id: "yari",
    name: "Yari",
    aliases: ["YARI", "yari11"],
    billing: "minor",
    role: "Wall-era regular",
    era: "2020+",
    logline: "Tender, theatrical, and completely willing to be embarrassing in public: Yari can answer a filing with wounded vanity, tell somebody they do not praise her enough, and move straight into hearts, `sweetie`, or an `(ಥ﹏ಥ)` without changing rooms or lowering the volume.",
    tags: ["Wall", "Affection theater", "Public teasing", "Emoticon deployment", "ShiyaX", "Sol", "Petty Crimes"],
    stableDiscordIds: ["191059181821493248"],
    relationships: [
      {
        name: "ShiyaX",
        href: "/characters/shiyax",
        note: "Yari is comfortable enough with ShiyaX's public filing to turn the defense into a demand for better treatment. When he says he posted something because she had said it the day before, Yari answers `You dont praise me enough tbh`; Shiya's `no shit` keeps the exchange in the same familiar, needling register instead of turning it into an actual grievance.",
      },
      {
        name: "Sol",
        note: "ShiyaX once casts Yari and Sol into a Naruto/Sasuke bit, and Yari later addresses Sol with `don't make me uwu pls bby` plus a crying emoticon. The useful texture is not a formal duo label; it is that Yari can carry a ridiculous room premise forward through overtly affectionate, stagey language.",
      },
    ],
    quotes: [
      "You dont praise me enough tbh",
      "Farewell sweetie ❤",
      "@Sol don't make me uwu pls bby",
      "Good. You can't leave. Grandma will be sad and I will too.",
    ],
    claims: [
      "Yari's surviving Wall voice repeatedly mixes teasing with very legible affection: hearts, `sweetie`, `bby`, emoticons, and mock-wounded demands for praise all live comfortably beside Screenshot Court embarrassment.",
      "Her ShiyaX exchanges suggest familiarity sturdy enough to survive public filing without requiring either person to drop the joke and reassure the room explicitly.",
      "Her Sol material works best as callback fluency and playful pleading: a Naruto/Sasuke room bit can be picked up later in Yari's own exaggerated affectionate register.",
    ],
    antiFanon: [
      "Yari's hearts, `sweetie`, `bby`, and other affectionate language do not by themselves establish romance, sex, exclusivity, or a formal relationship with Sol, ShiyaX, or anyone else.",
      "`Cancer Cream Guzzler` is a period display name in the source history, not automatically a durable canonical alias.",
      "`Grandma` is joke/family-language in context unless independently established otherwise; do not convert it into literal biological kinship.",
      "Nearby media remains attributable only at the level actually preserved; tags and reactions do not establish who made, captured, or appears in an image.",
    ],
  } as ArchiveCharacter);

  upsertCharacter(allCharacters, {
    id: "sol",
    name: "Sol",
    aliases: ["solaners1", "Ceo of Sex"],
    billing: "minor",
    role: "Wall-era regular",
    era: "2020–2021+",
    logline: "A screenshot-first filer with a wonderfully inconvenient habit of becoming evidence too. Sol can drop the exhibit with little more than `Lol`, revive an old one for people who missed it, race other people to a receipt, and then realize mid-bit that the Wall has turned back around on him.",
    tags: ["Wall", "Screenshot-first", "Repeat filer", "Self-aware defendant", "Compact captions", "Yari", "Petty Crimes"],
    stableDiscordIds: ["145602579211386880"],
    relationships: [
      {
        name: "Yari",
        note: "Yari and Sol are easy targets for a Naruto/Sasuke room bit, and Yari later keeps the premise alive with `don't make me uwu pls bby`. The lane reads as comfortable callback play rather than a formal pairing or relationship label.",
      },
      {
        name: "ShiyaX",
        href: "/characters/shiyax",
        note: "Sol can notice the room rules in real time and point them out — `didn't snow just say not to post this chat here lol` — while still living inside the same receipt-heavy culture. With ShiyaX, that makes him participant and commentator at once, not an authority figure.",
      },
    ],
    quotes: [
      "Lol",
      "(For those who have not seen this before)",
      "You said the thing!",
      "ah shit wait",
      "And they are shaming me yet praising my accomplishment",
      "didn't snow just say not to post this chat here lol",
    ],
    claims: [
      "Sol's Wall footprint is heavily attachment-driven: most of his surviving authored posts carry an attachment, and short captions such as `Lol` repeatedly let the exhibit do most of the talking.",
      "He also resurfaces older material for people who missed it, which turns filing into a repeatable social service/joke rather than a one-scene impulse.",
      "The useful contradiction is prosecutor plus defendant. Sol can be competitive about catching a receipt, then notice when the room is shaming him while praising whatever accomplishment got him there.",
      "Sol can also show live rule-awareness without stepping outside the chaos; noticing that Snow had just said not to post a chat there is situational awareness, not governance.",
    ],
    antiFanon: [
      "Sol's export-time or current role metadata must not be used to invent historical appointment chronology.",
      "His Yari Naruto/Sasuke lane and Yari's affectionate language do not establish romance, sex, exclusivity, or a formal duo status.",
      "Attachment-bearing posts establish POSTED BY Sol where applicable, not MADE BY, CAPTURED BY, or FEATURING without separate support.",
      "Duplicate anchors and caption mismatches are routing/provenance issues, not additional incidents.",
    ],
  } as ArchiveCharacter);

  upsertCharacter(allCharacters, {
    id: "bailey",
    name: "Bailey",
    aliases: ["bailey3841", "Bailey_Babe"],
    billing: "minor",
    role: "Whiskey-era regular",
    era: "2020–2021+",
    logline: "Bailey does not merely get roasted; she keeps reopening the door. A threat of getting clapped can earn a crying emoji and then `You won’t clap me though`, a challenge becomes `What you gonna do`, and even when the room says she is calling somebody out, retreat is apparently not the chosen technology.",
    tags: ["Whiskey", "Self-owning bravado", "Callout bait", "Snapback", "Petty Crimes"],
    stableDiscordIds: ["344758677182775299"],
    relationships: [
      {
        name: "Goody",
        note: "Goody's `finna get clapped by Bailey` becomes a clean Bailey miniature: she protests with a crying reaction, immediately pivots to `You won’t clap me though`, and Goody answers `wait for next time`. The rhythm is challenge, theatrical complaint, counter-challenge — not passive victimhood.",
      },
      {
        name: "Bridget",
        note: "When Bishop tags Bridget into one Whiskey exchange, Bailey cuts in with `I stopped it you idiot`. It is a sharp little snapback in the middle of live room traffic, useful as temperament without requiring a formal relationship read.",
      },
    ],
    quotes: [
      "You won’t clap me though",
      "What you gonna do",
      "I stopped it you idiot",
    ],
    claims: [
      "Bailey's recurring Whiskey register is self-owning bravado: she can receive a threat or callout, perform alarm for half a beat, and then escalate the challenge herself.",
      "That makes her more than a roast target. The joke repeatedly works because Bailey actively supplies the second half of it — daring the room, snapping back, or refusing to let a threat have the final word.",
      "A Minardi operational log places Bailey in voice chat alongside several role-labeled accounts, but that is scene context only and does not establish when Bailey or anyone else received a role.",
    ],
    antiFanon: [
      "Bailey is distinct from Orenji <3; do not merge people from neighboring names, displays, or scene proximity.",
      "Voice-channel co-presence does not establish closeness rank, hierarchy, or appointment chronology.",
      "Bailey's challenge language is social bravado in the surviving scenes, not proof of literal threats or offline violence.",
      "Export-time/current role labels attached to archived rows are non-chronological metadata and must not be used to date appointments.",
    ],
  } as ArchiveCharacter);
};
