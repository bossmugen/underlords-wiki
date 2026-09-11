import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const requireIndex = (id: string, label: string) => {
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) throw new Error(`Run 884 expected canonical ${label}; refusing to create a duplicate.`);
  return index;
};

const mimiIndex = requireIndex("mimi", "Mimi / opalite.honey");
const ricochetIndex = requireIndex("ricochet", "Ricochet / dragonrichard");
const renIndex = requireIndex("ren", "Ren / RV");
const gilliIndex = requireIndex("gilli", "Gilli");
const anthosIndex = requireIndex("anthos", "Anthos");

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
allCharacters[mimiIndex] = {
  ...mimi,
  tags: unique([...(mimi.tags ?? []), "Lobby", "Warm onboarding", "Procedural warmth"]),
  quotes: unique([
    ...(mimi.quotes ?? []),
    "Lucielllll:Cute_Opposum:",
    ":EmoJi_omgIly: hai hai welcome answer the question and someone will get u inn",
    ":Nusna_Yippee: roles be assigned soon",
  ]),
  claims: unique([
    ...(mimi.claims ?? []),
    "Stable Mimi account 783389804079349800 / `opalite.honey` repeatedly makes 2023 Lobby intake feel personal before it becomes procedural: she greets LuCiel by name, gets a familiar greeting back, adds affectionate reaction language and a heart reaction, then posts the formal safety/navigation block.",
    "Mimi's newcomer handling has a useful bounded contradiction: she is comfortable using reusable routing copy, but the human recognition comes first. `someone will get u inn` and `roles be assigned soon` also make the handoff visible — she helps the newcomer through the social doorway without claiming that she personally controls the access/assignment step.",
  ]),
  antiFanon: unique([
    ...(mimi.antiFanon ?? []),
    "The 2023 Lobby miner labeled stable account 783389804079349800 as Mia because a nearby participant answered `Miaaa`. Hard canon wins: 783389804079349800 / `opalite.honey` / `༯` is Mimi, while Mia is stable account 439628808545632256. Do not transfer these Lobby scenes to Mia.",
    "Mimi's `someone will get u inn` / `roles be assigned soon` wording supports welcoming and routing behavior, not formal gatekeeper authority, role-assignment power, or appointment chronology.",
    "These Run-884 newcomer scenes come from the supporting Lobby source, not direct Daycare dialogue.",
  ]),
} as ExtendedCharacter;
characterById.set("mimi", allCharacters[mimiIndex]);

const ricochet = allCharacters[ricochetIndex] as ExtendedCharacter;
const ricochetRelationships = [...(ricochet.relationships ?? [])];
upsertRelationship(ricochetRelationships, {
  name: "Mugen",
  note:
    "Mugen can remember the room quieting down after Ricochet passed out on the couch and later answer `always` when he offers snoring-and-tooting ASMR. Ricochet responds to both kinds of consideration by making the joke worse: care and body-humor live in the same comfortable lane here, without turning Mugen into a literal caretaker.",
  href: "/characters/mugen",
});
upsertRelationship(ricochetRelationships, {
  name: "Ansun",
  note:
    "As Sou, Ansun gives Ricochet's broom-to-couch incident a mock-formal commemoration. Ricochet answers by asking whether the alleged transport happened before or after he started tooting; Sou returns the roast. One excellent receipt-war scene, not a closeness ranking.",
  href: "/characters/ansun",
});

allCharacters[ricochetIndex] = {
  ...ricochet,
  logline:
    "Tank-game complaints, South Texas cold, Cheesecake Factory with no cheesecake, and a self-appointed couch-potato career he keeps personally making worse: Ricochet can sleep through the chaos, narrate his own body-humor prosecution, and still show care by teasing people straight to bed.",
  tags: unique([
    ...(ricochet.tags ?? []),
    "Couch potato",
    "Sleep-through-chaos",
    "Self-incrimination",
    "Petty Crimes",
  ]),
  relationships: ricochetRelationships,
  quotes: unique([
    ...(ricochet.quotes ?? []),
    "And I’m just the stripclub couch potato watching it happen and laughing😂😂",
    "You know my ramen butt gonna sleep thru that shit",
    "Y’all want more snoring and tooting asmr tonight",
    "Was this before or after I started tooting",
  ]),
  claims: unique([
    ...(ricochet.claims ?? []),
    "Across the Wall, every surviving literal `couch` hit is Rich/Ricochet-linked, but the useful character read is not five couch incidents. Ricochet repeatedly authors the reputation himself: he calls himself the stripclub couch potato, remembers fight-club VC as `my couch`, boasts that the screaming would not wake him, offers snoring/tooting ASMR, and extends his own broom receipt with another tooting callback.",
    "The stable contradiction is passive pose versus active social authorship. Ricochet's public character is the guy sitting, watching, sleeping, or allegedly getting swept back to the couch; Ricochet himself keeps supplying the lines that make the reputation impossible to retire.",
  ]),
  antiFanon: unique([
    ...(ricochet.antiFanon ?? []),
    "Mugen saying the room quieted after Ricochet fell asleep supports care-through-teasing in that VC relationship lane, not literal household caregiving or a closeness ranking.",
    "The Wall has one literal broom incident in the reviewed text. Treat broom transport as one supporting scene, not a recurring Ricochet ritual unless a materially new source establishes recurrence.",
    "Sou's nearby screenshots remain POSTED BY Sou unless MADE BY, CAPTURED BY, or FEATURING is independently established from inspected media or explicit provenance.",
  ]),
} as ExtendedCharacter;
characterById.set("ricochet", allCharacters[ricochetIndex]);

const ren = allCharacters[renIndex] as ExtendedCharacter;
allCharacters[renIndex] = {
  ...ren,
  tags: unique([...(ren.tags ?? []), "Shared Photoshoot support"]),
  claims: unique([
    ...(ren.claims ?? []),
    "Ren's recurring `Example Photos` packets sit inside a broader shared Photoshoot support practice rather than a Ren-owned workflow. On January 31 Life lays down an explicit example block, Gilli adds image material, and Mugen opens submissions by telling entrants to `refer to above if you need examples`; later Gilli and Anthos both post literal `Example Photos` headers.",
    "By July 7, 2021 Mugen is routing WALTZ entrants separately to submissions, rules, and `photoshoot-tips`, showing that the help layer has become addressable even though the tips surface's creator, creation date, and contents remain unresolved.",
  ]),
  antiFanon: unique([
    ...(ren.antiFanon ?? []),
    "Ren remains a repeated contributor to Photoshoot visual guidance, not the sole owner, creator, judge, or formal appointee behind the `Example Photos` practice.",
    "The July 7 `photoshoot-tips` pointer is an earliest surfaced pointer in the reviewed announcements lane, not a creation date or authorship receipt.",
  ]),
} as ExtendedCharacter;
characterById.set("ren", allCharacters[renIndex]);

const gilli = allCharacters[gilliIndex] as ExtendedCharacter;
allCharacters[gilliIndex] = {
  ...gilli,
  tags: unique([...(gilli.tags ?? []), "Photoshoot examples", "Shared visual guidance"]),
  claims: unique([
    ...(gilli.claims ?? []),
    "Gilli repeatedly helps make Photoshoot prompts visually usable: she adds image material to the shared January 31 reference wall before February submissions open, posts a literal `Example Photos` header on June 1, and does it again on August 1. The repetition fits her broader practical-builder habit without inventing a Photoshoot office for her.",
  ]),
  antiFanon: unique([
    ...(gilli.antiFanon ?? []),
    "Gilli posting or arranging example material does not establish that she made, captured, or appears in each image, nor does it establish judge/mentor/PR appointment chronology.",
  ]),
} as ExtendedCharacter;
characterById.set("gilli", allCharacters[gilliIndex]);

const anthos = allCharacters[anthosIndex] as ExtendedCharacter;
allCharacters[anthosIndex] = {
  ...anthos,
  tags: unique([...(anthos.tags ?? []), "Photoshoot examples", "Shared visual guidance"]),
  claims: unique([
    ...(anthos.claims ?? []),
    "Photoshoot support is another place Anthos's practical-host instinct surfaces. The first-contest staging already has her laying example material before the official-submission divider, and on June 1 she posts a literal `Example Photos` header a few minutes after Gilli does the same. The function is collaborative room support, not one person's private workflow.",
  ]),
  antiFanon: unique([
    ...(anthos.antiFanon ?? []),
    "Anthos's example-photo participation does not establish a formal Photoshoot title, judging appointment, exclusive ownership, or maker/capture credit for uninspected media.",
  ]),
} as ExtendedCharacter;
characterById.set("anthos", allCharacters[anthosIndex]);
