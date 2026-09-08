import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

// Run 633 — Wall. Vanness is still Wall-sized rather than MAIN-biography-sized,
// but the cumulative mechanism is now person-shaped: contest a charge that feels
// misplaced; personally summon Screenshot Court when the disaster is one's own.
const vannessId = "vanness";
const vannessIndex = allCharacters.findIndex((character) => character.id === vannessId);

const vanness: Character = {
  id: vannessId,
  name: "Vanness",
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021",
  logline:
    "Wall gremlin with conditional courtroom ethics: Vanness can point somebody toward evidence, redirect blame at full theatrical volume when a charge feels wrong, then personally file `Shame me` when the merge disaster is unmistakably their own and come back later with the full failure autopsy.",
  tags: [
    "Archive cast",
    "Wall",
    "Screenshot Court",
    "Selective accountability",
    "Self-prosecution",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note: "Vanness files `Shame me` without naming a jury; Gilli true-replies the exact filing with `:freezedr:`. Nobody needs the ritual explained or a personal summons before court is in session.",
      href: "/characters/gilli",
    },
    {
      name: "Candy",
      note: "Candy true-replies the same self-filed merge disaster with `Wad00` and a crying-cat reaction. Vanness has already volunteered for prosecution, so the room can skip straight to communal disbelief.",
      href: "/characters/candy",
    },
    {
      name: "RV",
      note: "RV's tiny `hoW-` is apparently enough subpoena. Vanness later returns with `I failed merge 4 times in a row, and the last 2 orange merged into 1`, then closes the report with `my luck is💩`. Low-setup Screenshot Court shorthand, not a closeness ranking.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    "Im putting myself in wall of shame for losing 5 orange dracs for merge. Shame me:CatCry:",
    "Im too sad to play anymore:Cursed:",
    "I failed merge 4 times in a row, and the last 2 orange merged into 1:Raja_cat_frustrates:",
    "my luck is💩",
    "ITS GABU WHO SUCKED IT DRY, NOT MEEE:Raja_cat_frustrates:",
  ],
};

if (vannessIndex >= 0) allCharacters[vannessIndex] = vanness;
else allCharacters.push(vanness);
characterById.set(vannessId, vanness);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(vannessId)) {
  archiveCastGroup.characterIds.push(vannessId);
}
