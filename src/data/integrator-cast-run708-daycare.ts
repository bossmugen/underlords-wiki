import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index < 0) {
    relationships.push(incoming);
    return;
  }

  const current = relationships[index];
  relationships[index] = {
    ...current,
    ...incoming,
    note: current.note.includes(incoming.note) ? current.note : `${current.note} ${incoming.note}`,
    href: current.href ?? incoming.href,
  };
};

// Run 708 Daycare support sweep: the promoted material is Wall evidence for Eos,
// not Daycare dialogue. The cumulative mechanism is more useful than any one filing:
// Eos can hate being exposed, participate anyway, and ship the apology with the crime.
const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex >= 0) {
  const eos = allCharacters[eosIndex] as ExtendedCharacter;
  const relationships = [...(eos.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Rummy",
    note:
      "In March 2023 Eos posts a Wall exhibit at Rums with `sorry rums i had to`; Rummy true-replies `I-`. The apology lands as social cushioning around a deliberate tease, not a romance claim or closeness ranking.",
    href: "/characters/rummy",
  });

  allCharacters[eosIndex] = {
    ...eos,
    logline:
      "Low-ceremony, high-consequence regular whose conscience often arrives inside the joke: Eos can protest being exposed, become the person doing the exposing four minutes later, and repeatedly file the betrayal with some version of `i had to, im sorry`. The restraint is real. So is the complicity.",
    tags: [
      ...new Set([
        ...(eos.tags ?? []),
        "Wall",
        "Guilty accomplice",
        "Apologetic snitch",
        "Social cushioning",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(eos.quotes ?? []),
        "i said dont look",
        "Take zhenyan",
        "i had to, im sorry",
        "sorry rums i had to",
      ]),
    ],
    claims: [
      ...new Set([
        ...(eos.claims ?? []),
        "Across 2021–2023 Wall scenes Eos repeatedly pairs exposure with immediate conscience-language. In June 2021 `i said dont look` is followed about four minutes later by Eos filing material themself; in September 2022 `i had to, im sorry` follows the offense by 5.91 seconds; in March 2023 `sorry rums i had to` accompanies another filing. The useful person read is privacy-sensitive defendant plus guilty repeat accomplice: the apology is part of how Eos marks the hit as play instead of pretending innocence.",
        "Eos's Wall restraint is therefore not abstinence. They can dislike being the exhibit, hesitate before filing somebody else, apologize while doing it, and still understand Screenshot Court well enough to participate from either chair.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(eos.antiFanon ?? []),
        "Run 708's promoted Eos receipts come from the Wall support transcript, not Daycare; do not relocate the quoted dialogue into Daycare merely because the Daycare miner surfaced it.",
        "`i had to, im sorry` / `sorry rums i had to` are recurring joke-shaped apology phrases in these public teasing scenes. They do not establish literal distress, blanket consent to exposure, or a universal private boundary.",
        "The attached Wall images remain POSTED BY Eos only where Eos posted them. Their pixels were not inspected for this integration, so MADE BY / CAPTURED BY / FEATURING remain unresolved.",
        "Rummy's direct `I-` reply supports one explicit target-response pocket; it is not a ranked closeness claim, romance claim, or relationship-origin marker.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("eos", allCharacters[eosIndex]);
}
