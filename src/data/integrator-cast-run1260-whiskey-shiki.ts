import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const shikiId = "shiki";
const shikiIndex = allCharacters.findIndex((character) => character.id === shikiId);

const shikiSeed: ExtendedCharacter = {
  id: shikiId,
  name: "Shiki",
  aliases: [],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2021+",
  logline:
    "Shiki leaves a smaller footprint in chat than in the room itself. Cece notices when Shiki will not talk to her; weeks later, somebody else finds Shiki still farming for hours. The contradiction is the whole point: hard to draw into conversation, very easy to notice still doing the thing.",
  tags: [
    "Archive cast",
    "Whiskey",
    "Low verbal visibility",
    "Persistent activity",
    "Relationship texture",
  ],
  relationships: [
    {
      name: "Cece",
      note:
        "Cece's complaint that Shiki `don’t talk to me` turns silence into relationship behavior rather than empty airtime. Cece notices the missing exchange strongly enough to call it out, so Shiki's low output still has social weight even when Shiki is not driving the conversation.",
    },
    {
      name: "ed",
      note:
        "A later Whiskey scene finds Shiki already deep into a long farming session while ed discovers the mechanic around it and eventually lands on `Sorry Shiki :lul:`. The exact game-action chain remains unresolved; the safer read is task-oriented proximity with Shiki functioning as the stubbornly present center of the bit.",
    },
    {
      name: "Mugen",
      note:
        "Mugen still deliberately includes Shiki in the August 2026 old-member Whiskey summon chain. That preserves Shiki in the group's long memory; it does not claim Shiki answered, attended, or returned to active UL life.",
      href: "/characters/mugen",
    },
  ],
  quotes: [],
  claims: [
    "In the surviving 2021 Whiskey material, Shiki's strongest person-shaped contradiction is low verbal visibility alongside stubborn activity presence: Cece notices that Shiki does not talk to her, while a later scene notices Shiki farming for hours.",
    "Cece's complaint makes Shiki's silence relational. The useful read is not that Shiki is shy or antisocial; it is that somebody who expects or wants more exchange notices when Shiki does not provide it.",
    "The later farming scene keeps Shiki visible through duration rather than prose. Shiki's participation can register through persistence even when somebody else's discovery and reaction supply most of the dialogue.",
    "Mugen's 2026 reunion summon preserves Shiki as an old name worth calling back years later, but no response or return is inferred from the tag alone.",
  ],
  antiFanon: [
    "Shiki is kept separate from Shk / Tomoe and ShiyaX. Similar names, `Sensei`, exporter roles, and bot-action display strings are not identity bridges.",
    "Do not turn the current receipts into personality diagnoses such as shy, antisocial, mysterious, absent, or inactive. The supported read is narrower: low conversational output can coexist with conspicuous ongoing activity.",
    "The exact May farming mechanics, who initiated what, whether Shiki instructed ed, and what the apology targeted remain unresolved.",
    "Mugen's 2026 summon proves deliberate recall of Shiki's name, not that Shiki answered, attended, rejoined, or resumed active UL life.",
  ],
};

if (shikiIndex >= 0) {
  const current = allCharacters[shikiIndex] as ExtendedCharacter;
  allCharacters[shikiIndex] = {
    ...current,
    ...shikiSeed,
    aliases: unique([...(current.aliases ?? []), ...(shikiSeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(shikiSeed.tags ?? [])]),
    relationships: [...(current.relationships ?? []), ...(shikiSeed.relationships ?? [])],
    quotes: unique([...(current.quotes ?? []), ...(shikiSeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(shikiSeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(shikiSeed.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(shikiSeed);
}

characterById.set(shikiId, allCharacters.find((character) => character.id === shikiId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(shikiId)) {
  archiveCastGroup.characterIds.push(shikiId);
}
