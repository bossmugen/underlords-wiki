import type { CharacterNarrative } from "./character-biographies-narrative";
import { miaNarrativeCharacterBios } from "./character-biographies-mia";
import { nelphNarrativeCharacterBios } from "./character-biographies-nelph";
import { ansunNarrativeCharacterBios } from "./character-biographies-ansun";

const mia = miaNarrativeCharacterBios.mia;
const nelph = nelphNarrativeCharacterBios.nelph;
const ansun = ansunNarrativeCharacterBios.ansun;

if (!mia || !nelph || !ansun) throw new Error("Run 57 biography bases are missing.");

const nelphLaterSections = nelph.sections.filter(
  (section) => section.title !== "The doorway is 2020. The Officer file comes later.",
);

export const run57NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mia: {
    ...mia,
    sections: [
      ...mia.sections,
      {
        title: "SHE LEARNS THE MAP, THEN HANDS IT TO THE NEXT PERSON",
        paragraphs: [
          "In October 2022 Gabu starts walking Mia through the rooms that actually matter in daily life: Daycare, Fun & Games, then Main HQ. Mia does not just nod at the tour and disappear. She immediately starts sorting the house by use — where people are active, where the important talk happens, where the older club history is hiding. It is a tiny shift from *being shown around* to understanding why somebody would choose one door over another.",
          "Seven months later Saiyura arrives and Mia is the one doing the pointing. `Welcome new clubbie!!!` comes first; then Daycare, Fun & Games, and Main HQ for important stuff and general UL chat. When the setup needs another pair of hands, Mia tags Mekchu instead of pretending she personally knows everything, and the whole thing stays in her usual register: useful directions beside `All of us are dumbasses here`. Gabu once handed Mia the map. Mia eventually hands the same practical map to somebody newer without turning into a brochure in the process.",
        ],
      },
    ],
  },

  nelph: {
    ...nelph,
    intro: [
      "Nelph / N E L P H is a retired full Underlords Officer, but the habit of making a messy group easier to run predates Underlords itself. In the earlier management world around Mugen, Nelph is already talking recruiter counts, event cadence, approvals and who should take which job when somebody needs a break. A 2019 Officer Orientation names her Recruitment Lead while Mugen is Club Founder there; by January 2020 Nelph is still interviewing people and suggesting staff fits, then immediately trying to hand Personnel and events work to other people when school means she needs to step back. The later UL Officer title lands on top of an older instinct: do the work, figure out who else can do the work, and do not let the work become one person's hostage situation.",
      "She also has a very specific idea of what responsibility should look like when people are mad at each other. In February 2020, still before Underlords exists, Nelph argues for serious complaints to come with screenshots when needed, for accusations to stay out of open chat while staff actually investigate, and for staff or friends to be accountable too. Then she undercuts the whole cop-show atmosphere with `not trying to play big brother... come talk to one of us`. That combination survives into the person Underlords later knows: procedural without needing to cosplay authority, direct without making every problem public theater.",
      "Her clean Underlords Discord doorway comes later, on December 16, 2020, when she checks in as Nelphie and moves through the ordinary role-and-tour process. Years after that, the reunion version is even simpler. Mugen yells `NELPHIE`; Nelph fires back `HI MUGS!!` and `IM ALIVE`. No résumé, no ceremony. The woman who once spent time figuring out recruiter capacity and complaint procedure can also re-enter the house with two all-caps sentences and let recognition do the rest.",
    ],
    sections: [
      {
        title: "THE OFFICER HABITS SHOW UP BEFORE UNDERLORDS",
        paragraphs: [
          "In May 2019 Nelph is already giving Mugen the sort of advice that later looks completely natural on her: pick one or two people to recruit instead of making it everybody's vague responsibility; build an event list; scale the calendar to the size of the club. A formal orientation in that older group names Nelph as Recruitment Lead. None of this backdates an Underlords appointment — UL does not exist yet. It does explain why later leadership never reads like a costume she suddenly put on.",
          "The best part is that she is not precious about being the bottleneck. In January 2020, after days of still interviewing people and talking through staff fits, Nelph says school and an evening class mean she needs a break. Her answer is delegation: other people can cover Personnel and events while Mugen handles teams and forum work. Even stepping back becomes an organizing act. Nelph does not prove commitment by refusing to leave; she proves it by making sure leaving for a while does not strand everybody else.",
        ],
      },
      {
        title: "KEEP THE COMPLAINT OUT OF THE STREET FIGHT",
        paragraphs: [
          "Nelph's February 2020 complaint framework is almost aggressively unglamorous. If something serious happened, bring the problem to staff. Bring screenshots when they matter. Do not turn an accusation into open-chat spectacle before anybody has spoken to the people involved. Interview, decide, discipline if needed. And if the person causing the problem is staff or somebody's friend, that is not a magical immunity card.",
          "Then comes the sentence that keeps the whole thing from turning into fake-police cosplay: `not trying to play big brother... come talk to one of us`. The point is not surveillance. It is giving people a route other than public combustion. That is a much better preview of Nelph's later Officer energy than any title list: she likes a process when the process keeps the room from becoming stupider than the original problem.",
        ],
      },
      {
        period: "December 16, 2020",
        title: "THE UNDERLORDS DOORWAY COMES LATER",
        paragraphs: [
          "Nelph's first clean Underlords Discord doorway is wonderfully boring. She checks in as `Nelphie, Underlords, S-9`; Gilli handles the role assignment and points her toward the server tour. The useful part is the contrast. By then Nelph and Mugen already have older management history, but Underlords is its own house with its own front desk. Old familiarity does not erase the new doorway.",
          "That moment also does not backdate Nelph's later full-Officer status. The title comes later in the Underlords story. What December gives us is simpler: she is visibly in the UL Discord, already recognizable enough to belong there, while the earlier scenes explain why competence around people and process never had to start from zero.",
        ],
      },
      ...nelphLaterSections,
    ],
  },

  ansun: {
    ...ansun,
    sections: [
      ...ansun.sections,
      {
        title: "ASK THE ROOM BEFORE YOU BUILD THE THING",
        paragraphs: [
          "In May 2020 Sou casually mentions that he is pretty good at tarot cards. Mugen immediately hears programming potential — `that's your event! Tarot card reading` — and Sou's first instinct is not to announce a weekly occult empire. He asks whether people would actually be interested, suggests maybe once a month, and points out that doing readings for too many people would be a lot.",
          "It is a small scene, but it fits him almost suspiciously well. A personal skill becomes something he could share; enthusiasm arrives; then Sou checks demand and scale before promising the room a system it cannot sustain. The later Officer who explains confusing rooms one practical step at a time is already visible here in miniature. Even tarot gets a capacity plan.",
        ],
      },
    ],
  },
};
