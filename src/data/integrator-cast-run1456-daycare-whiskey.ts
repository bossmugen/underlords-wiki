import { allCharacters } from "./cast";
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

const extendRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: `${current.note} ${relationship.note}`,
      href: current.href ?? relationship.href,
    };
  } else {
    relationships.push(relationship);
  }
};

// Run 1456 Daycare: Eos does not merely keep receipts; she checks the blast radius before pressing Send.
const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex >= 0) {
  const eos = allCharacters[eosIndex] as ExtendedCharacter;
  const relationships = [...(eos.relationships ?? [])];

  extendRelationship(relationships, {
    name: "Gilli",
    note:
      "Wall gives their shorthand a more mischievous register too. When Eos says she has more material but might get `divorced` for posting it, Gilli answers `donit` and then `He wouldn't dare`. Gilli reads the hesitation as negotiable; Eos is still the one checking the blast radius before deciding whether to throw the receipt.",
    href: "/characters/gilli",
  });

  upsertRelationship(relationships, {
    name: "Tae",
    note:
      "Eos can reduce an entire accusation to `tae-`. One second later Tae answers `i knew it was coming`, keeps the bit going, and then replies directly to Eos. Their surviving Wall language is high-context enough that the dash does most of the exposition.",
  });

  allCharacters[eosIndex] = {
    ...eos,
    tags: appendUnique(eos.tags, [
      "Risk-aware receipt culture",
      "High-context shorthand",
      "Consequence calculator",
    ]),
    relationships,
    quotes: appendUnique(eos.quotes, [
      "I have one… but I might get divorced :AngryCryPan:",
      "tae-",
    ]),
    claims: appendUnique(eos.claims, [
      "On July 7, 2021 Eos says `Debating on sending more` and later `I have one… but I might get divorced`; Gilli directly encourages her with `donit` and `He wouldn't dare`. The useful contradiction is receipt-hoarding/instigator impulse with an explicit last-second consequence check.",
      "On March 11, 2022 Eos reacts to a Ren-posted attachment with only `tae-`; Tae answers one second later `i knew it was coming`, adds `and im not ashamed`, and then directly replies to Eos. That supports a bounded Eos↔Tae high-context teasing lane.",
    ]),
    antiFanon: appendUnique(eos.antiFanon, [
      "The July 7 `divorced` line remains Eos's joking social wording and does not establish a legal marriage, literal relationship status, or partner identity. No Eos-posted attachment was observed immediately after the threat; a later attachment in the sequence is POSTED BY Tofu.",
      "Ren's March 11 attachment is POSTED BY Ren and was not visually inspected. Its maker, capturer, visual subjects, and the meaning of Tae's `$11` reply remain unresolved.",
    ]),
  } as ExtendedCharacter;
}

// Run 1456 Whiskey: the doorway can reset without turning Nhou back into a stranger.
const nhouIndex = allCharacters.findIndex((character) => character.id === "nhou");
if (nhouIndex >= 0) {
  const nhou = allCharacters[nhouIndex] as ExtendedCharacter;
  const relationships = [...(nhou.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Anayss",
    note:
      "Anayss supplies the human continuity when automation gets confused: during a November 2020 MEE6 welcome she says `wb`, treating Nhou as a returner rather than a stranger. Months later Nhou drops `snouwu` into a Snow/UwU bit and Anayss echoes `Snouwu` 24.833 seconds later. Recognition survives the doorway, then turns into shared shorthand.",
  });

  upsertRelationship(relationships, {
    name: "Snow",
    note:
      "Snow already appears in Nhou's Whiskey history as the person helping him decompress after a bad shift. The April 2021 `snouwu` pocket adds the other direction: Nhou notices Snow's recognizable `UwU` habit, turns it into portable room language, and another person immediately picks it up. Their surviving texture can hold care and teasing at the same time.",
    href: "/characters/snow",
  });

  allCharacters[nhouIndex] = {
    ...nhou,
    logline:
      "Staff and compact shared-language participant whose social continuity keeps surviving administrative nonsense: the Bouncer can welcome Nhou again, Anayss can answer `wb`, and months later Nhou is fluent enough to turn Snow's `UwU` habit into `snouwu` and watch the room pick it up immediately.",
    tags: appendUnique(nhou.tags, [
      "Returning regular",
      "Social continuity",
      "Re-entry",
      "Relationship language",
    ]),
    relationships,
    quotes: appendUnique(nhou.quotes, [
      "MY EYES",
      "-vampire noises-",
      "snouwu",
    ]),
    claims: appendUnique(nhou.claims, [
      "Stable Nhou is directly present by September 25, 2020, then receives a MEE6 welcome surface on November 26; Anayss says `wb` seven minutes later. The platform is processing a doorway while a peer is recognizing a return.",
      "The same stable account receives another MEE6 welcome on March 15, 2021 and promptly completes the requested onboarding step. Repeated welcome mechanics therefore belong to Nhou's re-entry history rather than repeated-newcomer characterization.",
      "The April 14, 2021 `uwu` → `snouwu` → Anayss `Snouwu` sequence deepens Snow↔Nhou beyond one-way support: Nhou also notices and playfully authors language around Snow's recognizable text habit.",
    ]),
    antiFanon: appendUnique(nhou.antiFanon, [
      "The November 2020 and March 2021 welcome surfaces do not establish why Nhou re-entered, any leave or kick date, an account reset, or a disappearance span. Anayss's `role assigned` is a contemporaneous access action, not Staff appointment chronology.",
      "The March 2021 onboarding response contains private demographic material that is unnecessary to the public person story and remains withheld; only the behavioral fact that Nhou completed the requested doorway step is carried forward.",
    ]),
  } as ExtendedCharacter;
}
