import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertCharacter = (id: string, build: (existing: ExtendedCharacter | undefined) => ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === id);
  const existing = index >= 0 ? (allCharacters[index] as ExtendedCharacter) : undefined;
  const next = build(existing);
  if (index >= 0) allCharacters[index] = next;
  else allCharacters.push(next);
  characterById.set(id, next);
};

const withRelationship = (
  existing: Character["relationships"],
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const relationships = [...(existing ?? [])];
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
  return relationships;
};

upsertCharacter("scar", (existing) => ({
  ...(existing ?? {
    id: "scar",
    name: "Scar",
    billing: "recurring" as const,
    role: "Archive-era UL member",
    era: "2021–2022+",
    logline: "",
  }),
  logline:
    existing?.logline ||
    "Sparse but committed Screenshot Court regular: Scar can validate a ridiculous claim with `IT’S TRUE` / `100%`, threaten a little counter-exposure, and then go straight back to letting one line or one reaction carry the whole case.",
  tags: appendUnique(existing?.tags, ["Wall", "Screenshot Court", "Concise verdicts", "Petty Crimes"]),
  relationships: withRelationship(existing?.relationships, {
    name: "Cookie",
    note: "Scar can point a playful `want me to exposed?` at Cookie, and Cookie later answers Scar’s Ganyu-note Wall post with `:siip:`. It reads as easy reciprocal Screenshot Court reaction-fluency, not a closeness ranking.",
    href: "/characters/cookie",
  }),
  quotes: appendUnique(existing?.quotes, ["IT’S TRUE", "100%", "want me to exposed?", "Also Gilli must have some harem here :kermsad:"]),
  claims: appendUnique(existing?.claims, [
    "Scar’s Wall voice is economical but decisive. In one 2021 pocket a structured Reply reads `IT’S TRUE`, followed 1.967 seconds later by `100%`; the parent is not recovered, but Scar’s contribution is unmistakably corroboration followed by escalation.",
    "A separate 2021 Scar message asks `want me to exposed?` while mentioning Cookie. The missing parent keeps the exact setup unresolved, but the line belongs to Scar’s recurring Screenshot Court register rather than a formal governance role.",
    "Scar can also widen the joke with `Also Gilli must have some harem here :kermsad:`: short social allegation, no long speech required.",
    "On May 17, 2022 Scar posts a Ganyu-note emote; Cookie answers the post with `:siip:` about eleven minutes later. The exchange adds low-verbiage reaction fluency without establishing anything more formal about the relationship.",
  ]),
  antiFanon: appendUnique(existing?.antiFanon, [
    "The parents for `IT’S TRUE` and `want me to exposed?` are not recovered. Keep the verdict/exposure style; do not invent the missing accusation or target context.",
    "Scar’s Wall banter supports playful allegation-escalation and compact reaction behavior, not a moderator/prosecutor office or a friendship hierarchy.",
    "Exporter/current role arrays do not establish Scar’s appointment chronology.",
  ]),
}));

upsertCharacter("woohyuk", (existing) => ({
  ...(existing ?? {
    id: "woohyuk",
    name: "Woohyuk",
    billing: "recurring" as const,
    role: "VIP",
    era: "2020–",
    logline: "Visitor/family-adjacent recurring cast member with a long trail through memes, family-map material, and the wider social house.",
  }),
  tags: appendUnique(existing?.tags, ["Wall", "Specificity roaster", "Screenshot Court", "Petty Crimes"]),
  relationships: withRelationship(existing?.relationships, {
    name: "Gilli",
    note: "Woohyuk’s roast language gets extremely specific around Gilli: `High school spirit week`, then eleven minutes later `Looks like sergeants on timeout`. The repetition reads as comfortable running commentary, not permission to rank the friendship.",
    href: "/characters/gilli",
  }),
  quotes: appendUnique(existing?.quotes, [
    "High school spirit week",
    "Looks like sergeants on timeout",
    "That’s a record, wall of shame less than hour of joining",
    "Watermelon is just sweet water in form of melon",
  ]),
  claims: appendUnique(existing?.claims, [
    "Woohyuk often annotates people by analogy instead of generic praise or insult. On April 13, 2021 two Gilli fashion reads land eleven minutes apart: `High school spirit week` and `Looks like sergeants on timeout`.",
    "On June 10, 2021 Woohyuk scores the ritual itself with `That’s a record, wall of shame less than hour of joining`, treating Screenshot Court like something with timing stats and house records.",
    "His confidence changes shape when Wall attention turns toward him: the same person who classifies everybody else’s nonsense can joke about deleting the filing and topping up witnesses, becoming a mock-procedural defendant instead of the commentator.",
    "On August 3, 2021 he reduces watermelon to `sweet water in form of melon` and complains that artists are `playing people dumb`. The odd-food theory fits the same habit of turning a reaction into a sharply specific little model of the thing.",
  ]),
  antiFanon: appendUnique(existing?.antiFanon, [
    "The Gilli fashion lines support recurring roast/commentary comfort, not a friendship rank, romance read, or exclusivity claim.",
    "The defendant-bargaining pocket is locally associated in the recovered sequence; do not manufacture a structured Reply edge where the export did not preserve one.",
    "A recovered q18 parent→Reply pair is a valid positive for that archive question, but the historical membership denominator is still unresolved and should not be turned into public arithmetic.",
  ]),
}));

upsertCharacter("ansun", (existing) => ({
  ...(existing ?? {
    id: "ansun",
    name: "Ansun",
    billing: "main" as const,
    role: "Caporegime",
    era: "2020–present",
    logline: "Officer with a practical moderation streak and the energy of someone who has explained the same rule more than once.",
  }),
  aliases: appendUnique(existing?.aliases, ["Souta", "Sou", "颯太", "sou.san"]),
  antiFanon: appendUnique(existing?.antiFanon, [
    "Sou / Souta / 颯太 / `sou.san` are Ansun aliases. Export-local display/account variation does not create a separate Sou character.",
  ]),
}));
