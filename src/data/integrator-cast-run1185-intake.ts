import { allCharacters, castGroups, characterById } from "./cast";
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

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
const addToArchiveCast = (id: string) => {
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(id)) {
    archiveCastGroup.characterIds.push(id);
  }
};

// Run 1185 Wall: Zoshaa's value is cumulative behavior, not one screenshot episode.
const zoshaaId = "zoshaa";
const zoshaaIndex = allCharacters.findIndex((character) => character.id === zoshaaId);
const zoshaaCharacter: ExtendedCharacter = {
  id: zoshaaId,
  name: "Zoshaa",
  aliases: ["NintendoShitcube"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2020–2022+",
  logline:
    "Committed absurdist with a suspiciously durable `O W O` dialect: Zoshaa accepts ridiculous names, survives recurring roast material, makes a boiled-mayo premise worse on purpose, then turns around and prosecutes everybody else's inconsistencies with the confidence of somebody entering `one(1) FREEZIE` into the record.",
  tags: [
    "Archive cast",
    "Wall",
    "Absurdist",
    "Tease-safe",
    "Counter-prosecutor",
    "Receipt theater",
    "Recurring O W O",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Ren",
      note:
        "Ren can invent `zorshal` and Zoshaa is repeating `Z O R S H A L` less than a minute later. Ren also resurfaces old screenshot material that has apparently become a recurring Zoshaa roast; Zoshaa answers inside the joke instead of resetting the room. Tease-safe bit uptake, not a friendship ranking.",
      href: "/characters/ren",
    },
    {
      name: "Ansun",
      note:
        "Under the Sou name, Ansun describes the `scrambled egg bunny fursona` callback as something that costs Zoshaa `another week` every time the old material resurfaces. That makes the reputation recurrent by November 2020 without pretending the surviving scene is its origin.",
      href: "/characters/ansun",
    },
    {
      name: "Snow",
      note:
        "Zoshaa has a recurring peer-accountability register with Snow: the loudly counted `one(1) FREEZIE` double-standard complaint in 2020, then `DIDNT YOU SAY YOU WERE GOING TO SLEEP` in 2022. Comfortable hypocrisy-policing, not authority or governance.",
      href: "/characters/snow",
    },
  ],
  quotes: [
    "Z O R S H A L",
    "O W O",
    "Screaming is what I do best😎😎😎",
    "It’s like a McDonald’s triple thick milkshake but warm and and tastes like mayo",
    "DIDNT YOU SAY YOU WERE GOING TO SLEEP",
  ],
  claims: [
    "Authored variants of `O W O` recur across Zoshaa's surviving 2020–2022 Wall footprint, making it a durable mannerism rather than a one-off reaction.",
    "When Ren declares the name `zorshal` on 2020-08-26, Zoshaa answers `Z O R S H A L` 49.892 seconds later; the useful character beat is immediate uptake of the room's nonsense.",
    "On 2020-11-04 Ansun/Sou says the `scrambled egg bunny fursona` callback gives Zoshaa `another week` of the label whenever it resurfaces. Zoshaa answers `B r u h`; recurrence is supported, origin is not.",
    "The 2021 boiled-mayo pocket shows commitment-to-bit escalation: Gilli expresses disgust, Zoshaa makes the sensory description more specific, and Ren accepts the premise in a direct reply.",
    "A 2022 camera-emoji sequence around Zoshaa's own `IMG_2382.jpg` post supports active receipt-performance behavior. The attachment's visual subject remains unresolved.",
  ],
  antiFanon: [
    "The recurring bunny/fursona callback is a room roast. The adjacent Ren-posted images remain visually uninspected here, so POSTED BY does not become MADE BY, CAPTURED BY, FEATURING, or a subject identification.",
    "The boiled-mayo material is authored joke text and commitment-to-bit evidence, not proof of literal real-world consumption.",
    "Zoshaa/Snow inconsistency-policing supports peer banter only; it does not create rank, authority, governance, or appointment chronology.",
    "Recurring affection, teasing and `UwU` language in these scenes are not promoted into romance or family claims.",
  ],
};

if (zoshaaIndex >= 0) {
  const zoshaa = allCharacters[zoshaaIndex] as ExtendedCharacter;
  const relationships = [...(zoshaa.relationships ?? [])];
  for (const relationship of zoshaaCharacter.relationships ?? []) {
    upsertRelationship(relationships, relationship);
  }
  allCharacters[zoshaaIndex] = {
    ...zoshaa,
    ...zoshaaCharacter,
    aliases: appendUnique(zoshaa.aliases, zoshaaCharacter.aliases ?? []),
    tags: appendUnique(zoshaa.tags, zoshaaCharacter.tags ?? []),
    relationships,
    quotes: appendUnique(zoshaa.quotes, zoshaaCharacter.quotes ?? []),
    claims: appendUnique(zoshaa.claims, zoshaaCharacter.claims ?? []),
    antiFanon: appendUnique(zoshaa.antiFanon, zoshaaCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(zoshaaCharacter);
}
characterById.set(zoshaaId, allCharacters.find((character) => character.id === zoshaaId)!);
addToArchiveCast(zoshaaId);

// Run 1185 Daycare support: Churro is low-volume but unusually reusable when activated.
const churroId = "churro";
const churroIndex = allCharacters.findIndex((character) => character.id === churroId);
const churroCharacter: ExtendedCharacter = {
  id: churroId,
  name: "Churro",
  aliases: ["chursu"],
  billing: "legacy",
  role: "Archive-era UL member",
  era: "2022+",
  logline:
    "Quiet footprint, utility brain. Churro shows up most clearly when something needs to become reusable: turn server-level optimization into a pinned checklist, offer room-wide access to something made for a friend, or solve `work + dinner + club event` by arranging coverage instead of vanishing.",
  tags: [
    "Archive cast",
    "Systems explainer",
    "Logistics",
    "Coverage coordinator",
    "Quiet utility",
    "Ordinary life",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note:
        "When Churro needs club-event coverage after work and before dinner, Gilli is the person Churro thanks directly with `ty gilli <3`. It is a small practical handoff with warmth attached, not a closeness ranking.",
      href: "/characters/gilli",
    },
  ],
  quotes: [
    "this is for server level up",
    "did this for a friend if u guys want this at all",
    "ty gilli <3",
  ],
  claims: [
    "On 2022-11-05 Churro posts and pins a dense server-level-up checklist spanning point sources, timing, missions, currencies, books, party size, festival timing and level timing, then clarifies `this is for server level up`. The useful role is lived systems-help, not a formal title.",
    "On 2022-11-14 Churro says `did this for a friend if u guys want this at all` while posting an attachment, extending something prepared for one person outward to the room. The attachment remains visually uninspected.",
    "On 2022-11-24 and 2022-12-01 Churro asks other people to cover club-event handling around work, dinner and an attempted log-in window. The recurring behavior is explicit delegation around real-life constraints rather than disappearing without a handoff.",
  ],
  antiFanon: [
    "Churro's tiny Daycare footprint is not converted into a whole-server activity ranking. The profile is built from a repeat utility/logistics pattern across adjacent 2022 UL rooms.",
    "The 2022-11-14 `unknown.png` is POSTED BY Churro only. Its contents and maker remain unresolved.",
    "The typed `suora` / `chu/suo/niu` club-event targets are preserved as Churro's wording; this integration does not infer account ownership or identity bridges from those names.",
    "Systems explainer / coverage coordinator describes observed behavior, not a formal UL appointment or governance role.",
  ],
};

if (churroIndex >= 0) {
  const churro = allCharacters[churroIndex] as ExtendedCharacter;
  const relationships = [...(churro.relationships ?? [])];
  for (const relationship of churroCharacter.relationships ?? []) {
    upsertRelationship(relationships, relationship);
  }
  allCharacters[churroIndex] = {
    ...churro,
    ...churroCharacter,
    aliases: appendUnique(churro.aliases, churroCharacter.aliases ?? []),
    tags: appendUnique(churro.tags, churroCharacter.tags ?? []),
    relationships,
    quotes: appendUnique(churro.quotes, churroCharacter.quotes ?? []),
    claims: appendUnique(churro.claims, churroCharacter.claims ?? []),
    antiFanon: appendUnique(churro.antiFanon, churroCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(churroCharacter);
}
characterById.set(churroId, allCharacters.find((character) => character.id === churroId)!);
addToArchiveCast(churroId);
