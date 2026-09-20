import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1488";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1488";

export const allCharacters: Character[] = [...previousCharacters];

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const addRelationship = (
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

// Run 1488 Daycare: Lyssa does not merely attract chaos; she recruits it and makes the wanting theatrical.
const lyssaIndex = allCharacters.findIndex(
  (character) => character.id === "baby-lyssa" || (character as ArchiveCharacter).stableDiscordIds?.includes("537786238665621504"),
);
if (lyssaIndex >= 0) {
  const lyssa = allCharacters[lyssaIndex] as ArchiveCharacter;
  const relationships = [...(lyssa.relationships ?? [])];
  addRelationship(relationships, "Anthos", "When Anthos says `my work here is done`, Lyssa answers `NAH GET YA ASS`, points him toward Daycare, then drops into `PLEASE` / `PLEASEEEEE`. Anthos takes the wording literally (`I ALREADY HAVE MA ASS`) and keeps extending the bit. The useful lane is comfortable command-resistance / collaborative absurdity: Lyssa can make wanting somebody present theatrically obvious without the exchange becoming real authority, romance, or hierarchy.", "/characters/anthos");
  allCharacters[lyssaIndex] = {
    ...lyssa,
    aliases: [...new Set([...(lyssa.aliases ?? []), "Ghoulie", "BabyLyssa"])],
    tags: [...new Set([...(lyssa.tags ?? []), "Daycare", "Chaos recruiter", "Theatrical summoning", "Collaborative absurdity", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([...(lyssa.quotes ?? []), "NAH GET YA ASS", "PLEASE", "PLEASEEEEE"])],
    claims: [...new Set([...(lyssa.claims ?? []), "Stable Discord account 537786238665621504 is Baby Lyssa / Ghoulie in the reconciled public canon.", "The June 2, 2021 Anthos exchange deepens Lyssa from chaos magnet into active chaos recruiter: she redirects him toward Daycare, mock-commands him to stay, then exaggerates the request into pleading while he keeps the joke alive."])],
    antiFanon: [...new Set([...(lyssa.antiFanon ?? []), "Lyssa's `GET YA ASS` / `PLEASE` exchange with Anthos is social play, not formal authority, coercion, romance, family, or proof that Anthos actually followed the channel pointer."])],
  } as ArchiveCharacter;
} else {
  allCharacters.push({
    id: "baby-lyssa",
    name: "Baby Lyssa",
    aliases: ["Ghoulie", "BabyLyssa"],
    billing: "recurring",
    role: "Archive-era Daycare / Wall cast",
    era: "2020–2021+",
    logline: "Chaos magnet with recruiter instincts: Lyssa can turn wanting somebody in the room into mock orders, channel pointers, and increasingly dramatic pleading, while the target answers by making the wording even dumber.",
    tags: ["Daycare", "Wall", "Chaos recruiter", "Theatrical summoning", "Collaborative absurdity", "Petty Crimes"],
    stableDiscordIds: ["537786238665621504"],
    relationships: [{ name: "Anthos", note: "When Anthos says `my work here is done`, Lyssa answers `NAH GET YA ASS`, points him toward Daycare, then drops into `PLEASE` / `PLEASEEEEE`. Anthos takes the wording literally (`I ALREADY HAVE MA ASS`) and keeps extending the bit. The useful lane is comfortable command-resistance / collaborative absurdity: Lyssa can make wanting somebody present theatrically obvious without the exchange becoming real authority, romance, or hierarchy.", href: "/characters/anthos" }],
    quotes: ["NAH GET YA ASS", "PLEASE", "PLEASEEEEE"],
    claims: ["Stable Discord account 537786238665621504 is Baby Lyssa / Ghoulie in the reconciled public canon.", "The June 2, 2021 Anthos exchange supports an active chaos-recruiter read rather than passive attendance."],
    antiFanon: ["Lyssa's `GET YA ASS` / `PLEASE` exchange with Anthos is social play, not formal authority, coercion, romance, family, or proof that Anthos actually followed the channel pointer."],
  } as ArchiveCharacter);
}

// Run 1488 Wall: WOO already owned the theatrical-defendant spine; add the new bounded social lanes without duplicating the biography.
const wooIndex = allCharacters.findIndex(
  (character) => character.id === "woosung" || (character as ArchiveCharacter).stableDiscordIds?.includes("454708201615523871"),
);
if (wooIndex >= 0) {
  const woo = allCharacters[wooIndex] as ArchiveCharacter;
  const relationships = [...(woo.relationships ?? [])];
  addRelationship(relationships, "Ricochet", "Ricochet's `Your welcome @WOO @am scottish` gets WOO's exact-parent `OMG NO WHY WOULD U`; Ricochet answers the protest with a head-pat/cute-penguin GIF. Whatever the missing setup was, the surviving mechanism is receipt-tease → theatrical protest → deliberately soft comedown, not romance, family, or evidence about unseen media.", "/characters/ricochet");
  allCharacters[wooIndex] = {
    ...woo,
    tags: [...new Set([...(woo.tags ?? []), "Name-and-emote callouts", "Self-aware oversharer"])],
    relationships,
    quotes: [...new Set([...(woo.quotes ?? []), "gabu....", "I see you", "in a whole different light", "OMG NO WHY WOULD U"])],
    claims: [...new Set([...(woo.claims ?? []), "Independent 2020 and 2023 Wall pockets reinforce WOO's economical callout style: she often names the target first, then lets caps, punctuation, or emotes carry most of the accusation.", "The Ricochet exchange adds a bounded receipt-tease / protest / soft-comedown lane without requiring the missing setup or unread media content."])],
    antiFanon: [...new Set([...(woo.antiFanon ?? []), "Ricochet's pat GIF is a social gesture in one receipt-teasing exchange, not romance, family, a closeness rank, or evidence about the unseen setup."])],
  } as ArchiveCharacter;
}

// Run 1488 Wall: Kiro can prosecute, caption and then instantly pretend Kiro does not exist when the room points back.
const kiroIndex = allCharacters.findIndex(
  (character) => character.id === "kiro" || (character as ArchiveCharacter).stableDiscordIds?.includes("754128584498610178"),
);
const kiroRelationships = [
  { name: "Gilli", note: "Gilli can understand Kiro's petty-receipt premise with almost no setup (`DID YOU GET IT?`), and Kiro answers in compressed emotional shorthand. Months later Kiro realizes mid-conversation that the person is Gilli and publicly collapses into `I JUST REALIZED YOURE GILLI` → `OH GOD`. Recurring receipt-context / recognition-chaos familiarity, not a closeness rank.", href: "/characters/gilli" },
];
if (kiroIndex >= 0) {
  const kiro = allCharacters[kiroIndex] as ArchiveCharacter;
  const relationships = [...(kiro.relationships ?? [])];
  for (const relationship of kiroRelationships) addRelationship(relationships, relationship.name, relationship.note, relationship.href);
  allCharacters[kiroIndex] = {
    ...kiro,
    aliases: [...new Set([...(kiro.aliases ?? []), "HicUUOOOOGH", "etharzii"])],
    tags: [...new Set([...(kiro.tags ?? []), "Wall", "Petty receipt filer", "Punchline captioner", "Theatrical defendant", "Absurdist improviser", "Petty Crimes"])],
    stableDiscordIds: [...new Set([...(kiro.stableDiscordIds ?? []), "754128584498610178"])],
    relationships,
    quotes: [...new Set([...(kiro.quotes ?? []), "Being petty:R_damn:", "N-n-n-no..", "Who's kiro", "Im a cerberus breed coz i got three holes like a pretzel", "I JUST REALIZED YOURE GILLI", "OH GOD"])],
    claims: [...new Set([...(kiro.claims ?? []), "Stable Discord account 754128584498610178 / etharzii / HicUUOOOOGH is Kiro in the reviewed Wall chronology.", "Kiro's recurring Wall mechanism is caption-as-comedy: receipts arrive with miniature verdicts or stage directions, while direct attention toward Kiro produces theatrical denial rather than withdrawal."])],
    antiFanon: [...new Set([...(kiro.antiFanon ?? []), "`Who's kiro` is theatrical evasiveness inside an independently resolved Kiro account, not contradictory identity evidence.", "Kiro's Cerberus/jungle language is absurd joke bravado only; do not literalize species, anatomy, or background.", "POSTED BY Kiro does not automatically mean MADE BY, CAPTURED BY, or visual FEATURING."])],
  } as ArchiveCharacter;
} else {
  allCharacters.push({
    id: "kiro",
    name: "Kiro",
    aliases: ["HicUUOOOOGH", "etharzii"],
    billing: "recurring",
    role: "Archive-era Wall cast",
    era: "2022–2023+",
    logline: "Petty receipt filer and one-line caption prosecutor who becomes theatrically unavailable the instant the room identifies Kiro: `N-n-n-no..` → `Who's kiro`. Even the defense is another punchline.",
    tags: ["Wall", "Petty receipt filer", "Punchline captioner", "Theatrical defendant", "Absurdist improviser", "Petty Crimes"],
    stableDiscordIds: ["754128584498610178"],
    relationships: kiroRelationships,
    quotes: ["Being petty:R_damn:", "Body = deceased / Wig = still living:z_sus:", "N-n-n-no..", "Who's kiro", "Im a cerberus breed coz i got three holes like a pretzel", "I JUST REALIZED YOURE GILLI", "OH GOD"],
    claims: ["Stable Discord account 754128584498610178 / etharzii / HicUUOOOOGH is Kiro in the reviewed Wall chronology.", "Kiro's recurring Wall mechanism is caption-as-comedy: receipts arrive with miniature verdicts or stage directions, while direct attention toward Kiro produces theatrical denial rather than withdrawal."],
    antiFanon: ["`Who's kiro` is theatrical evasiveness inside an independently resolved Kiro account, not contradictory identity evidence.", "Kiro's Cerberus/jungle language is absurd joke bravado only; do not literalize species, anatomy, or background.", "POSTED BY Kiro does not automatically mean MADE BY, CAPTURED BY, or visual FEATURING."],
  } as ArchiveCharacter);
}

// Run 1488 late Whiskey: Efi's softness comes with follow-through, context, and a very inconvenient memory.
const efiIndex = allCharacters.findIndex(
  (character) => character.id === "efi" || (character as ArchiveCharacter).stableDiscordIds?.includes("488099199938986004"),
);
if (efiIndex >= 0) {
  const efi = allCharacters[efiIndex] as ArchiveCharacter;
  const relationships = [...(efi.relationships ?? [])];
  addRelationship(relationships, "Lilly", "Efi's loud affection can turn into practical follow-through: she openly worries about Lilly, accepts other people offering backup, and then worries that Lilly may be annoyed by everybody fussing. The useful beat is care that checks both the person and its own impact, not romance, family, or a health record.");
  addRelationship(relationships, "RV", "Efi can tell RV `i remember it all RV`, get `Pls don’t`, and months later return to `Bad RV Bad`. It reads as comfortable long-memory / mock-discipline teasing, not an archivist role or a closeness rank.", "/characters/rv");
  addRelationship(relationships, "Gilli", "Inside the Lilly care pocket, Gilli helps validate and back up the concern. It is modest support texture rather than a ranked relationship.", "/characters/gilli");
  addRelationship(relationships, "Cookie", "Efi's `kuki is back!` is a small return-recognition beat: she notices the person reappearing and marks it immediately, without establishing absence length or relationship rank.");
  allCharacters[efiIndex] = {
    ...efi,
    tags: [...new Set([...(efi.tags ?? []), "Care with follow-through", "Context keeper", "Long social memory", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([...(efi.quotes ?? []), "this is out of context makes more sense if include entire convo", "i remember it all RV", "kuki is back!", "Bad RV Bad", "Al Mond Us"])],
    claims: [...new Set([...(efi.claims ?? []), "Efi's October 2020 Lilly scene deepens her compact social style with care that keeps checking its own impact: worry becomes follow-through, peer backup is welcomed, and Efi still notices whether the attention itself may be too much.", "Efi can remember old room nonsense sharply while also objecting when a clipped receipt loses the surrounding conversation, supporting an openly soft / context-conscious long-memory contradiction rather than a formal archivist label.", "The `Al Mond Us` game pitch is Efi's escalation of an earlier Anthos `AL MOND` seed: she turns one bad split-word joke into a whole Cashew/Casual Nuts office-spy premise, while Anthos later repeats the completed phrase."])],
    antiFanon: [...new Set([...(efi.antiFanon ?? []), "The Lilly care scene supports concern and follow-through, not romance, family, relationship status, diagnosis, or publication of private medical detail.", "`i remember it all RV` does not make Efi an official archivist or prove perfect memory.", "Efi expands `AL MOND` into `Al Mond Us`; do not credit her with the earlier base-word seed.", "Edited messages are represented only by their final surviving text."])],
  } as ArchiveCharacter;
}

// Run 1488 late Daycare support pass: keon's tiny Wall footprint still has a clear social mechanism.
const keonIndex = allCharacters.findIndex(
  (character) => character.id === "keon" || (character as ArchiveCharacter).stableDiscordIds?.includes("742468938243244082"),
);
const keonCharacter: ArchiveCharacter = {
  id: "keon",
  name: "keon",
  aliases: ["keon"],
  billing: "guest",
  role: "Archive-era support-room cast",
  era: "2022+",
  logline: "A reaction-first observer with a five-object Wall footprint and surprisingly sharp timing: keon mostly stares or wheezes until there is one correction worth saying, then lands it in a sentence and gets out.",
  tags: ["Wall", "Support-room cast", "Reaction-first", "Dry finisher", "Low-output high-impact", "Petty Crimes"],
  stableDiscordIds: ["742468938243244082"],
  relationships: [],
  quotes: [":R_stare:", "No she didn't lmao", ":Fat_Wheeze:", "Nope, you're just unfunny..."],
  claims: ["Stable account 742468938243244082 is keon in the reviewed supporting Wall route.", "The accessible Wall source contains five keon-authored objects: two reaction-style messages, two compact corrective/roast lines, and one direct ping. The cumulative social read is reaction-first observer ↔ surgical verbal finisher, not generic quietness.", "On May 13, 2022 `No she didn't lmao` is followed 4.779 seconds later by `:Fat_Wheeze:`. On December 26, after a long source-local gap, keon returns with `Nope, you're just unfunny...` and then directly pings the likely addressee."],
  antiFanon: ["Five authored Wall objects are not five total social interactions and do not establish low overall activity, shyness, or social distance.", "The December roast is not a Discord Reply; adjacency plus the following direct ping makes the addressee likely, not mechanically proven by reply metadata.", "Do not resolve the pooled/deleted account behind the December exchange.", "Dry roast language in this packet does not by itself establish literal hostility or conflict.", "These are Wall-side supporting-room scenes, not Daycare-posted messages."],
};
if (keonIndex >= 0) {
  const current = allCharacters[keonIndex] as ArchiveCharacter;
  allCharacters[keonIndex] = {
    ...current,
    ...keonCharacter,
    aliases: [...new Set([...(current.aliases ?? []), ...(keonCharacter.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(keonCharacter.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(keonCharacter.stableDiscordIds ?? [])])],
    relationships: [...(current.relationships ?? [])],
    quotes: [...new Set([...(current.quotes ?? []), ...(keonCharacter.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(keonCharacter.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(keonCharacter.antiFanon ?? [])])],
  } as ArchiveCharacter;
} else {
  allCharacters.push(keonCharacter);
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
