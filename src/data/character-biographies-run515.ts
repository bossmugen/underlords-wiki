import type { CharacterNarrative } from "./character-biographies-narrative";
import { run470NarrativeCharacterBios } from "./character-biographies-run470";
import { feliNarrativeCharacterBios } from "./character-biographies-feli";
import { mugenNarrativeCharacterBios } from "./character-biographies-mugen";
import { syeNarrativeCharacterBios } from "./character-biographies-sye";
import { snowNarrativeCharacterBios } from "./character-biographies-snow";
import { run516NarrativeCharacterBios } from "./character-biographies-run516";
import { run519NarrativeCharacterBios } from "./character-biographies-run519";
import { run520NarrativeCharacterBios } from "./character-biographies-run520";
import { run521NarrativeCharacterBios } from "./character-biographies-run521";
import { run524NarrativeCharacterBios } from "./character-biographies-run524";
import { run525NarrativeCharacterBios } from "./character-biographies-run525";

const anayss = run470NarrativeCharacterBios.anayss;
const feli = feliNarrativeCharacterBios.feli;
const mugen = mugenNarrativeCharacterBios.mugen;
const sye = syeNarrativeCharacterBios.sye;
const snow = snowNarrativeCharacterBios.snow;

export const run515NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  anayss: {
    ...anayss,
    sections: [
      ...anayss.sections,
      {
        period: "2020–2021",
        title: "THE ROOM ANSWERS BACK",
        paragraphs: [
          "Anayss does not just dispense warmth; people return it in the same tiny signals she is always watching for. Gilli tells her she is **`welcome anytime`** and that she **`brightens the room`**, leaving Anayss briefly on the receiving end of the social medicine she usually hands out herself. Her response is embarrassed, grateful, and reciprocal rather than ceremonial. She knows how to make a room feel welcoming; she is considerably less armored when the room notices that she is doing it.",
          "Gabu makes the progression even clearer. Their earliest contact has the mutual little **wait, who is this?** wobble already elsewhere in the dossier. Later Gabu responds to an Anayss pet photo without needing a fresh invitation, clarifies that the acknowledgment was not some request for access, and Anayss says the acknowledgment itself is a big deal before answering **`hi dear ^-^`** and trading hugs. She runs a room by noticing whether people feel seen, which also means she notices immediately when somebody sees her back."
        ]
      },
      {
        period: "Petty Crimes",
        title: "Petty Crimes",
        paragraphs: [
          "Anayss has an extremely specific relationship with escape-room competence: **`i love escape rooms!`**. This is the same person whose older game-map testimony includes **`Which is always cuz i get lost a lot`**. Apparently controlled puzzles are welcome; ordinary navigation remains entitled to fight back.",
          "Has also confessed, with no visible shame, **`omg ive watched so many otter's vids lol`**. No grand fandom thesis is required. Sometimes a Deputy is simply deep enough into otter videos to volunteer the fact unprompted.",
          "Operational typo hall of fame remains strong: **`STAR OR CASSELL IS UPPOPOO`** while trying to get everybody to an event, plus the later welcome packet that briefly sent the server index to Whiskey by mistake. Being useful has never required Anayss to become a polished notification appliance."
        ]
      }
    ]
  },
  feli: {
    ...feli,
    sections: [
      ...feli.sections,
      {
        period: "2023",
        title: "THE UNDERWORLD APPARENTLY HAS A LOADING SCREEN",
        paragraphs: [
          "Feli's Wall behavior adds a useful complication to the compact, practical version of him. He can perform annoyance like he is about to leave the entire stupid production behind — an eye-roll, a taunt, the general posture of somebody above the proceedings — and then about ten seconds later post **`Feli has ENTERED the Underworld server`** with another attachment. The mock resistance is not the opposite of participation. Half the time it looks like the loading screen.",
          "The same self-aware escalation shows up in his later Wall philosophy: **`To be the shamer you have to have no shame for others to shame you over`**. That is a magnificently convenient legal theory for somebody who is perfectly willing to prosecute other people while feeding the room material himself. Feli does not need to choose between being annoyed by Screenshot Court and enjoying the theater; apparently he can complain from inside the production and then add lighting cues."
        ]
      }
    ]
  },
  mugen: {
    ...mugen,
    sections: mugen.sections.map((section) =>
      section.title === "Don't lose the shit"
        ? {
            ...section,
            paragraphs: [
              ...section.paragraphs,
              "Long before the current archive project became a project, the people inside Mugs's screenshot habit could already see the labor. In February 2022 Key came back to Wall specifically to **`see how many times i appeared here`**, noticed **`mugs workin hard on them screenshots`**, and landed on **`dunno whether to be ashamed or impressed`**. That sentence is the useful problem. Mugen's preservation can be impressive work and public embarrassment at the same time; the person being preserved can return voluntarily, count their own crimes, and tease the woman maintaining the mirror. The archive instinct was not socially invisible just because nobody had called it an archive yet.",
              "One 2023 Wall post arrives with Mugs's breezy **`posted w permits`**. That is very her: keep the receipt, but apparently put a little boundary wrapper on it when the moment calls for one. Aeshleen adds her own **`for the record...`** context nearby, which gives the scene its other useful half — being filed does not mean Mugs gets sole custody of what the moment meant."
            ]
          }
        : section
    )
  },
  ...run516NarrativeCharacterBios,
  ...run519NarrativeCharacterBios,
  ...run520NarrativeCharacterBios,
  ...run521NarrativeCharacterBios,
  ...run524NarrativeCharacterBios,
  ...run525NarrativeCharacterBios,
  sye: {
    ...sye,
    sections: [
      ...sye.sections,
      {
        period: "2020",
        title: "ASK FOR HELP, THEN KEEP DIGGING",
        paragraphs: [
          "One Saber problem catches Sye's relationship with not-knowing almost too cleanly. She asks how to see the schedule in clock time instead of relative hours and minutes. When the setup appears not to allow what she wants, Snow's first answer is **`dont think we can`**. Sye does not treat that as a handoff where the problem now belongs to somebody more technical. She answers **`I’m look at github`**, goes hunting through the documentation herself, and comes back with the exact reminder example: **`!config #schedule remind \"30, 10, 5 min\"`**. Asking for help and retaining ownership of the problem are apparently the same motion for her.",
          "Snow does not make being corrected weird either. He keeps checking while Sye digs, then changes his answer immediately when she brings the command back: **`oh nice so we can actually set the real time`**. That tiny exchange makes their technical work feel much less like one expert teaching one subordinate and much more like two people passing the flashlight back and forth. Whoever finds the useful thing gets to move the group forward. The point of the precision is wonderfully ordinary anyway: get the reminder into announcements so people can actually get on."
        ]
      },
      {
        period: "2021",
        title: "NO EMOTIONAL LOADING SCREEN",
        paragraphs: [
          "Snow comes back into view and Sye goes **`oh god`**, **`snow..`**, then **`I FUCKING MISSED SNOW`**. Almost immediately the reunion detonates into **`I KILLED SHIN`** and **`IM SO SORRY`**. Snow answers **`I’m ready to throw hands now`**, then a little later **`Ok we all good`**. The speed is the character beat: affection, game catastrophe, apology, mock threat, reset. Nobody pauses to translate the relationship into a speech. They already know the register well enough to repair by staying inside it.",
          "The next few weeks show the same lack of ego around competence. Sye says **`I dont wanna be the murderre`** when she dislikes a game role; when another setup starts fighting her, she goes **`iam trying to make it work`**, **`I have a second game`**, **`I can do it`**. Then an April hosting attempt produces the immaculate **`I tried I have no idea what iam doing`**. She does not need to look certain before she volunteers. Sye will try first, say exactly where the knowledge runs out, and leave the door open for somebody else to solve the next part."
        ]
      }
    ]
  },
  snow: {
    ...snow,
    sections: [
      ...snow.sections,
      {
        period: "2020",
        title: "THE FIRST ANSWER IS NOT SACRED",
        paragraphs: [
          "Snow's competence is more convincing when he is wrong in public. During a Saber reminder problem, Sye asks whether the schedule can use real clock time. Snow's first read is **`dont think we can`**. He does not turn that sentence into a hill to die on; he keeps checking while Sye goes into GitHub documentation, and when she returns with an exact config example his response is simply **`oh nice so we can actually set the real time`**. No prestige emergency. The answer changed, so Snow changed with it.",
          "That is the better version of the technical elder than somebody who always knows first. Snow and Sye can ask, test, contradict the current assumption, and accept the better answer without converting the exchange into hierarchy theater. Even here the machinery is serving a social purpose rather than becoming the whole story: Snow's concern is that reminders land where people will see them **`just so people can get on`**. The system matters because somebody is supposed to arrive at the other end of it."
        ]
      }
    ]
  },
};