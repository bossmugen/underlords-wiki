import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index >= 0) relationships[index] = { ...relationships[index], ...incoming };
  else relationships.push(incoming);
};

// Run 720 late Wall tail: hard canon keeps Baby Lyssa folded into Ghoulie. The
// new packet matters because the chronic defendant is now legible from both
// sides of Screenshot Court, and the same people keep meeting her inside it.
const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (ghoulieIndex >= 0) {
  const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
  const relationships = [...(ghoulie.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Ansun",
    note:
      "Ansun/Sou and Ghoulie keep finding each other inside Wall prosecution rather than needing a fresh setup every time. He can answer her `wait what.` with `wanna bet`, and when she later reports walking into a wall while still in VC with him, the embarrassment is already shared enough to be conversational shorthand. It sits beside their older `outdo me Ghoulie` competition: teasing that keeps returning to the same court.",
    href: "/characters/ansun",
  });
  upsertRelationship(relationships, {
    name: "Ren",
    note:
      "Ren can get `bc you love mee` from Ghoulie and, half a minute later, summon her straight back into the running prosecution; Ghoulie answers that she has been `sold to the wall of shame`. Affection and embarrassment are allowed to occupy the same exchange without either one cancelling the joke.",
    href: "/characters/ren",
  });
  upsertRelationship(relationships, {
    name: "Tofu",
    note:
      "Tofu is a recurring screenshot-pressure partner rather than a one-scene defendant. Ghoulie can post an attachment and summon Tofu into it, later blame Kinou while Tofu answers the panic with repeated `Nah` and `fair price`, and still switch into prosecution the moment Tofu complains about being filed. They keep handing the embarrassment back and forth.",
    href: "/characters/tofu",
  });

  allCharacters[ghoulieIndex] = {
    ...ghoulie,
    logline:
      "Ghoulie is Screenshot Court's repeat defendant who eventually becomes dangerous on both sides of the docket: she protests the filing speed, campaigns for her own quote channel, keeps future ammunition, jokes that the Wall should carry her name, and later starts tagging other people into evidence herself. The scandalized reaction is real; so is how completely she learns the ritual.",
    tags: unique([...(ghoulie.tags ?? []), "Repeat defendant", "Prosecutor switch", "Wall fluency", "Petty Crimes"]),
    relationships,
    quotes: unique([
      ...(ghoulie.quotes ?? []),
      "letmehavethisonce",
      "bc you love mee",
      "ive been sold to the wall of shame",
      "THIS IS KINOU FAULT",
    ]),
    claims: unique([
      ...(ghoulie.claims ?? []),
      "By 2024 Ghoulie is not merely surviving Screenshot Court; she can tag somebody else into the Wall with `letmehavethisonce` and then get hauled back onto the defendant side herself soon afterward. The turnabout is the useful character beat.",
      "Across 2021–2024, recurring Wall exchanges with Ansun/Sou, Ren and Tofu show the same familiarity from different angles: challenge, affection, blame, summons and counter-prosecution all land without the room needing to rebuild the joke each time.",
    ]),
    antiFanon: unique([
      ...(ghoulie.antiFanon ?? []),
      "Ghoulie's Wall prosecutor/defendant turnabout is social ritual, not formal authority, rank or channel ownership.",
      "Ghoulie's `bc you love mee` exchange with Ren is affectionate teasing in context and is not a romance claim.",
      "The River `momma` / `newmommy` sequence is joke-family language only and must not be literalized.",
    ]),
  } as ExtendedCharacter;

  characterById.set("baby-lyssa", allCharacters[ghoulieIndex]);
}

// Run 720 late Core tail: Ten already owns tiredness, legacy and second-look
// escalation. This scene adds a different trick: he can build a sarcastic answer
// in stages and wait for somebody else to notice the setup before dropping the
// visual closer.
const tenIndex = allCharacters.findIndex((character) => character.id === "ten");
if (tenIndex >= 0) {
  const ten = allCharacters[tenIndex] as ExtendedCharacter;
  const relationships = [...(ten.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Aya",
    note:
      "Aya calls Ten's sarcasm before he finishes the bit: `I hear your sarcasm`. Ten answers `Good. Then you can understand this:` and waits roughly five seconds before dropping the bird emote. The joke works because Aya has already caught the tone; Ten simply gives the recognition a visual punchline.",
  });

  allCharacters[tenIndex] = {
    ...ten,
    tags: unique([...(ten.tags ?? []), "Staged sarcasm", "Visual punchline", "Petty Crimes"]),
    relationships,
    quotes: unique([
      ...(ten.quotes ?? []),
      "A gun.",
      "Wait.. a compound bow.",
      "Good. Then you can understand this:",
    ]),
    claims: unique([
      ...(ten.claims ?? []),
      "On 2020-03-16 Ten answers with `A gun.`, immediately revises to `Wait.. a compound bow.`, lets Aya identify the sarcasm, then answers `Good. Then you can understand this:` and drops the bird emote about five seconds later. The person-shaped read is staged sarcasm with a deliberately timed visual closer.",
    ]),
    antiFanon: unique([
      ...(ten.antiFanon ?? []),
      "Ten's gun / compound-bow exchange is a sarcastic chat bit. Do not convert it into real-world weapon ownership, intent or biography.",
    ]),
  } as ExtendedCharacter;

  characterById.set("ten", allCharacters[tenIndex]);
}

// Mike already has a low-ego troubleshooting seed in the first Run 720 module.
// The 2025 return gives that competence a social counterweight: he notices when
// the old crowd is unusually present and can still keep practical help casual.
const mikeIndex = allCharacters.findIndex((character) => character.id === "mike");
if (mikeIndex >= 0) {
  const mike = allCharacters[mikeIndex] as ExtendedCharacter;
  const relationships = [...(mike.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "Mike's help with Mugen stays deliberately low-drama. When she asks `Not me?` during the 2025 doubles troubleshooting, Mike answers `Okay okay haha` and keeps the solution moving instead of turning the correction into a competence performance.",
    href: "/characters/mugen",
  });

  allCharacters[mikeIndex] = {
    ...mike,
    era: "2020–2025+",
    logline:
      "Mike is useful without needing to sound authoritative first: he can open troubleshooting with `Is it a bug or am i just blind?`, keep checking until the problem is real, explain a system with `if i get it right` still attached, then years later notice that the old crowd is finally on VC together and slide straight back into practical help with a laugh.",
    tags: unique([...(mike.tags ?? []), "Return", "VC nostalgia", "Practical help", "Petty Crimes"]),
    relationships,
    quotes: unique([
      ...(mike.quotes ?? []),
      "for reals when’s the last time we were all on vc together",
      "This is actually a good time for everyone to be on vc lol",
      "No problem mugs haha",
      "Just revive",
      "Okay okay haha",
    ]),
    claims: unique([
      ...(mike.claims ?? []),
      "On 2025-09-30 Mike notices the unusual return-presence directly: `for reals when’s the last time we were all on vc together` followed by `This is actually a good time for everyone to be on vc lol`.",
      "On 2025-10-04 Mike gives Mugen casual doubles help with `No problem mugs haha` / `Just revive`; when Mugen asks `Not me?`, he answers `Okay okay haha` and continues the practical lane. This supports low-drama help, not a formal support role.",
    ]),
    antiFanon: unique([
      ...(mike.antiFanon ?? []),
      "Mike's 2025 help is ordinary peer troubleshooting and does not establish a formal technical, officer or support role.",
      "Mike's VC-return lines support nostalgia and recognition of an unusually full room, not a complete attendance history or proof that nobody had gathered in between surviving records.",
    ]),
  } as ExtendedCharacter;

  characterById.set("mike", allCharacters[mikeIndex]);
}
