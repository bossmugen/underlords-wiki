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

const pandaIndex = allCharacters.findIndex((character) => character.id === "panda");
if (pandaIndex >= 0) {
  const panda = allCharacters[pandaIndex];
  const relationships = [...(panda.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Mugen",
    note: "Mugen can ping Panda into Wall bait and Panda's first move is sometimes a bare `wait` while she figures out what the hell happened. Months later, when Mugen announces that not even Panda is safe, Panda does not plead innocence; she basically shrugs that finding weird stuff from her is not surprising. The familiarity is in how little ceremony either of them needs.",
    href: "/characters/mugen",
  });
  upsertRelationship(relationships, {
    name: "Anayss",
    note: "Anayss asks whether Panda is claiming she beat Nexia better; Panda answers `Nope` and then hands the boast straight back with `You said that about yourself.` It is teasing with a very Panda boundary: she will play, but she is not carrying somebody else's flex for them.",
  });

  allCharacters[pandaIndex] = {
    ...panda,
    aliases: [...new Set([...(panda.aliases ?? []), "Marian", "Marian Kage", "PanPan"])],
    logline:
      "Panda can smell Wall trouble almost immediately, stop a confusing bit with one tiny `wait`, and hand a boast straight back to whoever tried to pin it on her. She already knows her own reputation is weird; the room does not need to break the news.",
    tags: [...new Set([...(panda.tags ?? []), "Wall", "Dry refusal", "Self-aware weirdness", "Petty Crimes"])],
    relationships,
    quotes: [
      ...new Set([
        ...(panda.quotes ?? []),
        "I'm guessing wall of shamed...or famed.",
        "wait",
        "Nope",
        "You said that about yourself.",
        "It's not that surprising to find weird stuff from me though.",
        ":( i tried putting those in spoiler",
        "sorry >.<",
      ]),
    ],
    timeline: [
      ...(panda.timeline ?? []),
      {
        date: "2020-09-23",
        title: "She already knows where this is going",
        description:
          "A `PANDA DUNGEON GIRL ZD` post lands and Panda's next surviving line is `I'm guessing wall of shamed...or famed.` The preserved sequence is enough to catch the instinct even though it is not a formal reply edge.",
      },
      {
        date: "2020-09-26",
        title: "Wait. Then prosecute accurately.",
        description:
          "Mugen pings Panda into a Wall scene; Panda says `wait` and follows the removed-video discussion until she knows what happened. Later that day Anayss tries to hand her a Nexia boast and Panda returns it: `Nope` / `You said that about yourself.`",
      },
      {
        date: "2020-11-02",
        title: "Weirdness, already self-certified",
        description:
          "Mugen says not even Panda is safe. Panda's defense is not innocence: `It's not that surprising to find weird stuff from me though.` She knows the file on herself and appears broadly at peace with it.",
      },
      {
        date: "2021-03-31",
        title: "The spoiler button betrays her",
        description:
          "Something meant for spoiler formatting lands badly and Panda immediately goes `:( i tried putting those in spoiler` and `sorry >.<`. Tiny embarrassment, quick accountability, no theatrical escape attempt.",
      },
    ],
  };
  characterById.set("panda", allCharacters[pandaIndex]);
}

// The newly consumed Wall suffix deepens Panda rather than creating Marian as a
// second person. A seatbelt check turns into mock discipline; cursed-media bait
// gets a one-word refusal; stranger riffs stay playable without becoming literal
// family or romance. Panda remains historical/archive-era Staff unless stronger
// current-roster canon changes that status.
const pandaTailIndex = allCharacters.findIndex((character) => character.id === "panda");
if (pandaTailIndex >= 0) {
  const panda = allCharacters[pandaTailIndex];
  const relationships = [...(panda.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Plushie",
    note: "Plushie asks whether Panda put on her seatbelt; Panda gives one guilty `Nooo`; Plushie answers `Ima smack you`. Care arrives disguised as mock discipline, and Panda's tiny answer works because neither of them needs to over-explain the concern.",
    href: "/characters/plushie",
  });
  upsertRelationship(relationships, {
    name: "Stranniclaws",
    note: "Stranniclaws posts `Cursed.mp4`; Panda answers `NO`, and an older Panda line later comes back around as callback ammunition. She can be both the person protesting cursed nonsense and the person whose own old nonsense gets preserved for reuse.",
  });
  upsertRelationship(relationships, {
    name: "Sye",
    note: "Sye can take a loose Wall riff somewhere strange and Panda follows the turn without requiring a premise reset. The ease is social shorthand, not literal family language.",
    href: "/characters/sye",
  });
  upsertRelationship(relationships, {
    name: "Ghoulie",
    note: "Ghoulie joins the same bizarre riff and Panda stays in it. The scene is comfortable shared-room nonsense, not romance or a family claim.",
    href: "/characters/baby-lyssa",
  });
  allCharacters[pandaTailIndex] = {
    ...panda,
    aliases: [...new Set([...(panda.aliases ?? []), "Marian", "Marian Kage", "PanPan"])],
    tags: [...new Set([...(panda.tags ?? []), "Playful care", "Callback target"])],
    relationships,
    quotes: [...new Set([...(panda.quotes ?? []), "Nooo", "NO", "I don't have anything cursed"])],
  };
  characterById.set("panda", allCharacters[pandaTailIndex]);
} else {
  const panda: Character = {
    id: "panda",
    name: "Panda",
    aliases: ["Marian", "Marian Kage", "PanPan"],
    billing: "legacy",
    role: "Historical Staff",
    era: "2020–",
    logline:
      "Historical Staff member with a small but socially dense Wall footprint: quick with `NO` at cursed nonsense, comfortable being callback material, and capable of turning one guilty `Nooo` into a whole seatbelt-care scene with Plushie.",
    tags: ["Historical Staff", "Wall", "Playful care", "Callback target", "Petty Crimes"],
    relationships: [
      {
        name: "Plushie",
        note: "Plushie asks whether Panda put on her seatbelt; Panda gives one guilty `Nooo`; Plushie answers `Ima smack you`. Care arrives disguised as mock discipline, and Panda's tiny answer works because neither of them needs to over-explain the concern.",
        href: "/characters/plushie",
      },
      {
        name: "Stranniclaws",
        note: "Stranniclaws posts `Cursed.mp4`; Panda answers `NO`, and an older Panda line later comes back around as callback ammunition. She can be both the person protesting cursed nonsense and the person whose own old nonsense gets preserved for reuse.",
      },
      {
        name: "Sye",
        note: "Sye can take a loose Wall riff somewhere strange and Panda follows the turn without requiring a premise reset. The ease is social shorthand, not literal family language.",
        href: "/characters/sye",
      },
      {
        name: "Ghoulie",
        note: "Ghoulie joins the same bizarre riff and Panda stays in it. The scene is comfortable shared-room nonsense, not romance or a family claim.",
        href: "/characters/baby-lyssa",
      },
    ],
    quotes: ["Nooo", "NO", "I don't have anything cursed"],
  };
  allCharacters.push(panda);
  characterById.set("panda", panda);
}

// Alkey already has the hockey obsession and chicken-duel performance. This
// Wall suffix adds a different mechanism: he can drop the link or diagnosis with
// almost no setup and trust the room to supply the rest of the scene. Dead or
// redirected destinations are not used to reconstruct what the link once showed.
const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex >= 0) {
  const alkey = allCharacters[alkeyIndex];
  const relationships = [...(alkey.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Gilli",
    note: "Alkey can drop `This guy..` plus a link and Gilli answers with `:himefreaked:` rather than asking for a briefing. The low setup is the point: the room is already expected to keep up.",
    href: "/characters/gilli",
  });
  upsertRelationship(relationships, {
    name: "Ren",
    note: "The same compact link-drop gets an `aaaayyy` from Ren. Reaction is already enough dialogue for the two of them; Alkey does not stop to explain the premise first.",
    href: "/characters/ren",
  });
  upsertRelationship(relationships, {
    name: "Lizzy",
    note: "`wake up bitches` plus a link gets a `:heh:` from Lizzy, with apple reactions also preserved around the post. Alkey does not narrate the premise; he expects the room to meet him halfway.",
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
