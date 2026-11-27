import type { Character } from "./wiki";
import { allCharacters } from "./cast";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const mergeUnique = (values: string[]) => [...new Set(values)];

const miaIndex = allCharacters.findIndex((character) => character.id === "mia");
if (miaIndex >= 0) {
  const mia = allCharacters[miaIndex];
  const relationships = [...(mia.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Anthos",
    note: "Mia can publicly name Anthos as the Nitro culprit, retract it almost immediately, take `I AM GONNA SUE` with one `AHHH`, and keep the investigation moving. Public accusation and mock retaliation fit inside shared play without either person needing a repair scene.",
    href: "/characters/anthos",
  });

  allCharacters[miaIndex] = {
    ...mia,
    logline:
      "Pit Boss, Interrogator and participation-surface specialist who can turn a tiny Nitro mystery into `underlords news for today`, announce the wrong culprit, survive a mock lawsuit, and keep the newsroom alive with a one-million-fake-dollar bounty.",
    tags: mergeUnique([...(mia.tags ?? []), "Underlords News", "Participation instigator", "Petty Crimes"]),
    relationships,
    quotes: mergeUnique([
      ...(mia.quotes ?? []),
      "WE FOUND IT",
      "NOPE NOT ANTHOS",
      "AHHH",
      "reward for find 1million fake dollars!",
    ]),
    claims: [
      ...(mia.claims ?? []),
      "On March 6, 2023 Mia posted an `underlords news for today` Nitro-mystery video, named Anthos, publicly retracted the call, and kept the bit moving with a fake-dollar bounty.",
    ],
    antiFanon: mergeUnique([
      ...(mia.antiFanon ?? []),
      "The Nitro report video is POSTED BY Mia. `yall made a video` / `Yesss` supports group-made framing, not sole maker credit for Mia.",
      "Reporter / Newscaster is behavior in this scene, not a formal UL specialist title.",
    ]),
  };
}

const noetherIndex = allCharacters.findIndex((character) => character.id === "noether");
if (noetherIndex >= 0) {
  const noether = allCharacters[noetherIndex];
  const relationships = [...(noether.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Anayss",
    note: "Anayss repeatedly summons Noether into Hami-centered Wall nonsense; Noether does not merely laugh, but reuses and expands the `Unsugar` wording. More than two years later Anayss is still pulling Noether beside HamitteY into the same joke lane.",
    href: "/characters/anayss",
  });
  upsertRelationship(relationships, {
    name: "HamitteY",
    note: "Hami is the recurring center of the `Unsugar` vocabulary Noether helps mutate. The durable relationship fact is shared Wall shorthand and repeated summoning, not any literal sugar / romance arrangement.",
    href: "/characters/hamittey",
  });

  allCharacters[noetherIndex] = {
    ...noether,
    logline:
      "Junior Officer who likes reusable handles: a fuzzy process becomes `well, its me` and a dumb Wall phrase becomes `Unsugar hamihami` until the room has accidentally developed vocabulary.",
    tags: mergeUnique([...(noether.tags ?? []), "Wall", "Callback amplifier", "Petty Crimes"]),
    relationships,
    quotes: mergeUnique([
      ...(noether.quotes ?? []),
      "Unsugar hamihami:Cute_Blush: :Cute_Blush:",
      "Unsugared snow, history of a sugar daddy and unsugar boiii...",
    ]),
    claims: [
      ...(noether.claims ?? []),
      "Across November–December 2021, Noether reuses and expands the `Unsugar` wording after direct summons into the same Wall joke lane.",
    ],
    antiFanon: mergeUnique([
      ...(noether.antiFanon ?? []),
      "`hami x snow`, `sugar daddy`, `Unsugar`, and related wording are joke language only; do not literalize romance, sex, or financial support.",
    ]),
  };
}

const nobuIndex = allCharacters.findIndex((character) => character.id === "nobu");
if (nobuIndex >= 0) {
  const nobu = allCharacters[nobuIndex];
  const relationships = [...(nobu.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Rummy",
    note: "Nobu repeatedly notices and files Rummy with mock-observer framing: an early screenshot gets `WHY` / `That ain’t even me`, later comes `Rummy has rizz??`, and later still `I'm proud of you, Rummy.` Rummy objects loudly from inside the joke rather than treating the filing as hostile.",
    href: "/characters/rummy",
  });

  allCharacters[nobuIndex] = {
    ...nobu,
    logline:
      "Party Director and Wall receipt magpie who can post one image, let the room prosecute it, then admit the misunderstanding was literally why the exhibit looked worth filing.",
    tags: mergeUnique([...(nobu.tags ?? []), "Visual filer", "Dry captions", "Receipt magpie", "Petty Crimes"]),
    relationships,
    quotes: mergeUnique([
      ...(nobu.quotes ?? []),
      "Ngl, I legit thought that said children. Which is why I posted it.",
      "Light mode gets me every time.",
      "I'm proud of you, Rummy.",
      "Rummy has rizz??",
    ]),
    claims: [
      ...(nobu.claims ?? []),
      "Nobu repeatedly files Wall media with sparse or dry captioning and explicitly says one misread was the reason an item looked worth posting.",
      "Rummy recurs across Nobu's filed / teasing material and directly objects from inside the same social lane.",
    ],
    antiFanon: mergeUnique([
      ...(nobu.antiFanon ?? []),
      "Nobu-uploaded screenshots are POSTED BY Nobu only unless maker, capturer or depicted subjects are independently established.",
      "`My favorite food.` is a surviving caption; the food itself is visually unresolved.",
    ]),
  };
}

const moonIndex = allCharacters.findIndex((character) => character.id === "moon");
if (moonIndex >= 0) {
  const moon = allCharacters[moonIndex];
  const relationships = [...(moon.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ansun",
    note: "Moon can effectively sentence Sou to the Wall, Sou can claim the `fame` half for herself, and Moon immediately points to the word `shame` still sitting on the sign. The exchange works as comfortable counter-teasing, not a closeness ranking.",
    href: "/characters/ansun",
  });

  allCharacters[moonIndex] = {
    ...moon,
    logline:
      "Night Shift Barista and self-appointed witness who likes spotting the room's nonsense, naming it, and then climbing directly into the incident — sometimes long enough to finish the vaccination plan before realizing she is in the wrong channel.",
    tags: mergeUnique([...(moon.tags ?? []), "Wall", "Mock authority", "Witness-prosecutor", "Petty Crimes"]),
    relationships,
    quotes: mergeUnique([
      ...(moon.quotes ?? []),
      "I am a moon,so i see all",
      "TIME FOR VACINATION FOR RUMFECTION AND GILLFECTION",
      "It will hurt alittle ~♡",
      "Wait this isn't main chat",
      "But the word shame is right there",
    ]),
    claims: [
      ...(moon.claims ?? []),
      "Across 2022–2023 Moon repeatedly turns observation into mock jurisdiction: cosmic surveillance, a fake infection clinic, and literal enforcement of the `shame` half of Wall of Shame/Fame.",
      "On March 19, 2023 Moon joined the rumfection/gillifection bit as a fake vaccinator, then realized after the treatment routine that she was not in main chat.",
    ],
    antiFanon: mergeUnique([
      ...(moon.antiFanon ?? []),
      "The vaccination / doctor wording is theatrical chat play, not a medical role or procedure.",
      "Moon POSTED the nurse/doctor reaction GIF; source-media authorship is not attributed to Moon.",
      "The Sou exchange supports direct teasing and counterargument, not a friendship rank or literal jurisdiction over Wall.",
    ]),
  };
}
