import type { CharacterBio } from "./character-bios";
import { directorCharacterBios } from "./character-bios-directors";

const miaBase = directorCharacterBios.mia;
const nobuBase = directorCharacterBios.nobu;

if (!miaBase || !nobuBase) {
  throw new Error("Run 608 lost the existing Mia or Nobu director biography.");
}

export const run608CharacterBios: Record<string, CharacterBio> = {
  mia: {
    ...miaBase,
    dek: "UL Interrogator, Pit Boss, Game Officer, permanent Platelet, communal-project accelerant, compressed Wall juror, and the tiny newsroom that can declare a case solved before discovering it absolutely is not.",
    overview: [
      ...miaBase.overview,
      "The same instinct gets even funnier when there is barely an event to organize. In March 2023 a mystery over who received Nitro becomes `underlords news for today`, complete with a report-video package, a premature `It s anthos` / `WE FOUND IT`, and then Mia publicly correcting herself with `NOPE NOT ANTHOS`. Anthos answers `I AM GONNA SUE`; Mia gives him an `AHHH`; ten minutes later the newsroom is still operating and offering `1million fake dollars!` to whoever can actually solve the case. Being wrong does not make her retreat. It becomes the next beat."
    ],
    history: [
      ...(miaBase.history ?? []),
      {
        date: "March 6, 2023",
        title: "Breaking news: we found it. Correction: no we did not.",
        text: "Mia packages the Nitro mystery as `underlords news for today`, names Anthos too early, announces `WE FOUND IT`, retracts with `NOPE NOT ANTHOS`, survives Anthos's mock lawsuit, and keeps the hunt alive with a million-fake-dollar bounty. Sye's `yall made a video` and Mia's `Yesss` support a group-made report; Mia is the confirmed poster, not automatically the sole maker."
      }
    ],
    characterNotes: [
      ...(miaBase.characterNotes ?? []),
      {
        title: "The correction is Act Two",
        text: "Mia's useful trick is not pretending the first answer was right. She can make a confident call, reverse herself in public, let Anthos take the retaliation beat, and keep everybody playing. The fake officialness lowers the stakes instead of raising them."
      },
      {
        title: "Petty Crimes",
        text: "Ran an Underlords news desk for a Nitro mystery; declared the case solved before it was solved; offered `1million fake dollars!` after the correction. Investigative standards: festive."
      }
    ],
    canonNotes: [
      ...(miaBase.canonNotes ?? []),
      "Mia posted the Nitro report video. `yall made a video` / `Yesss` supports group-made framing; do not silently promote Mia to sole maker from the upload alone."
    ]
  },

  nobu: {
    ...nobuBase,
    dek: "UL Party Director, Xuseio, Rummy's actual director-not-co-director, dry Wall filer, enemy of light mode, and a woman whose evidence threshold can apparently include `I read this wrong and it became funnier`.",
    overview: [
      ...nobuBase.overview,
      "The Wall adds a useful flaw to the organizer brain: Nobu files receipts constantly, but she is not pretending the filing process is forensic science. Her first surviving Wall screenshot gets three direct replies while she mostly lets the room prosecute for her; Rummy objects `WHY`, then `That ain't even me` and `I don't even make that sound`. Months later Nobu explains one of her own submissions with the magnificent `I legit thought that said children. Which is why I posted it.` The misread is not a failure of the bit. It is the reason the bit exists. That makes the evidence habit feel social rather than clerical: the point is not always to prove the charge; sometimes the misunderstanding itself is funny enough to preserve."
    ],
    history: [
      ...(nobuBase.history ?? []),
      {
        date: "August 2022–May 2023",
        title: "Evidence because reading failed",
        text: "A Nobu filing can hand the room the entire prosecution while she barely captions it; Rummy loudly objects from inside the exhibit. Later Nobu says outright that she posted another receipt because she misread a word as `children`. Screenshot Court has discovered an evidentiary standard called `this was funnier in my head`, and Nobu is apparently licensed to practice it."
      },
      {
        date: "September 25, 2023",
        title: "Light mode remains hostile architecture",
        text: "Nobu says `Light mode gets me every time.` Oyasumi later heightens the same pocket with flashbang/light-mode reaction media. Keep it as UI preference and room joke, not a medical claim."
      }
    ],
    characterNotes: [
      ...(nobuBase.characterNotes ?? []),
      {
        title: "Mock observer, recurring Rummy exhibit",
        text: "Rummy can object at full volume when Nobu files him, and Nobu can come back later with `Rummy has rizz??` or `I'm proud of you, Rummy. :Fat_Wheeze:`. The apprenticeship is formal; the visible social register is a long-running observer/subject joke with enough comfort for loud denial."
      },
      {
        title: "Petty Crimes",
        text: "`Light mode gets me every time.` Also once admitted a screenshot was filed because a word was misread as `children`. Evidence desk currently accepting clerical error as a submission category."
      }
    ],
    canonNotes: [
      ...(nobuBase.canonNotes ?? []),
      "Nobu's screenshots remain POSTED BY Nobu unless maker, capturer, or featured people are independently established. The visually unresolved `My favorite food.` post does not identify the food."
    ]
  }
};
