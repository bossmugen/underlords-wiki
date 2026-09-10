import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const tofuIndex = allCharacters.findIndex((character) => character.id === "tofu");
if (tofuIndex < 0) {
  throw new Error("Run 763 expected the canonical Tofu owner; refusing to create a duplicate.");
}

const tofu = allCharacters[tofuIndex] as ExtendedCharacter;
const relationships = [...(tofu.relationships ?? [])];

if (!relationships.some((relationship) => relationship.name === "ShiyaX")) {
  relationships.push({
    name: "ShiyaX",
    note:
      "Shiya asks `theres a limit ?`; Tofu true-replies `At least pace yourself`. It is a soft brake from inside the same Wall joke, not formal moderation.",
    href: "/characters/shiyax",
  });
}

if (!relationships.some((relationship) => relationship.name === "Cookie")) {
  relationships.push({
    name: "Cookie",
    note:
      "Cookie can file a receipt at Tofu with `forgive me but i had to`; Tofu answers in the reaction layer. Useful receipt-culture comfort, not a closeness ranking.",
    href: "/characters/cookie",
  });
}

allCharacters[tofuIndex] = {
  ...tofu,
  logline:
    "Staff with a visual-first Wall style and one excellent contradiction: Tofu can tell somebody else `At least pace yourself`, then sixteen minutes later admit to posting so fast the crop came out wrong. Knows where the brake is; does not always use it personally.",
  tags: unique([
    ...(tofu.tags ?? []),
    "Wall",
    "Visual-first",
    "Soft steering",
    "Screenshot culture",
    "Petty Crimes",
    "2024 persistence",
  ]),
  relationships,
  quotes: unique([
    ...(tofu.quotes ?? []),
    "No context.",
    "At least pace yourself",
    "I posted it@so@quick I didn’t crop it wells",
  ]),
  claims: unique([
    ...(tofu.claims ?? []),
    "In June 2021 Tofu explicitly captions one image `No context.` and follows it with multiple attachment-only Wall posts. The useful person read is visual-first and deliberately under-explained; the images themselves remain undescribed.",
    "On September 16, 2021, ShiyaX asks Tofu `theres a limit ?`; Tofu true-replies `At least pace yourself`. Sixteen minutes later Tofu admits `I posted it@so@quick I didn’t crop it wells`, creating a clean sensible-advice-versus-personal-impulse contradiction.",
    "Tofu's direct Daycare footprint in the current ledger is concentrated in 2021, but the same stable account is still participating in Wall receipt culture in 2024. That establishes later presence, not continuous activity across the gap.",
  ]),
  antiFanon: unique([
    ...(tofu.antiFanon ?? []),
    "The quoted `No context.` / pacing / crop-speed dialogue in this deepener is Wall support material, not relabelled as Daycare speech.",
    "`At least pace yourself` is soft peer steering inside a Wall exchange; it does not create a moderator, safety, or governance role for Tofu.",
    "The 2024 Wall receipts establish later presence only. They do not prove continuous activity from 2021 through 2024.",
    "No attached image pixels in this packet were inspected. POSTED BY remains distinct from MADE BY, CAPTURED BY, and FEATURING.",
  ]),
} as ExtendedCharacter;

characterById.set("tofu", allCharacters[tofuIndex]);
