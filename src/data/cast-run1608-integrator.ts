import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = (values: string[]) => [...new Set(values)];

export function applyRun1608IntegratorCast(characters: Character[]) {
  const gabuIndex = characters.findIndex((character) => character.id === "gabu");
  if (gabuIndex < 0) throw new Error("Run 1608 expected canonical Gabu owner");

  const gabu = characters[gabuIndex] as ArchiveCharacter;
  characters[gabuIndex] = {
    ...gabu,
    tags: unique([
      ...(gabu.tags ?? []),
      "Event systems",
      "Live-fire testing",
      "Operational festivity",
    ]),
    quotes: unique([...(gabu.quotes ?? []), "OKAY IT WORKS"]),
    claims: unique([
      ...(gabu.claims ?? []),
      "On February 4–5, 2022, Gabu repeatedly live-tested the anniversary Festival automation in Staff: triggering the festival, probing spawn behavior, testing the cooldown edge, catching celebration fish, and continuing until prize-chest and boss bulletins fired. The surviving sequence ends with Gabu's `OKAY IT WORKS`, giving the systems-brain reputation a very literal party-machine example.",
      "The Festival scene shows role-as-behavior rather than a new title: Gabu keeps poking the event machinery until timing, catches, cooldown, prizes, and boss behavior visibly work, then goes back to ordinary room life.",
    ]),
    antiFanon: unique([
      ...(gabu.antiFanon ?? []),
      "The February 2022 Festival live-fire sequence supports hands-on event/system testing; it does not independently create a formal QA title, prove sole authorship of the automation, or establish governance rank.",
      "The surviving Festival call-and-response is a social/event signature in this scene, not guaranteed origin of the word or exclusive ownership of the joke.",
    ]),
  } as ArchiveCharacter;

  const gilliIndex = characters.findIndex((character) => character.id === "gilli");
  if (gilliIndex < 0) throw new Error("Run 1608 expected canonical Gilli owner");

  const gilli = characters[gilliIndex] as ArchiveCharacter;
  const relationships = [...(gilli.relationships ?? [])];
  const eosIndex = relationships.findIndex((relationship) => relationship.name === "Eos");
  const eosRelationship = {
    name: "Eos",
    note: "In May 2021 Eos recognizes Gilli's altered voice quickly enough to ask why he has it on; Gilli says he bought the full version and was playing around with it, and Eos answers `i like it tho`. Tiny VC familiarity plus permission to be a little ridiculous, not a claim about the unknown software or exact effect.",
    href: "/characters/eos",
  };
  if (eosIndex >= 0) relationships[eosIndex] = eosRelationship;
  else relationships.push(eosRelationship);

  characters[gilliIndex] = {
    ...gilli,
    aliases: unique([
      ...(gilli.aliases ?? []),
      "New Account Gilli",
      "Mr. Streamer (Gabu's Chair)",
    ]),
    tags: unique([
      ...(gilli.tags ?? []),
      "Account-era continuity",
      "Voice-effect tinkering",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([
      ...(gilli.stableDiscordIds ?? []),
      "585466495757451284",
      "615878920583249920",
    ]),
    relationships,
    quotes: unique([
      ...(gilli.quotes ?? []),
      "I bought the full version and I was paying around with it @Eos",
    ]),
    claims: unique([
      ...(gilli.claims ?? []),
      "Gilli's newer account 585466495757451284 and older account 615878920583249920 (`Mr. Streamer (Gabu's Chair)`) are directly bridged by a November 10, 2020 Eli Jail command: New Account Gilli targets the older account, the bot resolves the target as `Gilli#8635`, and the successful embed both names jailed Gilli and gives the older account ID. Treat them as two account eras of one person while preserving both stable IDs in receipts.",
      "A May 18, 2021 Club Only exchange gives Gilli a wonderfully unnecessary hobby detail: Gilli says he bought the full version of a voice tool and was playing around with it; Eos says he likes it and Anayss recognizes the altered voice strongly enough to joke about tournament flashbacks. Paid voice-effect tinkering belongs in Petty Crimes, not the resume.",
    ]),
    antiFanon: unique([
      ...(gilli.antiFanon ?? []),
      "The account bridge resolves the human/controller identity only. It does not establish when or why the older account acquired the rendered `Gabu's Chair` nickname, and export-time roles still do not establish appointment chronology.",
      "The May 2021 scene supports a paid voice-changing/effect tool and room-level recognition of the experiment. The exact software, effect, settings, and audible output remain unknown.",
    ]),
  } as ArchiveCharacter;
}
