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

const cookieNote =
  "Cookie and Tofu keep trading the receipt desk back and forth. In 2021 Cookie's bee-spam filing gets `PUTTING ME ON BLAST!`; thirty-seven seconds later Tofu announces `I'll fucking do it again too.` and later counter-files `COOKIE EATS KIDS!!!!!`. In 2024 Cookie can still post `forgive me but i had to @Tofu🐝` and get Tofu's reaction. The complaint, recidivism and counter-file are all part of the same comfortable reciprocal sport.";
const cookieIndex = relationships.findIndex((relationship) => relationship.name === "Cookie");
if (cookieIndex >= 0) {
  relationships[cookieIndex] = {
    ...relationships[cookieIndex],
    note: cookieNote,
    href: "/characters/cookie",
  };
} else {
  relationships.push({ name: "Cookie", note: cookieNote, href: "/characters/cookie" });
}

const ghoulieNote =
  "In one September 2021 pocket, Ghoulie complains that Tofu likes `splattering my ass on the wall`; Tofu answers by admitting `I posted it@so@quick I didn’t crop it wells`. The exchange reads as comfortable theatrical complaint met by an almost proud speed confession, kept deliberately bounded to the scene.";
const ghoulieIndex = relationships.findIndex((relationship) =>
  ["Ghoulie", "Baby Lyssa"].includes(relationship.name),
);
if (ghoulieIndex >= 0) {
  relationships[ghoulieIndex] = {
    ...relationships[ghoulieIndex],
    name: "Ghoulie",
    note: ghoulieNote,
    href: "/characters/baby-lyssa",
  };
} else {
  relationships.push({ name: "Ghoulie", note: ghoulieNote, href: "/characters/baby-lyssa" });
}

allCharacters[tofuIndex] = {
  ...tofu,
  logline:
    "Staff who treats Screenshot Court as reciprocal sport: volunteer filer, fast enough to post before the crop is fixed, theatrical defendant when somebody returns fire, explicit repeat offender thirty-seven seconds later, and perfectly willing to counter-file before the outrage has cooled.",
  tags: unique([
    ...(tofu.tags ?? []),
    "Wall",
    "Visual-first",
    "Soft steering",
    "Screenshot culture",
    "Reciprocal receipt-war",
    "Fast-draw filer",
    "Petty Crimes",
    "2024 persistence",
  ]),
  relationships,
  quotes: unique([
    ...(tofu.quotes ?? []),
    "No context.",
    "At least pace yourself",
    "Maybe ^^^",
    "Bet! I got nothing to hide",
    "I posted it@so@quick I didn’t crop it wells",
    "PUTTING ME ON BLAST!",
    "I'll fucking do it again too.",
    "COOKIE EATS KIDS!!!!!",
  ]),
  claims: unique([
    ...(tofu.claims ?? []),
    "In June 2021 Tofu explicitly captions one image `No context.` and follows it with multiple attachment-only Wall posts. The useful person read is visual-first and deliberately under-explained; the images themselves remain undescribed.",
    "On September 16, 2021, ShiyaX asks Tofu `theres a limit ?`; Tofu true-replies `At least pace yourself`. Sixteen minutes later Tofu admits `I posted it@so@quick I didn’t crop it wells`, creating a clean sensible-advice-versus-personal-impulse contradiction.",
    "Across June through September 2021, Tofu's Wall posture hardens from `Maybe ^^` and `Bet! I got nothing to hide` into openly reciprocal receipt sport: fast filing, performative `PUTTING ME ON BLAST!` outrage, `I'll fucking do it again too.` thirty-seven seconds later, then a joke counter-file against Cookie.",
    "Cookie and Tofu's receipt-war remains visible in 2024 when Cookie posts `forgive me but i had to @Tofu🐝` with a screenshot and Tofu reacts, supporting continuity of the shared filing grammar without requiring a closeness rank.",
    "A September 2021 Ghoulie pocket gives bounded fast-draw texture: Ghoulie complains about being splattered on the Wall and Tofu answers by admitting the post went up so quickly the crop was bad.",
    "Tofu's direct Daycare footprint in the current ledger is concentrated in 2021, but the same stable account is still participating in Wall receipt culture in 2024. That establishes later presence, not continuous activity across the gap.",
  ]),
  antiFanon: unique([
    ...(tofu.antiFanon ?? []),
    "The quoted `No context.` / pacing / crop-speed dialogue in this deepener is Wall support material, not relabelled as Daycare speech.",
    "`At least pace yourself` is soft peer steering inside a Wall exchange; it does not create a moderator, safety, or governance role for Tofu.",
    "The 2024 Wall receipts establish later presence only. They do not prove continuous activity from 2021 through 2024.",
    "No attached image pixels in this packet were inspected. POSTED BY remains distinct from MADE BY, CAPTURED BY, and FEATURING.",
    "`COOKIE EATS KIDS!!!!!` is an obvious joke counter-allegation inside the receipt war, not literal harm or cannibalism canon.",
    "The Ghoulie exchange is bounded scene-level relationship texture; it does not establish a closeness hierarchy, romance, family relation, or off-Wall continuity.",
    "Tofu's `PUTTING ME ON BLAST!` complaint is immediately followed by explicit repeat-offender language. Preserve the contradiction as the joke rather than rewriting the protest as withdrawal from Wall participation.",
  ]),
} as ExtendedCharacter;

characterById.set("tofu", allCharacters[tofuIndex]);
