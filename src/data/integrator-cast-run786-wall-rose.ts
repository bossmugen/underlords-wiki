import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const rose = allCharacters.find((character) => character.id === "rose") as ExtendedCharacter | undefined;

if (rose) {
  rose.tags = appendUnique(rose.tags, [
    "Wall",
    "Knowing defendant",
    "Comic defense attorney",
    "Receipt ritual",
    "Petty Crimes",
  ]);

  rose.quotes = appendUnique(rose.quotes, [
    "He hit me first",
    "Its his fault",
    "Oh great theres people shorter than me :Cat_Drool:",
  ]);

  if (!rose.logline.includes("He hit me first")) {
    rose.logline = `${rose.logline} Getting filed can flip her straight into comic defense—\`He hit me first\`, then \`Its his fault\` three seconds later—without actually making her leave the joke.`;
  }

  const mugenIndex = (rose.relationships ?? []).findIndex((relationship) => relationship.name === "Mugen");
  const mugenNote =
    "When Mugen drops a Wall exhibit on her, Rose's reflex is not wounded retreat but instant comic lawyering: `He hit me first`, followed 3.809 seconds later by `Its his fault`. The speed matters; she knows the ritual well enough to start arguing the case while still feeding it.";

  if (mugenIndex >= 0) {
    const current = rose.relationships![mugenIndex];
    if (!current.note.includes("He hit me first")) {
      rose.relationships![mugenIndex] = {
        ...current,
        note: `${current.note} ${mugenNote}`,
      };
    }
  } else {
    rose.relationships = [
      ...(rose.relationships ?? []),
      {
        name: "Mugen",
        note: mugenNote,
        href: "/characters/mugen",
      },
    ];
  }

  rose.claims = appendUnique(rose.claims, [
    "In the March 8, 2023 Wall pocket, Mugen posts an image and DarkAsrai/Rose answers `He hit me first`; 3.809 seconds later Rose follows with `Its his fault`. The scene supports reflexive comic blame transfer and comfortable participation in the Wall ritual.",
    "On April 16, 2023 Rose writes `Oh great theres people shorter than me :Cat_Drool:`. It is useful short-person-joke texture but does not establish Rose's exact height or anybody else's.",
    "The April 5, 2023 `Beat me to it` line is consistent with a filing-race read, but its exact target remains unresolved and is not promoted as a named incident here.",
  ]);

  rose.antiFanon = appendUnique(rose.antiFanon, [
    "`He hit me first` / `Its his fault` is comic defense inside a Wall exchange, not evidence of literal violence, victimhood, or a serious accusation.",
    "`Oh great theres people shorter than me` is a joke about relative height, not a source for exact measurements.",
    "Mugen's March 8 image is POSTED BY Mugen only unless separate media inspection resolves MADE BY, CAPTURED BY, or FEATURING.",
    "The joking `Noo they taste like chicken XD` line stays a joke; do not literalize it into food preference, harm, or cannibalism lore.",
  ]);

  characterById.set("rose", rose);
}
