import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex >= 0) {
  const eos = allCharacters[eosIndex] as ExtendedCharacter;
  const relationships = [...(eos.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Ricochet",
    note:
      "Rich can throw Eos almost no setup at all—`Looks at @Eos :BOP1:`, `I think it’s time to punish a panda`, later `I think that’s a job for panda`—and she catches the cue every time with `No comment`, `yep.... @Marian Kage cmere`, or `o, yes`. Their useful rhythm is shared context at low bandwidth: he assumes she knows the bit; she does.",
    href: "/characters/ricochet",
  });

  upsertRelationship(relationships, {
    name: "Rummy",
    note:
      "When Rummy roasts Eos's spelling, Eos first admits `IT WORSE ON MAH PHONE` and then, twelve seconds later, fires back `but lets not talk about *your* spelling`. The immediate context makes Rummy the probable target of the counterpunch even though that second line is not a structured Reply.",
    href: "/characters/rummy",
  });

  allCharacters[eosIndex] = {
    ...eos,
    logline:
      "Low-word, high-consequence regular: Eos can understand a whole plan from one look, get roasted and return fire twelve seconds later, or announce herself as a `dead corpse` and keep the corpse bit alive after everybody joins in. She can sound theatrically defeated while still co-authoring the joke.",
    tags: appendUnique(eos.tags, [
      "Shared-context shorthand",
      "Counter-roast",
      "Self-prosecution",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(eos.quotes, [
      "No comment:SpidySip:",
      "o, yes:Boi_huahua:",
      "IT WORSE ON MAH PHONE",
      "but lets not talk about *your* spelling",
      "so tired that i am a **dead corpse**:Cozy_Cry:",
      ":Molang_Sleep: this ded corpse always around for the taking",
      "gonna just put myself here and head out-",
    ]),
    claims: appendUnique(eos.claims, [
      "Across 2021-09-07, 2021-12-09, and 2022-09-05, Rich/Ricochet repeatedly cues Eos with minimal setup and she immediately co-signs the bit, supporting a recurring low-bandwidth shared-context rhythm.",
      "On 2022-12-15 Rummy mocks Eos's spelling; Eos self-owns with `IT WORSE ON MAH PHONE` and twelve seconds later counters `but lets not talk about *your* spelling`.",
      "On 2021-05-02 Eos calls herself a `dead corpse`; after Mugen and Gabu explicitly reply into the corpse joke, Eos returns with `this ded corpse always around for the taking` instead of retreating from the bit.",
      "On 2021-06-07 Eos self-starts a Wall post with `gonna just put myself here and head out-`, reinforcing a recurring mock-surrender / active-authorship pattern rather than a passive-only Wall-target role.",
    ]),
    antiFanon: appendUnique(eos.antiFanon, [
      "Rich/Eos co-signing is comfortable shared-context comedy, not romance or a formal enforcer role.",
      "Rummy is the probable referent of `your` in the spelling counterpunch from immediate context, but the second Eos line is not a structured Reply and is not upgraded to mechanical certainty.",
      "Eos's corpse language is joke/exhaustion language, not literal death or harm; Mugen/Gabu joining the bit does not establish romance or violence.",
      "The `dead_corpse.png` and `Untitled.png` attachments are POSTED BY Eos only here. Their pixels were not inspected, so MADE BY / CAPTURED BY / FEATURING remain unresolved.",
      "These support receipts are Wall chronology used to deepen Eos; they are not relabeled as direct Daycare dialogue.",
    ]),
  } as ExtendedCharacter;

  characterById.set("eos", allCharacters[eosIndex]);
}
