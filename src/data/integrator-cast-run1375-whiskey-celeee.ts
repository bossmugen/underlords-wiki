import "./integrator-cast-run1375-wall-lilly";
import "./integrator-cast-run1380-daycare-eos-rummy";
import "./integrator-cast-run1383-core-efli";
import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const celeeeId = "celeee";
const celeeeIndex = allCharacters.findIndex((character) => character.id === celeeeId);

const celeeeSeed: ExtendedCharacter = {
  id: celeeeId,
  name: "Celeee",
  aliases: ["Celeee❦(Gilli's Pie)", "celeana"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2020–2021+",
  logline:
    "Celeee has a very specific way of surviving public embarrassment: stay in the room, skip the defensive essay, and answer the caricature with one compact reaction that keeps the joke alive. She can be visibly caught off guard without socially retreating, which makes her Wall presence feel less like chaos-for-chaos's-sake and more like an instinct for turning exposure back into participation.",
  tags: [
    "Archive cast",
    "2020",
    "2021",
    "Lobby",
    "Wall",
    "Reaction humor",
    "Public teasing",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Anthos",
      note:
        "Anthos can pull Celeee directly into posted-media context: on June 4, 2021, the clown-tagged screenshot callout gives Ren the opening for a grotesque Marie Kondo bit; later in June, Anthos again tags Celeee immediately after a screenshot bundle. The repeated social move is a public summon/callout lane, not a closeness rank, and the images themselves do not resolve maker, capturer, or visible subject.",
    },
    {
      name: "Ren",
      note:
        "Ren can hand Celeee an absurdly specific public caricature and get a `:smug:` back thirteen seconds later. The important relationship texture is not the animal joke itself; it is that Celeee is comfortable enough to answer inside Ren's framing instead of stopping the scene to defend her image.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    ":smug:",
    "I- :Cursed:",
  ],
  claims: [
    "Celeee's strongest reviewed contradiction is publicly caught / still playing the room. Exposure can visibly land, but it does not automatically make her explain herself or leave the bit.",
    "On June 4, 2021, Anthos tags Celeee with a clown and screenshot; Ren follows with a Marie Kondo animal caricature; Celeee answers 13.332 seconds later with `:smug:`. The emote completes the joke's social rhythm without turning Ren's premise into real-life fact.",
    "A later `I- :Cursed:` reaction supports the same broad embarrassment register, although that line is only contextually adjacent to the nearby screenshot rather than mechanically linked to it.",
    "An August 2020 Lobby pocket gives an early stable-account floor: Celeee posts an emote, then Anthos answers with `role assigned! and welcome bb` and server-tour routing. It is earliest reviewed Lobby evidence, not a guaranteed join or recruitment origin.",
    "Petty Crimes: MARIE KONDO ALLEGATION — plea: `:smug:`. The joke belongs to Ren; Celeee's crime is answering it like she has decided the prosecution can keep going.",
  ],
  antiFanon: [
    "Ren's June 4 animal joke is a peer caricature. It is not evidence that Celeee likes dead animals, owns dead animals, harms animals, or has any real-world animal behavior.",
    "Anthos POSTED the June 4 screenshot and technically mentioned Celeee. MADE BY / CAPTURED BY / VISUALLY FEATURING remain unresolved because the native image pixels are not available in the current retrieval layer.",
    "Celeee's September `I- :Cursed:` line has no mechanical Reply edge to the nearby Anthos screenshot; use it as contextual continuity, not a precise attribution edge.",
    "The August 2020 Lobby scene is earliest reviewed evidence only. Do not convert later role arrays or Anthos's `role assigned!` message into appointment chronology beyond that local scene.",
    "The Celeee↔Anthos and Celeee↔Ren lanes are teasing / public-callout familiarity, not romance, family rank, governance rank, or exclusivity.",
  ],
};

if (celeeeIndex >= 0) {
  const current = allCharacters[celeeeIndex] as ExtendedCharacter;
  allCharacters[celeeeIndex] = {
    ...current,
    ...celeeeSeed,
    aliases: unique([...(current.aliases ?? []), ...(celeeeSeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(celeeeSeed.tags ?? [])]),
    relationships: [...(current.relationships ?? []), ...(celeeeSeed.relationships ?? [])],
    quotes: unique([...(current.quotes ?? []), ...(celeeeSeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(celeeeSeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(celeeeSeed.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(celeeeSeed);
}

characterById.set(celeeeId, allCharacters.find((character) => character.id === celeeeId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(celeeeId)) {
  archiveCastGroup.characterIds.push(celeeeId);
}
