export interface CharacterRelationship { name: string; note: string; href?: string }
export interface Character {
  id: string;
  name: string;
  aliases?: string[];
  billing: "main" | "legacy" | "recurring";
  role: string;
  era: string;
  logline: string;
  tags?: string[];
  relationships?: CharacterRelationship[];
  quotes?: string[];
}

export interface LocationEntry {
  name: string;
  kind: string;
  note: string;
}

export interface RunningGagEntry {
  name: string;
  firstSeen: string;
  note: string;
}

export interface EpisodeEntry {
  title: string;
  date: string;
  note: string;
  cast: string[];
}

export const characters: Character[] = [
  { id:"mugen", name:"Mugen", aliases:["Mugs","MugenKizuki","LadyMugen"], billing:"main", role:"Founder · Boss", era:"2020–present", logline:"Founder, host, relationship router, and the person most likely to turn private nonsense into shared infrastructure and then make everybody else maintain it.", tags:["Founder","Boss","Archive host"] },
  { id:"gabu", name:"Gabu", aliases:["Gabumon"], billing:"main", role:"Caporegime · Game Officer", era:"2020–present", logline:"Officer, systems fixer, and one of Mugen's most trusted answer keys when the room needs somebody who actually knows what they're doing.", tags:["Officer","Game Officer","Systems"] },
  { id:"ren", name:"Ren", aliases:["RV","RΣN"], billing:"main", role:"Caporegime", era:"2020–present", logline:"Retrieval engine, relationship index, and one of the people most likely to remember exactly which old thing everyone is talking about.", tags:["Officer","Archive memory"] },
  { id:"wolfphenix", name:"WolfPhenix", aliases:["Wolf Phenix","Wolfie"], billing:"main", role:"Founder · Caporegime · News Editor", era:"2020–present", logline:"Founding-circle witness, screenshot archaeologist, and the person who can casually produce a six-year-old receipt mid-conversation.", tags:["Founder","Officer","News Editor"] },
  { id:"sye", name:"Sye", aliases:["Life","Syenitha","Sadako"], billing:"main", role:"Caporegime · Game Officer", era:"2020–present", logline:"Officer, late-era continuity voice, and one of the clearest bridges between the Dragon Raja club ending and the people not ending with it.", tags:["Officer","Game Officer"] },
  { id:"gilli", name:"Gilli", billing:"main", role:"Consigliere", era:"2020–present", logline:"Senior adviser with a habit of accumulating people, bits, responsibilities, and increasingly specific emotional-support objects.", tags:["Officer","Collection behavior"] },
  { id:"oyasumi", name:"Oyasumi", billing:"main", role:"Consigliere", era:"2020–present", logline:"Front-door continuity, screenshot-court dialect, and the kind of person who can walk back into a room years later without the room forgetting the rhythm.", tags:["Officer","Consigliere"] },
  { id:"rummy", name:"Rummy", aliases:["phenomenal_lamb_14960","Anna"], billing:"main", role:"Sniper · Party Director Apprentice · Game Officer · Platelet", era:"2020–present", logline:"Handoff character: recruiter, apprentice, gardener, recurring maintenance worker, and reunion-era keeper of the giant family tree.", tags:["Sniper","Platelet","Parterre Gardener"] , quotes:["Ah yes the *trees*","U can’t even see the name LMFAAOAO"]},
  { id:"han", name:"Han", aliases:["Nai","nai6965","."], billing:"main", role:"UL Media Director · filmmaker", era:"2021–present", logline:"The camera department. Designs Biodata, organizes voice/media work, and quits the game without quitting the club media job.", tags:["Media Director","Filmmaker","Never an Officer"] },
  { id:"mia", name:"Mia", aliases:["Mimi","Miaka","Opalite Honey"], billing:"main", role:"Pit Boss · UL Interrogator · Game Officer · Platelet", era:"2021–present", logline:"Short replies, fast reactions, and an alarming ability to turn somebody else's blank-canvas idea into communal doodles, themed sequels, and eventually a banana poster.", tags:["Officer","Interrogator","Platelet"] },
  { id:"nobu", name:"Nobu", aliases:["Xuseio"], billing:"main", role:"UL Party Director", era:"2020–present", logline:"Event/programming brain whose return in 2026 gets treated like a restaurant reopening and then immediately becomes part of the family reunion.", tags:["Party Director","Events"] },
  { id:"ansun", name:"Ansun", aliases:["Souta","Sou","颯太"], billing:"main", role:"Caporegime", era:"2020–present", logline:"Officer with a practical moderation streak and the energy of someone who has explained the same rule more than once.", tags:["Officer","Caporegime"] },
  { id:"daya", name:"Daya", aliases:["Dayadream"], billing:"main", role:"Pit Boss · Recruiter", era:"2020–present", logline:"Officer and recruiter whose sensible job title coexists with very ordinary manga logistics, including the historically questionable search method of title + `manga free` and then remembering viruses exist.", tags:["Officer","Recruiter","Manga","Petty Crimes"], relationships:[{name:"Gabu",note:"low-friction manga-site exchange: Daya asks where Gabu reads, Gabu answers, and both admit the free-source motive without turning it into a fandom ranking",href:"/characters/gabu"}], quotes:["i usually do \"(NAME) manga free\" on google, but i gotta be more careful of viruses LOL"] },
  { id:"anthos", name:"Anthos", billing:"main", role:"Pit Boss", era:"2020–present", logline:"Officer and family-map co-conspirator; one of the people who treats the Tumbleweed as editable social infrastructure instead of a sane diagram.", tags:["Officer","Tumbleweed"] },

  { id:"ritha", name:"Ritha", billing:"legacy", role:"Founder · retired Officer", era:"2020–", logline:"Founding-circle member who came with Mugen from Altissa and remains part of the permanent origin cast." },
  { id:"suzimasu", name:"Suzimasu", aliases:["Suzi","Mob","BAPE"], billing:"legacy", role:"Founder · retired Officer", era:"2020–", logline:"Founding-circle member and early Officer; one of the original five around the moment Underlords becomes Underlords, with a genuine streetwear streak and an openly enthusiastic BAPE preference.", tags:["Founder","Streetwear","BAPE"] },
  { id:"hyaluna", name:"HyaLuna", billing:"legacy", role:"Founder · retired Underboss", era:"2020–", logline:"Original Luna, founding-circle member, and historical Underboss. Distinct from later Candy/Luna." },
  { id:"yumi", name:"Yumi", aliases:["Yummibears"], billing:"legacy", role:"retired Officer", era:"2020–", logline:"Early full Officer and one of the recognizable faces of the 2020 command cast." },
  { id:"illien", name:"Illien", aliases:["Euros"], billing:"legacy", role:"retired Officer", era:"2020–", logline:"Early Officer. Euros is an alias, not a separate character." },
  { id:"key", name:"Key", aliases:["Captain Chihuahua"], billing:"legacy", role:"retired Officer", era:"pre-UL–", logline:"Older-network friend of Mugen, early Officer, and one of the people whose relationship history extends left of the show's official premiere." },
  { id:"kiro", name:"Kiro", aliases:["Gum","HicUUOOOOGH"], billing:"legacy", role:"retired Officer", era:"2020–", logline:"Full Officer, not a Sniper; one of the returning names in the 2026 continuity era." },
  { id:"nelph", name:"Nelph", billing:"legacy", role:"retired Officer", era:"2020–", logline:"Directly checks into the UL Discord on December 16, 2020 as `Nelphie, Underlords, S-9, 18`; later becomes a full Officer, and the reunion return makes different generations walking into the same episode visible." },

  { id:"dean", name:"Dean", aliases:["Beansprout","Deansprout"], billing:"recurring", role:"Platelet", era:"pre-UL–", logline:"Mugen's online son. Calls her mum. His relationship to her predates Dragon Raja and gives the cast a real prequel timeline." },
  { id:"moon", name:"Moon", billing:"recurring", role:"UL Night Shift Barista", era:"2020–", logline:"Late-room character, nursing-student era witness, and recurring night-shift energy." },
  { id:"hishiro", name:"Hishiro", billing:"recurring", role:"Staff", era:"2020–", logline:"Long-memory cast member whose 2026 return repeatedly lands as pure 'oh god I remember this' energy." },
  { id:"gengrey", name:"GenGrey", billing:"recurring", role:"Staff", era:"pre-UL–", logline:"Older friend of Mugen and Key, later social bridge to New, with roots that predate the UL server story." },
  { id:"new", name:"New", aliases:["Newmal","_newplayer"], billing:"recurring", role:"UL member", era:"pre-UL–", logline:"One of Mugen's older pre-Raja friends. A later scene remembers Mugen recruiting New through GenGrey in another setting, but that route is a later handoff — not New's first meeting with Mugen." },
  { id:"cele", name:"Cele", aliases:["Celeana","Celery"], billing:"recurring", role:"Platelet", era:"2020–", logline:"Platelet with recurring domestic/cleanup energy and enough archive presence to become part of the house furniture." },
  { id:"momo", name:"Momo", billing:"recurring", role:"Staff", era:"2021–", logline:"Couch-era recurring cast; sleep, reactions, and domestic UL make more sense once Momo is in frame." },
  { id:"nhou", name:"Nhou", billing:"recurring", role:"Staff", era:"2020–", logline:"Staff and real-life connection point in Mugen's orbit, recurring across ordinary-life UL scenes." },
  { id:"cookie", name:"Cookie", aliases:["Kuki","Cookies and Juicebox"], billing:"recurring", role:"Staff", era:"2020–", logline:"Recurring friend/cast member whose humor frequently arrives as 'I saw this and thought of you' ammunition." },
  { id:"rooks", name:"Rooks", billing:"recurring", role:"Staff", era:"2020–", logline:"Louvre regular, screenshot court reporter, and one of the cast members most likely to turn a visual into a social event." },
  { id:"shiyax", name:"ShiyaX", billing:"recurring", role:"Staff", era:"2020–", logline:"Wedding planner, older cast member, and an extremely willing participant in the guild's evidence-court nonsense." },
  { id:"snow", name:"Snow", billing:"recurring", role:"Officer · adviser", era:"2020–", logline:"Rules/security/governance specialist with a habit of building systems around messy humans and then remembering the humans are the point." },
  { id:"rich", name:"Rich", aliases:["DragonRich"], billing:"recurring", role:"Staff", era:"2020–", logline:"Couch creature, self-own specialist, and one of the people who can accept a tiny act of care by immediately making it disgusting." },
  { id:"candy", name:"Candy", aliases:["Luna"], billing:"recurring", role:"Staff", era:"2020–", logline:"Low-prose, high-precision reaction participant; one noise or emote can be enough to move the room." },
  { id:"ghostt", name:"Ghostt", billing:"recurring", role:"Staff", era:"2020–", logline:"Receipt necromancer with the patience to revive stale screenshots and the unseriousness to become the defendant when her own evidence bag opens." },
  { id:"woosung", name:"Woosung", aliases:["WOO"], billing:"recurring", role:"Staff", era:"2020–", logline:"Economical until a familiar person activates the emergency volume setting; then two words can carry an entire mock-betrayal prosecution." },
  { id:"yaza", name:"Yaza", aliases:["Yazaki","Rosario17"], billing:"recurring", role:"Staff", era:"2020–", logline:"Low-verbal but socially present, with a habit of answering the actual thing in front of her through compact approval, laughter, or soft teasing." },
  { id:"suzimasu-extra", name:"Suzi", aliases:["Suzimasu","Mob","BAPE"], billing:"recurring", role:"Founder · retired Officer", era:"2020–", logline:"See Suzimasu. Preserved as a searchable alias bridge for older archive spellings." },
];

export const locations: LocationEntry[] = [
  { name:"Club-Only", kind:"core room", note:"The ambient house room: announcements, domestic chatter, operations, teasing, and years of continuity all run through it." },
  { name:"Whiskey Room", kind:"social room", note:"Long-form hangout and reunion engine; the 2026 return turns it into a living afterparty for the archive." },
  { name:"Wall of Shame / Fame", kind:"gallery / court", note:"Screenshot court. Public evidence filing, affectionate prosecution, self-incrimination, appeals, and occasional fame." },
  { name:"Louvre", kind:"gallery", note:"Visual culture room where drafts, edits, outfits, art, screenshots, and aesthetic opinions become social conversation." },
  { name:"HQ", kind:"officer room", note:"Officer-only working room: moderation, operations, event planning, staffing, rules, and the ordinary mess behind formal decisions." },
  { name:"Daycare", kind:"social room", note:"A long-running casual room whose low-stakes chatter often exposes friendship texture more clearly than formal spaces do." },
  { name:"Backroom Deals", kind:"leadership room", note:"Early leadership deliberation and governance-adjacent discussion, including the unfinished-thought layer before questions reach the wider officer group." },
];

export const runningGags: RunningGagEntry[] = [
  { name:"Wall of Fame", firstSeen:"2020", note:"The affectionate/competitive inversion of shame: exposure can be punishment, belonging, status, a win, or something people actively try to qualify for." },
  { name:"Screenshot Court", firstSeen:"2020", note:"The house habit of treating screenshots as exhibits, people as defendants, and reactions as procedural law." },
  { name:"Tumbleweed", firstSeen:"2021", note:"The giant UL relationship/family map that becomes both social infrastructure and a recurring joke about how impossible the cast is to diagram sanely." },
  { name:"sippp", firstSeen:"2021", note:"A recovered GIF apparently escapes containment and becomes a custom emoji, then ordinary house vocabulary." },
];

export const episodes: EpisodeEntry[] = [
  { title:"The 2026 Reunion", date:"2026-08", note:"A multi-day return arc: people recognize the old house, drag out Dragon Raja screenshots, rebuild the family map, and discover that the social grammar survived the game.", cast:["Mugen","Ren","WolfPhenix","Rummy","Hishiro"] },
  { title:"The Tumbleweed", date:"2021–2026", note:"The relationship map becomes an ongoing communal object: edited, argued over, resurrected, and eventually rebuilt during the reunion.", cast:["Rummy","Anthos","Mugen"] },
];

export const featuredQuotes = [
  { quote:"Ah yes the *trees*", speaker:"Rummy", context:"Tumbleweed / family-map discussion" },
  { quote:"U can’t even see the name LMFAAOAO", speaker:"Rummy", context:"Tumbleweed / family-map discussion" },
  { quote:"the bots did it", speaker:"Mugen", context:"website / archive-making conversation" }
];

export const characterById = new Map(characters.map((character) => [character.id, character]));
