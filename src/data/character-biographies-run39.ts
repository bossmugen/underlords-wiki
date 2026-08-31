import type { CharacterNarrative } from "./character-biographies-narrative";
import { narrativeCharacterBios } from "./character-biographies-narrative";
import { richNarrativeCharacterBios } from "./character-biographies-rich";
import { run42NarrativeCharacterBios } from "./character-biographies-run42";
import { run43NarrativeCharacterBios } from "./character-biographies-run43";

const gabu = narrativeCharacterBios.gabu;
const anayss = narrativeCharacterBios.anayss;

export const run39NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...run42NarrativeCharacterBios,
  ...run43NarrativeCharacterBios,
  ...richNarrativeCharacterBios,

  woosung: {
    intro: [
      "Woosung / WOO is a former ScarletMoon leader, UL VIP, permanent Platelet, and one of the people whose friendship with Mugen survives every attempt by UL's vocabulary to make the relationship sound normal. Woo's own serious description is straightforward: close friend, older-sister-like guide, somebody she can talk to about anything. UL's 2020 version of the same relationship is `mugs is my daddy granny`.",
      "That collision is very Woosung. Her surviving voice likes compact verdicts and abrupt register changes. She can point at Anthos with a fake kill command and post a love/party GIF seconds later. She can give somebody practical comfort advice and then spend the next several messages objecting to the accusation that this means she cares. The feeling usually arrives before the disclaimer paperwork."
    ],
    sections: [
      {
        period: "2020",
        title: "Murder command, love GIF, no transition",
        paragraphs: [
          "On September 30 WOO types `eli kill @ANTHOS`. The bot performs its melodrama. About twenty-four seconds later WOO throws a love/party Tenor GIF into the same room and keeps the sequence moving. Nobody needs a bridge sentence explaining how mock violence became affection-coded media because the whole thing lives inside shared social play.",
          "That tonal range is more revealing than either object by itself. Woosung is not trapped in one presentation. Sharp and affectionate can occupy the same minute without becoming evidence of literal hostility, romance, or some hidden relationship rank. The room already knows how to read the switch."
        ]
      },
      {
        period: "December 2020 → May 2023",
        title: "Mugs is my daddy granny. Later: older-sister-like guide.",
        paragraphs: [
          "December gives Mugen one of UL's better impossible family labels: `mugs is my daddy granny`. Two generations, one person, zero useful genealogy. The joke works because fake-family language is allowed to stack until biology gives up.",
          "Years later a QOTD lets Woo describe the bond without house grammar doing cartwheels. Mugen is a close friend, a grown-up version of herself, an older-sister-like guide, somebody she can talk to about anything, and one of her earliest close Dragon Raja relationships. The serious answer does not cancel `daddy granny`; it explains why the joke had enough familiarity underneath it to land."
        ]
      },
      {
        period: "March–April 2023",
        title: "The verdict comes fast; the care comes first",
        paragraphs: [
          "March catches the compact delivery style intact: `NOBU`, then less than two seconds later, `TRAITOR`. The archive does not safely establish the alleged betrayal, and it does not need to. The joke is the speed of the ruling. Woo can point at the defendant and issue the verdict before the court has found the paperwork.",
          "April turns the same economy toward care. WOO gives useful comfort advice. Moon notices the emotional inconvenience and says, essentially, ah, so you care. Woo answers `shut up moon`, denies being tsun, and eventually lands on `I don't not care about anyone here`. Unfortunately for the defense, the helpful act already happened. The double negative is just the sound of somebody trying to preserve a tougher presentation after the room has caught the soft part in 4K."
        ]
      },
      {
        title: "Petty Crimes",
        paragraphs: [
          "Can apparently compress Mugen into `daddy granny` without grammatical injury. Has used `NOBU` → `TRAITOR` as a complete courtroom procedure. Once proved that a correctly timed love GIF can arrive less than half a minute after a fake murder command. Her best defense against being accused of caring remains `I don't not care about anyone here`, which is not how acquittals work."
        ]
      }
    ],
    closing: [
      "Woosung's file works because the contradictions are not actually contradictions to the people around her. The room is comfortable enough to understand the kill command as play, the love GIF as part of the same play, the care as real enough to tease, and the denial as another layer of the relationship rather than a retraction. Woo does not narrate every transition. Usually she assumes everybody already knows."
    ]
  },

  eos: {
    intro: [
      "Eos is one of those UL files where account continuity, game labels, and the social person refuse to line up into one tidy onboarding card. The same stable Discord account appears as EnyoCal / UL in late 2020 and Eos / Deviations in early 2021; months later Eos is counting down a computer-science graduation, trading Wall ammunition with Marian Kage, and eventually saying outright that Gilli is the reason they joined Underlords. The account trail is stable. The exact game-club transition between those labels is not, so the wiki keeps the person and refuses to fabricate the paperwork.",
      "Run 44 adds two smaller pieces that make Eos feel less like a sequence of role forms. One is game shorthand: `Context: childe boss fight.............. @Marian Kage`, which is probably Genshin / Childe context and deliberately not more than that while the image remains uninspected. The other is a little language migration. In May Eos is `so tired that i am a dead corpse`; by September two wheeze emotes end in `dedddd`. The word has moved from self-description into reaction punctuation. One year, one recurring register, no permanent corpse diagnosis required."
    ],
    sections: [
      {
        period: "December 2020 – April 2021",
        title: "One account, two game labels, one increasingly visible person",
        paragraphs: [
          "The stable account first survives Lobby paperwork as EnyoCal with UL in the club field, then returns through another Bouncer surface as Eos with Deviations. Those scenes prove account continuity and changing labels, not an exact leave/rejoin chronology. By April the paperwork gives way to ordinary life: Eos says graduation is coming in June and names computer science. That is enough to give the file a real-world edge without inventing a school, degree title, employer, or later career.",
          "The useful undercurrent is that the archive stops needing intake fields to recognize Eos. Once the person is socially embedded, later scenes work on compressed references — one boss fight, one corpse joke, one tag to Marian — because the room already knows what kind of conversation it is in."
        ]
      },
      {
        period: "May–September 2021",
        title: "Dead corpse becomes `dedddd`",
        paragraphs: [
          "On May 2 Eos writes `so tired that i am a dead corpse`. Mugen replies directly with a `pretty corpses` Tenor, and Eos later returns as `this ded corpse always around for the taking`. The pluralizing reply is the social turn: one person's exhausted melodrama gets widened into house language and Eos accepts the new label from inside the joke.",
          "September gives a smaller echo: two `Fat_Wheeze` emotes, then `dedddd`. This time Eos is not explicitly describing personal exhaustion. `ded` has become a compact reaction to being socially finished off. That recurrence is enough for a 2021 death-language register and not enough for an all-years personality law or an origin claim for every later UL resurrection joke."
        ]
      },
      {
        period: "August 2021 – February 2022",
        title: "Childe boss fight, Marian Kage, and the world's least efficient prosecutor",
        paragraphs: [
          "Eos's August Wall caption is almost aggressively compressed: `Context: childe boss fight.............. @Marian Kage`. Childe is very likely the Genshin boss reference. The sealed image still does not tell us who was playing, whose account appears, what the fight outcome was, or who made or captured the image. What the sentence safely shows is shared-game context doing most of the explanatory work. Eos points at the boss fight, points at Marian, and apparently considers the case adequately briefed.",
          "That fits the broader Marian/Eos Wall rhythm. Marian repeatedly complains that Eos is too mild to shame him properly, threatens to find material every hour, and eventually self-files because his designated prosecutor is not prosecuting. Then February 2022 produces the perfect failure mode: Marian asks why Eos is getting him shamed and Eos answers that they typed in the wrong account. After months of allegedly insufficient evidence warfare, reciprocal exposure finally happens by mistake. The account mistake stays scene-local; nobody gets a password-sharing theory out of it."
        ]
      },
      {
        period: "April 2022",
        title: "Gilli is the reason; mashed potatoes are the lie",
        paragraphs: [
          "Two Truths, One Lie gives the cleanest relationship receipt in the file. Eos includes `Gilli is my reason for joining underlords` and later confirms the mashed-potatoes statement was the lie. That makes Gilli an explicit entry-relationship reason in Eos's own words.",
          "It still does not tell us who clicked an invite, who had admission permission, whether Discord or game-club membership came first, or how long Eos knew Gilli beforehand. The sentence is better left human-sized: when asked to hide one lie among two truths, Eos assumes `Gilli is my reason` belongs on the truth side of the page."
        ]
      }
    ],
    closing: [
      "Eos's archive is strongest where the formal trail gives way to shorthand. EnyoCal becomes Eos without the transition scene surviving. A computer-science deadline becomes ordinary conversation. `dead corpse` becomes `dedddd`. A whole game disaster can be captioned `childe boss fight` plus Marian's name. The room apparently knew the rest.",
      "And when the wiki needs the cleanest statement of why Eos was there at all, Eos supplies it personally: Gilli. Mashed potatoes take the fall instead."
    ]
  },

  hamittey: {
    intro: [
      "HamitteY / Wichita is older UL than the later Wall deli counter makes him look. Wichita is HamitteY's direct Dragon Raja IGN, and the older archive places that name in UL's earliest-member layer. The January 2021 Lobby welcome is therefore a Discord-door scene, not the beginning of his relationship with the group. By February he can identify ShiyaX as `the auuuuu guy`, which is exactly the sort of old-house fluency a bare message count misses: the recurring noise is already enough to name the person.",
      "Run 44 sharpens the much stranger middle of the file. On one November day Anayss says `Unsugar hami`, Sycee produces `Salty Ham`, Snow escalates to `CHEAP HAM!!!`, and Noether eventually returns with `Unsugar hamihami`. Nearby `cheap red packets` and `50 gold` language makes a game-resource / price joke the probable fuel beneath the label machine. Hami's contribution is not a formal correction. He answers the pile-on with cat emotes and lets the room keep packaging him."
    ],
    sections: [
      {
        period: "2020 – early 2021",
        title: "Wichita was here before the deli labels",
        paragraphs: [
          "HamitteY directly self-files Wichita as his Raja name, and Wichita belongs to the early-member layer. That pushes his social history left of the 2021 Discord intake without inventing an exact admission date, rank, or Staff appointment. When the Bouncer later welcomes him, the software is catching a door event that the human relationship has already outrun.",
          "The February `get the auuuuu guy` line is tiny but revealing. Hami does not ask who ShiyaX is; he points at the member through a sound the house already associates with him. It does not prove Hami coined AUUUUU or rank their closeness. It proves the recurring bit was usable shorthand in Hami's mouth."
        ]
      },
      {
        period: "November 2, 2021",
        title: "The Wall runs Hami through the deli counter",
        paragraphs: [
          "The label cascade is almost industrial. `Unsugar hami` becomes `Salty Ham`, then Snow arrives with `CHEAP HAM!!!`, then Noether circles back to `Unsugar hamihami`. The nearby cheap-red-packet / `50 gold` language makes an economic joke the likely engine, but the source image is still uninspected, so the wiki does not invent the exact game mechanic behind it.",
          "What is already clear without the pixels is the social ease. Four people keep revising Hami's product label in public; Hami answers from inside the joke with cat reactions rather than trying to establish a canonical flavor. The names stay scene language, not permanent aliases. The funny character beat is that Hami's own name has become communal packaging material and he apparently understands the assignment well enough to emote through quality control."
        ]
      },
      {
        period: "December 2021 – February 2022",
        title: "When context arrives, use the emergency exit",
        paragraphs: [
          "Across three Wall dates Hami reuses the same Peepo walking-out-the-door GIF. The February use is especially clean: Noether tries to explain the scene with `Someone want eat hami, i only said that , context pls`; twenty-eight seconds later Hami posts the exit-door GIF. No counterargument. No revised filing. Due process has arrived and the defendant has left the building.",
          "The recurrence is enough to call the GIF reusable defense language and not enough to say Hami always fled every embarrassing scene. It also fits the deli episode beautifully: when the room renames him, he reacts from inside the packaging; when somebody tries to explain why he is in evidence, sometimes the only contribution needed is a tiny person walking out a door."
        ]
      },
      {
        period: "July 2022",
        title: "Noether and Hami become a renewable Wall commodity",
        paragraphs: [
          "By July Anayss tags Noether and HamitteY together and thanks them for `so much material`. Ansun immediately adds another absurd Hami line and Noether keeps the exchange moving. The exact surrounding images stay attribution-fenced, but the peer recognition is explicit: this recurring interaction has become dependable Wall fuel.",
          "That does not create a duo appointment, romance, or claim that either person authored every exhibit. It gives the relationship a safe public mechanism instead: by then the room expects Noether/Hami interaction to produce evidence. One of UL's earliest members has somehow become a renewable commodity, available in unsugar, salty, cheap, dessert-dispute, and emergency-exit editions."
        ]
      }
    ],
    closing: [
      "Hami's file is a nice reminder that longevity does not have to look solemn. The early layer is Wichita and house fluency. The later layer is a group of adults turning his name into a deli-price system and thanking him for the resulting screenshot supply.",
      "The labels are not aliases. The price jokes are not finances. The fake food economy is not biography. The real character evidence is how comfortably Hami stays inside the bit — sometimes with a cat, sometimes with a Peepo already halfway out the door."
    ]
  },

  gabu: {
    ...gabu,
    sections: [
      ...gabu.sections,
      {
        period: "December 2024 – July 2025",
        title: "One last login, for the funny moments",
        paragraphs: [
          "By the end of 2024, Gabu says she has stopped playing Dragon Raja but that everybody remains in her heart and she is happy to call them family. The next surviving turn is not a grand return to the game. In July 2025 she says she will log in `just to take one last look, to remember the funny moments`.",
          "That phrasing is almost aggressively Gabu. The system is no longer the point; the people and the stupid things that happened inside it are. She is not trying to preserve every mechanic or restart a competitive era. She wants one more walk through the old place because memory has attached itself to the map."
        ]
      },
      {
        period: "August 2026",
        title: "The human answer key gets remembered back",
        paragraphs: [
          "During a favorite-memory thread, Oyasumi remembers Gabu as the person who `knows all the answers`, while Mugen says everybody used to follow Gabu through the repeated old activity instead of learning it themselves. Gabu comes back the next morning saying she had been proud of her memory.",
          "The old activity itself remains unresolved in this handoff, so the biography does not invent one. The relationship mechanism is enough: the room remembers outsourcing knowing things to Gabu, and Gabu remembers being quietly pleased that she could hold that much of the map in her head."
        ]
      }
    ],
    closing: [
      ...(gabu.closing ?? []),
      "The later Dragon Raja scenes put a gentler finish on the same arc. Gabu becomes somebody whose usefulness is remembered by other people, then returns to the old game once more not to reclaim the system but to revisit the funny moments. The house remembers her as an answer key. She remembers the house as a place worth one last look."
    ]
  },

  anayss: {
    ...anayss,
    sections: [
      ...anayss.sections,
      {
        period: "November 2021",
        title: "Ty for leading us",
        paragraphs: [
          "After the Club Showcase finishes on November 30, Gabu tells Anayss, `Ty for leading us`. It is peer recognition of operational leadership in a real event scene, not an appointment ledger. The wording matters because it names what Anayss was doing before the current org chart can tempt us into backdating a formal title.",
          "That distinction suits her file. Anayss's archive keeps showing leadership as a verb before it becomes a noun: orient somebody, redirect a room, get the event through the finish line, tell people what they can change for themselves. The praise is small, but it catches the behavior in motion."
        ]
      },
      {
        period: "April 2023",
        title: "Chaos, with an exit hatch",
        paragraphs: [
          "During nickname-change chaos, Anayss reminds members that if a server nickname makes them uncomfortable they can change it back themselves instead of waiting for somebody else, then ends the intervention with `:SipTea:`. The sentence is half boundary, half accessibility note, delivered without leaving the joke register.",
          "That is the useful character beat. Anayss does not need everybody to stop being ridiculous before she can make the ridiculous thing safer to participate in. The preferred version of chaos includes an obvious door out."
        ]
      }
    ]
  }
};