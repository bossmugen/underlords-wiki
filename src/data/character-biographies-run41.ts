import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run40NarrativeCharacterBios } from "./character-biographies-run40";
import { mugen1619NarrativeCharacterBios } from "./character-biographies-mugen-1619";

function withSection(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  return { ...base, sections: [...base.sections, section] };
}

export const run41NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  moon: withSection(run40NarrativeCharacterBios.moon, {
    period: "2022–2026",
    title: "The server keeps sending her back to the front desk",
    paragraphs: [
      "Moon's 2022 continuity is funnier than a clean join-date would be. On January 6 the Lobby newcomer machinery catches the same stable account that is about to become a regular Daycare presence. Moon reacts with `Omg`, says `I was gonna say i joined the wrong server xD`, and supplies the requested identity basics. Her assigned Daycare run begins the next day and continues across the year.",
      "Then August puts the same account through newcomer machinery again while that Daycare chronology is still alive. Moon asks `What is a ign?`, admits `My brain is trying hard to process ewe`, and keeps filling out the form until Ren says she is settled. The giveaway is Ren's next instruction: keep familiar with the rules and Whiskey, `as you know is our main chat room`. Discord is treating the scene like onboarding; Ren is talking to somebody with prior house knowledge. The safest read is some kind of re-entry or role/server rehydration rather than a genuine first arrival, but the reason is still missing. The little silence around it matters: nobody stops to litigate whether Moon belongs there. They just make her do the paperwork again.",
      "And apparently the paperwork develops a vendetta. The same stable Moon account gets caught in at least seven distinct newcomer/check-in prompts between January 2022 and April 2026. January 18 produces `What?` and a quick DayCare-server check; March 2023 gets another IGN/server/age pass; September 2023 is the clearest self-description because Moon explicitly writes `*returning UL member*` and says she temporarily quit Raja; September 2024 brings another intake; and in April 2026 the bouncer asks again until Moon finally answers `Why 😭` before supplying the fields. The repeated form does not prove one technical cause — rejoin, role loss, permissions churn and bot behavior remain unresolved. Socially, though, seven front-desk encounters are plainly not seven first meetings. The machine keeps asking who Moon is while the people around it keep behaving like they already know."
    ],
  }),

  mugen: withSection(mugen1619NarrativeCharacterBios.mugen, {
    period: "June 2021",
    title: "The Boss office has files, apparently",
    paragraphs: [
      "A Wall filing gives Mugen a chance to use the Boss title as a comedy prop instead of a throne. Tofu says BishopThaGuru will never stop being funny; Bishop responds like somebody who has just spotted an unmarked van: `Why? What have you heard? Who you talk to? You with the feds?` Mugen does not defuse the premise. She steps directly into it: `The file in my office says so`. Bishop's immediate `W-which file?` is the whole payoff — everybody understands the imaginary bureaucracy without needing the bit explained.",
      "The real screenshot becomes a fictional case file, and Mugen's actual status becomes part of the toy box. That is better character evidence than another generic sentence about her not taking rank too seriously: when somebody hands her mock paranoia, she is willing to make Boss itself ridiculous for the joke. Nothing here proves a literal Bishop dossier, investigation, criminal conduct, or law-enforcement relationship. The upstream image is only confirmed POSTED BY Mugen; unavailable pixels do not become CAPTURED BY, MADE BY, or FEATURING through enthusiasm."
    ],
  }),

  ricochet: {
    intro: [
      "Ricochet's surviving Whiskey file reads less like a formal introduction and more like somebody leaving every tab open. Anime pages, One Piece canon, Blackpink, Hyuna, ITZY, gaming phones, tank games, Texas weather complaints and one future-wedding idea all keep falling into the room without much ceremony.",
      "The stable account here is `dragonrichard`, rendered as Ricochet in the 2021 material. This page keeps that archive identity separate from any unresolved Rich identity bridge; names are not enough to perform a merger by vibes."
    ],
    sections: [
      {
        period: "January 2021",
        title: "Whiskey gets the open-tabs version of his personality",
        paragraphs: [
          "On January 2 Ricochet drops MyAnimeList pages, Naruto/anime GIFs and a dense One Piece run, including a canon-character reference list. A few days later Blackpink appears as both GIF and Spotify artist page; on January 9 another Blackpink dance GIF opens into Hyuna and ITZY during the room's music chain. He rarely pauses to announce `I like this`. He just keeps putting the thing on the table until the pattern becomes obvious: anime is real taste, One Piece is familiar territory, and K-pop — especially Blackpink — keeps coming back.",
          "January 7 briefly turns phones into the stupid object of the night: Black Shark 3 Pro, the absurd Energizer P18K battery brick, then a Nokia/Snake GIF four minutes later. That is safest as gadget curiosity plus joke escalation, not a secret telecommunications career."
        ],
      },
      {
        period: "January–February 2021",
        title: "Texas violates the warranty",
        paragraphs: [
          "Ricochet spends January posting Texas / hot-weather material that basically advertises the state as permanent summer. Then February 14 arrives and he writes `Way to freaking cold for south texas`. The joke writes itself: Texas sold him one climate and delivered another. South Texas is his own coarse location wording here; nothing in the scene licenses a city, address, or more precise residence."
        ],
      },
      {
        period: "January 2021",
        title: "Raja is the communal unit of game damage",
        paragraphs: [
          "On January 12 he looks at another player's nearly 100,000 battles in a tank game and translates the horror into the language everybody already understands: `Y’all think playing raja was bad look at this guy in my tank game with almost 100k battles`. The funny part is not merely that Ricochet played another game. Dragon Raja has become the room's measuring cup for unreasonable grind."
        ],
      },
      {
        period: "April–June 2021",
        title: "Future plans, then Cheesecake Factory with a complaint ticket",
        paragraphs: [
          "In April, an unresolved video prompts one unexpectedly earnest line: `not going to lie i want to try and do this if i ever get married now`. The video itself is not safely resolved, so the archive can keep the aspiration without inventing what the wedding idea actually was or pretending this proves a current relationship.",
          "Then June gives a much more practical affection receipt. Panda reports that `@Ricochet got me my Cheesecake Factory :PandaPERFECTION: (but no cheesecake)`. Whatever the exact pickup/payment/delivery mechanics were, he did something concrete that ended with Panda receiving Cheesecake Factory and immediately filing a customer-service complaint about the missing titular product. Care, but with a ticket number."
        ],
      },
      {
        period: "July 2021",
        title: "Panda notices when he goes quiet",
        paragraphs: [
          "July gives the Cheesecake Factory favor a social afterimage instead of leaving it as one isolated errand. Panda tells Ricochet `I’ve missed you .. where the heck have you been? 🥺 no response when I asked how you were doing`. Ricochet pushes back gently — `lol...I answered every time I was available` — while Ren adds `I’m glad you’re ok Ric`. Panda then makes the actual concern plain: `Love you Ric 😘 just don’t want to ignore you even if we’re all busy`.",
          "Nothing in that exchange needs a friendship leaderboard or a merge into somebody else's identity. What it does show is ordinary reciprocal familiarity: Panda notices absence, Ricochet insists he was answering when he could, Ren registers relief, and Panda explicitly frames the check-in as not wanting him to get lost in everybody's busyness. Ricochet later says he hopes things will not be `Just home... like most of the past almost 2 years...`, which gives the quietness some ordinary-life backdrop without supplying a cause the archive never states. The scene is warm precisely because nobody turns it into a ceremony. Somebody went quiet enough to be noticed; the room checks the line is still connected."
        ],
      },
    ],
  },
};
