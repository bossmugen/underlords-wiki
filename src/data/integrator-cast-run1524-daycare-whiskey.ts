import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const add = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);
const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  addition: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === addition.name);
  if (index >= 0) relationships[index] = addition;
  else relationships.push(addition);
};

// Daycare support-room deepener: canonical Woosung / WOO only.
const wooStableId = "454708201615523871";
const wooIndex = allCharacters.findIndex(
  (character) => character.id === "woosung" || (character as ExtendedCharacter).stableDiscordIds?.includes(wooStableId),
);
if (wooIndex < 0) {
  throw new Error("Run 1524 expected canonical Woosung / WOO; refusing to create a duplicate owner.");
}

const woo = allCharacters[wooIndex] as ExtendedCharacter;
const wooRelationships = [...(woo.relationships ?? [])];
upsertRelationship(wooRelationships, {
  name: "Anthos",
  href: "/characters/anthos",
  note:
    "Their September 2020 Club Only rhythm can pivot from mock combat to affection theater without a setup meeting: WOO aims `eli kill` at Anthos; Anthos answers 23.745 seconds later with `eli glomp @WOO`. Minutes later WOO repeatedly calls `ANTHOS`, Anthos answers `mhm`, and WOO keeps the bit alive in all caps. The nearby `I found someone to simp` sits in the same sequence but does not explicitly tag Anthos and stays game/joke context rather than romance canon.",
});

allCharacters[wooIndex] = {
  ...woo,
  stableDiscordIds: add(woo.stableDiscordIds, [wooStableId]),
  tags: add(woo.tags, ["Mock-combat bits", "Affection theater", "Anthos", "Petty Crimes"]),
  relationships: wooRelationships,
  quotes: add(woo.quotes, ["eli kill @Anthos", "ANTHOS", "WHEN THEY BREATHE", "THE DETAILS"]),
  claims: add(woo.claims, [
    "A September 30, 2020 Club Only cluster gives WOO a clean mock-combat-to-affection rhythm with Anthos: WOO sends `eli kill @Anthos`; Anthos sends `eli glomp @WOO` 23.745 seconds later; later WOO repeatedly summons Anthos and escalates the shared bit in all caps after Anthos answers `mhm`.",
    "The cumulative character value is contradiction rather than a romance label: WOO can use combative command language as an invitation to reciprocal campy affection, and Anthos understands the register quickly enough to flip it without explanation.",
  ]),
  antiFanon: add(woo.antiFanon, [
    "The September 2020 `kill` / `glomp` / `simp` cluster is bot-action and social-play language, not literal violence, romance, sex, exclusivity, or relationship rank.",
    "`I found someone to simp` contains no explicit Anthos mention in that sentence. Anthos is only the probable immediate contextual referent, and the broader exchange is game/joke context.",
    "Bot hug/glomp counters are aggregate account totals, not Anthos↔WOO pair statistics.",
  ]),
} as ExtendedCharacter;
characterById.set("woosung", allCharacters[wooIndex]);

// Whiskey support-room deepener: the stable account and existing canonical owner
// resolve whoamii_9 / Drink water reminder as Gabu. The `gabu who` / `im gabriel`
// lines are jokes and are not used to establish that identity.
const gabuStableId = "407706805918105602";
const gabuIndex = allCharacters.findIndex(
  (character) => character.id === "gabu" || (character as ExtendedCharacter).stableDiscordIds?.includes(gabuStableId),
);
if (gabuIndex < 0) {
  throw new Error("Run 1524 expected canonical Gabu owner; refusing to create whoamii_9 as a second person.");
}

const gabu = allCharacters[gabuIndex] as ExtendedCharacter;
allCharacters[gabuIndex] = {
  ...gabu,
  aliases: add(gabu.aliases, ["whoamii_9", "Drink water reminder"]),
  stableDiscordIds: add(gabu.stableDiscordIds, [gabuStableId]),
  tags: add(gabu.tags, ["Lobby", "Low-friction host", "Practical translator", "Bureaucracy With XD", "Petty Crimes"]),
  quotes: add(gabu.quotes, [
    "your char name XD",
    "Dm always open bb HAHAHAHA :Hehe: :smug:",
  ]),
  claims: add(gabu.claims, [
    "Stable Discord account 407706805918105602 / whoamii_9 / period nickname `Drink water reminder` is the canonical Gabu owner. The identity is anchored independently of the account's playful `gabu who` / `im gabriel` lines.",
    "Across repeated Lobby scenes from September 2020 through June 2021, Gabu does the small practical work that gets newcomers through the door: asks for the needed IGN/club information, translates `IGN` as `your char name XD` when someone does not understand it, confirms role assignment, and points people toward the Discord tour/server map.",
    "The recurring style is low-friction competence rather than bureaucracy. Gabu keeps `XD`, `uwu`, `bb`, hearts, celebration and direct welcomes inside the same messages that are doing real procedural work.",
    "Wall provides the useful counterweight: the same account is fully comfortable in room nonsense and teasing. Gabu can keep a process moving without switching into a sterile institutional voice once the room gets silly.",
  ]),
  antiFanon: add(gabu.antiFanon, [
    "The 2020–2021 Lobby scenes establish lived onboarding behavior, not the date of any Officer or Underboss appointment and not exclusive ownership of the intake process.",
    "`gabu who` / `im gabriel` is public identity-play from Gabu's already-resolved stable account. Do not promote Gabriel into a canonical alias or reopen Gabu's identity from the joke itself.",
    "The Wall `dom` jokes are social banter. Do not infer sexuality, sexual preference, romance, or a specific target where the surviving rows do not mechanically identify one.",
    "`Dm always open bb` is a serialized Reply whose referenced-message target is not safely exposed in this packet; keep it person-level rather than assigning a named relationship.",
  ]),
} as ExtendedCharacter;
characterById.set("gabu", allCharacters[gabuIndex]);
