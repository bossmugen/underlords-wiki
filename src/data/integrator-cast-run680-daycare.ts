import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) {
    const existing = relationships[index];
    relationships[index] = {
      ...existing,
      ...relationship,
      note: existing.note && existing.note !== relationship.note
        ? `${existing.note} ${relationship.note}`
        : relationship.note,
    };
  } else {
    relationships.push(relationship);
  }
};

// Run 680 Daycare + late-Wall support handoff: Oyasumi's useful contradiction is
// volume versus recognizability. He can say almost nothing and still leave a
// signature: one dry verdict, or the same flashbang-cat response whenever light
// mode appears. Wall's later exact pass upgrades that from a loose recurrence to
// three recovered uses of the same reaction asset plus a direct Rummy verdict.
const oyasumiIndex = allCharacters.findIndex((character) => character.id === "oyasumi");
if (oyasumiIndex >= 0) {
  const oyasumi = allCharacters[oyasumiIndex];
  const relationships = [...(oyasumi.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Rummy",
    note:
      "Rummy repeatedly supplies the light-mode evidence that activates Oyasumi's otherwise dry courtroom voice. In May 2024 Rummy tags him in a screenshot packet and Oyasumi answers, `The only thing shameful here is the fact that you're on light mode`; in October another Rummy screenshot is followed by Oyasumi deploying the same flashbang-cat GIF again. Rich's next-day `dark side` callback and Rummy's answer show the theme had become remembered group history, without establishing an exact origin or closeness ranking.",
    href: "/characters/rummy",
  });

  allCharacters[oyasumiIndex] = {
    ...oyasumi,
    logline:
      "Consigliere with a low-volume, high-signature habit of walking into Screenshot Court, issuing one dry sentence, and moving on. Light mode is apparently a recurring optical felony, punishable by the same emergency flashbang-cat GIF.",
    tags: appendUnique(oyasumi.tags, [
      "Dry verdicts",
      "Wall",
      "Light-mode prosecution",
      "Recurring reaction GIF",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(oyasumi.quotes, [
      "This is such a cursed image",
      "The ultimate betrayal",
      "A face only a mother could love",
      "Most intelligible ul conversation",
      "There’s just some shameful stuff out here",
      "The only thing shameful here is the fact that you're on light mode",
    ]),
    claims: appendUnique(oyasumi.claims, [
      "Across separate 2022 Wall scenes Oyasumi repeatedly compresses his reaction into short dry verdicts, and from 2023 into 2024 he repeatedly reuses the same blind-cat / flashbang GIF around light-mode screenshots; the May 2024 recurrence is explicitly inside a light-mode discussion.",
      "The same exact `cat-blind-flashbang-light-mode` Tenor reaction is recovered under Oyasumi's account on 2023-03-19, 2023-09-25, and 2024-10-10. On 2024-05-08, after Rummy tags him in a screenshot packet, Oyasumi says `The only thing shameful here is the fact that you're on light mode`.",
      "On 2024-10-11 Rich true-replies to Rummy's prior screenshot with `I thought we made you switch to the dark side one day`; Rummy answers `We did....that was 7 months ago....`. This is participant memory that the light-mode dispute already had history, not an exact switch date or origin receipt.",
    ]),
    antiFanon: appendUnique(oyasumi.antiFanon, [
      "The repeated light-mode reaction is a running UI-preference joke; it does not establish medical light sensitivity.",
      "Oyasumi calling Cogumelo `my boy` supports familiar joking ease only; it is not treated as literal family, romance, or a closeness ranking.",
      "Oyasumi and Rummy's repeated light-mode teasing supports a bounded recurring joke lane, not an exact origin, formal enforcement role, or closeness hierarchy.",
      "Rummy's screenshots are confirmed only as POSTED BY Rummy in this handoff; their pixels were not inspected, so MADE BY / CAPTURED BY / FEATURING and exact visual subject remain unresolved. Oyasumi posts the Tenor reaction but did not make the third-party GIF.",
    ]),
  };
  characterById.set("oyasumi", allCharacters[oyasumiIndex]);
}

// DyingFox already owns a recurring food / Snack Toll axis. The new information
// is relational: Ren can summon Fox into a dumb dinner dispute, and Fox answers
// pat first, ruling second. Merge that behavior instead of creating Food Lore II.
const dyingFoxIndex = allCharacters.findIndex((character) => character.id === "dyingfox");
if (dyingFoxIndex >= 0) {
  const dyingFox = allCharacters[dyingFoxIndex];
  const relationships = [...(dyingFox.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Ren",
    note:
      "In a dinner argument Ren directly summons DyingFox with a distressed `HALP`; Fox answers within seconds with a pat, then rules `It's dinner you can eat it`, and Ren immediately counts the vote. The order is the charm: comfort first, food-law counsel second.",
    href: "/characters/ren",
  });

  allCharacters[dyingFoxIndex] = {
    ...dyingFox,
    logline:
      "Platelet and recurring younger-generation cast member whose food fixation keeps turning into social infrastructure: meal bits, Snack Toll energy, and the person Ren can summon to provide one pat and an immediate dinner ruling.",
    tags: appendUnique(dyingFox.tags, [
      "Food law",
      "Snack Toll",
      "Low-stakes backup",
      "Care by feeding",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(dyingFox.quotes, [
      "It's dinner you can eat it",
    ]),
    claims: appendUnique(dyingFox.claims, [
      "On 2022-08-06 Ren directly summons DyingFox during a dinner dispute; Fox answers within seconds with a pat reaction, then `It's dinner you can eat it`, and Ren counts Fox's support toward the dinner side.",
    ]),
    antiFanon: appendUnique(dyingFox.antiFanon, [
      "The Ren scene supports comfortable summons-and-response and low-stakes alliance behavior; one food argument does not create a formal relationship label or closeness ranking.",
      "The image that opens the 2022-08-06 scene is confirmed only as POSTED BY Gilli. Its body was not independently recovered in this handoff, so CAPTURED BY / MADE BY / FEATURING and exact visual subject remain unresolved.",
    ]),
  };
  characterById.set("dyingfox", allCharacters[dyingFoxIndex]);
}
