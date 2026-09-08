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

// Daycare/Wall: Mia's newer material adds the affectionate register inside the
// same evidence culture she already knows how to prosecute. She can join the bit,
// but she can also make the person in the screenshot the object of praise instead.
const miaIndex = allCharacters.findIndex((character) => character.id === "mia");
if (miaIndex >= 0) {
  const mia = allCharacters[miaIndex];
  const relationships = [...(mia.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Gilli",
    note:
      "A Wall filing about Gilli gets Mia's TRUE-reply `Lemme join gili guild uwu`; Gilli answers with a wheeze, and Mia follows minutes later with `gili a jewel` wrapped in Raja hearts. She can use the evidence room as an affection delivery system instead of treating every screenshot like a prosecution.",
    href: "/characters/gilli",
  });
  upsertRelationship(relationships, {
    name: "Rummy",
    note:
      "Mia can compress Rummy into the soft little `Poor rum rum`. It is a small nickname beat, but it fits the same habit of turning names into warm, reusable toys; affection is supported, not a closeness rank.",
    href: "/characters/rummy",
  });

  allCharacters[miaIndex] = {
    ...mia,
    logline:
      "Low-volume but socially quick: Mia can dryly join a Wall prosecution, turn somebody's name into a wordplay toy, tag Mugen with mock-confrontational affection, then flip the evidence room soft by volunteering for `gili guild`, calling Gilli a jewel, or shrinking Rummy into `rum rum`.",
    tags: [
      ...new Set([
        ...(mia.tags ?? []),
        "Affection-first teasing",
        "Nickname play",
        "Wall",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(mia.quotes ?? []),
        "Lemme join gili guild uwu",
        "gili a jewel",
        "Poor rum rum",
      ]),
    ],
    claims: [
      ...new Set([
        ...(mia.claims ?? []),
        "Mia TRUE-replies `Lemme join gili guild uwu` inside a Gilli Wall filing; Gilli TRUE-replies with a wheeze, and Mia posts `gili a jewel` minutes later.",
        "A separate Wall pocket gives Rummy the compact nickname `rum rum`, reinforcing Mia's warm name-play register without establishing a special relationship rank.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(mia.antiFanon ?? []),
        "`gili guild` is playful affiliation language, not a formal guild, role, appointment, romance, or exclusivity claim.",
        "The Gilli Wall attachment was not visually inspected in this handoff. It is POSTED BY RΣN only; MADE BY / CAPTURED BY / FEATURING and exact pixel content remain unresolved.",
        "`rum rum` supports affectionate nickname texture, not a best-friend ranking or romance claim.",
      ]),
    ],
  };
  characterById.set("mia", allCharacters[miaIndex]);
}

// Club/Wall: Beckiie is not loud by default in the selected material; she is loud
// when the universe becomes inconvenient. Late-night self-annoyance, connection
// failure and a missing pull reward all get compact bursts of disbelief or action.
const beckiieIndex = allCharacters.findIndex(
  (character) =>
    character.id === "beckiie" ||
    character.name === "Beckiie" ||
    (character.aliases ?? []).includes("beckiieboo"),
);

const beckiieCharacter: Character = {
  id: "beckiie",
  name: "Beckiie",
  aliases: ["beckiieboo"],
  billing: "legacy",
  role: "Archive-era Club / Wall cast",
  era: "2021–2022+",
  logline:
    "Situationally dramatic in exactly the fun way: Beckiie can yell at herself for still being awake at 12:40 a.m., discover that the suggested low-electronics bedtime solution is impossible because her books are digital, answer a server hiccup with one clean `wtf`, and escalate a lost pull reward into `now imma email them and have them give me my dang mount`.",
  tags: [
    "Archive cast",
    "Club Only",
    "Wall",
    "Late-night self-annoyance",
    "Game / tech friction",
    "Dry disbelief",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Ren",
      note:
        "When Beckiie announces `WHY AM I STILL UP AT 1240 AM?!?!?!`, Ren suggests a book and less electronics; Beckiie answers with confused-bunnies media and the practical problem: `my books are digital atm`. Ren also later reports losing both Raja and Discord during the same broader connection-failure pocket. The useful texture is ordinary problem-solving banter, not a special closeness rank.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    "WHY AM I STILL UP AT 1240 AM?!?!?!",
    "my books are digital atm",
    "wtf",
    "now imma email them and have them give me my dang mount",
    "i feel like i don’t say anything that gets me here",
  ],
  claims: [
    "Beckiie can turn small practical annoyances into compact theatrical bursts: late-night wakefulness, server connection trouble, and a missing game reward all get visibly different but recognizable forms of irritation.",
    "Her Wall self-read is part of the joke: `i feel like i don’t say anything that gets me here` appears on one of only a few authored Wall objects while Beckiie herself is also posting Wall media.",
  ],
  antiFanon: [
    "Low volume in the reviewed slice does not establish Beckiie as globally shy or quiet.",
    "One support-email grievance does not establish Beckiie as broadly combative; it is a dated response to game friction.",
    "Attachment-only Wall posts are POSTED BY Beckiie. MADE BY / CAPTURED BY / FEATURING and exact visual content remain unresolved without pixel inspection.",
    "Do not infer role chronology from current or export-time role arrays.",
  ],
};

if (beckiieIndex >= 0) {
  const beckiie = allCharacters[beckiieIndex];
  allCharacters[beckiieIndex] = {
    ...beckiie,
    ...beckiieCharacter,
    aliases: [...new Set([...(beckiie.aliases ?? []), ...(beckiieCharacter.aliases ?? [])])],
    tags: [...new Set([...(beckiie.tags ?? []), ...(beckiieCharacter.tags ?? [])])],
    relationships: [...(beckiie.relationships ?? []), ...(beckiieCharacter.relationships ?? [])],
    quotes: [...new Set([...(beckiie.quotes ?? []), ...(beckiieCharacter.quotes ?? [])])],
    claims: [...new Set([...(beckiie.claims ?? []), ...(beckiieCharacter.claims ?? [])])],
    antiFanon: [...new Set([...(beckiie.antiFanon ?? []), ...(beckiieCharacter.antiFanon ?? [])])],
  };
} else {
  allCharacters.push(beckiieCharacter);
}

characterById.set(
  "beckiie",
  allCharacters.find((character) => character.id === "beckiie")!,
);
