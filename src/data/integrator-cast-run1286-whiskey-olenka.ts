import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const olenkaId = "olenka";
const olenkaIndex = allCharacters.findIndex((character) => character.id === olenkaId);

const olenkaSeed: ExtendedCharacter = {
  id: olenkaId,
  name: "Olenka",
  aliases: ["Olenka (S14-Forsaken)"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2020+",
  logline:
    "Olenka arrives socially before she arrives administratively. Her first surfaced authored Lobby move after the welcome is an emote instead of the requested intake fields; when the room keeps onboarding moving, she comes back with a warm hello, gives the requested information cleanly, and Gilli closes the assignment loop almost immediately. Low-formality entrance, practical follow-through.",
  tags: [
    "Archive cast",
    "Lobby",
    "Onboarding",
    "Emote-first arrival",
    "Practical follow-through",
    "Gilli procedural handoff",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note:
        "Gilli is the clearest person in Olenka's surviving doorway scene: a direct ping keeps the intake moving, Olenka eventually supplies the requested information, Gilli says `There we go, Role assigned!` 6.873 seconds later, then routes Olenka onward to the Discord tour. It is clean procedural follow-through, not proof of recruiter status, closeness, or a formal historical appointment.",
      href: "/characters/gilli",
    },
    {
      name: "Yazaki / Rosario17",
      note:
        "Gilli routes Olenka and Yazaki/Rosario17 to the Discord tour in the same message. That gives them shared onboarding context only; it does not establish that they arrived together externally, already knew each other, or had a close relationship.",
    },
  ],
  quotes: [
    ":9634_homu_heiboi:",
    "Hiii Guys :8282_MHXWink:",
  ],
  claims: [
    "Olenka's first surfaced authored Lobby turn after the automated welcome is `:9634_homu_heiboi:` rather than the requested intake information. The useful person read is social presence before administrative completion, not resistance or confusion.",
    "When Olenka later returns to the intake ask, she does it cleanly in one turn with a warm `Hiii Guys` and the requested fields. Gilli marks the assignment complete 6.873 seconds later, making the completion strongly contextualized as Olenka's just-finished onboarding loop while leaving the exact historical role unresolved.",
    "Gilli directly pings Olenka before the completed intake and then explicitly routes Olenka plus Yazaki/Rosario17 to the Discord tour afterward. The sequence supports lived onboarding follow-through without turning Gilli into Olenka's proven recruiter or the shared tour message into a friendship bridge.",
    "Petty Crimes: Emote First, Paperwork Later. Olenka's first surviving authored threshold contribution is an emote; the form arrives later. Keep it as doorway texture unless future recurrence earns a broader habit claim.",
  ],
  antiFanon: [
    "The November 27, 2020 Lobby threshold is surviving onboarding evidence, not guaranteed origin, join date, or recruiter identity.",
    "Do not infer Olenka's exact historical role from export-time/current role arrays or from Gilli's generic `Role assigned!` wording.",
    "A later untargeted `Role assigned!` line in the same pocket remains unresolved and must not be assigned to Olenka or Yazaki solely by message order.",
    "Shared tour routing with Yazaki/Rosario17 does not prove prior acquaintance, joint recruitment, closeness, or a continuing relationship.",
    "One emote-first doorway scene does not justify global labels such as shy, resistant, confused, chaotic, inattentive, obedient, or an `emote person` personality diagnosis.",
    "Current retrieval negatives for direct Whiskey, Wall, or Club Only prose are source-boundary facts only and are not evidence that Olenka was absent later.",
  ],
};

if (olenkaIndex >= 0) {
  const current = allCharacters[olenkaIndex] as ExtendedCharacter;
  allCharacters[olenkaIndex] = {
    ...current,
    ...olenkaSeed,
    aliases: unique([...(current.aliases ?? []), ...(olenkaSeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(olenkaSeed.tags ?? [])]),
    relationships: [...(current.relationships ?? []), ...(olenkaSeed.relationships ?? [])],
    quotes: unique([...(current.quotes ?? []), ...(olenkaSeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(olenkaSeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(olenkaSeed.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(olenkaSeed);
}

characterById.set(olenkaId, allCharacters.find((character) => character.id === olenkaId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(olenkaId)) {
  archiveCastGroup.characterIds.push(olenkaId);
}
