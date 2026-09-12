import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mergeRelationships = (
  current: Character["relationships"] | undefined,
  additions: NonNullable<Character["relationships"]>,
) => {
  const merged = [...(current ?? [])];
  for (const addition of additions) {
    const index = merged.findIndex((relationship) => relationship.name === addition.name);
    if (index >= 0) merged[index] = { ...merged[index], ...addition };
    else merged.push(addition);
  }
  return merged;
};

// Hard canon repair: Support Tech / SEU / Beansprout / Deansprout are Dean,
// not a second person. Run 894 created a source-label owner before that bridge was
// locked; fold its useful Wall material back into Dean and retire the duplicate.
const deanIndex = allCharacters.findIndex((character) => character.id === "dean");
if (deanIndex < 0) {
  throw new Error("Run 953 expected the canonical Dean owner.");
}

const dean = allCharacters[deanIndex] as ExtendedCharacter;
const supportTech = allCharacters.find((character) => character.id === "support-tech") as ExtendedCharacter | undefined;
const deanRelationships = [...(dean.relationships ?? [])];
if (!deanRelationships.some((relationship) => relationship.name === "Mugen")) {
  deanRelationships.push({
    name: "Mugen",
    note:
      "Their online-family relationship predates Dragon Raja and Underlords; Dean calls Mugen mum. The later Support Tech archive is the same person, not a separate cast member.",
    href: "/characters/mugen",
  });
}

const deanNext: ExtendedCharacter = {
  ...dean,
  aliases: unique([
    ...(dean.aliases ?? []),
    ...(supportTech?.aliases ?? []),
    "Support Tech",
    "SEU",
    "Beansprout",
    "Deansprout",
    "jk031",
  ]),
  logline:
    "Mugen's pre-UL online son, and later an aggressively economical archive participant: in the Support Tech era Dean can file a Wall exhibit with two words, show up for three different photo themes with no caption at all, and let the upload do most of the talking.",
  tags: unique([
    ...(dean.tags ?? []),
    ...(supportTech?.tags ?? []),
    "Platelet",
    "Pre-UL",
    "Support Tech",
    "Wall",
    "Photo Submissions",
    "Creative events",
    "Low-narration contribution",
  ]),
  relationships: deanRelationships,
  quotes: unique([
    ...(dean.quotes ?? []),
    ...(supportTech?.quotes ?? []),
  ]),
  claims: unique([
    ...(dean.claims ?? []),
    ...(supportTech?.claims ?? []),
    "Dean's later Support Tech footprint is consistently low-verbiage without being low-participation. In Wall he repeatedly drops attachments with tiny verdict captions; in 2021 photo submissions he posts attachment-only entries for COLORS, MAFIA, and BEACH across roughly eight weeks.",
    "The photo-submission recurrence broadens Dean beyond Screenshot Court. He keeps showing up for the club's visual-event programming while saying essentially nothing in the submission itself: artifact down, room reacts, scene moves on.",
  ]),
  antiFanon: unique([
    ...(dean.antiFanon ?? []),
    ...(supportTech?.antiFanon ?? []),
    "Support Tech / SEU / Beansprout / Deansprout are Dean by hard canon. Do not create or retain a second Support Tech person owner.",
    "Dean's COLORS, MAFIA, and BEACH attachments are POSTED BY Dean only. The media pixels were not inspected, so MADE BY / CAPTURED BY / FEATURING and artistic-discipline claims remain unassigned.",
  ]),
};

allCharacters[deanIndex] = deanNext;
const duplicateSupportTechIndex = allCharacters.findIndex((character) => character.id === "support-tech");
if (duplicateSupportTechIndex >= 0) allCharacters.splice(duplicateSupportTechIndex, 1);
characterById.delete("support-tech");
characterById.set("dean", deanNext);

// Valantina already has a compact canonical owner. The new cross-source packet
// gives that owner an actual behavioral spine instead of another event receipt.
const valantinaIndex = allCharacters.findIndex((character) => character.id === "valantina");
if (valantinaIndex < 0) {
  throw new Error("Run 953 expected the canonical Valantina owner.");
}

const valantina = allCharacters[valantinaIndex] as ExtendedCharacter;
const valantinaNext: ExtendedCharacter = {
  ...valantina,
  aliases: unique([...(valantina.aliases ?? []), "tyffani"]),
  logline:
    "Valantina is remarkably unembarrassed by not knowing yet. She can ask `Where's Mary`, cancel the question seven seconds later, or announce `IDK IF I CAN STILL SUBMIT THIS BUT I WILL ANYWAYS` and hit upload before uncertainty gets promoted into a committee meeting.",
  tags: unique([
    ...(valantina.tags ?? []),
    "Council",
    "Photo Submissions",
    "Creative events",
    "Low-ceremony uncertainty",
    "Action anyway",
  ]),
  quotes: unique([
    ...(valantina.quotes ?? []),
    "Where’s Mary",
    "Nvm",
    "IDK IF I CAN STILL SUBMIT THIS BUT I WILL ANYWAYS",
  ]),
  claims: unique([
    ...(valantina.claims ?? []),
    "Valantina's surviving low-stakes interactions make uncertainty visible without letting it become a stopping condition. In June 2020 she asks `Where's Mary` and closes the question with `Nvm` 6.875 seconds later; whatever resolved it, she does not make being briefly unsure into a production.",
    "For the August 2021 POPSTAR photo window, Valantina says `IDK IF I CAN STILL SUBMIT THIS BUT I WILL ANYWAYS` and posts an attachment. The useful character beat is the sentence itself: uncertainty is acknowledged, then action wins.",
    "The following month she returns for FESTIVAL with another attachment-only submission. The August uncertainty did not end the participation; she simply turns up again for the next theme.",
    "Her POPSTAR and FESTIVAL posts draw warm multi-person reaction clusters. That reads as easy room reception around the contributions rather than a named intimacy ranking.",
  ]),
  antiFanon: unique([
    ...(valantina.antiFanon ?? []),
    "The POPSTAR line does not establish that Valantina was late, broke a rule, or had the entry formally accepted or rejected; the listed window and her own uncertainty are the only timing facts used here.",
    "Valantina's photo-submission attachments are POSTED BY Valantina only. Their maker, capturer, depicted subjects, and visual contents were not established in this pass.",
    "Reaction clusters are reception texture, not administrative rulings or closeness rankings.",
  ]),
};

allCharacters[valantinaIndex] = valantinaNext;
characterById.set("valantina", valantinaNext);

// Hard canon repair: the old Wall-only `rookie-cookie-uwu` owner is Rooks.
// Merge the good scene texture into the canonical Staff dossier and retire the
// duplicate instead of letting one person occupy two cast cards.
const rooksIndex = allCharacters.findIndex((character) => character.id === "rooks");
if (rooksIndex < 0) {
  throw new Error("Run 953 expected the canonical Rooks owner.");
}

const rooks = allCharacters[rooksIndex] as ExtendedCharacter;
const rookieCookie = allCharacters.find((character) => character.id === "rookie-cookie-uwu") as ExtendedCharacter | undefined;
const rooksNext: ExtendedCharacter = {
  ...rooks,
  aliases: unique([
    ...(rooks.aliases ?? []),
    ...(rookieCookie?.aliases ?? []),
    "Rookie Cookie",
    "Rookie Cookie uwu",
    ".poogie.",
    "Blueberry",
    "Roo",
    "rooberry uwu",
  ]),
  logline:
    "Rooks handles logistics in an `uwu` font. She can turn a disappointing printmaking class into a buy-my-own-tools plan in under half a minute, call work before a dealership delay becomes a crisis, explain a baren before anybody has to ask, and then sleep through every alarm like competence has never met her personally.",
  tags: unique([
    ...(rooks.tags ?? []),
    ...(rookieCookie?.tags ?? []),
    "Staff",
    "Printmaking",
    "Maker follow-through",
    "Ordinary life",
    "Anticipatory clarification",
    "Petty Crimes",
  ]),
  relationships: mergeRelationships(rooks.relationships, [
    ...(rookieCookie?.relationships ?? []),
    {
      name: "Sou",
      note:
        "Their Wall teasing is comfortable enough for Rooks to edit Sou's reassurance into the funniest possible prosecution exhibit. Outside Screenshot Court, the care gets much quieter: after Rooks says a dealership delay may make them late for work, Sou comes back later and asks whether they made it on time. Somebody remembered the boring unresolved problem and checked back.",
    },
  ]),
  quotes: unique([
    ...(rooks.quotes ?? []),
    ...(rookieCookie?.quotes ?? []),
    "Rooks, UnderLords, member uwu",
    "I’m gonna order my own personal printmaking supplies so I can sell copies of my work",
    "baren (helps ink stick to paper)",
    "I slept passed all of my alarms and missed class",
  ]),
  claims: unique([
    ...(rooks.claims ?? []),
    ...(rookieCookie?.claims ?? []),
    "By May 17, 2020 the stable `.poogie.` account directly self-identifies as `Rooks, UnderLords, member uwu` and then receives Discord permissions/channel orientation. That is a surviving threshold, not guaranteed absolute origin or recruiter proof.",
    "Rooks's creative life has practical follow-through. On September 1, 2020 they return from a printmaking class disappointed that no printmaking happened; 23.821 seconds later they say they will order personal supplies so they can sell copies of their work. Eleven days later the tools are arriving and Rooks explains `baren (helps ink stick to paper)` inline.",
    "That printmaking lane fits a wider communication habit: Rooks anticipates likely confusion and supplies the bridge. The same day they tell the room `This is Rooks btw I don’t want my name to confuse you lol`; later the unfamiliar tool gets its own parenthetical glossary before anyone asks.",
    "Practical follow-through does not make Rooks frictionless. During a dealership delay they have already warned work and arranged an update point; in a separate family disruption they stay home to keep siblings on track with school; later that month they report sleeping through every alarm and missing class. Keep the competence and the ordinary failure together.",
  ]),
  antiFanon: unique([
    ...(rooks.antiFanon ?? []),
    ...(rookieCookie?.antiFanon ?? []),
    "Rooks / Rookie Cookie / Rookie Cookie uwu / `.poogie.` are one person in project canon. Do not retain a second `rookie-cookie-uwu` person owner.",
    "The May 17 permissions message comes from a pooled Deleted User account; do not identify the welcoming human or turn Discord provisioning into an exact in-game admission timestamp.",
    "Rooks's printmaking receipts support practice, self-provisioning, and intent to sell copies. They do not establish a major, formal business, actual sales, commissions, or income.",
    "Private family medical/location context adjacent to the sibling-school message remains excluded. The public-safe fact is the practical school-monitoring behavior only.",
    "The 2021 repeated MEE6 welcomes may reflect leave/rejoin mechanics, but the departure cause and interval remain unresolved; do not publish a solved disappearance-return arc from bot greetings alone.",
  ]),
};

allCharacters[rooksIndex] = rooksNext;
const duplicateRookieIndex = allCharacters.findIndex((character) => character.id === "rookie-cookie-uwu");
if (duplicateRookieIndex >= 0) allCharacters.splice(duplicateRookieIndex, 1);
characterById.delete("rookie-cookie-uwu");
characterById.set("rooks", rooksNext);
for (const group of castGroups) {
  group.characterIds = group.characterIds.filter((id) => id !== "rookie-cookie-uwu");
}

// The Sep. 22 Saber repair scene was already public on ƐℲı˥'s dossier. The
// Birthdays/PR pass adds the ordinary-life reason the reminders mattered.
const effeIndex = allCharacters.findIndex((character) => character.id === "effe");
if (effeIndex >= 0) {
  const effe = allCharacters[effeIndex] as ExtendedCharacter;
  const effeNext: ExtendedCharacter = {
    ...effe,
    tags: unique([...(effe.tags ?? []), "Notification habits", "Muted server"]),
    quotes: unique([
      ...(effe.quotes ?? []),
      "I use them. I like the reminders",
      "Good for my scatter brain",
      "I have server on mute all the time 😂 only tag notifications",
    ]),
    claims: unique([
      ...(effe.claims ?? []),
      "The event-announcement repair has a personal use case, not just a technical one: ƐℲı˥ says they like the reminders, calls them `Good for my scatter brain`, and keeps the server muted except for tag notifications. The infrastructure they are fixing is exactly the kind of infrastructure that can still reach them.",
    ]),
    antiFanon: unique([
      ...(effe.antiFanon ?? []),
      "The Sep. 22 PR packet preserves stable account 488099199938986004 as `sycessences / ƐℲı˥`. This pass does not create an identity bridge to the separately published Sye/Life dossier; hold that conflict until an independent hard bridge resolves it.",
      "`Good for my scatter brain` is the person's casual wording about reminders, not a clinical diagnosis receipt.",
    ]),
  };
  allCharacters[effeIndex] = effeNext;
  characterById.set("effe", effeNext);
}
