import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mergeRelationships = (
  current: NonNullable<Character["relationships"]>,
  additions: NonNullable<Character["relationships"]>,
) => {
  const relationships = [...current];
  for (const addition of additions) {
    const index = relationships.findIndex((relationship) => relationship.name === addition.name);
    if (index >= 0) {
      relationships[index] = {
        ...relationships[index],
        ...addition,
      };
    } else {
      relationships.push(addition);
    }
  }
  return relationships;
};

const upsertCharacter = (seed: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === seed.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      aliases: unique([...(current.aliases ?? []), ...(seed.aliases ?? [])]),
      tags: unique([...(current.tags ?? []), ...(seed.tags ?? [])]),
      relationships: mergeRelationships(current.relationships ?? [], seed.relationships ?? []),
      quotes: unique([...(current.quotes ?? []), ...(seed.quotes ?? [])]),
      claims: unique([...(current.claims ?? []), ...(seed.claims ?? [])]),
      antiFanon: unique([...(current.antiFanon ?? []), ...(seed.antiFanon ?? [])]),
    } as ExtendedCharacter;
  } else {
    allCharacters.push(seed);
  }

  const canonical = allCharacters.find((character) => character.id === seed.id)!;
  characterById.set(seed.id, canonical);

  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(seed.id)) {
    archiveCastGroup.characterIds.push(seed.id);
  }
};

upsertCharacter({
  id: "mercy",
  name: "Mërcy",
  aliases: ["mercuryplanett", ".mercuryplanet"],
  billing: "legacy",
  role: "Archive-era Daycare cast",
  era: "2023–",
  logline:
    "New to the doorway, not new to the people: Mërcy answers a newcomer check with `Yeah, but I’ve worked w/ everyone before`, points at LilSatan as somebody who has known her for a while, and then drops back into the room with the compact confidence of `Valid 👍🏻`.",
  tags: [
    "Archive cast",
    "Daycare",
    "Prior-server familiarity",
    "Compressed self-introduction",
    "Low-friction continuity",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "LilSatan",
      note:
        "Instead of narrating a whole prehistory, Mërcy tags LilSatan with `Known me for awhile. Old server member 🖤`. In that moment LilSatan is the human shorthand for `I may be new here, but I am not a stranger`.",
    },
  ],
  quotes: [
    "Yeah, but I’ve worked w/ everyone before",
    "Known me for awhile. Old server member 🖤",
    "Valid 👍🏻",
  ],
  claims: [
    "Mërcy is anchored to stable account 906809263995908096; the same account is preserved across `mercuryplanett` and `.mercuryplanet` handle states.",
    "On 2023-01-07, when Shiro asks whether Mërcy is new, Mërcy answers `Yeah, but I’ve worked w/ everyone before`, then tags LilSatan with `Known me for awhile. Old server member 🖤`. The useful person read is compressed continuity: Mërcy can acknowledge being new to the immediate doorway without presenting herself as socially unknown.",
    "Later in the same Daycare sequence Mërcy answers a tagged person with `Valid 👍🏻`; it fits the same terse, socially fluent register without being promoted into a universal judgment about that person.",
  ],
  antiFanon: [
    "Mërcy's statements about prior work and old-server familiarity are her own contemporaneous self-description. They do not by themselves reconstruct a formal UL role, appointment date, original join date, or complete prior-server chronology.",
    "`Known me for awhile` supports prior familiarity with LilSatan in Mërcy's own words; it does not establish family, romance, exclusivity, or a ranked closeness claim.",
    "`Valid 👍🏻` is situational slang in this exchange, not a permanent character evaluation of the tagged person.",
  ],
});

upsertCharacter({
  id: "lena",
  name: "Lena",
  aliases: ["Aelena", ".aelena"],
  billing: "legacy",
  role: "Archive-era Whiskey cast",
  era: "2020–2021+",
  logline:
    "Sharp eye, soft witness: Lena will correct the room count, catch the care hiding inside a joke with one `awww`, throw sentiment back with `no u`, and make sure the right person notices when Whiskey changes temperature.",
  tags: [
    "Archive cast",
    "Whiskey",
    "Sharp eye",
    "Soft witness",
    "Light correction",
    "Care radar",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "Mugen says nine people are viewing Whiskey; Lena quietly corrects the count with `I see 11`. A month later Mugen starts `whiskey is cool but` and Lena answers `no u`. Precision and tiny sentiment-boomerang teasing fit in the same lane.",
      href: "/characters/mugen",
    },
    {
      name: "Anthos",
      note:
        "When Anthos asks whether the room is sparing Hayden from having to watch clips, Lena TRUE-replies `awww`. She catches the care hidden inside the joke and labels it without forcing the scene to become sincere for five straight minutes.",
      href: "/characters/anthos",
    },
  ],
  quotes: ["I see 11", "awww", "no u", "Hayden"],
  claims: [
    "Lena is anchored to stable account 442167443272630273 / historical handle `.aelena`; this same account is already active in Whiskey by November 2020, before the later February 2021 Lobby intake scene.",
    "On 2020-11-14 Mugen writes that nine people are viewing Whiskey and Lena answers `I see 11`. The useful character beat is small-scale precision: Lena notices the room itself and corrects the count without making a production out of it.",
    "On 2020-11-24 Anthos asks whether the room is saving Hayden from having to watch clips; Lena TRUE-replies `awww`. The response reads the exchange as care and names the softness in one syllable.",
    "On 2020-12-22 Lena answers Mugen's `whiskey is cool but` with `no u`, keeping affection in the same compact, anti-speech register.",
    "On 2021-01-11, after a Whiskey sequence about bot commands, logs, and Renton's apology, Lena posts `Hayden`. It is retained as a quiet audience cue at a tonal seam, not as authorship, endorsement, or governance.",
  ],
  antiFanon: [
    "The November 2020 Whiskey presence means the February 2021 Lobby intake cannot be treated as Lena's first surviving Discord/UL-room appearance. It still does not recover her original UL join date or explain why the later intake occurred.",
    "`awww` is a direct reply to Anthos in a care-shaped local scene; it does not establish exceptional closeness or a formal relationship category.",
    "The January 2021 `Hayden` tag is a local audience cue only. It does not prove endorsement, responsibility for the preceding bot/log sequence, or a governance role.",
    "Exact-ID q18 retrieval remains unreliable for negative classification in this source family; no reply rate, popularity score, or closeness metric is inferred from missing exact-ID results.",
  ],
});
