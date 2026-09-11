import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Daycare's new support material does not create a second Usama owner. It deepens
// the existing one-line-room-spotter read with human-recognized familiarity and a
// small return/continuity beat that the old Wall-only layer could not carry.
const usamaIndex = allCharacters.findIndex((character) => character.id === "usama");
if (usamaIndex < 0) {
  throw new Error("Run 833 expected the canonical Usama owner to exist.");
}

const usama = allCharacters[usamaIndex] as ExtendedCharacter;
const usamaRelationships = [...(usama.relationships ?? [])];
upsertRelationship(usamaRelationships, {
  name: "Anayss",
  note:
    "When Usama introduces himself in Lobby on June 16, 2021 as `Usama\\n20, from Underlords`, Anayss answers `wb Usa uwu!`. The useful beat is recognition, not paperwork: she experiences him as somebody coming back, while the exact account/leave/rejoin mechanics stay unknown.",
  href: "/characters/anayss",
});

const nextUsama: ExtendedCharacter = {
  ...usama,
  logline:
    "Mostly `lol` until the room drops a continuity problem: Usama's tiny footprint gets specific exactly when somebody needs yesterday remembered, a person recognized, or old-house lore checked. He barely spends words, but he is paying attention—and Anayss's casual `wb Usa uwu!` makes clear that the room already knew who had walked back in.",
  tags: appendUnique(usama.tags, ["Lobby", "Daycare", "Return/familiarity"]),
  relationships: usamaRelationships,
  quotes: appendUnique(usama.quotes, ["lol thats Shiya", "Usama , underlords , 20"]),
  claims: appendUnique(usama.claims, [
    "On 2021-06-16, three days before the indexed direct-Daycare span begins, Usama self-identifies in Lobby as `Usama\\n20, from Underlords`; Anayss answers `wb Usa uwu!`, directly showing human-recognized familiarity/return.",
    "On 2021-07-25 Usama supplies `lol thats Shiya` in Wall. The line is usable as authored person recognition even though the referenced Wall object itself is unrecovered.",
    "On 2021-10-20 the same stable account fills the Lobby form again as `Usama , underlords , 20`. That is continuity texture, not enough to reconstruct a leave/rejoin mechanism.",
  ]),
  antiFanon: appendUnique(usama.antiFanon, [
    "Anayss's `wb Usa uwu!` supports familiarity/return in ordinary social terms; it does not establish an exact first join, leave date, rejoin date, or game-club admission mechanism.",
    "The June and October Lobby forms belong to the same stable account but do not by themselves establish a leave/rejoin cycle.",
    "Wall/Lobby support lines deepen Usama's social style; they are not rewritten as direct Daycare dialogue.",
  ]),
};
allCharacters[usamaIndex] = nextUsama;
characterById.set("usama", nextUsama);

// Queen Shimoko is too thin for a MAIN biography, but the surviving Wall shard is
// coherent enough for a structured WIKI owner: very few words, very little hesitation
// once somebody else has supplied a sufficiently ridiculous premise.
const queenId = "queen-shimoko";
const queenIndex = allCharacters.findIndex(
  (character) =>
    character.id === queenId ||
    character.name === "Queen Shimoko" ||
    character.aliases?.includes("shimok05290"),
);

const queenBase: ExtendedCharacter =
  queenIndex >= 0
    ? (allCharacters[queenIndex] as ExtendedCharacter)
    : {
        id: queenId,
        name: "Queen Shimoko",
        aliases: ["shimok05290"],
        billing: "legacy",
        role: "Archive-era UL cast",
        era: "2021",
        logline: "",
      };

const queenRelationships = [...(queenBase.relationships ?? [])];
upsertRelationship(queenRelationships, {
  name: "Mugen",
  note:
    "Mugen celebrates Queen's arrival on Wall with `My koi @Queen Shimoko ... finally made it to wall xD`; Queen eventually answers the whole induction with `:Hehe:`. It reads as affectionate, familiar teasing—not a literal romance or family label.",
  href: "/characters/mugen",
});
upsertRelationship(queenRelationships, {
  name: "Korea",
  note:
    "Korea revives an old pineapple-buttplug screenshot joke; Queen's complete TRUE_REPLY review is two spit emotes. It is one bounded gross-out/callback beat, not a relationship rank.",
});

const queen: ExtendedCharacter = {
  ...queenBase,
  id: queenId,
  name: "Queen Shimoko",
  aliases: appendUnique(queenBase.aliases, ["shimok05290"]),
  billing: queenBase.billing || "legacy",
  role: queenBase.role || "Archive-era UL cast",
  era: queenBase.era || "2021",
  logline:
    "Queen Shimoko barely needs prose once the room has supplied a premise. A Wall welcome gets `:Hehe:`, crab dinner becomes `Crab booty omgsh`, and an old pineapple-buttplug callback receives two spit emotes as a complete critical review. Low word count, extremely high willingness to join the stupid part.",
  tags: appendUnique(queenBase.tags, [
    "Archive cast",
    "2021",
    "Wall",
    "Low-verbiage",
    "Reaction language",
    "Callback humor",
    "Petty Crimes",
  ]),
  relationships: queenRelationships,
  quotes: appendUnique(queenBase.quotes, [
    ":Hehe:",
    "Crab booty omgsh:Laugh:",
    ":EmoJi_Spit: :EmoJi_Spit:",
  ]),
  claims: appendUnique(queenBase.claims, [
    "On 2021-04-30 Mugen posts `My koi @Queen Shimoko ... finally made it to wall xD`; Queen later contributes `:Hehe:` to the induction pocket.",
    "On 2021-05-02 Queen joins the room's crab riff with `Crab booty omgsh:Laugh:`; Ricochet follows with `Pancake crab booty??...` in the same scene.",
    "On 2021-05-11 Queen TRUE-replies with two spit emotes to Korea's pineapple-buttplug screenshot callback, preserving a direct parent edge for the gross-out reaction.",
    "Across the tiny surviving Wall sample, Queen's social style is more accurately described as compact/emote-first participation than generic quietness: she routinely lets somebody else establish the premise and then supplies the punctuation or escalation.",
  ]),
  antiFanon: appendUnique(queenBase.antiFanon, [
    "Mugen's `my koi` is affectionate social language here, not proof of romance, biological family, exclusivity, or formal status.",
    "Three sampled Wall messages do not justify a broad off-Wall temperament claim or an extrovert/introvert label.",
    "Nearby screenshots were not visually inspected in this pass; retain POSTED BY attribution and do not invent MADE BY, CAPTURED BY, or FEATURING claims.",
  ]),
};

if (queenIndex >= 0) allCharacters[queenIndex] = queen;
else allCharacters.push(queen);
characterById.set(queenId, queen);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(queenId)) {
  archiveCastGroup.characterIds.push(queenId);
}
