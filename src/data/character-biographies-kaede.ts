import type { CharacterNarrative } from "./character-biographies-narrative";
import { kaedeNarrativeCharacterBios as kaedeCoreNarrativeCharacterBios } from "./character-biographies-kaede-core";
import { feliNarrativeCharacterBios } from "./character-biographies-feli";
import { lanNarrativeCharacterBios } from "./character-biographies-lan";
import { nemoNarrativeCharacterBios } from "./character-biographies-nemo";
import { rummyNarrativeCharacterBios } from "./character-biographies-rummy";
import { hanNarrativeCharacterBios } from "./character-biographies-han";
import { nobuNarrativeCharacterBios } from "./character-biographies-nobu";
import { miaNarrativeCharacterBios } from "./character-biographies-mia";
import { shikiNarrativeCharacterBios } from "./character-biographies-shiki";
import { moonNarrativeCharacterBios } from "./character-biographies-moon";
import { genGreyNarrativeCharacterBios } from "./character-biographies-gengrey";

// Shared priority narrative compatibility registry. The export name is retained so the
// existing character-page resolver keeps its stable import while person-first passes
// advance from Snipers through Directors / Specialists and into Staff.
export const kaedeNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...kaedeCoreNarrativeCharacterBios,
  ...feliNarrativeCharacterBios,
  ...lanNarrativeCharacterBios,
  ...nemoNarrativeCharacterBios,
  ...rummyNarrativeCharacterBios,
  ...hanNarrativeCharacterBios,
  ...nobuNarrativeCharacterBios,
  ...miaNarrativeCharacterBios,
  ...shikiNarrativeCharacterBios,
  ...moonNarrativeCharacterBios,
  ...genGreyNarrativeCharacterBios,
};

for (const id of ["kaede", "feli", "lan", "nemo", "rummy"] as const) {
  const narrative = kaedeNarrativeCharacterBios[id];
  if (!narrative || narrative.intro.join(" ").length < 500 || narrative.sections.length < 4) {
    throw new Error(`Priority Sniper character ${id} lost its person-first narrative biography.`);
  }
}

for (const id of ["han", "nobu", "mia", "shiki", "moon"] as const) {
  const narrative = kaedeNarrativeCharacterBios[id];
  if (!narrative || narrative.intro.join(" ").length < 500 || narrative.sections.length < 6) {
    throw new Error(`Priority Director / Specialist character ${id} lost its person-first narrative biography.`);
  }
}

for (const id of ["gengrey"] as const) {
  const narrative = kaedeNarrativeCharacterBios[id];
  if (!narrative || narrative.intro.join(" ").length < 500 || narrative.sections.length < 5) {
    throw new Error(`Priority Staff character ${id} lost its person-first narrative biography.`);
  }
}
