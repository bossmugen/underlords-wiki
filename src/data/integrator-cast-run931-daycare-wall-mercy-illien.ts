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
  aliases: ["mercy074431"],
  billing: "legacy",
  role: "Archive-era Daycare cast / onboarding helper",
  era: "2021–2025+",
  logline:
    "Low-volume in Daycare does not mean socially peripheral. Mërcy can turn a confusing doorway into two usable sentences, stay long enough to make sure the newcomer gets through, tell Mugen `Saved it!!! now delete it before someone else take it` once she has secured the useful thing, and preface a game question with `this is dumb` after already bringing both screenshot and video receipts. Practical help, playful possessiveness, and evidence-first curiosity all fit in the same small footprint.",
  tags: [
    "Archive cast",
    "Daycare",
    "Onboarding",
    "Recruitment help",
    "Procedural clarity",
    "Welcoming",
    "Evidence-first questions",
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
  ],
  quotes: [
    "meeee",
    "i can help with recruitment",
    "you’re good 🥺 welcome!!",
    "refer gets referral recruit gives rank i think",
    "Saved it!!! now delete it before someone else take it",
    "Okay I have a dumb question, it’s either my memory is plain terrible but did kids start with blonde hair then to orange ??",
    "Ohhh ok, thanks !",
  ],
  claims: [
    "Stable account 906809263995908096 appears as Mërcy / `mercy074431` across the reviewed Daycare-supporting chronology.",
    "The assigned 2021 Daycare ledger is tiny, but the same stable account is already participating across Lobby, Club Only, Photo Submissions and Wall in the surrounding November chronology. Low assigned-room volume is not treated as social absence.",
    "Mërcy softens uncertainty socially while checking the thing herself: `Okay I have a dumb question...` is followed by an image and then a `Video difference` clip before Sye answers. The stronger read is self-deprecating phrasing paired with evidence-first curiosity, not helplessness.",
    "The Nov. 8 `Saved it!!! now delete it...` pocket adds a playful resource-hoarder streak. Mugen plays along and Ren immediately repeats the premise, so the joke needs almost no setup once Mërcy makes the demand.",
    "When somebody asks for recruitment help in January 2024, Mërcy volunteers immediately, explains `/recruit`, later clarifies that referral is only needed for the referral path, and remains present while the access/rank flow completes.",
    "The next day, when the same newcomer checks whether regular recruitment is allowed, Mërcy answers the procedural question and lands on `you’re good 🥺 welcome!!`. The useful read is not merely command knowledge; she closes the loop socially once the machinery is out of the way.",
    "In March 2024 she again translates the slash-command distinction for Estera—`refer gets referral recruit gives rank i think`—while Smoo handles the separate practical detail that the target needs to join first. Mërcy’s habit is low-friction process help, not monopolizing the process.",
  ],
  antiFanon: [
    "Helping with recruitment does not establish a formal Recruiter, Officer, Staff, or administrator appointment. The dossier owns the repeated behavior, not an invented title history.",
    "A later bot-rendered `@Staff` label is role state at that time only and is not used to backdate an appointment or make the role permanent.",
    "The two assigned 2021 Daycare message bodies remain unavailable and are not reconstructed from supporting rooms.",
    "MEE6's November 2021 welcome is not treated as proof of Mërcy's first-ever origin or join date.",
    "`鯉` is a supplied Lobby IGN field. Nelph's later `koi` is a probable contextual callback, not a forced account alias or identity bridge.",
    "The reviewed Photo Submissions image and other attachment pixels remain visually uninspected. POSTED BY does not become MADE BY, CAPTURED BY, or FEATURING without separate support.",
    "The older cookies/giveaways/helper material and the later recruitment-help material are cumulative parts of one person file; neither is treated as Mërcy's entire history.",
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
