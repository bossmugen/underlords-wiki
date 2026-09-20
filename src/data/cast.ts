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

allCharacters.push({
  id: "wolf-phenix",
  name: "Wolf Phenix",
  aliases: ["Wolfie"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2020+",
  logline: "Wolf's surviving Wall footprint is tiny but aggressively complete: the room turns him into dinner conversation, he protests `Leave me alone`, calls everybody mean, and then—still standing there while they wheeze at him—admits just enough with `I may have ;-;` to keep the entire thing alive. Embarrassment does not make him disappear; it makes him complain from inside the joke.",
  tags: ["Wall", "Caught out", "Stays in the bit", "Mock protest", "High-context banter", "Petty Crimes"],
  stableDiscordIds: ["543284829391945728"],
  relationships: [
    { name: "Ren", note: "Ren directly pings him as `Wolfie` in the middle of the October 2020 pile-on — `Wow wolfie xD`. Wolf answers the room rather than withdrawing, so the useful texture is easy caught-out familiarity inside a shared joke, not a closeness rank or relationship label.", href: "/characters/ren" },
    { name: "Anayss", note: "Anayss joins the room's `wolfie` wheeze while Wolf keeps protesting. The exchange supports high-context group-ban­ter where Wolf can be the target and still keep participating; it does not establish a separate formal relationship category." },
    { name: "Cami", note: "Cami helps drive the dinner-conversation pile-on and the surrounding joking accusation. Wolf's `I may have ;-;` lands as an admission inside that same social pressure-cooker, not as permission to literalize the joke-language into a sexual or romantic biography." },
  ],
  quotes: ["Leave me alone. Why did this become dinner conversation? XD", "Y'all big mean", "I may have ;-;"],
  claims: [
    "Stable Discord account 543284829391945728 is Wolf Phenix / Wolfie in the reviewed October 2020 Wall chronology.",
    "Across the three direct authored Wall lines in the reviewed pocket, Wolf's local mechanism is caught-out embarrassment without social retreat: protest, mock accusation, then a small admission that keeps the bit playable.",
    "Ren's direct `Wolfie` ping and the room's immediate uptake support familiar shared-ban­ter in this scene without establishing friendship rank, origin chronology, or a private relationship map."
  ],
  antiFanon: [
    "The room's kinky/dating/replacement-style joke-language is social bit material only. Do not infer literal romance, sex, kink, exclusivity, or a relationship hierarchy from it.",
    "`I may have ;-;` belongs to the live October 2020 exchange and should not be expanded into a broader biographical claim beyond what the text actually supports.",
    "The surrounding Wall attachments were not visually inspected for this person read; POSTED BY does not become MADE BY, CAPTURED BY, or visual FEATURING.",
    "Three direct authored Wall lines support a compact Wall-local character mechanism, not a global diagnosis that Wolf is always embarrassed, defensive, or quiet."
  ],
} as ArchiveCharacter);

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
