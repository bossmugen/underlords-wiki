import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex < 0) {
  throw new Error("Run 763 expected the canonical Torr owner; refusing to create a duplicate.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;

allCharacters[torrIndex] = {
  ...torr,
  tags: unique([
    ...(torr.tags ?? []),
    "Context-loss spectator",
    "Light mode hater",
    "Notification dots",
    "Bad puns",
    "Sentence glitches",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(torr.quotes ?? []),
    "the lack of context is great",
    "No context be like.",
    "the light mode is evil",
    "i hate the red dots almost as much as i hate light mode.",
    "there's a bug on your head...i love bad puns.",
    "i honestly do that a lot, where my mind turns a question into a statement half way through.",
  ]),
  claims: unique([
    ...(torr.claims ?? []),
    "Torr's context awareness changes position without disappearing: after repeatedly warning that his own lines are easy Wall bait in 2022, by summer 2023 he can say `the lack of context is great` and `No context be like.` The useful contradiction is context-conscious defendant ↔ context-loss spectator, not an evidence conflict.",
    "Torr's language-auditor habit is explicitly self-aware. After correcting `Is the multiverse is real?` to `Is the multiverse real?`, he immediately admits that his own mind often turns a question into a statement halfway through. The nitpicking and the sentence-glitch belong to the same person.",
    "Petty Crimes expands into UI and humor taste: Torr calls light mode `evil`, says unread red dots bother him nearly as much, and directly says `i love bad puns.`",
  ]),
  antiFanon: unique([
    ...(torr.antiFanon ?? []),
    "Torr q18 now has at least six confirmed Torr-authored parents with exact TRUE_REPLY children, but the complete denominator and negative class are not established. Keep that topology backstage; do not turn it into reply rate, popularity, affection, closeness, or relationship strength.",
    "The later enjoyment of missing context does not erase Torr's earlier discomfort when his own wording was being preserved or decontextualized. Preserve both positions as a lived contradiction.",
    "The Microsoft poll image remains POSTED BY Torr only unless its pixels are independently inspected; MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
  ]),
} as ExtendedCharacter;

characterById.set("torr", allCharacters[torrIndex]);
