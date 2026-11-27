import { allCharacters } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
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

const syeIndex = allCharacters.findIndex((character) => character.id === "sye");
if (syeIndex >= 0) {
  const sye = allCharacters[syeIndex] as ExtendedCharacter;
  const relationships = [...(sye.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Lilly",
    note:
      "Sye can open at full theatrical volume — `@Lilly👽 is Mine! And I Love Her more then all of y’all.` — then immediately start checking the landing. She clarifies the joke, reassures the room, admits `I’m a worry wort!`, accepts the group's reassurance, and finally asks whether Lilly might be mad about the whole spectacle. Lilly's heart reaction keeps the scene playful; Sye's follow-up keeps Lilly's comfort in frame.",
    href: "/characters/lilly",
  });

  upsertRelationship(relationships, {
    name: "Gilli",
    note:
      "Gilli knows how to answer Sye's worry without making the room solemn. She calls Sye devoted, then meets the admitted anxiety with `Please no worry!` and `We protec`. Sye accepts the shared-care framing instead of turning the affection into a territorial contest.",
    href: "/characters/gilli",
  });

  upsertRelationship(relationships, {
    name: "Snow",
    note:
      "The helper instinct survives outside the Lilly bit. In Saber control Sye simply asks Snow `you okay there snow? need help?`; later bot and schedule work repeatedly puts Sye in the practical-fixer seat. The one-line check-in matters precisely because there is no performance wrapped around it.",
    href: "/characters/snow",
  });

  allCharacters[syeIndex] = {
    ...sye,
    aliases: appendUnique(sye.aliases, ["sycessences", "ƐℲı˥"]),
    logline:
      "Loud affection, fast self-correction, and practical help live in the same person. Sye can make a giant joke about caring, worry about whether the joke landed badly, ask somebody if they need help, then years later reduce the whole helper philosophy to `Ask` / `And we may answer if we have an answer`.",
    tags: appendUnique(sye.tags, [
      "Care",
      "Worrywart",
      "Practical help",
      "Social calibration",
      "Technical fixer",
      "Petty Crimes",
    ]),
    stableDiscordIds: appendUnique(sye.stableDiscordIds, ["488099199938986004"]),
    relationships,
    quotes: appendUnique(sye.quotes, [
      "DW I love y’all too!",
      "But I’m a worry wort! And that keeps me up !",
      "I feel like she’s going to get mad by all this?",
      "you okay there snow? need help?",
      ":worry:",
      "Ask",
      "And we may answer if we have an answer",
    ]),
    claims: appendUnique(sye.claims, [
      "Stable Discord account 488099199938986004 is canonical Sye / Life / Syenitha / Sadako / sycessences / ƐℲı˥ in the reviewed material.",
      "On October 9, 2020 Sye's Wall sequence moves from exaggerated affection toward Lilly into clarification, reassurance of the room, the self-description `But I’m a worry wort! And that keeps me up !`, acceptance of communal reassurance, and a final check that Lilly may be upset by the attention. The cumulative person read is theatrical affection paired with active social calibration.",
      "On November 1, 2020 Sye asks Snow `you okay there snow? need help?` in Saber control, independently supporting a practical helper instinct outside the Lilly scene.",
      "On October 10, 2021 Sye's surviving Wall contribution is the standalone `:worry:`. It works as bounded Petty Crimes texture beside the earlier `worry wort` self-description; it is not treated as an origin or personal trademark.",
      "On May 31, 2025, when a returning Grimlee needs Raja help, Sye answers `Ask` and `And we may answer if we have an answer`, a drier late-era version of the same availability-to-help without pretending certainty.",
    ]),
    antiFanon: appendUnique(sye.antiFanon, [
      "Sye's `is Mine!` / love language toward Lilly stays playful affectionate language. Do not convert it into literal ownership, a romance/sex label, or biological family.",
      "The November 2020 Snow check-in supports a general helper pattern; one line does not establish a special relationship tier.",
      "The 2021 `:worry:` line is a callback-sized Petty Crimes detail, not proof that Sye originated the emote or used it as a formal signature.",
      "Recovered Saber-control behavior can support hands-on technical/event help, but exported/current role arrays do not date Sye's formal appointments.",
    ]),
  } as ExtendedCharacter;
}
