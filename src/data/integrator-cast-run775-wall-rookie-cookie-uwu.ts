import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const rookieId = "rookie-cookie-uwu";
const rookieIndex = allCharacters.findIndex((character) => character.id === rookieId);

const rookieCharacter: ExtendedCharacter = {
  id: rookieId,
  name: "Rookie Cookie uwu",
  aliases: [".poogie."],
  billing: "legacy",
  role: "Wall cast",
  era: "2020–2021",
  logline:
    "Rookie Cookie uwu likes stupid quotes enough to celebrate them until she remembers she can be quoted too. Peers quickly treat her as somebody who will not miss a screenshot, and her own favorite defense move is often to trim somebody else's sentence down to the most incriminating clause and let the room keep going.",
  tags: [
    "Archive cast",
    "Wall",
    "2020",
    "2021",
    "Screenshot catcher",
    "Quote hunter",
    "Self-audit panic",
    "Selective quoting",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Sou",
      note:
        "Sou explicitly calls his behavior teasing, softens it with `pat pat` and `ill stop bullying you`, and Rookie answers by extracting only `I like seeing you cry` plus a stare reaction. She does not argue with the reassurance; she edits the sentence into the funniest possible prosecution exhibit. The comfort is in how easily both of them understand the trick.",
    },
    {
      name: "Ren",
      note:
        "When Rookie says `It’s my time to shine`, Ren answers `i love you rooks!! 💙💙` and Rookie returns `I love you too uwu`. It is ordinary reciprocal warmth inside Wall chatter, not a romance claim or a closeness ranking.",
    },
    {
      name: "Mugen",
      note:
        "Mugen once decides there is no need to grab a screenshot herself because `rooks wouldnt miss this for the world`; Rookie posts an image less than a minute later. The useful part is the expectation: Mugen already treats Rookie as somebody likely to catch the room's material.",
    },
    {
      name: "WhoAmI",
      note:
        "WhoAmI jokes that Rookie ignores monsters to screenshot. Read beside Mugen's independent expectation months later, the line becomes a small peer reputation rather than one isolated jab: Rookie is the person people expect to have the receipt.",
    },
  ],
  quotes: [
    "I fucking love Zepp’s quotes",
    "UH-",
    "RED ALERT",
    "I like seeing you cry",
    "It’s my time to shine",
    "I love you too uwu",
  ],
  claims: [
    "Stable author ID 348307948566478867 appears in the reviewed early Wall packet as export username `.poogie.` and source display `Rookie Cookie uwu`; this dossier owns that stable account only.",
    "On 2020-08-23 Rookie says `I fucking love Zepp’s quotes`, then within minutes reacts `UH-` and `RED ALERT` before auditing whether she has ever said any `memorable stupid shit`. The contradiction is immediate: she enjoys collectible room nonsense and also understands that she can become collectible room nonsense.",
    "On 2020-10-02 Rookie says `It’s my time to shine`; Ren answers `i love you rooks!! 💙💙`; Rookie returns `I love you too uwu`. These are adjacent Default messages rather than a structured Discord Reply edge, but the reciprocal warmth is direct in the scene.",
    "In an October 2020 tease, Sou says he likes teasing Rookie because he likes seeing her cry, then adds `pat pat ill stop bullying you`; Rookie selectively quotes only `I like seeing you cry` and follows with a stare reaction. The scene is comfortable adversarial play, not evidence of harmful bullying.",
    "On 2020-11-05 WhoAmI jokes that Rookie ignores monsters to screenshot. On 2021-03-13 Mugen says she was going to screenshot something but decided `rooks wouldnt miss this for the world`; 44.937 seconds later Rookie posts an image link. Together those peer-authored lines support a reputation as a dependable screenshot catcher without establishing who made, captured, or appears in the image.",
  ],
  antiFanon: [
    "Stable author ID 348307948566478867 is not merged with stable author ID 351855010832793610. Similar Rookie/.poogie.-shaped naming is not enough for an identity bridge; keep the accounts distinct unless direct bridging evidence appears.",
    "`Rooks` is contextual address for Rookie Cookie uwu inside these scenes; it is not used to merge every similar Rooks/Rookie name elsewhere.",
    "Sou names the exchange as teasing and supplies reassurance himself. Do not turn the selective-quote joke into literal abuse or harmful bullying.",
    "Rookie and Ren's reciprocal `I love you` exchange is warmth inside ordinary Wall chatter, not evidence of romance, sex, exclusivity, or a closeness rank.",
    "The 2021 image is POSTED BY Rookie only. Do not upgrade it to MADE BY, CAPTURED BY, or FEATURING without separate support.",
    "Default-message adjacency and timing are not converted into synthetic Discord Reply edges.",
    "Earliest surviving evidence is not guaranteed origin, and no role or governance chronology is inferred from this Wall packet.",
  ],
};

if (rookieIndex >= 0) {
  const current = allCharacters[rookieIndex] as ExtendedCharacter;
  allCharacters[rookieIndex] = {
    ...current,
    ...rookieCharacter,
    aliases: appendUnique(current.aliases, rookieCharacter.aliases ?? []),
    tags: appendUnique(current.tags, rookieCharacter.tags ?? []),
    quotes: appendUnique(current.quotes, rookieCharacter.quotes ?? []),
    claims: appendUnique(current.claims, rookieCharacter.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, rookieCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(rookieCharacter);
}

characterById.set(rookieId, allCharacters.find((character) => character.id === rookieId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(rookieId)) {
  archiveCastGroup.characterIds.push(rookieId);
}
