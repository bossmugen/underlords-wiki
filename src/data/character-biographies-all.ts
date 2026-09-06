import type { Character } from "./wiki";
import type { CharacterBio } from "./character-bios";
import type { CharacterNarrative } from "./character-biographies-narrative";
import { narrativeCharacterBios } from "./character-biographies-narrative";
import { allCharacters } from "./cast";
import { characterBios } from "./character-bios";

// Finished person-first biographies. These files are the public life stories assembled
// from archive scenes; this resolver makes sure they are actually the first thing the
// character route sees instead of letting a role/profile card win by accident.
import * as akaminModule from "./character-biographies-akamin";
import * as alkeyModule from "./character-biographies-alkey";
import * as ameModule from "./character-biographies-ame";
import * as anthosModule from "./character-biographies-anthos";
import * as babyLyssaModule from "./character-biographies-baby-lyssa";
import * as beaederModule from "./character-biographies-beaeder";
import * as chibiterasuModule from "./character-biographies-chibiterasu";
import * as chibiterasuRun37Module from "./character-biographies-chibiterasu-run37";
import * as celeModule from "./character-biographies-cele";
import * as clownModule from "./character-biographies-clown";
import * as cookieModule from "./character-biographies-cookie";
import * as dayaModule from "./character-biographies-daya";
import * as feliModule from "./character-biographies-feli";
import * as feliRun38Module from "./character-biographies-feli-run38";
import * as genGreyModule from "./character-biographies-gengrey";
import * as ghosttModule from "./character-biographies-ghostt";
import * as gilliModule from "./character-biographies-gilli";
import * as hanModule from "./character-biographies-han";
import * as hishiroCoreModule from "./character-biographies-hishiro-core";
import * as hyalunaModule from "./character-biographies-hyaluna";
import * as illienModule from "./character-biographies-illien";
import * as kaedeModule from "./character-biographies-kaede";
import * as keyModule from "./character-biographies-key";
import * as kiroModule from "./character-biographies-kiro";
import * as lanModule from "./character-biographies-lan";
import * as lillyModule from "./character-biographies-lilly";
import * as lillyRun1306Module from "./character-biographies-lilly-run1306";
import * as miaModule from "./character-biographies-mia";
import * as momoModule from "./character-biographies-momo";
import * as moonModule from "./character-biographies-moon";
import * as mugenModule from "./character-biographies-mugen";
import * as nelphModule from "./character-biographies-nelph";
import * as nemoModule from "./character-biographies-nemo";
import * as newModule from "./character-biographies-new";
import * as nhouModule from "./character-biographies-nhou";
import * as nobuModule from "./character-biographies-nobu";
import * as noetherModule from "./character-biographies-noether";
import * as nuienModule from "./character-biographies-nuien";
import * as oyasumiModule from "./character-biographies-oyasumi";
import * as pandaModule from "./character-biographies-panda";
import * as plateletModule from "./character-biographies-platelets";
import * as renModule from "./character-biographies-ren";
import * as rithaModule from "./character-biographies-ritha";
import * as rooksModule from "./character-biographies-rooks";
import * as rummyModule from "./character-biographies-rummy";
import * as richModule from "./character-biographies-rich";
import * as scarModule from "./character-biographies-scar";
import * as shikiModule from "./character-biographies-shiki";
import * as shiyaxModule from "./character-biographies-shiyax";
import * as snowModule from "./character-biographies-snow";
import * as suzimasuModule from "./character-biographies-suzimasu";
import * as syeModule from "./character-biographies-sye";
import * as tenModule from "./character-biographies-ten";
import * as tofuModule from "./character-biographies-tofu";
import * as tonyTonyChopperModule from "./character-biographies-tonytonychopper";
import * as xephyModule from "./character-biographies-xephy";
import * as yassrModule from "./character-biographies-yassr";
import * as yelikModule from "./character-biographies-yelik";
import * as yumiModule from "./character-biographies-yumi";
import * as zeppModule from "./character-biographies-zepp";
import * as zyrcantModule from "./character-biographies-zyrcant";
import * as run40Module from "./character-biographies-run40";
import * as tofu1602Module from "./character-biographies-tofu-1602";
import * as mugen1619Module from "./character-biographies-mugen-1619";
import * as run41Module from "./character-biographies-run41";
import * as run42Module from "./character-biographies-run42";
import * as run43Module from "./character-biographies-run43";
import * as run48Module from "./character-biographies-run48";
import * as moonPersonFirstModule from "./character-biographies-moon-person-first";
import * as run56Module from "./character-biographies-run56";
import * as run57Module from "./character-biographies-run57";
import * as run58Module from "./character-biographies-run58";
import * as run59Module from "./character-biographies-run59";
import * as run79WallModule from "./character-biographies-run79-wall";
import * as run107Module from "./character-biographies-run107";
import * as run111Module from "./character-biographies-run111";
import * as run114Module from "./character-biographies-run114";
import * as run126Module from "./character-biographies-run126";
import * as run139Module from "./character-biographies-run139";
import * as run143Module from "./character-biographies-run143";
import * as run145Module from "./character-biographies-run145";
import * as run165Module from "./character-biographies-run165";
import * as run253SuzimasuModule from "./character-biographies-suzimasu-run253";
import * as run363Module from "./character-biographies-run363";
import * as run400Module from "./character-biographies-run400";
import * as run470Module from "./character-biographies-run470";
import * as run515Module from "./character-biographies-run515";
import * as run530Module from "./character-biographies-run530";

// Existing deep archive-backed bios remain valuable. If a finished long-form narrative
// has not been written yet, turn the best current deep bio into narrative form rather
// than falling back to a dossier/profile layout.
import { deepLeaderCharacterBios } from "./character-bios-leader-deep";
import { coreDeepOfficerCharacterBios } from "./character-bios-officers-core-deep";
import { deepAnayssOfficerCharacterBios } from "./character-bios-officers-anayss-deep";
import { deepAnsunOfficerCharacterBios } from "./character-bios-officers-ansun-deep";
import { deepWolfOfficerCharacterBios } from "./character-bios-officers-wolf-deep";
import { run37WolfOfficerCharacterBios } from "./character-bios-officers-wolf-run37";
import { officerCharacterBios } from "./character-bios-officers";
import { deepOfficerCharacterBios } from "./character-bios-officers-deep";
import { lateOfficerCharacterBios } from "./character-bios-officers-late";
import { retiredOfficerCharacterBios } from "./character-bios-retired";
import { lateRetiredOfficerCharacterBios } from "./character-bios-retired-late";
import { deepRithaCharacterBios } from "./character-bios-ritha-deep";
import { sniperCharacterBios } from "./character-bios-snipers";
import { directorCharacterBios } from "./character-bios-directors";
import { gameOfficerCharacterBios } from "./character-bios-game-officers";
import { staffCharacterBios } from "./character-bios-staff";
import { lateStaffCharacterBios } from "./character-bios-staff-late";
import { finalStaffCharacterBios } from "./character-bios-staff-last";
import { plateletCharacterBios } from "./character-bios-platelets";
import { deepPlateletCharacterBios } from "./character-bios-platelets-deep";
import { latePlateletCharacterBios } from "./character-bios-platelets-late";
import { vipCharacterBios } from "./character-bios-vip";
import { deepVipCharacterBios } from "./character-bios-vip-deep";
import { lateVipCharacterBios } from "./character-bios-vip-late";
import { archiveCharacterBios } from "./character-bios-archive";
import { deepArchiveCharacterBios } from "./character-bios-archive-deep";
import { extendedCharacterBios } from "./character-bios-extended";

const finishedNarrativeModules = [
  akaminModule,
  alkeyModule, ameModule, anthosModule, babyLyssaModule, beaederModule, chibiterasuModule, chibiterasuRun37Module, celeModule, clownModule, cookieModule, dayaModule,
  feliModule, feliRun38Module, genGreyModule, ghosttModule, gilliModule, hanModule, hishiroCoreModule,
  hyalunaModule, illienModule, kaedeModule, keyModule, kiroModule, lanModule, lillyModule, lillyRun1306Module, miaModule,
  momoModule, moonModule, mugenModule, nelphModule, nemoModule, newModule, nhouModule, nobuModule,
  noetherModule, nuienModule, oyasumiModule, pandaModule, plateletModule, renModule, rithaModule,
  rooksModule, rummyModule, richModule, scarModule, shikiModule, shiyaxModule, snowModule, suzimasuModule, syeModule,
  tenModule, tofuModule, tonyTonyChopperModule, xephyModule, yassrModule, yelikModule, yumiModule, zeppModule, zyrcantModule,
  run40Module,
  tofu1602Module,
  mugen1619Module,
  run41Module,
  run42Module,
  run43Module,
  run48Module,
  moonPersonFirstModule,
  run56Module,
  run57Module,
  run58Module,
  run59Module,
  run79WallModule,
  run107Module,
  run114Module,
  run126Module,
  run139Module,
  run143Module,
  run145Module,
  run165Module,
  run363Module,
  run400Module,
  run470Module,
  run515Module,
  run530Module,
] as const;

const richBioSources: Array<Record<string, CharacterBio>> = [
  deepLeaderCharacterBios,
  coreDeepOfficerCharacterBios,
  deepAnayssOfficerCharacterBios,
  run37WolfOfficerCharacterBios,
  deepWolfOfficerCharacterBios,
  lateOfficerCharacterBios,
  deepOfficerCharacterBios,
  officerCharacterBios,
  deepRithaCharacterBios,
  lateRetiredOfficerCharacterBios,
  retiredOfficerCharacterBios,
  sniperCharacterBios,
  directorCharacterBios,
  gameOfficerCharacterBios,
  finalStaffCharacterBios,
  lateStaffCharacterBios,
  staffCharacterBios,
  latePlateletCharacterBios,
  deepPlateletCharacterBios,
  plateletCharacterBios,
  lateVipCharacterBios,
  deepVipCharacterBios,
  vipCharacterBios,
  deepArchiveCharacterBios,
  archiveCharacterBios,
  extendedCharacterBios,
].map((source) => source as Record<string, CharacterBio>);

function isCharacterNarrative(value: unknown): value is CharacterNarrative {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<CharacterNarrative>;
  return Array.isArray(candidate.intro) && Array.isArray(candidate.sections);
}

function isNarrativeMap(value: unknown): value is Record<string, CharacterNarrative> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const entries = Object.values(value as Record<string, unknown>);
  return entries.length > 0 && entries.every(isCharacterNarrative);
}

function mergeNarrativeModule(target: Record<string, CharacterNarrative>, module: object) {
  for (const exported of Object.values(module)) {
    if (isNarrativeMap(exported)) Object.assign(target, exported);
  }
}

function bestArchiveBio(id: string): CharacterBio | undefined {
  for (const source of richBioSources) {
    if (source[id]) return source[id];
  }
  return characterBios[id];
}

function narrativizeArchiveBio(character: Character, bio: CharacterBio): CharacterNarrative {
  const sections: CharacterNarrative["sections"] = [];

  if (bio.characterNotes?.length) {
    sections.push({
      title: "WHAT KEEPS HAPPENING",
      paragraphs: bio.characterNotes.map((note) => `${note.title}. ${note.text}`),
    });
  }

  const sceneParagraphs = (bio.history ?? []).map((beat) => beat.text);
  if (sceneParagraphs.length) {
    sections.push({
      title: "SCENES THAT STUCK",
      paragraphs: sceneParagraphs,
    });
  }

  if (!sections.length) {
    sections.push({
      title: "THE SHORT VERSION",
      paragraphs: [
        `${character.name} has a smaller character page right now. ${character.logline} It stays compact rather than stretching a role card into a personality.`,
      ],
    });
  }

  return { intro: bio.overview, sections };
}

function thinArchiveNarrative(character: Character): CharacterNarrative {
  const aliases = character.aliases?.length
    ? ` Known names include ${character.aliases.join(", ")}.`
    : "";

  return {
    intro: [
      `${character.name}: ${character.logline}${aliases}`,
    ],
    sections: [
      {
        title: "THE SHORT VERSION",
        paragraphs: [
          `${character.name}'s page is deliberately compact. The role and era are already on the card; this space stays small until there is enough person-specific texture to say something more interesting than a résumé.`,
        ],
      },
    ],
  };
}

// Base long-form narratives first; person-specific files override them where a later,
// deeper biography exists.
export const allNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...narrativeCharacterBios,
};

for (const module of finishedNarrativeModules) mergeNarrativeModule(allNarrativeCharacterBios, module);

// Hard-canon repair: Run 107 carried a superseded Ame/Amexistir split. Ame = Amexistir.
// Reapply the canonical person-first biography after historical overlays and remove the
// orphan split narrative so a future resolver lookup cannot resurrect the duplicate person.
mergeNarrativeModule(allNarrativeCharacterBios, ameModule);
mergeNarrativeModule(allNarrativeCharacterBios, run111Module);
mergeNarrativeModule(allNarrativeCharacterBios, run165Module);
mergeNarrativeModule(allNarrativeCharacterBios, run253SuzimasuModule);
delete allNarrativeCharacterBios.amexistir;

// Universal rule: every public character route resolves to a biography-shaped story.
// Finished narratives win; deeper legacy profiles are folded into a person-shaped page;
// thin entries stay short instead of manufacturing a personality out of metadata.
for (const character of allCharacters) {
  if (allNarrativeCharacterBios[character.id]) continue;
  const archiveBio = bestArchiveBio(character.id);
  allNarrativeCharacterBios[character.id] = archiveBio
    ? narrativizeArchiveBio(character, archiveBio)
    : thinArchiveNarrative(character);
}
