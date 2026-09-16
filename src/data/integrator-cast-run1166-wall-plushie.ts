import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const plushieId = "plushie";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === plushieId ||
    character.name === "Plushie" ||
    (character.aliases ?? []).some((alias) => alias === "dylan9399"),
);

const patch: ExtendedCharacter = {
  id: existingIndex >= 0 ? allCharacters[existingIndex].id : plushieId,
  name: "Plushie",
  aliases: ["dylan9399"],
  billing: "guest",
  role: "Amaurot-side archive cast",
  era: "2020",
  logline:
    "Plushie enters the Wall by asking the rule out loud, accepts the answer with `Okie doki`, and within minutes has already converted room etiquette into accomplice comedy: once Rookie warns that Snow may notice the wrong-room chatter, Plushie's immediate answer is `Snow u saw nothing UwU`.",
  tags: ["Amaurot", "2020", "Wall", "Archive cast", "Petty Crimes"],
  relationships: [
    {
      name: "Rooks",
      note:
        "Rookie is the person who explains the Wall in one sentence—catch people saying dumb stuff—and then warns Plushie when ordinary chatter should move back to Whiskey. Plushie learns both rules almost instantly and immediately turns the second one into `Snow u saw nothing UwU`. It is a small orientation scene, not a closeness ranking.",
      href: "/characters/rooks",
    },
  ],
  quotes: [
    "What’s this channel for?",
    "Okie doki",
    "Snow u saw nothing UwU",
    "The panda is both adorable and dangerous",
  ],
  claims: [
    "Across Plushie's surviving October 2020 Wall footprint, the recurring participation style is low-volume and reaction-forward: short laughs, emotes, a tiny exit/wave sequence, and occasional one-line observations.",
    "On Oct. 19, 2020 Plushie asks what the Wall is for, accepts Rookie's explanation immediately, and minutes later turns Rookie's warning about wrong-room chatter into the `Snow u saw nothing UwU` joke. The cumulative read is direct clarification-seeker plus very fast social uptake once the local rule is understood.",
  ],
  antiFanon: [
    "Do not turn Plushie's low-volume Wall participation into a filer, receipt-courier, moderator, or governance role.",
    "Snow is invoked in `Snow u saw nothing UwU` but is not recovered as a participant in that local scene; the line does not establish a direct Snow relationship.",
    "The screenshot near `The panda is both adorable and dangerous` is POSTED BY Rookie and remains visually uninspected. Do not infer MADE BY, CAPTURED BY, FEATURING, or the panda referent from surrounding jokes or emotes.",
    "This Wall pocket supports a bounded Rookie↔Plushie orientation / premise-uptake dynamic, not an off-Wall closeness tier or broader relationship hierarchy.",
    "Amaurot is preserved as scene/context affiliation; this dossier does not infer a formal UL appointment or role chronology from it.",
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
      ...(existing.relationships ?? []).filter((relationship) => relationship.name !== "Rooks"),
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
