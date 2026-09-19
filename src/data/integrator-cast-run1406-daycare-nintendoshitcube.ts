import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Hard identity repair: NintendoShitcube is Zoshaa, not a second person.
// Keep the archive-era Nintendo voice on Zoshaa's canonical Platelet owner.
const id = "zoshaa";
const index = allCharacters.findIndex((character) => character.id === id);
if (index < 0) {
  throw new Error("Run 1408 expected canonical Zoshaa; refusing to create a separate NintendoShitcube person.");
}
const previous = allCharacters[index] as ExtendedCharacter;

const relationships = [...(previous.relationships ?? [])];
const upsertRelationship = (name: string, note: string, href?: string) => {
  const relationshipIndex = relationships.findIndex((relationship) => relationship.name === name);
  const nextRelationship = href ? { name, note, href } : { name, note };
  if (relationshipIndex >= 0) relationships[relationshipIndex] = nextRelationship;
  else relationships.push(nextRelationship);
};

upsertRelationship(
  "Ricochet",
  "When Ricochet becomes the subject of room chatter, Zoshaa can compress the social weather into short instructions — `Quiet @everyone`, `Don’t link, just leave it`, `It’s a one person show` — and then offer the blunt personal read that `He’s known to intimidate`. The useful relationship texture is contextual familiarity with the situation, not authority over Ricochet and not an objective verdict on him.",
  "/characters/ricochet",
);
upsertRelationship(
  "Anayss",
  "Anayss can summon Zoshaa's NintendoShitcube-era persona with almost no setup as `the c h i l d ~`, joke that Nintendo would help `hide our whaling`, and get the reputation validated when Zoshaa answers `Screaming is what I do best😎😎😎`. The rhythm is fluent teasing plus willing escalation, not wrongdoing or family rank.",
  "/characters/anayss",
);
upsertRelationship(
  "Snow",
  "Snow can step into the same noise script with `~mutes the child~` after Zoshaa proudly announces the screaming specialty. Zoshaa's role in the bit is collaborative rather than defensive: the room labels the noise and Zoshaa feeds it.",
  "/characters/snow",
);

const next: ExtendedCharacter = {
  ...previous,
  id,
  name: "Zoshaa",
  aliases: unique([...(previous.aliases ?? []), "NintendoShitcube", "nintendoshitcube_"]),
  stableDiscordIds: unique([...(previous.stableDiscordIds ?? []), "703429467082719344"]),
  billing: previous.billing,
  role: previous.role,
  era: previous.era,
  logline:
    "Platelet whose NintendoShitcube era can reduce a messy room to three useful sentences and then become the noise complaint personally: Zoshaa gets child-framed by peers, advertises the screaming, mock-threatens the elderly, and serves cursed wholesome nonsense with complete confidence.",
  tags: unique([
    ...(previous.tags ?? []),
    "Platelet",
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
    ...(previous.quotes ?? []),
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
    ...(previous.claims ?? []),
    "Hard project canon resolves NintendoShitcube / nintendoshitcube_ as historical aliases of Zoshaa, so stable Discord account 703429467082719344 and this Daycare/Lobby/Wall packet belong to the canonical Zoshaa owner rather than a duplicate person page.",
    "Zoshaa repeatedly compresses messy live context into short summaries or instructions, but will also say `I don’t even know what they are doing` when the available context runs out instead of pretending omniscience.",
    "A Fall Guys exploit retelling starts as a compact hypothetical and then detonates into all-caps commentary when the moderator joins the exploit, giving the same person both briefing voice and chaos-broadcast voice.",
    "Anayss and Snow both participate in a recurring child/noise script around Zoshaa's Nintendo-era voice; `Screaming is what I do best😎😎😎` turns the peer caricature into self-aware collaborative performance rather than a one-way label.",
    "Petty Crimes: Zoshaa can pair mock menace with cursed-wholesome absurdity — `I ain’t afraid to hit the elderly` on one side, boiled mayo shared with an orb on the other — without either line becoming literal biography.",
  ]),
  antiFanon: unique([
    ...(previous.antiFanon ?? []),
    "NintendoShitcube is Zoshaa under hard project canon. Do not create or preserve a separate NintendoShitcube character owner from this archive packet.",
    "Zoshaa's `He’s known to intimidate` is a direct social read of Ricochet in that local conversation, not an objective canon finding about Ricochet's behavior everywhere.",
    "The `:nintendoshitcube:` custom emoji is not identity, authorship, or appointment evidence by itself; the identity bridge comes from hard project canon plus the stable-account archive work.",
    "Anayss / Snow calling Zoshaa `the child` is social joke-language in these scenes. Zoshaa is independently a canon Platelet; do not use these jokes to manufacture an exact age, kinship, or a formal Daycare role.",
    "The `hide our whaling` line is a joke scenario, not evidence of wrongdoing. The boiled-mayo line is absurdist language, not proof of actual food preference. An unidentified long-neck animal remains unidentified because the preceding media was not inspected.",
    "The Fall Guys story is an authored retelling. It does not establish ownership of any game account, exploit participation, moderation status, or a separate in-game identity for Zoshaa.",
    "References to Gren and Galahad are planning-context references only and do not establish relationship closeness, hierarchy, or responsibility for their choices.",
    "Stable account 459696170759880745 belongs to Ricochet / dragonrichard in current hard identity canon. Miner shorthand that calls that account `Rich` does not merge Ricochet with the separate Rich / DragonRich owner.",
    "Any nearby attachment establishes POSTED BY only unless independent support earns MADE BY, CAPTURED BY, or FEATURING. q9 remains retrieval-limited.",
  ]),
};

allCharacters[index] = next;
characterById.set(id, next);

// Same Daycare tail advances the Funcle / food-care role for stable account
// 459696170759880745. Current hard canon files that account under Ricochet /
// dragonrichard, separate from Rich / DragonRich, so miner `Rich` shorthand is
// corrected here rather than allowed to contaminate the canonical Rich owner.
const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex < 0) {
  throw new Error("Run 1406 expected the canonical Ricochet owner; refusing to route stable-459 Funcle material into Rich.");
}

const ricochet = allCharacters[ricochetIndex] as ExtendedCharacter;
const ricochetNext: ExtendedCharacter = {
  ...ricochet,
  stableDiscordIds: unique([...(ricochet.stableDiscordIds ?? []), "459696170759880745"]),
  tags: unique([...(ricochet.tags ?? []), "Funcle", "Food-care bit", "Cross-channel role language"]),
  quotes: unique([
    ...(ricochet.quotes ?? []),
    "If you drink water while eating dessert then yes @RΣN I support but then you get no ramen for dinner instead :3058_homu_brb:",
  ]),
  claims: unique([
    ...(ricochet.claims ?? []),
    "By September 2021, Ren can use `Funcle rich` on Wall without explanation about stable account 459696170759880745 / Ricochet; in August 2022 Ricochet carries the food-care side of the same social role into Wall by making dessert conditional on water and threatening to revoke ramen dinner instead.",
    "The useful continuity is that both role-language and behavior travel across UL spaces: the Funcle bit is not only Daycare-local, even though Daycare remains one important venue for it.",
  ]),
  antiFanon: unique([
    ...(ricochet.antiFanon ?? []),
    "`Funcle`, `100+ nephews`, and related family wording are joke-family / lived social-role language, not literal kinship, a literal nephew count, or a formal title.",
    "This packet belongs to Ricochet / dragonrichard, stable account 459696170759880745. Miner shorthand calling that account `Rich` does not merge Ricochet with the separate Rich / DragonRich owner.",
    "The September 2021 Wall hit is an early surviving cross-channel floor, not the guaranteed origin of `Funcle` language.",
  ]),
};
allCharacters[ricochetIndex] = ricochetNext;
characterById.set("ricochet", ricochetNext);
