import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);

const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
if (mimiIndex < 0) {
  throw new Error("Run 1392 Daycare expected the canonical Mimi owner; refusing to create or merge identities.");
}

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
const existingDescription = mimi.description ?? mimi.logline;
const mimiNext: ExtendedCharacter = {
  ...mimi,
  description:
    `${existingDescription} Away from Screenshot Court, she can also be almost disarmingly specific about ordinary things: in 2021 she says she has never been camping and immediately starts helping build the camping fantasy anyway, while Academy chatter has her matter-of-factly describing herself as mainly a PvE player, a warrior, and not especially used to mage classes. The softer register is not a different person; it is what Mimi looks like when the room gives her something practical instead of somebody to file.`,
  logline:
    "Warm steward, delighted filer, and very willing joiner: Mimi can greet newcomers, feed Screenshot Court, admit she has never been camping and immediately yell `CAMPING TRIP WHEN`, then talk game preferences with zero ceremony — mainly PvE, warrior, mage classes still a little outside the comfort zone.",
  tags: appendUnique(mimi.tags, [
    "Daycare",
    "Lobby",
    "LC Academy",
    "PvE",
    "Warrior",
    "Camping enthusiasm",
    "GIF humor",
    "Petty Crimes",
  ]),
  quotes: appendUnique(mimi.quotes, [
    "never been camping",
    "CAMPING TRIP WHEN",
    "i really only do pve",
    "bit of everything, but mainly pve",
    "g yeah warrior",
    "Notnused to the mage classes",
    "Tyyy",
    "I'm proud of this",
    "They are hyping you up @Luchora>ᗜ<",
  ]),
  claims: appendUnique(mimi.claims, [
    "Run 1392 corrects the Daycare miner's stale identity label: stable account 783389804079349800 is Mimi / Opalite Honey, not Mia. Mia remains the separate stable account 439628808545632256.",
    "In 2021 Lobby chatter Mimi says she has `never been camping`, then immediately joins the social planning with `CAMPING TRIP WHEN`, booze/sushi suggestions, and a sake line. The useful read is enthusiasm despite no prior camping experience, not proof that the trip happened or that alcohol is a durable personal preference.",
    "In reviewed 2021 LC Academy chatter Mimi says she does a bit of everything but mainly PvE, identifies warrior as her class, and says she is not used to mage classes. These are scene-era game preferences rather than permanent class locks.",
    "When Pako-Diseased publicly says `I blame @Opalite Honey` in 2022, Mimi answers about six seconds later with `Tyyy` and `I'm proud of this`, a compact example of turning public blame into an award without resolving what the blame was for.",
    "A 2023 Lobby pocket adds situational GIF humor and a small hype gesture toward Luchora: Mimi posts a rapid skateboard-wipeout GIF sequence and later says `They are hyping you up @Luchora>ᗜ<` around Boblin dancing GIFs.",
    "Petty Crimes: never camped, immediately tried to get the camping trip on the calendar anyway; mainly PvE in the reviewed 2021 game pocket; accepts unexplained public blame with `Tyyy` / `I'm proud of this`.",
  ]),
  antiFanon: appendUnique(mimi.antiFanon, [
    "Mimi remains distinct from Mia. Stable account 783389804079349800 / Opalite Honey belongs to Mimi; stable account 439628808545632256 belongs to Mia. Similar or stale miner labels do not bridge them.",
    "The camping conversation does not establish that a camping trip occurred. The sake/booze lines do not establish nationality or a durable alcohol preference.",
    "Mimi's 2021 PvE / warrior / mage-comfort comments are time-bounded player preferences, not permanent build, role, or appointment chronology.",
    "The 2023 GIF objects are POSTED BY Mimi. MADE BY, CAPTURED BY, and FEATURING remain unresolved unless separately supported.",
    "Pako-Diseased's blame line does not establish what Mimi was being blamed for; only Mimi's pleased reaction is safe to characterize.",
    "Earliest surviving Daycare or Academy appearances in this packet do not establish origin, join date, or first participation.",
  ]),
};

allCharacters[mimiIndex] = mimiNext;
characterById.set("mimi", mimiNext);
