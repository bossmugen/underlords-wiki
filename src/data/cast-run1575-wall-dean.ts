import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = NonNullable<Character["relationships"]>[number];

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const replaceRelationship = (
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] => {
  const filtered = relationships.filter(
    (relationship) => relationship.name.toLowerCase() !== incoming.name.toLowerCase(),
  );
  return [...filtered, incoming];
};

/**
 * Run 1575 Wall integration for canonical Dean = Support Tech = SEU = Beansprout.
 *
 * This is intentionally a normal cast patch instead of the older side-effect module:
 * the side-effect module imported `./cast` itself and was never wired into the canonical
 * cast pipeline, so its green build/deploy did not make the Dean reader delta live.
 */
export function applyRun1575WallDeanCast(characters: Character[]): void {
  const stableId = "770767336780070913";
  const deanIndex = characters.findIndex(
    (character) =>
      character.id === "dean" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );

  if (deanIndex < 0) {
    throw new Error(
      "Run 1575 expected canonical Dean; refusing to publish Support Tech as a separate person.",
    );
  }

  const dean = characters[deanIndex] as ArchiveCharacter;
  let relationships = [...(dean.relationships ?? [])] as Relationship[];

  relationships = replaceRelationship(relationships, {
    name: "Mugen",
    href: "/characters/mugen",
    note:
      "Dean's Support Tech-era Wall banter with Mugen is extremely low-friction: Dean can file a screenshot, summon Mugen seconds later, ask `Don't you agree mum` in the middle of a pizza-man bit, take Mugen's `Try again next year bb` without dropping the joke, then return much later by tagging Mugen before posting media. Mugen answers that return with `Look who's baaaack`. The `mum` language is joke-family shorthand; the useful relationship signal is recognition, direct summons, and easy banter.",
  });

  relationships = replaceRelationship(relationships, {
    name: "Snow",
    href: "/characters/snow",
    note:
      "One late Support Tech-era Wall beat catches Dean in a softer register. After Snow posts media and directly summons him, Dean true-replies to Snow's exact attachment parent with `Bee stink hurt you 😔`. It is a small, direct care beat inside a persona usually busy enjoying exposure culture; it does not establish a ranked relationship or let the uninspected image become an independent injury claim.",
  });

  const nextDean: ArchiveCharacter = {
    ...dean,
    aliases: unique([
      ...(dean.aliases ?? []),
      "Support Tech",
      "✔️ Support Tech",
      "supporttech900",
    ]),
    stableDiscordIds: unique([...(dean.stableDiscordIds ?? []), stableId]),
    logline:
      "Dean's Support Tech era turns an official-sounding display name into camouflage for somebody who learns Screenshot Court almost immediately. Dean starts by asking whether this is where people get exposed, celebrates when the answer is yes, protests theatrically once the receipts point back, starts filing screenshots and summoning Mugen, and later walks back into Wall already speaking the room's language. The chaos has a soft edge too: when Snow appears to be hurting, Dean's final surviving Wall beat is concern rather than another roast.",
    tags: unique([
      ...(dean.tags ?? []),
      "Wall",
      "Fast socialization",
      "Theatrical defendant",
      "Receipt filer",
      "Direct summons",
      "Recognized return",
      "Soft-under-chaos",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(dean.quotes ?? []),
      "Is this where you expose Peopl",
      "Ehehehhehe",
      "Me UH gOt EXpOsE WEE",
      "WhY U expOse Me",
      "Only if pizza man was hot",
      "Don't you agree mum",
      "Feed me Soba",
      "Bee stink hurt you 😔",
    ]),
    claims: unique([
      ...(dean.claims ?? []),
      "Under the Support Tech display name, Dean's surviving Wall chronology moves from asking what the exposure channel is for on 2021-03-23 to openly celebrating being exposed on 2021-04-23. It reads as rapid socialization into the room's joke, not an origin date for Dean's UL membership or Discord habits.",
      "On 2021-06-03, after Ren posts an attachment and tags Dean under the Support Tech display name, Dean answers `WhY U expOse Me`. By 2021-06-26 Dean is on the filing side too: a screenshot is posted from the same Support Tech account and Mugen is summoned 4.924 seconds later. The mock complaint and the filing behavior belong to the same participatory Wall persona.",
      "The June 2021 pizza-man / `mum` exchange gives Dean and Mugen a compact easy-banter lane: Dean pulls Mugen into the joke, Mugen answers `Try again next year bb`, and the conversation keeps moving. The family wording is social shorthand inside the scene.",
      "After a long gap in the surviving Support-Tech-authored Wall footprint, the account's first surviving authored return in March 2023 begins with a direct Mugen summon and then media; Mugen answers `Look who's baaaack`. That supports recognized return and retained room fluency, not proof that Dean had been absent from UL itself.",
      "On 2023-03-23 Snow posts media, directly tags Dean, and Dean true-replies to Snow's exact attachment parent with `Bee stink hurt you 😔`. The line adds a useful soft-under-chaos contrast to the exposure-court persona: Dean reads the scene as hurt and answers with concern instead of another filing or roast.",
    ]),
    antiFanon: unique([
      ...(dean.antiFanon ?? []),
      "Hard canon resolves Support Tech as Dean. Do not create or preserve a separate Support Tech person from the display name, `✔️ Support Tech`, or `supporttech900` account trail.",
      "Unverified legacy account aliases or old micro-profile content from a retired duplicate Support Tech owner are not automatically identity-bridged into Dean merely because that duplicate once existed.",
      "`mum`, `sis`, and related family-tree wording in these Wall pockets are joke-family language. Do not derive biological/adoptive kinship, hierarchy, governance, or romance from those words alone.",
      "Ren's `he crashing` line is scene wording and does not establish health, intoxication, impairment, gender canon, or another private state for Dean.",
      "The June 2021 and March 2023 screenshots are POSTED BY the Support Tech account only unless separate object-level evidence establishes MADE BY, CAPTURED BY, FEATURING, or exact subject.",
      "Dean's `Bee stink hurt you 😔` line is a response to Snow's attachment and supports a bounded care beat. The pixels were not inspected here, so do not independently assert the image content, an actual bee sting, or a medical/injury state beyond Dean's wording.",
      "The long surviving Wall-authorship gap before March 2023 is not proof of absence from UL, departure, rejoin, or any role chronology.",
    ]),
  };

  characters[deanIndex] = nextDean;

  // Hard identity lock: Dean and Support Tech are one person. Remove an obsolete
  // standalone Support Tech row if an older baseline still carries one.
  for (let index = characters.length - 1; index >= 0; index -= 1) {
    if (index !== deanIndex && characters[index]?.id === "support-tech") {
      characters.splice(index, 1);
    }
  }
}
