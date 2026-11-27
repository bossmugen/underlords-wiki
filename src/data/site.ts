export type SiteNavItem = {
  label: string;
  href: string;
  ariaLabel: string;
  description?: string;
};

export const PRIMARY_NAV: SiteNavItem[] = [
  {
    label: "STRIPPERS",
    href: "/characters",
    ariaLabel: "Browse Underlords people and character biographies",
    description: "Meet the clowns responsible.",
  },
  {
    label: "THE FUCK HAPPENED",
    href: "/seasons",
    ariaLabel: "Browse the Underlords chronology and story eras",
    description: "Six years. Many mistakes.",
  },
  {
    label: "ROOMS",
    href: "/rooms",
    ariaLabel: "Browse Underlords rooms and social spaces",
    description: "Every bad decision needs somewhere to happen.",
  },
  {
    label: "WALL OF SHAME/FAME",
    href: "/gallery",
    ariaLabel: "Browse the Underlords visual archive",
    description: "Screenshots, art, propaganda, and surviving objects.",
  },
  {
    label: "SNOOP",
    href: "/snoop",
    ariaLabel: "Search the Underlords site",
    description: "Dig through everybody's business.",
  },
];

export const SECONDARY_NAV: SiteNavItem[] = [
  {
    label: "EPISODES & INCIDENTS",
    href: "/episodes",
    ariaLabel: "Browse Underlords episodes and incidents",
    description: "The situations that acquired names and refused to die.",
  },
  {
    label: "ENTANGLEMENTS",
    href: "/relationships",
    ariaLabel: "Browse Underlords relationships and recurring pairings",
    description: "Family nouns, friendships, beef, and other attachments.",
  },
  {
    label: "THE CLOWN CAR",
    href: "/clown-car",
    ariaLabel: "Browse the Underlords social relationship map",
    description: "Everybody is connected. Unfortunately.",
  },
  {
    label: "EMPLOYMENT FRAUD",
    href: "/factions",
    ariaLabel: "Browse Underlords roles, ranks, and hierarchy",
    description: "The job titles were ridiculous. The permissions were real.",
  },
  {
    label: "BULLSHIT",
    href: "/gags",
    ariaLabel: "Browse Underlords running jokes and local lore",
    description: "Names, rituals, accusations, and repeat offenses.",
  },
  {
    label: "MOUTH CRIMES",
    href: "/quotes",
    ariaLabel: "Browse notable Underlords quotes",
    description: "Things people typed before proofreading became an option.",
  },
  {
    label: "SPEAK ENGLIAH",
    href: "/speak-engliah",
    ariaLabel: "Open the Underlords glossary and terminology guide",
    description: "The typo stayed. Everybody understood it.",
  },
  {
    label: "THE BASEMENT",
    href: "/archive",
    ariaLabel: "Open the Underlords archive and source layer",
    description: "Receipts, provenance, missing pieces, and the machinery downstairs.",
  },
  {
    label: "WE FUCKED UP",
    href: "/we-fucked-up",
    ariaLabel: "Read site corrections and continuity repairs",
    description: "Corrections, identity repairs, and things Mugs had to fix.",
  },
];

export const HOME_DOORS = PRIMARY_NAV.slice(0, 3);

export const FEATURED_CHARACTER_IDS = [
  "mugen",
  "ren",
  "gabu",
  "sye",
  "wolfphenix",
  "rummy",
  "mia",
  "nobu",
] as const;

export const FEATURED_EPISODE_IDS = [
  "family-reunion",
  "website-qa",
  "tumbleweed",
  "raja-ends",
] as const;

export const FEATURED_ROOM_IDS = [
  "whiskey-room",
  "club-only",
  "the-wall",
  "main-hq",
] as const;

export const FRESH_DIRT = [
  {
    date: "September 1, 2026",
    label: "THE BUILDING HAS A FRONT DOOR NOW",
    title: "The site stopped exposing its database schema to civilians.",
    text: "People, story, rooms, and the Wall now lead the experience. The filing cabinets moved downstairs where they belong.",
    href: "/start-here",
    cta: "START WITH THE MESS",
  },
  {
    date: "September 1, 2026",
    label: "VOICE REPAIR",
    title: "Fast typing is not bad spelling.",
    text: "UL typo energy now means transposed letters, dropped words, sentence collisions, and autocorrect betrayal—not fake illiteracy. SPEAK ENGLIAH survived the meeting.",
    href: "/speak-engliah",
    cta: "SPEAK ENGLIAH",
  },
  {
    date: "August 2026",
    label: "FRESH DIRT",
    title: "The reunion became an episode instead of one lonely event card.",
    text: "The return, old screenshots, Tumbleweed archaeology, and website QA now sit inside the larger afterlife story.",
    href: "/episodes/family-reunion",
    cta: "WHAT HAPPENED",
  },
] as const;

export const ROOM_GROUPS = [
  {
    id: "main-floor",
    label: "MAIN FLOOR",
    note: "The rooms where the house was loudest and most visible.",
    roomIds: ["whiskey-room", "club-only", "lobby", "the-wall"],
  },
  {
    id: "alleged-management",
    label: "ALLEGED MANAGEMENT",
    note: "Governance, permissions, planning, and adults allegedly doing administration.",
    roomIds: ["main-hq"],
  },
  {
    id: "knock-first",
    label: "KNOCK FIRST",
    note: "Game rooms, private corners, and doors whose names were already warnings.",
    roomIds: ["panic-room", "mugs-casino"],
  },
  {
    id: "condemned",
    label: "CONDEMNED",
    note: "Dead, renamed, or repurposed rooms that still have surviving stories.",
    roomIds: ["richards-corpse"],
  },
] as const;

export const ROOM_LINEAGE: Record<string, string> = {
  "whiskey-room": "Late-era living room · reunion headquarters · current center of gravity",
  "club-only": "Original text living room · daily guild life became household life here",
  "the-wall": "Wall of Shame → Hall of Fame argument → Wall of Shame/Fame",
  lobby: "Front porch · intake desk · bouncer-operated border crossing",
  "main-hq": "Officer governance · operational memory · backstage decisions",
  "richards-corpse": "Fight Club VC ancestry → Rich's couch → dinner, naps, streams, and voice residue",
  "panic-room": "Core game room · speeling bee survived as native fast-finger typography",
  "mugs-casino": "Core game room · one more reason the server reads like a neighborhood",
};

export const GLOSSARY = [
  {
    term: "Underlords / UL",
    definition: "The group, the Discord house, the old Dragon Raja club, and the social identity that outlived the game. Context usually tells you which layer is currently committing the crime.",
    links: [{ label: "THE FUCK HAPPENED", href: "/seasons" }],
  },
  {
    term: "Strippers",
    definition: "The visible cast directory. Not a rank. Not an employment disclosure. The clowns responsible.",
    links: [{ label: "MEET THEM", href: "/characters" }],
  },
  {
    term: "Platelets",
    definition: "UL's younger-member safety role, named after Cells at Work! Once assigned, the label became part of the house vocabulary rather than a temporary age note.",
    links: [{ label: "EMPLOYMENT FRAUD", href: "/factions#platelets" }],
  },
  {
    term: "Wall of Shame/Fame",
    definition: "The evidence locker. Dumb lines get caught, screenshots become exhibits, context gets appealed, and everybody eventually learns the room's dialect.",
    links: [{ label: "GO TO THE WALL", href: "/gallery" }],
  },
  {
    term: "Tumbleweed",
    definition: "The giant editable family map born from UL's fictive-family language. It returned during the 2026 reunion as both a memory device and an immediate threat to readability.",
    links: [{ label: "THE EPISODE", href: "/episodes/tumbleweed" }],
  },
  {
    term: "Club-Only",
    definition: "The original text living room. What began as a guild room became ambient daily social life, then remained meaningful after the roster stopped being the point.",
    links: [{ label: "GO IN", href: "/locations#club-only" }],
  },
  {
    term: "Whiskey Room",
    definition: "The late-era lounge and 2026 reunion room. People returned, recognized old iconography, produced old screenshots, and resumed the rhythm with suspicious ease.",
    links: [{ label: "GO IN", href: "/locations#whiskey-room" }],
  },
  {
    term: "Petty Crimes",
    definition: "The catch-all biography section for habits, tastes, tiny facts, recurring jokes, odd discoveries, and embarrassments too useful to throw away.",
    links: [{ label: "STRIPPERS", href: "/characters" }],
  },
  {
    term: "SPEAK ENGLIAH",
    definition: "The glossary label and a model typo: a plausible adjacent-key slip produced at speed, instantly understood, and never repaired. UL members can spell. Their thumbs simply have somewhere else to be.",
    links: [],
  },
] as const;

export const CORRECTIONS = [
  {
    date: "September 1, 2026",
    title: "UL cannot spell → UL types too fast",
    text: "The old framing was wrong. The signature is velocity: transposed letters, dropped words, doubled fragments, punctuation crashes, and autocorrect substitutions that everybody decodes without ceremony.",
    status: "FIXED",
  },
  {
    date: "August 27, 2026",
    title: "Akamin is not Mere",
    text: "They are separate people. Akamin's use of “mama” for Mugen stays attached to Akamin rather than leaking into a collapsed identity record.",
    status: "FIXED",
  },
  {
    date: "August 2026",
    title: "Candy / later Luna is not HyaLuna",
    text: "The founding-era HyaLuna and the later Candy/Luna identity remain separate character records.",
    status: "FIXED",
  },
  {
    date: "August 2026",
    title: "Euros is Illien",
    text: "Euros is an alias attached to Illien, not a second person wandering around the cast index in a fake mustache.",
    status: "FIXED",
  },
] as const;

export const TYPO_POLICY = {
  principle: "Fast fingers, shared comprehension, zero literacy joke.",
  allowed: [
    "transposed or adjacent-key letters",
    "dropped or duplicated words",
    "sentence fragments colliding in transit",
    "punctuation and spacing landing one beat early",
    "plausible autocorrect substitutions",
    "real archive typos preserved inside quotes",
  ],
  avoid: [
    "phonetic misspellings invented to make someone look uneducated",
    "mangling every label until navigation becomes a costume",
    "cleaning real quotes until every speaker sounds like the narrator",
    "making every person share one generic chaos dialect",
  ],
} as const;

export const ERA_TRANSITIONS: Record<string, string> = {
  "2020": "Unfortunately, 2021",
  "2021": "Somehow, 2022",
  "2022": "This became a tradition. 2023",
  "2023": "The lore noticed itself. 2024",
  "2024": "The game stopped being the point. 2025",
  "2025": "The lights went off. Nobody left. 2026",
};
