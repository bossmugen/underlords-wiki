import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertArchiveCharacter = (seed: ExtendedCharacter, addToArchiveCast = true) => {
  const index = allCharacters.findIndex((character) => character.id === seed.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      ...seed,
      aliases: appendUnique(current.aliases, seed.aliases ?? []),
      tags: appendUnique(current.tags, seed.tags ?? []),
      relationships: seed.relationships,
      quotes: appendUnique(current.quotes, seed.quotes ?? []),
      claims: appendUnique(current.claims, seed.claims ?? []),
      antiFanon: appendUnique(current.antiFanon, seed.antiFanon ?? []),
    } as ExtendedCharacter;
  } else {
    allCharacters.push(seed);
  }

  const canonical = allCharacters.find((character) => character.id === seed.id)!;
  characterById.set(seed.id, canonical);
  if (addToArchiveCast) {
    const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
    if (archiveCastGroup && !archiveCastGroup.characterIds.includes(seed.id)) {
      archiveCastGroup.characterIds.push(seed.id);
    }
  }
};

const mercy: ExtendedCharacter = {
  id: "mercy",
  name: "Mërcy",
  aliases: ["mercy074431", "mercurytsuan"],
  billing: "legacy",
  role: "Archive-era Daycare cast / practical helper",
  era: "2021–2025+",
  logline:
    "Mërcy is low-ceremony useful with a mischievous little bite. She can explain a recruit command without making herself the process owner, check whether Louvre is actually happening, tell somebody quitting cigarettes `im proud of u` and then immediately ban the 🥺 face, recommend a happy song she genuinely likes, argue for zucchini in a wok, or announce `let me trash talk u` when the room turns competitive. Even her self-owns are participatory: if she reads `laddie` as `lady`, everybody gets the incident report.",
  tags: [
    "Archive cast",
    "Daycare",
    "Onboarding",
    "Recruitment help",
    "Procedural clarity",
    "Welcoming",
    "Evidence-first questions",
    "Schedule awareness",
    "Competitive banter",
    "Supportive teasing",
    "Music",
    "Home cooking",
    "Self-own humor",
    "Shared-bit fluency",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "Mërcy can tell Mugen `Saved it!!! now delete it before someone else take it` after securing a shared item; Mugen answers `Lol okii`, and Ren immediately echoes the deletion joke. The tiny demand lands because the social permission is already easy. It supports playful familiarity, not a closeness rank.",
      href: "/characters/mugen",
    },
    {
      name: "Sye",
      note:
        "Mërcy is already using affectionate `W/hug` language early in the surviving chronology, then later brings Sye a game-mechanics question with screenshot and video comparison already attached. Sye answers; Mërcy says `Ohhh ok, thanks !`. Cute-social and practical-help modes coexist without ceremony.",
      href: "/characters/sye",
    },
    {
      name: "Nelph",
      note:
        "A November 2021 pocket turns into mirrored `😌` and a fake local-business pitch for fresh cookies. Nelph's `AKA me and koi` probably points back to Mërcy's supplied Lobby IGN `鯉`; the callback is useful social texture without converting `koi` into a hard alias bridge.",
      href: "/characters/nelph",
    },
    {
      name: "Snow",
      note:
        "When Snow says he has gone fourteen days without cigarettes, Mërcy answers `im proud of u`. Snow deploys a 🥺; Mërcy immediately fires back `NO DONT USE THAT U/` and then `emote`. The care is direct and the sentimentality has a strict speed limit. Their nearby marriage riff remains a joke, not relationship canon.",
      href: "/characters/snow",
    },
    {
      name: "Anayss",
      note:
        "Anayss can ask the room for happy songs and get a real Mërcy recommendation; after Anayss calls it cute, Mërcy answers `sniff` and `i lov all my music 😔`. In the same ordinary-life pocket Mërcy is also volunteering zucchini technique down to salt, pepper, soy sauce and `wok should be enough`. The relationship texture is casual enough for taste, food and nonsense to share one conversation.",
      href: "/characters/anayss",
    },
    {
      name: "Gabu",
      note:
        "Gabu and Mërcy can bounce from a mistress/CEO-service joke straight into event logistics. When Mërcy asks whether Louvre is happening, Gabu gives the group-two delay; Mërcy does not need a formal announcement to ask the practical room question. The earlier sexualized wording stays joke language, not literal relationship evidence.",
      href: "/characters/gabu",
    },
  ],
  quotes: [
    "meeee",
    "i can help with recruitment",
    "you’re good 🥺 welcome!!",
    "refer gets referral recruit gives rank i think",
    "Saved it!!! now delete it before someone else take it",
    "Okay I have a dumb question, it’s either my memory is plain terrible but did kids start with blonde hair then to orange ??",
    "Ohhh ok, thanks !",
    "my blind ass read that first as lady 🤔 how but it was laddie",
    "wait is there no louvre today👀",
    "im proud of u",
    "NO DONT USE THAT U/",
    "i lov all my music 😔",
    "let me trash talk u",
    "do u like zuccinini?",
    "wok should be enough",
  ],
  claims: [
    "Stable account 906809263995908096 appears as Mërcy across the reviewed chronology, including username/handle forms `mercy074431` and later `mercurytsuan`. `鯉` remains a supplied Lobby IGN/display context rather than being promoted into a hard account alias from one field alone.",
    "The assigned 2021 Daycare ledger is tiny, but the same stable account is already participating across Lobby, Club Only, Photo Submissions and Wall in the surrounding November chronology. Low assigned-room volume is not treated as social absence.",
    "Mërcy softens uncertainty socially while checking the thing herself: `Okay I have a dumb question...` is followed by an image and then a `Video difference` clip before Sye answers. The stronger read is self-deprecating phrasing paired with evidence-first curiosity, not helplessness.",
    "The Nov. 8 `Saved it!!! now delete it...` pocket adds a playful resource-hoarder streak. Mugen plays along and Ren immediately repeats the premise, so the joke needs almost no setup once Mërcy makes the demand.",
    "When somebody asks for recruitment help in January 2024, Mërcy volunteers immediately, explains `/recruit`, later clarifies that referral is only needed for the referral path, and remains present while the access/rank flow completes.",
    "The next day, when the same newcomer checks whether regular recruitment is allowed, Mërcy answers the procedural question and lands on `you’re good 🥺 welcome!!`. The useful read is not merely command knowledge; she closes the loop socially once the machinery is out of the way.",
    "In March 2024 she again translates the slash-command distinction for Estera—`refer gets referral recruit gives rank i think`—while Smoo handles the separate practical detail that the target needs to join first. Mërcy’s habit is low-friction process help, not monopolizing the process.",
    "A January 14–15, 2022 Daycare pocket broadens the person beyond helper duty: Mërcy checks Louvre timing, joins competitive trash talk, reports her own `lady`/`laddie` misread, recommends music, gives concrete zucchini stir-fry advice, and uses short reactions/images as part of the room's normal rhythm.",
    "When Snow says he has gone fourteen days without cigarettes, Mërcy answers `im proud of u`; when he responds with a pleading-face emote, she immediately objects to the emote. The sequence supports explicit encouragement plus teasing discomfort with the sentimental face, not emotional distance.",
    "Asked for a happy song, Mërcy recommends Galantis ft. MNEK's `Damn (You’ve Got Me Saying)`; after Anayss calls the pick cute, Mërcy answers `sniff` and `i lov all my music 😔`. That is a dated, concrete music-affection beat rather than a generic `likes music` tag invented from profile metadata.",
    "Mërcy's food talk is similarly specific: she asks about zucchini, says it is good stir-fried, suggests salt, pepper and soy sauce, rejects the need for searing, and says a wok is enough. Ordinary practical taste is part of the file even when no formal role or event is involved.",
  ],
  antiFanon: [
    "Helping with recruitment does not establish a formal Recruiter, Officer, Staff, or administrator appointment. The dossier owns the repeated behavior, not an invented title history.",
    "A later bot-rendered `@Staff` label is role state at that time only and is not used to backdate an appointment or make the role permanent.",
    "The two assigned 2021 Daycare message bodies remain unavailable and are not reconstructed from supporting rooms.",
    "MEE6's November 2021 welcome is not treated as proof of Mërcy's first-ever origin or join date.",
    "`鯉` is a supplied Lobby IGN/display context. Nelph's later `koi` is a probable contextual callback, not a forced account alias or identity bridge.",
    "The reviewed Photo Submissions image and later panda/image posts remain visually uninspected. POSTED BY does not become MADE BY, CAPTURED BY, or FEATURING without separate support.",
    "The older cookies/giveaways/helper material and the later recruitment-help material are cumulative parts of one person file; neither is treated as Mërcy's entire history.",
    "The mistress/CEO-service exchange, Snow's joke-marriage line, and Mërcy's `sorry muther` reply are room riffs. They do not establish literal romance, sex, marriage, family structure, or service roles.",
    "Snow's cigarette-cessation line is Snow's self-report; Mërcy's response supports encouragement only. Do not derive health history, diagnosis, dependency severity, or treatment details from the exchange.",
    "`are you calling a trap?` appears inside competitive banter and is not used to infer Mërcy's gender identity, sex, sexuality, or anybody else's protected identity.",
    "The January 2022 song recommendation and cooking advice are dated taste/ordinary-life texture, not proof of an all-time favorite song, professional cooking role, ethnicity, nationality, or cultural origin.",
    "The January 2022 Louvre question supports event/schedule awareness, not a PR, event-management, Photoshoot, or formal operations appointment.",
  ],
};

const illien: ExtendedCharacter = {
  id: "illien",
  name: "Illien",
  aliases: ["Euros", "eurosabraxas"],
  billing: "legacy",
  role: "retired Officer · Archive-era Wall cast",
  era: "2020–",
  logline:
    "Retired Officer whose Wall life is much less résumé-shaped: Illien is a receipt-ready co-filer whose favorite second step is making the bit one degree worse. She remembers who still needs tagging, recognizes old `we’ve lost Pride’s body` lore from a stray GIF, arrives ready to jail Ren and decorate the prosecution with cartoon props, then turns one cat joke into an undercover-cat organization. Responsive, cumulative humor is the tell—somebody else supplies a cue and Illien keeps it alive until the room has miniature mythology.",
  tags: [
    "Retired Officer",
    "Archive cast",
    "Wall",
    "Receipt culture",
    "Callback memory",
    "Associative humor",
    "Shared-bit escalation",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Anthos",
      note:
        "Illien repeatedly catches Anthos’s lines and sends them somewhere stranger: `thanos???` becomes a chain through name confusion, Christmas lists to Satan, prayers to a dog, `tacocat` and `racecar`. Easy call-and-response and affectionate riffing are supported; a closeness ranking is not.",
      href: "/characters/anthos",
    },
    {
      name: "Ren",
      note:
        "Illien can say she was already coming to file the same thing Ren has just conceded, add the jail GIF, and later true-reply into Ren’s cat premise with `You mean like...CATS`. Co-prosecution and shared improv are recurring Wall grammar here, not evidence of exclusivity or hierarchy.",
      href: "/characters/ren",
    },
    {
      name: "Pride",
      note:
        "An unrelated GIF can remind Illien of every time she read `we’ve lost Pride’s body` in Club Chat; she then circles back with `Sorry, forgot to tag`. That supports remembered shared-room lore plus courtesy-tag behavior, not ownership of the joke’s origin.",
      href: "/characters/pride",
    },
  ],
  quotes: [
    "I was coming to do the same",
    "Book: 101 cute ways to murder",
    "You mean like...CATS",
    "OMG....UL is actually a bunch of undercover cats O_O",
    "Meowone shall know",
  ],
  claims: [
    "User-confirmed canon resolves Euros = Illien. Stable account 679943266090614843 appears as username `eurosabraxas`, rendered Euros, in the reviewed Wall source; those labels belong to the same person rather than two cast entries.",
    "Illien is a retired Officer in canonical roster history. The Wall packet deepens how she behaves socially; it does not replace or redetermine that formal role history.",
    "Illien repeatedly remembers the social bookkeeping around receipts: after posting media she can return seconds later with `Almost forgot @Mugen`, and in a separate old-lore callback she adds `Sorry, forgot to tag` for Pride.",
    "Her Wall humor is strongly associative. Anthos’s `thanos???` cue expands into several linked wordplay beats; Ren’s cat line becomes `You mean like...CATS`, then an undercover-cat premise, then `Meowone shall know`. She tends to build from an existing cue rather than seize the room with a disconnected monologue.",
    "The prosecution lane has the same playfulness: when Ren concedes there is no defense, Illien says `I was coming to do the same`, supplies a jail GIF, calls it `Noodle in jail`, and soon adds `Book: 101 cute ways to murder`. Receipt work and cartoon decoration happily coexist.",
  ],
  antiFanon: [
    "Euros = Illien is a hard user-confirmed identity bridge. Do not split them into separate people in later integrations.",
    "Illien's formal retired-Officer status comes from canonical roster history; Wall receipt behavior is not used to invent appointment dates, command hierarchy, or new governance titles.",
    "POSTED BY Illien is not MADE BY, CAPTURED BY, or FEATURING Illien. The reviewed Wall attachments remain visually uninspected unless separately resolved.",
    "Remembering the `we’ve lost Pride’s body` wording does not establish that Illien originated it. Earliest surviving use and joke origin remain separate questions.",
    "The cat, murder-book, Satan/dog, `tacocat`, and related lines are room riffs, not literal identity, violence, religion, diagnosis, or biography facts.",
  ],
};

upsertArchiveCharacter(mercy);
upsertArchiveCharacter(illien, false);
