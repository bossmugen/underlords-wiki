import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const hishiroIndex = allCharacters.findIndex((character) => character.id === "hishiro");
if (hishiroIndex < 0) {
  throw new Error("Run 785 expected canonical Hishiro owner; refusing to recreate Hishiro from a creative-room slice");
}

const hishiro = allCharacters[hishiroIndex] as ExtendedCharacter;
const relationships = [...(hishiro.relationships ?? [])];
const upsertRelationship = (relationship: NonNullable<Character["relationships"]>[number]) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

upsertRelationship({
  name: "Gilli",
  note: "Gilli can call Hishiro by name and get `yes? you called my name?`; Hishiro turns ordinary availability into summoning theater and tells Gilli to summon her again if her services are needed. The joke works because she actually answers the call.",
  href: "/characters/gilli",
});
upsertRelationship({
  name: "Mugen",
  note: "Mugen can ask Hishiro `accurate or no, thoughts?` and get the compressed verdict `accurate`. Invited judgment does not automatically make Hishiro verbose, and it does not appoint her as a formal fact-checker.",
  href: "/characters/mugen",
});
upsertRelationship({
  name: "Anthos",
  note: "Hishiro can offer coffee to the room and get an immediate `Me pls` from Anthos; elsewhere she says she gave Anthos two good drops. Small practical offers and game luck travel easily between them without needing a friendship rank.",
  href: "/characters/anthos",
});

allCharacters[hishiroIndex] = {
  ...hishiro,
  logline:
    "Staff whose useful objects tend to arrive with a handle: Hishiro can answer a summons, label a correction `erratum`, return `accurate` when Mugen asks for a check, frame a Japan post `for everyone`, and submit creative work with the tiny provenance note `Own work, Translated`.",
  tags: appendUnique(hishiro.tags, [
    "Staff",
    "Athenaeum",
    "Practical context",
    "Creative work",
    "Compact usefulness",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(hishiro.quotes, [
    "Own work, Translated",
    "same :Hehe:",
    "sorry erratum multiple 400k+, as usual reapers",
    "accurate",
    "A small slice of Japan for everyone",
  ]),
  claims: appendUnique(hishiro.claims, [
    "In the assigned Athenaeum material, Hishiro labels one member-writing post `Own work, Translated`. The useful person-level deepening is compact provenance: she tells the room what kind of object it has without making the handoff into a speech.",
    "Across other already-reconciled Hishiro scenes, the same low-ceremony usefulness appears as answering summons, offering coffee, correcting a game figure with `erratum`, giving Mugen the verdict `accurate`, and framing a Japan image `for everyone`.",
  ]),
  antiFanon: appendUnique(hishiro.antiFanon, [
    "`Own work` applies only to the specific joined creative work once its exact raw Athenaeum row/object is backfilled. Do not propagate creator credit to Hishiro's other media-bearing posts.",
    "`Translated` establishes the form label, not source language, target language, translation method, or who performed the translation.",
    "Creative writing is not autobiography by default.",
    "Hishiro remains Staff. Compact provenance/context behavior does not create editor, translator, archivist, fact-checker, teacher, or information-officer titles.",
    "Her journalism background can make the vocabulary recognizable without proving that her profession caused every information/correction habit in UL.",
  ]),
} as ExtendedCharacter;

characterById.set("hishiro", allCharacters[hishiroIndex]);
