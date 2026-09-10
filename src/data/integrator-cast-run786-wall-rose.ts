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
    "Context checker",
    "Compact roast chorus",
    "Petty Crimes",
  ]);

  rose.quotes = appendUnique(rose.quotes, [
    "He hit me first",
    "Its his fault",
    "Oh great theres people shorter than me :Cat_Drool:",
    "Yea Mugen is very sus",
    "She corrupting me help",
    "SHORTZ",
    "didnt ask",
  ]);

  if (!rose.logline.includes("He hit me first")) {
    rose.logline = `${rose.logline} Getting filed can flip her straight into comic defense—\`He hit me first\`, then \`Its his fault\` barely two seconds later—without actually making her leave the joke.`;
  }

  const mugenIndex = (rose.relationships ?? []).findIndex((relationship) => relationship.name === "Mugen");
  const mugenNote =
    "When Mugen drops a Wall exhibit on her, Rose's reflex is not wounded retreat but instant comic lawyering: `He hit me first`, followed barely two seconds later by `Its his fault`. The speed matters; she knows the ritual well enough to start arguing the case while still feeding it. In later Wall exchanges she is just as willing to turn the joke back toward Mugen—`Yea Mugen is very sus`, then `She corrupting me help`—so the filing ritual reads as something Rose can actively play from both sides rather than a thing that only happens to her.";

  if (mugenIndex >= 0) {
    const current = rose.relationships![mugenIndex];
    if (!current.note.includes("Yea Mugen is very sus")) {
      rose.relationships![mugenIndex] = {
        ...current,
        note: current.note.includes("He hit me first")
          ? `${current.note} In later Wall exchanges Rose is just as willing to turn the joke back toward Mugen—\`Yea Mugen is very sus\`, then \`She corrupting me help\`—so the filing ritual reads as something Rose can actively play from both sides rather than a thing that only happens to her.`
          : `${current.note} ${mugenNote}`,
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
    "In the March 8, 2023 Wall pocket, Mugen posts an image and DarkAsrai/Rose answers `He hit me first`; 1.984 seconds later Rose follows with `Its his fault`. The scene supports reflexive comic blame transfer and comfortable participation in the Wall ritual.",
    "On April 16, 2023 Rose writes `Oh great theres people shorter than me :Cat_Drool:`. It is useful short-person-joke texture but does not establish Rose's exact height or anybody else's.",
    "The April 5, 2023 `Beat me to it` line is consistent with a filing-race read, but its exact target remains unresolved and is not promoted as a named incident here.",
    "In the later DarkAsrai/Rose Wall suffix, Rose returns after hours, asks for context, and then falls directly back into compact roast and blame-play. The context check is part of knowing participation, not evidence that she is withdrawing from the room's joke grammar.",
    "Rose's `Yea Mugen is very sus` / `She corrupting me help` sequence flips comic blame toward Mugen. It is familiar adversarial play inside the Wall ritual, not a literal coercion or corruption allegation.",
    "Rose's `SHORTZ` toward Xuseio/Cyle belongs to the room's familiar short-person teasing. It does not establish anyone's exact height, a relationship rank, or durable hostility.",
    "Rose's `didnt ask` toward Aster is a situational blunt jab in the recovered Wall pocket, not enough by itself to define an ongoing feud or personality-wide hostility.",
    "A quick Rose/Rain roast echo in the recovered suffix shows Rose comfortable joining a compact chorus when somebody else opens the lane; it is useful interaction texture, not a closeness score.",
  ]);

  rose.antiFanon = appendUnique(rose.antiFanon, [
    "`He hit me first` / `Its his fault` is comic defense inside a Wall exchange, not evidence of literal violence, victimhood, or a serious accusation.",
    "`Oh great theres people shorter than me` is a joke about relative height, not a source for exact measurements.",
    "Mugen's March 8 image is POSTED BY Mugen only unless separate media inspection resolves MADE BY, CAPTURED BY, or FEATURING.",
    "The joking `Noo they taste like chicken XD` line stays a joke; do not literalize it into food preference, harm, or cannibalism lore.",
    "`Yea Mugen is very sus` / `She corrupting me help` is joking blame-transfer; do not turn it into literal coercion, corruption, abuse, or a serious allegation.",
    "`SHORTZ`, `didnt ask`, and quick roast echoes are situational social-play texture. Do not use them to invent exact height, permanent hostility, or relationship ranking.",
    "DarkAsrai belongs to the canonical Rose owner through stable-account continuity; do not create a second person from the historical handle.",
    "Mixed response-circle or q18 counts are recurrence/context tools only; do not convert them into popularity, intimacy, or friendship rankings.",
  ]);

  characterById.set("rose", rose);
}