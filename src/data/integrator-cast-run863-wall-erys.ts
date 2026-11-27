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
  aliases: ["erysl", "erys", "Emi"],
  billing: "recurring",
  role: "Archive-era UL member",
  era: "2020–2023+",
  logline:
    "Erys treats getting caught on the Wall like live improv: protest immediately, invent a better alibi before the first one cools, then recover fast enough to file something back. The same person performing `OBJECTION` from the defendant's chair also notices when the room goes quiet, asks where everybody went, and receives affection just as loudly as the prosecution.",
  tags: [
    "Wall",
    "Receipt sparring",
    "Escalating alibis",
    "Counter-filer",
    "Mock courtroom defense",
    "Presence-seeker",
    "Wall regular",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "RV",
      href: "/characters/ren",
      note:
        "Ren can drop a filing and get an almost immediate `NOOOO`, then watch the defense mutate from `i swear that isnt me` to `its photoshopped`. Erys later files back instead of retreating. Their Wall rhythm runs both directions: fast prosecution, theatrical defense, then counter-prosecution from somebody who plainly knows the game.",
    },
    {
      name: "Rummy",
      href: "/characters/rummy",
      note:
        "When Erys asks where everybody went and says `i miss yall`, Rummy answers with a hug GIF. Erys announces `awwwd i just gota hug` and, a few minutes later, answers `i lubn u tyoo`. It is an easy peer-comfort rhythm inside the shared room: Erys notices absence out loud, Rummy answers it, and Erys receives the affection just as openly.",
    },
  ],
  quotes: [
    "NOOOO",
    "HOW DO U DO IT SO FAST",
    "i swear that isnt me",
    "its photoshopped",
    "im being hacked",
    "objection",
    "hearsay",
    "**twerks on the wall**",
    "where everyone go",
    "i miss yall :kekw:",
    "awwwd i just gota hug",
    "i lubn u tyoo",
  ],
  claims: [
    "On May 6, 2022 Ren posted IMG_8281.png; Erys answered `NOOOO` five seconds later and `HOW DO U DO IT SO FAST` nine seconds after that. Ren answered `FASTEST EDITING IN THE SOUTH`. The timing supports their recurring receipt-speed / defendant-prosecutor rhythm without requiring the image pixels to be guessed.",
    "Later on May 6, another Ren-posted image is followed within twenty-one seconds by Erys's `NO` -> `i swear that isnt me` -> `its photoshopped`; three minutes later two Mugen-posted screenshots are followed by `!` -> `i swear` -> `im being hacked`. These are contextual Default-message joins rather than stored Reply edges, so the exact visual charge remains unresolved while the escalating alibi pattern is still clear.",
    "Less than fifteen minutes later Erys posted IMG_5905.png and directly tagged Ren eleven seconds afterward; Ren screamed and Erys screamed back. The image is POSTED BY Erys only, but the direct tag shows how quickly Erys can move from defendant to counter-filer inside the same morning.",
    "A May 5 `i swear i didnt say that` adds recurrence to Erys's defensive wording across dates, but it is not assigned to a specific image because no structured edge survives.",
    "Across May 6 and May 10 Erys keeps turning Wall defense into performance: `i swear that isnt me` -> `its photoshopped` -> `im being hacked`, then `objection` -> `hearsay`. Embarrassment does not make Erys disappear; it gives Erys another bit to perform.",
    "The counter-filing is not a one-morning accident. Erys posts another Wall attachment on May 11 and directly summons KARIT moments later; paired with `**twerks on the wall**`, the recurring defendant is also plainly one of the people feeding the court.",
    "On May 14 Erys asks where everybody went and says `i miss yall :kekw:`. Rummy answers with a hug GIF; Erys says `awwwd i just gota hug` and later returns `i lubn u tyoo`. The exchange gives the Wall chaos a softer counterweight: Erys wants the room populated, notices when it empties, and is comfortable receiving peer affection in public.",
    "Ricochet jokes that Erys is trying for the `most shame award`. It works as room-level reputation for repeatedly ending up on the Wall, not a literal award or verified ranking.",
    "Petty Crimes: courtroom procedure for screenshot charges, attempted receipt containment, self-authored Wall twerking, and loudly noticing when everybody leaves.",
  ],
  antiFanon: [
    "Erys's Wall images in these pockets are uninspected here. Keep them POSTED BY the surviving poster only unless MADE BY, CAPTURED BY, or FEATURING is independently established.",
    "The May 6 Ren/Mugen image pockets use tight timing and repeated defense language where no structured Reply survives. Do not invent the exact visual allegation or describe unseen pixels.",
    "`its photoshopped` and `im being hacked` are escalating Wall alibis inside the joke, not claims of an actual account compromise or forensic media manipulation.",
    "The Erys/RV lane is recurring Wall sparring, not literal hostility, a closeness rank, or romance.",
    "The Erys/Rummy May 14 exchange supports easy peer comfort and reciprocal affection inside the shared room; it does not establish romance, literal family, or a closeness rank.",
    "Ricochet's `most shame award` line is reputation language, not a literal award or verified most-shamed rank.",
    "The May 2022 Whiskey-room wording in the reviewed handoff does not establish alcohol use or intoxication.",
    "Export-time role arrays do not establish Erys's appointment chronology. This dossier does not derive Officer history from those arrays.",
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
      ...(erys.relationships ?? []).filter(
        (relationship) => relationship.name !== "RV" && relationship.name !== "Rummy",
      ),
      ...(erysCharacter.relationships ?? []),
    ],
    quotes: appendUnique(erys.quotes, erysCharacter.quotes ?? []),
    claims: appendUnique(erys.claims, erysCharacter.claims ?? []),
    antiFanon: appendUnique(
      (erys.antiFanon ?? []).filter(
        (note) => note !== "Wall-local Emi naming remains unresolved and is not treated as an Erys identity bridge here.",
      ),
      erysCharacter.antiFanon ?? [],
    ),
  } as ExtendedCharacter;
  characterById.set(erysId, allCharacters[erysIndex]);
} else {
  allCharacters.push(erysCharacter);
  characterById.set(erysId, erysCharacter);
}
