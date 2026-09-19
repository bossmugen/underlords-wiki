import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex < 0) throw new Error("Run 1361 expected canonical Alkey owner");

const alkey = allCharacters[alkeyIndex] as ExtendedCharacter;
const relationships = [...(alkey.relationships ?? [])];

upsertRelationship(
  relationships,
  "Mugen",
  "Mugen is a reliable audience for Alkey's tiny performances. In the February 2020 chicken-duel bit, Alkey lands `They can never find out the true cock fight`; Mugen answers the scene with popcorn, and Alkey comes back with `I aim to please` plus a penguin bow. He notices when the room is watching and turns the acknowledgement into one more beat instead of letting the joke simply end.",
);

const renIndex = relationships.findIndex((relationship) => relationship.name === "Ren");
if (renIndex >= 0) {
  const previous = relationships[renIndex];
  relationships[renIndex] = {
    ...previous,
    note:
      `${previous.note} The September 2020 counter-roast matters for the same reason: Ren can help turn Alkey into the target the next night, and Alkey answers with theatrical mock outrage rather than treating the return serve as a real grievance.`,
  };
}

allCharacters[alkeyIndex] = {
  ...alkey,
  tags: appendUnique(alkey.tags, [
    "Audience-aware",
    "Theatrical timing",
    "Penguin bow",
    "Nostalgia",
  ]),
  relationships,
  quotes: appendUnique(alkey.quotes, [
    "They can never find out the true cock fight",
    "I aim to please",
    "The good ol' days",
    "Omg Nostalgia",
  ]),
  claims: appendUnique(alkey.claims, [
    "On February 20, 2020, Alkey follows `They can never find out the true cock fight` with an audience-aware curtain call: Mugen posts popcorn 35.353 seconds later, and Alkey answers 15.701 seconds after that with `I aim to please` plus a penguin-bow GIF. The sequence deepens his compact-heckler profile into someone who notices the audience and deliberately gives the bit a finish.",
    "The September 2020 Ren counter-roast reinforces reciprocal tease safety: after Alkey has height-roasted Ren, Ren is among the people dragging Alkey into the cat/paws pile-on, and Alkey stays inside the joke through mock outrage rather than converting it into a feud.",
    "On July 19, 2021, an old attachment pulls `The good ol' days` and `Omg Nostalgia` out of Alkey, adding sincere old-chaos sentiment to the roast-gremlin register instead of flattening him into permanent deadpan.",
    "In the September 16, 2020 future-preferences exchange, Alkey's own authored contribution is uncertainty — `Who knows, I gave up trying to predict the future xD`. Preferences voiced by Ren in the same pocket remain Ren's, not Alkey's.",
  ]),
  antiFanon: appendUnique(alkey.antiFanon, [
    "This deepener belongs to the canonical Alkey owner associated with stable account 264889543365230614. A current rendered-name string in the miner handoff is not used to collapse Alkey into the separately locked Meowk owner; resolved identity rails control over display-name drift.",
    "Mugen's popcorn and Alkey's `I aim to please` / penguin-bow follow-up support audience-aware timing. They do not create a formal performer role or a relationship rank.",
    "The Ren pile-on is reciprocal teasing, not hostility or a feud.",
    "The July 2021 old attachment is useful for Alkey's nostalgia response. Nearby media remains POSTED BY its Discord poster only unless separate provenance establishes MADE BY / CAPTURED BY / FEATURING.",
    "The edited September 7 emote swap is edit-history trivia only; it is not treated as a stable emoji preference or role marker.",
  ]),
} as ExtendedCharacter;

characterById.set("alkey", allCharacters[alkeyIndex]);
