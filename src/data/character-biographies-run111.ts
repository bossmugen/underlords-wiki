import type { CharacterNarrative } from "./character-biographies-narrative";
import { ameNarrativeCharacterBios } from "./character-biographies-ame";

const ameBase = ameNarrativeCharacterBios.ame;

const ameSections = ameBase.sections.map((section) => {
  if (section.title === "The current title is real; the missing appointment story stays missing") {
    return {
      period: "December 2023–January 2024",
      title: "The work is visible before the title discussion",
      paragraphs: [
        "The missing bridge is no longer missing. On December 3, 2023, Snow raises Ame as somebody worth watching for officer potential while explicitly saying he does **not** want to pressure someone who has only recently returned. The public-safe part of the scene is the method: observe first, let other officers watch too, do not turn recognition into immediate pressure. Private background inside that recommendation stays downstairs.",
        "On December 19 Snow comes back with behavior instead of vibes: **`I been seeing them help a lot in the club and they are very active`**. That is the useful role progression. Ame's help is already visible before the room starts talking about a title. Sye separately remembers that Chibiterasu may have declined before; Noether's answer is **`ask them if they want`**. The sequence does not make willingness automatic just because somebody is useful.",
        "On December 21 Snow welcomes **Amexistir** into the officer room and Wolf welcomes Ame and Chibiterasu. The next morning Ame posts **`Tysm n.n`** there. The archive does not hand us a ceremonial acceptance speech or a direct reply object tying that thank-you to one welcome, so the wiki does not manufacture one. It does give a strong, ordinary picture of entry: discussion, room access, welcome, then Ame answering in the same compact informal register he uses elsewhere.",
        "Current canon still files Ame as **Game Officer**. Officer-room access and generic promotion language are not used to invent a separate full-Officer rank or to backdate the current Game Officer appointment. What the direct sequence safely establishes is lived role: people notice help, think about pressure, discuss the person, and then bring him into the operating room."
      ]
    };
  }

  if (section.title === "Thin does not mean generic") {
    return {
      period: "January 2024 and the larger character read",
      title: "Once inside, he is expected to have a view",
      paragraphs: [
        "On January 10, 2024, Snow tells Ame that he can post his thoughts about alliances there so the officers can discuss them. No Ame-authored answer survives in the assigned DR GAME HQ slice, so this does **not** become a story where Ame ran alliance policy. The useful fact is smaller: within weeks of the room entry, Snow treats Ame's thinking as something worth bringing into an operational discussion.",
        "That makes the current Game Officer title feel lived without turning it into personality. The earlier Lobby scenes already show Ame solving the problem in front of him: say what he does not understand, give the useful identity answer, accept the language accommodation, keep moving. The later officer-room material scales the same pattern up. Other people describe him as helping before the title conversation, and once he is inside, he is invited to contribute rather than merely decorate the roster.",
        "Ame is still not one of the archive's loudest self-documentarians. We do not suddenly know his whole offline life, taste profile, conflict style, or every friendship because a promotion discussion surfaced. What changed is narrower and more important: the public record can now explain **why the role conversation happened at all**. Help first. Observation second. Pressure deliberately kept low. Title discussion after that."
      ]
    };
  }

  return section;
});

export const run111CharacterBios: Record<string, CharacterNarrative> = {
  ame: {
    ...ameBase,
    intro: [
      "Ame — **Amexistir** in the stable account trail — is a current Game Officer, but the title still works best as the later part of the story. His earliest clean scenes are practical: he says when English is not working for him, gives the identity information the room needs, accepts Spanish-language accommodation without ceremony, and later gets greeted by Anayss with **`Bienvenido de vuelta!`** while the bot is still treating the moment like a generic arrival.",
      "December 2023 finally supplies the role bridge the older biography was missing. Snow first argues for watching Ame as officer potential without pressuring him immediately. Sixteen days later he cites the thing people have actually been seeing — Ame has been **helping a lot** and is active — when he asks the officer room about promotion concerns. The work is not explained by the title; the title conversation is explained by the work.",
      "The rest stays very Ame-sized. He is welcomed into the room, answers the next morning with **`Tysm n.n`**, and within weeks Snow invites his alliance thoughts into officer discussion. No coronation, no sudden leadership cosplay, no reason to pretend one room-access sequence turns him into a different command rank. Just a person whose usefulness becomes visible enough that the room starts making space around it."
    ],
    sections: ameSections,
    closing: [
      "Ame's strongest through-line is still practical clarity. At the front door he says what he needs and gives the useful answer. Later, other people notice that he is helping before they discuss a title, deliberately avoid making recognition into pressure, and then invite him into actual operating conversation. **Amexistir first. Office second.**"
    ]
  },

  nothien: {
    intro: [
      "Nothien is an archive-era returnee with one of UL's more selective definitions of friendship and one of its less glamorous care plans. They say they are not great with words; their answer is to **stay, show care, and cook comfort food**. They also admit the `friend bar` may be too high and that elevation can take years — unless somebody apparently `Speedrun`s the process by declaring them a friend and getting placed there tentatively.",
      "That sits neatly beside the older Nothien file. In 2020 they can start a fight before locating the fight, publicly admit **`Am losttttt`**, accept Gilli's directions with no dignity crisis, leave Dragon Raja while keeping Discord open for anybody who needs to rant, and return in 2023 self-filing as **`Underlords(?), Member(?), decently old`** while Ren is already yelling their name. Nothien is careful with labels and surprisingly easy about practical help."
    ],
    sections: [
      {
        period: "Care / friendship",
        title: "Friendship has a multi-year application and a known exploit",
        paragraphs: [
          "Asked how they support people, Nothien answers: **`If you're not good with words like me, just stick around, show them you care, cook them some comfort food`**. The emphasis is not eloquence. Presence and something useful to eat count.",
          "A week later they say their `friend bar` may be too high: familiar acquaintances are easy enough, but friend status **usually takes a couple years**. Then they immediately reveal the loophole: **`sometimes they Speedrun it by claiming me as their friend and they get tentatively put there`**. The timeline is a tendency, not a rule for every relationship; the `tentatively` is nevertheless doing extraordinary administrative labor.",
          "The two answers belong together. Nothien is cautious about the label without being stingy about care. This source slice still does not identify a named person who definitively cleared the full friend bar, so the wiki leaves that part open instead of assigning somebody the badge retroactively."
        ]
      },
      {
        period: "Work / play",
        title: "Work Noth and play Noth are not in the same department",
        paragraphs: [
          "Nothien says it directly: **`I like things separate, my work/school attitude constitute not at all my attitude at play`**. They also nominate 5–7 a.m. or 1–3 a.m. as productive windows before asking **`Work life balance? Who's he?`**. Raja and snacks show up as off-time in the same period. Those are ordinary-life self-descriptions, not a profession or diagnosis.",
          "Their anger answer is similarly low-theater: usually reason through it or say nothing; if they are **really really angry**, laugh. It reads less like a universal law than a useful self-description of somebody who does not need every internal state converted into a speech."
        ]
      },
      {
        period: "2020 → 2023",
        title: "The door stays open, then Ren yells the name",
        paragraphs: [
          "In April 2020 Nothien says they are stepping away from Raja but keeps Discord open for anybody who needs to rant. Mugen answers that they are welcome back anytime. In the same stretch Nothien cannot use voice because other people are around, so Club Only text does the job; later they start a fight, get lost on the way to it, and let Gilli solve the map problem in two lines.",
          "In January 2023 the same account comes back through Lobby with **`Nothien, Underlords(?), Member(?), decently old`**. The punctuation preserves genuine uncertainty about the administrative box. Ren's **`NOTHIIIII`** supplies the social answer faster than the form can. Human recognition and formal status remain separate facts."
        ]
      },
      {
        title: "Petty Crimes",
        paragraphs: [
          "Cannot dance; proposed technique is **`doing the gecko`**, meaning plastered to the wall. Tomatoes have apparently committed an offense. Villain plan: steal every pizza crust. Also capable of starting `Fight, anyone?` before discovering they do not know where the fight is."
        ]
      }
    ],
    closing: [
      "Nothien is careful about who gets the word **friend**, casual about asking for directions, practical about care, and apparently willing to let sufficiently audacious applicants speedrun the social paperwork. The labels take time. The comfort food does not."
    ]
  }
};
