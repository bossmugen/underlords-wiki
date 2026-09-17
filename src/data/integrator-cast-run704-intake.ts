import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendRelationshipNote = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index < 0) {
    relationships.push(incoming);
    return;
  }

  const current = relationships[index];
  const note = current.note.includes(incoming.note)
    ? current.note
    : `${current.note} ${incoming.note}`;
  relationships[index] = {
    ...current,
    ...incoming,
    note,
    href: current.href ?? incoming.href,
  };
};

// Run 704 Core: Mugen's existing dossier already knows she did Decora. The new
// Announcements packet supplies the person-shaped contradiction inside that fact:
// the maximalism was deliberate and occasion-bounded, and Mugen herself pairs it
// with her straight-A / 4.0 "perfect student" self-description.
const mugenIndex = allCharacters.findIndex((character) => character.id === "mugen");
if (mugenIndex >= 0) {
  const mugen = allCharacters[mugenIndex] as ExtendedCharacter;

  allCharacters[mugenIndex] = {
    ...mugen,
    tags: [
      ...new Set([
        ...(mugen.tags ?? []),
        "Decora",
        "Controlled maximalism",
        "High-school ordinary life",
        "Petty Crimes",
      ]),
    ],
    quotes: [
      ...new Set([
        ...(mugen.quotes ?? []),
        "Omaigawd i used to dress like that in hs",
        "I also had stuffed frogs and bears tacked on my tulle skirt",
        "Decora... That's what i did",
        "Mind u I topped the classes straight A 4.0 perfect student",
      ]),
    ],
    claims: [
      ...new Set([
        ...(mugen.claims ?? []),
        "On 2020-04-15 Mugen described a high-school Decora phase, explicitly limiting it to spirit / certain / free days and remembering stuffed frogs and bears tacked onto a tulle skirt. She then supplied her own contrast: `Mind u I topped the classes straight A 4.0 perfect student`. The useful character read is deliberate visual maximalism coexisting with a disciplined academic self-concept rather than one persona cancelling the other.",
        "Snow, Gilli and Yummibears treat the Decora disclosure as funny/surprising in the surviving scene and ask for or joke about visual evidence; Mugen keeps elaborating instead of retreating from the bit.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(mugen.antiFanon ?? []),
        "Mugen's straight-A / 4.0 wording is her own dated self-report. Do not infer school, location, classmates, exact educational chronology, or independent academic verification.",
        "The 2020-04-15 Decora scene explicitly limits the style to certain / spirit / free days. Snow's `fruit candy` joke is comparison language in the surrounding Dragon Raja outfit discussion, not proof Mugen literally wore an in-game outfit in real life. Reference/example media from the cluster remains uninspected.",
        "`spirit days` in this scene means school-spirit clothing context and is not the later Dragon Raja Spirit-field/event mechanic.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("mugen", allCharacters[mugenIndex]);
}

// Run 704 Louvre: MAIN already owns most of Lilly's receipt-hunt mechanism. WIKI
// gets the structured cumulative version: she addresses people directly, but the
// directness does not require a cold register; the exhibit is often a summons.
const lillyIndex = allCharacters.findIndex((character) => character.id === "lilly");
if (lillyIndex >= 0) {
  const lilly = allCharacters[lillyIndex] as ExtendedCharacter;
  const relationships = [...(lilly.relationships ?? [])];

  appendRelationshipNote(relationships, {
    name: "Woohyuk",
    note:
      "Lilly repeatedly pulls Woohyuk directly into Wall exhibit scenes: on 2020-11-14 she posts an image, tags him less than a minute later, and gets `:ANIdelete:` back; on 2020-12-31 she again posts an image while tagging him. The repeated behavior is a `come look at this / you are in this bit` summons, not proof the uninspected images depict him or blanket screenshot consent.",
    href: "/characters/woohyuk",
  });
  appendRelationshipNote(relationships, {
    name: "Anayss",
    note:
      "On 2020-12-03 Lilly posts a screenshot, tags Anayss seconds later, and Anayss answers with `:Hehe:`. It is one compact receipt-play summons, not a closeness ranking or a claim about what the uninspected screenshot shows.",
    href: "/characters/anayss",
  });

  allCharacters[lillyIndex] = {
    ...lilly,
    tags: [
      ...new Set([
        ...(lilly.tags ?? []),
        "People-targeted directness",
        "Visual summons",
        "Immediate warmth",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(lilly.quotes ?? []),
        "@Danny🟥⬜ stop simping over the girls here",
        "heheheheh thank you",
        "@RΣN I LOVE YOU",
      ]),
    ],
    claims: [
      ...new Set([
        ...(lilly.claims ?? []),
        "Lilly's 2020 Wall scenes repeatedly put direct person-address beside immediate warmth: she can tell Danny `stop simping over the girls here`, accept the room's welcome seconds later with `heheheheh thank you`, and answer Ren's `LILLYYYY` with `@RΣN I LOVE YOU`. Correction does not require a colder social mode.",
        "Across November and December 2020 Lilly repeatedly posts a visual object and then names who should come look: Woohyuk at least twice and Anayss once. The recurring social mechanism is targeted summons rather than anonymous broadcast.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(lilly.antiFanon ?? []),
        "The Lilly-posted Wall images/screenshots in this Run 704 family remain POSTED BY Lilly only. Tagging Woohyuk or Anayss after an image does not establish who made or captured it, who appears in it, or blanket consent to screenshots.",
        "Lilly's `I LOVE YOU` to Ren is overt warmth in one local scene, not romance, exclusivity, or a closeness ranking. Danny's `stop simping` correction is one direct exchange, not a standing authority role.",
        "The current Louvre/Athenaeum assignment still has 11 direct creative-room messages not cleanly recovered; do not project this Wall social pattern into her creative-room personality until those rows are read.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("lilly", allCharacters[lillyIndex]);
}

// Small Core reputation deepener. `Nitro Sniper` is an anniversary-month
// gift-claiming label and must stay miles away from Chibiterasu's historical
// Sniperr / Officer governance history. The later Lobby packet adds stable-account
// return/name chronology without pretending repeated onboarding means a departure.
const chubiIndex = allCharacters.findIndex((character) => character.id === "chubi");
if (chubiIndex >= 0) {
  const chubi = allCharacters[chubiIndex] as ExtendedCharacter;

  allCharacters[chubiIndex] = {
    ...chubi,
    tags: [
      ...new Set([
        ...(chubi.tags ?? []),
        "Nitro fast fingers",
        "Lobby return chronology",
        "Name drift",
        "Petty Crimes",
      ]),
    ],
    claims: [
      ...new Set([
        ...(chubi.claims ?? []),
        "In Mugen's 2023-03-31 anniversary closeout Chubi is named among the month's `Nitro Snipers`, with the group praised for `fast fingers`. Use as bounded playful speed reputation in that Nitro context.",
        "Stable Discord account 559670680287969281 self-reports `chibiterasu`, `Underlords`, and age 22 during Lobby onboarding on 2022-03-09, then appears in the Lobby onboarding flow again 796 days later on 2024-05-13 and self-reports `Chuu~tan, Underlords and I'm 25`. The durable reference value is one account resurfacing in two onboarding moments with changed self-reported in-game naming.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(chubi.antiFanon ?? []),
        "`Nitro Sniper` is an anniversary/event label about fast Nitro claiming. It is not evidence for Chibiterasu's historical junior-officer / Sniperr governance duties and does not establish appointment chronology.",
        "The 2022 and 2024 Lobby self-identifications do not establish that Chibiterasu left and rejoined UL, was expelled and re-admitted, disappeared for 796 days, or continuously used either in-game name between the two dated scenes.",
        "ƐℲı˥'s 2024 `chu chu` line is contextual adjacency rather than a stored reply/reference or mention. Keep it as a possible familiarity clue, not a relationship-rank claim or a technical reply edge.",
        "This Lobby packet shows Chibiterasu as the onboarding subject. Do not inherit ƐℲı˥'s role-assignment/routing verbs as Chibiterasu's lived Sniperr or Officer activity.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("chubi", allCharacters[chubiIndex]);
}

// Run 1231 Core: repeated weekly Sniper recognition gives phenomenal_lamb a small but
// coherent lived-role dossier. The anniversary Nitro label is deliberately kept as a
// separate speed-event echo rather than merged into the weekly service system.
const normalizePhenomenalName = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "");
const phenomenalNames = new Set(["phenomenallamb"]);
const phenomenalIndex = allCharacters.findIndex((character) =>
  [character.id, character.name, ...(character.aliases ?? [])].some((value) =>
    phenomenalNames.has(normalizePhenomenalName(value)),
  ),
);

const phenomenalCharacter: ExtendedCharacter = {
  id: "phenomenal-lamb",
  name: "phenomenal_lamb",
  billing: "legacy",
  role: "Archive-era Sniper",
  era: "2022–2023+",
  logline:
    "Shows up for the recurring Sniper service lane often enough to get publicly recognized twice, then resurfaces in a completely separate anniversary fast-fingers category. Same word, different jurisdiction; apparently the trigger finger had extracurriculars.",
  tags: [
    "Archive cast",
    "Sniper",
    "On call",
    "2022",
    "2023",
    "Repeat recognition",
    "Petty Crimes",
  ],
  relationships: [],
  quotes: [],
  claims: [
    "On 2022-11-10 Mugen publicly welcomes phenomenal_lamb as one of that week's `@Snipers` and wishes her luck on `pew pew~`. On 2022-12-12 Mugen names the same account again among the `Snipers of the Week` and thanks `all Snipers on call for your service!`. The repetition is lived-role evidence that phenomenal_lamb actually participated in the recurring Sniper service lane rather than merely carrying a static exported role.",
    "On 2023-03-31 the same account is listed `x2` under the anniversary `Nitro Snipers` / `fast fingers` category. That is a separate playful speed-event echo, not the weekly Sniper service system continuing under a new name.",
  ],
  antiFanon: [
    "Weekly `Snipers` / `Snipers of the Week` and anniversary `Nitro Snipers` are distinct systems in the surviving text. Do not merge them into one role chronology.",
    "The 2022 recognition supports lived participation in the recurring Sniper service lane; it does not establish appointment date, first service date, exclusivity, or continuous activity.",
    "The `x2` in the 2023 anniversary post is preserved as written. Do not expand it into two confirmed wins without the underlying giveaway receipts.",
    "Mugen authored the public recognition posts. Do not attribute `pew pew~`, `fast fingers`, or the announcement prose to phenomenal_lamb.",
    "The screenshot attached to the 2022-12-12 Sniper announcement remains uninspected; POSTED BY Mugen does not establish MADE BY, CAPTURED BY, or FEATURING phenomenal_lamb.",
  ],
};

if (phenomenalIndex >= 0) {
  const phenomenal = allCharacters[phenomenalIndex] as ExtendedCharacter;
  allCharacters[phenomenalIndex] = {
    ...phenomenal,
    logline: phenomenalCharacter.logline,
    aliases: [...new Set([...(phenomenal.aliases ?? []), "phenomenal_lamb"])],
    tags: [...new Set([...(phenomenal.tags ?? []), ...(phenomenalCharacter.tags ?? [])])],
    claims: [...new Set([...(phenomenal.claims ?? []), ...(phenomenalCharacter.claims ?? [])])],
    antiFanon: [
      ...new Set([...(phenomenal.antiFanon ?? []), ...(phenomenalCharacter.antiFanon ?? [])]),
    ],
  } as ExtendedCharacter;
  characterById.set(phenomenal.id, allCharacters[phenomenalIndex]);
} else {
  allCharacters.push(phenomenalCharacter);
  characterById.set(phenomenalCharacter.id, phenomenalCharacter);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(phenomenalCharacter.id)) {
    archiveCastGroup.characterIds.push(phenomenalCharacter.id);
  }
}
