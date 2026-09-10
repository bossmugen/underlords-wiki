import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex < 0) {
  throw new Error("Run 787 expected the canonical Torr owner; refusing to create a duplicate.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;
const relationships = [...(torr.relationships ?? [])];

const rummyIndex = relationships.findIndex((relationship) => relationship.name === "Rummy");
const rummyDeepening =
  "A September 2022 Daycare exchange makes the affection inside Torr's punctuation heckling especially obvious: he starts by saying he was going to defend Rummy, abandons the defense over one semicolon, calls her guilty only of `cri-imes against grammar`, then answers Ren's `There is the shame` with a heart and `Sorry Rummy XD`. The prosecution is reversible social play, not cold correction.";

if (rummyIndex >= 0) {
  const current = relationships[rummyIndex];
  if (!current.note.includes("cri-imes against grammar")) {
    relationships[rummyIndex] = {
      ...current,
      note: `${current.note} ${rummyDeepening}`,
    };
  }
} else {
  relationships.push({
    name: "Rummy",
    note: rummyDeepening,
    href: "/characters/rummy",
  });
}

if (!relationships.some((relationship) => relationship.name === "Ren")) {
  relationships.push({
    name: "Ren",
    note:
      "Ren can summon Torr directly when the room needs his particular brand of wording trouble: `@Torr you are needed 😂😂`. Minutes later she catches his grammar prosecution of Rummy with `There is the shame`, and Torr answers with a heart before apologizing to Rummy. Ren knows exactly what role he is about to play in the joke; this is social familiarity, not a formal editing assignment.",
    href: "/characters/ren",
  });
}

allCharacters[torrIndex] = {
  ...torr,
  tags: unique([
    ...(torr.tags ?? []),
    "Summonable copy-desk heckling",
    "Defense-to-prosecution pivot",
    "Warm nitpick",
  ]),
  relationships,
  quotes: unique([
    ...(torr.quotes ?? []),
    "I was gonna help defend you... and then you used a semi-colon instead of a comma. For shame 👀",
    "The only thing Rummy guilty of is cri-imes against grammar.",
    "Sorry Rummy XD",
  ]),
  claims: unique([
    ...(torr.claims ?? []),
    "On 2022-09-22/23 Torr is explicitly summoned by Ren, says he was going to defend Rummy, then flips into punctuation prosecution over one semicolon. After Ren calls the exchange `the shame`, Torr responds with a heart and `Sorry Rummy XD`. This sharpens the existing language-auditor read into affectionate, reversible heckling: correction is part of the room's play rather than social exile.",
    "Torr's `Nah, only in the officer chat. XD` is safe as observed room-language in this exchange. It must not be used to infer appointment chronology, formal officer tenure, or a governance title from an exporter-era label or a joke-adjacent remark.",
  ]),
  antiFanon: unique([
    ...(torr.antiFanon ?? []),
    "The 2022-09-22 `officer chat` wording does not establish when or whether Torr held any formal appointment. Keep appointment chronology independent from current/exported role arrays and room-language jokes.",
    "The separate `you definitely need to rephrase that message` line is not assigned to Rummy, Ren, or any other named target here because this reviewed handoff does not bind its referent tightly enough.",
  ]),
} as ExtendedCharacter;

characterById.set("torr", allCharacters[torrIndex]);
