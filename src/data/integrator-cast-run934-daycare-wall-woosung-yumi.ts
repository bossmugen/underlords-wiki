import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex < 0) {
  throw new Error("Run 934 expected canonical Woosung / WOO; refusing to create a duplicate owner.");
}

const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
const woosungRelationships = [...(woosung.relationships ?? [])].filter(
  (relationship) =>
    !(
      relationship.name === "Ricochet" &&
      /OMG NO WHY WOULD U|head[- ]?pat|pat-head|March 2023 Wall poke/i.test(relationship.note)
    ),
);

upsertRelationship(woosungRelationships, {
  name: "Moon",
  note:
    "When Woosung says she needs to talk less because she has `so much stuff on the hall of shame`, Moon answers the exact message with `No no you famous uwu.` Woosung responds with cry/skull reactions instead of trying to escape the tease. It is a compact familiar rhythm: Moon reframes embarrassment as celebrity and WOO willingly keeps the joke alive.",
  href: "/characters/moon",
});
upsertRelationship(woosungRelationships, {
  name: "Nobu",
  note:
    "Woosung can turn Nobu into a miniature prosecution with two messages — `NOBU`, then `TRAITOR` — and the room immediately reacts like it understands the assignment. A later Nobu/Xuseio-posted screenshot gets WOO's stare emoji and `nobu`. The attachment itself stays uninspected; the relationship texture is the comfortable callback, not an invented charge sheet.",
  href: "/characters/nobu",
});
upsertRelationship(woosungRelationships, {
  name: "Anthos",
  note:
    "Before Daycare becomes the main surviving room for WOO, Anthos is already inside the shared-bit grammar: Woosung participates in an `eli kill @Anthos` action-command pocket, and Anthos later quotes WOO's `cool i exist` back at her with `@WOO lmao`. The callback matters more than the bot counter; Anthos noticed the line and knew it was funny enough to return.",
  href: "/characters/anthos",
});
upsertRelationship(woosungRelationships, {
  name: "Rich",
  note:
    "When Woosung protests a March 30 Wall filing with `OMG NO WHY WOULD U`, Rich answers her exact message with a pat-head GIF. The beat lands as teasing followed immediately by a tiny softener; Rich, not Ricochet, is the person across from WOO in this exchange.",
  href: "/characters/rich",
});

allCharacters[woosungIndex] = {
  ...woosung,
  logline:
    "Former ScarletMoon leader, VIP and permanent Platelet whose humor works by compression: Woosung can introduce herself with `Hi Woosung.....idk what else`, announce `cool i exist`, file a screenshot into the Wall herself, and still become conspicuous enough that Moon answers her Hall-of-Shame self-censorship plan with `No no you famous uwu.` Understatement is the baseline; give WOO a shared bit, a target, or one remembered line and the tiny sentence suddenly owns the room.",
  tags: unique([
    ...(woosung.tags ?? []),
    "Dry understatement",
    "Compressed humor",
    "Receipt magnet",
    "Occasional receipt filer",
    "Self-aware Wall reputation",
    "Petty Crimes",
  ]),
  relationships: woosungRelationships,
  quotes: unique([
    ...(woosung.quotes ?? []),
    "Hi Woosung.....idk what else",
    "cool i exist",
    "NOBU",
    "TRAITOR",
    "OMG NO WHY WOULD U",
    "I need to not talk sm I got so much stuff on the hall of shame",
  ]),
  claims: unique([
    ...(woosung.claims ?? []).filter(
      (claim) =>
        !/2023-03-30 Ricochet \/ dragonrichard tags WOO|structured reply chain identifies Ricochet as WOO's counterpart/i.test(
          claim,
        ),
    ),
    "The reviewed Daycare people ledger gives stable account 454708201615523871 a substantial direct-room footprint: 856 authored Daycare messages from 2021-08-03 through 2023-05-29. Supporting Lobby, Club-Only, and Wall scenes are used to deepen that already-anchored person rather than substitute for the Daycare body.",
    "Woosung's surviving self-presentation is strikingly economical: `Hi Woosung.....idk what else` in July 2020 and `cool i exist` a month later. Anthos later quotes the second line back at WOO, turning the dry self-minimization into an explicitly noticed room joke.",
    "By March 2023 the same compressed style can produce communal theater with almost no prose: `NOBU` / `TRAITOR` draws a multi-person reaction stack, and a later Nobu/Xuseio screenshot gets WOO's stare emoji plus `nobu`. The screenshot pixels remain uninspected; the public read comes from wording, timing, callback and reception.",
    "On March 28, 2023, WOO posts a screenshot attachment into Wall and gets eight `Fat_Wheeze` reactions. Two days later she is on the receiving end, protests `OMG NO WHY WOULD U`, and Rich answers that exact message with a pat-head GIF. By April 9 WOO says she should talk less because she has `so much stuff on the hall of shame`; Moon directly replies `No no you famous uwu`, and WOO answers with cry/skull reactions. The useful contradiction is filer and defendant at once: she can help feed Screenshot Court and still be genuinely theatrical when court turns back on her.",
  ]),
  antiFanon: unique([
    ...(woosung.antiFanon ?? []).filter(
      (claim) =>
        !/March 30, 2023.*with Ricochet|exchange is with Ricochet|not Rich \/ DragonRich/i.test(claim),
    ),
    "The Nobu/Xuseio Wall attachment remains visually uninspected. POSTED BY Nobu/Xuseio does not establish what Nobu allegedly did, who made or captured the image, or who appears in it.",
    "WOO is POSTED BY for the March 28 screenshot attachment. That does not establish that she made it, captured it, or appears in it.",
    "Woosung and Anthos's Eli action-command pocket is bot/social ritual, not literal violence and not a quantitative measure of intimacy.",
    "Moon's `famous` tease and Woosung's Hall-of-Shame line describe in-room reputation, not formal status, popularity ranking, or governance.",
    "Rich / DragonRich and Ricochet are separate canonical people. The March 30 `OMG NO WHY WOULD U` → pat-head exchange belongs to Rich; do not reassign it to Ricochet because an older handoff conflated the names.",
    "The Eli action-response stream can be localized to exported tombstone ID 456226577798135808 across reviewed feed/kill actions, but the historical account/handler identity remains unresolved and is not collapsed into a person.",
  ]),
} as ExtendedCharacter;
characterById.set("woosung", allCharacters[woosungIndex]);

const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex >= 0) {
  const ricochet = allCharacters[ricochetIndex] as ExtendedCharacter;
  const ricochetRelationships = [...(ricochet.relationships ?? [])].filter(
    (relationship) =>
      !(
        relationship.name === "Woosung" &&
        /OMG NO WHY WOULD U|head[- ]?pat|pat-head|March 2023 Wall poke/i.test(relationship.note)
      ),
  );
  allCharacters[ricochetIndex] = {
    ...ricochet,
    relationships: ricochetRelationships,
    claims: (ricochet.claims ?? []).filter(
      (claim) =>
        !/2023-03-30 Ricochet \/ dragonrichard authored|WOO TRUE-replied `OMG NO WHY WOULD U`/i.test(claim),
    ),
    antiFanon: unique([
      ...(ricochet.antiFanon ?? []).filter(
        (claim) => !/March 30 Wall exchange belongs to Ricochet|not Rich \/ DragonRich/i.test(claim),
      ),
      "Rich / DragonRich and Ricochet remain separate canonical people. The March 30, 2023 WOO pat-head exchange belongs to Rich and is intentionally excluded from Ricochet's dossier.",
    ]),
  } as ExtendedCharacter;
  characterById.set("ricochet", allCharacters[ricochetIndex]);
}

const richIndex = allCharacters.findIndex((character) => character.id === "rich");
if (richIndex >= 0) {
  const rich = allCharacters[richIndex] as ExtendedCharacter;
  const richRelationships = [...(rich.relationships ?? [])];
  upsertRelationship(richRelationships, {
    name: "Woosung",
    note:
      "Woosung's `OMG NO WHY WOULD U` protest gets an immediate pat-head GIF from Rich. It is a compact tease-and-soften beat, and the stable identity rail keeps this Rich / DragonRich rather than Ricochet.",
    href: "/characters/woosung",
  });
  allCharacters[richIndex] = {
    ...rich,
    relationships: richRelationships,
    claims: unique([
      ...(rich.claims ?? []),
      "On March 30, 2023, Rich / DragonRich answers Woosung's `OMG NO WHY WOULD U` with a pat-head GIF. The exchange belongs to Rich, not Ricochet; the two remain separate canonical people.",
    ]),
  } as ExtendedCharacter;
  characterById.set("rich", allCharacters[richIndex]);
}

const yumiIndex = allCharacters.findIndex((character) => character.id === "yumi");
if (yumiIndex < 0) {
  throw new Error("Run 934 expected canonical Yumi / Yummibears; refusing to create a duplicate owner.");
}

const yumi = allCharacters[yumiIndex] as ExtendedCharacter;
allCharacters[yumiIndex] = {
  ...yumi,
  tags: unique([
    ...(yumi.tags ?? []),
    "Low-volume chorus",
    "Playful dogpile brake",
    "Affectionate interjections",
    "Petty Crimes",
  ]),
  quotes: unique([...(yumi.quotes ?? []), "Pfffft", "Staph bullying my bb"]),
  claims: unique([
    ...(yumi.claims ?? []),
    "A recovered Wall micro-pocket gives Yumi only two authored lines, 33.428 seconds apart, but they form a clean social turn: first `Pfffft`, then `Staph bullying my bb`. She is laughing with the room and then lightly tugging the dogpile backward without leaving the joke's register.",
    "The useful read is chorus member plus playful brake: Yumi can participate in the teasing atmosphere and still inject affectionate mock-protection once the pile-on gets good enough. `Staph` and `my bb` keep the intervention inside the bit rather than turning it into a formal scolding.",
  ]),
  antiFanon: unique([
    ...(yumi.antiFanon ?? []),
    "The target of Yumi's `my bb` is unresolved in the recovered Wall micro-pocket. The phrase does not establish romance, biological family, exclusivity, or a named relationship without separate support.",
    "Two adjacent Wall lines deepen an existing Yumi owner; they do not by themselves establish a whole-life personality arc or change her formal retired-Officer history.",
  ]),
} as ExtendedCharacter;
characterById.set("yumi", allCharacters[yumiIndex]);
