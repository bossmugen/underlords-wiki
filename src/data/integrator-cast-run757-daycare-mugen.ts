import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mugenIndex = allCharacters.findIndex((character) => character.id === "mugen");

if (mugenIndex < 0) {
  throw new Error("Run 757 expected the existing canonical Mugen Cast owner; refusing to create a duplicate.");
}

const mugen = allCharacters[mugenIndex] as ExtendedCharacter;
const relationships = [
  ...(mugen.relationships ?? []).filter((relationship) => relationship.name.toLowerCase() !== "aeshleen"),
  {
    name: "Aeshleen",
    note:
      "Mugen can turn the admin sentence itself into relationship language. During Aesh's 2021 intake she closes the role/map handoff with `welcomeee aesh van gogb!! ❤️`; the next day Aesh is still explaining that `mugen calls me aesh van gogb`. The bad pun survives the paperwork.",
    href: "/characters/aeshleen",
  },
];

allCharacters[mugenIndex] = {
  ...mugen,
  tags: unique([
    ...(mugen.tags ?? []),
    "Front door",
    "Lobby",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(mugen.quotes ?? []),
    "welcomeee aesh van gogb!! ❤️ roles assigned, server map here",
    "Glad you can make it to the server",
  ]),
  claims: unique([
    ...(mugen.claims ?? []),
    "Across April-June 2021 Lobby intake scenes, Mugen repeatedly closes the human side of a structured welcome herself: explicit welcome, role-assigned confirmation, and server-map routing arrive within seconds of Aesh, SaraBunny, and wisp completing intake. The repeatable lived-role pattern is fast administrative closure without outsourcing the social contact point to the bot.",
    "Aesh's intake gets the personalized version: Mugen writes `welcomeee aesh van gogb!! ❤️ roles assigned, server map here`; the next day Aesh independently says `that's why mugen calls me aesh van gogb`. That makes the nickname recognizable relationship vocabulary beyond the one administrative transaction.",
    "The same closure habit is plainer with SaraBunny and wisp, so the safe synthesis is not that Mugen forces a joke into every welcome. She is procedural without being impersonal and personalizes the machinery when the relationship/context gives her something to work with.",
  ]),
  antiFanon: unique([
    ...(mugen.antiFanon ?? []),
    "The 2021 Lobby receipts support Mugen's authored welcome / role-assigned / server-map closure behavior. They do not establish appointment chronology from role arrays or prove who physically clicked every role outside what Mugen herself says.",
    "The Aesh `van gogb` callback supports mutually legible nickname language, not a stronger relationship rank or a newly invented nickname origin before the surfaced intake receipt.",
    "SaraBunny and wisp are witnesses to Mugen's threshold-hospitality pattern here; their intake details are not license to publish unnecessary personal biography or inflate the scenes into deep-friendship claims.",
  ]),
} as ExtendedCharacter;

characterById.set(allCharacters[mugenIndex].id, allCharacters[mugenIndex]);
