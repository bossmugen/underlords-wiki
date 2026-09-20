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
    aliases: [...new Set([...(current.aliases ?? []), ...(next.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(next.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(next.stableDiscordIds ?? [])])],
    relationships: [...relationshipMap.values()],
    quotes: [...new Set([...(current.quotes ?? []), ...(next.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(next.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(next.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

export const applyRun1496 = (allCharacters: Character[]) => {
  upsertCharacter(allCharacters, {
    id: "chubi",
    name: "Chubi",
    aliases: ["chibiterasu", "Chibi", "- - Chibi Tama - -", "Chuu~tan", "Hannya"],
    billing: "recurring",
    role: "Core-room regular",
    era: "2020+",
    logline: "Practical game-brain, low-volume comedian, and the kind of person who can be dealing with clan obligations, Discord audio problems, weekend plans, and somebody's costume opinion without treating any of it like a special event.",
    tags: ["Core rooms", "Games", "VC troubleshooting", "Dry humor", "Practical helper", "Petty Crimes"],
    stableDiscordIds: ["559670680287969281"],
    relationships: [
      {
        name: "Beo",
        note: "In May 2020 Beo, then using JereGilgamesh, calls `Chuu~tan` and Chubi answers immediately. It is a small piece of old-name familiarity rather than a rank or closeness score.",
      },
      {
        name: "Nobu",
        note: "During a PUBG Mobile conversation Chubi offers to add Xuseio — Nobu's old name — while sorting out account identifiers and clan obligations. Their surviving lane here is practical game coordination.",
      },
    ],
    quotes: [
      "clan shiz",
      "someone over 50 and hasn't had a guild yet i think",
      "i can",
      "welcome to my worl",
      "Hold on lemme finish getting ready... whats up?",
    ],
    claims: [
      "Stable Discord account 559670680287969281 / chibiterasu is Chubi in the reviewed Core Rooms handoff; Chibi, - - Chibi Tama - -, Chuu~tan and Hannya are historical display-name territory attached to that account.",
      "Across May–October 2020, Chubi repeatedly handles game logistics, clan obligations, account identifiers, VC/audio friction, weekend coordination and short dry jokes without turning practical help into a formal role performance.",
      "The cumulative person read is practical and game-literate with understated room humor: responsive when summoned, comfortable troubleshooting, and still willing to narrate costumes or throw a one-line joke into the middle of logistics.",
    ],
    antiFanon: [
      "Do not infer a formal role from the May 2020 export-time role array or from Chubi answering practical questions.",
      "Historical names remain attached by stable account; do not merge other Hannya-, Chibi-, or Sugar-like names from resemblance alone.",
      "The surviving Core Rooms slice does not establish a broader relationship ranking with Beo, Nobu, Mugen, Orokuso, or anyone else.",
    ],
  } as ArchiveCharacter);

  upsertCharacter(allCharacters, {
    id: "t7morrow",
    name: "t7morrow",
    aliases: ["Tmrw"],
    billing: "recurring",
    role: "Multi-game regular",
    era: "2020–2026+",
    logline: "Genre-hopper with grind tolerance and a habit of reappearing wherever UL has found another game, another bot, or another reason to spend money on digital nonsense. Farming is apparently less an activity than a resting state.",
    tags: ["Other Games", "Game clubs", "Music bot", "DJ", "Grinding", "Returns", "Petty Crimes"],
    stableDiscordIds: ["249189376143802368"],
    relationships: [
      {
        name: "Syv",
        note: "In the World of Tanks pocket t7morrow is actively trying to catch Syv. It reads as practical game pursuit inside an existing shared-room rhythm, not a relationship rank.",
      },
      {
        name: "Sye",
        note: "A 2021 gaming cluster places t7morrow in the same recurring game-infrastructure orbit as Sye and Saber: categories, games, and bot use keep overlapping even when the room structure itself is confusing.",
      },
    ],
    quotes: [
      "honestly i'm always farming",
      "tmrw got DJ hell yee",
      "more spending money on digital cards.",
    ],
    claims: [
      "Stable Discord account 249189376143802368 is t7morrow in the reviewed Louvre / Other Games longitudinal handoff.",
      "The surviving trail crosses World of Tanks in 2020, Diablo II Resurrected / Lost Ark and Blue Protocol interest in 2021, a Mugen summons into DC Dark Legion in 2025, and Riftbound in 2026.",
      "Game-room use overlaps with gamer-bot grinding and music-bot operations: t7morrow describes being always farming, holds the room-context DJ role in February 2021, troubleshoots music privilege behavior, and logs more than twenty-two hours of music time in one April 2021 week.",
    ],
    antiFanon: [
      "Do not globally resolve `Veggie`, `Avocado`, or generic `tmrw` labels to this account without stable-account or direct-context support.",
      "Do not merge t7morrow with Tofu or another similar nickname.",
      "A room-context DJ role is not evidence of broader staff, officer, or governance rank.",
    ],
  } as ArchiveCharacter);

  upsertCharacter(allCharacters, {
    id: "nintendo",
    name: "Nintendo",
    aliases: ["NintendoShitcube"],
    billing: "recurring",
    role: "Whiskey-era regular",
    era: "2020+",
    logline: "Dry, high-context callback machine who can hear half of an old story and supply the incident label from memory — then remember the funniest possible detail, such as being furious because he kept winning.",
    tags: ["Whiskey", "Callbacks", "Dry interjections", "Room memory", "Petty Crimes"],
    stableDiscordIds: ["703429467082719344"],
    relationships: [
      {
        name: "Mugen",
        note: "Nintendo can tell Mugen `you a fool` and `Go home` in the compact, familiar register that runs through the Whiskey room. The surviving exchange reads as comfortable teasing, not literal dismissal or formal authority.",
      },
    ],
    quotes: [
      "That's usually the case",
      "you a fool",
      "Go home",
      "The keylogger one?",
      "Oh man I was hot. Cause I kept fuckin winning",
      "Yeah thought the same",
    ],
    claims: [
      "Stable Discord account 703429467082719344 changes display name from NintendoShitcube to Nintendo on July 14, 2020 in the reviewed Whiskey packet.",
      "Nintendo repeatedly works as a high-context memory recirculator: when Whisk invokes an old drunk-Nintendo story, Nintendo identifies the `keylogger` incident before Whisk finishes anchoring it, then supplies his own remembered punchline about blackjack and winning.",
      "His other surviving Whiskey lines are similarly compact: dry agreement, a blunt tease toward Mugen, and quick recognition of a visual-description joke.",
    ],
    antiFanon: [
      "Whisk's retelling and Nintendo's recognition anchor a shared incident; they do not make Nintendo the author or cause of every detail in Whisk's version.",
      "The attached image after `Go home` remains visually unresolved in this handoff; do not infer its content.",
      "No formal UL role should be inferred from this Whiskey packet.",
    ],
  } as ArchiveCharacter);

  upsertCharacter(allCharacters, {
    id: "pride",
    name: "Pride",
    aliases: ["heister"],
    billing: "recurring",
    role: "Wall regular",
    era: "2020–2025+",
    logline: "A Wall participant who is perfectly willing to file themself, correct somebody else's attribution, explain the technical mechanics behind a fake display-name bit, and then return years later with `oh, cringe`. The joke can be stupid; the label still needs to be right.",
    tags: ["Wall", "Self-filing", "Attribution corrections", "Display-name mechanics", "Technical explainer", "Dry reactions", "Petty Crimes"],
    stableDiscordIds: ["387630572867928064"],
    relationships: [
      {
        name: "Noether",
        note: "By 2025 Pride can ask Noether `might i see the oopsinions`, a tiny example of the same dry curiosity that makes technical and social context worth poking at.",
      },
    ],
    quotes: [
      "shame on me",
      "when you’re shame worthy 🥴",
      "it's actually @Night | Marjorie who did it but whatever",
      "It's a bot that just lets people say stuff",
      "I change the name and pfp",
      "Look in the member list for Capt'n Jack Sparrow",
      "oh, cringe",
      "might i see the oopsinions",
    ],
    claims: [
      "Stable Discord account 387630572867928064 is Pride in the reviewed Wall handoff; `heister` is a display-name correction Pride supplies in May 2022.",
      "Pride self-files in August 2020, later corrects a misattribution to Night / Marjorie, and in 2022 explains both edit-history inspection and the bot/display-name workflow behind a spoofed speaker bit.",
      "The long-running mechanism is unusually consistent: Pride participates in the Wall ritual, but also calibrates the metadata around the joke — who did it, how the technical trick works, and what name or presentation the room should actually use.",
    ],
    antiFanon: [
      "Contextual display-name or avatar spoofing is not identity evidence. Do not merge the spoofed speakers with Pride or with one another.",
      "Pride's requested wording/presentation correction is a scene-level correction; do not infer identity categories beyond what Pride explicitly supplies.",
      "Thumbnail-only or otherwise unresolved media remains unresolved; POSTED BY does not become MADE BY, CAPTURED BY, or FEATURING without support.",
    ],
  } as ArchiveCharacter);
};
