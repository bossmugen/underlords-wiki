import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]) => [...new Set(items)];

export const applyRun1518Louvre = (allCharacters: Character[]) => {
  const index = allCharacters.findIndex((character) => character.id === "mugen");
  if (index < 0) return;

  const current = allCharacters[index] as ArchiveCharacter;

  allCharacters[index] = {
    ...current,
    tags: unique([
      ...(current.tags ?? []),
      "Louvre",
      "Access-making",
      "Wayfinding",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([
      ...(current.stableDiscordIds ?? []),
      "182114372414570496",
    ]),
    quotes: unique([
      ...(current.quotes ?? []),
      "i made a map",
      "for the lost souls",
    ]),
    claims: unique([
      ...(current.claims ?? []),
      "On 2020-06-18 in the room later preserved under the Louvre/design-ui-ux lineage, UCT said they had tried to join people in one of the channels. Mugen immediately checked whether UCT could see all the channels, then followed `hmmmmmmmmmmmmmmmmm` with `i made a map` and `for the lost souls`.",
      "Twelve-point-seven-nine-two seconds after Mugen's `for the lost souls`, Gabu posted a map image whose visible text begins `First Floor ; Lobby`. The sequence makes Mugen's map-making claim part of a concrete access/wayfinding problem rather than a stray boast, while Gabu remains the POSTED BY party for that exported image object.",
      "The person-level read is problem-spotting → tiny practical fix → self-aware joke: Mugen notices somebody cannot navigate the channel layout, reaches for a map, and frames the people who need it as `the lost souls`.",
      "Local Dragon Raja/Louvre notation around levels, `[UL]`, building numbers, and teasing such as `bully Sye` remains game-room context and does not create a governance hierarchy.",
    ]),
    antiFanon: unique([
      ...(current.antiFanon ?? []),
      "`i made a map` supports Mugen's own map-making claim, but Gabu is the exported poster of the immediately following image. Do not collapse SAID BY / MADE BY / POSTED BY into one attribution field.",
      "The exact image identity/reuse relationship between this 2020 map and later Main HQ / Prince Ryuu map objects remains unresolved; thematic similarity is not a file-identity bridge.",
      "The 2020-06-18 map scene is access-making behavior, not a formal cartographer, moderator, architect, or governance appointment.",
      "`for the lost souls` is Mugen's joke about people needing the map, not a formal subgroup label or evidence of literal exclusion.",
      "A nearby Louvre `Who is Hodor?` line does not create an identity bridge from this scene. Existing Hodor/Bill canon must stand on its own sources.",
    ]),
  } as ArchiveCharacter;
};
