import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const stableId = "158594223371845632";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === "nhou" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);

const base: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "nhou",
        name: "Nhou",
        aliases: ["nhougat"],
        billing: "legacy",
        role: "Staff",
        era: "2020–2021+",
        logline:
          "Low-ceremony room presence with a visual streak: Nhou rarely needs a speech to enter a scene, and can turn the act of posting something into the joke before anybody has asked what the joke is.",
      };

const next: ExtendedCharacter = {
  ...base,
  id: base.id || "nhou",
  name: base.name || "Nhou",
  aliases: [...new Set([...(base.aliases ?? []), "nhougat"])],
  billing: base.billing ?? "legacy",
  role: base.role || "Staff",
  era: base.era || "2020–2021+",
  logline:
    "Low-ceremony room presence with a visual streak: Nhou rarely needs a speech to enter a scene, and can turn the act of posting something into the joke before anybody has asked what the joke is.",
  tags: [
    ...new Set([
      ...(base.tags ?? []),
      "Staff",
      "Louvre",
      "Low-ceremony entrances",
      "Visual humor",
      "Archive cast",
    ]),
  ],
  stableDiscordIds: [...new Set([...(base.stableDiscordIds ?? []), stableId])],
  quotes: [
    ...new Set([
      ...(base.quotes ?? []),
      "-posts naughty drawings-",
    ]),
  ],
  claims: [
    ...new Set([
      ...(base.claims ?? []),
      "Nhou's first surviving authored Louvre row is `-posts naughty drawings-` on 2020-04-08. The person-level value is the entrance mechanism: instead of introducing himself or explaining the post, he turns the act of posting into the performance and lets the room catch up.",
      "The Louvre opener fits Nhou's broader low-ceremony social style without becoming a new formal role or a whole personality diagnosis from one line.",
    ]),
  ],
  antiFanon: [
    ...new Set([
      ...(base.antiFanon ?? []),
      "`-posts naughty drawings-` establishes SAID BY / POSTED BY Nhou for the scene wording only. It does not establish that Nhou drew, made, captured, or appears in the unseen media.",
      "The first surviving Louvre-authored row is not proof of Nhou's first-ever Louvre appearance or the origin of this posting style.",
      "One Louvre opener is not enough to turn Nhou into a permanent sexual, boundary-pushing, or artist persona.",
    ]),
  ],
};

if (existingIndex >= 0) {
  const previousId = allCharacters[existingIndex].id;
  allCharacters[existingIndex] = next;
  characterById.delete(previousId);
  characterById.set(next.id, next);
} else {
  allCharacters.push(next);
  characterById.set(next.id, next);
}
