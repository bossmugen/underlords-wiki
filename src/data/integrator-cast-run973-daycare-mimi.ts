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
  logline: mimi.logline.includes("roles be assigned")
    ? mimi.logline
    : `${mimi.logline} The compact social delivery also turns out to be practical as hell: by 2023 she can greet a newcomer with \`Holaa ¡bienvenido\`, run the rules / biodata / server-map / Whiskey handoff, notice that \`roles be assigned soon\`, repeat the whole navigation job a month later, and by 2024 close another handoff with \`Thank you role has been assigned!\` without making any of it sound ceremonial.`,
  tags: unique([
    ...(mimi.tags ?? []),
    "Onboarding",
    "Community maintenance",
    "Newcomer navigation",
    "Operational warmth",
    "Post-Daycare continuity",
  ]),
  quotes: unique([
    ...(mimi.quotes ?? []),
    "Holaa ¡bienvenido",
    "roles be assigned soon",
    "Did you summon me kekw",
    "Thank you role has been assigned!",
  ]),
  claims: unique([
    ...(mimi.claims ?? []),
    "The incoming Daycare handoff mislabeled stable account 783389804079349800 / `opalite.honey` as Mia. Project canon keeps that account with Mimi / Opalite Honey / `༯`; Mia remains separate stable account 439628808545632256.",
    "Mimi's newcomer-facing work is recurring rather than a one-off. On May 6, 2023 she replies with the server rules, biodata route, Discord tour, and Whiskey as main chat, then follows twenty-six seconds later with `roles be assigned soon`. On May 21 she can switch back to the breezier `Holaa ¡bienvenido`; on June 6 she repeats the full rules/navigation handoff for another newcomer.",
    "The 2023 receipts give Mimi a useful contradiction: loose, affectionate social register alongside quiet procedural awareness. She notices where somebody is in the intake sequence and tells them what still needs to happen without turning the interaction into rank theater.",
    "After Mimi's surviving direct-Daycare authorship ends in December 2023, the same stable account remains visibly active elsewhere: on January 18, 2024 she answers a Wall summon with `Did you summon me kekw`, and on February 4 she closes a Lobby onboarding handoff with `Thank you role has been assigned!` before restating the community's no-hate, no real-life religion/politics, and no NSFW-image boundaries.",
    "The February 2024 sequence deepens Mimi's practical-helper pattern into community maintenance: she confirms that a handoff is complete, orients the newcomer, and packages the behavioral boundaries with it. The behavior matters more than inventing a title for it.",
  ]),
  antiFanon: unique([
    ...(mimi.antiFanon ?? []),
    "Run 1023's miner-side `Mia / opalite.honey` label is the same known continuity error. Stable account 783389804079349800 belongs to Mimi; do not transfer the 2022–2024 Wall/Lobby scenes, roles, or behavior onto Mia.",
    "`roles be assigned soon` and `Thank you role has been assigned!` show Mimi tracking onboarding state. They do not establish that she personally assigned the role, date a formal appointment, or create a title from the behavior.",
    "Mimi's direct-Daycare endpoint followed by later Wall/Lobby activity shows that her Daycare silence did not equal social disappearance. It does not by itself explain why Daycare declined or establish a server-wide migration cause.",
  ]),
} as ExtendedCharacter;

characterById.set("mimi", allCharacters[mimiIndex]);
