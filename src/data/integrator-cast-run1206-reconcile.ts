import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = (typeof allCharacters)[number] & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

// Reconcile Snow against the canonical public owner. MAIN carries Snow as he/him;
// the staged Run 1206 overlay drifted to she/her while paraphrasing the same stable
// account. Correct the prose here without changing any underlying scene read.
const snowIndex = allCharacters.findIndex((character) => character.id === "snow");
if (snowIndex < 0) {
  throw new Error("Run 1206 reconciliation expected canonical Snow owner.");
}
const snow = allCharacters[snowIndex] as ExtendedCharacter;
const snowRelationships = (snow.relationships ?? []).map((relationship) => {
  if (relationship.name !== "Mugen") return relationship;
  return {
    ...relationship,
    note: relationship.note
      .replace("Mugen greets her with `Bitch you're in`", "Mugen greets him with `Bitch you're in`")
      .replace("corrects herself to `oh nvm I am`", "corrects himself to `oh nvm I am`"),
  };
});
allCharacters[snowIndex] = {
  ...snow,
  logline: snow.logline
    .replace("help escalate her own roast", "help escalate his own roast")
    .replace("the custom snowball emotes she now has to remake", "the custom snowball emotes he now has to remake"),
  relationships: snowRelationships,
  claims: (snow.claims ?? []).map((claim) =>
    claim
      .replace("then says she misses her custom snowball emotes and has to make them again", "then says he misses his custom snowball emotes and has to make them again")
      .replace("CUSTOM SNOWBALL EMOTES SHE MISSES ENOUGH TO REBUILD HERSELF", "CUSTOM SNOWBALL EMOTES HE MISSES ENOUGH TO REBUILD HIMSELF"),
  ),
  antiFanon: appendUnique(snow.antiFanon, [
    "Snow's canonical public owner uses he/him. Do not let source paraphrase or same-name account conflicts drift that identity metadata.",
  ]),
} as ExtendedCharacter;
characterById.set("snow", allCharacters[snowIndex]);

// The new Wall pass re-surfaced a Spicy/Gilli lane that Run 716 already owns in
// synthesized form. Keep the genuinely useful defendant quotes, but remove the
// second narrative copy of the same receipt-memory arc.
const spicyIndex = allCharacters.findIndex((character) => character.id === "spicy-hotpot");
if (spicyIndex >= 0) {
  const spicy = allCharacters[spicyIndex] as ExtendedCharacter;
  const duplicateLogline = " Wall participant with annoyingly good receipt memory: Spicy can arrive asking Gilli about boiled-mayo lore, perform `What did I do` when summoned, then months later identify Gilli as the probable prior filer and reply straight to her old receipt with `I knew it`.";
  const duplicateRelationship = " Gilli files and summons Spicy; Spicy seeks Gilli out over old lore, identifies her as the person who probably filed him before, locates the exact old parent, and later ping-bombs her 28 times. The recurring shape is mutual Wall-summon / receipt-recall / tease-safe behavior, not a friendship rank or off-Wall intimacy claim.";
  const duplicateClaimStarts = [
    "In September 2021 Gilli asks whether this is `Josh`'s first Wall appearance",
    "Spicy moves easily between prosecutor, summoned defendant and summoner.",
    "Petty Crimes: INVESTIGATES BOILED MAYO",
  ];
  const duplicateAntiStarts = [
    "The `Josh` bridge is bounded to Gilli's direct wording",
    "The April screenshot is POSTED BY Gilli and visually unresolved.",
    "Recurring Gilli/Spicy summons support tease-safe Wall familiarity only;",
  ];
  allCharacters[spicyIndex] = {
    ...spicy,
    logline: spicy.logline.replace(duplicateLogline, ""),
    relationships: (spicy.relationships ?? []).map((relationship) =>
      relationship.name === "Gilli"
        ? { ...relationship, note: relationship.note.replace(duplicateRelationship, "") }
        : relationship,
    ),
    claims: (spicy.claims ?? []).filter(
      (claim) => !duplicateClaimStarts.some((start) => claim.startsWith(start)),
    ),
    antiFanon: (spicy.antiFanon ?? []).filter(
      (claim) => !duplicateAntiStarts.some((start) => claim.startsWith(start)),
    ),
    quotes: appendUnique(spicy.quotes, ["What did I do", "I knew it"]),
  } as ExtendedCharacter;
  characterById.set("spicy-hotpot", allCharacters[spicyIndex]);
}

// Ren ↔ Ghoulie is already owned upstream in cast-pre575 with the exact
// `Icon we need` -> `showing me love???` -> `You’re my idol` relationship read.
// Run 1206 therefore treats the new Wall handoff as corroboration only and does
// not append a second semantic copy here. Icon/media provenance remains bounded
// to POSTED BY until the attachments themselves are inspected.
