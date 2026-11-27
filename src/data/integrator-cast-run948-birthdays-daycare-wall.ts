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

const requireCharacter = (id: string, name: string): [number, ExtendedCharacter] => {
  const index = allCharacters.findIndex(
    (character) => character.id === id || character.name === name,
  );
  if (index < 0) {
    throw new Error(`Run 948 expected canonical ${name} owner; refusing to create a duplicate.`);
  }
  return [index, allCharacters[index] as ExtendedCharacter];
};

const save = (index: number, character: ExtendedCharacter) => {
  allCharacters[index] = character;
  characterById.set(character.id, character);
};

// Saiyura — deepen the existing thin Lobby owner into the person revealed by the 2023 support-room body.
{
  const [index, saiyura] = requireCharacter("saiyura", "Saiyura");
  const relationships = [...(saiyura.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "Sai posts that she got about $300 of Bath & Body Works merchandise for $100; by the next morning Mugen is saying `Thanks to Sai I bought about 600 dollars worth but paid 200` and confessing that a 75%-off sale has turned into a 60+-item cart. Sai does not need a long sales pitch to become a shopping catalyst.",
    href: "/characters/mugen",
  });

  save(index, {
    ...saiyura,
    logline:
      "Saiyura has a tiny authored footprint and a weird talent for making one small find everybody else's problem: cursed gummies become a room naming exercise, a Bath & Body Works bargain becomes Mugen's shopping spiral, and months later a Christmas GIF still gets a warm little chorus. Curious enough to bring the thing in; skeptical enough to stand beside it and say absolutely not.",
    tags: unique([
      ...(saiyura.tags ?? []),
      "Ordinary life",
      "Find-dropper",
      "Shopping",
      "Low-volume",
      "Social catalyst",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(saiyura.quotes ?? []),
      "Look at what I found",
      "Apparently theyre supposed to be mandarin flavor 😭😭☀️",
      "I don’t know I don’t trust it",
      "I think i rather it be cheese flavor 😭",
      "I bought about $300 worth of stuff rom bath and body works for $100 🧚🏾‍♀️✨",
    ]),
    claims: unique([
      ...(saiyura.claims ?? []),
      "In late May 2023 Saiyura drops an odd food find into Club Only, reports that the mac-and-cheese gummies are supposedly mandarin flavored, immediately distrusts that information, and eventually decides cheese flavor would somehow be safer. The room supplies the `Gummiesss` / `cheese gummies` / `Chummies` chorus; Sai supplies the find and the skepticism.",
      "On June 3, 2023 Saiyura says she bought about $300 of Bath & Body Works merchandise for $100. Mugen later explicitly credits Sai while narrating her own much larger discounted cart, supporting a modest but real bargain/recommendation influence between them.",
      "Saiyura's direct Daycare-authored span ends in May 2023, while the same stable account remains active in Club Only in late May, June, and again at Christmas. For Sai specifically, leaving the Daycare ledger did not mean disappearing socially.",
    ]),
    antiFanon: unique([
      ...(saiyura.antiFanon ?? []),
      "The novelty-food attachment is POSTED BY Saiyura only. Its pixels were not inspected; do not assign maker, capturer, featured-person, or exact product-image attribution from the post alone.",
      "Sai says the gummies are `supposed to be` mandarin flavored and does not say she ate them. Keep the flavor uncertain and do not turn one cursed-snack scene into a broad food preference.",
      "Mugen's `Thanks to Sai` supports shopping influence, not a private coupon, referral link, direct message, or a closeness ranking.",
      "Saiyura's May-only direct Daycare span plus later Club Only activity is a person-level room-exit ≠ social-exit control, not a universal explanation for Daycare's later decline.",
    ]),
  });
}

// Tae — reciprocal receipt game: prosecutor, defendant, and delighted counter-surveillance target.
{
  const [index, tae] = requireCharacter("tae", "Tae");
  const relationships = [...(tae.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ren",
    note:
      "Their Wall rhythm is reciprocal on purpose. Tae boasts that Ren will never catch her slipping, later says she is waiting for the day `rv` says something questionable so she can post it, and Ren structurally replies that she is already watching. Tae's `Sayy lesss` accepts the counter-surveillance instead of treating it as hostility.",
    href: "/characters/ren",
  });

  save(index, {
    ...tae,
    logline:
      "Tae can prosecute the Wall, reassure the defendant, insist nobody will ever catch her slipping, and then spend months filing appeals when the camera turns around. The fun is reciprocity: Screenshot Court works best for her when everybody is allowed to prosecute everybody.",
    tags: unique([
      ...(tae.tags ?? []),
      "Wall",
      "Screenshot court",
      "Reciprocal receipts",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(tae.quotes ?? []),
      "Caught in 4k",
      "yall well never catch me slipping",
      "Its ok bestie we all do mistakes",
      "Even me so don’t worry",
      "im waiting for the day rv says something questionable so i can post it here",
      "Sayy lesss",
    ]),
    claims: unique([
      ...(tae.claims ?? []),
      "Tae's Wall posture is deliberately two-sided. She uses `Caught in 4k`, immediately reassures Baby Lyssa with `Its ok bestie we all do mistakes` / `Even me so don’t worry`, and across separate months keeps insisting Ren will never catch her slipping.",
      "On March 13, 2021 Tae says she is waiting for `rv` to say something questionable so she can post it. Ren structurally replies `Bold of you to asume I’m not here already`; Tae structurally replies `Sayy lesss`. In this local scene `rv` is Ren, and the exchange supports a playful prosecution rivalry / reciprocal watchfulness lane rather than a global alias rule or closeness rank.",
      "A nearby `i only have one` → `But I deleted it` pocket is contextually part of the receipt/exposure game, but the intervening image remains visually uninspected; the public character read comes from Tae's own words rather than reconstructed pixels.",
    ]),
    antiFanon: unique([
      ...(tae.antiFanon ?? []),
      "The Ren/Tae receipt rivalry is a bounded Wall relationship pattern. It does not establish off-Wall surveillance, a formal role, a closeness ranking, or a global `rv` alias rule.",
      "The image between Tae's `i only have one` and `But I deleted it` is uninspected. Do not infer exact contents, maker, capturer, or featured people from adjacency.",
      "A nearby sensitive-domain joke/denial is intentionally excluded from the public person read.",
    ]),
  });
}

// Mugen ↔ Gilli — direct contemporary friendship language, kept human rather than turned into a literal category.
{
  const [gilliIndex, gilli] = requireCharacter("gilli", "Gilli");
  const gilliRelationships = [...(gilli.relationships ?? [])];
  upsertRelationship(gilliRelationships, {
    name: "Mugen",
    note:
      "On Gilli's June 2020 birthday, Mugen publicly calls her `my kind and beautiful and wonderful friend`, wishes her a day full of hugs, drinks, and treats, and ends with `Love you`. It is unusually direct contemporary affection without needing to become romance, family, or an exclusivity claim.",
    href: "/characters/mugen",
  });
  save(gilliIndex, {
    ...gilli,
    tags: unique([...(gilli.tags ?? []), "Mugen friendship", "Birthday" ]),
    relationships: gilliRelationships,
    claims: unique([
      ...(gilli.claims ?? []),
      "On June 15, 2020 Mugen publicly calls Gilli `my kind and beautiful and wonderful friend`, wishes her `a kickass day full of hugs and drinks and treats`, and ends `Love you`. The message is a strong contemporary friendship/affection anchor.",
    ]),
    antiFanon: unique([
      ...(gilli.antiFanon ?? []),
      "Mugen's birthday `Love you` and friendship language are ordinary affectionate relationship evidence; they do not by themselves establish romance, literal family, exclusivity, or organizer status for either person.",
    ]),
  });

  const [mugenIndex, mugen] = requireCharacter("mugen", "Mugen");
  const mugenRelationships = [...(mugen.relationships ?? [])];
  upsertRelationship(mugenRelationships, {
    name: "Gilli",
    note:
      "The June 2020 birthday post is unusually plainspoken for Mugen: `my kind and beautiful and wonderful friend`, then `Love you`. The opening `oop we're doing the announcements now then--` also reads like Mugen joining the birthday wave already in motion rather than claiming the production as hers.",
    href: "/characters/gilli",
  });
  save(mugenIndex, {
    ...mugen,
    tags: unique([...(mugen.tags ?? []), "Gilli friendship", "Birthday" ]),
    relationships: mugenRelationships,
    quotes: unique([
      ...(mugen.quotes ?? []),
      "To my kind and beautiful and wonderful friend, happy happy birthday!",
    ]),
    claims: unique([
      ...(mugen.claims ?? []),
      "Mugen's June 15, 2020 birthday message to Gilli explicitly names her as a `kind and beautiful and wonderful friend` and ends `Love you`, giving the relationship a direct contemporary affection anchor rather than leaving it to role adjacency or later nickname lore.",
    ]),
    antiFanon: unique([
      ...(mugen.antiFanon ?? []),
      "The Gilli birthday post supports friendship and affection. Its `oop we're doing the announcements now then--` opening places Mugen inside an announcement wave already underway; do not turn the message into sole-organizer credit or literalize `Love you` into romance/family/exclusivity.",
    ]),
  });
}
