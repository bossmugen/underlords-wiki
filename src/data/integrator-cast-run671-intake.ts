import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Core Rooms: Tomas's useful through-line is standards plus practical competence,
// not a title ledger. The 2020 role discussion and 2021 Royal Chest explanation
// show the same instinct from two directions: make the standard explicit, then
// explain the machinery well enough that somebody else can act on it.
const tomasIndex = allCharacters.findIndex(
  (character) =>
    character.id === "tomas" ||
    character.name === "Tomas" ||
    (character.aliases ?? []).includes("Tomas"),
);

const tomasUpdate: Character = {
  id: "tomas",
  name: "Tomas",
  billing: "legacy",
  role: "Archive-era Officer",
  era: "2020–2021+",
  logline:
    "Standards-minded Officer whose seriousness is useful rather than decorative: Tomas can argue that promotions are not political or feel-good placements, then turn around and explain Royal Chest mechanics clearly enough that the room immediately treats him like the person who knows what he is doing.",
  tags: [
    "Officer",
    "Standards",
    "Tactical explainer",
    "Quality control",
    "Practical competence",
    "Core Rooms",
  ],
  relationships: [
    {
      name: "Tommy",
      note: "After Tomas gives the Royal Chest explanation, Tommy answers with `#stillmyfavoriteofficer`. The useful texture is reputation earned in the room through competence, not an attempt to date Tomas's appointment from an export role array.",
    },
    {
      name: "Sarah",
      note: "Sarah follows the same tactical explanation with `When will you be pro?`; Tomas answers `Soon`. Light competence-teasing after he has just been genuinely useful.",
    },
    {
      name: "ReneSou",
      note: "In a promotion-standards discussion, Tomas stresses that roles should not become political or feel-good placements while ReneSou separately warns against oversaturating Staff. They are not identical arguments, but they share a concern with keeping titles meaningful.",
    },
  ],
  quotes: [
    "This is not a political placement, it's not a feel good placement",
    "Soon",
  ],
  claims: [
    "Tomas is directly treated as an Officer in surviving 2021 conversation; this dossier does not manufacture the exact appointment date.",
    "His public role texture comes from standards-setting and practical game explanation rather than title metadata alone.",
  ],
  antiFanon: [
    "Do not infer Tomas's exact Officer/Staff appointment chronology from current or export-time role arrays.",
    "The 2020 promotion discussion supports standards and governance texture; it does not make every participant an appointing authority.",
  ],
};

if (tomasIndex >= 0) {
  const tomas = allCharacters[tomasIndex];
  const relationships = [...(tomas.relationships ?? [])];
  for (const relationship of tomasUpdate.relationships ?? []) upsertRelationship(relationships, relationship);
  allCharacters[tomasIndex] = {
    ...tomas,
    logline: tomasUpdate.logline,
    tags: [...new Set([...(tomas.tags ?? []), ...(tomasUpdate.tags ?? [])])],
    relationships,
    quotes: [...new Set([...(tomas.quotes ?? []), ...(tomasUpdate.quotes ?? [])])],
    claims: [...(tomas.claims ?? []), ...(tomasUpdate.claims ?? [])],
    antiFanon: [...(tomas.antiFanon ?? []), ...(tomasUpdate.antiFanon ?? [])],
  };
  characterById.set(tomas.id, allCharacters[tomasIndex]);
} else {
  allCharacters.push(tomasUpdate);
  characterById.set(tomasUpdate.id, tomasUpdate);
}

// Core Rooms: LunaBelle and MoonDoll are bridged by the same stable account ID in
// the reviewed slices, not by name resemblance. Keep the role labels, but let the
// person read come from behavior: she will greet a long-gone veteran without making
// the return ceremonial, and will decline to improvise advice when she is not in the
// right headspace to give a decent answer.
const lunaIndex = allCharacters.findIndex(
  (character) =>
    character.id === "lunabelle" ||
    character.name === "LunaBelle" ||
    (character.aliases ?? []).some((alias) => alias === "LunaBelle" || alias === "MoonDoll"),
);

const lunaUpdate: Character = {
  id: "lunabelle",
  name: "LunaBelle",
  aliases: ["MoonDoll"],
  billing: "legacy",
  role: "Staff · Archivist",
  era: "2021+",
  logline:
    "Low-ceremony continuity person: LunaBelle can meet a veteran's return with a simple `Hey hey ☺️`, while a recruiting-advice prompt gets the opposite kind of restraint — if she is not in the frame of mind to give a decent answer, she says so instead of filling the room with one anyway.",
  tags: [
    "Staff",
    "Archivist",
    "Core Rooms",
    "Low-ceremony recognition",
    "Careful advice",
    "Continuity",
  ],
  relationships: [],
  quotes: [
    "Hey hey ☺️",
    "I had to take a breather... I just was not in the frame of mind to give a decent one",
  ],
  claims: [
    "LunaBelle and MoonDoll are the same reviewed account in these slices; the bridge is account-level, not a similarity-of-names inference.",
    "Her surviving 2021 behavior supports understated recognition and caution about giving advice she cannot give properly in the moment.",
  ],
  antiFanon: [
    "Staff and Archivist are retained as role labels without inventing an appointment date from current/export-time arrays.",
    "A warm greeting to a returning veteran supports recognition and continuity; it does not establish a special closeness rank by itself.",
  ],
};

if (lunaIndex >= 0) {
  const luna = allCharacters[lunaIndex];
  allCharacters[lunaIndex] = {
    ...luna,
    name: luna.name || "LunaBelle",
    aliases: [...new Set([...(luna.aliases ?? []), "LunaBelle", "MoonDoll"])],
    logline: lunaUpdate.logline,
    tags: [...new Set([...(luna.tags ?? []), ...(lunaUpdate.tags ?? [])])],
    quotes: [...new Set([...(luna.quotes ?? []), ...(lunaUpdate.quotes ?? [])])],
    claims: [...(luna.claims ?? []), ...(lunaUpdate.claims ?? [])],
    antiFanon: [...(luna.antiFanon ?? []), ...(lunaUpdate.antiFanon ?? [])],
  };
  characterById.set(luna.id, allCharacters[lunaIndex]);
} else {
  allCharacters.push(lunaUpdate);
  characterById.set(lunaUpdate.id, lunaUpdate);
}

// Wall: Mia already has a richer public owner. Add the low-volume Wall mechanism
// instead of making a duplicate card: she does not post much, but when she appears
// she joins the tease quickly and is comfortable letting one line do the work.
const miaIndex = allCharacters.findIndex((character) => character.id === "mia");
if (miaIndex >= 0) {
  const mia = allCharacters[miaIndex];
  const relationships = [...(mia.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Snow",
    note: "Snow asks whether a Wall filing counts; Mia true-replies `Well they were right`. It is a tiny but very legible choice to join the teasing frame rather than argue for the defendant's release.",
    href: "/characters/snow",
  });
  upsertRelationship(relationships, {
    name: "Mugen",
    note: "Mia can tag Mugen with `Why are you like this 😂 I would've bopped you lmao`; Mugen answers through reactions rather than treating the mock threat as conflict. Familiar, playful confrontation — not literal violence or romance.",
    href: "/characters/mugen",
  });

  allCharacters[miaIndex] = {
    ...mia,
    logline:
      "Low-volume but socially quick: Mia can turn matching-name affection into the Mimi/Momo twin bit, join a Wall prosecution with one dry `Well they were right`, and tag Mugen with mock-confrontational affection without needing a long setup or a long defense.",
    tags: [...new Set([...(mia.tags ?? []), "Wall", "Low-volume teasing", "Playful confrontation", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([...(mia.quotes ?? []), "Well they were right", "So you lied", "Why are you like this 😂 I would've bopped you lmao"])],
  };
  characterById.set("mia", allCharacters[miaIndex]);
}
