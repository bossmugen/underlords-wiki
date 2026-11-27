import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const rookieId = "rookie-cookie";
const rookieIndex = allCharacters.findIndex((character) => character.id === rookieId);

const rookieCharacter: ExtendedCharacter = {
  id: rookieId,
  name: "Rookie Cookie",
  aliases: [".poogie.", "RookieCookie", "poogie.", "poogystyle"],
  billing: "legacy",
  role: "Wall cast",
  era: "2022",
  logline:
    "Rookie Cookie can complain about being put on trial, start editing the prosecution's grammar, deny the existence of chat history, and then voluntarily hand the room fresh material. The recurring trick is not simple innocence or embarrassment; it is trying to control the wording of the story while remaining extremely willing to participate in it.",
  tags: [
    "Archive cast",
    "Wall",
    "2022",
    "Self-exposure",
    "Mock innocence",
    "Context games",
    "Language policing",
    "Ermany",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Ermany",
      note:
        "Ermany is Rookie Cookie's clearest recurring Wall partner in this slice. They save each other's lines, threaten to file each other, deny and revive old chat history, trade `no u` defenses, and keep returning to the same shipping/context allegations. The rhythm is reciprocal nuisance with unusually good record awareness: each seems to know the other may preserve the sentence currently being typed.",
    },
    {
      name: "PoopPoot",
      note:
        "PoopPoot can tee up the existing Rookie/Ermany joke with `Not Kissing Ermany?`; Rookie answers by insisting both faces are free from each other's presence, and Ermany immediately agrees. PoopPoot functions here as the room member who knows the bit well enough to activate it in one line.",
    },
    {
      name: "Puppy",
      note:
        "Puppy joins a November filing with `erm ur fired`; Rookie asks why instead of leaving the scene, then keeps reading and commenting on Ermany's display-language choices. Even mock dismissal becomes another conversational doorway rather than an exit.",
    },
  ],
  quotes: [
    "no u arent",
    "There is no chat history",
    "Man, that’s sentence errors",
    "No. Both our faces are free from each other’s presence.",
    "Just wanna point out that she uploaded the same image twice.",
    "Ummmmmmmmm. I swear I can explain.",
  ],
  claims: [
    "Stable author ID 351855010832793610 appears across the 2022 Wall under display/handle variants including Rookie Cookie, RookieCookie, .poogie., poogie., and poogystyle; this dossier keeps those variants in one owner.",
    "Across the recovered 2022 Wall slice, Rookie repeatedly shifts between being filed, filing themself, mock-defending the record, and commenting on what other people have or have not preserved. The recurring behavior is archive awareness plus participation, not simple reluctance to be seen.",
    "Ermany recurs as the strongest relationship lane in this source family: the pair threaten to save each other's lines, argue over context/chat history, trade shipping-allegation jokes, and correct or resist each other's wording without the exchange collapsing.",
    "On 2022-10-24 Rookie greets Ermany with a mock `killer of gods` trial; Ermany says `Oh Im saving this` and later `shame`, while Rookie answers `no u arent`, showing both the competitive filing bit and awareness that the room is preserving material in real time.",
    "On 2022-09-19 Rookie answers Ermany's shipping-allegation tease with reaction language, grammar corrections, `There is no chat history`, and `Lies`; Ermany counters that they have a sorry file of interactions. The scene supports a shared joke about the record itself rather than a literal romance claim.",
    "On 2022-11-06 PoopPoot asks `Not Kissing Ermany?`; Rookie replies `No. Both our faces are free from each other’s presence.` and Ermany answers `true`. The exchange is retained as reciprocal teasing/context play, not literal romance or sexual evidence.",
    "Rookie also self-exposes and audits the room's material: they point out duplicate image uploads, compare who has which pictures, and end 2022 with `Ummmmmmmmm. I swear I can explain.` before noticing a Christmas tree in the background.",
  ],
  antiFanon: [
    "Rookie Cookie, RookieCookie, .poogie., poogie., and poogystyle are tied here through stable author ID 351855010832793610. Do not merge unrelated similar names without a direct bridge.",
    "The Ermany shipping/kissing language is recurring room teasing and archive-aware banter. It does not establish literal romance, sex, dating, or a closeness rank.",
    "Response-circle counts are useful only as recurrence texture in this source family. They are not converted into popularity, intimacy, best-friend, or importance rankings.",
    "A 2022 source-local query found no qualifying Rookie-authored parent entries containing .gif or Tenor/Giphy in Contents; that is not a whole-person `never uses GIFs` trait because replies, reactions, other rooms, and unqueried material remain outside the route.",
    "No fresh role or governance chronology is inferred from this Wall slice or export-time role arrays.",
    "Attachment rows remain POSTED BY Rookie Cookie unless separate material establishes MADE BY, CAPTURED BY, or FEATURING; no image pixels were inspected for this integration.",
    "Reaction rows remain reactions rather than authored prose, and temporal adjacency is not converted into synthetic Discord Reply edges.",
  ],
};

if (rookieIndex >= 0) {
  const current = allCharacters[rookieIndex] as ExtendedCharacter;
  allCharacters[rookieIndex] = {
    ...current,
    ...rookieCharacter,
    aliases: appendUnique(current.aliases, rookieCharacter.aliases ?? []),
    tags: appendUnique(current.tags, rookieCharacter.tags ?? []),
    quotes: appendUnique(current.quotes, rookieCharacter.quotes ?? []),
    claims: appendUnique(current.claims, rookieCharacter.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, rookieCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(rookieCharacter);
}

characterById.set(rookieId, allCharacters.find((character) => character.id === rookieId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(rookieId)) {
  archiveCastGroup.characterIds.push(rookieId);
}
