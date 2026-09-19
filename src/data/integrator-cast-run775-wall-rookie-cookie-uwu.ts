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
  aliases: [".poogie.", "Rooks"],
  billing: "legacy",
  role: "Wall cast",
  era: "2020–2021",
  logline:
    "Rookie Cookie knows where the nonsense belongs without pretending she is above it. She can explain Wall as the place `when we catch people say dumb stuff uwu`, reassure somebody by admitting she would commit the same tiny offense, then point everybody toward Whiskey before Snow catches them cluttering the wrong room. The social map becomes part of the joke in her hands: first she learns it, then she teaches it, then an emote plus a channel link is enough. She is still the screenshot-catching little archive goblin from Wall; the larger pattern is rule-aware, deeply inside the mess, and very good at making boundaries feel like belonging instead of punishment.",
  tags: [
    "Archive cast",
    "Wall",
    "Whiskey",
    "2020",
    "2021",
    "Screenshot catcher",
    "Quote hunter",
    "Self-audit panic",
    "Selective quoting",
    "Social navigation",
    "House language",
    "Rule-aware co-conspirator",
    "Channel culture",
    "Archive memory",
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
    {
      name: "RV",
      note:
        "While RV is surfacing saved old material, Rookie first wonders whether she has said any `memorable stupid shit` and then tells RV `ily for saving these`. The warmth attaches directly to RV's preservation role in that scene: being remembered through old embarrassing/funny material lands as affection instead of threat. Keep it scene-level rather than promoting it into a closeness rank or blanket consent to preserve everything.",
    },
    {
      name: "Efi",
      note:
        "When Efi worries that eating two pretzels at once might be dumb, Rookie answers `No it’s not dumb cause I’d do it myself`. She reassures by stepping into the alleged offense with Efi rather than approving it from above. Less than twenty-five seconds later she redirects the room to Whiskey, neatly separating `you are fine` from `we are in the wrong channel`.",
    },
    {
      name: "Plushie",
      note:
        "Plushie asks what Wall is for; Rookie answers in house language — `When we catch people say dumb stuff uwu` — and later routes the spillover to Whiskey with a Snow warning. Plushie immediately turns that warning into `Snow u saw nothing UwU`. Rookie's orientation works because it is legible as culture and play, not a lecture.",
    },
  ],
  quotes: [
    "I fucking love Zepp’s quotes",
    "UH-",
    "RED ALERT",
    "I like seeing you cry",
    "It’s my time to shine",
    "I love you too uwu",
    "When we catch people say dumb stuff uwu",
    "No it’s not dumb cause I’d do it myself",
    "Anyway, Snow will come after y’all if you keep talking here so go to #🥃💬｜whiskey-room",
    ":HTVN_KannaSip: #🥃💬｜whiskey-room",
    "I cant remember if I had said any memorable stupid shit lmao",
    "Rv ily for saving these",
  ],
  claims: [
    "Stable author ID 348307948566478867 appears in the reviewed early Wall packet as export username `.poogie.` and source display `Rookie Cookie uwu`; this dossier owns that stable account only.",
    "On 2020-08-23 Rookie says `I fucking love Zepp’s quotes`, then within minutes reacts `UH-` and `RED ALERT` before auditing whether she has ever said any `memorable stupid shit`. The contradiction is immediate: she enjoys collectible room nonsense and also understands that she can become collectible room nonsense.",
    "On 2020-10-02 Rookie says `It’s my time to shine`; Ren answers `i love you rooks!! 💙💙`; Rookie returns `I love you too uwu`. These are adjacent Default messages rather than a structured Discord Reply edge, but the reciprocal warmth is direct in the scene.",
    "In an October 2020 tease, Sou says he likes teasing Rookie because he likes seeing her cry, then adds `pat pat ill stop bullying you`; Rookie selectively quotes only `I like seeing you cry` and follows with a stare reaction. The scene is comfortable adversarial play, not evidence of harmful bullying.",
    "On 2020-11-05 WhoAmI jokes that Rookie ignores monsters to screenshot. On 2021-03-13 Mugen says she was going to screenshot something but decided `rooks wouldnt miss this for the world`; 44.937 seconds later Rookie posts an image link. Together those peer-authored lines support a reputation as a dependable screenshot catcher without establishing who made, captured, or appears in the image.",
    "On 2020-05-17 Rookie is on the receiving end of a channel map that identifies Whiskey as general chat. This is an orientation floor, not recruitment origin or appointment chronology.",
    "By 2020-10-19 Rookie can explain Wall to Plushie as `When we catch people say dumb stuff uwu`, validate Efi's two-pretzel worry with `No it’s not dumb cause I’d do it myself`, and 24.896 seconds later redirect the spillover to Whiskey. The person-level mechanism is low-friction social navigation: validate the person, correct the venue.",
    "On 2020-12-20 Rookie repeats the Wall-to-Whiskey redirect with only `:HTVN_KannaSip:` plus the Whiskey channel link. The May-to-October-to-December sequence supports a small change-over-time arc from being oriented, to orienting others, to using compressed house shorthand without requiring any formal-title story.",
    "On 2020-08-22 Rookie wonders whether she has any `memorable stupid shit` in saved material and later tells RV `ily for saving these`. That supports scene-level affection for shared embarrassing/funny history and RV's preservation role, not universal privacy consent.",
    "The Efi antecedent for `No it’s not dumb cause I’d do it myself` is resolved to Efi's local concern about eating two pretzels at once; do not carry that line as contextless in future synthesis.",
  ],
  antiFanon: [
    "Stable author ID 348307948566478867 is not merged with stable author ID 351855010832793610. Similar Rookie/.poogie.-shaped naming is not enough for an identity bridge; keep the accounts distinct unless direct bridging evidence appears.",
    "`Rooks` is contextual address for Rookie Cookie uwu inside these scenes; it is not used to merge every similar Rooks/Rookie name elsewhere.",
    "Sou names the exchange as teasing and supplies reassurance himself. Do not turn the selective-quote joke into literal abuse or harmful bullying.",
    "Rookie and Ren's reciprocal `I love you` exchange is warmth inside ordinary Wall chatter, not evidence of romance, sex, exclusivity, or a closeness rank.",
    "The 2021 image is POSTED BY Rookie only. Do not upgrade it to MADE BY, CAPTURED BY, or FEATURING without separate support.",
    "Default-message adjacency and timing are not converted into synthetic Discord Reply edges.",
    "Earliest surviving evidence is not guaranteed origin, and no role or governance chronology is inferred from this Wall packet.",
    "Rookie's channel redirects show social fluency, not proof that she was a moderator, Officer, Staff member, or formal rule enforcer at those dates.",
    "`Snow will come after y’all` is house-joke warning language inside a channel redirect. It does not establish a special Snow↔Rookie relationship or Snow appointment chronology.",
    "The October Efi and Plushie exchanges are strong contextual responses without serialized Discord Reply edges; preserve that distinction.",
    "`Rv ily for saving these` supports warmth toward saved funny/embarrassing history in that scene only. It is not blanket consent to archive private material and not a global closeness ranking.",
    "Current readable sources establish repeated redirects toward Whiskey but did not surface direct Rookie-authored Whiskey prose in this pass. That retrieval seam is not evidence of absence from Whiskey.",
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
