import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

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

// Ghoulie: the new Daycare packet adds the opposite side of her Wall legend.
// She is not only the person who gets filed; she knows how to move an active bit
// into another room and assumes the other person already understands the map.
const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (ghoulieIndex < 0) {
  throw new Error("Run 1197 expected canonical Ghoulie / Baby Lyssa owner; refusing to create a duplicate.");
}
const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
const ghoulieRelationships = [...(ghoulie.relationships ?? [])];
upsertRelationship(
  ghoulieRelationships,
  "Antho",
  "On June 2, 2021, Ghoulie turns `#🐣│ul-daycare` into the entire instruction while begging Antho to follow a Wall bit into the room. Antho answers the summons with literal joke-resistance, then feeds her `I CANT BREATHE` with `wee woo wee woo`. The exchange is comfortable mutual escalation and shared room shorthand.",
  "shared room shorthand",
);
allCharacters[ghoulieIndex] = {
  ...ghoulie,
  name: "Ghoulie",
  aliases: appendUnique(ghoulie.aliases, ["Baby Lyssa", "sl33py.brxt", ".phantasghoul_"]),
  logline: appendOnce(
    ghoulie.logline,
    "She is not only a Wall exhibit or homeowner either: when a joke gets too good to leave where it started, Ghoulie can drop `#🐣│ul-daycare` as the whole instruction and start hauling the room toward the next scene herself.",
    "hauling the room toward the next scene",
  ),
  tags: appendUnique(ghoulie.tags, ["Room-summoner", "Daycare traffic", "Wall", "Petty Crimes"]),
  relationships: ghoulieRelationships,
  quotes: appendUnique(ghoulie.quotes, ["NAH GET YA ASS", "PLEASEEEEE", "IM PEEING", "I CANT BREATHE"]),
  claims: appendUnique(ghoulie.claims, [
    "On June 2, 2021, Ghoulie interrupts a Wall bit with `NAH GET YA ASS`, posts `#🐣│ul-daycare` as a direct social summons, then escalates through `PLEASE`, `PLEASEEEEE`, `IM PEEING`, and `I CANT BREATHE` while Antho plays along. The cumulative person read is Wall target/homeowner ↔ active room-summoner: she can become the content and also move the content.",
    "Ghoulie and Antho show a comfortable shared-bit rhythm in the June 2 scene: Antho answers the summons with `I ALREADY HAVE MA ASS` / `watcha want from meh?` before exact-replying to her mock respiratory crisis with `wee woo wee woo`.",
  ]),
  antiFanon: appendUnique(ghoulie.antiFanon, [
    "The June 2 Daycare channel mention shows Ghoulie using the room as an obvious destination for the bit. It does not establish channel authorship, ownership, formal authority, or the unseen continuation after the summons.",
    "The source names the other stable account `Antho`. No identity bridge to Anthos is inferred from the similar name alone.",
  ]),
} as ExtendedCharacter;
characterById.set("baby-lyssa", allCharacters[ghoulieIndex]);

// Syv: earlier overlays already own the grade-triage and noticed-absence pieces.
// This suffix supplies the missing change-over-time capstone: the low-exposure
// observer eventually starts filing receipts and calling the defendant over.
const syvIndex = allCharacters.findIndex((character) => character.id === "syv");
if (syvIndex < 0) {
  throw new Error("Run 1197 expected canonical Syv owner; refusing to create a duplicate.");
}
const syv = allCharacters[syvIndex] as ExtendedCharacter;
const syvRelationships = [...(syv.relationships ?? [])];
upsertRelationship(
  syvRelationships,
  "Ricochet",
  "The same low-ceremony familiarity extends into ordinary nonsense: Syv says `You disappeared for weeks`; Ricochet says he was busy and immediately asks `Also syv send me ramen`; Syv answers `I’m broke` five seconds later.",
  "send me ramen",
  "/characters/ricochet",
);
upsertRelationship(
  syvRelationships,
  "Ren",
  "By May 2024 Syv is comfortable filing a receipt with `*Rv, rv plz-* @RΣN`; Ren later exact-replies to that parent with `I AM NOT WRONG`. The formerly low-exposure observer is now the person summoning the defendant into Screenshot Court.",
  "I AM NOT WRONG",
  "/characters/ren",
);
allCharacters[syvIndex] = {
  ...syv,
  logline:
    "Amaurot-side VIP with low-volume, high-context attention: Syv can salvage a C into a plan, notice exactly who disappeared, stay shy without becoming socially absent, and eventually move from watching Wall receipts to filing them herself and summoning Ren straight into the case.",
  tags: appendUnique(syv.tags, ["Wall filer", "Receipt prosecutor", "Ordinary life", "Ricochet", "Ren", "Petty Crimes"]),
  relationships: syvRelationships,
  quotes: appendUnique(syv.quotes, [
    "I’m broke",
    "Real smooth recovery over there 💀",
    "Iconic ✨💀",
    "*Rv, rv plz-* @RΣN",
  ]),
  claims: appendUnique(syv.claims, [
    "Syv's January 2022 Wall exchange with Ricochet combines recurring teasing, absence-noticing, and ordinary low-ceremony familiarity: she notices that he disappeared for weeks, then answers his ramen request with `I’m broke` five seconds later.",
    "Across 2023–2024 Syv repeatedly posts Wall attachments and captions them herself. On May 16, 2024 she files one with `*Rv, rv plz-* @RΣN`; the next day Ren exact-replies to Syv's parent with `I AM NOT WRONG`. This is the clearest surviving change from low-exposure observer to active receipt-filer / prosecutor.",
    "Syv's own January 2022 line that she thinks this is the first time she has been `mildly shown` is useful self-characterization of low exposure, while her later direct filing behavior shows that low exposure did not mean low attention to the room.",
  ]),
  antiFanon: appendUnique(syv.antiFanon, [
    "Ricochet / `dragonrichard` remains distinct from Rich / DragonRich. Syv has separate absence-noticing or ordinary-life exchanges with both people; this Wall lane belongs to Ricochet.",
    "Syv's 2023–2024 Wall attachments are POSTED BY Syv only and remain VISUAL HOLD. Captions, tags, and exact replies do not establish MADE BY, CAPTURED BY, FEATURING, or the visual subject.",
    "Tagging Ren in `*Rv, rv plz-* @RΣN` does not identify Ren as the attachment subject. The clean relationship edge is Ren's later exact Reply to Syv's post.",
    "The October 2021 class context makes organic chemistry probable ordinary-life texture, but it does not establish Syv's age, school level, institution, major, location, or academic program.",
    "Syv's `mildly shown` line is participant memory, not a verified first Wall appearance or origin timestamp.",
  ]),
} as ExtendedCharacter;
characterById.set("syv", allCharacters[syvIndex]);

// Give Ricochet the reciprocal relationship edge without inventing a ranking.
const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex < 0) {
  throw new Error("Run 1197 expected canonical Ricochet owner; refusing to create a duplicate.");
}
const ricochet = allCharacters[ricochetIndex] as ExtendedCharacter;
const ricochetRelationships = [...(ricochet.relationships ?? [])];
upsertRelationship(
  ricochetRelationships,
  "Syv",
  "Syv notices when Ricochet has been gone for weeks; Ricochet answers with ordinary-life brevity and then immediately asks her to send ramen, getting `I’m broke` five seconds later. The familiarity lives in how little ceremony either person needs.",
  "send ramen",
  "/characters/syv",
);
allCharacters[ricochetIndex] = {
  ...ricochet,
  tags: appendUnique(ricochet.tags, ["Syv", "Absence-noticing", "Ordinary life"]),
  relationships: ricochetRelationships,
} as ExtendedCharacter;
characterById.set("ricochet", allCharacters[ricochetIndex]);

// Run 1197 reader activation is intentionally chained from the existing Run 1192 intake module.
import "./integrator-cast-run1198-wall";
