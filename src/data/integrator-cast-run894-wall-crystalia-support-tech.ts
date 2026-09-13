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
    relationships: base.relationships ?? current?.relationships,
    quotes: unique([...(current?.quotes ?? []), ...(base.quotes ?? [])]),
    claims: unique([...(base.claims ?? [])]),
    antiFanon: unique([...(base.antiFanon ?? [])]),
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
      "Crystalia can be almost silent on Wall and still be unmistakably part of the room: he contributes one tiny `Woah`, Mugen can drag him straight into fake weekly-show billing, and Anthos later remembers him in the successful-dungeon roll call. Quiet does not read as stranger here. The room already knows where to put him.",
    tags: [
      "Archive cast",
      "Wall",
      "Compact reactions",
      "Quiet but socially legible",
      "Summoned into bits",
      "Shared play",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Mugen",
        note:
          "Mugen can summon Crystalia into a public bit with almost no setup. In February 2021 she tags him directly, then mock-bills him as `UL's very own mermaid` in a fake weekly-show promo. The joke lands like familiar room shorthand: he is recognizable enough to be cast into the nonsense without an introduction.",
        href: "/characters/mugen",
      },
      {
        name: "Anthos",
        note:
          "Anthos later includes Crystalia in a successful dungeon-run roll call with three other people. It is a small shared-play edge, but a useful one: even when Crystalia contributes almost no surviving Wall prose, other people still remember him as part of the group that was there.",
        href: "/characters/anthos",
      },
    ],
    quotes: ["what is this....", "Woah"],
    claims: [
      "In the current complete stable-ID Wall census, Crystalia's visible authorship is almost comically small: one surviving line, `Woah`. The same source still gives him three direct mentions, so low posting volume is not the same thing as social invisibility.",
      "Mugen tags Crystalia twice in February 2021. One of those pulls him into fake serial billing as `UL's very own mermaid`, turning him into part of the joke without needing to explain who he is first.",
      "On May 9, 2021, Anthos names Crystalia alongside three others in `just another successful dungeon run ...`. The useful person read is quiet presence plus recognizability: he can leave almost no prose in the room and still get summoned, cast into bits, and remembered in shared play.",
    ],
    antiFanon: [
      "The current complete stable-ID Wall census does not reproduce the older Run-894 three-authored-row / two-attachment footprint. Treat that count discrepancy as unresolved source-package variance; do not turn either count into a claim about Crystalia's total UL activity.",
      "The nearby February 20 and May 9 images are uninspected. Preserve their recorded POSTED BY attribution only; do not infer MADE BY, CAPTURED BY, depicted subject, or FEATURING from adjacency.",
      "`UL's very own mermaid` is one-off mock-show billing, not a formal role, governance title, literal identity, or persistent nickname unless recurrence surfaces.",
      "Mugen's summons and Anthos's dungeon-run acknowledgment support bounded familiarity and shared-room/shared-play inclusion, not a friendship or closeness ranking.",
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
