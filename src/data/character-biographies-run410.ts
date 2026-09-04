import type { CharacterNarrative } from "./character-biographies-narrative";
import { hanNarrativeCharacterBios } from "./character-biographies-han";
import { taeNarrativeCharacterBios } from "./character-biographies-tae";
import { run409NarrativeCharacterBios } from "./character-biographies-run409";

const hanBase = hanNarrativeCharacterBios.han;
const taeBase = taeNarrativeCharacterBios.tae;
const mugenBase = run409NarrativeCharacterBios.mugen;

const hanSections = hanBase.sections.map((section) => {
  if (section.title === "The camera comes on after Han is already here") {
    return {
      ...section,
      period: "August 16, 2021",
      title: "THE DOOR OPENS BEFORE THE JOB TITLE DOES",
      paragraphs: [
        "Han's first useful doorway is not a stranger wandering in cold. When the Stripclub Bouncer prompts the arriving `nai6965`, Mugen answers almost immediately with `Eyyy you made it`. Han gives her `XD`; Mugs handles the server access, briefly discovers she has forgotten part of the process — `I forgot` / `My goldfish brain` — then lands the practical part: `role assigned, server map here #🎫｜ul-discord-tour 🌻`. The scene is tiny, but the social temperature is already set. Han is expected. Mugen is comfortable enough to greet first and troubleshoot second. The title comes later.",
        "That matters because Han's Media Director identity can otherwise swallow the person retroactively. August gives him a pre-title beat where the job is not yet doing all the explanatory work. He arrives as somebody Mugen is glad made it into the room, gets routed through the house with the same low ceremony everybody else eventually learns, and only later becomes the person responsible for making UL visible.",
        "The surviving doorway never explains exactly how Mugen knew to expect him or who first brought him toward UL, so the story does not need to invent a recruiter. What it does give us is cleaner: before the archive starts calling Han Media Director, somebody is already at the door saying, basically, *finally, there you are*."
      ]
    };
  }

  if (section.title === "Making room for performance, then becoming the exhibit") {
    return {
      ...section,
      paragraphs: [
        "By October 17–18 UL has a Media Director role in the room's machinery, and by October 30 Mugen is publicly tagging Han with the title: `From our @Underlords Media Director @.` The conversation never pauses for a coronation scene. What survives is the transition from an expected arrival in August to work that has a name by late October.",
        ...section.paragraphs
      ]
    };
  }

  return section;
});

const taeSections = taeBase.sections.map((section) => {
  if (section.title === "She understands Screenshot Court perfectly until the defendant is Tae") {
    return {
      ...section,
      paragraphs: [
        "Tae is not merely somebody the Wall happens to catch. She knows the room's grammar well enough to use it herself. On March 13, 2021 Ren says `Tae has become one of us`; Tae answers `I been in here`. On May 30 Tae posts an image and, nine seconds later, adds `Caught in 4k` — almost certainly captioning the filing she just brought to court. The funny part is not that Tae learns the Wall. It is that she is already arguing seniority while actively supplying exhibits.",
        "That fluency does not buy immunity. When other people control the filing, Tae becomes an appellate court with legs: `Why im on here- I didn’t do anything shameful`, `AGAIN`, `Why im I here`, `What is this`, `Rv why`, and later `WHY`. She understands exactly what everybody is doing. She simply reserves the right to question why the legal system keeps functioning when the defendant is Tae.",
        "March 2022 sharpens the contradiction because one outside filing does not embarrass her at all. Ren posts the exhibit; Eos only has to say `tae-`; Tae answers `i knew it was coming`, then `and im not ashamed`, and eventually starts defending the situation with `ITS FOR A GOOD COST`, `I SWEAR`, and `I JUST WANT 11$`. Whatever the unseen object is doing, Tae is not retreating from the joke. She is helping it escalate. When she owns the premise, shame can flip into performance.",
        "Three months later Mugen catches her again and the response is back to `WHY`; Mugen says `Do it again`, Tae sends the crying cat, and Marian replies directly to that little collapse with `don't worry, tae, I've done it too`. That is the switch-hitter version of Tae in one sequence: prosecutor when she has the filing, shameless co-author when she can seize the premise, theatrically doomed when somebody else has the camera, and still enough of a Wall native that another veteran can comfort her *inside the joke* instead of stopping the joke to prove they care."
      ]
    };
  }

  if (section.title === "Tiny offenses against dignity, taste, and weather") {
    return {
      ...section,
      paragraphs: [
        ...section.paragraphs,
        "`Eleven-Dollar Defense Fund`: when a 2022 Wall filing arrives and Tae decides she is not ashamed, the defense somehow escalates to `ITS FOR A GOOD COST` / `I SWEAR` / `I JUST WANT 11$`. The amount stays inside the joke; the crime is turning a screenshot defense into a tiny fundraising telethon."
      ]
    };
  }

  return section;
});

const mugenSections = mugenBase.sections.flatMap((section) => {
  if (section.title === "Control freak, not oracle") {
    return [{
      ...section,
      paragraphs: section.paragraphs.filter(
        (paragraph) => !paragraph.startsWith("The same loophole is visible absurdly early.")
      )
    }];
  }

  if (section.title === "SHE SAYS ONE NORMAL SENTENCE AND MUGS HERSELF CALLS THE ALARM") {
    return [
      {
        period: "2020 onward",
        title: "WHEN ONE DOOR STOPS WORKING, SHE BUILDS ANOTHER",
        paragraphs: [
          "Mugen's control-freak streak gets much more interesting when the structure is there to absorb somebody else's constraint instead of flatten it. During an April 2020 Fight Club session, she tells people they can stay in the voice hangout and answer through text if talking is inconvenient. The activity keeps its shape; the person gets another route into it. Jere answers with a heart. Mugs is not abolishing the room because one format does not fit everybody. She is quietly adding a side door.",
          "By December the same instinct has moved from medium to audience. Mugen tells Staff that somebody has raised a concern about Meme Wars posts being inappropriate for minors, then announces a new minor-friendly meme channel: `new meme channel up, pls keep it minor-friendly, thanks!`. Four minutes later Tae answers, `I am finally allowed`. That little sentence is the whole consequence. A boundary that could have meant *sit this one out* becomes another place to participate.",
          "This is the useful contradiction in Mugen's love of structure: she can be intensely rules-and-rooms-brained without being equally conformity-brained. Sometimes the extra rule exists because the people do not all need to become the same shape. Fight Club gets another medium. Meme culture gets another audience lane. Mugs solves incompatible needs the way she solves many things — by making one more fucking door and expecting everyone to use the correct one."
        ]
      },
      section
    ];
  }

  return [section];
});

export const run410NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  han: {
    ...hanBase,
    intro: [
      "Han — also Nai, `nai6965`, and for a while simply `.` in recovered Discord exports — is Underlords' Media Director and filmmaker, but the first useful doorway now lands before the title. In August 2021 Mugen greets his arrival with `Eyyy you made it`, fumbles the access routine with `My goldfish brain`, then points him at the server map. Two months later the house is publicly calling him Media Director. The sequence is better than a résumé line: first somebody expected at the door, then somebody trusted with how the house presents itself.",
      "That progression fits the rest of Han unusually well. He wants to know everybody better, posts his cat after announcing that his life is too boring to share, nominates surviving another workday as a Wall-of-Fame achievement, builds Voice Challenge around self-expression rather than competition, and eventually predicts the Wall will need to be renamed after him if this keeps up.",
      "The useful contradiction is that Han's formal role is about media, presentation and making things visible, but the archive never leaves him safely behind the camera. He becomes Wall evidence. He files his own Fame entry. He shares domestic nonsense. Then, when Dragon Raja stops being his game, he says `I quit the game, but I will be still here as club media dude uwu.` The job survives because the social role has already become bigger than the platform that first gave it something to film."
    ],
    sections: hanSections
  },
  tae: {
    ...taeBase,
    sections: taeSections
  },
  mugen: {
    ...mugenBase,
    sections: mugenSections
  }
};
