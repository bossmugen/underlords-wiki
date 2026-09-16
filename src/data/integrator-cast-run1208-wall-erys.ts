import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const erysIndex = allCharacters.findIndex((character) => character.id === "erys");
if (erysIndex < 0) {
  throw new Error("Run 1208 expected canonical Erys owner; refusing to create Erys II.");
}

{
  const erys = allCharacters[erysIndex] as ExtendedCharacter;

  allCharacters[erysIndex] = {
    ...erys,
    logline: appendOnce(
      erys.logline,
      "The stranger counterweight is how openly Erys wants the audience there: the same person filing `objection` and `hearsay` from the defendant's chair will notice when the room empties, ask where everybody went, say they miss them, and complain when they leave again. The prosecution is apparently less alarming than an empty room.",
      "The prosecution is apparently less alarming than an empty room.",
    ),
    tags: appendUnique(erys.tags, [
      "Mock courtroom defense",
      "Presence-seeker",
      "Wall regular",
      "Petty Crimes",
    ]),
    quotes: appendUnique(erys.quotes, [
      "objection",
      "hearsay",
      "no one needs to see the rest mugss",
      "wheref everyoned gooooh",
      "i missssg yalll",
      "yalld left againnnnb",
      "ohj i just burpedf agsinf",
    ]),
    claims: appendUnique(erys.claims, [
      "Across May 6 and May 10, 2022 Erys turns Wall defense into performance rather than withdrawal: `i swear that isnt me` -> `its photoshopped` -> `im being hacked`, then four days later `objection` -> `hearsay`. The recurring useful read is bit-aware defendant fluency, not a literal security incident.",
      "On May 14 Erys asks `wheref everyoned gooooh`, follows with `i missssg yalll`, and later complains `yalld left againnnnb`. That gives the existing defendant arc a social counterweight: Erys is unusually direct about wanting the shared room populated even when that populated room keeps putting them on the Wall.",
      "Ricochet jokes in the May 10 pocket that Erys is trying for the `most shame award`. Treat that as contemporaneous room-level reputation for repeatedly ending up on the Wall, not a literal award, ranking, or speed record.",
      "Petty Crimes: COURTROOM PROCEDURE FOR SCREENSHOT CHARGES, ATTEMPTED RECEIPT CONTAINMENT, REPEAT BURP BULLETINS, AND LOUDLY NOTICING WHEN EVERYBODY LEAVES.",
    ]),
    antiFanon: appendUnique(erys.antiFanon, [
      "`im being hacked` appears inside Erys's escalating Wall-defense routine after `its photoshopped`; do not publish it as a verified account compromise or security incident.",
      "Ricochet's `most shame award` line is reputation language, not a literal award or verified most-shamed rank. It also does not resolve the separate fastest-shame chronology rabbit, which remains open.",
      "The May 14 `whiskey` exchange is room/channel context in the reviewed handoff. Do not infer alcohol use or intoxication from it.",
      "The Run-1208 synthesis does not require neighboring image pixels. Keep media attribution separate: SAID BY / POSTED BY does not establish MADE BY, CAPTURED BY, or FEATURING.",
      "No new one-to-one closeness, romance, literal-family, or governance claim is created from the May 2022 room-level exchanges.",
    ]),
  } as ExtendedCharacter;

  characterById.set("erys", allCharacters[erysIndex]);
}
