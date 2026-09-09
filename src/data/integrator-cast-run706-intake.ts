import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index < 0) {
    relationships.push(incoming);
    return;
  }

  const current = relationships[index];
  relationships[index] = {
    ...current,
    ...incoming,
    note: current.note.includes(incoming.note) ? current.note : `${current.note} ${incoming.note}`,
    href: current.href ?? incoming.href,
  };
};

// Run 706 Core: Zoshaa's control-holder behavior has a useful second half. She can
// push for control, use it to make the room workable, then hand hosting to Booba
// and celebrate being free of the responsibility she just exercised.
const zoshaaIndex = allCharacters.findIndex((character) => character.id === "zoshaa");
if (zoshaaIndex >= 0) {
  const zoshaa = allCharacters[zoshaaIndex] as ExtendedCharacter;
  const relationships = [...(zoshaa.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Booba",
    note:
      "In a 2020 LGS tournament room Zoshaa moves from `give control back i have agreed upon more rules` to `boob you host now MUAHAHAHAHA` and `i am free of responsibility`. She can take the wheel long enough to make the room workable, then shove the hosting job sideways with obvious relief. This is one event-room handoff, not an organization-wide appointment.",
    href: "/characters/booba",
  });

  allCharacters[zoshaaIndex] = {
    ...zoshaa,
    tags: [
      ...new Set([
        ...(zoshaa.tags ?? []),
        "Operational delegation",
        "Control-room chaos",
        "Responsibility relief",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(zoshaa.quotes ?? []),
        "give control back i have agreed upon more rules",
        "i will yeet everyone",
        "boob you host now MUAHAHAHAHA",
        "i am free of responsibility",
        "go back to your previous hell",
      ]),
    ],
    claims: [
      ...new Set([
        ...(zoshaa.claims ?? []),
        "During a 2020 LGS tournament-room sequence Zoshaa explicitly asks for control back after agreeing on more rules, threatens to `yeet everyone`, then delegates hosting to Booba and immediately celebrates being `free of responsibility`. The useful character read is authority as both practical tool and comic burden: she will use control when the room needs it, then happily stop holding it.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(zoshaa.antiFanon ?? []),
        "`boob you host now` is a bounded event-room hosting handoff. It does not appoint Booba to Discord-wide leadership, establish UL succession, or alter either person's formal role history.",
        "Nearby screenshot-heavy Zoshaa joke pockets remain POSTED BY their posters unless maker, capturer, or depicted subjects are independently established from inspected media or direct text.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("zoshaa", allCharacters[zoshaaIndex]);
}

// Run 706 Wall + Daycare: Sou is already an Ansun alias in the canonical cast.
// Fold the Wall voice into that one person instead of spawning Sou II. The useful
// contradiction is standards without indiscriminate negativity: Ansun/Sou can call
// something trash and still explicitly say the underlying person/thing is good.
const ansunIndex = allCharacters.findIndex((character) => character.id === "ansun");
if (ansunIndex >= 0) {
  const ansun = allCharacters[ansunIndex] as ExtendedCharacter;
  const relationships = [...(ansun.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Zoshaa",
    note:
      "Zoshaa is a recurring target for Sou/Ansun's categorical joke language: `Zosha I would say trash tbh`, plus the remembered `scrambled egg bunny fursona` callback when an old image reappears. The repetition supports familiar teasing grammar, not a closeness ranking or a claim that the replayed image originated the nickname.",
    href: "/characters/zoshaa",
  });

  allCharacters[ansunIndex] = {
    ...ansun,
    aliases: [...new Set([...(ansun.aliases ?? []), "Sou", "shadowforsaken"])],
    tags: [
      ...new Set([
        ...(ansun.tags ?? []),
        "Wall",
        "Standards critic",
        "Categorical language",
        "Attention to detail",
        "Soft lane",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(ansun.quotes ?? []),
        "I just HATE Tifa trash. But yes Tifa is very good",
        "Nooo it just reminds Zosha of the name scrambled egg bunny fursona every time this appear",
        "I see 2 loser salute each other in a weird way",
        "But also as the left hand chef I’m all about the attention to detail",
        "Cursed. Delete it it from Mugen mind!",
        "I’m far away from wall I’d say this but she’s a tiny queen",
        "Bring the rabbit everywhere",
        "Almost spat my coca cola",
      ]),
    ],
    claims: [
      ...new Set([
        ...(ansun.claims ?? []),
        "Across 2020–2023 Wall posts under Sou, Ansun repeatedly uses verdict words like `trash`, `delete`, `cute`, and `good`, but the judgments are not one-note negativity. The cleanest self-correction is `I just HATE Tifa trash. But yes Tifa is very good`: he distinguishes the offending category from the broader evaluation instead of flattening them together.",
        "Ansun/Sou later calls himself the `left hand chef` and immediately pairs it with `I’m all about the attention to detail`, giving the standards-heavy Wall voice an ordinary-life self-description rather than leaving it as pure roast persona.",
        "Daycare adds a stranger little Petty Crimes register: absurdly formal grape-juice wording, `Almost spat my coca cola`, `Bring the rabbit everywhere`, and body-failure observations delivered with almost no ceremony.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(ansun.antiFanon ?? []),
        "Sou is folded into canonical Ansun; do not create a separate Sou character from this Wall handoff.",
        "The `siblings are worst` Wall line has an unresolved screenshot referent and does not establish a literal family relationship with Ren or anyone else.",
        "`left hand chef` is Ansun/Sou's own joke-shaped self-description in context, not a formal UL title or staffing role.",
        "The Daycare `spree murderer` language about bonking is joke hyperbole and is not evidence of literal violence; `spirit animal` in Keon's separate animal line is not reused as identity evidence here.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("ansun", allCharacters[ansunIndex]);
}

// Run 706 Daycare overlaps a concurrent Keon dossier. Keep that person's existing
// low-word / sharp-roast axis and layer the earlier animal-shorthand material onto
// the same file instead of replacing it or creating Keon II.
const keonIndex = allCharacters.findIndex((character) => character.id === "keon");
if (keonIndex >= 0) {
  const keon = allCharacters[keonIndex] as ExtendedCharacter;
  allCharacters[keonIndex] = {
    ...keon,
    aliases: [...new Set([...(keon.aliases ?? []), "keon7063"])],
    era: keon.era.includes("2021") ? keon.era : "2021–2023+",
    tags: [
      ...new Set([
        ...(keon.tags ?? []),
        "Animal shorthand",
        "Cute things",
        "Petty Crimes",
      ]),
    ],
    quotes: [
      ...new Set([
        ...(keon.quotes ?? []),
        "bonggo cat is so cute .. that’s my spirit animal",
        "ice cream ice cream ice cream .. where ??",
        "i cant taste it ...",
        "Gilli = Pug",
        "Mugen = Golden Retriever",
        "Cele = Bulldog",
        "Ace = PUG",
      ]),
    ],
    claims: [
      ...new Set([
        ...(keon.claims ?? []),
        "In 2021 Daycare Keon directly calls bonggo cat cute, then repeatedly maps familiar people onto dog breeds or animal labels: Gilli and Ace as Pugs, Mugen as a Golden Retriever, Cele as a Bulldog, and Zer0 as a Labrador Retriever. The repeated mechanism supports playful person-reading through animal shorthand rather than one isolated animal joke.",
        "A separate Daycare pocket has Keon rushing toward `ice cream ice cream ice cream .. where ??` before landing on `i cant taste it ...`, preserving the same quick, conversational comedy instead of a formal anecdote.",
        "Later carryover includes `bonk cause you been bonking everyone when I compliment everyone` and a sleepy `Caek ... nighhht`, giving the small file both teasing continuity and softer late-room texture.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(keon.antiFanon ?? []),
        "Keon's phrase `spirit animal` is quoted as 2021 chat language only. Do not infer religion, ethnicity, spirituality, or cultural identity from it.",
        "Animal/breed assignments are playful social metaphors, not claims about literal identity, appearance, diagnosis, or hierarchy.",
        "The `spree murderer` / bonking language in the supporting pocket is joke hyperbole and not evidence of literal violence.",
        "Current/export role arrays are not used to infer Keon's appointment history or formal UL role.",
      ]),
    ],
  } as ExtendedCharacter;
  characterById.set("keon", allCharacters[keonIndex]);
} else {
  const keon: ExtendedCharacter = {
    id: "keon",
    name: "Keon",
    aliases: ["keon7063"],
    billing: "legacy",
    role: "Archive-era Daycare cast",
    era: "2021–2023+",
    logline:
      "Cute-animal appreciator who turns people into breeds as conversational shorthand: bonggo cat is `so cute`, Mugen becomes a Golden Retriever, Cele a Bulldog, Gilli and Ace Pugs, and an ice-cream emergency still has time for `where ??` before the punchline arrives.",
    tags: ["Archive cast", "Daycare", "Animal shorthand", "Cute things", "Petty Crimes"],
    quotes: [
      "bonggo cat is so cute .. that’s my spirit animal",
      "ice cream ice cream ice cream .. where ??",
      "i cant taste it ...",
      "Gilli = Pug",
      "Mugen = Golden Retriever",
      "Cele = Bulldog",
      "Ace = PUG",
    ],
    claims: [
      "In 2021 Daycare Keon directly calls bonggo cat cute, then repeatedly maps familiar people onto dog breeds or animal labels: Gilli and Ace as Pugs, Mugen as a Golden Retriever, Cele as a Bulldog, and Zer0 as a Labrador Retriever. The repeated mechanism supports playful person-reading through animal shorthand rather than one isolated animal joke.",
      "A separate Daycare pocket has Keon rushing toward `ice cream ice cream ice cream .. where ??` before landing on `i cant taste it ...`, preserving the same quick, conversational comedy instead of a formal anecdote.",
    ],
    antiFanon: [
      "Keon's phrase `spirit animal` is quoted as 2021 chat language only. Do not infer religion, ethnicity, spirituality, or cultural identity from it.",
      "Animal/breed assignments are playful social metaphors, not claims about literal identity, appearance, diagnosis, or hierarchy.",
      "The `spree murderer` / bonking language in the supporting pocket is joke hyperbole and not evidence of literal violence.",
      "Current/export role arrays are not used to infer Keon's appointment history or formal UL role.",
    ],
  };
  allCharacters.push(keon);
  characterById.set("keon", keon);
}
