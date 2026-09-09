import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  next: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === next.name);
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

// Gabu — the useful part of the Saber-control slice is not "she used a bot".
// It is the way she learns shared infrastructure: ask the boundary, try it herself,
// accept a correction without ego, repair the mistake, then keep the skill.
const gabuIndex = allCharacters.findIndex((character) => character.id === "gabu");
if (gabuIndex >= 0) {
  const gabu = allCharacters[gabuIndex] as ExtendedCharacter;
  const relationships = [...(gabu.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Sye",
    note:
      "In Saber control, Sye offers to take over while Gabu is learning the event commands; Gabu answers `i think i can do it hahaha tysm if i get lost i call you XD`. Sye lets her keep the wheel, gives the missing `start-date` option when she gets stuck, says `Good Job`, and Gabu celebrates the repaired event. It is a trusted technical-backstop lane: help is available without turning autonomy into helplessness.",
    href: "/characters/sye",
  });

  const gabuClaims = [
    "On 2020-11-24 Gabu asks Snow before adding Yakuza Peak to shared Saber event infrastructure, then chooses to attempt the configuration herself after Sye offers to do it for her. When the first event has the wrong date, she asks how to fix it, applies Sye's `start-date` correction successfully, and celebrates the repaired result.",
    "By August–September 2021 Gabu is independently querying and changing Saber configuration, wiring `@Drink water reminder : %t` into an announcement template, scheduling Photoshoot reminders, correcting bad syntax within seconds, and pinning the finished event. The repeated behavior supports care-through-maintenance and learn-in-public competence rather than immaculate expertise from above.",
  ];

  const gabuAntiFanon = [
    "These Saber-control scenes show Gabu configuring and maintaining shared event/reminder infrastructure. They do not establish that she programmed Saber, created the underlying Discord channels, held a separate formal bot/Photoshoot office, or date her Officer/Underboss appointment.",
    "Snow's `so add em Gabu` is permission for the event in that scene, not a general appointment or hierarchy receipt.",
    "Sye's help supports a technical-backstop relationship in this lane; it is not a closeness ranking or formal mentorship appointment.",
  ];

  allCharacters[gabuIndex] = {
    ...gabu,
    logline:
      "Systems brain, hydration department, and the person most likely to make care sound like routine maintenance — including learning shared infrastructure by touching it herself, asking when she is lost, repairing the syntax, and coming back later as the repeat operator.",
    tags: [
      ...new Set([
        ...(gabu.tags ?? []),
        "Saber control",
        "Care as infrastructure",
        "Learning in public",
        "Repeat maintenance",
        "Photoshoot reminders",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(gabu.quotes ?? []),
        "i think i can do it hahaha tysm if i get lost i call you XD",
        "oh i did it",
        "omg how",
        "YAAAYY tysm for help!!!",
        "@Drink water reminder : %t",
      ]),
    ],
    claims: [...new Set([...(gabu.claims ?? []), ...gabuClaims])],
    antiFanon: [...new Set([...(gabu.antiFanon ?? []), ...gabuAntiFanon])],
  } as ExtendedCharacter;

  characterById.set("gabu", allCharacters[gabuIndex]);
}

// BeaEder — compact WIKI owner for a person who can hunt the receipt and then,
// with very little ceremony, become the receipt without leaving the joke.
const beaId = "beaeder";
const beaIndex = allCharacters.findIndex(
  (character) =>
    character.id === beaId ||
    character.name === "BeaEder" ||
    (character.aliases ?? []).some((alias) => alias.toLowerCase() === "beaeder"),
);

const beaRelationshipHamitteY = {
  name: "HamitteY",
  note:
    "HamitteY directly tags Bea with a Dragon Raja screenshot; Bea appears forty-one seconds later with `I-`, then `Dem`. The pixels are unresolved, but the social rhythm is not: Bea recognizes the filing well enough to collapse into two tiny reactions and stay in the room rather than demand an explanation or exit the bit.",
};

const beaQuotes = [
  "Oh god",
  "I forgot I told people to rub their booties on me",
  "Found this gem going thru my phone",
  "I-",
  "Dem",
  "Oh god two in one night",
  "At least it was just those two",
  "Wait can I be sent there too? Sounds like helluva party",
];

const beaClaims = [
  "BeaEder is stable account 688083512821153809 (`beaeder`). The Wall shows a recurring prosecutor/defendant contradiction: she digs old material out of her phone and calls it a `gem`, but she also reacts to her own forgotten nonsense, gets directly filed by HamitteY, counts multiple hits in one night, and keeps participating.",
  "On 2021-07-26 Bea posts an old phone find with `Found this gem going thru my phone`; a pooled Deleted User later asks when they wrote the material, and Bea supplies only the relative memory anchor `before I went on vacation`.",
  "On 2021-09-18 Bea's `Wait can I be sent there too? Sounds like helluva party` is probably taking up Ricochet's earlier `underground underlord stripclub` destination in the same Wall pocket, but there is no structured Reply edge and intervening traffic exists.",
];

const beaAntiFanon = [
  "Bea's phone image is POSTED BY BeaEder only. MADE BY, CAPTURED BY and FEATURING are unresolved because the pixels were not inspected.",
  "HamitteY's Dragon Raja screenshot is POSTED BY HamitteY only. Its exact charge, maker, capturer and depicted people remain unresolved.",
  "The pooled Deleted User in Bea's phone-gem thread remains unresolved and must not be identity-mapped from wording or proximity.",
  "The September strip-club uptake is probable same-pocket context, not a mechanical Reply claim, literal destination, sexual-behavior claim, or relationship claim.",
  "Bea's receipt-hunter / willing-defendant pattern is character texture, not a formal Wall role, moderation office, or closeness ranking with HamitteY.",
];

const beaCharacter: ExtendedCharacter = {
  id: beaId,
  name: "BeaEder",
  aliases: ["beaeder"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021–",
  logline:
    "Receipt hunter who can take being the receipt: Bea digs old `gems` out of her phone, rediscovers her own incriminating sentences with `Oh god`, gets filed into `I-` / `Dem`, counts the night's hits, and still volunteers for the next ridiculous destination because it sounds like a party.",
  tags: [
    "Archive cast",
    "Wall",
    "Receipt hunter",
    "Willing defendant",
    "Phone archaeology",
    "Self-incrimination",
    "Evidence-room teasing",
    "Petty Crimes",
  ],
  relationships: [beaRelationshipHamitteY],
  quotes: beaQuotes,
  claims: beaClaims,
  antiFanon: beaAntiFanon,
};

if (beaIndex >= 0) {
  const bea = allCharacters[beaIndex] as ExtendedCharacter;
  const relationships = [...(bea.relationships ?? [])];
  upsertRelationship(relationships, beaRelationshipHamitteY);

  allCharacters[beaIndex] = {
    ...bea,
    ...beaCharacter,
    aliases: [...new Set([...(bea.aliases ?? []), ...(beaCharacter.aliases ?? [])])],
    tags: [...new Set([...(bea.tags ?? []), ...(beaCharacter.tags ?? [])])],
    relationships,
    quotes: [...new Set([...(bea.quotes ?? []), ...beaQuotes])],
    claims: [...new Set([...(bea.claims ?? []), ...beaClaims])],
    antiFanon: [...new Set([...(bea.antiFanon ?? []), ...beaAntiFanon])],
  } as ExtendedCharacter;
} else {
  allCharacters.push(beaCharacter);
}

const resolvedBea = allCharacters.find((character) => character.id === beaId)!;
characterById.set(beaId, resolvedBea);
