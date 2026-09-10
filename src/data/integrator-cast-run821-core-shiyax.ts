import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

const index = allCharacters.findIndex((candidate) => candidate.id === "shiyax");
if (index < 0) {
  throw new Error("Run 821 expected canonical ShiyaX owner; refusing to create a duplicate person.");
}

const shiya = allCharacters[index] as ExtendedCharacter;
const relationships = [...(shiya.relationships ?? [])];

upsertRelationship(
  relationships,
  "Han",
  "The Voice Challenge catches a very Shiya/Han little creative lane: Shiya names Han as the benchmark in `Not as good as @. but heres mine`, comes back with another submission the next day, and when Han narrates it as inspiration he directly replies `I got bored :Cat_Gun:`. Comfortable enough to compare, participate, and puncture the grander explanation of his own motive.",
  "I got bored",
  "/characters/han",
);

allCharacters[index] = {
  ...shiya,
  aliases: appendUnique(shiya.aliases, ["Yaya", "shiyaracle"]),
  logline: appendOnce(
    shiya.logline,
    "His self-roasts do not remove him from the action: he can lead with `Not as good as... but heres mine`, return with another submission anyway, call himself the `walmart version`, then later offer `Never Say Why Me , Always Say Try Me 😎` as his own advice. Shiya lowers the billing and still walks onstage.",
    "lowers the billing",
  ),
  tags: appendUnique(shiya.tags, ["Voice Challenge", "QOTD", "Self-roast / follow-through"]),
  relationships,
  quotes: appendUnique(shiya.quotes, [
    "Not as good as @. but heres mine :ppsweat:",
    "I got bored :Cat_Gun:",
    "I feel like this me , but the walmart version, agree ?",
    "Never Say Why Me , Always Say Try Me 😎",
    "whats the question!!!!",
    "i'll have to avoid saying too much spoilers :KarenNoNo:",
  ]),
  claims: appendUnique(shiya.claims, [
    "Stable Discord account 341219730025349130 anchors ShiyaX / Yaya / shiyaracle in this intake family.",
    "On 2021-10-18 Shiya says `Not as good as @. but heres mine` while mechanically mentioning Han, then posts a song-labelled MOV; on 2021-10-19 he returns with another MOV and directly replies `I got bored` when Han says he got inspired.",
    "On 2022-04-29 Shiya posts a Jason Momoa Tenor response to a spirit-celebrity prompt and self-replies `I feel like this me , but the walmart version, agree ?`; the prompt explicitly says the answer need not physically resemble the respondent.",
    "On 2022-05-15 Shiya gives `Never Say Why Me , Always Say Try Me 😎` as his own advice. Its character value comes from recurrence with earlier try-anyway behavior, not from treating one QOTD answer as a universal life motto.",
  ]),
  antiFanon: appendUnique(shiya.antiFanon, [
    "Self-deprecating joke language is not a mental-health diagnosis, insecurity diagnosis, or body/appearance canon.",
    "The spirit-celebrity prompt explicitly rejects a look-alike requirement; `walmart version` does not establish physical resemblance to Jason Momoa.",
    "Shiya's Voice Challenge MOVs are POSTED BY Shiya only. Their pixels were not inspected, so do not infer MADE BY, CAPTURED BY, FEATURING, or specific audio/visual performance contents beyond the accompanying text.",
    "Shiya and Han have a bounded creative-comparison/banter lane here; do not turn it into a closeness ranking.",
    "A privacy-sensitive unrelated support-room line from the broader Shiya sample is excluded from public use and must not be used for health, diagnosis, or family-background inference.",
    "A WHOLE GALLERY remains the Voice Challenge episode owner; do not create a duplicate episode from these person-level receipts.",
  ]),
} as ExtendedCharacter;

characterById.set("shiyax", allCharacters[index]);
