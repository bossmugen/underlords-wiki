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

allCharacters[zoshaaIndex] = {
  ...zoshaa,
  aliases: appendUnique(zoshaa.aliases, ["NintendoShitcube", "nintendoshitcube_"]),
  logline:
    "Permanent Platelet whose cute register has teeth: Zoshaa can keep `O W O` alive across years, wrap boiled-mayo horror in `ᵘ ʷ ᵘ`, put sunglasses in front of an absurd mock-threat, and later post a Wall image followed 2.849 seconds later by nine camera emojis. Cute is not the opposite of menace here. It is the packaging.",
  tags: appendUnique(zoshaa.tags, [
    "Platelet",
    "NintendoShitcube",
    "Cute-chaos register",
    "Mock menace",
    "Receipt culture",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(zoshaa.quotes, [
    "O W O",
    "I ain’t afraid to hit the elderly",
    "I’d share a refreshing glass of boiled mayo with my orb any day ᵘ ʷ ᵘ",
    "📸📸📸📸📸📸📸📸📸",
  ]),
  claims: appendUnique(zoshaa.claims, [
    "Across separate 2020–2021 support-room dates, Zoshaa repeatedly uses `O W O` / `O w O`, tiny `uwu` typography, and cute notation beside deliberately absurd or mock-aggressive lines. The recurrence supports a stable humor mechanism: register whiplash, not a pile of unrelated quotes.",
    "Gilli mirrors Zoshaa's `uwu` register in a birthday exchange and later recoils at the boiled-mayo bit while Zoshaa escalates the description, showing that other people can recognize and play inside the same language.",
    "On March 16, 2022, Zoshaa posts `IMG_2382.jpg` to Wall and follows 2.849 seconds later with nine camera emojis, adding receipt-theater instinct to the same high-commitment comic style.",
  ]),
  antiFanon: appendUnique(zoshaa.antiFanon, [
    "NintendoShitcube / `nintendoshitcube_` is Zoshaa, not a second person.",
    "`I ain’t afraid to hit the elderly` is over-the-top joke bravado in context, not a literal violence claim.",
    "The boiled-mayo line is gross-cute joke texture, not a literal food preference or consumption claim.",
    "The March 2022 image was POSTED BY Zoshaa. Its pixels were not inspected in this review, so MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
  ]),
} as ExtendedCharacter;

characterById.set("zoshaa", allCharacters[zoshaaIndex]);
