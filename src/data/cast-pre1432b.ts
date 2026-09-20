import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1432";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1432";

export const allCharacters: Character[] = [...previousCharacters];

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: Array<{ name: string; note: string; href?: string }>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

// Run 1432 Whiskey synthesis: Efi's tiny messages are small in size, not in function.
const efiCharacter: ArchiveCharacter = {
  id: "efi",
  name: "Efi",
  aliases: ["<3 Efi <3", "Sycessences", "syces"],
  billing: "guest",
  role: "Archive-era Whiskey / competitive-chat cast",
  era: "2020–2022+",
  logline: "A compressed signaler who can greet, invite, register a loss, or celebrate a new attempt in one tiny packet. Efi's messages are short; the social job they are doing usually is not.",
  tags: ["Archive cast", "Whiskey", "Competitive chat", "Compact voice", "Petty Crimes"],
  stableDiscordIds: ["488099199938986004"],
  relationships: [
    {
      name: "Cassina",
      note: "Cassina's January 2021 `I just made the connection to your name` lands directly with Efi, who answers `p coo`. It is a clean little recognition beat: warm familiarity is visible, but the scene does not need a closeness ranking to work.",
    },
  ],
  quotes: [
    "Come join",
    "Excited :BlobParty:",
    "p coo",
  ],
  claims: [
    "Stable Discord account 488099199938986004 is the Efi / `<3 Efi <3` / Sycessences identity across the reviewed Whiskey handoffs.",
    "Efi repeatedly uses tiny messages as complete social moves: greetings, invitations, frustration, aspiration, recognition, and quick reactions rather than empty filler.",
    "In July 2020 Efi says `high elo` and `I hope`; by December Efi says competitive 2v2 has `Just started` and immediately follows with `Excited :BlobParty:`.",
    "Cassina's January 2021 name-recognition exchange gives Efi a direct person-to-person beat instead of leaving the profile as only channel reactions.",
  ],
  antiFanon: [
    "Short-message style does not establish that Efi is shy, quiet, withdrawn, or socially passive.",
    "The reviewed Efi material does not establish gender.",
    "A birthday-room line about Gilli drinking water like Efi does not establish a drinking habit, health routine, or special Gilli relationship.",
    "Birthday-room co-presence with Hilda, Gilli, and Panda establishes group familiarity only, not a ranked relationship.",
    "The reviewed Efi packet is text-only and does not establish attachment authorship, capture, or visual featuring.",
  ],
};

const efiIndex = allCharacters.findIndex(
  (character) => character.id === "efi" || (character as ArchiveCharacter).stableDiscordIds?.includes("488099199938986004"),
);
if (efiIndex >= 0) {
  const current = allCharacters[efiIndex] as ArchiveCharacter;
  allCharacters[efiIndex] = {
    ...current,
    ...efiCharacter,
    aliases: [...new Set([...(current.aliases ?? []), ...(efiCharacter.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(efiCharacter.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(efiCharacter.stableDiscordIds ?? [])])],
  } as ArchiveCharacter;
} else {
  allCharacters.push(efiCharacter);
}

// Run 1432 Wall synthesis: Zhēnxī goes from loudly summoned defendant to happily filing the counter-case.
const zhenxiCharacter: ArchiveCharacter = {
  id: "zhenxi",
  name: "Zhēnxī",
  billing: "guest",
  role: "Archive-era Daycare / Wall cast",
  era: "2021–2022+",
  logline: "A high-affect Screenshot Court regular who can arrive at a summon yelling `NOOOOOOOOOOO`, accept affection without leaving the bit, and later turn around with a receipt of her own and decide the defendant absolutely deserved it.",
  tags: ["Archive cast", "Wall", "High-affect protest", "Reciprocal filing", "Petty Crimes"],
  stableDiscordIds: ["702968421033312275"],
  relationships: [
    {
      name: "Ren",
      note: "Ren summons Zhēnxī into separate Wall exposure pockets; later Zhēnxī posts a screenshot, waits ten seconds, and calls `@RΣN so uh-`. Ren replies directly to the exhibit with a skull and `STAWP`; Zhēnxī laughs and answers `Deserving`. Their recurring grammar is summon-and-counterfile familiarity, not hostility or a closeness rank.",
      href: "/characters/ren",
    },
    {
      name: "Rummy",
      note: "In the June 2022 Wall pocket, phenomenal_lamb/Rummy true-replies to Zhēnxī's exact `NOOOOOO` with `I love YoU`; Zhēnxī goes through a mad-cry emote and answers `I love you too`. Affection is part of the teasing rhythm here, not romance or relationship rank.",
      href: "/characters/rummy",
    },
  ],
  quotes: [
    "NOOOOOOOOOOO",
    "NOT THE WALL OF SHAME FAME",
    "I love you too",
    "@RΣN so uh-",
    "Deserving",
  ],
  claims: [
    "Across the reviewed Wall footprint, Zhēnxī is twice directly summoned into receipt pockets as the protesting target and later directly posts a screenshot and summons Ren into the counter-case.",
    "The narrow Wall-local chronology supports a useful role reversal from summoned defendant to reciprocal filer/counter-prosecutor without claiming that this is Zhēnxī's whole personality.",
    "Rummy's mechanically linked `I love YoU` reply and Zhēnxī's `I love you too` response show affection surviving inside the teasing rather than ending the bit.",
  ],
  antiFanon: [
    "The reviewed Wall screenshots remain visually unresolved unless separately inspected; POSTED BY does not establish MADE BY, CAPTURED BY, or visual FEATURING.",
    "Ren is a confirmed social target/audience of Zhēnxī's July 2022 filing, not automatically the person depicted in it.",
    "Sou's `shamed within 6 minutes of entry` is scene language and does not establish Zhēnxī's UL join, admission, or origin date.",
    "The `I love you` exchange is affectionate teasing and does not establish romance, sex, or a closeness hierarchy.",
  ],
};

const zhenxiIndex = allCharacters.findIndex(
  (character) => character.id === "zhenxi" || (character as ArchiveCharacter).stableDiscordIds?.includes("702968421033312275"),
);
if (zhenxiIndex >= 0) {
  const current = allCharacters[zhenxiIndex] as ArchiveCharacter;
  allCharacters[zhenxiIndex] = {
    ...current,
    ...zhenxiCharacter,
    aliases: [...new Set([...(current.aliases ?? []), ...(zhenxiCharacter.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(zhenxiCharacter.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(zhenxiCharacter.stableDiscordIds ?? [])])],
  } as ArchiveCharacter;
} else {
  allCharacters.push(zhenxiCharacter);
}

// Run 1432 Wall synthesis: Illien knows exactly who should see the exhibit, then immediately makes the room stupider.
const illienIndex = allCharacters.findIndex((character) => character.id === "illien");
if (illienIndex >= 0) {
  const illien = allCharacters[illienIndex] as ArchiveCharacter;
  const relationships = [...(illien.relationships ?? [])];

  upsertRelationship(
    relationships,
    "Mugen",
    "Illien can drop an exhibit with the entire caption `@Mugen`, remember nineteen seconds later that Mugen needs to be summoned, or simply ask her to `post the rest`. It reads as comfortable receipt-sharing and direct audience targeting, not formal authority or a closeness rank.",
    "/characters/mugen",
  );
  upsertRelationship(
    relationships,
    "Anthos",
    "Illien can tag Anthos straight into the `tacocat` riff and later name Anthos as the addressee of another receipt. The useful pattern is easy callout-and-riff familiarity; the objects do not automatically become Anthos-made or Anthos-depicting media.",
    "/characters/anthos",
  );

  allCharacters[illienIndex] = {
    ...illien,
    aliases: [...new Set([...(illien.aliases ?? []), "Euros"])],
    stableDiscordIds: [...new Set([...(illien.stableDiscordIds ?? []), "679943266090614843"])],
    logline: "Early Officer and Wall gremlin with a weirdly efficient filing style: drop the exhibit, summon exactly who needs to see it, then wreck the remaining seriousness with `tacocat`, backwards theology, or an extended cat premise.",
    tags: [...new Set([...(illien.tags ?? []), "Wall", "Receipt summoner", "Old-lore memory", "Wordplay", "Cat bits", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(illien.quotes ?? []),
      "Almost forgot @Mugen",
      "Please post the rest then @Mugen",
      "Day 187, humans still don't suspect I'm a cat",
      "Meowone shall know",
      "tacocat",
      "racecar",
    ])],
    claims: [...(illien.claims ?? []),
      "Across the reviewed 2020 Wall material, Illien repeatedly files with almost no explanation and then directly summons the intended social audience, including Mugen and the Gabu/Sou pair.",
      "The same Wall footprint repeatedly turns into absurdist wordplay and cat narration, making precise social targeting and complete unseriousness part of the same person rather than separate event summaries.",
      "The project identity bridge Illien = Euros is already resolved; this synthesis preserves it rather than reopening it from username similarity.",
    ],
    antiFanon: [...new Set([
      ...(illien.antiFanon ?? []),
      "A summon or mention establishes intended social audience, not visual FEATURING in the attached media.",
      "Illien's `satan` / `dog` / palindrome run is wordplay, not a literal religious-belief record.",
      "The Illien↔Mugen and Illien↔Anthos lanes are recurring social familiarity, not relationship rank or governance hierarchy.",
    ])],
  } as ArchiveCharacter;
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
