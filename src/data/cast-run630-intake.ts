import "./canonicalize-cast";
import { allCharacters, characterById } from "./cast";

const upsertRelationship = (
  relationships: Array<{ name: string; note: string; href?: string }>,
  relationship: { name: string; note: string; href?: string },
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 630 — Wall. Ghostt's surviving Wall voice is low-verbiage, not low-presence:
// visual shorthand, dry one-line commentary, and comfortable mock blame can carry
// whole exchanges without anybody stopping to explain the joke.
const ghosttIndex = allCharacters.findIndex((character) => character.id === "ghostt");
if (ghosttIndex >= 0) {
  const ghostt = allCharacters[ghosttIndex];
  const relationships = [...(ghostt.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Tofu",
    note: "Tofu posts `Watermelon is gross, fight me`; Ghostt true-replies with a bunny-fight emote, Tofu fires back with a fighting GIF, and Ghostt answers with laughter. Neither person explains the premise. Comfortable visual sparring, not proof of Ghostt's watermelon opinion.",
    href: "/characters/tofu",
  });
  upsertRelationship(relationships, {
    name: "HamitteY",
    note: "Ghostt files screenshot evidence with a wheeze; Hami answers `BRUH GHOST`, Ghostt pleads `She set me up for it 😂`, and Hami immediately concedes `nah but you right`. Mock accusation, mock alibi, concession — all with almost no setup.",
  });
  const quotes = [...new Set([
    ...(ghostt.quotes ?? []),
    "I haven’t been on in so long I forget which club I’m in lol",
    "Yeah but I left it and then uninstalled not long after that",
    "She set me up for it 😂",
  ])];
  allCharacters[ghosttIndex] = {
    ...ghostt,
    logline: "Reaction-first Wall regular who can conduct an argument in emotes, toss one dry line into a running bit, and keep resurfacing socially even after saying the game itself had fallen out of her life.",
    tags: [...new Set([...(ghostt.tags ?? []), "Wall", "Visual shorthand", "Reaction-first", "Petty Crimes"])],
    relationships,
    quotes,
  };
  characterById.set("ghostt", allCharacters[ghosttIndex]);
} else {
  const ghostt = {
    id: "ghostt",
    name: "Ghostt",
    billing: "legacy" as const,
    role: "Archive-era UL member",
    era: "2020–2022+",
    logline: "Reaction-first Wall regular who can conduct an argument in emotes, toss one dry line into a running bit, and keep resurfacing socially even after saying the game itself had fallen out of her life.",
    tags: ["Archive cast", "Wall", "Visual shorthand", "Reaction-first", "Petty Crimes"],
    relationships: [
      {
        name: "Tofu",
        note: "Tofu posts `Watermelon is gross, fight me`; Ghostt true-replies with a bunny-fight emote, Tofu fires back with a fighting GIF, and Ghostt answers with laughter. Neither person explains the premise. Comfortable visual sparring, not proof of Ghostt's watermelon opinion.",
        href: "/characters/tofu",
      },
      {
        name: "HamitteY",
        note: "Ghostt files screenshot evidence with a wheeze; Hami answers `BRUH GHOST`, Ghostt pleads `She set me up for it 😂`, and Hami immediately concedes `nah but you right`. Mock accusation, mock alibi, concession — all with almost no setup.",
      },
    ],
    quotes: [
      "I haven’t been on in so long I forget which club I’m in lol",
      "Yeah but I left it and then uninstalled not long after that",
      "She set me up for it 😂",
    ],
  };
  allCharacters.push(ghostt);
  characterById.set("ghostt", ghostt);
}

// Run 630 — Wall. Rosario17/Yazaki's tiny footprint is unusually explicit about
// affect: approval first, then laughter. Keep the scope Wall-local and compact.
const rosarioIndex = allCharacters.findIndex(
  (character) =>
    character.id === "rosario17" ||
    character.id === "rosario" ||
    character.name === "Rosario17" ||
    (character.aliases ?? []).includes("Yazaki") ||
    (character.aliases ?? []).includes("rosayaz"),
);
if (rosarioIndex >= 0) {
  const rosario = allCharacters[rosarioIndex];
  const relationships = [...(rosario.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Mugen",
    note: "Mugen files a screenshot; Rosario true-replies `Nice idea 😀😂` and follows with `😂😂😂`. The useful beat is approval before delight: Rosario is reviewing the prosecution favorably, not taking over the courtroom.",
    href: "/characters/mugen",
  });
  upsertRelationship(relationships, {
    name: "Rookie Cookie",
    note: "A later true-reply lands as `Ahahahva. Ok that nice to know 😄`. The parent wording remains unresolved, so the safe public read is warm acknowledgement rather than an invented topic or closeness rank.",
  });
  allCharacters[rosarioIndex] = {
    ...rosario,
    aliases: [...new Set([...(rosario.aliases ?? []), "Yazaki", "rosayaz"])],
    logline: "Wall gallery spectator whose tiny prose is unusually legible: `Nice idea`, `Cool`, `Aww so sweet!!`, then laughter. Less prosecutor than the evidence room's extremely small positive-review desk.",
    tags: [...new Set([...(rosario.tags ?? []), "Wall", "Approval-first", "Warm validator", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([...(rosario.quotes ?? []), "Nice idea 😀😂", "Cool 😀.", "Aww so sweet!!"])],
  };
  characterById.set(allCharacters[rosarioIndex].id, allCharacters[rosarioIndex]);
} else {
  const rosario = {
    id: "rosario17",
    name: "Rosario17",
    aliases: ["Yazaki", "rosayaz"],
    billing: "legacy" as const,
    role: "Archive-era Wall cast",
    era: "2020–",
    logline: "Wall gallery spectator whose tiny prose is unusually legible: `Nice idea`, `Cool`, `Aww so sweet!!`, then laughter. Less prosecutor than the evidence room's extremely small positive-review desk.",
    tags: ["Archive cast", "Wall", "Approval-first", "Warm validator", "Petty Crimes"],
    relationships: [
      {
        name: "Mugen",
        note: "Mugen files a screenshot; Rosario true-replies `Nice idea 😀😂` and follows with `😂😂😂`. The useful beat is approval before delight: Rosario is reviewing the prosecution favorably, not taking over the courtroom.",
        href: "/characters/mugen",
      },
      {
        name: "Rookie Cookie",
        note: "A later true-reply lands as `Ahahahva. Ok that nice to know 😄`. The parent wording remains unresolved, so the safe public read is warm acknowledgement rather than an invented topic or closeness rank.",
      },
    ],
    quotes: ["Nice idea 😀😂", "Cool 😀.", "Aww so sweet!!"],
  };
  allCharacters.push(rosario);
  characterById.set("rosario17", rosario);
}

// Run 630 — Daycare. Woosung's small-game enthusiasm is the same social instinct
// as her Wall life at a lower temperature: tiny wants become communal news almost
// immediately, with zero effort spent pretending she is above caring.
const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex >= 0) {
  const woosung = allCharacters[woosungIndex];
  const relationships = [...(woosung.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Snow",
    note: "Snow says she might make a K-pop game `when I am bored out of my mind`; roughly eighty seconds later Woosung supplies a crying GIF and asks `Are u bored yet`. Playful lobbying works because the exaggeration is obvious and Woosung is perfectly willing to make a tiny want everybody's business.",
    href: "/characters/snow",
  });
  allCharacters[woosungIndex] = {
    ...woosung,
    logline: "Former ScarletMoon leader, VIP and permanent Platelet who turns tiny wants into group business — lobbying Snow for a K-pop game, filing fourteen straight non-Impostor rounds as injustice, celebrating `I can fly in genshin`, and still prosecuting the Wall when somebody hands her evidence.",
    tags: [...new Set([...(woosung.tags ?? []), "Game chatter", "Playfully impatient", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(woosung.quotes ?? []),
      "Are u bored yet",
      "I only played among us like 14 times",
      "never the imposter",
      "I can fly in genshin",
    ])],
  };
  characterById.set("woosung", allCharacters[woosungIndex]);
}
