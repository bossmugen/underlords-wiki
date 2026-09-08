import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre575";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-base";

export const allCharacters: Character[] = [...previousCharacters];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 579 Wall tail: Erys's older card already had the escalating alibi stack.
// The new packet supplies the better contradiction: the defendant who insists the
// evidence is fake is also perfectly happy to file evidence and summon people into it.
const erysIndex = allCharacters.findIndex((character) => character.id === "erys");
if (erysIndex >= 0) {
  const erys = allCharacters[erysIndex];
  const relationships = [...(erys.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ren",
    note: "Erys can marvel at Ren's `FASTEST EDITING IN THE SOUTH`, get an `objection` denied with `Denied, it was your own answer`, and also post a receipt before summoning Ren directly into it. Editor, judge and occasional evidence target all fit inside the same easy Wall shorthand.",
    href: "/characters/ren",
  });
  upsertRelationship(relationships, {
    name: "Mugen",
    note: "When Mugen admits more screenshots exist, Erys tries `good` / `no one needs to see the rest mugss` / `:))`. Mugen posts more anyway and Erys answers with a keyboard smash. Mock evidence-suppression bargaining from somebody who is still very much participating in the case.",
    href: "/characters/mugen",
  });

  const quotes = [...new Set([
    ...(erys.quotes ?? []),
    "its photoshopped",
    "im being hacked",
    "no one needs to see the rest mugss",
  ])];

  allCharacters[erysIndex] = {
    ...erys,
    logline: "Archive-era Wall litigant whose defenses escalate from `not me` to photoshopped, hacked, objection and hearsay — while the same Erys is perfectly capable of posting a receipt first and summoning somebody into the evidence second.",
    tags: [...new Set([...(erys.tags ?? []), "Mock defense counsel", "Evidence courier", "Petty Crimes"])],
    relationships,
    quotes,
  };
}

// Run 575: Ricochet's existing file already had tank-game complaints, weather,
// Cheesecake Factory absurdity and the sleepy-Ren care lane. Core Rooms adds a
// different dimension: ordinary life keeps leaking into the room, and he is
// considerate about shared atmosphere even when his own schedule is mildly cursed.
const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex >= 0) {
  const ricochet = allCharacters[ricochetIndex];
  const relationships = [...(ricochet.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ansun",
    note: "Ricochet checks whether Ansun likes slow music before adding to the shared soundtrack; later, when Ricochet describes an overstuffed travel/class day, Ansun answers `oo get there safely rich!`. Tiny calibration plus a tiny safety wish: easy peer familiarity rather than a closeness ranking.",
    href: "/characters/ansun",
  });
  upsertRelationship(relationships, {
    name: "Anthos",
    note: "When Ricochet describes the same travel/class plan, Anthos independently lands on `be safe!!`. It is ordinary peer concern, quick enough that the room does not need to make a ceremony out of it.",
    href: "/characters/anthos",
  });

  const quotes = [...new Set([
    ...(ricochet.quotes ?? []),
    "I use cayenne pepper",
    "I get eat everything on that table",
    "Well enjoy my sleep asmr I got class in the morning",
  ])];

  allCharacters[ricochetIndex] = {
    ...ricochet,
    logline: "VIP whose chat life refuses to stay game-only: food, cayenne, shared-music calibration, cursed class/sleep logistics, South Texas cold, Cheesecake Factory with no cheesecake, and a teasing-care instinct that will apparently argue sleepy Ren into bed.",
    tags: [...new Set([...(ricochet.tags ?? []), "Ordinary life", "Shared-space calibration", "Petty Crimes"])],
    relationships,
    quotes,
  };
}

// Run 575: Zhēnxī's public owner already knew the big arc — instant Wall casualty
// to somebody who can file Ren back. Daycare adds the lived warmth inside that
// transition: the scream can be real, Rummy can answer it with affection, and
// Zhēnxī can answer back without exiting the bit.
const zhenxiIndex = allCharacters.findIndex((character) => character.id === "zhenxi");
if (zhenxiIndex >= 0) {
  const zhenxi = allCharacters[zhenxiIndex];
  const relationships = [...(zhenxi.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ren",
    note: "Ren can summon Zhēnxī directly into a receipt and still get the full `NOOOOOO`. One month later Zhēnxī posts an old Discord screenshot herself, tags Ren with `so uh-`, laughs at his four-month-old protest, and rules it `Deserving`. Defendant and prosecutor are now the same person depending on whose screenshot is open.",
    href: "/characters/ren",
  });
  upsertRelationship(relationships, {
    name: "Rummy",
    note: "In the middle of Zhēnxī's 2022 receipt panic, Rummy true-replies `I love YoU`; Zhēnxī answers `I love you too` half a minute later. The affection sits comfortably inside the teasing instead of requiring either person to leave the joke.",
    href: "/characters/rummy",
  });

  const quotes = [...new Set([
    ...(zhenxi.quotes ?? []),
    "NOOOOOO",
    "I love you too",
    "@RΣN so uh-",
  ])];

  allCharacters[zhenxiIndex] = {
    ...zhenxi,
    role: "Platelet · Archive-era Wall cast",
    logline: "Platelet who entered Wall life screaming `NOT THE WALL OF SHAME FAME`, kept the theatrical panic, and eventually learned the more dangerous skill: posting the receipt herself, tagging Ren, laughing at the appeal, and ruling it `Deserving`.",
    tags: [...new Set([...(zhenxi.tags ?? []), "Platelet", "Reciprocal receipt play", "Petty Crimes"])],
    relationships,
    quotes,
  };
}

// Run 576: Cele is not just a generic reaction person. Wall peers can predict
// the judgment before Cele arrives; Cele then improves nonsense with one practical
// question or dry consequence and is perfectly willing to wheeze when the filing
// turns around. Keep the judge and the defendant in the same chair.
const celeIndex = allCharacters.findIndex((character) => character.id === "cele");
if (celeIndex >= 0) {
  const cele = allCharacters[celeIndex];
  const relationships = [...(cele.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Gilli",
    note: "Gilli can announce `Cue Cel judging right away LMAO` before summoning Cele into cursed Wall material. Cele arrives with a wheeze. The useful thing is the forecast: Gilli already knows the reaction pattern well enough to call it before Cele is in the scene.",
    href: "/characters/gilli",
  });
  upsertRelationship(relationships, {
    name: "Mugen",
    note: "Mugen can hand Cele an absurd `left to get milk, gone 2 years` premise and get the practical audit back: `Did u at least buy the milk tho`, then `It probably cheese by now`. The same pair can argue role housekeeping and end in a skull reaction instead of a board meeting.",
    href: "/characters/mugen",
  });
  upsertRelationship(relationships, {
    name: "New",
    note: "New can file `Cele on rum`, tag Cele, and get an `I-` that collapses into a wheeze thirteen seconds later. Cele's defense is brief because joining the joke is apparently more interesting than winning the case.",
    href: "/characters/new",
  });
  upsertRelationship(relationships, {
    name: "Ren",
    note: "When Ren says the internet may be dying, Cele is on `What happened?` within seconds. It is a tiny check-in, but that speed is the point: the same person known for instant judgment is also instantly paying attention when something might actually be wrong.",
    href: "/characters/ren",
  });

  const quotes = [...new Set([
    ...(cele.quotes ?? []),
    "What happened?",
    "I gotta clean the roles here lol",
    "You guys are dumb lol",
    "Did u at least buy the milk tho",
    "It probably cheese by now",
    "I-",
    "_(:3 」∠)_ IT LIVES!!!",
  ])];

  allCharacters[celeIndex] = {
    ...cele,
    logline: "Platelet whose admin brain, expected-judge reputation and chaos participation all occupy the same chair: Cele can clean roles, audit a two-year milk premise into cheese, then lose the defense at `I-` when Screenshot Court turns around.",
    tags: [...new Set([...(cele.tags ?? []), "Wall", "Expected judge", "Dry heightener", "Role housekeeping", "Petty Crimes"])],
    relationships,
    quotes,
  };
}

// Run 576: hard project canon already resolves Mimi / Opalite Honey / ༯ to Mia.
// The Birthdays packet therefore adds relationship texture, not a second person:
// Mia and Momo turn the matching names into a reciprocal twin bit.
const miaIndex = allCharacters.findIndex((character) => character.id === "mia");
if (miaIndex >= 0) {
  const mia = allCharacters[miaIndex];
  const relationships = [...(mia.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Momo",
    note: "Mia and Momo turn the matching Mimi/Momo names into a reciprocal twin bit: Mia announces `me and momo are twinsss`, Momo calls her `Mimi's twin`, Mia answers `love u twinnn`, and Momo later lands on `you are both Mimi & Momo.` Matching-name affection becomes its own little house shorthand.",
    href: "/characters/momo",
  });

  const quotes = [...new Set([
    ...(mia.quotes ?? []),
    "me and momo are twinsss",
    "love u twinnn",
  ])];

  allCharacters[miaIndex] = {
    ...mia,
    aliases: [...new Set([...(mia.aliases ?? []), "Mimi", "Miaka", "Opalite Honey", "༯"])],
    tags: [...new Set([...(mia.tags ?? []), "Mimi & Momo", "Twin bit"])],
    relationships,
    quotes,
  };
}

// Run 576 hard identity repair: WOO / `_woo_woo` is Woosung. The prior
// supplemental `woo` card violated project canon by turning an alias/account trail
// into a second person. Fold the Wall material into Woosung's existing dossier.
const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex >= 0) {
  const woosung = allCharacters[woosungIndex];
  const relationships = [...(woosung.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Moon",
    note: "WOO says she needs to talk less because she has so much Hall-of-Shame material; Moon true-replies `No no you famous uwu.` Embarrassment gets reframed as mock celebrity, and Woosung stays inside the gag instead of retreating from it.",
    href: "/characters/moon",
  });
  upsertRelationship(relationships, {
    name: "Gabu",
    note: "Gabu says `im gabriel`; WOO answers with `gabu....`, `I see you`, `in a whole different light`, then Kirby. No formal reply edge, just an extremely probable four-message comic reappraisal.",
    href: "/characters/gabu",
  });
  upsertRelationship(relationships, {
    name: "Gilli",
    note: "Gilli can summon WOO straight into screenshot evidence and get immediate prosecutorial uptake. The useful part is the low setup: Woosung already understands what kind of room she has been called into.",
    href: "/characters/gilli",
  });
  upsertRelationship(relationships, {
    name: "Nobu",
    note: "When Gilli brings WOO into Nobu evidence, WOO goes straight to `NOBU` / `TRAITOR`, later `nobu` / `why`. The screenshot itself stays visually unresolved; the prosecution does not.",
    href: "/characters/nobu",
  });

  const quotes = [...new Set([
    ...(woosung.quotes ?? []),
    "gabu....",
    "I see you",
    "in a whole different light",
    "NOBU",
    "TRAITOR",
    "I need to not talk sm I got so much stuff on the hall of shame",
  ])];

  allCharacters[woosungIndex] = {
    ...woosung,
    aliases: [...new Set([...(woosung.aliases ?? []), "WOO", "Woo Woo", "_woo_woo"])],
    logline: "Former ScarletMoon leader, VIP and permanent Platelet who can be tiny in self-description and enormous in recognition, prosecute Nobu from two words, treat `im gabriel` like breaking news, and then consider talking less because her own mouth keeps manufacturing Wall material.",
    tags: [...new Set([...(woosung.tags ?? []), "Wall", "Screenshot Court", "Repeat defendant", "Petty Crimes"])],
    relationships,
    quotes,
  };
}

// Run 579 Core tail: Nui is distinct from Nuien. Two separate 2020 scenes are
// enough for a compact Archive Cast dossier: logistics or nonsense, Nui's instinct
// is to turn participation into momentum and get the room moving with it.
if (!allCharacters.some((character) => character.id === "nui")) {
  allCharacters.push({
    id: "nui",
    name: "Nui",
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2020–",
    logline: "Momentum-maker who can turn an unresolved limited-slot activity into `TWO SPOTS` → `ONE SPOT` → `SOLD OUT`, then turn `TOIT NUPS` into a five-minute Anthos call-and-response and an emergency-services problem.",
    tags: ["Archive cast", "2020", "Momentum", "Shared-reference bit", "Petty Crimes"],
    relationships: [
      {
        name: "Anthos",
        note: "Nui starts `TOIT NUPS`; Anthos mirrors it almost immediately, turns it into an explicit `WHEN I SAY TOIT U SAY` call-and-response, and both keep escalating the Brooklyn Nine-Nine bit into wheezing / send-help language. They can hand the same joke back and forth with almost no explanation; shared-reference ease, not a closeness ranking.",
        href: "/characters/anthos",
      },
    ],
    quotes: [
      "Hurry hurry TWO SPOTS KEFT",
      "ONE SPOT HURRYYYY",
      "SOLD OUT",
      "TOIT NUPS",
      "c a l l a m o l a n c e",
    ],
  });
}

// Run 579 Wall tail: `ничего` is a stable account-level public label, not an
// inferred bridge to somebody else. The profile stays pronoun-neutral while the
// repeated reaction/banter mechanism is already person-shaped enough to publish.
if (!allCharacters.some((character) => character.id === "nothing")) {
  allCharacters.push({
    id: "nothing",
    name: "ничего",
    aliases: ["novikroeva"],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2023",
    logline: "Reaction-first Wall sniper who can answer `Why` with a König GIF and `im not answering that lol`, accept `Loser` with `i am`, then answer a height tease and compliment with `I LOVE U I WISH I WAS TALL`.",
    tags: ["Archive cast", "2023", "Wall", "Reaction-first", "Petty Crimes"],
    relationships: [
      {
        name: "Ryo",
        note: "Ryo can challenge a crying reaction, ask `Why`, receive a mirrored GIF plus `im not answering that lol`, then call ничего a `Loser`; the answer is simply `i am`. Comfortable challenge and self-own permission, with no need to over-explain the bit.",
        href: "/characters/ryo",
      },
      {
        name: "Moon",
        note: "Moon's short-person tease gets `SCRWAMING`; Moon follows with `Your too adorable and pretty uwu`, and ничего answers `I LOVE U I WISH I WAS TALL`. Teasing can turn into reassurance and reciprocal affection in the same breath without becoming a romance filing.",
        href: "/characters/moon",
      },
    ],
    quotes: [
      "im not answering that lol",
      "i am",
      "SCRWAMING",
      "I LOVE U I WISH I WAS TALL",
    ],
  });
}

// Run 579 Wall tail: YuKanada / Reii is intentionally thin. Four final-state
// laughter reactions plus one authored sentence support a gallery-profile snippet,
// not a full personality thesis or invented reaction timing.
if (!allCharacters.some((character) => character.id === "yukanada")) {
  allCharacters.push({
    id: "yukanada",
    name: "YuKanada",
    aliases: ["Reii", "reiiyukii"],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2022",
    logline: "Near-silent Wall gallery regular whose surviving footprint is mostly laughter reactions; when the account finally says the experience out loud, it is `Sometimes ya'll kill me here`.",
    tags: ["Archive cast", "2022", "Wall", "Gallery witness", "Reaction-first"],
    quotes: ["Sometimes ya'll kill me here"],
  });
}

// Run 580 Whiskey tail: the useful braindead contradiction is not generic
// kindness versus chaos. The same person who types in `GUESS WHAT`, `wahoo`,
// `yayyyyy` mode is unusually practical about making communication usable.
if (!allCharacters.some((character) => character.id === "braindead")) {
  allCharacters.push({
    id: "braindead",
    name: "braindead",
    aliases: ["br4ind34d"],
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2020–2021",
    logline: "Maker-brain chaos goblin who can spend a project session yelling `GUESS WHAT IM BUILDING` and `yayyyyyyyyyyyyy`, then turn around and post tone tags, offer to change how they communicate, widen the help lane to anyone somebody is comfortable with, and ask for the resource to be pinned.",
    tags: ["Archive cast", "2020–2021", "Maker brain", "Tone tags", "Sims", "Petty Crimes"],
    quotes: [
      "GUESS WHAT IM BUILDING",
      "uwu just thought it might be helpful if I posted this! they are tone tags!",
      "nope the only cheats I use is for building we live for the grind",
      "the suns risiing :Surprisedpikachu:",
    ],
  });
}

// Run 580 Daycare late tail: same-account Lobby context supplies the human part
// that the tiny Daycare footprint cannot: two different names, two recognitions,
// and Churro calmly doing the form in between them.
if (!allCharacters.some((character) => character.id === "churro")) {
  allCharacters.push({
    id: "churro",
    name: "Churro",
    aliases: ["Suora", "chursu"],
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2022",
    logline: "Quiet on Daycare but apparently very easy to recognize: Gilli clocks `Churro` before the intake fields are filled, Ren lights up at `Suora` afterward, and Churro handles the doorway by clarifying the paperwork first and returning the warmth second.",
    tags: ["Archive cast", "2022", "Lobby", "Two-name recognition", "Practical first"],
    relationships: [
      {
        name: "Gilli",
        note: "Before the in-game name is even supplied, Gilli is already at `CHURRO :EmoJi_omgIly:`. Churro's answer is not a reunion speech; it is `main club or alts?` — recognized first, paperwork immediately afterward.",
        href: "/characters/gilli",
      },
      {
        name: "Ren",
        note: "Once Churro supplies `Suora`, Ren immediately answers `SUORAA!!!!` / `Haiii`; Churro returns `hii!` seconds later and Ren moves straight into getting them set up. The in-game name is a second social key, and the reunion needs almost no explanation.",
        href: "/characters/ren",
      },
    ],
    quotes: [
      "main club or alts?",
      "hii!",
    ],
  });
}

// Run 584 Daycare + earlier Wall: Booba finally has more than one joke axis.
// She can drop a receipt almost without prose, but when teasing points at her she
// performs the wounded defendant for about two seconds before threatening counter-evidence.
if (!allCharacters.some((character) => character.id === "booba")) {
  allCharacters.push({
    id: "booba",
    name: "Booba",
    aliases: ["MsThiccy"],
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2022",
    logline: "Low-volume, high-yield receipt gremlin who can remember one screenshot late, drop it with almost no explanation, then answer being teased herself with `is that what we doin?` and pivot 2.395 seconds later to `Let me go find some screenshots`. Defendant and prosecutor are apparently the same shift.",
    tags: ["Archive cast", "2022", "Wall", "Daycare", "Screenshot Court", "Receipt dropper", "Petty Crimes"],
    relationships: [
      {
        name: "Gilli",
        note: "A Wall image Booba drops becomes a seven-person `Fat_Wheeze` pile; old-Gilli then adds a wheeze and `You read me LOL`. The messages are not structurally reply-linked, so the exact screenshot target stays technically unbound, but the no-intervening-message sequence reads as comfortable callout and amused recognition rather than defensive distance.",
        href: "/characters/gilli",
      },
    ],
    quotes: [
      "Oh I forgot to share this one",
      "Ha-ha 🥲.. is that what we doin?",
      "Ok i see how it is. Let me go find some screenshots 🤔",
      "Whatever I'm tired of going up...you can have me *sits on the floor*",
    ],
  });
}

export const castGroups = previousGroups.map((group) => ({
  ...group,
  characterIds: [...group.characterIds],
}));

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup) {
  for (const id of ["nui", "nothing", "yukanada", "braindead", "churro", "booba"]) {
    if (!archiveCastGroup.characterIds.includes(id)) archiveCastGroup.characterIds.push(id);
  }
}

export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);