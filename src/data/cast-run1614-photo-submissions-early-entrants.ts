import type { Character } from "./wiki";
import type { CastGroup } from "./cast-through-run1514";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

export function applyRun1614PhotoSubmissionsEarlyEntrants(
  characters: Character[],
  groups: CastGroup[],
): void {
  const additions: ArchiveCharacter[] = [
    {
      id: "lexi",
      name: "LEXI",
      aliases: ["Okaa-san", "strawburrilexi"],
      billing: "guest",
      role: "Photo Submissions entrant",
      era: "2021",
      logline: "Arrived as Okaa-san from LoliParadise / S8, then came back for LOVE, Lonely, and Flowers; she could send a room a care package and leave one person with an affectionate insult.",
      tags: ["Photo Submissions", "LOVE", "Lonely", "Flowers", "Lobby", "Whiskey", "Affection"],
      stableDiscordIds: ["688932590584987783"],
      relationships: [
        { name: "Gilli", note: "Gilli handles LEXI's January Lobby welcome and Discord tour; the first impression is practical help with warmth.", href: "/characters/gilli" },
      ],
      claims: [
        "Stable account 688932590584987783 self-reported Okaa-san / LoliParadise / S8 / 19 in Lobby on 2021-01-11 (798420339910377504).",
        "The same account posted LOVE, Lonely, and Flowers entries in Photo Submissions (805668415489835008, 811621070733049886, 818519188774977577).",
      ],
      antiFanon: [
        "The January 11 self-report is LoliParadise / S8; later Photo Submissions activity does not establish a UL in-game membership transition or its date.",
        "POSTED BY LEXI only; image creator, photographer, and depicted subjects remain unresolved.",
      ],
    },
    {
      id: "laila",
      name: "_-Laila-_",
      aliases: ["_laila_5086"],
      billing: "guest",
      role: "Photo Submissions entrant",
      era: "2021",
      logline: "Gilli's Lobby welcome arrives 1.637 seconds after MEE6's; Laila then returns for LOVE, Lonely, and Flowers.",
      tags: ["Photo Submissions", "LOVE", "Lonely", "Flowers", "Lobby", "Repeat entrant"],
      stableDiscordIds: ["800180110573174824"],
      relationships: [
        { name: "Gilli", note: "Gilli is the first familiar hand at the door: quick welcome, role-assignment help, tour, and club rules.", href: "/characters/gilli" },
      ],
      claims: [
        "Stable account 800180110573174824 received a Lobby welcome on 2021-01-16; Gilli replied 1.637 seconds later with `Welcome! One sec while I assign your roles hun` (800197411184050256, 800197418440327239).",
        "The same account posted LOVE, Lonely, and Flowers entries in Photo Submissions (805686930972737556, 812055517882613810, 818481503155650623).",
      ],
      antiFanon: [
        "Laila's own IGN / club / age response is not preserved; the exact Discord role and in-game club status remain unresolved.",
        "POSTED BY Laila only; image creator, photographer, and depicted subjects remain unresolved.",
      ],
    },
    {
      id: "miihi",
      name: "Miihi",
      aliases: ["程瀟 Miihi (Milk)", "stephany_."],
      billing: "guest",
      role: "Photo Submissions entrant · Wall evidence regular",
      era: "2020–2021",
      logline: "Miihi came through Lobby in October 2020, returned for LOVE, Lonely, and Flowers, and later became the Wall's one-word `evidence` summons.",
      tags: ["Photo Submissions", "LOVE", "Lonely", "Flowers", "Wall", "Evidence", "Gallery"],
      stableDiscordIds: ["253897195290361856"],
      relationships: [
        { name: "Gilli", note: "Gilli handles Miihi's October 2020 Lobby welcome and asks for the usual IGN / club / age details.", href: "/characters/gilli" },
        { name: "Anayss", note: "Anayss later summons Miihi into an old Wall filing with one word: `evidence`.", href: "/characters/anayss" },
        { name: "Baby Lyssa", note: "Lyssa notices when Miihi beats her to a Wall filing.", href: "/characters/baby-lyssa" },
      ],
      claims: [
        "Stable account 253897195290361856 received a Lobby welcome on 2020-10-25; Gilli greeted Miihi and requested IGN / club / age (769955396320231434, 769955774154801173, 769955847752777728).",
        "The same account posted LOVE, Lonely, and Flowers entries in Photo Submissions (805842449753833482, 812025598058561578, 819449931655807026).",
      ],
      antiFanon: [
        "Miihi is not Korea / Milk; the shared display suffix is not an identity bridge.",
        "Miihi's requested October 2020 self-ID did not surface; do not backfill from later exporter role arrays.",
        "POSTED BY Miihi only; image creator, photographer, and depicted subjects remain unresolved.",
      ],
    },
  ];

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (!archiveGroup) throw new Error("Run 1614 expected the archive-cast group.");

  for (const addition of additions) {
    const existingIndex = characters.findIndex(
      (character) =>
        character.id === addition.id ||
        addition.stableDiscordIds?.some((stableId) =>
          ((character as ArchiveCharacter).stableDiscordIds ?? []).includes(stableId),
        ),
    );

    if (existingIndex >= 0) {
      const current = characters[existingIndex] as ArchiveCharacter;
      characters[existingIndex] = {
        ...current,
        ...addition,
        aliases: [...new Set([...(current.aliases ?? []), ...(addition.aliases ?? [])])],
        tags: [...new Set([...(current.tags ?? []), ...(addition.tags ?? [])])],
        relationships: [...(current.relationships ?? []), ...(addition.relationships ?? [])]
          .filter((relationship, index, all) =>
            all.findIndex((candidate) => candidate.name === relationship.name) === index,
          ),
        stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(addition.stableDiscordIds ?? [])])],
        claims: [...new Set([...(current.claims ?? []), ...(addition.claims ?? [])])],
        antiFanon: [...new Set([...(current.antiFanon ?? []), ...(addition.antiFanon ?? [])])],
      } as ArchiveCharacter;
    } else {
      characters.push(addition);
    }

    if (!archiveGroup.characterIds.includes(addition.id)) {
      archiveGroup.characterIds.push(addition.id);
    }
  }
}
