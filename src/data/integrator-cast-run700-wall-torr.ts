import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  next: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === next.name);
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex >= 0) {
  const torr = allCharacters[torrIndex] as ExtendedCharacter;
  const relationships = [...(torr.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Gilli",
    note:
      "Torr knows Gilli is an out-of-context hazard and says so himself: `why do right so many things that can be taken out of context when @New Account Gilli#3226 is around`. Together with the earlier `bad influence` joke, it reads as comfortable recurring evidence-room teasing — Torr sees the trap coming and keeps supplying material anyway.",
    href: "/characters/gilli",
  });

  const claims = [
    "On 2022-11-05 Torr TRUE-replies into a Wall roast pocket with an ordinary-life family story: his grandmother always needed dinner biscuits on special occasions, reliably burned them, and the family converted the recurring failure into the line `they are not burnt they are blackened.` The value is the remembered house language, not a claim that Torr personally prefers burnt food.",
    "On 2023-01-30 Torr says Rummy's only crime is `the overuse of the semi colon`; 36.453 seconds later he says `oh no the eglish has become normalized to me`. That compact reversal deepens his context sensitivity into a broader language habit: selective pedant, willing word-bender, and fully susceptible to UL's own linguistic nonsense.",
    "Torr's earlier awareness that his stream was generating Wall material now sits inside a larger wording/context pattern. He notices when phrasing can be weaponized around Gilli, remembers a family euphemism that turned failure into a joke, and can police somebody else's punctuation while immediately self-owning his own acclimation to `eglish`.",
  ];

  const antiFanon = [
    "The grandmother/biscuit receipt supports only Torr's stated special-occasion family memory and the recurring `blackened` joke. Do not infer geography, family structure, living arrangement, present-day family status, or a personal taste for burnt food.",
    "Marian Kage's `Screenshot_20221104-160450.png` is POSTED BY Marian only. Its pixels were not inspected; MADE BY, CAPTURED BY, FEATURING, and exact visual subject remain unresolved.",
    "A later Daya line saying `he ... likes burnt` has an unresolved `he` and must not be bridged to Torr without an independent referent.",
    "Torr's Gilli context-hazard language is recurring teasing/receipt awareness, not literal blame, hostility, a closeness ranking, or a formal archive role.",
    "The semicolon joke and `eglish` self-own are person texture, not evidence that Torr is globally prescriptive about grammar or unable to spell.",
  ];

  allCharacters[torrIndex] = {
    ...torr,
    logline:
      "Context-sensitive streamer with a suspiciously good ear for the phrases people turn into lore: Torr knows Gilli can weaponize his wording, remembers his family's doctrine that burnt biscuits are merely `blackened`, prosecutes Rummy's semicolons, then realizes UL `eglish` has colonized him too.",
    tags: [
      ...new Set([
        ...(torr.tags ?? []),
        "Language awareness",
        "Selective pedantry",
        "Family lore",
        "Ordinary life",
        "Blackened biscuits",
        "Eglish normalization",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(torr.quotes ?? []),
        "they are not burnt they are blackened.",
        "the only thing rummy guilty of is the overuse of the semi colon",
        "oh no the eglish has become normalized to me",
      ]),
    ],
    claims: [...new Set([...(torr.claims ?? []), ...claims])],
    antiFanon: [...new Set([...(torr.antiFanon ?? []), ...antiFanon])],
  } as ExtendedCharacter;

  characterById.set("torr", allCharacters[torrIndex]);
}
