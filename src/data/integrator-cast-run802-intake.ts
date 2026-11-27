import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const aeshIndex = allCharacters.findIndex((character) => character.id === "aeshleen");
if (aeshIndex < 0) {
  throw new Error("Run 802 expected canonical Aeshleen; refusing to create a duplicate Aesh owner.");
}

const aesh = allCharacters[aeshIndex] as ExtendedCharacter;
const aeshRelationships = [...(aesh.relationships ?? [])];
const renRelationship = {
  name: "Ren",
  note:
    "Ren can exhume Aesh's old fastest-shame record, hear `stop bringing up my past 💔`, apologize immediately, and get `is oki ILY yall` back. By 2023 Aesh can also reverse the seating chart: she asks somebody to `collect @RΣN plz`, then fires `SIDE EYE` when Ren reacts. Their Wall rhythm is reciprocal mock-prosecution with a very fast repair button, not a one-way hazing lane.",
  href: "/characters/ren",
};
const renIndex = aeshRelationships.findIndex((relationship) => relationship.name === "Ren");
if (renIndex >= 0) aeshRelationships[renIndex] = renRelationship;
else aeshRelationships.push(renRelationship);

allCharacters[aeshIndex] = {
  ...aesh,
  logline:
    `${aesh.logline} By 2023 the longtime defendant has learned to work the other side of Screenshot Court too: Aesh can file Ren right back without changing the relationship's teasing grammar.`,
  tags: appendUnique(aesh.tags, ["Reciprocal mock-prosecution", "Petty Crimes"]),
  relationships: aeshRelationships,
  quotes: appendUnique(aesh.quotes, ["someone collect @RΣN plz", "SIDE EYE"]),
  claims: appendUnique(aesh.claims, [
    "By 2023 Aesh is not only a repeat Wall defendant/context-restorer: she directly calls for Ren to be collected and then answers Ren's reaction with `SIDE EYE`, extending their reciprocal mock-prosecution lane.",
  ]),
  antiFanon: appendUnique(aesh.antiFanon, [
    "Aesh and Ren's reciprocal Wall filing/repair rhythm is teasing familiarity, not evidence of romance, family, a literal feud, or formal disciplinary authority.",
  ]),
} as ExtendedCharacter;
characterById.set("aeshleen", allCharacters[aeshIndex]);

const taeIndex = allCharacters.findIndex((character) => character.id === "tae");
if (taeIndex < 0) {
  throw new Error("Run 802 expected canonical Tae; refusing to create a duplicate Tae owner.");
}

const tae = allCharacters[taeIndex] as ExtendedCharacter;
allCharacters[taeIndex] = {
  ...tae,
  logline:
    `${tae.logline} The written megaphone has one revealing contrast: in late 2020 Tae said they were still working up the courage to actually talk with their voice. Loud text did not automatically make the microphone feel equally easy.`,
  tags: appendUnique(tae.tags, ["Witness recruiter", "Written megaphone", "Petty Crimes"]),
  quotes: appendUnique(tae.quotes, [
    "Yk fawk finna talk with my voice just gotta get the courage...",
  ]),
  claims: appendUnique(tae.claims, [
    "On November 30, 2020 Tae says they are working up the courage to talk with their voice, a useful contrast with the loud, attention-directing written style visible across their Whiskey material.",
  ]),
  antiFanon: appendUnique(tae.antiFanon, [
    "Tae's one microphone-courage line supports a text-versus-voice comfort contrast in that moment; it is not a diagnosis of shyness, anxiety, introversion, or a permanent voice-chat limitation.",
  ]),
} as ExtendedCharacter;
characterById.set("tae", allCharacters[taeIndex]);
