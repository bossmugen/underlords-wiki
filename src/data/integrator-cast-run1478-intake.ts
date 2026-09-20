import "./integrator-cast-run1477-intake";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);
const appendOnce = (base: string, addition: string, marker: string) => base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

// Wall: Crystalia is sparse in authored prose but conspicuously easy for other people to pull into the room's bits.
if (!allCharacters.some((candidate) => candidate.id === "crystalia")) {
  const crystalia: ExtendedCharacter = {
    id: "crystalia",
    name: "Crystalia",
    aliases: ["Crystalia^-^"],
    billing: "guest",
    role: "Archive-era Wall cast",
    era: "2021+",
    logline: "Almost no surviving Wall monologue, yet somehow repeatedly in the room anyway: Crystalia gets summoned into receipts, cast as UL's joke mermaid, and named in a dungeon-run filing with so little setup that everybody apparently already knows the assignment.",
    tags: ["Wall", "Sparse authorship", "Recurring-bit summon", "Group-receipt cast", "Petty Crimes"],
    stableDiscordIds: ["671496969646112769"],
    relationships: [
      {
        name: "Mugen",
        note: "Mugen can summon Crystalia with a bare tag after a receipt package and, one day later, cast her into `The Adventures of Phok the Pool Boy` as `UL's very own mermaid`. The comfort is in how little setup the joke needs; it is playful familiarity, not rank, governance, or a literal mermaid job.",
        href: "/characters/mugen",
      },
      {
        name: "Anthos",
        note: "Anthos later names Crystalia inside a `just another successful dungeon run` filing after posting screenshots. It is bounded group-gameplay inclusion: he expects her name to make sense in the scene without turning the uninspected images into invented visual facts.",
        href: "/characters/anthos",
      },
    ],
    quotes: ["Woah"],
    claims: [
      "Stable Discord account 671496969646112769 is Crystalia^-^ in the reviewed Wall material.",
      "The reviewed Wall export has four Crystalia occurrences: one authored `Woah` plus three direct mentions. The useful person read is minimal self-narration paired with repeated social recognizability to other people.",
      "Mugen directly summons Crystalia after one receipt package and later casts her as `UL's very own mermaid` in the Phok-the-Pool-Boy bit; Anthos separately names Crystalia in a `successful dungeon run` filing.",
    ],
    antiFanon: [
      "One surviving authored Wall line does not establish that Crystalia is globally quiet, shy, passive, or nonverbal.",
      "`UL's very own mermaid` is Mugen's joke casting, not a literal role, identity category, rank, family relation, or romance claim.",
      "The relevant attachment pixels were not inspected. POSTED BY remains distinct from MADE BY, CAPTURED BY, and visual FEATURING.",
      "The reviewed Wall pocket supports recurring social visibility, not a first-meeting date, friendship ranking, or origin claim.",
    ],
  };
  allCharacters.push(crystalia);
  characterById.set("crystalia", crystalia);
}

// Daycare: Daya's confidence is often funniest when she undercuts it herself a beat later.
const dayaIndex = allCharacters.findIndex((candidate) => candidate.id === "daya");
if (dayaIndex < 0) throw new Error("Run 1478 expected canonical Daya owner; refusing to create a duplicate person.");
const daya = allCharacters[dayaIndex] as ExtendedCharacter;
const dayaRelationships = [...(daya.relationships ?? [])];
upsertRelationship(
  dayaRelationships,
  "Sye",
  "When Sye answers a factual question with a bare `yes`, Daya's entire review is `the confidence`. It is a tiny social-read beat: she notices delivery as quickly as content and can make the room laugh without turning the exchange into a contest.",
  "the confidence",
  "/characters/sye",
);
allCharacters[dayaIndex] = {
  ...daya,
  logline: appendOnce(daya.logline, "Daycare also catches a scoreboard version of the same ease: she can flex a result, laugh about going to bed with the score, and then puncture her own authority with `I actually dont know all the pokemon shit` before anybody else has to.", "scoreboard version"),
  tags: appendUnique(daya.tags, ["Daycare scorekeeping", "Self-undercutting flex"]),
  relationships: dayaRelationships,
  quotes: appendUnique(daya.quotes, [
    "Ez 😁",
    "LMAO im just going to go bed with my score",
    "I got 10 out of 11",
    "I actually dont know all the pokemon shit",
    "the confidence",
  ]),
  claims: appendUnique(daya.claims, [
    "A November 2020 Daycare pocket shows Daya treating quiz scores as light social play: `Ez 😁`, `LMAO im just going to go bed with my score`, and `I got 10 out of 11` are followed by the self-puncture `I actually dont know all the pokemon shit`.",
    "On 2021-03-23 Sye answers a factual question with `yes`; Daya replies `the confidence`, a compact example of her noticing another person's delivery and turning it into a room beat.",
  ]),
  antiFanon: appendUnique(daya.antiFanon, [
    "A nearby `the twins are at it again` joke does not establish literal kinship, biological family, or a formal paired identity for Daya and Trigg.",
    "The quiz-score pocket is playful scorekeeping and self-deprecation, not a broad intelligence, expertise, competitiveness, or Pokemon-fandom claim.",
  ]),
} as ExtendedCharacter;
characterById.set("daya", allCharacters[dayaIndex]);

// Whiskey: preserve the room-name critique and peer-pressure-dad joke as humor, not roles or kinship.
const shiyaIndex = allCharacters.findIndex((candidate) => candidate.id === "shiyax");
if (shiyaIndex < 0) throw new Error("Run 1478 expected canonical ShiyaX owner; refusing to create a duplicate person.");
const shiya = allCharacters[shiyaIndex] as ExtendedCharacter;
allCharacters[shiyaIndex] = {
  ...shiya,
  logline: appendOnce(shiya.logline, "His dry commentary also includes a useful habit of naming the absurdity out loud: a joke `dad` status becomes `dad by peer pressure`, while Whiskey's old sniping-themed name gets dismissed with an `xD` because it had nothing to do with Whiskey.", "dad by peer pressure"),
  tags: appendUnique(shiya.tags, ["Dad by peer pressure", "Whiskey name critic", "Dry literalist"]),
  quotes: appendUnique(shiya.quotes, [
    "It was more dad by peer pressure",
    "The original name didn't make sense, it had something to do with sniping which had nothing to do with whiskey xD",
    "I am ;)",
  ]),
  claims: appendUnique(shiya.claims, [
    "ShiyaX describes one joke-family framing as `It was more dad by peer pressure`; the useful character beat is dry participation in the premise, not literal parenthood.",
    "ShiyaX says Whiskey's original name `didn't make sense` because it involved sniping `which had nothing to do with whiskey xD`; this is room-name commentary and does not make ShiyaX a Sniper.",
  ]),
  antiFanon: appendUnique(shiya.antiFanon, [
    "`dad by peer pressure` is joke-family language only. Do not turn it into biological/adoptive kinship, guardianship, romance, or a formal role.",
    "Mentioning that the old Whiskey name had something to do with sniping does not establish that ShiyaX was a Sniper or held recruitment authority; his hard role remains Caporegime only.",
  ]),
} as ExtendedCharacter;
characterById.set("shiyax", allCharacters[shiyaIndex]);

// Louvre: Shiki is a credited creator/entrant and a peer-hype participant, not only a subject or requester.
const shikiIndex = allCharacters.findIndex((candidate) => candidate.id === "shiki");
if (shikiIndex < 0) throw new Error("Run 1478 expected canonical Shiki owner; refusing to create a duplicate person.");
const shiki = allCharacters[shikiIndex] as ExtendedCharacter;
allCharacters[shikiIndex] = {
  ...shiki,
  logline: appendOnce(shiki.logline, "The Louvre adds the other side of Shiki's art presence: credited artist and entrant, but also the peer in the room yelling that somebody else's piece `goes hard as fuck` and `deserves top 5 at least`.", "credited artist and entrant"),
  tags: appendUnique(shiki.tags, ["Louvre", "Credited artist", "Gallery entrant", "Peer hype"]),
  quotes: appendUnique(shiki.quotes, [
    "Art goes hard as fuck",
    "deserves top 5 at least",
  ]),
  claims: appendUnique(shiki.claims, [
    "The October 2021 Louvre chronology includes explicit creator/entrant attribution for Shiki: Mugen posts `Artist: @ninjashiki`, an entrant list names Shiki, and `_Rooks Gallery Entry | By: @Shiki` appears on October 21.",
    "On October 19 Shiki reacts to another entrant's work with `Art goes hard as fuck` and `deserves top 5 at least`, making peer support part of the gallery-person read rather than reducing Shiki to subject/requester status.",
  ]),
  antiFanon: appendUnique(shiki.antiFanon, [
    "The October 2021 Louvre sequence is a surviving creator/entrant floor, not proof of Shiki's first Louvre appearance, first artwork, onboarding date, or gallery-eligibility origin.",
    "Credit as artist/entrant does not by itself establish ownership of every nearby attachment or identify visual subjects not explicitly attributed in text.",
  ]),
} as ExtendedCharacter;
characterById.set("shiki", allCharacters[shikiIndex]);
