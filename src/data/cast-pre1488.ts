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
  era: "2021+",
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

allCharacters.push({
  id: "tonytonychopper",
  name: "TonyTonyChopper",
  aliases: ["Tony"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2022+",
  logline: "Tony's Wall instinct is to react to public evidence like somebody has kicked open the bathroom door — `STOPPPP`, `DONT SHOW THEM`, immediate caps-lock emergency — and then keep standing in the doorway. He takes the pats, sends back hearts and blushes, and eventually files Marian right back. Privacy panic and participation are apparently allowed to coexist.",
  tags: ["Wall", "Receipt war", "Privacy panic", "Affectionate re-entry", "Bad spelling", "Petty Crimes"],
  stableDiscordIds: ["851264843306631168"],
  relationships: [
    { name: "Marian", note: "Marian files Tony more than once; Tony's protest grammar repeats, and then Tony eventually turns around and directly summons Marian with his own screenshot. Marian answers `oi` and `that'ssprivate`, mirroring the privacy objection back at him. Reciprocal receipt-war familiarity, not hostility and not a claim about whoever appears inside the uninspected image." },
    { name: "phenomenal_lamb", note: "When Tony gets exposed, lamb's rhythm is laugh first, pat afterward. On May 31 lamb mechanically replies to Tony's exact `NO` with `*pat pat*`; Tony answers the pat with `:Cat_Sporkle:` and keeps accepting the softer aftermath. The teasing does not eject him from the room — it gives him a way back into the joke." },
  ],
  quotes: ["WR DONT NEED TO SHARE THIS WITH THE WORLD", "NO / STOP / DONT SHOW THEM", "I am actually the real ceo of bad spelling", "SOGGY BACON?? THAT EXISTS??"],
  claims: [
    "Stable Discord account 851264843306631168 is TonyTonyChopper / Tony in the reviewed 2022 Wall material.",
    "Tony's repeated person-level pattern is dramatic evidence suppression without social withdrawal: caps-lock protest, affectionate uptake, then eventual reciprocal filing.",
    "Marian and Tony have a documented reciprocal receipt-war / privacy-mirroring lane: Marian files Tony in February and May; Tony directly summons Marian with a June 12 filing and receives `that'ssprivate` in return.",
    "phenomenal_lamb has a repeated laugh-then-pat aftermath around Tony exposure, with Tony answering through heart/sporkle/blush-style uptake rather than disengaging."
  ],
  antiFanon: [
    "Tony calling himself `ceo of bad spelling` is a joke self-description, not governance, appointment, staff authority, or a formal title.",
    "`our two childs`, `sibling`, and `crazy family tree` in the same Wall ecology are joke-family language only; do not literalize biological or adoptive kinship.",
    "Tony's June 12 attachment is confirmed POSTED BY Tony and directly targets Marian socially. MADE BY, CAPTURED BY, and visual FEATURING remain unresolved because the pixels were not inspected for those claims.",
    "The privacy-panic contradiction is a recurring Wall mechanism, not evidence of genuine hostility, trauma, or a global personality diagnosis.",
    "Tony's food and haircut lines are small taste/humor texture; the visual subjects of uninspected attachments remain unresolved."
  ],
} as ArchiveCharacter);

const syeIndex = allCharacters.findIndex((character) => character.id === "sye");
if (syeIndex >= 0) {
  const sye = allCharacters[syeIndex] as ArchiveCharacter;
  const relationships = [...(sye.relationships ?? [])];
  const saberRelationship = {
    name: "Saber",
    note: "Sye and Saber repeatedly appear as a practical scheduling pair. In February 2021 Sye talks about the recurring window in terms of what works `for Saber and I`, says she will tell everyone if it needs to move, and keeps alternate slots available as long as people give her warning. The same low-drama maintenance instinct keeps resurfacing around seasonal clock changes and later schedule votes. It reads as practiced coordination, not romance, a fixed hierarchy, or a new formal appointment.",
  };
  const saberIndex = relationships.findIndex((relationship) => relationship.name === "Saber");
  if (saberIndex >= 0) relationships[saberIndex] = saberRelationship;
  else relationships.push(saberRelationship);

  allCharacters[syeIndex] = {
    ...sye,
    tags: [...new Set([...(sye.tags ?? []), "Quiet maintenance", "Advance-notice logistics", "Schedule continuity", "Concise evaluator"])],
    relationships,
    quotes: [...new Set([...(sye.quotes ?? []), "I’ll let everyone know if we need to adjust the time.", "yeah, I can do the other time slots as long as I know ahead of time", "better", "I like the middle one"])],
    claims: [...new Set([...(sye.claims ?? []),
      "A February 2021 scheduling pocket shows Sye doing quiet maintenance around a recurring shared window with Saber: she checks what works `for Saber and I`, says she will tell everyone if the time needs to change, and accepts alternate slots so long as she knows ahead of time.",
      "That advance-notice boundary is consistent with Sye's wider logistics style: she is flexible about the exact slot, but wants changes surfaced before they become a room problem rather than after.",
      "The same longitudinal lane continues past the 2021 clock adjustment. Sye checks UTC/DST assumptions in December 2021 and March 2022, notices the daylight-saving switch again in March 2023, and by October 2023 is still giving compact schedule preferences such as `I like the middle one` and `Then #1 gets my vote`.",
      "Sye's evaluator voice can be extremely compressed. In June 2021 she answers successive revisions with `looks good, guys` and then simply `better`; the brevity sits comfortably beside much more exact backend work when the situation actually needs it.",
      "A separate October 2019 pocket under the historical display ƐℲı˥ preserves the ordinary line `I’m just here, passing the time of day`. It is useful everyday texture, not a source for role chronology or the start date of any alias."
    ])],
    antiFanon: [...new Set([...(sye.antiFanon ?? []),
      "The February 2021 material establishes repeated Sye↔Saber schedule coordination but does not safely name the exact underlying activity/workstream. Keep public language at recurring/shared window or schedule unless another source resolves the task itself.",
      "`for Saber and I` is practical shared-schedule language, not romance, sex, literal family, a partnership title, or proof of a formal reporting line.",
      "The Life / ƐℲı˥ / sycessences material belongs to canonical Sye. It does not create a separate Life/Lif person, and it does not establish an exact chronology for when each historical display name began or ended.",
      "Repeated DST/schedule maintenance does not independently date Sye's formal role appointments or prove exclusive ownership of the underlying schedule, bot, room, or workflow."
    ])],
  } as ArchiveCharacter;
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
