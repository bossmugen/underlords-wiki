import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertArchiveCharacter = (seed: ExtendedCharacter) => {
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
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(seed.id)) {
    archiveCastGroup.characterIds.push(seed.id);
  }
};

const mercy: ExtendedCharacter = {
  id: "mercy",
  name: "Mërcy",
  aliases: ["mercy074431"],
  billing: "legacy",
  role: "Archive-era Daycare cast / onboarding helper",
  era: "2023–2025+",
  logline:
    "The person who makes a confusing doorway feel much smaller. Mërcy can answer a recruitment-help request with `meeee`, translate `/refer` versus `/recruit` into two usable sentences, stay close enough to see whether the newcomer actually gets through, and then switch from command syntax to `you’re good 🥺 welcome!!` the second the procedure is done. Practical without making a performance of being practical; warm without turning onboarding into a ceremony.",
  tags: [
    "Archive cast",
    "Daycare",
    "Onboarding",
    "Recruitment help",
    "Procedural clarity",
    "Welcoming",
    "Petty Crimes",
  ],
  relationships: [],
  quotes: [
    "meeee",
    "i can help with recruitment",
    "you’re good 🥺 welcome!!",
    "refer gets referral recruit gives rank i think",
  ],
  claims: [
    "Stable account 906809263995908096 appears as Mërcy / `mercy074431` in the reviewed Daycare packet.",
    "When somebody asks for recruitment help in January 2024, Mërcy volunteers immediately, explains `/recruit`, later clarifies that referral is only needed for the referral path, and remains present while the access/rank flow completes.",
    "The next day, when the same newcomer checks whether regular recruitment is allowed, Mërcy answers the procedural question and lands on `you’re good 🥺 welcome!!`. The useful read is not merely command knowledge; she closes the loop socially once the machinery is out of the way.",
    "In March 2024 she again translates the slash-command distinction for Estera—`refer gets referral recruit gives rank i think`—while Smoo handles the separate practical detail that the target needs to join first. Mërcy’s habit is low-friction process help, not monopolizing the process.",
  ],
  antiFanon: [
    "Helping with recruitment does not establish a formal Recruiter, Officer, Staff, or administrator appointment. The dossier owns the repeated behavior, not an invented title history.",
    "A later bot-rendered `@Staff` label is role state at that time only and is not used to backdate an appointment or make the role permanent.",
    "The older cookies/giveaways/helper material belongs to an already-reviewed evidence family; this integration does not pretend the 2024 recruitment scenes are Mërcy’s entire history.",
  ],
};

const illien: ExtendedCharacter = {
  id: "illien",
  name: "Illien",
  aliases: ["Euros", "eurosabraxas"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2020+",
  logline:
    "A receipt-ready co-filer whose favorite second step is making the bit one degree worse. Illien can remember who still needs tagging after the attachment is already up, recognize an old `we’ve lost Pride’s body` callback from one stray GIF, arrive ready to jail Ren and decorate the prosecution with cartoon props, then turn `we do be licking each other tho` into the discovery that UL is apparently an undercover-cat organization. Responsive, cumulative humor: she catches somebody else’s line, adds a pun, and suddenly the room has tiny mythology.",
  tags: [
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
        "Illien repeatedly catches Anthos’s lines and sends them somewhere stranger: `thanos???` becomes a whole chain through name confusion, Christmas lists to Satan, prayers to a dog, `tacocat` and `racecar`. Easy call-and-response and affectionate riffing are supported; a closeness ranking is not.",
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
    "Illien repeatedly remembers the social bookkeeping around receipts: after posting media she can return seconds later with `Almost forgot @Mugen`, and in a separate old-lore callback she adds `Sorry, forgot to tag` for Pride.",
    "Her Wall humor is strongly associative. Anthos’s `thanos???` cue expands into several linked wordplay beats; Ren’s cat line becomes `You mean like...CATS`, then an undercover-cat premise, then `Meowone shall know`. She tends to build from an existing cue rather than seize the room with a disconnected monologue.",
    "The prosecution lane has the same playfulness: when Ren concedes there is no defense, Illien says `I was coming to do the same`, supplies a jail GIF, calls it `Noodle in jail`, and soon adds `Book: 101 cute ways to murder`. Receipt work and cartoon decoration happily coexist.",
  ],
  antiFanon: [
    "Euros = Illien is a hard user-confirmed identity bridge. Do not split them into separate people in later integrations.",
    "POSTED BY Illien is not MADE BY, CAPTURED BY, or FEATURING Illien. The reviewed Wall attachments remain visually uninspected unless separately resolved.",
    "Remembering the `we’ve lost Pride’s body` wording does not establish that Illien originated it. Earliest surviving use and joke origin remain separate questions.",
    "The cat, murder-book, Satan/dog, `tacocat`, and related lines are room riffs, not literal identity, violence, religion, diagnosis, or biography facts.",
  ],
};

upsertArchiveCharacter(mercy);
upsertArchiveCharacter(illien);
