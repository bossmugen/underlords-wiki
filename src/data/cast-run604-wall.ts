import { allCharacters, characterById } from "./cast";

const upsertRelationship = (
  relationships: NonNullable<(typeof allCharacters)[number]["relationships"]>,
  relationship: NonNullable<(typeof allCharacters)[number]["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const shikiIndex = allCharacters.findIndex((character) => character.id === "shiki");
if (shikiIndex >= 0) {
  const shiki = allCharacters[shikiIndex];
  const relationships = [...(shiki.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Mugen",
    note: "Their Sensei shorthand is lived, not ceremonial: Mugen can answer `You're welcome, Sensei`, Shiki can land on `I love you senseei`, and Mugen later summons him when WOO produces a similarly cursed AI prompt. Teacher/elder-buddy familiarity without turning the joke into a new governance rank.",
    href: "/characters/mugen",
  });
  upsertRelationship(relationships, {
    name: "Gilli",
    note: "Gilli can heckle a Shiki filing with `OH GOD`; Shiki admits the message was meant for a friend and then answers the bad timing with a see-nothing GIF. They already know the Wall register well enough that embarrassment becomes another beat instead of an exit.",
    href: "/characters/gilli",
  });
  upsertRelationship(relationships, {
    name: "Mia",
    note: "Mia can repost Shiki lines into Wall evidence and get `nyaBaka` / `nyaThonking` back. The defense is mostly reaction-language because neither person needs Screenshot Court explained by this point.",
    href: "/characters/mia",
  });

  const quotes = [...new Set([
    ...(shiki.quotes ?? []),
    "The proof. I ain't cropping shit out.",
    "I am now iconic",
    "u all see nothing",
    "I love you senseei",
  ])];

  allCharacters[shikiIndex] = {
    ...shiki,
    logline: "Sensei, repeat self-incriminator and extremely optimistic witness-suppression specialist: Shiki will post the proof himself, refuse to crop it, declare himself iconic, then try `u all see nothing` on a room already saving the screenshot.",
    tags: [...new Set([...(shiki.tags ?? []), "Wall", "Self-incrimination", "Evidence dodger", "Shared-context shorthand", "Petty Crimes"])],
    relationships,
    quotes,
    claims: [
      ...(shiki.claims ?? []),
      "Shiki self-posted Wall proof with `I ain't cropping shit out`, then called himself iconic after the room reacted.",
      "Mugen and Shiki repeatedly use Sensei shorthand in ordinary banter; the material does not create a new formal governance rank.",
      "Mia and Gilli both recur around Shiki's Wall filings as familiar audience / prosecutors rather than one-off witnesses.",
    ],
    antiFanon: [
      ...(shiki.antiFanon ?? []),
      "Do not infer a new formal office from Sensei jokes or user-system labels.",
      "Nearby or attached media remains attribution-bounded unless its maker, capturer, or depicted subjects are independently established.",
    ],
  };
  characterById.set("shiki", allCharacters[shikiIndex]);
}

const miloIndex = allCharacters.findIndex((character) => character.id === "milo");
if (miloIndex >= 0) {
  const milo = allCharacters[miloIndex];
  const relationships = [...(milo.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Gilli",
    note: "Gilli can occupy prosecutor position while Milo sits in the reaction gallery and answers with `o7` / `yikes` energy. It reads as established Wall familiarity, not a literal court job.",
    href: "/characters/gilli",
  });
  upsertRelationship(relationships, {
    name: "Mia",
    note: "Mia can repost Milo's own comments into the Wall and Milo answers `nyaSodramatic` instead of trying to flee the filing. The embarrassment is playable material, not a relationship rupture.",
    href: "/characters/mia",
  });
  upsertRelationship(relationships, {
    name: "Mugen",
    note: "When a bit crosses into somebody else's voice comfort, Mugen's tiny `🐹...` signal is enough for Milo to back off and apologize. Chaos stays fun because he can read the stop marker and change course without making the correction another performance.",
    href: "/characters/mugen",
  });

  const quotes = [...new Set([
    ...(milo.quotes ?? []),
    "nyaSodramatic",
    "YOU FAIL TO SEE THE UPSIDE",
  ])];

  allCharacters[miloIndex] = {
    ...milo,
    logline: "Good-sport chaos with a functioning brake pedal: Milo can become Wall evidence, react like the gallery is part of the joke, and still change course immediately when Mugen signals that somebody else's comfort matters more than the bit.",
    tags: [...new Set([...(milo.tags ?? []), "Wall", "Good-sport defendant", "Reaction gallery", "Comfort-aware", "Petty Crimes"])],
    relationships,
    quotes,
  };
  characterById.set("milo", allCharacters[miloIndex]);
}
