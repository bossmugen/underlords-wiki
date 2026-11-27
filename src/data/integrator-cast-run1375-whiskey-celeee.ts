import "./integrator-cast-run1375-wall-lilly";
import "./integrator-cast-run1380-daycare-eos-rummy";
import "./integrator-cast-run1383-core-efli";
import "./integrator-cast-run1386-daycare-wall";
import "./integrator-cast-run1393-daycare-louvre";
import "./integrator-cast-run1401-daycare-wall";
import "./integrator-cast-run1406-daycare-nintendoshitcube";
import "./integrator-cast-run1406-wall-shiki";
import "./integrator-cast-run1406-wall-momo";
import "./integrator-cast-run1407-whiskey-ghostt";
import "./integrator-identity-repair-run1406-alkey-meowk";
import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Keep the established technical id so existing WIKI routes stay stable. Public canon name is Cele.
const celeeeId = "celeee";
const celeeeIndex = allCharacters.findIndex((character) => character.id === celeeeId);

const celeeeSeed: ExtendedCharacter = {
  id: celeeeId,
  name: "Cele",
  aliases: ["Celeee", "Celeana", "Celery", "Celeee❦(Gilli's Pie)", "celeyster"],
  stableDiscordIds: ["310986721121337344", "745353665149141144"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2020–2023+",
  logline:
    "Cele can be the screaming defendant, the smug co-conspirator, or the person quietly dropping the exhibit and trusting everybody else to understand it. Her Wall rhythm runs from `:smug:` under public teasing to full keyboard collapse when somebody catches her first, while an earlier low-volume filing lane shows the opposite skill: post the media, barely narrate it, and let the room finish the joke.",
  tags: [
    "Archive cast",
    "2020",
    "2021",
    "Lobby",
    "Wall",
    "Reaction humor",
    "Public teasing",
    "Receipt filer",
    "Media-first humor",
    "Shared-reference humor",
    "Gallery laughter",
    "Role reversal",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Anthos",
      note:
        "Anthos can pull Cele directly into posted-media context: on June 4, 2021, the clown-tagged screenshot callout gives Ren the opening for a grotesque Marie Kondo bit; later in June, Anthos again tags Cele immediately after a screenshot bundle. The repeated social move is a public summon/callout lane, not a closeness rank, and the images themselves do not resolve maker, capturer, or visible subject.",
    },
    {
      name: "Ren",
      note:
        "Ren can hand Cele an absurdly specific public caricature and get a `:smug:` back thirteen seconds later. The important relationship texture is not the animal joke itself; it is that Cele is comfortable enough to answer inside Ren's framing instead of stopping the scene to defend her image.",
      href: "/characters/ren",
    },
    {
      name: "demkipp",
      note:
        "Cele can also use the Wall as a one-line recognition weapon. On January 28, 2021, she posts an item with the direct caption `this is literally demkipp`, trusting the room to understand the comparison without an explanatory paragraph. This is joke-target / shared-reference texture only, not a relationship rank.",
    },
  ],
  quotes: [
    ":smug:",
    "I- :Cursed:",
    "LMFAOOOOOOOOOO",
    "THAT FACE IM DEADDD",
    "She's after me",
    "this is literally demkipp",
  ],
  claims: [
    "Cele's strongest reviewed contradiction is publicly caught / still playing the room. Exposure can visibly land, but it does not automatically make her explain herself or leave the bit.",
    "On June 4, 2021, Anthos tags Cele with a clown and screenshot; Ren follows with a Marie Kondo animal caricature; Cele answers 13.332 seconds later with `:smug:`. The emote completes the joke's social rhythm without turning Ren's premise into real-life fact.",
    "A later `I- :Cursed:` reaction supports the same broad embarrassment register, although that line is only contextually adjacent to the nearby screenshot rather than mechanically linked to it.",
    "An August 2020 Lobby pocket gives an early stable-account floor: Cele posts an emote, then Anthos answers with `role assigned! and welcome bb` and server-tour routing. It is earliest reviewed Lobby evidence, not a guaranteed join or recruitment origin.",
    "The Whiskey source account is stable Discord ID 310986721121337344 / source username `celeyster`; the Wall tranche also preserves stable Discord ID 745353665149141144 under Cele / celeana. User-confirmed canon makes Cele, Celeana, Celeee, and Celery one person, so these remain two source-account histories under one Cele owner rather than two cast pages.",
    "Across the March 28–April 1, 2021 Wall packet, Cele laughs loudly at posted material, then directly posts an attachment herself and says `She's after me`. The useful change is target/spectator becoming participant/filer without dropping the joke.",
    "The November 23, 2020 and January 16, 2021 Wall rows add an earlier low-volume filing lane: Cele posts media with little or no authored explanation and the room supplies the reaction around it. The person-level pattern is media-first shared-reference humor, not social absence.",
    "On January 28, 2021, Cele captions another Wall item `this is literally demkipp`. The tiny caption shows the same economy from the other direction: when she does narrate the exhibit, one direct comparison can be enough because the joke is already socially legible.",
    "Petty Crimes: MARIE KONDO ALLEGATION — plea: `:smug:`. The joke belongs to Ren; Cele's crime is answering it like she has decided the prosecution can keep going.",
    "Petty Crimes: Cele is capable of filing a whole joke by dropping the object first and apparently trusting everybody else to do their own paperwork.",
  ],
  antiFanon: [
    "Cele / Celeana / Celeee / Celery are user-confirmed aliases of one person. The two reviewed Discord IDs are separate source accounts and must not be rewritten as one account ID, but they also must not generate duplicate Cele cast owners.",
    "Ren's June 4 animal joke is a peer caricature. It is not evidence that Cele likes dead animals, owns dead animals, harms animals, or has any real-world animal behavior.",
    "Anthos POSTED the June 4 screenshot and technically mentioned Cele. MADE BY / CAPTURED BY / VISUALLY FEATURING remain unresolved because the native image pixels are not available in the current retrieval layer.",
    "Cele's September `I- :Cursed:` line has no mechanical Reply edge to the nearby Anthos screenshot; use it as contextual continuity, not a precise attribution edge.",
    "The August 2020 Lobby scene is earliest reviewed evidence only. Do not convert later role arrays or Anthos's `role assigned!` message into appointment chronology beyond that local scene.",
    "The Cele↔Anthos, Cele↔Ren, and Cele↔demkipp lanes here are teasing / public-callout / joke-reference familiarity, not romance, family rank, governance rank, exclusivity, or a closeness hierarchy.",
    "`She's after me` is local teasing / social dramatization in the reviewed Wall pocket, not evidence of stalking, threat, harassment, or literal pursuit.",
    "Cele's later attachment establishes POSTED BY Cele only. MADE BY, CAPTURED BY, and FEATURING remain unresolved because the object was not visually inspected in this review.",
    "Cele's November 2020 and January 2021 Wall objects establish POSTED BY Cele source account only. Their subjects, creators, capture authors, and visible participants remain unresolved unless the underlying media is inspected.",
    "Sparse text beside Cele's early Wall posts does not prove that she is globally quiet, shy, or low-participation; it supports only a selective media-first posting style in these rows.",
  ],
};

if (celeeeIndex >= 0) {
  const current = allCharacters[celeeeIndex] as ExtendedCharacter;
  allCharacters[celeeeIndex] = {
    ...current,
    ...celeeeSeed,
    aliases: unique([...(current.aliases ?? []), ...(celeeeSeed.aliases ?? [])]),
    stableDiscordIds: unique([...(current.stableDiscordIds ?? []), ...(celeeeSeed.stableDiscordIds ?? [])]),
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
