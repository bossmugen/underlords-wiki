import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex >= 0) {
  const torr = allCharacters[torrIndex] as ExtendedCharacter;
  const relationships = [...(torr.relationships ?? [])];

  if (!relationships.some((relationship) => relationship.name === "Rummy")) {
    relationships.push({
      name: "Rummy",
      note:
        "Torr can recruit Rummy as a witness while deliberately making an already-ambiguous Wall bit worse, then later defend her by charging her with exactly one offense: `the overuse of the semi colon`. Rummy answers the punctuation prosecution with `:EmoJi_stupid:`. Comfortable roast traffic, not conflict.",
      href: "/characters/rummy",
    });
  }

  if (!relationships.some((relationship) => relationship.name === "Tae")) {
    relationships.push({
      name: "Tae",
      note:
        "Torr calls Tae `the trouble maker` because he says Tae saved a `completely ambiguous comment` he had tried to delete. His next move is to re-post `totally ambiguous` himself, so the complaint and the collaboration become the same joke.",
      href: "/characters/tae",
    });
  }

  const claims = [
    "On 2022-09-28 Torr answers Gilli's screenshot summons with `that can be taken out of context XD`; on 2022-10-01 he explicitly asks why he writes so many context-strippable things when Gilli is around. That sharpens his existing Gilli lane into anticipatory receipt-awareness: he recognizes the hazard and keeps participating.",
    "On 2022-10-24 Torr says Tae saved a `completely ambiguous comment` he had tried to delete, then immediately re-posts `totally ambiguous` and recruits Rummy with `right? ... hehehe`. Wanting the transcript corrected does not stop him from making the transcript funnier.",
    "On 2023-06-02 Torr posts `microsoft didn't spell chk their daily poll.` while accusing Microsoft of failing to spell-check a poll. The screenshot pixels were not inspected; the safe person-level joke is Torr's own `spell chk` self-own while policing somebody else's copy.",
  ];

  const antiFanon = [
    "Gilli's 2022-09-28 screenshot is POSTED BY Gilli only. Its maker, capturer, depicted people, and exact contents remain unresolved without pixel inspection.",
    "Torr's 2023-06-02 Microsoft screenshot is POSTED BY Torr only. The public text supports Torr's claim that the poll had a spelling issue, not the screenshot's unseen exact error.",
    "Torr's context and punctuation habits support a recurring language-awareness joke; they do not establish a professional editing role, global grammar rigidity, or inability to spell.",
  ];

  allCharacters[torrIndex] = {
    ...torr,
    tags: [
      ...new Set([
        ...(torr.tags ?? []),
        "Context collapse",
        "Receipt awareness",
        "Copy-edit self-own",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(torr.quotes ?? []),
        "that can be taken out of context XD",
        "why do right so many things that can be taken out of context when @New Account Gilli#3226 is around",
        "totally ambiguous",
        "microsoft didn't spell chk their daily poll.",
      ]),
    ],
    claims: [...new Set([...(torr.claims ?? []), ...claims])],
    antiFanon: [...new Set([...(torr.antiFanon ?? []), ...antiFanon])],
  } as ExtendedCharacter;

  characterById.set("torr", allCharacters[torrIndex]);
}
