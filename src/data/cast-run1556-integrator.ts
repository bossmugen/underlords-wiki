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

/** Run 1556 Wall + Whiskey: Mr. Streamer and Eos person-first structured texture. */
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

  {
    const stableId = "373938708870348813";
    const index = characters.findIndex(
      (character) =>
        character.id === "eos" ||
        (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
    );
    const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;
    let relationships = [...(previous?.relationships ?? [])] as Relationship[];
    relationships = replaceRelationship(relationships, {
      name: "Ren",
      href: "/characters/ren",
      note:
        "Ren-context material helps show Eos as somebody who can slide between commentary, casual hanging out, and callback memory without turning every exchange into a punchline. Later context is texture only; it does not backdate names, titles, or roles.",
    });
    relationships = replaceRelationship(relationships, {
      name: "Snow",
      href: "/characters/snow",
      note:
        "Eos will happily turn Snow's photos into a room event — `I SHALL SHARE THE PHOTOS SNOW TOOK OF ME!!` — a neat example of her curation instinct. The line supports the stated Snow-took-these relationship to those photos only; it does not generalize media provenance elsewhere.",
    });

    const incoming: ArchiveCharacter = {
      ...(previous ?? {}),
      id: previous?.id ?? "eos",
      name: previous?.name ?? "Eos",
      aliases: unique([...(previous?.aliases ?? [])]),
      billing: previous?.billing ?? "guest",
      role: previous?.role ?? "Archive-era cast",
      era: previous?.era ?? "2020+",
      logline:
        "Eos often sounds less like the person trying to win the bit and more like the person framing it so everyone else can see what is funny. She reinterprets references, notices visual details, links current nonsense to older nonsense, shares media when it matters, and then drops small personal opinions into the same current. The result is an editor's instinct without an editor title: she keeps adjusting the room's angle.",
      tags: unique([
        ...(previous?.tags ?? []),
        "Whiskey",
        "Framing voice",
        "Media curation",
        "Callback memory",
        "Reference interpreter",
        "Petty Crimes",
      ]),
      stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
      relationships,
      quotes: unique([
        ...(previous?.quotes ?? []),
        "I actually liked titan aeon in ff10",
        "I SHALL SHARE THE PHOTOS SNOW TOOK OF ME!!",
        "im clicking on it but it isnt playing anything",
        "moon u suck",
        "Oh my fucking god. Its so old",
      ]),
      claims: unique([
        ...(previous?.claims ?? []),
        "Stable Discord account 373938708870348813 is the Eos account in the reviewed Whiskey profile slice.",
        "Across the reviewed authored anchors, Eos repeatedly reframes references/canon, curates or comments on media, links older callbacks to current conversation, and supplies small transition acknowledgements and personal texture. The cumulative read is a framing/editor voice as behavior, not a formal title.",
        "Eos explicitly says Snow took the specific photos she announces she will share; that source-bounded attribution should not be generalized to other media.",
      ]),
      antiFanon: unique([
        ...(previous?.antiFanon ?? []),
        "`Framing/editor voice` describes a recurring conversational habit, not an officer, media, editor, or governance appointment.",
        "Later Ren-context material supports social texture only and must not backdate names, roles, titles, or relationship states.",
        "Contextual replies do not make Eos the author of surrounding messages, and media discussion does not imply capture or subject identity without explicit support.",
        "Do not publish the exact age detail from the reviewed profile slice.",
      ]),
    };

    if (index >= 0) characters[index] = incoming;
    else characters.push(incoming);
  }
}
