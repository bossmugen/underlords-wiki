import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsert = (candidate: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === candidate.id);
  if (index < 0) {
    allCharacters.push(candidate);
    characterById.set(candidate.id, candidate);
    return;
  }

  const current = allCharacters[index] as ExtendedCharacter;
  allCharacters[index] = {
    ...current,
    ...candidate,
    aliases: unique([...(current.aliases ?? []), ...(candidate.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(candidate.tags ?? [])]),
    relationships: candidate.relationships ?? current.relationships,
    quotes: unique([...(current.quotes ?? []), ...(candidate.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(candidate.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(candidate.antiFanon ?? [])]),
  } as ExtendedCharacter;
  characterById.set(candidate.id, allCharacters[index]);
};

upsert({
  id: "lilithel",
  name: "LilithEl",
  aliases: ["attiael"],
  billing: "legacy",
  role: "Member",
  era: "2020+",
  logline:
    "LilithEl can walk back into the Lobby after admitting she has not played in forever, openly say she has no idea whether she is still in UL, and make the uncertainty sound almost breezy: `oops`, excited bunny, fake age, hello anyway. The room answers in the same register—Gilli recognizes her immediately, while Mugen says her account was kept `on vacation`. The return lands as continuity before it ever becomes paperwork.",
  tags: ["Archive cast", "Lobby", "Return", "Belonging", "Gilli", "Mugen"],
  relationships: [
    {
      name: "Gilli",
      note:
        "When Lilith reappears after saying she has not played in forever, Gilli answers `OMGGGG` and then `WELCOME BACK!` within seconds. The useful relationship fact is instant recognition: Lilith is received as somebody returning, not somebody introducing herself from scratch.",
    },
    {
      name: "Mugen",
      note:
        "Mugen true-replies to Lilith's uncertainty about whether she is still in Underlords with `Dw bb I saved your account on vacation uwu`. It is practical reassurance delivered softly: whatever the backend status was, Mugen frames Lilith's absence as something already accommodated rather than a social exile.",
    },
  ],
  quotes: [
    "omggg so i haven't played in forever but i'm attiael/lilithel :BunBunMegaExcited: idk if i'm still in underlords oops and my age is 69 years old 😎",
  ],
  claims: [
    "LilithEl is stable Discord account 271079668117929986 / `attiael`; `LilithEl` and `attiael` belong to this same owner.",
    "On 2020-11-18 Lilith says she has not played in forever and does not know whether she is still in Underlords; Gilli immediately says `WELCOME BACK!`, and Mugen later true-replies that Lilith's account was saved `on vacation`.",
    "The person-shaped contradiction is bounded but useful: Lilith is genuinely uncertain about status while still presenting herself socially with jokes, an excited emote, and an obviously unserious `69 years old` age answer.",
  ],
  antiFanon: [
    "The 2020 return scene does not establish an exact departure date, server-leave/rejoin event, removal history, or a specific backend vacation procedure.",
    "`69 years old` is a joke-shaped onboarding answer in context and is not Lilith's factual age.",
    "Gilli's recognition and Mugen's reassurance support familiar return/belonging texture, not a ranked-closeness claim.",
    "Earliest surviving support is not guaranteed origin, and export-time role arrays are not appointment chronology.",
  ],
});

upsert({
  id: "sye",
  name: "Sye",
  aliases: ["sycessences", "ƐℲı˥"],
  billing: "legacy",
  role: "Member",
  era: "2020–2021+",
  logline:
    "Sye's social reflex is `here, try this`. A promised homemade pizza gets handed to Shiya. Lilly asks about garlic eggplant and gets a scaled family recipe that Sye taste-checks, checks with the source, and turns into a usable document. A music list without folk metal is apparently defective on principle. Even greetings work the same way: Sye names people one by one, tells Sway to `come meet your neighbors`, and keeps turning things personally known or enjoyed into something another person can enter.",
  tags: ["Archive cast", "Whiskey", "Food", "Folk metal", "Hosting", "Petty Crimes"],
  relationships: [
    {
      name: "Lilly",
      note:
        "When Lilly asks for a garlic-eggplant recipe, Sye scales down a father's large-batch version, taste-checks the sauce, checks the adaptation with the father, and hands Lilly a Google Doc. A request becomes a usable gift; the care is practical rather than ceremonial.",
    },
    {
      name: "ShiyaX",
      note:
        "Sye follows through on an earlier promise with `@ShiyaX here you go! The pizza I mention I was going to make earlier.` The little sequence is pure Sye: mention something, make it, hand it over.",
    },
    {
      name: "Sway",
      note:
        "Sye tells Sway `come meet your neighbors`, framing the room as people to be introduced to rather than merely a channel to enter. It is lived social-bridge behavior, not evidence of a formal onboarding title.",
    },
  ],
  quotes: [
    "@Sway come meet your neighbors",
    "Good Morning Loves! May your day be filled with love and delicious Foodgasmic Adventures!",
    "We BBQ with the power of the 🌞",
    "this list doesn’t have any folk metal",
    "Because I may or may not have awkwardly flirted with my eye doctor :worry:",
  ],
  claims: [
    "Sye is stable Discord account 488099199938986004 / `sycessences`, rendered in the assigned archive as `ƐℲı˥`; this owner is anchored by stable account identity, not display-name similarity.",
    "Across the assigned 2020–2021 Whiskey material, Sye repeatedly turns food, music, greetings, and introductions outward: pizza for Shiya, a checked and scaled garlic-eggplant recipe for Lilly, folk-metal recommendations, named good-mornings, and `come meet your neighbors` for Sway.",
    "The garlic-eggplant scene is the cleanest example of the pattern: Sye scales a father's large-batch recipe, taste-checks the sauce despite lacking eggplant, checks with the father, and gives Lilly a Google Doc.",
    "Sye has a recurring folk-metal interest strong enough to reject a music list for having none and later share Mongolian and Swiss folk-metal examples; that supports a strong interest, not an absolute favorite-genre claim.",
    "Sye is fluent in low-stakes house affection but explicitly describes intentionally flirting with an eye doctor as awkward, then later recoils at `actually trying`; the tension is house-affection-easy / intentional-flirt-awkward, not a universal inability to flirt.",
  ],
  antiFanon: [
    "Sye's repeated hosting/bridging behavior is social labor, not a formal onboarding appointment or governance title.",
    "Do not infer Sye's orientation, relationship status, romance, or sex from the eye-doctor flirting comments.",
    "The father's recipe does not establish the father's location, cultural identity, or a broader family biography beyond Sye's own wording.",
    "The currently searchable Lobby route returned no Sye match; that is a retrieval boundary, not evidence that no doorway or earlier UL presence existed.",
    "Earliest surviving support is not guaranteed origin, and export-time role arrays are not appointment chronology.",
  ],
});

const hamiIndex = allCharacters.findIndex((character) => character.id === "hamittey");
if (hamiIndex >= 0) {
  const hami = allCharacters[hamiIndex] as ExtendedCharacter;
  const relationships = [...(hami.relationships ?? [])];
  const noether = {
    name: "Noether",
    note:
      "A February 2022 Wall pocket turns Hami into the defendant in a dessert-hoarding accusation. Hami keeps denying possession of any desserts; Noether eventually posts homemade strawberry ice cream `since you didn't share desserts`. It is an extended accusation/denial bit, not factual dessert theft.",
  };
  if (!relationships.some((relationship) => relationship.name === "Noether")) relationships.push(noether);

  allCharacters[hamiIndex] = {
    ...hami,
    logline:
      "Hami likes a funny receipt enough to keep it, forget it exists, and resurrect it as somebody else's problem. That makes the other half of the pattern even better: when Hami becomes the exhibit, the response can be a repeated literal exit-door GIF, tired denial, or one compact counter-joke. Social receipt ambusher on offense; theatrical evacuation specialist on defense.",
    tags: unique([...(hami.tags ?? []), "Exit-door GIF", "Chaos curator", "Noether dessert court"]),
    relationships,
    quotes: unique([
      ...(hami.quotes ?? []),
      "No context required, it's hilarious as it is lol:mochi_laugh:",
      "i dont have no desserts :Cursed:",
      "itss a charcoal pancake :EmoJi_stupid:",
    ]),
    claims: unique([
      ...(hami.claims ?? []),
      "Across 2021-12-01, 2022-01-07, and 2022-02-03 Hami reuses the same Peepo exit-door GIF. In the February pocket it follows Noether saying someone wants to eat Hami by 28.153 seconds; the repeat supports a reaction signature of theatrical evacuation when Hami becomes implicated.",
      "The February 2022 Noether/Hami dessert pocket repeatedly accuses Hami of not sharing desserts while Hami repeatedly denies having any; Noether later posts strawberry ice cream `since you didn't share desserts`. The durable material is defendant banter, not a factual hoarding claim.",
      "On 2024-02-23 Hami says `No context required, it's hilarious as it is lol`, neatly matching the older receipt-curator behavior: if the artifact lands on its own, Hami is happy to let the funny object prosecute itself.",
    ]),
    antiFanon: unique([
      ...(hami.antiFanon ?? []),
      "The repeated exit-door GIF is a Wall reaction signature, not evidence that Hami literally fled a scene or habitually avoids accountability outside the joke.",
      "Noether's dessert accusations and Hami's denials remain banter; literal dessert hoarding is unresolved.",
      "The `hami x snow` wording in a nearby Wall filing is ship/joke language and is not romance or sex canon.",
    ]),
  } as ExtendedCharacter;
  characterById.set("hamittey", allCharacters[hamiIndex]);
}
