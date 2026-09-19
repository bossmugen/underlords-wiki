import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(note) ? current.note : `${current.note} ${note}`,
      ...(href ? { href } : {}),
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

// Run 1401 Daycare: Zhēnxī's expert bit is funniest because she keeps kneecapping it herself.
const zhenxiIndex = allCharacters.findIndex((character) => character.id === "zhenxi");
if (zhenxiIndex < 0) {
  throw new Error("Run 1401 expected the existing Zhēnxī owner; refusing to create a duplicate person.");
}

const zhenxi = allCharacters[zhenxiIndex] as ExtendedCharacter;
const zhenxiRelationships = [...(zhenxi.relationships ?? [])];
upsertRelationship(
  zhenxiRelationships,
  "Rummy",
  "Their class-registration pocket has the same easy peer texture as the Wall affection: Rummy admits she forgot to register for 1SS, Zhēnxī immediately jokes `Pay me, I tutor u`, and the conversation keeps moving without anybody treating the line like a formal teaching offer.",
  "/characters/rummy",
);
upsertRelationship(
  zhenxiRelationships,
  "Woohyuk",
  "Woohyuk can ask what to learn for 2SS/3SS and get real experience wrapped in Zhēnxī's favorite anti-expert packaging: she says she already learned her 3SS, then promptly announces `But I am noob :sadge:`. It reads as peer learning banter, not a teacher/student role.",
  "/characters/woohyuk",
);

const zhenxiNext: ExtendedCharacter = {
  ...zhenxi,
  aliases: unique([...(zhenxi.aliases ?? []), "zhenxiii", "The Mandarin Duck"]),
  stableDiscordIds: unique([...(zhenxi.stableDiscordIds ?? []), "702968421033312275"]),
  logline:
    "Wall defendant turned occasional prosecutor who handles expertise the same way she handles embarrassment: with theater and self-sabotage. Zhēnxī can offer `Pay me, I tutor u`, rave that class was `so gucci`, say she already learned her 3SS, then immediately insist `I am noob` like the podium personally offended her.",
  tags: unique([
    ...(zhenxi.tags ?? []),
    "Daycare",
    "Peer learning",
    "Self-undercutting expert bit",
    "Class chatter",
    "Petty Crimes",
  ]),
  relationships: zhenxiRelationships,
  quotes: unique([
    ...(zhenxi.quotes ?? []),
    "Pay me, I tutor u",
    "That class was so gucci",
    "I already learned my 3ss",
    "But I am noob :sadge:",
  ]),
  claims: unique([
    ...(zhenxi.claims ?? []),
    "On December 30, 2020, Rummy tells Zhēnxī she forgot to register for 1SS; Zhēnxī answers `Pay me, I tutor u`, later praises the class and instructor, and says she should do 1SS next semester.",
    "In the same Daycare pocket, Woohyuk asks about learning 2SS/3SS. Zhēnxī says she already learned her 3SS and immediately undercuts the expert pose with `But I am noob :sadge:`.",
    "Zhēnxī and Rummy also recognize a recurring guild-hunt annoyance around an unresolved `Mr Streamer`; that local recognition supports shared behavioral context without resolving his canonical identity.",
  ]),
  antiFanon: unique([
    ...(zhenxi.antiFanon ?? []),
    "`Pay me, I tutor u` is peer banter. It does not establish paid tutoring, a formal teaching role, employment, or an instructor/student hierarchy.",
    "`The Mandarin Duck` / Rummy's `Mandarin` address belongs to Zhēnxī in this pocket; it is not a second person.",
    "The canonical identity of `Mr Streamer` remains unresolved. Do not identify him from similar handles, guild context, or later role arrays.",
    "The December 2020 Daycare pocket is surviving evidence, not an origin claim for Zhēnxī's friendships, class history, or game expertise.",
  ]),
};
allCharacters[zhenxiIndex] = zhenxiNext;
characterById.set("zhenxi", zhenxiNext);

// Run 1401 Wall: Oyasumi is surprised the courthouse is alive while actively participating in it.
const oyasumiId = "oyasumi";
const oyasumiIndex = allCharacters.findIndex((character) => character.id === oyasumiId);
const oyasumiPrevious = oyasumiIndex >= 0 ? (allCharacters[oyasumiIndex] as ExtendedCharacter) : undefined;
const oyasumi: ExtendedCharacter = {
  ...(oyasumiPrevious ?? {}),
  id: oyasumiId,
  name: "Oyasumi",
  aliases: unique([...(oyasumiPrevious?.aliases ?? []), "oyasumi.4"]),
  stableDiscordIds: unique([...(oyasumiPrevious?.stableDiscordIds ?? []), "826043030534881310"]),
  billing: oyasumiPrevious?.billing ?? "guest",
  role: oyasumiPrevious?.role ?? "Archive-era Wall participant",
  era: oyasumiPrevious?.era ?? "2022+",
  logline:
    "Oyasumi returns to Screenshot Court sounding genuinely baffled that the courthouse is even open — `How tf you ppl take my screenshot`, `Where did I post dat`, `I thought this place ded` — and then posts attachments anyway. Losing track of the Wall's activity does not stop Oyasumi from becoming part of it the moment the room wakes up.",
  tags: unique([
    ...(oyasumiPrevious?.tags ?? []),
    "Archive cast",
    "Wall",
    "Venue surprise",
    "Receipt filer",
    "Compact reactions",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(oyasumiPrevious?.quotes ?? []),
    "How tf you ppl take my screenshot",
    "Where did I post dat",
    "I thought this place ded",
    "When did you guys become active",
    "L",
  ]),
  claims: unique([
    ...(oyasumiPrevious?.claims ?? []),
    "The reviewed Wall account is stable Discord ID 826043030534881310 / source username `oyasumi.4`; an underscore seen in some rendered rows is display decoration, not a second person.",
    "Across May 13–19, 2022, Oyasumi both posts attachments and repeatedly expresses surprise that the Wall is active enough to screenshot people. The contradiction is participation plus venue-surprise, not disengagement.",
    "Post-February-2023 exact-handle attachment probes were sampled-negative across the searched rounds; that is retrieval-limited silence, not proof of global absence, departure, or inactivity.",
  ]),
  antiFanon: unique([
    ...(oyasumiPrevious?.antiFanon ?? []),
    "Do not substitute the provisional older ID 217715709236559872 for Oyasumi's reviewed stable ID 826043030534881310.",
    "Oyasumi's May 2022 attachments were not visually inspected. POSTED BY Oyasumi does not establish MADE BY, CAPTURED BY, or FEATURING.",
    "`I thought this place ded` describes Oyasumi's perception of Wall activity in that moment. It does not establish channel shutdown, UL inactivity, or Oyasumi's own absence from the community.",
    "The sampled q9 searches are retrieval-limited and must not be converted into a global latest-appearance or departure claim.",
  ]),
};

if (oyasumiIndex >= 0) allCharacters[oyasumiIndex] = oyasumi;
else allCharacters.push(oyasumi);
characterById.set(oyasumiId, oyasumi);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(oyasumiId)) {
  archiveCastGroup.characterIds.push(oyasumiId);
}
