import type { CharacterNarrative } from "./character-biographies-narrative";
import { deepArchiveCharacterBios } from "./character-bios-archive-deep";

const rose = deepArchiveCharacterBios.rose;

export const run525NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  rose: {
    intro: rose.overview,
    sections: [
      {
        title: "WHAT KEEPS HAPPENING",
        paragraphs: (rose.characterNotes ?? []).map((note) => `${note.title}. ${note.text}`),
      },
      {
        title: "SCENES THAT STUCK",
        paragraphs: (rose.history ?? []).map((beat) => beat.text),
      },
      {
        title: "ACCEPTED A WEIEDO LIKE ME",
        paragraphs: [
          "Asked what matters to her, Rose names two kinds of people who let her be imperfect without making her earn the room again: a sister who is **`always there for me even if i mess up`**, and the people she gets to talk to and play games with — **`everyone in Underlords because the accepted a weiedo like me`**. The typo is honestly part of the charm. Rose does not frame belonging as rank, longevity, or being easy to deal with. She frames it as being allowed to be weird and still included.",
          "That lands especially well beside the later version of Rose who can vanish, reappear, threaten the room with roughly **0.1% of her Rose power**, and still be noticeable enough that people ask where she went. The sharpness is real; so is the fact that acceptance seems to be one of the things she remembers about the place."
        ],
      },
      {
        period: "Petty Crimes",
        title: "Petty Crimes",
        paragraphs: [
          "Rose is a **`Cat person`**, but the useful part is the household census: one cat hides in warm places all day, one **`just doesn't care`**, and the last one **`still still has the zoomies`**. Three cats, three operating systems, and one exhausted double-`still` suggesting at least one employee has refused to age out of nonsense.",
          "Her relationship with controlled suffering is also extremely specific. Rose wants to **`play more horror games even though I might scream because of jump scares`**. Eating ASMR, meanwhile, gets no such grace: she says the one type she will **never** listen to or watch is people eating. Jump scares may terrorize the nervous system; chewing into a microphone is apparently where civilization ends.",
          "Cheesecake keeps sneaking into the file too. Rose names **mini cheesecakes** in one answer and, much later, casually supplies the existence of Baskin-Robbins strawberry-cheesecake ice cream. This is not a life thesis. It is, however, enough recurring evidence to let cheesecake into Petty Crimes without a warrant."
        ],
      },
    ],
  },
  nothien: {
    intro: [
      "Nothien's file has a funny mismatch between what he does and what he claims. In 2020 he is hands-on enough to chase a half-health player around yelling **`lemme heal uuu`**; by 2023 he walks back through Lobby and describes himself as **`Underlords(?)`**, **`Member(?)`**, but very confidently **`decently old`**. The question marks land on the institution, not the history. He is willing to help first and argue with the noun later.",
      "That low-ego posture fits the way other people meet him too. Ren answers the 2023 intro with **`NOTHIIIII`**, and Mugen handles the current-room orientation immediately afterward. Nothien does not need either of them to certify that he has history here before saying so; he can be socially recognizable and administratively cautious at the same time."
    ],
    sections: [
      {
        period: "2020",
        title: "HELP FIRST, COMPLAIN WHILE DOING IT",
        paragraphs: [
          "One early gameplay pocket catches Nothien trying to keep somebody alive while the somebody in question refuses to make this easy. He starts with **`lemme heal uuu`**, escalates to **`Suzi sir stop running lemme heal uuuu`**, and finally files the practical grievance: **`Stop running with half health barrrr`**. The care is not soft-focus. It sounds like discovering that the patient is actively sabotaging treatment and deciding to help anyway, louder.",
          "The same session keeps cutting back to Nothien as accidental casualty: **`I was just standing there and I ded`**, **`Ive taken so much collateral damage`**, **`And now I ded`**, **`I didn't even hit themmmm`**. That is the useful contradiction. He is trying to preserve somebody else's health bar while presenting himself as a man repeatedly struck by events he would like entered into evidence as Not His Fault."
        ],
      },
      {
        period: "2023",
        title: "THE QUESTION MARKS ARE FOR THE PAPERWORK",
        paragraphs: [
          "When Nothien reappears in Lobby in 2023, the self-description is almost comically precise: **`Nothien, Underlords(?), Member(?), decently old`**. He hedges the current institutional labels and leaves **`decently old`** completely untouched. It reads less like confusion about who he is and more like somebody declining to overclaim what category still applies while being perfectly comfortable saying he has been around long enough to know the house.",
          "A few minutes later Ren goes **`NOTHIIIII`**. There is no formal speech attached to it; the stretched name does the social work. Mugen's server-map/rules orientation follows immediately after, which makes the scene almost split-screen: personal recognition arrives first, current-space paperwork catches up right behind it. Nobody needs to manufacture a dramatic re-entry ceremony for the relationship to be legible."
        ],
      },
      {
        title: "THE DOOR WAS ALREADY OPEN",
        paragraphs: [
          "Nothien's older goodbye from Raja never reads like a demand to erase the people with the game. He leaves Discord available — **`I still have discord if you guys ever need someone to rant to or anything.`** — and Mugen's answer keeps the door open for a return. Years later, Ren's stretched-name greeting makes that distinction feel less theoretical. Whatever happened to the game-side label, the person is recognizable on sight.",
          "That is the cleanest Nothien through-line so far: practical involvement without much appetite for grand claims. He will chase a runaway health bar, offer himself as somebody people can rant to, and later put question marks around his own membership noun rather than assume the paperwork still says what the history says."
        ],
      },
      {
        period: "Petty Crimes",
        title: "Petty Crimes",
        paragraphs: [
          "Half-Health Police: if you are injured and still sprinting away from the person trying to heal you, expect the complaint department to become audible.",
          "Managed, in one gameplay session, to produce both **`Ive taken so much collateral damage`** and **`I didn't even hit themmmm`**. Apparently innocence can still have a death counter.",
          "Can hedge **`Underlords(?)`** and **`Member(?)`** while delivering **`decently old`** with no question mark whatsoever. Institutional confidence: negotiable. Old-man credentials: submitted without edits."
        ],
      },
    ],
  },
};
