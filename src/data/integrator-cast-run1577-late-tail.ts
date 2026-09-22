import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = (items: string[] | undefined, additions: string[]) => [
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

const archiveCast = castGroups.find((group) => group.id === "archive-cast");
const addArchiveCast = (id: string) => {
  if (archiveCast && !archiveCast.characterIds.includes(id)) archiveCast.characterIds.push(id);
};

// Core Rooms / Photo Submissions: antho.logy. is new to the public structured cast.
const anthoId = "antho-logy";
const anthoIndex = allCharacters.findIndex(
  (character) =>
    character.id === anthoId ||
    (character as ExtendedCharacter).stableDiscordIds?.includes("695394317921026121"),
);
const anthoBase: ExtendedCharacter =
  anthoIndex >= 0
    ? (allCharacters[anthoIndex] as ExtendedCharacter)
    : {
        id: anthoId,
        name: "antho.logy.",
        aliases: [],
        billing: "legacy",
        role: "Archive-era UL member",
        era: "2020–2021+",
        logline: "",
      };
const anthoRelationships = [...(anthoBase.relationships ?? [])];
upsertRelationship(anthoRelationships, {
  name: "Illien",
  note:
    "In October 2020 antho breaks a bedtime request into `make sure` / `to sleep` / `at a reasonable time` / `please and thank you`. Illien, then rendered Euros, tries to lawyer the wording — he cannot promise to sleep *at* a reasonable time, only *a* reasonable time. Antho answers `twisting your sentences again i see`. The `again` is the whole little relationship tell: care and dry recognition already know how to share a sentence.",
  href: "/characters/illien",
});
const antho: ExtendedCharacter = {
  ...anthoBase,
  id: anthoId,
  name: anthoBase.name || "antho.logy.",
  billing: anthoBase.billing || "legacy",
  role: anthoBase.role || "Archive-era UL member",
  era: anthoBase.era || "2020–2021+",
  logline:
    "Antho is the person who hates leaving the next step invisible. In ordinary chat that can mean telling somebody to please sleep at a reasonable time and catching the loophole in the answer; in Photo Submissions it becomes a year of opening phases, closing them cleanly, and telling the room when results come next. Precise process, warm edges, zero need to sound like a ticketing system.",
  tags: unique(anthoBase.tags, [
    "Archive cast",
    "Club Only",
    "Photo Submissions",
    "Creative events",
    "Follow-through",
    "Next-step communication",
    "Dry humor",
    "Petty Crimes",
  ]),
  relationships: anthoRelationships,
  quotes: unique(anthoBase.quotes, [
    "at a reasonable time",
    "please and thank you",
    "twisting your sentences again i see",
    "what are those??",
    "Submissions closed for BEACH theme, thank you! Results will be posted on Jun. 13th @ 12am SVT 💖",
  ]),
  stableDiscordIds: unique(anthoBase.stableDiscordIds, ["695394317921026121"]),
  claims: unique(anthoBase.claims, [
    "Across 2021 Photo Submissions, stable account 695394317921026121 repeatedly sets Example/Sample references, opens submission windows with judging and winner timing, and closes themes by naming what happens next. BEACH, STALKER, WALTZ, DUSK TIL DAWN, POPSTAR and other cycles make the cumulative behavior clearer than any one contest: antho closes loops.",
    "On October 1, 2020 antho tells Illien/Euros to sleep `at a reasonable time`; when he twists the wording into sleeping `A reasonable time`, antho answers `twisting your sentences again i see`. The recurring-wordplay cue sits comfortably beside the care instruction rather than cancelling it.",
    "The same October pocket gives antho a tiny self-undercutting joke: after telling somebody else to sleep reasonably, antho answers `what are those??` when the room jokes about sleep schedules. Keep the line as humor rather than a real sleep-habit claim.",
    "September and October 2021 Moments submissions for Reiinnaa and BobaReii are POSTED BY antho with participant labels. The attachment pixels were not inspected, so no creator, capturer or depicted-person credit is upgraded from the post alone.",
  ]),
  antiFanon: unique(anthoBase.antiFanon, [
    "The repeated contest-cycle work supports a lived creative-event stewardship pattern; it does not by itself create a formal appointment, title, promotion date, or governance role.",
    "Illien is the current canonical public owner for historical Euros. Do not create a separate Euros person from the October 2020 wording exchange.",
    "`what are those??` after a sleep-schedule joke is comic self-undercutting, not evidence of actual sleep habits or a health claim.",
    "Photo Submissions attachments remain POSTED BY antho only unless MADE BY / CAPTURED BY / FEATURING is independently grounded.",
  ]),
};
if (anthoIndex >= 0) allCharacters[anthoIndex] = antho;
else allCharacters.push(antho);
characterById.set(antho.id, antho);
addArchiveCast(antho.id);

// Wall: Rosario17/Yazaki gets a small dossier because the cumulative footprint is
// person-shaped even though the authored prose stays tiny.
const rosarioId = "rosario17-yazaki";
const rosarioIndex = allCharacters.findIndex(
  (character) =>
    character.id === rosarioId ||
    (character as ExtendedCharacter).stableDiscordIds?.includes("694305194476830720"),
);
const rosarioBase: ExtendedCharacter =
  rosarioIndex >= 0
    ? (allCharacters[rosarioIndex] as ExtendedCharacter)
    : {
        id: rosarioId,
        name: "Rosario17/Yazaki",
        aliases: ["rosayaz"],
        billing: "legacy",
        role: "Archive-era UL member",
        era: "2020–2021+",
        logline: "",
      };
const rosarioRelationships = [...(rosarioBase.relationships ?? [])];
upsertRelationship(rosarioRelationships, {
  name: "Mugen",
  note:
    "One structured Wall reply from Rosario says `Nice idea 😀😂` with Mugen in the exported reply/mention object. The missing parent keeps the exact premise unknown; the useful local texture is easy positive uptake, not a reconstructed conversation or closeness rank.",
  href: "/characters/mugen",
});
upsertRelationship(rosarioRelationships, {
  name: "Rooks",
  note:
    "Another structured reply carries Rooks / Rookie Cookie in the exported mention object and Rosario answers `Ahahahva. Ok that nice to know 😄`. It is one clean little piece of responsive ease, not a relationship hierarchy.",
  href: "/characters/rooks",
});
const rosario: ExtendedCharacter = {
  ...rosarioBase,
  id: rosarioId,
  name: rosarioBase.name || "Rosario17/Yazaki",
  aliases: unique(rosarioBase.aliases, ["rosayaz"]),
  billing: rosarioBase.billing || "legacy",
  role: rosarioBase.role || "Archive-era UL member",
  era: rosarioBase.era || "2020–2021+",
  logline:
    "Rosario is Wall's low-text, high-affect gallery chorus: usually not the person driving prosecution, very often the person making it obvious what landed. `Wow`, `Ooooo`, laughter, `Nice idea 😀😂`, `Aww so sweet!!` — tiny verdicts, loud feeling, almost no need to seize the floor.",
  tags: unique(rosarioBase.tags, [
    "Archive cast",
    "Wall",
    "Gallery chorus",
    "Reaction voice",
    "Positive uptake",
    "Low-text social style",
    "Petty Crimes",
  ]),
  relationships: rosarioRelationships,
  quotes: unique(rosarioBase.quotes, [
    "Hello!",
    "Nice idea 😀😂",
    "Hahahahah :Surprisedpikachu:",
    "Aww so sweet!!",
    ":Milk_smile:",
    "Wow",
    "Ooooo:8046_ZeroWow:",
    "Ahahahva. Ok that nice to know 😄",
  ]),
  stableDiscordIds: unique(rosarioBase.stableDiscordIds, ["694305194476830720"]),
  claims: unique(rosarioBase.claims, [
    "Stable account 694305194476830720 survives with 23 authored Wall messages and zero direct attachments from December 11, 2020 through February 12, 2021. The footprint is small but consistent: Rosario repeatedly supplies quick emotional verdicts — funny, sweet, surprising, approved — rather than trying to run the room.",
    "The cumulative contradiction is emotionally loud / operationally light. Rosario can answer with exuberant laughter, `Wow`, `Ooooo`, or `Aww so sweet!!` while the surviving authored Wall footprint contains no direct media filings. That absence is source-bounded and does not claim Rosario never shared media elsewhere.",
    "Two structured reply objects give bounded relationship texture: `Nice idea 😀😂` is Mugen-linked in the export, while `Ahahahva. Ok that nice to know 😄` carries Rooks/Rookie Cookie in the reply mention object. Neither missing parent is reconstructed beyond the metadata that survives.",
  ]),
  antiFanon: unique(rosarioBase.antiFanon, [
    "Rosario's zero-direct-attachment Wall footprint does not establish that Rosario never created, posted, captured, or shared media elsewhere.",
    "The Mugen-linked and Rooks-linked replies support responsive familiarity inside those moments; they do not establish romance, family, hierarchy, exclusivity, or ranked closeness.",
    "Rosario's varied laugh spellings are affect/typing-velocity texture, not evidence that Rosario cannot spell.",
    "The earliest surviving authored Wall line is a survival boundary, not an account, server, friendship, or UL origin date.",
  ]),
};
if (rosarioIndex >= 0) allCharacters[rosarioIndex] = rosario;
else allCharacters.push(rosario);
characterById.set(rosario.id, rosario);
addArchiveCast(rosario.id);

// Whiskey: deepen the existing canonical Shiki owner instead of spawning Shk.
const shikiIndex = allCharacters.findIndex((character) => character.id === "shiki");
if (shikiIndex < 0) throw new Error("Run 1577 expected canonical Shiki / Shk owner.");
const shiki = allCharacters[shikiIndex] as ExtendedCharacter;
const shikiRelationships = [...(shiki.relationships ?? [])];
upsertRelationship(shikiRelationships, {
  name: "Crystalia",
  note:
    "When Crystalia says real life may pull him away from Raja, Shiki does not sell activity as the price of belonging. He answers with his own precedent: `It ok i quit Long ago always free to chill   or hang out. take care and be safe`. The reassurance works because Shiki is standing there after the quit he is talking about — less recruitment pitch than living example that the game can end before the relationship does.",
  href: "/characters/crystalia",
});
const shikiUpdated: ExtendedCharacter = {
  ...shiki,
  tags: unique(shiki.tags, [
    "Whiskey",
    "People over game",
    "Low-ceremony care",
    "Availability",
    "Crystalia",
  ]),
  relationships: shikiRelationships,
  quotes: unique(shiki.quotes, [
    "lol i can help",
    "be safe",
    "It ok i quit Long ago always free to chill   or hang out. take care and be safe",
  ]),
  claims: unique(shiki.claims, [
    "The Whiskey material adds a people-over-game spine to Shiki's established Sensei/explainer story. His 2020 help is often compressed — class advice, `lol i can help`, newcomer welcomes, `be safe` — while March 24, 2021 shows the same instinct after his own relationship to the game has changed.",
    "When Crystalia says real life may force him away from Raja, Shiki answers `It ok i quit Long ago always free to chill   or hang out. take care and be safe`. The useful contradiction is quit the game / did not quit the people: Shiki uses his continued presence as the reassurance rather than pressuring Crystalia to stay active.",
    "Shiki's care stays in his ordinary plain register even when the stakes rise. The longer Crystalia sentence is concrete rather than ornate: permission to leave the game, an open invitation to chill or hang out, then `take care and be safe`.",
  ]),
  antiFanon: unique(shiki.antiFanon, [
    "`I quit Long ago` is Shiki's March 24, 2021 self-report and does not establish an exact quit date, a formal retirement event, or the end of every game-related activity.",
    "Shiki's reassurance to Crystalia supports continued social availability after game participation changed; it does not create a friendship rank, exclusivity claim, formal caretaker role, or obligation to remain in UL.",
  ]),
  stableDiscordIds: unique(shiki.stableDiscordIds, ["229490989046169600"]),
};
allCharacters[shikiIndex] = shikiUpdated;
characterById.set("shiki", shikiUpdated);
