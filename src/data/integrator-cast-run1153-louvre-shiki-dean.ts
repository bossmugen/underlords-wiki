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

const shikiIndex = allCharacters.findIndex((character) => character.id === "shiki");
if (shikiIndex < 0) throw new Error("Run 1153 expected the canonical Shiki owner.");

const shiki = allCharacters[shikiIndex] as ExtendedCharacter;
const shikiAntiFanonBase = (shiki.antiFanon ?? []).filter(
  (item) => !(/Shiki/i.test(item) && /Shk/i.test(item) && /separate|kept separate|not the same|distinct/i.test(item)),
);
const shikiNext: ExtendedCharacter = {
  ...shiki,
  aliases: unique([...(shiki.aliases ?? []), "Shk", "yuki1794"]),
  logline:
    "UL's Sensei can spend a long stretch making a game system legible and still lose the assignment, the room, or the thing he was supposed to be looking at badly enough that `Sensei gets lost` survives as a multi-year joke. In WWM, the same practical authority lands him an accidental Guild Leader title and his response is basically: why am I leader, pass it to Rich.",
  tags: unique([
    ...(shiki.tags ?? []),
    "Louvre",
    "Athenaeum",
    "Where Winds Meet",
    "Running gags",
    "Directions",
    "Explainer",
    "Informal authority",
    "Petty Crimes",
  ]),
  relationships: mergeRelationships(shiki.relationships, [
    {
      name: "Mugen",
      note:
        "Mugen knows both halves of Shiki's reputation. In 2021 she answers `what am i supposed to look at again` with `Idk how Shiki finds his way back home everyday`; by the WWM era she is still calling him Sensei and recognizes the same person as a durable practical explainer. The joke is that he can get lost in UL's architecture and become the map once the question is inside the game.",
      href: "/characters/mugen",
    },
    {
      name: "Rich",
      note:
        "When WWM's system leaves Shiki holding Guild Leader automatically, he does not cling to the title. After the room explains how the leadership handoff happened, Shiki says `i pass to rich`; the useful texture is practical trust and low attachment to accidental status, not a UL appointment chain.",
      href: "/characters/rich",
    },
  ]),
  quotes: unique([
    ...(shiki.quotes ?? []),
    "what am i supposed to look at again",
    "i got many name in this discord",
    "just so many room in UL you get lost",
    "wat how im guild leader lol",
    "i pass to rich",
    "Hi",
    "lol",
  ]),
  claims: unique([
    ...(shiki.claims ?? []),
    "Shiki's getting-lost bit survives across years rather than belonging to one stray scene. In December 2020 he asks where Dean is and gets `he's up the ladder`; in September 2021 he asks `what am i supposed to look at again`, prompting Mugen's `Idk how Shiki finds his way back home everyday`; in December 2025 Mia says Sensei is helping decorate but `GETS LOST IN THE HOUSE`, Wini jokes that the real Shiki must be missing, and Shiki eventually appears with `Hi` / `lol`.",
    "The later WWM material sharpens the contradiction instead of cancelling it. Shiki jokes that he has many names and that UL has so many rooms `you get lost`, while the validated assigned catalog also records him spending long stretches giving detailed build and weapon advice. Mugen's `Sensei being sensei after 5 years @Shk` therefore has present-tense behavioral support: inside the game system, he still does the explanatory labor.",
    "By January 2026 Shiki's practical usefulness and his indifference to formal-looking status sit side by side. A WWM screenshot shows the game assigning YukiGozen the Guild Leader state; Shiki responds `wat how im guild leader lol`, listens to the room explain the automatic seniority/reliability chain, then says `i pass to rich`. He can be the person people learn from without needing the chair.",
    "Current hard canon resolves Shiki, Shk, and yuki1794 as the same person. ShiyaX remains a separate person unless independently bridged by stable-account evidence.",
  ]),
  antiFanon: unique([
    ...shikiAntiFanonBase,
    "Shiki = Shk = yuki1794 is a current hard canon identity bridge. Do not split those names into separate people. ShiyaX remains separate unless independently supported.",
    "The recurring lost/directions joke is social reputation and Petty Crimes texture, not a medical, cognitive, neurological, or real-world functional diagnosis.",
    "The December 2025 decorating/house exchange preserves what Mia, Wini, and Shiki say in the room; it does not verify a private physical layout or create a location disclosure.",
    "The WWM advice supports Sensei as lived social behavior, not the origin date of the title, a new formal office, appointment chronology, or governance authority. Exact late-January 2026 advice-row IDs remain a backfill task.",
    "The January 2026 Guild Leader label is WWM game state produced by that game's leadership mechanics. It is not a UL office, promotion, appointment, governance rank, or evidence that Shiki sought formal authority.",
  ]),
};

allCharacters[shikiIndex] = shikiNext;
characterById.set("shiki", shikiNext);

const deanIndex = allCharacters.findIndex((character) => character.id === "dean");
if (deanIndex < 0) throw new Error("Run 1153 expected the canonical Dean owner.");

const dean = allCharacters[deanIndex] as ExtendedCharacter;
const deanNext: ExtendedCharacter = {
  ...dean,
  tags: unique([
    ...(dean.tags ?? []),
    "Returns",
    "Ordinary life",
    "Photo sharing",
    "Tahoe",
    "Where Winds Meet",
    "Running gags",
  ]),
  relationships: mergeRelationships(dean.relationships, [
    {
      name: "Mugen",
      note:
        "The pre-UL mother/son relationship keeps its low-ceremony rhythm across years. In December 2020 Dean resurfaces with `hehe I is alive 🤣`, greets Mugs, then starts sharing ordinary life: he is finally out of the house, has pictures to send, and went to Tahoe with friends. By January 2026 Mugen can pre-file him as lost — `It's Dean. I expect him to be lost` — and Dean objects from inside the same family language: `but mom, i added you already? i was able to add you 🤨🐣`. The tease and the correction comfortably coexist.",
      href: "/characters/mugen",
    },
  ]),
  quotes: unique([
    ...(dean.quotes ?? []),
    "hehe I is alive 🤣",
    "I got so many pictures to send you",
    "I went to Tahoe with some friends",
    "but mom, i added you already? i was able to add you 🤨🐣",
  ]),
  claims: unique([
    ...(dean.claims ?? []),
    "On December 1, 2020 Dean returns to the room with `hehe I is alive 🤣`, answers Mugen's surprised greeting with `hey mugs :D`, then says he is finally out of the house, has many pictures to send her, and went to Tahoe with friends. The useful relationship beat is low-ceremony continuity: absence is followed by ordinary-life sharing rather than a formal re-entry.",
    "By January 6, 2026 Dean's lost/confused reputation is strong enough to arrive before an actual failure. Mugen says `It's Dean. I expect him to be lost`; Dean answers `but mom, i added you already? i was able to add you 🤨🐣`. The `but` is the objection, `mom` keeps the disagreement inside their established online-family register, and the second clause is his completion receipt.",
  ]),
  antiFanon: unique([
    ...(dean.antiFanon ?? []),
    "The December 2020 `I is alive` line is playful return language. It does not establish how long Dean had been absent or why.",
    "Dean's Tahoe line establishes a trip with friends and intent to share pictures with Mugen. It does not identify the friends, exact itinerary, lodging, or private location details.",
    "Mugen's January 2026 expectation that Dean will be lost is an established social joke, not an intelligence, competence, medical, or global inability claim; in that scene Dean explicitly says he already completed the task.",
    "The `mom` / mother-son language is the established user-confirmed online-family relationship and must not be literalized as biological family evidence.",
  ]),
};

allCharacters[deanIndex] = deanNext;
characterById.set("dean", deanNext);

// Run 1355 Wall addendum: Cele had no existing canonical structured owner on the
// publishing branch, so this live imported module creates one rather than leaving
// a strong person-shaped Wall read stranded in intake.
const celeId = "cele";
const celeIndex = allCharacters.findIndex(
  (character) => character.id === celeId || character.aliases?.some((alias) => alias.toLowerCase() === "celeana"),
);
const celeSeed: ExtendedCharacter = {
  id: celeId,
  name: "Cele",
  aliases: ["celeana"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2021+",
  logline:
    "Cele is spectacularly easy to fluster when the Wall turns toward her and bizarrely unable to ignore a solvable nuisance when it belongs to somebody else. She can go from `UR DONE` over a receipt to policing hundreds of unread red dots, checking whether Gilli is okay, and offering half a braincell as emergency aid without ever dropping the joke.",
  tags: [
    "Archive cast",
    "Wall",
    "Theatrical defendant",
    "Notification police",
    "Responsive care",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note:
        "Cele's care arrives in the same register as the rest of her chaos. When Gilli says she is losing her mind, Cele answers with a bear hug within seconds and later offers to share `half my braincell`. The joke softens the check-in instead of replacing it.",
      href: "/characters/gilli",
    },
    {
      name: "phenomenal_lamb",
      note:
        "Cele and phenomenal_lamb repeatedly turn receipts, exposure, and tiny challenges into reciprocal theater. Cele can protest being exposed, counter-file with `PLOT TWISRTTTT`, and keep the embarrassment moving rather than retreating from it.",
    },
  ],
  quotes: [
    "okAy nO cuz out of context",
    "UR DONE",
    "RLY BE EXPOSNING M LIKE THAT",
    "WHT U GOTS SO KANY RED DOTS",
    "doesn’t it bOther u",
    "want mine I’ll share half my braincell...",
    "height don’t stop mE i will climb da shelf for candy",
    "PLOT TWISRTTTT",
  ],
  claims: [
    "Cele's Wall material repeatedly pairs high-reactivity embarrassment with voluntary continued participation. When a receipt lands, she protests theatrically — `GOODBYE`, `UR DONE`, `RLY BE EXPOSNING M LIKE THAT` — but keeps feeding the exchange instead of disappearing from it.",
    "Her intolerance for unread badges becomes recognizable social behavior rather than a single complaint. She reacts to 906 unread notifications, later notices Moon's 285-message pile, asks Ricochet whether the red dots do not bother him, and gets told to lecture other notification-heavy people. The nuisance is small; Cele's inability to leave it alone is the character beat.",
    "The same fix-it reflex can turn gentle. On 2023-03-19 Cele asks Gilli if she is okay; when Gilli says she is losing her mind, Cele responds with a bear hug within seconds and later offers half a braincell. Care and clowning occupy the same sentence rather than separate modes.",
    "Cele's recurring phenomenal_lamb exchanges make receipt culture reciprocal: she can be the exposed defendant and the person firing the framing back. The relationship texture is comfortable public teasing, not hostility inferred from mock threats or counter-filings.",
  ],
  antiFanon: [
    "Cele's joke about hacking into somebody's account appears inside a notification-cleanup bit about unread red dots. Keep it as joke language; it does not establish unauthorized access, cyber behavior, or account compromise.",
    "Cele's exaggerated threats and combat language in Wall banter are social theater, not evidence of literal violence or hostility.",
    "The Gilli check-in and half-braincell joke support responsive care and comfortable teasing; they do not establish a closeness ranking, exclusivity, romance, or family relation.",
    "Wall attachments and screenshots remain attributed only to the known poster unless maker, capturer, depicted subjects, or visual content are independently established.",
  ],
};

if (celeIndex >= 0) {
  const current = allCharacters[celeIndex] as ExtendedCharacter;
  const celeNext: ExtendedCharacter = {
    ...current,
    ...celeSeed,
    aliases: unique([...(current.aliases ?? []), ...(celeSeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(celeSeed.tags ?? [])]),
    relationships: mergeRelationships(current.relationships, celeSeed.relationships ?? []),
    quotes: unique([...(current.quotes ?? []), ...(celeSeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(celeSeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(celeSeed.antiFanon ?? [])]),
  };
  allCharacters[celeIndex] = celeNext;
  characterById.set(celeNext.id, celeNext);
} else {
  allCharacters.push(celeSeed);
  characterById.set(celeId, celeSeed);
}

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(celeId)) {
  archiveCastGroup.characterIds.push(celeId);
}

// This Louvre handoff contains a stale Mia/Mimi identity repair that conflicts
// with current hard root canon. Current canon wins: Mia and Mimi are separate
// people. No identity merge from this miner handoff is published here.
