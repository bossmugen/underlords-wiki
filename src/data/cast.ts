import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1468";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1468";

export const allCharacters: Character[] = [...previousCharacters];

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

allCharacters.push({
  id: "queen-shimoko",
  name: "Queen Shimoko",
  aliases: ["Shimoko"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2021+",
  logline: "Tiny Wall footprint, absurdly efficient signal: Shimoko mostly lets emotes do the talking, then one `Crab booty omgsh` is enough for Ricochet to immediately turn it into `Pancake crab booty??`. When Korea threatens to excavate an old pineapple-buttplug screenshot, two spit emotes are apparently a complete answer.",
  tags: ["Wall", "Emote-heavy", "Phrase seeder", "Shared-riff fluency", "Receipt culture", "Petty Crimes"],
  stableDiscordIds: ["825953265430691860"],
  relationships: [
    { name: "Mugen", note: "Mugen publicly celebrates Shimoko having `finally made it to the wall`; Shimoko is one of the reactors and soon adds a small `:Hehe:`. It reads as warm induction and probable amused uptake, without turning Mugen's `my koi` into literal family, romance, rank, or a join-date claim.", href: "/characters/mugen" },
    { name: "Ricochet", note: "After Mugen captions a filing `crabs on the menu tonight`, Shimoko supplies `Crab booty omgsh:Laugh:`; Ricochet picks up the wording about a minute later as `Pancake crab booty??:Cat_sip: :Cat_sip:`. One-scene instant-riff familiarity, with Shimoko as the local surviving-pocket phrase seed rather than a global-origin claim." },
    { name: "Korea / Milk", note: "Shimoko true-replies Korea/Milk's exact `wait til i find the pineapple buttplug ss` parent with `:EmoJi_Spit: :EmoJi_Spit:` after Ren says `I REMEMBER THAT`. She can join old-receipt archaeology with almost no prose because the premise is already enough." },
  ],
  quotes: ["Crab booty omgsh:Laugh:", ":Hehe:", ":EmoJi_Spit: :EmoJi_Spit:"],
  claims: [
    "Stable Discord account 825953265430691860 is Queen Shimoko in the reviewed April–May 2021 Wall chronology.",
    "Across her three authored Wall messages, Shimoko's cumulative local style is low-word / emote-heavy participation with fast premise uptake, plus the occasional vivid phrase that somebody else immediately runs with.",
    "Within the inspected May 2 pocket, Shimoko supplies the earliest surviving `crab booty` phrasing and Ricochet extends it about one minute later; this supports local phrase-seeding and shared-riff behavior.",
    "On May 11, 2021 Shimoko mechanically true-replies Korea/Milk's old-screenshot threat with two spit emotes; the parent contains no screenshot, so the response is to the written threat/callback rather than inspected visual content."
  ],
  antiFanon: [
    "Mugen's `my koi` is affectionate/social wording only. Do not literalize it into biological family, romance, ownership, rank, or a formal relationship category.",
    "`Finally made it to the wall` is Mugen's social framing, not a UL join date, first friendship date, or guaranteed origin of Shimoko's Wall presence.",
    "The May 2 screenshot was POSTED BY Mugen but was not visually inspected in this pass. MADE BY, CAPTURED BY, and visual FEATURING remain unresolved.",
    "Shimoko is the earliest surviving `crab booty` phrasing in the inspected pocket, not a guaranteed project-wide originator.",
    "The May 11 Korea/Milk parent has no attachment; do not claim Shimoko saw or reacted to the threatened screenshot's visual contents in that exchange.",
    "Three authored Wall messages support a compact Wall-local person read, not a global diagnosis that Shimoko is always quiet, shy, or nonverbal."
  ],
} as ArchiveCharacter);

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
