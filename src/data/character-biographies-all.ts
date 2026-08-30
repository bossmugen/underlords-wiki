import type { Character } from "./wiki";
import type { CharacterBio } from "./character-bios";
import type { CharacterNarrative } from "./character-biographies-narrative";
import { narrativeCharacterBios } from "./character-biographies-narrative";
import { allCharacters } from "./cast";
import { characterBios } from "./character-bios";

// Finished person-first biographies. These files are the public life stories assembled
// from archive scenes; this resolver makes sure they are actually the first thing the
// character route sees instead of letting a role/profile card win by accident.
import * as alkeyModule from "./character-biographies-alkey";
import * as ameModule from "./character-biographies-ame";
import * as anthosModule from "./character-biographies-anthos";
import * as chibiterasuModule from "./character-biographies-chibiterasu";
import * as celeModule from "./character-biographies-cele";
import * as cookieModule from "./character-biographies-cookie";
import * as dayaModule from "./character-biographies-daya";
import * as feliModule from "./character-biographies-feli";
import * as genGreyModule from "./character-biographies-gengrey";
import * as ghosttModule from "./character-biographies-ghostt";
import * as gilliModule from "./character-biographies-gilli";
import * as hanModule from "./character-biographies-han";
import * as hishiroCoreModule from "./character-biographies-hishiro-core";
import * as hyalunaModule from "./character-biographies-hyaluna";
import * as illienModule from "./character-biographies-illien";
import * as kaedeModule from "./character-biographies-kaede";
import * as keyModule from "./character-biographies-key";
import * as lanModule from "./character-biographies-lan";
import * as lillyModule from "./character-biographies-lilly";
import * as miaModule from "./character-biographies-mia";
import * as momoModule from "./character-biographies-momo";
import * as moonModule from "./character-biographies-moon";
import * as mugenModule from "./character-biographies-mugen";
import * as nelphModule from "./character-biographies-nelph";
import * as nemoModule from "./character-biographies-nemo";
import * as nhouModule from "./character-biographies-nhou";
import * as nobuModule from "./character-biographies-nobu";
import * as noetherModule from "./character-biographies-noether";
import * as nuienModule from "./character-biographies-nuien";
import * as oyasumiModule from "./character-biographies-oyasumi";
import * as plateletModule from "./character-biographies-platelets";
import * as renModule from "./character-biographies-ren";
import * as rithaModule from "./character-biographies-ritha";
import * as rooksModule from "./character-biographies-rooks";
import * as rummyModule from "./character-biographies-rummy";
import * as shikiModule from "./character-biographies-shiki";
import * as snowModule from "./character-biographies-snow";
import * as suzimasuModule from "./character-biographies-suzimasu";
import * as syeModule from "./character-biographies-sye";
import * as tenModule from "./character-biographies-ten";
import * as tofuModule from "./character-biographies-tofu";
import * as yassrModule from "./character-biographies-yassr";
import * as yelikModule from "./character-biographies-yelik";
import * as yumiModule from "./character-biographies-yumi";
import * as zeppModule from "./character-biographies-zepp";

// Existing deep archive-backed bios remain valuable. If a finished long-form narrative
// has not been written yet, turn the best current deep bio into narrative form rather
// than falling back to a dossier/profile layout.
import { deepLeaderCharacterBios } from "./character-bios-leader-deep";
import { coreDeepOfficerCharacterBios } from "./character-bios-officers-core-deep";
import { deepAnayssOfficerCharacterBios } from "./character-bios-officers-anayss-deep";
import { deepAnsunOfficerCharacterBios } from "./character-bios-officers-ansun-deep";
import { deepWolfOfficerCharacterBios } from "./character-bios-officers-wolf-deep";
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
  alkeyModule, ameModule, anthosModule, chibiterasuModule, celeModule, cookieModule, dayaModule,
  feliModule, genGreyModule, ghosttModule, gilliModule, hanModule, hishiroCoreModule,
  hyalunaModule, illienModule, kaedeModule, keyModule, lanModule, lillyModule, miaModule,
  momoModule, moonModule, mugenModule, nelphModule, nemoModule, nhouModule, nobuModule,
  noetherModule, nuienModule, oyasumiModule, plateletModule, renModule, rithaModule,
  rooksModule, rummyModule, shikiModule, snowModule, suzimasuModule, syeModule,
  tenModule, tofuModule, yassrModule, yelikModule, yumiModule, zeppModule,
] as const;

const richBioSources: Array<Record<string, CharacterBio>> = [
  deepLeaderCharacterBios,
  coreDeepOfficerCharacterBios,
  deepAnayssOfficerCharacterBios,
  deepAnsunOfficerCharacterBios,
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

  for (const beat of bio.history ?? []) {
    sections.push({ period: beat.date, title: beat.title, paragraphs: [beat.text] });
  }

  if (bio.characterNotes?.length) {
    sections.push({
      title: "What keeps recurring in the record",
      paragraphs: bio.characterNotes.map((note) => `${note.title}. ${note.text}`),
    });
  }

  if (!sections.length) {
    sections.push({
      title: "What the surviving archive can safely say",
      paragraphs: [
        `The current archive does not yet preserve enough scene-level material to manufacture a grand arc for ${character.name}. The biography stays short on purpose: gaps remain gaps, and role metadata does not get promoted into personality.`,
      ],
    });
  }

  return { intro: bio.overview, sections };
}

function thinArchiveNarrative(character: Character): CharacterNarrative {
  const aliases = character.aliases?.length
    ? ` The surviving identity trail also resolves ${character.aliases.join(", ")} to the same person where the archive bridge supports it.`
    : "";

  return {
    intro: [
      `${character.name}'s surviving UL archive is still thin enough that the biography has to stay short. ${character.logline}${aliases}`,
      `That thinness is an archive boundary, not a judgment about importance. Until more scenes are recovered, this page refuses to pad ${character.name} into a personality profile from a role, a message count, a tag, or simple co-presence.`,
    ],
    sections: [
      {
        title: "The story is still being recovered",
        paragraphs: [
          `What belongs here next is scene evidence: what ${character.name} did, how other people reacted, what kept recurring, what changed over time, and where the record goes quiet. Reference facts such as current role and era stay in the side rail until the archive gives them an actual story to live inside.`,
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

// Universal rule: every public character route resolves to a biography-shaped story.
// Deep archive bios are converted without discarding their existing evidence; truly
// thin files get an explicit archive-boundary narrative instead of fake resume prose.
for (const character of allCharacters) {
  if (allNarrativeCharacterBios[character.id]) continue;
  const archiveBio = bestArchiveBio(character.id);
  allNarrativeCharacterBios[character.id] = archiveBio
    ? narrativizeArchiveBio(character, archiveBio)
    : thinArchiveNarrative(character);
}

for (const character of allCharacters) {
  const biography = allNarrativeCharacterBios[character.id];
  if (!biography || !biography.intro.length || !biography.sections.length) {
    throw new Error(`Character ${character.id} lost the archive-first biography contract.`);
  }
}
