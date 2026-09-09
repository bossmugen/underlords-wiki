import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 722 Whiskey: Hishiro's existing card was still mostly a reunion-era placeholder.
// Fold the older Whiskey/Club-Only person texture into that same owner: technical usefulness
// that stays socially light enough to arrive as a Holy Grail service-call joke.
const hishiroIndex = allCharacters.findIndex((character) => character.id === "hishiro");
if (hishiroIndex >= 0) {
  const hishiro = allCharacters[hishiroIndex] as ExtendedCharacter;
  const relationships = [...(hishiro.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Gilli",
    note:
      "Gilli can call Hishiro by name and get `yes? you called my name?`; Hishiro then discovers that `Gilli can summon people`, turns the whole interaction into a Holy Grail Servant bit, and closes with `summon me again if my service are needed again` / `always at your service`. The joke works because the availability underneath it is real: being called into something does not seem to bother her nearly as much as missing the chance to make it nerdy.",
    href: "/characters/gilli",
  });

  allCharacters[hishiroIndex] = {
    ...hishiro,
    logline:
      "Competence you can summon: Hishiro can drop server-status information, speak from former cellphone-tech experience, choose teaching media partly because it keeps her students less stressed, switch to text when the mic is garbage, and still narrate being called by Gilli like she has just been contracted as a Holy Grail Servant.",
    tags: appendUnique(hishiro.tags, [
      "Whiskey",
      "Technical help",
      "Teaching",
      "Anime / manga",
      "Summonable competence",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(hishiro.quotes, [
      "yes? you called my name?",
      "cool Gilli can summon people",
      "summon me again if my service are needed again",
      "always at your service",
      "servers are up",
      "former cellphone tech here",
      "gonna txt insetad",
      "im reading a Manga Right now titled Record of Ragnarok. and swear Jack the Ripper looks sleek in this",
    ]),
    claims: appendUnique(hishiro.claims, [
      "In a 2020 Gilli summon pocket, Hishiro repeatedly turns being called into a Fate/Holy-Grail service joke while explicitly inviting Gilli to summon her again if needed.",
      "Hishiro says she uses related-topic video material partly because it keeps her students' stress level low, making format choice part of the care rather than merely a technical preference.",
      "In Whiskey, Hishiro directly describes herself as a former cellphone tech and elsewhere switches to text when a bad mic makes voice impractical.",
    ]),
    antiFanon: appendUnique(hishiro.antiFanon, [
      "The Gilli summon/Servant language is a Fate/Holy-Grail joke and does not establish hierarchy, ownership, governance, employment, or a formal service role.",
      "Hishiro's student-stress wording supports that she had students and cared about reducing their stress; it does not identify an employer, school, course, credential, or appointment chronology.",
      "Current/export role arrays are not used to backdate Hishiro's Staff appointment.",
      "The image posted during the Gilli summon pocket is credited only as POSTED BY Hishiro unless its maker, capturer, or depicted subjects are separately established.",
    ]),
  } as ExtendedCharacter;

  characterById.set("hishiro", allCharacters[hishiroIndex]);
}

// Run 722 Wall: hard project canon resolves Akariel / Akariel™ / akariel_star to
// Zyrcant. The main self-enlist -> flee mechanism is already public. Keep only the
// genuinely additive Tofu shorthand here; do not create an Akariel card.
const zyrcantIndex = allCharacters.findIndex((character) => character.id === "zyrcant");
if (zyrcantIndex >= 0) {
  const zyrcant = allCharacters[zyrcantIndex] as ExtendedCharacter;
  const relationships = [...(zyrcant.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Tofu",
    note:
      "Tofu can answer Zyrcant's `whaat you dont want me to say thank you?` with `how about you not take our souls at all *Satan*`; Zyrcant's entire defense is `naaah`. It is exactly her kind of public villain shorthand: accept the accusation, improve the bit, refuse the rehabilitation program.",
    href: "/characters/tofu",
  });

  allCharacters[zyrcantIndex] = {
    ...zyrcant,
    relationships,
    tags: appendUnique(zyrcant.tags, ["Mock villainy"]),
    quotes: appendUnique(zyrcant.quotes, [
      "whaat you dont want me to say thank you?",
      "naaah",
      "lmao i remember i have  a gif saved of the whole bee movie",
    ]),
    claims: appendUnique(zyrcant.claims, [
      "Akariel / Akariel™ / akariel_star remains the canonical Zyrcant owner; the Run 722 Wall packet does not create a second person.",
      "Tofu mock-casts Zyrcant as Satan in a direct reply and Zyrcant answers `naaah`, fitting the existing self-aware troublemaker register.",
      "Zyrcant explicitly remembers having a GIF of the whole Bee Movie saved, a small digital-hoarding Petty Crime rather than a separate event.",
    ]),
    antiFanon: appendUnique(zyrcant.antiFanon, [
      "Tofu's `Satan` line is mock-villain language inside a joke and is not literal religious, occult, moral, or identity canon.",
    ]),
  } as ExtendedCharacter;

  characterById.set("zyrcant", allCharacters[zyrcantIndex]);
}
