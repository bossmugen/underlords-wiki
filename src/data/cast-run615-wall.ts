import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

// Run 615 — Wall. Dainyamite's surviving authored Wall file is tiny, but five of
// seven messages are consumed by one ordinary-life controversy, which is enough
// to make the mechanism specific without pretending the file is bigger than it is.
const dainyamiteId = "dainyamite";
const dainyamiteIndex = allCharacters.findIndex((character) => character.id === dainyamiteId);

const dainyamite: Character = {
  id: dainyamiteId,
  name: "Dainyamite",
  aliases: ["gnocchi_arron", "Arron"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021–2022",
  logline:
    "Seven surviving Wall messages, five of them swallowed by mint chocolate. Dainyamite states the preference plainly, pauses to make sure Ren's enthusiastic agreement is actually sincere, then becomes visibly sillier once the ambiguity is gone — before answering Gilli's anti-mint declaration with mint-ice-cream reaction media instead of a debate.",
  tags: ["Archive cast", "Wall", "Mint chocolate", "Taste court", "Petty Crimes"],
  relationships: [
    {
      name: "RV",
      note: "Ren true-replies `ThANKSSSSS` to Dainyamite's mint-choco declaration; when Dainyamite asks whether the enthusiasm is sarcasm, Ren immediately clarifies, adds that Gilli bought mint-choco-chip birthday socks, and gets an elongated Cat-Sporkle response. Shared taste plus direct tone clarification, not a closeness ranking.",
      href: "/characters/ren",
    },
    {
      name: "Gilli",
      note: "Gilli directly announces `I hate Mint and chocolate together`; Dainyamite answers with mint-ice-cream reaction media and then gets distracted by the fact that searching `minto choco` GIFs is apparently all Cookie Run. Preference disagreement handled as a bit, not an argument.",
      href: "/characters/gilli",
    },
  ],
  quotes: [
    "mint choco is good 😮",
    "uhhh i can't tell if this is sarcasm or not 😅",
    "lmao you look up minto choco in gifs and its all cookie run 😂",
  ],
};

if (dainyamiteIndex >= 0) allCharacters[dainyamiteIndex] = dainyamite;
else allCharacters.push(dainyamite);
characterById.set(dainyamiteId, dainyamite);

// Run 615 — Kiro. Hard canon already resolves Gum / HicUUOOOOGH to Kiro and
// keeps Kiro a retired full Officer (historical Pit Boss / Minister), never a
// Sniper. The Wall packet adds the lived mechanism: Kiro files evidence, enjoys
// the pettiness, and then mock-denies even being Kiro once the room recognizes him.
const kiroIndex = allCharacters.findIndex((character) => character.id === "kiro");
if (kiroIndex >= 0) {
  const kiro = allCharacters[kiroIndex];
  const relationships = [...(kiro.relationships ?? [])];

  const upsertRelationship = (name: string, note: string, href?: string) => {
    const index = relationships.findIndex((relationship) => relationship.name === name);
    const next = href ? { name, note, href } : { name, note };
    if (index >= 0) relationships[index] = next;
    else relationships.push(next);
  };

  upsertRelationship(
    "Ansun",
    "Sou leaves `Hi kiro if you see this i love you youre so unserious` on the Wall. The `if you see this` makes it an asynchronous breadcrumb rather than a demand for immediate attention; the affection is easy peer language, and `youre so unserious` fits Kiro's habit of making the case against himself funnier instead of escaping it.",
    "/characters/ansun",
  );
  upsertRelationship(
    "Daya",
    "Daya asks whether `HicUUOOOOGH` is Kiro; Kiro answers `N-n-n-no..`, Momo immediately confirms it, and Kiro follows with `Who's kiro`. Daya is recognizing the person through display-name chaos while Kiro turns recognition itself into another denial bit.",
    "/characters/daya",
  );
  upsertRelationship(
    "Gilli",
    "Kiro can post an exhibit labeled `Being petty`; Gilli's immediate question is whether Kiro actually got the thing being chased. Kiro's later `No` leaves the evidence-room rhythm intact: the filing mattered enough to post even when the mission apparently failed.",
    "/characters/gilli",
  );

  const quotes = [...new Set([
    ...(kiro.quotes ?? []),
    "Being petty",
    "N-n-n-no..",
    "Who's kiro",
    "Body = deceased / Wig = still living",
  ])];

  allCharacters[kiroIndex] = {
    ...kiro,
    role: "retired Officer · former Pit Boss / Minister",
    logline:
      "Retired full Officer who can file an exhibit under `Being petty`, enjoy the public evidence game, and then answer recognition with `N-n-n-no..` / `Who's kiro`. Kiro understands Screenshot Court well enough to become both filer and self-incriminator on purpose.",
    relationships,
    quotes,
    tags: [...new Set([...(kiro.tags ?? []), "Wall", "Petty Crimes", "Evidence filer", "Self-incrimination", "Display-name chaos"])],
  };
  characterById.set("kiro", allCharacters[kiroIndex]);
}
