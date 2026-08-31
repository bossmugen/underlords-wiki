import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run39NarrativeCharacterBios } from "./character-biographies-run39";
import { tenNarrativeCharacterBios } from "./character-biographies-ten";
import { dayaNarrativeCharacterBios } from "./character-biographies-daya";
import { run53NarrativeCharacterBios } from "./character-biographies-run53";

function beforeSection(base: CharacterNarrative, beforeTitle: string, section: NarrativeSection): CharacterNarrative {
  const index = base.sections.findIndex((candidate) => candidate.title === beforeTitle);
  if (index < 0) return { ...base, sections: [...base.sections, section] };
  return {
    ...base,
    sections: [...base.sections.slice(0, index), section, ...base.sections.slice(index)],
  };
}

function appendParagraphs(base: CharacterNarrative, title: string, paragraphs: string[]): CharacterNarrative {
  return {
    ...base,
    sections: base.sections.map((section) =>
      section.title === title
        ? { ...section, paragraphs: [...section.paragraphs, ...paragraphs] }
        : section,
    ),
  };
}

const eosWithCounterfire = beforeSection(
  run39NarrativeCharacterBios.eos,
  "Childe boss fight, Marian Kage, and the world's least efficient prosecutor",
  {
    period: "June 2021",
    title: "Sometimes Eos walks into evidence voluntarily. Then somebody else gets dragged in too.",
    paragraphs: [
      "The Wall catches Eos doing something more interesting than simply losing screenshot court. On June 1 they answer one filing with **`i accet my fate this time`**. Six days later they post **`gonna just put myself here and head out-`** with their own exhibit. That is not a person being passively prosecuted anymore. Eos can recognize when the case is cooked, file the paperwork personally, and leave before the jury starts enjoying itself too much.",
      "Then the surrender posture flips. On June 17 Eos protests **`i said dont look`**, but the retreat lasts about as long as dignity usually lasts on the Wall: **`Take zhenyan :sippp:`**, followed by **`this is war`**. The threat is house theater, not literal hostility. The useful contradiction is that Eos dislikes being exposed and still knows perfectly well how to grab the same machinery and swing it around. They are not outside UL's screenshot economy complaining about it. They are inside it, occasionally self-filing, occasionally counter-filing, and apparently willing to call the exchange a war once somebody has looked at the thing they were told not to look at."
    ],
  },
);

const eos = {
  ...eosWithCounterfire,
  sections: [
    ...eosWithCounterfire.sections,
    {
      title: "Petty Crimes",
      paragraphs: [
        "In December 2024 Eos says **`I have eeveelution tattoo`**. That is enough to give Pokémon / Eeveelution taste a real place in the person file. Which Eeveelution, where the tattoo is, what it looks like, and whether the choice came with a thirty-slide ranking remain none of our business until Eos volunteers them.",
        "Can apparently move from **`i accet my fate this time`** to **`this is war`** inside the same month. Acceptance has a very short warranty."
      ],
    },
  ],
};

const ten = beforeSection(
  tenNarrativeCharacterBios.ten,
  "Screenshot jail apparently requires estate planning",
  {
    period: "August 27, 2020",
    title: "Ten remembers the cameras just late enough to become immortal",
    paragraphs: [
      "Before the later Wall `legacy` / `heir` joke, Ten gives the house an even cleaner little contradiction: **`i keep forgetting y'all record these :mochi_sweat:`**. Thirty-five seconds later comes the resignation clause: **`at least i'll leave some kind of legacy i guess`**. Ten knows preservation is happening. Ten also apparently cannot keep that fact in working memory long enough for it to improve behavior. Extremely unfortunate for Ten; excellent for everybody else's filing cabinet.",
      "The wording matters because the embarrassment converts almost immediately into fatalistic authorship. `Keep forgetting` admits this is not the first time the recording habit has been relevant to Ten's brain, while `at least` turns exposure into a consolation prize: fine, if dignity is already gone, perhaps history can have the remains. The line does not tell us whether `record` means screenshots, screen recordings, or some broader capture habit, and it is not declared the origin of Ten's later estate-planning joke. It is better as character continuity: preservation awareness exists, practical self-preservation fails, and Ten's next move is to make immortality funny."
    ],
  },
);

const daya = appendParagraphs(
  dayaNarrativeCharacterBios.daya,
  "Authority arrives, but the clearest early statement is that the game is not the most important thing",
  [
    "The same early-Officer summer also catches Daya looking at a ridiculous Dragon Raja movement moment and immediately converting it into survival math. She posts a screen recording, says **`flying high`**, and Ren answers **`Daya got the high ground`**. Daya's response is not merely *lol glitch*: **`wish i could do that during contests`**, because **`then id stay alive`**. Whatever the exact game physics were, the social reflex is wonderfully practical. Put Daya somewhere impossible and she is already asking whether the nonsense can be operationalized.",
    "That sits neatly beside `real life always first` without flattening her into Serious Responsible Officer. Daya can be sensible about what deserves stress and opportunistic about game absurdity in the same month. The recording is confirmed as something she posted; who captured or made it is not reverse-engineered from the upload. The character beat does not need that credit anyway. Ren hands her the high-ground joke, and Daya immediately turns altitude into a contest survival plan with herself as the punchline.",
  ],
);

const qinWithGames = beforeSection(
  run53NarrativeCharacterBios["qin-mu"],
  "Relationships",
  {
    title: "Picky about the grind, not allergic to games",
    paragraphs: [
      "Qin-Mu's older Louvre-side chatter finally gives the comeback a person behind it. In October 2020 he says **`I dont wanna pay for any game`**, then explains why: **`my free time is too valuable`**, **`So no grinds. MUST EXPERIENCE FULL GAME`**. Three months later, talking about Warframe, he says he stopped because **`Gets repetitive for me`** while also describing himself as **`more of MMO pve guy`**. That is not a contradiction that needs fixing. Qin-Mu likes games enough to know what kind of game loop he wants and impatiently rejects the version that starts feeling like unpaid shift work.",
      "The same self-calibration shows up in osu. He calls himself **`decent at OSU`**, says he can beat hard levels, then immediately draws the ceiling at expert / insane. Pokémon GO gets the opposite scale joke: he corrects himself to level 24, says he forgot, and calls himself **`a nub`**. Qin-Mu's game talk has very little interest in heroic self-mythology. Even when he is good at something, the sentence usually arrives with its own limiter attached.",
      "His watching habits have the same impatience with drip-feed friction. Faced with a sixteen-episode series, Qin-Mu says he will wait four more weeks and binge it because **`My attention span dies after waiting a week`**. That is a viewing preference, not a diagnosis. The pattern is ordinary and coherent: if something is supposed to be fun, Qin-Mu would apparently prefer to actually get at the fun instead of repeatedly queuing for permission to continue."
    ],
  },
);

const qinMu = appendParagraphs(qinWithGames, "Petty Crimes", [
  "Made **stuffed-crust pizza** and posted it as something he made. No recipe survives, but the man has at least once taken pizza infrastructure into his own hands.",
  "Self-rates as decent at osu hard levels and immediately refuses the expert/insane promotion. Even his brag comes with a scope note.",
  "Will wait weeks so a short series can be binged instead of endured one episode at a time. Weekly release schedules have been informed that his free time is too valuable.",
  "Corrected his own Pokémon GO level to 24 and then called himself a **`nub`**. Accuracy first, dignity second.",
  "Has typed **`hello fello Ye`** and **`Im gonna wat fo water Ye`** into the historical record. The exact linguistic institution responsible for `Ye` remains unlicensed."
]);

export const run55NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...run39NarrativeCharacterBios,
  eos,
  ten,
  daya,
  "qin-mu": qinMu,
};
