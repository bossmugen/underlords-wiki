import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) {
    const existing = relationships[index];
    relationships[index] = {
      ...existing,
      ...relationship,
      note:
        existing.note && existing.note !== relationship.note
          ? `${existing.note} ${relationship.note}`
          : relationship.note,
    };
  } else {
    relationships.push(relationship);
  }
};

// Run 682/683 Daycare hard identity reconciliation: stable account 459696170759880745
// is dragonrichard = Ricochet under user-confirmed canon. Historical display name
// `Rich` is not an identity bridge to the separate person Rich / DragonRich.
const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex >= 0) {
  const ricochet = allCharacters[ricochetIndex];
  const relationships = [...(ricochet.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "Their Daycare register repeatedly uses faux-family shorthand without needing a family tree explained: Mugen calls him `Ramen Uncle Rich`; Ricochet answers `then nap kiddo`, later calls Mugen a `good niece`, and in 2024 jokes `when did our families merge together XDD`. It is reciprocal social-family language, not literal kinship.",
    href: "/characters/mugen",
  });

  upsertRelationship(relationships, {
    name: "Ren",
    note:
      "Ren's `Funcle rich` language is not confined to Daycare. On the Wall in September 2021, after Ricochet remembers that Platelets can see the page, Ren immediately supplies `Funcle rich thinking of his 100+ nephews`. The exaggeration makes the reputation communal: the room already knows the fun-uncle grammar and can deploy it without explanation.",
    href: "/characters/ren",
  });

  upsertRelationship(relationships, {
    name: "ShiyaX",
    note:
      "When Ricochet reappears in a 2025 Daycare pocket and says `i see shiyax?`, ShiyaX answers `Has the primal returned or someone poked u xd`. The greeting reads like old-familiarity banter, not a formal closeness rank or a documented return origin.",
    href: "/characters/shiyax",
  });

  upsertRelationship(relationships, {
    name: "Snow",
    note:
      "Ricochet remembers the Platelets can see the Wall only after typing the cursed phrase; Snow direct-replies `you said it anyways  -finger flicks-`. The correction stays inside familiar physical-comedy shorthand: the protective instinct is real, and the disastrous timing is absolutely not allowed to escape review.",
    href: "/characters/snow",
  });

  allCharacters[ricochetIndex] = {
    ...ricochet,
    logline:
      "VIP and recurring extended-house cast whose care often arrives disguised as nagging, fake-family grammar, or a safety filter applied approximately one sentence too late: argue Ren into bed, tell Mugen to nap, remember the Platelets can see the Wall, then discover Snow has already entered the timing failure into evidence.",
    tags: appendUnique(ricochet.tags, [
      "Daycare",
      "Faux-family banter",
      "Return banter",
      "Teasing care",
      "Audience-aware chaos",
    ]),
    relationships,
    quotes: appendUnique(ricochet.quotes, [
      "then nap kiddo",
      "good niece and also comfortable",
      "when did our families merge together XDD",
      "i see shiyax?",
      "I was going to put in underlord’s underground strip dungeon but then I remember platelets can view this page",
    ]),
    claims: appendUnique(ricochet.claims, [
      "The Daycare account carrying username `dragonrichard` and stable author ID 459696170759880745 is Ricochet under hard project canon even when its historical display name renders as `Rich`; it is not the separate person Rich / DragonRich.",
      "Across 2021–2024 Daycare, Ricochet participates in reciprocal uncle / niece / kiddo family-language jokes with Ren and Mugen; those labels are social shorthand rather than literal kinship.",
      "In 2025 ShiyaX answers Ricochet's reappearance with `Has the primal returned or someone poked u xd`, supporting old-familiarity banter without establishing a disappearance cause or exact return origin.",
      "On 2021-09-18 the Wall carries the Funcle persona outside Daycare: Ricochet explicitly remembers Platelet visibility while filtering his own joke, Ren answers with `Funcle rich thinking of his 100+ nephews`, and Snow directly teases the fact that the supposedly filtered phrase was already on the page.",
    ]),
    antiFanon: appendUnique(ricochet.antiFanon, [
      "Ricochet / dragonrichard and Rich / DragonRich are separate people. Historical display-name `Rich` on Ricochet's account does not merge them.",
      "`Funcle`, `Ramen Uncle Rich`, `kiddo`, `good niece`, merged-family jokes, and `100+ nephews` are social/faux-family language only; they are not literal biological-family claims.",
      "The phrase `underlord’s underground strip dungeon` is Ricochet's joke, not evidence that such a literal UL room or institution existed.",
      "The 2021-09-18 Wall sequence proves cross-channel use of the Funcle grammar by that date, not its first-ever origin.",
      "Ricochet saying he lost the `normal member role` several times does not establish formal UL appointment, demotion, or governance chronology.",
      "The 2021 attachment near Ren's `Funcle rich` line is confirmed only as POSTED BY Ricochet in this handoff. MADE BY / CAPTURED BY / FEATURING and exact subject remain unresolved.",
      "The exact game/team object behind Ricochet's 2026 BangBang request remains unresolved.",
    ]),
  };
  characterById.set("ricochet", allCharacters[ricochetIndex]);
}
