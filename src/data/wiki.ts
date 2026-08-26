export type Character = {
  id: string;
  name: string;
  aliases?: string[];
  billing: "main" | "recurring" | "legacy" | "guest";
  role: string;
  era: string;
  logline: string;
  tags?: string[];
  relationships?: Array<{ name: string; note: string; href?: string }>;
  quotes?: string[];
};

export type Season = {
  year: string;
  title: string;
  subtitle: string;
  summary: string;
};

export type Episode = {
  id: string;
  title: string;
  season: string;
  date: string;
  kind: string;
  logline: string;
  cast: string[];
};

export const characters: Character[] = [
  { id:"mugen", name:"Mugen", aliases:["Mugs","bossmugen"], billing:"main", role:"Founder · Boss", era:"2020–present", logline:"Starts Underlords, names half the furniture, keeps the receipts, and somehow becomes both narrator and recurring suspect.", tags:["Founder","Boss","Real Leather Papa"], relationships:[{name:"Dean",note:"online son; relationship predates Dragon Raja / UL",href:"/characters/dean"},{name:"GenGrey",note:"older friendship predating UL",href:"/characters/gengrey"},{name:"Han",note:"Biodata / media work",href:"/characters/han"}], quotes:["Family reunion","UL website but only for us lol"] },
  { id:"snow", name:"Snow", aliases:["Snowfyre"], billing:"main", role:"Pit Boss · Judgemen · Game Officer", era:"2020–present", logline:"Senior adviser, governance specialist, recurring legal department, and permanent target of the old-man allegations.", tags:["Officer","Judgemen","Snow is old"] },
  { id:"gabu", name:"Gabu", billing:"main", role:"Underboss · Game Officer", era:"2020–present", logline:"Systems brain, hydration department, and the person most likely to make care sound like routine maintenance.", tags:["Underboss","Drink Water Reminder","Hydration Department"] },
  { id:"ren", name:"Ren", aliases:["RV","RΣN"], billing:"main", role:"Caporegime", era:"2020–present", logline:"Retrieval engine, relationship index, and one of the people most likely to remember exactly which old thing everyone is talking about.", tags:["Officer","Archive memory"] },
  { id:"wolfphenix", name:"WolfPhenix", aliases:["Wolf Phenix","Wolfie"], billing:"main", role:"Founder · Caporegime · News Editor", era:"2020–present", logline:"Founding-circle witness, screenshot archaeologist, and the person who can casually produce a six-year-old receipt mid-conversation.", tags:["Founder","Officer","News Editor"] },
  { id:"sye", name:"Sye", aliases:["Life","Syenitha","Sadako"], billing:"main", role:"Caporegime · Game Officer", era:"2020–present", logline:"Officer, late-era continuity voice, and one of the clearest bridges between the Dragon Raja club ending and the people not ending with it.", tags:["Officer","Game Officer"] },
  { id:"gilli", name:"Gilli", billing:"main", role:"Consigliere", era:"2020–present", logline:"Senior adviser with a habit of accumulating people, bits, responsibilities, and increasingly specific emotional-support objects.", tags:["Officer","Collection behavior"] },
  { id:"oyasumi", name:"Oyasumi", billing:"main", role:"Consigliere", era:"2020–present", logline:"Front-door continuity, screenshot-court dialect, and the kind of person who can walk back into a room years later without the room forgetting the rhythm.", tags:["Officer","Consigliere"] },
  { id:"rummy", name:"Rummy", aliases:["phenomenal_lamb_14960"], billing:"main", role:"Sniper · Party Director Apprentice · Game Officer · Platelet", era:"2020–present", logline:"Handoff character: recruiter, apprentice, gardener, recurring maintenance worker, and reunion-era keeper of the giant family tree.", tags:["Sniper","Platelet","Parterre Gardener"] , quotes:["Ah yes the *trees*","U can’t even see the name LMFAAOAO"]},
  { id:"han", name:"Han", aliases:["Nai","nai6965","."], billing:"main", role:"UL Media Director · filmmaker", era:"2021–present", logline:"The camera department. Designs Biodata, organizes voice/media work, and quits the game without quitting the club media job.", tags:["Media Director","Filmmaker","Never an Officer"] },
  { id:"mia", name:"Mia", aliases:["Mimi","Miaka","Opalite Honey"], billing:"main", role:"Pit Boss · UL Interrogator · Game Officer · Platelet", era:"2021–present", logline:"Short replies, fast reactions, and an alarming ability to turn somebody else's blank-canvas idea into communal doodles, themed sequels, and eventually a banana poster.", tags:["Officer","Interrogator","Platelet"] },
  { id:"nobu", name:"Nobu", aliases:["Xuseio"], billing:"main", role:"UL Party Director", era:"2020–present", logline:"Event/programming brain whose return in 2026 gets treated like a restaurant reopening and then immediately becomes part of the family reunion.", tags:["Party Director","Events"] },
  { id:"ansun", name:"Ansun", aliases:["Souta","Sou","颯太"], billing:"main", role:"Caporegime", era:"2020–present", logline:"Officer with a practical moderation streak and the energy of someone who has explained the same rule more than once.", tags:["Officer","Caporegime"] },
  { id:"daya", name:"Daya", aliases:["Dayadream"], billing:"main", role:"Pit Boss · Recruiter", era:"2020–present", logline:"Officer and recruiter; archive-confirmed promotion in 2022, with the usual UL problem of a sensible job title living beside nonsense.", tags:["Officer","Recruiter"] },
  { id:"anthos", name:"Anthos", billing:"main", role:"Pit Boss", era:"2020–present", logline:"Officer and family-map co-conspirator; one of the people who treats the Tumbleweed as editable social infrastructure instead of a sane diagram.", tags:["Officer","Tumbleweed"] },

  { id:"ritha", name:"Ritha", billing:"legacy", role:"Founder · retired Officer", era:"2020–", logline:"Founding-circle member who came with Mugen from Altissa and remains part of the permanent origin cast." },
  { id:"suzimasu", name:"Suzimasu", aliases:["Suzi","Mob","BAPE"], billing:"legacy", role:"Founder · retired Officer", era:"2020–", logline:"Founding-circle member and early Officer; one of the original five around the moment Underlords becomes Underlords." },
  { id:"hyaluna", name:"HyaLuna", billing:"legacy", role:"Founder · retired Underboss", era:"2020–", logline:"Original Luna, founding-circle member, and historical Underboss. Distinct from later Candy/Luna." },
  { id:"yumi", name:"Yumi", aliases:["Yummibears"], billing:"legacy", role:"retired Officer", era:"2020–", logline:"Early full Officer and one of the recognizable faces of the 2020 command cast." },
  { id:"illien", name:"Illien", aliases:["Euros"], billing:"legacy", role:"retired Officer", era:"2020–", logline:"Early Officer. Euros is an alias, not a separate character." },
  { id:"key", name:"Key", aliases:["Captain Chihuahua"], billing:"legacy", role:"retired Officer", era:"pre-UL–", logline:"Older-network friend of Mugen, early Officer, and one of the people whose relationship history extends left of the show's official premiere." },
  { id:"kiro", name:"Kiro", aliases:["Gum","HicUUOOOOGH"], billing:"legacy", role:"retired Officer", era:"2020–", logline:"Full Officer, not a Sniper; one of the returning names in the 2026 continuity era." },
  { id:"nelph", name:"Nelph", billing:"legacy", role:"retired Officer", era:"2021–", logline:"Later full Officer whose return helps make the reunion feel like different generations walking into the same episode." },

  { id:"dean", name:"Dean", aliases:["Beansprout","Deansprout"], billing:"recurring", role:"Platelet", era:"pre-UL–", logline:"Mugen's online son. Calls her mum. His relationship to her predates Dragon Raja and gives the cast a real prequel timeline." },
  { id:"moon", name:"Moon", billing:"recurring", role:"UL Night Shift Barista", era:"2020–", logline:"Late-room character, nursing-student era witness, and recurring night-shift energy." },
  { id:"hishiro", name:"Hishiro", billing:"recurring", role:"Staff", era:"2020–", logline:"Long-memory cast member whose 2026 return repeatedly lands as pure 'oh god I remember this' energy." },
  { id:"gengrey", name:"GenGrey", billing:"recurring", role:"Staff", era:"pre-UL–", logline:"Older friend of Mugen and Key, later social bridge to New, with roots that predate the UL server story." },
  { id:"new", name:"New", aliases:["Newmal","_newplayer"], billing:"recurring", role:"UL member", era:"2023–", logline:"GenGrey's friend who meets Mugen later through the wider social network. Not part of the older pre-Raja clock." },
  { id:"cele", name:"Cele", aliases:["Celeana","Celery"], billing:"recurring", role:"Platelet", era:"2020–", logline:"Platelet with recurring domestic/cleanup energy and enough archive presence to become part of the house furniture." },
  { id:"momo", name:"Momo", billing:"recurring", role:"Staff", era:"2021–", logline:"Couch-era recurring cast; sleep, reactions, and domestic UL make more sense once Momo is in frame." },
  { id:"nhou", name:"Nhou", billing:"recurring", role:"Staff", era:"2020–", logline:"Staff and real-life connection point in Mugen's orbit, recurring across ordinary-life UL scenes." },
  { id:"cookie", name:"Cookie", aliases:["Kuki","Cookies and Juicebox"], billing:"recurring", role:"Staff", era:"2020–", logline:"Recurring friend/cast member whose humor frequently arrives as 'I saw this and thought of you' ammunition." },
  { id:"zepp", name:"Zepp", billing:"recurring", role:"Staff", era:"pre-UL–", logline:"Pre-Raja friend of Mugen and one of the older-network characters who makes UL's social prehistory visible." },
  { id:"ryo", name:"Ryo", billing:"recurring", role:"Platelet", era:"2020–", logline:"Platelet brought in through Moon's friendship network." },
  { id:"zoshaa", name:"Zoshaa", aliases:["NintendoShitcube"], billing:"recurring", role:"Platelet", era:"2020–", logline:"Canadian Platelet and recurring archive character with a name history too good to lose." },
  { id:"candy", name:"Candy", aliases:["~Candy~","— Luna"], billing:"recurring", role:"Platelet", era:"2021–", logline:"Later Luna/Candy. Explicitly not HyaLuna." },
  { id:"woohyuk", name:"Woohyuk", billing:"recurring", role:"VIP", era:"2020–", logline:"Visitor/family-adjacent recurring cast member with a long trail through memes, family-map material, and the wider social house." },
  { id:"zyrcant", name:"Zyrcant", aliases:["Akariel"], billing:"guest", role:"VIP · former Amaurot deputy", era:"2020–", logline:"Amaurot connection, VIP, and recurring extended-family guest." },
  { id:"rich", name:"Rich", aliases:["Ricochet","DragonRich"], billing:"guest", role:"VIP · Amaurot leader", era:"2020–", logline:"External-club leader and long-running guest presence; diplomacy becomes friendship becomes somebody still being around years later." }
];

export const seasons: Season[] = [
  { year:"2020", title:"Season One — Formation", subtitle:"the guild becomes a house faster than anyone can stop it", summary:"Mugen founds Underlords; the founding circle forms, recruitment accelerates, rooms acquire personalities, JAG appears, fake-family language mutates into the Tumbleweed, and the server starts behaving like it has always existed." },
  { year:"2021", title:"Season Two — Domestication", subtitle:"the cast stops acting like this is only a game", summary:"Biodata, voice challenges, Platelet culture, media work, QOTD precursors, and ordinary-life rituals turn the guild server into a durable social space." },
  { year:"2022", title:"Season Three — Ritualization", subtitle:"somebody has made this recurring programming now", summary:"Roles stabilize, Officer culture deepens, media and meme systems mature, hydration becomes a department, and repeated events become house tradition." },
  { year:"2023", title:"Season Four — Self-Mythologization", subtitle:"the show becomes aware it has lore", summary:"The archive starts looking backward while still producing new material. PR, memes, recurring challenges, and cross-room jokes turn memory into a shared production process." },
  { year:"2024", title:"Season Five — Decoupling", subtitle:"the game is increasingly not the point", summary:"Voice rooms, food, streams, pets, naps, and daily life make the social house legible even when Dragon Raja is no longer the central plot engine." },
  { year:"2025", title:"Season Six — Decommissioning", subtitle:"the guild gets an ending; the cast does not", summary:"The in-game Dragon Raja club is deliberately wound down, old rooms thin at different speeds, and UL remains portable as a social identity across games and off-channel relationships." },
  { year:"2026", title:"Season Seven — Afterlife", subtitle:"family reunion / website arc", summary:"The Wall reopens, old screenshots and Tumbleweed come back out, different generations call it a family reunion, and the cast watches its own archive become a website in real time." }
];

export const episodes: Episode[] = [
  { id:"founding-underlords", title:"The Founding", season:"2020", date:"March 2020", kind:"Origin", logline:"Mugen leaves Altissa to start Underlords; Ritha, WolfPhenix, Suzimasu, and HyaLuna come with her, forming the five-person founding circle.", cast:["Mugen","Ritha","WolfPhenix","Suzimasu","HyaLuna"] },
  { id:"jag-24-charges", title:"24 Charges for Getting Yeeted", season:"2020", date:"August 2020", kind:"Governance comedy", logline:"UL creates JAG, writes twenty-four 'Yeeting charges,' and simultaneously insists it is in no way a military organization.", cast:["Mugen","Snow"] },
  { id:"tumbleweed", title:"Sweet Home Alabama / Tumbleweed", season:"2020", date:"2020 → 2026", kind:"Running object", logline:"Fictive-family language becomes a gigantic editable relationship map, then returns six years later as reunion archaeology.", cast:["Mugen","Anthos","Rummy","Dean"] },
  { id:"fish-revolution", title:"Fish Revolution / Fishjail", season:"2021", date:"February 17, 2021", kind:"Club-Only incident", logline:"A SunFish outbreak ends with Snow threatening fishjail, Ren founding the fish revolution, Acoryuie calling everyone fish cultists, and Snow returning to his Chinese drama with instructions to leave messages at the fish pond.", cast:["Snow","Ren","Gabu","Zoshaa","Acoryuie"] },
  { id:"biodata", title:"Biodata Opens", season:"2021", date:"September 2021", kind:"Character episode", logline:"The server starts formally cataloguing its own people. Han's media/design work turns identity into something the group can edit, display, and remember.", cast:["Mugen","Han"] },
  { id:"voice-challenge", title:"UL Voice Challenge", season:"2021", date:"2021–2023", kind:"Event arc", logline:"Voice becomes another archive surface: accents, bits, performances, and the weird intimacy of hearing the people behind the text.", cast:["Han"] },
  { id:"officers-challenge", title:"Officers Challenge", season:"2022", date:"2022–2023", kind:"Event arc", logline:"An Officer-branded challenge that remains open to everyone, because UL naming conventions do not guarantee organizational clarity.", cast:["Ren","Sye"] },
  { id:"hydration-department", title:"Drink Water Reminder", season:"2022", date:"2022–present", kind:"Running gag / care ritual", logline:"Gabu's hydration behavior stops being a reminder and starts behaving like a department.", cast:["Gabu"] },
  { id:"doodles-part-2", title:"Doodles Part 2: Bananas", season:"2023", date:"June–August 2023", kind:"PR / communal-art episode", logline:"Ren proposes a blank canvas, Mia turns it into an open doodle relay, Gilli demands themed sequels, and the sequel is bananas; by August Daya is asking for the final copy to use as a Raja poster.", cast:["Ren","Mia","Gilli","Daya"] },
  { id:"domestic-ul", title:"The Living Room Season", season:"2024", date:"2024", kind:"Domestic episode", logline:"Food, streams, naps, pets, and typed residue from voice rooms make it impossible to pretend the group's main function is still a mobile game.", cast:["Sye","Momo"] },
  { id:"raja-ends", title:"The Game Ends. The House Doesn't.", season:"2025", date:"July–August 2025", kind:"Season finale", logline:"The Dragon Raja club is deliberately wound down. UL survives as the people, rooms, habits, and relationships around it.", cast:["Sye","Mugen"] },
  { id:"family-reunion", title:"Family Reunion", season:"2026", date:"August 14–18, 2026", kind:"Reunion special", logline:"Different UL generations return to Whiskey, old screenshots and the Tumbleweed come back out, and the room names itself a family reunion.", cast:["Mugen","Nobu","Sye","WolfPhenix","Rummy","Hishiro"] },
  { id:"website-qa", title:"The Cast QA's Its Own Wiki", season:"2026", date:"August 13–16, 2026", kind:"Meta episode", logline:"Mugen posts the developing Underlords site in Whiskey; the cast reacts, questions identities, and starts correcting its own adaptation while the reunion is still happening.", cast:["Mugen","Nobu","Feli","Oyasumi"] }
];

export const locations = [
  { id:"whiskey-room", name:"Whiskey Room", type:"Main hangout", logline:"The late-era living room and the site of the 2026 reunion." },
  { id:"club-only", name:"Club-Only", type:"Original main room", logline:"The obvious center while Dragon Raja membership still structures daily UL life." },
  { id:"the-wall", name:"The Wall", type:"Shame/Fame evidence locker", logline:"By August 2020 Ansun was calling it the Wall of Shame while Ren was already arguing Hall of Fame; by March 2021 Ren had fused the problem into `wall of shame-fame`." },
  { id:"lobby", name:"Lobby", type:"Front porch", logline:"Intake, visitors, bots with jobs, and the first impression of UL's house rules." },
  { id:"main-hq", name:"Main HQ", type:"Backstage", logline:"Officer governance and operational memory. Main HQ predates the later DR Game HQ split." },
  { id:"richards-corpse", name:"Richard's Corpse On A Cooch", type:"Voice-room couch", logline:"Dinner, naps, streaming, typed voice residue: the domestic final form." },
  { id:"panic-room", name:"Panic Room / speeling bee", type:"Core game room", logline:"A core UL room whose name tells you enough about the organization's spelling standards." },
  { id:"mugs-casino", name:"Mugs Casino", type:"Core game room", logline:"One of the native room concepts that makes the server feel like a neighborhood instead of a category list." }
];

export const gags = [
  { id:"snow-is-old", name:"Snow Is Old", logline:"The long-running allegation that Snow is ancient. Evidence quality: emotionally conclusive, chronologically rude." },
  { id:"alabama", name:"Alabama / Tumbleweed", logline:"The family situation becomes a diagram, then a diagram becomes a recurring object, then the object returns as archaeology." },
  { id:"fat-wheeze", name:"FAT_WHEEZE", logline:"Cross-room reaction grammar. Sometimes punctuation is an image." },
  { id:"hydration", name:"Hydration Department", logline:"Gabu tells people to drink water until the behavior becomes infrastructure." },
  { id:"platelets", name:"Platelets", logline:"Under-18 safety role that becomes permanent once assigned. The name comes from Cells at Work!" },
  { id:"bots-with-jobs", name:"Bots With Jobs", logline:"Welcome bot? No. Underlords Stripclub Bouncer. QOTD bot? Barista. The software has employment." },
  { id:"real-leather-papa", name:"Real Leather Papa", logline:"Mugen house signature / recurring trademark. Origin remains open; recurrence does not require inventing a first use." },
  { id:"spelling-crimes", name:"UL Cannot Spell", logline:"Typos, malformed commands, and room names become part of the native language instead of errors to clean up." }
];

export const relationshipGroups = [
  { title:"Founding Circle", people:["Mugen","Ritha","WolfPhenix","Suzimasu","HyaLuna"], note:"Mugen founded UL; the other four came with her from Altissa." },
  { title:"Pre-UL / older network", people:["Mugen","Dean","Key","Zepp","GenGrey"], note:"Relationships that begin before the official Underlords story. New joins this wider network later through GenGrey; do not flatten him onto the older clock." },
  { title:"Media axis", people:["Mugen","Han"], note:"Biodata, media production, and the duty that becomes Media Director." },
  { title:"Party department", people:["Nobu","Rummy"], note:"Party Director → Party Director Apprentice. Apprentice is not co-equal Director." },
  { title:"Tumbleweed return", people:["Mugen","Rummy","Anthos","Dean"], note:"Family language → map → reunion memory tool." }
];

export const featuredQuotes = [
  { quote:"We are in no way a military organization.", speaker:"UL / JAG", context:"2020 JAG language" },
  { quote:"It funny", speaker:"Mia", context:"Wall admissibility ruling, April 2023" },
  { quote:"Family reunion", speaker:"Mugen", context:"Whiskey, August 14, 2026" },
  { quote:"Ah yes the *trees*", speaker:"Rummy", context:"Tumbleweed returns, August 12, 2026" },
  { quote:"GAHDAMN", speaker:"Mugen", context:"looking at the Tumbleweed again" },
  { quote:"UL website but only for us lol", speaker:"Mugen", context:"reunion website QA arc" },
  { quote:"the bots did it", speaker:"Mugen", context:"website / archive-making conversation" }
];

export const characterById = new Map(characters.map((character) => [character.id, character]));