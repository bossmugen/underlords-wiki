import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run40NarrativeCharacterBios } from "./character-biographies-run40";
import { mugen1619NarrativeCharacterBios } from "./character-biographies-mugen-1619";
import { cookieNarrativeCharacterBios } from "./character-biographies-cookie";

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

  cookie: withSection(cookieNarrativeCharacterBios.cookie, {
    period: "September 2021–March 2022",
    title: "Cookie apparently grows a second Discord body",
    paragraphs: [
      "A separate stable Discord account, `887703610052448257`, arrives at the Lobby on September 15, 2021 under the rendered name `CookieStream(kuki/juicycookie)`. It answers the automated welcome with only `uwu`; eight seconds later Mugen replies `gotchu cooks`. Nobody performs a normal introduction or makes the account explain who it is. The same stable ID later has a short but real Daycare run and appears in Wall reaction metadata as `Mr.Cookie`.",
      "That is enough, under the project's ordinary contextual-evidence rule, to call CookieStream a **likely Cookie alt / probable same-human controller** rather than pretending the archive has found an unrelated stranger who independently chose `kuki/juicycookie` and was immediately recognized as `cooks` by Mugen. The account histories still stay separate: Cookie/Kuki/JuicyCookie is stable ID `249351359290277890`; CookieStream is `887703610052448257`. Probable same controller does not let the wiki merge their messages, dates, roles, or provenance into one technical account history. The funny part is the social recognition itself: the bot asks for paperwork, the mystery body says `uwu`, Mugen effectively says *yeah, I know who this idiot is*, and bureaucracy loses in under twenty seconds."
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

  woohyuk: {
    intro: [
      "Woohyuk / ash_island is a UL VIP whose best surviving scenes barely perform guest-ness at all. When an October 2020 access mistake gets him locked out, his first move is not diplomatic ceremony; it is `BRUH MUGEN LOCKED ME OUT`. Ren routes the complaint upward and Mugen answers `took out wrong tag`. The whole thing lands like somebody yelling down the hall because a house key stopped working.",
      "By 2021 he is fluent in the Wall's stupid little justice system: throwback shames, speedrun commentary, receipt requests, and enough confidence to promise Tofu evidence with `Sheeet I gotchu`. He is also capable of stripping a watermelon down to its alleged criminal essence — `just sweet water` in melon form, trying to play everybody dumb. Complaint, cooperation, concern and produce prosecution all tend to arrive in small sentences.",
      "The newer receipts make that compactness look less like mere brevity and more like a recurring social habit. Woohyuk often notices the thing, pushes it toward whoever can act on it, and lets the room carry the rest. He does not need to own the process to be useful inside it."
    ],
    sections: [
      {
        period: "October 2020",
        title: "Wrong tag, immediate complaint",
        paragraphs: [
          "Woohyuk says Mugen locked him out; Ren asks what happened and tags Mugen; Mugen says she removed the wrong tag. The receipt is clean about affected person, router and fixer without pretending exporter role arrays can reconstruct the technical chronology. Socially, the lack of ceremony is the fun part: VIP status does not turn a broken door into a diplomatic incident. Woohyuk just complains, Ren points at the landlord, and the key gets fixed."
        ],
      },
      {
        period: "December 2020–February 2021",
        title: "Short concern, short warning path",
        paragraphs: [
          "A December `please sleep` gives Woohyuk the same compressed register in a care-shaped scene; the exact original addressee remains unresolved. In February, Gilli credits a circulating Discord warning to Woohyuk while explicitly saying `Whether it's real or not its better safe then sorry` and tagging Staff. That uncertainty is Gilli's wording, not Woohyuk's, and the warning itself is not independently validated. What the scene safely shows is an information path: something reaches Woohyuk, moves through Gilli, and gets pushed toward Staff without Woohyuk appointing himself cybersecurity anything."
        ],
      },
      {
        period: "March–June 2021",
        title: "He already knows how Wall court works",
        paragraphs: [
          "Woohyuk asks whether they are doing throwback shames and immediately posts an attachment, calls Aeshleen reaching the Wall in under an hour `a record`, and answers a request for evidence without needing the rules explained. That does not create a formal archivist office. It does make him a socially fluent participant in a room where evidence, timing and embarrassment have become shared grammar."
        ],
      },
      {
        period: "June 25–28, 2021",
        title: "Two rounds with Tofu",
        paragraphs: [
          "On June 25 Woohyuk tells Tofu `you're the only whale around here`. Tofu TRUE-REPLIES, `Show the rebate then boo`; Woohyuk answers `Sheeet I gotchu`. Three days later Tofu posts an attachment, Woohyuk teases that `chat background doesnt exist for Tofu`, and Tofu TRUE-REPLIES with a rage-cry emoji. The attachment itself is uninspected, so its contents stay out of the story.",
          "The repetition is the relationship texture. This is not one random jab floating through a busy room: two different days produce the same easy directed rhythm, with Tofu answering him back rather than merely being talked about. `Whale` stays a gaming/social joke, not proof of wealth or spending, and two banter scenes do not generate a friendship rank. What they do earn is simpler and more human: Woohyuk and Tofu had an established little sparring lane and both knew how to use it."
        ],
      },
      {
        period: "July 2021",
        title: "Watermelon fraud case",
        paragraphs: [
          "Woohyuk reduces watermelon to `just sweet water` in melon form that is `tryna play us dumb`. It is three messages of produce indictment and a perfect example of how his compressed style can turn a small preference into a tiny prosecution without requiring a grand performance around it."
        ],
      },
      {
        title: "The short handoff",
        paragraphs: [
          "Across otherwise unrelated scenes, Woohyuk keeps doing a small practical move: flag the access problem, pass the warning, produce the receipt, answer the person in front of him. The pattern is not command and it is not ownership. It is social routing — enough confidence to push a thing toward the right person and enough ease to stop once the room has it. That fits the banter too: he throws Tofu a line, Tofu throws one back, and neither needs to explain the relationship before the joke works."
        ],
      },
    ],
  },
};