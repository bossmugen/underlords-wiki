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

  upsertRelationship(relationships, "Moon", "When WOO admits `I need to not talk sm I got so much stuff on the hall of shame`, Moon true-replies `No no you famous uwu`. WOO answers with crying/skull reactions instead of leaving the bit. It is a neat little embarrassment→affectionate-reframe lane, not a fame title or closeness ranking.", "/characters/moon");
  upsertRelationship(relationships, "Gilli", "A Gilli Wall filing is the immediate occasion for WOO's `I need to not talk sm` complaint about how much material she has accumulated. The useful relationship texture is receipt-culture familiarity: Gilli can file, WOO can protest the collectability of her own mouth, and the room keeps moving. The screenshot contents remain unresolved.", "/characters/gilli");
  upsertRelationship(relationships, "Nobu", "In the March 26, 2023 Wall pocket, WOO can go from full-volume `NOBU` / `TRAITOR` to lowercase `nobu` / `why` later the same night. The contrast supports theatrical betrayal shorthand between familiar people in that scene; it does not identify what any unreadable screenshot showed.", "/characters/nobu");

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

allCharacters.push({
  id: "noether",
  name: "Noether",
  aliases: ["noether88"],
  billing: "guest",
  role: "Archive-era Wall / Lobby cast",
  era: "2021+",
  logline: "Summoned witness turned tiny headline desk: people bring Noether a receipt, she laughs, then compresses the room's existing joke into something like `Unsugar hamihami` or `Unsugared snow, history of a sugar daddy and unsugar boiii`. She is less the inventor of every bit than the person who can give shared nonsense a label everybody immediately understands.",
  tags: ["Wall", "Receipt culture", "Compact captioner", "Language remixer", "Shared-context fluency", "Petty Crimes"],
  stableDiscordIds: ["690373720665096193"],
  relationships: [
    { name: "Anayss", note: "Anayss repeatedly includes Noether in public media/receipt scenes and later greets the same stable account with `wb ❤️` after a mechanical re-welcome. Noether answers the shared material in shorthand rather than needing the premise rebuilt. This is developing public-bit fluency and social continuity, not a closeness rank." },
    { name: "Snow", note: "Snow directly summons Noether alongside HamitteY and Anayss into a November image scene; Noether later turns the local `unsugar` language into `Unsugar hamihami`. It is enough for public-bit familiarity, not intimacy, governance, or phrase ownership.", href: "/characters/snow" },
    { name: "HamitteY", note: "Hami is repeatedly one of the people inside the same `unsugar` receipt pockets, and his near-immediate scream-emote after `Unsugar hamihami` keeps the remix socially alive. The joking labels stay scene language, not romance, sex, family, or a closeness claim.", href: "/characters/hamittey" }
  ],
  quotes: ["50 gold", "Unsugar hamihami", "Unsugared snow, history of a sugar daddy and unsugar boiii"],
  claims: [
    "Stable Discord account 690373720665096193 / noether88 is Noether in the reviewed 2021 Lobby/Wall chronology.",
    "Across independent November and December 2021 receipt scenes, Noether is deliberately included or summoned, signals uptake with laughter, and then reshapes the running joke into a compact label or title. The cumulative person read is summoned audience ↔ active narrator / language remixer.",
    "Anayss has the earlier surviving `Unsugar hami` caption in the reviewed sequence. Noether expands and recombines the language; current evidence does not establish her as its originator.",
    "A later `wb ❤️` from Anayss after a mechanical re-welcome supports social continuity only; it does not establish why the doorway reset or a departure/rejoin chronology."
  ],
  antiFanon: [
    "Do not credit Noether with originating `Unsugar hami`; the earlier surviving reviewed use is Anayss's caption.",
    "`hami x snow`, `sugar daddy`, `unsugar boiii`, and related labels are public joke language, not literal romance, sex, family, or relationship status.",
    "Anayss and Snow are POSTED BY for their reviewed attachments. MADE BY, CAPTURED BY, and visual FEATURING remain unresolved without direct pixel/source evidence.",
    "The current direct-Whiskey retrieval seam does not prove that Noether never used Whiskey or preferred other rooms.",
    "Repeat MEE6 welcomes do not establish absence, removal, re-recruitment, or account problems; current role arrays do not establish appointment chronology.",
    "Private onboarding/demographic material is intentionally excluded from the public dossier."
  ],
} as ArchiveCharacter);

allCharacters.push({
  id: "anayss",
  name: "Anayss",
  aliases: [],
  billing: "recurring",
  role: "Archive-era Wall regular",
  era: "2020–2024+",
  logline: "Receipt filer with standards, not a courthouse robot: Anayss can actively file Snow and Gabu, get so used to Snow's nonsense that some of it stops qualifying as news, tell the whole room `love you all ❤️`, and later reply to a Rummy roast with `Why are you so rude to rummy though uwu`. Prosecution and affection are apparently allowed to share a desk.",
  tags: ["Wall", "Receipt filer", "Selective prosecution", "Open affection", "Soft roast-check", "Shared-context fluency", "Petty Crimes"],
  stableDiscordIds: ["698943572875149342"],
  relationships: [
    { name: "Snow", note: "Snow expects Anayss may file him; Anayss says she ignored one line because she is already used to him saying that kind of thing, and Snow immediately describes `Ana` as numb to his posts. A later self-filing line says he will do it himself so `Ana and Hami don't`. In these exact filer-context scenes, `Ana` is strongly probable as Anayss; that is not a global alias lock.", href: "/characters/snow" },
    { name: "Noether", note: "Anayss repeatedly brings Noether into public receipt/media scenes and later greets the same stable account with `wb ❤️`. Noether often answers by remixing the room's joke into compact labels. The useful lane is bring-her-the-evidence / shared-bit fluency, not a closeness rank.", href: "/characters/noether" },
    { name: "Rummy", note: "When Marian files `Rums: the master of not reading the fine print`, Anayss true-replies `Why are you so rude to rummy though uwu`. The `uwu` keeps the correction inside play: one bounded playful-defense beat, not a relationship hierarchy.", href: "/characters/rummy" },
    { name: "Marian", note: "Anayss's exact-parent reply to Marian's Rummy roast is a soft check rather than a fight: `Why are you so rude to rummy though uwu`. It shows she can push back on a roast while keeping the room's playful register intact.", href: "/characters/marian" },
    { name: "Gabu", note: "Anayss directly files an attachment while summoning Gabu and Snow with `let me post this -laughs-`. Gabu is confirmed social audience/target of the filing language; that does not establish visual FEATURING or media authorship.", href: "/characters/gabu" }
  ],
  quotes: ["Im used to you saying that kinda things so I just ignored it 😛", "hahahaha ❤️ ❤️ love you alll!", "Hahaha I love you all ❤️", "Why are you so rude to rummy though uwu", "I still don't know what is a beak"],
  claims: [
    "Stable Discord account 698943572875149342 is Anayss in the reviewed Wall chronology.",
    "Across 2020–2024 Wall material, Anayss is both an active receipt filer and an openly affectionate regular. The stronger cumulative read is selective prosecution: she knows the room well enough to preserve some nonsense, ignore familiar nonsense, and soften other people's roasting when she wants to.",
    "In two Snow filer-context scenes, `ana/Ana` is strongly probable as a scene-level short form for Anayss because Snow's wording directly paraphrases Anayss's immediately preceding behavior and later recurs in the same receipt-threat function.",
    "Repeated `love you all` language more than a year apart supports overt group-affection as recurring social texture inside the same public-roasting culture.",
    "The Marian→Anayss exact Reply establishes a bounded playful-defense / soft roast-check beat around Rummy without proving deeper relationship rank."
  ],
  antiFanon: [
    "Do not promote `Ana = Anayss` into a project-wide alias. The bridge is strongly probable only in the reviewed Snow filer-context scenes; other historical `Ana` references remain individually unresolved.",
    "Receipt filing is lived Wall behavior, not a formal archivist, moderator, judge, or governance appointment.",
    "Group-affection language such as `love you all` is social warmth, not literal family or romance.",
    "Anayss's Rummy defense is one bounded scene and does not establish ranked closeness, caretaker status, or hostility toward Marian.",
    "The 2020 attachment is POSTED BY Anayss. Gabu and Snow are social targets/audience; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved.",
    "The `beak` line is a tiny embarrassment suitable for Petty Crimes, not evidence about intelligence, language ability, or broader competence."
  ],
} as ArchiveCharacter);

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
