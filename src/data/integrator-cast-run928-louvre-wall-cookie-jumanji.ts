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

const cookie: ExtendedCharacter = {
  id: "cookie-juicycoochie",
  name: "Cookie",
  aliases: ["JuicyCoochie", "juicy.cookie"],
  billing: "legacy",
  role: "Archive-era artist / social cast",
  era: "2020–2021",
  logline:
    "An artist with a very practical sense of ownership: Cookie can post drawings with a cheerful little `Don't steal my art plz`, then turn around and compare wrist trouble with other artists when making things starts fighting back. The surviving pocket is small, but the combination is extremely human—proud enough to claim the work, casual enough to joke about it, and attentive to what the process is doing to her hands.",
  tags: [
    "Archive cast",
    "Louvre",
    "Artist",
    "Art attribution",
    "Creative habits",
    "Petty Crimes",
  ],
  relationships: [],
  quotes: [
    "(Don't steal my art plz :pepelove:)",
    "Is this common for artists?? I'm getting worried bout my wrist",
  ],
  claims: [
    "Cookie's stable account 361125626887520258 appears under `JuicyCoochie` and later `juicy.cookie`; the handle change stays inside one account rather than creating two people.",
    "In June 2020 Cookie posts two art attachments with `(Don't steal my art plz :pepelove:)`. The useful person read is authorship plus lighthearted attribution sensitivity: she wants the work recognized as hers without turning the room into a copyright seminar.",
    "In April 2021, while other artists are talking about hand and wrist strain, Cookie asks whether the problem is common for artists and says her own wrist hurts after laptop use, suspecting the mouse. She has no splint in that exchange. The ordinary-life detail is an artist thinking about ergonomics and pain while working, not a medical diagnosis.",
  ],
  antiFanon: [
    "This Cookie is stable account 361125626887520258. Do not merge her with Rookie Cookie, CookieUwU, or another Cookie-like name without a direct account bridge.",
    "The wrist conversation does not establish carpal tunnel syndrome or any other diagnosis. Cookie reports pain and her own suspicion about laptop/mouse use; keep it there.",
    "Two posted art attachments plus Cookie's authorship caption support that she made the work being discussed. They do not authorize broader attribution of nearby Louvre media to her.",
    "No formal UL title or appointment chronology is inferred from exporter-era metadata.",
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
    "A February 2021 Jumanji attachment gets an immediate room pile-on—Ghoulie asks what it is, Ren says `NO` / `NOWAY`, Cookie celebrates, and Rowdy calls it `the best picture`. Jumanji's own follow-up is not a long explanation; it is a side-eye at Rowdy and surprise the file has not already been cleaned up. That is a good example of Jumanji trusting the exhibit and the room reaction to do most of the joke.",
    "The same media-first instinct recurs in smaller beats: `The new 4k HD camera doesn't lie xD`, a joking nomination of Mugen's `online creation` for the Wall, and later attachment-only filing. Jumanji can both feed Screenshot Court and become part of its ongoing banter without needing a speech every time.",
  ],
  antiFanon: [
    "POSTED BY is not MADE BY, CAPTURED BY, or FEATURING. Jumanji-authored attachment posts do not identify the photographer, maker, depicted subject, or victim unless the surrounding text actually does so.",
    "The `kidnapping` line is a joke inside Aya/Mugen banter. It does not establish literal kidnapping, romance, or any offscreen relationship claim.",
    "Rowdy and Mugen are recurring Wall interaction partners here, not proof of best-friend status, exclusivity, or a closeness ranking.",
    "No formal UL title or appointment chronology is inferred from exporter-era metadata.",
  ],
};

upsertArchiveCharacter(cookie);
upsertArchiveCharacter(jumanji);
