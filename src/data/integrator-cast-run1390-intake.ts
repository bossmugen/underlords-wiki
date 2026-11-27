import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);
const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 1390 Wall + hard identity repair.
// Stable account 264889543365230614 is Alkey. Meowk is the separate stable account
// 1227942597410328606. Older public layers incorrectly moved Alkey's Wall scenes
// onto Meowk because one export rendered the 264... account as `Meowk 💖✨`.
const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex >= 0) {
  const alkey = allCharacters[alkeyIndex] as ExtendedCharacter;
  const relationships = [...(alkey.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Baby Lyssa",
    note:
      "Alkey can drop a `:KEKW:` into Baby Lyssa's receipt pocket and then pace `i` / `saw` / `all` across three tiny messages while the room piles on. The useful read is gleeful witness familiarity inside the same public joke, not romance, family, or a closeness rank.",
    href: "/characters/baby-lyssa",
  });
  upsertRelationship(relationships, {
    name: "Ren",
    note:
      "Alkey can throw a compact height roast at Ren (`3 foot lookin`) and later become the target when Ren helps turn the room's `alkitty` joke into paws. The joke runs both directions; literal height and relationship rank do not.",
    href: "/characters/ren",
  });
  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "Mugen can simply become the audience when Alkey turns two chicken emotes into a whole fight and later bows with `I aim to please`. The scene works as audience-aware performance and shared comic timing, not formal role or hierarchy.",
    href: "/characters/mugen",
  });

  allCharacters[alkeyIndex] = {
    ...alkey,
    aliases: (alkey.aliases ?? []).filter((alias) => !/^Meowk(?:\s|$)/i.test(alias)),
    stableDiscordIds: appendUnique((alkey as ExtendedCharacter).stableDiscordIds, ["264889543365230614"]),
    logline:
      "Staff and hockey devotee with a fast-riff Wall instinct: Alkey can set the premise, play witness, roast somebody with almost no runway, recognize an old bit on sight, then perform exaggerated suffering when the room turns the same machinery back on him.",
    tags: appendUnique(alkey.tags, ["Staff", "Hockey", "Wall", "Fast riff", "Reciprocal teasing", "Throwback recognition", "Petty Crimes"]),
    relationships,
    quotes: appendUnique(alkey.quotes, [
      "cock fight achieved",
      "I aim to please :8_bow:",
      "i",
      "saw",
      "all",
      "3 foot lookin",
      "You all suck :myv_Reeeeee:",
      "The good ol' days",
    ]),
    claims: appendUnique((alkey as ExtendedCharacter).claims, [
      "Stable Discord account 264889543365230614 is Alkey under the resolved identity correction; an export-time `Meowk 💖✨` display on that account does not merge Alkey with the separate person Meowk.",
      "Alkey's reviewed Wall pattern is reciprocal: he can build a ridiculous premise, act as gleeful witness, throw compact roasts, and remain in the joke when peers turn the teasing back on him.",
      "The Baby Lyssa `i` / `saw` / `all` pocket supports comfortable public witness-teasing without assigning the unseen screenshot's maker, capturer, or visual subject.",
      "The March throwback pocket supports immediate nostalgic recognition (`The good ol' days`) while the underlying old screenshot remains visually unresolved.",
    ]),
    antiFanon: appendUnique((alkey as ExtendedCharacter).antiFanon, [
      "Alkey is stable account 264889543365230614 and is separate from Meowk, stable account 1227942597410328606.",
      "The export display `Meowk 💖✨` observed on Alkey's account is not an identity bridge to the separate Meowk owner.",
      "Alkey is also separate from Key / Captain Chihuahua.",
      "The Ren height roast is a joke, not a literal height record; `alkitty` / paws are peer teasing, not a canonical identity or romance claim.",
      "Alkey has no direct authored Wall attachments in the reviewed footprint; nearby media do not establish MADE BY, CAPTURED BY, or FEATURING for him.",
    ]),
  } as ExtendedCharacter;
  characterById.set("alkey", allCharacters[alkeyIndex]);
}

const meowkIndex = allCharacters.findIndex((character) => character.id === "meowk");
if (meowkIndex >= 0) {
  const meowk = allCharacters[meowkIndex] as ExtendedCharacter;
  allCharacters[meowkIndex] = {
    ...meowk,
    aliases: ["Meowk"],
    stableDiscordIds: ["1227942597410328606"],
    role: "UL member",
    logline:
      "Meowk is a separate UL member from Alkey. The public dossier stays compact until more account-specific scenes are synthesized instead of inheriting somebody else's Wall history through a display-name collision.",
    tags: ["UL member"],
    relationships: [],
    quotes: [],
    claims: ["Meowk is stable Discord account 1227942597410328606 and is not Alkey / 264889543365230614."],
    antiFanon: [
      "Do not transfer Alkey's chicken-emote spectacle, `i` / `saw` / `all`, Ren height roast, `alkitty` pile-on, nostalgia lines, or Mugen audience scenes onto Meowk.",
      "Display-name resemblance is not an identity bridge. Meowk remains separate from Alkey and Key / Captain Chihuahua.",
    ],
  } as ExtendedCharacter;
  characterById.set("meowk", allCharacters[meowkIndex]);
}

// Run 1390 Whiskey synthesis: Jordayy keeps the room open beside ordinary life.
const jordayyId = "jordayy";
const jordayyIndex = allCharacters.findIndex((character) => character.id === jordayyId);
const jordayySeed: ExtendedCharacter = {
  id: jordayyId,
  name: "Jordayy",
  aliases: ["j.nm"],
  billing: "legacy",
  role: "Archive-era Whiskey regular",
  era: "2021–",
  logline:
    "Jordayy lets Whiskey sit beside the rest of the day instead of switching into a polished server persona: packages, dog-and-laundry updates, food, naps, haircuts and work transitions all drift through the room, while the same person who happily reads from the audience can turn around and invite somebody in.",
  tags: ["Archive cast", "Whiskey", "Ordinary life", "Audience / inviter", "Reaction humor", "Petty Crimes"],
  stableDiscordIds: ["475483611001520128"],
  relationships: [
    {
      name: "Ghostt",
      note:
        "Across separate Whiskey pockets Jordayy repeatedly recognizes Ghøstt in a personalized little refrain — `Is ghooooost`, `IS GHOOOOOST`, `Isss ghost` — with an earlier `I still want breakfast Ghost`. The recurrence supports familiar recognition without assigning romance, rank, or off-channel frequency.",
      href: "/characters/ghostt",
    },
  ],
  quotes: [
    "I like reading yalls conversions :6squirrelclap:",
    "Join us:5zbearkisses:",
    "I like to flail when I feel this way :kermitLunafeels:",
    "Is ghooooost",
    "I still want breakfast Ghost",
  ],
  claims: [
    "Jordayy's strongest cumulative Whiskey trait is ordinary-life permeability: mundane updates about packages, chores, food, sleep, hair, and work repeatedly enter the room without becoming formal announcements.",
    "On January 7, 2021, `I like reading yalls conversions` is followed later by `Join us`, giving a useful audience / inviter contradiction rather than a passive-lurker label.",
    "Repeated March–May Ghost callouts support a personalized recognition lane with Ghøstt, while the exact trigger of each scene remains incomplete in the current retrieval layer.",
    "Petty Crimes: `I like to flail when I feel this way` is a direct tiny quirk; the missing antecedent means the feeling itself stays unnamed.",
  ],
  antiFanon: [
    "Do not turn Jordayy's large Whiskey message count into `always online`, oversharing, or a personality ranking; the person read comes from recurring content and behavior, not volume.",
    "The 242 reviewed media-index rows are an author-filtered media subset, not all Jordayy messages.",
    "The Ghøstt lane supports familiar recognition, not romance, exclusivity, relationship rank, or a claim about off-channel contact.",
    "Do not name the emotion behind `this way` in the flailing quote without the missing antecedent.",
    "Earliest reviewed 2021 Whiskey material does not establish Jordayy's UL origin, join date, or departure chronology.",
  ],
};

if (jordayyIndex >= 0) {
  const current = allCharacters[jordayyIndex] as ExtendedCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of jordayySeed.relationships ?? []) upsertRelationship(relationships, relationship);
  allCharacters[jordayyIndex] = {
    ...current,
    ...jordayySeed,
    aliases: appendUnique(current.aliases, jordayySeed.aliases ?? []),
    tags: appendUnique(current.tags, jordayySeed.tags ?? []),
    stableDiscordIds: appendUnique(current.stableDiscordIds, jordayySeed.stableDiscordIds ?? []),
    relationships,
    quotes: appendUnique(current.quotes, jordayySeed.quotes ?? []),
    claims: appendUnique(current.claims, jordayySeed.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, jordayySeed.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(jordayySeed);
}
characterById.set(jordayyId, allCharacters.find((character) => character.id === jordayyId)!);
const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(jordayyId)) archiveCastGroup.characterIds.push(jordayyId);
