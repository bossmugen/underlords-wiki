import type { CharacterNarrative } from "./character-biographies-narrative";
import { kaedeNarrativeCharacterBios as kaedeCoreNarrativeCharacterBios } from "./character-biographies-kaede-core";
import { feliNarrativeCharacterBios } from "./character-biographies-feli";
import { lanNarrativeCharacterBios } from "./character-biographies-lan";

// Shared Sniper priority registry. The export name is retained so the existing
// character-page resolver keeps its stable import while this shelf deepens.
export const kaedeNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...kaedeCoreNarrativeCharacterBios,
  ...feliNarrativeCharacterBios,
  ...lanNarrativeCharacterBios,
};

for (const id of ["kaede", "feli", "lan"] as const) {
  const narrative = kaedeNarrativeCharacterBios[id];
  if (!narrative || narrative.intro.join(" ").length < 500 || narrative.sections.length < 4) {
    throw new Error(`Priority Sniper character ${id} lost its person-first narrative biography.`);
  }
}
