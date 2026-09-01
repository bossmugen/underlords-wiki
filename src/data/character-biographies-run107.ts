import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { mugen1619NarrativeCharacterBios } from "./character-biographies-mugen-1619";
import { renNarrativeCharacterBios } from "./character-biographies-ren";

function withSection(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  return { ...base, sections: [...base.sections, section] };
}

export const run107NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mugen: withSection(mugen1619NarrativeCharacterBios.mugen, {
    period: "March 2023",
    title: "THE BOT DIED. MUGS CALLED IT A RECORD.",
    paragraphs: [
      "On March 20, 2023 Mugen announces, `WE OFFICIALLY BROKE THE BOT FAM! Approx 279 hours is our record before the bot yeeted itself out`, then immediately folds the casualty into Anniversary Month. The organizer in her has apparently been timing the machine closely enough to preserve a number. The gremlin in her sees the machine fail and awards the house a trophy.",
      "The wording does most of the character work. `WE` makes the breakage communal, `OFFICIALLY` mock-certifies it, and `record` turns infrastructure failure into a competitive achievement. Nobody needs a fake formal bot-history page for this. Mugs built systems; Mugs also enjoyed the moment the clowns defeated one. The exact bot remains unnamed in the surviving announcement, which somehow makes the warranty claim funnier rather than less useful."
    ],
  }),

  ren: withSection(renNarrativeCharacterBios.ren, {
    period: "February–March 2022",
    title: "THE RIDDLE GENIE HAS RULES, ACTUALLY",
    paragraphs: [
      "The missing first Officers Challenge dare finally has a body: Ren opens with a whole red-carpet fantasy and then asks what everybody's Raja character autograph would look like. Thirty-four seconds later she supplies her own answer — choco-mint inspired, signed in crayon. A year later, after changing her Raja name, she resurrects the same challenge herself. This was not disposable Staff copy. Ren liked the stupid little thing enough to bring it back.",
      "The weeks around it make her hosting style much clearer. Ren keeps changing the audience salutation — `materialized stardust`, `crustaceans`, `baguettes`, `juice boxes` — while the mechanics underneath stay annoyingly competent: one reaction means check my answer, another means help me, help goes to DM, do not Google it, do not spoil the answer in public. When people start talking around the solution she redirects them back to the signals. When Rummy supplies one of the puzzles, Ren credits Rummy instead of absorbing authorship into the host role.",
      "That is the cleaner counterweight to the spelling-Kahoot disaster already living on her page. Ren can put the wrong code on a poster twice and make herself the punchline; she can also run a recurring room where the rules are legible, the help lane is private, contributors get named, and the theatrical nonsense makes procedure feel less like procedure. Clown delivery, real facilitation. The Officer title is lived here in the least résumé-shaped way possible."
    ],
  }),

  erys: {
    intro: [
      "Erys shows up in the surviving 2022 record already moving at Wall speed. The room can turn her into an exhibit almost immediately, but the better character is what happens after that: Erys does not merely object to screenshot court. She becomes one of its most committed defense attorneys, apparently on the theory that every incriminating object is hacked, edited, photoshopped, hearsay, or otherwise inadmissible until everybody gets tired of laughing.",
      "The important contradiction is that she keeps participating. Erys protests the evidence, argues with Ren's ruling, and then also files material herself. She is not standing outside the game demanding that screenshot court stop existing. She is inside it, losing motions with enthusiasm."
    ],
    sections: [
      {
        period: "2022",
        title: "EVIDENCE IS FAKE UNTIL FURTHER NOTICE",
        paragraphs: [
          "Ren posts one Wall attachment and Erys immediately goes `NOOOO` and `HOW DO U DO IT SO FAST`; Ren answers `FASTEST EDITING IN THE SOUTH`. Another Ren filing gets `NO`, then `i swear that isnt me`, then `its photoshopped`. When Mugen later posts two screenshots, Erys upgrades the defense to `i swear` and `im being hacked`.",
          "The exact images do not need to be reverse-engineered for the bit to land. Erys's response vocabulary keeps trying to move the problem away from *what did I do* and toward *can this court even authenticate the exhibit*. She does not sound genuinely confused for long. She sounds like somebody who has discovered that procedural denial is more fun than surrender."
        ]
      },
      {
        period: "May 2022",
        title: "REN DENIES THE MOTION",
        paragraphs: [
          "The routine eventually becomes literal courtroom language. Erys says `objection` and `hearsay`; Ren TRUE-REPLIES, `Denied, it was your own answer`. Erys answers `no it wasn't` and, naturally, `i swear`. Ren does not need a paragraph explaining the rules because the joke already has a working legal system: Erys files the motion, Ren denies it, Erys appeals directly to the void.",
          "That tiny exchange is also relationship texture. The speed and specificity only work because both of them understand the game. Ren can answer one word — `Denied` — and Erys knows exactly which part to keep fighting."
        ]
      },
      {
        title: "THE DEFENDANT CAN ALSO FILE EXHIBITS",
        paragraphs: [
          "Erys is not permanently trapped on the defendant side. In another Wall scene she posts `IMG_5905.png` herself and tags Ren eleven seconds later. The image stays undescribed because POSTED BY is not the same thing as MADE BY, CAPTURED BY, or FEATURING. The social point is cleaner anyway: Erys knows where the evidence desk is and is perfectly willing to use it when the exhibit is somebody else's problem.",
          "That keeps the running gag from flattening her into a victim. Her whole Wall style is participatory defense theater: deny the crop, challenge admissibility, accuse the pixels of treason, then come back with paperwork of her own."
        ]
      },
      {
        title: "PETTY CRIMES",
        paragraphs: [
          "Has invoked hacking, Photoshop, hearsay, and plain `i swear` as emergency legal doctrines. None of those lines establishes that the underlying media was actually altered. They establish that Erys has an extremely healthy respect for due process whenever due process might save Erys."
        ]
      }
    ]
  }
};
