import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

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
