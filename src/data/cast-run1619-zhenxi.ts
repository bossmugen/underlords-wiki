import type { Character } from "./wiki";
import type { CastGroup } from "./cast-through-run1514";

type ArchiveCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

export function applyRun1619Zhenxi(
  characters: Character[],
  groups: CastGroup[],
): void {
  const addition: ArchiveCharacter = {
    id: "zhenxi",
    name: "Zhēnxī",
    aliases: ["Zhenxi", "rhymethero"],
    billing: "recurring",
    role: "Platelet",
    era: "2021–present",
    logline: "Keeps the close circle selective, prefers polite insults to easy compliments, and went from 'I am scare' at the Lobby door to 'NOT THE WALL OF SHAME FAME' before the tour was done. Rummy gets the rare close-friend exception; Ren gets the return fire.",
    tags: ["Platelet", "Lobby", "Wall", "Close friendship", "Rummy", "Polite insults"],
    relationships: [
      {
        name: "Rummy",
        note: "Zhēnxī explicitly places Rummy inside the 'really close friend' exception; their affection is direct and reciprocal.",
        href: "/characters/rummy",
      },
      {
        name: "Ren",
        note: "Ren checks the Lobby name, routes the tour, and tags Zhēnxī in the Wall; later Zhēnxī turns the filing back on her.",
        href: "/characters/ren",
      },
      {
        name: "Gabu",
        note: "Gabu joins the July 2022 Wall scene with a hydration roast; Zhēnxī backs her.",
        href: "/characters/gabu",
      },
    ],
    quotes: ["I am scare", "NOT THE WALL OF SHAME FAME", "I... Rather insult people politely.", "Deserving"],
    claims: [
      "Mugs-confirmed canon: Zhēnxī is a Platelet; Platelet status does not expire at age 18.",
      "On 2021-05-21, the Underlords Stripclub Bouncer welcomed Zhēnxī in Lobby; Ren routed them to the Discord tour, then tagged them in the Wall at 23:40:30. Zhēnxī answered NOOOOOOOOOOO and NOT THE WALL OF SHAME FAME; Ansun said 'shamed within 6 minutes of entry' and Ren asked 'New record?' (845549948506472468, 845550095118106655, 845550309941444668, 845550326572646450, 845551682191884339, 845551707634139136, 845551777184612382, 845553640622391316, 845553735748419664).",
      "On 2022-07-25, Zhēnxī said compliments were for 'really close friends', then named Rummy; Rummy answered ZHEEENNN I LOVEE YOU TOOOO (QOTD close-friend exchange).",
      "On 2022-08-03, Rummy told Zhēnxī 'I’m your frieeennnddd' and 'I’ll be one irl too'; Zhēnxī answered SKDJA YES THANK YOU (QOTD friendship-bridge exchange).",
    ],
    antiFanon: [
      "The 23:30 image post by Ren is uninspected and has no stored reply edge to the later 23:40 tag; do not call it preloaded evidence or describe its pixels.",
      "The visible welcome-to-tag interval is about 6m53s. Ansun’s 'within 6 minutes' and Ren’s 'New record?' are jokes, not a verified stopwatch record.",
      "Do not merge Zhēnxī / rhymethero with Ten / Tenzehna because the names look similar.",
      "Rummy and Zhēnxī's explicit close-friend language supports friendship, not romance or sex; 'I’ll be one irl too' does not establish an in-person meeting.",
      "The July 2022 Wall screenshot was posted by Zhēnxī; its pixels do not establish maker, capturer, or featured person.",
      "Wall fluency is not a formal prosecutor, archivist, investigator, or moderation role.",
    ],
  };

  const existingIndex = characters.findIndex(
    (character) =>
      character.id === addition.id ||
      character.aliases?.includes("rhymethero"),
  );
  if (existingIndex >= 0) {
    const current = characters[existingIndex] as ArchiveCharacter;
    characters[existingIndex] = {
      ...current,
      ...addition,
      aliases: [...new Set([...(current.aliases ?? []), ...(addition.aliases ?? [])])],
      tags: [...new Set([...(current.tags ?? []), ...(addition.tags ?? [])])],
      relationships: [
        ...(current.relationships ?? []).filter(
          (relationship) => !addition.relationships?.some((next) => next.name === relationship.name),
        ),
        ...(addition.relationships ?? []),
      ],
      quotes: [...new Set([...(current.quotes ?? []), ...(addition.quotes ?? [])])],
      claims: [...new Set([...(current.claims ?? []), ...(addition.claims ?? [])])],
      antiFanon: [...new Set([...(current.antiFanon ?? []), ...(addition.antiFanon ?? [])])],
    };
  } else {
    characters.push(addition);
  }

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (!archiveGroup) throw new Error("Run 1619 expected the archive-cast group.");
  if (!archiveGroup.characterIds.includes("zhenxi")) {
    archiveGroup.characterIds.push("zhenxi");
  }
}
