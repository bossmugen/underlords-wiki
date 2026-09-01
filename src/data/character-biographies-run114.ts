import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run56NarrativeCharacterBios } from "./character-biographies-run56";
import { run39NarrativeCharacterBios } from "./character-biographies-run39";
import { rithaNarrativeCharacterBios } from "./character-biographies-ritha";

const eosBase = run56NarrativeCharacterBios.eos;
const hamiBase = run39NarrativeCharacterBios.hamittey;
const rithaBase = rithaNarrativeCharacterBios.ritha;

if (!eosBase || !hamiBase || !rithaBase) throw new Error("Run 114 biography bases are missing.");

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

const ritha = beforePettyCrimes(rithaBase, {
  period: "Early UL startup",
  title: "MUGEN'S ORIGIN STORY ALSO REMEMBERS WHO CARRIED HER",
  paragraphs: [
    "A later Mugen-side Safe House recollection adds a useful direction to the Ritha relationship that the founder chart cannot show. Mugen remembers Ritha doing concrete startup labor for the early group, especially carrying Mugen and the early circle through dungeon content. Founder does not mean self-sufficient; in at least one domain, Ritha is the person Mugen remembers having needed.",
    "That fits Ritha's user-confirmed strategy reputation without turning the memory into a retroactive Battle Leader appointment. It also keeps the Mugen–Ritha relationship lived rather than symmetrical by title: Mugen founded and organized the club; Ritha could still be the friend doing the carrying when the game demanded a different kind of competence. The exact raw Safe House message join and nearby legacy-role chronology remain open, so the wiki does not manufacture a date, a universal dungeon pattern, or a claim that Mugen was generally bad at the game.",
  ],
});

export const run114NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  eos,
  ritha,

  // The richer Hami dossier already existed in run39 but had fallen out of the active
  // resolver chain. Re-export it here so the live route keeps the recurring Peepo exit,
  // deli-label economy, and Noether/Hami Wall-material relationship instead of regressing
  // to a thinner fallback biography.
  hamittey: hamiBase,
};

// Run 122 is re-exported through this already-active module so the public resolver sees
// the new archive-cast dossier without duplicating or reordering the long resolver list.
export { run122NarrativeCharacterBios } from "./character-biographies-run122";
