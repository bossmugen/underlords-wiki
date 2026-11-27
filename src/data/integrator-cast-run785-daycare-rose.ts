import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

// Hard identity repair: DarkAsrai / darkasrai are Rose's account forms, not a
// second cast member. An older supplemental card survived under id `darkasrai`;
// remove that duplicate before deepening the canonical Rose owner.
const duplicateDarkAsraiIndex = allCharacters.findIndex((character) => character.id === "darkasrai");
if (duplicateDarkAsraiIndex >= 0) allCharacters.splice(duplicateDarkAsraiIndex, 1);
for (const group of castGroups) {
  group.characterIds = group.characterIds.filter((id) => id !== "darkasrai");
}
characterById.delete("darkasrai");

const roseIndex = allCharacters.findIndex((character) => character.id === "rose");
if (roseIndex < 0) {
  throw new Error("Run 785 expected canonical Rose owner; refusing to recreate Rose from a Wall slice");
}

const rose = allCharacters[roseIndex] as ExtendedCharacter;
const relationships = [...(rose.relationships ?? [])];
const rummyRelationship = {
  name: "Rummy",
  note: "Rose can enter Rummy's game-combat bit with `Having fun murdering people anna`, then challenge her with `Bet wanna fight me XD` and `Lets see how much i remember of the combat`; Rummy true-replies that it is going to be `very swuiShy`. Easy game-shaped activation and mutual teasing, not real violence or a fixed rivalry.",
  href: "/characters/rummy",
};
const rummyIndex = relationships.findIndex((relationship) => relationship.name === "Rummy");
if (rummyIndex >= 0) relationships[rummyIndex] = rummyRelationship;
else relationships.push(rummyRelationship);

allCharacters[roseIndex] = {
  ...rose,
  aliases: appendUnique(rose.aliases, ["DarkAsrai", "darkasrai"]),
  logline:
    "Historical Staff with a selective-entry social style: Rose can stay one step off-center until the joke gives her a handle, preserve a receipt `For those who missed this`, jump straight into Rummy's combat banter, and then recognize her own turn in Screenshot Court with `I knew id get in here`.",
  tags: appendUnique(rose.tags, [
    "Wall",
    "Receipt courier",
    "Selective entry",
    "Rummy banter",
    "Screenshot Court",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(rose.quotes, [
    "For those who missed this",
    "Having fun murdering people anna",
    "Bet wanna fight me XD",
    "Lets see how much i remember of the combat",
    "I knew id get in here",
  ]),
  claims: appendUnique(rose.claims, [
    "On September 22, 2021 Rose / DarkAsrai posted one screenshot and one video in the Wall, then fifteen seconds later added `For those who missed this`. The useful person-level read is receipt-courier behavior: she is not only filing material, she is explicitly making the joke available to people who were not there for it.",
    "On January 1, 2023 Rose true-replied to Rummy with `Having fun murdering people anna`, then challenged her with `Bet wanna fight me XD` and `Lets see how much i remember of the combat`; Rummy true-replied that it would be `very swuiShy`. The exchange supports playful in-game combat banter and easy activation between them.",
    "On April 3, 2023 Rose wheeze-reacted around a new Wall filing and then wrote `I knew id get in here`. Together with her receipt-courier behavior, the contradiction is useful: Rose can circulate the exhibit for everybody else and knowingly become the exhibit herself.",
  ]),
  antiFanon: appendUnique(rose.antiFanon, [
    "DarkAsrai / darkasrai are Rose aliases on the same canonical person. Do not restore a separate DarkAsrai cast entry.",
    "The September 22 screenshot and video are POSTED BY Rose only. Their pixels were not inspected here, so maker, capturer, subjects and featured people remain unresolved.",
    "`For those who missed this` supports a receipt-courier / include-the-absent beat; it does not establish that Rose originated the media or the underlying incident.",
    "The Rummy exchange is game/combat banter. Do not turn it into real violence, romance, a trainer/rival title, a fixed sparring partnership, or a closeness ranking.",
    "Rose's sparse Daycare authored count is source-local. Selective entry is a better read than inventing shyness, passivity, low importance, or overall absence.",
    "`I knew id get in here` is self-aware Wall participation; the uninspected exhibit does not establish what Rose supposedly did or who created it.",
  ]),
} as ExtendedCharacter;

const canonicalRose = allCharacters[roseIndex] as ExtendedCharacter;
characterById.set("rose", canonicalRose);
// Preserve lookup continuity without generating a second static character page.
characterById.set("darkasrai", canonicalRose);
