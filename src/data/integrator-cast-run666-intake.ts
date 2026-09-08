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

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex >= 0) {
  const daya = allCharacters[dayaIndex];
  allCharacters[dayaIndex] = {
    ...daya,
    logline: "Officer and Recruiter who can keep the front door moving, survive Screenshot Court, and still volunteer herself for the punchline: Daya is useful when procedure matters and perfectly happy to join the `seniors` trying to identify the young hip teen sensations before deciding they are almost worse than Snow.",
    tags: [...new Set([
      ...(daya.tags ?? []),
      "Self-deprecating humor",
      "Participatory teasing",
      "Senior-citizen bit",
      "Petty Crimes",
    ])],
    quotes: [...new Set([
      ...(daya.quotes ?? []),
      "seniors tryna figure out who the young hip teen sensastions are",
      "wow we're almost worse than snow",
    ])],
  };
  characterById.set("daya", allCharacters[dayaIndex]);
}

const dyingFoxIndex = allCharacters.findIndex((character) => character.id === "dyingfox");
if (dyingFoxIndex >= 0) {
  const dyingFox = allCharacters[dyingFoxIndex];
  const relationships = [...(dyingFox.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ren",
    note: "Ren can simply call `fox halp`; DyingFox answers seconds later with a pat emote. In the same tiny pocket Fox immediately permits the room's absurd `dinner` joke and celebrates Ren's score. Easy summonability and low-verbiage comfort are supported here without inventing a closeness rank.",
    href: "/characters/ren",
  });

  allCharacters[dyingFoxIndex] = {
    ...dyingFox,
    logline: "A three-message Wall ghost with surprisingly clear social instincts: DyingFox can be summoned with `fox halp`, dispense a pat without asking for the case file, declare `It's dinner you can eat it`, then cheer when the room awards points to dinner.",
    tags: [...new Set([
      ...(dyingFox.tags ?? []),
      "Wall",
      "Low-verbiage",
      "Summonable comfort",
      "Permissive cheerleader",
      "Petty Crimes",
    ])],
    relationships,
    quotes: [...new Set([
      ...(dyingFox.quotes ?? []),
      "It's dinner you can eat it",
    ])],
  };
  characterById.set("dyingfox", allCharacters[dyingFoxIndex]);
}

const tofuIndex = allCharacters.findIndex((character) => character.id === "tofu");
if (tofuIndex >= 0) {
  const tofu = allCharacters[tofuIndex];
  const relationships = [...(tofu.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "BishopThaGuru",
    note: "Bishop can throw affectionate melodrama at Tofu — `you don't love me no more` or the suggestion that Wall attention means she likes him — and Tofu answers with `Sure` or `I like everyone 🙃`. Bishop's smirking reply keeps the exchange moving. The familiarity is playful and socially safe here; the affection bait is not romance canon.",
    href: "/characters/bishopthaguru",
  });

  allCharacters[tofuIndex] = {
    ...tofu,
    logline: "Broadly warm, aggressively economical about reassurance: Tofu can coyly admit she might expose everybody, answer `you don't love me no more` with one lethal `Sure`, widen exclusivity bait into `I like everyone 🙃`, then get put on blast and promise `I'll fucking do it again too.`",
    tags: [...new Set([
      ...(tofu.tags ?? []),
      "Wall",
      "Deadpan affection",
      "Broadly affiliative",
      "Exposure-positive",
      "Running jokes",
      "Petty Crimes",
    ])],
    relationships,
    quotes: [...new Set([
      ...(tofu.quotes ?? []),
      "Maybe ^^",
      "Sure",
      "I like everyone 🙃",
      "🤣 the fucking fish! It will@never not be funny",
      "I'll fucking do it again too.",
    ])],
  };
  characterById.set("tofu", allCharacters[tofuIndex]);
}
