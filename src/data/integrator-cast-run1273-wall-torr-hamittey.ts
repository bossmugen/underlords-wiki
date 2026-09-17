import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex < 0) {
  throw new Error("Run 1273 expected the canonical Torr owner; refusing to create a duplicate.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;

allCharacters[torrIndex] = {
  ...torr,
  tags: appendUnique(torr.tags, ["Failed deletion", "Receipt literacy"]),
  quotes: appendUnique(torr.quotes, [
    "i tried to delete and they saved my completely ambiguous comment.",
    "totally ambiguous",
    "well. we don't have to take a screenshot and post it in wall of shame now",
  ]),
  claims: appendUnique(torr.claims, [
    "On 2022-10-23/24, the separate account `homethey_` (592243050722492424) posts a Wall attachment. Torr's next surviving Wall message directly mentions that account, calls them the `trouble maker`, and says `i tried to delete and they saved my completely ambiguous comment.` Torr immediately doubles down with `totally ambiguous` and keeps extending the joke. The useful person read is failed-deletion self-incrimination: Torr knows how the receipt machine works and still feeds it.",
    "By 2023-09-01 Torr can joke that `we don't have to take a screenshot and post it in wall of shame now` when the questionable material is already being said inside Wall. The recurring person read is procedural fluency with the room's evidence culture, not a formal archive role.",
  ]),
  antiFanon: appendUnique(torr.antiFanon, [
    "The 2022 attachment is confirmed POSTED BY account 592243050722492424 (`homethey_`). Torr's wording and message topology support a probable saved-copy referent only; MADE BY, CAPTURED BY, FEATURING, and exact visual contents remain unresolved.",
    "Do not merge account 592243050722492424 (`homethey_`) into canonical HamitteY/Wichita account 400116637266870273 (`hamittey`) merely because the names resemble each other. The identity bridge is explicitly unresolved and the canonical HamitteY dossier receives no Run 1273 relationship claim from this pocket.",
    "Torr's mock-prosecution language toward the separate `homethey_` account supports scene-specific receipt familiarity only. Do not inflate it into friendship rank, romance, kinship, or a blanket consent claim.",
  ]),
} as ExtendedCharacter;
characterById.set("torr", allCharacters[torrIndex]);
