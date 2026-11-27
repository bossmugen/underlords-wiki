import { allCharacters } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const extendRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: `${current.note} ${relationship.note}`,
      href: current.href ?? relationship.href,
    };
  } else {
    relationships.push(relationship);
  }
};

// Run 1456 Daycare: Eos does not merely keep receipts; she checks the blast radius before pressing Send.
const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex >= 0) {
  const eos = allCharacters[eosIndex] as ExtendedCharacter;
  const relationships = [...(eos.relationships ?? [])];

  extendRelationship(relationships, {
    name: "Gilli",
    note:
      "Wall gives their shorthand a more mischievous register too. When Eos says she has more material but might get `divorced` for posting it, Gilli answers `donit` and then `He wouldn't dare`. Gilli reads the hesitation as negotiable; Eos is still the one checking the blast radius before deciding whether to throw the receipt.",
    href: "/characters/gilli",
  });

  upsertRelationship(relationships, {
    name: "Tae",
    note:
      "Eos can reduce an entire accusation to `tae-`. One second later Tae answers `i knew it was coming`, keeps the bit going, and then replies directly to Eos. Their surviving Wall language is high-context enough that the dash does most of the exposition.",
  });

  allCharacters[eosIndex] = {
    ...eos,
    tags: appendUnique(eos.tags, [
      "Risk-aware receipt culture",
      "High-context shorthand",
      "Consequence calculator",
    ]),
    relationships,
    quotes: appendUnique(eos.quotes, [
      "I have one… but I might get divorced :AngryCryPan:",
      "tae-",
    ]),
    claims: appendUnique(eos.claims, [
      "On July 7, 2021 Eos says `Debating on sending more` and later `I have one… but I might get divorced`; Gilli directly encourages her with `donit` and `He wouldn't dare`. The useful contradiction is receipt-hoarding/instigator impulse with an explicit last-second consequence check.",
      "On March 11, 2022 Eos reacts to a Ren-posted attachment with only `tae-`; Tae answers one second later `i knew it was coming`, adds `and im not ashamed`, and then directly replies to Eos. That supports a bounded Eos↔Tae high-context teasing lane.",
    ]),
    antiFanon: appendUnique(eos.antiFanon, [
      "The July 7 `divorced` line remains Eos's joking social wording and does not establish a legal marriage, literal relationship status, or partner identity. No Eos-posted attachment was observed immediately after the threat; a later attachment in the sequence is POSTED BY Tofu.",
      "Ren's March 11 attachment is POSTED BY Ren and was not visually inspected. Its maker, capturer, visual subjects, and the meaning of Tae's `$11` reply remain unresolved.",
    ]),
  } as ExtendedCharacter;
}

// Run 1456 Whiskey + closing Wall tail: the doorway can reset without turning Nhou back into a stranger.
const nhouIndex = allCharacters.findIndex((character) => character.id === "nhou");
if (nhouIndex >= 0) {
  const nhou = allCharacters[nhouIndex] as ExtendedCharacter;
  const relationships = [...(nhou.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Anayss",
    note:
      "Anayss supplies the human continuity when automation gets confused: during a November 2020 MEE6 welcome she says `wb`, treating Nhou as a returner rather than a stranger. Months later Nhou drops `snouwu` into a Snow/UwU bit; Anayss echoes `Snouwu` 24.833 seconds later and uses `Snouwu rn~` again about seven minutes later. Recognition survives the doorway, then turns into shared language that is reusable inside the scene.",
  });

  upsertRelationship(relationships, {
    name: "Snow",
    note:
      "Snow already appears in Nhou's Whiskey history as the person helping him decompress after a bad shift. The April 2021 `snouwu` pocket adds the other direction: Nhou notices Snow's recognizable `UwU` habit, turns it into portable room language, and Anayss picks it up twice inside the same scene. Their surviving texture can hold care and teasing at the same time.",
    href: "/characters/snow",
  });

  allCharacters[nhouIndex] = {
    ...nhou,
    logline:
      "Staff and compact shared-language participant whose social continuity keeps surviving administrative nonsense: the Bouncer can welcome Nhou again, Anayss can answer `wb`, and months later Nhou is fluent enough to turn Snow's `UwU` habit into `snouwu` and watch the room reuse it.",
    tags: appendUnique(nhou.tags, [
      "Returning regular",
      "Social continuity",
      "Re-entry",
      "Relationship language",
    ]),
    relationships,
    quotes: appendUnique(nhou.quotes, [
      "MY EYES",
      "-vampire noises-",
      "snouwu",
    ]),
    claims: appendUnique(nhou.claims, [
      "Stable Nhou is directly present by September 25, 2020, then receives a MEE6 welcome surface on November 26; Anayss says `wb` seven minutes later. The platform is processing a doorway while a peer is recognizing a return.",
      "The same stable account receives another MEE6 welcome on March 15, 2021 and promptly completes the requested onboarding step. Repeated welcome mechanics therefore belong to Nhou's re-entry history rather than repeated-newcomer characterization.",
      "On April 14, 2021 Nhou writes `snouwu`; Anayss echoes `Snouwu` 24.833 seconds later and reuses `Snouwu rn~` about 6m50s later. That deepens Snow↔Nhou beyond one-way support and shows the formulation becoming reusable shared shorthand inside that bounded Wall pocket.",
    ]),
    antiFanon: appendUnique(nhou.antiFanon, [
      "The November 2020 and March 2021 welcome surfaces do not establish why Nhou re-entered, any leave or kick date, an account reset, or a disappearance span. Anayss's `role assigned` is a contemporaneous access action, not Staff appointment chronology.",
      "The March 2021 onboarding response contains private demographic material that is unnecessary to the public person story and remains withheld; only the behavioral fact that Nhou completed the requested doorway step is carried forward.",
      "The assigned Wall contains exactly three case-insensitive `snouwu` occurrences, all in the same April 14, 2021 pocket: Nhou once and Anayss twice. That supports bounded shared shorthand, not a durable Snow alias or a global coinage claim.",
    ]),
  } as ExtendedCharacter;
}

// Run 1456 Birthdays/PR: Mimi's lawyer self-description coexists with visible creative-production labor.
const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
if (mimiIndex >= 0) {
  const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
  const relationships = [...(mimi.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "Mimi can protest a `designer` label with `I’m lawyer`; Mugen's answer is immediate and annoyingly practical: `Sir you made the banner I -`. Ten days earlier Mugen had already thrown Mimi's own poster suggestion back at her as `THE POSTER MAKER`. The teasing works because creative labor had apparently become recognizable enough to stick even when Mimi did not lead with it as an identity.",
    href: "/characters/mugen",
  });

  allCharacters[mimiIndex] = {
    ...mimi,
    tags: appendUnique(mimi.tags, [
      "Creative production",
      "Poster/banner work",
      "Designer-label resistance",
    ]),
    relationships,
    quotes: appendUnique(mimi.quotes, [
      "^ should be on a poster",
      "Omg why does it say designer- I’m lawyer",
      "LMAOO I JUST NOTICED THATTT",
    ]),
    claims: appendUnique(mimi.claims, [
      "On April 2, 2023 Mimi / Opalite says an image `should be on a poster`; Mugen directly replies `LMFAOO SAID THE POSTER MAKER`, and Mimi laughs. The line supports an in-group creative-production reputation rather than a formal office.",
      "On April 12, 2023 Mimi protests an image labeling her `designer` with `I’m lawyer`; Mugen directly replies `Sir you made the banner I -`. That is direct creator-credit language for a banner, while the exact banner object remains unresolved.",
      "The useful contradiction is person-first rather than bureaucratic: Mimi foregrounds `lawyer`, while Mugen points at creative work Mimi had actually done. Mimi laughs instead of correcting the premise.",
    ]),
    antiFanon: appendUnique(mimi.antiFanon, [
      "`Poster Maker` / `designer` are teasing reputation language here, not a formal UL office, Marketing appointment, or license to assign Mimi every poster/banner in the archive.",
      "Mugen's `you made the banner` directly credits Mimi with making a banner, but the surviving text does not bridge that sentence to one exact artifact. Preserve the creator credit without inventing the object.",
      "The adjacent Morgan Maxwell poster-designer joke is not an identity bridge to Mimi or another UL person. Mimi remains the canonical owner of stable account 783389804079349800 / `opalite.honey`, distinct from Mia.",
    ]),
  } as ExtendedCharacter;
}

// Run 1456 closing Wall tail: correct Erys's local `Emi` label and keep the defendant/filer contradiction person-shaped.
const erysIndex = allCharacters.findIndex((character) => character.id === "erys");
if (erysIndex >= 0) {
  const erys = allCharacters[erysIndex] as ExtendedCharacter;
  const relationships = [...(erys.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "RV",
    note:
      "Ren can post evidence and get Erys from `NO` to `its photoshopped` in seconds; Erys later files back, directly summons Ren, and mirrors Ren's elongated scream. By May 10 the routine is literal mock litigation: Ren TRUE-REPLIES Erys's exact `objection` with final exported wording `Denied, it was your own answer`, and Erys keeps arguing anyway. Fast prosecution, theatrical defense, counter-filing, no reset button required.",
    href: "/characters/ren",
  });

  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "When Mugen says there is more evidence but chat is moving too fast for screenshots and her eyes are sleepy, Erys answers `good`, then `no one needs to see the rest mugss`, then `:))`. The timing makes the mock-suppression pickup probable even without a stored Reply edge: Erys is trying to stop publication by performing the objection directly in front of the documentarian.",
    href: "/characters/mugen",
  });

  allCharacters[erysIndex] = {
    ...erys,
    aliases: (erys.aliases ?? []).filter((alias) => alias !== "Emi"),
    tags: appendUnique(erys.tags, [
      "Theatrical evidence denial",
      "Receipt war",
      "Mock litigation",
    ]),
    relationships,
    quotes: appendUnique(erys.quotes, [
      "no one needs to see the rest mugss",
      "ur mummy",
    ]),
    claims: appendUnique(erys.claims, [
      "On May 10, 2022 Ren mechanically TRUE-REPLIES Erys's exact `objection` parent with final exported wording `Denied, it was your own answer`; the message was edited 6.365 seconds later, so only the final surviving wording is carried forward. Erys continues `no it wasn't` and `i swear`.",
      "On May 6 Mugen says more evidence exists but chat speed and sleepy eyes are slowing screenshots; Erys answers `good`, `no one needs to see the rest mugss`, and `:))` within twenty-six seconds. The tight chronology supports probable direct uptake without inventing a Reply edge.",
      "The cumulative contradiction is specific: Erys loudly denies individual exhibits while continuing to file receipts, summon people into them, counter-tease, and even `**twerks on the wall**`. The defenses are part of the performance, not evidence that Erys wants out of the venue.",
    ]),
    antiFanon: appendUnique(erys.antiFanon, [
      "Ricochet's local May 2022 `Emi` label probably refers to Erys in context, but this pass does not have an independent stable-ID bridge. `Emi` is therefore removed from Erys's canonical alias list and kept only as a local/contextual referent until separately resolved.",
      "The May 6 screenshot denials are strong contextual responses to fresh posts, not permission to infer the unseen visual subjects. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.",
    ]),
  } as ExtendedCharacter;
}

// Run 1459 Whiskey: Milo can be the defendant and start prosecuting before the scene has cooled off.
const miloIndex = allCharacters.findIndex((character) => character.id === "milo");
if (miloIndex >= 0) {
  const milo = allCharacters[miloIndex] as ExtendedCharacter;
  const relationships = [...(milo.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Baby Lyssa",
    note:
      "Screenshot Court runs both ways around them. Baby Lyssa catches Milo in May 2020; Milo goes from `oh god` and `i thought no one seen that` to denying it and posting a receipt of his own within seconds. The scene reads as reciprocal filing culture, not a relationship rank.",
    href: "/characters/baby-lyssa",
  });

  upsertRelationship(relationships, {
    name: "Mia",
    note:
      "Milo's surviving Mia register is playfully stretched to absurdity: `i wanna be the little spppppoooooonnnnn` and, the next day, `sleep peeetttttttyyyyyyyy`. It is comfortable teasing language without a romance claim.",
  });

  upsertRelationship(relationships, {
    name: "Lu",
    note:
      "A small April 2021 summon beat: Milo wonders aloud whether Lu is awake; Lu eventually appears with `...u son of a beach`. The exchange supports casual familiarity and premise pickup, not a closeness ladder.",
  });

  upsertRelationship(relationships, {
    name: "Simple",
    note:
      "By November 2020 Milo is no longer merely a Screenshot Court defendant: he literally numbers `evidence #1` and `Evidence #2` against Simple. One of those exact image bytes resurfaces in Daycare nearly two years later under Simple's `Found courtesy of milo 😂`, giving Milo's filing habit a small afterlife beyond the original room.",
  });

  allCharacters[miloIndex] = {
    ...milo,
    logline:
      "Whiskey regular with cozy everyday habits, competitive teeth, and a fully reciprocal relationship with Screenshot Court: Milo can panic when caught, counter-file almost immediately, and later number exhibits against somebody else like prosecution was always the backup plan.",
    tags: appendUnique(milo.tags, [
      "Whiskey",
      "Screenshot Court",
      "Receipt culture",
      "Defendant ↔ prosecutor",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(milo.quotes, [
      "i thought no one seen that",
      "I present evidence #1 of simpleton",
      "Evidence #2 shows Simpletons attempt to ping Ming potato pants",
      "i wanna be the little spppppoooooonnnnn",
    ]),
    claims: appendUnique(milo.claims, [
      "On May 9, 2020 Baby Lyssa catches Milo in a screenshot pocket. Milo answers `oh god`, `i thought no one seen that`, and `liesss`, then posts media of his own seconds later. The useful character contradiction is immediate: being filed does not make Milo leave the game; it makes him counter-file.",
      "On November 24, 2020 Milo formalizes the same instinct into mock prosecution with `I present evidence #1 of simpleton` and `Evidence #2 shows Simpletons attempt to ping Ming potato pants`, each paired with an attachment.",
      "The image bytes from Milo's November 24 `evidence #1` post later reappear in Daycare on April 19, 2022 in a Simple post captioned `Found courtesy of milo 😂`. The custody-safe public read is that Milo's old filing survived long enough to be credited when it resurfaced.",
      "Milo's August 2020 stretched-word lines around Mia and April 2021 summon of Lu add small, bounded relationship texture: playful familiarity with Mia and casual summon familiarity with Lu.",
    ]),
    antiFanon: appendUnique(milo.antiFanon, [
      "The May 2020 Baby Lyssa attachment was not visually inspected. Milo's later media post is POSTED BY Milo; neither item is automatically MADE BY, CAPTURED BY, or FEATURING either participant.",
      "The cross-room byte match establishes reuse of the same image bytes and Daycare's explicit `Found courtesy of milo` credit. It does not establish that Milo created or captured the image, nor who or what the image depicts.",
      "The Mia lines are playful social language, not proof of romance, sex, dating, exclusivity, or a literal spooning relationship. The Lu summon supports familiarity without a closeness rank.",
    ]),
  } as ExtendedCharacter;
}
