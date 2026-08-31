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
          "The 2022 onboarding trail catches Mia on the receiving end of more than one kind of house map. Gabu walks her through the places people actually use — Daycare, Fun & Games, Main HQ — and another October routing gives her the official orientation spine: Biodata, the Discord tour, Whiskey. Mia does not perform instant omniscience. She gets shown around, asks what the rooms are for, and gradually learns which door solves which kind of problem. That is a much better beginning than pretending a later Officer title means she spawned with the building memorized.",
          "By May 2023 Saiyura arrives and Mia is doing the pointing herself. She repeats the Biodata / Discord Tour / Whiskey route, but now the directions carry social boundaries too: be careful around minors and Platelets, keep sensitive-topic blowups out of public chat, move drama to DMs, and do not panic while roles are still being assigned. Then she lands the procedural packet with a warm welcome. Gabu once helped Mia read the house. Mia eventually becomes one of the humans who can make somebody newer less lost without turning into a brochure.",
          "The contradiction keeps this from becoming a Respectable Responsible Mia paragraph. The same broader stretch also has her participating in `BREAK THE BOT` and encouraging more bot-breaking. She appears much more serious about consequences when actual people, minors, conflict, or vulnerable members are involved than when the casualty is low-stakes infrastructure. That is not `strict` versus `chaotic`; it is a person who seems to know which kind of mess needs boundaries and which kind can be fed for comedy. The bot has no lobbyist.",
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
      {
        period: "October–November 2021",
        title: "THE TITLE SAYS SERVICE; NELPH ACTS LIKE A PERSON WHO READ THE FINE PRINT",
        paragraphs: [
          "The Underlords promotion finally gets a direct scene on October 5, 2021. Mugen opens with `Welcome officers` to Nelph and Sye's historical account, then hands them the management-room map, expectations, and staged access. The packet says the promotion recognizes services they were already doing, says `Real life first, always`, and explicitly frames Officer positions as positions of service. That makes the title feel less like coronation and more like UL finally putting a label on work the room had already noticed.",
          "Nelph's next month makes that philosophy legible in behavior. In a sensitive case whose private details stay private, she keeps separating what has been supplied from what is still missing, collecting screenshots, asking follow-ups, labeling updates, and insisting the room should read the material before moving forward. She can enjoy tea without treating gossip as a verdict. That distinction is the lived Officer story: the funny part can be funny; an actual decision still has to survive contact with the receipts.",
          "Even scheduling gets the same low-ego treatment. Nelph compares conflicting game windows, proposes the workable day, then adds `That's my opinion though`; Mugen takes the recommendation. Five days before Nelph later asks for a break, she is also volunteering as a recruitment contact and describing herself as active in both the game and Discord. The break is therefore not a ceremonial confirmation that she had already vanished. It interrupts an active stretch, which makes the room's `always have a home with us` response land considerably harder.",
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
