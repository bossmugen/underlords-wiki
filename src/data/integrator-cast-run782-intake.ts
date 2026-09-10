import { allCharacters, castGroups, characterById } from "./cast";
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

// Core Rooms / Events: hard project canon resolves the stable juicy.cookie /
// Cookies and Juicebox account to Kuki. The new packet deepens an existing
// person instead of creating another Cookie-shaped owner.
const kukiId = "cookie";
const kukiIndex = allCharacters.findIndex((character) => character.id === kukiId);
if (kukiIndex >= 0) {
  const kuki = allCharacters[kukiIndex] as ExtendedCharacter;
  const relationships = [...(kuki.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ryan X",
    note:
      "Kuki can summon Ryan X into dungeons at full volume — `@Ryan X DUNGEONS!!` — then notice hours later that the plan died because Ryan fell asleep. When Mugen asks after the missing Among Us plan, Kuki remembers that he had said yes about an hour earlier and adds the ordinary-life read that he is habitually up late / short on sleep. It is activity familiarity and availability-tracking, not a closeness rank or a health diagnosis.",
  });

  allCharacters[kukiIndex] = {
    ...kuki,
    logline:
      "Staff, running-panda defendant, visual-language goblin and activity-puller: Kuki can demand dungeons in all caps, notice when somebody falls asleep before the plan happens, remember the vanished Among Us promise, then go back to fleeing Screenshot Court in picture form.",
    tags: appendUnique(kuki.tags, ["Activity puller", "People tracker", "Among Us", "Petty Crimes"]),
    relationships,
    quotes: appendUnique(kuki.quotes, [
      "@Ryan X DUNGEONS!!",
      "ryry fell asleep before can do dungeons",
      "I wanna play among us",
    ]),
    claims: appendUnique(kuki.claims, [
      "Stable account 249351359290277890 / `juicy.cookie` / Cookies and Juicebox is Kuki under hard project canon; the September 30–October 1, 2020 Core Rooms packet belongs to the existing Kuki owner.",
      "On September 30, 2020 Kuki directly summons Ryan X with `@Ryan X DUNGEONS!!`; hours later Kuki says `ryry fell asleep before can do dungeons`. Same-day context makes Ryan X the probable referent of `ryry`, but the shorthand is not promoted to a hard alias.",
      "After midnight on October 1, 2020, Mugen asks whether the missing person had said he would play Among Us; Kuki answers `yes` / `like 1hr ago think`, says he has a habit of not sleeping enough and being up late, then later says `I wanna play among us` and asks whether the group played with voice chat.",
    ]),
    antiFanon: appendUnique(kuki.antiFanon, [
      "`ryry` is only a contextual/probable Ryan X address in this scene. Do not add it as a hard Ryan X alias without a direct bridge.",
      "Kuki noticing Ryan X's sleep/activity pattern supports ordinary familiarity and plan-tracking; it does not establish romance, family, caregiving, a health condition, or a closeness ranking.",
      "Kuki asking whether Among Us was played with voice chat is a mechanics/format question in one dated scene, not a permanent VC preference or anxiety claim.",
      "The Among Us Tenor is POSTED BY Kuki only. Its pixels were not inspected here, so maker/capture/featured-subject claims do not follow.",
    ]),
  } as ExtendedCharacter;
  characterById.set(kukiId, allCharacters[kukiIndex]);
}

// Daycare + Wall: Beckiie's text footprint is genuinely small in this slice,
// but the attachment pattern is coherent enough for a bounded searchable dossier.
// Keep it small rather than manufacturing a full MAIN-style biography.
const beckiieId = "beckiie";
const beckiieCharacter: ExtendedCharacter = {
  id: beckiieId,
  name: "Beckiie",
  billing: "legacy",
  role: "Archive-era Daycare / Wall cast",
  era: "2021–2022+",
  logline:
    "Low-text Wall participant with a very specific immunity theory: Beckiie can genuinely wonder why she keeps landing there while posting the attachment in the same message. She does not need much verbal setup; sometimes the file enters the room first and everybody else can deal with it.",
  tags: [
    "Archive cast",
    "Daycare",
    "Wall",
    "Low-text",
    "Attachment-led",
    "Wall-immunity delusion",
    "Petty Crimes",
  ],
  quotes: ["i feel like i don’t say anything that gets me here"],
  claims: [
    "Stable account 147865063938719744 has only 13 messages in the reviewed Daycare index, so Beckiie's low verbal volume is a bounded observation from this source slice rather than a global personality label.",
    "On October 29, 2021 Beckiie posts a blank-text image to the Wall; on January 25, 2022 the same account writes `i feel like i don’t say anything that gets me here` while that message itself carries an image; on February 6, 2022 Beckiie posts another blank-text image.",
    "Across those Wall scenes, Beckiie's participation can be attachment-led: little or no verbal setup, then the room receives the object. The January line reads as understated puzzlement rather than a demand to erase the filing.",
  ],
  antiFanon: [
    "Low text volume in the reviewed Daycare/Wall slice is not a diagnosis of shyness, introversion, silence, or low social importance elsewhere.",
    "The three image-bearing Wall posts establish POSTED BY Beckiie only. The pixels were unavailable/uninspected here; do not infer maker, capturer, depicted subjects, or image contents.",
    "`i feel like i don’t say anything that gets me here` supports a funny Wall-immunity mismatch; it is not proof that Beckiie never said anything embarrassing elsewhere or that the Wall only filed attachments.",
    "Earliest surviving Beckiie material in this packet is not treated as origin, join date, appointment chronology, or role history.",
  ],
};

const beckiieIndex = allCharacters.findIndex((character) => character.id === beckiieId);
if (beckiieIndex >= 0) {
  const current = allCharacters[beckiieIndex] as ExtendedCharacter;
  allCharacters[beckiieIndex] = {
    ...current,
    ...beckiieCharacter,
    tags: appendUnique(current.tags, beckiieCharacter.tags ?? []),
    quotes: appendUnique(current.quotes, beckiieCharacter.quotes ?? []),
    claims: appendUnique(current.claims, beckiieCharacter.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, beckiieCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(beckiieCharacter);
}
characterById.set(beckiieId, allCharacters.find((character) => character.id === beckiieId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(beckiieId)) {
  archiveCastGroup.characterIds.push(beckiieId);
}
