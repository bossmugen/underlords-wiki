import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const aeshId = "aeshleen";
const aeshIndex = allCharacters.findIndex((character) => character.id === aeshId);

const aeshCharacter: ExtendedCharacter = {
  id: aeshId,
  name: "Aesh",
  aliases: ["Aeshleen", "aeshleen", "aεsh¡!", "aesh van gogb"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021+",
  logline:
    "Aesh can laugh at her own prosecution, accept the nickname, and still insist the caption be accurate. Her Wall style is unusually cooperative with embarrassment and unusually stubborn about context: chaos-friendly defendant, tiny provenance department.",
  tags: [
    "Archive cast",
    "Wall",
    "Self-owning humor",
    "Context keeper",
    "Mugen banter",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "Mugen repeatedly files or names Aesh in Wall bits: the 2021 `GOGB` filing becomes `aesh van gogb` in Aesh's own vocabulary, and in 2023 Mugen posts a screenshot as `posted w permits`. Aesh stays inside the joke but adds her own `for the record` context. The recurring lane reads as comfortable teasing with room for Aesh to correct the frame, not surrender control of what the joke means.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "making jokes is my way to cope.",
    "for the record. we were talking about law, zoro, robin, boa and luffy. :Fat_Wheeze:",
    "## FOR THE CONTEXT ##",
  ],
  claims: [
    "On 2021-04-24 Mugen filed `unknown.png` at Aesh with `Welcome to the Underlords wall of shame, GOGB`; Aesh answered `im leaving bye`, and the next day said that Mugen calls her `aesh van gogb`.",
    "On 2021-04-28 Aesh explicitly wrote `making jokes is my way to cope.` after laughing through a Wall pocket; the archive does not identify the underlying stressor and none is inferred.",
    "On 2023-03-14, after Mugen posted `Screenshot_20230314_123305_Discord.jpg` tagged to Aesh with `posted w permits`, Aesh added that they had been talking about Law, Zoro, Robin, Boa and Luffy.",
    "On 2024-04-20 Aesh explicitly supplied another missing frame by saying she was talking about SatōSugu and Omniscient Reader's Viewpoint, then following with `## FOR THE CONTEXT ##`.",
  ],
  antiFanon: [
    "Aesh's `making jokes is my way to cope.` is kept as bounded self-report; it does not establish the underlying stressor, diagnosis, or a universal coping pattern outside the supported context.",
    "The repeated context corrections support a framing-conscious social habit, not a formal archivist, historian, moderator, or governance role.",
    "Law, Zoro, Robin, Boa, Luffy, SatōSugu and Omniscient Reader's Viewpoint are conversation topics Aesh explicitly named in those moments; they are not inflated into identity, sexuality, relationship, or fandom-intensity claims.",
    "Mugen's 2021 `unknown.png` and 2023 Discord screenshot are POSTED BY Mugen only in this handoff. Pixels were not inspected; MADE BY / CAPTURED BY / FEATURING remain unresolved.",
    "Mugen's `posted w permits` supports his statement that permission existed; it does not identify creator, capturer, subject, or the scope of any permission beyond that post.",
  ],
};

if (aeshIndex >= 0) {
  const aesh = allCharacters[aeshIndex] as ExtendedCharacter;
  allCharacters[aeshIndex] = {
    ...aesh,
    ...aeshCharacter,
    aliases: [...new Set([...(aesh.aliases ?? []), ...(aeshCharacter.aliases ?? [])])],
    tags: [...new Set([...(aesh.tags ?? []), ...(aeshCharacter.tags ?? [])])],
    relationships: aeshCharacter.relationships,
    quotes: [...new Set([...(aesh.quotes ?? []), ...(aeshCharacter.quotes ?? [])])],
    claims: [...(aesh.claims ?? []), ...(aeshCharacter.claims ?? [])],
    antiFanon: [...(aesh.antiFanon ?? []), ...(aeshCharacter.antiFanon ?? [])],
  } as ExtendedCharacter;
} else {
  allCharacters.push(aeshCharacter);
}

characterById.set(aeshId, allCharacters.find((character) => character.id === aeshId)!);
