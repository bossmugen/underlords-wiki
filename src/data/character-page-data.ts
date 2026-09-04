import type { Character } from "./wiki";
import { getCharacterBio, type CharacterBio } from "./character-bios";
import type { CharacterNarrative } from "./character-biographies-narrative";

export type CharacterClaim = { text: string; evidence?: string; date?: string };
export type PublicCharacterBio = CharacterBio & {
  claims?: CharacterClaim[];
  relatedPeople?: string[];
};

type LooseModule = Record<string, unknown>;

const richModules = import.meta.glob("./character-bios*.ts", { eager: true }) as Record<string, LooseModule>;
const narrativeModules = import.meta.glob("./character-biographies*.ts", { eager: true }) as Record<string, LooseModule>;

const richScore = (path: string): number => {
  const ranking: Array<[RegExp, number]> = [
    [/character-bios-run39\.ts$/, 1000],
    [/leader-deep/, 980],
    [/officers-core-deep/, 970],
    [/officers-(anayss|ansun|wolf)-deep/, 960],
    [/officers-late/, 950],
    [/officers-deep/, 940],
    [/officers\.ts$/, 930],
    [/ritha-deep/, 920],
    [/retired-late/, 910],
    [/retired\.ts$/, 900],
    [/snipers/, 890],
    [/directors/, 880],
    [/game-officers/, 870],
    [/staff-last/, 860],
    [/staff-late/, 850],
    [/staff\.ts$/, 840],
    [/platelets-late/, 830],
    [/platelets-deep/, 820],
    [/platelets\.ts$/, 810],
    [/vip-late/, 800],
    [/vip-deep/, 790],
    [/vip\.ts$/, 780],
    [/archive-deep/, 770],
    [/archive\.ts$/, 760],
    [/extended/, 750],
    [/character-bios\.ts$/, 100],
  ];
  return ranking.find(([pattern]) => pattern.test(path))?.[1] ?? 500;
};

const narrativeScore = (path: string): number => {
  if (/run410/.test(path)) return 1020;
  if (/run409/.test(path)) return 1010;
  if (/run75/.test(path)) return 1000;
  if (/run39/.test(path)) return 990;
  if (/character-biographies-narrative\.ts$/.test(path)) return 100;
  return 900;
};

const recordFor = <T>(module: LooseModule, id: string): T | undefined => {
  for (const value of Object.values(module)) {
    if (!value || typeof value !== "object" || Array.isArray(value)) continue;
    const candidate = (value as Record<string, unknown>)[id];
    if (candidate && typeof candidate === "object") return candidate as T;
  }
  return undefined;
};

const resolveFromModules = <T>(modules: Record<string, LooseModule>, id: string, score: (path: string) => number): T | undefined => {
  const ordered = Object.entries(modules).sort(([left], [right]) => score(right) - score(left) || left.localeCompare(right));
  for (const [, module] of ordered) {
    const candidate = recordFor<T>(module, id);
    if (candidate) return candidate;
  }
  return undefined;
};

const richRequired = new Set([
  "mugen", "gabu", "anayss", "ansun", "wolfphenix", "ritha",
  "scar", "dyingfox", "ryo", "dean", "tae", "zoshaa", "candy", "cele",
  "rich", "zyrcant", "woohyuk", "syv", "woosung", "beowulf",
  "new", "aeshleen", "panda", "rose",
]);

const narrativeRequired = new Set([
  "sye", "gilli", "oyasumi", "snow", "anthos", "daya", "ren",
  "hyaluna", "ritha", "suzimasu", "yumi", "key", "nelph", "kaede", "hishiro",
]);

export const resolveCharacterPageData = (character: Character) => {
  const resolvedRich = resolveFromModules<PublicCharacterBio>(richModules, character.id, richScore);
  const narrative = resolveFromModules<CharacterNarrative>(narrativeModules, character.id, narrativeScore);
  const bio = resolvedRich ?? (getCharacterBio(character) as PublicCharacterBio);

  if (richRequired.has(character.id) && !resolvedRich) {
    throw new Error(`Priority character ${character.id} lost its archive-backed biography.`);
  }
  if (narrativeRequired.has(character.id) && !narrative) {
    throw new Error(`Priority character ${character.id} lost its person-first narrative biography.`);
  }

  return { bio, narrative };
};
