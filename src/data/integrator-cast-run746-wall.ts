import { allCharacters, castGroups, characterById } from "./cast";
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

// Porgo: a thin but coherent Wall person shard. Self-consciousness does not make
// them retreat from the joke; it repeatedly becomes another way to participate.
const porgoId = "porgo";
const porgoIndex = allCharacters.findIndex((character) => character.id === porgoId);

const porgoCharacter: ExtendedCharacter = {
  id: porgoId,
  name: "porgo!",
  aliases: ["p0rg0"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2022",
  logline:
    "Can put themself on the Wall before anybody else gets the chance, accept five sympathy-pats from the jury, and then be back a few days later helping the next communal bit get worse. Porgo's embarrassment is participatory: self-conscious enough to file the evidence, shameless enough to keep playing.",
  tags: [
    "Archive cast",
    "Wall",
    "2022",
    "Self-filing",
    "Teasing care",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Daya",
      note:
        "Daya is one of the people who pat-reacts to Porgo's first self-file, later asks `what flavor?`, supplies the FBI reaction that gets an immediate `:run:`, and true-replies `let it out!!` when Porgo theatrically says the latest self-exposure is making them sick. The lane is teasing with a soft edge rather than simple ridicule.",
      href: "/characters/daya",
    },
    {
      name: "Marian Kage",
      note:
        "Porgo asks `can i get both?`; Marian answers `why not both?`; Porgo says `amen`. Later Porgo says `im exposing myself` and Marian answers `same, bro`. They are good at meeting each other halfway inside an already-stupid premise.",
    },
  ],
  quotes: [
    "putting myself up here cause im very mad at myself",
    "figgy is mad at me",
    "cuisine",
    "peach :Cat_Drool:",
    "can i get both?",
    "amen",
    ":run:",
    "im exposing myself",
    "im gona vomit",
  ],
  claims: [
    "On 2022-06-20 Porgo voluntarily files themself on the Wall with `putting myself up here cause im very mad at myself` and an uninspected screenshot; the post receives five `Cute_patpat` reactions.",
    "Later the same day Porgo files another uninspected screenshot with `figgy is mad at me`; `figgy` remains unresolved.",
    "On 2022-06-25, Daya asks `what flavor?` in a reply chain and Porgo true-replies `peach :Cat_Drool:`; this is bounded taste texture, not a permanent favorite claim.",
    "On 2022-07-09 Porgo joins a communal joke with `can i get both?` → Marian Kage `why not both?` → Porgo `amen`, then answers Daya's FBI/raid reaction URL with `:run:` about twenty-two seconds later.",
    "Porgo later writes `im exposing myself` with another uninspected screenshot and follows with theatrical `im gona vomit`; Daya true-replies `let it out!!`.",
  ],
  antiFanon: [
    "Porgo's three screenshot posts are POSTED BY Porgo only. Their pixels were not inspected; MADE BY / CAPTURED BY / FEATURING remain unresolved.",
    "`figgy` is unresolved and is not identity-bridged from similarity or context alone.",
    "`im gona vomit` is theatrical scene language here, not a health-status claim.",
    "The FBI/raid reaction and surrounding July sequence are joke escalation, not evidence of literal criminal, police, or dangerous conduct.",
    "The surviving Wall shard supports a compact person read, not Porgo's complete biography, relationship ranking, or full-server activity history.",
  ],
};

if (porgoIndex >= 0) {
  const current = allCharacters[porgoIndex] as ExtendedCharacter;
  allCharacters[porgoIndex] = {
    ...current,
    ...porgoCharacter,
    aliases: unique([...(current.aliases ?? []), ...(porgoCharacter.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(porgoCharacter.tags ?? [])]),
    quotes: unique([...(current.quotes ?? []), ...(porgoCharacter.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(porgoCharacter.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(porgoCharacter.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(porgoCharacter);
}
characterById.set(porgoId, allCharacters.find((character) => character.id === porgoId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(porgoId)) {
  archiveCastGroup.characterIds.push(porgoId);
}

// Kiro already has a canonical retired-Officer owner. Deepen that person; do not
// create a second Kiro or rewrite the role from current export arrays.
const kiroIndex = allCharacters.findIndex((character) => character.id === "kiro");
if (kiroIndex < 0) {
  throw new Error("Run 746 expected the canonical Kiro retired-Officer owner; refusing to create a duplicate.");
}

const kiro = allCharacters[kiroIndex] as ExtendedCharacter;
const kiroRelationships = [...(kiro.relationships ?? [])];

upsertRelationship(kiroRelationships, {
  name: "Gilli",
  note:
    "Kiro labels one filing `Being petty`; Gilli true-replies `DID YOU GET IT?`, and Kiro eventually reports `No`. Months later Kiro suddenly realizes who Gilli is — `I JUST REALIZED YOURE GILLI` → `OH GOD` → crying emoji — so their Wall lane can hold both receipt-operation follow-up and recognition turning into its own little emergency.",
  href: "/characters/gilli",
});

upsertRelationship(kiroRelationships, {
  name: "Daya",
  note:
    "When Daya directly asks whether `@HicUUOOOOGH` is Kiro, Kiro answers `N-n-n-no..` and then `Who's kiro` within seconds. The denial reads as playful witness-protection amnesia, not an identity contradiction.",
  href: "/characters/daya",
});

allCharacters[kiroIndex] = {
  ...kiro,
  aliases: unique([...(kiro.aliases ?? []), "etharzii"]),
  logline:
    "Retired Officer who treats the Wall like a live evidence desk: Kiro labels the operation `Being petty`, captions receipts like charges, then develops instant witness-protection amnesia the moment somebody points the name back at him. Confident prosecutor, evasive defendant, occasional self-roast specialist.",
  tags: unique([
    ...(kiro.tags ?? []),
    "Retired Officer",
    "Wall",
    "Receipt hunter",
    "Petty Crimes",
  ]),
  relationships: kiroRelationships,
  quotes: unique([
    ...(kiro.quotes ?? []),
    "Being petty:R_damn:",
    "No:EmoJi_CrYiNg:",
    "Seraph needs some explaining to do:Cute_catskrunky:",
    "Body = deceased\nWig = still living:z_sus:",
    "N-n-n-no..",
    "Who's kiro",
    "Im a cerberus breed coz i got three holes like a pretzel",
    "I JUST REALIZED YOURE GILLI",
    "OH GOD",
  ]),
  claims: unique([
    ...(kiro.claims ?? []),
    "Across 2022-10 through 2023-04 Wall scenes, Kiro repeatedly combines active receipt-hunting and compact one-line prosecution with playful self-evasion when Kiro becomes the recognized subject.",
    "On 2022-10-08 Kiro posts `Being petty` with a screenshot; Gilli true-replies `DID YOU GET IT?`, and Kiro later true-replies `No`, supporting a bounded Kiro-Gilli outcome-check lane around the filing.",
    "Kiro later captions separate filings `Seraph needs some explaining to do` and `Body = deceased / Wig = still living`, making the punchline part of the evidence-posting style rather than leaving the image to speak alone.",
    "On 2023-04-02 Daya directly asks whether `@HicUUOOOOGH` is Kiro; Kiro answers `N-n-n-no..` and then `Who's kiro` within seconds, a playful denial sequence rather than a serious identity dispute.",
    "On 2023-04-06 Kiro true-replies to Gilli with `I JUST REALIZED YOURE GILLI`, then immediately `OH GOD` and crying emoji, turning recognition itself into a social punchline.",
  ]),
  antiFanon: unique([
    ...(kiro.antiFanon ?? []),
    "Kiro remains the existing canonical retired-Officer owner. This Wall material deepens lived personality and relationships; current export role arrays do not create appointment chronology or a new role.",
    "Uninspected images are POSTED BY Kiro only; MADE BY / CAPTURED BY / FEATURING remain unresolved.",
    "`Who's kiro` is playful self-evasion in direct context, not a literal identity contradiction.",
    "The Cerberus/pretzel line is an absurd self-roast, not a literal species or anatomy claim.",
  ]),
} as ExtendedCharacter;

characterById.set("kiro", allCharacters[kiroIndex]);
