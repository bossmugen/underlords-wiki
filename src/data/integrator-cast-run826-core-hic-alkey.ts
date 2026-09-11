import { allCharacters, castGroups, characterById } from "./cast";
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

// Hic's useful chronology is not an incident chain. It is a self-described social
// change: pressing Send used to require more internal checking; familiarity made the
// room feel easier; a year of reduced gameplay later, the attachment is still loud.
const hicId = "hicuuoooogh";
const hicIndex = allCharacters.findIndex(
  (character) => character.id === hicId || character.name === "HicUUOOOOGH",
);

const hicBase: ExtendedCharacter =
  hicIndex >= 0
    ? (allCharacters[hicIndex] as ExtendedCharacter)
    : {
        id: hicId,
        name: "HicUUOOOOGH",
        billing: "legacy",
        role: "Archive-era UL cast",
        era: "2022–2024+",
        logline: "",
      };

const hicRelationships = [...(hicBase.relationships ?? [])];
upsertRelationship(hicRelationships, {
  name: "Mugen",
  note: "The weeks before Hic's own `really comfy` explanation show what familiarity looks like in ordinary motion. Mugen greets them as `gummy bear`, later says `You know the drill`, and when Hic bluntly admits they lost what they needed to copy, Mugen just goes `Lolol` / `Issok found it` and returns to `gummieeees`. Hic can fumble without building an apology ceremony around it; that low-friction register is the relationship texture.",
  href: "/characters/mugen",
});

const hic: ExtendedCharacter = {
  ...hicBase,
  id: hicId,
  name: "HicUUOOOOGH",
  billing: hicBase.billing || "legacy",
  role: hicBase.role || "Archive-era UL cast",
  era: hicBase.era || "2022–2024+",
  logline:
    "A careful sender who says they used to get `very shy` and think hard before pressing Send, then describes getting genuinely comfortable once the people stopped feeling unfamiliar. The nice part is how mundane that change can look: around familiar people, even losing something and admitting it stops needing a whole social defense. A year of barely playing later, the language gets bigger rather than colder: `never ending party`, gratitude for everyone they met, and an extremely sincere request that nobody change their hearts.",
  tags: appendUnique(hicBase.tags, [
    "Archive cast",
    "QOTD",
    "Lobby",
    "Change over time",
    "Belonging",
    "Reduced gameplay",
    "Careful sender",
    "Familiarity lowers the guard",
  ]),
  relationships: hicRelationships,
  quotes: appendUnique(hicBase.quotes, [
    "Wait",
    "I had to copy and paste them",
    "cuz i lost it",
    "Me being extra careful when interacting, I get very shy and have a lot of thoughts in my head when I press the send button. Now, I feel really comfy that I got to know more about our fam:Milk_Love:",
    "Its like a never ending party.",
    "I love everyone here pls dont ever change ur hearts really make someone happy. U guys deserve the world🫶🫶",
  ]),
  claims: appendUnique(hicBase.claims, [
    "On August 31, 2022 Mugen greets Hic as `gummy bear` and Hic answers `Ty tyty!`; on September 8 the nickname recurs alongside `You know the drill`, and Hic plainly says they had to copy/paste something because they lost it. Mugen resolves the fumble casually and immediately returns to the nickname. The repeated scene gives Hic's later comfort shift a named example without assigning Mugen sole causation.",
    "On October 14, 2022 Hic greets Miaka with `Haiii miakaaaa`, a small reciprocal doorway beat showing Hic participating socially rather than only being welcomed. The surrounding operational onboarding is handled by another account and is not attributed to Hic.",
    "On 2022-11-11, Hic described being extra careful when interacting, getting very shy, and having many thoughts before pressing Send; in the same answer they said that getting to know more of the group had made them feel really comfortable.",
    "On 2023-12-11, Hic described being `a corpse for a whole year` while also saying they wanted to `go back playing`; the wording bounds the corpse metaphor most safely to reduced/absent gameplay rather than a proven Discord disappearance.",
    "Hic's late-2023 appreciation answer remains collectively addressed: everyone they met, the group's welcoming quality, and the wish that people not change their hearts. It supports durable group attachment, not a closeness ranking among individual members.",
  ]),
  antiFanon: appendUnique(hicBase.antiFanon, [
    "The repeated `gummy bear` / `gummieeees` wording is Mugen's familiar nickname for Hic in these receipts, not an identity bridge, literal-family label, or friendship ranking.",
    "MEE6 welcome events and Mugen's `welcome back` wording do not establish why Hic entered/re-entered the Lobby or exact leave/rejoin chronology.",
    "The October Miaka greeting is social participation, not proof that Hic performed Staff/onboarding labor in that scene.",
    "Hic's own words `very shy` and `a lot of thoughts` are social self-description, not a mental-health diagnosis or a license to label them globally introverted/anxious.",
    "The 2022→2023 change is familiarity reducing the need for extra caution, not a `shy to extrovert` transformation.",
    "`our fam` is affectionate community language, not biological or legal family.",
    "`corpse for a whole year` is approximate joke-language and, because Hic says `go back playing`, does not establish a one-year Discord/server absence or exact inactivity dates.",
    "A full Hic-authored QOTD review produced no strict concrete-help chain; that route miss says nothing about Hic's helpfulness elsewhere.",
  ]),
};

if (hicIndex >= 0) allCharacters[hicIndex] = hic;
else allCharacters.push(hic);
characterById.set(hicId, hic);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(hicId)) {
  archiveCastGroup.characterIds.push(hicId);
}

// Meowk is not a second person. The current canonical owner is Alkey (`itsalkey`).
// Core's separated QOTD dates make one existing mechanism much clearer: Ren keeps
// assigning Alkey/Meowk versions of himself, and his mock complaint is part of the
// participation rather than a request to stop.
const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex >= 0) {
  const alkey = allCharacters[alkeyIndex] as ExtendedCharacter;
  const relationships = [...(alkey.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ren",
    note: "Across years, Ren keeps publicly assigning versions of Alkey/Meowk and he keeps mock-appealing the verdict. In 2022 she says his voice made her assume he was a streamer; the pile-on gets `why you booli me`. In 2025 she gives him an orca, then a pom, and `Y u booly me` comes back before Ren lands on `Poms are cute like youuuu`. The repeated complaint is participation in the characterization game, not a serious request to stop or a romance claim.",
    href: "/characters/ren",
  });

  const next: ExtendedCharacter = {
    ...alkey,
    aliases: appendUnique(alkey.aliases, ["Meowk 💖✨", "itsalkey"]),
    logline:
      "Staff and hockey devotee with a recurring branding problem: Alkey can present himself as deep-voiced, dark, intimidating or dangerous, while friends—especially Ren—keep translating the package back into cute. His favorite appeal is apparently some version of `why you booli me`, and the appeal itself keeps the joke alive.",
    tags: appendUnique(alkey.tags, [
      "Meowk",
      "QOTD",
      "Mock grievance",
      "Recurring banter",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(alkey.quotes, [
      "why you booli me",
      "I think",
      "actually I never think",
      "that was a lie",
      "Y u booly me",
    ]),
    claims: appendUnique(alkey.claims, [
      "Meowk 💖✨ / username `itsalkey` is the canonical Alkey account trail, not a separate character.",
      "Ren's public character-casting and Alkey's `booli/booly` protest recur from at least 2022 to 2025, turning mock grievance into a durable banter mechanism rather than a one-off wording accident.",
      "In a 2022 instrument prompt, Alkey starts to answer `I think`, then immediately sabotages his own seriousness with `actually I never think` → `that was a lie` → `:3` over a few seconds.",
      "Hockey is already independently grounded elsewhere in Alkey's own biography as a real interest/role; the QOTD hockey-uniform/body-swap jokes are supporting social recognition, not the basis for that canon.",
    ]),
    antiFanon: appendUnique(alkey.antiFanon, [
      "Meowk is Alkey, not a separate dossier.",
      "The orca/pom QOTD sequence is animal-association banter and does not support body/appearance inference.",
      "`I wouldn’t mind splitting someone’s jaw if they wronged me` is an OOC-prompt hypothetical/joke, not real-world violence history.",
      "The raw QOTD schema preserves Reply type and mentions but not exact stored reply-target IDs; do not invent target mechanics for Default-message banter.",
    ]),
  };

  allCharacters[alkeyIndex] = next;
  characterById.set("alkey", next);
}
