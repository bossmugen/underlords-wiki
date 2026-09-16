import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Fresh intake is folded into existing people. The point is cumulative
// character shape, not one more receipt paragraph per screenshot.

const jasIndex = allCharacters.findIndex((character) => character.id === "jas");
if (jasIndex < 0) throw new Error("Run 1195 expected canonical Jas owner");
{
  const jas = allCharacters[jasIndex] as ExtendedCharacter;
  const relationships = [...(jas.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Gilli",
    note:
      "Gilli can summon Jas straight into a filing, explain why work forces the cursed light-mode choice, and get a real `LMAO okok` concession—only for Jas to reopen the case twenty-eight seconds later because `254x77px ain't 4K tho 😐`. Gilli answers the exact nitpick with a mock-kick GIF. Add the older welcome / fake-parent jokes and their lane is comfortable reciprocal heckling: explanation can settle one charge without ending the bit.",
    href: "/characters/gilli",
  });

  upsertRelationship(relationships, {
    name: "Ren",
    note:
      "Ren can address Jas as `Dad` inside UL's incompatible fake-family vocabulary and, later, drag a 2020 Wall parent back into court with `@Jas (Absent father) explain`. Jas answers the exact old exhibit with `I do not recall that`; Ren replies `The wall does` / `The wall remembers`. She knows which old object to resurrect, and he knows exactly how to become the defendant.",
    href: "/characters/ren",
  });

  allCharacters[jasIndex] = {
    ...jas,
    logline:
      "Former Caelum leader with an extremely selective relationship to evidence: Jas can inspect a Wall filing closely enough to concede the practical explanation and still prosecute the literal pixel dimensions, then become the man saying `I do not recall that` when Ren resurfaces an old exhibit against him. Away from the courtroom bit, he also turns up in early server-tooling discussions as someone other people check with rather than somebody performing certainty from the sidelines.",
    tags: appendUnique(jas.tags, [
      "Wall",
      "Evidence literalist",
      "Archival amnesia",
      "Reciprocal heckling",
      "Server-tooling familiarity",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(jas.quotes, [
      "YOOO WHAT'S THIS LIGHT MOOODEE",
      "LMAO okok",
      "254x77px ain't 4K tho 😐",
      "I do not recall that",
      "I think you can.",
      "Man",
      "ihyall",
    ]),
    claims: appendUnique(jas.claims, [
      "On 2021-09-01 Gilli directly summons Jas into a Wall filing. Jas true-replies to the screenshot parent with a light-mode complaint, accepts Gilli's work-context explanation with `LMAO okok`, then reopens the joke twenty-eight seconds later by pointing out that `254x77px ain't 4K tho 😐`; Gilli true-replies to that nitpick with a mock-kick GIF.",
      "On 2022-05-10 Ren true-replies to an exact 2020 Wall parent with `@Jas (Absent father) explain`; Jas true-replies to the same historical parent with `I do not recall that`, and Ren answers `The wall does` / `The wall remembers`. The useful contradiction is evidence-literalist prosecutor versus memory-defense defendant.",
      "Jas's 2021-01-18 standalone `Man` -> `ihyall` -> exit-emote burst is retained only as Petty Crimes / voice texture because the immediate target of the micro-exit is unresolved.",
      "Run 1195 adds an earlier operational beat: while Snow is setting up server roles, he says he has checked the role-management question with Revan and Jas and believes Officers can manage roles; Jas answers `I think you can.` The useful character read is modest but real—Jas is part of the behind-the-scenes tooling conversation and somebody Snow checks with—without pretending that one exchange dates Jas's appointment or proves his exact title that day.",
    ]),
    antiFanon: appendUnique(jas.antiFanon, [
      "The 2021 Gilli screenshot and 2020 Ren attachment remain visually uninspected here. Preserve POSTED BY attribution only; do not infer subject, MADE BY, CAPTURED BY, or FEATURING from the banter.",
      "Gilli/Jas and Ren/Jas Wall sparring supports comfortable argument-as-play, not romance, family, hostility, or an off-Wall closeness rank. `Dad` / `Absent father` remains fake-family language.",
      "Jas's former Caelum role remains whatever is independently established elsewhere; neither the Wall packet nor Run 1195's server-role-management discussion may be used to infer appointment chronology from export-time roles or one historical exchange.",
      "The BeanKing doxx-threat exchange from the same Whiskey delta remains private/safety-sensitive and is not part of Jas's public characterization.",
    ]),
  } as ExtendedCharacter;
  characterById.set("jas", allCharacters[jasIndex]);
}

const rotiniIndex = allCharacters.findIndex((character) => character.id === "rotinilm");
if (rotiniIndex < 0) throw new Error("Run 1170 expected canonical RotiniLM owner");
{
  const rotini = allCharacters[rotiniIndex] as ExtendedCharacter;
  const relationships = [...(rotini.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Alaina",
    note:
      "Rotini posts `Sorry not sorry`; Alaina turns the phrase into a sung lyric a little over two minutes later, and Rotini appears among the final-state party-cat reactors. It is a small Wall callback lane: Alaina catches the wording and performs it back; Rotini joins the amusement rather than backing out.",
    href: "/characters/alaina",
  });

  allCharacters[rotiniIndex] = {
    ...rotini,
    logline:
      "Calls it lurking while repeatedly bringing exhibits, then declines promotion to main character with `Nah I'm good`. RotiniLM's Wall style is content-heavy and low-prose: watch closely, file selectively, react with the room, and swat away the spotlight when it turns around.",
    tags: appendUnique(rotini.tags, [
      "Selective participation",
      "Mock spotlight dodger",
      "Callback uptake",
    ]),
    relationships,
    quotes: appendUnique(rotini.quotes, [
      "Sorry not sorry",
      "Nah I'm good",
    ]),
    claims: appendUnique(rotini.claims, [
      "On 2022-01-24 Rotini labels themself `Just lurking the WC` while posting an attachment, then returns roughly eighty-four minutes later with another attachment and `One more-`; the next day, when directly told it is their turn to be center of attention, Rotini true-replies `Nah I'm good`. The durable contradiction is low-prose participation without appetite for personal spotlight.",
      "On 2022-01-25 Rotini posts `Sorry not sorry`; Alaina answers by turning the phrase into a lyric, and Rotini appears in the final-state reactions on that callback. This supports bounded phrase-play / callback uptake rather than an off-Wall relationship rank.",
    ]),
    antiFanon: appendUnique(rotini.antiFanon, [
      "Rotini's Run-1170 Wall attachments remain visually uninspected. Preserve POSTED BY only; do not infer MADE BY, CAPTURED BY, FEATURING, or subject from captions or reactions.",
      "`Nah I'm good` supports a mock-spotlight-dodger beat in this Wall context; it is not a diagnosis of shyness, anxiety, social withdrawal, or general dislike of attention.",
      "Discord export reaction membership is untimestamped, so Rotini's reaction on Alaina's callback supports participation but not exact reaction chronology.",
    ]),
  } as ExtendedCharacter;
  characterById.set("rotinilm", allCharacters[rotiniIndex]);
}

const erysIndex = allCharacters.findIndex((character) => character.id === "erys");
if (erysIndex < 0) throw new Error("Run 1170 expected canonical Erys owner");
{
  const erys = allCharacters[erysIndex] as ExtendedCharacter;
  const relationships = [...(erys.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Anayss",
    note:
      "Erys's Discord doorway arrives with a case already waiting. Anayss greets the same stable account in Lobby, then moves to the pre-existing Wall exhibit and true-replies `welcome to wall of shame Emiii hahaha`; Erys answers `oh my` within seconds. It is onboarding by immediate house ritual, not a claim that the unseen image says anything in particular.",
    href: "/characters/anayss",
  });

  allCharacters[erysIndex] = {
    ...erys,
    tags: appendUnique(erys.tags, ["Onboarding", "Wall-before-welcome chronology"]),
    relationships,
    quotes: appendUnique(erys.quotes, ["oh my"]),
    claims: appendUnique(erys.claims, [
      "The same stable account's Wall exhibit predates its Underlords Discord Lobby welcome by 18m10.882s. Minutes after greeting Erys in Lobby, Anayss true-replies to that pre-existing Wall parent with `welcome to wall of shame Emiii hahaha`; Erys answers `oh my` 3.703 seconds later. The useful chronology is that the Wall case was effectively waiting at the door.",
    ]),
    antiFanon: appendUnique(erys.antiFanon, [
      "Run 1170's stable-account chronology supports one-account continuity across the Lobby welcome and pre-existing Wall parent, but `Emi` / `Emiii` remains local address language rather than a new canonical public alias unless independently resolved.",
      "The pre-welcome Wall attachment remains visually uninspected. Chronology and Anayss's social targeting are usable; its pixels, maker, capturer, subject, and featured people are not inferred.",
      "A Wall filing preceding the visible Discord welcome is memorable onboarding texture, not proof of Erys's UL origin, first contact, or earliest relationship with the group.",
    ]),
  } as ExtendedCharacter;
  characterById.set("erys", allCharacters[erysIndex]);
}

const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex < 0) throw new Error("Run 1170 expected canonical Eos owner");
{
  const eos = allCharacters[eosIndex] as ExtendedCharacter;
  const relationships = [...(eos.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Marian",
    note:
      "Eos repeatedly chooses Marian/Panda as a partner for tiny hug-command and retry bits, then the Wall turns that comfort into mutually assured screenshot destruction. Eos can accept Marian-posted evidence with `i accet my fate this time`, counter-file minutes later, call Marian `sort of spared`, declare `this is war`, and in 2022 race her to the room with `BEATING U TO IT, PANDA`—only to beg `NONO look at my shame` when Marian counters. Mock outrage never actually ends the game.",
    href: "/characters/panda",
  });

  upsertRelationship(relationships, {
    name: "Daya",
    note:
      "The receipt instinct is not only a Marian thing. Eos files `IMG_2983.png` at Dayadream with `it had to be done 😭😭`; Daya answers `AW MAN`, and the room keeps laughing. It is the same familiar nuisance register operating outside Eos's longest screenshot rivalry.",
    href: "/characters/daya",
  });

  allCharacters[eosIndex] = {
    ...eos,
    tags: appendUnique(eos.tags, [
      "Mutually assured screenshot destruction",
      "Competitive receipt instinct",
      "Self-snitch speedrun",
    ]),
    relationships,
    quotes: appendUnique(eos.quotes, [
      "i accet my fate this time",
      "this is war",
      "BEATING U TO IT, PANDA",
      "NONO look at my shame",
      "revenge",
      "sorry rums i had to",
      "it had to be done 😭😭",
    ]),
    claims: appendUnique(eos.claims, [
      "Across 2021–2023 Eos repeatedly turns Wall embarrassment into participation: accepting Marian-posted evidence, self-filing, counter-filing, declaring `this is war`, racing Panda to a receipt with `BEATING U TO IT, PANDA`, and later filing `revenge` / `i had to` receipts against other people. The person-shaped pattern is mock mortification plus competitive receipt instinct plus willingness to become her own punchline.",
      "Eos and Marian's recurring Wall lane is reciprocal rather than one-way prosecution. Eos can accept the hit, retaliate, threaten mock war, and immediately re-enter as defendant when Marian returns fire; this deepens their familiar nuisance register without turning surrounding divorce/relationship jokes literal.",
      "By 2023 Eos applies the same receipt habit beyond Marian: she answers one account's filing with `revengeshame.png` / `revenge`, later posts at the same account with `sorry rums i had to`, and separately files at Dayadream with `it had to be done 😭😭`; the latter answers `AW MAN` while the room continues the joke.",
    ]),
    antiFanon: appendUnique(eos.antiFanon, [
      "Run 1170 uses Wall behavior to deepen the canonical Eos owner because later direct Daycare bodies were not exposed in the miner route; the Wall lines are not relabeled as Daycare dialogue.",
      "`Rums` is preserved only as Eos's address in the recovered scene unless independently identity-bridged; no new identity mapping is created from the nickname alone.",
      "The screenshot-war language is reciprocal room comedy, not real hostility, surveillance authority, formal Wall office, romance, or literal war.",
      "The Run-1170 Wall images remain POSTED BY their surviving posters only unless MADE BY / CAPTURED BY / FEATURING is independently established.",
    ]),
  } as ExtendedCharacter;
  characterById.set("eos", allCharacters[eosIndex]);
}
