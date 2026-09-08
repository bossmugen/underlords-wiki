import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

// Run 633 — Wall. Vanness is still Wall-sized rather than MAIN-biography-sized,
// but the cumulative mechanism is now person-shaped: contest a charge that feels
// misplaced; personally summon Screenshot Court when the disaster is one's own.
const vannessId = "vanness";
const vannessIndex = allCharacters.findIndex((character) => character.id === vannessId);
const previousVanness = vannessIndex >= 0 ? allCharacters[vannessIndex] : undefined;

// Preserve the older relationship lanes instead of replacing the person with the
// newest receipt family. Ren/RV is one canonical person, so retire the stale Ren
// label while keeping ShiyaX, Mugen, and any other previously owned relationship.
const preservedRelationships = (previousVanness?.relationships ?? []).filter(
  (relationship) => !["Ren", "RV", "Gilli", "Candy"].includes(relationship.name),
);

const vanness: Character = {
  ...(previousVanness ?? {}),
  id: vannessId,
  name: "Vanness",
  aliases: [...new Set([...(previousVanness?.aliases ?? []), "vanness0492"])],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021",
  logline:
    "Wall gremlin with conditional courtroom ethics: Vanness can point somebody toward evidence, redirect blame at full theatrical volume when a charge feels wrong, then personally file `Shame me` when the merge disaster is unmistakably their own and come back later with the full failure autopsy.",
  tags: [
    ...new Set([
      ...(previousVanness?.tags ?? []),
      "Archive cast",
      "Wall",
      "Screenshot Court",
      "Selective accountability",
      "Self-prosecution",
      "Petty Crimes",
    ]),
  ],
  relationships: [
    ...preservedRelationships,
    {
      name: "Gilli",
      note: "Vanness files `Shame me` without naming a jury; Gilli true-replies the exact filing with `:freezedr:`. Nobody needs the ritual explained or a personal summons before court is in session.",
      href: "/characters/gilli",
    },
    {
      name: "Candy",
      note: "Candy true-replies the same self-filed merge disaster with `Wad00` and a crying-cat follow-through. Vanness has already volunteered for prosecution, so the room can skip straight to communal disbelief.",
      href: "/characters/candy",
    },
    {
      name: "RV",
      note: "RV's tiny `hoW-` is apparently enough subpoena. Vanness later returns with `I failed merge 4 times in a row, and the last 2 orange merged into 1`, then closes the report with `my luck is💩`. Low-setup Screenshot Court shorthand, not a closeness ranking.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    ...new Set([
      ...(previousVanness?.quotes ?? []).filter((quote) => quote !== "Shame me:CatCry:"),
      "Im putting myself in wall of shame for losing 5 orange dracs for merge. Shame me:CatCry:",
      "Im too sad to play anymore:Cursed:",
      "I failed merge 4 times in a row, and the last 2 orange merged into 1:Raja_cat_frustrates:",
      "my luck is💩",
      "ITS GABU WHO SUCKED IT DRY, NOT MEEE:Raja_cat_frustrates:",
    ]),
  ],
};

if (vannessIndex >= 0) allCharacters[vannessIndex] = vanness;
else allCharacters.push(vanness);
characterById.set(vannessId, vanness);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(vannessId)) {
  archiveCastGroup.characterIds.push(vannessId);
}
