// Legacy import name retained because the public character route already resolves this
// map first. The implementation is site-wide: every cast ID gets an archive-first
// narrative biography, with finished hand-written life stories taking precedence.
import { allNarrativeCharacterBios } from "./character-biographies-all";
import { run80NarrativeCharacterBios } from "./character-biographies-run80";
import { run282HishiroNarrativeCharacterBios } from "./character-biographies-run282-hishiro";

export const hishiroNarrativeCharacterBios = {
  ...allNarrativeCharacterBios,
  ...run80NarrativeCharacterBios,
  ...run282HishiroNarrativeCharacterBios,
};
