import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index < 0) {
    relationships.push(incoming);
    return;
  }

  const current = relationships[index];
  relationships[index] = {
    ...current,
    ...incoming,
    note: current.note.includes(incoming.note) ? current.note : `${current.note} ${incoming.note}`,
    href: current.href ?? incoming.href,
  };
};

// Run 708 Louvre support sweep: Pride narrates the change themself.
// Old low visibility and difficulty retaining names can coexist with a later, easy social activation.
const prideIndex = allCharacters.findIndex((character) => character.id === "pride");
if (prideIndex >= 0) {
  const pride = allCharacters[prideIndex] as ExtendedCharacter;
  const relationships = [...(pride.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "Mugs can tease `antisocial pride uwu`; Pride rejects the label and, two seconds later, amends the objection with `anymore`. It is a tiny self-authored change arc rather than a permanent personality diagnosis: old distance was real enough for Pride to remember, but Pride also says they were doing better.",
    href: "/characters/mugen",
  });

  upsertRelationship(relationships, {
    name: "Snow",
    note:
      "Snow says she has never seen Pride around before; Pride answers `Yo whats up` and `jus got here` without turning the visibility gap into a defensive speech. Hard to encounter does not read as hard to activate.",
    href: "/characters/snow",
  });

  upsertRelationship(relationships, {
    name: "Rookie Cookie",
    note:
      "Rookie repeatedly plays chase-the-exit with Pride: `PRIDE NO` gets a nearly immediate `BYE`, and later `i’ll catch you pride uwu` / `you can’t hide` meets Pride’s familiar `-dips-` reflex. The exits stay inside the social exchange instead of proving literal abandonment.",
  });

  allCharacters[prideIndex] = {
    ...pride,
    logline:
      "Old low visibility was real enough that Pride says names do not stick without conversation, but Pride narrates the change themself: `I am not antisocial` becomes `anymore` two seconds later. Hard to encounter never means hard to activate—direct summons get `wot`, first-meeting awkwardness gets `Yo whats up`, and the old escape reflex survives mostly as a performance: `BYE`, `-dips-`, gone before the room can finish grabbing the sleeve.",
    tags: [
      ...new Set([
        ...(pride.tags ?? []),
        "Social re-entry",
        "Fast activation",
        "Performed exits",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(pride.quotes ?? []),
        "Im not good with names if i dont talk to them",
        "Im doing better tho",
        "I am not antisocial",
        "anymore",
        "wot",
        "-dips-",
      ]),
    ],
    claims: [
      ...new Set([
        ...(pride.claims ?? []),
        "Pride explicitly describes an older social-distance problem—names do not stick without conversation and an earlier `council` period felt terrible because Pride knew only a small fraction of the club—then immediately supplies the change: `Im doing better tho`, and later `I am not antisocial` followed two seconds later by `anymore`. The person read is change-over-time, not a frozen label.",
        "Pride's low visibility contrasts with quick responsiveness once directly activated. Snow can say she has never seen Pride around before and still get an easy greeting; Sou only needs to type `Pride` to receive `wot` 3.386 seconds later.",
        "The recurring `BYE` / `-dips-` language functions as a performed escape reflex inside ongoing group play. Other people answer by trying to catch or keep Pride in the room, and Pride's exits themselves become part of the interaction rather than clean evidence of actual departure.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(pride.antiFanon ?? []),
        "Pride's reference to being in `council` is unresolved in this intake. Do not convert it into a formal UL appointment, governance chronology, or title without an explicit bridge.",
        "`antisocial` is dated teasing/self-description language that Pride explicitly corrects with `anymore`; it is not a diagnosis or a permanent character label.",
        "`BYE`, `-dips-`, and related exit jokes do not by themselves establish literal disappearance, social withdrawal, or a precise absence interval.",
        "Pride's two media-bearing creative-room posts remain POSTED BY Pride only in this integration. Do not infer MADE BY / CAPTURED BY / FEATURING from the posting account.",
        "No pronoun, identity, location, or demographic claim is derived from the support transcript beyond what the public canon already establishes elsewhere.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("pride", allCharacters[prideIndex]);
}
