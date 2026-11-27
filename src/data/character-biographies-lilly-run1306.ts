import type { CharacterNarrative } from "./character-biographies-narrative";
import { lillyNarrativeCharacterBios } from "./character-biographies-lilly";

const base = lillyNarrativeCharacterBios.lilly;

export const lillyRun1306NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  lilly: {
    ...base,
    sections: [
      ...base.sections.slice(0, 3),
      {
        period: "October 23 – November 17, 2020",
        title: "Tell her the plabn",
        paragraphs: [
          "Two weeks after Spritely / Shurui said they had joined UL from Aether, Spritely is already greeting Lilly at full volume: `LILLYYY`, then `eli hug @Lilly👽`, then `ilysm Lilly ❤️`. A Lilly `eli glomp @Spritely` command sits in the same immediate cluster. The archive does not need to turn any of that into romance to understand the social temperature. By late October the two are plainly familiar enough for affection to be casual, public, and almost mechanically easy — name yelled, hug command fired, love-you shorthand dropped, room keeps moving.",
          "That matters three and a half weeks later because a line that once looked like generic event logistics now has a person behind it. On November 17, Saber announces that **Land of Conquest** begins at 17:45. Fourteen minutes later Club-Only is in live scramble mode: Drink Water Reminder says `rejoin vc`; Lilly asks `can someone grab shurui` and immediately follows with `and tell her the plabn`; Mugen is asking Ansun who he has; Wolf says `My team in earth`. The event identity is no longer a guess. This is Land of Conquest coordination, and `plabn` is preserved because the typo is half the scene: nobody is drafting doctrine, they are trying to get everybody back into voice and onto the plan before the match leaves without them.",
          "The small emotional undercurrent is better than a leadership claim. Lilly notices that a familiar person is outside the current information loop and wants somebody to pull her in. The request is operational, but it is not stranger-on-roster math once the October affection survives beside it. Care and coordination are overlapping. That does not prove Lilly was Shurui's supervisor, does not establish a Staff appointment date, and absolutely does not rank the friendship or turn `ilysm` into romance. It shows something more ordinary: Shurui had been in UL for only a few weeks and was already somebody Lilly expected to be there, briefed, and included when the event went live."
        ]
      },
      ...base.sections.slice(3),
    ],
    closing: [
      ...(base.closing ?? []),
      "The Shurui receipts sharpen one recurring Lilly trait without pretending it explains her whole life: affection and practical attention are not separate modes. She can be yelling `LILLYYY` back-and-forth territory with somebody in October and, by November, be the person asking who is going to grab that same familiar face and tell her the `plabn` before Land of Conquest rolls on without her."
    ]
  }
};
