import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const erysIndex = allCharacters.findIndex((character) => character.id === "erys");
if (erysIndex < 0) throw new Error("Run 1207 expected canonical Erys owner");

{
  const erys = allCharacters[erysIndex] as ExtendedCharacter;

  allCharacters[erysIndex] = {
    ...erys,
    logline: `${erys.logline} The extra wrinkle is that the recurring defendant can abruptly become the practical one when the joke starts threatening to create a real mess: Erys will tell people not to make it worse and start offering repair help without pretending they were never part of the chaos.`,
    tags: appendUnique(erys.tags, [
      "Practical cleanup instinct",
      "Chaos with a repair reflex",
    ]),
    quotes: appendUnique(erys.quotes, [
      "You had to wall that?",
      "I'm a noob",
      "yes i did that",
      "I deserve the wall",
    ]),
    claims: appendUnique(erys.claims, [
      "Run 1207 does not add a second Wall-defendant arc: `You had to wall that?`, `I'm a noob`, `yes i did that`, `I deserve the wall`, and `embarrassing AF` extend the already-public Erys pattern of treating exposure as participation rather than social damage.",
      "The genuinely additive contradiction is the cleanup reflex. In the same broader Wall corpus, Erys can move from repeat defendant / bit-feeder into discouraging further escalation when a situation risks becoming an actual problem, then offer practical troubleshooting or repair help. That is lived behavior, not a formal moderation role.",
    ]),
    antiFanon: appendUnique(erys.antiFanon, [
      "Run 1207 does not turn Erys's de-escalation / repair-help moments into an officer, moderator, caretaker, or other formal role. They are lived behavior inside the scene unless independently titled elsewhere.",
      "The Run-1207 Wall attachments remain visually uninspected. Preserve POSTED BY attribution only; do not infer MADE BY, CAPTURED BY, FEATURING, subject, or additional identity links from surrounding banter.",
      "Erys / xErys is the stable-account continuity used here. Do not extend that bridge to similar handles, local forms of address, or pooled Deleted User identities without independent resolution.",
    ]),
  } as ExtendedCharacter;

  characterById.set("erys", allCharacters[erysIndex]);
}
