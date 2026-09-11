import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const existingIndex = allCharacters.findIndex(
  (character) => character.id === "effe" || character.name === "ƐℲı˥",
);

const base: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "effe",
        name: "ƐℲı˥",
        aliases: [],
        billing: "legacy",
        role: "Archive-era member · tinkerer",
        era: "2020–2025+",
        logline:
          "Cars, planes, engineering, Lego, and the apparently irresistible need to keep poking a broken setup until it behaves. ƐℲı˥ can be painstaking about the process and completely unserious about presenting it: test, swear, correct, test again, eventually announce that everything works.",
      };

const relationships = [...(base.relationships ?? [])];
const upsertRelationship = (name: string, note: string, href?: string) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  if (index >= 0) relationships[index] = { ...relationships[index], note, ...(href ? { href } : {}) };
  else relationships.push({ name, note, ...(href ? { href } : {}) });
};

upsertRelationship(
  "Snow",
  "In the 2020 Saber room, Ɛ says they are `just helping snow out` and the two coordinate schedule visibility while Ɛ configures, tests, corrects dates, and removes an extra test schedule. It is practical co-debugging and an explicit help target, not a hierarchy claim.",
  "/characters/snow",
);
upsertRelationship(
  "Drink water reminder",
  "Their troubleshooting runs both directions. In 2021 Ɛ explains why a timezone change still requires event-time edits and gets an `Ahh`; in 2023 Drink water reminder brings back a more developed Carl/Saber test model, mechanically replies to Ɛ's exact diagnostic suggestions and questions, and Ɛ finishes with `I see I see`. The useful relationship is reciprocal technical problem-solving, not permanent expert and student roles.",
);

const next: ExtendedCharacter = {
  ...base,
  id: base.id || "effe",
  name: base.name || "ƐℲı˥",
  aliases: unique([...(base.aliases ?? [])]),
  billing: base.billing ?? "legacy",
  role: base.role || "Archive-era member · tinkerer",
  era: base.era || "2020–2025+",
  logline:
    "Cars, planes, engineering, Lego, and the apparently irresistible need to keep poking a broken setup until it behaves. ƐℲı˥ can be painstaking about the process and completely unserious about presenting it: test, swear, correct, test again, eventually announce that everything works — even if a few years later the next step is `i forgot how to uses this bot xD` and opening help again.",
  tags: unique([
    ...(base.tags ?? []),
    "Archive cast",
    "Engineering",
    "Cars",
    "Planes",
    "Lego",
    "Troubleshooter",
    "Technical helper",
    "Open self-correction",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(base.quotes ?? []),
    "I love everything related to cars, planes or just engineering in general.",
    "I love legos",
    "Want to get every car now",
    "everything works now mfsksmfmd",
    "Hi gili just helping snow out",
    "23 hours!!! What did snow do!!!",
    "i forgot how to uses this bot xD",
    "I see I see",
  ]),
  claims: unique([
    ...(base.claims ?? []),
    "Across ƐℲı˥'s authored 2020 profile material, the hobby signal is unusually consistent: cars, planes, engines, engineering and Lego all sit in the same mechanical/maker lane, while drawing, art and music are described as smaller side interests.",
    "On April 17, 2021, ƐℲı˥ spends a long live troubleshooting pocket comparing setups, clarifying server and multiplayer state, and chasing the problem until it works. When one branch of advice turns out to be wrong, the correction is immediate: `ignore me`, `fuck me`, then `everything works now mfsksmfmd` once the setup behaves.",
    "The same process recurs in Saber tooling across years. In 2020 Ɛ explicitly says they are helping Snow, iterates configuration and test schedules, reacts to a bad horizon with `23 hours!!! What did snow do!!!`, and keeps correcting the setup instead of treating the exclamation as the conclusion.",
    "In 2021 Ɛ gives Drink water reminder a concrete timezone explanation with a readable `Ahh` response. By 2023 the help runs both ways: Ɛ offers diagnostics, then asks how the Carl/Saber paths are split and accepts Drink water reminder's explanation with `I see I see`.",
    "By 2025 Ɛ can openly say `i forgot how to uses this bot xD`, invoke help, and resume using the tooling. The durable trait is therefore not permanent mastery. It is the willingness to admit the gap, retrieve what is missing, test again, and keep moving.",
    "The hobby identity and the social behavior point in the same direction: ƐℲı˥ does not just like mechanical things in the abstract; technical friction becomes something to poke at, explain, retest and revise in public. Methodical process and unserious presentation coexist comfortably.",
  ]),
  antiFanon: unique([
    ...(base.antiFanon ?? []),
    "The April 17 troubleshooting pocket does not safely identify every addressee or mention target. Saber is a neighboring responder in the preserved context, but adjacency alone is not upgraded into a verified direct dyad.",
    "The explicit Snow help lane and the reciprocal Drink water reminder troubleshooting establish practical behavior, not appointment chronology, formal authority, hierarchy, or a permanent expert role.",
    "`23 hours!!! What did snow do!!!` is comic/frustrated wording inside a troubleshooting loop, not factual blame for a failure.",
    "Do not infer the exact game title from the preserved April 17 troubleshooting lines alone.",
    "No private-life background should be inferred from `same as you kinda`, regional/server talk, or gameplay-session wording.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(next.id, next);
