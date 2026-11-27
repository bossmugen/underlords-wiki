import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

// Run 714 Daycare: Mia's new formatting pocket deepens an existing pattern instead of
// creating a receipt-shaped Episode or manufacturing a relationship from one exchange.
// She answers an unaddressed practical question, tries syntax live until it visibly works,
// and absorbs the minor collateral damage.
const miaIndex = allCharacters.findIndex((character) => character.id === "mia");
if (miaIndex >= 0) {
  const mia = allCharacters[miaIndex] as ExtendedCharacter;

  allCharacters[miaIndex] = {
    ...mia,
    logline:
      "Turns somebody else's premise into something people can use, then learns the controls by touching them: Mia can build the poster, teach the house map, answer a formatting question nobody addressed to her, live-demo the syntax until it works, and still cheerfully tell the room to `go break it some more`.",
    tags: appendUnique(mia.tags, [
      "Daycare",
      "Demonstration-first help",
      "Tinkering",
      "Unsolicited practical help",
      "Chaos-positive",
      "Petty Crimes",
    ]),
    quotes: appendUnique(mia.quotes, [
      "Hastag then space",
      "# space",
      "# See",
      "._.",
      "go break it some more",
    ]),
    claims: appendUnique(mia.claims, [
      "On 2023-09-04, Cele asked Ren how to make giant letters. Mia was not the addressee but answered 26.201 seconds later with `Hastag then space`, iterated the hash/space syntax, and then demonstrated the result with `# See`.",
      "After Mia's live formatting demonstration, Cele answered `I-` and `Well now I cant`; Mia closed with `._.`. Together with the earlier secure `go break it some more` line, this deepens Mia's helper-versus-experimental-gremlin contradiction rather than creating a formal technical role.",
    ]),
    antiFanon: appendUnique(mia.antiFanon, [
      "The Daycare formatting exchange shows quick practical help and live experimentation. It does not establish a formal support/technical role, broad technical expertise, or ownership of Discord's formatting system.",
      "Cele's `Well now I cant` is a reaction inside this small demonstration pocket; do not inflate the exchange into a conflict, relationship claim, or closeness ranking.",
      "The nearby March 2023 `WE OFFICIALLY BROKE THE BOT FAM!` announcement does not name the bot or channel in surviving text and its attachment was not inspected here, so it is not folded into Mia's character claims.",
    ]),
  } as ExtendedCharacter;
  characterById.set("mia", allCharacters[miaIndex]);
}

// Run 714 Wall: Candy is canonically Candy / — Luna / harumasasgf, not HyaLuna.
// Her Wall sample is tiny in prose but socially legible enough to support a compact dossier.
// Vanness remains an incident-level interaction here, not a relationship lane from one reply.
const candyIndex = allCharacters.findIndex((character) => character.id === "candy");
if (candyIndex >= 0) {
  const candy = allCharacters[candyIndex] as ExtendedCharacter;

  allCharacters[candyIndex] = {
    ...candy,
    role: "Platelet",
    logline:
      "Low-verbiage and extremely room-literate: Candy can answer with `Wad00`, a custom emote or one animal noise, and on September 1, 2021 her surviving `Moo` + `Cat_Sporkle` cue is enough for six other people to keep the same register going. Tiny message, contagious premise.",
    tags: appendUnique(candy.tags, [
      "Platelet",
      "Wall",
      "Low-verbiage",
      "Reaction-first",
      "Mimetic humor",
      "Wad00",
      "Moo",
      "Petty Crimes",
    ]),
    quotes: appendUnique(candy.quotes, [
      "Wad00",
      "Wad0.0",
      "Moo",
      ":Cat_Sporkle: :Cat_Sporkle:",
    ]),
    claims: appendUnique(candy.claims, [
      "Candy's stable 2021 account is 784063021579239435 / `harumasasgf`; project canon keeps the later `— Luna` display on Candy and distinct from HyaLuna, the original 2020 Luna.",
      "Across July and August 2021, Candy repeatedly uses `Wad00`/`Wad0.0` plus custom emotes as compact Wall reactions; the August 10 `Wad00` is a true reply to Vanness self-shaming over five lost orange dracs, followed 4.700 seconds later by `:CatCry:`.",
      "On 2021-09-01, after a long Wall lull, Candy posts `Moo` and two `Cat_Sporkle` emotes. Sou, Rummy, Ren, Gilli, SaraBunny and Cookie continue the moo/Cat_Sporkle register afterward, making Candy the first surviving local cue in this recovered chain rather than the proven origin of the joke.",
    ]),
    antiFanon: appendUnique(candy.antiFanon, [
      "Candy / `— Luna` / `harumasasgf` is not HyaLuna. The shared Luna display is an identity trap, not continuity.",
      "Candy starts the surviving September 1, 2021 moo/Cat_Sporkle run recovered here, but earlier moo material exists elsewhere. Do not call her the inventor or originator of `moo`.",
      "The eleven-message Wall sample supports a low-verbiage, socially responsive style in this room; it is not a whole-person activity measure or a claim that Candy always communicated this way.",
      "The Vanness true-reply is a bounded Wall interaction, not evidence of exceptional closeness or a standalone relationship lane.",
      "Animal noises and custom emotes are room-language evidence, not literal nicknames, species bits, relationship ranks or identity claims.",
    ]),
  } as ExtendedCharacter;
  characterById.set("candy", allCharacters[candyIndex]);
}
