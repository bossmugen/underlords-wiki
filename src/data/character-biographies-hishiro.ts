import type { CharacterNarrative } from "./character-biographies-narrative";
import { hishiroNarrativeCharacterBios as hishiroCoreNarrativeCharacterBios } from "./character-biographies-hishiro-core";
import { genGreyNarrativeCharacterBios } from "./character-biographies-gengrey";
import { lillyNarrativeCharacterBios } from "./character-biographies-lilly";
import { nhouNarrativeCharacterBios } from "./character-biographies-nhou";
import { cookieNarrativeCharacterBios } from "./character-biographies-cookie";
import { alkeyNarrativeCharacterBios } from "./character-biographies-alkey";
import { zeppNarrativeCharacterBios } from "./character-biographies-zepp";

// This module is the Staff person-first narrative entrypoint already consumed by
// the character resolver. Keep priority Staff biographies collected here so a
// substantive narrative is what the public route sees before dossier material.
export const hishiroNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...hishiroCoreNarrativeCharacterBios,
  ...genGreyNarrativeCharacterBios,
  ...lillyNarrativeCharacterBios,
  ...nhouNarrativeCharacterBios,
  ...cookieNarrativeCharacterBios,
  ...alkeyNarrativeCharacterBios,
  ...zeppNarrativeCharacterBios,
};

const priorityStaffNarrativeIds = ["hishiro", "gengrey", "lilly", "momo", "nhou", "cookie", "alkey", "zepp"] as const;
for (const id of priorityStaffNarrativeIds) {
  if (!hishiroNarrativeCharacterBios[id]) {
    throw new Error(`Priority Staff character ${id} lost its person-first narrative biography.`);
  }
}
