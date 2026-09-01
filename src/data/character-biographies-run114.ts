import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run56NarrativeCharacterBios } from "./character-biographies-run56";
import { run39NarrativeCharacterBios } from "./character-biographies-run39";

const eosBase = run56NarrativeCharacterBios.eos;
const hamiBase = run39NarrativeCharacterBios.hamittey;

if (!eosBase || !hamiBase) throw new Error("Run 114 biography bases are missing.");

function beforePettyCrimes(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  const index = base.sections.findIndex((candidate) => candidate.title.toLowerCase() === "petty crimes");
  if (index < 0) return { ...base, sections: [...base.sections, section] };
  return {
    ...base,
    sections: [...base.sections.slice(0, index), section, ...base.sections.slice(index)],
  };
}

const eos = beforePettyCrimes(eosBase, {
  period: "March–June 2021",
  title: "SMALL OFFER, FULL-VOLUME RESPONSE",
  paragraphs: [
    "Eos's low-ceremony style is not low warmth. Ren offers a cookie and gets an immediate `yeeee`, followed by cookie/nom reaction language. Two days later another Ren share gets `supa cuteeeee ... tank uuu @RΣN`. The object itself stays provenance-fenced; Ren posted the share, which is not the same thing as having made it. The relationship beat does not need the pixels anyway. Tiny offering, enormous acceptance.",
    "Gilli has a different kind of shorthand with Eos. She can tag them with `Also this anime that we never finished LOL` and Eos answers `LMAO` without asking which anime. The title is still unresolved, but the relationship is not waiting for the title to become useful. Gilli points at an abandoned shared project; Eos knows exactly which unfinished crime scene she means. Entry history says Gilli is why Eos joined. This is the lived middle: unfinished media debt surviving as one-line mutual recognition.",
    "The same stretch catches Eos collecting the room's reaction language and then immediately using it for emotional theater. After Korea posts frog reactions, Eos says `dont mind me taking that frog`. In June Eos asks for a hug, then later demands `Permission to kill sovieshit now???` in a conversation where *The Remarried Empress* is the probable fandom context. That line is fictional-character rage, not a real violence claim. More importantly, the hug request and the mock execution can live in the same person without a costume change: comfort can be asked for directly, then the fandom court can reopen five minutes later.",
  ],
});

export const run114NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  eos,

  // The richer Hami dossier already existed in run39 but had fallen out of the active
  // resolver chain. Re-export it here so the live route keeps the recurring Peepo exit,
  // deli-label economy, and Noether/Hami Wall-material relationship instead of regressing
  // to a thinner fallback biography.
  hamittey: hamiBase,
};
