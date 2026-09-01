import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { mugen1619NarrativeCharacterBios } from "./character-biographies-mugen-1619";
import { renNarrativeCharacterBios } from "./character-biographies-ren";
import { gilliNarrativeCharacterBios } from "./character-biographies-gilli";
import { oyasumiNarrativeCharacterBios } from "./character-biographies-oyasumi";

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

  gilli: withSection(gilliNarrativeCharacterBios.gilli, {
    period: "March 2023",
    title: "RYUU IS THE PERSON SHE NAMES WHEN THE FEELING NEEDS VALIDATING",
    paragraphs: [
      "Asked what she is grateful for, Gilli does not give the room a vague friendship-cloud answer. She names RyuuUzu as `My best friend` and immediately names the behavior underneath it: `for always validating my feelings`. That is a much better relationship anchor than another list of shared events. Ryuu matters to Gilli because Gilli experiences him as somebody who makes room for what she feels instead of making her argue that the feeling deserves to exist.",
      "It also sharpens Gilli's own care pattern by showing what she values on the receiving end. Her public instinct is usually practical — eat, hydrate, rest, fix the next thing — but the person she calls her best friend is praised for validation, not efficiency. The woman who so often turns care into a verb apparently also notices when somebody knows not to turn every feeling into a repair ticket."
    ],
  }),

  oyasumi: withSection(oyasumiNarrativeCharacterBios.oyasumi, {
    period: "Petty Crimes",
    title: "PETTY CRIMES",
    paragraphs: [
      "Oyasumi's taste file is absurdly specific once QOTD gets hold of him. Dark Victorian anything; basically anything that looks like a Tim Burton film. Jewelry is non-negotiable. Movies beat social media because he barely uses the latter and likes the former far too much. The username comes from *Goodnight (Oyasumi) Punpun*. He has tried and failed to get into *Demon Slayer* about three times, names *Eraserhead* when asked for the scariest movie he has seen, and keeps Skyrim and *Mob Psycho 100* in the wider media pile.",
      "Breakfast can be fruit; grapes are apparently better when eaten one by one because it makes the supply feel larger. Ice water remains the answer even on a cold day. He wants words like `bamboozle` and `whippersnapper` back in circulation, and once announces that the day has to begin with `Dies Irae` or it will be bad. That last one is a ritual joke, not prophecy. It is also exactly the sort of tiny personal rule that makes Oya considerably easier to picture than another paragraph explaining his title.",
      "The same period quietly catches him doing repetitive house maintenance too: after QOTD cards appear, Oya repeatedly adds the human `@Staff @VIP` ping that keeps the ritual visible. He can be the dry witness making fun of the room and still be one of the people nudging the room toward the next shared thing. Seniority, apparently, can include jewelry, ice water, medieval judgment music, and remembering to ping everybody."
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