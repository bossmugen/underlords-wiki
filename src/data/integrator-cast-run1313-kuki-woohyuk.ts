import "./integrator-cast-run1321-gabby-egotism";
import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = { ...relationships[index], ...next };
  else relationships.push(next);
};

// Louvre-family 2026-09-17 tail: deepen the existing Kuki owner rather than
// turning one workshop into a second Cookie file or a standalone Episode.
const kukiIndex = allCharacters.findIndex((character) => character.id === "cookie-juicycoochie");
if (kukiIndex < 0) {
  throw new Error("Run 1313 expected the canonical Kuki owner; refusing to create a duplicate Cookie.");
}

const kuki = allCharacters[kukiIndex] as ExtendedCharacter;
const kukiRelationships = [...(kuki.relationships ?? [])];
upsertRelationship(
  kukiRelationships,
  "Gilli",
  "In the October 2020 server-icon/banner workshop, Kuki and Sye give concrete visual feedback while the graphic is still changing. Gilli uses the help, revises the object, then says the result is `because of your help lol would have been lost` before moving on to the banner. Kuki reads here as a useful live creative eye, not applause furniture; one workshop still does not make them a permanent design duo.",
  "/characters/gilli",
);

allCharacters[kukiIndex] = {
  ...kuki,
  tags: unique([...(kuki.tags ?? []), "Creative peer", "Live critique", "Authorship boundary"]),
  relationships: kukiRelationships,
  claims: unique([
    ...(kuki.claims ?? []),
    "The October 22, 2020 Louvre workshop adds a collaborator-side view to Kuki's maker file: Kuki and Sye give concrete visual feedback while Gilli is building the server icon/banner, Gilli applies the help, explicitly credits it, and keeps moving. Kuki can put useful attention into somebody else's mutable work instead of only presenting his own.",
    "Read beside Kuki's recurring `Don't steal my art plz` creator-boundary language, the useful contradiction is collaborative process without authorship becoming communal mush. Ideas can move between people while the maker still matters.",
  ]),
  antiFanon: unique([
    ...(kuki.antiFanon ?? []),
    "The October 2020 workshop supports a useful creative-peer moment with Gilli and Sye; it does not establish a permanent design trio, formal art office, or standing approval authority for Kuki.",
    "`Don't steal my art plz` is creator-boundary language. Without surrounding evidence of an actual theft, do not manufacture a theft incident or a universal UL credit policy from the line.",
  ]),
} as ExtendedCharacter;
characterById.set("cookie-juicycoochie", allCharacters[kukiIndex]);

// Wall 2026-09-17 tail: Woohyuk has enough repeated person-shape for a real
// structured dossier. Keep the individual receipts subordinate to the person.
const woohyukId = "woohyuk";
const woohyukSeed: ExtendedCharacter = {
  id: woohyukId,
  name: "Woohyuk",
  aliases: ["ash_island"],
  billing: "guest",
  role: "Archive-era Wall / extended-family cast",
  era: "2020–2021+",
  logline:
    "Woohyuk notices people for sport and for care. The same attention that produces extremely specific Gilli roasts also catches somebody repeating themself late at night, clocks Tae being awake, congratulates Shiya, and remembers exactly when the Wall could use an old receipt. Naturally, the man who asks for `throwback shames` becomes a magnificent defendant the second the filing cabinet points back at him: bro code is invoked, witnesses are offered imaginary top-ups, dignity leaves through a side door.",
  tags: [
    "Archive cast",
    "Wall",
    "People-specific roasts",
    "Low-key check-ins",
    "Active receipt filer",
    "Theatrical defendant",
    "Gaming",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Tae",
      note:
        "Woohyuk notices Tae being awake with `Wow tae you're awake.` Tae answers `yeah??` and then volunteers `Dw I slept`. The reassurance makes the concern legible without turning Woohyuk into a caretaker or inventing a health story.",
      href: "/characters/tae",
    },
    {
      name: "Gilli",
      note:
        "Woohyuk's Gilli jokes are weirdly specific—spirit week, sergeants put on timeout—which makes the roast feel observed rather than generic. It supports recurring social familiarity in the Wall lane, not a friendship rank by itself.",
      href: "/characters/gilli",
    },
  ],
  quotes: [
    "please sleep",
    "Wow tae you're awake.",
    "Gilli the type to never miss out on high school spirit week",
    "Gilli dress like she put her sergeants on timeout",
    "Dammn shiya, congrats!",
    "The goal of mass effect IS sleeping with every character PERIODT",
    "yea watermelon is just sweet water",
    "are we doing throwback shames",
    "yall said worse things, thought we had bro code bro",
    "Bro- pls delete, I will top up the witnesses",
  ],
  claims: [
    "Across late 2020 into 2021, Woohyuk repeatedly uses person-specific attention in more than one register. He can notice that somebody repeated themself and say `please sleep`, clock Tae being awake strongly enough that Tae immediately reassures him `Dw I slept`, roast Gilli with oddly tailored imagery, and congratulate Shiya. The throughline is noticing people; the output can be care, encouragement, or a joke at their expense.",
    "Woohyuk is an active participant in Screenshot Court rather than a passive target. He asks `are we doing throwback shames`, follows it by filing an older attachment, and later challenges Tofu to post. When receipts turn toward him, the participation does not stop; it changes costume into `bro code` betrayal and imaginary witness-bribery damage control.",
    "The useful contradiction is Wall instigator versus theatrical defendant. He understands and feeds the ritual, then performs outrage when the same ritual works perfectly on him. That is participation in the joke, not evidence that he actually rejects the room's receipt culture.",
    "Petty Crimes: Woohyuk insists the true objective of Mass Effect is sleeping with every character, argues watermelon is `just sweet water` wearing melon form, asks for throwback shames, and offers to `top up the witnesses` when Ren refuses to delete a receipt.",
  ],
  antiFanon: [
    "The Tae and late-night sleep beats support low-key social concern only. Do not turn them into medical inference, formal caretaking, or a ranked friendship claim.",
    "`bro code` is joke-language, and `I will top up the witnesses` is mock-bribery inside Screenshot Court. Neither creates a literal relationship class, payment record, corruption claim, or governance fact.",
    "The Mass Effect line is gaming humor about a game's romance system, not evidence about Woohyuk's literal sex or romantic life.",
    "Woohyuk's March 13 throwback attachment is POSTED BY Woohyuk. MADE BY, CAPTURED BY, FEATURING, depicted subject, and the raw filename's apparent capture date remain unclaimed without independent provenance.",
    "Exporter/current role metadata is not used here to infer appointment chronology or a formal UL office.",
  ],
};

const woohyukIndex = allCharacters.findIndex((character) => character.id === woohyukId);
if (woohyukIndex >= 0) {
  const current = allCharacters[woohyukIndex] as ExtendedCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of woohyukSeed.relationships ?? []) {
    upsertRelationship(relationships, relationship.name, relationship.note, relationship.href);
  }
  allCharacters[woohyukIndex] = {
    ...current,
    ...woohyukSeed,
    aliases: unique([...(current.aliases ?? []), ...(woohyukSeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(woohyukSeed.tags ?? [])]),
    relationships,
    quotes: unique([...(current.quotes ?? []), ...(woohyukSeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(woohyukSeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(woohyukSeed.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(woohyukSeed);
}

const woohyuk = allCharacters.find((character) => character.id === woohyukId)!;
characterById.set(woohyukId, woohyuk);
const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(woohyukId)) {
  archiveCastGroup.characterIds.push(woohyukId);
}
