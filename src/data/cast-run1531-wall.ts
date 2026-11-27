import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]) => [...new Set(items)];

function mergeRelationship(
  relationships: Array<{ name: string; note: string; href?: string }>,
  incoming: { name: string; note: string; href?: string },
): void {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index >= 0) relationships[index] = incoming;
  else relationships.push(incoming);
}

export function applyRun1531WallCast(characters: Character[]): void {
  const index = characters.findIndex(
    (character) =>
      character.id === "woosung" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes("454708201615523871"),
  );

  if (index < 0) return;

  const woo = characters[index] as ArchiveCharacter;
  const relationships = [...(woo.relationships ?? [])];

  mergeRelationship(relationships, {
    name: "Gilli",
    note: "Gilli can use WOO as a call-in reactor when a receipt lands. On March 26, 2023 she true-replies an Xuseio screenshot with `I knew it`, directly summons WOO, and gets `NOBU` / `TRAITOR` back a little over two minutes later. The useful texture is reaction-trust and bit fluency, not a closeness rank or proof that WOO saw anything beyond the posted premise.",
    href: "/characters/gilli",
  });
  mergeRelationship(relationships, {
    name: "Moon",
    note: "When WOO complains that talking too much has put too much material on the Hall of Shame, Moon true-replies `No no you famous uwu.` WOO answers through cry-and-skull reactions. It is a neat shame-to-fame softening beat: Moon can reframe the complaint without WOO leaving the joke.",
    href: "/characters/moon",
  });
  mergeRelationship(relationships, {
    name: "Xuseio",
    note: "Two March 26 screenshot pockets repeatedly pull WOO into alarm/prosecutor mode: first `NOBU` / `TRAITOR`, later `:AUcatstare:` → `nobu` → `why`. The recurrence supports screenshot-poster / counter-prosecutor familiarity inside Wall culture. `Nobu` remains an unresolved named referent and is not being equated with Xuseio.",
    href: "/characters/xuseio",
  });
  mergeRelationship(relationships, {
    name: "Anthos",
    note: "In WOO's earliest surviving Wall pocket, Anthos posts `woo.png`, says `just the last line`, directly summons WOO, and gets three `:Umbreontraumatized:` emotes less than a minute later. Mention + timing make local uptake probable; the scene is a bounded receipt-summons lane, not a closeness ranking or image-authorship claim.",
    href: "/characters/anthos",
  });

  characters[index] = {
    ...woo,
    tags: unique([
      ...(woo.tags ?? []),
      "Wall magnet",
      "Direct-summon reactor",
      "Counter-prosecutor",
      "Receipt filer",
      "Self-reputation",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(woo.quotes ?? []),
      "NOBU",
      "TRAITOR",
      ":AUcatstare:",
      "nobu",
      "why",
      "I need to not talk sm I got so much stuff on the hall of shame",
    ]),
    claims: unique([
      ...(woo.claims ?? []),
      "WOO's Wall role broadens across the surviving chronology: the 2020 material primarily catches WOO being summoned into receipts and reacting; by 2023 WOO is still reactive but also counter-prosecutes screenshots, posts a screenshot themself, and narrates their own Wall overrepresentation.",
      "On March 28, 2023 WOO POSTED a screenshot that collected eight `Fat_Wheeze` reactions. That is enough to treat WOO as an active filer as well as a recurring Wall target; MADE BY, CAPTURED BY, visual FEATURING, and screenshot subject remain unresolved.",
      "On April 9, 2023 WOO explicitly links ordinary talking to accumulating Hall of Shame material: `I need to not talk sm I got so much stuff on the hall of shame`. Moon's exact-parent `No no you famous uwu` turns the complaint into a fame joke while WOO stays engaged through reactions.",
      "WOO's 18 direct authored Wall messages understate the social footprint: direct summons, reaction participation, other people's receipts, and short high-amplitude interventions make WOO more present in the room than prose count alone suggests.",
    ]),
    antiFanon: unique([
      ...(woo.antiFanon ?? []),
      "Do not infer `Nobu = Xuseio` from the March 26 screenshot pockets; Nobu remains an unresolved named referent there.",
      "WOO's March 28 screenshot is POSTED BY WOO only. Do not convert that into MADE BY, CAPTURED BY, or visual FEATURING without independent media evidence.",
      "The surviving 2020→2023 chronology supports Wall-role broadening, not a global personality rewrite or proof that the earliest surviving receipt is the origin of WOO's Wall reputation.",
      "A small direct-message count is not evidence of low social presence, and the relationship lanes here do not create closeness rankings, romance, family, or formal roles.",
    ]),
  } as ArchiveCharacter;
}
