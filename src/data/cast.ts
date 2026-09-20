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
  era: "2021–2022",
  logline: "Wolf's Wall footprint is compact, but the room does not need his full name to find him. Ricochet and Mugen both use `Wolfie` naturally around him, the sort of low-ceremony shorthand that only needs one syllable less formality to make somebody feel already inside the conversation.",
  tags: ["Wall", "Wolfie", "Social shorthand", "Compact footprint", "Relationship texture"],
  stableDiscordIds: ["543284829391945728"],
  relationships: [
    { name: "Ricochet", note: "Ricochet uses `Wolfie` naturally in the corrected Wall chronology. The useful texture is easy social shorthand: Wolf is somebody Ricochet can address without ceremony. It does not establish who coined the nickname, a friendship rank, or a first-meeting date." },
    { name: "Mugen", note: "Mugen also uses `Wolfie` nearby, independently reinforcing that the nickname functions as ordinary room language rather than a one-person invention or formal alias ceremony.", href: "/characters/mugen" },
  ],
  quotes: [],
  claims: [
    "Stable Discord account 543284829391945728 is Wolf Phenix in the corrected Wall chronology.",
    "The corrected direct-authored Wall span currently runs from 2021-12-31 through 2022-09-03 with five direct Wolf-authored messages in the covered source.",
    "`Wolfie` is supported as social shorthand by at least Ricochet and Mugen in the reviewed Wall material."
  ],
  antiFanon: [
    "Do not restore the superseded 2020 three-message chronology or the caught-out dinner characterization from the stale sidecar route; the corrected Wall checkpoint explicitly supersedes it.",
    "`Wolfie` is social shorthand, not proof of nickname origin, formal naming chronology, friendship rank, or a private relationship map.",
    "Hamu's separate `WolfCat` language does not create a Hamu = Wolf / WolfCat identity bridge. Keep those referents separate unless direct identity evidence appears.",
    "Five authored Wall messages support a compact Wall-local owner, not a global personality diagnosis."
  ],
} as ArchiveCharacter);

allCharacters.push({
  id: "aesh",
  name: "Aesh",
  aliases: ["._."],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "Archive era",
  logline: "Aesh discovers that the room has compressed an unwieldy version of his name into the world's most economical nickname: `._.`. His response is not outrage but laughter — apparently `aesh van gobg` takes too long to type, so punctuation wins. It is less a rename than UL solving character count with a face.",
  tags: ["Wall", "Nickname lore", "Social shorthand", "Fast-typing culture", "Petty Crimes"],
  stableDiscordIds: ["188738539962548225"],
  relationships: [
    { name: "Mugen", note: "When Aesh learns about `._.`, Mugen is part of the conversation around the nickname and the two end up laughing about it. Aesh explicitly frames the discovery as funny rather than harmful, giving them a small, easy lane of shared amusement without inventing a deeper relationship tier.", href: "/characters/mugen" },
  ],
  quotes: ["when I learned your nickname for me was ._. I couldn’t stop laughing", "takes too long to type aesh van gobg", "so I became ._."],
  claims: [
    "Stable Discord account 188738539962548225 is Aesh / aeshindare in the reviewed Wall material.",
    "Aesh explicitly calls the relevant wording his `last name` in the scene, then explains that the room's `._.` shorthand is funny and that typing `aesh van gobg` takes too long.",
    "`._.` is therefore usable as room-level nickname/shorthand lore for Aesh, with the strongest surviving explanation coming from Aesh himself."
  ],
  antiFanon: [
    "The source says `last name`, but that wording does not establish Aesh's legal name, civil identity, or any private real-world naming fact.",
    "`so I became ._.` is social joke-language in the nickname conversation; do not turn it into a formal display-name change, account rename chronology, or identity-transfer event.",
    "Do not infer that Mugen invented the nickname merely because she is present in the conversation; the surviving material establishes shared discussion and laughter, not sole authorship.",
    "Punctuation resemblance is not an identity bridge to any other account or person."
  ],
} as ArchiveCharacter);

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
