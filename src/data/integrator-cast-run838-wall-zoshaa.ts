import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

// WALL — Zoshaa
// Stable account 223558727132528640 / Zoshaa_ / later NintendoShitcube.
// Deepen the existing owner; do not manufacture Zoshaa II.
const zoshaaIndex = allCharacters.findIndex((character) => character.id === "zoshaa");
if (zoshaaIndex < 0) {
  throw new Error("Run 838 expected the existing canonical Zoshaa owner; refusing to create Zoshaa II.");
}

const zoshaa = allCharacters[zoshaaIndex] as ExtendedCharacter;
const hemiRelationship = {
  name: "Hemi",
  note:
    "Hemi files Zoshaa on the Wall with `im zoshaa` / `Screw you`; Zoshaa does not retreat from the filing so much as seize the wording and keep it alive with `Some people needs screws` and `Yeah`. The protest becomes participation in the same joke rather than a clean exit from it.",
};
const relationships = [...(zoshaa.relationships ?? [])];
const hemiIndex = relationships.findIndex((relationship) => relationship.name === "Hemi");
if (hemiIndex >= 0) relationships[hemiIndex] = hemiRelationship;
else relationships.push(hemiRelationship);

allCharacters[zoshaaIndex] = {
  ...zoshaa,
  logline: zoshaa.logline.includes("Screw you")
    ? zoshaa.logline
    : `${zoshaa.logline} Screenshot Court gets the same treatment: file her for \`Screw you\`, and Zoshaa is liable to turn the charge into \`Some people needs screws\` before the room has finished laughing.`,
  tags: appendUnique(zoshaa.tags, ["Wall defendant", "Protest-as-participation", "Wordplay under prosecution"]),
  relationships,
  quotes: appendUnique(zoshaa.quotes, ["Screw you", "Some people needs screws", "Yeah"]),
  claims: appendUnique(zoshaa.claims, [
    "Stable account 223558727132528640 owns the 2021-02-07 Wall pocket: Hemi files Zoshaa around `im zoshaa` / `Screw you`; after the filing and reactions, Zoshaa follows with `Some people needs screws` and `Yeah`.",
    "The useful character read is not literal hostility. In this pocket Zoshaa answers being filed by extending the same screw-word joke, so the complaint itself becomes part of participation in Screenshot Court.",
  ]),
  antiFanon: appendUnique(zoshaa.antiFanon, [
    "Do not turn the Wall screw exchange into literal hostility or a relationship rank with Hemi; the supported point is reciprocal joke participation in this scene.",
    "Do not publish defendant-count arithmetic as popularity, intimacy, or friendship ranking. The new Zoshaa filing only raises a backstage minimum count.",
    "Sou / Souta / 颯太 / sou.san remains the canonical Ansun alias family. A miner-side attempt to split Sou from Ansun is rejected by hard project canon and must not create a duplicate owner.",
  ]),
} as ExtendedCharacter;

characterById.set("zoshaa", allCharacters[zoshaaIndex]);
