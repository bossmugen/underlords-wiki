import { vipCharacterBios } from "./character-bios-vip";

export const deepVipCharacterBios = {
  rich: {
    dek:"Amaurot leader, UL VIP, interclub switchboard, and the man whose S10 bridge-building eventually shrank into people hanging out in his digital kitchen.",
    overview:[
      "Rich / DragonRich is an UL VIP and the former leader of Amaurot, one of S10's opening-era top three clubs. That old rank is external-club history, not a UL command appointment; the VIP shelf is exactly what lets the wiki preserve both facts without pretending Amaurot leadership transferred into Underlords.",
      "The 2020 record catches Rich doing something more useful than merely carrying a title. Snow asks him whether anyone else from Amaurot wants to join, treating him as the obvious contact point. Five days later Mugen advertises an S10-wide channel DragonRich created. Before any later merger, people were already moving through doors Rich stood near.",
      "By late 2024 the scale is almost comically domestic. Richard's Corpse is full of other people reacting to Rich apparently cooking, talking, streaming, and showing games while Rich himself leaves little text. The old interclub bridge has become a living room: people still cross into the space because Rich is there."
    ],
    history:[
      {date:"April 2020",title:"Amaurot contact point",text:"Snow asks Rich whether anyone else from Amaurot wants in. The word 'else' makes the social assumption visible: Rich is already the person UL asks when it needs to reach that neighboring club."},
      {date:"April 2020",title:"A room above club boundaries",text:"Mugen announces that DragonRich, identified as Amaurot Leader, created an S10 channel for anyone interested. It proves cross-server infrastructure, not the cause or date of the later merger."},
      {date:"Later",title:"Amaurot merges under UL",text:"The merger is user-confirmed canon. Rich remains filed as VIP because his outside-club lineage should not be rewritten as a UL Officer career."},
      {date:"October–December 2024",title:"Richard's Corpse becomes a living room",text:"Sye reacts to an apparent cooking/hangout session, Momo says Rich's voice startled her awake, and Tae considers downloading a game because Rich is showing it. Sparse text from Rich does not mean sparse presence."}
    ],
    characterNotes:[
      {title:"Make a room; people cross into it",text:"A useful continuity from S10 bridge-building to late voice-room hosting. The scale drops from interclub infrastructure to digital-kitchen hanging out; the social motion survives."},
      {title:"Voice-channel data trap",text:"Rich can be socially central while barely typing. The surrounding text is evidence of attention organized around him."}
    ],
    roleNotes:["Primary shelf: VIP.","Former Amaurot leader; external-club context only."],
    canonNotes:["Rich = DragonRich. Ricochet / dragonrichard is a separate unresolved identity and must not be merged into Rich without a direct bridge.","Amaurot leadership does not transfer into UL command.","Rich creating an S10 channel does not prove that channel caused the later merger.","Sparse VC text is not evidence of sparse VC participation."]
  },

  zyrcant: {
    ...vipCharacterBios.zyrcant,
    overview: [
      ...vipCharacterBios.zyrcant.overview,
      "The January 13, 2021 Lobby check-in is even more useful read as two adjacent sentences rather than a dry identity join. Akariel says `i was in amaurot if thats still around if not idk what they merged too`, then nine seconds later, `my ign is still Zyrcant and im 23`. The old club structure is already fuzzy enough to require a caveat; the name is not. Institution uncertain, identity immediate. That is a cleaner transition scene than pretending the wiki can reconstruct every merger date from later role metadata.",
      "Six months later Zyrcant turns up in a very different kind of receipt: the July 15 announcements congratulate Shinn, Nelphie, and Zyrcant as the top three in UL's Kahoot pop quiz, and the Akariel account is among the `yay` reactions on the result. It is not a command scene at all, which is exactly why it helps. The former Amaurot deputy is not preserved only as somebody's old deputy; she is visibly participating in the house's stupid little programming on its own terms."
    ],
    history: [
      { date: "January 13, 2021", title: "The club is fuzzy; the name is not", text: "Akariel says she was in Amaurot but is unsure whether it still exists or what it merged into, then immediately writes `my ign is still Zyrcant`. The pair is a direct self-authored identity bridge without requiring the wiki to infer merger chronology." },
      { date: "July 15, 2021", title: "Top three in the Kahoot, because apparently this is governance now", text: "An announcement names Shinn, Nelphie, and Zyrcant as the top three winners of an UL Kahoot pop quiz. The Akariel account also reacts `yay` to the result. This is participation evidence, not proof of some universal competitive personality." },
      ...vipCharacterBios.zyrcant.history
    ],
    characterNotes: [
      ...vipCharacterBios.zyrcant.characterNotes,
      { title: "Her file survives the collapse of the old org chart", text: "The January Lobby pair is unusually neat: Amaurot's exact institutional state needs qualification while `Zyrcant` does not. The person is easier to follow than the organization around her." },
      { title: "Do not preserve her only as Rich's former deputy", text: "Kahoot, Voice Challenge, and the tackling joke matter because they are ordinary UL participation. They keep Zyrcant from becoming a footnote to somebody else's leadership biography." }
    ],
    claims: [
      { text: "On January 13, 2021, the akariel_star account said `i was in amaurot if thats still around if not idk what they merged too` and nine seconds later `my ign is still Zyrcant and im 23`.", evidence: "lobby", date: "2021-01-13" },
      { text: "On July 15, 2021, an UL announcement named Shinn, Nelphie, and Zyrcant as the top three winners of a Kahoot Pop Quiz; the Akariel account appears among the `yay` reactions on the result.", evidence: "club-only-announcements", date: "2021-07-15" }
    ],
    canonNotes: [
      ...vipCharacterBios.zyrcant.canonNotes,
      "Akariel's uncertainty about Amaurot's then-current state is preserved as her contemporaneous wording; the wiki does not use it to manufacture an exact merger date.",
      "One Kahoot result supports participation in that event, not a global claim that Zyrcant is inherently or always competitive."
    ]
  },

  woohyuk: {
    ...vipCharacterBios.woohyuk,
    overview: [
      ...vipCharacterBios.woohyuk.overview,
      "A fresh Wall pass adds a useful warning label to the character file. On December 31, 2020, Lilly posts an attachment and tags Woohyuk; thirty-four minutes later Woohyuk writes `Single forever`. The attachment has not been visually inspected here, and the surviving text does not prove what prompted the line. So the wiki can preserve the self-authored joke without converting it into a permanent relationship-status fact, a rejection scene, or evidence about Lilly. This is exactly the kind of tiny receipt that gets dangerous when somebody wants a character page to be juicier than the source is.",
      "The same Wall archive is full of Woohyuk using absurdly specific little delivery tags — `In corpse voice uwu` after Gilli tags him in April 2021, for example — but the surrounding exhibit is incomplete. That belongs in the bio as texture with the brakes still attached: he is comfortable annotating how a line should sound; we do not know enough from the surviving text to reconstruct the bit he was voicing."
    ],
    history: [
      ...vipCharacterBios.woohyuk.history,
      { date: "December 31, 2020", title: "Single forever, context pending", text: "After Lilly posts an uninspected attachment and tags him, Woohyuk later writes `Single forever`. The line is safe to quote; the cause and any enduring relationship meaning are not." },
      { date: "April 21, 2021", title: "In corpse voice uwu", text: "Gilli tags Woohyuk on the Wall; Woohyuk answers `In corpse voice uwu`. The phrasing is authored texture, while the missing surrounding exhibit keeps the actual voiced joke unresolved." }
    ],
    characterNotes: [
      ...vipCharacterBios.woohyuk.characterNotes,
      { title: "He will occasionally provide stage directions to his own nonsense", text: "`In corpse voice uwu` is useful because Woohyuk is not merely delivering a line; he is telling the room how to hear it. One surviving example is enough for texture, not enough to invent a grand performance persona." }
    ],
    claims: [
      { text: "On December 31, 2020, Lilly posted an uninspected attachment and tagged Woohyuk; later that hour Woohyuk wrote `Single forever`. The visible text does not establish what the attachment showed or a lasting relationship status.", evidence: "wall", date: "2020-12-31" },
      { text: "On April 21, 2021, after Gilli tagged Woohyuk in the Wall channel, Woohyuk wrote `In corpse voice uwu`; the surrounding exhibit remains incomplete.", evidence: "wall", date: "2021-04-21" }
    ],
    canonNotes: [
      ...vipCharacterBios.woohyuk.canonNotes,
      "`Single forever` is preserved as a dated self-authored line, not treated as a permanent relationship-status fact or as proof about Lilly.",
      "`In corpse voice uwu` does not justify reconstructing the unseen Wall exhibit or assigning a performance role."
    ]
  }
} as const;
