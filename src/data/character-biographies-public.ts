import type { CharacterNarrative } from "./character-biographies-narrative";
import { allNarrativeCharacterBios } from "./character-biographies-all";
import { run58NarrativeCharacterBios } from "./character-biographies-run58";

// Public character pages take the universal person-first resolver, then the latest
// reconciled person-level additions. Archive ledgers and anti-fanon remain backstage.
export const publicCharacterNarratives: Record<string, CharacterNarrative> = {
  ...allNarrativeCharacterBios,
  ...run58NarrativeCharacterBios,
};
