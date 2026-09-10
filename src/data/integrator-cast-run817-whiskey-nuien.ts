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

const nuienIndex = allCharacters.findIndex((character) => character.id === "nuien");
const existing = (nuienIndex >= 0 ? allCharacters[nuienIndex] : undefined) as ExtendedCharacter | undefined;
const relationships = [...(existing?.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Gilli",
  note: "During a May 2020 server-transfer hypothetical, Gilli answers Nui's `QUIT QUIT` with `No you WONT WONT`; Nui gives the doubled language straight back with `OKAY I WONT WONT`. The useful texture is familiar mock-veto and mirrored phrasing, not authority over whether Nuien could leave.",
  href: "/characters/gilli",
});
upsertRelationship(relationships, {
  name: "Ren",
  note: "Ren's `NU NU` answer to Nui's mock-exit talk gets `LOL YUS RV LEMME TAKE U WITH ME`. Even the escape fantasy starts collecting passengers; it is an inclusion beat inside a joke, not a closeness ranking or literal departure pact.",
  href: "/characters/ren",
});
upsertRelationship(relationships, {
  name: "Mugen",
  note: "Mugen can summon Nui into Whiskey with `GET IN THE WHISKEY ROOM BIIIIIHHHH` and get `ON IT BITCHHHHH` seconds later; later Mugen says she updated a Tumbleweed Nui made and offers to collaborate. Summons, making and revision all live comfortably in the same low-ceremony lane.",
  href: "/characters/mugen",
});

const nuien: ExtendedCharacter = {
  id: "nuien",
  name: "Nuien",
  aliases: appendUnique(existing?.aliases, ["Nui", "papi"]),
  billing: existing?.billing ?? "legacy",
  role: existing?.role ?? "Staff",
  era: existing?.era ?? "2020–",
  logline:
    "Gatherer with dramatic exit language and sticky belonging: Nuien can count a live signup down to `SOLD OUT`, make the room's relationships visible in a family-tree object, threaten `QUIT QUIT`, then immediately start taking people with her until the hypothetical escape has become a group trip.",
  tags: appendUnique(existing?.tags, [
    "Staff",
    "Whiskey",
    "Lobby",
    "Group movement",
    "Tumbleweed",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(existing?.quotes, [
    "We can all be weak bitches together",
    "LOL YUS RV LEMME TAKE U WITH ME",
    "OKAY I WONT WONT",
    "We can all transfer to a diff server :>",
    "ONE SPOT HURRYYYY",
    "SOLD OUT",
  ]),
  claims: appendUnique(existing?.claims, [
    "In the May 27, 2020 server-population / possible-transfer conversation, Nui's mock `QUIT QUIT` does not stay solitary: Ren objects, Nui says `LEMME TAKE U WITH ME`, Gilli mock-vetoes her in the same doubled syntax, and Nui later suggests everybody could transfer together.",
    "On May 18, 2020, Nui actively counts an unspecified `cc` signup from two spots to one and then `SOLD OUT`, supporting a recurring gatherer / fill-the-room behavior without inventing what the shorthand meant.",
    "Mugen's June 2020 wording credits an antecedent Tumbleweed to Nui while saying Mugen updated the surviving version and could collaborate. Maker of the antecedent and updater/poster of the later object remain separate attribution claims.",
  ]),
  antiFanon: appendUnique(existing?.antiFanon, [
    "Nui is the 2020 display name of Nuien's stable account in this material; do not confuse Nuien with Illien / Euros, who is a separate person.",
    "The May 27 `QUIT QUIT` / transfer thread is a conversational hypothetical. It does not establish an actual resignation, server transfer, merger decision, or authority to move UL.",
    "Gilli's `No you WONT WONT` is mock-veto language inside the bit, not evidence that Gilli controlled Nuien's membership or movement.",
    "`LEMME TAKE U WITH ME` supports an inclusion reflex toward Ren in this scene; it is not a literal departure pact, exclusivity claim, or friendship ranking.",
    "The May 18 source only says `cc`; do not expand the shorthand without a direct source.",
    "For the Tumbleweed family, MADE BY Nui for the antecedent comes from Mugen's contemporaneous statement; the surviving updated version is UPDATED / POSTED BY Mugen. Do not collapse those credits or claim absolute origin from earliest survival.",
  ]),
};

if (nuienIndex >= 0) allCharacters[nuienIndex] = nuien;
else allCharacters.push(nuien);

characterById.set("nuien", nuien);
