import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

// Run 736 Whiskey: t7morrow is a thin but unusually coherent 2020 person shard.
// Keep the visible dossier about the person; selection/provenance cautions stay backstage.
const t7Id = "t7morrow";
const t7Index = allCharacters.findIndex((character) => character.id === t7Id);

const t7Character: ExtendedCharacter = {
  id: t7Id,
  name: "t7morrow",
  aliases: [],
  billing: "legacy",
  role: "Archive-era Whiskey cast",
  era: "2020",
  logline:
    "One foot near the exit, one hand on the punchline. t7morrow keeps announcing some version of departure, innocence, or selective blindness and then staying just long enough to supply the next line: visit gamenight, walk out through emoji, review what was witnessed anyway.",
  tags: [
    "Archive cast",
    "Whiskey",
    "2020",
    "Observational comedy",
    "Gamenight",
    "Petty Crimes",
  ],
  relationships: [],
  quotes: [
    "leaving 😫",
    "where is @douxjinn this mans is dead",
    "im a CHILD to you guys🤧🤧",
    "finna play Mario kart in the roads 🥰",
    "pedestrians? I only see item boxes 🚶‍♂️🚶‍♀️",
    "just wanted to see what gamenight was like 😳 have fun y'all 😌",
    "🚪 🚶 ⬅️",
    "doux was right about s10 being full of horndogs 😃",
    "👨‍🦯 i dont see any of this...",
  ],
  claims: [
    "The current assigned Whiskey media-bearing lane contains 17 distinct t7morrow-authored messages across seven active dates from 2020-08-15 through 2020-11-27; thirteen are concentrated across August 15-18.",
    "Across the strongest August scenes, t7morrow repeatedly turns performed retreat or distance into part of participation: `leaving 😫`, a polite gamenight sign-off, an emoji walk-out, then post-exit commentary minutes later.",
    "On August 15, t7morrow explicitly notices `@douxjinn` is absent. Two days later `doux was right...` is a likely local callback to the same person, but the shorter name is not technically identity-bridged here.",
    "The `im a CHILD to you guys` line is comparative joke language in a scene where t7morrow immediately escalates a Mario Kart road bit; it is used as a mock-innocent-observer contradiction, not as an age fact.",
  ],
  antiFanon: [
    "The surviving lane is media-selected and is not t7morrow's complete Whiskey voice, join chronology, disappearance chronology, or full-server activity measure.",
    "`doux` is only a probable callback to `douxjinn` in this pass. Similar names alone do not create a hard identity bridge or closeness rank.",
    "`im a CHILD to you guys` is not an age receipt.",
    "`finna play Mario kart in the roads` and `pedestrians? I only see item boxes` are a joke sequence, not a literal dangerous-driving admission.",
    "The bot-bank complaint is explicitly bot-economy play and is not a real-world finance claim.",
    "`horndogs` is t7morrow's joking characterization of the room atmosphere, not evidence of real sexual conduct or relationships.",
    "Attachment-only posts in September and November remain POSTED BY t7morrow only until the exact pixels are independently inspected for any further attribution or content claim.",
  ],
};

if (t7Index >= 0) {
  const current = allCharacters[t7Index] as ExtendedCharacter;
  allCharacters[t7Index] = {
    ...current,
    ...t7Character,
    aliases: appendUnique(current.aliases, t7Character.aliases ?? []),
    tags: appendUnique(current.tags, t7Character.tags ?? []),
    quotes: appendUnique(current.quotes, t7Character.quotes ?? []),
    claims: appendUnique(current.claims, t7Character.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, t7Character.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(t7Character);
}
characterById.set(t7Id, allCharacters.find((character) => character.id === t7Id)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(t7Id)) {
  archiveCastGroup.characterIds.push(t7Id);
}
