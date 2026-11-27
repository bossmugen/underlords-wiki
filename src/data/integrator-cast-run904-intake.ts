import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Daycare: Rosario17 / Yazaki is hard-resolved in MAIN canon to Yaza.
// This pass deepens the existing owner instead of creating a Rosario/Yazaki duplicate.
const yazaIndex = allCharacters.findIndex((character) => character.id === "yaza");
if (yazaIndex < 0) {
  throw new Error("Run 904 expected the canonical Yaza owner; refusing to create a Rosario17/Yazaki duplicate.");
}

const yaza = allCharacters[yazaIndex] as ExtendedCharacter;
allCharacters[yazaIndex] = {
  ...yaza,
  aliases: unique([...(yaza.aliases ?? []), "Yazaki", "Rosario17", "rosayaz"]),
  tags: unique([
    ...(yaza.tags ?? []),
    "Daycare",
    "Personal boundaries",
    "Low-volume warmth",
    "Reaction-gallery regular",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(yaza.quotes ?? []),
    "Do I have to say my age ?",
    "I don't wnat to say it haha",
    "Nice idea 😀😂",
    "Aww so sweet!!",
  ]),
  claims: unique([
    ...(yaza.claims ?? []),
    "The Rosario17 / Yazaki / rosayaz account is canonical Yaza. In the 2020 Lobby doorway, Yaza asks whether an exact age is required, accepts Gilli's above-or-below-18 alternative, and when pressed again answers `I don't wnat to say it haha`; Gilli accepts the boundary and the onboarding interaction continues without turning cold.",
    "Across later Wall and Photo Submissions support receipts, Yaza repeatedly participates through short laughs, positive comments, and reactions rather than trying to own the room. Read together with the Lobby scene, the useful contradiction is selective personal disclosure beside easy social availability: Yaza can keep a private fact private and still stay fully in the conversation.",
    "On Anthos's 2021-01-06 example-photo post, Yaza is a heart-reactor. The reaction is audience participation only; it does not make Yaza the author, maker, capturer, or subject of the image.",
  ]),
  antiFanon: unique([
    ...(yaza.antiFanon ?? []),
    "Rosario17 / Yazaki / rosayaz belongs to canonical Yaza; this integration must not create a second Rosario or Yazaki person.",
    "Yaza's refusal to provide an exact age is a privacy boundary, not an age receipt. No exact age is inferred from the onboarding exchange.",
    "Reaction membership and short Wall comments describe Yaza's participation style. They do not assign authorship, maker credit, capture credit, or depicted-subject status to the associated media.",
  ]),
} as ExtendedCharacter;
characterById.set("yaza", allCharacters[yazaIndex]);

// Wall: Seth / Seraph has only one authored Wall line, but the surrounding callback
// and reaction layer are coherent enough for a compact structured WIKI owner. MAIN
// remains held until another life/relationship lane makes a full biography possible.
const sethId = "seth";
const sethIndex = allCharacters.findIndex((character) => character.id === sethId);
const sethCharacter: ExtendedCharacter = {
  id: sethId,
  name: "Seth",
  aliases: ["Seraph", "seraph_000"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2022+",
  logline:
    "Near-silent Wall participant with a dry refusal to explain himself: Kiro says Seraph has explaining to do, Seth answers `Lol,no explanation for you,dear`, Sye later contributes `seraph susing`, and Seth keeps turning up more often in the reaction layer than in prose.",
  tags: [
    "Archive cast",
    "Wall",
    "2022",
    "Dry non-explainer",
    "Low-volume participant",
    "Reaction layer",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Kiro",
      note:
        "Kiro files `Seraph needs some explaining to do`; Seth true-replies three days later with `Lol,no explanation for you,dear`. The useful texture is teasing familiarity: the demand for context gets affectionate withholding instead of a denial or exit. The unseen screenshot remains unresolved.",
      href: "/characters/kiro",
    },
    {
      name: "Sye",
      note:
        "Sye later drops `seraph susing` as a separate Wall callback. It keeps Seth inside the room's joking-suspicion vocabulary without establishing another screenshot charge, a closeness rank, or an off-Wall relationship history.",
      href: "/characters/sye",
    },
  ],
  quotes: ["Lol,no explanation for you,dear"],
  claims: [
    "Seth / Seraph / seraph_000 is stable account 566182720288587776 in the reviewed Wall handoff. The surviving Wall footprint contains one Seth-authored prose message plus later reaction-layer participation.",
    "Seth's sole authored Wall line is a structured reply to Kiro's exact `Seraph needs some explaining to do` parent: `Lol,no explanation for you,dear`. The reply turns scrutiny into dry social play without resolving the unseen screenshot's contents.",
    "Sye's independent `seraph susing` callback and Seth's later reaction membership make the one-line footprint socially larger than the authored-message count alone suggests.",
  ],
  antiFanon: [
    "The screenshot Kiro posted remains visually uninspected. Kiro is POSTED BY only; MADE BY / CAPTURED BY / FEATURING and the actual charge remain unresolved.",
    "`seraph susing` is joking suspicion language, not proof of misconduct, a second screenshot charge, or a relationship rank.",
    "Reaction membership is untimestamped final-state participation and cannot establish exact scene order or causation.",
    "This compact owner describes a coherent Wall shard, not Seth's complete biography, join date, role history, or whole-server activity level.",
  ],
};

if (sethIndex >= 0) {
  const current = allCharacters[sethIndex] as ExtendedCharacter;
  allCharacters[sethIndex] = {
    ...current,
    ...sethCharacter,
    aliases: unique([...(current.aliases ?? []), ...(sethCharacter.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(sethCharacter.tags ?? [])]),
    quotes: unique([...(current.quotes ?? []), ...(sethCharacter.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(sethCharacter.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(sethCharacter.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(sethCharacter);
}
characterById.set(sethId, allCharacters.find((character) => character.id === sethId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(sethId)) {
  archiveCastGroup.characterIds.push(sethId);
}
