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
    logline: `${erys.logline} On the Wall, Erys is unusually willing to become their own exhibit—confessing the mistake, calling themself a noob, even saying they deserve the filing—then can pivot without much ceremony into the person telling everybody not to make a real problem worse and offering practical help.`,
    tags: appendUnique(erys.tags, [
      "Wall",
      "Self-prosecuting defendant",
      "Practical cleanup instinct",
      "Embarrassment as participation",
    ]),
    quotes: appendUnique(erys.quotes, [
      "You had to wall that?",
      "I'm a noob",
      "yes i did that",
      "I deserve the wall",
    ]),
    claims: appendUnique(erys.claims, [
      "Across the recovered Wall pocket, Erys repeatedly treats being filed as something they can participate in rather than social damage: `You had to wall that?`, `I'm a noob`, `yes i did that`, `I deserve the wall`, and a separate `embarrassing AF` reaction all keep the joke moving instead of building an innocence defense.",
      "The same Wall material preserves a useful contradiction: Erys can be the recurring defendant and then, when a situation risks becoming an actual mess, discourage further escalation and offer practical troubleshooting/repair help. The durable read is self-aware chaos with a working cleanup reflex, not formal moderation authority.",
    ]),
    antiFanon: appendUnique(erys.antiFanon, [
      "Run 1207 does not turn Erys's de-escalation / repair-help moments into an officer, moderator, caretaker, or other formal role. They are lived behavior inside the scene unless independently titled elsewhere.",
      "The Run-1207 Wall attachments remain visually uninspected. Preserve POSTED BY attribution only; do not infer MADE BY, CAPTURED BY, FEATURING, subject, or additional identity links from surrounding banter.",
      "Erys / xErys is the stable-account continuity used here. Do not extend that bridge to similar handles, local forms of address, or pooled Deleted User identities without independent resolution.",
    ]),
  } as ExtendedCharacter;

  characterById.set("erys", allCharacters[erysIndex]);
}
