import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { hanNarrativeCharacterBios } from "./character-biographies-han";
import { lillyRun1306NarrativeCharacterBios } from "./character-biographies-lilly-run1306";
import { yassrNarrativeCharacterBios } from "./character-biographies-yassr";

const hanBase = hanNarrativeCharacterBios.han;
const lillyBase = lillyRun1306NarrativeCharacterBios.lilly;
const yassrBase = yassrNarrativeCharacterBios.yassr;

const hanDoorAndEdit: NarrativeSection = {
  period: "August–October 2021",
  title: "MUGEN WAS WAITING AT THE DOOR; SIX WEEKS LATER SHE WAS CREDITING THE EDIT",
  paragraphs: [
    "Han finally has a surviving Discord doorway instead of materializing halfway through the Media Director story. When he arrives on August 16, Mugen's first reaction is `Eyyy you made it`. During the setup questions she realizes she has forgotten one basic detail, says `I forgot`, and immediately files the failure under `My goldfish brain` before finishing the visible server setup. The safe relationship read is small but useful: she was expecting him, already knew enough to forget something rather than learn it for the first time, and the welcome is familiar before the paperwork is finished. The scene still does not establish who technically invited him, how long they had known each other, or the date of any in-game UL admission.",
    "By October 11 the relationship has moved from front-door recognition to public work credit. Mugen posts the Underlords Spooky Night preview and writes `edit by the very talented @.`; the stable `.` account is Han / Nai. Six days later the surviving Voice Challenge begins. That makes the progression much cleaner: Han is not a floating title who suddenly appears to facilitate a creative room. The house is already publicly crediting his edit work immediately before one of his best-preserved media projects comes online.",
    "The credit stays exactly where it belongs. Mugen POSTED the preview and explicitly credited Han for the EDIT. That does not make Han the filmer, creator of every underlying asset, or a person necessarily shown in the video, and none of it gives us a clean Media Director appointment timestamp. The better story is lived role before perfect paperwork: show up, get folded into the room, make the thing, get named for the work, then keep building formats for other people to make things too."
  ]
};

const hanSections = hanBase.sections.filter(
  (section) => section.title !== "The camera comes on after Han is already here"
);
hanSections.unshift(hanDoorAndEdit);

const lillyReceiptChaser: NarrativeSection = {
  period: "November–December 2020",
  title: "SHE DOES NOT JUST WANT THE RECEIPT. SHE WANTS THE CONVO.",
  paragraphs: [
    "Lilly's Wall habit is not only reacting after somebody else starts the scene. Across late 2020 she repeatedly posts an attachment and then summons somebody into the exhibit — Woohyuk more than once, Anayss on another day — with almost no explanatory padding. The media stays visually uninspected here, so Lilly is POSTED BY and the pixels do not get to invent a maker, photographer, subject, or crime. The social move is already clear without them: put the object on the table, point at the person who needs to see it, let the room do the rest.",
    "The sharper tell lands on December 1 when Lilly asks `where is this convo why am i missing it`. That is wonderfully consistent with the woman who will file the thing and tag the suspect: she wants the source context, not merely the detached punchline. Her archive footprint is high-affect and low-ceremony, but it is not passive. Lilly can be the one chasing down where the joke came from, then carrying the evidence into the room herself. Apparently `OOP` and source verification can coexist in one person without either becoming professionalized."
  ]
};

const lillySections = [...lillyBase.sections];
if (!lillySections.some((section) => section.title === lillyReceiptChaser.title)) {
  const laterIndex = lillySections.findIndex((section) => section.period === "2021 onward");
  lillySections.splice(laterIndex >= 0 ? laterIndex : lillySections.length, 0, lillyReceiptChaser);
}

const yassrActiveOfficer: NarrativeSection = {
  period: "October 22 – November 13, 2024",
  title: "THE ROOM CALLS HIM AN ACTIVE OFFICER, THEN ASKS HIM TO COVER THE SHIFT",
  paragraphs: [
    "Yassr's late Game Officer era now has a contemporary status boundary that is better than reading a title backward from an export. On October 22, 2024, Sye asks for Yassr; Wolf brings him into the private game-officer room and tells him plainly that it is `for active in game officers!`, adding that he can reach the group there if anything comes up. Yassr answers `Thank youuuuu`, and Mugen welcomes him later that day. This proves how the room was treating him by that date. It does not prove the exact promotion click happened that morning.",
    "Three weeks later the title has behavior attached. Sye says she cannot be on and asks Wolf and Yassr for someone to run Club Clash. That is the useful part of the role progression: Yassr is not merely admitted to a room with a fancier label; he is one of the people the person carrying late-Raja operations can ask to cover a live club event when she is unavailable. The same man whose file keeps circling back to `Just something useful` eventually reaches an officer chapter where usefulness means somebody can hand him an actual shift."
  ]
};

const yassrSections = [...yassrBase.sections];
if (!yassrSections.some((section) => section.title === yassrActiveOfficer.title)) {
  const countdownIndex = yassrSections.findIndex((section) => section.title === "Twenty-five minutes is apparently enough warning");
  yassrSections.splice(countdownIndex >= 0 ? countdownIndex : yassrSections.length, 0, yassrActiveOfficer);
}

export const run423NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  han: {
    ...hanBase,
    sections: hanSections,
  },
  lilly: {
    ...lillyBase,
    sections: lillySections,
  },
  yassr: {
    ...yassrBase,
    sections: yassrSections,
  },
};
