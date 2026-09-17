import "./integrator-cast-run1285-wall-anayss";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const ansunIndex = allCharacters.findIndex((character) => character.id === "ansun");
if (ansunIndex < 0) {
  throw new Error("Run 1278 expected the canonical Ansun owner; refusing to create a Sou/Souta duplicate.");
}

const ansun = allCharacters[ansunIndex] as ExtendedCharacter;
const relationships = [...(ansun.relationships ?? [])];
const renIndex = relationships.findIndex((relationship) => relationship.name === "Ren");
const openingRenNote =
  "The Wall's surviving opening already has Ren treating Ansun as recurring inventory: Ansun says `im a good number of these`, Ren answers `Half of all my photos`, and Ansun escalates to `im a 200 on your photo roll`. Two days later his already-known request for `more flavours of sf stupid` reads like target-side self-awareness, not an objection to the Wall itself.";
if (renIndex >= 0) {
  const current = relationships[renIndex];
  relationships[renIndex] = {
    ...current,
    note: current.note.includes("Half of all my photos") ? current.note : `${current.note} ${openingRenNote}`,
    href: current.href ?? "/characters/ren",
  };
} else {
  relationships.push({ name: "Ren", note: openingRenNote, href: "/characters/ren" });
}

const ansunNext: ExtendedCharacter = {
  ...ansun,
  tags: appendUnique(ansun.tags, [
    "Frequent Wall target",
    "Filer/target contradiction",
    "Target-side self-awareness",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(ansun.quotes, [
    "im a good number of these",
    "im a 200 on your photo roll",
  ]),
  claims: appendUnique(ansun.claims, [
    "At the Wall's surviving opening on August 22, 2020, Ansun says `im a good number of these`; Ren replies `Half of all my photos`; Ansun answers `PLEASE` and then `im a 200 on your photo roll`. The useful person read is target-side overrepresentation awareness: before the later filer reputation and fame self-mythology fully develop in the surviving record, he already knows he is recurring material himself.",
    "The August 22 target-side pocket gives the already-owned August 24 `i approve of posting other people than me in here` / `i want more flavours of sf stupid` exchange a cleaner chronology. Ansun is not rejecting Screenshot Court; he is asking for defendant variety after joking that he occupies a ridiculous share of Ren's saved material.",
    "Paired with the later peer reputation that Ansun is always ready to post, the opening material sharpens the contradiction: fast filer and frequent defendant are the same social position viewed from opposite chairs.",
  ]),
  antiFanon: appendUnique(ansun.antiFanon, [
    "`im a 200 on your photo roll` is conversational hyperbole unless an actual count is independently established.",
    "The August 22 material is the surviving opening-side rung of this Wall pattern, not proof that it originated there or that Ansun had a formal Wall role.",
  ]),
};

allCharacters[ansunIndex] = ansunNext;
characterById.set("ansun", ansunNext);
