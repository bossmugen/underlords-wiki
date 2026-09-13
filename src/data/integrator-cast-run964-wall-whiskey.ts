import { allCharacters, castGroups, characterById } from "./cast";
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

// Woohyuk / Rookie / 안순찰 is the existing canonical Ansun owner. Keep him
// completely separate from Rooks / Rookie Cookie / .poogie. and deepen the
// person instead of creating another near-name duplicate.
const ansunIndex = allCharacters.findIndex((character) => character.id === "ansun");
if (ansunIndex < 0) {
  throw new Error("Run 964 expected the canonical Ansun/Woohyuk owner; refusing to create a duplicate Rookie.");
}

const ansun = allCharacters[ansunIndex] as ExtendedCharacter;
const ansunRelationships = [...(ansun.relationships ?? [])];
upsertRelationship(ansunRelationships, {
  name: "Luna",
  note:
    "In a December 2020 Wall pocket, Woohyuk goes from `NOOO LUNA` into a likely same-scene reminder that she said that an hour ago and `please sleep`. The last two lines do not preserve a technical reply edge, so the recipient stays likely rather than absolute; socially, the pocket reads like light nagging care instead of a lecture.",
});
upsertRelationship(ansunRelationships, {
  name: "Yazaki",
  note:
    "Woohyuk directly tags Rosario17/Yazaki with a YouTube share in Whiskey on January 19, 2021. It is a small but chosen-recipient gesture: enough to show he sometimes sends media outward to a specific person, not enough to manufacture a closeness rank from one link.",
});

allCharacters[ansunIndex] = {
  ...ansun,
  logline:
    "Woohyuk—also Rookie/Ansun—is a willing Screenshot Court specimen with a surprisingly earnest center: he can classify everybody else's nonsense, check whether a running premise is real before repeating it, tell the room he loves them sincerely, and then immediately give the sincerity a clown exit so nobody has to stand there being solemn about it.",
  tags: unique([
    ...(ansun.tags ?? []),
    "Sincerity with a clown exit",
    "Affectionate absurdity",
    "Checks the premise",
    "Media sharing",
    "Petty Crimes",
  ]),
  relationships: ansunRelationships,
  quotes: unique([
    ...(ansun.quotes ?? []),
    "Love yall sincerely",
    "(from the person with the fattest ass) UwU",
    "Brush your teeth with chocolate, bathe in chocolate, drench yourself with chocolate. Happy Valentines ❤️",
    "Wait is panda color blind? Or yall just joking about he cant see colors",
    "Crave some shavee ice cream",
  ]),
  claims: unique([
    ...(ansun.claims ?? []),
    "Whiskey gives Woohyuk a consistent delivery habit beyond his Screenshot Court reputation: he says warm things directly, then often makes the landing ridiculous. His June 29, 2021 birthday thank-you moves from explicit appreciation and `Love yall sincerely` straight into a self-directed body joke and `UwU`; the joke lightens the moment without retracting the affection.",
    "The same warmth-through-escalation shows up on Valentine's Day 2021, when Woohyuk turns a normal holiday greeting into instructions to brush, bathe, and drench yourself in chocolate before wishing the room a happy Valentine's Day.",
    "On May 25, 2021 Woohyuk pauses over a Panda color-blindness premise and asks whether it is real or whether everybody is joking. That tiny check matters: he participates in bits freely, but does not automatically literalize the room's premise just because everybody else is running with it.",
    "Ordinary-life texture around the same Whiskey lane includes a shave-ice craving, probable Why Don't We enthusiasm around a `best group` media post, and caffeine chatter. These are tastes and scraps, not a complete lifestyle profile.",
    "Lobby pins the same stable account present by July 27, 2020. That is a presence point only; it does not establish join date or role chronology.",
  ]),
  antiFanon: unique([
    ...(ansun.antiFanon ?? []),
    "Woohyuk / Rookie / 안순찰 (Ansun), stable account 282643269438144513, is not Rooks / Rookie Cookie / .poogie. Similar Rookie-shaped names must not be merged.",
    "The `please sleep` pocket is likely directed at Luna from immediate scene chronology, but the surfaced final lines do not preserve a technical mention/reply edge. Keep the care read probable rather than turning adjacency into hard topology.",
    "A Why Don't We-referencing media filename plus `best group` supports probable enthusiasm, not an exhaustive favorite ranking or a claim that every later music share represents the same taste.",
    "`Single forever`, `i am pure`, `In corpse voice uwu`, and the birthday body joke are scene-level social texture. They are not stable relationship-status, identity, medical, or body claims.",
    "Woohyuk's direct presence by July 27, 2020 and the later `MUGEN LOCKED ME OUT` / VIP joke do not establish recruitment, join, promotion, demotion, or appointment chronology.",
  ]),
} as ExtendedCharacter;
characterById.set(allCharacters[ansunIndex].id, allCharacters[ansunIndex]);

// 影の戦士 has only two stable-ID Wall occurrences, but both are socially
// specific. The useful contradiction is tiny prose volume with confident,
// targeted participation—not a fake attempt to give two receipts a life epic.
if (!allCharacters.some((character) => character.id === "shadow-warrior")) {
  const shadowWarrior: ExtendedCharacter = {
    id: "shadow-warrior",
    name: "影の戦士",
    aliases: ["影"],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2020",
    logline:
      "影の戦士 barely leaves prose behind on Wall, yet the surviving scraps are oddly confident: a direct laugh-ping at Gilli and a later laugh reaction inside another room joke. Almost no words, zero hesitation about joining the chorus.",
    tags: ["Archive cast", "Wall", "Joke chorus", "Direct laugh-ping", "Ultra-thin footprint"],
    relationships: [
      {
        name: "Gilli",
        note:
          "On December 13, 2020 影 directly pings Gilli with a laughing emoji. Gilli says `XD` a little over two minutes later, making reciprocal joking acknowledgment probable from the adjacency; both later appear in the same final-state laugh-reaction membership. It is a tiny familiarity read, not a friendship tier.",
        href: "/characters/gilli",
      },
    ],
    quotes: ["@New Account Gilli#3226 😂"],
    claims: [
      "Within the assigned Wall source, 影の戦士 has exactly two stable-ID occurrences: one authored direct laugh-ping to Gilli and one final-state laugh reaction on Rookie's `Can’t have bro code if we aren’t bros` line.",
      "The contradiction is more useful than the message count: 影 is nearly wordless in surviving Wall prose, but the authored line is targeted rather than anonymous. The footprint is tiny; the social participation is not vague.",
    ],
    antiFanon: [
      "Gilli's adjacent `XD` is a probable acknowledgment of 影's direct ping, not a structured reply edge. Their surviving pocket supports bounded joking familiarity only, not a closeness or friendship rank.",
      "Gilli posted a screenshot almost twenty minutes before 影's ping, but there is no structured reply joining 影's line to that media and the screenshot was not visually inspected. Do not assign that screenshot as 影's referent or infer its contents.",
      "Reaction membership records final-state participation only. It does not reveal click time, pairwise closeness, or whether 影 and Gilli reacted for identical reasons.",
    ],
  };

  allCharacters.push(shadowWarrior);
  characterById.set("shadow-warrior", shadowWarrior);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("shadow-warrior")) {
    archiveCastGroup.characterIds.push("shadow-warrior");
  }
}

// The later Birthdays/PR/VC tail corrects the Kahoot lineage and Ren's own
// repair story. Remove the now-stale July-earliest claim before adding the
// stronger June chronology and the next-day second correction.
const renIndex = allCharacters.findIndex((character) => character.id === "ren");
if (renIndex < 0) {
  throw new Error("Run 964 expected the canonical Ren owner; refusing to create a duplicate.");
}
const ren = allCharacters[renIndex] as ExtendedCharacter;
const renAntiFanon = (ren.antiFanon ?? []).filter(
  (item) => !item.includes("surviving announcements already contain an earlier July 2021 Kahoot-style challenge"),
);
allCharacters[renIndex] = {
  ...ren,
  tags: unique([...(ren.tags ?? []), "Kahoot", "Public repair", "Owns the mistake"]),
  quotes: unique([
    ...(ren.quotes ?? []),
    "Due to brain farts :bbfart: the code provided on the Kahoot poster is the Incorrect one QwQ",
    "a new code will be provided so you all can do the Kahoot again",
  ]),
  claims: unique([
    ...(ren.claims ?? []),
    "Ren's August 7, 2021 `Here is the poster with the right code` was not the final repair after all. On August 8 she comes back herself, says `Due to brain farts` the poster code is still incorrect, apologizes to participants, and tells them a new code will be provided so they can do the Kahoot again. The second correction makes the existing character read stronger: she does not protect yesterday's confident claim once she knows it is wrong; she reopens the mistake in public and gives the room the next step.",
  ]),
  antiFanon: unique([
    ...renAntiFanon,
    "Ren's August 7 `right code` line records what she believed at the time. Her August 8 correction supersedes it as the archival conclusion: the poster code was still wrong enough that participants were invited to redo the Kahoot. The actual code, designer, editor, and exact error mechanism remain unresolved.",
    "The August spelling-Kahoot sequence is not UL's Kahoot origin. Readable announcements now push the explicit surviving Kahoot chronology back to June 4–6, 2021, and July 14 explicitly calls itself the `2nd KAHOOT`; June is still earliest surviving, not guaranteed origin.",
  ]),
} as ExtendedCharacter;
characterById.set("ren", allCharacters[renIndex]);

// Antho is kept as its own stable-account owner. The name is too close to
// Anthos for any identity bridge to be safe, and no bridge is required to
// publish the recurring behavior that the source actually gives us.
if (!allCharacters.some((character) => character.id === "antho-logy")) {
  const antho: ExtendedCharacter = {
    id: "antho-logy",
    name: "Antho",
    aliases: ["antho.logy."],
    billing: "legacy",
    role: "Archive-era event communications",
    era: "2021",
    logline:
      "Antho is one of the people repeatedly standing at the public microphone for early UL events: calling for Photoshoot Contest entries, reminding everybody where the rules and prizes live, yelling `POSE POSE POSE!`, and packaging the second Kahoot for the room without needing a formal title to make the work visible.",
    tags: ["Archive cast", "Event communications", "Photoshoot Contest", "Kahoot", "Public announcements"],
    quotes: [
      "Could you be the face of Underlords next poster?",
      "Grab your avatars! Get your cameras and POSE POSE POSE!",
      "Unerlords 2nd **KAHOOT** game will begin at 12.30pm SVT",
    ],
    claims: [
      "Across January through November 2021, stable account 695394317921026121 repeatedly handles public-facing event messaging: submission calls and reminders across the early Photoshoot Contest series, plus the July 14 announcement for UL's `2nd KAHOOT`.",
      "The recurrence matters more than any one announcement. Antho keeps doing the practical public-facing part of events—tell people what is happening, where to submit, how much time is left, and what happens next—so the lived social role is event communications even without a proven formal appointment title.",
      "For the July second-Kahoot announcement Antho also posts a four-image announcement package. POSTED BY is secure; the image package does not by itself establish who designed, edited, captured, or appears in those images.",
    ],
    antiFanon: [
      "Antho / antho.logy. is stable account 695394317921026121. Do not merge this owner with Anthos or any similarly named person from name resemblance alone.",
      "Recurring public-event messaging does not independently prove a formal historical PR appointment, appointment date, exclusive responsibility for events, birthday authority, or VC authority.",
      "Antho's event-media uploads establish POSTED BY only. They do not establish MADE BY, EDITED BY, CAPTURED BY, or FEATURING without a separate provenance join.",
      "The January 31 phrase `2nd annual photoshoot contest` appears only weeks after a January 9 announcement calling another contest `our very first`; treat `annual` as contemporary hype language rather than literal yearly chronology.",
    ],
  };
  allCharacters.push(antho);
  characterById.set("antho-logy", antho);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("antho-logy")) {
    archiveCastGroup.characterIds.push("antho-logy");
  }
}
