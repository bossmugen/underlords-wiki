import "./integrator-cast-run1278-wall-ansun";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mergeRelationships = (
  current: Character["relationships"] | undefined,
  additions: NonNullable<Character["relationships"]>,
) => {
  const merged = [...(current ?? [])];
  for (const addition of additions) {
    const index = merged.findIndex((relationship) => relationship.name === addition.name);
    if (index >= 0) merged[index] = { ...merged[index], ...addition };
    else merged.push(addition);
  }
  return merged;
};

const pandaIndex = allCharacters.findIndex((character) => character.id === "panda");
if (pandaIndex < 0) {
  throw new Error("Run 1276 Wall expected the canonical Panda owner; refusing to create a duplicate.");
}

const panda = allCharacters[pandaIndex] as ExtendedCharacter;
const pandaNext: ExtendedCharacter = {
  ...panda,
  logline:
    "Panda will cheerfully own his own chaos, feed the typo joke, and admit there is a whole backlog of shame; the second somebody else's nonsense lands under his name, though, the record suddenly matters very much.",
  description:
    "Panda is unusually willing to prosecute himself. Ren says he cannot spell and Panda immediately answers `idk wht you mena` followed by `smy spelling is perfect`, letting the typo prove the joke before anyone else has to. Later, when one Wall filing lands, Panda does not argue innocence; he complains that out of all the shameful things he has said, this is what got chosen, `and without context, no less`. Ricochet can summon him into a mock therapy talk about `our life choice` and Panda joins the premise at full volume before true-replying that he makes very bad life choices. The useful contradiction is that this self-owning reputation still has boundaries. When Eos types under Panda's account in the already-established wrong-account scene, Panda corrects the attribution immediately. He is not trying to look clean. He just wants the mess labeled correctly.",
  tags: unique([
    ...(panda.tags ?? []),
    "Wall",
    "Self-aware self-own",
    "Attribution sensitivity",
    "Fast-typing humor",
    "Petty Crimes",
    "Ricochet",
  ]),
  relationships: mergeRelationships(panda.relationships, [
    {
      name: "Ricochet",
      note:
        "Ricochet asks Panda whether they need a `therapy talk bout our life choice`; Panda answers `YES`, `YES WE DO`, then true-replies that he makes very bad life choices. The scene is collaborative self-own humor, not literal therapy or a closeness ranking.",
      href: "/characters/ricochet",
    },
  ]),
  quotes: unique([
    ...(panda.quotes ?? []),
    "idk wht you mena",
    "smy spelling is perfect",
    "of all the shameful things i've said, this is the one you choose",
    "and without context, no less",
    "cause i make very bad life choices",
  ]),
  claims: unique([
    ...(panda.claims ?? []),
    "On September 4, 2021 Ren jokes that Marian/Panda cannot spell. Panda answers `idk wht you mena` and four seconds later `smy spelling is perfect`, deliberately feeding the typo bit instead of correcting it. Under the project-wide typing rule, this is fast-typing/self-own humor rather than a literacy claim.",
    "On December 28, 2021 Panda reacts to a Wall filing with `of all the shameful things i've said, this is the one you choose` and then `and without context, no less`. The person-level pattern is reputation-aware self-own: he volunteers that there is a larger catalog while objecting to selection and framing rather than claiming innocence.",
    "On December 31, 2021 Ricochet asks Panda whether they need a `therapy talk bout our life choice`. Panda answers `YES`, `YES WE DO`, then true-replies `cause i make very bad life choices`, supporting a bounded shared-bad-decisions joke lane.",
    "Paired with the already-owned February 2022 Eos wrong-account scene, the stronger contradiction is self-owning without being attribution-indifferent: Panda will own his own nonsense and still correct the record when the nonsense belongs to somebody else.",
  ]),
  antiFanon: unique([
    ...(panda.antiFanon ?? []),
    "`idk wht you mena` / `smy spelling is perfect` is self-aware fast-typing humor, not evidence that Panda is unintelligent, illiterate, or characteristically unable to spell.",
    "Ren's `Welcome to the family` in the spelling pocket is social joke language, not biological or literal family canon.",
    "Ricochet's `therapy talk` is mock-therapy framing inside a shared-bad-decisions joke. Do not turn it into literal treatment, a caretaker role, romance, family, or a friendship ranking.",
    "The December 28 image contents remain uninspected. The safe claim is Panda's own reaction and reputation language, not what the image depicts.",
    "The February 2022 wrong-account scene remains incident-specific evidence that Eos typed under Panda's account once; it does not establish routine password sharing, shared devices, cohabitation, or a broader access arrangement.",
  ]),
};

allCharacters[pandaIndex] = pandaNext;
characterById.set("panda", pandaNext);
