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

// Kiro's full narrative already owns the petty-filer / self-incriminator axis.
// The new Wall tail adds one useful structured relationship edge: Sou can leave
// an affectionate asynchronous breadcrumb and summarize Kiro in four words.
const kiroIndex = allCharacters.findIndex((character) => character.id === "kiro");
if (kiroIndex >= 0) {
  const kiro = allCharacters[kiroIndex];
  const relationships = [...(kiro.relationships ?? [])];
  if (!relationships.some((relationship) => relationship.name === "Ansun")) {
    relationships.push({
      name: "Ansun",
      note: "Sou leaves `Hi kiro if you see this i love you youre so unserious` on the Wall. The `if you see this` makes it an asynchronous breadcrumb rather than a demand for immediate attention; the affection is warm peer language, and `youre so unserious` matches Kiro's own habit of escalating a joke until somebody else can only answer `I-`.",
      href: "/characters/ansun",
    });
  }

  const quotes = [...new Set([...(kiro.quotes ?? []), "N-n-n-no..", "Who's kiro", "Being petty"])]
  allCharacters[kiroIndex] = {
    ...kiro,
    relationships,
    quotes,
    tags: [...new Set([...(kiro.tags ?? []), "Wall", "Petty Crimes", "Self-incrimination"])],
  };
  characterById.set("kiro", allCharacters[kiroIndex]);
}
