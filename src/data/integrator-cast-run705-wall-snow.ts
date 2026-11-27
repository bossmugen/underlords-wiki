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

// Snow's Wall material works best as one mechanism rather than a receipt pile:
// he is a recurring teasing target whose defense often becomes the next joke,
// and he is self-aware enough about Screenshot Court to joke that the premium
// material stays in VC where it is harder to fossilize as a text receipt.
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
      "Recurring teasing target with the fatal habit of editing his own charge sheet: Snow can reject the label, supply an etymology or technical distinction, accidentally give the room a better punchline, and even joke that his `best material` stays in VC where Screenshot Court has a harder time fossilizing it.",
    tags: [
      ...new Set([
        ...(snow.tags ?? []),
        "Wall",
        "Voice chat",
        "Archive self-awareness",
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
        "That is why i leave my best material in vc 😛",
      ]),
    ],
    claims: [
      ...new Set([
        ...(snow.claims ?? []),
        "Across 2020–2023 Wall teasing, peers repeatedly return to Snow-as-old language; by 2021 Akariel explicitly phrases it as a recurring reaction pattern, and in 2022 Snow answers the age debate with `Whipper snapper origin  1700  =_= not that old lol`. The useful character read is not literal age but Snow's habit of defending himself with conspicuously specific language that keeps the joke alive.",
        "On 2023-12-11 Ren tags Snow with `Glad to see you finally accepted your inner furry`; after Dayadream escalates the same joke, Snow fires `THATS  FURY .. AS IN ANGRY` → `not FURRY` → `like NEMO` in about five seconds. The correction itself receives eye-roll reactions, turning Snow's taxonomy defense into the next beat of the bit.",
        "On 2020-11-04, after another Wall participant said Snow would need to `literally type` so he could be screenshotted onto the Wall, Snow answered `That is why i leave my best material in vc 😛`. Anthos immediately punctured the mystique with `all u do in vc is monch`. The useful character beat is Snow explicitly making the medium difference part of the joke: typed nonsense is easy Wall material, while voice nonsense is harder to fossilize as a reusable text receipt.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(snow.antiFanon ?? []),
        "`old man`, `old`, and `whipper snapper` are teasing language here and do not establish Snow's literal age or the origin date of the running gag.",
        "`inner furry`, `furry king`, FURRY/FURY, catgirl/catboy and related labels are joke taxonomy only. Do not infer a literal furry/cat identity, romance, sexuality, governance, or other biographical category from them.",
        "Ren's `finally` is callback-shaped evidence of prior teasing, but it does not identify the first furry joke, its date, or its source room.",
        "Snow's `best material in vc` line is a screenshot-avoidance joke and archive-awareness beat, not a formal VC privacy policy, proof that voice chat was never recorded, or evidence that every Wall receipt originated in VC.",
        "The account that prompts Snow in the November 4 scene must not be identity-bridged from its display label alone; hard project identity locks remain controlling.",
        "Tenor/media assets and surrounding images in the connected Wall pockets remain attributed to their posters unless maker/capturer/subject is independently established.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("snow", allCharacters[snowIndex]);
}
