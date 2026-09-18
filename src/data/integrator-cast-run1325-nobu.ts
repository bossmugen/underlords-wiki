import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertCharacter = (seed: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === seed.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      ...seed,
      aliases: unique([...(current.aliases ?? []), ...(seed.aliases ?? [])]),
      tags: unique([...(current.tags ?? []), ...(seed.tags ?? [])]),
      relationships: [...(current.relationships ?? []), ...(seed.relationships ?? [])],
      quotes: unique([...(current.quotes ?? []), ...(seed.quotes ?? [])]),
      claims: unique([...(current.claims ?? []), ...(seed.claims ?? [])]),
      antiFanon: unique([...(current.antiFanon ?? []), ...(seed.antiFanon ?? [])]),
    } as ExtendedCharacter;
  } else {
    allCharacters.push(seed);
  }

  const character = allCharacters.find((candidate) => candidate.id === seed.id)!;
  characterById.set(seed.id, character);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(seed.id)) {
    archiveCastGroup.characterIds.push(seed.id);
  }
};

upsertCharacter({
  id: "nobu",
  name: "Nobu",
  aliases: ["Xuseio"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2021",
  logline:
    "Nobu usually lets the artifact make the case. Across one dense Wall stretch in summer 2021, nearly every surviving post is an attachment with little or no body text; the funny part is how abruptly that economy breaks when Screenshot Court points back. A dry `Hardly shameful` can become `God Damn it` or `Why post mineeee?? Nobuuuuuu` the instant the embarrassment becomes personal.",
  tags: [
    "Archive cast",
    "Wall",
    "Artifact-first",
    "Low-text",
    "Mock defendant",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Woohyuk",
      note:
        "In a Wall meta-banter pocket Woohyuk says `I'm on more than you`; Nobu answers `Hardly shameful`. The dry rebuttal supports comfortable same-scene give-and-take, not a closeness ranking.",
    },
  ],
  quotes: [
    "Hardly shameful",
    "God Damn it",
    "Why post mineeee?? Nobuuuuuu",
  ],
  claims: [
    "In the sampled June–August 2021 Wall run, 76 of Nobu's 77 authored messages carry attachments. Treat that as a run-scoped posting habit, not a permanent personality statistic.",
    "Nobu's Wall register is strongly artifact-forward: most sampled posts use little or no body text, while embarrassment aimed back at Nobu produces abrupt plainspoken protest.",
    "Petty Crimes: answers Wall meta-banter with `Hardly shameful`, upgrades to `God Damn it` when caught, and eventually reaches `Why post mineeee?? Nobuuuuuu` once the embarrassment is personal enough.",
  ],
  antiFanon: [
    "Nobu / Xuseio is stable account 864346521351880714. No identity bridge is inferred from similar display names alone.",
    "The 76-of-77 attachment count belongs to the sampled summer-2021 Wall run and is not a universal claim about how Nobu always communicates.",
    "The pooled Deleted User targeted by `Why post mineeee?? Nobuuuuuu` remains unresolved.",
    "Blank or uninspected attachments do not establish Nobu as MADE BY, CAPTURED BY, or FEATURING; POSTED BY remains separate.",
    "The Nobu↔Woohyuk exchange supports dry same-scene banter, not a friendship ranking or literal conflict.",
  ],
} as ExtendedCharacter);
