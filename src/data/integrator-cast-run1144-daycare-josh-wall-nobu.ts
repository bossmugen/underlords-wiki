import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const joshuaId = "joshua-israel";
if (!allCharacters.some((character) => character.id === joshuaId)) {
  const joshua: ExtendedCharacter = {
    id: joshuaId,
    name: "Joshua Israel",
    aliases: ["Josh", "Joshua"],
    billing: "legacy",
    role: "UL member",
    era: "2019–2021+",
    logline:
      "Banter lawyer, screenshot-aware defendant, and one of the rare people who can issue a full `fake news` denial, lose to the receipt, and immediately laugh and admit he was wrong.",
    tags: [
      "Archive cast",
      "Daycare",
      "Screenshot Court",
      "Banter",
      "JLOH",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "JLOH",
        note:
          "Josh and JLOH were already a relationship pair by August 24, 2019. Later Daycare `simp` jokes work because the room recognizes that attachment; they are recurring teasing, not the relationship's origin or a license to invent private sexual detail.",
      },
      {
        name: "Treva",
        note:
          "Treva revives the JLOH `simp` prosecution in September 2021. Josh answers with `Fake news is upon us` and `Nobody listens to trevs fake news`, then changes course cleanly once the screenshot lands: `Hahaha ok I always admit when I was wrong`.",
      },
      {
        name: "Mugen",
        href: "/characters/mugen",
        note:
          "When Josh tries to negotiate a technical exception to the room's `simp` charge, Mugen compares the supposed loophole to a GameShark cheat code. Their beat is less accusation-versus-defense than everybody enjoying how seriously Josh is pretending to litigate the wording.",
      },
    ],
    quotes: [
      "i think raja has a built in meme generator or something",
      "not so much photo as just screenshots lool",
      "sleeping is for the weak",
      "sorry i went to sleep",
      "Fake news is upon us",
      "Hahaha ok I always admit when I was wrong",
      "I'm muting screenshots 2022",
    ],
    claims: [
      "Stable Discord account 395715756262981634 carries Joshua / Joshua Israel in the reviewed Daycare handoff.",
      "Josh and JLOH are canonically already a relationship pair by 2019-08-24; later 2019 meetup/visit language is not their relationship origin.",
      "On 2020-04-05, after Noether uses the JLOH `simp` joke, Josh tries to negotiate a technical exception; Gabu tells him there are no rules and Mugen compares the loophole to a GameShark cheat code.",
      "On 2020-04-25 Josh describes his photography in the room as `not so much photo as just screenshots lool`; on 2020-05-13 he asks whether screenshots were taken, making receipt-awareness part of his own vocabulary before later screenshots are used against him.",
      "On 2020-05-01 Josh says `sleeping is for the weak` and later returns with `sorry i went to sleep`.",
      "On 2021-09-04 Josh answers Treva's renewed JLOH joke with `Fake news is upon us` and `Nobody listens to trevs fake news`; after a screenshot appears, he says `Hahaha ok I always admit when I was wrong` and jokes that he is muting screenshots in 2022.",
      "On 2021-10-13 Josh says he definitely does not want to play New World, brushes past another `simp` jab, and folds the same vocabulary into practical joke-advice with `let him miss you` / `aids in the simping`.",
    ],
    antiFanon: [
      "Do not infer Joshua's identity from similar names; this dossier belongs to stable Discord account 395715756262981634.",
      "The room's repeated `simp` language is social teasing around an already-established Josh/JLOH relationship. It does not establish relationship origin, sex-life detail, attraction chronology, or a literal social rank.",
      "The later 2019 `she made it in` / meetup language can support a visit or meetup only; it does not establish when Josh and JLOH began their relationship.",
      "Joshua's screenshot awareness does not make him a formal archivist, moderator, or Wall officer.",
      "Nearby screenshots remain attribution-bounded: POSTED BY, MADE BY, CAPTURED BY, and FEATURING are separate claims.",
      "First and last surviving messages in the reviewed handoff are archive boundaries, not Joshua's UL origin or departure.",
    ],
  };

  allCharacters.push(joshua);
  characterById.set(joshuaId, joshua);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(joshuaId)) {
    archiveCastGroup.characterIds.push(joshuaId);
  }
}

const nobuIndex = allCharacters.findIndex((character) => character.id === "nobu");
if (nobuIndex >= 0) {
  const nobu = allCharacters[nobuIndex] as ExtendedCharacter;
  const relationships = [...(nobu.relationships ?? [])];
  const jockoIndex = relationships.findIndex((relationship) => relationship.name === "Jocko Hywel");
  const jockoRelationship = {
    name: "Jocko Hywel",
    note:
      "An older Wall snapshot gets the compact Nobu caption `children`, followed by `Fiona~ <3`. It reads as affectionate old-club social memory, not literal parenthood; the surrounding image keeps its visual authorship/subject boundaries unless separately established.",
  };
  if (jockoIndex >= 0) relationships[jockoIndex] = jockoRelationship;
  else relationships.push(jockoRelationship);

  allCharacters[nobuIndex] = {
    ...nobu,
    tags: appendUnique(nobu.tags, ["Screenshot Court", "Competitive filing timing"]),
    relationships,
    quotes: appendUnique(nobu.quotes, ["Dang beat me", "children", "Fiona~ <3"]),
    claims: appendUnique(nobu.claims, [
      "In the reviewed Wall material, Nobu reacts to another person reaching a screenshot first with `Dang beat me`, a tiny but direct sign that filing timing itself can be part of the joke for her.",
      "An older Wall snapshot receives Nobu's `children` / `Fiona~ <3` captioning. The useful character read is affectionate old-club memory; `children` remains joke/meta language rather than literal biological-family evidence.",
      "Nobu later tracks candidacy/moderation fallout and participates in the forced-light-mode shame pocket, reinforcing her as both a receipt participant and somebody who can become part of the court's material herself.",
    ]),
    antiFanon: appendUnique(nobu.antiFanon, [
      "Nobu's `children` caption is joke/meta language around an old snapshot; it does not establish literal biological parenthood or family relation.",
      "The reviewed screenshot is bounded to the supported attribution. Do not convert POSTED BY into MADE BY, CAPTURED BY, or FEATURING without separate provenance.",
      "Competitive screenshot timing and Wall participation are social behavior, not a formal archive, moderation, or governance appointment.",
    ]),
  } as ExtendedCharacter;
  characterById.set("nobu", allCharacters[nobuIndex]);
}
