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
  next: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === next.name);
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
const hamiIndex = allCharacters.findIndex((character) => character.id === "hamittey");
if (torrIndex < 0 || hamiIndex < 0) {
  throw new Error("Run 1273 expected canonical Torr and HamitteY owners; refusing to create duplicates.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;
const torrRelationships = [...(torr.relationships ?? [])];
upsertRelationship(torrRelationships, {
  name: "HamitteY",
  href: "/characters/hamittey",
  note:
    "When Hami posts an attachment, Torr's next surviving Wall message calls Hami the `trouble maker` because Torr says, `i tried to delete and they saved my completely ambiguous comment.` He immediately doubles down on `totally ambiguous` and keeps extending the joke. The useful relationship beat is mock prosecution with enough ease that the failed deletion becomes new material instead of ending the interaction.",
});

allCharacters[torrIndex] = {
  ...torr,
  tags: appendUnique(torr.tags, ["Failed deletion", "HamitteY receipt lane"]),
  relationships: torrRelationships,
  quotes: appendUnique(torr.quotes, [
    "i tried to delete and they saved my completely ambiguous comment.",
    "totally ambiguous",
    "well. we don't have to take a screenshot and post it in wall of shame now",
  ]),
  claims: appendUnique(torr.claims, [
    "On 2022-10-23/24, HamitteY posts a Wall attachment and Torr's next surviving Wall message says Hami is the `trouble maker` because `i tried to delete and they saved my completely ambiguous comment.` Torr keeps litigating `totally ambiguous` and recruits another person into the joke instead of withdrawing. This extends Torr's already-public context sensitivity into failed-deletion self-incrimination: Torr knows exactly how the receipt machine works and still keeps feeding it.",
    "By 2023-09-01 Torr can joke that `we don't have to take a screenshot and post it in wall of shame now` when the questionable material is already being said inside Wall. The recurring person read is procedural fluency with the room's evidence culture, not a formal archive role.",
  ]),
  antiFanon: appendUnique(torr.antiFanon, [
    "HamitteY's adjacent attachment is confirmed POSTED BY HamitteY. Torr's wording and message topology support a probable saved-copy referent only; MADE BY, CAPTURED BY, FEATURING, and exact visual contents remain unresolved.",
    "The HamitteY/Torr pocket supports tease-safe receipt familiarity in this scene. Do not inflate it into a friendship rank, romance, kinship, or a blanket consent claim.",
  ]),
} as ExtendedCharacter;
characterById.set("torr", allCharacters[torrIndex]);

const hami = allCharacters[hamiIndex] as ExtendedCharacter;
const hamiRelationships = [...(hami.relationships ?? [])];
upsertRelationship(hamiRelationships, {
  name: "Torr",
  href: "/characters/torr",
  note:
    "Torr directly calls Hami the `trouble maker` after saying Hami saved a comment Torr had tried to delete. Hami's role in the scene is extremely on-brand: preserve the material, let the defendant object, and watch the objection generate more material. Torr stays in the bit, so the scene reads as comfortable mock prosecution rather than rupture.",
});

allCharacters[hamiIndex] = {
  ...hami,
  tags: appendUnique(hami.tags, ["Saved-receipt prosecution"]),
  relationships: hamiRelationships,
  claims: appendUnique(hami.claims, [
    "A 2022 Wall pocket adds Torr to Hami's recurring prosecutor pattern: Torr says Hami saved a comment Torr tried to delete and calls Hami the `trouble maker`; Torr then keeps arguing that the comment was `totally ambiguous`. The joke works because preservation and protest are both part of the same social scene.",
  ]),
  antiFanon: appendUnique(hami.antiFanon, [
    "Hami's attachment in the Torr pocket remains POSTED BY Hami only. Torr's own wording makes it a probable saved-copy referent, not creator/capturer/subject attribution.",
  ]),
} as ExtendedCharacter;
characterById.set("hamittey", allCharacters[hamiIndex]);
