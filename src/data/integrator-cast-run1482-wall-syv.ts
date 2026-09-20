import { allCharacters } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const syvIndex = allCharacters.findIndex((character) => character.id === "syv");
if (syvIndex >= 0) {
  const syv = allCharacters[syvIndex] as ExtendedCharacter;
  const relationships = [...(syv.relationships ?? [])];
  const ricochetRelationship = {
    name: "Ricochet",
    note:
      "Syv notices when Ricochet has been gone long enough to say `You disappeared for weeks`, keeps a little reminder/ribbing rhythm alive, and answers Ricochet's named `send me ramen` request with `I'm broke` five seconds later. The familiarity is plainspoken and dry rather than ceremonial: absence-noticing, reminder jokes, and request-banter without a closeness rank.",
    href: "/characters/ricochet",
  };
  const relationshipIndex = relationships.findIndex(
    (relationship) => relationship.name === "Ricochet",
  );
  if (relationshipIndex >= 0) relationships[relationshipIndex] = ricochetRelationship;
  else relationships.push(ricochetRelationship);

  allCharacters[syvIndex] = {
    ...syv,
    logline:
      "Quiet never meant checked out. Syv can describe being only `mildly shown` on Wall, notice that Ricochet disappeared for weeks, answer a ramen request with `I'm broke`, and later become the selective filer whose whole prosecution is `Real smooth recovery over there 💀` or `Iconic ✨💀`.",
    tags: appendUnique(syv.tags, [
      "Wall",
      "Dry observer",
      "Absence noticing",
      "Selective filer",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(syv.quotes, [
      "I think this is the first time I’ve been mildly shown in this channel",
      "You disappeared for weeks",
      "I’m broke",
      "Real smooth recovery over there 💀",
      "Iconic ✨💀",
    ]),
    claims: appendUnique(syv.claims, [
      "On January 13, 2022 Syv frames the Wall appearance as `I think this is the first time I’ve been mildly shown in this channel`. The `I think` is preserved as self-perception rather than converted into a mechanically proven first appearance.",
      "In the same January 2022 pocket Syv says `You disappeared for weeks`; Ricochet answers `I’m busy` 14.480 seconds later. Ricochet then asks `Also syv send me ramen`, and Syv answers `I’m broke` 4.995 seconds later. The sequence supports reminder / absence-noticing / dry-request-banter familiarity without a best-friend or care rank.",
      "By February and March 2023 Syv is also on the filing side: Syv posts `IMG_2805.png` with `Real smooth recovery over there 💀`, later posts `IMG_3179.png` and follows 12.495 seconds later with `Iconic ✨💀`. POSTED BY Syv is confirmed; maker, capturer, depicted people, and exact receipt targets remain unresolved.",
      "Syv's Wall-local pattern is understated presence paired with strong attention: low exposure as a target does not stop Syv from remembering people, noticing absence, or filing selectively when a joke is worth preserving.",
    ]),
    antiFanon: appendUnique(syv.antiFanon, [
      "Syv is not Sye. Stable Syv account is 197521779177029632 / syveon; the similarly named Sye account is a separate person.",
      "`I’m broke` is a dry answer to Ricochet's ramen request, not evidence of literal or persistent financial hardship.",
      "The 2023 images are POSTED BY Syv only unless separate object evidence establishes MADE BY, CAPTURED BY, or FEATURING. Do not infer visual subjects from reactions or captions alone.",
      "The 2022 `mildly shown` line is Syv's own perception and not proof of a first Wall appearance, join date, or membership chronology.",
      "Historical Staff/Booster role arrays are snapshots and do not establish Syv's appointment chronology or override the current VIP filing.",
    ]),
  } as ExtendedCharacter;
}
