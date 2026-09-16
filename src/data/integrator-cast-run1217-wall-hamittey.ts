import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const hamitteyIndex = allCharacters.findIndex((character) => character.id === "hamittey");
if (hamitteyIndex < 0) {
  throw new Error("Run 1217 expected canonical HamitteY owner; refusing to create HamitteY II.");
}

const hami = allCharacters[hamitteyIndex] as ExtendedCharacter;
const relationships = [...(hami.relationships ?? [])];

const ghoulieIndex = relationships.findIndex(
  (relationship) => relationship.name === "Baby Lyssa" || relationship.name === "Ghoulie",
);
const ghoulieNote =
  "An old screenshot ambush gets the explicit friendship protest `i thought you was my friend`; Hami answers with a hearted `Sorry not Sorry` and then notices the same person is back from vacation. Baby Lyssa is Ghoulie under the locked identity bridge, so the useful relationship read is public menace with actual attention attached: tease-safe enough to file, attentive enough to notice an absence and return.";
if (ghoulieIndex >= 0) {
  const current = relationships[ghoulieIndex];
  relationships[ghoulieIndex] = {
    ...current,
    name: "Ghoulie",
    note: current.note.includes("public menace with actual attention attached")
      ? current.note
      : `${current.note} ${ghoulieNote}`,
  };
} else {
  relationships.push({
    name: "Ghoulie",
    href: "/characters/baby-lyssa",
    note: ghoulieNote,
  });
}

const noetherIndex = relationships.findIndex((relationship) => relationship.name === "Noether");
const noetherNote =
  "Noether is comfortable accusing Hami of not sharing desserts; Hami's entire defense is `i dont have no desserts :Cursed:`. It is tiny, mundane familiarity: accusation, technicality, case closed, apparently.";
if (noetherIndex >= 0) {
  const current = relationships[noetherIndex];
  relationships[noetherIndex] = {
    ...current,
    note: current.note.includes("not sharing desserts") ? current.note : `${current.note} ${noetherNote}`,
  };
} else {
  relationships.push({ name: "Noether", href: "/characters/noether", note: noetherNote });
}

allCharacters[hamitteyIndex] = {
  ...hami,
  logline:
    "HamitteY has the soul of somebody who keeps an invisible misdemeanor ledger. Old screenshots can reappear with a sip emote, fresh nonsense gets compared against older offenses, and friends can get publicly filed in the same breath that Hami notices they just came back. The contradiction is excellent: callback-retentive prosecutor with an attentive social edge, compact little defendant the second the Wall points back.",
  tags: appendUnique(hami.tags, [
    "Callback prosecutor",
    "Old-receipt memory",
    "Compact defendant",
    "Return-aware teasing",
    "Prior-offense ledger",
    "Dessert technicality",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(hami.quotes, [
    "welcome back from vacation :SpidySip:",
    "i dont have no desserts :Cursed:",
    ":frogmad:",
    "first a furry and now dis",
  ]),
  claims: appendUnique(hami.claims, [
    "Hami's Wall habit is cumulative rather than screenshot-only: old material gets remembered and resurfaced, targets get directly summoned, and `first a furry and now dis` shows fresh nonsense being compared against an older offense whose exact referent remains unresolved. The recurring person read is callback-retentive prosecutor, not formal archivist or appointed Wall staff.",
    "The prosecutor/defendant asymmetry is part of Hami's charm. When Anayss posts `**facts**` at Hami and Noether, Hami's complete surviving defense is `:frogmad:`. When Noether says Hami does not share desserts, Hami answers `i dont have no desserts :Cursed:`. Public filing can get elaborate; self-defense gets very small, very fast.",
    "Ghoulie's `i thought you was my friend` reply, Hami's hearted `Sorry not Sorry`, and Hami's `welcome back from vacation` sit in one relationship pocket. The strong read is friendship-language, tease-safe receipt ambush, and real return-awareness living together without visible rupture.",
    "Petty Crimes: STORES OLD RECEIPTS LONG ENOUGH TO FORGET THEM; ANSWERS FRIENDSHIP COMPLAINTS WITH HEARTED NON-APOLOGIES; DEFEATS DESSERT CHARGES ON A TECHNICALITY; USES `:frogmad:` AS A FULL LEGAL BRIEF; APPARENTLY MAINTAINS AN UNRESOLVED PRIOR-OFFENSE LEDGER.",
  ]),
  antiFanon: appendUnique(hami.antiFanon, [
    "Baby Lyssa and Ghoulie are the same person under the user-confirmed identity bridge; do not split this relationship into two people.",
    "The vacation timing does not establish that Hami deliberately held the screenshot until Ghoulie returned. Keep the supported read at return-awareness plus teasing, not premeditated ambush chronology.",
    "Noether's dessert accusation is social microtexture, not proof that Hami literally hoards or refuses to share desserts.",
    "The earlier `furry` in `first a furry and now dis` is unresolved. Do not assign that referent to Snow or anyone else from this scene alone.",
    "Uninspected attachments remain POSTED BY their surviving poster only unless MADE BY, CAPTURED BY, or FEATURING is independently established.",
  ]),
} as ExtendedCharacter;

characterById.set("hamittey", allCharacters[hamitteyIndex]);
