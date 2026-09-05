import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { ameNarrativeCharacterBios } from "./character-biographies-ame";
import { dyingfoxNarrativeCharacterBios } from "./character-biographies-dyingfox";
import { run410NarrativeCharacterBios } from "./character-biographies-run410";

const ameBase = ameNarrativeCharacterBios.ame;
const dyingfoxBase = dyingfoxNarrativeCharacterBios.dyingfox;
const mugenBase = run410NarrativeCharacterBios.mugen;

const ameReturnedForChill: NarrativeSection = {
  period: "November 2023 – January 2024",
  title: "HE CAME BACK FOR CHILL AND THE HOUSE FOUND HIM A JOB ANYWAY",
  paragraphs: [
    "Ame's 2023 return finally gives the current Game Officer story a human middle without pretending the archive has an appointment certificate. On November 17 Anayss greets the same stable account with `Hola Ame! Bienvenido de vuelta!`. A little over two weeks later, in DR GAME HQ, she explains that Amexistir had joined UL back looking for a chill club and says he had only been back about two weeks. The timing lines up closely enough to make the return legible while still leaving the exact admission click offstage.",
    "The funny part is what the officers do with that information: they notice potential and deliberately do not pounce on the fresh returnee. Ame has come back for low-pressure company; the room lets that fact matter. By December 21 he is being welcomed into the officer room, and by January 10 Snow is asking for Ame's alliance thoughts so the officers can discuss them. Underlords has apparently discovered the ancient management technique of seeing somebody be useful, giving him a minute, and then eventually asking what he thinks about governance anyway.",
    "That makes the later title feel lived rather than preordained. The same person whose earlier file is mostly about making the front door linguistically usable eventually becomes somebody whose opinion is solicited inside the room where decisions are being worked out. It does not tell us one universal promotion formula, and it does not turn every helpful act into a leadership audition. It does show that Ame's path into responsibility was visible to other people before the title becomes the only thing a roster can tell us."
  ]
};

const ameSections = [...ameBase.sections];
if (!ameSections.some((section) => section.title === ameReturnedForChill.title)) {
  const roleIndex = ameSections.findIndex((section) => section.title === "The current title is real; the missing appointment story stays missing");
  ameSections.splice(roleIndex >= 0 ? roleIndex : ameSections.length, 0, ameReturnedForChill);
}

const dyingfoxLilly: NarrativeSection = {
  period: "2020–2021",
  title: "HE SAYS GOOD MORNING; LILLY TURNS IT INTO A PARADE",
  paragraphs: [
    "Dyingfox's low-bandwidth style is not only reactive. Across December 2020 into early 2021, Fox repeatedly starts the contact with Lilly: `Morning lilly!`, then another `Morning lilly!`, then another in January. On December 21 Lilly receives the tiny greeting at stadium volume — `FOX OMG HIIIII`, then `I LOVE YOU` — and Fox answers the way Fox usually answers when the meaning is already clear: `Love you too!`.",
    "By February the same rhythm has become even more compressed. Fox sends `Eli hug @Lilly👽`; Lilly comes back with `@DyingFox(Gilli's Pond) HI SUNSHINE`; Fox answers `Hi!` and a love emote. Nobody needs a paragraph explaining what kind of morning this is. One person reaches out in miniature, the other person blows the doors off the room, and both apparently understand that these are compatible volumes.",
    "That changes the meaning of Fox's quietness. Fox is not merely the person who answers when somebody else starts the care. Fox initiates. Lilly's immediate, enormous reception makes the little greeting emotionally legible because the relationship already knows how to read it. The affection is reciprocal without needing a bigger label: quiet initiator, loudly received."
  ]
};

const dyingfoxSections = dyingfoxBase.sections.flatMap((section) => {
  if (section.title === "PETTY CRIMES") {
    return [
      dyingfoxLilly,
      {
        ...section,
        paragraphs: [
          ...section.paragraphs,
          "Repeatedly says `Morning lilly!` with enough consistency to make Lilly respond like Fox has just returned from a seven-year war."
        ]
      }
    ];
  }
  return [section];
});

const wolfWatchedFirst: NarrativeSection = {
  period: "Before Underlords",
  title: "BEFORE BOSS, OTHER PEOPLE WERE ALREADY TAKING NOTES",
  paragraphs: [
    "Wolf's later account of the Altissa-to-UL move gives Mugen a useful pre-title reputation scene. When Altissa went inactive, Wolf considered going solo or joining Underlords. UL had the practical advantage that she already knew somebody there, but Wolf also remembered having watched Mugen and another old clubmate spend time playing with and helping former clubbies. She had already seen what Mugen was like around people who were not asking her to be Boss of anything.",
    "That matters because Wolf's choice is not a recruitment speech Mugen delivers. Mugen is almost offstage. Wolf has been watching ordinary behavior, building her own model of the person, and later uses that model when she has to decide where she wants to land. Before the title could explain Mugen for anybody, her treatment of people was already doing reputation work for her.",
    "It also keeps the founding story from becoming destiny. Wolf had a real alternative: go solo. Familiarity made UL easier, and prior observation made the familiarity mean something. She was not following a logo. She was choosing a room partly because she had already watched one of the people inside it behave like somebody worth staying near."
  ]
};

const mugenConsent: NarrativeSection = {
  period: "May 2021",
  title: "THE ARCHIVE GOBLIN CAN LEAVE THE CELL BLANK",
  paragraphs: [
    "One Whiskey scene gives Mugen's preservation habit a very useful stop button. She asks Baby Lyssa, `Want me to put it in our bday list?` and explains that the list is usually Staff-side while calling Lyssa `pretty much family now uwu`. The important part is the order of operations: closeness does not replace the question. The family language sits beside the ask, not on top of it.",
    "When somebody else declines being added, Mugen's answer is plain: `I won't put anyone's there without their consent`. For a woman who will save names, screenshots, old jokes, relationship maps, event history and six years of everybody's nonsense if you leave her unsupervised near a filing system, that little sentence is character gold. Knowing a fact and deciding that the house gets to formalize the fact are not automatically the same action.",
    "That makes the preservation streak less interesting if we flatten it into *Mugen keeps everything*. She likes records. She likes continuity. She likes being able to find the old thing later and yell about it. She can also accept an intentional hole in the record when the person whose information would fill it says no. Apparently even the archive goblin can leave a cell blank."
  ]
};

const mugenSections = [...mugenBase.sections];

if (!mugenSections.some((section) => section.title === wolfWatchedFirst.title)) {
  const controlIndex = mugenSections.findIndex((section) => section.title === "Control freak, not oracle");
  mugenSections.splice(controlIndex >= 0 ? controlIndex : 0, 0, wolfWatchedFirst);
}

if (!mugenSections.some((section) => section.title === mugenConsent.title)) {
  const pettyIndex = mugenSections.findIndex((section) => section.title.toLowerCase().includes("petty crimes"));
  mugenSections.splice(pettyIndex >= 0 ? pettyIndex : mugenSections.length, 0, mugenConsent);
}

export const run413NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ame: {
    ...ameBase,
    sections: ameSections
  },
  dyingfox: {
    ...dyingfoxBase,
    sections: dyingfoxSections
  },
  mugen: {
    ...mugenBase,
    sections: mugenSections
  }
};
