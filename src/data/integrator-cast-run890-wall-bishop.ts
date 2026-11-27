import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const bishopIndex = allCharacters.findIndex((character) => character.id === "bishopthaguru");
if (bishopIndex < 0) {
  throw new Error("Run 890 expected the canonical BishopThaGuru owner; refusing to create a duplicate.");
}

const bishop = allCharacters[bishopIndex] as ExtendedCharacter;
const relationships = [...(bishop.relationships ?? [])];
const tofuIndex = relationships.findIndex((relationship) => relationship.name === "Tofu");
const tofuNote =
  "Across late-June and July 2021, Tofu repeatedly files or calls out Bishop as reliably Wall-worthy and Bishop repeatedly grabs the attention back: `You with the feds?`, faux injury about not being loved, warning-vs-compliment negotiation, `paying attention cause you like me?`, a sex-definition detour, then boxing-glove theatrics on his own filing. The punchline gets unexpectedly soft on July 19, when Bishop publicly posts `Teaching @Tofu🐝 to Waltz turned out to be a lot cuter than expected... ☺️`. Their shared language can apparently survive prosecution, embarrassment, and one extremely cute dance lesson without anybody needing to change registers.";
if (tofuIndex >= 0) relationships[tofuIndex] = { ...relationships[tofuIndex], note: tofuNote, href: "/characters/tofu" };
else relationships.push({ name: "Tofu", note: tofuNote, href: "/characters/tofu" });

const bobbyIndex = relationships.findIndex((relationship) => relationship.name === "Bobby");
const bobbyNote =
  "Bobby gets one small but very Bishop-compatible Whiskey lane: an earlier `boo boo` reaction sits in the same bounded slice, then Bobby later says they `spooked` Bishop and that `it worked`. The surviving text never shows exactly what Bishop saw, but the social move is clear enough — Bobby can apparently use Bishop as a live audience for a tiny scare bit and immediately narrate the success back into the room.";
if (bobbyIndex >= 0) relationships[bobbyIndex] = { ...relationships[bobbyIndex], note: bobbyNote };
else relationships.push({ name: "Bobby", note: bobbyNote });

allCharacters[bishopIndex] = {
  ...bishop,
  logline:
    "Bishop treats scrutiny like stage lighting. He can act hunted by the Wall — feds, secret files, warnings — then make himself more conspicuous by hijacking the attention. A few weeks later he is the one making the record, publicly posting that teaching Tofu to waltz was `a lot cuter than expected`. Embarrassment never quite beats his urge to keep the bit — or the sweetness — alive.",
  tags: appendUnique(bishop.tags, ["Attention hijacker", "Mock-paranoid defendant", "Innuendo", "Self-filing", "Waltz", "Bobby", "Petty Crimes"]),
  relationships,
  quotes: appendUnique(bishop.quotes, [
    "Why? What have you heard? Who you talk to? You with the feds?",
    "Too bad you don't love me no more. 🤷🏾‍♂️",
    "Or does it mean that your watching me closely and paying attention cause you like me? 🤔🤔🤔",
    "Usually means sex, occasionally. lol",
    "Personally, I think we should bring back heiroglyohics.... Or... Yeah that word ....",
    "I am something of a comedian myself. 😏",
    "Teaching @Tofu🐝 to Waltz turned out to be a lot cuter than expected... ☺️",
  ]),
  claims: appendUnique(bishop.claims, [
    "Bishop's late-June/early-July 2021 Wall material turns the old mock-procedure joke into a stable social move: when scrutiny lands on him, he performs alarm and then hijacks the framing rather than retreating from it.",
    "Tofu's repeated filing/callout rhythm makes the Bishop contradiction especially clear. Tofu can call him reliably funny and Wall-bound; Bishop answers by asking about the feds, worrying about Mugen's imaginary office file, reframing observation as attraction, detouring into innuendo, and eventually filing his own ambiguous screenshot with boxing gloves ready.",
    "The useful person read is defensive theater paired with voluntary conspicuousness: Bishop acts as though the receipt machine is dangerous while continuously increasing the amount of quotable material available to it.",
    "Bishop's `heiroglyohics.... Or... Yeah that word ....` line is a self-aware typo joke: he notices the word got away from him inside the sentence and makes the failure part of the bit. Keep the joke specific instead of turning it into a claim that he cannot spell.",
    "On 2021-07-19 Bishop himself posts a public photo-submission captioned `Teaching @Tofu🐝 to Waltz turned out to be a lot cuter than expected... ☺️`. Joined to the earlier Wall panic, this adds a softer contradiction: he complains theatrically about being documented, then voluntarily documents an affectionate shared moment when he likes it enough.",
    "Tofu later memorializes Bishop's brief confusion about whether he was over 18, extending the same safe-embarrassment rhythm into tiny personal lore rather than a one-off receipt.",
    "A bounded Whiskey slice adds a separate Bobby→Bishop teasing lane: Bobby uses a `boo boo` reaction earlier in the slice and later says they `spooked` Bishop and `it worked`. The cumulative read is a low-stakes scare bit with Bishop as a recognizable participant; the surviving text does not preserve the exact scare mechanism or what Bishop saw.",
  ]),
  antiFanon: appendUnique(bishop.antiFanon, [
    "Bishop's `you like me`, `love me`, and sex-definition lines are teasing/innuendo inside the Wall bit. They do not establish romance, sexual history, exclusivity, or a relationship label with Tofu.",
    "The recurring Bishop/Tofu lane supports comfortable reciprocal teasing and affection, not literal hostility or a closeness hierarchy.",
    "Bishop calling the waltz lesson cute supports warmth and public affection around a shared moment; it does not by itself establish romance, sex, exclusivity, or a formal relationship label.",
    "The June/July screenshots remain POSTED BY their respective posters only unless maker, capturer, depicted subjects, or visual content are independently established.",
    "The `heiroglyohics` line is one self-aware typo joke, not evidence of a stable spelling problem or lack of literacy.",
    "Bobby's nearby `boo boo` and later `spooked` / `it worked` wording support a playful scare lane with Bishop, but do not establish that a particular bot reaction or attachment was definitely used on him; the exact mechanism remains unresolved.",
  ]),
} as ExtendedCharacter;
characterById.set("bishopthaguru", allCharacters[bishopIndex]);

const tofuCharacterIndex = allCharacters.findIndex((character) => character.id === "tofu");
if (tofuCharacterIndex < 0) {
  throw new Error("Run 890 expected the canonical Tofu owner; refusing to create a duplicate.");
}

const tofu = allCharacters[tofuCharacterIndex] as ExtendedCharacter;
const tofuRelationships = [...(tofu.relationships ?? [])];
const bishopRelationshipIndex = tofuRelationships.findIndex((relationship) => relationship.name === "BishopThaGuru");
const bishopNote =
  "Bishop is one of Tofu's repeat Wall defendants: Tofu can tell him that anything involving him is bound for the Wall, preserve tiny humiliations, and keep answering his mock-paranoid objections without killing the joke. Bishop eventually flips the filing direction himself with a public waltz post about Tofu that is simply, openly sweet. Prosecution and affection live in the same lane here.";
if (bishopRelationshipIndex >= 0) {
  tofuRelationships[bishopRelationshipIndex] = {
    ...tofuRelationships[bishopRelationshipIndex],
    note: bishopNote,
    href: "/characters/bishopthaguru",
  };
} else {
  tofuRelationships.push({ name: "BishopThaGuru", note: bishopNote, href: "/characters/bishopthaguru" });
}

allCharacters[tofuCharacterIndex] = {
  ...tofu,
  tags: appendUnique(tofu.tags, ["BishopThaGuru"]),
  relationships: tofuRelationships,
  claims: appendUnique(tofu.claims, [
    "Tofu's Bishop lane now joins repeated Wall filing/teasing with Bishop's 2021-07-19 public waltz caption, giving the relationship both reciprocal embarrassment and openly affectionate ordinary-life texture.",
  ]),
  antiFanon: appendUnique(tofu.antiFanon, [
    "The Bishop/Tofu waltz caption and recurring receipt teasing support warmth and comfortable familiarity; they do not establish romance, sex, exclusivity, or a formal relationship label.",
  ]),
} as ExtendedCharacter;
characterById.set("tofu", allCharacters[tofuCharacterIndex]);
