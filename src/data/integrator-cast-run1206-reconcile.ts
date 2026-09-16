import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

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
// synthesized form. Keep the one genuinely useful defendant quote, but remove the
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

// Ren ↔ Ghoulie: the miner hit this while chasing icon provenance, but the useful
// thing is the relationship behavior. The person being filed explicitly calls the
// teasing love, returns it, and Ren answers by escalating the praise.
const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
const renIndex = allCharacters.findIndex((character) => character.id === "ren");
if (ghoulieIndex < 0 || renIndex < 0) {
  throw new Error("Run 1206 reconciliation expected canonical Ghoulie and Ren owners.");
}

const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
const ghoulieRelationships = [...(ghoulie.relationships ?? [])];
upsertRelationship(
  ghoulieRelationships,
  "Ren",
  "A July 2021 Wall filing makes their joke/care overlap unusually explicit: after Ren posts `Pls ghoulie is the Icon we need`, Ghoulie comes back asking `is this y’all’s way of showing me love???` and says `cause if that’s the case i love y’all too`. Ren true-replies `You’re my idol`. Ghoulie names the teasing as affection herself; Ren answers tenderness with more public praise rather than backing away from it.",
  "Ghoulie names the teasing as affection herself",
  "/characters/ren",
);
allCharacters[ghoulieIndex] = {
  ...ghoulie,
  logline: appendOnce(
    ghoulie.logline,
    "Sometimes she says the quiet part out loud: when Ren turns her into the Wall bit, Ghoulie can ask whether this is everybody's way of showing love, return the love herself, and make the room admit what the joke was carrying.",
    "make the room admit what the joke was carrying",
  ),
  tags: appendUnique(ghoulie.tags, ["Ren", "Affection-through-teasing", "Wall"]),
  relationships: ghoulieRelationships,
  quotes: appendUnique(ghoulie.quotes, [
    "is this y’all’s way of showing me love???",
    "cause if that’s the case i love y’all too",
  ]),
  claims: appendUnique(ghoulie.claims, [
    "On 2021-07-18 Ren posts two Wall attachments with `Pls ghoulie is the Icon we need` and tags Baby Lyssa/Ghoulie. Ghoulie returns with `is this y’all’s way of showing me love???` and `cause if that’s the case i love y’all too`; Ren true-replies to the love-question parent with `You’re my idol`. The relationship value is explicit affection inside public teasing, not a new closeness rank.",
  ]),
  antiFanon: appendUnique(ghoulie.antiFanon, [
    "The July 2021 attachments are POSTED BY Ren only and were not visually inspected in this pass. Ren's caption/tag does not establish FEATURING Ghoulie, MADE BY, CAPTURED BY, or the visual contents, and `Icon` does not establish guild-icon provenance.",
    "The reciprocal love/idol language supports affection and tease-safe familiarity. It does not establish romance, literal family, or an interpersonal rank.",
  ]),
} as ExtendedCharacter;
characterById.set("baby-lyssa", allCharacters[ghoulieIndex]);

const ren = allCharacters[renIndex] as ExtendedCharacter;
const renRelationships = [...(ren.relationships ?? [])];
upsertRelationship(
  renRelationships,
  "Ghoulie",
  "Ren can package affection as a ridiculous public filing: after Ghoulie explicitly asks whether the Wall bit is how everyone shows her love and returns it, Ren true-replies `You’re my idol` and follows with pleading emotes. The tenderness is not hidden from either participant; it is being performed through the joke.",
  "package affection as a ridiculous public filing",
  "/characters/baby-lyssa",
);
allCharacters[renIndex] = {
  ...ren,
  tags: appendUnique(ren.tags, ["Ghoulie", "Affection-through-teasing", "Wall"]),
  relationships: renRelationships,
  quotes: appendUnique(ren.quotes, ["Pls ghoulie is the Icon we need", "You’re my idol"]),
  claims: appendUnique(ren.claims, [
    "On 2021-07-18 Ren's Ghoulie Wall filing turns openly affectionate after Ghoulie interprets the teasing as love and returns it; Ren answers the exact parent with `You’re my idol`. The scene supports a recurring UL-style overlap between public clowning and care, not romance or rank.",
  ]),
  antiFanon: appendUnique(ren.antiFanon, [
    "The two July 2021 attachments remain POSTED BY Ren only. Do not infer their visual subject, creator, capturer, or guild-icon provenance without inspecting the media.",
  ]),
} as ExtendedCharacter;
characterById.set("ren", allCharacters[renIndex]);
