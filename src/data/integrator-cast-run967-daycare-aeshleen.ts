import "./integrator-cast-run967-wall-zyrcant";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const aeshIndex = allCharacters.findIndex(
  (character) => character.id === "aeshleen" || character.name === "Aeshleen",
);

if (aeshIndex < 0) {
  throw new Error("Run 967 expected canonical Aeshleen owner; refusing to recreate Aesh from a Daycare/Wall handoff");
}

const aesh = allCharacters[aeshIndex] as ExtendedCharacter;
const relationships = [...(aesh.relationships ?? [])];

const renRelationship = {
  name: "RV",
  href: "/characters/ren",
  note:
    "Aesh and Ren can reverse Screenshot Court roles without breaking the bit. Aesh files Ren in 2023 with `someone collect @RΣN plz`; in 2024 Ren tags Aesh and posts an image, getting `i hate you.` followed immediately by Aesh's all-caps fandom clarification and literal `FOR THE CONTEXT`. The mock-hostility is part of a reciprocal receipt rhythm, not evidence of actual animosity.",
};
const renIndex = relationships.findIndex((relationship) => ["RV", "Ren"].includes(relationship.name));
if (renIndex >= 0) relationships[renIndex] = renRelationship;
else relationships.push(renRelationship);

allCharacters[aeshIndex] = {
  ...aesh,
  logline: aesh.logline.includes("fandom context entered")
    ? aesh.logline
    : `${aesh.logline} She will take the receipt; she would also like the fandom context entered into evidence.`,
  tags: appendUnique(aesh.tags, [
    "Context defense",
    "Satosugu",
    "Omniscient Reader's Viewpoint",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(aesh.quotes, [
    "IM TALKING ABOUT SATOSUGU AND OMNISCIENT READERS VIEWPOINT=",
    "FOR THE CONTEXT",
  ]),
  claims: appendUnique(aesh.claims, [
    "Aesh's March 2023 `for the record` correction is a recurring social reflex rather than a one-off. In April 2024, after Ren tags her and posts an image, Aesh answers `i hate you.`, then `IM TALKING ABOUT SATOSUGU AND OMNISCIENT READERS VIEWPOINT=`, then `FOR THE CONTEXT`. The correction itself draws a Fat_Wheeze reaction pile. Across both scenes she stays inside the joke while restoring the setup the receipt strips away: chaos participant and context-restorer at once.",
  ]),
  antiFanon: appendUnique(aesh.antiFanon, [
    "Ren's April 2024 IMG_3372.png is POSTED BY Ren only in this handoff; the pixels are uninspected, so MADE BY, CAPTURED BY, FEATURING, and the exact screenshot contents remain unresolved.",
    "Aesh's `i hate you.` sits immediately inside familiar teasing and is followed by continued participation plus a fandom-context correction; do not literalize it into hostility.",
  ]),
} as ExtendedCharacter;

characterById.set("aeshleen", allCharacters[aeshIndex]);
