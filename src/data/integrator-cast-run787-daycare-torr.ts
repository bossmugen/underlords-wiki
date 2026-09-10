import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex < 0) {
  throw new Error("Run 787 expected the canonical Torr owner; refusing to create a duplicate.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;
const relationships = [...(torr.relationships ?? [])];

const rummyIndex = relationships.findIndex((relationship) => relationship.name === "Rummy");
const rummyDeepening =
  "Torr's punctuation heckling is familiar enough to be answered in kind. In January 2023 he declares `the only thing rummy guilty of is the overuse of the semi colon`, then immediately admits `oh no the eglish has become normalized to me`; Rummy later TRUE-replies to the semicolon jab with `:EmoJi_stupid:`. He notices her habits, she can mock-retaliate directly, and the correction stays inside the joke rather than becoming a lecture.";

if (rummyIndex >= 0) {
  const current = relationships[rummyIndex];
  if (!current.note.includes("overuse of the semi colon")) {
    relationships[rummyIndex] = {
      ...current,
      note: `${current.note} ${rummyDeepening}`,
    };
  }
} else {
  relationships.push({
    name: "Rummy",
    note: rummyDeepening,
    href: "/characters/rummy",
  });
}

const gilliIndex = relationships.findIndex((relationship) => relationship.name === "Gilli");
const gilliDeepening =
  "Gilli can summon Torr with nothing but `@DiStratus(Torr)`. Torr arrives with `XD`, then twenty-two seconds later clocks that the unseen wording `can be taken out of context XD`; Gilli answers `:YEETH:`. The bare tag works like shorthand between people who already know what kind of nonsense Torr is useful for: spotting when phrasing itself has become Wall-ready.";

if (gilliIndex >= 0) {
  const current = relationships[gilliIndex];
  if (!current.note.includes("@DiStratus(Torr)")) {
    relationships[gilliIndex] = {
      ...current,
      note: `${current.note} ${gilliDeepening}`,
    };
  }
} else {
  relationships.push({
    name: "Gilli",
    note: gilliDeepening,
    href: "/characters/gilli",
  });
}

allCharacters[torrIndex] = {
  ...torr,
  tags: unique([
    ...(torr.tags ?? []),
    "Context mechanic",
    "Quote-mining conscience",
    "Mercy reflex",
  ]),
  relationships,
  quotes: unique([
    ...(torr.quotes ?? []),
    "that can be taken out of context XD",
    "the only thing rummy guilty of is the overuse of the semi colon",
    "oh no the eglish has become normalized to me",
    "well. we don't have to take a screenshot and post it in wall of shame now",
  ]),
  claims: unique([
    ...(torr.claims ?? []),
    "Across stable-ID Wall support tied to the Daycare miner, Torr repeatedly notices the mechanics of receipt-making itself: Gilli can summon him with a bare tag and he immediately spots phrasing that can be taken out of context; later he prosecutes Rummy's semicolon habit while admitting UL's mangled speed-typing has become normal to him; still later he jokes that a pooled Deleted User's self-own no longer needs a separate Wall screenshot. The useful contradiction is pedant and acclimated local in the same person.",
    "On 2023-09-01 Torr first `Fat_Wheeze` reacts to a pooled Deleted User's `I MISUNDERSTOOD SORRY`, then replies that there is no need to screenshot it for Wall, and later `Raja_Heart` reacts when the same unresolved account says their brain is not okay. That shift from wheeze to heart supports a small mercy reflex once the target starts clowning themselves.",
  ]),
  antiFanon: unique([
    ...(torr.antiFanon ?? []),
    "Gilli's 2022-09-28 bare summon does not recover the unseen line Torr says can be taken out of context. Do not reconstruct the missing joke from implication.",
    "The pooled Deleted User in the 2023-09-01 Wall sequence remains identity-unresolved. Torr's reactions do not identify that account or establish a specific relationship category.",
    "These stable-ID Wall receipts deepen Torr's Daycare-era person texture, but they do not by themselves establish a formal editor, moderation, or officer appointment.",
  ]),
} as ExtendedCharacter;

characterById.set("torr", allCharacters[torrIndex]);
