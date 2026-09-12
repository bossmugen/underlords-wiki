import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  addition: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === addition.name);
  if (index >= 0) relationships[index] = addition;
  else relationships.push(addition);
};

const nelphId = "nelph";
const nelphIndex = allCharacters.findIndex((character) => character.id === nelphId);
if (nelphIndex < 0) {
  throw new Error("Expected canonical Nelph owner; refusing to recreate Nelph from a source slice");
}

const nelph = allCharacters[nelphIndex] as ExtendedCharacter;
const relationships = [...(nelph.relationships ?? [])];

upsertRelationship(relationships, {
  name: "ShiyaX",
  note:
    "Across three 2021 Wall dates, Nelph repeatedly files ShiyaX into the room and ShiyaX answers with denial/alibi theater. The comfortable recurring filer/defendant rhythm reads like an established teasing lane, not literal account compromise or a relationship rank.",
  href: "/characters/shiyax",
});

upsertRelationship(relationships, {
  name: "Mugen",
  note:
    "In Officer-room work Mugen can hand Nelph a missing-information problem—ask for screenshots or another detail—and Nelph comes back with what is already requested, what is still missing, and what happens next. The useful texture is low-drama operational trust rather than hierarchy theater.",
  href: "/characters/mugen",
});

upsertRelationship(relationships, {
  name: "Ansun",
  note:
    "Souta/Ansun explicitly thanks Nelph for collecting the information, then asks whether the room should act or wait. Nelph recommends waiting until everybody has read it before moving; the exchange treats her as somebody holding enough of the thread to answer the process question.",
  href: "/characters/ansun",
});

upsertRelationship(relationships, {
  name: "LuCiel",
  note:
    "In 2023 LuCiel casually says they asked Nelph for a server invite. It is a small later callback to Nelph as a reachable bridge: somebody knew who to ask without turning that into a formal office or authority claim.",
});

allCharacters[nelphIndex] = {
  ...nelph,
  aliases: appendUnique(nelph.aliases, ["N E L P H", "Nelphie"]),
  logline:
    "Retired Officer whose soft delivery hides a stubborn procedural streak: Nelph can `^^` through collecting missing details, tell a room to read before acting, map event windows, volunteer to be reachable, then turn around and prosecute ShiyaX on the Wall or join a fake cookie business in three messages.",
  tags: appendUnique(nelph.tags, [
    "Retired Officer",
    "HQ",
    "Careful relay",
    "Recruitment contact",
    "Wall",
    "Receipt filing",
    "Deadpan bit extension",
    "Tarot",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(nelph.quotes, [
    "Caught you in 4K 📷",
    "Support your local business 😌",
    "AKA me and koi",
    "I think we should wait for everyone to have read it before we move forward",
    "That’s my opinion though",
    "I’m also ok with being a contact!",
    "I’m active in both ^^",
    "I love tarot reading :Raja_Heart:",
  ]),
  claims: appendUnique(nelph.claims, [
    "Nelph's surviving Wall footprint is small but coherent: repeated receipt-staging behavior sits beside a much calmer deadpan register when she joins somebody else's nonsense.",
    "On August 6, 2021, Nelph frames ShiyaX with `didn’t know you were into that-`; ShiyaX replies that the image is an edit, and Nelph answers the denial with `Caught you in 4K 📷` before ShiyaX exits by emote. October and November produce more filing/denial pockets between the same two people.",
    "On November 19, 2021, Mercy's cookie-business bit gets an almost frictionless Nelph extension: `😌`, then `Support your local business 😌`, then `AKA me and koi`. The deadpan register complicates the louder caught-you prosecutor voice rather than replacing it.",
    "In early-November 2021 Officer work, Nelph repeatedly separates received information from missing information, has already requested supporting material when Mugen asks for it, keeps the room updated, preserves unresolved gaps, and says everybody should read before the group moves forward. The private third-party matter itself stays out of the public dossier; the reusable character fact is the careful relay behavior.",
    "On November 18, 2021, Nelph reasons through overlapping game-event windows, makes a concrete scheduling recommendation, softens ownership with `That’s my opinion though`, then checks whether the remaining window actually fits the activities. Gentle wording and procedural follow-through coexist instead of canceling each other out.",
    "On November 22, 2021, Nelph volunteers to be a recruitment contact and says `I’m active in both ^^` when Mugen asks whether volunteers are reachable in game, Discord, or both. It is enacted connector behavior inside an availability-dependent contact list.",
    "When real-life demands require a break later that month, Nelph gives the room advance notice rather than making people reverse-engineer a disappearance. Private details stay omitted; the public character beat is the same relay instinct appearing at the boundary of absence.",
    "In June 2023, LuCiel says they saw the server emotes and asked Nelph for an invite. The line keeps Nelph's reachable-bridge reputation alive across time without creating a formal recruiter/admission claim.",
    "Tiny ordinary-life file: Nelph says `I love tarot reading :Raja_Heart:` in October 2021.",
  ]),
  antiFanon: appendUnique(nelph.antiFanon, [
    "Nelph's Wall attachments in this packet are POSTED BY Nelph only. The underlying images remain uninspected; do not assign maker, capturer, subject, or visual contents from the surrounding jokes.",
    "ShiyaX's account/alibi wording is joke-defense in the Wall context. It does not establish literal account access, account compromise, or who may have used an account.",
    "The recurring Nelph–ShiyaX teasing lane supports familiarity in this public room; it does not establish off-Wall closeness, romance, hierarchy, or a formal moderation/prosecution role.",
    "The privacy-sensitive November Officer matter is not a public incident. Keep third-party allegations and identifying/sensitive details out of Nelph's dossier; only Nelph's process behavior is reusable.",
    "Private personal details from Nelph's November 2021 leave notice stay omitted. Advance notice of a real-life-driven break is the public-safe character beat.",
    "LuCiel saying they asked Nelph for an invite does not prove Nelph performed formal admission, assigned roles, or held a permanent recruiter office.",
    "The recruitment-contact opt-in was availability-dependent and does not create permanent appointment chronology.",
    "`I love tarot reading` is a clean taste fact, not grounds for a broader religion, spirituality, nationality, or background inference.",
  ]),
} as ExtendedCharacter;

characterById.set(nelphId, allCharacters[nelphIndex]);
