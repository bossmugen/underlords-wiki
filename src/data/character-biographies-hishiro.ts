import type { CharacterNarrative } from "./character-biographies-narrative";
import { hishiroNarrativeCharacterBios as hishiroCoreNarrativeCharacterBios } from "./character-biographies-hishiro-core";
import { genGreyNarrativeCharacterBios } from "./character-biographies-gengrey";
import { lillyNarrativeCharacterBios } from "./character-biographies-lilly";
import { nhouNarrativeCharacterBios } from "./character-biographies-nhou";
import { cookieNarrativeCharacterBios } from "./character-biographies-cookie";
import { alkeyNarrativeCharacterBios } from "./character-biographies-alkey";
import { zeppNarrativeCharacterBios } from "./character-biographies-zepp";
import { tenNarrativeCharacterBios } from "./character-biographies-ten";
import { ghosttNarrativeCharacterBios } from "./character-biographies-ghostt";
import { tofuNarrativeCharacterBios } from "./character-biographies-tofu";
import { rooksNarrativeCharacterBios } from "./character-biographies-rooks";
import { nuienNarrativeCharacterBios } from "./character-biographies-nuien";
import { scarNarrativeCharacterBios } from "./character-biographies-scar";
import { dyingfoxNarrativeCharacterBios } from "./character-biographies-dyingfox";
import { ryoNarrativeCharacterBios } from "./character-biographies-ryo";

// This module is the legacy person-first narrative entrypoint already consumed by
// the character resolver. Keep priority biographies collected here so a substantive
// narrative is what the public route sees before dossier material.
export const hishiroNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...hishiroCoreNarrativeCharacterBios,
  ...genGreyNarrativeCharacterBios,
  ...lillyNarrativeCharacterBios,
  ...nhouNarrativeCharacterBios,
  ...cookieNarrativeCharacterBios,
  ...alkeyNarrativeCharacterBios,
  ...zeppNarrativeCharacterBios,
  ...tenNarrativeCharacterBios,
  ...ghosttNarrativeCharacterBios,
  ...tofuNarrativeCharacterBios,
  ...rooksNarrativeCharacterBios,
  ...nuienNarrativeCharacterBios,
  ...scarNarrativeCharacterBios,
  ...dyingfoxNarrativeCharacterBios,
  ...ryoNarrativeCharacterBios,
};

const priorityStaffNarrativeIds = ["hishiro", "gengrey", "lilly", "momo", "nhou", "cookie", "alkey", "zepp", "ten", "ghostt", "tofu", "rooks", "nuien"] as const;
for (const id of priorityStaffNarrativeIds) {
  if (!hishiroNarrativeCharacterBios[id]) {
    throw new Error(`Priority Staff character ${id} lost its person-first narrative biography.`);
  }
}

const priorityPlateletNarrativeIds = ["scar", "dyingfox", "ryo"] as const;
for (const id of priorityPlateletNarrativeIds) {
  if (!hishiroNarrativeCharacterBios[id]) {
    throw new Error(`Priority Platelet character ${id} lost its person-first narrative biography.`);
  }
}
