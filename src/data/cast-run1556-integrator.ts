import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = { name: string; note: string; href?: string };

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const replaceRelationship = (
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] => {
  const filtered = relationships.filter((relationship) => relationship.name !== incoming.name);
  return [...filtered, incoming];
};

/** Run 1556 Wall: Mr. Streamer person-first structured texture. */
export function applyRun1556IntegratorCast(characters: Character[]): void {
  {
    const stableId = "615878920583249920";
    const index = characters.findIndex(
      (character) =>
        character.id === "mr-streamer" ||
        (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
    );
    const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;
    let relationships = [...(previous?.relationships ?? [])] as Relationship[];
    relationships = replaceRelationship(relationships, {
      name: "Mugen",
      href: "/characters/mugen",
      note:
        "Streamer is comfortable letting Mugen hand him absurd premises and answering with one tiny push back into the room. `He loves his new kink name lol` gets `Mother sucker man`; `DRAGONS VS FLAMES LEAGUE` gets the much more economical `Damn.` The rhythm is familiarity through compression, not a special-status claim.",
    });

    const incoming: ArchiveCharacter = {
      ...(previous ?? {}),
      id: previous?.id ?? "mr-streamer",
      name: previous?.name ?? "Mr. Streamer",
      aliases: unique([...(previous?.aliases ?? []), "ulstreamer"]),
      billing: previous?.billing ?? "guest",
      role: previous?.role ?? "Archive-era Wall cast",
      era: previous?.era ?? "2020+",
      logline:
        "Mr. Streamer is a compact reactor with a long fuse to direct judgment. He can spend a scene watching, compress the whole situation into `Poggers` or `Damn.`, then suddenly become the person asking the painfully obvious follow-up everybody else skipped. The fun is the gear change: low-volume side-eye until somebody says something ridiculous enough that he has to correct the room himself.",
      tags: unique([
        ...(previous?.tags ?? []),
        "Wall",
        "Compact reactor",
        "Side-eye",
        "Direct correction",
        "Receipt reflex",
        "Petty Crimes",
      ]),
      stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
      relationships,
      quotes: unique([
        ...(previous?.quotes ?? []),
        "That's how it be sometimes.",
        "I'm watching him now",
        "Are you a big brother? Shouldn't it be the other way around.",
        "So you don't have two personal maids. But instead nannies.",
        "What the hell did he say.",
        "Mother sucker man",
        "Damn.",
      ]),
      claims: unique([
        ...(previous?.claims ?? []),
        "Stable Discord account 615878920583249920 / ulstreamer is the reviewed Wall account published here as Mr. Streamer.",
        "Across the reviewed Wall slice, Streamer's recurring social mode is compact watching/reaction followed by unusually direct correction once a premise becomes ridiculous enough to require it.",
        "Streamer saying he will take a screenshot after Madre tells him off supports a live receipt reflex; it does not establish authorship, capture, or subject identity for unrelated media elsewhere.",
      ]),
      antiFanon: unique([
        ...(previous?.antiFanon ?? []),
        "Sharlek adjacency and repeated reactions support room familiarity, not hostility, rank, or a special relationship claim.",
        "Reaction-roster appearance is a participation floor, not a timestamp for the click itself.",
        "Wall attachments retain SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING separation unless the source says otherwise.",
      ]),
    };

    if (index >= 0) characters[index] = incoming;
    else characters.push(incoming);
  }

  // Run 1561 identity repair: a Whiskey handoff previously routed stable account
  // 373938708870348813 into canonical Eos solely through the shared display name.
  // Canonical Eos / astarosa is stable account 621021922473410581 on both public
  // surfaces, and no resolved account bridge joins these IDs. The 373... packet is
  // therefore quarantined rather than merged into Eos. Do not restore its Ren/Snow
  // relationships, quotes, profile details, or media claims without an explicit bridge.
}
