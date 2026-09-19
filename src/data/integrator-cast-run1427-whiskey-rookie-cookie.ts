import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);

const rookieId = "rookie-cookie-uwu";
const stableId = "348307948566478867";
const rookieIndex = allCharacters.findIndex(
  (character) => character.id === rookieId || (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);

if (rookieIndex < 0) {
  throw new Error("Run 1427 expected the existing Rookie Cookie owner; reconcile identity before publishing a new dossier.");
}

const current = allCharacters[rookieIndex] as ExtendedCharacter;
const relationships = [...(current.relationships ?? [])];
const upsertRelationship = (name: string, note: string) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

upsertRelationship(
  "RV",
  "While RV is surfacing saved old material, Rookie first wonders whether she has said any `memorable stupid shit` and then tells RV `ily for saving these`. The warmth attaches directly to RV's preservation role in that scene: being remembered through old embarrassing/funny material lands as affection instead of threat. Keep it scene-level rather than promoting it into a closeness rank or blanket consent to preserve everything.",
);
upsertRelationship(
  "Efi",
  "When Efi worries that eating two pretzels at once might be dumb, Rookie answers `No it’s not dumb cause I’d do it myself`. She reassures by stepping into the alleged offense with Efi rather than approving it from above. Less than twenty-five seconds later she redirects the room to Whiskey, neatly separating `you are fine` from `we are in the wrong channel`.",
);
upsertRelationship(
  "Plushie",
  "Plushie asks what Wall is for; Rookie answers in house language — `When we catch people say dumb stuff uwu` — and later routes the spillover to Whiskey with a Snow warning. Plushie immediately turns that warning into `Snow u saw nothing UwU`. Rookie's orientation works because it is legible as culture and play, not a lecture.",
);

const next: ExtendedCharacter = {
  ...current,
  aliases: appendUnique(current.aliases, [".poogie.", "Rooks"]),
  stableDiscordIds: appendUnique(current.stableDiscordIds, [stableId]),
  logline:
    "Rookie Cookie knows where the nonsense belongs without pretending she is above it. She can explain Wall as the place `when we catch people say dumb stuff uwu`, reassure somebody by admitting she would commit the same tiny offense, then point everybody toward Whiskey before Snow catches them cluttering the wrong room. The social map becomes part of the joke in her hands: first she learns it, then she teaches it, then an emote plus a channel link is enough. She is still the screenshot-catching little archive goblin from Wall; now the larger pattern is clearer — rule-aware, deeply inside the mess, and very good at making boundaries feel like belonging instead of punishment.",
  tags: appendUnique(current.tags, [
    "Social navigation",
    "House language",
    "Rule-aware co-conspirator",
    "Channel culture",
    "Archive memory",
    "Whiskey",
    "RV",
    "Efi",
    "Plushie",
  ]),
  relationships,
  quotes: appendUnique(current.quotes, [
    "When we catch people say dumb stuff uwu",
    "No it’s not dumb cause I’d do it myself",
    "Anyway, Snow will come after y’all if you keep talking here so go to #🥃💬｜whiskey-room",
    ":HTVN_KannaSip: #🥃💬｜whiskey-room",
    "I cant remember if I had said any memorable stupid shit lmao",
    "Rv ily for saving these",
  ]),
  claims: appendUnique(current.claims, [
    "Stable Discord account 348307948566478867 / `.poogie.` is the reviewed Rookie Cookie owner for this Whiskey-navigation handoff.",
    "On 2020-05-17 Rookie is on the receiving end of a channel map that identifies Whiskey as general chat. This is an orientation floor, not recruitment origin or appointment chronology.",
    "By 2020-10-19 Rookie can explain Wall to Plushie as `When we catch people say dumb stuff uwu`, validate Efi's two-pretzel worry with `No it’s not dumb cause I’d do it myself`, and 24.896 seconds later redirect the spillover to Whiskey. The person-level mechanism is low-friction social navigation: validate the person, correct the venue.",
    "On 2020-12-20 Rookie repeats the Wall-to-Whiskey redirect with only `:HTVN_KannaSip:` plus the Whiskey channel link. The May-to-October-to-December sequence supports a small change-over-time arc from being oriented, to orienting others, to using compressed house shorthand without requiring any formal-title story.",
    "On 2020-08-22 Rookie wonders whether she has any `memorable stupid shit` in saved material and later tells RV `ily for saving these`. That supports scene-level affection for shared embarrassing/funny history and RV's preservation role, not universal privacy consent.",
    "The Efi antecedent for `No it’s not dumb cause I’d do it myself` is now resolved to Efi's local concern about eating two pretzels at once; do not carry that line as contextless in future synthesis.",
  ]),
  antiFanon: appendUnique(current.antiFanon, [
    "Rookie's channel redirects show social fluency, not proof that she was a moderator, Officer, Staff member, or formal rule enforcer at those dates.",
    "`Snow will come after y’all` is house-joke warning language inside a channel redirect. It does not establish a special Snow↔Rookie relationship or Snow appointment chronology.",
    "The October Efi and Plushie exchanges are strong contextual responses without serialized Discord Reply edges; preserve that distinction.",
    "`Rv ily for saving these` supports warmth toward saved funny/embarrassing history in that scene only. It is not blanket consent to archive private material and not a global closeness ranking.",
    "Current readable sources establish repeated redirects toward Whiskey but did not surface direct Rookie-authored Whiskey prose in this pass. That retrieval seam is not evidence of absence from Whiskey.",
  ]),
};

allCharacters[rookieIndex] = next;
characterById.set(current.id, next);
