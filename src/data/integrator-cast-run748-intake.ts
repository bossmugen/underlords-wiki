import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Run 748: hard-canon reconciliation matters before the fun part. The miner's
// handoff repeatedly labels stable 459696170759880745 / dragonrichard as "Rich",
// but the public canon lock is Ricochet / dragonrichard != Rich / DragonRich.
// Keep the new Corpse Husband receipt on Ricochet and do not leak it across that
// identity boundary merely because the later VC title contains "Richard".
const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex < 0) {
  throw new Error("Run 748 expected the canonical Ricochet / dragonrichard owner; refusing to create a duplicate.");
}

const ricochet = allCharacters[ricochetIndex] as ExtendedCharacter;
allCharacters[ricochetIndex] = {
  ...ricochet,
  tags: unique([...(ricochet.tags ?? []), "Corpse Husband", "Wall", "2020", "Callback rabbit"]),
  claims: unique([
    ...(ricochet.claims ?? []),
    "On 2020-12-29 Ricochet / `dragonrichard` posts a direct Corpse Husband Tenor on the Wall; nine seconds later Anthos answers `corpse daddy`. This is the earliest direct Corpse Husband reference currently surfaced by this intake, not a proven origin point.",
    "The later voice-room export title `Richard's Corpse On A Cooch` is now a notably suggestive collision because `dragonrichard` appears in an earlier Corpse Husband scene, but no surviving receipt yet proves naming ancestry, a rename date, the renamer, an intermediate title, or where `cooch` entered the name.",
  ]),
  antiFanon: unique([
    ...(ricochet.antiFanon ?? []),
    "Ricochet / `dragonrichard` is not Rich / DragonRich. The 2020 Corpse Husband post belongs to Ricochet even though the miner handoff called the account Rich.",
    "Do not turn Ricochet's 2020 Corpse Husband post into the origin or naming proof for `Richard's Corpse On A Cooch`. The semantic collision is public-worthy context; the genealogy remains unresolved.",
  ]),
} as ExtendedCharacter;
characterById.set("ricochet", allCharacters[ricochetIndex]);

// Woohyuk's line is useful because the joke lands as shorthand: Gilli tags him,
// he answers with a performance cue, and Bailey recognizes the cue later without
// anybody stopping to define it. Keep the social legibility; do not invent audio.
const woohyukIndex = allCharacters.findIndex((character) => character.id === "woohyuk");
if (woohyukIndex < 0) {
  throw new Error("Run 748 expected the canonical Woohyuk owner; refusing to create a duplicate.");
}

const woohyuk = allCharacters[woohyukIndex] as ExtendedCharacter;
allCharacters[woohyukIndex] = {
  ...woohyuk,
  tags: unique([...(woohyuk.tags ?? []), "Corpse voice", "Performance shorthand", "Wall", "2021"]),
  quotes: unique([...(woohyuk.quotes ?? []), "In corpse voice uwu"]),
  claims: unique([
    ...(woohyuk.claims ?? []),
    "On 2021-04-21 Gilli posts an uninspected Discord screenshot, tags Woohyuk, and Woohyuk answers `In corpse voice uwu`. About thirteen minutes later Bailey_Babe writes `Did I hear corpse voice 👀`. The pocket supports `corpse voice` as socially legible shorthand by that date; Bailey's line is a later default message, not a structural Reply edge.",
    "2021-04-21 is the earliest surviving exact `corpse voice` phrase currently surfaced by this intake, not a proven origin and not the first surviving Corpse Husband reference: Ricochet's 2020 Wall post predates it.",
  ]),
  antiFanon: unique([
    ...(woohyuk.antiFanon ?? []),
    "Woohyuk `282643269438144513 / ash_island` is not WOO `_woo_woo` `454708201615523871` absent an explicit bridge.",
    "`Screenshot_20210421-231259_Discord.jpg` is POSTED BY Gilli only. Its pixels were not inspected; MADE BY / CAPTURED BY / FEATURING remain unresolved.",
    "`In corpse voice uwu` is a typed performance cue. It does not establish what Woohyuk's real voice sounded like or prove that anybody was in voice chat at that moment.",
  ]),
} as ExtendedCharacter;
characterById.set("woohyuk", allCharacters[woohyukIndex]);
