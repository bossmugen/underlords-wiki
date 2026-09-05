import type { CharacterNarrative } from "./character-biographies-narrative";
import { cookieNarrativeCharacterBios } from "./character-biographies-cookie";
import { tofuNarrativeCharacterBios } from "./character-biographies-tofu";

const appendPettyCrime = (bio: CharacterNarrative, paragraph: string): CharacterNarrative => ({
  ...bio,
  sections: bio.sections.map((section) =>
    section.title.toLowerCase() === "petty crimes"
      ? { ...section, paragraphs: [...section.paragraphs, paragraph] }
      : section
  ),
});

export const run427NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  tofu: appendPettyCrime(
    tofuNarrativeCharacterBios.tofu,
    "Tofu apparently holds debates with herself. When Mugen asked who talks to themselves, Tofu volunteered `Specially when having a debate....`; after Mugs turned the answer into a joke about consulting intelligent people, Tofu came back with one wonderfully dry correction: `Seriously`. For somebody whose public social voice can be loud as hell, the private processing habit is almost comically formal: apparently both sides deserve argument time."
  ),
  cookie: appendPettyCrime(
    cookieNarrativeCharacterBios.cookie,
    "Cookie actively goes looking for horror when he wants a `good spook`, then immediately remembers that being successfully spooked has consequences. In March 2021 he considered *At Dead of Night* and, in the same breath, worried he might scare himself badly enough to regret the plan. Horror taste, yes; fearless horror hero, absolutely not. The appeal appears to include voluntarily creating the exact situation he will later need to flee."
  ),
};
