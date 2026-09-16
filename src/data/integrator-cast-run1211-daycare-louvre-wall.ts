import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

// Daycare: Eos can be loud enough to turn Screenshot Court into a war and still
// go almost boringly practical when the actual room needs to work. The 2021
// roster squeeze adds fairness, translation and fallback coordination without
// manufacturing an appointment chronology from later praise.
const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex < 0) {
  throw new Error("Run 1211 expected canonical Eos owner; refusing to create Eos II.");
}
{
  const eos = allCharacters[eosIndex] as ExtendedCharacter;
  allCharacters[eosIndex] = {
    ...eos,
    logline: appendOnce(
      eos.logline,
      "When a roster problem stops being funny, Eos can switch registers completely: argue for equal chances, invent a workable fallback, and treat language friction as something the group can translate through rather than a reason to split people into a better and worse half.",
      "equal chances",
    ),
    tags: appendUnique(eos.tags, [
      "Fair-play coordinator",
      "Roster problem-solving",
      "Translation-minded teamwork",
      "Practical fallback planning",
    ]),
    quotes: appendUnique(eos.quotes, [
      "everyone should have equal chance",
    ]),
    claims: appendUnique(eos.claims, [
      "During a June 2021 Dragon Raja roster squeeze, Eos pushed a flexible leader/officer-login workaround so teams could still be moved when somebody missed war, explicitly rejected a `better half / worse half` split in favor of equal chances, and treated multilingual chatter as a translation/coordination problem rather than a people problem. The person-level contradiction is useful: the later loud defendant can also become the practical fairness person when the room actually needs a plan.",
    ]),
    antiFanon: appendUnique(eos.antiFanon, [
      "Later staff praise that Eos did a solid job as leader and might be officer again if trusted is not a clean appointment timeline. Preserve the lived behavior without backfilling an office date or continuous authority claim.",
      "The unresolved `cindy` identity in this Daycare packet stays unresolved; do not alias from similar names or context alone.",
    ]),
  } as ExtendedCharacter;
  characterById.set("eos", allCharacters[eosIndex]);
}

// Louvre / Other Games: the same Ansun who reduces onboarding friction also
// translates unfamiliar games into something a person can actually use. Anayss
// meets him halfway: she asks, maps, follows up, and gets visibly sold once the
// system stops sounding alien.
const ansunIndex = allCharacters.findIndex((character) => character.id === "ansun");
if (ansunIndex < 0) {
  throw new Error("Run 1211 expected canonical Ansun owner; refusing to create a Souta duplicate.");
}
{
  const ansun = allCharacters[ansunIndex] as ExtendedCharacter;
  const relationships = [...(ansun.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Anayss",
    "Games bring out Ansun's translator instinct in miniature. When Anayss is trying to understand a MOBA, he turns roles and mechanics into comparisons with games she already knows, offers starter picks, and only widens the explanation when she keeps asking. The warmth comes with caveats and usable next steps instead of a sales pitch.",
    "translator instinct in miniature",
    "/characters/anayss",
  );

  allCharacters[ansunIndex] = {
    ...ansun,
    logline: appendOnce(
      ansun.logline,
      "Games bring out the same routing instinct in a softer form: Ansun translates unfamiliar jargon through things the other person already understands, then hands over starter picks, quirks, docs and caveats instead of demanding they learn his vocabulary first.",
      "Games bring out the same routing instinct",
    ),
    tags: appendUnique(ansun.tags, [
      "Game translator",
      "Patient explainer",
      "Recommendation caveats",
    ]),
    relationships,
    claims: appendUnique(ansun.claims, [
      "In the reviewed Other Games material, Ansun patiently explains an unfamiliar MOBA to Anayss by mapping its categories and mechanics onto games she already knows, offers starter choices, and shares mechanics/docs only as the conversation keeps going. The same person who routes people through broken onboarding routes also translates systems into the listener's language.",
      "The historical Sota/Souta/颯太 ownership in this packet remains the existing Ansun owner under hard canon; the handoff does not create another person.",
    ]),
    antiFanon: appendUnique(ansun.antiFanon, [
      "Game recommendations and explanation support a patient translator/recommender read, not professional expertise, exclusive ownership of those games, or a formal teaching role.",
    ]),
  } as ExtendedCharacter;
  characterById.set("ansun", allCharacters[ansunIndex]);
}

const anayssIndex = allCharacters.findIndex((character) => character.id === "anayss");
if (anayssIndex < 0) {
  throw new Error("Run 1211 expected canonical Anayss owner.");
}
{
  const anayss = allCharacters[anayssIndex] as ExtendedCharacter;
  const relationships = [...(anayss.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Ansun",
    "Anayss does not perform expertise when she is new to a system. She asks category and mechanics questions, tests Ansun's explanation against games she already knows, and keeps pulling on the thread until it clicks; `it looks nice 0.0` is basically the moment curiosity turns into buy-in.",
    "does not perform expertise",
    "/characters/ansun",
  );

  allCharacters[anayssIndex] = {
    ...anayss,
    logline: appendOnce(
      anayss.logline,
      "Her connective instinct has a learner-side version too: Anayss will openly ask what unfamiliar game jargon means, map it onto something she already knows, and get visibly enthusiastic the second the explanation becomes usable.",
      "learner-side version",
    ),
    tags: appendUnique(anayss.tags, [
      "Curious learner",
      "Mechanics questions",
      "Fast convert",
    ]),
    relationships,
    quotes: appendUnique(anayss.quotes, [
      "it looks nice 0.0",
    ]),
    claims: appendUnique(anayss.claims, [
      "The Other Games material adds a small but clean ordinary-life behavior: Anayss asks what categories and mechanics mean, maps the answers to games she already knows, and follows up rather than bluffing familiarity. With Ansun, the relationship texture is curious learner meeting patient translator, not a formal mentor/student hierarchy.",
    ]),
    antiFanon: appendUnique(anayss.antiFanon, [
      "A scene where PC access matters is bounded to that moment. It does not establish Anayss's permanent hardware situation, finances, living setup, or long-term access.",
      "The Ansun/Anayss game-explainer lane supports local familiarity and an engaged learner/explainer dynamic, not a formal mentorship rank or broader private-life claim.",
    ]),
  } as ExtendedCharacter;
  characterById.set("anayss", allCharacters[anayssIndex]);
}

// Wall: Queen Shimoko's operational/caretaker dossier gets a social register.
// She remembers the exact phrase or nickname, then hands it back as either
// applause or trouble depending on what the room deserves.
const shimokoIndex = allCharacters.findIndex(
  (character) => character.id === "queen-shimoko" || character.name === "Queen Shimoko",
);
if (shimokoIndex < 0) {
  throw new Error("Run 1211 expected canonical Queen Shimoko owner; refusing to create Shimoko II.");
}
{
  const shimoko = allCharacters[shimokoIndex] as ExtendedCharacter;
  const relationships = [...(shimoko.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Haruka",
    "Shimoko can complain `SAHM WHY DO YOU HATE ME` and say he hates her every day, then immediately admit she likes the `Shimoko` name because it is beautiful. The joke works through familiar teasing and a name she has decided to keep, not romantic evidence.",
    "name she has decided to keep",
  );
  upsertRelationship(
    relationships,
    "Maclos",
    "When Maclos unexpectedly teaches a teammate the CATIA button answer, Shimoko notices the useful turn instantly: `Clap clap. Look at you Mac.` then `Learn and teach how to fish. 👍` She is not just watching the room; she publicly amplifies the moment somebody helps it.",
    "publicly amplifies",
  );
  upsertRelationship(
    relationships,
    "Mugen",
    "Mugen says she is playing `for a friend` and Shimoko grabs the quotation marks before the sentence has cooled: `Sure sure. For a ‘friend’ mugs`, followed by `a beautiful friend I assume. Probably gorgeous ;)`. It is precision teasing around Mugen's wording, not proof that the unnamed friend is a real romantic partner.",
    "quotation marks before the sentence has cooled",
    "/characters/mugen",
  );

  allCharacters[shimokoIndex] = {
    ...shimoko,
    logline: appendOnce(
      shimoko.logline,
      "Outside logistics, Shimoko is a social amplifier with suspiciously exact memory for wording: she keeps the funny nickname, catches the loaded phrase, notices the unexpectedly helpful turn, and gives each one back to the room as either applause or trouble.",
      "social amplifier with suspiciously exact memory",
    ),
    tags: appendUnique(shimoko.tags, [
      "Social amplifier",
      "Precision teasing",
      "Public encouragement",
      "Nickname keeper",
    ]),
    relationships,
    quotes: appendUnique(shimoko.quotes, [
      "SAHM WHY DO YOU HATE ME",
      "He calls me Shimoko!!! I like the name. It’s beautiful.",
      "Clap clap. Look at you Mac.",
      "Learn and teach how to fish. 👍",
      "Sure sure. For a ‘friend’ mugs",
    ]),
    claims: appendUnique(shimoko.claims, [
      "The Wall material adds a social precision lane to Shimoko's practical/caretaker footprint. She remembers Haruka's `Shimoko` nickname closely enough to mock-protest it while saying she likes it, immediately applauds Maclos when he shifts into teaching somebody a CATIA control, and catches Mugen's `for a friend` phrasing for an instant quotation-mark tease. The cumulative read is somebody who notices the exact social detail and amplifies it.",
      "Petty Crimes: WILL COMPLAIN ABOUT BEING CALLED SHIMOKO AND THEN EXPLAIN THAT SHE LIKES IT BECAUSE IT IS BEAUTIFUL.",
    ]),
    antiFanon: appendUnique(shimoko.antiFanon, [
      "Haruka's `Shimoko` exchange and the Mugen `for a friend` tease are familiar social play, not evidence of romance, literal family, or a verified relationship behind Mugen's joke.",
      "Applauding Maclos's CATIA help supports public encouragement, not proof that Shimoko is a CATIA expert, teacher, or formal supervisor.",
    ]),
  } as ExtendedCharacter;
  characterById.set(allCharacters[shimokoIndex].id, allCharacters[shimokoIndex]);
}
