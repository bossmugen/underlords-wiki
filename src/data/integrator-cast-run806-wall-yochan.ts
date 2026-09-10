import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const yochanIndex = allCharacters.findIndex((character) => character.id === "yochan");
if (yochanIndex < 0) {
  throw new Error("Run 806 expected the existing canonical YoChan owner; refusing to create a duplicate from display-name similarity.");
}

const yochan = allCharacters[yochanIndex] as ExtendedCharacter;
const relationships = [...(yochan.relationships ?? [])];
const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
const mugenAddition =
  "Mugen's creature-post nonsense keeps catching YoChan's attention: dog-sniper and raptor posts get laughter, the catgirl pocket gets participation, and when Mugen tells the room `Get to the gym pronto! Chop chop fatsos`, YoChan fires back `Yeee speak for yourself oink oink`. The setup can be enormous; YoChan's answer usually is not.";
if (mugenIndex >= 0) {
  const current = relationships[mugenIndex];
  relationships[mugenIndex] = {
    ...current,
    note: current.note.includes("Yeee speak for yourself oink oink")
      ? current.note
      : `${current.note} ${mugenAddition}`,
    href: current.href ?? "/characters/mugen",
  };
} else {
  relationships.push({
    name: "Mugen",
    note: mugenAddition,
    href: "/characters/mugen",
  });
}

const extraLogline =
  "On the Wall, reactions and tiny punch lines do a lot of the talking: one laugh on the latest creature crime or `Yeee speak for yourself oink oink` can keep the whole exchange moving without a briefing deck.";

allCharacters[yochanIndex] = {
  ...yochan,
  logline: yochan.logline.includes("Yeee speak for yourself oink oink")
    ? yochan.logline
    : `${yochan.logline} ${extraLogline}`,
  tags: appendUnique(yochan.tags, ["Wall", "Reaction language", "Shared-context humor", "Petty Crimes"]),
  relationships,
  quotes: appendUnique(yochan.quotes, ["Yeee speak for yourself oink oink"]),
  claims: appendUnique(yochan.claims, [
    "On January 8, 2023, YoChan authors `Yeee speak for yourself oink oink` as a direct reply to Mugen's gym/`fatsos` tease; the adjacent `WOW` belongs to Fenrir and must not be transferred to YoChan.",
    "Recurring reactions on Mugen's dog-sniper and raptor posts, plus participation in the catgirl pocket, deepen YoChan's low-verbiage reaction-language pattern without assigning ownership of the posted media to YoChan.",
    "Separate reply-ledger joins recover Wall overlap with Mugen, Erys, Gilli, and Bailey_Babe. Those edges establish interaction, not a closeness or popularity ranking.",
  ]),
  antiFanon: appendUnique(yochan.antiFanon, [
    "Low word count in these scenes is a delivery style, not proof of shyness, introversion, low importance, or low closeness.",
    "The bounded reply-ledger audit is topology metadata only. Zero recovered joke-label positives across the audited YoChan-authored parents is not a popularity, intimacy, or personality statistic.",
    "Reactions and replies do not establish who made, captured, or appears in somebody else's Wall media. Keep SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING distinct.",
  ]),
} as ExtendedCharacter;
characterById.set("yochan", allCharacters[yochanIndex]);
