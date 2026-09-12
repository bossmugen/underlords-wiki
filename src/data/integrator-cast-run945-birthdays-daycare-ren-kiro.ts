import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 945 late-tail integration. Ren's Kahoot packet is a compact operations repair
// scene; Kiro's Daycare/Wall packet turns a tiny direct-room footprint into a coherent
// anti-defensive humor read. MAIN deliberately waits rather than manufacturing narrow
// receipt paragraphs where the person-level biographies already need broader synthesis.

const renIndex = allCharacters.findIndex((character) => character.id === "ren");
if (renIndex < 0) {
  throw new Error("Run 945 expected canonical Ren / RV owner; refusing to create a duplicate.");
}

const ren = allCharacters[renIndex] as ExtendedCharacter;
allCharacters[renIndex] = {
  ...ren,
  tags: appendUnique(ren.tags, ["Kahoot", "Event operations", "Public repair"]),
  quotes: appendUnique(ren.quotes, [
    "Kahoot challenge is OPEN UWUWUWU!!!",
    "Cause I’m ✨ dumb ✨",
    "Here is the poster with the right code",
  ]),
  claims: appendUnique(ren.claims, [
    "On August 7, 2021 Ren launches a spelling Kahoot in announcements with `Kahoot challenge is OPEN UWUWUWU!!!`; 3 hours 48 minutes later she comes back with `Cause I’m ✨ dumb ✨` and `Here is the poster with the right code`. The useful character beat is public repair without an apology pageant: she makes herself the joke just enough to take the sting out of the mistake, then supplies the corrected material and keeps the event moving.",
  ]),
  antiFanon: appendUnique(ren.antiFanon, [
    "Ren is POSTED BY for the August 7 Kahoot launch attachment and says she has the corrected poster. This does not establish that she designed, edited, captured, or appears in either graphic.",
    "The August 7 spelling Kahoot is not UL's Kahoot origin: surviving announcements already contain an earlier July 2021 Kahoot-style challenge. Earliest surviving is not guaranteed origin.",
    "The readable text does not recover the wrong or correct code, the cause of the error, or a formal PR appointment. Do not reconstruct any of those from the correction scene.",
  ]),
} as ExtendedCharacter;
characterById.set("ren", allCharacters[renIndex]);

const kiroIndex = allCharacters.findIndex((character) => character.id === "kiro");
if (kiroIndex < 0) {
  throw new Error("Run 945 expected canonical Kiro owner; stable account 754128584498610178 must not become a duplicate character.");
}

const kiro = allCharacters[kiroIndex] as ExtendedCharacter;
const kiroRelationships = [...(kiro.relationships ?? [])];

upsertRelationship(kiroRelationships, {
  name: "Gilli",
  note:
    "Gilli gets unusually easy teasing permission with Kiro. She can follow up on his publicly announced petty attempt with `DID YOU GET IT?`, receive the defeated `No 😭`, and later post `Rip Kiro, he will be missed.` Kiro does not retreat from either bit; he answers the mock obituary by @mentioning Gilli and supplying a snow-diving/crash GIF of his own. The rhythm reads as comfortable comic permission, not hostility.",
  href: "/characters/gilli",
});

upsertRelationship(kiroRelationships, {
  name: "Dayadream",
  note:
    "When Dayadream asks whether the account currently displayed as `HicUUOOOOGH` is Kiro, Kiro deadpans `Who's kiro` instead of helping with the name confusion. Dayadream's `i cant keep track anymore 🤣😭` is basically the punchline: the display name moved; the room still knows the person.",
  href: "/characters/daya",
});

allCharacters[kiroIndex] = {
  ...kiro,
  description:
    "Kiro is much louder socially than his tiny direct-Daycare message count suggests. Across late 2022 and early 2023 he keeps landing in the same kind of scene: announces `Being petty`, later admits the attempt failed with `No 😭`; gets mock-obituaried by Gilli and answers with slapstick; gets his current display name mapped back to Kiro and replies `Who's kiro`. The consistent move is refusing to defend his dignity. If the room catches, renames, or lightly humiliates him, Kiro tends to help the joke survive.",
  logline:
    "Low-volume, highly legible, and catastrophically uninterested in saving face: Kiro keeps getting turned into the bit and then quietly helping prosecute himself.",
  tags: appendUnique(kiro.tags, [
    "Daycare",
    "Wall",
    "Deadpan",
    "Comfortable teasing",
    "Petty Crimes",
  ]),
  relationships: kiroRelationships,
  quotes: appendUnique(kiro.quotes, ["Being petty", "No 😭", "Who's kiro"]),
  claims: appendUnique(kiro.claims, [
    "Kiro's direct Daycare ledger is tiny, but the surrounding support-room chronology is socially dense. Gilli follows up on his petty stunt, the room can mock-obituary him, and Dayadream recognizes the person while losing track of the display name. The contradiction is useful: very little authored volume, plenty of social legibility.",
    "The recurring humor is anti-defensive. Kiro publicly labels his own stunt `Being petty`, later reports that it did not work, answers a mock funeral with a physical-comedy GIF instead of a denial, and responds to alias confusion with `Who's kiro`. Different joke, same willingness to leave embarrassment usable.",
  ]),
  antiFanon: appendUnique(kiro.antiFanon, [
    "Kiro's stable account is 754128584498610178. Dayadream explicitly maps that account, then displayed as `HicUUOOOOGH`, back to Kiro in-scene; this is not a same-name inference and does not create a second person.",
    "The October 2022 `Being petty` attachment is POSTED BY Kiro only. Its pixels were not used, so do not invent what the image depicts or assign maker/capture/subject credit.",
    "Gilli's mock-obituary attachment is POSTED BY Gilli. Kiro's GIF response supports comfortable teasing; it does not establish literal death, hostility, romance, or family status.",
    "`kiro is so cool` was SAID BY a Deleted User. Kiro's stable ID appears as a reaction actor only; do not convert REACTED BY into authorship.",
  ]),
} as ExtendedCharacter;
characterById.set("kiro", allCharacters[kiroIndex]);
