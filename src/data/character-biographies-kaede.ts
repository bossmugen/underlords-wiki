import type { CharacterNarrative } from "./character-biographies-narrative";
import { kaedeNarrativeCharacterBios as kaedeCoreNarrativeCharacterBios } from "./character-biographies-kaede-core";
import { feliNarrativeCharacterBios } from "./character-biographies-feli";
import { lanNarrativeCharacterBios } from "./character-biographies-lan";
import { nemoNarrativeCharacterBios } from "./character-biographies-nemo";
import { rummyNarrativeCharacterBios } from "./character-biographies-rummy";
import { hanNarrativeCharacterBios } from "./character-biographies-han";

// Shared priority narrative compatibility registry. The export name is retained so the
// existing character-page resolver keeps its stable import while person-first passes
// advance from the Sniper shelf into Directors / Specialists.
export const kaedeNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...kaedeCoreNarrativeCharacterBios,
  ...feliNarrativeCharacterBios,
  ...lanNarrativeCharacterBios,
  ...nemoNarrativeCharacterBios,
  ...rummyNarrativeCharacterBios,
  ...hanNarrativeCharacterBios,
};

for (const id of ["kaede", "feli", "lan", "nemo", "rummy"] as const) {
  const narrative = kaedeNarrativeCharacterBios[id];
  if (!narrative || narrative.intro.join(" ").length < 500 || narrative.sections.length < 4) {
    throw new Error(`Priority Sniper character ${id} lost its person-first narrative biography.`);
  }
}

for (const id of ["han"] as const) {
  const narrative = kaedeNarrativeCharacterBios[id];
  if (!narrative || narrative.intro.join(" ").length < 500 || narrative.sections.length < 6) {
    throw new Error(`Priority Director / Specialist character ${id} lost its person-first narrative biography.`);
  }
}
