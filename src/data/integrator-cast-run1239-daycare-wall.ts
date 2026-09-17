import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const dyingFoxIndex = allCharacters.findIndex((character) => character.id === "dyingfox");
if (dyingFoxIndex < 0) throw new Error("Run 1239 expected canonical DyingFox owner");
const dyingFox = allCharacters[dyingFoxIndex] as ExtendedCharacter;
const foxRelationships = [...(dyingFox.relationships ?? [])];

upsertRelationship(
  foxRelationships,
  "Lilly",
  "Lilly is the loud half of this friendship: caps, exclamation marks, `FOX I LOVE YOU`, `HI SUNSHINE`. DyingFox stays tiny on the page but keeps doing the maintenance—`Morning lilly!`, `Love you too`, hug/glomp commands—and later casually remembers that Lilly sometimes calls her `baby fox`. The nickname lands as another small piece of established familiarity, not a new relationship category.",
  "/characters/lilly",
);
upsertRelationship(
  foxRelationships,
  "Faye",
  "Fox later mentions, deadpan, that Faye put `go to rehab` in her status for a night. The useful part is how ordinary the retelling is: enough familiarity for a one-night status prank, and Fox files it as known-person nonsense rather than a crisis.",
);

allCharacters[dyingFoxIndex] = {
  ...dyingFox,
  logline:
    "Dry enough to make tiny sentences carry the whole joke, affectionate enough to keep greeting and nickname rituals alive, and apparently familiar enough with her people that `Faye put go to rehab in my status for a night` can be delivered like routine household weather: DyingFox's low-word style keeps hiding how much social continuity is packed into it.",
  tags: appendUnique(dyingFox.tags, ["Low-key affection", "Recurring nicknames", "Faye", "Petty Crimes"]),
  relationships: foxRelationships,
  quotes: appendUnique(dyingFox.quotes, [
    "faye put ‘go to rehab’ in my status for a night",
    "Lilly calls me baby fox sometimes",
  ]),
  claims: appendUnique(dyingFox.claims, [
    "DyingFox later says Faye changed her status to `go to rehab` for one night; the bounded read is casual prank-access/familiarity, not authority over Fox's account or identity.",
    "DyingFox says Lilly sometimes calls her `baby fox`, extending the already-public Lilly greeting/affection lane with a recurring nickname.",
  ]),
  antiFanon: appendUnique(dyingFox.antiFanon, [
    "Faye's one-night status prank supports familiarity only. Do not turn it into account-control, coercion, romance, biological family, or a formal role.",
    "`baby fox` is affectionate nickname language. It does not establish romance, kinship, or a formal relationship category.",
  ]),
} as ExtendedCharacter;
characterById.set("dyingfox", allCharacters[dyingFoxIndex]);

const woohyukIndex = allCharacters.findIndex((character) => character.id === "woohyuk");
if (woohyukIndex < 0) throw new Error("Run 1239 expected canonical Woohyuk owner");
const woohyuk = allCharacters[woohyukIndex] as ExtendedCharacter;
const woohyukRelationships = [...(woohyuk.relationships ?? [])];
upsertRelationship(
  woohyukRelationships,
  "Lilly",
  "Lilly can summon Woohyuk straight into Wall trouble and puncture `i am pure` with `that’s the biggest lie you’ve ever told`; he answers with theatrical deletion/protest, then the register drops and he simply tells her `please sleep`. Public prosecution and low-key practical care fit in the same exchange without needing a repair scene.",
  "/characters/lilly",
);

allCharacters[woohyukIndex] = {
  ...woohyuk,
  logline:
    "Wall defendant, receipt filer, probable old-receipt recycler, and watermelon prosecutor: Woohyuk can plead `i am pure`, get laughed out of court, quietly tell Lilly `please sleep`, then turn around and keep old screenshot packets useful enough to surface again months later. Summon him into a bit and he is more likely to add direction than leave.",
  tags: appendUnique(woohyuk.tags, ["Wall", "Receipt filer", "Low-key care", "Petty Crimes"]),
  relationships: woohyukRelationships,
  quotes: appendUnique(woohyuk.quotes, [
    "i am pure",
    "please sleep",
    "In corpse voice uwu",
    "yea watermelon is just sweet water",
    "in a form of a melon",
    "tryna play us dumb",
  ]),
  claims: appendUnique(woohyuk.claims, [
    "Woohyuk moves between defendant and filer on the Wall: he performs innocence/deletion when summoned, but also posts receipt packets himself and appears to resurface the same two-image packet months later.",
    "The Woohyuk/Lilly lane can move from mock prosecution to `please sleep` in seconds, supporting comfortable teasing plus low-key practical care without implying romance or kinship.",
    "When directly summoned into a later screenshot gag, Woohyuk contributes `In corpse voice uwu` rather than withdrawing, reinforcing a summonable, bit-feeding social style.",
    "Woohyuk's watermelon verdict is that it is `just sweet water` in melon form and is `tryna play us dumb`.",
  ]),
  antiFanon: appendUnique(woohyuk.antiFanon, [
    "Lilly's posts and summons do not establish who appears in uninspected attachments. Keep POSTED BY distinct from MADE BY, CAPTURED BY, and FEATURING.",
    "Woohyuk and Lilly's mock prosecution plus `please sleep` exchange supports comfortable teasing and practical care only; do not inflate it into romance, kinship, or a ranked friendship claim.",
    "The repeated two-image packet is strong/probable resurfacing based on same order and exact sizes, not cryptographic proof of identical underlying files.",
    "`LUNA` remains unresolved and is not an identity bridge.",
  ]),
} as ExtendedCharacter;
characterById.set("woohyuk", allCharacters[woohyukIndex]);
