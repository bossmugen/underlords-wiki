import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & { claims?: string[]; antiFanon?: string[] };
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const aeshIndex = allCharacters.findIndex(
  (character) =>
    character.id === "aeshleen" ||
    character.name === "Aeshleen" ||
    (character.aliases ?? []).some((alias) => ["Aesh", "aεsh¡!"].includes(alias)),
);

if (aeshIndex < 0) {
  throw new Error("Run 1521 expected the canonical Aeshleen owner; refusing to create a duplicate.");
}

const aesh = allCharacters[aeshIndex] as ExtendedCharacter;
const relationships = [...(aesh.relationships ?? [])];
const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
const mugenNote =
  "Mugen can welcome Aesh straight into Screenshot Court as `aesh van gogb`, and Aesh later explains that this is what Mugen calls her. The direct nickname use is already in place before the surviving ear/painting riff begins, so the Wall scene reads like shared callback language rather than a nickname being invented on the spot. Later receipt-filing and Aesh's `for the record` / `FOR THE CONTEXT` defenses keep the same easy teasing-with-annotation rhythm.";
if (mugenIndex >= 0) relationships[mugenIndex] = { ...relationships[mugenIndex], note: mugenNote, href: "/characters/mugen" };
else relationships.push({ name: "Mugen", note: mugenNote, href: "/characters/mugen" });

allCharacters[aeshIndex] = {
  ...aesh,
  tags: appendUnique(aesh.tags, ["aesh van gogb", "Callback nicknames"]),
  relationships,
  claims: appendUnique(aesh.claims, [
    "Mugen directly uses `aesh van gogb` in Lobby on 2021-04-24 at 04:13:41 PDT; Aesh later says `that's why mugen calls me aesh van gogb`, so direct Mugen usage is confirmed rather than inferred only from Aesh's report.",
    "The surviving Wall ear/painting riff starts about two and a half minutes after Mugen's direct Lobby use, so that Wall pocket is downstream callback/continuation, not the surviving first-use scene.",
  ]),
  antiFanon: appendUnique(aesh.antiFanon, [
    "Direct Mugen use of `aesh van gogb` is confirmed, but the true first coin remains unresolved: the April 24 Lobby line is the earliest surviving direct use found in this narrow route, not an origin certificate.",
    "Aesh's ear wording in the April 24 Wall pocket is Van Gogh joke/callback language in this source context and is not published as literal self-harm intent.",
  ]),
} as ExtendedCharacter;
characterById.set(aesh.id, allCharacters[aeshIndex]);
characterById.set("aeshleen", allCharacters[aeshIndex]);
