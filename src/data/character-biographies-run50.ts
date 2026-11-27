import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { narrativeCharacterBios } from "./character-biographies-narrative";
import { moonNarrativeCharacterBios } from "./character-biographies-moon";
import { renNarrativeCharacterBios } from "./character-biographies-ren";
import { gilliNarrativeCharacterBios } from "./character-biographies-gilli";

function withSection(base: CharacterNarrative | undefined, fallback: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  const source = base ?? fallback;
  return { ...source, sections: [...source.sections, section] };
}

export const run50NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mirage: {
    intro: [
      "Mirage enters UL's visible story through the cross-club front door rather than a title card. In December 2020, the intake line is basically `Revolution NA-S3`, `Don't play DR atm`, and hello; Sou/Ansun answers with `hello fam`. That tiny exchange says more than a fake alliance chart would. Mirage could be socially present in the house even while not actively playing the game that built half the hallway.",
      "The later file is similarly low-key. Mirage does not need a formal job to become recognizable. Music recommendations, game references, lock-screen comments, coffee-shop regret, Spotify Wrapped, and one unexpectedly thoughtful explanation of how learning works accumulate into a person who tends to drop ordinary-life details into moving conversations instead of stopping the room for autobiography."
    ],
    sections: [
      {
        period: "2020–2023",
        title: "The doorway is casual because the social route already exists",
        paragraphs: [
          "Mirage's December 2020 arrival is a useful little cross-club scene precisely because nobody treats it like diplomacy. Mirage self-files with Revolution and a server label while also saying Dragon Raja is not currently being played; Sou/Ansun's answer is simply `hello fam`. That is friendly access language, not proof of a formal alliance, recruiter, sponsorship deal, or exact server-merger map.",
          "The contradiction is the interesting part. Game affiliation is still useful enough to identify the doorway, but active game play is already optional enough that Mirage can say `Don't play DR atm` while continuing into UL's social rooms. By 2023 that makes the later music, QOTD and pop-culture appearances feel less like a comeback and more like the obvious continuation of what the first form already allowed: the game can be off while the person remains socially legible."
        ]
      },
      {
        period: "2021–2023",
        title: "Small recommendations are basically how the biography leaks out",
        paragraphs: [
          "Mirage's tastes arrive in useful little side doors. In Athenaeum, a direct recommendation names `Gone Gold` by Lexie Liu. Later Spotify Wrapped comes in with an apology for being late and is followed by unmistakable Lexie Liu enthusiasm. In another pop-culture exchange, Mirage can distinguish a remembered Jet Set Radio connection from the Spawn cartoon, and later simply wishes Sega would reboot Jet Set Radio. None of this needs to become a permanent fandom job. It is enough to say Mirage has specific taste and remembers the weird little distinctions that make a reference worth correcting.",
          "The same scale applies to a lock-screen comment: `That's actually my lock screen lol`. The image itself has not been inspected, so the wiki is not going to hallucinate what was on Mirage's phone. The useful bit is the instinct to answer somebody else's post with a tiny personal reveal. Mirage's biography keeps growing sideways like that — not through speeches, but through one sentence that suddenly tells the room what song is liked, what game deserves resurrection, or what object has apparently made it onto the phone."
        ]
      },
      {
        period: "2023",
        title: "Knowing things does not mean pretending they arrived by magic",
        paragraphs: [
          "One 2023 answer gives Mirage more interior shape than the taste receipts do. When the easy label `smart` appears, Mirage pushes back on it and describes knowledge as something built through failure, experience, or deliberately studying the thing. It is a modest little philosophy of competence: less `I am naturally brilliant`, more `I learned because I fucked up, paid attention, or went looking`.",
          "That answer sits nicely beside the goofier ordinary-life voice rather than replacing it. Mirage can be reflective about how learning works and still answer a gesture-scale prompt by placing the self at `French`, which is a joke about expressiveness, not nationality evidence. The room gets both versions without a costume change: somebody capable of a real thought who is also perfectly willing to turn a one-to-Italian scale into France."
        ]
      },
      {
        period: "2021–2023",
        title: "Petty Crimes",
        paragraphs: [
          "Mirage worked at a coffee shop for two weeks, which is apparently enough industry experience to make one coffee-related prompt earn a clean `pls no`. A later QOTD adds the personal betrayal that coffee makes Mirage sleepy. Two weeks behind the counter and the product itself refuses to perform its assigned function. Excellent career arc; no employer, profession, medical theory, or lifelong caffeine doctrine required.",
          "Elsewhere the file keeps the lighter house fluency: `@VIPs don't forget to simp!` is a participation nudge, not evidence that Mirage was a VIP or an event officer. Lexie Liu stays the clearest music preference. Jet Set Radio stays the recurring game-shaped itch. The mysterious lock screen stays mysterious until somebody actually inspects the image. Mirage's miscellaneous lore is strongest when it stays this size — specific enough to feel like a person, not inflated enough to become a résumé."
        ]
      }
    ],
    closing: [
      "Mirage is a good example of how extended UL cast becomes real without needing a formal rank. A casual Revolution-side doorway, a `hello fam`, a song rec, a game correction, coffee-shop regret and one thoughtful answer about learning are enough to make the outline recognizable. The social house keeps the person even when Dragon Raja itself is not the current activity."
    ]
  },

  moon: withSection(moonNarrativeCharacterBios.moon, {
    intro: ["Moon notices whether a room is alive, then usually says the useful part out loud."],
    sections: [],
  }, {
    period: "2025–2026",
    title: "The crown is worthless if the room feels empty",
    paragraphs: [
      "Two later game rooms make Moon's social instincts look less like endless helpfulness and more like judgment about where effort is actually worth spending. In Sword of Justice, Moon is perfectly comfortable telling Snow that her power looks bad, taking concrete build advice, and coming back with `Thank youu,snowww for the advice and tips`. There is no need to pretend expertise when somebody else clearly has it. Moon asks, listens, and says thanks.",
      "Where Winds Meet turns the same instinct into a tiny anti-prestige scene. When the game's system drops guild leadership onto Moon, she says she would not be reliable and thinks of Shiki instead. Later the branch gets so empty-feeling that Moon says, flatly, `I left the guild due to loneliness`; when the system keeps boomeranging the crown back, `I yeeted myself out of there`. The title itself has basically negative persuasive power. If the room feels dead, being in charge of the dead room does not magically make it worth staying.",
      "That sharpens an older Moon pattern without making her responsible for everybody's social weather. She notices atmosphere, keeps rituals moving when she wants the room alive, and can be extremely attentive to other people's presence. But attention is not martyrdom. Moon can ask the person who knows, hand a mechanic to somebody she thinks is more reliable, and leave an empty branch instead of treating a hollow crown like an achievement. Shiki's handoff is game-specific trust, not a secret UL succession chart; the whole leadership sequence belongs to WWM's mechanics, not Underlords governance."
    ]
  }),

  ansun: withSection(narrativeCharacterBios.ansun, {
    intro: [
      "Ansun / Souta / Sou is one of UL's current Officers and one of the people most capable of turning being publicly exposed into a personal branding opportunity."
    ],
    sections: [],
  }, {
    period: "2020–2023",
    title: "Shame goes in; Fame comes out",
    paragraphs: [
      "The Wall is supposed to embarrass people. Ansun keeps treating that as a suggestion. In 2020 the distinction is already disposable: `shame fame, same thing 😎`. In 2021, when Baby Lyssa jokes about overtaking his Wall appearances, Sou encourages the competition and upgrades the room on the spot: `BET its our wall of FAME baby`. By 2023 he has gone from surviving the joke to claiming real estate: `no shame all fame`, `this is MY wall`.",
      "Moon answers that last one with `This is your room in ul then`, which is exactly the kind of peer response that tells you a bit has become recognizable without turning it into a formal title. Ansun then pushes the mythology all the way to `the reason why it says wall of fame is because of me ❤️ you guys have shame`, and when Moon points out that *shame* is still literally in the name, he solves the problem by assigning it to everybody else: `I put shame in there for YOU`; `you guys made it fame for ME`.",
      "That boast is not rename provenance. It is better used as character evidence. Across several years Ansun repeatedly refuses the Wall's embarrassment economy and treats visibility as clout. The joke works because the room keeps feeding him enough exposure to sustain it, and because he keeps answering exposure as though somebody just renewed his celebrity contract. Being caught is supposed to lower your prestige. Sou's recurring solution is apparently to raise the price."
    ]
  }),

  ren: withSection(renNarrativeCharacterBios.ren, {
    intro: ["Ren turns receipts into social memory and, occasionally, food opinions into wearable evidence."],
    sections: [],
  }, {
    period: "January 2022",
    title: "Petty Crimes: mint chocolate has merch now",
    paragraphs: [
      "Dainyamite says `mint choco is good` and Ren answers so enthusiastically that he has to check whether she is being sarcastic. She is not. `ITS NOOOT!! I love mint choco chip`, Ren insists, and then casually reveals that Gilli had already converted the preference into birthday merchandise: `Gilli got me a mint choco chip socks for my b-day`.",
      "The socks are a wonderfully small relationship receipt. Ren's taste is specific enough to be remembered, and Gilli apparently knew it well enough to make the birthday gift itself part preference and part bit. It does not need a grand friendship label to mean anything. Somebody noticed the stupid food opinion and bought the socks. In a server that can preserve a screenshot for years, apparently affection also comes with inventory."
    ]
  }),

  gilli: withSection(gilliNarrativeCharacterBios.gilli, {
    intro: ["Gilli is one of the people whose care often arrives disguised as practical nonsense."],
    sections: [],
  }, {
    period: "January 2022",
    title: "Remember the preference; weaponize it as a birthday present",
    paragraphs: [
      "A mint-chocolate argument gives Gilli one of the smallest and nicest care receipts in the file without Gilli even being the person telling the story. Ren is defending mint choco chip and says Gilli got her mint-choco-chip socks for her birthday. In context, the gift was very likely keyed to a preference Gilli already knew about — useful enough to wear, stupid enough to be funny, specific enough that Ren brings it up while finding another mint-chocolate ally.",
      "That is a good scale for Gilli relationship writing. Not every act of attention needs to become a declaration. Sometimes care looks like remembering which controversial ice-cream flavor your friend will defend and making sure the birthday evidence can go on their feet."
    ]
  }),
};
