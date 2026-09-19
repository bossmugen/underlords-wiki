import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};
const extendRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) {
    const current = relationships[index];
    if (!current.note.includes(relationship.note)) {
      relationships[index] = {
        ...current,
        note: `${current.note} ${relationship.note}`,
        href: current.href ?? relationship.href,
      };
    }
  } else relationships.push(relationship);
};

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex < 0) {
  throw new Error("Run 1395 expected the canonical Torr owner; refusing to create a duplicate.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;
const relationships = [...(torr.relationships ?? [])];
const gilliIndex = relationships.findIndex((relationship) => relationship.name === "Gilli");

const gilliRelationship = {
  name: "Gilli",
  note:
    "Gilli becomes a recurring receipt hazard in Torr's own vocabulary. On September 28, 2022 she posts and summons him; Torr arrives laughing and immediately says the wording `can be taken out of context XD`. The pattern repeats into October: he asks why he writes so many things that can be taken out of context when Gilli is around, later admits `XD i'm giving a lot of material with this stream`, and finally jokes that he gets on the Wall a lot and blames Gilli's `bad influence`. It is a mutually legible filer/defendant rhythm built from repetition, not a closeness ranking or a claim about their entire relationship off the Wall.",
  href: "/characters/gilli",
};

if (gilliIndex >= 0) relationships[gilliIndex] = gilliRelationship;
else relationships.push(gilliRelationship);

const rummyRelationship = {
  name: "Rummy",
  note:
    "Torr can join a room-wide guilt bit by half-defending and half-roasting Rummy: `the only thing rummy guilty of is the overuse of the semi colon`. Thirty-six seconds later he notices his own `eglish` and turns the language policing back on himself; Rummy later directly replies to the semicolon line with `:EmoJi_stupid:`. The exchange is compact mutual teasing, not a closeness ranking.",
  href: "/characters/rummy",
};
const rummyIndex = relationships.findIndex((relationship) => relationship.name === "Rummy");
if (rummyIndex >= 0) relationships[rummyIndex] = rummyRelationship;
else relationships.push(rummyRelationship);

upsertRelationship(relationships, {
  name: "Gabu",
  note:
    "Gabu can judge Torr's Wall filing from inside the bit. On one of his own attachments she mechanically replies `this one dont count`, which lands less like a random reaction and more like somebody fluent enough in his receipt habits to grade the submission itself.",
  href: "/characters/gabu",
});

extendRelationship(relationships, {
  name: "Mugen",
  note:
    "Mugen can mechanically reply to one of Torr's own filings with `surprised ren did not post this LMAO`. She recognizes both the material and the filing grammar immediately; the useful read is shared Wall fluency, not a formal archive role.",
  href: "/characters/mugen",
});

const cleanedTorrClaims = (torr.claims ?? []).filter(
  (claim) => !/daycare-sm-professional-language-20260110|2026-01-10.*professional|professional.*2026-01-10/i.test(claim),
);

allCharacters[torrIndex] = {
  ...torr,
  tags: unique([
    ...(torr.tags ?? []),
    "Receipt-generator self-awareness",
    "Gilli context hazard",
    "Dry observation",
    "Self-own",
    "Absurdist humor",
    "Independent playstyle",
    "Anti-meta taste",
    "Literal deflection",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(torr.quotes ?? []),
    "why do right so many things that can be taken out of context when @New Account Gilli#3226 is around",
    "XD i'm giving a lot of material with this stream",
    "i get on here a lot. i blame @New Account Gilli#3226 bad influence.",
    "the only thing rummy guilty of is the overuse of the semi colon",
    "oh no the eglish has become normalized to me",
    "table kun fine\ni'm inside table kun where it's nice and warm",
    "I'd say intentionally playing with ugly gear since like beginning of season 2 at least",
    "We just have completely different enjoyment of the game",
    "Don't judge me",
    "I was taking out the trash",
    "trash bags",
    "Look i'm not online 90% of the time and I can't remember all the shades of red",
  ]),
  claims: unique([
    ...cleanedTorrClaims,
    "Late September through October 2022 turns Torr's context-awareness into a recurring self-observation rather than a single reaction. Gilli can post/summon him and get `that can be taken out of context XD`; Torr later explicitly wonders why he writes so many context-collapsible things when she is around, says he is giving the room material with his stream, and jokes that her bad influence is why he lands on the Wall so often. He can see the receipt-production mechanism while he is still feeding it.",
    "The repeated Gilli lane deepens an existing contradiction instead of replacing it: Torr dislikes having context collapse onto him, becomes fluent at spotting exactly how it happens, and eventually treats his own tendency to manufacture Wall material as part of the joke. The familiarity is social and recurring, not evidence of a formal role or an off-Wall relationship rank.",
    "The same dry self-awareness survives beyond the first Gilli receipt run. In January 2023 Torr prosecutes Rummy for `overuse of the semi colon`, then almost immediately catches his own `eglish` and makes himself the joke; Rummy later replies directly to the semicolon line. The snark lands lightly because Torr is willing to turn the knife around on himself.",
    "By May 2023 Torr can drop a lazy-anime GIF and announce that he is `inside table kun where it's nice and warm`; four people answer with the same stare reaction and Moon later directly `:BONKED:` the line. The room does not need an explanation before joining the nonsense, which adds absurdist room-fluency to the receipt-aware straight-man side of him.",
    "Same-account Daycare/Club support sharpens Torr's game taste: in 2021 he says he has been intentionally playing with ugly gear since at least season 2, and in 2023 answers a faction-competition comparison with `I do none of that` / `We just have completely different enjoyment of the game`. He is comfortable choosing his own fun over the room's aesthetic or competitive script.",
    "On 2024-01-24 Torr/DiStratus asks `Hmm are we trying to be professional?`; this is the clean same-account professional-language receipt. An older 2026-01-10 support line was authored by a different stable account and is not Torr evidence.",
    "A Wall defense compresses Torr's deadpan style into three beats: `Don't judge me`, `I was taking out the trash`, then the self-reply `trash bags`. Elsewhere he jokes that he is not online 90% of the time and therefore cannot remember every shade of red. Literal explanation and low-presence self-roast are both part of how he makes embarrassment smaller by making it funnier.",
    "Gabu can mechanically reject one of Torr's filings with `this one dont count`, while Mugen can mechanically answer another with `surprised ren did not post this LMAO`. Both exchanges support recurring Wall fluency around Torr's filing habits without inventing a formal archivist or prosecutor role.",
  ]),
  antiFanon: unique([
    ...(torr.antiFanon ?? []),
    "Gilli's repeated screenshot/summon rhythm and Torr's `bad influence` joke support recurring Wall familiarity; do not convert that into a best-friend ranking, romance, or a claim about their entire relationship outside the surviving scenes.",
    "Mr Streamer's 2022 `Via @DiStratus(Torr)` wording can support supplied-through attribution only. Without inspected pixels or independent provenance, it does not make Torr MADE BY, CAPTURED BY, or FEATURING for the screenshot.",
    "The semicolon/`eglish` and `table kun` material comes from Wall support used to deepen Torr's person profile; it is not relabeled as direct Daycare dialogue while the direct Daycare message body remains unreadable.",
    "Rummy's direct reply and Moon's `:BONKED:` support local joke uptake. Neither scene establishes friendship rank, romance, family, governance, or a formal social role.",
    "DiStratus / `_distratus` / Torr at stable Discord ID 235165611441856513 are one account; contemporaneous `IGN: Torr - OLD: Kyr` is an old-IGN field and does not merge Torr with a separate Kyr person.",
    "The one-character Daycare line `J` does not identify Zhēnxī or any other person by itself.",
    "The corrected 2024 professional-language line is Torr's own. Do not restore the older 2026-01-10 different-account line as Torr evidence.",
  ]),
} as ExtendedCharacter;

characterById.set("torr", allCharacters[torrIndex]);

const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex < 0) {
  throw new Error("Run 1395 expected the canonical Eos owner; refusing to create a duplicate.");
}

const eos = allCharacters[eosIndex] as ExtendedCharacter;
const eosRelationships = [...(eos.relationships ?? [])];
upsertRelationship(eosRelationships, {
  name: "Vanness",
  note:
    "Eos can turn Vanness into a character sketch while filing him: `rarest photos of vanness`, then `hes smiling in the second pic. he doesnt do that often`, then `permanent poker face yagit`. The joke works because she is not only posting an object; she is narrating the tiny exception she thinks makes it worth posting. Deca is also present in the packet, so the line stays an observation inside a mixed scene rather than a claim that every image is Vanness.",
  href: "/characters/vanness",
});
extendRelationship(eosRelationships, {
  name: "Mugen",
  note:
    "A Mabinogi puzzle pocket adds a quieter shared-interest aside: Eos mechanically replies `so she said`, then calls it `one of my favorite /u/ games`. Minutes later, when the room swings back toward shaming her, Eos answers `IT WASNT ME` and `that barely even counts`. She can move from game aside to courtroom defense without changing social gears.",
  href: "/characters/mugen",
});

allCharacters[eosIndex] = {
  ...eos,
  tags: unique([...(eos.tags ?? []), "Observational filing", "Favorite-game aside"]),
  relationships: eosRelationships,
  quotes: unique([
    ...(eos.quotes ?? []),
    "rarest photos of vanness.",
    "hes smiling in the second pic. he doesnt do that often.",
    "permanent poker face yagit",
    "one of my favorite /u/ games",
    "IT WASNT ME :kasumiShock2:",
    "that barely even counts.",
    "caught ya again",
  ]),
  claims: unique([
    ...(eos.claims ?? []),
    "A later Wall packet sharpens Eos's mock-prosecutor style into observation as well as accusation: while filing a mixed Vanness/Deca photo packet, she calls the Vanness shots rare, notices that he is smiling in one, and jokes that he usually has a permanent poker face. The humor is in the exception she notices, not merely the existence of a screenshot.",
    "In a Mabinogi puzzle pocket Eos mechanically replies into Mugen's line, then calls the game one of her favorites. Minutes later she is defending herself from renewed shame with `IT WASNT ME` and `that barely even counts`, preserving the established catcher/defendant contradiction across ordinary game talk and Screenshot Court.",
    "After a `dontchangeurname.png` filing Eos answers the room with `wow`, `wowow`, `i`, `huh` and keeps participating; in 2022 she mechanically replies to Marian's `caught ya again` with `?? :kuku_curse:`. Exposure does not make her leave the stage—it usually gives her another beat.",
  ]),
  antiFanon: unique([
    ...(eos.antiFanon ?? []),
    "The mixed Vanness/Deca packet supports Eos's posted observation about Vanness; do not claim every image depicts Vanness or upgrade POSTED BY into MADE BY, CAPTURED BY, or FEATURING without independent support.",
    "The Mabinogi line is a stated game preference inside one recovered pocket; it does not establish a permanent favorite ranking, professional game role, or account identity beyond the scene.",
  ]),
} as ExtendedCharacter;

characterById.set("eos", allCharacters[eosIndex]);
