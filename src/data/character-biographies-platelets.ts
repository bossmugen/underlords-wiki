import type { CharacterNarrative } from "./character-biographies-narrative";
import { scarNarrativeCharacterBios } from "./character-biographies-scar";
import { dyingfoxNarrativeCharacterBios } from "./character-biographies-dyingfox";
import { ryoNarrativeCharacterBios } from "./character-biographies-ryo";
import { deanNarrativeCharacterBios } from "./character-biographies-dean";
import { taeNarrativeCharacterBios } from "./character-biographies-tae";
import { zoshaaNarrativeCharacterBios } from "./character-biographies-zoshaa";
import { candyNarrativeCharacterBios } from "./character-biographies-candy";

export const plateletNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...scarNarrativeCharacterBios,
  ...dyingfoxNarrativeCharacterBios,
  ...ryoNarrativeCharacterBios,
  ...deanNarrativeCharacterBios,
  ...taeNarrativeCharacterBios,
  ...zoshaaNarrativeCharacterBios,
  ...candyNarrativeCharacterBios
};

const personFirstPlatelets = ["scar", "dyingfox", "ryo", "dean", "tae", "zoshaa", "candy"] as const;

for (const id of personFirstPlatelets) {
  const bio = plateletNarrativeCharacterBios[id];
  if (!bio) throw new Error(`Priority Platelet character ${id} lost its person-first narrative biography.`);

  const wordCount = [
    ...bio.intro,
    ...bio.sections.flatMap((section) => section.paragraphs),
    ...(bio.closing ?? [])
  ].join(" ").trim().split(/\s+/).length;

  if (wordCount < 900) {
    throw new Error(`Priority Platelet character ${id} person-first biography is too thin (${wordCount} words).`);
  }
}
