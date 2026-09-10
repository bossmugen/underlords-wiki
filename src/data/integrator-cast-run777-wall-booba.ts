import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & { claims?: string[]; antiFanon?: string[] };

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const id = "booba";
const index = allCharacters.findIndex((character) => character.id === id);
if (index < 0) {
  throw new Error("Run 777 expected the canonical Booba owner; refusing to manufacture a second person from a two-message Wall shard.");
}

const current = allCharacters[index] as ExtendedCharacter;
allCharacters[index] = {
  ...current,
  tags: appendUnique(current.tags, ["Wall", "2022", "Delayed receipt", "After-the-fact filer", "Petty Crimes"]),
  quotes: appendUnique(current.quotes, ["Oh I forgot to share this one"]),
  claims: appendUnique(current.claims, [
    "Stable author ID 199399438391705600 has two surviving authored Wall messages in this reviewed corpus, both on 2022-09-05: `Oh I forgot to share this one`, followed 6.605 seconds later by an image attachment. The useful person texture is the remembered-after-the-fact filing habit, not the uninspected image contents.",
    "The attachment later carries seven final-state `Fat_Wheeze` reactions. Reaction membership is untimestamped, so it supports room reception of the post but not who reacted first or a closeness ranking.",
  ]),
  antiFanon: appendUnique(current.antiFanon, [
    "The 2022-09-05 image is POSTED BY Booba only. Pixels were not inspected; MADE BY, CAPTURED BY, FEATURING, subjects, and depicted offense remain unresolved.",
    "The two-message Wall shard supports a bounded delayed-filer habit, not a broad personality diagnosis, join chronology, or claim that Booba only ever participated twice across UL.",
    "The export rendering that places `MsThiccy` beside Booba remains an observed display/nickname rendering here, not a new identity, status, or role-chronology claim.",
  ]),
} as ExtendedCharacter;

characterById.set(id, allCharacters[index]);
