import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
if (mimiIndex < 0) {
  throw new Error("Run 973 expected canonical Mimi owner; refusing to recreate or fold Mimi into Mia.");
}

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;

allCharacters[mimiIndex] = {
  ...mimi,
  aliases: unique([...(mimi.aliases ?? []), "Opalite Honey", "opalite.honey", "༯"]),
  logline: mimi.logline.includes("role has been assigned")
    ? mimi.logline
    : `${mimi.logline} By 2024 the same compact delivery can close an onboarding handoff—\`Thank you role has been assigned!\`—and roll straight into the room's safety boundaries without turning the moment into a speech.`,
  tags: unique([
    ...(mimi.tags ?? []),
    "Onboarding",
    "Community maintenance",
    "Post-Daycare continuity",
  ]),
  quotes: unique([
    ...(mimi.quotes ?? []),
    "Did you summon me kekw",
    "Thank you role has been assigned!",
  ]),
  claims: unique([
    ...(mimi.claims ?? []),
    "The incoming Daycare handoff mislabeled stable account 783389804079349800 / `opalite.honey` as Mia. Project canon keeps that account with Mimi / Opalite Honey / `༯`; Mia remains separate stable account 439628808545632256.",
    "After Mimi's surviving direct-Daycare authorship ends in December 2023, the same stable account remains visibly active elsewhere: on January 18, 2024 she answers a Wall summon with `Did you summon me kekw`, and on February 4 she closes a Lobby onboarding handoff with `Thank you role has been assigned!` before restating the community's no-hate, no real-life religion/politics, and no NSFW-image boundaries.",
    "The February 2024 sequence deepens Mimi's practical-helper pattern into community maintenance: she confirms that a handoff is complete, orients the newcomer, and packages the behavioral boundaries with it. The behavior matters more than inventing a title for it.",
  ]),
  antiFanon: unique([
    ...(mimi.antiFanon ?? []),
    "Run 973's miner-side `Mia / opalite.honey` label is a continuity error. Stable account 783389804079349800 belongs to Mimi; do not transfer these 2024 Wall/Lobby scenes, roles, or behavior onto Mia.",
    "`Thank you role has been assigned!` plus a rules reminder shows lived onboarding/community-maintenance work. It does not establish when Mimi received any formal appointment, what exact title authorized the action, or a server-wide authority rank.",
    "Mimi's direct-Daycare endpoint followed by later Wall/Lobby activity shows that her Daycare silence did not equal social disappearance. It does not by itself explain why Daycare declined or establish a server-wide migration cause.",
  ]),
} as ExtendedCharacter;

characterById.set("mimi", allCharacters[mimiIndex]);
