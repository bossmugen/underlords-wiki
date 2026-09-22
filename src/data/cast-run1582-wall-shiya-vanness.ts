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

/** Run 1582 Wall tail: deepen ShiyaX's defendant/filer contradiction and rescue Vanness as a thin person-shaped dossier. */
export function applyRun1582WallShiyaVannessCast(characters: Character[]): void {
  const shiyaIndex = characters.findIndex(
    (character) =>
      character.id === "shiyax" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes("341219730025349130"),
  );

  if (shiyaIndex >= 0) {
    const shiya = characters[shiyaIndex] as ArchiveCharacter;
    let relationships = [...(shiya.relationships ?? [])] as Relationship[];

    relationships = replaceRelationship(relationships, {
      name: "Vanness",
      href: "/characters/vanness",
      note:
        "ShiyaX and Vanness meet comfortably inside Wall grammar from opposite sides of the filing. Shiya posts a receipt while tagging Vanness; Vanness true-replies less than a minute later with the all-caps defense `ITS GABU WHO SUCKED IT DRY, NOT MEEE`. It is quick adversarial play between people who both understand the bit, not a broader closeness ranking and not permission to invent what the uninspected screenshot depicts.",
    });

    relationships = replaceRelationship(relationships, {
      name: "Ren",
      href: "/characters/ren",
      note:
        "Ren can prosecute Shiya with almost no setup: `*fatha what’s this*` gets the immediate mock alibi `Someone else was on my account bbg`. The exchange reads as easy tease-and-deny familiarity. `fatha` is joke-family language, not biological kinship or a ranked closeness claim.",
    });

    characters[shiyaIndex] = {
      ...shiya,
      tags: unique([
        ...(shiya.tags ?? []),
        "Room-literate chaos",
        "Recurring aworryWeirdExit",
      ]),
      relationships,
      quotes: unique([
        ...(shiya.quotes ?? []),
        "Take it to #🥃💬｜whiskey-room guys",
        "get your arse to whiskey",
        ":aworryWeirdExit:",
        "@Akariel™ got caught in 4k",
      ]),
      claims: unique([
        ...(shiya.claims ?? []),
        "Shiya's Wall identity works from both sides of the evidence table: repeat defendant, quick filer, mock-alibi specialist, and somebody who still tells ordinary chatter to move to Whiskey. The useful joke is the contradiction itself — `I AM THE CHAOS` comes from a person who also knows where the chaos is supposed to go.",
        "Across August through October 2021 Shiya authored six messages whose entire content is the same `:aworryWeirdExit:` reaction. It reads as a recurring comic stage-exit when the room becomes too much, not a health or avoidance diagnosis.",
        "Shiya's filing of Vanness and the recurring `caught in 4k` language deepen the existing accused↔filer pattern without requiring a new event-by-event chronology.",
      ]),
      antiFanon: unique([
        ...(shiya.antiFanon ?? []),
        "Six uses of `:aworryWeirdExit:` are recurring humor texture only; do not pathologize the emote or infer a mental-health condition from it.",
        "Ren's `fatha` wording is social comedy. It does not establish literal family relationship.",
        "The ShiyaX↔Vanness receipt exchange establishes the messages and reply relationship only. The uninspected image remains POSTED BY ShiyaX; MADE BY, CAPTURED BY, and visual FEATURING stay unresolved.",
      ]),
    } as ArchiveCharacter;
  }

  const vannessStableId = "714781719357554718";
  const vannessIndex = characters.findIndex(
    (character) =>
      character.id === "vanness" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(vannessStableId),
  );
  const previousVanness = vannessIndex >= 0 ? (characters[vannessIndex] as ArchiveCharacter) : undefined;
  let vannessRelationships = [...(previousVanness?.relationships ?? [])] as Relationship[];

  vannessRelationships = replaceRelationship(vannessRelationships, {
    name: "ShiyaX",
    href: "/characters/shiyax",
    note:
      "Shiya points the Wall at Vanness and Vanness answers almost immediately with `ITS GABU WHO SUCKED IT DRY, NOT MEEE`. Vanness is not objecting to Screenshot Court as a concept; they are very specifically appealing this charge. The scene supports quick adversarial Wall play, not a wider closeness claim.",
  });

  const vanness: ArchiveCharacter = {
    ...(previousVanness ?? {}),
    id: previousVanness?.id ?? "vanness",
    name: previousVanness?.name ?? "Vanness",
    aliases: unique([...(previousVanness?.aliases ?? []), "vanness0492"]),
    billing: previousVanness?.billing ?? "guest",
    role: previousVanness?.role ?? "Wall-era cast",
    era: previousVanness?.era ?? "2021",
    logline:
      "Vanness understands Screenshot Court well enough to prosecute other people, voluntarily prosecute themself, and then mount an immediate all-caps defense the second somebody else files the case. Losing five orange dracs in a merge becomes `Shame me`; Shiya's receipt becomes `NOT MEEE`. The room is valid. The current defendant assignment is under appeal.",
    tags: unique([
      ...(previousVanness?.tags ?? []),
      "Wall",
      "Self-filer",
      "Receipt filer and defendant",
      "Game-mishap confession",
      "Blame-redirect defense",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousVanness?.stableDiscordIds ?? []), vannessStableId]),
    relationships: vannessRelationships,
    quotes: unique([
      ...(previousVanness?.quotes ?? []),
      "Shame @Deleted User",
      "Im putting myself in wall of shame for losing 5 orange dracs for merge. Shame me:CatCry:",
      "ITS GABU WHO SUCKED IT DRY, NOT MEEE:Raja_cat_frustrates:",
      "Why",
      "In the world would anyone have this idea",
    ]),
    claims: unique([
      ...(previousVanness?.claims ?? []),
      "Stable Discord account 714781719357554718 / vanness0492 is the Wall account published here as Vanness.",
      "Vanness's compact Wall footprint has a clean contradiction: they actively file shame material and even self-report a Dragon Raja merge mistake, but when Shiya files Vanness, the defense is immediate blame redirection. They know and enjoy the room's grammar from both prosecution and defendant sides.",
      "The five-orange-dracs self-filing is useful ordinary game-life texture: Vanness turns a personal merge loss into communal entertainment without needing someone else to drag the confession out of them.",
      "A separate screenshot post followed by `Why` and then `In the world would anyone have this idea` preserves Vanness's dramatic caption rhythm while leaving the uninspected screenshot itself undescribed.",
    ]),
    antiFanon: unique([
      ...(previousVanness?.antiFanon ?? []),
      "Vanness's ShiyaX exchange supports bounded Wall-literate adversarial play only; do not inflate it into romance, family, hierarchy, or a broader closeness ranking.",
      "`Shame @Deleted User` does not resolve the pooled Deleted User identity.",
      "Uninspected Vanness/ShiyaX screenshots establish only their surviving poster/reply context. POSTED BY does not automatically become MADE BY, CAPTURED BY, or FEATURING.",
      "Vanness saying they were too sad to play after the merge loss is ordinary game frustration in context, not a health or diagnostic claim.",
    ]),
  };

  if (vannessIndex >= 0) characters[vannessIndex] = vanness;
  else characters.push(vanness);
}
