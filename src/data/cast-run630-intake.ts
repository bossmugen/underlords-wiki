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

const replaceCharacter = (id: string, next: (current: (typeof allCharacters)[number]) => (typeof allCharacters)[number]) => {
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) return;
  allCharacters[index] = next(allCharacters[index]);
  characterById.set(id, allCharacters[index]);
};

// Run 630 — Wall. Ghostt already has a canonical Cast owner. Deepen that owner;
// never manufacture a fallback person if the canonical entry disappears.
replaceCharacter("ghostt", (ghostt) => {
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
  return {
    ...ghostt,
    logline: "Reaction-first Wall regular who can conduct an argument in emotes, toss one dry line into a running bit, and keep resurfacing socially even after saying the game itself had fallen out of her life.",
    tags: [...new Set([...(ghostt.tags ?? []), "Wall", "Visual shorthand", "Reaction-first", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(ghostt.quotes ?? []),
      "I haven’t been on in so long I forget which club I’m in lol",
      "Yeah but I left it and then uninstalled not long after that",
      "She set me up for it 😂",
    ])],
  };
});

// Run 630 — Wall. Hard identity lock: Yaza = Yazaki = Rosario17. Keep the new
// Wall texture on Yaza's existing file; never create a second Rosario-shaped cast entry.
replaceCharacter("yaza", (yaza) => {
  const relationships = [...(yaza.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Mugen",
    note: "Mugen files a screenshot; Yaza, posting as Rosario17, true-replies `Nice idea 😀😂` and follows with `😂😂😂`. The useful beat is approval before delight: she is reviewing the prosecution favorably, not taking over the courtroom.",
    href: "/characters/mugen",
  });
  upsertRelationship(relationships, {
    name: "Rooks",
    note: "A later true-reply lands as `Ahahahva. Ok that nice to know 😄`. The parent wording remains unresolved, so the safe public read is warm acknowledgement rather than an invented topic or closeness rank.",
    href: "/characters/rooks",
  });
  return {
    ...yaza,
    aliases: [...new Set([...(yaza.aliases ?? []), "Yazaki", "Rosario17"])],
    logline: "Yaza's Wall-gallery register is tiny but explicit: `Nice idea`, `Cool`, `Aww so sweet!!`, then laughter. Less prosecutor than the evidence room's extremely small positive-review desk.",
    tags: [...new Set([...(yaza.tags ?? []), "Wall", "Approval-first", "Warm validator", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([...(yaza.quotes ?? []), "Nice idea 😀😂", "Cool 😀.", "Aww so sweet!!"])],
  };
});

// Run 630 — Daycare. Woosung's small-game enthusiasm is the same social instinct
// as her Wall life at a lower temperature: tiny wants become communal news almost
// immediately, with zero effort spent pretending she is above caring.
replaceCharacter("woosung", (woosung) => {
  const relationships = [...(woosung.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Snow",
    note: "Snow says she might make a K-pop game `when I am bored out of my mind`; roughly eighty seconds later Woosung supplies a crying GIF and asks `Are u bored yet`. Playful lobbying works because the exaggeration is obvious and Woosung is perfectly willing to make a tiny want everybody's business.",
    href: "/characters/snow",
  });
  return {
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
});
