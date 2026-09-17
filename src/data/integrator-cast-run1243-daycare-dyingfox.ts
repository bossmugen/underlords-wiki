import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const dyingFoxIndex = allCharacters.findIndex((character) => character.id === "dyingfox");
if (dyingFoxIndex < 0) throw new Error("Run 1243 expected canonical DyingFox owner");
const dyingFox = allCharacters[dyingFoxIndex] as ExtendedCharacter;

allCharacters[dyingFoxIndex] = {
  ...dyingFox,
  logline:
    "Dry enough to make tiny sentences carry the whole joke, affectionate enough to keep greeting and nickname rituals alive, and economical even when she is being warm: DyingFox's short replies are social style, not social distance. Lilly gets a clean `Love you too`; Jordayy learns snacks are apparently acceptable hiding-place paperwork; Queen Elsa sends a feed command and gets a hug back. The grumble and the affection both run on very few words.",
  tags: appendUnique(dyingFox.tags, ["Compact reciprocity", "Low-word social style"]),
  quotes: appendUnique(dyingFox.quotes, [
    "Did you bring snacks",
    "Then yes",
    "W/hug @Queen Elsa",
  ]),
  claims: appendUnique(dyingFox.claims, [
    "Across separate Daycare/Club pockets, DyingFox often answers direct affection or play in the same emotional register with very little verbal overhead: Lilly's `FOX I LOVE YOU` gets `Love you too`, Jordayy's request to hide in Daycare gets a joking snack condition and then `Then yes`, and Queen Elsa's `w/feed` gets `W/hug` back.",
    "The Jordayy snack exchange is playful social logic, not evidence that DyingFox formally admitted or governed Daycare membership.",
    "The Queen Elsa command exchange supports one compact reciprocal-play beat only; the human-authored command strings are the usable dialogue, not any bot-generated action prose.",
  ]),
  antiFanon: appendUnique(dyingFox.antiFanon, [
    "DyingFox's short message style should not be read as low engagement or emotional distance when the surrounding exchange shows direct reciprocity.",
    "Do not turn the Jordayy snack joke into a formal admission role, or the single Queen Elsa feed/hug exchange into a ranked or formal relationship category.",
  ]),
} as ExtendedCharacter;
characterById.set("dyingfox", allCharacters[dyingFoxIndex]);
