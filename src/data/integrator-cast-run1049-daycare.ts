import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

// GammaRamma — the Daycare ledger makes the Wall micro-profile less "silent" and more selective.
{
  const gammaIndex = allCharacters.findIndex((character) => character.id === "gammaramma");
  if (gammaIndex < 0) {
    throw new Error("Run 1049 expected the existing gammaramma owner; refusing to create a duplicate.");
  }

  const gamma = allCharacters[gammaIndex] as ExtendedCharacter;
  allCharacters[gammaIndex] = {
    ...gamma,
    logline:
      "GammaRamma literally called themself shy, then kept finding low-demand ways to stay in the room anyway: reaction clicks, one clean `LMAO`, and a Daycare footprint much larger than the Wall scraps alone would suggest. Quiet does not mean absent here; it means participation without grabbing the microphone.",
    tags: unique(gamma.tags, ["Daycare", "Self-described shy", "Low-demand participation", "Group reactions"]),
    claims: unique(gamma.claims, [
      "GammaRamma's own 2021 onboarding wording includes `shy`. Across the following month the same stable account repeatedly appears in group reaction clouds, authors `LMAO` on Wall, and is independently anchored to 36 authored Daycare messages in the current Daycare ledger.",
      "Taken together, the stronger person read is shy/self-effacing presentation paired with visible low-demand social participation. Gamma does not need to dominate a thread to register attention, amusement, or affiliation.",
    ]),
    antiFanon: unique(gamma.antiFanon, [
      "`shy` is GammaRamma's own dated self-description, not a diagnosis or a permanent personality verdict.",
      "The Daycare ledger establishes authored-message presence but the direct Daycare bodies are not exposed in the reviewed packet, so do not invent Daycare dialogue or project the Wall reaction style onto every Daycare exchange.",
      "Reaction membership shows participation in those posts, not endorsement of every surrounding joke, image interpretation, or relationship implication.",
    ]),
  } as ExtendedCharacter;
  characterById.set("gammaramma", allCharacters[gammaIndex]);
}

// Kawajj — tiny Daycare count, very normal Club Only social presence.
if (!allCharacters.some((character) => character.id === "kawajj")) {
  const kawajj: ExtendedCharacter = {
    id: "kawajj",
    name: "Kawajj",
    aliases: ["ngnl0796", "shuvi"],
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2022",
    logline:
      "Two surviving Daycare messages make Kawajj look almost invisible until the adjacent rooms finish the sentence. They join Club Only fast, explain when a join cooldown keeps them out of group activity, root for everybody anyway, and can end a rules explanation to Ren with `Lol goofy`. Small room footprint; very normal social ease.",
    tags: ["Archive cast", "Daycare", "Club Only", "Fast integration", "Participation-minded", "Light teasing"],
    relationships: [
      {
        name: "Ren",
        note:
          "When a club-join cooldown blocks Kawajj from joining group activity, Ren asks which account joined, Kawajj clarifies the situation, Ren remembers the penalty and self-roasts with a clown emote, and Kawajj answers `Lol goofy`. It is comfortable lightweight teasing inside a practical exchange, not a friendship ranking.",
        href: "/characters/ren",
      },
    ],
    quotes: [
      "Gl y'all I can't join in cuz valentine just joined the club",
      "Lol goofy",
    ],
    claims: [
      "Stable account 699707838192287825 bridges the `ngnl0796` / Kawajj Daycare ledger label and the Lobby/Club Only support trail used here.",
      "Kawajj's current Daycare ledger contains only two authored messages on one date, but the same account is already participating casually in Club Only shortly after onboarding and remains participation-minded when a later join cooldown keeps them out of group activity.",
      "The useful correction is sparse Daycare authorship versus fast casual integration elsewhere. A tiny count in one room is not a personality claim about the whole person.",
    ],
    antiFanon: [
      "Do not turn a two-message Daycare count into shyness, inactivity, peripheral status, or low importance.",
      "The Ren exchange supports moment-level conversational ease and teasing only; it does not establish a special friendship tier or closeness rank.",
      "Kawajj posted a No Game No Life GIF in Club Only, but one GIF is not enough to publish a durable anime preference or fandom identity.",
      "Export-time role arrays are not used here for appointment, membership, or join chronology.",
      "The reviewed support packet includes an onboarding age string; this public dossier intentionally does not surface that personal detail.",
    ],
  };

  allCharacters.push(kawajj);
  characterById.set("kawajj", kawajj);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("kawajj")) {
    archiveCastGroup.characterIds.push("kawajj");
  }
}
