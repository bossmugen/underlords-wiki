import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const rummyIndex = allCharacters.findIndex((character) => character.id === "rummy");
if (rummyIndex < 0) {
  throw new Error("Run 886 expected the canonical Rummy owner; refusing to create a duplicate.");
}

const rummy = allCharacters[rummyIndex] as ExtendedCharacter;
const relationships = [...(rummy.relationships ?? [])];
const gilliNote =
  "Gilli repeatedly knows exactly how to activate Rummy's defendant mode: a 2023 screenshot filing gets `HEEYY HEEEYY` and `U DOROGT THE CORNEXT PLS`; in 2024 Gilli uses `Rummy level` as shorthand on somebody else's receipt and Rummy TRUE-replies with mock offense. It is recurring comfortable receipt/reputation teasing, not a closeness ranking or literal hostility.";
const gilliIndex = relationships.findIndex((relationship) => relationship.name === "Gilli");
if (gilliIndex >= 0) {
  relationships[gilliIndex] = { ...relationships[gilliIndex], note: gilliNote, href: "/characters/gilli" };
} else {
  relationships.push({ name: "Gilli", note: gilliNote, href: "/characters/gilli" });
}

const next: ExtendedCharacter = {
  ...rummy,
  tags: unique([
    ...(rummy.tags ?? []),
    "Wall defendant",
    "Context restoration",
    "Prepared chaos",
    "Reputation benchmark",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(rummy.quotes ?? []),
    "Say no more I have a whole list of yaoi ready",
    "I can throw in some pics too",
    "U DOROGT THE CORNEXT PLS",
    "bro u need hte context",
    "THAT WASN'T JUST A RANDOM THINIG",
    "it the bobA bALlS",
    "*whAT u TrYiNg to SAy HUh*",
  ]),
  claims: unique([
    ...(rummy.claims ?? []),
    "Rummy's Wall reputation has two halves that keep feeding each other: prepared chaos supplier and frantic context-restoration defendant. In April 2021 Rummy TRUE-replies that there is already `a whole list of yaoi ready` and volunteers pictures too; when later screenshot filings crop the setup away, Rummy's defense is repeatedly not `I never said that` but `you forgot the context`.",
    "That context fight becomes part of Rummy's reputation rather than an isolated defense. Gilli can use `Rummy level` as a shorthand benchmark on somebody else's 2024 receipt and get a mock-offended TRUE_REPLY from Rummy, while Momo later says she is `desensitized to what rums says`. The useful contradiction is wild bit-maker / community cursedness benchmark ↔ footnote-demanding defendant once the bit is Walled without its setup.",
    "The December 2023 Marian filing is the purest emergency version: `bro u need hte context` becomes `THAT WASN'T JUST A RANDOM THINIG`, `i did not say that randomly`, and finally `it the bobA bALlS`. Marian is a scene-level receipt ambusher here; the recurring relationship lane in this packet is Gilli↔Rummy.",
  ]),
  antiFanon: unique([
    ...(rummy.antiFanon ?? []),
    "`Rummy level` is participant shorthand for a recurring Wall reputation, not a formal rank, role, score, or universal opinion held by every UL member.",
    "The Gilli and Marian screenshots remain POSTED BY those filers unless independent object-level support establishes who MADE / CAPTURED / appears in them. Rummy's text defenses do not license reconstruction of uninspected pixels.",
    "Rummy's yaoi list / offered pictures are joke-and-taste behavior in the quoted scene. Do not infer sexual conduct or relationships from the bit.",
  ]),
};

allCharacters[rummyIndex] = next;
characterById.set("rummy", next);
