import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertCharacter = (base: ExtendedCharacter, aliases: string[]) => {
  const existingIndex = allCharacters.findIndex(
    (character) =>
      character.id === base.id ||
      character.name === base.name ||
      (character.aliases ?? []).some((alias) => aliases.includes(alias)),
  );

  const current = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
  const next: ExtendedCharacter = {
    ...base,
    ...(current ?? {}),
    id: current?.id ?? base.id,
    name: current?.name ?? base.name,
    aliases: unique([...(current?.aliases ?? []), ...aliases]),
    billing: current?.billing ?? base.billing,
    role: current?.role ?? base.role,
    era: current?.era ?? base.era,
    logline: base.logline,
    tags: unique([...(current?.tags ?? []), ...(base.tags ?? [])]),
    relationships: current?.relationships ?? base.relationships,
    quotes: unique([...(current?.quotes ?? []), ...(base.quotes ?? [])]),
    claims: unique([...(current?.claims ?? []), ...(base.claims ?? [])]),
    antiFanon: unique([...(current?.antiFanon ?? []), ...(base.antiFanon ?? [])]),
  };

  if (existingIndex >= 0) allCharacters[existingIndex] = next;
  else allCharacters.push(next);
  characterById.set(next.id, next);
};

upsertCharacter(
  {
    id: "crystalia",
    name: "Crystalia",
    aliases: ["Pink Hana", "jeeebus"],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2020–",
    logline:
      "Low-volume, high-impact Wall depositor who barely needs prose to change the room's trajectory: put the artifact down, add one tiny reaction, and let everybody else discover they are now participating in Screenshot Court.",
    tags: ["Archive cast", "Wall", "Artifact depositor", "Compact reactions", "Screenshot Court", "Petty Crimes"],
    quotes: ["what is this...."],
    claims: [
      "Crystalia has only three surviving authored Wall rows in the longitudinal corpus, but two are attachment deposits. Her June 5, 2020 post opens the pocket that becomes Nahdea's self-own filing sequence; her August 2 attachment lands immediately before Akamin reacts to `the screenshot`. Tiny prose footprint does not equal passive presence here: the artifact itself is often the participation.",
      "The useful person read is compact intervention. Crystalia can post first, react briefly, and then disappear back out of the transcript while the room keeps running with what she dropped.",
    ],
    antiFanon: [
      "Crystalia's two Wall attachments are POSTED BY Crystalia only. Their maker, capturer, depicted subjects, and visual contents are not upgraded without object-level support.",
      "Akamin reacting after Crystalia's August attachment supports a local shared Screenshot Court pocket, not a special Crystalia↔Akamin closeness rank.",
      "Three surviving authored Wall rows are a source-bound footprint, not a claim that Crystalia was inactive elsewhere in UL.",
    ],
  },
  ["Pink Hana", "jeeebus"],
);

upsertCharacter(
  {
    id: "support-tech",
    name: "Support Tech",
    aliases: ["jk031"],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2020–",
    logline:
      "Attachment-first Wall regular whose captions behave like tiny court stamps: `Red card !`, `Wall of shame indeed`, one worried `wait...`, then back to the exhibits. The display name sounds official; the actual surviving bit is compact evidence-filing chaos.",
    tags: ["Archive cast", "Wall", "Artifact depositor", "Tiny captions", "Screenshot Court", "Petty Crimes"],
    quotes: [
      "i bet Jenn isn't embaressedxD",
      "Red card !",
      "Wall of shame indeed",
      "wait... :PepeHands:",
    ],
    claims: [
      "Across eleven surviving authored Wall rows from July 30 through October 6, 2020, Support Tech repeatedly contributes through attachments plus extremely short captions. The recurring mechanism is deposit first, verdict second: a red card, a Wall-of-Shame stamp, a tiny panic reaction, then the room can take it from there.",
      "The compact wording is part of the personality texture. Support Tech does not need a paragraph to join a prosecution; one attachment and two words can do the social work.",
    ],
    antiFanon: [
      "`Support Tech` is a display label in this source, not evidence of a formal UL office, Discord support appointment, technical job, governance role, or staff title.",
      "Support Tech's Wall attachments are POSTED BY Support Tech only. MADE BY / CAPTURED BY / FEATURING and visual-content claims require separate object-level support.",
      "The eleven surviving authored Wall rows are source-bounded and do not measure total UL activity, importance, or closeness to other members.",
    ],
  },
  ["jk031"],
);
