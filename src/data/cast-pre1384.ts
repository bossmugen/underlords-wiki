import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1371";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1371";

export const allCharacters: Character[] = [...previousCharacters];

// Run 1371 hard identity repair: Alkey and Meowk are separate public owners.
// Older generated layers accidentally attached Meowk's Wall account and scenes to Alkey;
// the resolved project correction wins over username/display-name resemblance.
const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex >= 0) {
  const alkey = allCharacters[alkeyIndex];
  allCharacters[alkeyIndex] = {
    ...alkey,
    aliases: (alkey.aliases ?? []).filter((alias) => alias !== "itsalkey" && alias !== "Meowk 💖✨" && alias !== "Meowk"),
    logline: "Staff and hockey devotee whose intimidation branding keeps getting sabotaged by the actual person underneath it: compact heckling, practical care, direct check-ins, and the immortal self-assessment `I am intimidating :pout:`.",
    tags: [...new Set([...(alkey.tags ?? []).filter((tag) => tag !== "Wall"), "Staff", "Hockey", "Care", "Compact humor", "Anti-conflation"])],
    quotes: (alkey.quotes ?? []).filter((quote) => quote !== "I aim to please :8_bow:"),
    claims: (alkey.claims ?? []).filter((claim) => !/Meowk|chicken duel|chicken-emote|alkitty|i` \/ `saw` \/ `all/i.test(claim)),
    antiFanon: [...new Set([
      ...(alkey.antiFanon ?? []),
      "Alkey and Meowk are separate people under the resolved project identity correction.",
      "Alkey is not Key / Captain Chihuahua.",
      "Meowk's chicken-duel, `i` / `saw` / `all`, Alkitty/paws, and Mugen receipt-filing scenes do not belong to Alkey.",
    ])],
  };
}

const meowkIndex = allCharacters.findIndex((character) => character.id === "meowk");
const meowkCharacter: Character = {
  id: "meowk",
  name: "Meowk",
  aliases: ["Meowk 💖✨"],
  billing: "guest",
  role: "Archive-era Wall participant",
  era: "2021–2022+",
  logline: "A tiny-stage specialist who can turn two chicken emotes into armed theater, pace three words like witness testimony, roast Ren one day and get turned into `Alkitty` with paws the next. Meowk likes the room watching right up until the room decides he is the exhibit.",
  tags: ["Archive cast", "Wall", "2021", "Bit-setter", "Witness heckler", "Receipt target", "Ren", "Mugen", "Petty Crimes"],
  stableDiscordIds: ["264889543365230614"],
  relationships: [
    {
      name: "Ren",
      note: "Their Wall rhythm runs both directions. Meowk can roast Ren with `3 foot lookin`; the next day Ren helps turn Sou's `Tsundere: Alkey` joke into `Alkitty` with paws and directly summons Meowk into the pile-on. Reciprocal teasing familiarity is the useful read, not literal height, romance, family, or a closeness rank.",
      href: "/characters/ren",
    },
    {
      name: "Mugen",
      note: "Mugen can be Meowk's audience and later his prosecutor: she true-replies to the chicken-duel setup with popcorn, later files a screenshot under `shows his true colors`, and in 2022 follows another screenshot with a direct Meowk pat summon. The objects stay attribution-bounded; the recurring social grammar is amused audience / receipt-target familiarity.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "cock fight achieved",
    "I aim to please :8_bow:",
    "i",
    "saw",
    "all",
    "3 foot lookin",
    "You all suck :myv_Reeeeee:",
    "The good ol' days",
  ],
  claims: [
    "The reviewed Wall account at stable Discord ID 264889543365230614 is rendered `Meowk 💖✨`; current project identity correction keeps this Meowk owner separate from Alkey even though the source username string is `itsalkey` and one local joke says `Tsundere: Alkey`.",
    "Twenty surviving authored Wall messages span February 3 through April 9, 2021, with later direct receipt-targeting appearances through at least May 4, 2022.",
    "Meowk repeatedly turns tiny textual or emote setups into a performance: the February chicken duel earns Mugen's mechanically linked popcorn reply, and the March `i` / `saw` / `all` sequence stretches one witness line across 1.725 seconds.",
    "Ren and Meowk trade public teasing in both directions, while Mugen repeatedly occupies the audience / receipt-prosecutor side of Meowk's Wall life.",
  ],
  antiFanon: [
    "Meowk is not Alkey under the resolved project identity correction, and neither person is Key / Captain Chihuahua.",
    "The source username `itsalkey` and the one-night `Tsundere: Alkey` wording do not override the resolved Alkey / Meowk split.",
    "The Ren height jokes are jokes, not literal height records.",
    "Sou's `Tsundere` and `Alkitty` language is peer teasing, not a diagnosis or a canonical alias for Alkey.",
    "Mugen's November 2021 and May 2022 screenshots are POSTED BY Mugen. MADE BY, CAPTURED BY, and visual FEATURING remain unresolved without independent support.",
    "The end of Meowk's surviving authored Wall messages in April 2021 does not establish UL departure, inactivity, or off-Wall silence.",
  ],
};

if (meowkIndex >= 0) {
  const meowk = allCharacters[meowkIndex];
  allCharacters[meowkIndex] = {
    ...meowk,
    ...meowkCharacter,
    aliases: [...new Set([...(meowk.aliases ?? []), ...meowkCharacter.aliases!])],
    tags: [...new Set([...(meowk.tags ?? []), ...meowkCharacter.tags!])],
    relationships: meowkCharacter.relationships,
    quotes: [...new Set([...(meowk.quotes ?? []), ...meowkCharacter.quotes!])],
  };
} else {
  allCharacters.push(meowkCharacter);
}

// Run 1371 Wall synthesis: WOO is Woosung, and Screenshot Court works both ways on her.
const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex >= 0) {
  const woosung = allCharacters[woosungIndex];
  const relationships = [...(woosung.relationships ?? [])];
  const upsertRelationship = (name: string, note: string, href?: string) => {
    const index = relationships.findIndex((relationship) => relationship.name === name);
    const next = href ? { name, note, href } : { name, note };
    if (index >= 0) relationships[index] = next;
    else relationships.push(next);
  };

  upsertRelationship(
    "Ricochet",
    "Ricochet can summon WOO into a public bit, get the mechanically linked `OMG NO WHY WOULD U`, then true-reply to that protest with a head-pat GIF. The rhythm reads as comfortable public teasing with an immediate softener, not romance, family, or a closeness rank.",
    "/characters/ricochet",
  );
  upsertRelationship(
    "Moon",
    "When WOO complains that talking keeps generating Hall of Shame material, Moon true-replies `No no you famous uwu.` WOO answers with crying/skull reactions instead of leaving the bit. Moon turns accumulated embarrassment into reputation in one line.",
    "/characters/moon",
  );
  upsertRelationship(
    "Nobu",
    "Gilli can summon WOO into a Nobu pocket and WOO immediately produces `NOBU` / `TRAITOR`; later the same night another Nobu filing gets `nobu` / `why`. It is same-evening prosecution/callback familiarity, not literal betrayal or relationship rank.",
    "/characters/nobu",
  );

  allCharacters[woosungIndex] = {
    ...woosung,
    aliases: [...new Set([...(woosung.aliases ?? []), "WOO", "Woo Woo", "_woo_woo"])],
    stableDiscordIds: [...new Set([...(woosung.stableDiscordIds ?? []), "454708201615523871"])],
    logline: "Former ScarletMoon leader, comfort-giver and Screenshot Court dual citizen: Woosung can be summoned into somebody else's prosecution with a two-word verdict, file an exhibit herself, then act betrayed when the courthouse rotates back toward her — all while openly admitting that being the one somebody else reaches out to first matters more than she usually says.",
    tags: [...new Set([...(woosung.tags ?? []), "Wall", "Receipt filer", "Mock defendant", "Self-aware filing", "Care", "Reciprocity", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(woosung.quotes ?? []),
      "NOBU",
      "TRAITOR",
      "OMG NO WHY WOULD U",
      "I need to not talk sm I got so much stuff on the hall of shame",
    ])],
    claims: [
      ...(woosung.claims ?? []),
      "Project canon resolves WOO / `_woo_woo` and Woosung as the same woman at stable Discord ID 454708201615523871.",
      "In the reviewed Wall slice, Woosung is not only a repeat target: on March 28, 2023 she directly posts a screenshot herself, giving the mock-defendant reputation a matching active-filer side.",
      "The surviving Wall expression shifts from mostly summoned reaction in 2020 toward explicit filing, mock prosecution/defense, and self-aware `I got so much stuff on the hall of shame` reputation by spring 2023.",
    ],
    antiFanon: [...new Set([
      ...(woosung.antiFanon ?? []),
      "WOO is Woosung. She is the female cousin of Mugen's ex and is not Mugen's ex.",
      "Woosung's March 28 screenshot establishes POSTED BY Woosung only; MADE BY, CAPTURED BY, and FEATURING remain unresolved because the pixels were not inspected in this review.",
      "The Nobu / `TRAITOR` language is Screenshot Court play, not literal betrayal, romance, hostility rank, or formal authority.",
      "Current/export role arrays do not establish Woosung's appointment chronology.",
    ])],
  };
}

// Hard-lock cleanup discovered while reconciling this Wall delta: Akariel and Zyrcant are separate.
// Keep the current Akariel dossier intact and strip Akariel-only material from Zyrcant's older merged shell.
const zyrcantIndex = allCharacters.findIndex((character) => character.id === "zyrcant");
if (zyrcantIndex >= 0) {
  const zyrcant = allCharacters[zyrcantIndex];
  allCharacters[zyrcantIndex] = {
    ...zyrcant,
    aliases: (zyrcant.aliases ?? []).filter((alias) => alias !== "Akariel" && alias !== "Akariel™" && alias !== "akariel_star"),
    logline: "VIP and former Amaurot deputy whose current public file stays deliberately compact until more clean Zyrcant-specific scene material is synthesized.",
    tags: [...new Set((zyrcant.tags ?? []).filter((tag) => !["Self-incrimination", "Kinetic humor", "Snow-is-old ecology"].includes(tag)))],
    relationships: (zyrcant.relationships ?? []).filter((relationship) => !["Ren", "ShiyaX", "Gabu", "Snow"].includes(relationship.name)),
    quotes: (zyrcant.quotes ?? []).filter((quote) => ![
      "put me on the wall of shame 😩",
      "fair lmaooo",
      "oooh shit *runs*",
      "im the one person who tackles ppl",
      "and im tackling gabu in this case",
      "Everytime someone calls snow old",
      "-runs-",
      "the only apps now on my mac is spotify chrome and discord 😛",
      "Quiet at first but a crackhead once I’m comfortable",
    ].includes(quote)),
    claims: (zyrcant.claims ?? []).filter((claim) => !/Akariel|wall of shame|caught in 4k|tackles ppl|snow old/i.test(claim)),
    antiFanon: [...new Set([
      ...(zyrcant.antiFanon ?? []),
      "Zyrcant and Akariel are separate people. Akariel / Akariel™ / akariel_star material belongs to Akariel, not Zyrcant.",
    ])],
  };
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
