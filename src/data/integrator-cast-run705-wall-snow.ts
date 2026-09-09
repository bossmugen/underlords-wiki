import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index >= 0) relationships[index] = { ...relationships[index], ...incoming };
  else relationships.push(incoming);
};

// Run 705 Wall: Snow's teasing-target material is useful because the defense is
// often the next joke. He corrects labels with conspicuous technical precision,
// stays socially inside the bit, and can cheerfully lose the argument he just
// tried to litigate. Keep the character mechanism; do not literalize the labels.
const snowIndex = allCharacters.findIndex((character) => character.id === "snow");
if (snowIndex >= 0) {
  const snow = allCharacters[snowIndex] as ExtendedCharacter;
  const relationships = [...(snow.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Ren",
    note:
      "Ren can hit Snow with callback-shaped bait like `Glad to see you finally accepted your inner furry`, and Snow answers by correcting the category rather than exiting the joke. The familiar rhythm is button-pushing plus Snow's technical defense; `finally` supports prior teasing history but does not locate its origin or rank the relationship.",
    href: "/characters/ren",
  });

  upsertRelationship(relationships, {
    name: "Zyrcant",
    note:
      "As Akariel, Zyrcant describes the Snow-is-old reaction as familiar enough to predict: `Everytime someone calls snow old`, then `-runs-`. The scene is useful for the running-gag ecology and Snow's reputation as a responsive target, not a literal age claim or special-closeness ranking.",
    href: "/characters/zyrcant",
  });

  allCharacters[snowIndex] = {
    ...snow,
    logline:
      "Recurring teasing target with the fatal habit of editing his own charge sheet: Snow can reject the label, supply an etymology or technical distinction, and accidentally give the room a better punchline. `Whipper snapper` gets a date check; FURRY gets corrected to `FURY .. AS IN ANGRY`; the defense keeps becoming evidence because Snow stays in the joke long enough to improve it.",
    tags: [
      ...new Set([
        ...(snow.tags ?? []),
        "Wall",
        "Corrective humor",
        "Technical defense",
        "Running-gag target",
        "Self-aware defendant",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(snow.quotes ?? []),
        "Whipper snapper origin  1700  =_= not that old lol",
        "THATS  FURY .. AS IN ANGRY",
        "not FURRY",
        "like NEMO",
      ]),
    ],
    claims: [
      ...new Set([
        ...(snow.claims ?? []),
        "Across 2020–2023 Wall teasing, peers repeatedly return to Snow-as-old language; by 2021 Akariel explicitly phrases it as a recurring reaction pattern, and in 2022 Snow answers the age debate with `Whipper snapper origin  1700  =_= not that old lol`. The useful character read is not literal age but Snow's habit of defending himself with conspicuously specific language that keeps the joke alive.",
        "On 2023-12-11 Ren tags Snow with `Glad to see you finally accepted your inner furry`; after Dayadream escalates the same joke, Snow fires `THATS  FURY .. AS IN ANGRY` → `not FURRY` → `like NEMO` in about five seconds. The correction itself receives eye-roll reactions, turning Snow's taxonomy defense into the next beat of the bit.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(snow.antiFanon ?? []),
        "`old man`, `old`, and `whipper snapper` are teasing language here and do not establish Snow's literal age or the origin date of the running gag.",
        "`inner furry`, `furry king`, FURRY/FURY, catgirl/catboy and related labels are joke taxonomy only. Do not infer a literal furry/cat identity, romance, sexuality, governance, or other biographical category from them.",
        "Ren's `finally` is callback-shaped evidence of prior teasing, but it does not identify the first furry joke, its date, or its source room.",
        "Tenor/media assets in the connected Wall pockets remain attributed to their posters unless maker/capturer/subject is independently established.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("snow", allCharacters[snowIndex]);
}
