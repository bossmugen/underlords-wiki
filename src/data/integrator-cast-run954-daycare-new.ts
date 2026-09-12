import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// New's authored Daycare lane is small but unusually clean: he corrects one
// wrong name, immediately invents a better wrong name for himself, and later
// drags an old screenshot back into circulation with fond historical drama.
if (!allCharacters.some((character) => character.id === "new")) {
  const newCharacter: ExtendedCharacter = {
    id: "new",
    name: "New",
    aliases: ["Newmal"],
    billing: "legacy",
    role: "Archive-era Daycare cast",
    era: "2021–2026+",
    logline:
      "New can correct somebody for getting his name wrong and then, almost in the same breath, make the naming problem worse himself: `my name is new` becomes the mock-formal `I am now Newmal.` He also has the useful old-room habit of resurfacing yesterday's nonsense and treating it like cultural heritage.",
    tags: [
      "Archive cast",
      "Daycare",
      "Newmal",
      "Self-authored nickname",
      "Callback carrier",
      "Old screenshot archaeology",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Mugen",
        note:
          "Mugen is already in the room during the December 2021 naming pile-up that produces `Newmal`, and later that morning asks when New's resurfaced screenshot was from. The scene supports easy shared Daycare bit-space and callback familiarity, not a special closeness rank.",
        href: "/characters/mugen",
      },
    ],
    quotes: [
      "my name is new",
      "I want to formally introduce myself.",
      "I am now Newmal.",
      "Hello.",
      "Last year",
      "What a time to be alive.",
    ],
    claims: [
      "On December 14, 2021, after Wolf uses the wrong name for him, New explicitly corrects the mistake with `my name is new` and then mock-formally reintroduces himself as `Newmal`. Newmal is therefore self-authored / self-accepted joke naming, not an alias inferred from somebody else's typo.",
      "Later the same day New resurfaces a screenshot from the previous year. When Mugen asks when it was from, he answers `Last year` and then `What a time to be alive.` The useful person read is not just nostalgia: New is one of the people willing to carry old Daycare artifacts forward and put them back into the room's circulation.",
      "Across the naming scene, New is not merely the target of a joke. He corrects the wrong name and then deliberately feeds the mechanism himself, turning a correction into a sequel.",
    ],
    antiFanon: [
      "`Nat` and `Halek` occur as third-party misnaming/confusion in the surrounding scene and are not canonical aliases for New. Do not add them to his alias list.",
      "`Addict` is not established as a label for New in this reviewed Daycare lane. Keep that identity question separate unless an independent bridge appears.",
      "The resurfaced screenshot is evidence that New POSTED / resurfaced the artifact. It does not resolve the identities, maker, capturer, or every person depicted in the old image.",
      "Mugen's presence in the naming exchange supports shared joking context; it does not establish that she coined `Newmal`, appointed a role, or defines New's relationship rank.",
    ],
  };

  allCharacters.push(newCharacter);
  characterById.set("new", newCharacter);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("new")) {
    archiveCastGroup.characterIds.push("new");
  }
}
