import type { CharacterNarrative } from "./character-biographies-narrative";
import { yumiNarrativeCharacterBios } from "./character-biographies-yumi";

const baseYumi = yumiNarrativeCharacterBios.yumi;

export const run401NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  yumi: {
    ...baseYumi,
    sections: [
      ...baseYumi.sections.slice(0, 3),
      {
        period: "October 11, 2020",
        title: "She can laugh at you and still answer when you call",
        paragraphs: [
          "Wall catches Yumi doing a tiny social two-step with Anthos. She opens with **`Pfffft`** while he is already the center of a teasing pocket. Anthos throws **`yummiiiiiiii`** into the room, follows it a few seconds later with **`they r bullying me`**, and Yumi answers almost immediately: **`Staph bullying my bb`**. The joke does not need a committee meeting. One stretched-out version of her name and one complaint are apparently enough for Yumi to understand the assignment.",
          "The fun part is that she was laughing first. Yumi does not have to become solemn in order to take somebody's side; teasing and loyalty are allowed to occupy the same thirty seconds. Anthos can call for her with almost no explanation, and she can pivot from peanut gallery to mock defender without pretending she was never enjoying his predicament. That makes the relationship feel lived rather than labeled: he expects the shorthand to work, and it does.",
          "**`my bb`** stays exactly as small as the scene needs it to be: affectionate shorthand between people who are comfortable with each other, not a romance, family tree, or permanent closeness ranking. The more useful fact is behavioral. Yumi is socially summonable. If somebody she knows yells her name while being clowned, there is at least one surviving occasion where she laughs, hears the appeal, and then joins the defense."
        ]
      },
      ...baseYumi.sections.slice(3),
    ],
  },
};
