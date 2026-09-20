import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1450";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1450";

export const allCharacters: Character[] = [...previousCharacters];

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: Array<{ name: string; note: string; href?: string }>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

// Run 1450 Daycare / Wall reconciliation: WOO is loud enough to become the receipt, then immediately wants fewer receipts.
const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex >= 0) {
  const woosung = allCharacters[woosungIndex] as ArchiveCharacter;
  const relationships = [...(woosung.relationships ?? [])];

  upsertRelationship(
    relationships,
    "Moon",
    "When WOO admits `I need to not talk sm I got so much stuff on the hall of shame`, Moon true-replies `No no you famous uwu`. WOO answers with crying/skull reactions instead of leaving the bit. It is a neat little embarrassment→affectionate-reframe lane, not a fame title or closeness ranking.",
    "/characters/moon",
  );
  upsertRelationship(
    relationships,
    "Gilli",
    "A Gilli Wall filing is the immediate occasion for WOO's `I need to not talk sm` complaint about how much material she has accumulated. The useful relationship texture is receipt-culture familiarity: Gilli can file, WOO can protest the collectability of her own mouth, and the room keeps moving. The screenshot contents remain unresolved.",
    "/characters/gilli",
  );
  upsertRelationship(
    relationships,
    "Nobu",
    "In the March 26, 2023 Wall pocket, WOO can go from full-volume `NOBU` / `TRAITOR` to lowercase `nobu` / `why` later the same night. The contrast supports theatrical betrayal shorthand between familiar people in that scene; it does not identify what any unreadable screenshot showed.",
    "/characters/nobu",
  );

  allCharacters[woosungIndex] = {
    ...woosung,
    aliases: [...new Set([...(woosung.aliases ?? []), "WOO", "_woo_woo"])],
    logline: "Former ScarletMoon leader, VIP and permanent Platelet whose Wall voice has one excellent self-defeating problem: she can arrive at full `NOBU` / `TRAITOR` volume, then shrink to `nobu` / `why` once the moment becomes receipt material — and eventually conclude that she may simply need to talk less because the Hall of Shame has too much on her.",
    tags: [...new Set([...(woosung.tags ?? []), "Wall", "Big reactions", "Archival self-consciousness", "Tease-safe protest", "Petty Crimes"])],
    stableDiscordIds: [...new Set([...(woosung.stableDiscordIds ?? []), "454708201615523871"])],
    relationships,
    quotes: [...new Set([...(woosung.quotes ?? []), "NOBU", "TRAITOR", "nobu", "why", "I need to not talk sm I got so much stuff on the hall of shame"])],
    claims: [...new Set([...(woosung.claims ?? []),
      "Stable Discord account 454708201615523871 is WOO / _woo_woo / Woosung across the reconciled public archive owners.",
      "On March 26, 2023, WOO's Wall delivery swings from `NOBU` / `TRAITOR` to the much smaller `nobu` / `why`, supporting a loud-when-activated / suddenly-wounded-when-filed contrast without requiring the unreadable screenshot's contents.",
      "By April 2023, WOO explicitly says she needs to talk less because she has so much material on the Hall of Shame; Moon directly reframes the embarrassment as `No no you famous uwu`, and WOO stays inside the teasing with crying/skull reactions.",
    ])],
    antiFanon: [...new Set([...(woosung.antiFanon ?? []),
      "This loud/reactive read is Wall-local and cumulative; do not flatten Woosung into a globally loud personality in every room.",
      "Moon's `famous` line is affectionate social reframing, not a formal status, title, role, or popularity ranking.",
      "The March/April 2023 screenshots remain visually unresolved. POSTED BY Xuseio or Gilli does not establish MADE BY, CAPTURED BY, or visual FEATURING, and WOO's reactions do not identify the pixels.",
      "Woosung's attempt to self-censor after becoming collectible is comic/social self-consciousness in the reviewed scene, not proof that embarrassment is never sincere or that teasing is always welcome.",
    ])],
  } as ArchiveCharacter;
}

// Run 1465 Daycare reconciliation: DyingFox delivers the same warmth at much lower volume.
allCharacters.push({
  id: "dyingfox",
  name: "DyingFox",
  aliases: ["DyingFox(Gilli's Pond)"],
  billing: "guest",
  role: "Archive-era Daycare cast",
  era: "2020–2022+",
  logline: "Warm without needing a stadium PA: Lilly can greet Fox with `FOX OMG HIIIII` and `I LOVE YOU`, Fox answers `Love you too!`; Ren can type `fox halp` and get a pat within seconds. Fox's care tends to arrive as compact greetings, bot hugs/glomps, pats, hearts, and practical reassurance instead of speeches.",
  tags: ["Daycare", "Low-volume warmth", "Bot-mediated affection", "Quick comfort", "Petty Crimes"],
  stableDiscordIds: ["471370475050762251"],
  relationships: [
    { name: "Lilly", note: "Lilly can arrive at full `FOX OMG HIIIII` / `I LOVE YOU` volume; Fox answers `Love you too!`. In a later bot-hug pocket Lilly calls Fox `SUNSHINE`, and Fox answers with a simple `Hi!` plus heart. Same warmth, radically different decibels." },
    { name: "Ren", note: "Ren's `fox halp` gets an immediate pat response, and a later dinner joke gets Fox's practical `It's dinner you can eat it`. The useful texture is summonable reassurance in tiny gestures, not a caretaker title or closeness rank.", href: "/characters/ren" },
    { name: "Gabu", note: "Fox also uses the Eli bot to send Gabu a glomp, showing the programmable-affection shorthand is broader than one relationship rather than a Lilly-only ritual.", href: "/characters/gabu" }
  ],
  quotes: ["Morning lilly!", "Love you too!", "Hi!", "It's dinner you can eat it"],
  claims: [
    "Stable Discord account 471370475050762251 is DyingFox in the reviewed 2020–2022 Daycare chronology.",
    "Across independent scenes, Fox repeatedly answers high-energy affection or direct summons with short reciprocal gestures: `Love you too!`, bot hugs/glomps, a pat, a heart, or food reassurance.",
    "The cumulative person-shaped read is high warmth ↔ low-volume delivery ↔ summonable helper; verbal sparseness here is not emotional distance.",
    "Bot-mediated hugs/glomps/pats function as a recurring tiny affection-delivery system in Fox's surviving social language."
  ],
  antiFanon: [
    "`DyingFox(Gilli's Pond)` is a display-name string and does not establish literal ownership, family, romance, employment, or a formal Gilli relationship.",
    "Do not flatten compact delivery into shyness, coldness, passivity, or a global quiet-person trait; the reviewed material supports low-volume warmth in these scenes.",
    "Ren's `fox halp` and Fox's quick response support a bounded comfort/help lane, not therapist, caretaker, moderator, or standing support authority.",
    "The reviewed welcome/greeting scenes are surviving social touchpoints, not guaranteed first contact or relationship origin.",
    "No private onboarding/demographic material is surfaced from the intake."
  ],
} as ArchiveCharacter);

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
