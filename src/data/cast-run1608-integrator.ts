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
      "On September 13, 2021, Gabu rehearsed the Photoshoot FESTIVAL closure inside the Saber-control lane: a literal `test3` fired first, then she loaded the actual closure copy, retimed it to fire within the next minute, watched Saber post it in control, and later rebuilt the same closure for the real September 20 submission deadline. It is a clean early version of the habit the archive keeps catching later: test the production thing with a real payload, watch what the machine does, then set the live schedule.",
      "On February 4–5, 2022, Gabu repeatedly live-tested the anniversary Festival automation in Staff: triggering the festival, probing spawn behavior, testing the cooldown edge, catching celebration fish, and continuing until prize-chest and boss bulletins fired. The surviving sequence ends with Gabu's `OKAY IT WORKS`, giving the systems-brain reputation a very literal party-machine example.",
      "Taken together, the Photoshoot rehearsal and the anniversary Festival scene make live validation a recurring behavior rather than a one-off technical anecdote: Gabu keeps poking event machinery until the timing and output are visible enough to trust, then goes back to ordinary room life.",
    ]),
    antiFanon: unique([
      ...(gabu.antiFanon ?? []),
      "The September 2021 FESTIVAL closure copy fired in the Saber-control lane after a literal test event and was then rebuilt for the real deadline. Do not rewrite that control-lane rehearsal as a public premature closure, a proven accident, a member-visible mistake, or evidence that submissions actually closed early.",
      "The September 2021 bot closure template says `12am` while the public winner schedule says `12pm`. Preserve the mismatch; do not silently choose one as the intended schedule without another source.",
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
    note: "In May 2021 Eos recognizes Gilli's altered voice quickly enough to ask why it is on; Gilli says they bought the full version and were playing around with it, and Eos answers `i like it tho`. Tiny VC familiarity plus permission to be a little ridiculous, not a claim about the unknown software or exact effect.",
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
      "A May 18, 2021 Club Only exchange gives Gilli a wonderfully unnecessary hobby detail: Gilli says they bought the full version of a voice tool and were playing around with it; Eos says he likes it and Anayss recognizes the altered voice strongly enough to joke about tournament flashbacks. Paid voice-effect tinkering belongs in Petty Crimes, not the resume.",
    ]),
    antiFanon: unique([
      ...(gilli.antiFanon ?? []),
      "The account bridge resolves the human/controller identity only. It does not establish when or why the older account acquired the rendered `Gabu's Chair` nickname, and export-time roles still do not establish appointment chronology.",
      "The May 2021 scene supports a paid voice-changing/effect tool and room-level recognition of the experiment. The exact software, effect, settings, and audible output remain unknown.",
    ]),
  } as ArchiveCharacter;

  const nobuIndex = characters.findIndex((character) => character.id === "nobu");
  if (nobuIndex < 0) throw new Error("Run 1608 expected canonical Nobu owner");

  const nobu = characters[nobuIndex] as ArchiveCharacter;
  characters[nobuIndex] = {
    ...nobu,
    tags: unique([
      ...(nobu.tags ?? []),
      "Low-caption filing",
      "Receipt curator",
      "Petty Crimes",
    ]),
    quotes: unique([
      ...(nobu.quotes ?? []),
      "Ngl, I legit thought that said children. Which is why I posted it.",
      "*coughs*",
    ]),
    claims: unique([
      ...(nobu.claims ?? []),
      "Nobu's Wall filing style is textually tiny and documentarily loud. Across the surviving 2022–2024 run she repeatedly drops screenshot packets with almost no setup — rapid paired filings, a multi-image batch, or two images introduced only by `*coughs*` — and trusts the room to catch up.",
      "The best explanation of Nobu's selection process comes from Nobu: after one filing, she says `Ngl, I legit thought that said children. Which is why I posted it.` The person who can build elaborate event packages also has a receipt-curator mode driven by one misread word and immediate commitment to the bit.",
      "Repeated Rummy-directed filings and one-line callouts (`RUMMY IT'S BURNT`, `Rummy has rizz??`, `I'm proud of you, Rummy`) deepen the same compact social voice without requiring a new relationship rank or a new alias bridge.",
    ]),
    antiFanon: unique([
      ...(nobu.antiFanon ?? []),
      "Nobu's Wall attachments are safely POSTED BY Nobu. Do not upgrade the files to MADE BY, CAPTURED BY, or FEATURING claims when the image contents or provenance are not independently resolved.",
      "A November 2022 `RUMMY` reply mechanically mentions Marian in that immediate exchange, but this intake does not create a project-wide `Rummy = Marian` identity bridge. Keep the referent bounded unless user-confirmed identity evidence resolves it.",
      "`Nobu and Gabu sound nice together` and the room's ship/get-a-room replies are joke/social-play texture, not evidence of romance, sex, attraction, or a literal relationship.",
    ]),
  } as ArchiveCharacter;
}
