import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
const registerArchiveCharacter = (character: ExtendedCharacter) => {
  const conflictingName = allCharacters.find(
    (candidate) => candidate.id !== character.id && candidate.name.toLowerCase() === character.name.toLowerCase(),
  );
  if (conflictingName) {
    throw new Error(
      `Run 801 refuses to merge ${character.name} into ${conflictingName.id} by display-name similarity alone.`,
    );
  }

  const index = allCharacters.findIndex((candidate) => candidate.id === character.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      ...character,
      aliases: appendUnique(current.aliases, character.aliases ?? []),
      tags: appendUnique(current.tags, character.tags ?? []),
      quotes: appendUnique(current.quotes, character.quotes ?? []),
      claims: appendUnique(current.claims, character.claims ?? []),
      antiFanon: appendUnique(current.antiFanon, character.antiFanon ?? []),
    } as ExtendedCharacter;
  } else {
    allCharacters.push(character);
  }

  const canonical = allCharacters.find((candidate) => candidate.id === character.id)!;
  characterById.set(character.id, canonical);
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(character.id)) {
    archiveCastGroup.characterIds.push(character.id);
  }
};

registerArchiveCharacter({
  id: "mimi",
  name: "Mimi",
  aliases: ["༯", "opalite.honey"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2023+",
  logline:
    "Mimi can be summoned into a joke with one bare tag and answer eleven seconds later with `LMAOO`, then turn around and teach somebody giant-text formatting in three tiny messages. Low-word, high-signal: reaction gremlin and practical helper fit in the same pocket-sized delivery.",
  tags: ["Archive cast", "Daycare", "Shared-context humor", "Practical help", "Petty Crimes"],
  relationships: [
    {
      name: "Gilli",
      note:
        "Gilli posts a screenshot, follows it five seconds later with only `@༯`, and Mimi answers 11.767 seconds later with `LMAOO`. The bare summon works without explanation; that supports comfortable shared-context familiarity, not a closeness ranking.",
      href: "/characters/gilli",
    },
    {
      name: "Cele",
      note:
        "When Cele asks how to make giant letters, Mimi answers quickly with `Hastag then space`, then clarifies the formatting in two more tiny messages. Her compressed social style also works as practical help.",
      href: "/characters/cele",
    },
  ],
  quotes: ["LMAOO", "Hastag then space", "# # space", "# space"],
  claims: [
    "Stable account 783389804079349800 / username `opalite.honey` / display `༯` is Mimi, not Mia. The two people must remain separate.",
    "On February 24, 2023, Gilli posts a screenshot, bare-tags `@༯` five seconds later, and Mimi answers 11.767 seconds after the tag with `LMAOO`; the screenshot remains POSTED BY Gilli only.",
    "On September 4, 2023, Mimi gives Cele a concise three-message explanation of Discord giant-text formatting.",
  ],
  antiFanon: [
    "Mimi is not Mia. Do not transfer Mia's roles, appointment history, aliases, relationships, or biography claims onto Mimi because a miner or older public page conflated the two.",
    "Dayadream's nearby `mia the UL honorary sweetheart` line names Mia; Mimi reacting afterward is not enough to transfer that label to Mimi under the resolved Mimi ≠ Mia correction.",
    "Low message length is a delivery pattern in these scenes, not proof of shyness, introversion, low importance, or low closeness.",
    "Uninspected media remains POSTED BY only unless maker, capturer, or depicted subjects are independently established.",
  ],
});

registerArchiveCharacter({
  id: "luna",
  name: "Luna",
  aliases: ["historical Luna"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2020+",
  logline:
    "A 2020-era Luna who could make a birthday gift feel slightly illicit by announcing that the link would disappear after Gilli watched it. The object itself is gone; the delivery survives: playful, temporary, and affectionate enough that Gilli and Snow both immediately melt over it.",
  tags: ["Archive cast", "2020", "Birthdays", "Gilli", "Ephemeral gifts", "Petty Crimes"],
  relationships: [
    {
      name: "Gilli",
      note:
        "Luna helps stage Gilli's June 2020 birthday, wishes her happy birthday more than once, then shares a temporary link/object and warns `I’m deleting the link after today 🤪` / `Or after u watch it 😋`. Gilli's delighted response lands minutes later. The missing object stays missing; the affectionate delivery is the useful part.",
      href: "/characters/gilli",
    },
    {
      name: "Ren",
      note:
        "In April 2020 Luna says `I'll leave too xD`; Ren answers seventeen seconds later, `Lmao bye Luna love ya`. A clean historical name anchor and a small affectionate send-off, not a relationship rank.",
      href: "/characters/ren",
    },
    {
      name: "Snow",
      note:
        "Snow directly addresses this stable account as Luna in June 2020 and later answers the birthday exchange with `awww so sweet ❤️ love it luna`.",
      href: "/characters/snow",
    },
  ],
  quotes: [
    "I'll leave too xD",
    "HAPPY BIRTHDAY GILLI FOR A SECOND TIME WOOHOO",
    "I’m deleting the link after today 🤪",
    "Or after u watch it 😋",
  ],
  claims: [
    "Stable account 456226577798135808, now exporter-rendered as Deleted User, is directly addressed as Luna in surviving April and June 2020 conversations.",
    "Luna participates in Gilli's June 14–15, 2020 birthday setup and shares a temporary birthday-related link/object that is no longer preserved in the visible export.",
    "The direct announcements chronology places the visible Gilli birthday celebration on June 14–15, 2020 PDT; a prior June-16 Birthday Bot/best-friend/lost-bet packet is source-conflicted and requires its original receipt before reuse.",
  ],
  antiFanon: [
    "Do not merge stable account 456226577798135808 with HyaLuna or any other Luna-name account without a direct identity bridge.",
    "Current `Deleted User` is exporter/later state, not Luna's historical name.",
    "The missing birthday link/object is not identified as Gilli's later `unknown.gif`; there is no direct object/reply/embed bridge.",
    "The birthday scene is surviving 2020 activity, not Luna's origin, join date, or proof that she created UL birthday culture.",
  ],
});

const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (ghoulieIndex < 0) {
  throw new Error("Run 801 expected canonical Baby Lyssa / Ghoulie; refusing to create a duplicate.");
}

const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
const ghoulieRelationships = [...(ghoulie.relationships ?? [])];
for (const relationship of [
  {
    name: "Mugen",
    note:
      "By late May 2021 Ghoulie's repeat Wall appearances have become a residence joke: after Ghøstt says she lives on the Wall, Mugen asks `Ghoulie where's the rent`. Ghoulie has already been joking about owning the channel herself, so the room is ratifying a reputation she actively helps write.",
    href: "/characters/mugen",
  },
  {
    name: "Sou",
    note:
      "When Ghoulie proposes renaming the room `Ghoulies wall of shame`, Sou tells her that if she keeps going she can outdo him. Ghoulie answers with Cool Kirby. Record/competition teasing, not a closeness rank.",
    href: "/characters/ansun",
  },
]) {
  const index = ghoulieRelationships.findIndex((item) => item.name === relationship.name);
  if (index >= 0) ghoulieRelationships[index] = relationship;
  else ghoulieRelationships.push(relationship);
}

allCharacters[ghoulieIndex] = {
  ...ghoulie,
  logline:
    "Ghoulie turns repeat exposure into local real estate. She goes from `WHY AM I ALWAYS HERE` to `pls i own this channel`, gets independently described as living on the Wall rent-free, gets asked for rent by Mugen, and eventually starts posting exhibits herself. Permanent defendant and active filer are not competing versions of her; they are the same joke learning to run the desk.",
  tags: appendUnique(ghoulie.tags, ["Wall resident", "Repeat defendant", "Active filer", "Petty Crimes"]),
  relationships: ghoulieRelationships,
  quotes: appendUnique(ghoulie.quotes, [
    "At this point just name it Ghoulies wall of shame",
    "why am i always here",
    "pls i own this channel",
    "TIS WASNT MY FAULT EVENNN",
  ]),
  claims: appendUnique(ghoulie.claims, [
    "Across spring 2021, Baby Lyssa / Ghoulie's own language moves from repeat-defendant complaint into mock proprietorship: `why am i always here` becomes `pls i own this channel`.",
    "Peers independently reinforce the Wall-resident reputation: Ghøstt says Ghoulie lives on the Wall, Mugen asks where the rent is, and homethey_ later calls the channel Ghoulie's home where she lives rent-free.",
    "Ghoulie later directly posts multiple uninspected images to the Wall, making the recurring ritual reciprocal: the familiar defendant also becomes an active filer.",
  ]),
  antiFanon: appendUnique(ghoulie.antiFanon, [
    "Owning, living on, or owing rent to the Wall is recurring social metaphor, not channel ownership, governance, tenancy, or financial debt.",
    "Repeat filing and later direct posting support reciprocal Wall participation, not disciplinary authority or a formal prosecutor role.",
    "Ghoulie's Wall uploads remain POSTED BY Ghoulie only unless maker, capturer, or depicted subjects are independently established.",
  ]),
} as ExtendedCharacter;
characterById.set("baby-lyssa", allCharacters[ghoulieIndex]);
