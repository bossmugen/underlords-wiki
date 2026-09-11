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
  "Across four late-June/early-July Wall scenes, Tofu repeatedly files or calls out Bishop as reliably Wall-worthy and Bishop repeatedly grabs the attention back: `You with the feds?`, faux injury about not being loved, warning-vs-compliment negotiation, `paying attention cause you like me?`, a sex-definition detour, then boxing-glove theatrics on his own filing. Tofu's dry answers keep the bit reciprocal. Comfortable prosecution/defendant teasing is supported; romance, sex, hostility and a closeness rank are not.";
if (tofuIndex >= 0) relationships[tofuIndex] = { ...relationships[tofuIndex], note: tofuNote, href: "/characters/tofu" };
else relationships.push({ name: "Tofu", note: tofuNote, href: "/characters/tofu" });

allCharacters[bishopIndex] = {
  ...bishop,
  logline:
    "Bishop treats scrutiny like stage lighting. He can act hunted by the Wall — feds, secret files, warnings — and then immediately make himself more conspicuous by turning the attention into teasing, innuendo, or a boxing entrance. The room watches him; Bishop's preferred defense is apparently to give it another line.",
  tags: appendUnique(bishop.tags, ["Attention hijacker", "Mock-paranoid defendant", "Innuendo", "Self-filing"]),
  relationships,
  quotes: appendUnique(bishop.quotes, [
    "Why? What have you heard? Who you talk to? You with the feds?",
    "Too bad you don't love me no more. 🤷🏾‍♂️",
    "Or does it mean that your watching me closely and paying attention cause you like me? 🤔🤔🤔",
    "Usually means sex, occasionally. lol",
  ]),
  claims: appendUnique(bishop.claims, [
    "Bishop's late-June/early-July 2021 Wall material turns the old mock-procedure joke into a stable social move: when scrutiny lands on him, he performs alarm and then hijacks the framing rather than retreating from it.",
    "Tofu's repeated filing/callout rhythm makes the Bishop contradiction especially clear. Tofu can call him reliably funny and Wall-bound; Bishop answers by asking about the feds, worrying about Mugen's imaginary office file, reframing observation as attraction, detouring into innuendo, and eventually filing his own ambiguous screenshot with boxing gloves ready.",
    "The useful person read is defensive theater paired with voluntary conspicuousness: Bishop acts as though the receipt machine is dangerous while continuously increasing the amount of quotable material available to it.",
  ]),
  antiFanon: appendUnique(bishop.antiFanon, [
    "Bishop's `you like me`, `love me`, and sex-definition lines are teasing/innuendo inside the Wall bit. They do not establish romance, sexual history, exclusivity, or a relationship label with Tofu.",
    "The recurring Bishop/Tofu lane supports comfortable reciprocal teasing, not literal hostility or a closeness hierarchy.",
    "The June/July screenshots remain POSTED BY their respective posters only unless maker, capturer, depicted subjects, or visual content are independently established.",
  ]),
} as ExtendedCharacter;
characterById.set("bishopthaguru", allCharacters[bishopIndex]);
