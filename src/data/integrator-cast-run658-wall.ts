import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const scarIndex = allCharacters.findIndex((character) => character.id === "scar");
const scarFallback: Character = {
  id: "scar",
  name: "Scar",
  aliases: ["s.car."],
  billing: "recurring",
  role: "Platelet",
  era: "2020–present",
  logline: "Platelet whose surviving Wall footprint is small but not shy: Scar drops a ridiculous premise, lets the room carry it, then comes back with the approval stamp or another escalation.",
  tags: ["Platelet", "Wall", "Playful provocation", "Bit-seeder", "Petty Crimes"],
};

if (scarIndex >= 0) {
  const scar = allCharacters[scarIndex];
  const relationships = [...(scar.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Gilli",
    note: "Scar seeds `Also Gilli must have some harem here`; Gilli directly protests, the room amplifies the premise, and Scar comes back later with `I knew it all time` and `LMFAO`. The joke works because Scar stays in the teasing after Gilli pushes back; `harem` is joke language, not literal relationship structure.",
    href: "/characters/gilli",
  });

  allCharacters[scarIndex] = {
    ...scar,
    aliases: [...new Set([...(scar.aliases ?? []), "s.car."])],
    logline: "Sparse Wall footprint, active troublemaking: Scar likes planting one ridiculous premise, letting everybody else make it worse, then reappearing with `I knew it all time`, `IT’S TRUE`, `100%`, or the wonderfully ambiguous threat `want me to exposed?`.",
    tags: [...new Set([...(scar.tags ?? []), "Wall", "Playful provocation", "Bit-seeder", "Evidence-room banter", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(scar.quotes ?? []),
      "Also Gilli must have some harem here :kermsad:",
      ":aPES_SuspiciousRead: I knew it all time",
      "IT’S TRUE",
      "100%",
      "want me to exposed?",
    ])],
  };
} else {
  allCharacters.push({
    ...scarFallback,
    relationships: [{
      name: "Gilli",
      note: "Scar seeds `Also Gilli must have some harem here`; Gilli directly protests, the room amplifies the premise, and Scar comes back later with `I knew it all time` and `LMFAO`. The joke works because Scar stays in the teasing after Gilli pushes back; `harem` is joke language, not literal relationship structure.",
      href: "/characters/gilli",
    }],
    quotes: [
      "Also Gilli must have some harem here :kermsad:",
      ":aPES_SuspiciousRead: I knew it all time",
      "IT’S TRUE",
      "100%",
      "want me to exposed?",
    ],
  });
}
characterById.set("scar", allCharacters.find((character) => character.id === "scar")!);

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex >= 0) {
  const daya = allCharacters[dayaIndex];
  const relationships = [...(daya.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Mugen",
    note: "Daya can discover her old receipts and call herself `caught in 4k`; Mugen answers that it was only `one mornings worth of ss`, and Daya laughs before scheduling more `crackheadedness`. When Mugen later says he is in the middle of a mountain and asks her to `send ss`, the shorthand reads as easy evidence-sharing familiarity, not a formal archive job.",
    href: "/characters/mugen",
  });
  upsertRelationship(relationships, {
    name: "Rummy",
    note: "Daya asks for very specific reading recommendations `foor yk... research`; Rummy immediately answers `*i got youu*`, and Daya comes back with `ty ma'aam`. Fast rec-help plus teasing, without turning media-title banter into sexuality or a closeness ranking.",
    href: "/characters/rummy",
  });
  upsertRelationship(relationships, {
    name: "RotiniLM",
    note: "By 2024 Daya can announce she `walked into a crime being committed`, file the screenshot, summon Rotini and Snow, then answer Rotini's `SHH EVERYTHING'S FINE` with an FBI-raid GIF. Rotini follows with a heart; comfortable mock-prosecution, not literal conflict or governance.",
  });

  allCharacters[dayaIndex] = {
    ...daya,
    logline: "Officer and Recruiter who is perfectly capable of procedural follow-through and also deeply fluent in Screenshot Court: Daya can call herself `caught in 4k`, laugh, schedule more `crackheadedness`, ask for manga `foor yk... research`, and later become the witness filing somebody else’s `crime` with an FBI GIF ready.",
    tags: [...new Set([...(daya.tags ?? []), "Wall", "Screenshot Court", "Evidence-aware chaos", "Recommendation trust", "Mock prosecution", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(daya.quotes ?? []),
      "wow im just now seeing theese and i was really caught in 4k",
      "the crackheadedness will continue today at 1pm est",
      "foor yk... research",
      "walked into a crime being committed",
    ])],
  };
  characterById.set("daya", allCharacters[dayaIndex]);
}
