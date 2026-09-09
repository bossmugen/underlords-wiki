import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendRelationshipNote = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index < 0) {
    relationships.push(relationship);
    return;
  }

  const current = relationships[index];
  relationships[index] = {
    ...current,
    ...relationship,
    note: current.note.includes(relationship.note)
      ? current.note
      : `${current.note} ${relationship.note}`,
    href: current.href ?? relationship.href,
  };
};

// Run 708 late Daycare handoff. Route only through Eos's existing canonical owner.
// These December 2023 receipts deepen Screenshot Court as a relationship/boundary
// mechanism; they are not a new incident-led Eos persona.
const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex >= 0) {
  const eos = allCharacters[eosIndex] as ExtendedCharacter;
  const relationships = [...(eos.relationships ?? [])];

  appendRelationshipNote(relationships, {
    name: "Ren",
    note:
      "In December 2023 Eos tells Ren `you never ask me to post them` and immediately explains `thats why i always ask first`. When a saved picture genuinely makes Eos feel bad, Ren offers `Ill delete it frfr`; Eos says it does not need to be removed for her, then notes that Shia hates it. Their clowning has repair built into it: Eos can distinguish a moment that stings from a request to delete while recognizing that somebody else can have a different tolerance.",
    href: "/characters/ren",
  });

  appendRelationshipNote(relationships, {
    name: "Marian Kage",
    note:
      "By December 2023 the evidence war is openly reciprocal. Eos calls Panda's move betrayal; Panda true-replies `fucking betrayerrrr`; Eos answers `wrong. payback`, later adds `get betrayed nerd`, and then jokes `_mugs will have fun with my file one day_` while Panda promises `I got more, a lot more`. Eos knows the receipt machine can boomerang onto her and keeps feeding it anyway.",
    href: "/characters/marian-kage",
  });

  appendRelationshipNote(relationships, {
    name: "Mugen",
    note:
      "Mugen catches Eos laughing at her own Screenshot Court suffering and says so outright; Eos direct-replies `i dont remember why i laughed so hard`. It is a tiny but useful Eos tell: being publicly embarrassed can still be funny enough that she becomes part of the audience to her own disaster.",
    href: "/characters/mugen",
  });

  allCharacters[eosIndex] = {
    ...eos,
    logline:
      "Low-ceremony without being low-warmth: Eos can scream when Screenshot Court comes for her, laugh at her own suffering a moment later, apologize while filing somebody else, counter-file on Marian, trade embarrassment with Rummy, and keep a softer ask-first lane with Ren. The joke is reciprocal, but she still notices that different people can have different boundaries.",
    tags: [
      ...new Set([
        ...(eos.tags ?? []),
        "Ask-first reciprocity",
        "Boundary-aware clowning",
        "Self-laughter",
        "Evidence arms race",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(eos.quotes ?? []),
        "i dont remember why i laughed so hard",
        "thats why i always ask first",
        "wrong. payback",
        "get betrayed nerd",
        "_mugs will have fun with my file one day_",
      ]),
    ],
    claims: [
      ...new Set([
        ...(eos.claims ?? []),
        "On 2023-12-12 Mugen says Eos is laughing at her own suffering; Eos direct-replies `i dont remember why i laughed so hard`, and Ren says the moment is going to Daycare five seconds later.",
        "On 2023-12-15 Eos tells Ren `you never ask me to post them` and `thats why i always ask first`. In a later direct-reply repair pocket Ren offers to delete a saved picture after Eos says it made her feel bad; Eos says she does not need it removed and distinguishes Shia's dislike from her own tolerance.",
        "On 2023-12-15 Eos and Marian/Panda explicitly frame their receipt exchange as betrayal versus payback; Eos later anticipates Mugen having fun with her own file while Panda says she has more material.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(eos.antiFanon ?? []),
        "Eos's `thats why i always ask first` supports a scene-grounded reciprocity habit. Do not inflate it into a universal UL consent policy or assume every media exchange followed identical rules.",
        "Eos saying one picture made her feel bad and then declining deletion is not evidence that embarrassment never matters to her. The same pocket explicitly recognizes that Shia has a different tolerance.",
        "Eos and Marian/Panda's betrayal/payback language is reciprocal Screenshot Court play in these receipts, not literal hostility.",
        "The quick `i had to im sorry` post near an Eos image is not a direct Discord reply in the reviewed handoff. Keep the attachment attribution at POSTED BY only unless separate evidence establishes MADE BY / CAPTURED BY / FEATURING.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("eos", allCharacters[eosIndex]);
}
