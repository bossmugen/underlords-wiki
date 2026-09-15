import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertArchiveCharacter = (seed: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === seed.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      ...seed,
      aliases: appendUnique(current.aliases, seed.aliases ?? []),
      tags: appendUnique(current.tags, seed.tags ?? []),
      relationships: seed.relationships,
      quotes: appendUnique(current.quotes, seed.quotes ?? []),
      claims: appendUnique(current.claims, seed.claims ?? []),
      antiFanon: appendUnique(current.antiFanon, seed.antiFanon ?? []),
    } as ExtendedCharacter;
  } else {
    allCharacters.push(seed);
  }

  const canonical = allCharacters.find((character) => character.id === seed.id)!;
  characterById.set(seed.id, canonical);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(seed.id)) {
    archiveCastGroup.characterIds.push(seed.id);
  }
};

const kuki: ExtendedCharacter = {
  id: "cookie-juicycoochie",
  name: "Kuki",
  aliases: [
    "Cookie",
    "Juice Box",
    "Juicy Cookie",
    "Cookies and Juicebox",
    "🍬Cookies and 🧃Juicebox",
    "juicy.cookie",
    "JuicyCoochie",
  ],
  billing: "legacy",
  role: "Staff / archive-era artist-social cast",
  era: "2020+",
  logline:
    "Kuki is equal parts delighted receipt spectator, quick room-comic, and recurring defendant: he can ask for `more shame`, watch a fresh screenshot with `caught` + popcorn, grab a pun while it is still warm, then spend the next filing insisting `its not how it looks like`. Louvre adds the ordinary maker side—claiming his own art and comparing wrist trouble with other artists—while Wall makes the contradiction obvious: he enjoys Screenshot Court from the gallery and can still turn his own prosecution into another way to participate.",
  tags: [
    "Archive cast",
    "Staff",
    "Louvre",
    "Wall",
    "Artist",
    "Art attribution",
    "Creative habits",
    "Callbacks",
    "Receipt culture",
    "Spectator humor",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Baby Lyssa",
      note:
        "When Baby Lyssa jokes `ugh Ill pack the rest of my bags`, Kuki comes back four minutes later with `u cant leave` and then `:Hehe:`. The laugh takes the command-shape out of the line and leaves a small, comfortable stay-put joke: he catches her mock exit and keeps the room moving.",
    },
    {
      name: "Tofu",
      note:
        "Tofu can reopen the same public receipt bit across multiple days, tag Kuki as the defendant, and trust him to answer in the house register instead of treating it as a serious confrontation. Kuki repeatedly responds with `:PandaRun:`, mock denial, and continued participation. It is recurring teasing/familiarity, not a romance, family label, or closeness ranking.",
    },
  ],
  quotes: [
    "(Don't steal my art plz :pepelove:)",
    "Is this common for artists?? I'm getting worried bout my wrist",
    "more shame",
    "caught",
    "WHAT IS SIMP",
    "u cant leave",
    "Prio-Tities",
    "its not how it looks like",
    "i swear",
  ],
  claims: [
    "Kuki is the canonical public identity for Cookie / Juice Box / Juicy Cookie / Cookies and Juicebox / juicy.cookie under the project-wide user-confirmed identity lock.",
    "A Louvre provenance lane surfaces stable account 361125626887520258 under `JuicyCoochie` and later `juicy.cookie`. Because `juicy.cookie` is hard-locked to Kuki, those handle variants stay with Kuki at the human level; the account ID itself remains a distinct provenance fact.",
    "A separate Wall provenance lane surfaces stable account 249351359290277890 under `juicy.cookie` / `🍬Cookies and 🧃Juicebox`. The hard identity lock unifies the human as Kuki while the two stable account IDs remain separate provenance lanes rather than being falsely collapsed into one account.",
    "On October 13, 2020, the Wall provenance lane has Kuki ask for `more shame`; later that day, after another screenshot lands, he posts `wow`, `caught`, and then `:Popcorn:` within seconds. This is strong spectator/receipt-enjoyer texture without assigning maker, capture, or depicted-subject attribution to the screenshots.",
    "On October 20, 2020, Kuki asks `whats simping` and returns about thirty-five minutes later with `WHAT IS SIMP`. The ordinary-life/social detail is a literal-question streak inside an otherwise room-native presence: he can understand the exposure ritual while still admitting when he does not know the vocabulary.",
    "In June 2020 Kuki posts two art attachments with `(Don't steal my art plz :pepelove:)`. The useful person read is authorship plus lighthearted attribution sensitivity: he wants the work recognized as his without turning the room into a copyright seminar.",
    "In April 2021, while other artists are talking about hand and wrist strain, Kuki asks whether the problem is common for artists and says his own wrist hurts after laptop use, suspecting the mouse. He has no splint in that exchange. The ordinary-life detail is an artist thinking about ergonomics and pain while working, not a medical diagnosis.",
    "On April 13, 2021, Kuki posts `all it took was licky his ear and boom, he turned Yaoi` and immediately follows with `:mochi_laugh:`. It is a compact example of his quick room-joke style; the joke itself is not a literal relationship claim.",
    "On April 22, 2021, Baby Lyssa writes `ugh Ill pack the rest of my bags`; Kuki answers `u cant leave` and six seconds later `:Hehe:`. In context this is bounded playful anti-exit familiarity, not authority or ownership.",
    "On April 27, 2021, an upstream `Prio**tities**` joke is followed almost immediately by Kuki's `Prio-Tities` and `:LizardLaugh:`. The timing supports probable callback/wordplay even though there is no structured Reply edge.",
    "By October 2021 Kuki can also be the Wall's mock-defendant, including the compact `its not how it looks like` → `i swear` defense. Tofu repeatedly reopens the filing across October 5 and October 8–9; Kuki's recurring `:PandaRun:` / mock-defense response supports comfortable repeated teasing without requiring a stronger relationship label.",
    "The spectator-to-defendant reversal is cumulative character texture rather than two separate personas: in 2020 Kuki enjoys fresh receipts from the audience, and in 2021 he turns being the receipt into theatrical flight instead of serious disengagement.",
  ],
  antiFanon: [
    "Kuki is the canonical primary name. Cookie, Juice Box, Juicy Cookie, Cookies and Juicebox, and juicy.cookie are aliases, not separate public people.",
    "The Louvre stable account 361125626887520258 and Wall stable account 249351359290277890 are distinct account-level provenance lanes. User-confirmed human identity unifies their Kuki alias family; do not claim the two account IDs are the same account or invent an account-migration chronology.",
    "Do not merge Kuki with Rookie Cookie, CookieUwU, or another Cookie-like name without a direct identity bridge.",
    "The wrist conversation does not establish carpal tunnel syndrome or any other diagnosis. Kuki reports pain and his own suspicion about laptop/mouse use; keep it there.",
    "Two posted art attachments plus Kuki's authorship caption support that he made the work being discussed. They do not authorize broader attribution of nearby Louvre media to him.",
    "The October 2020 Wall screenshots are surrounding posted media. Kuki's `more shame`, `caught`, and popcorn establish his authored reaction; they do not establish who made/captured the screenshots or who appears in them.",
    "The Baby Lyssa `u cant leave` beat is playful stay-put familiarity, not authority, coercion, ownership, romance, or a closeness ranking.",
    "The Tofu/Kuki receipt chase is recurring teasing/familiarity, not literal hostility, romance, family, or a closeness ranking.",
    "The `Yaoi` joke is joke-generation texture, not evidence of literal romance or sex involving anyone referenced.",
    "`Prio-Tities` is a probable immediate callback to an upstream room pun, not a structured Reply edge.",
    "No formal appointment chronology is inferred from exporter-era metadata; current Staff status comes from the project-wide living roster.",
  ],
};

const jumanji: ExtendedCharacter = {
  id: "jumanji",
  name: "Jumanji",
  aliases: ["JumanjiBinx", "jumanji#0", "Colonel Binx", "JumanjiBaeby"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021+",
  logline:
    "A dry Wall filer who understands that the setup only needs enough words to point everybody at the exhibit. Jumanji can answer a demand for payment with `Whuh?` and media, drop an image that detonates the room, side-eye the fact that it has not been cleaned up yet, then move on to the next little accusation. The rhythm is deadpan setup, attachment, reaction pile, one more line for the road.",
  tags: [
    "Archive cast",
    "Wall",
    "Media-first",
    "Dry humor",
    "Receipt culture",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Rowdy",
      note:
        "Rowdy repeatedly meets Jumanji inside the Wall's filing grammar: demands payment/presents, calls one Jumanji post `the best picture`, and defends keeping it as `historical` when Jumanji is surprised it has not been cleaned up. That supports comfortable recurring banter around receipts, not a ranked-closeness claim.",
    },
    {
      name: "Mugen",
      note:
        "Jumanji can nominate Mugen's `online creation` for the Wall and joke around the room's habit of letting funny filings linger. It is a recurring Wall interaction lane, not evidence that Jumanji made, captured, or appears in every attached item.",
    },
  ],
  quotes: [
    "Whuh?",
    "I'm shocked they haven't poofed it yet to clean the server",
    "You sure he's really \"kidnapping\" you?",
    "The new 4k HD camera doesn't lie xD",
  ],
  claims: [
    "Jumanji's stable account 297042845099229195 appears as `JumanjiBinx` and later `jumanji#0`, with display variants including Jumanji, Colonel Binx, and JumanjiBaeby.",
    "A February 2021 Jumanji attachment gets an immediate room pile-on—Ghoulie asks what it is, Ren says `NO` / `NOWAY`, Kuki celebrates, and Rowdy calls it `the best picture`. Jumanji's own follow-up is not a long explanation; it is a side-eye at Rowdy and surprise the file has not already been cleaned up. That is a good example of Jumanji trusting the exhibit and the room reaction to do most of the joke.",
    "The same media-first instinct recurs in smaller beats: `The new 4k HD camera doesn't lie xD`, a joking nomination of Mugen's `online creation` for the Wall, and later attachment-only filing. Jumanji can both feed Screenshot Court and become part of its ongoing banter without needing a speech every time.",
  ],
  antiFanon: [
    "POSTED BY is not MADE BY, CAPTURED BY, or FEATURING. Jumanji-authored attachment posts do not identify the photographer, maker, depicted subject, or victim unless the surrounding text actually does so.",
    "The `kidnapping` line is a joke inside Aya/Mugen banter. It does not establish literal kidnapping, romance, or any offscreen relationship claim.",
    "Rowdy and Mugen are recurring Wall interaction partners here, not proof of best-friend status, exclusivity, or a closeness ranking.",
    "No formal UL title or appointment chronology is inferred from exporter-era metadata.",
  ],
};

upsertArchiveCharacter(kuki);
upsertArchiveCharacter(jumanji);