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
  }
};
