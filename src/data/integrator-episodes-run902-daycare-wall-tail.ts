import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const getCharacter = (id: string): ExtendedCharacter => {
  const character = allCharacters.find((candidate) => candidate.id === id) as ExtendedCharacter | undefined;
  if (!character) throw new Error(`Run 902 expected canonical owner ${id}`);
  return character;
};

const replaceCharacter = (character: ExtendedCharacter) => {
  const index = allCharacters.findIndex((candidate) => candidate.id === character.id);
  if (index < 0) throw new Error(`Run 902 lost canonical owner ${character.id}`);
  allCharacters[index] = character;
  characterById.set(character.id, character);
};

// Daycare / Saber support rooms: Sye gets trusted with the weird little settings problem itself.
{
  const sye = getCharacter("sye");
  const relationships = [...(sye.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "Mugen does not just ask Sye whether a weird access/settings failure exists; she hands Sye the thing to poke. In October 2021 she sends the relevant framework link with `This is what you can mess around with btw… Tryna figure out the semantics of it`, and Sye answers `Bless? I WILL FIGURE OUT HOW TO UNDO THIS DAMNED BUTTON`. Later cookie/config weirdness gets the same treatment: Sye remembers that settings can reset, says she will mess with it again if it breaks, and Mugen answers `You can test it out with :D`. It reads as practical trust earned through behavior, not a title ceremony.",
    href: "/characters/mugen",
  });

  replaceCharacter({
    ...sye,
    tags: unique([...(sye.tags ?? []), "Access troubleshooting", "Mugen", "Broken-button vendetta"]),
    relationships,
    quotes: unique([
      ...(sye.quotes ?? []),
      "Bless? I WILL FIGURE OUT HOW TO UNDO THIS DAMNED BUTTON",
      "BUT WHAT IS IT",
    ]),
    claims: unique([
      ...(sye.claims ?? []),
      "Across October 2021 and January 2022 support-room exchanges, Sye repeatedly troubleshoots visitor access/settings failures: she remembers a JP-locale `Headset disabler`, receives a framework link from Mugen specifically to experiment with, notes that settings/cookies can reset, and later reports `my access broke` when the same kind of configuration weirdness hits her own account.",
      "Mugen explicitly invites Sye to experiment with the relevant settings/framework (`This is what you can mess around with btw` and later `You can test it out with :D`), supporting lived technical trust without establishing a formal Support or moderator appointment.",
    ]),
    antiFanon: unique([
      ...(sye.antiFanon ?? []),
      "Sye's access/settings troubleshooting is behavior, not an appointment record. Do not infer a formal Support/moderator title, framework authorship, or appointment chronology from these exchanges.",
      "Private visitor-health or safety context surrounding support-room access is not public character lore and is not surfaced from this handoff.",
    ]),
  });
}

// Wall: Tony packages ordinary embarrassment like a tiny incident report.
{
  const tony = getCharacter("tonytonychopper");
  const relationships = [...(tony.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Gilli",
    note:
      "Gilli is a recurring audience for Tony's little Wall prosecutions. When she dismisses one screenshot as `floral wallpaper`, Tony answers with crying embeds and tags Ren into the bit; when Tony later narrates a spilled-milk scare like a miniature incident report, Gilli calls it `Quality wall material` and Tony answers `ofcc`. She recognizes the product, and Tony is visibly happy to keep producing it.",
    href: "/characters/gilli",
  });

  replaceCharacter({
    ...tony,
    logline:
      "Wall regular who is funniest when he gets to control the framing. Tony can panic theatrically when somebody else files him, crown himself `the real ceo of bad spelling`, or turn a spilled glass of milk into a miniature incident report about a man who was `peacefully drinking his peace o’ milk` until disaster struck. He is not merely media-heavy; he likes packaging the receipt.",
    tags: unique([...(tony.tags ?? []), "Receipt narrator", "Mini incident reports", "Gilli"]),
    relationships,
    quotes: unique([
      ...(tony.quotes ?? []),
      "all caps no",
      "lowecase only",
      "its eggys fault",
      "peacefully drinking his peace o’ milk",
      "minding his own business",
      "ofcc",
    ]),
    claims: unique([
      ...(tony.claims ?? []),
      "Tony's Wall behavior includes a recurring narrator/collector mode, not just reacting to other people's filings. In July 2021 he participates in an all-caps/lowercase bit and redirects blame to Eggy; in January 2022 he posts a screenshot sequence around Kenzy being tripped and later narrates a milk-spill scare with mock-incident-report wording before Gilli calls it `Quality wall material`.",
      "Tony's stable account in this handoff is `yourlocalfiend` / TonyTonyChopper. It remains separate from similarly named `tonytonychopper1` / `crispyteletubbies` unless an independent identity bridge is established.",
    ]),
    antiFanon: unique([
      ...(tony.antiFanon ?? []),
      "Tony saying `all caps no` / `lowecase only` inside a running bit does not establish moderation authority or a formal chat rule.",
      "Media posted by Tony in these sequences remains POSTED BY Tony only unless maker, capture, subject, or featured-person attribution is independently established.",
      "Do not merge TonyTonyChopper / `yourlocalfiend` with `tonytonychopper1` / `crispyteletubbies` from name similarity alone.",
    ]),
  });
}

// Wall: Syv can complain about Ricochet leaving, then recruit witnesses to keep the joke going.
{
  const syv = getCharacter("syv");
  const relationships = [...(syv.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ricochet",
    note:
      "Syv's Ricochet lane is comfortable enough to run on mock grievance. In February 2021 Ricochet says `Syv u left me`; Syv fires back `I left for one sec`, `Shutup`, then immediately admits `I feel bad now`. By March 2022 she can recruit Lyssa to watch him and say `I like doing that to him`. The teasing keeps getting collaborators because Syv is helping author the bit, not merely getting caught in it.",
    href: "/characters/ricochet",
  });

  replaceCharacter({
    ...syv,
    tags: unique([...(syv.tags ?? []), "Ricochet", "Comfortable mock grievance", "Receipt co-author"]),
    relationships,
    quotes: unique([
      ...(syv.quotes ?? []),
      "I left for one sec",
      "Shutup",
      "I feel bad now",
      "I like doing that to him",
      "I didn’t wanna get clowned by a bot HBCIFJSMAN",
    ]),
    claims: unique([
      ...(syv.claims ?? []),
      "Syv has a separate recurring teasing lane with Ricochet / `dragonrichard`: a 2021 mock-abandonment exchange ends with Syv admitting `I feel bad now`, and in 2022 she recruits Lyssa into watching/filing him while saying `I like doing that to him`.",
      "In a separate quiz self-own, Syv ignores the A/B warning, chooses C, then explains `I didn’t wanna get clowned by a bot HBCIFJSMAN`, supporting a small embarrassment/competitive-pride beat rather than a major trait claim.",
    ]),
    antiFanon: unique([
      ...(syv.antiFanon ?? []),
      "Syv's Ricochet lane is distinct from her already-documented Rich / DragonRich absence-noticing lane. Rich and Ricochet are separate people under hard canon.",
      "The Syv↔Ricochet exchanges support comfortable teasing and shared receipt humor, not romance, exclusivity, kinship, or a closeness hierarchy.",
    ]),
  });

  const ricochet = getCharacter("ricochet");
  const ricochetRelationships = [...(ricochet.relationships ?? [])];
  upsertRelationship(ricochetRelationships, {
    name: "Syv",
    note:
      "Ricochet can accuse Syv of leaving him and get `I left for one sec` / `Shutup` / `I feel bad now` in return. A year later Syv is recruiting Lyssa to watch him because, in her own words, `I like doing that to him`. The recurring joke works because both sides recognize the mock-prosecution grammar; it is familiar teasing, not a romance claim.",
    href: "/characters/syv",
  });
  replaceCharacter({
    ...ricochet,
    tags: unique([...(ricochet.tags ?? []), "Syv", "Mock-abandonment banter"]),
    relationships: ricochetRelationships,
    claims: unique([
      ...(ricochet.claims ?? []),
      "Ricochet and Syv share a recurring mock-grievance / receipt-teasing lane across 2021–2022; Syv's participation is active enough that she later recruits another watcher into the joke.",
    ]),
    antiFanon: unique([
      ...(ricochet.antiFanon ?? []),
      "Syv's exchanges with Ricochet / dragonrichard must not be merged with her separate exchanges with Rich / DragonRich; the two men are distinct people.",
    ]),
  });
}

// Wall: Milo learns old receipts as social language in public, including the embarrassment of not recognizing them yet.
{
  const milo = getCharacter("milo");
  replaceCharacter({
    ...milo,
    logline:
      "Former officer with a quiet Wall footprint and a very legible sense of the room. Milo can mock-protest when Gilli clears chat, briefly flood the Wall with horror/meme GIFs and immediately offer to stop, then openly admit `Im new around here idk who half these screenshots are` and `I feel uncultured`. The newcomer gap becomes part of the joke instead of something he hides.",
    tags: unique([...(milo.tags ?? []), "Newcomer receipt literacy", "Quick self-regulation", "Mock outrage"]),
    quotes: unique([
      ...(milo.quotes ?? []),
      "GILLI IM TRYNA READ",
      "The disrespect",
      "im sorry",
      "I can stop",
      "Who even is this",
      "Im new around here idk who half these screenshots are",
      ":') I feel uncultured",
    ]),
    claims: unique([
      ...(milo.claims ?? []),
      "Milo's late-2020 Wall footprint includes mock-protesting when Gilli clears chat, posting a short horror/meme GIF burst and immediately offering to stop, and openly saying he is new enough not to recognize half the people in older screenshots. The useful read is newcomer receipt-literacy happening in public, with quick social calibration rather than outsider distance.",
      "Two later Wordle drops are retained as tiny routine/status texture only; they do not establish a major hobby or personality axis.",
    ]),
    antiFanon: unique([
      ...(milo.antiFanon ?? []),
      "Milo / `milocal` continuity in this material is bounded to the stable same-account footprint. Do not bridge additional identities from name similarity alone.",
      "Milo's `uncultured` line is a joke about not yet recognizing old Wall receipts, not a general intelligence, education, or cultural-knowledge claim.",
    ]),
  });
}
