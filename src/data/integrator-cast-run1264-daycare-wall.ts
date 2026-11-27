import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const anthosIndex = allCharacters.findIndex((character) => character.id === "anthos");
if (anthosIndex < 0) throw new Error("Run 1264 expected canonical Anthos owner");
const anthos = allCharacters[anthosIndex] as ExtendedCharacter;
const anthosRelationships = [...(anthos.relationships ?? [])];
upsertRelationship(
  anthosRelationships,
  "Ren",
  "Ren can walk into Anthos's cleanup and turn it into collaborative nonsense almost immediately: Anthos admits deleting messages, Ren volunteers Diana as the culprit, Anthos answers `I just listened to her`, and the room keeps the fake-blame story moving. It works as a co-bit because neither of them needs the joke explained; it is not a factual accusation against Diana.",
  "/characters/ren",
);

allCharacters[anthosIndex] = {
  ...anthos,
  logline:
    "Soft-hearted host, hands-on organizer, and resident setup gremlin: Anthos does not merely suggest tools or themes. He tests the Live2D thing, turns it into custom phone/laptop wallpaper work, and is already fussing over Lupin imagery for a Louvre-named space before the later public Louvre era. Give him a room or a toy and he starts customizing it; give Ren the opening and the setup may become a bit.",
  tags: appendUnique(anthos.tags, ["Hands-on organizer", "Custom media", "Pre-Louvre setup", "Co-bit with Ren", "Petty Crimes"]),
  relationships: anthosRelationships,
  quotes: appendUnique(anthos.quotes, [
    "and maybe customized one for each one of us",
    "we need to change that to picture of lupin",
    "I just listened to her",
  ]),
  claims: appendUnique(anthos.claims, [
    "In November 2020 Anthos identifies a Live2D tool, tests it himself, makes a custom wallpaper, and offers separate phone/laptop versions instead of stopping at a recommendation.",
    "By November 13, 2020 Anthos is already shaping a Louvre-named space around Lupin imagery and searching for better source art, adding an earlier hands-on thematic-build layer to his later public Louvre association.",
    "Anthos and Ren turn a deleted-message question into cooperative fake blame: Anthos first owns the deletion, Ren redirects blame to Diana as a bit, and Anthos plays along. The scene supports shared joke fluency, not factual blame.",
  ]),
  antiFanon: appendUnique(anthos.antiFanon, [
    "A Louvre-named/themed setup in November 2020 is useful prehistory, not proof that this scene is the project's absolute origin or that Anthos alone founded/owned the later public Louvre feature.",
    "Ren's Diana blame-shift is cooperative joke text after Anthos already admitted the deletion. Do not restate Diana as the factual deleter.",
  ]),
} as ExtendedCharacter;
characterById.set("anthos", allCharacters[anthosIndex]);

const babyLyssaIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (babyLyssaIndex < 0) throw new Error("Run 1264 expected canonical Baby Lyssa owner");
const babyLyssa = allCharacters[babyLyssaIndex] as ExtendedCharacter;
const babyLyssaRelationships = [...(babyLyssa.relationships ?? [])];
upsertRelationship(
  babyLyssaRelationships,
  "ShiyaX",
  "Baby Lyssa can explain the route in one casual sentence: after ShiyaX and the others left FL, she later found UL. That makes Shiya part of the visible pre-UL social continuity around her without turning him into the person who formally recruited her, founded UL, or supplied a complete migration chronology.",
  "/characters/shiyax",
);

allCharacters[babyLyssaIndex] = {
  ...babyLyssa,
  tags: appendUnique(babyLyssa.tags, ["Intermediary helper", "Pre-UL continuity"]),
  relationships: babyLyssaRelationships,
  quotes: appendUnique(babyLyssa.quotes, [
    "And then later I found UL after you guys left FL",
  ]),
  claims: appendUnique(babyLyssa.claims, [
    "Baby Lyssa is already explaining game/system details to another player in October 2020, reinforcing an early intermediary/helper register rather than a title claim.",
    "On November 8, 2020 she tells ShiyaX that she later found UL after `you guys left FL`, giving a bounded first-person bridge between an older social setting and UL.",
  ]),
  antiFanon: appendUnique(babyLyssa.antiFanon, [
    "`I found UL after you guys left FL` does not establish who founded UL, who formally recruited Baby Lyssa, an appointment date, or a complete migration chronology.",
  ]),
} as ExtendedCharacter;
characterById.set("baby-lyssa", allCharacters[babyLyssaIndex]);

const tofuIndex = allCharacters.findIndex((character) => character.id === "tofu");
if (tofuIndex < 0) throw new Error("Run 1264 expected canonical Tofu owner");
const tofu = allCharacters[tofuIndex] as ExtendedCharacter;

allCharacters[tofuIndex] = {
  ...tofu,
  logline:
    "Ready-to-roll roast friend whose Wall instinct shows up early: Tofu can pause long enough to explain she was sorting her chat background, absorb a one-word `Shame`, then immediately start `I am shrimp` and get the room answering back. The later volunteer-defendant energy was already paired with a small talent for giving everybody else the line to repeat.",
  tags: appendUnique(tofu.tags, ["2020 Wall", "Call-and-response", "Chant starter", "Petty Crimes"]),
  quotes: appendUnique(tofu.quotes, [
    "I was sorting my chat background",
    "I am shrimp",
  ]),
  claims: appendUnique(tofu.claims, [
    "A bounded September 26, 2020 Wall scene places Tofu/Pottu in the room before her already-public 2021 Wall material: she explains a pause with `I was sorting my chat background`, takes Woohyuk/Whisky's `Shame`, then starts `I am shrimp`, which Woohyuk repeats seconds later.",
    "The 2020 exchange adds an early call-and-response/chant-starter side to Tofu's later willing-defendant Wall persona; it is a behavior pattern, not a formal Wall role.",
  ]),
  antiFanon: appendUnique(tofu.antiFanon, [
    "September 26, 2020 is the earliest bounded Tofu Wall scene in this recovered 2020 stream, not a claim about the Wall's absolute origin or Tofu's first-ever participation.",
    "The `I am shrimp` repetition supports playful call-and-response only. Do not turn it into governance, a formal ritual office, or an identity bridge beyond the already-canonical Tofu/Pottu owner.",
  ]),
} as ExtendedCharacter;
characterById.set("tofu", allCharacters[tofuIndex]);
