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
  "On the Wall, YoChan can get surprisingly far on `👀`, `🤣`, and one-line teasing until a screenshot needs to travel. Then the minimalist suddenly becomes provenance desk: receipt first, `From server sea` fifteen seconds later, and finally `idk how to paste to raja global` while still laughing at the problem.";

allCharacters[yochanIndex] = {
  ...yochan,
  logline: yochan.logline.includes("From server sea")
    ? yochan.logline
    : `${yochan.logline} ${extraLogline}`,
  tags: appendUnique(yochan.tags, ["Wall", "Reaction language", "Receipt courier", "Shared-context humor", "Petty Crimes"]),
  relationships,
  quotes: appendUnique(yochan.quotes, [
    "Yeee speak for yourself oink oink",
    "@~Candy~ oink oink",
    "Maybe from this🤣 🤣",
    "From server sea🤣 🤣",
    "But idk how to paste to raja global😂 😂",
  ]),
  claims: appendUnique(yochan.claims, [
    "Across the 2021 Wall shard, YoChan repeatedly uses compact reaction-language (`👀`, `🤣`) but becomes explicit when a receipt needs context: on August 10 the sequence is screenshot post → `From server sea` 15.141 seconds later → cross-server paste problem 35.963 seconds after that.",
    "On January 8, 2023, YoChan authors `Yeee speak for yourself oink oink` as a direct reply to Mugen's gym/`fatsos` tease; the adjacent `WOW` belongs to Fenrir and must not be transferred to YoChan.",
    "Separate reply-ledger joins recover Wall overlap with Mugen, Erys, Gilli, and Bailey_Babe. Those edges establish interaction, not a closeness or popularity ranking.",
    "Recurring reactions on Mugen's dog-sniper and raptor posts, plus participation in the catgirl pocket, deepen YoChan's low-verbiage reaction-language pattern without assigning ownership of the posted media to YoChan.",
  ]),
  antiFanon: appendUnique(yochan.antiFanon, [
    "Low word count in these scenes is a delivery style, not proof of shyness, introversion, low importance, or low closeness.",
    "`From server sea` is YoChan's own provenance wording about the posted receipt; it does not independently establish who made or captured the image or who appears in it.",
    "The bounded reply-ledger audit is topology metadata only. Zero recovered joke-label positives across the audited YoChan-authored parents is not a popularity, intimacy, or personality statistic.",
    "Reactions and replies do not establish who made, captured, or appears in somebody else's Wall media. Keep SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING distinct.",
  ]),
} as ExtendedCharacter;
characterById.set("yochan", allCharacters[yochanIndex]);
