import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const id = "nintendoshitcube";
const index = allCharacters.findIndex((character) => character.id === id);
const previous = index >= 0 ? (allCharacters[index] as ExtendedCharacter) : undefined;

const relationships = [...(previous?.relationships ?? [])];
const upsertRelationship = (name: string, note: string, href?: string) => {
  const relationshipIndex = relationships.findIndex((relationship) => relationship.name === name);
  const nextRelationship = href ? { name, note, href } : { name, note };
  if (relationshipIndex >= 0) relationships[relationshipIndex] = nextRelationship;
  else relationships.push(nextRelationship);
};

upsertRelationship(
  "Rich",
  "When Rich becomes the subject of room chatter, NintendoShitcube can compress the social weather into short instructions — `Quiet @everyone`, `Don’t link, just leave it`, `It’s a one person show` — and then offer the blunt personal read that `He’s known to intimidate`. The useful relationship texture is contextual familiarity with the situation, not authority over Rich and not an objective verdict on him.",
  "/characters/rich",
);
upsertRelationship(
  "Anayss",
  "Anayss can summon Nintendo with almost no setup as `the c h i l d ~`, joke that Nintendo would help `hide our whaling`, and get the reputation validated when Nintendo answers `Screaming is what I do best😎😎😎`. The rhythm is fluent teasing plus willing escalation, not literal age, wrongdoing, or family rank.",
  "/characters/anayss",
);
upsertRelationship(
  "Snow",
  "Snow can step into the same noise script with `~mutes the child~` after Nintendo proudly announces the screaming specialty. Nintendo's role in the bit is collaborative rather than defensive: the room labels the noise and Nintendo feeds it.",
  "/characters/snow",
);

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id,
  name: "NintendoShitcube",
  aliases: unique([...(previous?.aliases ?? []), "NintendoShitcube"]),
  stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), "703429467082719344"]),
  billing: previous?.billing ?? "guest",
  role: previous?.role ?? "Archive-era Daycare / Lobby participant",
  era: previous?.era ?? "2020–2022+",
  logline:
    "A blunt little social-weather station who can reduce a messy room to three useful sentences, then become the noise complaint personally. Peers can cast Nintendo as `the child`; Nintendo answers by advertising the screaming, mock-threatening the elderly, and serving cursed wholesome nonsense with complete confidence.",
  tags: unique([
    ...(previous?.tags ?? []),
    "Archive cast",
    "Daycare",
    "Lobby",
    "Wall",
    "Situation summarizer",
    "Live commentary",
    "Collaborative chaos",
    "Child-framed joke",
    "Noise specialist",
    "Absurdist language",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(previous?.quotes ?? []),
    "Quiet @everyone",
    "Don’t link, just leave it",
    "It’s a one person show",
    "He’s known to intimidate",
    "I don’t even know what they are doing.",
    "Everyone is bullying me now >_>",
    "Screaming is what I do best😎😎😎",
    "I ain’t afraid to hit the elderly",
    "I’d share a refreshing glass of boiled mayo with my orb any day ᵘ ʷ ᵘ",
  ]),
  claims: unique([
    ...(previous?.claims ?? []),
    "Stable Discord account 703429467082719344 is the reviewed NintendoShitcube owner across the assigned support work, with direct voice spanning the August 2020 Daycare / Lobby pocket and later continuity through 2022.",
    "NintendoShitcube repeatedly compresses messy live context into short summaries or instructions, but will also say `I don’t even know what they are doing` when the available context runs out instead of pretending omniscience.",
    "A Fall Guys exploit retelling starts as a compact hypothetical and then detonates into all-caps commentary when the moderator joins the exploit, giving the same person both briefing voice and chaos-broadcast voice.",
    "Anayss and Snow both participate in a recurring child/noise script around Nintendo; Nintendo's own `Screaming is what I do best😎😎😎` turns the peer caricature into self-aware collaborative performance rather than a one-way label.",
    "Petty Crimes: Nintendo can pair mock menace with cursed-wholesome absurdity — `I ain’t afraid to hit the elderly` on one side, boiled mayo shared with an orb on the other — without either line becoming literal biography.",
  ]),
  antiFanon: unique([
    ...(previous?.antiFanon ?? []),
    "NintendoShitcube's `He’s known to intimidate` is NintendoShitcube's direct social read of Rich in that local conversation, not an objective canon finding about Rich's behavior everywhere.",
    "The `:nintendoshitcube:` custom emoji is not identity, authorship, or appointment evidence by itself; this dossier is anchored to stable account 703429467082719344 and direct authored text.",
    "Anayss / Snow calling Nintendo `the child` is social joke-language in these scenes, not independent proof of age, kinship, or a formal Daycare role.",
    "The `hide our whaling` line is a joke scenario, not evidence of wrongdoing. The boiled-mayo line is absurdist language, not proof of actual food preference. An unidentified long-neck animal remains unidentified because the preceding media was not inspected.",
    "The Fall Guys story is an authored retelling. It does not establish ownership of any game account, exploit participation, moderation status, or a separate in-game identity for NintendoShitcube.",
    "References to Gren and Galahad are planning-context references only and do not establish relationship closeness, hierarchy, or responsibility for their choices.",
    "Any nearby attachment establishes POSTED BY only unless independent support earns MADE BY, CAPTURED BY, or FEATURING. q9 remains retrieval-limited.",
  ]),
};

if (index >= 0) allCharacters[index] = next;
else allCharacters.push(next);
characterById.set(id, next);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(id)) {
  archiveCastGroup.characterIds.push(id);
}

// Same Daycare tail materially advances Rich's existing Funcle role beyond one room.
const canonicalRichIndex = allCharacters.findIndex((character) => character.id === "rich");
if (canonicalRichIndex < 0) {
  throw new Error("Run 1406 expected the canonical Rich owner; refusing to route Funcle material into a similar-name owner.");
}

const rich = allCharacters[canonicalRichIndex] as ExtendedCharacter;
const richNext: ExtendedCharacter = {
  ...rich,
  tags: unique([...(rich.tags ?? []), "Funcle", "Food-care bit", "Cross-channel role language"]),
  quotes: unique([
    ...(rich.quotes ?? []),
    "If you drink water while eating dessert then yes @RΣN I support but then you get no ramen for dinner instead :3058_homu_brb:",
  ]),
  claims: unique([
    ...(rich.claims ?? []),
    "By September 2021, Ren can use `Funcle rich` on Wall without explanation; in August 2022 Rich carries the food-care side of the same social role into Wall by making dessert conditional on water and threatening to revoke ramen dinner instead.",
    "The useful continuity is that both role-language and behavior travel across UL spaces: Funcle is not only a Daycare-local label, even though Daycare remains one important venue for the bit.",
  ]),
  antiFanon: unique([
    ...(rich.antiFanon ?? []),
    "`Funcle`, `100+ nephews`, and related family wording are joke-family / lived social-role language, not literal kinship, a literal nephew count, or a formal title.",
    "This material belongs to canonical Rich / DragonRich. A source or miner rendering `Ricochet` near stable Rich context does not merge Rich with the separate Ricochet owner under the resolved identity split.",
    "The September 2021 Wall hit is an early surviving cross-channel floor, not the guaranteed origin of `Funcle` language.",
  ]),
};
allCharacters[canonicalRichIndex] = richNext;
characterById.set("rich", richNext);
