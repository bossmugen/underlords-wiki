import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { ameNarrativeCharacterBios } from "./character-biographies-ame";
import { dyingfoxNarrativeCharacterBios } from "./character-biographies-dyingfox";
import { run410NarrativeCharacterBios } from "./character-biographies-run410";

const ameBase = ameNarrativeCharacterBios.ame;
const dyingfoxBase = dyingfoxNarrativeCharacterBios.dyingfox;
const mugenBase = run410NarrativeCharacterBios.mugen;

const ameIdentityGuard: NarrativeSection = {
  period: "Identity",
  title: "THE NAME DOES NOT GET TO DO THE JOIN FOR US",
  paragraphs: [
    "Ren and Anayss directly call the stable Amexistir account `Ame`, so `Ame` is a real shorthand for this later person. The useful bridge begins in the stable 2022–2024 account trail. It does not reach backward just because older exports contain the same four letters.",
    "A separate account, `ame._.`, appears in January 2022 and is not Amexistir. The old 2020 Junior Officer Ame still lacks a stable-ID bridge to either later account. So this page follows Amexistir — the later person directly called Ame — without swallowing every Ame-shaped historical line. Same nickname is not reincarnation."
  ]
};

const ameReturnedForChill: NarrativeSection = {
  period: "November 2023 – January 2024",
  title: "HE CAME BACK FOR CHILL AND THE HOUSE FOUND HIM A JOB ANYWAY",
  paragraphs: [
    "Amexistir's 2023 return finally gives the current Game Officer story a human middle. On November 17 Anayss greets the same stable account with `Hola Ame! Bienvenido de vuelta!`. A little over two weeks later, in DR GAME HQ, she explains that he had joined UL back looking for a chill club and says he had only been back about two weeks. The timing makes the return legible while still leaving the exact admission click offstage.",
    "The funny part is what the officers do with that information: they notice potential and deliberately do not pounce on the fresh returnee. Ame has come back for low-pressure company; the room lets that fact matter. By December 21 he is being welcomed into the officer room, and by January 10 Snow is asking for Ame's alliance thoughts so the officers can discuss them. Underlords has apparently discovered the ancient management technique of seeing somebody be useful, giving him a minute, and then eventually asking what he thinks about governance anyway.",
    "That makes the later title feel lived rather than preordained. The same person whose earlier file is mostly about making the front door linguistically usable becomes somebody whose opinion is solicited inside the room where decisions are being worked out. The archive still does not give one magical timestamp for every badge or permission involved; it does give the more useful social transition from returning for chill to being treated like somebody whose judgment belongs in the room."
  ]
};

const ameRoleSection: NarrativeSection = {
  period: "Late 2023 onward",
  title: "THE OFFICE APPEARS BEFORE THE BADGE CLICK DOES",
  paragraphs: [
    "The current roster places Amexistir among the Game Officers. The late-2023 record now gives that status an actual lived bridge: people discuss his usefulness without rushing him, he is welcomed into the officer room on December 21, and Snow later asks for his alliance thoughts so the group can discuss them. That is materially more than a role array floating above a sparse biography.",
    "What remains off-camera is the exact administrative click that attached every later permission or label. That missing timestamp does not erase the transition we can see, and it does not authorize the page to invent a cleaner ceremony than UL apparently bothered to preserve. The useful story is the behavior around the role: somebody returns because he wants a chill place to be, other people notice what he contributes, give him breathing room, then start treating his judgment as part of governance.",
    "That progression also keeps the title from rewriting the earlier person. Amexistir first enters this reliable trail by saying plainly what he understands, letting the room switch languages, and answering the practical question in front of him. Later authority grows on top of that person; it does not replace him with a generic Officer adjective pack."
  ]
};

const ameIntro = [...ameBase.intro];
if (ameIntro.length >= 3) {
  ameIntro[2] = "The cleanest human arc is therefore not paperwork magically becoming leadership. In 2022 the room adapts the front door around Amexistir's stated English limitation. In June 2023 the same stable account is still being met in Spanish. By November Anayss is saying `Bienvenido de vuelta!`; a few weeks later the officer room is explicitly welcoming him, and soon Snow is asking for his alliance thoughts. The machine keeps seeing forms. The people increasingly see somebody whose judgment belongs in the conversation. This page starts with that stable later account and does not backfill the unresolved 2020 Junior Officer Ame by nickname alone.";
}

const ameSections = ameBase.sections.filter(
  (section) => section.title !== "The current title is real; the missing appointment story stays missing"
);
if (!ameSections.some((section) => section.title === ameIdentityGuard.title)) {
  ameSections.splice(1, 0, ameIdentityGuard);
}
if (!ameSections.some((section) => section.title === ameReturnedForChill.title)) {
  const overallIndex = ameSections.findIndex((section) => section.title === "Thin does not mean generic");
  const insertionIndex = overallIndex >= 0 ? overallIndex : ameSections.length;
  ameSections.splice(insertionIndex, 0, ameReturnedForChill, ameRoleSection);
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
    intro: ameIntro,
    sections: ameSections,
    closing: [
      "Amexistir's file is still compact, but it no longer has to jump from Lobby paperwork to a current title with the whole middle missing. He states what he needs, the room learns how to meet him there, he comes back looking for somewhere chill, and before long the officers are treating his opinion as worth soliciting. The stable later account is real, the shorthand `Ame` is real, and the older name collision is still somebody else's unsolved problem. The office comes after the person. The four letters do not get to rewrite history."
    ]
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
