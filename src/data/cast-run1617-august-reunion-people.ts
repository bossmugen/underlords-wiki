import type { Character } from "./wiki";
import type { CastGroup } from "./cast-through-run1514";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(values: T[]): T[] => [...new Set(values)];

export function applyRun1617AugustReunionPeople(
  characters: Character[],
  groups: CastGroup[],
): void {
  const additions: ArchiveCharacter[] = [
    {
      id: "persephone",
      name: "Persephone",
      aliases: ["Persephone<3", "EmmaXoxo (Lobby IGN response)"],
      billing: "guest",
      role: "Photo Submissions entrant",
      era: "2021–2026",
      logline: "Pressed send on the FESTIVAL picture, apologized seventeen seconds later, and still answered Mugs's 2026 call home with breakfast news and a second hunger problem.",
      tags: ["Lobby", "Photo Submissions", "FLOWERS", "FESTIVAL", "Reunion"],
      stableDiscordIds: ["719250205001908256"],
      relationships: [
        {
          name: "Mugen",
          note: "Mugen called `persephone home` at the reunion; Persephone answered, reported breakfast, and then admitted she was hungry again.",
          href: "/characters/mugen",
        },
      ],
      quotes: ["my submission ^^ sorry if it’s not perfect lol"],
      claims: [
        "Stable account 719250205001908256 introduced herself in Lobby on 2021-02-24 as `Persephone<3 or EmmaXoxo` and named Underlords as her club (814186151400964096).",
        "The same account posted Photoshoot submissions on 2021-03-08 (818477226198433834) and 2021-09-16 (888298487588990997), then added `my submission ^^ sorry if it’s not perfect lol` seventeen seconds later (888298560267886622).",
        "At the 2026 reunion Mugen called `persephone home` (1537905577949270097); Persephone returned, reported breakfast, and then said she was hungry again (1537905834259124254, 1537905848343601233).",
      ],
      antiFanon: [
        "EmmaXoxo is a self-supplied IGN response, not a real-world name or a separate Discord identity.",
        "Lobby onboarding does not establish first in-game admission or a historical Staff appointment.",
        "The Photoshoot images were posted by Persephone; their makers, photographers, subjects, and visual contents remain unverified.",
      ],
    },
    {
      id: "sarabunny",
      name: "SaraBunny",
      aliases: ["foxcat"],
      billing: "guest",
      role: "Archive-era UL member",
      era: "2021–2026",
      logline: "Named Underlords as her club at the 2021 Lobby door; five years later, Mugs greeted her with `BUNNY` and Sara answered the room as `my loves`.",
      tags: ["Lobby", "Club Only", "Photo Submissions", "Wall", "Reunion"],
      stableDiscordIds: ["250001036251627520"],
      relationships: [
        {
          name: "Mugen",
          note: "Mugen welcomed Sara through the 2021 Discord handoff and recognized her immediately as `BUNNY` at the 2026 reunion.",
          href: "/characters/mugen",
        },
        {
          name: "Gilli",
          note: "Gilli joined the 2026 recognition with an exuberant repeated `SARA` and `long time no seeeee`.",
          href: "/characters/gilli",
        },
      ],
      quotes: ["my loves"],
      claims: [
        "Stable account 250001036251627520 checked in on 2021-05-25 with `my ign is SaraBunny my club is Underlords and I’m 19 (:` (846796371104890910); Mugen completed the Discord role/server-map handoff (846796109144784906, 846796610578677820).",
        "At the 2026 reunion Mugen greeted SaraBunny as `BUNNY`; Sara addressed the room as `my loves` and said she missed everybody (1537915482018021446, 1537916585346601000, 1537916595924377772).",
      ],
      antiFanon: [
        "The May 2021 Lobby scene is Discord onboarding, not proof of first in-game admission.",
        "Do not infer Staff or Officer appointment chronology from export-time role arrays.",
        "The reunion greeting shows recognition and affection, not uninterrupted in-game membership or a formal re-admission.",
      ],
    },
    {
      id: "seth",
      name: "Seth",
      aliases: ["seraph_000", "代码_错误"],
      billing: "guest",
      role: "Archive-era UL member",
      era: "2022–2026",
      logline: "Checked in as `代码_错误`; the 2026 reunion's animal question got a straight-to-the-point lynx and Siberian tiger answer.",
      tags: ["Lobby", "Reunion", "Animals", "Petty Crimes"],
      stableDiscordIds: ["566182720288587776"],
      relationships: [
        {
          name: "Mugen",
          note: "Mugen handled Seth's 2022 Discord welcome and server orientation.",
          href: "/characters/mugen",
        },
      ],
      quotes: ["Linx...Siberian tiger..."],
      claims: [
        "Stable account 566182720288587776 checked in through Lobby on 2022-09-28 under IGN `代码_错误`, naming Underlords as the club (1024664665646694410, 1024665227821854901); Mugen supplied the server welcome and orientation (1024667712070373507).",
        "At the 2026 reunion Seth answered the animal question with lynx and Siberian tiger (1537066867259080855).",
      ],
      antiFanon: [
        "Lobby onboarding does not establish first in-game admission or a formal appointment.",
        "Do not infer demographics or nationality from the historical IGN.",
        "One animal-preference answer is not evidence of a larger animal-themed persona.",
      ],
    },
  ];

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (!archiveGroup) throw new Error("Run 1617 expected the archive-cast group.");

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
      const relationships = [...(current.relationships ?? []), ...(addition.relationships ?? [])];
      characters[existingIndex] = {
        ...current,
        ...addition,
        aliases: unique([...(current.aliases ?? []), ...(addition.aliases ?? [])]),
        tags: unique([...(current.tags ?? []), ...(addition.tags ?? [])]),
        relationships: relationships.filter(
          (relationship, index, all) =>
            all.findIndex((candidate) => candidate.name === relationship.name) === index,
        ),
        quotes: unique([...(current.quotes ?? []), ...(addition.quotes ?? [])]),
        stableDiscordIds: unique([...(current.stableDiscordIds ?? []), ...(addition.stableDiscordIds ?? [])]),
        claims: unique([...(current.claims ?? []), ...(addition.claims ?? [])]),
        antiFanon: unique([...(current.antiFanon ?? []), ...(addition.antiFanon ?? [])]),
      } as ArchiveCharacter;
    } else {
      characters.push(addition);
    }

    if (!archiveGroup.characterIds.includes(addition.id)) {
      archiveGroup.characterIds.push(addition.id);
    }
  }
}
