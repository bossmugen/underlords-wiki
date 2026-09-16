import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = NonNullable<Character["relationships"]>[number];

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const deanIndex = allCharacters.findIndex((character) => character.id === "dean");
if (deanIndex < 0) {
  throw new Error("Run 1228 expected canonical Dean; refusing to publish Support Tech as a separate person.");
}

const dean = allCharacters[deanIndex] as ExtendedCharacter;
const legacySupportTech = allCharacters.find(
  (character) => character.id === "support-tech" && character.id !== dean.id,
) as ExtendedCharacter | undefined;

const upsertRelationship = (
  relationships: Relationship[],
  next: Relationship,
): Relationship[] => {
  const index = relationships.findIndex(
    (relationship) => relationship.name.toLowerCase() === next.name.toLowerCase(),
  );
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
  return relationships;
};

const relationships: Relationship[] = [
  ...(dean.relationships ?? []),
  ...(legacySupportTech?.relationships ?? []),
];

upsertRelationship(relationships, {
  name: "Mugen",
  note:
    "Dean's Support Tech-era Wall banter with Mugen is extremely low-friction: Dean can file a screenshot, summon Mugen seconds later, ask `Don't you agree mum` in the middle of a pizza-man bit, take Mugen's `Try again next year bb` without dropping the joke, then return much later by tagging Mugen before posting media. Mugen answers that return with `Look who's baaaack`. The `mum` language is part of the room's joke-family shorthand; the useful relationship signal here is recognition, direct summons, and easy banter.",
  href: "/characters/mugen",
});

const migratedLegacyClaims = legacySupportTech?.claims ?? [];
const migratedLegacyAntiFanon = legacySupportTech?.antiFanon ?? [];

const nextDean: ExtendedCharacter = {
  ...dean,
  aliases: unique([
    ...(dean.aliases ?? []),
    "Support Tech",
    "✔️ Support Tech",
    "supporttech900",
    ...(legacySupportTech?.aliases ?? []),
  ]),
  logline:
    "Dean's Support Tech era turns an official-sounding display name into camouflage for somebody who learns Screenshot Court almost immediately. Dean starts by asking whether this is where people get exposed, celebrates when the answer is yes, protests theatrically once the receipts point back, starts filing screenshots and summoning Mugen, and later walks back into Wall already speaking the room's language.",
  tags: unique([
    ...(dean.tags ?? []),
    ...(legacySupportTech?.tags ?? []),
    "Wall",
    "Fast socialization",
    "Theatrical defendant",
    "Receipt filer",
    "Direct summons",
    "Recognized return",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(dean.quotes ?? []),
    ...(legacySupportTech?.quotes ?? []),
    "Is this where you expose Peopl",
    "Ehehehhehe",
    "Me UH gOt EXpOsE WEE",
    "WhY U expOse Me",
    "Only if pizza man was hot",
    "Don't you agree mum",
    "Feed me Soba",
  ]),
  claims: unique([
    ...(dean.claims ?? []),
    ...migratedLegacyClaims,
    "Under the Support Tech display name, Dean's surviving Wall chronology moves from asking what the exposure channel is for on 2021-03-23 to openly celebrating being exposed on 2021-04-23. It reads as rapid socialization into the room's joke, not an origin date for Dean's UL membership or Discord habits.",
    "On 2021-06-03, after Ren posts an attachment and tags Dean under the Support Tech display name, Dean answers `WhY U expOse Me`. By 2021-06-26 Dean is on the filing side too: a screenshot is posted from the same Support Tech account and Mugen is summoned 4.924 seconds later. The mock complaint and the filing behavior belong to the same participatory Wall persona.",
    "The June 2021 pizza-man / `mum` exchange gives Dean and Mugen a compact easy-banter lane: Dean pulls Mugen into the joke, Mugen answers `Try again next year bb`, and the conversation keeps moving. The family wording is social shorthand inside the scene.",
    "After a long gap in the surviving Support-Tech-authored Wall footprint, the account's first surviving authored return in March 2023 begins with a direct Mugen summon and then media; Mugen answers `Look who's baaaack`. That supports recognized return and retained room fluency, not proof that Dean had been absent from UL itself.",
  ]),
  antiFanon: unique([
    ...(dean.antiFanon ?? []),
    ...migratedLegacyAntiFanon,
    "Hard canon resolves Support Tech as Dean. Do not create or preserve a separate Support Tech person from the display name, `✔️ Support Tech`, or `supporttech900` account trail.",
    "`mum`, `sis`, and related family-tree wording in these Wall pockets are joke-family language. Do not derive biological/adoptive kinship, hierarchy, governance, or romance from those words alone.",
    "Ren's `he crashing` line is scene wording and does not establish health, intoxication, impairment, gender canon, or another private state for Dean.",
    "The June 2021 and March 2023 screenshots are POSTED BY the Support Tech account only unless separate object-level evidence establishes MADE BY, CAPTURED BY, FEATURING, or exact subject.",
    "The long surviving Wall-authorship gap before March 2023 is not proof of absence from UL, departure, rejoin, or any role chronology.",
  ]),
};

const withoutDuplicate = allCharacters.filter((character) => character.id !== "support-tech");
const nextDeanIndex = withoutDuplicate.findIndex((character) => character.id === "dean");
if (nextDeanIndex < 0) {
  throw new Error("Run 1228 lost canonical Dean while removing the obsolete Support Tech duplicate.");
}
withoutDuplicate[nextDeanIndex] = nextDean;
allCharacters.splice(0, allCharacters.length, ...withoutDuplicate);

characterById.delete("support-tech");
characterById.set(nextDean.id, nextDean);
