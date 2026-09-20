import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);
const appendOnce = (base: string, addition: string, marker: string) => base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

const dayaIndex = allCharacters.findIndex((candidate) => candidate.id === "daya");
if (dayaIndex < 0) throw new Error("Run 1477 expected canonical Daya owner; refusing to create a duplicate person.");
const daya = allCharacters[dayaIndex] as ExtendedCharacter;
const dayaRelationships = [...(daya.relationships ?? [])];
upsertRelationship(
  dayaRelationships,
  "Ren",
  "Daycare catches another side of the same practical Daya: before logistics even need solving, the first move is often social reassurance. `its ok, one republic mid anyways`, `i support dessert for dinner tbh`, `u valid rv`, and `ignore the haters` all make the person feel fine before the room moves on.",
  "u valid rv",
  "/characters/ren",
);
upsertRelationship(
  dayaRelationships,
  "Rummy",
  "The same reassurance shorthand survives outside Daycare: when Rummy is getting clowned on the Wall, Daya's answer is basically social first aid — `LMAO DW RUMMY U VALID`.",
  "U VALID",
  "/characters/rummy",
);
allCharacters[dayaIndex] = {
  ...daya,
  logline: appendOnce(daya.logline, "The practical front-door fixer also has a tiny reassurance reflex: make somebody feel socially okay first, then let the logistics or joke continue.", "reassurance reflex"),
  tags: appendUnique(daya.tags, ["Reassurance reflex", "Social first aid"]),
  relationships: dayaRelationships,
  quotes: appendUnique(daya.quotes, [
    "i support dessert for dinner tbh",
    "u valid rv",
    "ignore the haters",
    "LMAO DW RUMMY U VALID",
  ]),
  claims: appendUnique(daya.claims, [
    "Across 2022–2023 Daycare/Lobby pockets, Daya repeatedly answers minor embarrassment or uncertainty with reassurance before logistics: `its ok, one republic mid anyways`, `i support dessert for dinner tbh`, `u valid rv`, `ignore the haters`, and later `its all good! give us one moment to assign roles`.",
    "A later Wall line to Rummy, `LMAO DW RUMMY U VALID`, makes `u valid` look like reusable Daya social shorthand rather than a one-off phrase.",
  ]),
  antiFanon: appendUnique(daya.antiFanon, [
    "One OneRepublic joke and one dessert-for-dinner line are Petty Crimes texture, not a comprehensive music or food profile.",
    "The Ren and Rummy reassurance pockets show lived warmth; they do not establish a closeness ranking.",
  ]),
} as ExtendedCharacter;
characterById.set("daya", allCharacters[dayaIndex]);

const shiyaIndex = allCharacters.findIndex((candidate) => candidate.id === "shiyax");
if (shiyaIndex < 0) throw new Error("Run 1477 expected canonical ShiyaX owner; refusing to create a duplicate person.");
const shiya = allCharacters[shiyaIndex] as ExtendedCharacter;
const shiyaRelationships = [...(shiya.relationships ?? [])];
upsertRelationship(
  shiyaRelationships,
  "Ghoulie",
  "The Whiskey room shows Shiya turning welcome into participation. `GHOULIE IN UL` becomes `YOU JOINING BB ?` eight seconds later; the energy is summon-first and warm, not bureaucratic recruitment language.",
  "YOU JOINING BB",
  "/characters/ghoulie",
);
upsertRelationship(
  shiyaRelationships,
  "Tofu",
  "A small peer-calibration beat lands when Shiya asks `theres a limit ?` and Tofu answers `At least pace yourself`. It reads like comfortable correction inside ordinary room life, not hierarchy.",
  "pace yourself",
  "/characters/tofu",
);
allCharacters[shiyaIndex] = {
  ...shiya,
  logline: appendOnce(shiya.logline, "The early Whiskey arc also runs in the other direction: first welcomed into UL, then increasingly the person summoning spectators into the room, steering chatter back to Whiskey, and making belonging feel like an invitation rather than a process.", "summoning spectators"),
  tags: appendUnique(shiya.tags, ["Whiskey Room", "Warm summoner", "Room-boundary herder"]),
  relationships: shiyaRelationships,
  quotes: appendUnique(shiya.quotes, [
    "GHOULIE IN UL",
    "YOU JOINING BB ?",
    "Take it to #🥃💬｜whiskey-room guys",
    "get your arse to whiskey",
    "theres a limit ?",
    "Ive been driving my coworkers nutz ... by singing teri galiyan",
  ]),
  claims: appendUnique(shiya.claims, [
    "The 2020-11-13 Whiskey pocket contains peers welcoming Shiya to UL and Shiya replying `Thanx mate`; this is a surviving membership floor, not an exact join or recruitment origin.",
    "On 2021-03-13 Shiya posts `GHOULIE IN UL`, asks Baby Lyssa/Ghoulie `YOU JOINING BB ?`, and later tells the room `Take it to #🥃💬｜whiskey-room guys`; the cluster supports warm summoning plus room-boundary herding without proving formal recruitment authority.",
    "On 2021-09-15 a pooled Deleted User says the room is entertaining to listen to and Shiya answers `get your arse to whiskey`, turning spectator language toward participation.",
    "Shiya says `Ive been driving my coworkers nutz ... by singing teri galiyan`; this supports a small workplace-singing Petty Crime and nothing about employer, job, or location.",
  ]),
  antiFanon: appendUnique(shiya.antiFanon, [
    "Warm summons into Whiskey are not proof that Shiya formally recruited the person into UL or held special recruitment authority.",
    "The pooled Deleted User remains pooled; do not assign that message to a named former member.",
    "`Ya wanna join timber bb ?` exists in the broader sample, but `timber` is unresolved and is not published as a recruitment event.",
    "The coworker singing line does not establish employer, occupation, workplace location, or a broad music-taste profile.",
  ]),
} as ExtendedCharacter;
characterById.set("shiyax", allCharacters[shiyaIndex]);

const shikiIndex = allCharacters.findIndex((candidate) => candidate.id === "shiki");
if (shikiIndex < 0) throw new Error("Run 1477 expected canonical Shiki owner; refusing to create a duplicate person.");
const shiki = allCharacters[shikiIndex] as ExtendedCharacter;
allCharacters[shikiIndex] = {
  ...shiki,
  logline: appendOnce(shiki.logline, "Later game-hopping adds a neat maintenance contradiction: Shiki can openly follow the current obsession into HoK while still keeping a tiny WWM tether through dailies, and narrates the thinner presence so the absence stays legible to the group.", "tiny WWM tether"),
  tags: appendUnique(shiki.tags, ["Game-hopping", "HoK", "WWM", "Maintenance-minded"]),
  quotes: appendUnique(shiki.quotes, [
    "if you guy dont see me in WWM",
    "im playing HOK",
    "I log in wwm then go daily and then back to HoK",
  ]),
  claims: appendUnique(shiki.claims, [
    "In the later Other Games pocket Shiki tells the group `if you guy dont see me in WWM` / `im playing HOK`, then later explains `I log in wwm then go daily and then back to HoK`; the useful character read is transparent game-hopping with a small maintenance tether, not a claim that Shiki quit WWM.",
  ]),
  antiFanon: appendUnique(shiki.antiFanon, [
    "The HoK/WWM lines do not establish that Shiki quit WWM, always announces absences, or was considered unreliable.",
    "The group-facing absence note does not identify a specific person Shiki was accountable to or imply formal attendance requirements.",
  ]),
} as ExtendedCharacter;
characterById.set("shiki", allCharacters[shikiIndex]);
