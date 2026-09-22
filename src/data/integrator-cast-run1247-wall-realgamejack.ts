import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";
import "./integrator-cast-run1253-daycare-whiskey-wall";
import "./integrator-cast-run1256-daycare-whiskey";
import "./integrator-cast-run1264-daycare-wall";

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
  if (index >= 0) {
    const current = relationships[index];
    if (!current.note.includes(relationship.note)) {
      relationships[index] = {
        ...current,
        note: `${current.note} ${relationship.note}`,
        href: current.href ?? relationship.href,
      };
    }
  } else {
    relationships.push(relationship);
  }
};

// Run 1247 banked RealGameJack after one tiny social axis. The Run 1248 Wall
// tail supplies a materially different second axis: Jack actively recruits Mugen
// to file his own material and keeps pushing the filing through. Later Wall
// review adds repeat support for the media-first/context-matching side of the
// same person instead of creating another receipt-shaped dossier.
const jackId = "realgamejack";
const jackIndex = allCharacters.findIndex((character) => character.id === jackId);

const jackDayaRelationship = {
  name: "Daya",
  note:
    "Jack posts a Frederica / Eighty-Six reaction GIF; Daya directly replies `luv this anime`; less than a minute later Jack says `I knew you did`. The exchange is tiny but specific: Jack appears to have remembered or expected this one Daya preference. It is familiarity, not a closeness ranking.",
  href: "/characters/daya",
};

const jackMugenRelationship = {
  name: "Mugen",
  note:
    "Jack treats Mugen like somebody who already understands the Wall filing desk. He asks `Mugen couple you post smth for me`, gets `Got you`, supplies the image, then follows with `post it`, `Why not`, and `I don't care post it`. Ten days later he can greet another Mugen filing with `Probably the best post on the hall of shame`. The useful read is comfort with the ritual, not governance or friendship rank.",
};

const jackClaims = [
  "Jack's Wall register is tiny in prose but unusually good at letting reaction media do the sentence. The Eighty-Six/Frederica post draws Daya's `luv this anime` and Jack's `I knew you did`; four days later he contributes exactly `:SmileDog:` inside a GIF/emote pocket; on December 1 he is in the `Kermitslap` reaction membership on Daya's `last few coins` line and drops a coin/money Tenor 78 seconds later. The repeat pattern is contextual meme timing, not random media spam.",
  "On January 9-10, 2022, Jack actively self-files: he asks Mugen to post something for him, posts the image himself after Mugen agrees, then keeps escalating the request with `post it`, `Why not`, and `I don't care post it`. The joke is not embarrassment happening to him; he is trying to get the paperwork processed.",
  "On January 19, after Mugen posts another image, Jack calls it `Probably the best post on the hall of shame`. He is not merely a Wall defendant. He is an enthusiastic consumer of the institution and, when necessary, his own filing clerk.",
];

const jackAntiFanon = [
  "The screenshots in Jack's self-filing packet were not visually inspected. The public character read comes from Jack's authored request/escalation and Mugen's authored response; do not infer screenshot subject, maker, capturer, or featured people from adjacency.",
  "Daya's `luv this anime` is a direct reply to Jack's Eighty-Six/Frederica post. Jack's later `I knew you did` is contextual rather than a structured reply edge, so keep the remembered-taste read proportionate.",
  "The December 1 coin-drop beat is strong contextual uptake, not a structured Reply edge: Jack is preserved in the parent line's final reaction membership and posts the matching money/coin Tenor 78 seconds later. Keep it as repeat support for his scene-reading style, not a hard dyadic reply claim.",
  "Jack asking Mugen to post material shows familiarity with the Wall ritual. It does not establish staff authority, formal role hierarchy, romance, family, or a closeness rank.",
];

if (jackIndex >= 0) {
  const currentJack = allCharacters[jackIndex] as ExtendedCharacter;
  const relationships = [...(currentJack.relationships ?? [])];
  upsertRelationship(relationships, jackDayaRelationship);
  upsertRelationship(relationships, jackMugenRelationship);

  allCharacters[jackIndex] = {
    ...currentJack,
    tags: unique([
      ...(currentJack.tags ?? []),
      "Wall",
      "Self-filing",
      "Media-first",
      "Anime",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(currentJack.quotes ?? []),
      "I knew you did",
      ":SmileDog:",
      "post it",
      "I don't care post it",
      "Probably the best post on the hall of shame",
    ]),
    claims: unique([...(currentJack.claims ?? []), ...jackClaims]),
    antiFanon: unique([...(currentJack.antiFanon ?? []), ...jackAntiFanon]),
  } as ExtendedCharacter;

  characterById.set(jackId, allCharacters[jackIndex]);
} else {
  const jack: ExtendedCharacter = {
    id: jackId,
    name: "RealGameJack",
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2022",
    logline:
      "Sparse with words but not shy about steering the bit: Jack can remember one friend's anime taste, answer the room with a perfectly timed reaction image, recruit Mugen to post his own material, and then keep asking why the filing has not happened yet.",
    tags: [
      "Archive cast",
      "2022",
      "Wall",
      "Self-filing",
      "Media-first",
      "Anime",
      "Petty Crimes",
    ],
    relationships: [jackDayaRelationship, jackMugenRelationship],
    quotes: [
      "I knew you did",
      ":SmileDog:",
      "post it",
      "I don't care post it",
      "Probably the best post on the hall of shame",
    ],
    claims: jackClaims,
    antiFanon: jackAntiFanon,
  };

  allCharacters.push(jack);
  characterById.set(jackId, jack);
}

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(jackId)) {
  archiveCastGroup.characterIds.push(jackId);
}

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex < 0) {
  throw new Error("Run 1248 expected canonical Daya owner; refusing to create a duplicate.");
}

const daya = allCharacters[dayaIndex] as ExtendedCharacter;
const dayaRelationships = [...(daya.relationships ?? [])];
upsertRelationship(dayaRelationships, {
  name: "RealGameJack",
  note:
    "A tiny anime exchange gives Daya one clean ordinary-taste scrap: Jack posts an Eighty-Six/Frederica GIF, Daya directly replies `luv this anime`, and Jack follows with `I knew you did`. One remembered preference is enough; it is not a friendship ranking.",
  href: "/characters/realgamejack",
});

const staleJackHold =
  "RealGameJack remains a banked thin profile candidate from a complete four-message Wall footprint: three expressive media posts plus `I knew you did`. Do not manufacture a standalone Cast biography from that single social axis until another materially different person scene appears.";

allCharacters[dayaIndex] = {
  ...daya,
  tags: unique([...(daya.tags ?? []), "Eighty-Six", "Anime taste", "Petty Crimes"]),
  relationships: dayaRelationships,
  quotes: unique([...(daya.quotes ?? []), "luv this anime"]),
  claims: unique([
    ...(daya.claims ?? []),
    "Daya likes `86 / Eighty-Six`. RealGameJack posts a Frederica/Eighty-Six reaction GIF and Daya directly replies `luv this anime`; Jack's `I knew you did` follows less than a minute later, making the preference feel remembered by at least one peer without turning it into a guild-wide reputation.",
  ]),
  antiFanon: unique([
    ...(daya.antiFanon ?? []).filter((item) => item !== staleJackHold),
    "Daya's Eighty-Six preference is direct. RealGameJack apparently knowing it already is contextual rather than an encoded reply edge, and one exchange does not establish friendship rank, romance, or a server-wide known trait.",
  ]),
} as ExtendedCharacter;

characterById.set("daya", allCharacters[dayaIndex]);
