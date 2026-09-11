import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const erysId = "erys";
const erysIndex = allCharacters.findIndex((character) => character.id === erysId);

const erysCharacter: ExtendedCharacter = {
  id: erysId,
  name: "Erys",
  aliases: ["erysl", "erys"],
  billing: "recurring",
  role: "Archive-era UL member",
  era: "2020–2023+",
  logline:
    "Erys treats getting caught on the Wall like a live improv exercise: protest immediately, invent a better alibi before the first one cools, then recover fast enough to file something back. The funny part is not that Erys gets embarrassed. It is that embarrassment never makes Erys passive.",
  tags: [
    "Wall",
    "Receipt sparring",
    "Escalating alibis",
    "Counter-filer",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "RV",
      href: "/characters/ren",
      note:
        "Ren can drop a filing and get an almost immediate `NOOOO`, then watch the defense mutate from `i swear that isnt me` to `its photoshopped`. Later the same morning Erys posts an image and directly tags Ren back into the scene. Their Wall rhythm works in both directions: fast prosecution, theatrical defense, then counter-filing instead of retreat.",
    },
  ],
  quotes: [
    "NOOOO",
    "HOW DO U DO IT SO FAST",
    "i swear that isnt me",
    "its photoshopped",
    "im being hacked",
  ],
  claims: [
    "On May 6, 2022 Ren posted IMG_8281.png; Erys answered `NOOOO` five seconds later and `HOW DO U DO IT SO FAST` nine seconds after that. Ren answered `FASTEST EDITING IN THE SOUTH`. The timing supports a recurring receipt-speed / defendant-prosecutor rhythm without requiring the image pixels to be guessed.",
    "Later on May 6, another Ren-posted image is followed within twenty-one seconds by Erys's `NO` -> `i swear that isnt me` -> `its photoshopped`; three minutes later two Mugen-posted screenshots are followed by `!` -> `i swear` -> `im being hacked`. These are contextual Default-message joins rather than stored Reply edges, so the exact visual charge remains unresolved while the escalating alibi pattern is still clear.",
    "Less than fifteen minutes later Erys posted IMG_5905.png and directly tagged Ren eleven seconds afterward; Ren screamed and Erys screamed back. The image is POSTED BY Erys only, but the direct tag is enough to show Erys can move from defendant to counter-filer inside the same morning.",
    "A May 5 `i swear i didnt say that` adds recurrence to Erys's defensive wording across dates, but it is not assigned to a specific image because no structured edge survives.",
  ],
  antiFanon: [
    "Erys's May 6 images are uninspected here. Keep them POSTED BY the surviving poster only unless MADE BY, CAPTURED BY, or FEATURING is independently established.",
    "The May 6 Ren/Mugen image pockets use tight timing and repeated defense language where no structured Reply survives. Do not invent the exact visual allegation or describe unseen pixels.",
    "`its photoshopped` and `im being hacked` are escalating Wall alibis inside the joke, not claims of an actual account compromise or forensic media manipulation.",
    "The Erys/RV lane is recurring Wall sparring, not literal hostility, a closeness rank, or romance.",
    "Export-time role arrays do not establish Erys's appointment chronology. This dossier does not derive Officer history from those arrays.",
    "Wall-local Emi naming remains unresolved and is not treated as an Erys identity bridge here.",
  ],
};

if (erysIndex >= 0) {
  const erys = allCharacters[erysIndex] as ExtendedCharacter;
  allCharacters[erysIndex] = {
    ...erys,
    ...erysCharacter,
    aliases: appendUnique(erys.aliases, erysCharacter.aliases ?? []),
    tags: appendUnique(erys.tags, erysCharacter.tags ?? []),
    relationships: [
      ...(erys.relationships ?? []).filter((relationship) => relationship.name !== "RV"),
      ...(erysCharacter.relationships ?? []),
    ],
    quotes: appendUnique(erys.quotes, erysCharacter.quotes ?? []),
    claims: appendUnique(erys.claims, erysCharacter.claims ?? []),
    antiFanon: appendUnique(erys.antiFanon, erysCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
  characterById.set(erysId, allCharacters[erysIndex]);
} else {
  allCharacters.push(erysCharacter);
  characterById.set(erysId, erysCharacter);
}
