import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mergeRelationships = (
  left: NonNullable<Character["relationships"]> = [],
  right: NonNullable<Character["relationships"]> = [],
) => {
  const merged = [...left];
  for (const relationship of right) {
    const index = merged.findIndex((candidate) => candidate.name === relationship.name);
    if (index < 0) merged.push(relationship);
  }
  return merged;
};

const mergeDuplicateOwners = (
  targetIndex: number,
  duplicateIndexes: number[],
): ExtendedCharacter => {
  let target = allCharacters[targetIndex] as ExtendedCharacter;
  for (const index of duplicateIndexes) {
    if (index === targetIndex) continue;
    const duplicate = allCharacters[index] as ExtendedCharacter;
    target = {
      ...target,
      aliases: unique([...(target.aliases ?? []), duplicate.name, ...(duplicate.aliases ?? [])]),
      tags: unique([...(target.tags ?? []), ...(duplicate.tags ?? [])]),
      relationships: mergeRelationships(target.relationships, duplicate.relationships),
      quotes: unique([...(target.quotes ?? []), ...(duplicate.quotes ?? [])]),
      claims: unique([...(target.claims ?? []), ...(duplicate.claims ?? [])]),
      antiFanon: unique([...(target.antiFanon ?? []), ...(duplicate.antiFanon ?? [])]),
    };
    characterById.delete(duplicate.id);
  }

  allCharacters[targetIndex] = target;
  for (const index of [...duplicateIndexes].filter((index) => index !== targetIndex).sort((a, b) => b - a)) {
    allCharacters.splice(index, 1);
  }
  characterById.set(target.id, target);
  return target;
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const replaceCharacter = (character: ExtendedCharacter) => {
  const index = allCharacters.findIndex((candidate) => candidate.id === character.id);
  if (index < 0) throw new Error(`Run 899 lost canonical owner ${character.id}`);
  allCharacters[index] = character;
  characterById.set(character.id, character);
};

// Hard identity repair: stable account 488099199938986004 / sycessences / ƐℲı˥ is Sye.
// Run 890 accidentally created a second `effe` owner. Collapse its useful material into Sye.
let syeIndex = allCharacters.findIndex(
  (character) =>
    character.id === "sye" ||
    character.name === "Sye" ||
    (character.aliases ?? []).some((alias) => ["Life", "Syenitha", "Sadako", "sycessences"].includes(alias)),
);
if (syeIndex < 0) {
  throw new Error("Run 899 expected canonical Sye owner; refusing to preserve ƐℲı˥ as a separate person");
}
const syeDuplicateIndexes = allCharacters
  .map((character, index) => ({ character, index }))
  .filter(({ character, index }) =>
    index !== syeIndex && (character.id === "effe" || character.name === "ƐℲı˥"),
  )
  .map(({ index }) => index);
let sye = mergeDuplicateOwners(syeIndex, syeDuplicateIndexes);
const syeRelationships = [...(sye.relationships ?? [])];
upsertRelationship(syeRelationships, {
  name: "Wolf Phenix",
  note:
    "They can solve a shared-file problem together, but the relationship is not only useful when something is broken. In September 2024 Sye asks `How are you doing wolfie?`, follows with `You are okay?`, then says `Just want to make sure you are`. A few weeks later Sye apologizes for not being very helpful; Wolf answers that Sye has been very helpful, thanks Sye for being there, and says she appreciates them. It is quiet peer care with almost no ceremony attached.",
  href: "/characters/wolfphenix",
});
sye = {
  ...sye,
  name: "Sye",
  aliases: unique([...(sye.aliases ?? []), "Life", "Syenitha", "Sadako", "sycessences", "ƐℲı˥"]),
  logline:
    "Sye can retime the house when daylight saving breaks it, hand you a recipe detailed enough to contain both technique and `Whole ass Chicken`, admit when the bot manual has fallen out of their head, and still notice when a person may need checking on. Competence is real; so is the willingness to say `I forgot`, ask again, or quietly make sure Wolf is okay.",
  tags: unique([...(sye.tags ?? []), "People checking", "Low-ceremony care", "Reciprocal troubleshooting"]),
  relationships: syeRelationships,
  quotes: unique([
    ...(sye.quotes ?? []),
    "How are you doing wolfie?",
    "You are okay?",
    "Just want to make sure you are",
    "Sorry I’m not really helpful",
  ]),
  claims: unique([
    ...(sye.claims ?? []),
    "Stable account 488099199938986004 / sycessences / ƐℲı˥ is canonical Sye/Life/Syenitha/Sadako; the prior separate `effe` WIKI owner was a duplicate and has been collapsed into Sye.",
    "On September 30, 2024 Sye directly checks whether Wolf Phenix is okay and says they just wanted to make sure. On October 17, after Sye minimizes their own usefulness, Wolf says Sye has been very helpful, thanks them for being there, and says she appreciates them.",
  ]),
  antiFanon: unique([
    ...(sye.antiFanon ?? []),
    "Wolf's October 2024 praise records how Wolf experiences Sye in that relationship; it is not a universal helpfulness ranking or a formal care role.",
  ]),
};
replaceCharacter(sye);

// Hard identity repair: Support Tech is a Dean alias, not an independent cast member.
let deanIndex = allCharacters.findIndex(
  (character) =>
    character.id === "dean" ||
    character.name === "Dean" ||
    (character.aliases ?? []).some((alias) => ["Beansprout", "SEU", "Deansprout"].includes(alias)),
);
if (deanIndex < 0) {
  deanIndex = allCharacters.findIndex((character) => character.id === "support-tech" || character.name === "Support Tech");
}
if (deanIndex < 0) throw new Error("Run 899 could not resolve Dean / Support Tech canonical owner");
const deanDuplicateIndexes = allCharacters
  .map((character, index) => ({ character, index }))
  .filter(({ character, index }) =>
    index !== deanIndex && (character.id === "support-tech" || character.name === "Support Tech"),
  )
  .map(({ index }) => index);
let dean = mergeDuplicateOwners(deanIndex, deanDuplicateIndexes);
dean = {
  ...dean,
  name: "Dean",
  aliases: unique([...(dean.aliases ?? []), "Support Tech", "SEU", "Beansprout", "Deansprout", "jk031"]),
  claims: unique([
    ...(dean.claims ?? []),
    "Support Tech / SEU / Beansprout / Deansprout resolve to canonical Dean. Wall material previously published under a separate Support Tech card belongs to Dean's same person file.",
  ]),
};
replaceCharacter(dean);

// Primary-name repair: Baby Lyssa is Ghoulie. Keep the existing route id if it is the established one.
let ghoulieIndex = allCharacters.findIndex((character) => character.id === "ghoulie" || character.name === "Ghoulie");
if (ghoulieIndex < 0) {
  ghoulieIndex = allCharacters.findIndex(
    (character) => character.id === "baby-lyssa" || character.name === "Baby Lyssa" || (character.aliases ?? []).includes("Baby Lyssa"),
  );
}
if (ghoulieIndex < 0) throw new Error("Run 899 expected Ghoulie / Baby Lyssa owner");
const ghoulieDuplicateIndexes = allCharacters
  .map((character, index) => ({ character, index }))
  .filter(({ character, index }) =>
    index !== ghoulieIndex && (character.id === "ghoulie" || character.id === "baby-lyssa" || character.name === "Ghoulie" || character.name === "Baby Lyssa"),
  )
  .map(({ index }) => index);
let ghoulie = mergeDuplicateOwners(ghoulieIndex, ghoulieDuplicateIndexes);
ghoulie = {
  ...ghoulie,
  name: "Ghoulie",
  aliases: unique([...(ghoulie.aliases ?? []), "Baby Lyssa"]),
};
replaceCharacter(ghoulie);

// Anayss: organizer who plans around human failure modes instead of pretending they do not exist.
const anayssIndex = allCharacters.findIndex((character) => character.id === "anayss" || character.name === "Anayss");
if (anayssIndex < 0) throw new Error("Run 899 expected canonical Anayss owner");
let anayss = allCharacters[anayssIndex] as ExtendedCharacter;
const anayssRelationships = [...(anayss.relationships ?? [])];
upsertRelationship(anayssRelationships, {
  name: "Mimi",
  note:
    "The Blitz/Hunger Games planning loop is a compact example of how Anayss works with somebody rather than merely assigning them work. She asks Mimi/༯ for the poster, true-replies `LOVE IT!!!` when the candidate lands, coordinates when to post it, and after the event explicitly credits Mimi's calls. Delegation comes with visible acknowledgment when the thing works.",
  href: "/characters/mimi",
});
anayss = {
  ...anayss,
  logline:
    "Anayss is the organizer who plans for the fact that everybody—including Anayss—has a human brain. She turns loose ideas into runnable events, shortens the promo window because `we will forget`, tests assumptions before locking them in, moves the plan when game chat breaks, waits for the actual headcount, and can admit `my brain is tired` when she catches herself proposing the already-obvious answer.",
  tags: unique([...(anayss.tags ?? []), "Friction-aware organizer", "Human limits", "Translation", "Petty Crimes"]),
  relationships: anayssRelationships,
  quotes: unique([
    ...(anayss.quotes ?? []),
    "we will forget",
    "(I know i would)",
    "LOVE IT!!!",
    "I really need to sleep, my brain is tired. Yes she is XD",
  ]),
  claims: unique([
    ...(anayss.claims ?? []),
    "During the December 3–9, 2023 Blitz / UL Hunger Games build, Anayss moves from timing and match assumptions to poster coordination with Mimi, chooses a nearer promo date because `we will forget` / `(I know i would)`, uses a full-day test to reject an impractical multi-match assumption, adjusts posting to when more people are online, and later reports nine participants while crediting Mimi's calls.",
    "In January–March 2024 Anayss true-replies to Sye's officer-routing workflow with a Spanish version, moves a 4v4 plan into Discord when Raja chat fails, and waits for live headcount before deciding which team attacks.",
    "On May 27, 2024 Anayss proposes someone who already holds the role, accepts the correction immediately, and says `I really need to sleep, my brain is tired. Yes she is XD`. The fallibility is part of the same planning style: she corrects around real limits rather than performing infallibility.",
  ]),
  antiFanon: unique([
    ...(anayss.antiFanon ?? []),
    "Anayss's Spanish procedural reply supports translation/accessibility behavior in that workflow; it does not establish nationality or native-language identity.",
    "The Anayss↔Mimi Blitz collaboration supports specific-task coordination and visible praise/credit, not hierarchy or a closeness rank.",
  ]),
};
replaceCharacter(anayss);

// Anthos: Ghoulie can summon her into the bit with one short channel ping and expect follow-through.
const anthosIndex = allCharacters.findIndex((character) => character.id === "anthos" || character.name === "Anthos");
if (anthosIndex < 0) throw new Error("Run 899 expected canonical Anthos owner");
let anthos = allCharacters[anthosIndex] as ExtendedCharacter;
const anthosRelationships = [...(anthos.relationships ?? [])];
upsertRelationship(anthosRelationships, {
  name: "Ghoulie",
  note:
    "Ghoulie can mobilize Anthos with almost no briefing. In June 2021 Anthos is already doing `wee woo wee woo`; Ghoulie laughs and says only `come to #🐣│ul-daycare`. Eight minutes later Anthos is back on the Wall with a screenshot and `my work here is done`. The exact intervening Daycare action is lost, but the social grammar is not: one short summons is enough for Anthos to understand the bit and come back with something to file.",
  href: `/characters/${ghoulie.id}`,
});
anthos = {
  ...anthos,
  tags: unique([...(anthos.tags ?? []), "One-ping coordination", "Responsive follow-through"]),
  relationships: anthosRelationships,
  quotes: unique([...(anthos.quotes ?? []), "wee woo wee woo", "my work here is done"]),
  claims: unique([
    ...(anthos.claims ?? []),
    "On June 2, 2021 Ghoulie tells Anthos `come to #🐣│ul-daycare` during a playful Wall exchange. Eight minutes later Anthos returns to the Wall with an attachment and `my work here is done`, deepening Anthos's recurring contrast between unserious presentation and reliable participation.",
  ]),
  antiFanon: unique([
    ...(anthos.antiFanon ?? []),
    "The June 2 screenshot is POSTED BY Anthos. Its pixels and the exact intervening Daycare action are unavailable here, so MADE BY / CAPTURED BY / FEATURING are not assigned from the sequence alone.",
  ]),
};
replaceCharacter(anthos);

// Zoshaa: memory itself becomes raw material for Screenshot Court.
const zoshaaIndex = allCharacters.findIndex(
  (character) => character.id === "zoshaa" || character.name === "Zoshaa" || (character.aliases ?? []).includes("NintendoShitcube"),
);
if (zoshaaIndex < 0) throw new Error("Run 899 expected canonical Zoshaa owner");
let zoshaa = allCharacters[zoshaaIndex] as ExtendedCharacter;
const zoshaaRelationships = [...(zoshaa.relationships ?? [])];
upsertRelationship(zoshaaRelationships, {
  name: "Snow",
  note:
    "Snow is a recurring target for Zoshaa's remembered and live receipt nonsense. Zoshaa can pull up an old `throwback`, remember the one-freezie double standard with absurd specificity, directly demand `I NEED ANSWERS`, and later catch Snow still awake after saying he was going to sleep. It reads as long-running shared-lore familiarity and comfortable nuisance, not a closeness leaderboard.",
  href: "/characters/snow",
});
zoshaa = {
  ...zoshaa,
  logline:
    "Zoshaa entered UL saying she had no idea what she was doing, made the McFucking recruitment banner anyway, grew from a quiet newcomer into somebody who screams and calls Snow old, and apparently treats her own camera roll as a quarry: boredom can produce twelve old screenshots in 2.5 seconds, while a live filing can end in nine camera emojis.",
  tags: unique([...(zoshaa.tags ?? []), "Receipt archaeology", "Throwback curator", "Live paparazzo", "Petty Crimes"]),
  relationships: zoshaaRelationships,
  quotes: unique([
    ...(zoshaa.quotes ?? []),
    "Scrolling through photos out of boredom, found a bunch of old ss lmao",
    "Throwback to snows emo, raining nude bush hours",
    "Idk if this belongs here but I found this very funni",
    "@Snow I NEED ANSWERS",
    "Screaming is what I do best😎😎😎",
    "DIDNT YOU SAY YOU WERE GOING TO SLEEP",
  ]),
  claims: unique([
    ...(zoshaa.claims ?? []),
    "On October 30, 2020 Zoshaa says she is scrolling through photos out of boredom and posts twelve old screenshot attachments in 2.512 seconds. On November 4 she deliberately labels another item a `Throwback` and remembers group picture-taking around Snow. Together they make old receipts a form of leisure and shared-memory curation, not just live Wall reaction.",
    "The same habit continues forward rather than staying archival. On August 30, 2021 Zoshaa posts something because she `found this very funni`; on March 16, 2022 an image is followed by `@Snow I NEED ANSWERS`, and a later image is followed 2.849 seconds later by nine camera/camera-flash emoji.",
    "Zoshaa and Snow have a recurring Wall lane built from remembered pictures, petty VC grievances, direct answer-demanding, and probable same-pocket sleep-accountability teasing. It is best read as shared-lore familiarity and comfortable nuisance rather than a formal relationship rank.",
  ]),
  antiFanon: unique([
    ...(zoshaa.antiFanon ?? []),
    "The newly reviewed Wall images are POSTED BY Zoshaa only unless separate object-level evidence establishes MADE BY / CAPTURED BY / FEATURING. `we took a bunch of pictures` is plural and does not make Zoshaa the sole capturer.",
    "Zoshaa's boiled-mayo milkshake description is cursed-food improv, not literal food preference or consumption canon.",
    "The recurring scrambled-egg-bunny callback is authored by the stable account now canonically resolved as Ansun under the historical Sou/sou.san display. Its recurrence by November 4, 2020 is clear; the object's origin remains unresolved.",
  ]),
};
replaceCharacter(zoshaa);

// This module is loaded eagerly through the existing `integrator-episodes*.ts` glob.
// It intentionally exports no Episode array; its job is final cast reconciliation after explicit cast overlays.
export const run899CastReconciliation = true;
