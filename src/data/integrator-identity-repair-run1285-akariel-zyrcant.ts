import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]) => [...new Set(items)];

const zyrcantIndex = allCharacters.findIndex((character) => character.id === "zyrcant");
if (zyrcantIndex < 0) {
  throw new Error("Run 1285 identity repair expected the canonical Zyrcant owner.");
}

const zyrcant = allCharacters[zyrcantIndex] as ExtendedCharacter;
const transferredAkarielQuotes = new Set([
  "put me on the wall of shame 😩",
  "fair lmaooo",
  "oooh shit *runs*",
]);
const zyrcantRelationships = (zyrcant.relationships ?? [])
  .filter((relationship) => !["Ren", "ShiyaX"].includes(relationship.name))
  .map((relationship) =>
    relationship.name === "Gabu"
      ? {
          name: "Gabu",
          note: "Zyrcant describes themself as the person who `tackles ppl`, specifically Gabu in that bit. Keep the stage direction as chat slapstick rather than literal physical contact or a closeness ranking.",
          href: "/characters/gabu",
        }
      : relationship,
  );

const zyrcantNext: ExtendedCharacter = {
  ...zyrcant,
  aliases: (zyrcant.aliases ?? []).filter(
    (alias) => !["Akariel", "Akariel™", "akariel_star"].includes(alias),
  ),
  role: "VIP · former Amaurot deputy",
  era: "2020–",
  logline:
    "Former Amaurot deputy and UL VIP whose public chat style can jump from practical device chatter to self-described `crackhead once I’m comfortable`, then straight into declaring themself the person who tackles people or pressing the Snow-is-old button with the escape already preloaded.",
  tags: unique([
    "VIP",
    "Amaurot",
    "Wall",
    "Ordinary life",
    "Kinetic humor",
    "Snow-is-old ecology",
    "Petty Crimes",
  ]),
  relationships: zyrcantRelationships,
  quotes: (zyrcant.quotes ?? []).filter((quote) => !transferredAkarielQuotes.has(quote)),
  claims: unique([
    ...(zyrcant.claims ?? []),
    "Run 1285 identity repair: Zyrcant and Akariel are separate people. Akariel's Wall-seeking / caught-in-4K receipts must not be used as Zyrcant characterization.",
  ]),
  antiFanon: unique([
    ...(zyrcant.antiFanon ?? []),
    "Akariel / Akariel™ / `akariel_star` is not Zyrcant. Do not restore the former alias bridge or reuse Akariel-authored Wall receipts for Zyrcant.",
  ]),
};

allCharacters[zyrcantIndex] = zyrcantNext;
characterById.set("zyrcant", zyrcantNext);

const akarielId = "akariel";
const akarielIndex = allCharacters.findIndex((character) => character.id === akarielId);
const akarielCharacter: ExtendedCharacter = {
  id: akarielId,
  name: "Akariel",
  aliases: ["Akariel™", "akariel_star"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021",
  logline:
    "Voluntary Screenshot Court defendant who asks to be put on the Wall, accepts Ren's fake rule that the spot has to be earned, and later answers being called `caught in 4k` by performing the escape. Akariel does not merely survive public embarrassment; apparently the exposure is part of the stage.",
  tags: [
    "Archive cast",
    "2021",
    "Wall",
    "Screenshot Court",
    "Voluntary defendant",
    "Mock fugitive",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Ren",
      note: "Akariel asks `put me on the wall of shame 😩`; Ren mock-gatekeeps the ritual with `You got to e a r n your place here`; Akariel answers `fair lmaooo`. The correction becomes part of the joke instead of ending it.",
      href: "/characters/ren",
    },
    {
      name: "ShiyaX",
      note: "ShiyaX can publicly call Akariel `caught in 4k`; Akariel later lands on `oooh shit *runs*`. The escape is probable local uptake rather than a stored direct reply, and the easy public teasing does not manufacture a closeness rank.",
      href: "/characters/shiyax",
    },
    {
      name: "Tofu",
      note: "Tofu repeatedly takes Akariel's material and heightens it: `The word of the day is ass` becomes `Brought to you by UnderLords.`, then a later evidence-post pocket turns into another public escalation. Recurring joke pickup, not a formal prosecution role or friendship ranking.",
      href: "/characters/tofu",
    },
  ],
  quotes: [
    "put me on the wall of shame 😩",
    "fair lmaooo",
    "The word of the day is ass",
    "oooh shit *runs*",
  ],
  claims: [
    "Akariel's stable Wall account is separate from Zyrcant. The older public alias bridge was a continuity error and is superseded by the source-level identity brake.",
    "In January 2021 Akariel asks to be put on the Wall and accepts Ren's mock requirement that the place be earned; in July ShiyaX names Akariel as `caught in 4k` and Akariel later performs `oooh shit *runs*`.",
    "A separate July Tofu pocket turns Akariel's `The word of the day is ass` into `Brought to you by UnderLords.`, supporting a bounded recurring joke-escalation lane.",
  ],
  antiFanon: [
    "Akariel is not Zyrcant. Similar social beats, prior public aliases, or historical merge residue do not bridge the two identities.",
    "The July `oooh shit *runs*` line is probable uptake after ShiyaX's caught-in-4K callout, not a stored direct-reply edge.",
    "Public teasing with Ren, ShiyaX, and Tofu does not establish romance, family, exclusivity, friendship rank, or formal Screenshot Court office.",
    "Uninspected Wall attachments remain attribution-bounded; POSTED BY does not silently become MADE BY, CAPTURED BY, or FEATURING.",
  ],
};

if (akarielIndex >= 0) {
  const current = allCharacters[akarielIndex] as ExtendedCharacter;
  const next: ExtendedCharacter = {
    ...current,
    ...akarielCharacter,
    aliases: unique([...(current.aliases ?? []), ...(akarielCharacter.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(akarielCharacter.tags ?? [])]),
    relationships: akarielCharacter.relationships,
    quotes: unique([...(current.quotes ?? []), ...(akarielCharacter.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(akarielCharacter.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(akarielCharacter.antiFanon ?? [])]),
  };
  allCharacters[akarielIndex] = next;
  characterById.set(akarielId, next);
} else {
  allCharacters.push(akarielCharacter);
  characterById.set(akarielId, akarielCharacter);
}
