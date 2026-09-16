import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const akarielId = "akariel";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === akarielId ||
    character.name === "Akariel" ||
    character.name === "Akariel™" ||
    (character.aliases ?? []).some((alias) => alias === "akariel_star"),
);

const patch: ExtendedCharacter = {
  id: existingIndex >= 0 ? allCharacters[existingIndex].id : akarielId,
  name: "Akariel",
  aliases: ["Akariel™", "akariel_star"],
  billing: "guest",
  role: "Archive-era UL cast",
  era: "2021",
  logline:
    "Akariel is one of the rare Wall regulars who practically applies for prosecution herself: she asks to be put on the Wall, accepts Ren's verdict that she has to earn it, contributes exhibits of her own, and still performs a tiny stage-direction escape whenever the danger swings back toward her.",
  tags: ["Archive cast", "2021", "Wall", "Petty Crimes"],
  relationships: [
    {
      name: "Ren",
      note:
        "When Akariel asks to be put on the Wall, Ren tells her she has to `e a r n your place here`; Akariel answers `fair lmaooo` almost immediately. Ren then adds that eventually everybody ends up there. It is a clean little orientation/challenge beat: Ren supplies the room's fake admissions standard and Akariel accepts the premise without needing to be coaxed into the joke.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    "put me on the wall of shame 😩",
    "fair lmaooo",
    "oooh shit *runs*",
    "Everytime someone calls snow old",
    "-runs-",
    "The word of the day is ass",
  ],
  claims: [
    "Akariel explicitly asks to be put on the Wall in January 2021, accepts Ren's teasing requirement that she earn her place, and later repeatedly posts media into the Wall herself. The recurring behavior is comfortable participation from both filer and defendant registers.",
    "The strongest contradiction is prosecution-positive plus mock-fugitive: Akariel volunteers for the institution, contributes material, and uses compact stage-direction escapes when the joke points back at her. In December she authors both `Everytime someone calls snow old` and `-runs-` ten seconds later, manufacturing her own consequence as part of the bit.",
  ],
  antiFanon: [
    "Akariel posting media repeatedly does not establish that she made, captured, or appears in every uninspected attachment. POSTED BY stays separate from MADE BY / CAPTURED BY / FEATURING.",
    "The July `oooh shit *runs*` follows a `caught in 4k` callout after a long gap and is best treated as likely contextual uptake, not a hard structured-reply edge.",
    "The Ren exchange is a bounded Wall-orientation / challenge-acceptance beat, not evidence of off-Wall closeness, governance authority, or a literal Wall admissions process.",
    "Do not turn Akariel's repeated Wall posting into a formal filer, moderator, media, or governance role.",
    "No Akariel↔Zyrcant identity bridge is established here; stable IDs and user-confirmed identity rails remain controlling.",
  ],
};

if (existingIndex >= 0) {
  const existing = allCharacters[existingIndex] as ExtendedCharacter;
  allCharacters[existingIndex] = {
    ...existing,
    ...patch,
    aliases: [...new Set([...(existing.aliases ?? []), ...(patch.aliases ?? [])])],
    tags: [...new Set([...(existing.tags ?? []), ...(patch.tags ?? [])])],
    relationships: [
      ...(existing.relationships ?? []).filter((relationship) => relationship.name !== "Ren"),
      ...(patch.relationships ?? []),
    ],
    quotes: [...new Set([...(existing.quotes ?? []), ...(patch.quotes ?? [])])],
    claims: [...new Set([...(existing.claims ?? []), ...(patch.claims ?? [])])],
    antiFanon: [...new Set([...(existing.antiFanon ?? []), ...(patch.antiFanon ?? [])])],
  } as ExtendedCharacter;
  characterById.set(allCharacters[existingIndex].id, allCharacters[existingIndex]);
} else {
  allCharacters.push(patch);
  characterById.set(patch.id, patch);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(patch.id)) {
    archiveCastGroup.characterIds.push(patch.id);
  }
}
