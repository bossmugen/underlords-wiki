import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { ansunNarrativeCharacterBios } from "./character-biographies-ansun";
import { dayaNarrativeCharacterBios } from "./character-biographies-daya";
import { xephyNarrativeCharacterBios } from "./character-biographies-xephy";

function appendToSection(
  base: CharacterNarrative,
  title: string,
  paragraphs: string[],
): CharacterNarrative {
  return {
    ...base,
    sections: base.sections.map((section) =>
      section.title === title
        ? { ...section, paragraphs: [...section.paragraphs, ...paragraphs] }
        : section,
    ),
  };
}

function insertBeforeSection(
  base: CharacterNarrative,
  beforeTitle: string,
  section: NarrativeSection,
): CharacterNarrative {
  const index = base.sections.findIndex((item) => item.title === beforeTitle);
  if (index < 0) return { ...base, sections: [...base.sections, section] };
  return {
    ...base,
    sections: [
      ...base.sections.slice(0, index),
      section,
      ...base.sections.slice(index),
    ],
  };
}

let daya = appendToSection(
  dayaNarrativeCharacterBios.daya,
  "At the front door, Daya keeps people moving without making procedure the main character",
  [
    "The August-to-November sequence also shows the work changing in her hands. On August 18 Daya explicitly says she is waiting for `one of the other officers` to finish the role assignment. On November 22, after carrying the fuller safety welcome, she says `gonna assign your role!` herself. That is not a promotion timestamp and does not tell us when any permission changed. It is better character evidence than a guessed date anyway: the surviving scenes move from explicit handoff to first-person task ownership. Her practical scope appears to widen while her voice stays exactly as unceremonious as before.",
    "The welcome script itself was not Daya's private composition. By late 2022 near-identical safety-and-navigation wording is moving through Ren, Mugen, Gilli, Gabu, Ansun/Sou and Daya, with Mia carrying it later. Daya's individuality is in how she handles the human around the template. When somebody returns later the same day, she says `you dont have to view rules aagain` rather than making them repeat the ritual, but still asks for another Biodata entry `just to keep track`. The paperwork matters. Pointless paperwork apparently does not.",
  ],
);

let ansun = appendToSection(
  ansunNarrativeCharacterBios.ansun,
  "Competence is allowed to look stupid",
  [
    "Whiskey supplies an earlier version of the same contradiction. In April 2021 Souta posts the Color Theme results, thanks the participants and guest judge, names the winners, explains prizes and how winning photos will be used, then opens the next Mafia theme with dates. The announcement is dense because somebody has to make a recurring contest understandable. It does not make him the sole designer, judge, funder or owner of the program. It does make the labor visible: the man is perfectly capable of becoming the public logistics desk and then returning to being a menace five minutes later.",
  ],
);

ansun = insertBeforeSection(ansun, "Shame goes in. Fame comes out.", {
  title: "Real life can win without anybody being put on trial for leaving",
  paragraphs: [
    "When Crystalia warns in March 2021 that she may quit Raja and tells the room it is okay to remove an inactive game account, Souta does not make her perform loyalty on the way out. He tells her to focus on real life, take care, and then adds `Thanks for telling us!`. The emotional and practical clauses sit beside each other. The person matters more than retention; the heads-up still matters because somebody has to know what is happening. That combination is very Ansun: warmth does not require pretending logistics stopped existing, and logistics do not require making the person feel guilty.",
  ],
});

ansun = appendToSection(
  ansun,
  "People keep handing him the room because he already speaks its language",
  [
    "Two H1 Whiskey summons make that low-context familiarity almost comically literal. Lena tags Souta and Ren because a cat is `SITTING ON HIS FEET`, as though this microscopic domestic emergency obviously requires both men. Later Key points straight at Souta and yells `HUSBAND ITS MY HUSBAND ITS MY HUSBANDD`. The latter stays joke language, not a secret marriage certificate or romance claim. What survives is the social ease: people can drag Souta into a bit with almost no setup because the room already assumes he knows how to catch it.",
  ],
);

ansun = appendToSection(ansun, "Petty Crimes", [
  "Souta once volunteered himself into the Tumbleweed as `DEANS GRANDPAW` and then, 34.822 seconds later, complained that `this tumble weed gets worse with each new addition`. This is flawless municipal governance: personally approve the zoning violation, then arrive as the building inspector. It is nonliteral family language, but it is extremely literal evidence that Ansun prefers criticizing the mess from inside the mess.",
  "His newcomer taxonomy could also be viciously efficient. Remembering Zepp's first week, Souta says he called him `walmart key`, then escalates to `HE SOUNDED LIKE A AUTO BOT OF KEY`. Zepp, Key and Dean remain three separate people. The joke works because Souta assumes everybody already knows Key well enough that the counterfeit-brand comparison needs no further briefing.",
]);

const xephy = appendToSection(
  xephyNarrativeCharacterBios.xephy,
  "The open door gets used",
  [
    "The chronology gives Xephy more agency than the later resurrection jokes suggest. Xephy's friend request and `Mugsss it's Xephy from Underlords back in Dragon Raja days` DM happen before the QOTD room starts celebrating `I GOT XEPHY` and using the successful return as fuel for dragging more old people back. The retrieval machine does not cause this one. Xephy has already knocked; the room turns the opened door into propaganda afterward.",
    "The next day's nostalgia also gets wonderfully ordinary. Xephy remembers the group raids and photos, then says `Those were my favorite moments, and the groupchat`. Later: `That's alright, we're both UL. Maybe different Generations, pero still same family`. The `Maybe` does a lot of work. Exact placement can stay fuzzy; social recognition does not have to wait for everybody to reconstruct the spreadsheet first. `Family` here is UL's own relationship language, not biology. It is Xephy choosing a category sturdy enough to survive missing metadata.",
  ],
);

const wolfphenix: CharacterNarrative = {
  intro: [
    "WolfPhenix / Wolfie belongs to Underlords' five-person founding circle: Mugen founded the club, and Wolf was one of the four friends who came with her from Altissa. Years later she is a current Caporegime, News Editor and Game Officer, but the titles are almost the least distinctive part of the file. Wolf's recurring move is to take group life that is messy, scattered or easy to lose and turn it into an object people can actually use — a weekly schedule, an anniversary drawing, a recovered screenshot, a redesigned doodle that finally feels enough like UL.",
    "The useful contradiction is that this does not make her a solemn Archivist archetype. Wolf can remember exactly which six-year-old screenshot would win an argument and still have no idea where she put it. She can spend serious labor drawing nineteen people into one alley and answer Kaede's emotional thank-you with `awww kaeeedeeeee`. She can preserve an old Haunted Night artifact because people still recognize themselves inside it and later decide that letting the dying Raja club fully disband feels more `✨UL ting✨` than forcing the shell to survive. Her continuity instinct seems attached to recognizable people and house identity, not to embalming every container that ever held them.",
  ],
  sections: [
    {
      title: "She makes the house usable before she makes it pretty",
      paragraphs: [
        "Wolf's visual history includes the deeply glamorous art form known as *please tell the strippers what time the Dragon Raja event starts*. In November 2021 she posts a Weekly Planner and asks what needs adding or changing. In April 2024, when Anayss asks for event updates, Wolf digs an older planner back up, updates it and again asks people to flag missing events or wrong times.",
        "Those planners were real club calendars. Wolf was the primary maker, while other Officers also took turns, using UL graphics and screenshots so everybody could keep track of the week. That is more revealing than inventing a fake `Calendar Director` title. Her design work is operational hospitality: make the confusing thing legible enough that other people can participate. The same practical register appears in ordinary game alerts and small collaboration scenes. Wolf's art is not separated from house maintenance by some sacred velvet rope.",
      ],
    },
    {
      title: "She draws people a place to stand, and one of them tells her what that felt like",
      paragraphs: [
        "For the 2023 anniversary Wolf posts a huge Mafia-themed alley containing nineteen Officers and Snipers, the UnderLords Strip Club, casino and daycare references, names in the scenery and enough accumulated house language to make the room immediately start identifying everybody. Mugen's reaction is basically disbelief at the labor: nineteen people, all in. The image is not just a roster with better lighting. It turns UL's own ridiculous vocabulary into a place everybody can point at.",
        "Five days later Kaede supplies the part an outside narrator should never have to invent. He tells Wolf that seeing himself among people he loved made him feel relief and happiness, reminded him he had a family he loved and believed loved him, and thanks her for making a space for him among everyone. Wolf answers with affection and hopes for more `amazingly chaotic nonsensical memories`. That exchange changes the meaning of the picture. Inclusion was not merely compositional. Somebody inside the composition felt included.",
      ],
    },
    {
      title: "If it does not feel UL enough, apparently you keep adding UL until it does",
      paragraphs: [
        "In May 2025 Wolf shows a three-stage doodle process and admits the first version `didnt feel UL ENOUGH`, so she redesigns it. The important part is not that Wolf possesses a secret corporate style guide. The line reveals her own test: technical completion is not enough if the object has not acquired the right house smell yet.",
        "That is why her maker file works better as culture than branding. UL's look was never one immutable logo system, and Wolf's own process shows a person editing toward felt recognition rather than checking boxes. She can look at her own finished-enough work, decide *nope, not us yet*, and keep going until the nonsense density passes inspection.",
      ],
    },
    {
      title: "Her memory is excellent; the filing system is apparently run by raccoons",
      paragraphs: [
        "In August 2026 Mugen says bots keep calling UL deranged. Wolf immediately remembers an old Key/Woohyuk screenshot family that would support the allegation, then admits `i forget where i put it :>>`. Roughly seventeen minutes later she returns one message at a time: `i` / `found` / `iiit`, followed by the old material framed as `UL BACK IN DE DAY`.",
        "That is a much better character note than calling her the Official Archivist. Wolf remembers that the thing exists, remembers why it matters, knows exactly when it would be funny again, and still has to excavate her own storage like a raccoon with a subpoena. The recovered 2026 conversation is enough to show Wolf presenting the old receipts; it does not need to pretend she originally captured every screenshot in them.",
      ],
    },
    {
      title: "She can keep the memory and still let the dead shell die",
      paragraphs: [
        "Wolf's continuity instinct has a limit, and that limit keeps the character from becoming nostalgia in human form. She resurfaces old people-bearing artifacts such as Haunted Night material because somebody in the present can still recognize themselves in them. But in 2025, when the old Dragon Raja club is effectively choosing between merger and full disband, Wolf favors letting it end and calls that more `✨UL ting✨`.",
        "Those scenes do not create a constitutional theory, but together they suggest a coherent preference: preserve what still carries people and recognizable house identity; do not keep a dead institutional container alive merely because it is old. Wolf can be one of the group's strongest continuity people without confusing continuity with taxidermy.",
      ],
    },
    {
      title: "Petty Crimes",
      paragraphs: [
        "`purple = wolfie` becomes peer shorthand in one 2022 Wall exchange after Dean apparently sees purple and thinks Wolf. That does not prove a formal personal brand. It does prove that the room can compress her into a color and expect everybody else to follow.",
        "She made schedules for the `strippers`. This remains one of the cleanest examples of UL solving a boring operational problem by refusing to use boring nouns.",
        "The seventeen-minute `i / found / iiit` receipt hunt is now permanent character property: strong social memory, chaotic storage architecture, victory delivered syllable by syllable.",
      ],
    },
  ],
  closing: [
    "Wolfie's biography makes the most sense when the practical objects and the sentimental objects stay on the same page. A calendar tells people where to be. An anniversary alley tells them where they are. An old screenshot lets the present room recognize its former self. A redesign decides the first draft still does not smell enough like home. And when a legacy game-club shell no longer feels worth preserving, Wolf can let that go too. The throughline is not `save everything`. It is closer to: make the thing useful, make room for people inside it, and keep what still lets the house recognize itself.",
  ],
};

export const run59NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  daya,
  ansun,
  xephy,
  wolfphenix,
};
