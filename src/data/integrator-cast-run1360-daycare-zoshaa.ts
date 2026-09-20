import "./integrator-cast-run1361-daycare-moon";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const zoshaaIndex = allCharacters.findIndex((character) => character.id === "zoshaa");
if (zoshaaIndex < 0) throw new Error("Run 1360 expected canonical Zoshaa owner");

const zoshaa = allCharacters[zoshaaIndex] as ExtendedCharacter;
const relationships = [...(zoshaa.relationships ?? [])];
upsertRelationship(
  relationships,
  "Gilli",
  "Gilli can meet Zoshaa inside the same ridiculous register instead of translating it: Zoshaa's tiny-type birthday `uwu` gets `THANKS C H I L D UWU`, and when Zoshaa later offers boiled mayo wrapped in `ᵘ ʷ ᵘ`, Gilli's gagging only gives her permission to make the imaginary drink warmer and more McDonald's-specific. The easy mirroring is the useful relationship texture; the mayo remains a joke, mercifully.",
  "/characters/gilli",
);
upsertRelationship(
  relationships,
  "Ren",
  "Ren can summon Zoshaa into a live bit with almost no setup and reliably get either the signature compressed reaction or a fresh escalation. In May 2021 Ren pulls her into the scene immediately before `YOU SEE THIS?`; Zoshaa answers with `O W O` and then helps turn boiled mayo into a full sensory emergency. In May 2022 Ren reply-mentions an older Zoshaa Wall message and gets `O w o` back in under a minute. That is familiar shared-bit grammar, not a closeness ranking.",
  "/characters/ren",
);
upsertRelationship(
  relationships,
  "Snow",
  "Zoshaa is comfortable remembering Snow's statements, calling him on tiny double standards, and demanding explanations in caps. The surviving Wall line runs from the one-freezie grievance to `WHAT DOES IT MEAN` / `@Snow I NEED ANSWERS` and later `DIDNT YOU SAY YOU WERE GOING TO SLEEP`; Snow answers in the same casual register. It is peer banter and old-lore familiarity, not role or age evidence.",
  "/characters/snow",
);
upsertRelationship(
  relationships,
  "Rich",
  "Rich can recognize Zoshaa after a gap and pick the conversation back up without ceremony: `was wondering who the hell that was. Lmao` gets `Oye was good been a bit lmao`. It is a tiny Whiskey reunion beat, useful mostly because neither person has to rebuild the premise before talking normally again.",
);

allCharacters[zoshaaIndex] = {
  ...zoshaa,
  aliases: appendUnique(zoshaa.aliases, ["NintendoShitcube", "nintendoshitcube_"]),
  logline:
    "Permanent Platelet whose cute register has teeth: Zoshaa can keep `O W O` alive across years, boredom-scroll old screenshots straight into the Wall, join cursed Whiskey escalation on sight, then abruptly become the room's quality-control department when somebody slurps too loudly. Cute is not the opposite of menace here. It is the packaging — and apparently menace has sensory limits.",
  tags: appendUnique(zoshaa.tags, [
    "Platelet",
    "NintendoShitcube",
    "Cute-chaos register",
    "Mock menace",
    "Receipt culture",
    "Old-screenshot scavenger",
    "Ready accomplice",
    "Sensory off-switch",
    "Ren",
    "Snow",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(zoshaa.quotes, [
    "O W O",
    "O FUKIN W O",
    "I ain’t afraid to hit the elderly",
    "I’d share a refreshing glass of boiled mayo with my orb any day ᵘ ʷ ᵘ",
    "Scrolling through photos out of boredom, found a bunch of old ss lmao",
    "Idk if this belongs here but I found this very funni",
    "Screaming is what I do best😎😎😎",
    "@Snow I NEED ANSWERS",
    "📸📸📸📸📸📸📸📸📸",
    "This is extremely cursed",
    "Take there card too...",
    "Why you slurping so loudly",
    "Stop it",
  ]),
  claims: appendUnique(zoshaa.claims, [
    "Across separate 2020–2022 Wall and support-room dates, Zoshaa repeatedly uses `O W O` / `O w O` / `O w o`, tiny `uwu` typography, and cute notation beside deliberately absurd or mock-aggressive lines. The recurrence supports a stable humor mechanism: register whiplash, not a pile of unrelated quotes.",
    "On October 30, 2020, Zoshaa says she was scrolling through photos out of boredom, found old screenshots, and drops a multi-image Wall packet; on August 30, 2021, she files another image as something she found `very funni`. Together they add an ordinary receipt-scavenger habit: find the old or funny object, toss it into the room, let everybody else recognize the offense.",
    "Gilli mirrors Zoshaa's `uwu` register in a birthday exchange and later recoils at the boiled-mayo bit while Zoshaa escalates the description, showing that other people can recognize and play inside the same language.",
    "Ren repeatedly activates Zoshaa's signature reaction register with direct summons or reply mentions, while Snow repeatedly becomes the target of Zoshaa's remembered grievances and all-caps answer demands. The two lanes are distinct forms of familiar public bit-participation rather than formal relationship ranks.",
    "On March 16, 2022, Zoshaa posts `IMG_2382.jpg` to Wall and follows 2.849 seconds later with nine camera emojis, adding receipt-theater instinct to the same high-commitment comic style.",
    "Whiskey adds a useful limit to Zoshaa's chaos appetite. She is a ready accomplice to cursed framing — `Medium rare`, `This is extremely cursed`, `Yes!`, `thicc booty`, and the suggestion to take somebody's card too — but a loud slurping bit flips her almost instantly into `Why you slurping so loudly` and then `Stop it`. The off-switch makes the larger pattern funnier: she likes escalation when she is helping steer it; sensory gross-out can make her become the adult in under ten seconds.",
    "An October 22, 2021 Whiskey exchange with Rich gives Zoshaa a small reconnection beat: Rich says he was wondering who she was, and Zoshaa answers `Oye was good been a bit lmao`. The wording supports easy prior familiarity and re-entry after some time apart, without establishing a relationship rank.",
  ]),
  antiFanon: appendUnique(zoshaa.antiFanon, [
    "NintendoShitcube / `nintendoshitcube_` is Zoshaa, not a second person.",
    "`zorshal` is shared joke wording involving Zoshaa, Ren, and Gilli, not an alias or identity bridge.",
    "`I ain’t afraid to hit the elderly` is over-the-top joke bravado in context, not a literal violence claim.",
    "The boiled-mayo line is gross-cute joke texture, not a literal food preference or consumption claim.",
    "Zoshaa's old-screenshot and `very funni` Wall packets establish POSTED BY Zoshaa. MADE BY, CAPTURED BY, and FEATURING remain unresolved unless independently supported.",
    "The March 16, 2022 `WHAT DOES IT MEAN` object is POSTED BY Zoshaa and Snow is an explicit explanation target in the same pocket. The pixels were not inspected, so Snow is not automatically a visual subject, maker, or capturer.",
    "The March 2022 image followed by nine camera emojis was POSTED BY Zoshaa. Its pixels were not inspected in this review, so MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
    "Whiskey's cursed-object and gross-out jokes are social bit material, not evidence of literal food, sex, violence, or sensory/medical claims. Zoshaa's attachment posts establish POSTED BY only unless another source resolves authorship or depiction.",
  ]),
} as ExtendedCharacter;

characterById.set("zoshaa", allCharacters[zoshaaIndex]);
