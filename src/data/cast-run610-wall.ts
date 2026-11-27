import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const mergeUnique = (values: string[]) => [...new Set(values)];

// Run 610 — Wall. Alkey / Meowk is a resolved stable-account identity. MAIN
// already owns the richer person story; WIKI keeps the structured mechanism:
// economical prose, deliberate timing, and low-setup public prosecution.
const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex >= 0) {
  const alkey = allCharacters[alkeyIndex];
  const relationships = [...(alkey.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Mugen",
    note: "Alkey turns two chicken emotes and crossed swords into `cock fight achieved`; Mugen true-replies with popcorn, and Alkey bows with `I aim to please`. The audience cue is tiny and Alkey catches it immediately.",
    href: "/characters/mugen",
  });
  upsertRelationship(relationships, {
    name: "Baby Lyssa",
    note: "Lyssa tries `you saw nothing`; Alkey answers `i` / `saw` / `all` as three separate messages over 1.725 seconds. The message boundaries do half the joke: comfortable public prosecution staged one word at a time.",
    href: "/characters/baby-lyssa",
  });

  allCharacters[alkeyIndex] = {
    ...alkey,
    aliases: mergeUnique([...(alkey.aliases ?? []), "Meowk 💖✨"]),
    logline:
      "Staff, hockey devotee and economical bit-builder: Alkey can turn three pictographs into live poultry combat, notice when Mugen has taken the audience seat, then make `i saw all` funny by releasing one word at a time.",
    tags: mergeUnique([...(alkey.tags ?? []), "Wall", "Comic timing", "Economical prose", "Petty Crimes"]),
    relationships,
    quotes: mergeUnique([
      ...(alkey.quotes ?? []),
      "cock fight achieved",
      "I aim to please :8_bow:",
      "i",
      "saw",
      "all",
    ]),
  };
  characterById.set("alkey", allCharacters[alkeyIndex]);
}

// Run 610 — Wall. Marian Kage = Panda / PanPan is resolved project canon. The
// packet is about the Panda persona itself: repeated self-expression, friends
// recognizing a return through the nickname, and Wizard101 panda-maximalism.
const pandaRelationships: NonNullable<Character["relationships"]> = [
  {
    name: "Baby Lyssa",
    note: "Lyssa marks Marian's return with `Welcome home, panda`; Marian answers with a crying-panda emote and says he has been away a long time. Later Lyssa can simply address him as `panda`. Recognition arrives in the house nickname before anybody needs an explanation.",
    href: "/characters/baby-lyssa",
  },
  {
    name: "Eos",
    note: "Marian writes Panda into a shared July bit; Eos later tags him to `look now`, and Marian answers with `:PandaPERFECTION:`. Ansun eventually calls Eos the `panda caretaker`; that phrase stays joke language, while the low-setup collaborative Panda shorthand is real.",
    href: "/characters/eos",
  },
  {
    name: "Ansun",
    note: "When Marian reports that Wizard101 gave him panda ears, a panda-covered outfit and a panda mount, Ansun answers `you really do be a panda`. Peer recognition lands because Marian has already done the branding work himself.",
    href: "/characters/ansun",
  },
];

const pandaIndex = allCharacters.findIndex((character) => character.id === "panda");
if (pandaIndex >= 0) {
  const panda = allCharacters[pandaIndex];
  const relationships = [...(panda.relationships ?? [])];
  for (const relationship of pandaRelationships) upsertRelationship(relationships, relationship);

  allCharacters[pandaIndex] = {
    ...panda,
    aliases: mergeUnique([...(panda.aliases ?? []), "PanPan", "Marian Kage", "mariankage"]),
    role: "Historical Staff",
    logline:
      "Historical Staff member whose Panda thing became a whole social vocabulary: friends can greet a return as `panda`, Marian writes Panda into shared bits, and one Wizard101 panda set somehow becomes ears + outfit + mount because restraint has left the building.",
    tags: mergeUnique([...(panda.tags ?? []), "Historical Staff", "Wall", "Panda persona", "Wizard101", "Petty Crimes"]),
    relationships,
    quotes: mergeUnique([
      ...(panda.quotes ?? []),
      "should change it to 'with Panda'",
      ":PandaPERFECTION:",
      "livin the panda dream",
    ]),
  };
  characterById.set("panda", allCharacters[pandaIndex]);
} else {
  const panda: Character = {
    id: "panda",
    name: "Panda",
    aliases: ["PanPan", "Marian Kage", "mariankage"],
    billing: "legacy",
    role: "Historical Staff",
    era: "2021–2023+",
    logline:
      "Historical Staff member whose Panda thing became a whole social vocabulary: friends can greet a return as `panda`, Marian writes Panda into shared bits, and one Wizard101 panda set somehow becomes ears + outfit + mount because restraint has left the building.",
    tags: ["Historical Staff", "Wall", "Panda persona", "Wizard101", "Petty Crimes"],
    relationships: pandaRelationships,
    quotes: [
      "should change it to 'with Panda'",
      ":PandaPERFECTION:",
      "livin the panda dream",
    ],
  };
  allCharacters.push(panda);
  characterById.set("panda", panda);
}
