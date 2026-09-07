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
