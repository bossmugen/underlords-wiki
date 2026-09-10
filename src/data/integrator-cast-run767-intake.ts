import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const addRelationshipIfMissing = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  if (!relationships.some((candidate) => candidate.name === relationship.name)) {
    relationships.push(relationship);
  }
};

const deepen = (
  id: string,
  patch: {
    tags?: string[];
    quotes?: string[];
    claims?: string[];
    antiFanon?: string[];
    relationships?: NonNullable<Character["relationships"]>;
  },
) => {
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) return;

  const current = allCharacters[index] as ExtendedCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of patch.relationships ?? []) {
    addRelationshipIfMissing(relationships, relationship);
  }

  allCharacters[index] = {
    ...current,
    tags: appendUnique(current.tags, patch.tags ?? []),
    quotes: appendUnique(current.quotes, patch.quotes ?? []),
    claims: appendUnique(current.claims, patch.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, patch.antiFanon ?? []),
    relationships,
  } as ExtendedCharacter;

  characterById.set(id, allCharacters[index]);
};

// Core Rooms / QOTD: Marian Kage is the already-resolved Panda owner.
// The room's soft panda mascot language sits beside Panda's own much less cuddly
// fiction instinct: mortality, consequence, and a joking cycle of killing and
// replacing characters. Keep the social symbol distinct from literal appearance.
deepen("panda", {
  tags: ["QOTD", "Writing", "Panda motif", "Petty Crimes"],
  quotes: [
    "death",
    "^nah, let me be him",
    ":Devil: the endless cycle of birth, destruction, and rebirth",
  ],
  claims: [
    "In January 2022, Ansun and phenomenal_lamb independently associated Marian Kage/Panda with panda imagery; Marian received and fed the motif with `LOL, amazing`, panda-linked posts, and `^nah, let me be him`.",
    "On 2022-02-25 Marian described an `uncanny habit` of killing the characters she writes and sketched a story interest in mortality and the limits of wealth/power; when ƐℲı˥ joked that killing characters only creates more, Marian escalated it to `the endless cycle of birth, destruction, and rebirth`.",
  ],
  antiFanon: [
    "The panda motif is social-symbol language around Marian/Panda; it does not establish physical resemblance, body type, literal plush ownership, favorite animal, or offline appearance.",
    "Marian's fictional character deaths are a writing habit/theme, not evidence of real-world violence, harmful intent, or diagnosis.",
    "Uninspected panda-linked media remains POSTED BY only unless stronger provenance exists.",
  ],
});

// Other Games: years later, a mundane friend-add problem still runs on the same
// Mugen↔Dean mother/son shorthand. The joke is that Mugen expects Dean to be lost
// while Dean is already trying to solve the practical problem.
deepen("dean", {
  tags: ["Where Winds Meet", "Cross-game continuity", "Petty Crimes"],
  quotes: ["but mom, i added you already?"],
  claims: [
    "In a 2026 Where Winds Meet support scene, Mugen says `It's Dean. I expect him to be lost`; Dean answers `but mom, i added you already?`, carrying their established online mother/son shorthand into a different game while mildly contesting the lost-person reputation.",
  ],
  antiFanon: [
    "The 2026 Where Winds Meet row is currently supported by a validated derivative catalog while raw row IDs/timestamps remain pending backfill; do not invent exact message metadata.",
    "Mugen's `I expect him to be lost` is familiar teasing/reputation language, not a diagnosis, intelligence claim, or global competence verdict.",
    "`mom` continues the already-confirmed online-family relationship; it does not create biological kinship or date the relationship's origin.",
  ],
});

// Daycare support pass: these are Wall-source receipts used to deepen Eos, not
// direct Daycare dialogue. Eos helps build the case, then demands selective due
// process when the case points back at her.
deepen("eos", {
  tags: ["Screenshot Court", "Context litigation", "Receipt keeping", "Petty Crimes"],
  quotes: [
    "no context is needed wym",
    "Totally forgot to ss this that day but",
    "ps there is some context to why i said that-",
    "this dint hapen",
    "how dare you shame me",
  ],
  claims: [
    "Across repeated 2021-2022 Wall scenes, Eos both preserves/posts material and theatrically objects once the same receipt culture turns toward her: `no context is needed wym` when Marian asks for context, later `ps there is some context to why i said that-` followed by `prooooooof.png` when Eos needs context admitted.",
    "Eos's 2021-08-26 `Totally forgot to ss this that day but` supports her own screenshot action for that specific beat without requiring a visual inference from the attachment.",
    "The Marian↔Eos relationship includes comfortable mutual prosecution/context argument in addition to their already-established affection: they can demand exhibits, blame each other, and keep the joke moving without social retreat.",
  ],
  antiFanon: [
    "These Run 767 Eos receipts come from the Wall support corpus used by the Daycare miner; they are not relabeled as direct Daycare dialogue.",
    "For the 2021-07-08 and 2022-03-09 attachments, POSTED BY remains distinct from MADE BY / CAPTURED BY / FEATURING. The 2021-08-26 wording independently supports Eos's screenshot action for that one beat.",
    "Marian/Eos mutual prosecution is lived teasing and shared context, not a governance role, closeness ranking, or real-world relationship-status claim.",
  ],
});

// Wall: Miihi's prose footprint is tiny but operationally legible. She can sit in
// the reaction gallery, then materialize with a filing or answer a one-word
// `evidence` summons without needing the room rebuilt around her.
deepen("miihi", {
  tags: ["Wall", "Reaction gallery", "Evidence", "Petty Crimes"],
  quotes: ["WHYYYYYY", ":Cursed:", "dem snow.. what a ride h e h"],
  claims: [
    "Across nine surviving Miihi-authored Wall messages from 2020-12-20 through 2021-08-24, three are attachment filings; the same account also appears repeatedly in the reaction layer, supporting a low-verbiage but socially available witness/filer read inside that room.",
    "On 2021-08-24 Anayss true-replied to an older receipt with `@程瀟 Miihi (Milk) evidence`; 67.580 seconds later Miihi answered `dem snow.. what a ride h e h`. Her answer is a Default message, so this is strong contextual uptake rather than a synthetic Reply edge.",
    "In another Wall burst Miihi moved from `WHYYYYYY` to `:Cursed:` 4.715 seconds later, a compact version of her theatrical-recoil register.",
  ],
  relationships: [
    {
      name: "Anayss",
      note: "Anayss can summon Miihi into an older Wall case with essentially one word—`evidence`—and Miihi answers promptly and on-topic. It reads as shared room literacy, not a closeness ranking.",
      href: "/characters/anayss",
    },
  ],
  antiFanon: [
    "Miihi's Wall sample supports a room-local low-verbiage/high-activation pattern; it does not prove she was globally quiet or that Wall was her primary social space.",
    "The rendered `(Milk)` nickname is not an identity bridge to the separate Korea account.",
    "Miihi-posted Wall images remain POSTED BY only because their pixels were not inspected.",
  ],
});
