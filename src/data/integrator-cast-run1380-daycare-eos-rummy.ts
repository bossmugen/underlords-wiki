import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex >= 0) {
  const eos = allCharacters[eosIndex] as ExtendedCharacter;
  const relationships = [...(eos.relationships ?? [])];
  const rummyIndex = relationships.findIndex((relationship) => relationship.name === "Rummy");
  const rummyDeepener =
    "By 2023 the shorthand has become screenshot tennis. Rummy can put Eos on the spot with one tag and an image; Eos answers with one disappointed clown, comes back with `revenge` and a file literally named `revengeshame.png`, then catches Rummy a month later with `sorry rums i had to`. Rummy's immediate `I-` / keyboard-smash / wheeze response keeps the betrayal mutual: neither of them needs a speech to know exactly what game they are playing.";

  if (rummyIndex >= 0) {
    const current = relationships[rummyIndex];
    if (!current.note.includes("revengeshame.png")) {
      relationships[rummyIndex] = {
        ...current,
        note: `${current.note} ${rummyDeepener}`,
      };
    }
  } else {
    relationships.push({
      name: "Rummy",
      note: rummyDeepener,
      href: "/characters/rummy",
    });
  }

  allCharacters[eosIndex] = {
    ...eos,
    tags: unique([...(eos.tags ?? []), "Reciprocal receipt sparring", "Petty Crimes"]),
    relationships,
    quotes: unique([
      ...(eos.quotes ?? []),
      "Rummy-",
      "revenge",
      "sorry rums i had to",
    ]),
    claims: unique([
      ...(eos.claims ?? []),
      "Across January 11 through March 12, 2023, Eos and Rummy repeatedly turn each other into receipt targets: Eos can reduce one scene to `Rummy-`, Rummy later tags Eos with an image, Eos returns with `revenge` plus `revengeshame.png`, and Eos later catches Rummy again while apologizing mid-publication with `sorry rums i had to`.",
      "The Eos/Rummy lane is reciprocal rather than one-way embarrassment. Their repeated low-context tags, reaction-only answers, counter-posts, and fast replies support comfortable mutual teasing without requiring a ranked friendship label.",
      "Petty Crimes: Eos keeps revenge material under the spectacularly unsubtle filename `revengeshame.png`; apparently even retaliation benefits from good document naming.",
    ]),
    antiFanon: unique([
      ...(eos.antiFanon ?? []),
      "The January 2023 `Rummy-` reaction is useful relationship shorthand, but the precipitating image/context is not safely resolved in the current text layer; do not invent what Rummy did in that specific moment.",
      "`revengeshame.png` and Eos's later March image are POSTED BY Eos. The recovered handoff does not independently establish who MADE BY / CAPTURED BY / is visually FEATURING in those objects.",
      "The repeated Eos/Rummy receipt war supports mutual teasing familiarity, not romance, kinship, exclusivity, formal moderation, or an archival office.",
    ]),
  } as ExtendedCharacter;

  characterById.set("eos", allCharacters[eosIndex]);
}
