import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertCharacter = (seed: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === seed.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      ...seed,
      aliases: unique([...(current.aliases ?? []), ...(seed.aliases ?? [])]),
      tags: unique([...(current.tags ?? []), ...(seed.tags ?? [])]),
      relationships: [...(current.relationships ?? []), ...(seed.relationships ?? [])],
      quotes: unique([...(current.quotes ?? []), ...(seed.quotes ?? [])]),
      claims: unique([...(current.claims ?? []), ...(seed.claims ?? [])]),
      antiFanon: unique([...(current.antiFanon ?? []), ...(seed.antiFanon ?? [])]),
    } as ExtendedCharacter;
  } else {
    allCharacters.push(seed);
  }

  const character = allCharacters.find((candidate) => candidate.id === seed.id)!;
  characterById.set(seed.id, character);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(seed.id)) {
    archiveCastGroup.characterIds.push(seed.id);
  }
};

upsertCharacter({
  id: "nobu",
  name: "Nobu",
  aliases: ["Xuseio"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2022–2024",
  logline:
    "Nobu is Screenshot Court's tiny-caption evidence gremlin. He can set down a whole packet with `Oh my`, dress three screenshots in `*coughs coughs*`, or post nine images and immediately walk away while tagging the defendants. The useful contradiction is that the prolific filer is also perfectly willing to become part of the joke: when one receipt existed because he misread `children`, he simply told the room that was why he posted it. The receipts can be industrial; the ego-management is refreshingly lightweight.",
  tags: [
    "Archive cast",
    "Wall",
    "Receipt-heavy",
    "Caption-light",
    "Theatrical exhibit-dropper",
    "Candid self-correction",
    "Callback memory",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Rummy",
      note:
        "This is Nobu's strongest surviving Wall lane: repeated receipt filing, Rummy's direct protests, remembered off-Wall conversation imported back as a callback, and even `I'm proud of you, Rummy` wrapped in receipt humor. Teasing, memory, exasperation and encouragement coexist comfortably; none of that assigns a friendship rank.",
    },
    {
      name: "Ren / RV",
      note:
        "Ren can hit Nobu with `Nubeee nubecitaaaa`; Nobu answers `Oh-`, wheezes and `Lies`. Later Nobu supplies `Proof, Ren is a childe.` and includes Ren in the post-nine-image walkaway summons. Recurring tease-and-summon familiarity is clear without turning it into a ranked relationship.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    "Oh my",
    "*coughs coughs*",
    "Ngl, I legit thought that said children. Which is why I posted it.",
    "It's the \"*try again*\" That got to me while imagining namo mad frustrated. Finesse of a comedy duo",
    "Light mode gets me every time.",
    "I'm proud of you, Rummy.",
    "*coughs*",
  ],
  claims: [
    "Across Nobu's surviving Wall footprint from August 2022 through April 2024, 77 authored messages carry 76 direct attachments total. That is a run-scoped density measure, not a claim that 76 of 77 messages each contained media.",
    "Nobu repeatedly stages evidence with tiny captions or stage directions: `Oh my`, mock coughs, and a walkaway immediately after a nine-image packet. The artifact usually carries the accusation while the caption supplies timing.",
    "Nobu explicitly owns a filing mistake: `Ngl, I legit thought that said children. Which is why I posted it.` The person who prosecutes everyone else is willing to say when the premise was his own misread instead of retrofitting certainty.",
    "The Rummy lane persists across multiple years and includes direct protests, jokes, a remembered prior conversation, and encouragement folded back into receipt culture.",
    "Petty Crimes: treats `Oh my` like sufficient paperwork for a screenshot, uses mock coughing as evidence-delivery formalwear, posts nine screenshots and walks away, gets attacked by light mode, and openly admits when a misread created the case.",
  ],
  antiFanon: [
    "Nobu / Xuseio is stable account 864346521351880714. No identity bridge is inferred from similar display names alone.",
    "August 23, 2022 is earliest surviving Nobu Wall evidence in the reviewed corpus, not an origin date for the behavior or the person.",
    "The 77-message / 76-attachment count is a Wall-corpus coverage fact. It does not mean 76 of 77 individual messages contained attachments and it is not a permanent personality statistic.",
    "Same-message mentions of Ricochet, Mugen, Ren, Rummy or anyone else establish textual summons only. They do not identify who appears inside an attachment.",
    "POSTED BY Nobu does not establish MADE BY, CAPTURED BY or FEATURING. Timestamp-shaped filenames likewise do not establish capture time, device ownership or authorship.",
    "The Nobu↔Rummy and Nobu↔Ren material supports recurring teasing/callback familiarity, not romance, family language, literal conflict or a ranked friendship claim.",
  ],
} as ExtendedCharacter);
