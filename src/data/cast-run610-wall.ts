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

// Run 610 — Wall. Alkey's older public owner already has the hockey obsession
// and chicken-duel performance. This packet adds a different social mechanism:
// he can drop the link or diagnosis with almost no setup and trust the room to
// supply the rest of the scene. Dead/redirected link destinations are not read
// back into the joke.
const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex >= 0) {
  const alkey = allCharacters[alkeyIndex];
  const relationships = [...(alkey.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Gilli",
    note: "Alkey can drop `This guy..` plus a link and Gilli answers with `:himefreaked:` rather than asking for a briefing. The useful part is the low setup: the room is already expected to keep up, while the current link destination itself is not treated as preserved context.",
    href: "/characters/gilli",
  });
  upsertRelationship(relationships, {
    name: "Ren",
    note: "The same compact link-drop gets an `aaaayyy` from Ren. It reads as shared-context ease — reaction as dialogue — without pretending a dead or redirected URL still tells us what everyone originally saw.",
    href: "/characters/ren",
  });
  upsertRelationship(relationships, {
    name: "Lizzy",
    note: "`wake up bitches` plus a link is enough to get a `:heh:` from Lizzy, with apple reactions also preserved around the post. Alkey does not narrate the premise; he expects the room to meet him halfway.",
  });

  allCharacters[alkeyIndex] = {
    ...alkey,
    logline:
      "Staff, hockey devotee and low-ceremony scene starter: two chicken emotes can become armed combat, `My GPU is prob dying` needs no funeral, and sometimes `This guy..` plus a link is apparently the entire briefing because the room already knows how to answer.",
    tags: [...new Set([...(alkey.tags ?? []), "Wall", "Link-first humor", "Shared-context fluency", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([...(alkey.quotes ?? []), "This guy..", "My GPU is prob dying", "wake up bitches"])],
  };
  characterById.set("alkey", allCharacters[alkeyIndex]);
}

// Hard project canon resolves Marian = Panda, with PanPan in the same alias trail.
// Wall gives the existing person a compact public shape without inventing a role
// from export metadata: quick reactive protest, comfortable riffing, and care that
// can arrive disguised as mock discipline.
const pandaIndex = allCharacters.findIndex((character) => character.id === "panda");
if (pandaIndex >= 0) {
  const panda = allCharacters[pandaIndex];
  const relationships = [...(panda.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Plushie",
    note: "Plushie asks whether Panda put on her seatbelt; Panda gives a bare `Nooo`; Plushie answers `Ima smack you`. The mock threat works as playful care/discipline because Panda does not turn the check-in into a defensive explanation or exit the exchange.",
    href: "/characters/plushie",
  });
  upsertRelationship(relationships, {
    name: "Stranniclaws",
    note: "Stranniclaws can post `Cursed.mp4` and get an immediate-looking `NO` from Panda in the preserved sequence, then later throw an old Panda line back into circulation. Panda is both reactor and recurring callback target; the media itself stays attribution-bounded.",
  });
  upsertRelationship(relationships, {
    name: "Sye",
    note: "Sye can toss a strange future-family turn into a loose Wall riff and Panda answers inside the bit instead of demanding a premise reset. Shared-room nonsense, not literal family language.",
    href: "/characters/sye",
  });
  upsertRelationship(relationships, {
    name: "Baby Lyssa",
    note: "Baby Lyssa joins the same odd riff without either person needing to formalize what they are doing. The scene supports easy comic participation, not romance or family claims.",
    href: "/characters/baby-lyssa",
  });

  allCharacters[pandaIndex] = {
    ...panda,
    aliases: [...new Set([...(panda.aliases ?? []), "Marian", "Marian Kage", "PanPan"])],
    role: panda.role || "Staff",
    logline:
      "Staff member better known across the archive as Panda / Marian / PanPan: socially dense even in a small Wall footprint, quick with `NO` at cursed nonsense, comfortable being the callback target, and capable of turning one guilty `Nooo` into a whole seatbelt-care scene with Plushie.",
    tags: [...new Set([...(panda.tags ?? []), "Staff", "Wall", "Reactive protest", "Callback target", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([...(panda.quotes ?? []), "Nooo", "NO", "I don't have anything cursed"])],
  };
  characterById.set("panda", allCharacters[pandaIndex]);
} else {
  const panda: Character = {
    id: "panda",
    name: "Panda",
    aliases: ["Marian", "Marian Kage", "PanPan"],
    billing: "recurring",
    role: "Staff",
    era: "2020–present",
    logline:
      "Staff member better known across the archive as Panda / Marian / PanPan: socially dense even in a small Wall footprint, quick with `NO` at cursed nonsense, comfortable being the callback target, and capable of turning one guilty `Nooo` into a whole seatbelt-care scene with Plushie.",
    tags: ["Staff", "Wall", "Reactive protest", "Callback target", "Petty Crimes"],
    relationships: [
      {
        name: "Plushie",
        note: "Plushie asks whether Panda put on her seatbelt; Panda gives a bare `Nooo`; Plushie answers `Ima smack you`. The mock threat works as playful care/discipline because Panda does not turn the check-in into a defensive explanation or exit the exchange.",
        href: "/characters/plushie",
      },
      {
        name: "Stranniclaws",
        note: "Stranniclaws can post `Cursed.mp4` and get an immediate-looking `NO` from Panda in the preserved sequence, then later throw an old Panda line back into circulation. Panda is both reactor and recurring callback target; the media itself stays attribution-bounded.",
      },
      {
        name: "Sye",
        note: "Sye can toss a strange future-family turn into a loose Wall riff and Panda answers inside the bit instead of demanding a premise reset. Shared-room nonsense, not literal family language.",
        href: "/characters/sye",
      },
      {
        name: "Baby Lyssa",
        note: "Baby Lyssa joins the same odd riff without either person needing to formalize what they are doing. The scene supports easy comic participation, not romance or family claims.",
        href: "/characters/baby-lyssa",
      },
    ],
    quotes: ["Nooo", "NO", "I don't have anything cursed"],
  };
  allCharacters.push(panda);
  characterById.set("panda", panda);
}
