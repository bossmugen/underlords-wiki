import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertArchiveCharacter = (incoming: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === incoming.id);

  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      ...incoming,
      aliases: appendUnique(current.aliases, incoming.aliases ?? []),
      tags: appendUnique(current.tags, incoming.tags ?? []),
      quotes: appendUnique(current.quotes, incoming.quotes ?? []),
      claims: appendUnique(current.claims, incoming.claims ?? []),
      antiFanon: appendUnique(current.antiFanon, incoming.antiFanon ?? []),
      relationships: [
        ...(current.relationships ?? []),
        ...(incoming.relationships ?? []).filter(
          (addition) =>
            !(current.relationships ?? []).some(
              (existing) =>
                existing.name === addition.name && existing.note === addition.note,
            ),
        ),
      ],
    } as ExtendedCharacter;
  } else {
    allCharacters.push(incoming);
  }

  const resolved = allCharacters.find((character) => character.id === incoming.id)!;
  characterById.set(incoming.id, resolved);

  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(incoming.id)) {
    archiveCastGroup.characterIds.push(incoming.id);
  }
};

upsertArchiveCharacter({
  id: "mercy",
  name: "Mërcy",
  aliases: ["鯉", "mercy074431"],
  billing: "legacy",
  role: "Archive-era UL / Daycare cast",
  era: "2021–",
  logline:
    "A two-message Daycare footprint hides somebody much more socially specific: Mërcy turns up on the Wall selling Nelph a `fresh box of cookies`, mirrors the serene face, and lets Nelph declare them the local business. Tiny contribution, complete bit.",
  tags: ["Archive cast", "Daycare", "Wall", "Cookies", "Petty Crimes"],
  relationships: [
    {
      name: "Nelph",
      note:
        "Mërcy pitches `Get your fresh box of cookies !` directly to NELPH, mirrors NELPH's `😌`, then reacts when NELPH turns the exchange into `Support your local business 😌` / `AKA me and koi`. It reads like easy co-conspirator rhythm inside one compact joke, not a friendship ranking.",
      href: "/characters/nelph",
    },
  ],
  quotes: ["Get your fresh box of cookies ! :6157_Yaay2: @N E L P H", "😌"],
  claims: [
    "Mërcy's stable account self-introduced as `鯉 , underlords , 21` in Lobby on 2021-11-07.",
    "On 2021-11-19 Mërcy pitched a fresh box of cookies directly to NELPH; NELPH answered with a mock `local business` frame and `AKA me and koi`, and Mërcy reacted into that framing.",
    "The lowercase `koi` in NELPH's immediate cookie-business line likely refers to Mërcy / 鯉 in that scene, supported by Mërcy's stable-account self-introduction twelve days earlier.",
  ],
  antiFanon: [
    "The cookie shop is a room joke, not literal business history.",
    "The local `koi` read does not merge unrelated older Koi references into Mërcy without their own identity bridge.",
    "Mërcy POSTED `IMG_7349.png`; MADE BY, CAPTURED BY, and FEATURING remain unresolved because the image has not been inspected.",
    "One compact exchange supports collaborative shorthand with Nelph, not a global closeness rank.",
  ],
});

upsertArchiveCharacter({
  id: "beckiie",
  name: "Beckiie",
  aliases: ["beckiieboo"],
  billing: "legacy",
  role: "Archive-era UL / Daycare cast",
  era: "2021–2022+",
  logline:
    "Beckiie appears on the Wall more than once and still looks at the entire premise like somebody contesting the charge: `i feel like i don’t say anything that gets me here`. Repeated receipt posting, extremely low-key self-incrimination.",
  tags: ["Archive cast", "Daycare", "Wall", "Petty Crimes"],
  quotes: ["i feel like i don’t say anything that gets me here"],
  claims: [
    "Beckiie's stable account self-introduced as `Beckiie UnderLords 23` in Lobby on 2021-10-19.",
    "The same stable account POSTED attachment-bearing Wall entries on 2021-10-29, 2022-01-25, and 2022-02-06.",
    "On the 2022-01-25 Wall post Beckiie wrote `i feel like i don’t say anything that gets me here`, giving the file a compact self-perception: she does not seem to cast herself as one of the room's spectacular offenders even while participating in the receipt ritual.",
  ],
  antiFanon: [
    "Beckiie's Wall line is her self-perception, not proof that she was objectively quiet, shy, innocent, or never said anything wild.",
    "The three Wall attachments are POSTED BY Beckiie only; MADE BY, CAPTURED BY, and FEATURING remain unresolved because the images were not inspected.",
    "The 2022-01-25 post is not a reply and contains no mention; adjacency does not supply a conversational target.",
  ],
});
