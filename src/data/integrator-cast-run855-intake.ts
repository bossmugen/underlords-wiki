import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const requireIndex = (id: string, label: string): number => {
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) throw new Error(`Run 855 expected canonical ${label} owner; refusing to invent a duplicate.`);
  return index;
};

const ansunIndex = requireIndex("ansun", "Ansun / Sou");
const ansun = allCharacters[ansunIndex] as ExtendedCharacter;
allCharacters[ansunIndex] = {
  ...ansun,
  tags: appendUnique(ansun.tags, ["Wall", "Fame", "Self-filing", "Peer reputation", "Shame/Fame calibration", "Petty Crimes"]),
  quotes: appendUnique(ansun.quotes, ["shame fame, same thing 😎", "not an achievement most people would be happy with", "achievemny"]),
  claims: appendUnique(ansun.claims, [
    "In a Wall conversation peers explicitly remember Sou/Ansun as `always fame` and as somebody who never landed on the shame side of the room's running category. The useful point is reputation: other people already know how to classify him inside the joke.",
    "On 2021-04-29 Ansun/Sou personally posts a four-image Wall sequence after `and another one`. That makes him an active feeder of the same room where peers remember him as Fame material rather than a passive subject of somebody else's receipts.",
    "Ansun does not treat Shame and Fame as fixed moral categories. In August 2020 he can answer the room's `hall of fame` alternative with `shame fame, same thing 😎`; when BAPE boasts that a sex-doll filing made her famous, he punctures the victory lap with `not an achievement most people would be happy with`; when Han marks getting onto the Wall within an hour of turning twenty-five, Ansun answers `achievemny`. He calibrates the joke to the defendant's own posture instead of insisting on one permanent reading.",
  ]),
  antiFanon: appendUnique(ansun.antiFanon, [
    "Sou / Souta / 颯太 / sou.san remain canonical Ansun aliases. Source-local display labels do not create a second Sou person.",
    "The 2021-04-29 media sequence is POSTED BY Ansun only. Uninspected pixels do not establish MADE BY, CAPTURED BY, or FEATURING attribution.",
    "The August 2020 Snow images are POSTED BY Snow only. Their nearby Shame/Fame naming exchange supports the room-level framing, not object-level authorship, subject, or creation claims for the images.",
    "Peers calling Ansun `always fame` is room reputation inside the Wall joke, not a formal rank, popularity metric, or chronology-of-origin claim.",
    "Ansun's Shame/Fame calibration is recurring social behavior, not a claim that he invented either label or that every Wall filing followed his preferred framing.",
  ]),
} as ExtendedCharacter;
characterById.set("ansun", allCharacters[ansunIndex]);

const dayaIndex = requireIndex("daya", "Daya");
const daya = allCharacters[dayaIndex] as ExtendedCharacter;
allCharacters[dayaIndex] = {
  ...daya,
  tags: appendUnique(daya.tags, ["Color preference", "Petty Crimes"]),
  quotes: appendUnique(daya.quotes, ["Blue or black"]),
  claims: appendUnique(daya.claims, [
    "In QOTD #338 (`Favorite color?`), Daya directly answers `Blue or black`. Keep it as a tiny preference, not personality symbolism.",
  ]),
} as ExtendedCharacter;
characterById.set("daya", allCharacters[dayaIndex]);

// Nemu also directly answers `Blue and Black` in the same QOTD, but there is no
// canonical public Nemu owner on this surface. Bank the fact rather than creating
// a dossier from one preference answer.

const mimiIndex = requireIndex("mimi", "Mimi / Opalite Honey");
const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
allCharacters[mimiIndex] = {
  ...mimi,
  tags: appendUnique(mimi.tags, ["Creative adapter", "Poster maker", "Practical help", "Mugen teasing", "Petty Crimes"]),
  quotes: appendUnique(mimi.quotes, ["^ should be on a poster"]),
  claims: appendUnique(mimi.claims, [
    "Mimi's creative instinct is often conversion rather than ceremony. When a visual lands, she can immediately see another communal form for it: on 2023-04-02 she says `^ should be on a poster`, and Mugen fires back `LMFAOO SAID THE POSTER MAKER`. Mugen's answer works like an old reputation being invoked, not a one-off compliment.",
    "A separate AI-art help pocket probably shows the practical version of the same instinct: someone cannot use Meitu, the helper offers `I can do it for u` / `send pic il do it`, and the recipient later says `Mimi did it for me it's sooo prettyyy`. The recipient's direct credit makes Mimi the likely bridge while exact helper author-ID backfill remains open.",
    "The contrast is very Mimi-shaped: low-ceremony service language on one side, a recognizable poster-making reputation on the other. She does not need to announce expertise before making the blocked thing usable or the existing thing more shareable.",
  ]),
  antiFanon: appendUnique(mimi.antiFanon, [
    "Mimi is stable account 783389804079349800 / opalite.honey and remains distinct from Mia, stable account 439628808545632256. Display-name similarity must not transfer scenes, aliases, roles, relationships, or media between them.",
    "The Meitu helper lines are probable Mimi material because the recipient directly credits Mimi afterward, but the helper rows still need stable author-ID backfill. Keep that uncertainty attached to those lines instead of laundering it into a hard quote.",
    "Mugen calling Mimi `THE POSTER MAKER` is lived reputation/teasing, not a formal Media appointment or role chronology.",
    "Mimi's indexed media-bearing posts establish POSTED BY at the posting-event level only. They do not automatically establish MADE BY, CAPTURED BY, or FEATURING Mimi.",
  ]),
} as ExtendedCharacter;
characterById.set("mimi", allCharacters[mimiIndex]);

for (const id of ["mimi", "mia"]) {
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) continue;
  const character = allCharacters[index] as ExtendedCharacter;
  allCharacters[index] = {
    ...character,
    antiFanon: appendUnique(character.antiFanon, [
      "Do not attribute `Yellow! 🌻🥂` from the legacy `--Mimi 🥂|| Mia` QOTD block to Mimi/Mia. The underlying message belongs to the annuh / ConfuLuna / mari account; pasted display labels are not authorship.",
    ]),
  } as ExtendedCharacter;
  characterById.set(id, allCharacters[index]);
}
