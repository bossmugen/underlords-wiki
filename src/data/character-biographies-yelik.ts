import { narrativeCharacterBios, type CharacterNarrative } from "./character-biographies-narrative";
import { noetherNarrativeCharacterBios } from "./character-biographies-noether";

// Noether follows Yelik in the Game Officer shelf. Register the dedicated
// person-first narrative here so the shared Game Officer registry receives it
// before its older themed fallback object is consulted.
Object.assign(narrativeCharacterBios, noetherNarrativeCharacterBios);

export const yelikNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  yelik: {
    intro: [
      "Yelik's surviving file is thin on offline biography but not on social texture. The archive does not safely give a profession, hometown, age to publish as current, pronouns, or a broad catalog of hobbies. What it does give is a person who is already familiar enough for Mugen to joke about finding Yelik in her Dragon Raja garden before the clean Lobby card appears, then repeatedly becomes most legible when some ridiculous game opportunity has a clock attached to it. Yelik's surviving messages are often compact because the useful part is concrete: what appeared, where it is, and how long everybody has before it disappears.",
      "That makes talking to Yelik in the best-preserved scenes feel less like receiving a speech and more like being handed a live coordinate. A florist exists for twenty minutes. Another has five minutes left. A pet event is open now. A fish has somehow turned three days of effort into a dispute with the game's fishing-rod logic. None of that proves a universal personality type, and one garden joke does not make Yelik a real-life horticulturist. It does show a recurring social presence: notice something actionable, compress it, pass it on before the moment is gone. The current Game Officer and Parterre Gardener titles make more sense after that person has been established, not before."
    ],
    sections: [
      {
        period: "May 2022",
        title: "The archive meets Yelik after the room already knows Yelik",
        paragraphs: [
          "The first clean chronological problem is useful because it prevents the biography from mistaking paperwork for birth. On May 12, 2022, Mugen writes on the Wall, `Yelik litrally spending more time in my garden than I do :Fat_Wheeze:`. There is no title in the sentence and no explanation of who Yelik is. Mugen simply points at a recurring enough in-game presence to make it a joke. The misspelled `litrally` and the wheeze emote keep the line in ordinary friend-chat territory; this is teasing about somebody being in the space, not an appointment announcement for Parterre Gardener.",
          "Six days later MEE6 produces the much more official-looking version of reality: `Hey @Yelik, welcome to Underlords!` and asks for role-assignment information. Souta follows with `Hiii Yelik! Welcomeeee! Glad you could make it!`, the server map, rules and Biodata, but adds `if you need a refresher!` before asking Yelik to fill out the information anyway. That one word, `refresher`, matters more than the bot's generic welcome. Together with the garden joke six days earlier, it tells us the safe story: May 18 is a Lobby checkpoint for the stable `yelik.1103` account, not a defensible first-ever entrance into Yelik's UL story.",
          "The difference between the machine and the humans is small but revealing. The Bouncer sees a form to complete. Souta leaves room for prior knowledge. Mugen, days earlier, is already talking as if Yelik wandering around her garden is ambient enough to be funny. We still do not know the true first meeting, the exact membership date, or the pre-May path into the group. The biography does not need to fake one. The archive begins with recognition already in progress."
        ]
      },
      {
        period: "June 2022",
        title: "The useful sentence gets a clock",
        paragraphs: [
          "By late June, the committed archive dossier starts catching Yelik in a much more characteristic register. A Neon Chrysanthemum florist appears in Chizuru; Yelik gives the coordinates and says it is there `only for 20 minutes`. A Fluoro Lavender florist appears in Tokyo; Yelik gives another location and says there are `only 5 minutes more`. The messages do not spend time selling the event. They assume that if the reader wants the thing, the reader mainly needs three facts: what, where, how long.",
          "That compression is the human detail. Yelik is not writing like an event poster or trying to make a performance out of knowing something first. The clock is already doing the dramatic work. `Twenty minutes` creates urgency; `five minutes more` creates the feeling that somebody reading the message should probably stop typing and move. Even the coordinates matter socially because they turn private discovery into something another person can immediately use. The value of the message is transferred rather than hoarded.",
          "It would be easy to take the later Parterre Gardener title and backfill an entire flower-loving personality here. The evidence does not support that. These are Dragon Raja florists, not a confession of real-life gardening passion. What is supported is narrower and more distinctive: Yelik pays attention to ephemeral game-state information and communicates it in a form optimized for somebody else to act on it."
        ]
      },
      {
        period: "2022–2023",
        title: "When the opportunity keeps disappearing, Yelik keeps pointing",
        paragraphs: [
          "The committed dossier records the same practical rhythm continuing through limited-time pet-event notices across 2022 and into 2023: the event is open, it is up now, there are seven minutes left, it has opened for a second time. Several of those notices receive thanks or heart-style reactions. The reactions are not a popularity meter and the `@Staff` audience is not a hidden promotion record. They matter only at the scale the scene earns: people were receiving information that was meant to be useful while it was still useful.",
          "This is also a place where the archive demands restraint because event-alert language is shared by several UL members. Anayss and Gilli, for example, also post pet-event notices in the recovered announcement corpus. Yelik therefore does not own the behavior category and the wiki does not invent an Event Director office around it. What belongs to Yelik is the locally attributed run preserved in the dossier, especially when read alongside the florist alerts: repeated attention to short windows, coordinates, and immediate action.",
          "In April 2023 Yelik posts `The SSS for the event, not is all @Staff`, edits the message, and follows with image attachments. The current character pass does not describe those images because they have not been visually verified for Yelik's biography. The useful textual beat is smaller: Yelik notices that the first statement needs correction or supplementation and changes it rather than letting the incomplete version stand. That is not enough to diagnose perfectionism or make a sweeping claim about personality. It is simply another moment where the information itself matters enough to update."
        ]
      },
      {
        period: "August 2023",
        title: "The system finally makes Yelik the one who needs help",
        paragraphs: [
          "The funniest surviving Yelik scene flips the direction of usefulness. On August 10, 2023, Yelik describes spending three days trying to catch the last fish, only to be told that a better rod is required while already using the new rod. The target is a shark in Siberia. The scene needs very little editorial assistance. Three days is already a measure of stubborn persistence in this one task; `you need a better rod` versus `I am already using the new one` is a perfect little bureaucratic contradiction; and then the target being a Siberian shark gives the whole failure unnecessary grandeur.",
          "What makes the scene valuable for biography is not that it proves Yelik is a lifelong fishing fanatic. It does not. It is one game problem. The human beat is that the person who has spent a year turning confusing temporary game states into clean instructions for other people is now stuck inside a system that refuses to produce a clean instruction back. In the florist scenes Yelik can say where to go and how long remains. Here Yelik has already done the work, already has the equipment, and the game's answer still fails to resolve the problem. The frustration lands because the earlier archive has made Yelik's preference for actionable information visible.",
          "There is also no need to inflate the persistence into virtue mythology. Three days spent chasing the last fish can be dedication, annoyance, sunk-cost nonsense, or all three in that moment. The wiki keeps the duration and the contradiction, then lets the reader hear the comedy without pretending to know Yelik's private motive."
        ]
      },
      {
        period: "Current canon",
        title: "Game Officer and Parterre Gardener come after the person",
        paragraphs: [
          "The current corrected roster places Yelik on the Game Officer shelf and carries Parterre Gardener as a specialist appointment. Those roles are canon. Their appointment dates are not. Export-time role arrays cannot be turned into chronology, and Mugen's May 12 garden joke cannot be retroactively promoted into a formal appointment receipt merely because the later title happens to make the joke look prophetic.",
          "The roles are still meaningful because they echo behavior the archive already showed before the biography asks the titles to explain anything. Game Officer fits a record in which Yelik repeatedly notices game-state information that other people can use. Parterre Gardener has an almost comically neat visual rhyme with Mugen already complaining about Yelik occupying her garden. But the rhyme remains a rhyme until a dated appointment receipt appears. UL is perfectly capable of giving somebody a title that sounds like an old running bit; that does not authorize historians to invent the ceremony.",
          "Yelik's relationship map remains modest. Mugen supplies the clearest peer tease in the garden line. Souta appears as practical front-door support during the May Lobby checkpoint. Reactions and thanks on later alerts show that people received the notices, not that any of them must be Yelik's closest friends. The archive currently cannot support a ranked intimacy map, so the biography refuses to manufacture one."
        ]
      }
    ],
    closing: [
      "Yelik is therefore a good example of why a thinner file still needs a biography rather than a role card. The archive cannot tell us what Yelik does for work, where Yelik grew up, what Yelik fears, what music lives on repeat, or what a long private conversation with Yelik sounds like. It can tell us that the group already recognizes Yelik before the clean door record; that Mugen can tease Yelik about practically living in her garden; that Yelik repeatedly communicates disappearing game opportunities as coordinates and countdowns; and that, when Dragon Raja finally turns the information problem back on Yelik, a Siberian shark manages to eat three days of effort while the game insists on a rod Yelik already has.",
      "That is enough to make the current roles feel attached to a person rather than substituted for one. Yelik's surviving presence is compact, practical, and unusually sensitive to the difference between information that exists and information somebody can actually use in time. The rest stays unresolved on purpose. A thin archive is not permission to add a thicker imaginary person."
    ]
  }
};
