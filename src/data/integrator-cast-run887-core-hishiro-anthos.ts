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

const hishiroIndex = allCharacters.findIndex((character) => character.id === "hishiro");
if (hishiroIndex < 0) {
  throw new Error("Run 887 expected canonical Hishiro owner; refusing to recreate Hishiro from the Mugshots slice");
}

const anthosIndex = allCharacters.findIndex((character) => character.id === "anthos");
if (anthosIndex < 0) {
  throw new Error("Run 887 expected canonical Anthos owner; stable account 695394317921026121 must not become a second Xanthos character");
}

const hishiro = allCharacters[hishiroIndex] as ExtendedCharacter;
const hishiroRelationships = [...(hishiro.relationships ?? [])];

upsertRelationship(hishiroRelationships, {
  name: "Mugen",
  note:
    "Mugen can ask Hishiro for a one-word accuracy verdict, but she also gets to teach Hishiro a whole social game. In Mugshots, Mugen explains that the room matches people to Pinterest-sourced `vibe` images; Hishiro asks where to find them, remembers the format, and later sends the bit back to Mugen with `reminds me of you minus the horns ofc`. The relationship can hold practical trust and silly reciprocity without either one needing a ceremony.",
  href: "/characters/mugen",
});

upsertRelationship(hishiroRelationships, {
  name: "Anthos",
  note:
    "Their older lane already has coffee, game drops, and screenshot-help logistics. Mugshots adds a softer shorthand: Anthos greets `haiii hishi`, Hishiro answers `hey, ánthos!!! long time`, and Anthos sends a hug emote back. The archive never gives the exact gap, but neither of them needs an introduction when they meet again.",
  href: "/characters/anthos",
});

upsertRelationship(hishiroRelationships, {
  name: "Anayss",
  note:
    "Anayss can throw out `Hishi vibessss` and Hishiro answers by making herself the punchline: `I didnt know someone whose retired can look so cool`. It is a tiny peer-recognition beat with enough ease for Hishiro to joke about her own status without explaining it.",
  href: "/characters/anayss",
});

allCharacters[hishiroIndex] = {
  ...hishiro,
  description:
    "Hishiro likes useful things to come with enough context to actually use them, and apparently applies the same instinct to nonsense. When Mugshots tags her with a pretty image, she asks who made it, what the room is doing, and where people find the material. Once she understands the game, she does not stay a spectator: Mugen keeps sending Hishiro matches, Hishiro enjoys being read as cool, and by 2024 she is posting a vibe match back at Mugen. It fits the Hishiro who answers summons and explains screenshot mechanics, with one extra turn of the screw: she can learn the room's bit as carefully as a workflow and then play it back for fun.",
  logline:
    "Staff who likes context with a handle: Hishiro can explain the useful thing, ask how the social game works, then quietly become one of the people playing it back.",
  tags: appendUnique(hishiro.tags, ["Mugshots", "Vibe matching", "Social-game learner"]),
  relationships: hishiroRelationships,
  quotes: appendUnique(hishiro.quotes, [
    "who made this, this is so pretty :mochi_love:",
    "where can I get them? Pinterest?",
    "I didnt know someone whose retired can look so cool :Cat_Sporkle:",
    "@Mugen reminds me of you minus the horns ofc :araxd:",
  ]),
  claims: appendUnique(hishiro.claims, [
    "On March 14, 2023 in the Mugshots/vibe room, Hishiro asks what the tagged image practice is, asks where its source material comes from after Mugen explains the room, and then participates in the same social language across later 2023-2024 scenes.",
    "By May 10, 2024 Hishiro is no longer only receiving vibe matches: she posts an image and tells Mugen it `reminds me of you minus the horns ofc`; Mugen answers `I LOVE THISS`. The useful person-level movement is recipient to participant, not a formal role change.",
    "Hishiro's `retired` wording in the May 2023 vibe exchange is her own self-description, but the source does not resolve what she meant as retired from or when.",
  ]),
  antiFanon: appendUnique(hishiro.antiFanon, [
    "Mugshots/vibe images in this intake were not visually inspected. They are social vibe objects, not automatic literal appearance evidence, and ordinary uploads remain POSTED BY only unless MADE BY, CAPTURED BY, or FEATURING is independently grounded.",
    "Do not convert Hishiro's `retired` joke into a formal UL retirement date, membership exit, Staff chronology, or appointment history.",
  ]),
} as ExtendedCharacter;
characterById.set("hishiro", allCharacters[hishiroIndex]);

const anthos = allCharacters[anthosIndex] as ExtendedCharacter;
const anthosRelationships = [...(anthos.relationships ?? [])];

upsertRelationship(anthosRelationships, {
  name: "Mimi",
  note:
    "Mimi targets Anthos with a vibe image and `Thought of uu`; Anthos answers `you're making me feel cool`, and Mimi immediately doubles down with `anthos always coool`. Anthos does not swat the praise away or turn it into a victory speech. She lets it land and makes the feeling itself part of the joke.",
  href: "/characters/mimi",
});

upsertRelationship(anthosRelationships, {
  name: "Momo",
  note:
    "Momo tells Anthos she is cool; Anthos answers `guuurl you flatter me`, then upgrades the compliment exchange to `I'm getting rizzed up in broad daylight`. The ease is the story. Praise can turn into a bit between them without needing to become a literal romance claim.",
  href: "/characters/momo",
});

upsertRelationship(anthosRelationships, {
  name: "Hishiro",
  note:
    "Anthos and Hishiro already share small practical exchanges; Mugshots shows the recognition without the task attached. `haiii hishi` gets `hey, ánthos!!! long time` and a hug emote back. Whatever the exact gap was, the reunion language is warm and immediate.",
  href: "/characters/hishiro",
});

allCharacters[anthosIndex] = {
  ...anthos,
  aliases: appendUnique(anthos.aliases, ["Xanthos"]),
  description:
    "Anthos can tell a room exactly what needs to happen next and then get delightfully easy to hype the second the room points the attention back at her. She still does the soft-host/casual-fixer work: doors, games, setup, reminders, little pieces of infrastructure. In Mugshots, though, other people keep telling her what kind of cool they see, and Anthos lets the compliment become social play instead of either denying it or crowning herself. `you're making me feel cool` comes back more than a year later as `This is making me feel so cool 😎`; by the time Momo flatters her, Anthos is joking that she is getting `rizzed up in broad daylight`. Operational directness and social self-seriousness were never the same thing.",
  logline:
    "Soft host, casual fixer, resident gremlin, and apparently very easy to hype: Anthos can direct the logistics and still let the room make her feel cool.",
  tags: appendUnique(anthos.tags, ["Mugshots", "Easy to hype", "Petty Crimes"]),
  relationships: anthosRelationships,
  quotes: appendUnique(anthos.quotes, [
    "you're making me feel cool :Fat_Wheeze: :8070_ZeroYay:",
    "This is making me feel so cool 😎",
    "guuurl you flatter me :Cute_kitty:",
    "I'm getting rizzed up in broad daylight :Cute_kitty:",
  ]),
  claims: appendUnique(anthos.claims, [
    "Stable Discord account 695394317921026121 is already the canonical Anthos account in WIKI. The changed Mugshots export renders that same account as Xanthos; this is a historical display alias, not a second person.",
    "Across March 2023 and July 2024 Mugshots scenes, Anthos twice describes targeted vibe representations as making her feel cool, then turns follow-up praise from Mimi/Momo into light reciprocal banter. The recurrence deepens her social style without changing her formal role.",
    "Hishiro and Anthos exchange warm old-recognition language in the March 2023 Mugshots scene: Anthos greets `hishi`, Hishiro says `long time`, and Anthos follows with a hug emote.",
  ]),
  antiFanon: appendUnique(anthos.antiFanon, [
    "`Xanthos` in this intake resolves by exact stable Discord account ID to canonical Anthos. Do not create a second Xanthos character or let the display name replace the Anthos primary name.",
    "`I'm getting rizzed up in broad daylight` is compliment-banter in this scene, not evidence of literal romance or sex with Momo.",
    "Mugshots/vibe images were not visually inspected. They are not automatic appearance claims; POSTED BY remains distinct from MADE BY, CAPTURED BY, and FEATURING.",
    "Do not backdate Anthos's current Pit Boss / Minister role from export-time role arrays or from the 2023-2024 social scenes.",
  ]),
} as ExtendedCharacter;
characterById.set("anthos", allCharacters[anthosIndex]);
