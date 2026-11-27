export type NarrativeSection = {
  period?: string;
  title: string;
  paragraphs: string[];
};

export type CharacterNarrative = {
  intro: string[];
  sections: NarrativeSection[];
  closing?: string[];
};

export const narrativeCharacterBios: Record<string, CharacterNarrative> = {
  mugen: {
    intro: [
      "Mugen is the founder and permanent Boss of Underlords. That title is the endpoint of the introduction, not the beginning of the story. Before UL had a Discord, a Wall, a judiciary, a birthday calendar, or a strip-club bouncer, Mugen was already moving through overlapping online circles: an older online-family network from another game, and the Dragon Raja social world on NA/Global Server 10. Underlords grows out of both.",
      "The important thing about her arc is that leadership does not make her more distant as the group grows. The opposite happens. The larger UL becomes, the more the archive catches her doing ordinary house labor: greeting people, assigning access, pointing at rooms, organizing events, crediting other people's work, writing boundaries in casual language, getting roasted, falling asleep, digging up screenshots, and eventually building a website about the whole thing. The Boss role stays constant. What changes is what the role has to hold."
    ],
    sections: [
      {
        period: "Before 2020",
        title: "Before Underlords",
        paragraphs: [
          "Mugen did not enter Dragon Raja as a person with no online history. Roughly a year before the game, she already had an online-family circle that included Dean, Key, Zepp, GenGrey and others. Dean already called her mum. Those relationships matter later because UL inherits them rather than creating them. Some people will know Mugen first as Boss; others already know Mugs before there is a club title to attach to her.",
          "Dragon Raja adds a second network. On Server 10, ScarletMoon, 7 Stars and Amaurot dominate the early competitive landscape. ScarletMoon's leader, Intent, is a professional gamer and beta tester who becomes Mugen's partner. He is intensely competitive but refuses to whale in a game whose rankings increasingly reward RNG and spending. Mugen becomes close enough to the club's internal problems to argue with him about how toxic officers are being handled. Intent's answer is not to take the advice. He challenges her to lead a club herself.",
          "That challenge is the cleanest causal beginning of Underlords. The club is not founded because Mugen wakes up wanting a Discord bureaucracy. It begins because somebody tells her, in effect, that if she thinks leadership can be done differently, she should prove it. By March 2020, after the Altissa chapter that produces the later founding circle, she does."
        ]
      },
      {
        period: "March–December 2020",
        title: "Founding the club, then accidentally building a house",
        paragraphs: [
          "Mugen starts Underlords in March 2020. Ritha, WolfPhenix, Suzimasu and HyaLuna come with her from Altissa, creating the five-person founding circle, but the founding action remains Mugen's. The distinction matters because the rest of the story repeatedly shows her widening responsibility without flattening everybody around her into extensions of the Boss.",
          "The early archive is still recognizably a game-club record: recruitment, roles, server competition, event reminders, permissions. But Mugen's own activity keeps pushing the club toward something more domestic. In the Lobby she can route somebody toward Whiskey in one all-caps sentence; months later the same work is becoming a repeatable welcome process with roles, the server map and social rooms. In Slice, where real-life sharing starts to matter, she draws a blunt line around minors: people can be impulsive, but minors are not part of that impulse. The sentence is casual. The boundary is not.",
          "At the same time, Underlords starts inventing institutions faster than anybody can pretend this is still a normal mobile-game guild. Snow drafts JAG and a twenty-four-charge 'Yeeting' framework while explicitly insisting UL is in no way a military organization. The family Tumbleweed turns social relationships into a map. Anthos can write 'add Dean to Mugs' because the older mother/son relationship already exists and now needs a line on the diagram. Mugen's leadership is becoming less about winning Dragon Raja and more about holding together a space where game logistics, privacy, friendship, jokes and fake government all occupy the same server."
        ]
      },
      {
        period: "2021–2022",
        title: "The club learns how to remember itself",
        paragraphs: [
          "By 2021, UL is no longer only managing people in the present. It starts building systems for remembering them. Photo Submissions runs in recurring rounds. Voice Challenge gives members another way to present themselves. Biodata opens in September after the room starts talking about wanting to know one another better, and the server begins formally cataloguing its own cast. Mugen is often the person with the permission to open the room or make the announcement, but the archive repeatedly preserves other people's contribution: Han's media work, Ren's challenge hosting, WolfPhenix's art, Snow's governance work. Her authority does not have to swallow authorship.",
          "The same period also makes the difference between 'the game' and 'the people' increasingly explicit. Members drift from Dragon Raja at different speeds. Aeshleen says the game is over for her; Mugen answers that she will always be part of the UL family. This is not a legal lifetime-membership rule. It is a recurring way Mugen talks when the original activity stops being enough to explain why everybody is still here.",
          "That house language becomes more meaningful because the front door is also getting more formal. By late 2022, welcome messages include the Discord Tour, Biodata and Whiskey, but also Platelet/minor caution, sensitive-topic boundaries and directions to move conflict into DMs. The club has grown enough to need procedure. Mugen's role becomes partly translation: turn procedure back into something that still sounds like the house."
        ]
      },
      {
        period: "2023–2025",
        title: "The game becomes optional; the mythology does not",
        paragraphs: [
          "The 2023 anniversary period is where UL becomes openly self-aware about having lore. Mafia rooms, character art, Mugshots, stories and anniversary projects turn the group into its own fictional universe while the real people remain visible underneath. When Mugen announces the Mafia Anime and Bios surprise, she names Snow and Ren as the people behind it. When WolfPhenix drops the huge anniversary artwork in the Louvre, Mugen sends the room to Wolf's post rather than absorbing the object into a generic 'UL made this' voice. This is what mature leadership looks like in her archive: she is still the loudspeaker, but she keeps pointing away from herself when the work belongs elsewhere.",
          "The same year also produces the cleaner statement of what UL has become. Mugen tells the server, 'This is your house' and that the circus tent is always open. Around the same period, the archive preserves 'real leather papa' as a recurring Mugen signature and catches her asking whether everybody in UL is short enough to qualify as Hobbits. These are funny details, but they matter because they show the public Boss identity and the private house register collapsing into one another. There is no ceremonial version of Mugen that replaces Mugs.",
          "By 2024 and 2025, ordinary life increasingly outruns Dragon Raja as the main plot engine. Voice rooms, food, work, pets, naps, recipes and daily conversation keep the community coherent while the originating game loses custody of the social world around it. Mugen's earlier family/house language therefore stops sounding aspirational and starts reading like description. UL survives because it has already learned to exist outside the thing that created it."
        ]
      },
      {
        period: "2026",
        title: "The reunion turns memory into a new project",
        paragraphs: [
          "The 2026 reunion does not begin as a formal anniversary special. People simply start coming back. Old iconography is recognized. WolfPhenix digs up Dragon Raja screenshots. The Wall becomes a recovery surface again. Rummy reposts the Tumbleweed. Different generations of the server recognize one another and describe the room as a family reunion.",
          "Mugen's role in this phase is different from 2020 but connected to it. She is no longer trying to prove she can run a game club after somebody challenged her to do it. She is trying to make six years of accumulated relationships, jokes, roles and evidence legible without flattening them. The website becomes part of the reunion while the reunion is still happening: people react to old material, correct identities, laugh at recovered screenshots and watch themselves become characters in the archive.",
          "That closes the loop without actually ending it. Underlords begins with a challenge about whether Mugen can lead. Six years later the harder problem is not leadership in a mobile game. It is stewardship: how to preserve a community that outlived its original reason for existing without turning it into a museum or a mythology that erases the people."
        ]
      }
    ],
    closing: [
      "Mugen's biography is therefore less a rise through ranks than an expansion of scale. She starts by founding a club. The club becomes a house. The house develops rules, rooms, staff, family language, art, rituals and an evidence problem. Through all of it, the formal title barely changes: Boss. What changes is what everybody means when they say Underlords."
    ]
  },

  gabu: {
    intro: [
      "Gabu is one of Underlords' current Underbosses, but her biography makes more sense if the rank comes later. She is Brazilian, ethnically Japanese, works in coding/technology and does taiko. Inside UL she eventually becomes associated with systems work, hydration reminders, Bulbasaur, practical care and a reputation for remembering the answer when everybody else has apparently decided memory is optional.",
      "The useful arc is not 'shy person becomes competent.' She is already capable. What changes is how comfortably that capability becomes visible inside the group. Her own account of joining emphasizes language anxiety and shyness; later archive scenes show her maintaining event machinery, handling front-door logistics, being used as social shorthand, and eventually occupying one of the two Deputy seats."
    ],
    sections: [
      {
        period: "2020",
        title: "Joining while still unsure of the room",
        paragraphs: [
          "Gabu's earliest character material is valuable because it does not look like the later Underboss file. In September 2020, Anayss describes a DM exchange in which both women are effectively telling each other they do not understand what is going on. Gabu quotes the confession and answers with delighted all-caps agreement. It is mutual confusion rather than incompetence, and it gives the later story somewhere to go.",
          "Gabu later explains the social side herself in QOTD. English felt like a barrier when she joined. Anthos encouraged her. Ansun/Souta was among the first people she talked to while both were newer. Her own joke for the change is that she went from shy toward more 'dumdum.' The wording matters because it frames confidence as permission to become less guarded, not as a total personality replacement."
        ]
      },
      {
        period: "2021",
        title: "Becoming part of the machinery",
        paragraphs: [
          "The strongest evidence for Gabu's developing place in UL is not a promotion announcement. It is maintenance. Throughout 2021, Saber Control catches her editing recurring events, changing dates and titles, checking lists and fixing schedules. Some of the commands are boring in exactly the right way: Demolition needs a date, Broken Contests needs a title, a photoshoot reminder needs to exist before anybody can remember to open submissions.",
          "This work is shared with people such as Snow and Sye; the bot is not Gabu's private kingdom. But repeated hands-on maintenance makes her relationship to the system unmistakable. She is becoming one of the people who knows how the house works behind the visible rooms. The later reputation for being the person with the answer is already being rehearsed here in a less glamorous form: somebody has to remember the event ID."
        ]
      },
      {
        period: "2022",
        title: "The quiet member becomes a person other people rely on",
        paragraphs: [
          "By early 2022, Gabu is visible at the front door as well as in the control room. In Lobby she asks newcomers for the exact fields needed for role assignment and closes the exchange warmly. In QOTD, meanwhile, she narrates the earlier shyness from a position of greater comfort. The two threads meet: the person who once worried about language is now one of the people explaining what the next person needs to do.",
          "Her social identity is also becoming more specific. Hydration reminders accumulate until 'Drink water reminder' can live as a display identity. Bulbasaur moves from personal preference to shared shorthand because Gabu and several other members independently keep returning to it. Souta identifies her with Bulbasaur; Gilli simply says 'Gabu is bulbasaur'; Gabu later chooses Pokémon as a world and asks for the biggest one. The joke only works because the room already knows what it means.",
          "This is also where relationships become part of the biography rather than a separate chart. Anthos belongs to the story as the person Gabu remembers encouraging her when English felt like a barrier. Ansun belongs as an early contact. Anayss belongs as the person caught in that early mutual-confusion scene and later becomes the other current Underboss. The current command pairing therefore sits on top of older social history rather than appearing from nowhere on an org chart."
        ]
      },
      {
        period: "2023–2024",
        title: "Competence stops being the whole joke",
        paragraphs: [
          "As UL moves further away from being only a Dragon Raja club, Gabu's file broadens. Her Mafia self-mythology casts her as quiet and protective, including the line that anyone hurting her family risks being eaten alive. The werewolf is fiction; the protective orientation has parallels elsewhere. Woosung describes Gabu as someone who validates feelings, gives advice and makes people comfortable. Hydration has already turned care into a running bit. The archive does not require choosing between technical competence and softness.",
          "In 2024 another small QOTD answer gives the biography a useful outside-UL dimension. When Gilli imagines her working with sea animals, Gabu says she had wanted to go into the 'sea animal area' before becoming a 'tech nerd.' That does not prove a degree or abandoned profession. It does show that the current coding identity was not the only future she once imagined."
        ]
      },
      {
        period: "2026",
        title: "The group remembers what it used her for",
        paragraphs: [
          "During the reunion-era favorite-memory discussion, Oyasumi remembers Gabu as the person who knew all the answers. Mugen says the group did the activity for years and still followed Gabu instead of learning the answers themselves. Gabu arrives the next morning and says she had been proud of her memory then.",
          "That memory lands because the earlier archive has already shown the same social function in less quotable forms: maintaining schedules, remembering configurations, understanding the system, asking for the right fields, making routine care repeatable. By 2026 the group has compressed years of that into a character reputation: if Gabu knows, everybody else can stop pretending they were going to memorize it."
        ]
      }
    ],
    closing: [
      "Gabu's current Underboss role is therefore not the biography's plot twist; it is the institutional version of a place she has been growing into for years. The early record preserves uncertainty and language-consciousness. The middle years show repeated technical and social maintenance. The later years show the room turning those habits into affection, jokes and reliance. She does not become a different person. She becomes easier for the archive to see."
    ]
  },

  anayss: {
    intro: [
      "Anayss is one of Underlords' two current Underbosses / Deputies, the current Battle Leader, and a Game Officer. Those titles describe where Anayss stands now; they do not supply a safe promotion chronology. The surviving archive does not give a clean pre-UL biography or a dated first-entry scene, so the story begins where the evidence becomes person-shaped: September 2020, with Anayss already inside the house and openly admitting to being confused.",
      "What follows is not a neat fable in which a hopelessly lost newcomer becomes a flawless leader. Anayss keeps the typos, the visible uncertainty, the occasional copy-paste mistake and the habit of sounding like a person rather than a help desk. The change is subtler. Across Lobby, Club Only, Announcements and the Wall, Anayss becomes one of the people who repeatedly notices a threshold — a newcomer who needs the next room, a returnee the bot has forgotten, an event about to close, an argument living in the wrong channel — and supplies enough orientation to get everybody moving again."
    ],
    sections: [
      {
        period: "September 2020",
        title: "The earliest surviving Anayss is visibly, cheerfully lost",
        paragraphs: [
          "The first strong Anayss material does not come from an officer room or a role announcement. It comes from Club Only. On September 18, Anayss tells the room about a DM exchange with Gabu: Anayss had been saying `gabu i dont understandddddddd`, while Gabu was apparently saying essentially the same thing back. Mugen replies that the story nearly made her choke on gum; Gabu answers with all-caps laughter and recognition. The scene matters now because Gabu and Anayss are the two current Deputy seats, but the archive catches them years before that status as two people mutually failing to know what is going on. The comedy survives precisely because nobody in the scene is performing future rank.",
          "Ten days later, another Club Only conversation makes the before-picture even cleaner. Nhou mentions random phone lag. Anayss says the Dragon Raja map makes the game lag and then adds, almost as a self-filed footnote, `Which is always cuz i get lost a lot`. There is no dramatic reaction pile underneath it. The line simply sits there. That small silence is useful: Anayss is not being assigned a character trait by the room; Anayss is casually admitting one.",
          "It would be easy to turn those two moments into a cartoon origin story — confused person becomes leader — but the archive does not support that simplification. The September scenes prove uncertainty and a willingness to laugh at it. They do not prove incompetence, a lack of responsibility, or the start of a promotion ladder. What they do provide is a baseline. Anayss enters the surviving record as somebody comfortable enough to say, publicly, that the map is winning."
        ]
      },
      {
        period: "Late 2020–2021",
        title: "From getting lost to helping other people find the next room",
        paragraphs: [
          "Only a few months later, the object changes and the behavior begins to reverse. In December 2020, Anayss welcomes an arrival in Lobby and points to the UL Discord Tour: `here is the server map`. This is not the same map from September. One belongs to Dragon Raja; the other is Underlords' own navigation system. The distinction is important because the progression is behavioral, not magical. The person who had just admitted getting lost in one environment is already helping somebody navigate another.",
          "That becomes ordinary work rather than a one-off joke. Through 2021 and into 2022, Lobby repeatedly catches Anayss asking for missing intake information, assigning or confirming roles, and explaining where the Discord Tour, Rules, Biodata, Whiskey, Club Only or Photo Submissions live. The messages do not read like somebody trying to sound official. They tend to keep a little social cushioning around the procedure: `Haiii`, `wb`, `You made it!!`, a heart, a face, then the next door. The wording matters because it keeps the person being processed from becoming merely a form.",
          "One June 2021 return makes that especially clear. Anayss tells Neli, `I know youre in Underlords`, asks only for age, then assigns the role and routes onward. The bot and the form start from missing fields; Anayss does not. Human memory changes the shape of the interaction. That behavior is not uniquely Anayss's — Gabu and other greeters also recognize returners — but it becomes part of the broader pattern. Anayss keeps meeting people at the point where the system has less context than the humans do.",
          "The Noether thread begins in the same register. In December 2021, MEE6 presents Noether like a new arrival. Anayss answers `@Noether wb ❤️`. Nothing else is needed to establish the correction: the machine says entrance, the human says return. Months later that recognition will become an offline scene, which is why the small welcome-back matters in the biography. It is the first visible sign that some of these routing interactions are not anonymous front-desk labor. They are continuity."
        ]
      },
      {
        period: "2021–2022",
        title: "The same instinct moves from rooms to clocks",
        paragraphs: [
          "While Lobby develops the `where next?` side of Anayss's role in the group, Announcements develops the `when now?` side. In August 2021, Anayss warns Staff that Battle Sim has ten minutes left. The message does more than yell a deadline; it adds a practical tip about selecting a same-level fight on normal mode. In September, Anayss posts that Dragon Breath is ongoing and then gives an unofficial Clash jump in ten minutes. The recurring move is compact: identify the closing window, translate it into usable time, add the next action.",
          "Star of Cassell turns that behavior into one of the more durable rhythms in the file. From 2021 through 2023, Anayss keeps posting some version of `STAR OF CASSELL IS UP`: go vote, get your diamonds, move. The wording mutates because of course it does. One 2022 alert arrives as `STAR OR CASSELL IS UPPOPOO`, followed seven seconds later by a money-gone reaction from Anayss. Another says `STAR OF CASSELL AND FEETS ARE UP`. The typos and add-ons do not cancel the operational function. They reveal the house register surviving inside it. Anayss can be the person trying to get everybody to an event on time without becoming a polished notification service.",
          "That distinction is central to the later Battle Leader read. The surviving alerts are compatible with the current title, and they make the title feel earned in character terms, but they do not date the appointment. There is no safe moment where the archive says: here, on this day, Anayss became Battle Leader. The biography therefore follows the labor before the label. Years before the current org chart tells us where Anayss sits, Announcements already shows a person repeatedly turning game-time uncertainty into a deadline somebody else can use."
        ]
      },
      {
        period: "2022",
        title: "Recognition starts carrying a social history of its own",
        paragraphs: [
          "By 2022, the front-door material becomes less interesting as mere intake and more useful as evidence of accumulated relationships. On May 10, Anayss greets Zayvior with `You made it!!`, records the person as a returnee, and then, in the same minute, routes another arrival through the whole house: Rules, Discord Tour, Whiskey, Club Only, Biodata. The juxtaposition is the point. One person needs to be remembered; another needs to be oriented. Anayss changes the amount of explanation without changing the basic motion of getting somebody situated.",
          "The Noether thread then crosses out of Discord. In July, Anayss posts, `Today I met @Noether! She baked a cake for me ❤️`; Noether replies, `A date with ana`. The archive safely proves an offline meetup, cake, prior recognition and playful wording. It does not prove romance, location, or a current relationship category. What the scene adds is scale. A person first visible as `wb ❤️` in a bot-triggered Lobby return is now physically present in Anayss's day, carrying a cake. The relationship has moved from server recognition into shared real-world time without needing the wiki to invent anything beyond what is there.",
          "The Wall supplies another kind of belonging. In April 2022, Anayss greets Erys with `welcome to wall of shame Emiii hahaha`. This is not formal labor, but it shows how thoroughly Anayss has learned the house's internal grammar. Being put on the Wall is treated as social ritual, not a disciplinary apocalypse. A person whose early archive is full of not understanding the map is now fluent not only in where UL's rooms are, but in what one of its stupidest institutions means to the people using it."
        ]
      },
      {
        period: "2023–2024",
        title: "The house gets more procedural; Anayss stays recognizably human inside it",
        paragraphs: [
          "By 2023, the Lobby welcome packet has expanded. New arrivals may get Platelet caution, rules around controversial or sensitive topics, instructions to move interpersonal drama into DMs, Biodata, the Discord Tour and Whiskey. Anayss uses that larger packet, but the archive also shows the same or near-identical structure under Gilli, Mugen, Mia, Sye, Ren and WolfPhenix. This is shared house infrastructure, not Anayss's private authorship. What remains person-specific is the delivery and the repeated willingness to operate the door.",
          "That same year, a Wall exchange gives a more compressed example of the orientation habit. A reply becomes openly irritated and Panda asks for an irrelevant post to be deleted. Anayss does not produce a speech about conflict resolution. Anayss posts `#🥃💬｜whiskey-room ^^`. The little face makes the redirect almost comically mild, but the referent is clear: this live discussion belongs over there. One redirect cannot become a universal moderation doctrine, yet it fits the biography because the gesture is the same one Lobby has been documenting for years. Move the thing to the room where it can continue.",
          "The 2024 material shows both competence and its limits. In March, Anayss announces that server-vs-server starts in five minutes and tells people to get online for rewards. In April, Anayss asks WolfPhenix to update the weekly planner with changed event days and times. Wolf finds an older editable planner, makes the changes and asks what is still missing. It is a clean relay: Anayss supplies changing requirements; Wolf keeps the artifact flexible enough to absorb them. There is no need to inflate one handoff into a permanent duo. It matters because by this point Anayss is not merely passing along reminders but helping keep the shared representation of the schedule current.",
          "Then the archive gives us the correct antidote to turning all of this into competence fanfiction. One April 2 Lobby packet says the server index is in Whiskey while the same message also identifies Whiskey as main chat. A later April packet puts the index back in the Discord Tour. The safest read is a copy-paste inconsistency, not a secret server redesign. It is also a perfect character beat. The former map casualty becomes one of the map-givers and still, occasionally, pastes the map wrong. The progression is real precisely because perfection never arrives."
        ]
      },
      {
        period: "Current role",
        title: "Underboss, Battle Leader, Game Officer — without a fake promotion montage",
        paragraphs: [
          "Current canon places Anayss in one of Underlords' two Underboss / Deputy seats alongside Gabu, with Battle Leader and Game Officer responsibilities as well. The archive does not safely tell us when each appointment began, so those titles belong at the end of the chronology rather than being projected backward onto every old reminder or Lobby message. A 2021 countdown is evidence of behavior. It is not automatically the ceremony that created a 2026 title.",
          "What the older evidence does explain is why the current role does not feel disconnected from the person who appears in 2020. The shared history with Gabu begins in mutual confusion, not command. The front door teaches us that Anayss remembers people and reduces missing-context problems. Announcements shows the same habit applied to time. Noether shows that recognition can become continuity beyond the server. The Wall shows house fluency and, later, a willingness to reroute a live disagreement without turning the reroute into theater. Wolf's planner shows the same practical instinct operating inside collaborative maintenance.",
          "The through-line is therefore not `Anayss always knows where everything is`. The archive explicitly disproves that. It is closer to this: Anayss keeps becoming useful at moments when somebody needs enough context to take the next step. Sometimes the answer is a room. Sometimes it is five minutes. Sometimes it is `wb ❤️`, because the correct information is simply that this person is not actually new. That is a much better explanation of the current authority than pretending the archive contains a tidy staircase of promotions that it does not."
        ]
      }
    ],
    closing: [
      "Anayss's arc is one of orientation without omniscience. The surviving story starts with visible confusion and a person who says the map keeps winning. It develops through years of giving other people directions, recognizing returners, keeping event windows legible, carrying house procedure without sounding swallowed by it, and collaborating on the practical machinery that keeps UL usable. The current Underboss and Battle Leader titles name the institutional position. The biography explains the stranger, messier thing underneath: Anayss became someone the house repeatedly trusts to point at what happens next."
    ]
  }
};

const requiredNarrativeBios = ["mugen", "gabu", "anayss"];
for (const id of requiredNarrativeBios) {
  if (!narrativeCharacterBios[id]) {
    throw new Error(`Priority character ${id} lost its chronological narrative biography.`);
  }
}
