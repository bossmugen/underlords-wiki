import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  next: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === next.name);
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

// Citrinitas — the Wall welcome pocket is a tiny naming tribunal, except the
// defendant keeps helping the prosecution improve the joke.
const citrinitasId = "citrinitas";
const citrinitasIndex = allCharacters.findIndex(
  (character) =>
    character.id === citrinitasId ||
    character.name === "Citrinitas" ||
    (character.aliases ?? []).some((alias) => alias === "暁cit。(S73)"),
);

const moonRelationship = {
  name: "Moon",
  note:
    "Moon's accidental `city` reading is the version Citrinitas actively chooses: Citrinitas TRUE-replies `That’s cute 🥹💗`, and Moon immediately TRUE-replies `Your the cutest city:malNekoHeart:`. Citrinitas is not just taking the roast; the joke gets edited into something mutually affectionate in real time.",
  href: "/characters/moon",
};

const citrinitasQuotes = [
  "Lmfaoooo 🤣🤣",
  "That’s cute 🥹💗",
  "You know the full name was Citrinitas so it does sounds like citric 💀🤣",
  "Rip mah soul",
];

const citrinitasClaims = [
  "On 2023-04-03 a Wall welcome pocket turns the rendered `cit` into `zit`, `city`, `citric acid`, and `Citric`. Citrinitas repeatedly laughs, says Moon's `city` version is better, TRUE-replies that it is cute, and later volunteers that the full name `Citrinitas` makes the `citric` joke unfortunately plausible. The recurring mechanism inside the scene is collaborative self-teasing and selective joke editing rather than passive roast tolerance.",
  "Moon and Citrinitas have a mechanically supported one-scene affectionate-banter chain: Moon says `city`; Citrinitas TRUE-replies `That’s cute 🥹💗`; Moon TRUE-replies `Your the cutest city:malNekoHeart:`. The final export records Citrinitas among the purple-heart reaction users on Moon's reply, but reaction click timing is unavailable.",
];

const citrinitasAntiFanon = [
  "`City`, `Citric`, `citric acid`, and `zit` are scene-level joke labels, not durable aliases. `cit` is already rendered before this exchange, so this scene does not establish nickname origin.",
  "Moon ↔ Citrinitas is bounded warm banter in one welcome pocket, not a closeness ranking, romance claim, or durable nickname canon.",
  "Mugen's welcome `image.png` is POSTED BY Mugen only. The pixels were not inspected, so MADE BY, CAPTURED BY, FEATURING, and visual-content claims remain unresolved.",
  "Citrinitas's `definitely is better` line lands 4.813 seconds after Moon's `city` line and probably evaluates it, but the message is Default rather than a mechanical Reply. The later `That’s cute` exchange is a true Reply chain.",
];

const citrinitasCharacter: ExtendedCharacter = {
  id: citrinitasId,
  name: "Citrinitas",
  aliases: ["暁cit。(S73)"],
  billing: "legacy",
  role: "Wall-era cast",
  era: "2023",
  logline:
    "Good-humored co-author of the joke at their own expense: when `cit` becomes a tiny public naming tribunal, Citrinitas laughs, selects `city` as the cute option, then personally explains why the prosecution's `citric` theory has merit before filing `Rip mah soul`.",
  tags: [
    "Archive cast",
    "Wall",
    "Collaborative self-teasing",
    "Name wordplay",
    "Affectionate banter",
    "Petty Crimes",
  ],
  relationships: [moonRelationship],
  quotes: citrinitasQuotes,
  claims: citrinitasClaims,
  antiFanon: citrinitasAntiFanon,
};

if (citrinitasIndex >= 0) {
  const citrinitas = allCharacters[citrinitasIndex] as ExtendedCharacter;
  const relationships = [...(citrinitas.relationships ?? [])];
  upsertRelationship(relationships, moonRelationship);

  allCharacters[citrinitasIndex] = {
    ...citrinitas,
    ...citrinitasCharacter,
    aliases: [...new Set([...(citrinitas.aliases ?? []), ...(citrinitasCharacter.aliases ?? [])])],
    tags: [...new Set([...(citrinitas.tags ?? []), ...(citrinitasCharacter.tags ?? [])])],
    relationships,
    quotes: [...new Set([...(citrinitas.quotes ?? []), ...citrinitasQuotes])],
    claims: [...new Set([...(citrinitas.claims ?? []), ...citrinitasClaims])],
    antiFanon: [...new Set([...(citrinitas.antiFanon ?? []), ...citrinitasAntiFanon])],
  } as ExtendedCharacter;
} else {
  allCharacters.push(citrinitasCharacter);
}

const resolvedCitrinitas = allCharacters.find((character) => character.id === citrinitasId)!;
characterById.set(citrinitasId, resolvedCitrinitas);

// Sye + Gabu — this Daycare slice makes the shared-maintenance relationship
// genuinely reciprocal. Sye documents the system for future humans; Gabu later
// picks up a broken event after work and fixes it. Nobody gets a permanent
// Wizard Chair just because they knew the command this time.
const syeIndex = allCharacters.findIndex((character) => character.id === "sye");
if (syeIndex >= 0) {
  const sye = allCharacters[syeIndex] as ExtendedCharacter;
  const relationships = [...(sye.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Gabu",
    note:
      "Their Saber lane runs both directions. Earlier, Sye is the rescue rope while Gabu learns commands; later Gabu praises Sye's pinned command sheet, and in 2023 answers Sye's `still doesn't work` with `Im gonna see it after work today dw` before successfully editing the event. The useful knowledge moves sideways: each can be the person asking and the person fixing.",
    href: "/characters/gabu",
  });

  const claims = [
    "On 2022-03-12 Sye notices that Saber control seems to have fewer pinned references than expected and reacts `hmm i though we had more stuff pinned here, well not a problem`. She inventories configuration and schedules, treats command errors as state information, writes and pins a DST/EST command reference, and says `will update schedule after all of todays events are over` before continuing maintenance. The same pinned reference is edited again on 2023-03-12.",
    "Sye's pinned Saber reference is operationally meticulous and visibly typo-riddled at the same time — including `CLash`, `Huanted`, and `Realm Barrier (This oen has been removed)`. The useful contradiction is consequences-first documentation without polish theatre: future Sye needs the command to work more than she needs the cheat sheet to win a spelling bee.",
    "Gabu and Sye's shared-maintenance relationship is reciprocal across the recovered Saber-control material. Sye backs Gabu up while she learns; Gabu later celebrates Sye's rebuilt documentation and independently takes over a broken-event check after work. Neither direction supports a permanent mentor/trainee hierarchy.",
  ];

  const antiFanon = [
    "Sye's 2022 reconstruction and pinned reference show shared-system maintenance and documentation, not proof that she created Saber, owned the bot, created Daycare, or held a formal scheduler/documentation appointment.",
    "The source-bound 2021-12-23 through 2022-03-11 quiet interval is a gap in the recovered Saber-control export only; do not turn it into a Sye, Daycare, or UL disappearance story.",
    "Saber-generated errors and schedule output belong to Saber. Sye is the human invoker/documenter in the cited maintenance sequence; do not convert bot output into Sye-authored prose.",
    "The typo-rich reference is one working document, not evidence that Sye is globally careless or unable to spell. Its value here is the contrast between operational detail and casual presentation.",
    "Later 2024 scheduled Saber output proves the scheduler was still emitting reminders in the supplied corpus. It does not prove attendance, game participation, social vitality, or where Daycare conversation migrated.",
  ];

  allCharacters[syeIndex] = {
    ...sye,
    tags: [
      ...new Set([
        ...(sye.tags ?? []),
        "Reconstructive maintenance",
        "Future-self documentation",
        "Consequences-first competence",
        "Reciprocal technical trust",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(sye.quotes ?? []),
        "hmm i though we had more stuff pinned here, well not a problem",
        "will update schedule after all of todays events are over",
      ]),
    ],
    claims: [...new Set([...(sye.claims ?? []), ...claims])],
    antiFanon: [...new Set([...(sye.antiFanon ?? []), ...antiFanon])],
  } as ExtendedCharacter;

  characterById.set("sye", allCharacters[syeIndex]);
}

const gabuIndex = allCharacters.findIndex((character) => character.id === "gabu");
if (gabuIndex >= 0) {
  const gabu = allCharacters[gabuIndex] as ExtendedCharacter;
  const relationships = [...(gabu.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Sye",
    note:
      "Sye starts as an available technical backstop while Gabu learns Saber; the later lane is reciprocal. Gabu answers Sye's pinned command sheet with `thats amazing sye!!!!:Cat_Sporkle:` and, when Sye reports `still doesn't work` in 2023, says `Im gonna see it after work today dw` before fixing the event. They trade the screwdriver instead of occupying fixed teacher/student chairs.",
    href: "/characters/sye",
  });

  allCharacters[gabuIndex] = {
    ...gabu,
    tags: [...new Set([...(gabu.tags ?? []), "Reciprocal technical trust", "Shared maintenance"])],
    relationships,
    claims: [
      ...new Set([
        ...(gabu.claims ?? []),
        "Gabu's Saber relationship with Sye becomes visibly reciprocal: after earlier learning-with-backup scenes, Gabu later praises Sye's rebuilt pinned documentation and independently takes responsibility for checking and fixing a broken event after work.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(gabu.antiFanon ?? []),
        "The reciprocal Saber lane with Sye is peer maintenance behavior, not a formal mentorship, reporting line, scheduler hierarchy, or appointment chronology.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("gabu", allCharacters[gabuIndex]);
}
