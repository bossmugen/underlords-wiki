import type { Character } from "./wiki";
import { primaryGroupByCharacterId } from "./cast";

export type BioBeat = { date?: string; title: string; text: string };
export type BioDetail = { title: string; text: string };
export type CharacterBio = {
  dek?: string;
  overview: string[];
  history?: BioBeat[];
  characterNotes?: BioDetail[];
  roleNotes?: string[];
  canonNotes?: string[];
};

export const characterBios: Record<string, CharacterBio> = {
  mugen: {
    dek:"Founder, Boss, family node, recurring defendant, and the person around whom UL keeps becoming a place instead of a game guild.",
    overview:[
      "Mugen starts Underlords in March 2020 after leaving Altissa; Ritha, WolfPhenix, Suzimasu, and HyaLuna come with her and form the five-person founding circle. She remains the Boss throughout the site's timeline. That is the clean institutional version.",
      "The character version is messier. UL keeps happening around Mugen like a weather system with admin permissions: she sets rules, names rooms, gets dragged into jokes, curates the Wall, disappears for naps, returns to fresh evidence, and repeatedly talks about the server as a house or circus people can come back to even after Dragon Raja stops mattering.",
      "She also enters UL with relationships that predate the show. Dean's online mother/son relationship with Mugen predates Dragon Raja; older friendships with Key, Zepp, and GenGrey sit left of the official UL timeline. That means some people meet her first as Boss, while others knew her before there was a Boss role to assign."
    ],
    history:[
      {date:"March 2020",title:"The founding",text:"Mugen leaves Altissa and starts Underlords. Four friends come with her; the five become the permanent founding circle, but the founding action itself remains Mugen's."},
      {date:"April 2020",title:"The circus gets edges",text:"Early Slice catches Mugen stating a blunt minor-safety boundary: everyone can be impulsive, but minors are a no-fly zone. It is one of the earliest scenes where UL's clown register and real boundaries occupy the same sentence."},
      {date:"2020–2021",title:"The family was partly pre-assembled",text:"The Tumbleweed places Dean 'to Mugs'; later Dean casually calls her mum. The map is catching up to an older online-family relationship, not inventing it and not documenting recruitment."},
      {date:"2022–2023",title:"This is your house",text:"Mugen repeatedly uses family/house language after people drift from the game. The archive does not turn that into a legal lifetime-membership rule; it does show a durable way she talks about belonging."},
      {date:"2026",title:"The archive becomes part of the reunion",text:"During the reunion Mugen is actively showing and building the UL website inside Whiskey. The cast starts reacting to its own representation, so archive-making itself becomes a reunion scene rather than something done years later from outside."
      }
    ],
    characterNotes:[
      {title:"Plutonian",text:"Mugen's Plutonian self-branding is an established house quirk, not a one-off adjective."},
      {title:"Real Leather Papa",text:"A recurring Mugen signature whose visible archive uses reach at least into 2023. The ultimate origin remains open; the attribution to Mugen does not."},
      {title:"Boss status: probably asleep",text:"Across rooms and years, the house repeatedly catches Mugen asleep, napping, or filing herself as 'lying ded on floor after work.' It works as a running character bit, not a medical claim."},
      {title:"Archive gravity",text:"The Wall, screenshots, reunion archaeology, and the later website all keep pulling Mugen into the same role: not sole archivist, but a recurring force that makes UL save itself."
      }
    ],
    roleNotes:["Boss / President — always the leader.","Founder — Mugen started UL; the other four founding-circle members came with her from Altissa.","Founder status and current command status are separate facts."],
    canonNotes:["Dean is Mugen's online son; this is social-family language, not biological kinship.","The pre-Raja online-family network is not the same thing as the five-person UL founding circle.","Anthos's 'add dean to mugs' line belongs to family-map editing, not recruitment chronology."]
  },

  gabu: {
    dek:"Underboss, coder, taiko dancer, hydration enforcer, Bulbasaur, and the person the room eventually remembers as the human answer key.",
    overview:[
      "Gabu is one of UL's current Underbosses / Deputies. The rank matters, but it is not the most useful way to meet her. Her archive file is a long movement from a shy, language-conscious arrival toward somebody the room describes in much brighter terms — without pretending the early version and later version are different people.",
      "She works in technology/coding and does taiko. Inside UL, care tends to arrive disguised as routine maintenance: drink water, remember the answer, validate the feeling, keep the system moving. The stable QOTD account label 'Drink water reminder' eventually stops looking like a random nickname and starts looking like a department.",
      "Then there is Bulbasaur. Gabu owns the plush; other members independently identify her with Bulbasaur; Gabu later picks Pokémon as the world she wants and asks for the biggest Bulbasaur. At that point the plant frog has escaped private preference and become social shorthand."
    ],
    history:[
      {date:"2022",title:"She describes her own entry arc",text:"Gabu says English felt like a barrier when she joined, remembers Anthos encouraging her, and names Ansun/Souta among the first people she talked to. Her own shorthand for the change is moving from shy toward more 'dumdum.'"},
      {date:"2022–2023",title:"Bulbasaur acquires legal personhood",text:"A plush, peer descriptions, and Gabu's own later answers all converge on the same Pokémon. The recurrence is what makes it a character motif."},
      {date:"2023–2024",title:"Care with teeth",text:"Peer descriptions emphasize advice, validation, and comfort; the Mafia self-mythology gives the same protective core a werewolf wrapper. The werewolf is fiction. The protective orientation is the useful part."},
      {date:"2026",title:"Everybody outsourced knowing things to Gabu",text:"During favorite-memory QOTD, Oyasumi remembers Gabu as the person who knew the answers. Mugen says the group followed her for years instead of learning them. Gabu returns the next morning proud that her memory used to be that good."
      }
    ],
    characterNotes:[
      {title:"Drink Water Reminder",text:"Hydration language around Gabu mutates from repeated care into a stable house identity."},
      {title:"Bulbasaur",text:"Peer-recognized motif, not a formal title and not a reason to assign every Pokémon reference to her."},
      {title:"Human answer key",text:"Editorial shorthand for a reunion memory: Gabu became the room's outsourced memory for a repeated activity."
      }
    ],
    roleNotes:["Current Underboss / Deputy.","Also carries Game Officer status.","Export-time Discord role snapshots do not date when the Underboss appointment began."],
    canonNotes:["Gabu is a woman; use she/her.","Mafia werewolf language is fictional self-mythology, not biography."]
  },

  ren: {
    dek:"Caporegime, quote collector, onboarding router, care-bulletin author, access-control list, and human Ctrl+F for the house.",
    overview:[
      "Ren is a current Caporegime and one of the cleanest examples of a person whose recurring behavior becomes more distinctive than the formal rank. Across the Wall, Lobby, Slice, QOTD, Photo Submissions, Announcements, and later account-repair scenes, she keeps selecting, labeling, routing, or preserving the bit of social information everybody will need later.",
      "The pattern starts with quotes. Ren says she does not have other people's quotes for nothing; Anthos describes RV making 'tag yourself' posts from questionable things members said; Ren talks about favorite-quote collections. By the time the archive needs somebody to explain where a newcomer should go or which replacement account belongs to Rummy, the same retrieval instinct has become infrastructure.",
      "She also has a recurring care register that is much less bureaucratic than 'human index' sounds: reminders to eat, drink water, rest, watch movies, have snacks, or simply not perform cheerfulness. Sometimes the enforcement language involves bone marrow. UL remains UL."
    ],
    history:[
      {date:"April 2020",title:"The index was using the room too",text:"On Slice's opening night Ren says the conversation distracted her from pandemic anxiety and made that moment better. The person who later routes everybody else through the house was also using the house."},
      {date:"August 2020",title:"Quote custody",text:"Ren openly talks about collecting other people's quotes and favorite quote sets. The Wall's communal memory habit gives her a natural habitat."},
      {date:"2021",title:"Care bulletins",text:"Announcements preserve recurring food, water, rest, movies, snacks, and permission-not-to-smile check-ins — frequently paired with threats so obviously theatrical that the care survives the joke."},
      {date:"2022",title:"Belonging and access in the same filing cabinet",text:"Ren tells Aeshleen the memories still make her part of a 'forever family'; later she tells Cookie that VIP does not have access to Slice. One drawer says you belong. Another says that badge still does not buy this key."},
      {date:"2026",title:"Identity repair",text:"After Rummy's old account is hacked, Ren publicly identifies the replacement account for the house. It is social indexing, not cybersecurity recovery."
      }
    ],
    characterNotes:[
      {title:"Human Ctrl+F",text:"An archive-supported synthesis of repeated curation and routing behavior, not a formal UL job title."},
      {title:"Quote brain",text:"Ren repeatedly collects or reframes members' lines, but the Wall remains communal rather than her personal archive."},
      {title:"Care, with threats",text:"Eat lunch. Drink water. Rest. Or else. Bone marrow may be mentioned. Nobody should literalize the last part."
      }
    ],
    roleNotes:["Current Caporegime / Secretary.","Works as a hospital interpreter outside the UL role system.","Hosted at least one Officers Challenge dare; that does not make the event Officer-only."],
    canonNotes:["Ren and Rummy are different people.","'Forever family' is relationship language, not a formal membership law.","Posting Rummy's replacement account did not make Ren the person who recovered the hacked account."]
  },

  han: {
    dek:"UL Media Director and filmmaker. Builds ways for other people to be seen, quits the game, and explicitly keeps the media job anyway.",
    overview:[
      "Han is UL Media Director / filmmaker. The title is unusually well explained in the archive: Mugen later describes UL roles as duty-driven and points to Han's promotional-video work as the reason Media Director exists around him. He was never an Officer and is not a Platelet.",
      "His strongest character material is not actually advertising. In September 2021 Han says he wants to know everybody better; the room answers 'we are your fam,' then almost immediately starts discussing an intro page that becomes Biodata. A month later he builds Voice Challenge as a voluntary, non-competitive way for members to imagine how their Dragon Raja characters sound and express themselves through media.",
      "Then the game loses custody of the media dude. In November 2021 Han says he quit the game but will still be here as 'club media dude uwu.' For the site's larger story, that is one of the cleanest early receipts for the community and the originating game becoming separable things."
    ],
    history:[
      {date:"September 2021",title:"I need to get known with all of u better",text:"Han's ordinary request to know the room better sits directly inside the live conversation that produces Biodata. He is not its sole inventor; he is standing at the moment a social need becomes infrastructure."},
      {date:"October 2021",title:"Voice Challenge",text:"Han designs a self-expression container rather than a competition: pick music, pair it with character media, use #ULvoice, let people show how they hear their own character."},
      {date:"November 2021",title:"Club media dude uwu",text:"Han explicitly separates quitting Dragon Raja from quitting UL media work. Game status changes; the function stays."},
      {date:"2021",title:"The camera department keeps entering the frame",text:"Slice gets the weird-cat post. The Wall gets 'I survived another day at work,' a broken-toe family story, and Han joking that the room may need to become Han's Wall of Shame/Fame."
      }
    ],
    characterNotes:[
      {title:"Behind the camera, unfortunately still in the evidence",text:"Han repeatedly becomes Wall/Slice material despite being the formal media person."},
      {title:"Media as participation",text:"His best archive scenes create formats other people can fill rather than treating media as one-way promotion."}
    ],
    roleNotes:["UL Media Director.","UL filmmaker.","Not an Officer. Not a Platelet."],
    canonNotes:["Han = Nai = nai6965 = the display label '.'.","Han is not Mia; Mia was not Media Director.","Role arrays do not supply Han's appointment date."]
  },

  rummy: {
    dek:"Sniper, apprentice, gardener, Game Officer, Platelet, birthday-calendar repair tech, and the Wall's most persistent advocate for submitting the rest of the conversation into evidence.",
    overview:[
      "Rummy's primary file belongs under Snipers. She is an on-call Sniper, Party Director Apprentice under Nobu, Parterre Gardener, Game Officer, and permanent Platelet. The number of titles looks like résumé inflation until the archive starts showing the same underlying pattern: UL keeps handing her another corner to tend.",
      "She republishes and pins the birthday calendar. She appears in recruiting and game-side roles. In 2026 she is the person reposting the giant Tumbleweed during the reunion. Even when the Wall turns on her, her reflex is strangely consistent: the communal record should have context.",
      "Rummy does not necessarily deny being in the evidence. She repeatedly objects to counsel's edit. 'bro u need hte context.' 'THAT WASN'T JUST A RANDOM THINIG.' 'THAT NOT THE FULL CONVO.' At some point this stops being one defensive reaction and becomes a recognizable character rhythm."
    ],
    history:[
      {date:"October 2020",title:"Surviving Discord intake",text:"The Bouncer welcomes phenomenal_lamb_14960; Rummy answers; Staff routes the account through normal setup. It dates surviving presence, not her later appointments."},
      {date:"2022–2024",title:"Wall defendant with procedural objections",text:"Bleach, burnt-pancake court, rizz allegations, perfectly timed song lyrics, and repeated demands for context turn Rummy into one of the Wall's best recurring defendants."},
      {date:"August 2023",title:"Be like water",text:"During a misunderstanding Rummy says she talked to people, explicitly says Panda was not bullying her, admits that is how she sees it, asks everybody to move past it, and only then jokes that Ansun is her lawyer."},
      {date:"March 2023",title:"Birthday infrastructure",text:"Rummy republishes the UL birthday calendar month by month and pins the replacement lists."},
      {date:"2026",title:"The trees return",text:"Rummy reposts the giant Tumbleweed in Whiskey. Her 'Ah yes the *trees*' and 'U can’t even see the name' reactions make the old relationship map itself part of the reunion."
      }
    ],
    characterNotes:[
      {title:"Context defense",text:"A recurring Wall response pattern, not a formal lawyer/fact-checker title and not proof that every screenshot was misleading."},
      {title:"Maintenance inheritance",text:"Birthday lists, apprentice work, gardening, recruiting, game authority, and reunion archaeology all fit the same handoff/tending pattern."},
      {title:"Rummy screaming lyrics that fit the convo",text:"Gilli repeatedly calls out Rummy's timing as the joke. It is a durable attention pattern, not a closeness ranking."}
    ],
    roleNotes:["Primary shelf: Snipers.","Party Director Apprentice under Nobu — not co-equal Party Director.","Parterre Gardener · Game Officer · permanent Platelet."],
    canonNotes:["phenomenal_lamb_14960 is Rummy's pre-hack identity.","The 2026 replacement account is still Rummy, not a second character.","Rummy's own August 2023 wording explicitly rejects the bullying interpretation in that scene."]
  },

  mia: {
    dek:"Pit Boss, Interrogator, Game Officer, Platelet, group-art instigator, and two-word Wall appellate court.",
    overview:[
      "Mia is a named Pit Boss / Minister, UL Interrogator, Game Officer, and permanent Platelet. Her primary character shelf is Directors / Specialists because the site uses one primary file per person rather than duplicating every overlapping role.",
      "The roles are real and somehow still the least interesting part. Mia's recurring move is turning somebody else's premise into a participation surface before the sentence has cooled. Ren proposes a blank canvas; Mia is already getting one and collecting doodles. Gilli asks for themes; Mia returns with part two, now involving bananas.",
      "Her Wall mode is compression. A Rummy-facing post gets 'LMAOO,' 'yusss,' or two FAT_WHEEZE and a name. When Oyasumi asks why one of Mia's own exhibits is on the Wall, the editorial defense is simply: 'It funny.' The entire prosecution rests."
    ],
    history:[
      {date:"2022–2023",title:"Screenshot court",text:"Repeated compressed reactions to Rummy and other Wall posts turn Mia into a recurring ratifier of the room's allegations without making her the author of the underlying evidence."},
      {date:"March 2023",title:"UL tenure gets birthday candles",text:"Mia marks her first UL anniversary as 'happy birthday to ul' and announces the start of year two. It supports her own anniversary framing, not a more precise formal join timestamp."},
      {date:"June–July 2023",title:"Somebody said make something; Mia already opened the file",text:"The communal doodle chain moves Ren idea → Mia canvas → Staff submissions → themed sequel. It is a scene about execution and participation, not proof of a standing creative department."},
      {date:"April 2023",title:"Mimi & Momo",text:"Mia and Momo explicitly call each other twins, then repeat the identity joke two days later. It is house-language kinship, not biology or one person with two accounts."
      }
    ],
    characterNotes:[
      {title:"It funny",text:"Mia can reduce an entire Wall editorial policy to two words."},
      {title:"Participation surface",text:"Her production instinct is less 'make an art object alone' and more 'open the file and get everybody's fingerprints on it.'"},
      {title:"Twinsss",text:"Mia ↔ Momo twin language is a recurring house joke with direct receipts."
      }
    ],
    roleNotes:["Current Pit Boss / Minister.","Primary wiki shelf: Directors / Specialists.","UL Interrogator · Game Officer · permanent Platelet."],
    canonNotes:["Mia is not Han.","Mia was not Media Director.","Do not use Reporter or Newscaster as her specialist title."]
  },

  snow: {
    dek:"Senior Officer, Judgemen, governance specialist, technical grown-up, and permanent victim of the allegation that he personally invented aging.",
    overview:[
      "Snow is a current Pit Boss / Minister, Judgemen, and Game Officer. He is one of UL's senior governance and policy people, but he was never formally the permanent #2. The Underboss / Deputy seats belong elsewhere in the current command roster.",
      "His strongest recurring story job is making the absurd machinery work. JAG, rules, permissions, automation, and anniversary projects repeatedly put Snow near the point where a joke has to become functional enough for other people to use it.",
      "Naturally the room repays this by treating his age as community property. 'Snow is old' survives because it is cheap, portable, and requires almost no setup."
    ],
    history:[
      {date:"2020",title:"Governance gets a legal department",text:"Snow is central to the early governance/JAG world where UL can write twenty-four Yeeting charges and still insist it is in no way a military organization."},
      {date:"2020–2023",title:"Work that had to function",text:"Permissions repair, rules, automation, and later anniversary work repeatedly overlap Snow with Mugen. The pattern supports durable working trust without inventing a deputy rank."},
      {date:"2023",title:"Mafia anniversary infrastructure",text:"Mugen credits Snow and Ren for the anniversary surprise that opens the UL Mafia anime/bios rooms. Credit does not resolve who made each individual asset."}
    ],
    characterNotes:[
      {title:"Snow is old",text:"One of the house's easiest recurring jokes. The bit is social shorthand, not a useful way to infer an exact age."},
      {title:"Procedure with a pulse",text:"Snow repeatedly appears where policy, permissions, or technical implementation has to become usable rather than merely funny."}
    ],
    roleNotes:["Current Pit Boss / Minister.","Judgemen appointment.","Game Officer."],
    canonNotes:["Snow is not a formal second-in-command / #2.","Seniority and influence do not create an Underboss appointment."]
  },

  dean: {
    dek:"Platelet, Mugen's online son, and one of the characters whose first episode happens before the series premiere.",
    overview:[
      "Dean belongs to UL's prequel timeline. He knew Mugen before Dragon Raja through an older online social/family network, calls her mum, and carries an established online mother/son relationship into the UL world rather than acquiring it there.",
      "That is why the 2020 Tumbleweed instruction 'add dean to mugs' should be read as diagram maintenance. Anthos is placing an already legible relationship on a family map, not documenting Dean's recruitment into UL.",
      "Dean is also a Platelet. The designation began as UL's under-18 safety/status role and remains part of a person's file after they age up."
    ],
    history:[
      {date:"pre-2020",title:"Prequel character",text:"Dean is part of Mugen's older online-family world before Dragon Raja / UL."},
      {date:"September 2020",title:"Add Dean to Mugs",text:"The Tumbleweed update places Dean relative to Mugen. Context identifies this as family-map editing, not club intake."},
      {date:"2021",title:"Don't you agree mum",text:"Dean addresses Mugen as mum in casual conversation. The line lands as ordinary shorthand, which is exactly why it works as evidence of an already-established relationship."}
    ],
    characterNotes:[
      {title:"The relationship predates the paperwork",text:"Discord catches pieces of a bond older than the server. The archive should not pretend the first surviving message is the origin."}
    ],
    roleNotes:["Platelet — permanent designation once assigned."],
    canonNotes:["Online son means social-family relationship, not biological kinship.","Do not treat 'add dean to mugs' as recruitment evidence.","Deann / hinata.K in alt-osaur-us resolve to the same Dean where the archive bridge supports it."]
  },

  wolfphenix: {
    dek:"Founding-circle Officer, News Editor, screenshot archaeologist, and one of the people most capable of producing a six-year-old receipt because somebody mentioned the wrong thing.",
    overview:[
      "WolfPhenix is part of UL's five-person founding circle and currently serves as a Caporegime / Secretary with News Editor and Game Officer tags. She knew Mugen through Dragon Raja / Altissa before Underlords existed.",
      "Her 2026 reunion role makes the long memory especially visible. Wolf digs up old Dragon Raja screenshots after the conversation triggers the memory, then those images circulate into the Wall again. The safe credit is retrieval/supply of saved screenies; the archive should not silently turn that into capture credit for every image.",
      "That scene turns Wolf into a useful model for how UL memory actually works: not one central archivist, but people carrying stray pieces of the old show until the right sentence makes them open the camera roll."
    ],
    history:[
      {date:"March 2020",title:"Founding circle",text:"Wolf comes with Mugen from Altissa and becomes part of the definitive five-person founding circle."},
      {date:"2021–2023",title:"The character remains in the work",text:"Photo submissions, Wall color-identification, and anniversary material keep Wolf present as more than an origin-credit name."},
      {date:"2026",title:"Screenshot archaeology",text:"Wolf retrieves saved Raja screenshots during the reunion; Mugen later reposts copies to the Wall. Retrieval, posting, making, and original capture remain separate provenance relations."}
    ],
    roleNotes:["Founder / founding-circle member.","Current Caporegime / Secretary.","News Editor · Game Officer."],
    canonNotes:["Mugen founded UL; Wolf is part of the founding circle rather than a co-founder in an identical sense.","Do not credit Wolf as photographer/capturer of every screenshot merely because she supplied the saved copies."]
  },

  nobu: {
    dek:"UL Party Director: the person for whom event programming becomes a job and a 2026 return becomes an immediate reunion beat.",
    overview:[
      "Nobu / Xuseio is UL's Party Director. Rummy's Party Director Apprentice title sits under Nobu rather than beside her as a co-equal directorship.",
      "Her archive job is programming: events, activities, and the social machinery that gives the room something to do together. The title is specialist infrastructure rather than command rank; Nobu is not an Officer.",
      "The 2026 reunion makes that continuity emotional without needing a speech. Nobu returns, gets greeted like a reopening, and the old room immediately absorbs her into the pace again."
    ],
    history:[
      {date:"Raja era",title:"Party Director",text:"Nobu becomes the formal specialist around event/programming work."},
      {date:"2022",title:"Lobby return / setup",text:"A surviving Lobby scene has Ren welcoming Nobu, setting her up, and routing her through the Tour, Biodata, and Whiskey — a useful reminder that established characters can still have re-entry scenes."},
      {date:"2026",title:"LETS GOO",text:"Nobu's reunion return overlaps with Mugen showing the developing UL website; the archive project becomes part of the same social episode."
      }
    ],
    roleNotes:["UL Party Director.","Not an Officer.","Rummy is Party Director Apprentice under Nobu."],
    canonNotes:["Do not flatten Nobu and Rummy into co-equal Party Directors."]
  },

  gilli: {
    dek:"Consigliere, collector, recurring organizer, and the person most likely to acquire a new emotional-support object because somebody made one joke too many.",
    overview:[
      "Gilli is a current Consigliere / Senior Advisor. Across UL's history she repeatedly sits near prompts, events, transitions, care, and the social work of keeping a room active.",
      "Her strongest comic register is collection behavior: people, bits, responsibilities, Pizza Dough, emotional-support objects, and whatever else the archive has allowed to become portable shorthand. The point is not literal hoarding; it is the way recurring jokes become a cabinet with labels.",
      "Gilli also shows up in other people's files as a very good witness. She is one of the people who names what makes Gabu feel like Gabu and who repeatedly calls out Rummy's timing when the joke lands perfectly."
    ],
    characterNotes:[
      {title:"Emotional support collection",text:"A recurring house motif that grows by accumulation rather than one origin scene."},
      {title:"Peer narrator",text:"Gilli's reactions often help the archive see how the room itself characterizes another person."}
    ],
    roleNotes:["Current Consigliere / Senior Advisor."],
    canonNotes:["Collection motifs are social characterization, not a closeness ranking for every person/object involved."]
  },

  oyasumi: {
    dek:"Consigliere, front-door continuity character, and fluent speaker of the house's screenshot-court dialect.",
    overview:[
      "Oyasumi is a current Consigliere / Senior Advisor. His useful story function is continuity: he can disappear from the center of the archive and later re-enter with the room's old cadence still intact.",
      "Wall and reunion material keep him comfortable inside UL's evidentiary humor — asking why something is on the Wall, getting 'It funny' as a sufficient answer, or returning to a room whose jokes still assume everybody remembers court procedure.",
      "The current Consigliere rank is current canon; it should not be projected backward onto every older scene."
    ],
    roleNotes:["Current Consigliere / Senior Advisor."],
    canonNotes:["Current rank is not appointment chronology."]
  },

  yelik: {
    dek:"Game Officer, Parterre Gardener, and recurring proof that an absurd specialist title can still describe actual work.",
    overview:[
      "Yelik's primary file is Game Officers, with Parterre Gardener as a specialist appointment. The garden role is not decorative metadata: surviving scenes repeatedly put Yelik around the practical upkeep side of that space.",
      "Mugen eventually jokes on the Wall that Yelik is literally spending more time in her garden than she is. Later scenes add coordinates, time-window warnings, and pet alerts — the kind of low-drama maintenance behavior that makes the ridiculous title more accurate over time rather than less.",
      "The useful character read is reliability through ordinary work. The archive does not need to invent a grand arc when somebody is already tending the stupid virtual garden."
    ],
    roleNotes:["Primary shelf: Game Officers.","Parterre Gardener appointment."],
    canonNotes:["The 2026 gardener-memory scene is recollection, not appointment chronology."]
  },

  yassr: {
    dek:"Game Officer whose archive trail repeatedly lands near reminders, automation handoffs, and getting people into the next thing.",
    overview:[
      "Yassr / Sniperwolfxx belongs under Game Officers in the corrected roster, not Snipers. His surviving scenes have a practical connective quality: reminders, event logistics, and opportunities that need to reach other people.",
      "One especially clean handoff starts with a manual event reminder; Sye points to the ten-minute announcement automation; Yassr thanks her. Later he surfaces a five-person Scourge opportunity. The point is not that he invented the system. It is that his character file keeps touching the point where a person and a system meet."
    ],
    roleNotes:["Primary shelf: Game Officers.","Not a Sniper in the corrected roster."],
    canonNotes:["Sniperwolfxx is Yassr's alias; the name does not make him a current Sniper."]
  },

  chibiterasu: {
    dek:"Game Officer, Parterre Gardener, many aliases, one person, and a return pattern that should not be mistaken for repeated rejoining.",
    overview:[
      "Chibiterasu is the canonical public name for Chuutan / Chubi / Chuubi / Chibi. The primary file is Game Officers, with Parterre Gardener layered on top.",
      "The surviving archive catches a 2022 intake, 2023 anniversary event recognition, and later repeated Bouncer-card appearances. Those repeated intake-style artifacts are not enough to claim Chibiterasu repeatedly left and rejoined; bots can rerun onboarding mechanics for reasons the export does not preserve.",
      "A Sye 'chu chu' recognition moment is useful because it shows ordinary continuity without needing to inflate it into a relationship ranking."
    ],
    roleNotes:["Game Officer.","Parterre Gardener."],
    canonNotes:["Chibiterasu is the main public name.","2023 Nitro Snipers event recognition does not make Chibiterasu a formal Sniper.","Repeated MEE6 intake cards do not prove repeated departures/rejoins."]
  },

  zepp: {
    dek:"Staff, dentist, pre-Raja friend of Mugen, and one of the people who makes the social prequel visible without becoming a founder.",
    overview:[
      "Zepp is Staff in the current roster and part of Mugen's older online social world predating Dragon Raja. That older friendship does not make Zepp a UL founder or Officer; it simply means the character enters the show with pre-existing context.",
      "Archive scenes give Zepp enough ordinary-life texture to avoid becoming 'the prehistory guy': cooking, age jokes, food, and VIP Business Lounge conversation. The exact value is that he can carry both clocks at once — old relationship, later everyday UL life."
    ],
    roleNotes:["Current primary shelf: Staff."],
    canonNotes:["Pre-Raja friendship does not imply founding-circle or command status."]
  },

  gengrey: {
    dek:"Staff, old-network friend, and the bridge that explains why New enters Mugen's wider social world on a later clock.",
    overview:[
      "GenGrey is Staff and an older friend of Mugen and Key from before the UL story. That older friendship is important because it gives the archive a stable pre-Raja relationship line that should not be stretched to everybody GenGrey later introduces.",
      "New is GenGrey's friend and meets Mugen later through the wider social network. The two clocks matter: GenGrey belongs to the older Mugen/Key history; New does not get backdated into it simply because GenGrey connects them."
    ],
    roleNotes:["Current primary shelf: Staff."],
    canonNotes:["GenGrey's older friendship with Mugen/Key predates New's later meeting with Mugen."]
  },

  new: {
    dek:"GenGrey's friend, later UL character, and the continuity test for whether the wiki can resist dragging everybody backward into the same origin story.",
    overview:[
      "New / Newmal enters Mugen's story later through GenGrey and the wider social network. He becomes an active UL character, but he is not part of the older pre-Raja clock shared by Mugen, Key, and GenGrey.",
      "That distinction is exactly why he deserves a separate character page instead of one line inside GenGrey's. The interesting relationship is a later bridge, not retroactive childhood-friend logic.",
      "The archive also preserves that Key is not fond of New. It does not preserve enough safe evidence to invent a feud, cause, or singular incident explaining that feeling."
    ],
    canonNotes:["New = Newmal = _newplayer.","Do not backdate New into Mugen and Key's older pre-Raja circle.","Key not being fond of New is canon; the cause remains unresolved."]
  },

  momo: {
    dek:"Staff, couch-era domestic cast, and one half of the Mimi/Momo twin bit.",
    overview:[
      "Momo is Staff and belongs to the part of UL where the game stops being enough to describe what the server is doing. Sleep, couches, ordinary reactions, and domestic-room behavior are the useful scale.",
      "The clearest named relationship bit is Mia: 'me and momo are twinsss' / 'Mimi's twin' / 'love u twinnn.' Two days later the Wall repeats the Mimi & Momo identity joke. It is house-language kinship, not biology or account conflation."
    ],
    canonNotes:["Momo and Mia are distinct people; 'twins' is a recurring social joke."]
  },

  ansun: {
    dek:"Caporegime, practical moderator, and one of the early people Gabu remembers talking to when both were newer.",
    overview:[
      "Ansun / Souta / Sou is a current Caporegime / Secretary. His archive presence repeatedly lands on practical coordination, moderation, and being the person other people can route a problem toward without turning every scene into a speech about authority.",
      "Gabu remembers Ansun as one of the first people she talked to while both were newer. Rummy later jokes that Ansun is her lawyer only after she has already closed a misunderstanding herself. Both scenes fit the same social shape: reachable authority without inventing a formal role beyond the actual command rank."
    ],
    roleNotes:["Current Caporegime / Secretary."],
    canonNotes:["Rummy's 'lawyer' line is a joke, not an appointment."]
  },

  anthos: {
    dek:"Pit Boss and family-map mechanic: one of the people willing to edit a social diagram that had already become too large to read.",
    overview:[
      "Anthos is a current Pit Boss / Minister. Her archive personality becomes especially legible around Tumbleweed: not because she invented every relationship, but because she is one of the people treating the impossible family map as editable infrastructure.",
      "On September 29, 2020 she calls the structure 'like a mind map' and discusses where Dean, Cele, Woo, and others should attach. That scene is the opposite of formal genealogy. It is collaborative maintenance of a joke/social map whose users already understand the relationships being placed."
    ],
    roleNotes:["Current Pit Boss / Minister."],
    canonNotes:["Anthos is a woman.","Tumbleweed editing is not recruiting chronology."]
  },

  sye: {
    dek:"Caporegime and continuity character: the game ends, the room keeps recognizing her, and the story refuses to call that an ending.",
    overview:[
      "Sye / Life / Syenitha / Sadako is a current Caporegime / Secretary and Game Officer. She is especially useful in the late-era story because her presence crosses the point where Dragon Raja stops being the central plot engine.",
      "Her archive scenes also put her around practical handoffs — including pointing Yassr toward reminder automation — and recognition moments that show the house retaining shorthand across years. The page should treat current rank as current rank rather than backdating it into every older appearance."
    ],
    roleNotes:["Current Caporegime / Secretary.","Game Officer."],
    canonNotes:["Current rank does not establish appointment chronology."]
  },

  daya: {
    dek:"Pit Boss, Recruiter, and one of the rare Officers whose promotion date is actually recoverable without guessing from Discord role metadata.",
    overview:[
      "Daya / Dayadream is a current Pit Boss / Minister with Recruiter as a specialist appointment. Unlike many role histories, the archive directly confirms her promotion to Officer on May 14, 2022.",
      "That clean date is useful mostly because it shows what the wiki should demand elsewhere: a dated appointment receipt, not an export-time role list that happens to show what somebody had later."
    ],
    history:[{date:"May 14, 2022",title:"Officer promotion",text:"Archive-confirmed promotion to Officer. This is the kind of evidence that can safely anchor chronology."}],
    roleNotes:["Current Pit Boss / Minister.","Recruiter appointment."],
    canonNotes:["Do not use later role arrays to invent earlier appointment dates."]
  }
};

export function getCharacterBio(character: Character): CharacterBio {
  const explicit = characterBios[character.id];
  if (explicit) return explicit;
  const group = primaryGroupByCharacterId.get(character.id);
  const aliases = character.aliases?.length ? ` The archive also resolves ${character.aliases.join(", ")} to the same person.` : "";
  const tags = character.tags?.length ? ` The current file also carries ${character.tags.join(", ")}.` : "";
  return {
    overview:[
      `${character.name} is filed under ${group?.label ?? "the extended cast"} in the current wiki. ${character.logline}${aliases}`,
      `This page stays conservative where the archive has not yet earned a longer scene-level biography.${tags} A short file here means the evidence layer is still thinner, not that the person mattered less.`
    ],
    roleNotes:[`${character.role}.`, `Primary shelf: ${group?.label ?? "Archive / Extended Cast"}.`],
    canonNotes:["Roster presence, message counts, and co-presence do not by themselves establish closeness, authority, or appointment chronology."]
  };
}
